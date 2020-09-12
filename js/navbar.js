function ExpandMenu() {
      var x = document.getElementById("main-list");
      if (x.className === "topnav") {
            x.className += " responsive";
      } else {
            x.className = "topnav";
      }
}