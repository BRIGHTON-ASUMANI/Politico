// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function tabledelete() {
  document.getElementById("table").deleteRow(1);
}




function govdelete() {
  document.getElementById("government").deleteRow(1);
}

