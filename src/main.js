import { k } from "./kaboomCtx";

// vite assumes everything in the public folder can be accessed
k.loadSprite("spritesheet", "./spritesheet.png"), {
    sliceX: 39,
    sliceY: 31,
    anims: {
        // hook up names to specific animations
        "idle-down": 960,
        "walk-down": { from: 960, to: 963, loop: true, speed: 8 },
        "idle-side": 999,
        "walk-side": { from: 999, to: 1002, loop: true, speed: 8 },
        "idle-up": 1038,
        "walk-up": { from: 1038, to: 1041, loop: true, speed: 8 },
    }
};