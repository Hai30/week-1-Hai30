//ArrayMethods:
//=============
// ------------------------------------------------------------
//                      Filter 
// ------------------------------------------------------------

// let ages = [12, 41, 11, 10, 32, 27, 18, 19, 19, 14, 58, 41, 9]

// let olderThan16 = []
// for(let age of ages){
//   if(age > 16){
//     olderThan16.push(age)
//   }
// }

// console.log(olderThan16) 

// ------------------------------------------------------------
//                      Anonymous 
// ------------------------------------------------------------

// let ages = [12, 41, 11, 10, 32, 27, 18, 19, 19, 14, 58, 41, 9]

// let olderThan16 = ages.filter(a => a > 16)
// console.log(olderThan16) // prints [41, 32, 27, 18, 19, 19, 58, 41]
// ------------------------------------------------------------
//                      Named function 
// ------------------------------------------------------------

// const isGreaterThan16 = function (age) {
//     return age > 16
// }
// let olderThan16 = ages.filter(isGreaterThan16) //notice that passing in the function will implicitly pass it the `a` parameter that the function expects

// ------------------------------------------------------------
// const isGreaterThan16 = (a) => a > 16
// let olderThan16 = ages.filter(isGreaterThan16)

// ------------------------------------------------------------
//                      Foreach 
// ------------------------------------------------------------
// let vegetables = [
//     { name: "Eggplant", color: "purple" },
//     { name: "Carrot", color: "orange" },
//     { name: "Squash", color: "orange" },
//     { name: "Tomatoe", color: "red" },
//     { name: "Onion", color: "white" },
//     { name: "Sweet Potato", color: "orange" }]

// let isvegetableOrange = vegetables.filter( i => i.color === "orange")

// for (let vegetable of isvegetableOrange) {
//     console.log(vegetable.name) //expect to see Carrot, Squash, and Sweet Potato
// }

// ------------------------------------------------------------
// isvegetableOrange.forEach(ov => console.log(ov.name))


// ------------------------------------------------------------
//                      Map 
// ------------------------------------------------------------
// let poundWeights = [142, 180, 178, 121, 132]

// let kiloWeights = poundWeights.map(pw => Math.round(pw / 2.2))
// console.log(kiloWeights) //prints [65, 82, 81, 55, 60]

// ------------------------------------------------------------

// let users = [
//     {
//     "name": "Leanne Graham",
//     "address": {
//         "street": "Kulas Light", "suite": "Apt. 556", "city": "Gwenborough", "zipcode": "92998-3874",
//         "geo": { "lat": "-37.3159", "lng": "81.1496" }
//     }
// }, {
//     "name": "Ervin Howell",
//     "address": {
//         "street": "Victor Plains", "suite": "Suite 879", "city": "Wisokyburgh", "zipcode": "90566-7771",
//         "geo": { "lat": "-43.9509", "lng": "-34.4618" }
//     }
// }
// ]
// console.log(users)

// let mewUsers = users.map(u => { return { name: u.name, city: u.address.city } })
// console.log(mewUsers)


// ------------------------------------------------------------
//                      Find 
// ------------------------------------------------------------

// let posts = [
//     {
//         id: 0, text: "I'm not here",
//         comments: [{ id: 0, text: "support that" }]
//     },
//     {
//         id: 1, text: "Find me",
//         comments: [
//             { id: 0, text: "here I am" },
//             { id: 1, text: "rock you like a hurricane" },
//             { id: 2, text: "dum dum" }]
//     },
//     {
//         id: 2, text: "Where's waldo anyway",
//         comments: [
//             { id: 0, text: "who's waldo" },
//             { id: 1, text: "he's called Effi" }]
//     },
//     {
//         id: 3, text: "Poof",
//         comments: [{ id: 0, text: "like magic" }]
//     }
// ]


// const findById = function (id) {
//     for (let post of posts) {
//         if (post.id == id) {
//             return post
//         }
//     }
// }
// console.log(findById(1))


// const findById = id => posts.find(p => p.id === id)
// console.log(findById(1)) // prints {id: 1, text: "Find me", comments: Array(3)}


// const findCommentById = (postID, commentID) => {
//     let postById = posts.find(p => p.id === postID)
//     return postById.comments.find(c => c.id === commentID)

// }

// console.log(findCommentById(1, 0)) // {id: 0, text: "here I am"}


// ------------------------------------------------------------
//                      Some 
// ------------------------------------------------------------
// let menu = [
//     { name: "Beef stew", vegetarian: false },
//     { name: "Beef sandwhich", vegetarian: false },
//     { name: "Carrot on a stick", vegetarian: true },
//     { name: "Beef eggroll", vegetarian: false },
// ]

