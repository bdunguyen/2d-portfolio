// this is where we are going to set up kaboom
import kaboom from "kaboom";
import { scaleFactor } from "./constants";

// creating the kaboom context
export const k = kaboom({
    global: false,
    touchToMouse: true, // translate all touch events to touch events
    canvas: document.getElementById("game"),
    debug: false, // set to false once ready for production
});