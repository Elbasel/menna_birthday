const mainImage = document.querySelector('#main-img')

function slideShow() {
    setInterval(() => {
        counter++;
        if (counter > 3) counter = 1;
        mainImage.setAttribute('src', `images/menna${counter}.jpg`)
    }, 5000);
}

let counter = 1;

slideShow()

// const media = document.querySelector('audio')
// media.muted = true;
// media.setAttribute('webkit-playsinline', true);
// media.setAttribute('playsinline', true)
// media.play()

const media = new Audio('./song.mp3')
const body = document.querySelector('body')
body.addEventListener('click', () => media.play())