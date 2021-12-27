let mnav = document.querySelector(".m-todays-my");
let mleft = document.querySelector(".m-back");
let mright = document.querySelector(".m-ahead");

const mmonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

let mtday = new Date();

let mcMonth = mmonths[mtday.getMonth()];


mnav.innerText = `${mcMonth} ${mtday.getFullYear()}`



mgetFullCalendar(mcMonth, mtday.getFullYear())

let midx = 1;
let myIdx = 1
let mcYr = mtday.getFullYear() // 2021
let mcmIdx = mtday.getMonth(); // 11

// let cMonth = months[tday.getMonth()]
mleft.addEventListener("click", (e) => {
    e.stopPropagation()
    if (mmonths[mcmIdx] == 'Jan') {
        mcYr = mcYr - 1
        mcmIdx = 11
        mnav.innerText = `${months[mcmIdx]} ${mcYr}`
        myIdx++;
        mgetFullCalendar(mmonths[mcmIdx], mcYr)

    } else {
        mcmIdx = mcmIdx - 1;
        mcMonth = mmonths[mcmIdx];
        mnav.innerText = `${mcMonth} ${mcYr}`
        mgetFullCalendar(mmonths[mcmIdx], mcYr)

    }
})


mright.addEventListener("click", (e) => {
    e.stopPropagation();
    if (months[mcmIdx] == 'Dec') {
        mcYr = mcYr + 1;
        mcmIdx = 0;
        mnav.innerText = `${months[mcmIdx]} ${mcYr}`
        mgetFullCalendar(months[mcmIdx], mcYr)

    } else {

        mcmIdx = mcmIdx + 1;
        mnav.innerText = `${months[mcmIdx]} ${mcYr}`
        mgetFullCalendar(months[mcmIdx], mcYr)

    }
})