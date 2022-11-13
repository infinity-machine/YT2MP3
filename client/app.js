const dlbtn = document.getElementById('dl-btn');
const url = document.getElementById('url-input');

function downloadMP3(e) {
    e.preventDefault()
    console.log(url.value)
}  

dlbtn.addEventListener('click', downloadMP3)