<?php

namespace App\PDF;
 use FPDF;

 class TicketPDF extends FPDF{

     public function Header(){
        $this->SetFillColor(255,255,255);
        $this->Rect(10,10,$this->GetPageWidth() * 0.95, 50 ,'F');
        $this->Image(public_path('logo.jpg'), $this->GetPageWidth() / 2 - 15 , 50);


    }

     public function footer(){

        $this->SetDrawColor(0 , 0, 0);
        $this->Line(10, $this->GetPageHeight()-10, $this->GetPageWidth()-10,$this->GetPageHeight()-10);
        $this->setFont('Arial','',10);
        $this->SetTextColor(0, 0 , 0);
        $this->SetXY(10, $this->GetPageHeight()-15);
        $this->Cell(0,10, 'performance-responsabilite-integriter-loyauter-professionnalisme-innovation',0 ,0, 'C');

     }
 }
