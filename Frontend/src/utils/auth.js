import { jwtDecode } from "jwt-decode";
export function getUserFromToken(){
  const token = localStorage.getItem("token");

  // token null check
 if(!token){
    return null;
 }

 try{
     return jwtDecode(token);
 }
 catch{
       return null;
 }
}