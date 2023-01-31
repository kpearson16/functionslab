

//alert&prompts

//variables
let introduction = "Welcome To My Site"

let username = "PerSchola Holla 723"

//let location = "New York"
let date = "Jan. 27, 2023"

const students = ["Dana", "DJ", "Deja", "Divna"]

let favDay = {
    day: "friday",
    weather: "sunny",
    activity: "Art Museum",
    homework: false,
    timeClassEnds: 4
}
//conditionals

// functions | if you wnat functions to run immediately after site loads, put function call in JS
//if you want func() to be activated based on a specific htmk element, add functon call to element using an attribute like on click



const introSite = () => {
    let guessAge = prompt(" Are you 18 and over?")

    if(guessAge === "yes"){
        let mainBox = document.querySelector('.container')
        mainBox.innerHTML = introduction
    }else{
        let ourPage = document.querySelector('body')
        ourPage.style.backgroundColor = "red"
    }
    }
introSite()
 //incorporates loop
 const displayStudents = ()=>{
    for(i=0; i<students.length;i++){
       /* let mainBox = document.querySelector('.container')
        mainBox.append(students[i])*/


        // 1.create element
        let studentBubble = document.createElement('div')
        //2. assign class 
        studentBubble.setAttribute('class','person')
        //2a. fill new element with info
        studentBubble.innerHTML = students[i]
        //3. append Item
        let mainBox= document.querySelector('.container')
    }
 }

// query selectors