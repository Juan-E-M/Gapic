import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register(props) {
    const {roles} = props
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        lastname: '',
        email: '',
        phone_number: '',
        work_institution: '',
        college_institution: '',
        announcement: '',
        project: '',
        roles:[],
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const handleChange2 = (event) => {
        const { name, options } = event.target;
        const selectedValues = Array.from(options)
            .filter((option) => option.selected)
            .map((option) => option.value);

        setData((prevData) => ({
            ...prevData,
            [name]: selectedValues,
        }));
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('registro'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit} className="grid grid-cols-2 gap-4">
                <div>
                    <InputLabel htmlFor="name" value="Nombre" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={handleOnChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="lastname" value="Apellidos" />

                    <TextInput
                        id="lastname"
                        name="lastname"
                        value={data.lastname}
                        className="mt-1 block w-full"
                        autoComplete="lastname"
                        onChange={handleOnChange}
                        required
                    />

                    <InputError message={errors.lastname} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={handleOnChange}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="phone_number" value="Teléfono" />

                    <TextInput
                        id="phone_number"
                        name="phone_number"
                        value={data.phone_number}
                        className="mt-1 block w-full"
                        autoComplete="phone_number"
                        type="number"
                        onChange={handleOnChange}
                        required
                    />

                    <InputError
                        message={errors.phone_number}
                        className="mt-2"
                    />
                </div>

                <div>
                    <InputLabel
                        htmlFor="work_institution"
                        value="Institución"
                    />

                    <TextInput
                        id="work_institution"
                        name="work_institution"
                        value={data.work_institution}
                        className="mt-1 block w-full"
                        autoComplete="work_institution"
                        onChange={handleOnChange}
                        required
                    />

                    <InputError
                        message={errors.work_institution}
                        className="mt-2"
                    />
                </div>

                <div>
                    <InputLabel
                        htmlFor="college_institution"
                        value="Universidad"
                    />

                    <TextInput
                        id="college_institution"
                        name="college_institution"
                        value={data.college_institution}
                        className="mt-1 block w-full"
                        autoComplete="college_institution"
                        onChange={handleOnChange}
                        required
                    />

                    <InputError
                        message={errors.college_institution}
                        className="mt-2"
                    />
                </div>

                <div>
                    <InputLabel
                        htmlFor="announcement"
                        value="Nombre de la convocatoria"
                    />

                    <TextInput
                        id="announcement"
                        name="announcement"
                        value={data.announcement}
                        className="mt-1 block w-full"
                        autoComplete="announcement"
                        onChange={handleOnChange}
                        required
                    />

                    <InputError
                        message={errors.announcement}
                        className="mt-2"
                    />
                </div>

                <div>
                    <InputLabel
                        htmlFor="project"
                        value="Nombre del proyecto"
                    />

                    <TextInput
                        id="project"
                        name="project"
                        value={data.project}
                        className="mt-1 block w-full"
                        autoComplete="project"
                        onChange={handleOnChange}
                        required
                    />

                    <InputError
                        message={errors.project}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Contraseña" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={handleOnChange}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirmar contraseña"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={handleOnChange}
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div>
                    <InputLabel
                        htmlFor="roles"
                        value="Autoevaluación"
                    />

                    <select
                        multiple
                        size={3}
                        id="roles"
                        name="roles"
                        value={data.roles}
                        className="mt-1 block w-full"
                        autoComplete="roles"
                        onChange={handleChange2}
                        required
                    >
                        <option value="" disabled>
                            Selecciona 1 o varios
                        </option>
                        {roles.map((rol)=>(
                            <option key={rol.id} value={rol.id}>{rol.name}</option>
                        ))}
                    </select>
                    <InputError
                        message={errors.roles}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4 col-span-2 flex items-center justify-center">
                    <PrimaryButton
                        className="w-full flex justify-center"
                        disabled={processing}
                    >
                        Registrar
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
