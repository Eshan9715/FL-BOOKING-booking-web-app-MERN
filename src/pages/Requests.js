import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidenavbar from '../components/Sidenavbar'
import vessel from '../assets/vessel.jpg'
import AlertPorts from '../components/AlertPorts'
import AlertLines from '../components/AlertLines'
import axios from 'axios'
import { TextField } from '@mui/material'
import { codes } from '../Data'
import RueryTile from '../components/RueryTile'
import AddRates from '../components/AddRates'

const Requests = () => {
    const [showPorts, setShowPorts] = useState(false)
    const [showLines, setShowLines] = useState(false)

    const [portsAdd, setPortsAdd] = useState(false)
    const [linesAdd, setLinesAdd] = useState(false)
    const [pdetails, setpDetails] = useState([])
    const [ldetails, setlDetails] = useState([])

    // const portColumns = [
    //     { id: 1,  name: "Port Name" },
    //     { id: 2,  name: "Port Code" },
    //     { id: 3,  name: "Country Name" },
    //     { id: 4,  name: "Country logo" },
    //     { id: 5,  name: "Action" },
    //   ];

    const [search, setSearch] = useState('')
    const [tabmode, setTabmode] = useState('Salesman')
    const [frueryData, setFRueryData] = useState([])
    const [lrueryData, setLRueryData] = useState([])


    useEffect(() => {
  
        const getRueries = ()=>{
          axios
          .get(`http://localhost:5000/api/fclquery`)
          .then((res) => {
            console.log(res.data);
            setFRueryData(res.data.fclquries)
          })
          .catch(err=> {
            console.log(err);
          })     
  
          axios
          .get(`http://localhost:5000/api/lclquery`)
          .then((res) => {
            // console.log(res.data);
            setLRueryData(res.data)
          })
          .catch(err=> {
            console.log(err);
          })   
        }
        getRueries();
        
    }, []);


  return (
    <>
        <Navbar/>
        <div className="min-h-screen w-screen flex overflow-auto text-black bg-gradient-to-b from-blue-500 to-gray-900">
            <div className='w-full flex'>
                <div className='w-[14%]'>
                    <Sidenavbar role='admin'/>
                </div>

                <div className='w-[86%] min-h-screen p-4 flex flex-col'>
                    <div className='w-full mt-[80px] flex-col flex justify-center items-start p-4 gap-3'>

                        <div className="my-1 flex w-full justify-start">
                            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                               
                                <li className="mr-2 py-1.5" role="presentation">
                                    <button onClick={()=>setTabmode("pending")} className={`inline-block ${tabmode==="Salesman"? "bg-orange-500": 'bg-gray-500'} px-4 py-3 text-white rounded-lg active`}id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Pending Queries</button>
                                </li>
                               
                                <li className="mr-2 py-1.5" role="presentation">
                                    <button onClick={()=>setTabmode("confirm")} className={`inline-block ${tabmode==="CRD"? "bg-orange-500": 'bg-gray-500'} px-4 py-3 text-white rounded-lg active`}id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Confirmation Queries</button>
                                </li>
                                <li className="mr-2 py-1.5" role="presentation">
                                    <button onClick={()=>setTabmode("complete")} className={`inline-block ${tabmode==="Others"? "bg-orange-500": 'bg-gray-500'} px-4 py-3 text-white rounded-lg active`} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Completed Queries</button>
                                </li>
                                
                            </ul>

                        </div>

                        <div className='w-[90%]'>
                            {frueryData?.map((obj,index)=>(
                            <RueryTile key={index}
                                OportName={obj.origin} 
                                DportName={obj.destination} 
                                containerMode={obj.containerMode}
                                cargos={obj.cargoFCL} 
                                status={obj.status}
                                rDate={obj.rDate}
                                savedDate = {obj.createdAt}
                                user = {obj.uName}  
                                company = {obj.uCompany} 
                                // show = {}                             
                            
                            />
                            ))}
                        </div>
                                 
                </div>
                </div>

            {/* <AlertPorts show={portsAdd} title='Add new port' close={()=>setPortsAdd(false)} />
            <AlertLines show={linesAdd} title='Add new line' close={()=>setLinesAdd(false)} /> */}

            </div>


        </div>
    </>
  )
}

export default Requests