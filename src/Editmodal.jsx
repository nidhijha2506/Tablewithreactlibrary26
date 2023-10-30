import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useForm } from "react-hook-form";
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

const EditButtonModel =( {closeModel,tabledata,show} )=>
    {
        const [editdetails,seteditdetails]= useState();
        const [Tabledata,setTabledata]= useState();

        const {
            register, formState: { errors }, handleSubmit, } = useForm();
            // const [tableData,setTableData]=useState();
          // const [inputdetails,setinputdetails]= useState({});
        //   const [inputdata, setinputdata] = useState([]);
        //   const [show, setShow] = useState(false);
        
        //   const handleClose = () => setShow(false);
        //   const handleShow = () => setShow(true);
        // const defaultName=tabledata.Name;

   

    const onSubmit=(data)=>
    {
       

        console.log("tabledata",data);
       
        //event.preventDefault();

          tabledata.firstName = data.firstName;
          tabledata.lastName=data.lastName;
          tabledata.branch=data.branch;
          tabledata.age=data.age;
          tabledata.section=data.section;
          tabledata.rollno=data.rollno;
          tabledata.email=data.email;
          tabledata.code=data.code;
          tabledata.phone=data.phone;
          
         
         
    }

    // useEffect(()=>
    // {
    //     //console.log('Before storing in local storage:', inputdata);
    //     localStorage.setItem('details',JSON.stringify(Tabledata))
    //     //console.log('After storing in local storage:', inputdata);
    // }, [Tabledata]);
    
        return(
            <>
            {/* onClick={closeModel} */}
             
        <form className=" text-center edit_form"  onSubmit={handleSubmit(onSubmit)}>
        <label className="fw-bold mt-3 name-label">Full Name&nbsp;&nbsp;
          <input  defaultValue={tabledata.firstName}  {...register("firstName", {
            required: "First name is required",
            maxLength: 20, pattern: {
              value: /^[A-Za-z]+$/i,
              message: "only starts with letter"
            }
          })}
            aria-invalid={errors.firstName ? "true" : "false"} />&nbsp;&nbsp;
          <input  defaultValue={tabledata.lastName}  {...register("lastName", {
            required: 'Last name is required',
            maxLength: 20, pattern: /^[A-Za-z]+$/i
          })}
            aria-invalid={errors.lastName ? "true" : "false"}
          />
          {errors.firstName && <h6 className="text-danger name-alert" role="alert">{errors.firstName.message}</h6>}
          {errors.lastName && <h6 className="text-danger lastname-alert" role="alert">{errors.lastName.message}</h6>}
        </label><br /><br />

        <label className="fw-bold label-age">Age
          <input  defaultValue={tabledata.age} className="input-age" type="text" {...register("age",
            { required: 'Age is required', min: 18, max: 99 })}
            aria-invalid={errors.age ? "true" : "false"} />
          {errors.age && <h6 className="text-danger age-alert" role="alert">{errors.age.message}</h6>}
        </label>

        <label className="fw-bold rollno-label">Roll no
          <input  defaultValue={tabledata.rollno} className="rollno-input" type="number" {...register("rollno",
            { required: 'Roll no is required', min: 1, max: 100 })}
            aria-invalid={errors.rollno ? "true" : "false"} />
          {errors.rollno && <h6 className="text-danger rollno-alert" role="alert">{errors.rollno.message}</h6>}
        </label><br /><br />


        <label className="fw-bold branch-label">Branch
          <select  defaultValue={tabledata.branch} className="branch-select" {...register("branch", { required: 'Branch is required' })}
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
          <select  defaultValue={tabledata.section} className="section-select" {...register("section", { required: 'Section is required' })}
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
          <input  defaultValue={tabledata.email} className="email-input" {...register("email", { required: 'Email is required', pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
            aria-invalid={errors.email ? "true" : "false"} />
          {errors.email && <h6 className="text-danger email-alert" role="alert">{errors.email.message}</h6>}
        </label><br /><br />

        <label className="fw-bold phone-label">Phone No.
          <input  defaultValue={tabledata.code} className="code-input" type="text" {...register("code",
            { required: "Code is required", maxLength: 2 })}
            aria-invalid={errors.code ? "true" : "false"} />&nbsp;
          <input  defaultValue={tabledata.phone} className="phone-input" type="text" {...register("phone",
            { required: 'Phone is required', maxLength: 10 })}
            aria-invalid={errors.phone ? "true" : "false"} />
          {errors.code && <h6 className="text-danger code-alert" role="alert">{errors.code.message}</h6>}
          {errors.phone && <h6 className="text-danger phone-alert" role="alert">{errors.phone.message}</h6>}
        </label><br /><br />
        <button>Update</button>
      </form><br /><br />
             
            </>
        );
    }

    export default EditButtonModel;
    