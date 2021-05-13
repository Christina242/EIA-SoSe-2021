var continentAfrica = "Africa";
var continentSouthAmerica = "South America";
var continentEurope = "Europe";
var continentNorthAmerica = "North America";
var continentAsia = "Asia";
var continentAustralia = "Australia";
var Europe2008 = 4965.7;
var Europe2018 = 4209.3;
var NorthAmerica2008 = 3300.4;
var NorthAmerica2018 = 6035.6;
var SouthAmerica2008 = 1132.6;
var SouthAmerica2018 = 1261.5;
var Africa2008 = 1028;
var Africa2018 = 1235.5;
var Asia2008 = 12954.7;
var Asia2018 = 16274.1;
var Australia2008 = 1993;
var Australia2018 = 2100.5;
var total2018 = Africa2018 + SouthAmerica2018 + Europe2018 + NorthAmerica2018 + Asia2018 + Australia2018;
window.addEventListener('load', function () {
    document.querySelector('#Euro').addEventListener('click', function () { emissions(continentEurope, Europe2018, Europe2008); });
    document.querySelector('#NA').addEventListener('click', function () { emissions(continentNorthAmerica, NorthAmerica2018, NorthAmerica2008); });
    document.querySelector('#SA').addEventListener('click', function () { emissions(continentSouthAmerica, SouthAmerica2018, SouthAmerica2008); });
    document.querySelector('#Africa').addEventListener('click', function () { emissions(continentAfrica, Africa2018, Africa2008); });
    document.querySelector('#Asia').addEventListener('click', function () { emissions(continentAsia, Asia2018, Asia2008); });
    document.querySelector('#Aaustralia').addEventListener('click', function () { emissions(continentAustralia, Australia2018, Australia2008); });
    function emissions(continent, continent2008, continent2018) {
        document.querySelector("#Title").innerHTML = continent;
        document.querySelector("#Text").innerHTML = continent;
        document.querySelector("#eins").innerHTML = continent2018.toFixed(1);
        document.querySelector("#zwei").innerHTML = (continent2018 / total2018 * 100).toFixed(1) + "%";
        document.querySelector("#drei").innerHTML = ((continent2018 - continent2008) / continent2008 * 100).toFixed(1) + "%";
        document.querySelector("#vier").innerHTML = ((continent2018 - continent2008) * 100).toFixed(1);
        document.querySelector(".chartWrapper .chart").setAttribute('style', 'height:' + continent2018 / total2018 * 100 + '%');
    }
    ;
});
//# sourceMappingURL=script.js.map