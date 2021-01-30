var speak_data
var Webcam_on=0;
var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition=new SpeechRecognition();
function start(){
document.getElementById("textbox").innerHTML= "";
Recognition.start();
}
Recognition.onresult=function spacerun(event){
    console.log(event);
    var text=event.results[0][0].transcript;
    console.log(text);
    document.getElementById("textbox").value=text;
    speak();
}
 function speak(){
     var synth = window.speechSynthesis;
     text=document.getElementById("textbox").value;
     if(text=="take my selfie"){
        Webcam.attach( camera );
        for (i=5;i=1;i++){
           setTimeout(function(){
               speak_data="taking your selfie in "+i+"seconds";
               var utter_this= new SpeechSynthesisUtterance(speak_data);
               synth.speak(utter_this);
           },1000); 
           
        }
        takeSelfie();
save();
    }
     else{speak_data="please say take my selfie";   
        var utter_this= new SpeechSynthesisUtterance(speak_data);
     synth.speak(utter_this);}

    }
    Webcam.set({
        width: 360,
        height: 250,
        image_format: 'png',
        png_quality: 90
      });
    camera=document.getElementById("camera");
    function takeSelfie(){
        Webcam.snap(function(data_uri){
            document.getElementById("picture").innerHTML= "<img src="+data_uri+" id='pic'>";
        })
    }
    function save(){
        link=document.getElementById("link");
        image=document.getElementById("pic").src;
        link.href=image;
        link.click()
    }
