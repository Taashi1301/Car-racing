canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_image="Car1.jpeg";
car1_X=10;
car1_Y=10;
car2_width=120;
car2_height=70;
car2_image="car2.png";
car2_X=10;
car2_Y=100;
background_image="backgrn_2.jpeg";

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;
    car1_imgTag=new Image();
    car1_imgTag.onload=uploadCar1;
    car1_imgTag.src=car1_image;
    car2_imgTag=new Image();
    car2_imgTag.onload=uploadCar2;
    car2_imgTag.src=car2_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height);
}
function uploadCar1(){
    ctx.drawImage(car1_imgTag,car1_X, car1_Y, car1_width,car1_height);
}
function uploadCar2(){
    ctx.drawImage(car2_imgTag,car2_X,car2_Y,car2_width,car1_height);
}
window.addEventListener("keydown", kd);
function kd(e){
    x=e.keyCode;
    if(x==37){
        left1();
    }
    if(x==39){
        right1();
    }
    if(x==65){
        left2();
    }
    if(x==68){
        right2();
    }
}
function right1(){
    if(car1_X<=700){
        car1_X=car1_X+10;
        console.log("When right is pressed, X="+ car1_X+"when right is pressed, Y="+car1_Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
        }
    function right2(){
    if(car2_X<=700){
        car2_X=car2_X+10;
        console.log("When d is pressed, X="+ car2_X+"when d is pressed, Y="+car2_Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
        }
}
function left1(){
    if(car1_X>=0){
        car1_X=car1_X-10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
        }
}
function left2(){
    if(car2_X>=0){
        car2_X=car2_X-10;
        uploadBackground();
        uploadCar1()
        uploadCar2();
}
}