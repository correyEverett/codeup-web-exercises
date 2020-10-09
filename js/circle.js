(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            var area = Math.PI * Math.pow(this.radius, 2);
            return area;
        },

        logInfo: function (doRounding) {
            var roundedArea = this.getArea();

            if(doRounding){
                roundedArea = Math.round(roundedArea);
                console.log("Area of a circle with radius: " + this.radius + ", is: " + roundedArea);
                return roundedArea;
            }
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();

function convertStringToArray(string){
    var convert = string.split(',');
    return convert;
}