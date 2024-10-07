function validateAddress(address) {
    if(address.length >= 10) {
        console.log('Alamat Valid');
        return true;
    } else {
        console.log('Alamat Tidak Valid');
        return false;
    }
}

console.log(validateAddress('Jl. Merdeka No.10'));
console.log(validateAddress(''));
console.log(validateAddress('Jl 5'));