const fs = require("fs");


const main = async function() {


  fs.writeFile(`./test/images/${file.name}.png`, image.toBuffer(), (err) => {
    if (err) throw err;
  });
}

main();