import { Link, Head } from "@inertiajs/react";

export default function Welcome(props) {
    return (
        <>
          <Head title="Welcome" />
          <div className="bg-white">
            <div className="container mx-auto py-12 text-center">
              <h1 className="text-4xl font-bold mb-4">GAPIC</h1>
              <h6 className="text-sm font-normal text-gray-500 mb-8">
                Developed by Ocean
              </h6>
              <div className="flex items-center justify-center space-x-4 mb-8">
                {props.auth.user ? (
                  <Link
                    href={route("dashboard")}
                    className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                  >
                    ENTER GAPIC
                  </Link>
                ) : (
                  <>
                    <Link
                      href={route("login")}
                      className="inline-flex items-center px-4 py-2 border-2 border-gray-800 rounded-md font-semibold text-xs text-gray-800 uppercase tracking-widest hover:border-gray-700 hover:bg-gray-700 focus:border-gray-700 focus:bg-gray-700 active:border-gray-900 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 hover:text-white"
                    >
                      Sign In
                    </Link>
                    <Link
                      href={route("register")}
                      className="inline-flex items-center px-4 py-2 border-2 border-gray-800 rounded-md font-semibold text-xs text-gray-800 uppercase tracking-widest hover:border-gray-700 hover:bg-gray-700 focus:border-gray-700 focus:bg-gray-700 hover:text-white active:border-gray-900 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="max-w-full h-auto"
                  src="https://blog.peoplenext.com/hubfs/evaluaci%C3%B3n%20de%20desempe%C3%B1o%20constante%20para%20los%20empleados_imgdest.png"
                  alt=""
                  style={{ maxWidth: "400px", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </>
      );
}
