import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-white" 
        //style={{backgroundColor:"#CCCCCC"}}
        >
            <div>
                <Link href="/">
                <img
                        className="mx-auto mb-4 max-w-full h-auto"
                        src="/images/GAPIC_LOGO.png"
                        alt="Descripción de la imagen"
                        style={{ maxWidth: "150px", height: "auto" }}
                    />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-gray-200 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
