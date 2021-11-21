function preload(){
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(610, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 640, 480);
    for (let i=0; i < 480; i=i+20){
        circle(5, i, 40);
    }
    for (let i=5; i < 640; i=i+20){
        circle(i, 0, 40);
    }
    for (let i=0; i < 480; i=i+20){
        circle(635, i, 40);
    }
    for (let i=0; i < 640; i=i+20){
        circle(i, 480, 40);
    }
}

function takeSnapshot(){
}