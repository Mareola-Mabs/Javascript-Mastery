// gsap.method(element, vars obj)

class Elements{
    constructor(playBtn = '.play', pauseBtn = '.pause', restartBtn = '.restart', box = '.box'){
        this.playBtn = document.querySelector(playBtn)
        this.pauseBtn = document.querySelector(pauseBtn)
        this.restartBtn = document.querySelector(restartBtn)
        this.box = document.querySelector(box)

        this.init()


    }

    init(){
        if (this.playBtn && this.pauseBtn && this.restartBtn && this.box){
            this.playBtn.addEventListener("click", ()=> this.play())
            this.pauseBtn.addEventListener("click", ()=> this.pause())
            this.restartBtn.addEventListener("click", ()=> this.restart())

            // GSAP Animation
            this.tween = gsap.to(this.box, {
            y: -200,
            duration: 5,
            backgroundColor: "teal",
        })

        }
        else{
            console.warn("HTML Element Not Found")
            return false
        }
    }

    play(){
        this.tween.play()
    }
    pause(){
        this.tween.pause()
    }
    restart(){
        this.tween.restart()
    }
}

const newElement = new Elements()