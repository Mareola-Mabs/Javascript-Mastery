// gsap.method(element, vars obj)

gsap.set(".box", {
    opacity: 0,
    background: "yellow"

})

gsap.to(".box", {
    opacity: 1,
    duration: 2,
    repeat: -1,
    background: "crimson",
    yoyo:true //reverse itself
})
