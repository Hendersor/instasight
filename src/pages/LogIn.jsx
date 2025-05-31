import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col h-screen">
      <div className="flex-grow flex items-center justify-center">
        <div className="border-2 border-gray-200 p-6 rounded-md shadow-lg bg-white">
          <h1 className="text-center text-3xl font-bold mb-4">Log In</h1>
          <div className="mb-4">
            <p className="mb-1">Email</p>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded shadow-sm"
            />
          </div>

          <div className="mb-4">
            <p className="mb-1">password</p>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded shadow-sm"
            />
          </div>

          <button className="w-full p-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600">
            Log In
          </button>
          <a
            onClick={() => navigate("/forgot-password")}
            className="block text-center mt-4 text-blue-500 hover:underline"
          >
            Forgot password?
          </a>
          <p className="text-center mt-2 text-gray-600">
            Dont have an account?{" "}
            <a onClick={() => navigate("/signin")} className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export {LogIn}
