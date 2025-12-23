import { getUserFromToken } from "../../utils/auth";
import "./Targetting.css";
import "/Migration/Frontend/src/utils/auth.js";
import  Header  from "../common/Header/Header.js";
import MultiSelect from "../common/Multiselect/Multiselect.js";
import { useEffect, useState } from "react";
import { getFilters } from "../../services/Targettingservice.js";

export function calculateGrowth(ly,finalTarget){

    if(ly<=0){
        return 0;
    }
    const growth = ((finalTarget-ly)/ly)*100;
    return Number(growth.toFixed(2));

}

function Targetting(){
const user = getUserFromToken();
const Division = user.Division;
const EmpCode = user.EmpCode;
   
const [selectedZones, setSelectedZones] = useState([]);
const [selectedHQs, setSelectedHQs] = useState([]);
const [selectedBrands, setSelectedBrands] = useState([]);

  
  const [zoneOptions, setZoneOptions] = useState([]);
  const [hqOptions, setHqOptions] = useState([]);
  const [brandOptions, setBrandOptions] = useState([]);

  useEffect(()=>{

   async function loadfilters(){

    const data = await getFilters({
      zones:selectedZones,
      hqs:selectedHQs,
      brands:selectedBrands
    });


    setZoneOptions(data?.zones ?? []);
    setBrandOptions(data?.brands ??[]);
    setHqOptions(data?.hqs ??[]);

   }

 loadfilters();

  },[selectedZones,selectedHQs,selectedBrands])


    return (
       

        <div className="targetting-page">
            <Header />
          

            <div className="filter-bar">
                <div className="filters-left">
            <MultiSelect label = "zones" options ={zoneOptions} selectedValues={selectedZones}
            onChange={(values)=>{
                setSelectedZones(values);
                setSelectedHQs([]);
            }} ></MultiSelect>

            <MultiSelect label = "hqs" options ={hqOptions} selectedValues={selectedHQs}
            onChange={setSelectedHQs}></MultiSelect>

            <MultiSelect label = "brands" options ={brandOptions} selectedValues={selectedBrands}
                onChange={setSelectedBrands}></MultiSelect>
                </div>
                

                <button className="button-clear"
                onClick={()=>{
                setSelectedBrands([]);
                setSelectedHQs([]);
                setSelectedZones([]);
                }} >Clear</button>

            </div>


        </div>
       
    );
}

export default Targetting;