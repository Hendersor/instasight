import { useNavigate } from "react-router-dom";

const ForgotPassword = ():JSX.Element => {
    const navigate = useNavigate();
  return (
    <div className="h-[80vh] flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          ¿Olvidaste tu contraseña?
        </h2>

        <p className="text-sm text-gray-600 mb-4 text-center">
          Ingresa tu correo electrónico y te enviaremos instrucciones para
          recuperar el acceso.
        </p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Enviar enlace
          </button>
        </form>

        <div className="mt-4 text-center">
          <a
            onClick={() => navigate("/login")}
            className="block text-center mt-4 text-blue-500 hover:underline"
          >
            Volver al inicio de sesión
          </a>
        </div>
      </div>
    </div>
  );
};

export { ForgotPassword };
