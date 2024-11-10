// luu so vao Local Storage
function saveNumber(number) {
  localStorage.setItem("gay", number);
}

// lay so ra Local Storage
function getSaveNumber() {
  return localStorage.getItem("gay");
}

// cap nhat trong Local Storage
function updateNumber(newNumber) {
  localStorage.setItem("gay", newNumber);
}

// xoa bo trong Local Storage
function deletNumber() {
  localStorage.removeItem("gay");
}

// vd
const numberToSave = 42;
saveNumber(42);

const saveNumber = getSaveNumber();
console.log("update number:", saveNumber);

// vd cap nhat xoa
const updateNumber = 100;
updateNumber(updateNumber);

saveNumber = getSaveNumber();
console.log("update number:", saveNumber);

// xoa so
deletNumber();
