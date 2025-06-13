<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('demande_achats', function (Blueprint $table) {
            $table->id();
            $table->text('titreDa');
            $table->string('numeroDa');
            $table->dateTime('dateEmissDa');
            $table->string('nomFourniss');
            $table->string('numFourniss');
            $table->string('objetTravaux');
            $table->string('serviceDemandeur');
            $table->foreignId('besoin_id')->constrained();
            $table->foreignId('devis_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('demande_achats');
    }
};
