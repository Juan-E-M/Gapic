import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import Swal from "sweetalert2";

const Question = ({ question, i, handleInputChange }) => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
        handleInputChange(question.id, !isChecked);
    };

    return (
        <div
            className={`bg-white p-2 rounded shadow-md flex items-center justify-between cursor-pointer ${
                isChecked ? "bg-gray-200" : ""
            }`}
            onClick={toggleCheckbox}
        >
            <div className="block text-sm font-bold text-gray-700">
                {i + 1}.{question.description}
            </div>
            <input type="checkbox" checked={isChecked}/>
        </div>
    );
};

const generateInitialAnswersState = () => {
    const initialAnswers = {};
    for (let i = 1; i <= 90; i++) {
        initialAnswers[i] = false;
    }
    return initialAnswers;
};


export default function Autosurvey(props) {
    const { auth, questions } = props;



    const { data, setData, post, processing, errors, reset } = useForm({
        user_id: auth.user.id,
        answers: generateInitialAnswersState(),
    });

    const handleInputChange = (questionId, answer) => {
        setData((prevData) => ({
            ...prevData,
            answers: {
                ...prevData.answers,
                [questionId]: answer,
            },
        }));
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("autosurvey.store"),
            {
                onSuccess: () => {
                    return Swal.fire({
                        title: "Éxito",
                        text: "Autoevaluación completada",
                        icon: "success",
                    })
                },
            }
        );
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Autoevaluación
                </h2>
            }
        >
            <Head title="Autoevaluación" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-3 bg-opacity-50">
                        <h4>Marca solo las verdaderas</h4>
                        <br />
                        <form onSubmit={submit}>
                            <div className="grid grid-cols-1 gap-1">
                                {questions.map((question, i) => (
                                    <Question
                                        key={i}
                                        question={question}
                                        i={i}
                                        handleInputChange={handleInputChange}
                                    />
                                ))}
                            </div>
                            <div className="flex justify-end">
                                <button className="mt-8 bg-indigo-500 text-sm text-white py-2 px-4 rounded hover:bg-indigo-700">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
