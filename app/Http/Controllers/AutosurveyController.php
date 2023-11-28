<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Autosurvey;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

class AutosurveyController extends Controller
{
    public function autosurvey()
    {
        $questions = Question::all();
        return Inertia::render('Autosurvey/Autosurvey', [
            'questions' => $questions,
        ]);
    }

    public function autosurvey_store(Request $request)
    {
        $user_id = $request->input('user_id');
        $answers = $request->input('answers');
        $survey = Autosurvey::create(['user_id' => $user_id]);
        foreach ($answers as $question_id => $answer) {
            $survey->questions()->attach($question_id, ['answer' => $answer]);
        }
        return Inertia::location(route('autosurvey.information', ['user_id' => $user_id]));
    }

    public function autosurvey_information($user_id)
    {
        $user = User::with('autosurveys')->find($user_id);

        $autosurveys_number = $user->autosurveys->count();
        $autosurveys = $user->autosurveys()
            ->select('id', 'created_at')
            ->orderBy('created_at', 'desc')
            ->paginate(5);

        $autosurveys->getCollection()->transform(function ($autosurvey) {
            $autosurvey->score = $autosurvey->getScoreAttribute();
            return collect($autosurvey->toArray())->only(['id', 'created_at', 'score']);
        });

        return Inertia::render('Autosurvey/Information', [
            'autosurveys_number' => $autosurveys_number,
            'autosurveys' => $autosurveys,
        ]);
    }
}
