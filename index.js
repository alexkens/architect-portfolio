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
        x: 10,
        y: -28,
        next: "project_1",
    },
    project_1: {
        zoom: 2,
        scale: 3.5,
        x: -30,
        y: 8,
        next: "intro",
    },
};

function draw(scene, canvas, ctx) {
    console.log(scenes);
    console.log(scenes[scene]);
    canvas.style.transform = `scale(${scenes[scene].scale}) translate(${scenes[scene].x}%, ${scenes[scene].y}%)`;
    // canvas.style.transform = "translate(50px, 50px)";

    const smallImg = new Image();
    smallImg.src = 'profile-pic.jpg';
    
    smallImg.onload = function() {
        const x = 1455;
        const y = 2130;
        const size = 200;
        const radius = size / 2;
        
        // Kreis-Clipping-Pfad erstellen
        ctx.save();
        ctx.beginPath();
        ctx.arc(x + radius, y + radius, radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        
        // Bild zeichnen (wird nur im Kreis sichtbar)
        ctx.drawImage(smallImg, x, y, size, size);
        
        ctx.restore();
    };
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

    const introBtn = document.querySelector("#intro .overlay-btn");
    introBtn.addEventListener("click", () => {
        document.getElementById("overlay").style.display = "none";
        document.querySelector("#profile .overlay-btn").style.display = "block";
        draw("profile", canvas, ctx);
    });

    const profileBtn = document.querySelector("#profile .overlay-btn");
    profileBtn.addEventListener("click", () => {
        document.querySelector("#profile .overlay-btn").style.display = "none";
        document.querySelector("#project_1 .overlay-btn").style.display = "block";
        draw("project_1", canvas, ctx);
    });

    const project1btn = document.querySelector("#project_1 .overlay-btn");
    project1btn.addEventListener("click", () => {
        document.querySelector("#project_1 .overlay-btn").style.display = "none";
        document.getElementById("overlay").style.display = "block";
        draw("intro", canvas, ctx);
    });
    
};

start();