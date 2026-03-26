import './style.css'
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Observer } from "gsap/observer";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(DrawSVGPlugin, Observer, ScrambleTextPlugin, ScrollTrigger, SplitText, TextPlugin);

const draw_timeline = gsap.timeline()

draw_timeline.from(".heart_path", {
  duration: 2,
  drawSVG: 0,
})

// Pulse animation
gsap.to(".heart_path", {
  scale: 1.8,
  transformOrigin: "50% 50%",
  duration: 0.6,
  repeat: -1,
  yoyo: true,
});