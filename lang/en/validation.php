<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted' => ':attribute debe ser aceptado.',
    'accepted_if' => ':attribute debe ser aceptado cuando :other es :value.',
    'active_url' => ':attribute no es una URL válida.',
    'after' => ':attribute debe ser una fecha después de :date.',
    'after_or_equal' => ':attribute debe ser una fecha después o igual a :date.',
    'alpha' => ':attribute debe contener solo letras.',
    'alpha_dash' => ':attribute debe contener solo letras, números, guiones y guiones bajos.',
    'alpha_num' => ':attribute debe contener solo letras y números.',
    'array' => ':attribute debe ser un arreglo.',
    'ascii' => ':attribute debe contener solo caracteres alfanuméricos de un solo byte y símbolos.',
    'before' => ':attribute debe ser una fecha antes de :date.',
    'before_or_equal' => ':attribute debe ser una fecha antes o igual a :date.',
    'between' => [
        'array' => ':attribute debe tener entre :min y :max elementos.',
        'file' => ':attribute debe tener entre :min y :max kilobytes.',
        'numeric' => ':attribute debe estar entre :min y :max.',
        'string' => ':attribute debe tener entre :min y :max caracteres.',
    ],
    'boolean' => ':attribute debe ser verdadero o falso.',
    'confirmed' => ':attribute no coincide.',
    'current_password' => 'La contraseña es incorrecta.',
    'date' => ':attribute no es una fecha válida.',
    'date_equals' => ':attribute debe ser una fecha igual a :date.',
    'date_format' => ':attribute no coincide con el formato :formato.',
    'decimal' => ':attribute debe tener :decimal lugares decimales.',
    'declined' => ':attribute debe ser declinado.',
    'declined_if' => ':attribute debe ser declinado cuando :other es :value.',
    'different' => ':attribute y :other deben ser diferentes.',
    'digits' => ':attribute debe tener :digits dígitos.',
    'digits_between' => ':attribute debe tener entre :min y :max dígitos.',
    'dimensions' => ':attribute tiene dimensiones de imagen inválidas.',
    'distinct' => ':attribute tiene un valor duplicado.',
    'doesnt_end_with' => ':attribute no puede terminar con ninguno de los siguientes: :values.',
    'doesnt_start_with' => ':attribute no puede comenzar con ninguno de los siguientes: :values.',
    'email' => ':attribute debe ser una dirección de correo electrónico válida.',
    'ends_with' => ':attribute debe terminar con uno de los siguientes: :values.',
    'enum' => ':attribute seleccionado no es válido.',
    'exists' => ':attribute seleccionado no es válido.',
    'file' => ':attribute debe ser un archivo.',
    'filled' => ':attribute debe tener un valor.',
    'gt' => [
        'array' => ':attribute debe tener más de :value elementos.',
        'file' => ':attribute debe ser mayor que :value kilobytes.',
        'numeric' => ':attribute debe ser mayor que :value.',
        'string' => 'El :attribute no puede tener más de :value caracteres.',
    ],
    'gte' => [
        'array' => ':attribute debe tener :value elementos o más.',
        'file' => ':attribute debe ser mayor o igual a :value kilobytes.',
        'numeric' => ':attribute debe ser mayor o igual a :value.',
        'string' => ':attribute debe ser mayor o igual a :value caracteres.',
    ],
    'image' => ':attribute debe ser una imagen.',
    'in' => ':attribute seleccionado no es válido.',
    'in_array' => ':attribute no existe en :other.',
    'integer' => ':attribute debe ser un número entero.',
    'ip' => ':attribute debe ser una dirección IP válida.',
    'ipv4' => ':attribute debe ser una dirección IPv4 válida.',
    'ipv6' => ':attribute debe ser una dirección IPv6 válida.',
    'json' => ':attribute debe ser una cadena JSON válida.',
    'lowercase' => ':attribute debe estar en minúsculas.',
    'lt' => [
        'array' => ':attribute debe tener menos de :value elementos.',
        'file' => ':attribute debe ser menor que :value kilobytes.',
        'numeric' => ':attribute debe ser menor que :value.',
        'string' => ':attribute debe ser menor que :value caracteres.',
    ],
    'lte' => [
        'array' => ':attribute no debe tener más de :value elementos.',
        'file' => ':attribute debe ser menor o igual a :value kilobytes.',
        'numeric' => ':attribute debe ser menor o igual a :value.',
        'string' => ':attribute debe ser menor o igual a :value caracteres.',
    ],
    'mac_address' => ':attribute debe ser una dirección MAC válida.',
    'max' => [
        'array' => ':attribute no debe tener más de :max elementos.',
        'file' => ':attribute no debe ser mayor que :max kilobytes.',
        'numeric' => ':attribute no debe ser mayor que :max.',
        'string' => ':attribute no debe ser mayor que :max caracteres.',
    ],
    'max_digits' => ':attribute no debe tener más de :max dígitos.',
    'mimes' => ':attribute debe ser un archivo de tipo: :values.',
    'mimetypes' => ':attribute debe ser un archivo de tipo: :values.',
    'min' => [
        'array' => ':attribute debe tener al menos :min elementos.',
        'file' => ':attribute debe ser de al menos :min kilobytes.',
        'numeric' => ':attribute debe ser de al menos :min.',
        'string' => ':attribute debe ser de al menos :min caracteres.',
    ],
    'min_digits' => ':attribute debe tener al menos :min dígitos.',
    'missing' => ':attribute debe faltar.',
    'missing_if' => ':attribute debe faltar cuando :other es :value.',
    'missing_unless' => ':attribute debe faltar a menos que :other sea :value.',
    'missing_with' => ':attribute debe faltar cuando :values está presente.',
    'missing_with_all' => ':attribute debe faltar cuando :values están presentes.',
    'multiple_of' => ':attribute debe ser un múltiplo de :value.',
    'not_in' => ':attribute seleccionado no es válido.',
    'not_regex' => 'El formato de :attribute no es válido.',
    'numeric' => ':attribute debe ser un número.',
    'password' => [
        'letters' => ':attribute debe contener al menos una letra.',
        'mixed' => ':attribute debe contener al menos una letra mayúscula y una minúscula.',
        'numbers' => ':attribute debe contener al menos un número.',
        'symbols' => ':attribute debe contener al menos un símbolo.',
        'uncompromised' => ':attribute proporcionado ha aparecido en una fuga de datos. Por favor, elige un :attribute diferente.',
    ],
    'present' => ':attribute debe estar presente.',
    'prohibited' => ':attribute campo está prohibido.',
    'prohibited_if' => ':attribute campo está prohibido cuando :other es :value.',
    'prohibited_unless' => ':attribute campo está prohibido a menos que :other esté en :values.',
    'prohibits' => ':attribute campo prohíbe que :other esté presente.',
    'regex' => 'El formato de :attribute no es válido.',
    'required' => ':attribute campo es obligatorio.',
    'required_array_keys' => ':attribute debe contener entradas para: :values.',
    'required_if' => ':attribute campo es obligatorio cuando :other es :value.',
    'required_if_accepted' => ':attribute campo es obligatorio cuando :other es aceptado.',
    'required_unless' => ':attribute campo es obligatorio a menos que :other esté en :values.',
    'required_with' => ':attribute campo es obligatorio cuando :values está presente.',
    'required_with_all' => ':attribute campo es obligatorio cuando :values están presentes.',
    'required_without' => ':attribute campo es obligatorio cuando :values no está presente.',
    'required_without_all' => ':attribute campo es obligatorio cuando ninguno de :values está presente.',
    'same' => ':attribute y :other deben coincidir.',
    'size' => [
        'array' => ':attribute debe contener :size elementos.',
        'file' => ':attribute debe ser de :size kilobytes.',
        'numeric' => ':attribute debe ser de :size.',
        'string' => ':attribute debe ser de :size caracteres.',
    ],
    'starts_with' => ':attribute debe comenzar con uno de los siguientes: :values.',
    'string' => ':attribute debe ser una cadena.',
    'timezone' => ':attribute debe ser una zona horaria válida.',
    'unique' => ':attribute ya ha sido tomado.',
    'uploaded' => 'La carga de :attribute falló.',
    'uppercase' => ':attribute debe estar en mayúsculas.',
    'url' => ':attribute debe ser una URL válida.',
    'ulid' => ':attribute debe ser un ULID válido.',
    'uuid' => ':attribute debe ser un UUID válido.',



    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [
        'email' => 'El correo electrónico',
        'password' => 'La contraseña',
        'project' => 'El nombre del proyecto',
        'name' => 'El nombre',
        'lastname' => 'El apellido',
        'phone_number' => 'El número de teléfono',
        'work_institution' => 'La institución laboral',
        'college_institution' => 'La institución educativa',
        'announcement' => 'El anuncio',
        'description' => 'La descripción',
        'correct_answer' => 'La respuesta correcta',
        'user_id' => 'ID de usuario',
        'autosurvey_id' => 'ID de autosurvey',
        'question_id' => 'ID de pregunta',
    ]

];
