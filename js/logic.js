let weekCont = document.querySelector(".week-container")
//let daysCont = document.querySelector(".days-container")

let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']


  let widx = 0;
  for (let i = 0; i < 7; i++) {

    let weekDiv = document.createElement("div");
    const d = new Date();

    weekDiv.className = 'week-days'
    weekDiv.innerText = weekday[widx++]
    weekCont.appendChild(weekDiv)
  }





