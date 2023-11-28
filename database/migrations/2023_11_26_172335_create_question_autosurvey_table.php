<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('question_autosurvey', function (Blueprint $table) {
            $table->id();
            $table->boolean('answer');
            $table->unsignedBigInteger('autosurvey_id')->nullable();
            $table->foreign('autosurvey_id')
                ->references('id')
                ->on('autosurveys')
                ->onDelete('cascade');
                $table->unsignedBigInteger('question_id')->nullable();
            $table->foreign('question_id')
                ->references('id')
                ->on('questions')
                ->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('question_autosurvey');
    }
};
