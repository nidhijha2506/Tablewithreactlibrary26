import React from "react";
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.css';
import "./Style.css";



export default function App() {
  const {
    register, formState: { errors }, handleSubmit,} = useForm()
  const onSubmit = (data) => console.log(data)


  return (
    <form className="bg-danger mt-5" onSubmit={handleSubmit(onSubmit)}>
       <h3 className="bg-black text-white py-2 text-center stu_details">Students Details</h3>
      <label>Full Name
          <input {...register("firstName", { required: "first name is required", maxLength: 20 })} 
          aria-invalid={errors.firstName ? "true" : "false"} />
          {errors.firstName && <span role="alert">{errors.firstName.message}</span>}&nbsp;&nbsp;
          <input {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })} />
      </label><br /><br />

      <label>Age
           <input type="number" {...register("age", { required: true, min: 18, max: 99 })} />
      </label>

      <label>Roll no
           <input type="number" {...register("Rollno", { required:true, min: 1, max: 100 })} />
      </label><br /><br />
      
      <label>Branch
            <select {...register("branch", {required:true})}>
            <option value="">Branch</option>
                     <option value="ME">ME</option>
                     <option value="EE">EE</option>
                     <option value="EC">EC</option>
                     <option value="IT">IT</option>
                     <option value="CS">CS</option>
                     <option value="CE">CE</option> 
            </select>
      </label>

      <label>Section
            <select {...register("section", {required:true})}>
            <option value="">Section</option>
                     <option value="A">A</option>
                     <option value="B">B</option>
                     <option value="C">C</option>
                     <option value="D">D</option>
                     <option value="E">E</option>
                     <option value="F">F</option>    
            </select>
      </label><br /><br />


      <label>Email
            <input {...register("email", { required:true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
      </label><br /><br />

      <label>Phone No.
             <input type="text" {...register("code", { required:"code is required", maxLength:2 })} />&nbsp;
             <input type="text" {...register("phone", {required:true, maxLength:10 })} />
      </label><br /><br />


      <input type="submit" />
    </form>
  )
}