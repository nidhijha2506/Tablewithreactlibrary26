import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import "./Style.css";
import EditButtonModel from "./Editmodal";

const getLocalDetails =()=>
{
    let stu_details = localStorage.getItem('details');
    //console.log(stu_details);
    if(stu_details)
    {
        return JSON.parse(localStorage.getItem('details'))
    }
    else{
        return [];
    }
}
export default function App(props) {
  const {
    register, reset, formState: { errors }, handleSubmit, } = useForm();
    const [tableData,setTableData]=useState();
  // const [inputdetails,setinputdetails]= useState({});
  const [inputdata, setinputdata] = useState(getLocalDetails());
  //const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submittedMsg,setSubmittedMsg]=useState();


  // useEffect(()=>{

  // },[modalShow])

  // const handleChange =(event)=>
  // {
  //     let name=event.target.name;
  //     let value=event.target.value.toLowerCase()
  //     .split(' ')
  //     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  //     .join(' ');
  //     setinputdetails(values => ({...values, [name]: value}));
  // }  

  const onSubmit = (data) => {
    //data.preventDefault()
    //data.target.reset();
    console.log(data);
    //setinputdetails(data);
    
    //setinputdetails({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
     
    function delay(wait) {
      return new Promise((resolve) => {
        setTimeout(resolve, wait);
      });
    }
    async function synchronousSetTimeout() {

      setTimeout(() => {
        setSubmittedMsg("Your form submitted successfully")
      }, 2000);

      setTimeout(() => {
        setSubmittedMsg("")
      }, 4000);
      
    await delay(4000);

    setinputdata([...inputdata, data]);
    
   
    
    
    reset();
  }

  synchronousSetTimeout();
  }

  function editTable(index)
  {
    
   //modalShow(true);
    setTableData(inputdata.find((fn,ind)=> ind === index));
    console.log('hello');
    setModalShow(true);
  }
  console.log('hello',modalShow);

  function handledelete(fid) {
    // alert(fid);
    const Updatedetails = inputdata.filter((fn, ind) => {
      return ind !== fid
    })
    setinputdata(Updatedetails);
  }

  // console.log(inputdata);


  function deletedetails() {
    setinputdata([]);
  }

 

  const hideModal = ()=>{
    console.log("Working");
    setModalShow(false)
  }

  useEffect(()=>
  {
      //console.log('Before storing in local storage:', inputdata);
      localStorage.setItem('details',JSON.stringify(inputdata))
      //console.log('After storing in local storage:', inputdata);
  }, [inputdata]);




  return (
    <>
      <form className="bg-light mt-5" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="bg-black text-white py-2 text-center stu_details">Students Details</h3>
        <label className="fw-bold mt-3 name-label">Full Name&nbsp;&nbsp;
          <input   {...register("firstName", {
            required: "First name is required",
            maxLength: 20, pattern: {
              value: /^[A-Za-z]+$/i,
              message: "only letters are allowed"
            }
          })}
            aria-invalid={errors.firstName ? "true" : "false"} />&nbsp;&nbsp;
          <input  {...register("lastName", {
            required: 'Last name is required',
            maxLength: 20, pattern: {
              value: /^[A-Za-z]+$/i,
              message: "only starts with letter"
            }
          })}
            aria-invalid={errors.lastName ? "true" : "false"}
          />
          {errors.firstName && <h6 className="text-danger name-alert" role="alert">{errors.firstName.message}</h6>}
          {errors.lastName && <h6 className="text-danger lastname-alert" role="alert">{errors.lastName.message}</h6>}
        </label><br /><br />

        <label className="fw-bold label-age">Age
          <input className="input-age" type="text" {...register("age",
            { required: 'Age is required', min:{value: 18,
              message: "Min age should be 18" }, max: {value:30, message:'Max age should be 30'}})}
            aria-invalid={errors.age ? "true" : "false"} />
          {errors.age && <h6 className="text-danger age-alert" role="alert">{errors.age.message}</h6>}
        </label>

        <label className="fw-bold rollno-label">Roll no
          <input className="rollno-input" type="number" {...register("rollno",
            { required: 'Roll no is required', min:{value: 1,
              message: "Least roll no is 1" }, max: {value:100, message:'Last roll no is 100'} })}
            aria-invalid={errors.rollno ? "true" : "false"} />
          {errors.rollno && <h6 className="text-danger rollno-alert" role="alert">{errors.rollno.message}</h6>}
        </label><br /><br />


        <label className="fw-bold branch-label">Branch
          <select className="branch-select" {...register("branch", { required: 'Branch is required' })}
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
          <select className="section-select" {...register("section", { required: 'Section is required' })}
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
          <input className="email-input" {...register("email", { required: 'Email is required', 
          pattern: {value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i ,message:'Email is not valid'}})}
            aria-invalid={errors.email ? "true" : "false"} />
          {errors.email && <h6 className="text-danger email-alert" role="alert">{errors.email.message}</h6>}
        </label><br /><br />

        <label className="fw-bold phone-label">Phone No.
          <input className="code-input" type="text" {...register("code",
            { required: "Code is required",pattern:{ value: /^91+$/i, message:' 91'}, maxLength: {value:2,message:'Max length is 2'}, minLength: {value:2,message:'Min length is 2'} })}
            aria-invalid={errors.code ? "true" : "false"} />&nbsp;
          <input className="phone-input" type="text" {...register("phone",
            { required: 'Phone is required', maxLength: {value:10, message:'Max length should be 10'},
             minLength:{value:10, message:'Min length should be 10'} })}
            aria-invalid={errors.phone? "true" : "false"} />
          {errors.code && <h6 className="text-danger code-alert" role="alert">{errors.code.message}</h6>}
          {errors.phone && <h6 className="text-danger phone-alert" role="alert">{errors.phone.message}</h6>}
        </label><br /><br />

        <Button type="submit" className=" bg-primary fs-5 w-25 h5 fw-bold h-25 submit_btn" >Submit</Button><br /><br />
        {/* <input type="submit" className=" bg-primary w-25 h5 fw-bold h-25 submit_btn" /><br /><br /> */}
        {loading ? ( <div className="spinner2">
        </div>
      ) : (
        <h4 className="text-success bg-muted h-25 my-4 fs-5 text-center">{submittedMsg}</h4>
      )}<br></br>
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
            <th className="edit_th">Edit</th>
            <th className="delete_th">Delete</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {
            inputdata?.map((data, index) => {

              return (

                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.firstName} {data.lastName}</td>
                  <td>{data.age}</td>
                  <td>{data.branch}</td>
                  <td>{data.section}</td>
                  <td>{data.rollno}</td>
                  <td>{data.email}</td>
                  <td>{data.code} {data.phone}</td>
                  <td>
                    <Button variant="success" onClick={()=>editTable(index)} >
                    Edit 
                   </Button>
                   { modalShow  && 
                   <EditButtonModel  showw={modalShow} hideModal={hideModal} tabledata={tableData} ></EditButtonModel>
                   }
                    {/* <Modal show={show} onHide={handleClose} {...props} 
                                 size="lg"
                                  aria-labelledby="contained-modal-title-vcenter"
                                   centered>
                      <Modal.Header closeButton>
                        <Modal.Title><h3 className="bg-black text-white py-2 text-center stu_details">Edit Details</h3></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <EditButtonModel tabledata={tableData} ></EditButtonModel>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                          Update
                        </Button>
                      </Modal.Footer>
                    </Modal> */}
                  </td>
                  <td>
                    <Button type="button" onClick={() => {
                      handledelete(index)


                    }} className="bg-danger">Delete</Button>
                    {/* <button type="button" onClick={() => {
                      handledelete(index)


                    }} className="bg-danger">Delete</button> */}
                  </td>
                </tr>)

            })
          }
        </tbody>
      </table><br />
      <Button type="button" onClick={deletedetails} className="bg-danger reset_button">Reset All Details</Button><br /><br />
      {/* <button type="button" onClick={deletedetails} className="bg-danger reset_button">Reset All Details</button><br /><br /> */}
    </>
  )
}