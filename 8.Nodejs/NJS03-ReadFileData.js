const myfs=require("fs");
                            //Welcome to MyNodeJS Data
const mybuf_data= myfs.readFileSync("myData.txt");
console.log(mybuf_data);

const myorg_data = mybuf_data.toString();
console.log(myorg_data);