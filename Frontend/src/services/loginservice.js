

// try/catch for error handling should be inside function
// 

export async function login (empCode , password){
   
    try{
      const response = await fetch("https://localhost:7071/api/Login/login",{
         method:"POST",
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify(
            {
                EmpCode:empCode,
                Password:password,
            
            })
      }
      );


      if(!response.ok){
           
      let errorMessage = "Server Error";

      try {
        const errorData = await response.json(); // read backend message
        errorMessage = errorData.message ?? errorMessage;
      } catch {
        // response body not JSON
      }

      throw new Error(errorMessage);
    }
   return await response.json();
     
}
    catch(error){
      console.error("Login request failed ",error.message);

      throw error;
    }

}

