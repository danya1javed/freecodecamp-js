function convertHTML(str) {
  const htmlMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  }
  console.log(str.replace(/[&,<>"']/g,chr => htmlMap[chr]))
  return str.replace(/[&,<>"']/g,chr => htmlMap[chr]);
}

convertHTML("Schindler's List");