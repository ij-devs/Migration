import { getUserFromToken } from "../../utils/auth";
import "./Targetting.css";
import "/Migration/Frontend/src/utils/auth.js";
import  Header  from "../common/Header/Header.js";
import MultiSelect from "../common/Multiselect/Multiselect.js";
import { useState } from "react";

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

  // dummy options for now
  const zoneOptions = [
    { value: "Z1", label: "North Zone" },
    { value: "Z2", label: "South Zone" }
  ];

  const hqOptions = [
    { value: "H1", label: "Delhi HQ" },
    { value: "H2", label: "Mumbai HQ" }
  ];

  const brandOptions = [
    { value: "B1", label: "Brand A" },
    { value: "B2", label: "Brand B" }
  ];


    return (
       

        <div className="targetting-page">
            <Header />
          

            <div className="filter-bar">
            <MultiSelect label = "zones" options ={zoneOptions} selectedValues={selectedZones}
            onChange={(values)=>{
                setSelectedZones(values);
                setSelectedHQs([]);
            }} ></MultiSelect>

            <MultiSelect label = "hqs" options ={hqOptions} selectedValues={selectedHQs}
            onChange={setSelectedHQs}></MultiSelect>

            <MultiSelect label = "brands" options ={brandOptions} selectedValues={selectedBrands}
                onChange={setSelectedBrands}></MultiSelect>

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