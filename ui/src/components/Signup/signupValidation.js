function validation(values) {
    let error = {}; 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    // Validate name
    if(values.name === "") {
        error.name = "*Name is required";
    } else if(!/^[A-Za-z\s]+$/.test(values.name)) {
        error.name = "*Name can only contain letters and spaces";
    } else {
        error.name = "";
    }

    // ... existing code ...

    // Validate email
    if(values.email === ""){
        error.email = "*Email is required"
    } else if(!emailPattern.test(values.email)){
        error.email = "*Email Didn't match"
    } else {
        error.email = ""
    }

    // Validate password
    if(values.password === ""){
        error.password = "*Password Should not be empty"
    } else if(!passwordPattern.test(values.password)){
        error.password = "*Password Should be Strong"
    } else {
        error.password = ""
    }

    return error;
}

export default validation;