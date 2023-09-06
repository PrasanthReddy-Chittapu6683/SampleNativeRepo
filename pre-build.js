const ramda = require("ramda");
const fs = require("fs");
const appJsonFile = fs.readFileSync("./app.json", "utf-8");
const appJson = JSON.parse(appJsonFile);
const versionParts = appJson.expo.version.split(".");
const version = Number(ramda.last(versionParts));
const newVersion = version + 1;

const newFullVersion = `${ramda
  .slice(0, -1, versionParts)
  .join(".")}.${newVersion}`;
console.log("Updating app.json to version " + newFullVersion);

fs.writeFileSync(
  "./app.json",
  JSON.stringify(
    {
      ...appJson,
      expo: {
        ...appJson.expo,
        version: newFullVersion,
      },
    },
    null,
    2
  ),
  "utf-8"
);

console.log("Updated app.json");
