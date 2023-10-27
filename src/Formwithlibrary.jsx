import React, { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.css';
import "./Style.css";

// const getLocalDetails =()=>
// {
//     let stu_details = localStorage.getItem('details');
//     //console.log(stu_details);
//     if(stu_details)
//     {
//         return JSON.parse(localStorage.getItem('details'))
//     }
//     else{
//         return [];
//     }
// }



export default function App() {
  const {
    register, formState: { errors }, handleSubmit,} = useForm();
   // const [inputdetails,setinputdetails]= useState({});
    const [inputdata,setinputdata]= useState([]);

    // const handleChange =(event)=>
    // {
    //     let name=event.target.name;
    //     let value=event.target.value.toLowerCase()
    //     .split(' ')
    //     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    //     .join(' ');
    //     setinputdetails(values => ({...values, [name]: value}));
    // }  

    const onSubmit = (data) => 
    {
      //data.preventDefault()
      //data.target.reset();
      console.log(data);
      //setinputdetails(data);
      setinputdata([...inputdata,data]);
      //setinputdetails({});
    }

    function handledelete(fid)
    {
        // alert(fid);
        const Updatedetails=inputdata.filter((fn,ind)=>
        {
             return ind!== fid
        })
        setinputdata(Updatedetails);
    }


    function deletedetails()
    {
        setinputdata([]);
    }

    // useEffect(()=>
    // {
    //     //console.log('Before storing in local storage:', inputdata);
    //     localStorage.setItem('details',JSON.stringify(inputdata))
    //     //console.log('After storing in local storage:', inputdata);
    // }, [inputdata]);

    
  


  return (
    <>
       <form className="bg-light mt-5" onSubmit={handleSubmit(onSubmit)}>
       <h3 className="bg-black text-white py-2 text-center stu_details">Students Details</h3>
      <label className="fw-bold mt-3 name-label">Full Name&nbsp;&nbsp;
          <input   {...register("firstName", { required: "First name is required", 
          maxLength: 20,pattern: {value:  /^[A-Za-z]+$/i ,
          message: "only starts with letter"}})} 
          aria-invalid={errors.firstName ? "true" : "false"} />&nbsp;&nbsp;
          <input  {...register("lastName", { required: 'Last name is required',
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
           {errors.age && <h6 className="text-danger age-alert" role="alert">{errors.age.message}</h6>}
      </label>

      <label className="fw-bold rollno-label">Roll no
           <input className="rollno-input" type="number" {...register("rollno", 
           { required:'Roll no is required', min: 1, max: 100 })} 
           aria-invalid={errors.rollno ? "true" : "false"} />
           {errors.rollno && <h6 className="text-danger rollno-alert" role="alert">{errors.rollno.message}</h6>}
      </label><br /><br />
      
      
      <label className="fw-bold branch-label">Branch
            <select className="branch-select" {...register("branch", {required:'Branch is required'})}  
            aria-invalid={errors.branch ? "true" : "false"}>
            <option value="">Branch</option>
                     <option value="ME">ME</option>
                     <option value="EE">EE</option>
                     <option value="EC">EC</option>
                     <option value="IT">IT</option>
                     <option value="CS">CS</option>
                     <option value="CE">CE</option> 
            </select> 
            {errors.branch && <h6 className="text-danger branch-alert" role="alert">{errors.branch.message}</h6>}     
      </label>

      <label className="fw-bold section-label">Section
            <select className="section-select" {...register("section", {required:'Section is required'})}
             aria-invalid={errors.branch ? "true" : "false"}>
            <option value="">Section</option>
                     <option value="A">A</option>
                     <option value="B">B</option>
                     <option value="C">C</option>
                     <option value="D">D</option>
                     <option value="E">E</option>
                     <option value="F">F</option>    
            </select>
            {errors.section && <h6 className="text-danger section-alert" role="alert">{errors.section.message}</h6>}  
      </label><br /><br />


      <label className="fw-bold email-label">Email
            <input  className="email-input" {...register("email",{ required:'Email is required', pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} 
             aria-invalid={errors.branch ? "true" : "false"} />
             {errors.email && <h6 className="text-danger email-alert" role="alert">{errors.email.message}</h6>}  
      </label><br /><br />

      <label className="fw-bold phone-label">Phone No.
             <input  className="code-input" type="text" {...register("code",
              { required:"Code is required", maxLength:2 })} 
              aria-invalid={errors.branch ? "true" : "false"}/>&nbsp;
             <input className="phone-input" type="text" {...register("phone",
              {required:'Phone is required', maxLength:10 })}
              aria-invalid={errors.branch ? "true" : "false"} />
              {errors.code && <h6 className="text-danger code-alert" role="alert">{errors.code.message}</h6>}  
              {errors.phone && <h6 className="text-danger phone-alert" role="alert">{errors.phone.message}</h6>}  
      </label><br /><br />


      <input type="submit" className=" bg-primary w-25 h5 fw-bold h-25 submit_btn" /><br /><br />
    </form><br /><br />

    <table cellPadding={10} cellSpacing={0} border={1} className="bg-secondary text-center">
                <thead>
                    <tr>
                        <th>Sr no.</th>
                        <th className="name_th">Name</th>
                        <th className="age_th">Age</th>
                        <th>Branch</th>
                        <th>Section</th>
                        <th>Roll No.</th>
                        <th className="email_th">Email Id</th>
                        <th className="phone_th">Phone No.</th>
                        <th className="delete_th">Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {
                        inputdata?.map((data,index)=>
                        {
                           
                           return (
                            
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{data.firstName} {data.lastName}</td>
                                <td>{data.age}</td>
                                <td>{data.branch}</td>
                                <td>{data.section}</td>
                                <td>{data.rollno}</td>
                                <td>{data.email}</td>
                                <td>{data.code} {data.phone}</td>
                                {/* <td>
                                    <button type="button" onClick={()=> handleEdit(index)}
                                    className="bg-success">Edit</button>
                                </td> */}
                                <td>
                                {/* <button onClick={()=> setEditModel(true)} className="bg-success">Edit</button> */}
                                
                                <button className="bg-success" >Edit</button>
                                </td>
                                <td>
                                    <button type="button" onClick={()=>
                                    {
                                      handledelete(index) 
                                       
                                     
                                    }} className="bg-danger">Delete</button>
                                </td>
                            </tr>)
                           
                        })
                    }
                </tbody>
             </table><br />
             <button type="button" onClick={deletedetails} className="bg-danger reset_button">Reset All Details</button><br /><br />
    </>
  )
}