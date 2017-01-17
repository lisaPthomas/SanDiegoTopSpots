// $.getJSON("topspots.json"), function(result){
// 	debugger;

// }

// console.log("Hello")

$(document).ready(function() {

    //get the JSON file and load the data into memory


    //name the function result
    // $.getJSON("topspots.json", function(result) {
    // 	console.log('loaded');
    // 	$.each(result.)

    // });


    $.getJSON("topspots.json", function(result) {

        //index is position
        //values is name, descriptions, location
        $(result).each(function(index, value) {
            var string = ""
            var maplink = "https://www.google.com/maps?q="

            maplink += value.location[0] + "," + value.location[1];

            var tr = $('<tr/>');
            tr.append("<td> " + value.name + "</td>");
            tr.append("<td>" + value.description + "</td>");
            tr.append("<td>" + "<a class='btn btn-default btn-md btn-primary' target='_blank' href='" + maplink + "'>" + "Map" + "</a>" + "</td>");
            $('table').append(tr);

        })
    })
});