// console.log(menu.some(m => m.vegetarian))//returns true

// ------------------------------------------------------------
//                      Every 
// ------------------------------------------------------------

// let ages = [31, 28, 23, 27, 25, 16, 24]
// console.log(ages.every(a => a > 18)) //returns false

// ------------------------------------------------------------
//                      Chaining 
// ------------------------------------------------------------

// let countries = [
//     { name: "Greece", population: 500 },
//     { name: "Namibia", population: 1200 },
//     { name: "Finland", population: 100 },
//     { name: "Switzerland", population: 300 },
//     { name: "Peru", population: 200 }
// ]

// let smallCountries = countries.filter(c => c.population < 500).map(c => c.name)


// let smallCountries =
//     countries
//         .filter(c => c.population < 500)
//         .map(c => c.name)

// console.log(smallCountries)

//  Spot Check 1:
//  =============
// let vegetables = [
//     { name: "Eggplant", color: "purple" },
//     { name: "Carrot", color: "orange" },
//     { name: "Squash", color: "orange" },
//     { name: "Tomatoe", color: "red" },
//     { name: "Onion", color: "white" },
//     { name: "Sweet Potato", color: "orange" }]

// let isvegetableOrange = vegetables.filter( i => i.color === "orange")
// console.log(isvegetableOrange)

//  Spot Check 2:
//  =============
// let people = [
//     { salary: 1300, goodPerformance: false },
//     { salary: 1500, goodPerformance: true },
//     { salary: 1200, goodPerformance: true },
//     { salary: 1700, goodPerformance: false },
//     { salary: 1600, goodPerformance: true },
// ]

// const increaseSalary = function(worker){
//     if(worker.goodPerformance === true){
//         worker.salary += 300
//     }
// }

// people.forEach(increaseSalary)
// console.log(people)

//  Spot Check 3:
//  =============

// let messagesFromDad = ["HI HONEY", "HOW WAS SCHOOL??", "DID YOU EAT TODAY?", "I CAN'T FIND THE REMOTE CONTROL"]

// let lowercaseMessage = messagesFromDad.map(ms => ms.toLowerCase())
// console.log(lowercaseMessage)

//  Spot Check 2:
//  =============
// let movies = [
//     { title: "Dareangel", studio: "Marvel", year: 2023 },
//     { title: "Batterfly", studio: "Fox", year: 2021 },
//     { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
//     { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
// ]


// if (movies.some(m => m.studio ===  "Marvel")){
//     console.log("Let's go watch some movies")

// }
//  else {
//     console.log("Let's stay home")
// }

// if (movies.every(m => m.year > 2020)){
//     console.log("Futuristic stuff")
// }
// else{
//     console.log("Yawn")
// }


let users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      }
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        }
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      }
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
          "lat": "24.6463",
          "lng": "-168.8889"
        }
      },
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
      }
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
  ]

//  Exersice1:
//  ==========
// const emailCompany = users.map(u => {return {email: u.email, companyName: u.name}})
// console.log(emailCompany)

//  Exersice2:
//  ==========

// const zipStartWithFive = users.filter( u => u.address.zipcode[0] === "5")
// console.log(zipStartWithFive)


//  Exersice3:
//  ==========

// const zipStartWithFive = users
    // .filter( u => u.address.zipcode[0] === "5")
    // .map(u => u.id)
// console.log(zipStartWithFive)


//  Exersice4:
//  ==========

// const names = users.map(u => u.name)
// 	    .filter(n => n[0].toLowerCase() === "c")
// console.log(names)


//  Exersice5:
//  ==========
// const doesEverybodyLivesSC = users.every( u => u.address.city === "South Christy")
// console.log(doesEverybodyLivesSC)

//  Exersice6:
//  ==========

// const userWho950Apt = users.find( u => u.address.suite === "Apt. 950")
// const companyOfUserWho950Apt = userWho950Apt.company.name
// console.log(companyOfUserWho950Apt)

//  Exersice7:
//  ==========
// const printInfo = user => console.log(`${user.name} lives in ${user.address.city}, and owns the company ${user.company.name}`) 
// users.forEach(printInfo)

const people = [
    {id: 1, name: "Humbert", money: 499, hasAC: false},
    {id: 2, name: "Bellatrix", money: 499, hasAC: true},
    {id: 3, name: "Mola", money: 720, hasAC: false}
]

let isCool = function(humbert){
    return (humbert.money > 500 || humbert.hasAC)
}

let print = (p) => console.log(p)

people.filter(isCool).map(p => p.name).forEach(print)
