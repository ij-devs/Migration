import { useState } from "react";
import "./Multiselect.css";
function MultiSelect({label,options,selectedValues,onChange}){

    // Hook for opening the dropdown open and close , bydefault it will be close 
    const[isOpen,SetIsOpen] = useState(false);

    // function to handleChange
    const handleOnChange = (values)=>{
       
         let updatedValues;
         if(selectedValues.includes(values)){
              // 🔹 If value is already selected → REMOVE it
             updatedValues = selectedValues.filter(v => v!== values);
         }
         else{
            // adding the values 
             updatedValues =[...selectedValues , values];
         }
            console.log("event changed for parent ");
         // this will notify parent 
           onChange(updatedValues);

    }
    return (
        <div className="multiselect">
            <label className="multiselect-label">{label}</label>

                {/* display box */}
              <div className="multiselectbox" onClick={()=>{SetIsOpen(!isOpen)}}>
                {
                  
                    selectedValues.length ===0 ?"All":`${selectedValues.length} selected`
                }
              </div>

            {
                isOpen && (
                    <div className="multiselect-dropdown">
                        {/*Here we are using map function */}

                      { 
                      options.map((option)=>(
                                  
                        <label key={option.value} className="multiselect-option">

                            <input type="checkbox"
                              checked = {selectedValues.includes(option.value)}
                              onChange=  {()=>  handleOnChange(option.value)}>
                            </input> 

                              {option.label}

                        </label>

                      ))
                      }

                    </div>
                )
            }



        </div>
    )
}

export default MultiSelect;