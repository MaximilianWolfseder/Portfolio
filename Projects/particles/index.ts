

var cursorX;
var cursorY;


document.addEventListener('mousemove', function(e) {
    cursorX = e.clientX;
    cursorY = e.clientY;
    for (let index = 1; index < 6; index++) {
        const circleX = document.getElementById(index.toString())?.getBoundingClientRect().x;
        const circleY = document.getElementById(index.toString())?.getBoundingClientRect().y;

        if (circleX!==undefined && circleY!==undefined) {
            var x=circleX-cursorX;
            var y=circleY-cursorY;
            var hypotenuse = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
            const alpha = 180 + Math.atan2(y, x) / Math.PI * 180;
            var afterElement = document.createElement("style");
            afterElement.innerHTML =
            ".body:nth-child("+index+"):after{" 
             + "position: absolute;"
             + "border-radius: 1vh;"
             + "top: 40%;"
             + "left: 50%;"
             + "height: 1vh;"
             + "width: "+hypotenuse+"px;"
             + "content: ' ';"
             + "background: rgb(2,0,36);"
             + "background: linear-gradient(180deg, rgba(2, 0, 36, 0.575) 0%, rgba(9, 9, 121, 0.596) 0%, rgba(0, 213, 255, 0.575) 100%);"
             + "transform: rotate("+alpha+"deg);" 
             + "transform-origin: bottom left;}";
            document.head.appendChild(afterElement);
            //afterElement.innerHTML = afterElement.innerHTML.replace(/width: [0-9]+px/, "width: "+ hypotenuse +"px");
            //slidingTagLiAfterStyle.innerHTML = slidingTagLiAfterStyle.innerHTML.replace(/transform: rotate(0deg)/, "transform: rotate("+ alpha +"deg)");
        }
    }
    
  });

   document.addEventListener('click', function(e) {
     console.log('Cursor position:', cursorX, cursorY);
     
     
   });