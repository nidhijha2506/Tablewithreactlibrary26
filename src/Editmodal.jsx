import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
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

const EditButtonModel = ({ closeModel, tabledata, showw, hideModal }) => {
 // const [editdetails, seteditdetails] = useState();
  //const [Tabledata, setTabledata] = useState(tabledata);
  //const [show, setShow] = useState(false);

  //const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);
  const {
    register, formState: { errors }, handleSubmit, } = useForm();
  // const [tableData,setTableData]=useState();
  // const [inputdetails,setinputdetails]= useState({});
  //   const [inputdata, setinputdata] = useState([]);
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  // const defaultName=tabledata.Name;


  const [successMsg,setSucessMsg]=useState();
  const onSubmit = (data) => {


    console.log("tabledata", data);
    
    //event.preventDefault();
    function delay(wait) {
      return new Promise((resolve) => {
        setTimeout(resolve, wait);
      });
    }
    async function synchronousSetTimeout() {

      setTimeout(() => {
        setSucessMsg("Your form updated successfully")
      }, 2000);
      
    await delay(4000);

    tabledata.firstName = data.firstName;
    tabledata.lastName = data.lastName;
    tabledata.branch = data.branch;
    tabledata.age = data.age;
    tabledata.section = data.section;
    tabledata.rollno = data.rollno;
    tabledata.email = data.email;
    tabledata.code = data.code;
    tabledata.phone = data.phone;

    //localStorage.setItem('tableData', JSON.stringify(tabledata));

    console.log('End');
    hideModal();
    
    
}

synchronousSetTimeout();
  }

  // useEffect(()=>
  // {
  //     //console.log('Before storing in local storage:', inputdata);
  //     localStorage.setItem('details',JSON.stringify(Tabledata))
  //     //console.log('After storing in local storage:', inputdata);
  // }, [Tabledata]);

  // useEffect(() => {
  //   // 3. Use localStorage to store data when it changes
  //   localStorage.setItem('tableData', JSON.stringify(Tabledata));
  // }, [Tabledata]);

  // useEffect(() => {
  //   // Load data from local storage when the component mounts
  //   const storedData = localStorage.getItem('tableData');
  //   if (storedData) {
  //     setTabledata(JSON.parse(storedData));
  //   }
  // }, []);
  

  return (
    <>
      {/* onClick={closeModel} */}

      <Modal show={showw} onHide={()=>hideModal()}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton className="bg-dark">
          <Modal.Title><h3 className=" text-white fs-1 py-2  stu_details">Edit Details</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className=" text-center edit_form" onSubmit={handleSubmit(onSubmit)}>
            <label className="fw-bold mt-3 name-label">Full Name&nbsp;&nbsp;
              <input defaultValue={tabledata.firstName}  {...register("firstName", {
                required: "First name is required",
                maxLength: 20, pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "only starts with letter"
                }
              })}
                aria-invalid={errors.firstName ? "true" : "false"} />&nbsp;&nbsp;
              <input defaultValue={tabledata.lastName}  {...register("lastName", {
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
              <input defaultValue={tabledata.age} className="input-age" type="text" {...register("age",
                { required: 'Age is required', min:{value: 18,
                  message: "Min age should be 18" }, max: {value:30, message:'Max age should be 30'} })}
                aria-invalid={errors.age ? "true" : "false"} />
              {errors.age && <h6 className="text-danger age-alert" role="alert">{errors.age.message}</h6>}
            </label>

            <label className="fw-bold rollno-label">Roll no
              <input defaultValue={tabledata.rollno} className="rollno-input" type="number" {...register("rollno",
                { required: 'Roll no is required', min:{value: 1,
                  message: "Least roll no is 1" }, max: {value:100, message:'Last roll no is 100'} })}
                aria-invalid={errors.rollno ? "true" : "false"} />
              {errors.rollno && <h6 className="text-danger rollno-alert" role="alert">{errors.rollno.message}</h6>}
            </label><br /><br />


            <label className="fw-bold branch-label">Branch
              <select defaultValue={tabledata.branch} className="branch-select" {...register("branch", { required: 'Branch is required' })}
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
              <select defaultValue={tabledata.section} className="section-select" {...register("section", { required: 'Section is required' })}
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
              <input defaultValue={tabledata.email} className="email-input"
               {...register("email", { required: 'Email is required',
               pattern: {value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i ,message:'Email is not valid'}})}
                aria-invalid={errors.email ? "true" : "false"} />
              {errors.email && <h6 className="text-danger email-alert" role="alert">{errors.email.message}</h6>}
            </label><br /><br />

            <label className="fw-bold phone-label">Phone No.
              <input defaultValue={tabledata.code} className="code-input" type="text" {...register("code",
                { required: "Code is required", pattern:{ value: /^91+$/i, message:' 91'}, 
                maxLength: {value:2,message:'Max length is 2'},
                 minLength: {value:2,message:'Min length is 2'} })}
                aria-invalid={errors.code ? "true" : "false"} />&nbsp;
              <input defaultValue={tabledata.phone} className="phone-input" type="text" {...register("phone",
                { required: 'Phone is required',maxLength: {value:10, message:'Max length should be 10'},
                minLength:{value:10, message:'Min length should be 10'} })}
                aria-invalid={errors.phone ? "true" : "false"} />
              {errors.code && <h6 className="text-danger code-alert" role="alert">{errors.code.message}</h6>}
              {errors.phone && <h6 className="text-danger phone-alert" role="alert">{errors.phone.message}</h6>}
            </label><br /><br /><br />
            <button className="bg-success text-white  fs-5 w-25 rounded update_btn">Update</button>
          </form><br /><br />
          <h3 className="text-success bg-muted h-25 fs-4 text-center">{successMsg}</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => hideModal()}>
            Close
          </Button>
          {/* <Button type="submit" variant="primary" onClick={() => hideModal()}>
            Update
          </Button> */}
        </Modal.Footer>
      </Modal>



    </>
  );
}

export default EditButtonModel;
