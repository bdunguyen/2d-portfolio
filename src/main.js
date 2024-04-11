import { k } from "./kaboomCtx";

// vite assumes everything in the public folder can be accessed
k.loadSprite("spritesheet", "./spritesheet.png"), {
    sliceX: 39,
    sliceY: 31,
    anims: {
        // hook up names to specific animations
        "idle-down": 936,
        "walk-down": { from: 936, to: 939, loop: true, speed: 8 },
        "idle-side": 975,
        "walk-side": { from: 975, to: 978, loop: true, speed: 8 },
        "idle-up": 1014,
        "walk-up": { from: 1014, to: 1017, loop: true, speed: 8 },
    }
};