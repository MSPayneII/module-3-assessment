let restuarantArray = [
  // array of restuarants
  {
    name: "L. Georges - Coney Island Restaurant",
    address: "20003 Joy Rd. Detroit, MI 48228",
    phone: "313-581-3136",
    website: "No website listed",
  },
  {
    name: "Totally A Imaginationary Restuarant",
    address: "12345 West Chicago. Detroit, MI 48228",
    phone: "313-123-4567",
    website: "No website listed",
  },
  {
    name: "Exclusive Ribs & Soulfood",
    address: "19522 Joy Rd. Detroit, MI 48228",
    phone: "313-581-3136",
    website: "No website listed",
  },
  {
    name: "Manhattan Fish & Chicken",
    address: "19240 W. Warren Ave. Detroit, MI 48228",
    phone: "313-425-0005",
    website: "No website listed",
  },
];

let recomendationBtn = document.getElementById("recommendation-btn"); //recomendation button on about page
let restuarantSection = document.querySelector(
  ".restuarant-recommendation-section"
); // section for displaying recommend restuarant once the recomendation button is clicked.

let rName = document.getElementById("restuarant-name"); // resturant name p tag
let rAddress = document.getElementById("restuarant-address"); // resturant address p tag
let rPhone = document.getElementById("restuarant-phone"); // resturant phone  p tag
let rWeb = document.getElementById("restuarant-website"); // resturant website p tag

const randomResturantRec = (arr) => {
  // generates a random number and returns an array element with the random number as its index
  let randomNumber = Math.floor(Math.random() * arr.length);

  return arr[randomNumber];
};

recomendationBtn.addEventListener("click", () => {
  restuarantSection.style.display = "block";

  let restuarantObj = randomResturantRec(restuarantArray);
  //   console.log(restuarantObj);
  rName.textContent = `Name: ${restuarantObj["name"]}`;
  rAddress.textContent = `Address: ${restuarantObj["address"]}`;
  rPhone.textContent = `Phone number: ${restuarantObj["phone"]}`;
  rWeb.textContent = `Website: ${restuarantObj["website"]}`;
});
