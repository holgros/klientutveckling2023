console.log("Hejsan från externt JavaScript!");

// för att kunna identifiera HTML-element från body måste sidan läsas in före skriptet körs
window.onload = function () {
  // identifierar ett HTML-element
  minParagraf = document.getElementById("min-paragraf");
  console.log(minParagraf);
  // ändrar stilsättning på HTML-elementet
  minParagraf.style.color = "red";

  // identifierar ett annat HTML-element
  klickbarParagraf = document.getElementById("klickbar-paragraf");
  // lägger till en händelsehanterare till detta element
  klickbarParagraf.addEventListener("click", function () {
    console.log(klickbarParagraf);
    // ändrar stilsättning på det klickade HTML-elementet
    klickbarParagraf.style.color = "blue";
  });
};
