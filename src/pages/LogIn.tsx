import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginSchema, LoginData } from "../schemas/login.Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser } from "../API/loginUser"
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useState } from "react";

const LogIn = (): JSX.Element => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useContext(AuthContext)!

  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({
    resolver: zodResolver(loginSchema)
  })



  const onSubmit = async (inputData: LoginData) => {
    setIsLoading(true)
    try {
      const data = await loginUser(inputData);

      const userSession = {
        id: data.user.id,
        username: data.user.username,
        email: data.user.email
      };

      const token = data.token;

      login(userSession, token);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);

    } finally {
      setIsLoading(false);
    }
  }



  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-screen">
      <div className="flex-grow flex items-center justify-center">
        <div className="border-2 border-gray-200 p-6 rounded-md shadow-lg bg-white">
          <h1 className="text-center text-3xl font-bold mb-4">Log In</h1>
          <div className="mb-4">
            <p className="mb-1">Email</p>
            <input
              {...register("email")}
              type="email"
              className="w-full p-2 border border-gray-300 rounded shadow-sm"
            />
            {errors.email && (<p className="text-sm text-red-500">{errors.email.message}</p>)}

          </div>

          <div className="mb-4">
            <p className="mb-1">password</p>
            <input
              {...register("password")}
              type="password"
              className="w-full p-2 border border-gray-300 rounded shadow-sm"
            />
            {errors.password && (<p className="text-sm text-red-500">{errors.password.message}</p>)}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full p-2 text-white rounded shadow-md transition-colors duration-200 text-sm flex items-center justify-center
    ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Loading...
              </>
            ) : (
              "Log In"
            )}
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
    </form>
  );
};

export { LogIn }
