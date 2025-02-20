import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

let imageCon = gsap.utils.toArray(".img1");
let scrolCon = gsap.utils.toArray(".scrolNav");

let headTl = gsap.timeline();

headTl.from(".company-name", {
    duration: 1,
    opacity: 0,
    y: -100
})

headTl.fromTo(".li-item", {
    duration: 1,
    opacity: 0,
    y: 100,
}, {
    opacity: 1,
    y: 0,
    stagger: 0.3
})

headTl.from(".account-holder", {
    duration: 1,
    opacity: 0,
    y: -100
})

tl.from(imageCon, {
    duration: 1,
    opacity: 0,
    y: 700,
    stagger: 0.5
})

tl.from(scrolCon, {
    duration: 1,
    opacity: 0,
    y: 100,
    stagger: 0.5
})

gsap.from(".card1", {
    duration: 2,
    opacity: 0,
    x: 400,
    scrollTrigger: {
        trigger: ".card1",
        toggleActions: "restart none none none"
    }
})

gsap.from(".card2", {
    duration: 2,
    opacity: 0,
    x: -400,
    scrollTrigger: {
        trigger: ".card2",
        toggleActions: "restart none none none"
    }
})

gsap.from(".card3", {
    duration: 2,
    opacity: 0,
    x: 400,
    scrollTrigger: {
        trigger: ".card3",
        toggleActions: "restart none none none"
    }
})

gsap.from(".num1", {
    duration: 2,
    opacity: 0,
    x: -400,
    letterSpacing: "150px",
    scrollTrigger: {
        trigger: ".card1",
        toggleActions: "restart none none none"
    }
})

gsap.from(".num2", {
    duration: 2,
    letterSpacing: "150px",
    opacity: 0,
    x: 400,
    scrollTrigger: {
        trigger: ".card2",
        toggleActions: "restart none none none"
    }
})

gsap.from(".num3", {
    duration: 2,
    letterSpacing: "150px",
    opacity: 0,
    x: -400,
    scrollTrigger: {
        trigger: ".card3",
        toggleActions: "restart none none none"
    }
})