var Europe2008: number = 4965.7;
var Europe2018: number = 4209.3;
var NorthAmerica2008: number = 3300.4;
var NorthAmerica2018: number = 6035.6;
var SouthAmerica2008: number = 1132.6;
var SouthAmerica2018: number = 1261.5;
var Africa2008: number = 1028;
var Africa2018: number = 1235.5;
var Asia2008: number = 12954.7;
var Asia2018: number = 16274.1;
var Australia2008: number = 1993;
var Australia2018: number = 2100.5;

var total2018: number = Africa2018 + SouthAmerica2018 +Europe2018 + NorthAmerica2018 +Asia2018 + Australia2018;

var totalEurope2018 = (Europe2018 * 100 / total2018)
var totalNorthAmerica2018 = (NorthAmerica2018 *100 / total2018);
var totalSouthAmerica2018 = (SouthAmerica2018 *100 / total2018);
var totalAfrica2018 = (Africa2018 *100/ total2018);
var totalAsia2018 = (Asia2018 *100 / total2018);
var totalAustralia2018 = (Australia2018 *100/ total2018);

var Europe2008_18 = (( Europe2018 - Europe2008 ) *100 / Europe2008);
var NorthAmerica2008_18 = (( NorthAmerica2018 - NorthAmerica2008 ) *100 / NorthAmerica2008);
var SouthAmerica2008_18 = (( SouthAmerica2018 - SouthAmerica2008 ) *100 /SouthAmerica2008);
var Africa2008_18 = ((Africa2018 - Africa2008 ) *100 / Africa2008);
var Asia2008_18 = (( Asia2018 - Asia2008 ) *100 / Asia2008);
var Australia2008_18 = ((Australia2018 - Australia2008) *100 / Australia2008);

var Europe2008_18_kg = (Europe2018 - Europe2008);
var NorthAmerica2008_18_kg = (NorthAmerica2018 - NorthAmerica2008);
var SouthAmerica2008_18_kg = (SouthAmerica2018 - SouthAmerica2008);
var Africa2008_18_kg = (Africa2018 - Africa2008);
var Asia2008_18_kg = (Asia2018 - Asia2008);
var Australia2008_18_kg = (Australia2018 - Australia2008);

function functionEuro() {
    document.querySelector("#Title").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector("#Text").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector("#eins").innerHTML = "" + Europe2018 .toFixed(1);
    document.querySelector("#zwei").innerHTML = "" + totalEurope2018 .toFixed(1);
    document.querySelector("#drei").innerHTML = "" + Europe2008_18 .toFixed(1);
    document.querySelector("#vier").innerHTML = "" + Europe2008_18_kg .toFixed(1);
    document.querySelector(".chart").setAttribute('style', 'height:' + totalEurope2018 + '%');
  
}
window.addEventListener('load', function () {
    document.querySelector('#Euro').addEventListener('click', functionEuro);
});

function functionNA() {
    document.querySelector("#Title").innerHTML = "Carbon Dioxide Emissions in North America";
    document.querySelector("#Text").innerHTML = "Emission absolute of North America in 2018";
    document.querySelector("#eins").innerHTML = "" + NorthAmerica2018 .toFixed(1);
    document.querySelector("#zwei").innerHTML = "" + totalNorthAmerica2018 .toFixed(1);
    document.querySelector("#drei").innerHTML = "" +  NorthAmerica2008_18 .toFixed(1);
    document.querySelector("#vier").innerHTML = "" + NorthAmerica2008_18_kg .toFixed(1);
    document.querySelector(".chart").setAttribute('style', 'height:' + totalNorthAmerica2018 + '%');
    
}
window.addEventListener('load', function () {
    document.querySelector('#NA').addEventListener('click', functionNA);
});

function functionSA() {
    document.querySelector("#Title").innerHTML = "Carbon Dioxide Emissions in South America";
    document.querySelector("#Text").innerHTML = "Emission absolute of South America in 2018";
    document.querySelector("#eins").innerHTML = "" + SouthAmerica2018 .toFixed(1);
    document.querySelector("#zwei").innerHTML = "" + totalSouthAmerica2018 .toFixed(1);
    document.querySelector("#drei").innerHTML = "" + SouthAmerica2008_18 .toFixed(1);
    document.querySelector("#vier").innerHTML = "" + SouthAmerica2008_18_kg .toFixed(1);
    document.querySelector(".chart").setAttribute('style', 'height:' + totalSouthAmerica2018 + '%');
    
}
window.addEventListener('load', function () {
    document.querySelector('#SA').addEventListener('click', functionSA);
});

function functionAfrica() {
    document.querySelector("#Title").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.querySelector("#Text").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector("#eins").innerHTML = "" + Africa2018 .toFixed(1);
    document.querySelector("#zwei").innerHTML = "" + totalAfrica2018 .toFixed(1);
    document.querySelector("#drei").innerHTML = "" + Africa2008_18 .toFixed(1);
    document.querySelector("#vier").innerHTML = "" + Africa2008_18_kg .toFixed(1);
    document.querySelector(".chart").setAttribute('style', 'height:' + totalAfrica2018 + '%');
}
window.addEventListener('load', function () {
    document.querySelector('#Africa').addEventListener('click', functionAfrica);

});

function functionAsia() {
    document.querySelector("#Title").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.querySelector("#Text").innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector("#eins").innerHTML = "" + Asia2018 .toFixed(1);
    document.querySelector("#zwei").innerHTML = "" + totalAsia2018 .toFixed(1);
    document.querySelector("#drei").innerHTML = "" + Asia2008_18 .toFixed(1);
    document.querySelector("#vier").innerHTML = "" + Asia2008_18_kg .toFixed(1);
    document.querySelector(".chart").setAttribute('style', 'height:' + totalAsia2018 + '%');
}
window.addEventListener('load', function () {
    document.querySelector('#Asia').addEventListener('click', functionAsia);
});

function functionAustralia() {
    document.querySelector("#Title").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.querySelector("#Text").innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector("#eins").innerHTML = "" + Australia2018 . toFixed(1);
    document.querySelector("#zwei").innerHTML = "" + totalAustralia2018 . toFixed(1);
    document.querySelector("#drei").innerHTML = "" + Australia2008_18 . toFixed(1);
    document.querySelector("#vier").innerHTML = "" + Australia2008_18_kg . toFixed(1);
    document.querySelector(".chart").setAttribute('style', 'height:' + totalAustralia2018 + '%');
}
window.addEventListener('load', function () {
    document.querySelector('#Australia').addEventListener('click', functionAustralia);
});