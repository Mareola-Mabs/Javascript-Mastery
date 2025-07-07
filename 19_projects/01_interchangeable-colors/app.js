class Switcher{
    constructor(){
        const bodyElement = document.body
        const btns = document.querySelectorAll('.btn')

        this.bodyElement = bodyElement
        this.btns = btns
    }

    changeBG(){
        return this.btns.forEach(item =>{
            item.addEventListener("click", ()=>{
                return this.bodyElement.style.background = item.value
            })
        })
    }
}


const switcherInstance = new Switcher()

switcherInstance.changeBG()