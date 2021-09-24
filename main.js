function preload(){


}
function draw(){
image(video,0,0,300,300)
classifier.classify(video,gotResults);
}
function setup(){
canvas=createCanvas(300,300)
canvas.center();
video=createCapture(VIDEO)
video.hide()
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5fQAWComT/model.json',modelLoaded)
}
function modelLoaded(){
console.log("modelLoaded");
console.log('ml5 version:', ml5.version);

}
function gotResults(error,results){
if(error==true){
console.error(error)
}
else{console.log(results);
    document.getElementById("object_name").innerHTML=results[0].label
    document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(4);
}
}