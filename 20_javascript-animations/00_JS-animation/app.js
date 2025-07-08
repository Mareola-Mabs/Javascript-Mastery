class MenuToggle {
    constructor(buttonSelector = 'button', sidebarSelector = '.sidebar') {
        this.sidebar = document.querySelector(sidebarSelector)
        this.button = document.querySelector(buttonSelector)

        this.init()
    }

    init() {
        if (this.button && this.sidebar) {
            this.button.addEventListener("click", () => this.toggleSidebar())
        } else {
            console.warn("Button or Sidebar element not found.")
        }
    }

    toggleSidebar() {
        this.sidebar.classList.toggle("hide")
    }
}

const menuToggle = new MenuToggle()