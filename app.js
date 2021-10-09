const myEmojis = []

const emojiInput = document.getElementById("emoji-input")

function renderEmojis(emoji){
    const emojiContainer = document.getElementById("emoji-container")
    let newEmojis = "" 
    for (let i = 0; i < emoji.length; i++){
        newEmojis += `<span>${emoji[i]}</span>`
    }
    emojiContainer.innerHTML = newEmojis
}

renderEmojis(myEmojis)

function modifyEmojis(method, emoji){
    if(emojiInput){
        emoji[method](emojiInput.value)
        emojiInput.value=""
        renderEmojis(myEmojis)
    }
}

function removeEmoji(method, emoji){
    emoji[method]()
    renderEmojis(myEmojis)
}

document.getElementById("push-btn").addEventListener("click", function (){
    // if(emojiInput){
    //     myEmojis.push(emojiInput.value)
    //     emojiInput.value=""
    //     renderEmojis(myEmojis)
    // }
    
    modifyEmojis("push", myEmojis)
    localStorage.setItem("myEmo", JSON.stringify(myEmojis))
})

document.getElementById("unshift-btn").addEventListener("click", function (){
    modifyEmojis("unshift", myEmojis)
    localStorage.setItem("myEmo", JSON.stringify(myEmojis))
})

document.getElementById("pop-btn").addEventListener("click", function (){
        removeEmoji("pop", myEmojis)
       
})

document.getElementById("shift-btn").addEventListener("click", function (){
        removeEmoji("shift", myEmojis)
    
})


let emojiFromStorage = JSON.parse(localStorage.getItem("myEmo"))

if(emojiFromStorage){
    myEmo = emojiFromStorage
    renderEmojis(myEmo)
}