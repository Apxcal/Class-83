var mouseEvent="";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var color="black";
var width="5";
var screenwidth=screen.width-70;
var newscreenwidth=screen.width-70;
var screenheight=screen.height;
var newcanvasheight=screen.height-300;
if(screenwidth<992){
    document.getElementById("myCanvas").width=newcanvaswidth;
    document.getElementById("myCanvas").width=newcanvasheight;
    document.body.style.overflow="hidden"
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    console.log("My TouchStart");
    last_position_of_x=e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientX - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    console.log("My TouchMove");
    current_position_of_mouse_x=e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_mouse_y=e.touches[0].clientX - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}