import React from 'react'
import Swal from 'sweetalert2';

const Form = () => {
  let message ="";
  const submitHandler=(e)=>{
  e.preventDefault();

  Swal.fire({
    title: 'Yay!',
    text: 'Details has been saved',
    imageUrl: 'data:image/png;base64,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',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })

  console.log(message);
  };
  const changeHandler= (e)=>{
    const key = e.target.name;
    const value= e.target.value;
    message =   `${key} : ${value}`;
  };
  return (
    <fragment className='details'>
    <h1 className='title-detail'>Enter Your Details</h1>
    <form onSubmit={submitHandler}>
      <div className ='form-control'>
        <label className='username-detail' htmlFor='username'>
        </label>
        <input type='text' name='username' id='username' onChange={changeHandler}>
        </input>
      </div>
      <button className='button-detail' type='submit'>
        Submit
      </button>
    </form>
    </fragment>
  )
}

export default Form;