class Submit{
    constructor(){

        this.item = document.querySelectorAll('.item')
        this.submitBtn = document.querySelector('.submitBtn')
        this.feedback = document.querySelector('.item')    
        this.item__final = document.querySelector('.item__final')
        this.feedback__text = document.querySelector('.feedback__text')

        let feedbackValue
        this.feedbackValue = feedbackValue

    }

    itemClick(){
        this.item.forEach(item =>{

            item.addEventListener("click", (e)=>{

                this.item.forEach(obj => obj.classList.remove("active"))

                item.classList.add("active")

                
                this.feedbackValue = item.getAttribute("data-value")

            })
        })
    }

    submitFeedback(){
        this.submitBtn.addEventListener("click",()=>{
            if (this.feedbackValue === undefined){
                alert("Kindly Select a Rating")
                return false
            }
            else{
                console.log(this.feedbackValue)

                this.item.forEach(objs =>{
                    objs.style.display = "none"
                })

                this.item__final.style.display = "flex"

                this.feedback__text.innerText = `Feedback: ${this.feedbackValue}`


                
            }
        })
    }

}

const submitFeedback = new Submit()

submitFeedback.itemClick()

submitFeedback.submitFeedback()



