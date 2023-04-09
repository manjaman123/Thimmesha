// Define the "calculateLovePercentage" function before calling it
function calculateLovePercentage() {
  var name1 = document.getElementById("name1").value;
  var name2 = document.getElementById("name2").value;

  var hash1 = 0;
  var hash2 = 0;
  for (var i = 0; i < name1.length; i++) {
    hash1 += name1.charCodeAt(i);
  }
  for (var i = 0; i < name2.length; i++) {
    hash2 += name2.charCodeAt(i);
  }

  var percentage = Math.floor(((hash1 + hash2) % 101) + 1);

  document.getElementById("lovePercentage").innerHTML =
    "Love Percentage between " +
    name1 +
    " and " +
    name2 +
    " is " +
    percentage +
    "%";

  document.getElementById("processingBar").style.display = "none";

  document.getElementById("clearBtn").style.display = "block";
}

// Attach event listeners to buttons
document.getElementById("calculateBtn").addEventListener("click", function () {
  document.getElementById("processingBar").style.display = "block";
  setTimeout(calculateLovePercentage, 2000); // simulate calculation taking 2 seconds
});

document.getElementById("clearBtn").addEventListener("click", function () {
  document.getElementById("lovePercentage").innerHTML = "";
  document.getElementById("name1").value = "";
  document.getElementById("name2").value = "";
  document.getElementById("clearBtn").style.display = "none";
});

let sidebar = document.querySelector(".sidebar");

document.addEventListener("mousemove", function (event) {
  if (
    event.clientX <= 200 &&
    event.clientY <= window.innerHeight &&
    event.clientY >= 0
  ) {
    sidebar.style.display = "block";
  } else {
    if (event.clientX > 200) {
      sidebar.style.display = "none";
    }
  }
});

sidebar.addEventListener("mouseover", function (event) {
  sidebar.style.display = "block";
});

sidebar.addEventListener("mouseleave", function (event) {
  sidebar.style.display = "none";
});
