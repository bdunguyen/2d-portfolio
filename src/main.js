import { k } from "./kaboomCtx";

// vite assumes everything in the public folder can be accessed
k.loadSprite("spritesheet", "./spritesheet.png"), {
    sliceX: 39,
    sliceY: 31,
    anims: {
        // hook up names to specific animations
        "idle-down": 936,
    }
};