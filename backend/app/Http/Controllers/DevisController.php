<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\devis;
use App\Models\besoin;
use App\PDF\TicketPDF;

class DevisController extends Controller
{
    public function afficheDevis(){
        $devis = devis::with('besoin')->get();
        return response()->json($devis);
    }

    public function impression($id){

        $devis = devis::with('besoin')->findOrFail($id);
        $besoins= $devis->besoin;
        $pdf = new TicketPDF();
        $pdf->AddPage();
        $pdf->Header();
        $pdf->SetFont('Arial', 'B', 14);
        $pdf->Cell(0, 10 , 'INFORMATIONS SUR LE DEVIS',0 , 1 ,'C');
        $pdf->ln(10);
        $pdf->SetFont('Arial', '',12);
        $pdf->Cell(40,10, 'Devis titre:',0, 'C');
        $pdf->cell(0,10, $devis->descriptionDevis,0,1);
        $pdf->ln(10);
        $pdf->SetFont('Arial', 'B', 14);
        $pdf->Cell(0,10, $besoins->designationB . ' | ' . $besoins->quantiteB,0,1);
        $pdf->Cell(0,10, 'Bonjour ou Bonsoir',0 ,1,);
        $pdf->SetFont('Times', '', 12);
        $pdf->MultiCell(40,10, $devis->numeroDevis,0,1);
        $pdf->ln(20);
        $pdf->SetFont('Times','',11);
        $pdf->Cell(0,10,$devis->typeTravaux,0,1);
        $pdf->SetFont('Times','',11);
        $pdf->Cell(0,10,$devis->contrainteDev,0,1);
        $pdf->SetFont('Times','',11);
        $pdf->Cell(0,10,$devis->effectifP,0,1);
        $pdf->footer();
        $result= $pdf->Output('devis.pdf','S');
       return response($result,200)->header('Content-Type','application/pdf')->header('Content-Disposition','inline;fileName="devis.pdf"');
    }
}
