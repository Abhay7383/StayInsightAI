import { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [formData,setFormData]=useState({

    name:"",
    email:"",
    password:""

  });

  const handleChange=(e)=>{

    setFormData({

      ...formData,

      [e.target.name]:e.target.value

    });

  };

  const handleSubmit=async(e)=>{

    e.preventDefault();

    const data=await registerUser(formData);

    if(data.success){

      alert("Registration Successful");

      navigate("/login");

    }

    else{

      alert(data.message);

    }

  };

  return(

    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <form

      onSubmit={handleSubmit}

      className="bg-white p-8 rounded-xl shadow-lg w-96"

      >

        <h2 className="text-3xl font-bold mb-6 text-center">

          Register

        </h2>

        <input

        type="text"

        name="name"

        placeholder="Name"

        className="w-full border p-3 rounded mb-4"

        onChange={handleChange}

        />

        <input

        type="email"

        name="email"

        placeholder="Email"

        className="w-full border p-3 rounded mb-4"

        onChange={handleChange}

        />

        <input

        type="password"

        name="password"

        placeholder="Password"

        className="w-full border p-3 rounded mb-5"

        onChange={handleChange}

        />

        <button

        className="w-full bg-green-600 text-white p-3 rounded"

        >

          Register

        </button>

        <p className="text-center mt-5">

          Already have an account?

          <Link

          to="/login"

          className="text-blue-600 ml-2"

          >

            Login

          </Link>

        </p>

      </form>

    </div>

  );

}

export default Register;