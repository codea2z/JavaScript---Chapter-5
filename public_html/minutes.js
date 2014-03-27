/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
    var panel = document.getElementById("panel");
    var now = new Date();
    var hh = now.getHours();
    var mn = now.getMinutes();
    var ss = now.getSeconds();
    var ms = now.getMilliseconds();
    
    if (mn < 10)
    {
        mn = "0" + mn;
    }
    if (ss < 10)
    {
        ss = "0" + ss;
    }
    
    var tim = hh + ":" + mn + ":" + ss + ":" + " and " + ms + " milliseconds";
    
    panel.innerHTML += "It's now: " + tim;
    
    var hi = "Good morning";
    
    if (hh > 11)
    {
        hi = "Good afternoon";
    }
    if (hh > 17)
    {
        hi = "Good evening";
    }
    panel.innerHTML += "<br>" + hi;
    
    var suffix = (hh > 11) ? "PM" : "AM";
    if (hh > 12)
    {
        hh -= 12;
    }
    panel.innerHTML += "<br>Time is: " + hh + ":" + mn + suffix;
}

document.addEventListener("DOMContentLoaded", init, false);

