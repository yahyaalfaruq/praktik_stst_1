function validateName(name) {
  if (name.length >= 3) {
    console.log("valid name");
    return true;
  } else {
    console.log("nama tidak valid");
    return false;
  }
}

console.log(validateName("Ali"));
console.log(validateName(""));
console.log(validateName("A"));
