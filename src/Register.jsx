
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";



const Register = () => {

	const {createPerson} = useContext(AuthContext)


// Event Handler
const handleRegister = (event) => {

    event.preventDefault();
    const form = event.target;
    const userName = form.userName.value;
    const email = form.email.value;
    const password = form.password.value;

    const newUser = { userName,email,password };
    console.log(newUser);

	// Create Person in ForeBase
	createPerson(email,password)
	.then(
		result =>{
			console.log(result.person)
		}
	)
	.catch(
		error => {
			console.error(error)
		}
	)

     fetch("http://localhost:5000/register_users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((req) => req.json())
      .then((data) => {
		form.reset()
        console.log(data);
		alert('Register Successfully')
      });


  };


    return (
        <div>


            <div className="flex justify-center items-center py-12">
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign up</h1>
		<p className="text-sm dark:text-gray-600">Sign up to access our Service</p>
	</div>
	<form onSubmit={handleRegister} noValidate="" action="" className="space-y-12">
		<div className="space-y-4">
			<div>
				<label htmlFor="Name" className="block mb-2 text-sm">Name</label>
				<input required type="name" name="userName" id="name" placeholder="Abdullah al noman" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			{/* <div>
				<label htmlFor="" className="block mb-2 text-sm">Phone Number</label>
				<input required type="name" name="number" id="name" placeholder="01764308876" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div> */}
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input required type="email" name="email" id="email" placeholder="noman@gmail.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm"> Create Password</label>
				</div>
				<input required type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-600">Already have an account yet?
                <NavLink to="/login">
                <a className="hover:underline dark:text-violet-600">Log in</a>.
                </NavLink>
				
			</p>
		</div>
	</form>
</div>
            </div>



        </div>
    );
};

export default Register;