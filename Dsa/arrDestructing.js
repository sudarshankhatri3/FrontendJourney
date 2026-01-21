// const nestedObject = {
//   level1: {
//     id: 1,
//     name: "Level 1",
//     active: true,
//     level2: {
//       id: 2,
//       name: "Level 2",
//       count: 20,
//       level3: {
//         id: 3,
//         name: "Level 3",
//         status: "ok",
//         level4: {
//           id: 4,
//           name: "Level 4",
//           score: 40,
//           level5: {
//             id: 5,
//             name: "Level 5",
//             enabled: false,
//             level6: {
//               id: 6,
//               name: "Level 6",
//               value: 60,
//               level7: {
//                 id: 7,
//                 name: "Level 7",
//                 flag: true,
//                 level8: {
//                   id: 8,
//                   name: "Level 8",
//                   amount: 80,
//                   level9: {
//                     id: 9,
//                     name: "Level 9",
//                     type: "deep",
//                     level10: {
//                       id: 10,
//                       name: "Level 10",
//                       message: "Reached the deepest level",
//                       completed: true
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// };



// //extract the key from object 
// let res=Object.keys(nestedObject)
// console.log(res)
// let res1=nestedObject.level1
// console.log(res1)

// let obj={
//     firstName:"sudarshan",
//     lastName:"khatri",
//     age:20
// }

// // destructing object 
// let {firstName,lastName,age}=obj
// console.log(firstName,lastName,age)


const studentProfile = {
  idx: 101,
  personalInfo: {
    firstName: "Sudarshan",
    lastName: "Khatri",
    age: 20,
    gender: "Male"
  },
  contactInfo: {
    email: "sudarshan@gmail.com",
    phone: "9800000000",
    address: "Kathmandu, Nepal"
  },
  education: {
    degree: "BIT",
    university: "Purbanchal University",
    semester: 4,
    subjects: [
      "Java",
      "Python",
      "DBMS",
      "Operating System",
      "Web Technology"
    ]
  },
  skills: {
    backend: ["Python", "Django", "FastAPI"],
    frontend: ["HTML", "CSS", "JavaScript", "React"],
    database: ["MySQL", "PostgreSQL"]
  },
  projects: [
    {
      title: "Public Transport App",
      tech: ["Django", "REST API"],
      status: "In Progress"
    },
    {
      title: "E-commerce Backend",
      tech: ["Django", "Stripe"],
      status: "Completed"
    }
  ],
  isAvailableForWork: true
};


// let {idx,personalInfo:{firstName,lastName,gender,age},contactInfo:{email,phone,address},education:{degree,university,semester,subjects},skills:{frontend,backend,database},projects:{title,tech,status},isAvailableForWork}=studentProfile
// console.log(idx,personalInfo,contactInfo,education,skills,isAvailableForWork)




// const user = {
//   Id: 1,
//   personal: {
//     firstName: "Sudarshan",
//     lastName: "Khatri",
//     age: 20
//   }
// };


// const {Id,personal:{firstName,lastName,age}}=user
// console.log(Id,firstName,lastName,age)



let value=[12,23,44,56,767,33,45,67,423]
let [first,second,third,fourth,...fifth]=value
console.log(first,second,third,fourth,fifth)




let age=18
const res=age>19 ? "adult" :"teenage"
console.log(res)


function checker(age){
    return age>19 ? "adult":"teenage"
}
console.log(checker(23))


