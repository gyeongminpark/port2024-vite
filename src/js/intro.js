import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function intro() {
  var $ = function(id) {
    return document.getElementById(id);
  };
  var inc = 0;
  var out = 0;
  var str = 'PORTFOLIO!';
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!?@#$%';
  var t;

  var anim = function() {
    inc++;
    if (inc % 7 === 0 && out < str.length) {
      $('anim').appendChild(document.createTextNode(str[out]));
      out++;
    } else if (out >= str.length) {
      clearInterval(t);
      $('portfolio').innerHTML = '';
    } else {
      $('portfolio').innerHTML =
        chars[Math.floor(Math.random() * chars.length)];
    }
  };

  t = setInterval(anim, 50);
  $('anim').innerHTML = '';
}
