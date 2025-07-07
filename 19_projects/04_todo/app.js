class Todo{
    constructor(){
        this.todoInput = document.getElementById('todoinput')

        this.todoItems = document.querySelectorAll('.todo__items')

        this.todoItemCancel = document.querySelectorAll('.todo__items-cancel')

        this.main = document.getElementsByTagName('main')[0]
    }

    addTodo(e){
        this.e = e
        if(this.todoInput.value === ""){
            alert("Kindly Enter a List")
            return false
        }
        else{

            const todoItem = document.createElement("div")

            todoItem.classList.add("todo__items")
            todoItem.textContent = this.todoInput.value
            

            const todoCancel = document.createElement("div")

            todoCancel.classList.add("todo__items-cancel")
            todoCancel.textContent = "❌"

            todoItem.appendChild(todoCancel)

            this.main.append(todoItem)

            const newTodoCancel = document.querySelectorAll('.todo__items-cancel')

            this.todoInput.value = ""

            newTodoCancel.forEach(item =>{
                item.addEventListener("click", ()=>{
                    item.parentElement.remove()
                })
            })
        }
    }

    
}

const newTodo = new Todo()

document.addEventListener("keypress", (e)=>{
    if(e.key === "Enter"){
        return newTodo.addTodo(e)
    }
})



