let facList = document.querySelector(".faculty-list");


document.addEventListener('DOMContentLoaded', async () => {

    let userArr = await axios.get('http://localhost:3000/auth/getFac')


    let filUserArray = userArr.data.users.filter((userObj) => {

        return userObj.role != 'Admin'
    })

    for (let i = 0; i < filUserArray.length; i++) {

        let pdiv = document.createElement('div')
        pdiv.setAttribute('class', "faculty-info")

        let div = document.createElement('div')
        div.setAttribute('class', "faculty-name")
        div.innerText = filUserArray[i].name

        let div1 = document.createElement('div')
        div1.setAttribute('class', "dele-fac")
        div1.setAttribute('datavalue',`${filUserArray[i].email}`)
        let icon = document.createElement('i')
        icon.setAttribute('class', "fas fa-trash")
        div1.appendChild(icon)

        pdiv.appendChild(div)
        pdiv.appendChild(div1)

        facList.appendChild(pdiv)
    }

})




{
    /* <div class="faculty-info">
            <div class="faculty-name">${filUserArray[i].name}</div>
            <div class="dele-fac"><i class="fas fa-trash"></i></div>
        </div> */
}