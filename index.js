// Import stylesheets
import './style.css';

var _ = require('underscore');

const scenarioHours = [
    {hour:12, min:0, angle: 0},
    {hour: 1, min: 0, angle: 330},
    {hour: 2, min: 0, angle: 300},
    {hour:3, min:0, angle: 270},
    {hour: 4, min: 0, angle: 240},
    {hour: 5, min: 0, angle: 210},
    {hour: 6, min: 0, angle: 180},
    {hour:7, min: 0, angle: 150},
    {hour:8, min:0, angle: 120},
    {hour: 9, min:0, angle: 90},
    {hour: 10, min:0, angle: 60},
    {hour: 11, min:0, angle: 30},
    {hour: 12, min: 15, angle: 82.5},
    {hour: 12, min: 30, angle: 165}, 
    {hour: 12, min: 45, angle: 247.5},
    {hour: 3, min: 15, angle: 352.5},
    {hour: 3, min: 30, angle: 75}, 
    {hour: 3, min: 45, angle: 157.5},
    {hour: 6, min: 1, angle: 185.5},
    {hour: 6, min: 5, angle: 207.5},
    {hour: 6, min: 10, angle: 235}, 
    {hour: 6, min: 20, angle: 290},
    {hour: 6, min: 25, angle: 317.5},
    {hour: 6, min: 30, angle: 345}
];

function findAngle(hour, min) 
{
     if (hour == 12) 
            hour = 0; 
              
        if (min == 60)  
            min = 0; 
  
        // Calculate the angles moved by hour and 
        // minute hands with reference to 12:00 
        let hourangle = (0.5 * (hour * 60 + min)); 
        let minuteangle = (6 * min); 
  
        // Find the difference between two angles 
        let angle = Math.abs(hourangle - minuteangle); 
  
        // smaller angle of two possible angles 
        angle = Math.min(360 - angle, angle);  

    return angle;
}

_.each(scenarioHours, (x) => {
    var angle = findAngle(x.hour, x.min);

    console.log(
        "The angle between hour = " + x.hour + 
        " and min = " + x.min +
        " is " + angle
    );
});
