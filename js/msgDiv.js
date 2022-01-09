let mssgDiv = document.querySelector('.message-div')

function msg(text) {
    mssgDiv.innerText = text
    setTimeout(() => {
        mssgDiv.style.visibility = 'visible'
    }, 500);
    setTimeout(() => {
        mssgDiv.style.visibility = 'hidden'
    }, 2000);
}