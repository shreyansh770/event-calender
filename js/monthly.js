let wBox = document.querySelectorAll(".week")

let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]


let getFullCalendar = async (month, year) => {

// typeof
    let dday = new Date(`${month} 1 , ${year}`);
    let dIdx = dday.getDay();
    let mIdx = days[dday.getMonth()]

    let d = 1


    for (let i = 0; i < 6; i++) {
        let wDiv = wBox[i].querySelectorAll(".week-date")
        for (let j = 0; j < 7; j++) {
            wDiv[j].innerText = ""
        }

    }

    for (let i = 0; i < 6; i++) {
        let wDiv = wBox[i].querySelectorAll(".week-date")


        if (i == 0) {

            for (let j = dIdx; j < 7 && d <= mIdx; j++) {
                wDiv[j].innerText = d++

                let isEvent = await axios.get('http://localhost:3000/getEvent', {
                    params: {
                        eventYear: year,
                        eventMonth: month,
                        eventDay: d-1
                    }
                })

                if (isEvent.data.result == true) {
                    let eventDiv = document.createElement("div");
                    eventDiv.classList.add("event")
                    // eventDiv.innerText = eventObj.title;
                    wDiv[j].appendChild(eventDiv)

                } else {
                    if (tday.getDate() === d - 1) {
                        wDiv[j].classList.add("cdate")
                    }
                }


            }

        } else {

            for (let j = 0; j < 7 && d <= mIdx; j++) {
                wDiv[j].innerText = d++
                let isEvent = await axios.get('http://localhost:3000/getEvent', {
                    params: {
                        eventYear: year,
                        eventMonth: month,
                        eventDay: d-1
                    }
                })

                if (isEvent.data.result == true) {

                    let eventDiv = document.createElement("div");
                    eventDiv.classList.add("event")
                    // eventDiv.innerText = eventObj.title;
                    wDiv[j].appendChild(eventDiv)


                } else {
                    if (tday.getDate() === d - 1) {
                        wDiv[j].classList.add("cdate")
                    }
                }
            }
        }

    }










}