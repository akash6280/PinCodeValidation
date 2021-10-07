
function validatePincode(pincode){
    let pinCodeRegex = RegExp("^[1-9][0-9]{2}[\\s]{0,1}[0-9]{3}$");
    if(pinCodeRegex.test(pincode))
        console.log("Valid Pincode");
    else
        throw 'Invalid pincode';
}

try{
    validatePincode("400088");
}catch(e){
    console.error(e);
}
try{
    validatePincode("400088A");
}catch(e){
    console.error(e);
}

try{
    validatePincode("400 088");
}catch(e){
    console.error(e);
}