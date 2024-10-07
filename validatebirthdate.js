function validateBirthdate(birthdate) {
  const currentDate = new Date();
  const date = new Date(birthdate);
  if (date.getTime() && date < currentDate) {
    console.log("Tanggal lahir valid");
    return true;
  } else {
    console.log("Tanggal lahir tidak valid");
    return false;
  }
}

console.log(validateBirthdate("2005-05-01"));
console.log(validateBirthdate("2025-05-01"));
console.log(validateBirthdate(""));
