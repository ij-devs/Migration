import { getUserFromToken } from "../../utils/auth";
import "./Targetting.css"
import "/Migration/Frontend/src/utils/auth.js"

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
    console.log(EmpCode);
    return (
       
        <div className="targetting-page">
            
            <h2>Targetting page</h2>
            <h2>EmpCode:{EmpCode}</h2>
            <h2>{Division}</h2>
        </div>
       
    );
}

export default Targetting;