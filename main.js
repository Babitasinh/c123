noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!')
} 

function gotPoses(result)
{
if(result.length>0)
{
console.log(result);
noseX=result[0].pose.nose.x;
noseY=result[0].pose.nose.y;
console.log(noseX,noseY);

leftWristX= result[0].pose.leftWrist.x;
rightWristX= result[0].pose.rightWrist.x;
difference=leftWristX-rightWristX;
}
}

function draw()
{
    background('#B11226');
    fill('#f90093');
    stroke('#f90093');
    square(noseX,noseY,difference);
}

