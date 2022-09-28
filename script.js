// gsap.to("#bottle",{
//     scrollTrigger:{
//         trigger:"#bottle",
//         scroller:"#main",
//         start:"top 5.5%",
//         end:"top -400%",
//         markers:true,
//         scrub:2,
//         pin:true
//     },
//     rotate:"-10deg",
//     // ease:Expo.easeInOut
// })

// gsap.to("#bottle",{
//     scrollTrigger:{
//         trigger:"#bottle",
//         scroller:"#main",
//         start:"top 5%",
//         end:"top -70%",
//         markers:true,
//         scrub:2,
//         pin:true
//     },
//  opacity:0
//     // ease:Expo.easeInOut
// })


var tl = gsap.timeline();
  tl
    .to("#bottel", {
      scrollTrigger: {
        trigger: "#bottle",
        scroller: "#main",
        start: "top 0%",
        pin: true,
        end: "top -122%",
        markers: true,
        scrub:2,
      },
      rotate: "-15deg",
      ease: Expo.easeInOut,
      // stagger:0.05
    })

    .to("#bottel", {
      scrollTrigger: {
        trigger: "#bottle",
        scroller: "#main",
        start: "top 5%",
        pin: true,
        end: "top 25%",
        markers: true,
        scrub: 2,
      },
      scale: 0.55,
      // opacity: 0
    })