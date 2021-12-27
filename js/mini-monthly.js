let mwBox = document.querySelectorAll(".mini-week")

let mdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

let mgetFullCalendar = (month, year) => {

    let mdday = new Date(`${month} 1 , ${year}`);

    let mdIdx = mdday.getDay();
    let mmIdx = mdays[mdday.getMonth()]
    // console.log(mIdx);
    // console.log(dIdx);

    let md = 1


    let minitday = new Date()


    for (let i = 0; i < 6; i++) {
        let mwDiv = mwBox[i].querySelectorAll(".mini-week-date")
        for (let j = 0; j < 7; j++) {
            mwDiv[j].innerText = ""
        }

    }




    for (let i = 0; i < 6; i++) {
        let mwDiv = mwBox[i].querySelectorAll(".mini-week-date")


        if (i == 0) {

            for (let j = mdIdx; j < 7 && md <= mmIdx; j++) {
                mwDiv[j].innerText = md++
                if(minitday.getDate() ===md-1 ){
                    //wDiv[j].classList.add("cdate")
                }

            }

        } else {

            for (let j = 0; j < 7 && md <= mmIdx; j++) {
                mwDiv[j].innerText = md++
                if(minitday.getDate() === md-1 ){
                    //wDiv[j].classList.add("cdate")
                }
            }
        }

    }










}