Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality : 90,
});

cameraId = document.getElementById("camera");

Webcam.attach(cameraId);

function Take_Snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="resultpg" src="'+data_uri+'"/>';
        })
}

console.log("ML5 Version" , ml5.version);

Classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mQNFcLVeR/model.json',modelLoaded);

function modelLoaded(){
    console.log("Model Loaded Successfully");
}

function Verify(){

    img = document.getElementById("resultpg");

    Classifier.classify(img , gotResult);

}

function gotResult(error, results){

    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("obj_result").innerHTML = results[0].label;
        document.getElementById("obj_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }

}
