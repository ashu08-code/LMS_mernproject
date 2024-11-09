import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Loginpage = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async() => {
        try {

            if(email && password){
                const info = {email,password}

                const data = await axios.post("http://localhost:5000/login/", info)
                if (data.ok) {
                    navigate("/")
                }else{
                    console.log(data)
                }
               
                setEmail("")
                setPassword("")
            }
            else{
                 alert("write password and email")
            }
          
            
        }
        catch (error) {
            alert(error.response.data)
        }
    }

  return (
    <div className='container'>
    <div className='flex flex-col  gap-5 justify-center items-center  py-10 '>
    <input type="text" placeholder='write email' value={email} onChange={(e) => setEmail(e.target.value)}           className='border border-[#4D2C5E] pl-3 py-2'/>
    <input type="text" placeholder='write password' value={password} onChange={(e) => setPassword(e.target.value)}  className='border border-[#4D2C5E] pl-3 py-2'/>
    <div>           
         <button onClick={handleSubmit} className=' border bg-[#4D2C5E] px-4 py-2 rounded text-white'>Login</button>
    </div>
    </div>

</div>
  )
}

export default Loginpage
