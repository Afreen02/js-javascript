const coding = ["js", "react", "python", "ruby", "cpp"]

// coding.forEach(function(val){
//      console.log(val);
// })

// coding.forEach(greet = (item) => {
//     // console.log(item);
// })

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme);

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

const mySkills = [
    {
        languageName:"javascript",
        languagefileName:"js"
    },
    {
        languageName:"python",
        languagefileName:"py"
    },
    {
        languageName:"java",
        languagefileName:"jv"
    },
    {
        languageName:"javascript",
        languagefileName:"js"
    },
]
mySkills.forEach((item)=>{
    console.log(item.languageName);
})