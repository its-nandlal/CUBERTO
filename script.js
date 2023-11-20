Shery.mouseFollower();
Shery.makeMagnet(".mag");
Shery.hoverWithMediaCircle(".hvr", { videos: ["./0.mp4", "./2.mp4", "./3.mp4"] })


gsap.to(".flelem", {
  scrollTrigger: {
    trigger: "#fsection",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".lastelem",
    scrub: 1
  },
  y: "-300%",
  ease: Power3,
})

let section =  document.querySelectorAll(".flelem")
Shery.imageEffect("#imgsec", {style: 5,
  slideStyle: (setScroll) => {
   section.forEach(function (sect, index) {
      ScrollTrigger.create({
        trigger: sect,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress+index);
        }
    })
    })
  }
})