import React, { useRef, useState } from 'react'
import { asyncAddNewCourse } from '../actions/courseActions';
import { useNavigate } from 'react-router-dom';

const CreateCourse = () => {
const navigate = useNavigate();

const inputRef = useRef(null);

const handleClick = () => {
  inputRef.current.click();
};


    const [formData,setformData]=useState({
        // photo: "",
        name: "",
        description: "",
        price:"",
        skills: ""
    })

    const handleChange =(e)=>{
        const { name, value } = e.target;
        setformData((formData) => ({ ...formData, [name]: value }));
     
    }
    const [file, setFile] = useState(null);
    console.log("formData====",formData, "=====",file)

    const handleSubmit = (e)=>{
        e.preventDefault();
       const result = asyncAddNewCourse(formData,file,navigate);
    }
  
    const fileChangedHandler = (event) => {
        let file = event.target.files[0];
        let reader = new FileReader();
    
        reader.onload = function(e) {
          setFile(e.target.result);
        };
        reader.readAsDataURL(event.target.files[0]);
      };

  return (
    <>
       <div className="container">
      <div className=" items-center   ">
      <form onSubmit={handleSubmit}>
      <div className="file_upload_product">
                        <input
                          style={{ display: "none" }}
                          id="fileInput"
                          name="Browse files"
                          type="file"
                          inputProps={{ accept: "image/*" }}
                          onChange={fileChangedHandler}
                          placeholder="browser"
                          multiple
                          ref={inputRef}
                        />

                        <button type='button' onClick={handleClick}>Browse files</button>
                      </div>
        <input
          type="text"
          placeholder="Enter name"
          name='name'
          value={formData.name}
          onChange={handleChange}
          className="border border-[#4D2C5E] pl-3 py-2"
        />
        <input
          type="text"
          placeholder="Enter description"
          name='description'
          value={formData.description}
          onChange={handleChange}
          className="border border-[#4D2C5E] pl-3 py-2"
        />
        <input
          type="text"
          placeholder="Enter skills"
          name='skills'
          value={formData.skills}
          onChange={handleChange}
          className="border border-[#4D2C5E] pl-3 py-2"
        />
        <input
          type="text"
          placeholder="Enter price"
          name='price'
          value={formData.price}
          onChange={handleChange}
          className="border border-[#4D2C5E] pl-3 py-2"
        />
        <div>
          <button
            // onClick={handleSubmit}
            type='submit'
            className=" border bg-[#4D2C5E] px-4 py-2 rounded text-white"
          >
            Create Course
          </button>
        </div>
        </form >
      </div>
    </div> 
    </>
  )
}

export default CreateCourse
