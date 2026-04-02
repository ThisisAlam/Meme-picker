// import { catsData } from '/data.js'
const catsData = [
    {
        emotionTags: ["moody"],
        isGif: false,
        image: "angry.jpeg",
        alt: "A cat looking moody",
    },
    {
        emotionTags: ["moody", "insomniac"],
        isGif: false,
        image: "angry2.jpeg",
        alt: "A cat looking moody",
    },
    {
        emotionTags: ["moody"],
        isGif: false,
        image: "angry3.jpeg",
        alt: "A cat looking moody",
    },
    {
        emotionTags: ["confused", "sad"],
        isGif: false,
        image: "confused.jpeg",
        alt: "A cat looking confused",
    },
    {
        emotionTags: ["dominant", "moody"],
        isGif: false,
        image: "dominant.jpeg",
        alt: "A cat looking dominant",
    },
    {
        emotionTags: ["happy", "relaxed"],
        isGif: false,
        image: "happy.jpeg",
        alt: "A cat looking happy",
    },
    {
        emotionTags: ["hungry"],
        isGif: false,
        image: "hungry.jpeg",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["hungry"],
        isGif: false,
        image: "hungry1.jpeg",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["insomniac"],
        isGif: false,
        image: "insomnia.jpeg",
        alt: "A cat looking insomniac",
    },
    {
        emotionTags: ["insomniac"],
        isGif: false,
        image: "insomnia1.jpeg",
        alt: "A cat looking insomniac",
    },
    {
        emotionTags: ["relaxed"],
        isGif: false,
        image: "lazy.jpeg",
        alt: "A cat looking lazy",
    },
    {
        emotionTags: ["scared"],
        isGif: false,
        image: "nervous.jpeg",
        alt: "A cat looking nervous",
    },
    {
        emotionTags: ["sad"],
        isGif: false,
        image: "sad.jpeg",
        alt: "A cat looking sad",
    },
    {
        emotionTags: ["sad", "moody"],
        isGif: false,
        image: "sad1.jpeg",
        alt: "A cat looking sad",
    },
    {
        emotionTags: ["moody"],
        isGif: true,
        image: "angry.gif",
        alt: "A cat looking moody",
    },
    {
        emotionTags: ["moody"],
        isGif: true,
        image: "angry2.gif",
        alt: "A cat looking angry",
    },
    {
        emotionTags: ["confused"],
        isGif: true,
        image: "confused2.gif",
        alt: "A cat looking confused",
    },
    {
        emotionTags: ["dominant"],
        isGif: true,
        image: "dominant.gif",
        alt: "A cat looking dominant",
    },
    {
        emotionTags: ["happy"],
        isGif: true,
        image: "happy.gif",
        alt: "A cat looking happy",
    },
    {
        emotionTags: ["hungry", "sad", "confused"],
        isGif: true,
        image: "confused.gif",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["hungry"],
        isGif: true,
        image: "hungry.gif",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["hungry"],
        isGif: true,
        image: "hungry2.gif",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["insomniac", "scared"],
        isGif: true,
        image: "insomnia2.gif",
        alt: "A cat looking insomniac",
    },
    {
        emotionTags: ["relaxed"],
        isGif: true,
        image: "lazy.gif",
        alt: "A cat looking relaxed",
    },
    {
        emotionTags: ["relaxed"],
        isGif: true,
        image: "relaxed2.gif",
        alt: "A cat looking relaxed",
    },
    {
        emotionTags: ["scared", "sad"],
        isGif: true,
        image: "nervous.gif",
        alt: "A cat looking nervous",
    },
    {
        emotionTags: ["scared"],
        isGif: true,
        image: "nervous2.gif",
        alt: "A cat looking scared",
    },
    {
        emotionTags: ["sad"],
        isGif: true,
        image: "sad.gif",
        alt: "A cat looking sad",
    },
]

const memeModal = document.getElementById('meme-modal')
const memeModalCloseBtn = document.getElementById('meme-modal-close-btn')
const memeModalInner = document.getElementById('meme-modal-inner')
const emotionRadioContainer = document.getElementById('emotion-radios')
const isGifOptionChecked = document.getElementById('gifs-only-option')


//Emotion Array//
const emotionArray = []
for (let cats of catsData) {
    for (let emotions of cats.emotionTags) {
        // const emotionArray = [] //
        if (!emotionArray.includes(emotions)) {
            emotionArray.push(emotions)
        }else {}
    }
}


//Display Emotion Radio Input//
let displayemotionRadio = ''
for (let emotion of emotionArray) {
        displayemotionRadio += `
    <div class="emotion-radio-input">
        <label for="${emotion}">${emotion}</label>
        <input type="radio" id="${emotion}" value="${emotion}" name="radio-input">
    </div>`
} emotionRadioContainer.innerHTML = displayemotionRadio


emotionRadioContainer.addEventListener('change', highlightCheckedOption)
function highlightCheckedOption(e){
    const radios = document.getElementsByClassName('emotion-radio-input')
    for (let radio of radios){
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

// Render Function //
const getImageBtn = document.getElementById('get-image-btn')

getImageBtn.addEventListener('click' , function() {
    
    const selectedRadioInput = document.querySelector('input[type="radio"]:checked')
    
    if (!selectedRadioInput) {
        return
    }

    const selectedEmotion = selectedRadioInput.value
    const gifActive = isGifOptionChecked.checked

    const matchingCatsArray = catsData.filter(function(cat){
        if(gifActive){
            return cat.emotionTags.includes(selectedEmotion) && cat.isGif
        }
        else{
            return cat.emotionTags.includes(selectedEmotion)
        }
    })

    let catObjectArray 
    if(matchingCatsArray.length === 1){
        catObjectArray= matchingCatsArray[0]
    }
    else{const randomNumber = Math.floor(Math.random()*matchingCatsArray.length)
        catObjectArray= matchingCatsArray[randomNumber]
    }


    memeModalInner.innerHTML = `
        <img class="cat-img" src="./images/${catObjectArray.image}" 
        alt="${catObjectArray.alt}">
        `
    memeModal.style.display = 'flex' 

})

// Close button //
memeModalCloseBtn.addEventListener('click', function() {
        memeModal.style.display = 'none'
})









