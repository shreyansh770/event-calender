let nav = document.querySelector(".todays-my");
let left = document.querySelector(".back");
let right = document.querySelector(".ahead");


let tday = new Date();

let cMonth = months[tday.getMonth()];


nav.innerText = `${cMonth} ${tday.getFullYear()}`



getFullCalendar(cMonth, tday.getFullYear())

let idx = 1;
let yIdx = 1
let cYr = tday.getFullYear() // 2021
let cmIdx = tday.getMonth(); // 11

// let cMonth = months[tday.getMonth()]
left.addEventListener("click", (e) => {
    e.stopPropagation()
    if (months[cmIdx] == 'Jan') {
        cYr = cYr - 1
        cmIdx = 11
        nav.innerText = `${months[cmIdx]} ${cYr}`
        yIdx++;
        
        getFullCalendar(months[cmIdx], cYr)

    } else {
        cmIdx = cmIdx - 1;
        cMonth = months[cmIdx];
        nav.innerText = `${cMonth} ${cYr}`
        // console.log(months[cmIdx]);
        getFullCalendar(months[cmIdx], cYr)

    }
})


right.addEventListener("click", (e) => {
    e.stopPropagation();
    if (months[cmIdx] == 'Dec') {
        cYr = cYr + 1;
        cmIdx = 0;
        nav.innerText = `${months[cmIdx]} ${cYr}`
        getFullCalendar(months[cmIdx], cYr)

    } else {

        cmIdx = cmIdx + 1;
        nav.innerText = `${months[cmIdx]} ${cYr}`
        getFullCalendar(months[cmIdx], cYr)

    }
})