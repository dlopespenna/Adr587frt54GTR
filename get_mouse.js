var x = [];
var y = [];
var eventId = [];
var eventCount = 1;
var steps = []; 
var user = [];
var nameValue = [];
var isOnDiv = false;
var time = [];
var screen_height = [];
var screen_width = [];
var count = 0;


(function() {
    "use strict";

    document.onmousemove = handleMouseMove;

    function handleMouseMove(event) {

        var dot, eventDoc, doc, body, pageX, pageY;

        event = event || window.event; // IE-ism

        if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
            (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
            (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }
        // append new value to the array

        if (count == 1000){

            var timestamp = new Date().getTime();

            x.push(event.pageX);
            y.push(event.pageY);
            eventId.push(0);
            nameValue.push('diego');
            time.push(timestamp);
            screen_height.push(window.screen.availHeight);
            screen_width.push(window.screen.availWidth);

            console.log("id: " + id + " /n, " +  " X: " + x + " /n, " + " , " + " Y: " + y + "user: " + nameValue + "count:" + steps + 'time:' + time + 's_height:' + screen_height + 's_width:' + screen_width + 'steps:' + steps);
        
            var data = {};
            data.firstname = "Rafael";
            data.lastname  = "Libardi";
            var json = JSON.stringify(data);

            url = "http://192.168.193.27/8888"
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
            xhr.onload = function () {
                var users = JSON.parse(xhr.responseText);
                if (xhr.readyState == 4 && xhr.status == "201") {
                    console.table(users);
                } else {
                    console.error(users);
                }
            }
            xhr.send(json);
        }
        count += 1;
    }
})();

