// script.js
function showToast() {
    var toast = document.getElementById("toast");
    toast.classList.add("show");
  
    // Hide the toast after 3 seconds
    setTimeout(function() {
      toast.classList.remove("show");
    }, 3000);
  }
  