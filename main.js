function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500, 500);
    canvas.position(600, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("Posenet model is initialized");
}

function draw()
{
    background("lightgrey");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}