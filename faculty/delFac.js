document.body.addEventListener('click', async (e) => {

    if (e.target.class = 'dele-fac') {

        let userToDel ={
            email : "",
            token :"",
            delEmail :""
        }

        let delBtn = document.querySelector('.dele-fac')

        if (localStorage.getItem('login')) {

            let facvalue = delBtn.getAttribute('datavalue')

            let facDet = JSON.parse(localStorage.getItem('login'))

            userToDel.delEmail = facvalue;
            userToDel.email = facDet.email;
            userToDel.token = facDet.token
            
             
            let delUser = await axios.delete('http://localhost:3000/delFac',userToDel)
        } else {
            console.log("User not logged In");
        }
    }

})