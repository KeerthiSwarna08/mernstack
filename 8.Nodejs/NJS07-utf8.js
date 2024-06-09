const fs=require("fs");
fs.writeFileSync("CURD/readme1.txt","This is read file");

  
// Read data  without getting the buffer("utf-8)")
    // without using  toString() we can use see the data using utf-8 
  const data = fs.readFileSync("CURD/readme1.txt","utf-8");
  console.log(data);