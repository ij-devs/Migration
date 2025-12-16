import "./Targetting.css"


export function calculateGrowth(ly,finalTarget){

    if(ly<=0){
        return 0;
    }
    const growth = ((finalTarget-ly)/ly)*100;
    return Number(growth.toFixed(2));

}

function Targetting(){
    return (
       
        <div className="targetting-page">
            <h2>Targetting page</h2>
        </div>
       
    );
}

export default Targetting;