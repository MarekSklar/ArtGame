import { selectElmnt } from "./utils/elmnt.js";

console.log("test");
const canvas = selectElmnt("#canvas") as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
ctx.fillRect(0, 0, 50, 50);