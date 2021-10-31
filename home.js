console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("Your form has submitted successfully!");
}

let form = document.querySelector("form#contact");

form.addEventListener("submit", handleSubmit);

let image = document.querySelector("img");

image.addEventListener("mouseover", () =>
  alert("Batduck has nothing on you. You're great!")
);
