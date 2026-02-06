const scenes = {
    intro: {
        zoom: 1,
        scale: 1.0,
        x: 0,
        y: 0,
        next: "profile",
    },
    profile: {
        zoom: 2,
        scale: 3.5,
        x: 150,
        y: -230,
        next: "intro",
    },
};

function draw(scene, canvas) {
    console.log(scenes);
    console.log(scenes[scene]);
    canvas.style.transform = `scale(${scenes[scene].scale}) translate(${scenes[scene].x}px, ${scenes[scene].y}px)`;
    // canvas.style.transform = "translate(50px, 50px)";
}

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
    canvas.style.zoom = "100%";

    const overlay_btn = document.getElementById("overlay-btn");
    overlay_btn.addEventListener("click", () => {
        document.getElementById("overlay").style.display = "none";
        draw("profile", canvas);
    });
    

    //canvas.style.transform = "translate(60px, 400px) scale(4.0)";
    // canvas.style.transform = "rotate(0.5turn)"
};

start();