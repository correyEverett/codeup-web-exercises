(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */
    var addSun = planets.unshift('Sun');
    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);

    var addPluto = planets.push('Pluto');
    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);

    var removeSun = planets.shift('Sun');
    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);

    var removePluto = planets.pop('Pluto');
    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets);

    var findEarth = planets.indexOf('Earth');
    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log('The index of Earth: ' + findEarth);

    var reversePlanets = planets.reverse();
    console.log("Reversing the order of the planets array.");
    console.log(reversePlanets);

    var sortPlanets = planets.sort();
    console.log("Sorting the planets array.");
    console.log(sortPlanets);
})();
