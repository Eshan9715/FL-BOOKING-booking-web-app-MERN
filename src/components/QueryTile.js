import React from 'react'
// import { codes } from '../Data'
// import ship from '../assets/vessel.jpg'
import moment from 'moment';
import { useState } from 'react';
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useEffect } from 'react';
import axios from 'axios';
// import Checkbox from '@mui/material/Checkbox';

const QueryTile = ({ OportName, DportName,containerMode, cargos, status, rDate, savedDate,id, rates, remarks}) => {

    const OportKeys = OportName.split(",");
    const DportKeys = DportName.split(",");
    console.log(OportKeys)
    console.log(DportKeys)

    const[more, setMore] = useState(false)
    const[selectedLine, setSelelctedLine] = useState('')
    const[shipremarks, setShipremarks] = useState('')
    const[sdetails, setsDetails] = useState('')


    const removeDuplicates = (arr) => {
        // let arrr = arr.filter(e=> e.shipLine)
        let unique = [];
        arr.forEach(element => {
            if (!unique.includes(element.shipLine)) {
                unique.push(element.shipLine);
            }
        });
        console.log(unique)
        return unique;
    }

    const addShipIdea = ()=>{
        const addShipperIdea= { 
            id: id,
            shremarks:shipremarks,
            status:'schedule',
            selShipLine: selectedLine,
            }        
            axios
            .put(`http://localhost:5000/api/fclquery/addShipIdea/${id}`,addShipperIdea)
            .then((res) => {
              console.log(res.data);
        
            setsDetails(res.data)
          });
    }

    // useEffect(() => {
    //     rates.filter(e=> arr.push(e.shipLine))
    //     console.log(arr);
    
    //     uniqueChars = [...new Set(arr)];
    //     console.log(uniqueChars);
       
        
    // }, [rates]);

    // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


    // const Ocode = codes[codes.findIndex(element=> element.name.toLowerCase() === OCountry.toLowerCase())].code.toLowerCase();
    // console.log(Ocode)

    // const Dcode = codes[codes.findIndex(element=> element.name.toLowerCase() === DCountry.toLowerCase())].code.toLowerCase();    
    // console.log(Dcode)
    

  return (
        <div className="w-full flex flex-col bg-white shadow-md hover:shodow-lg rounded-md my-2">
        <div className='w-full flex'>
            <div className={` ${status !=="pending"? 'w-[93%]':'w-[100%]'} flex flex-col p-4`}>
            <div className='w-full flex justify-between items-center'>
                <div className='flex justify-center items-center gap-2'>
                    <div className='flex justify-center items-center gap-2'>
                        <span>{OportKeys[0]},</span>
                        <span>{OportKeys[1]}</span>
                        <img src={`https://flagcdn.com/20x15/${OportKeys[2].toLowerCase()}.png`} alt="flag" />
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                    </svg>
                    <div className='flex justify-center items-center gap-2'>
                        <span>{DportKeys[0]},</span>
                        <span>{DportKeys[1]}</span>
                        <img src={`https://flagcdn.com/20x15/${DportKeys[2].toLowerCase()}.png`} alt="flag" />
                    </div>
                </div>

                {/* <img src={ship} alt='' className='w-10 h-8' /> */}
                {/* <p className={`px-3 mt-1 py-1 text-white ${status.includes("query")? "bg-red-500": status.includes("confirmation")? "bg-yellow-500": "bg-green-500"} rounded-md shadow-md`}>{status}</p> */}

                <div className='flex justify-center items-center gap-2'>
                  <p className='text-xm text-gray-400'>ready by:</p>
                  <p>{rDate}</p>

                </div>

            </div>

            <div className='w-full flex justify-between items-center'>
                <div className='mt-2 flex w-3/4 justify-start items-center gap-4'>
                    <span className='bg-slate-200 px-2 py-1 rounded-lg text-sm'>{containerMode}</span>
                    {cargos?.map(cargo=>(
                        <div className='bg-slate-200 px-2 py-1 rounded-lg text-sm gap-2' key={cargo.id}>{cargo.quantity} X {cargo.containerType}</div>
                    ))}

                </div>
                <div className='flex justify-center items-center gap-2'>
                  <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-5 h-5' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                  <p>{moment(savedDate).fromNow()}</p>

                </div>

            </div>
           

            </div>

          {status !=="pending" &&
          <div className="w-[7%] flex justify-center items-center ml-5">
            <div className='w-full flex justify-center items-center p-2 text-white rounded-md mr-4'>
                       
                            <>
                            <button onClick={()=>setMore(!more)} className={`flex w-full ${more? "border-2 text-black bg-white border-black":"bg-orange-500 text-white"} rounded-full items-center justify-center px-2.5 py-2 text-base tracking-wide capitalize transition-colors duration-300 transform focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50`}>
                            {more && <svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-8 h-8 rtl:-scale-x-100' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path>
                                    </svg>}
                            {!more &&<svg fill="none" stroke="currentColor" stroke-width="1.5" className='w-8 h-8 rtl:-scale-x-100' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                                    </svg>}
                            </button>
                            </>
                            
                        
                        
            </div>
           
          </div>
          }

        </div>
        
          {more && 
                <>
                {status!=='pending' &&
                <>
                    <div className='h-0.5 bg-gray-300 w-full mt-1 px-4'></div>
                    <div className='w-full flex justify-start items-start my-2 text-gray-400 ml-3'>
                       
                         <div className='w-2/3 flex justify-center items-start flex-col px-4'>
                            <p className=' font-semibold my-2 text-[13px]'>Rates:</p>
                            {rates?.map((rat,index)=>(
                                <div className='w-full flex justify-start items-center gap-x-20 gap-y-2' key={index}>
                                    <div className='w-[20%] flex justify-start items-center gap-2'>
                                        <DirectionsBoatFilledIcon sx={{ color: 'blue' }}/>
                                        <p className='text-black'>{rat.shipLine}</p>

                                    </div>
                                    <div className='w-[15%] flex justify-start items-center'>
                                        <p className='text-black'>{rat.container}</p>
                                    </div>

                                    <div className='w-[15%] flex justify-start items-center'>
                                        <p className='text-black'>$ {rat.rate}</p>
                                    </div>
                                    <div className='w-[50%] flex justify-start items-center'>
                                        <p>valid till :</p>
                                        <p className='text-black'>{rat.validDate}</p>
                                    </div>
                                      {/* <div className='w-[5%] flex justify-start items-center'>

                                        <Checkbox {...label} size="small" />
                                    </div> */}

                                </div>
                            ))}

                        </div>

                        <div className='w-1/3 flex justify-center items-start flex-col px-4'>
                        <p className=' font-semibold my-2 text-[13px]'>Remarks:</p>
                        {status!=='pending' && remarks?.split(".").filter(e=>e!=='').map((remark,index)=>(                                                        
                                    <div className='w-full flex justify-start items-center gap-x-4 gap-y-2' key={index}>
                                        <p className='text-sm text-justify mt-1'>* {remark}.</p>
                                    </div>
                            ))}
                        </div>        
                    </div>  
                    <div className='h-0.5 bg-gray-300 w-full mt-1 px-4'></div>
                    <div className='w-full flex'>
                        <div className='w-[35%] flex '>
                        <div className='w-full flex justify-start items-center m-3'>

                            <p className='max-w-[150px] font-semibold my-1 text-[13px] text-gray-400 px-4'>Shipper idea:</p>
                            
                            <FormControl sx={{ m: 1, minWidth: 200,borderRadius:2 }} size="small">
                                <InputLabel id="demo-select-small">Status</InputLabel>
                                <Select
                                    value={selectedLine}
                                    label="Status"
                                    onChange={(e)=>setSelelctedLine(e.target.value)}
                                >
                                 {/* {removeDuplicates(rates).length===1 && <MenuItem value={"Agree"}>Agree</MenuItem>} */}
                                 {removeDuplicates(rates).map((r,index)=>
                                    <MenuItem value={r} key={index}>{r}</MenuItem>
                                 )}
                                 <MenuItem value={"Disagree"}>Disagree</MenuItem>

                                </Select>
                            </FormControl>
                            
                            </div>
                        </div>
                        <div className='w-[50%] flex justify-start items-center'>
                            <p className='max-w-[150px] font-semibold my-1 text-[13px] text-gray-400 px-4'>Shipper remarks:</p>
                            
                            <TextField
                            id="outlined-multiline-static"
                            label="Remarks"
                            multiline
                            value={shipremarks}
                            placeholder="Hint: Break the line by adding comma"
                            className='w-3/4'
                            size='small'
                            onChange={e=>setShipremarks(e.target.value)}
                        />
                            
                        </div>

                        <div className='w-[15%] flex justify-center items-center'>
                            <button onClick={addShipIdea}  className= "bg-red-500 px-4 py-3 w-full mx-6 text-white rounded-lg active" >save</button>
                          
                        </div>
                    </div>
                   

                        {/* {rates.filter(e => arr.push(e.shipLine))}
                        uniqueArr = [...new Set(arr)];
                        {uniqueArr.length > 0? 
                            <>

                            </> 
                            : 
                            <>

                            </>
                        } */}

                </>
                }
                </>
            }
          
      </div>  
      )
}

export default QueryTile