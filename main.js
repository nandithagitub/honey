function setup(){
    canvas = createCanvas(350,350);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,350,350);
}

song1 = "";
song2 = "";


function modelLoaded(){
    console.log('poseNet is initialized');
}

rightWristY = 0;

leftWristY = 0;

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        rightWristY = results[0].pose.rightWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
    }
}