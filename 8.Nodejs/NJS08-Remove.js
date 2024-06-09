const myfs=require("fs");
myfs.writeFileSync("myNotes.txt","My Node JS Programming");

// Specify the file to be removed
const filePath = 'myNotes.txt';

myfs.unlink(filePath, (err) => {
  if (err) {
    console.error(`Error removing file: ${err}`);
    return;
  }
  console.log('File removed successfully');
});
