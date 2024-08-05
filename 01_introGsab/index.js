// // gsap.to(".box", {
// //    x:900,
// //    y:300,
// //    duration: 2,
// //    delay:2, 
// //    rotate: 360,
// //    backgroundColor: 'green',
// //    borderRadius: "50%",
// //    repeat: -1,//infinite(-1) 
// //    yoyo: true,
// // });   
// // gsap.from("h1", {
// //    y:30,
// //    duration: 1,
// //    delay:4,
// //    opacity:0,
// //    stagger:1, //stagger if if there are many tag animated same it. sent one after one 
// //    stagger:-1, //same but oposite
// //    repeat: 2,//3 time one auto and 2 as repeat
// // })
   
// //----------------Time line gsap -----------------------
// To create a timeline in GSAP, you can use the gsap.timeline() method. This allows you to sequence multiple animations and control their timing relative to each other. Here's an example of how to create a timeline for your .box element: 
//without time line if there three box to animate 
// gsap.to(".box", {
//    x:600,
//    duration: 1,
//    delay: 1,

// })
// gsap.to(".box2", {
//    x:500,
   
//    delay: 2, //first box (duration + delay) = 2s means it delay
   
// })
// gsap.to(".box3", {
//    x:400,
//    delay: 1,  //above two box (duration + delay+delay) = 4s means it delay
   
// })
//----------now we will use power of time line ----------

// let timeLine = gsap.timeline();
// timeLine.to(".box", {
//       x:600,
//       duration: 1,
//       delay: 1,
   
//    })
//    timeLine.to(".box2", {
//       x:500,   
//    })
//    timeLine.to(".box3", {
//       x:400,    
//    }) // now we dont need to cal time of delay it auta done one after one

