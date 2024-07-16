import { NavBar } from "../components/NavBar"

export const LogIn = () => {
  return (
    <section className="w-full h-screen border-solid border-2 border-sky-500 flex flex-col ">
        <NavBar/>
        <form action="" className="border-solid border-2 border-sky-500 w-4/5 h-4/5 my-0 mx-auto">
            <h1 className="text-3xl text-center">Sign in</h1>

            <div className="border-solid border-2 border-black">
                <label>Email</label>
                <input type="email" />
            </div>

            <div className="border-solid border-2 border-black">
                <label>Password</label>
                <input type="password" />
            </div>

            <button>Sign in</button>
        </form>

    </section>
  )
}
