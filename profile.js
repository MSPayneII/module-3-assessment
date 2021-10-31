let myFavColor = document.getElementById("color");
let myFavRitual = document.getElementById("ritual");
let myFavPlace = document.getElementById("place");

myFavColor.addEventListener("click", () =>
  alert("My favorite color is Midnight Blue!")
);
myFavRitual.addEventListener("click", () =>
  alert(
    "My favorite ritual is to eat a whole pizza after a big accomplishment."
  )
);
myFavPlace.addEventListener("click", () =>
  alert("My favorite place is anywhere I haven't been before.")
);
