function validateEmail(email) {
  if (typeof email !== "symbol" && email.length >= 5) {
    console.log("Email valid");
    return true;
  } else {
    console.log("Email tidak valid");
    return false
  }
}

console.log(validateEmail('user@example.com'));
console.log(validateEmail('user@com'));
console.log(validateEmail('user'));
console.log(validateEmail(''));