import './style.css'
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Observer } from "gsap/observer";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(DrawSVGPlugin, Observer, ScrambleTextPlugin, ScrollTrigger, SplitText, TextPlugin);

// const draw_timeline = gsap.timeline()

// draw_timeline.from(".heart_path", {
//   duration: 2,
//   drawSVG: 0,
// })

// const path = document.querySelector("#heart")

// for (let i = 0; i < 10; i++) {
//   const clone = path.cloneNode(true);
//   document.body.appendChild(clone);

//   gsap.from(clone, {
//     drawSVG: 0,
//     duration: 2,
//     delay: i * 0.3
//   });
  
//   gsap.to(clone, {
//     position: "absolute",
//     left: gsap.utils.random(0, 1900),
//     top: gsap.utils.random(0, 800),
//     duration: 1,
//   })
// }

// gsap.from("#heart", {
//   drawSVG: 0,
//   duration: 2,
//   delay: i * 0.3
// });

// gsap.to("#heart", {
//   x: gsap.utils.random(50, (window.innerHeight - 500)),
//   y: gsap.utils.random(50, (window.innerWidth - 500)),
//   duration: 1
// })

// Pulse animation
// gsap.to(".heart_path", {
//   scale: 1.8,
//   transformOrigin: "50% 50%",
//   duration: 0.6,
//   repeat: -1,
//   yoyo: true,
// });


ScrollTrigger.create(
  {
    trigger: ".test100",
    pin: true,
    start: "center center",
    endTrigger: ".test200",
    end: "bottom 50%+=100px",
    onToggle: (self) => console.log('toggled, isActive:', self.isActive),
    onUpdate: (self) => {
      gsap.to(".test100", {
        color: `rgb(${self.progress.toFixed(3) * 255}, 0, 0)`
      })
    }
  }
)