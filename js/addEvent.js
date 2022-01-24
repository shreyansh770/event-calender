

let sBtn = document.querySelector(".submit");
let aBtn = document.querySelector(".add");
let xBtn = document.querySelector(".close-cont>i");
let ePup = document.querySelector(".event-container")

let evArr = []
 let evObj = {

    title:"",
    facultyName:"",
    sDay:"",
    eDay:"",
    sTime:"",
    eTime:"",
    din:"",
    desp:"",
}


sBtn.addEventListener("click",async ()=>{

    ePup.style.display = "none"
    let aeMonth = months[evObj.sDay.substring(6,7)-1];
    let aeYear = evObj.sDay.substring(0,4)
      
    let req = await axios.post('http://localhost:3000/addEvent',evObj)// database me data save
    getFullCalendar(aeMonth,parseInt(aeYear));
})

aBtn.addEventListener("click",()=>{
    if(localStorage.getItem('login')){
        ePup.style.display = "block"
    }else{
        msg('Faculty not logged in')
    }
    
})

xBtn.addEventListener("click",()=>{
    ePup.style.display = "none"
})


let eventTitle = document.querySelector("#add-title");

eventTitle.addEventListener("blur",(e)=>{
    console.log(e.currentTarget.value);
    evObj.title=e.currentTarget.value
})



let faculty = document.querySelector("#faculty")

faculty.addEventListener("change",(e)=>{
    evObj.facultyName=e.currentTarget.value
})

let startDay = document.querySelector(".s-day>input")

startDay.addEventListener("blur",(e)=>{
    console.log(e.currentTarget.value);
    evObj.sDay=e.currentTarget.value
})

let endDay = document.querySelector(".e-day>input")

endDay.addEventListener("blur",(e)=>{
    console.log(e.currentTarget.value);
    evObj.eDay=e.currentTarget.value
})


let startTime = document.querySelector(".s-time>input")

startTime.addEventListener("blur",(e)=>{
    console.log(e.currentTarget.value);
    evObj.sTime=e.currentTarget.value
})

let endTime = document.querySelector(".e-time>input")

endTime.addEventListener("blur",(e)=>{
    console.log(e.currentTarget.value);
    evObj.eTime=e.currentTarget.value
})

let checkDay = document.querySelectorAll('.add-day-event')
    
for(let i=0;i<checkDay.length;i++){
    checkDay[i].addEventListener("click",(e)=>{
        console.log(e.currentTarget.innerText);
        evObj.din= e.currentTarget.value;
    })
}






