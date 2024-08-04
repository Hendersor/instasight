import { NavBar } from "../components/NavBar"

export const LogIn = () => {
  return (
    <section className="w-full h-screen border-solid border-2 border-sky-500 flex flex-col ">
        <NavBar/>
        <form action="" className="border-solid border border-black w-4/5 h-4/5 my-0 rounded-lg mx-auto flex flex-col justify-evenly my-5">
            <h1 className="text-3xl text-center">Log in</h1>

            <div className="flex justify-between px-5">
                <label>Email</label>
                <input className="border-solid border border-black rounded-md" type="email" />
            </div>

            <div className="flex justify-between px-5">
                <label>Password</label>
                <input className="border-solid border border-black rounded-md" type="password" />
            </div>

            <button className=" w-24 h-9 rounded-lg self-center bg-black text-white pointer">
                Sign in
            </button>
        </form>
    </section>
  )
}
