import React from "react";
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.css';
import "./Style.css";



export default function App() {
  const {
    register, formState: { errors }, handleSubmit,} = useForm()
  const onSubmit = (data) => console.log(data)


  return (
    <form className="bg-light mt-5" onSubmit={handleSubmit(onSubmit)}>
       <h3 className="bg-black text-white py-2 text-center stu_details">Students Details</h3>
      <label className="fw-bold mt-3 name-label">Full Name&nbsp;&nbsp;
          <input {...register("firstName", { required: "First name is required", 
          maxLength: 20,pattern: /^[A-Za-z]+$/i  })} 
          aria-invalid={errors.firstName ? "true" : "false"} />&nbsp;&nbsp;
          <input {...register("lastName", { required: 'Last name is required',
           maxLength: 20, pattern: /^[A-Za-z]+$/i })} 
           aria-invalid={errors.lastName ? "true" : "false"}
           />
          {errors.firstName && <h6 className="text-danger name-alert" role="alert">{errors.firstName.message}</h6>}
          {errors.lastName && <h6 className="text-danger lastname-alert" role="alert">{errors.lastName.message}</h6>}
      </label><br /><br />

      <label className="fw-bold label-age">Age
           <input className="input-age" type="text" {...register("age",
            { required: 'Age is required', min: 18, max: 99 })}
           aria-invalid={errors.age ? "true" : "false"} />
           {errors.age && <h6 className="text-danger" role="alert">{errors.age.message}</h6>}
      </label>

      <label className="fw-bold rollno-label">Roll no
           <input className="rollno-input" type="number" {...register("rollno", 
           { required:'Roll no is required', min: 1, max: 100 })} 
           aria-invalid={errors.rollno ? "true" : "false"} />
           {errors.rollno && <h6 className="text-danger" role="alert">{errors.rollno.message}</h6>}
      </label><br /><br />
      
      
      <label className="fw-bold branch-label">Branch
            <select className="branch-select" {...register("branch", {required:true})}>
            <option value="">Branch</option>
                     <option value="ME">ME</option>
                     <option value="EE">EE</option>
                     <option value="EC">EC</option>
                     <option value="IT">IT</option>
                     <option value="CS">CS</option>
                     <option value="CE">CE</option> 
            </select>
      </label>

      <label className="fw-bold section-label">Section
            <select className="section-select" {...register("section", {required:true})}>
            <option value="">Section</option>
                     <option value="A">A</option>
                     <option value="B">B</option>
                     <option value="C">C</option>
                     <option value="D">D</option>
                     <option value="E">E</option>
                     <option value="F">F</option>    
            </select>
      </label><br /><br />


      <label className="fw-bold email-label">Email
            <input className="email-input" {...register("email", { required:true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
      </label><br /><br />

      <label className="fw-bold phone-label">Phone No.
             <input className="code-input" type="text" {...register("code", { required:"code is required", maxLength:2 })} />&nbsp;
             <input className="phone-input" type="text" {...register("phone", {required:true, maxLength:10 })} />
      </label><br /><br />


      <input type="submit" className=" bg-success w-25 submit-btn" />
    </form>
  )
}