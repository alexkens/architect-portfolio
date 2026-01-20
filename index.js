/*
document.getElementById("focusCard").addEventListener("click", () => {
  
    document.body.style.backgroundColor = "lightblue";
});
*/

const scenes = {
    intro: {
        zoom: 1,
        x: 0,
        y: 0,
        text: "Willkommen zur Geschichte.",
        next: "center",
    },
    center: {
        zoom: 2,
        x: 50,
        y: 50,
        text: "Es ist die Mitte!",
        next: "intro",
    },
};

const canvasWrapper = document.getElementById("canvas-wrapper");
canvasWrapper.style.display = "flex";
canvasWrapper.style.justifyContent = "center";
canvasWrapper.style.margin = 0;
canvasWrapper.style.padding = 0;

function start() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const image = new Image();
    image.src = "main_picture.png";

    image.addEventListener("load", () => {
        ctx.drawImage(image, 0, 0);
    })
    canvas.style.height = "100vh";
    canvas.style.transform = "scale(1.0)";
    canvas.style.zoom = "400%";

    //canvas.style.transform = "translate(60px, 400px) scale(4.0)";
    // canvas.style.transform = "rotate(0.5turn)"
};

start();