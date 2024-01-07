<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;
    protected $fillable = [
        'description',
    ];

    public function autosurveys()
    {
        return $this->belongsToMany(Autosurvey::class, 'question_autosurvey', 'question_id', 'autosurvey_id')->withPivot('answer');
    }
}
