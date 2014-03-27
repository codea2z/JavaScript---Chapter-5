/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
    var panel = document.getElementById("panel");
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    var now = new Date();
    
    var yy = now.getFullYear();
    var mm = now.getMonth();
    var dd = now.getDate();
    var dy = now.getDay();
    
    mm = months[mm];
    dy = days[dy];
    
    var str = dy + ", " + mm + " " + dd + ", " + yy;
    panel.innerHTML += "US Date String: " + str;
    var str = dy + ", " + dd + " " + mm + ", " + yy;
    panel.innerHTML += "<br>UK Date String: " + str;
}

document.addEventListener("DOMContentLoaded", init, false);

