const dlbtn = document.getElementById('dl-btn');
const url_input = document.getElementById('url-input');

async function sendUrl(URL) {
    // const response = await fetch(`/download?URL=${URL}`, {
    //     method: 'GET'
    // })
    // const data = await response.json();
    // console.log(data)
    window.location.href = `/download?URL=${URL}`
}

function downloadMP3(e) {
    e.preventDefault()
    const URL = url_input.value;
    sendUrl(URL)
}  

dlbtn.addEventListener('click', downloadMP3)