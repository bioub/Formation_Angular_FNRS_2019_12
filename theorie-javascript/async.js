const fs = require("fs");
const path = require("path");

const browserslistPath = path.resolve(__dirname, "../browserslist");
const browserslistCopyPath = path.resolve(__dirname, "browserslist.copy");

// Sync
try {
  const content = fs.readFileSync(browserslistPath, { encoding: "utf-8" });
  fs.writeFileSync(browserslistCopyPath, content);
  console.log("Copy sync done");
} catch (err) {
  console.log("Erreur pendant la copie");
}

// Async basé sur un style callback
fs.readFile(browserslistPath, { encoding: "utf-8" }, (err, content) => {
  if (err) {
    console.log("Erreur pendant la copie");
  } else {
    fs.writeFile(browserslistCopyPath, content, err => {
      if (err) {
        console.log("Erreur pendant la copie");
      } else {
        console.log("Copy async done");
      }
    });
  }
});

// Async basé sur les promesses (Promise)
fs.promises
  .readFile(browserslistPath, { encoding: "utf-8" })
  .then(content => fs.promises.writeFile(browserslistCopyPath, content))
  .then(() => console.log("Copy async done"))
  .catch(() => console.log("Erreur pendant la copie"));
