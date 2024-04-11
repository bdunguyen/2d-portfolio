// this is where we are going to set up kaboom
import kaboom from "kaboom";

// creating the kaboom context
export const k = kaboom({
    global: false,
    touchToMouse: true, // translate all touch events to touch events
    canvas: document.getElementById("game"),
})