var nosex=0
var nosey=0
function preload(){
   clownnose=loadImage("istockphoto-485318064-612x612.jpeg") 
}
function setup(){
canvas=createCanvas(400,400)
canvas.center()
video=createCapture(VIDEO)
video.hide()
posenet=ml5.poseNet(video, modelloaded)
posenet.on("pose", gotposes)
}
function draw(){
image(video,0,0,400,400)
fill("black")
circle(10,10,50)
}
function modelloaded(){
   console.log("posenet is ready")
}
function gotposes(results){
if (results.length>0) {
   console.log(results)
   nosex=results[0].pose.nose.x
   nosey=results[0].pose.nose.y
   console.log(nosex, nosey)
}
}
