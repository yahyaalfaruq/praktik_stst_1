function validateAcces(userRole) {
  if (userRole === "admin") {
    console.log('Akses diizinkan');
    return true;
  } else if (userRole === "user") {
    console.log('akses diizinkan jika statusnya aktif');
    return false;
  } else {
    console.log('Akses ditolak');
    return false;
  }
}

console.log(validateAcces('admin','active'));
console.log(validateAcces('user','inactive'));
console.log(validateAcces('guest','active'));
