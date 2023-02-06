import React from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import { v4 as uuidv4 } from 'uuid';

const initialValues = {
  Containers: [
    {
      id:uuidv4(),
      containerType: '',
      quantity: '',
    },
  ],
};

const Containers = () => (
  <div>
    <h1>Invite Containers</h1>
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        console.log(values)
      }}
    >
      {({ values }) => (
        <Form>
          <FieldArray name="Containers">
            {({ insert, remove, push }) => (
              <div>
                {values.Containers.length > 0 &&
                  values.Containers.map((friend, index) => (
                    <div className="w-full flex justify-center items-center bg-gray-700">
                      <div className="flex w-1/2 justify-center items-center p-2 bg-gray-400 mt-10" key={index}>
                        <div className="w-full flex justify-center items-center gap-3">
                        <label htmlFor={`Containers.${index}.containerType`}>containerType</label>
                        <Field as="select" 
                          name={`Containers.${index}.containerType`}
                          className='text-center p-2 w-[100px] rounded-md border-none'>
                          <option value="20'St">20'St</option>
                          <option value="40'St">40'St</option>
                          <option value="40'HC">40'HC</option>
                          <option value="45'HC">45'HC</option>
                          <option value="20'RFG">20'RFG</option>
                          <option value="40'RFG">40'RFG</option>

                        </Field>
                        <ErrorMessage
                          name={`Containers.${index}.containerType`}
                          component="div"
                          className="field-error"
                        />

                      </div>
                      <div className="w-full flex justify-center items-center gap-3 text-center">
                        <label htmlFor={`Containers.${index}.quantity`}>Quantity</label>
                        <Field
                          name={`Containers.${index}.quantity`}
                          placeholder=""
                          type="number"
                          className='text-center p-2 w-[100px] rounded-md border-none'
                        />
                        <ErrorMessage
                          name={`Containers.${index}.quantity`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="w-8 h-8 bg-red-800 rounded-md p-2 text-white font-extrabold flex justify-center items-center">
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                    </div>
                  ))}
                  <div className="w-full flex justify-center items-center bg-gray-700 mb-5">
                  <div className="w-20 mt-5 h-8 rounded-md bg-green-800 p-2 text-white font-extrabold flex justify-center items-center ml-3">
                    <button
                      type="button"
                      className="secondary"
                      onClick={() => push({ id:uuidv4() , containerType: '', quantity: '' })}
                    >
                      + Add
                    </button>
                </div>
                  </div>

               
              </div>
            )}
          </FieldArray>
          <div className="w-full flex justify-center items-center bg-gray-700 mb-5">
            <div className="w-20 mt-5 h-8 bg-orange-800 p-2 text-white font-extrabold flex justify-center items-center ml-3">
            <button type="submit">Search</button>

            </div>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default Containers


  //  <Formik
  //           initialValues={{
  //             containerType: '',
  //             containerType1: '',
  //             quantity: '',
  //             quantity1: '',
            
  //           }}
  //           validationSchema={userSchema5}
  //           onSubmit={values => {
  //             console.log(values);
  //             setCheckCargo("added");
  //             setTab(!tab);
  //             arr = {...initialValues, ...values}
  //             // setQuery({...query, ...values})
  //             console.log(arr)
  //             newarr = {...arr, loading: origin, desty: destination}
  //             console.log(newarr)

            

  //           }}
  //         >
  //           {formik => (
  //             <div>
  //               <Form className='my-2 grid grid-cols-4 gap-5 px-5'>

  //                 <div class={`z-[90] ${tab? "absolute": "hidden"}  top-[110px] w-[380px] left-[48%] my-4 text-base shadow-md list-none bg-white divide-y divide-gray-300 rounded-lg`}>
  //                   <div class="flex w-full justify-center  items-center">
  //                     <span class={`px-2.5 py-3 flex justify-center items-center text-center text-sm font-medium cursor-pointer w-1/2 ${left? "bg-white text-black":" bg-gray-500 text-white"} `} onClick={()=>conMode("FCL")}>FCL</span>
  //                     <span class={`px-2.5 py-3 flex text-sm truncate cursor-pointer font-bold justify-center items-center w-1/2 h-full text-center ${!left? "bg-white text-black":" bg-gray-500 text-white"}`} onClick={()=>conMode("LCL")}>LCL</span>
  //                   </div>

  //                   {left? 
  //                   <>
  //                     <div className='flex w-full justify-center items-center gap-2'>
  //                       <div className='w-1/2 py-1 px-2'>
  //                         <Select label="Container type" name= "containerType" type="text" options={Contypes}/>
  //                       </div>
  //                       <div className='w-1/2 py-1 px-2 gap-5 flex justify-center items-end'>
  //                         <TextForum label="Quantity" name="quantity" type="number" placeholder="1" min="1" />
  //                         <button onClick={upinputs} disabled={step===1}>
  //                         <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-7 h-7 mb-3 bg-green-600 p-1 text-white cursor-pointer font-extrabold rounded-full' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  //                           <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path>
  //                         </svg> 
  //                         </button>
  //                       </div>
  //                     </div>

  //                     <div className={`${step===1? "flex": "hidden"} w-full justify-center items-center gap-2`}>
  //                       <div className='w-1/2 py-1 px-2'>
  //                         <Select label="Container type" name= "containerType1" type="text" options={Contypes}/>
  //                       </div>
  //                       <div className='w-1/2 py-1 px-2 gap-5 flex justify-center items-end'>
  //                         <TextForum label="Quantity" name="quantity1" type="number" placeholder="1" min="1" />
  //                         <button onClick={downinputs}>
  //                         <svg fill="none" stroke="currentColor" className='w-7 h-7 mb-3 bg-red-600 p-1 text-white cursor-pointer font-extrabold rounded-full' stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"  aria-hidden="true">
  //                           <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
  //                         </svg>
  //                         </button>
  //                       </div>
  //                     </div>

  //                   </> : 
                    // <div className='flex w-full justify-center items-center gap-2'>
                    //   <div className='w-1/2 px-4 py-6'>
                    //   <TextForum label="Total weight (KG)" name="weight" type="number" placeholder="1" min="1" />
                    //   </div>
                    //   <div className='w-1/2 px-4 py-6'>
                    //   <TextForum label="Total volume (CBM)" name="volume" type="number" placeholder="1" min="1" />

                    //   </div>
                      
                    // </div>
                    // }

                   
  //                     <div className='flex max-w-[180px] mb-5 mx-auto justify-center items-center mt-1'>

  //                       <button type='submit'
  //                             className="flex items-center justify-between w-3/4 h-[50px] px-4 py-1.5 text-sm font-semibold text-white capitalize bg-orange-500 rounded-md hover:bg-white hover:text-black hover:border-2 border-black focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
  //                             <span>+ Add</span>

  //                             <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
  //                                 <path fill-rule="evenodd"
  //                                     d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
  //                                     clip-rule="evenodd" />
  //                             </svg>
  //                       </button> 
                      
  //                    </div>
                    
                    
                    
  //                 </div>
                  


                

  //               </Form>
              
                
  //             </div>
  //           )}
  //         </Formik> 