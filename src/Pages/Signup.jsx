import React, { useState } from "react";
// import axios from "axios"
import { useNavigate } from "react-router-dom";
import { userLogin } from "../actions/authActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (!email || !name || !password) {
      toast.warn("Fill all the details properly");
    } else {
      try {
        const info = { name, email, password };

        dispatch(userLogin({ info, navigate }));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="container">
      <div className="flex flex-col  gap-5 justify-center items-center   ">
        <input
          type="text"
          placeholder="write name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-[#4D2C5E] pl-3 py-2"
        />
        <input
          type="text"
          placeholder="write email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-[#4D2C5E] pl-3 py-2"
        />
        <input
          type="text"
          placeholder="write password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-[#4D2C5E] pl-3 py-2"
        />
        <div>
          <button
            onClick={handleSubmit}
            className=" border bg-[#4D2C5E] px-4 py-2 rounded text-white"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
