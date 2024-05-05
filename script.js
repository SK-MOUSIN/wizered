function page1Animation() {
    var tl = gsap.timeline()

tl.from("nav .left, nav .right h4, nav .right button",  {
    y:-40,
    duration: 0.3,
    delay: 0.7,
    opacity: 0,
    stagger: 0.15
})

tl.from(".main .left h1, .main .left p", {
    x:-300, 
    duration:0.3,
    opacity: 0,
    stagger: 0.5
})

tl.from(".main .left button", {
    y: 200, 
    duration: 0.3,
    opacity: 0,
})

tl.from(".main .right img", {
    x: 300,
    duration: 0.3,
    opacity: 0
}, "-=0.1")
}
page1Animation()

function page2FirstAnimation() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger:(".section2"),
            scroller: "body",
            start: "top 50%",
            end: "top 50%",
            scrub: 2
        }
    
    })
    tl2.from(".section2 .logos .logo img", {
        opacity: 0,
        duration: 0.5,
        x: -100,
        stagger: 0.12,
    })
    
    tl2.from(".section2 .services .service", {
        x:-200,
        opacity: 0,
        duration: 0.5,
    }, "ani")
    
    tl2.from(".section2 .services p", {
        x: 200,
        opacity: 0,
        duration: 0.5,
    }, "ani")
}
page2FirstAnimation()

function page2secondAnimation(){
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2 .cards",
            scroller: "body",
            scrub: 2,
            start: "top 40%",
            end: "top 40%"
        }
    })
    
    tl3.from(".section2 .cards .left-card", {
        x: -300,
        opacity: 0,
        duration: 30,
        ease: "easeInOut"
    }, "ani1")
    
    tl3.from(".section2 .cards .right-card", {
        x: 300,
        opacity: 0,
        duration: 30,
        ease: "easeInOut"
    }, "ani1")
}
page2secondAnimation()

function page3firstAnimation(){
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section3",
            scroller: "body",
            scrub:2,
            start: "top 50%",
            end: "top 40%"
        }
    })
    
    tl4.from(".section3 .upper .container .left h2, .section3 .upper .container .left p, .section3 .upper .container .left button", {
        x: -200,
        opacity: 0,
        duration: 0.8,
        stagger: 0.5
    }, "ani2")
    
    tl4.from(".section3 .upper .container .right img", {
        x: 200,
        opacity: 0,
        duration: 0.8
    }, "ani2")
}
page3firstAnimation()

function page3secondAnimation() {
    var tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section3 .lower",
            scroller: "body",
            scrub:2,
            start: "top 60%",
            end: "top 60%",
        }
    })
    
    tl5.from(".section3 .lower .top .left", {
        x:-200,
        opacity: 0,
        duration: 0.5,
    }, "ani3")
    
    tl5.from(".section3 .lower .top .right", {
        x:200,
        opacity: 0,
        duration: 0.5
    }, "ani3")
    
    tl5.from(".section3 .lower .bottom .container .text", {
        x:-200,
        opacity: 0,
        duration: 1,
        stagger: 0.8
    })
}
page3secondAnimation()