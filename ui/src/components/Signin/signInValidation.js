function validation(values) {
   let error = {}; 
   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
   const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

   // Validate email
   if(values.email === ""){
    error.email = "*Email is required"
   }else if(!emailPattern.test(values.email)){
     error.email = "*Email Didn't match"
   }else{
     error.email=""
   }

   // Validate password
   if(values.password === ""){
    error.password = "*Password Should not be empty"
   }
   else if(!passwordPattern.test(values.password)){
    error.password = "*Password didn't match"
   }else{
    error.password = ""
   }

   return error;
}

export default validation