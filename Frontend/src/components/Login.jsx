import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"

export const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data)

  return (
    <div className="">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-[700] h-80">
          <form onSubmit={handleSubmit(onSubmit)} >
            {/* if there is a button in form, it will close the modal */}
            <Link to='/'
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById('my_modal_3').closest()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4  space-y-2 ">
              <span>Email</span>
              <br />
              <input type="email"
                placeholder="Enter your email "
                className="w-80 px-3 border rounded outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className="text-sm text-red-500">*email is required</span>}
            </div>
            <div className="mt-4  space-y-2 ">
              <span >Password</span>
              <br />
              <input type="text"
                placeholder="Enter your password"
                className="w-80 px-3 border rounded outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className="text-sm text-red-500">*Password is required</span>}
            </div>
            {/* buttton  */}
            <div className="flex justify-around mt-4">
              <button className=" bg-pink-500 rounded-md p-1 px-3 text-white hover:bg-pink-700">Login</button>
              <p >
                Not Registered?

                <Link to="/signup" className="underline  text-blue-500 cursor-pointer">  Signup
                </Link>{" "}
              </p>

            </div>

          </form>
        </div>

      </dialog>
    </div>
  )
}

