// from data.js
var tableData = data;

document.getElementById("datetime").addEventListener("input", search);

var table = document.getElementById("ufo-table");

for (ufo of tableData){
    var row = table.insertRow(1);
    var date = row.insertCell(0);
    var city = row.insertCell(1);
    var state = row.insertCell(2);
    var country = row.insertCell(3);
    var shape = row.insertCell(4);
    var duration = row.insertCell(5);
    var comments = row.insertCell(6);
    date.innerHTML = ufo.datetime
    city.innerHTML = ufo.city
    state.innerHTML = ufo.state
    country.innerHTML = ufo.country
    shape.innerHTML = ufo.shape
    duration.innerHTML = ufo.durationMinutes
    comments.innerHTML = ufo.comments
}
