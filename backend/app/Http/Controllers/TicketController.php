<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ticket;
use App\Models\User;
use App\Models\client;
use Illuminate\Support\Facades\DB;
use App\PDF\TicketPDF;


class TicketController extends Controller
{
    public function login(Request $request)

    {

        $credentials = $request->only('email', 'password');

             if(Auth::attempt($credentials)) {
                    $user=Auth::user();
                    $token=$user->createToken('authToken')->plainTextToken;

                    return response()->json(
                        [
                            'token'=>$token,
                            'user'=>$user,
                        ]);
                }

            return response()->json([
                'error'=>'Invalid credentials'
            ],401);
    }

    public function afficheCommande(){

        $commande= bonCommande::with('besoin')->get();
        return response()->json($commande);

    }
   public function affiche(){

        $tickets= ticket::with('client')->get();
        return response()->json($tickets);

   }
   public function afficheB(){

    $tickets= ticket::with('client')->get();
    return response()->json($tickets);
   }
   public function recupereUsers(){

        $usr= new User();
        $dataU = $usr->getusers();
        return response()->json($dataU);
   }

   public function recupere(){

      $clt = new client();
      $data= $clt->getclients();
      return response()->json($data);

   }
   public function ajoutData(Request $request){

       try{

         $tick= new ticket();
         $tick->titreT= $request['title'];
         $tick->descriptionT= $request['description'];
         $tick->dateHeureT= $request['datetime'];
         $tick->user_id = $request['user_id'];
         $tick->client_id = $request['client_id'];
         $tick->save();
         return response()->json(['success'=>true]);

       }catch(Exception $e){
         return response()->json(['success'=>false]);
       }
   }

   public function impression($id){

          $ticket=ticket::with('client')->findOrFail($id);
          $clients= $ticket->client;
          $pdf = new TicketPDF();
          $pdf->AddPage();
          $pdf->Header();
          $pdf->SetFont('Arial', 'B', 14);
          $pdf->Cell(0, 10 , 'INFORMATIONS SUR LE TICKET',0 , 1 ,'C');
          $pdf->ln(10);
          $pdf->SetFont('Arial', '',12);
          $pdf->Cell(40,10, 'Ticket titre:',0, 'C');
          $pdf->cell(0,10, $ticket->titreT,0,1);
          $pdf->ln(10);
          $pdf->SetFont('Arial', 'B', 14);
          $pdf->Cell(0,10, $clients->nomClient . ' | ' . $clients->emailClt,0,1);
          $pdf->Cell(0,10, 'Bonjour ou Bonsoir',0 ,1,);
          $pdf->SetFont('Times', '', 12);
          $pdf->MultiCell(40,10, $ticket->descriptionT,0,1);
          $pdf->ln(20);
          $pdf->SetFont('Times','',11);
          $pdf->Cell(0,10,$clients->numeroFixe,0,1);
          $pdf->SetFont('Times','',11);
          $pdf->Cell(0,10,$clients->numeroMobile,0,1);
          $pdf->SetFont('Times','',11);
          $pdf->Cell(0,10,$clients->emailClt,0,1);
          $pdf->footer();
          $result= $pdf->Output('ticket.pdf','S');

         return response($result,200)->header('Content-Type','application/pdf')->header('Content-Disposition','inline;fileName="ticket.pdf"');

     }

    public function deleteTickets($id){

        try{

          $ticket= ticket::find($id);
          $ticket->delete();

    //   if(!$ticket){
    //     return response()->json(['error'=>'Ticket non trouver'],404);
    //   }

     return response()->json(['Message'=>'Le ticket a ete supprimer avec success']);

   } catch(\Exception $e){

        return response()->json(['error'=>'une erruer s\'est produite lors de la suppression du ticket.'],500);
    }


     }
}
