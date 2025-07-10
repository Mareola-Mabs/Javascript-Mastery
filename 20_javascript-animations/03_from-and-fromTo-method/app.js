// gsap.method(element, vars obj)

// From and From to Methods

gsap.from(".box1", {
    y: -200,
    duration: 2,
    ease: "linear",
    repeat: -1,
    yoyo: true
})


gsap.fromTo(".box2", {
    y: 200,
    opacity: 0
}, {
    y: -200,
    opacity: 1,
    ease: "linear",
    duration: 2,
    borderRadius: "10px",
    repeat: -1,
    yoyo: true,

})


