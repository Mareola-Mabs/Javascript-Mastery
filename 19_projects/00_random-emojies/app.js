const emoji = document.getElementById("emoji");



const emojis = [
    "😂",
    "🤣", 
    "😃", 
    "😄",
    "😅",
    "😆",
    "😉",
    "😊",
    "😋",
    "😎",
    "😍",
    "😘",
    "😗",
    "😙",
    "😚",
    "🙂",
    "🤗",
    "🤩",
    "🤔",
    "🤨",
    "😐",
    "😑",
    "😶",
    "🙄",
    "😏",
    "😣",
    "❤️",
    "💔",
    "💕",
    "💞",
    "💓",
    "💗",
    "💖",
    "💘",
    "💝"
]



class Emoji {
    constructor(emoji, emojis){
        this.emoji = emoji
        this.emojis = emojis
    }


    getRandomEmoji(){
        return setInterval(()=>{
            emoji.textContent = this.emojis[Math.floor(Math.random() * this.emojis.length)]
        },1000)
    }


}

const newEmojiInstance = new Emoji(emoji, emojis)

newEmojiInstance.getRandomEmoji()

