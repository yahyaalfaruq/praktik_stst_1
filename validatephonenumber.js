function validatePhoneNumber(phone) {
  if (typeof phone !== "number" && phone.length == 10 && phone.length == 13) {
    console.log("Nomor HP Valid");
    return true;
  } else {
    console.log("Nomor HP tidak Valid");
    return false;
  }
}

console.log(validatePhoneNumber("08123456789"));
console.log(validatePhoneNumber("08123abc"));
console.log(validatePhoneNumber("12345"));
