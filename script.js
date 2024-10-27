var crsr = document.querySelector("#cursor");
var crsrblr = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (e) {
  crsr.style.left = e.x + "px";
  crsr.style.top = e.y + "px";
  crsrblr.style.left = e.x - 180 + "px";
  crsrblr.style.top = e.y - 180 + "px";
});

document.querySelectorAll("#nav li").forEach(function (ele) {
  ele.addEventListener("mouseenter", function () {
    crsr.style.scale = 2;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
    crsr.style.transition = "all 0.2s ease";
  });
  ele.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #000";
    crsr.style.backgroundColor = "#95c11e";
    crsr.style.transition = "all 0.2s ease";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000000",
  height: "100px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 5,
  },
});

gsap.from("#about img, #about-text", {
  y: 90,
  opacity: 0,
  duration: 1.2,
  // ease: "power2.inOut",
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#about",
    scroller: "body",
    start: "top 70%",
    end: "bottom 30%",
    scrub: 1,
  },
});

gsap.from(".cards", {
  scale: 0.8,
  opacity: 0,
  duration: 1.2,
  // ease: "power2.inOut",
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".cards",
    scroller: "body",
    start: "top 70%",
    end: "top 60%",
    scrub: 2,
  },
});

gsap.from("#quote-left", {
  y: -70,
  x: -70,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#quote-left",
    scroller: "body",
    start: "top 70%",
    end: "top 60%",
    scrub: 4
  },
});

gsap.from("#quote-right", {
  y: 70,
  x: 70,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#quote-right",
    scroller: "body",
    // markers: true,
    start: "top 90%",
    end: "top 85%",
    scrub: 4
  },
});

gsap.from("#course-cta h3", {
  y: 70,
  scrollTrigger: {
    trigger: "#course-cta h3",
    scroller: "body",
    start: "top 75%",
    end: "top 90%",
    // markers: true,
    scrub: 4
  },
});