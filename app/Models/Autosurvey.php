<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Autosurvey extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id'
    ];

    public function questions()
    {
        return $this->belongsToMany(Question::class, 'question_autosurvey', 'autosurvey_id', 'question_id')->withPivot('answer');    
    }

    protected $appends = ['score'];
    public function getScoreAttribute()
    {
        $totalScore = 0;
        foreach ($this->questions as $question) {
            $totalScore += $question->pivot->answer == $question->correct_answer ? 1 : 0;
        }
        return $totalScore;
    }
}
