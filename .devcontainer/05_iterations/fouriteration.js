const myObject = {
    js: "javascript",
    cpp: "C++",
    swift: "swift by Apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["bootstrap", "js", "reactjs", "javascript"]
for (const key in programming) {
    console.log(programming[key]);
}