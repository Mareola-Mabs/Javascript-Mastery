class KeyEvent {
    constructor(){
        this.keyElement = document.querySelector('.key')
        this.itemElement = document.querySelector('.items')

        this.itemOne = document.querySelector('.item-val.item__one')
        this.itemTwo = document.querySelector('.item-val.item__two')
        this.itemThree = document.querySelector('.item-val.item__three')


    }

    getKey(e){
        this.e = e

        this.keyElement.style.display = "none"
        this.itemElement.style.display = "flex"

        this.itemOne.textContent = e.key
        this.itemTwo.textContent = e.keyCode
        this.itemThree.textContent = e.code
       

    }
}

const newKeyEvent = new KeyEvent()

document.addEventListener("keypress", (e)=>{
    return newKeyEvent.getKey(e)
})