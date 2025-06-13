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
        Schema::create('devis', function (Blueprint $table) {
            $table->id();
            $table->string('descriptionDevis');
            $table->string('numeroDevis');
            $table->string('typeTravaux');
            $table->string('contrainteDev')->nullable();
            $table->integer('effectifP');
            $table->integer('dureeLivrais');
            $table->boolean('peinture')->nullable()->default(false);
            $table->date('dateEmissDevi');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('devis');
    }
};
