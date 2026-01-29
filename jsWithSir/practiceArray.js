let data=[
    {
        name:"sudarshan",
        cast:"khatri",
        level:"Bachelor",
        isPassed:true,
        age:20,
        course:["physic","chemistry","computer science","Nepali","optional cvt"]

    },
     {
    name: "Aayush",
    cast: "Sharma",
    level: "Bachelor",
    isPassed: true,
    age: 21,
    course: ["Math", "Statistics", "Computer Science", "English"]
  },
  {
    name: "Bikash",
    cast: "Adhikari",
    level: "Plus Two",
    isPassed: false,
    age: 18,
    course: ["Physics", "Chemistry", "Biology"]
  },
  {
    name: "Nischal",
    cast: "Basnet",
    level: "Bachelor",
    isPassed: true,
    age: 22,
    course: ["Java", "DBMS", "Software Engineering"]
  },
  {
    name: "Pratiksha",
    cast: "Thapa",
    level: "Bachelor",
    isPassed: true,
    age: 20,
    course: ["Web Development", "UI/UX", "JavaScript"]
  },
  {
    name: "Ramesh",
    cast: "KC",
    level: "SEE",
    isPassed: true,
    age: 16,
    course: ["Math", "Science", "Social"]
  },
  {
    name: "Anita",
    cast: "Pandey",
    level: "Plus Two",
    isPassed: true,
    age: 19,
    course: ["Management", "Economics", "Account"]
  },
  {
    name: "Sujan",
    cast: "Gurung",
    level: "Bachelor",
    isPassed: false,
    age: 23,
    course: ["Networking", "Operating System"]
  },
  {
    name: "Kritika",
    cast: "Joshi",
    level: "Bachelor",
    isPassed: true,
    age: 21,
    course: ["AI", "Machine Learning", "Python"]
  },
  {
    name: "Dipesh",
    cast: "Rai",
    level: "Plus Two",
    isPassed: true,
    age: 18,
    course: ["Computer Science", "Math", "English"]
  }
]

let name=[]
let cast=[]
let level=[]
let status=[]
let ag=[]
let course=[]
for(let i=0;i<data.length;i++){
    name.push(data[i].name)
    cast.push(data[i].cast)
    level.push(data[i].level)
    status.push(data[i].isPassed)
    ag.push(data[i].age)
    course.push(data[i].course)
}

console.log(name)
console.log(cast)
console.log(level)
console.log(status)
console.log(ag)
console.log(course)


let res=[]
data.forEach((value,index)=> {
    res.push(`Index ${index}  and value is ${value[index]}`)
});
console.log(res)


let arr=[1,2,3,4,5,6,76,7,7,5,4,3,3,34,45,45,5,5,5,5,5,5,5,5,5,5,5,5]
console.log(`push new data:${arr.push(45455)}`)
console.log(`Shift data in array:${arr.shift()}`)
console.log('')
let value1=arr.map((num)=>num*2)
console.log(`Using map in array:${value1}`)
let value2=arr.filter((num)=>num%2==0)
console.log(`using filter:${value2}`)
let value3=arr.reduce((current,acc)=>current+acc)
console.log(`using reduce:${value3}`)
console.log(`using pop:${arr.pop()}`)
console.log(`unshift the arr:${arr.unshift(343434)}`)
console.log(`Index of value:${arr.indexOf(5)}`)

let dt=arr.find((num)=>num>12)
console.log(`Find:${dt}`)
