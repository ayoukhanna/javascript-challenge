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
function showAllRows(){
  var tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
      tr[i].style.display = "";
  }
}

function search(searchText){
  var newSearchString = document.getElementById("datetime").value

var tr, td, i, txtValue;
tr = table.getElementsByTagName("tr");

// Loop through all table rows, and hide those who don't match the search query
for (i = 0; i < tr.length; i++) {
  td = tr[i].getElementsByTagName("td")[0];
  //console.log(td)
  if (td) {
    txtValue = td.textContent || td.innerText;
    console.log("txtValue is " + txtValue + " searchText is " + searchString)
    if (txtValue.indexOf(newSearchString) > -1) {
        console.log("found match")
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
} 
}
