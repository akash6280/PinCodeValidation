
function validatePincode(pincode){
    let pinCodeRegex = RegExp("^[1-9][0-9]{5}");
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
    validatePincode("A400088");
}catch(e){
    console.error(e);
}