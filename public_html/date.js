/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
    var panel = document.getElementById("panel");
    var now = new Date();
    var offset = now.getTimezoneOffset();
    var dst = 60;
    
    switch (offset)
    {
        case (300 - dst) : offset = "East Coast"; break;
        case (360 - dst) : offset = "Central"; break;
        case (420 - dst) : offset = "Mountain"; break;
        case (480 - dst) : offset = "Pacific"; break;
        default: offset = "all";    
    }
    
    panel.innerHTML += "System Time: " + now.toString();
    panel.innerHTML += "<br>UTC(GMT) Time: " + now.toUTCString() +
            "<hr>Welcome to " + offset + " visitors";
}

document.addEventListener("DOMContentLoaded", init, false);

