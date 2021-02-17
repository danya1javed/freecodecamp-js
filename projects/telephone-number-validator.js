function telephoneCheck(str) {
  // const reg = new RegExp(
  //     "^\d{3}-\d{3}-\d{4}|",
  //     "^\(\d{3}\)\d{3}-\d{4}|",
  //     "^\(\d{3}\)\s\d{3}-\d{4}|",
  //     "^1\s\d{3}\s\d{3}\s\d{4}|",
  //     "^\d{10}"
  //    );
  return (
    /^[1\s]*\d{3}-\d{3}-\d{4}|^[1\s]*\(\d{3}\)\d{3}-\d{4}|^[1\s]*\(\d{3}\)\s\d{3}-\d{4}|^[1\s]*1\s\d{3}\s\d{3}\s\d{4}|^\d{10}$|^1\d{10}$/g
  ).test(str);
}

console.log(telephoneCheck("1 555-555-5555"))
console.log(telephoneCheck("5555555555"))
console.log(telephoneCheck("1 555 555 5555"))
console.log(telephoneCheck("(555) 555-5555"))
console.log(telephoneCheck("27576227382"))