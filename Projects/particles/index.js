particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 175,
        "density": {
          "enable": false,
          "value_area": 800
        }
      },
      "color": {
        "value": "#3e4472"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": "#000"
        },
        "polygon": {
          "nb_sides": 12
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5334088995941094,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 15.783201938177186,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 40,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 200,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 3
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 200,
          "line_linked": {
            "opacity": 0.3723188992310807
          }
        },
        "bubble": {
          "distance": 400,
          "size": 418.074324324324,
          "duration": 3.5472972972972943,
          "opacity": 0.7685810810810805,
          "speed": 3
        },
        "repulse": {
          "distance": 591.2162162162158,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

//attempt to recreate

// var cursorX;
// var cursorY;
// document.addEventListener('mousemove', function (e) {
//     var _a, _b;
//     cursorX = e.clientX;
//     cursorY = e.clientY;
//     for (var index = 1; index < 6; index++) {
//         var circleX = (_a = document.getElementById(index.toString())) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().x;
//         var circleY = (_b = document.getElementById(index.toString())) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect().y;
//         if (circleX !== undefined && circleY !== undefined) {
//             var x = circleX - cursorX;
//             var y = circleY - cursorY;
//             var hypotenuse = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
//             var alpha = 180 + Math.atan2(y, x) / Math.PI * 180;
//             var afterElement = document.createElement("style");
//             afterElement.innerHTML =
//                 ".body :nth-child(" + index + "):after{"
//                     + "position: absolute;"
//                     + "border-radius: 1vh;"
//                     + "top: 40%;"
//                     + "left: 50%;"
//                     + "height: 1vh;"
//                     + "width: " + hypotenuse + "px;"
//                     + "content: ' ';"
//                     + "background: rgb(2,0,36);"
//                     + "background: linear-gradient(180deg, rgba(2, 0, 36, 0.575) 0%, rgba(9, 9, 121, 0.596) 0%, rgba(0, 213, 255, 0.575) 100%);"
//                     + "transform: rotate(" + alpha + "deg);"
//                     + "transform-origin: bottom left;}";
//             document.head.appendChild(afterElement);
//             //afterElement.innerHTML = afterElement.innerHTML.replace(/width: [0-9]+px/, "width: "+ hypotenuse +"px");
//             //slidingTagLiAfterStyle.innerHTML = slidingTagLiAfterStyle.innerHTML.replace(/transform: rotate(0deg)/, "transform: rotate("+ alpha +"deg)");
//         }
//     }
// });
// document.addEventListener('click', function (e) {
//     console.log('Cursor position:', cursorX, cursorY);
// });
