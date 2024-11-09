function LocomotiveJs(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
LocomotiveJs()

// Section-2 Code starts here   
var clutter = "";

document.querySelector("#section-2>p").textContent.split(" ").forEach(function(e){
    clutter += `<span> ${e} </span>`;
    document.querySelector("#section-2>p").innerHTML = clutter;
})

gsap.to("#section-2>p>span", {
    color: "#fff",
    scrollTrigger:{
        trigger:`#section-2>p>span`,
        // markers: true,
        start: "top bottom",
        end: "bottom 50%",
        scroller:`#main`,
        scrub:0.5,
    },
    stagger: 0.2,
})

// CANVAS CODE
function canvas(){
    const canvas = document.querySelector("#section-3>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        var data = `
        ./assets/images/frames0007.png
        ./assets/images/frames00010.png
        ./assets/images/frames00013.png
        ./assets/images/frames00016.png
        ./assets/images/frames00019.png
        ./assets/images/frames00022.png
        ./assets/images/frames00025.png
        ./assets/images/frames00028.png
        ./assets/images/frames00031.png
        ./assets/images/frames00034.png
        ./assets/images/frames00037.png
        ./assets/images/frames00040.png
        ./assets/images/frames00043.png
        ./assets/images/frames00046.png
        ./assets/images/frames00049.png
        ./assets/images/frames00052.png
        ./assets/images/frames00055.png
        ./assets/images/frames00058.png
        ./assets/images/frames00061.png
        ./assets/images/frames00064.png
        ./assets/images/frames00067.png
        ./assets/images/frames00070.png
        ./assets/images/frames00073.png
        ./assets/images/frames00076.png
        ./assets/images/frames00079.png
        ./assets/images/frames00082.png
        ./assets/images/frames00085.png
        ./assets/images/frames00088.png
        ./assets/images/frames00091.png
        ./assets/images/frames00094.png
        ./assets/images/frames00097.png
        ./assets/images/frames00100.png
        ./assets/images/frames00103.png
        ./assets/images/frames00106.png
        ./assets/images/frames00109.png
        ./assets/images/frames00112.png
        ./assets/images/frames00115.png
        ./assets/images/frames00118.png
        ./assets/images/frames00121.png
        ./assets/images/frames00124.png
        ./assets/images/frames00127.png
        ./assets/images/frames00130.png
        ./assets/images/frames00133.png
        ./assets/images/frames00136.png
        ./assets/images/frames00139.png
        ./assets/images/frames00142.png
        ./assets/images/frames00145.png
        ./assets/images/frames00148.png
        ./assets/images/frames00151.png
        ./assets/images/frames00154.png
        ./assets/images/frames00157.png
        ./assets/images/frames00160.png
        ./assets/images/frames00163.png
        ./assets/images/frames00166.png
        ./assets/images/frames00169.png
        ./assets/images/frames00172.png
        ./assets/images/frames00175.png
        ./assets/images/frames00178.png
        ./assets/images/frames00181.png
        ./assets/images/frames00184.png
        ./assets/images/frames00187.png
        ./assets/images/frames00190.png
        ./assets/images/frames00193.png
        ./assets/images/frames00196.png
        ./assets/images/frames00199.png
        ./assets/images/frames00202.png
        `;
        return data.split("\n")[index];
    }

    const frameCount = 67;

    const images = [];
    const imageSeq = {
        frame: 1,                                                                               
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: .5,
            trigger: `#section-3`,
            start: `top top`,
            end: `250% top`,
            scroller: `#main`,
        },
        onUpdate: render,
    });

    images[1].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }
    ScrollTrigger.create({

    trigger: "#section-3",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
    });
}
canvas()

// Section-4 Code starts here   
var clutter = "";

document.querySelector("#section-4>p").textContent.split(" ").forEach(function(e){
    clutter += `<span> ${e} </span>`;
    document.querySelector("#section-4>p").innerHTML = clutter;
})

gsap.to("#section-4>p>span", {
    color: "#fff",
    scrollTrigger:{
        trigger:`#section-4>p>span`,
        // markers: true,
        start: "top bottom",
        end: "bottom 50%",
        scroller:`#main`,
        scrub:0.5,
    },
    stagger: 0.2,
})

// CANVAS2 CODE
function canvas2(){
    const canvas = document.querySelector("#section-5>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        var data = `
        ./assets/images/bridges00004.png
        ./assets/images/bridges00007.png
        ./assets/images/bridges00010.png
        ./assets/images/bridges00013.png
        ./assets/images/bridges00016.png
        ./assets/images/bridges00019.png
        ./assets/images/bridges00022.png
        ./assets/images/bridges00025.png
        ./assets/images/bridges00028.png
        ./assets/images/bridges00031.png
        ./assets/images/bridges00034.png
        ./assets/images/bridges00037.png
        ./assets/images/bridges00040.png
        ./assets/images/bridges00043.png
        ./assets/images/bridges00046.png
        ./assets/images/bridges00049.png
        ./assets/images/bridges00052.png
        ./assets/images/bridges00055.png
        ./assets/images/bridges00058.png
        ./assets/images/bridges00061.png
        ./assets/images/bridges00064.png
        ./assets/images/bridges00067.png
        ./assets/images/bridges00070.png
        ./assets/images/bridges00073.png
        ./assets/images/bridges00076.png
        ./assets/images/bridges00079.png
        ./assets/images/bridges00082.png
        ./assets/images/bridges00085.png
        ./assets/images/bridges00088.png
        ./assets/images/bridges00091.png
        ./assets/images/bridges00094.png
        ./assets/images/bridges00097.png
        ./assets/images/bridges00100.png
        ./assets/images/bridges00103.png
        ./assets/images/bridges00106.png
        ./assets/images/bridges00109.png
        ./assets/images/bridges00112.png
        ./assets/images/bridges00115.png
        ./assets/images/bridges00118.png
        ./assets/images/bridges00121.png
        ./assets/images/bridges00124.png
        ./assets/images/bridges00127.png
        ./assets/images/bridges00130.png
        ./assets/images/bridges00133.png
        ./assets/images/bridges00136.png
        ./assets/images/bridges00139.png
        ./assets/images/bridges00142.png
        ./assets/images/bridges00145.png
        ./assets/images/bridges00148.png
        ./assets/images/bridges00151.png
        ./assets/images/bridges00154.png
        ./assets/images/bridges00157.png
        ./assets/images/bridges00160.png
        ./assets/images/bridges00163.png
        `;
        return data.split("\n")[index];
    }

    const frameCount = 54;

    const images = [];
    const imageSeq = {
        frame: 1,                                                                               
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: .5,
            trigger: `#section-5`,
            start: `top top`,
            end: `250% top`,
            scroller: `#main`,
        },
        onUpdate: render,
    });

    images[1].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }
    ScrollTrigger.create({

    trigger: "#section-5",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
    });
}
canvas2()