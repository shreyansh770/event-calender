let miniweekCont = document.querySelector(".mini-week-con")
//let daysCont = document.querySelector(".days-container")

let mweekday = ['S', 'M', 'T', 'W', 'T', 'F', 'S']


  let mwidx = 0;
  for (let i = 0; i < 7; i++) {

    let mweekDiv = document.createElement("div");
    const d = new Date();

    mweekDiv.className = 'mini-week-days'
    mweekDiv.innerText = mweekday[mwidx++]
    miniweekCont.appendChild(mweekDiv)
  }