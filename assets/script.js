const home = document.getElementById("home");
const logo = document.getElementById("logo");
const variantTrigger = document.getElementById("variantTrigger");
const variantLists = document.getElementById("variantLists");
const graphiteVariant = document.getElementById("graphiteVariant");
const paleGreyVariant = document.getElementById("paleGreyVariant");
const productVariant = document.getElementById("productVariant");
const productBanner = document.getElementById("productBanner");
const graphiteImage = document.getElementById("graphiteImage");
const paleGreyImage = document.getElementById("paleGreyImage");
const navigationItems = document.querySelectorAll(".navigation-list>li>*");
const variants = document.querySelectorAll("#variantLists>li");


function showVariantLists() {
  variantLists.style.top = "200%";
}

function hideVariantLists() {
  variantLists.style.top = "-2000%";
}

function handleGraphiteVariant() {
  productVariant.innerText = "GRAPHITE";
  home.classList.remove("home-black");
  productBanner.style.color = "#000";
  productVariant.style.color = "#000";
  variants.forEach((item) => (item.style.color = "#000"));
  navigationItems.forEach((item) => item.style.color = "#000")
  logo.setAttribute("src", "/assets/images/logitech_icon_black.png");
  graphiteImage.style.top = "0";
  paleGreyImage.style.top = "-100%";
  hideVariantLists();
}

function handlePaleGreyVariant() {
  productVariant.innerText = "PALE GREY";
  home.classList.add("home-black");
  productBanner.style.color = "#f2f2f2";
  productVariant.style.color = "#f2f2f2";
  variantLists.style.color = "#f2f2f2";
  variants.forEach((item) => (item.style.color = "#f2f2f2"));
  navigationItems.forEach((item) => (item.style.color = "#f2f2f2"));
  logo.setAttribute("src", "/assets/images/logitech_icon_white.png");
  paleGreyImage.style.top = "0";
  graphiteImage.style.top = "100%";
  hideVariantLists();
}

function handleTriggerVariantClick(e) {
  e.stopPropagation();
  if (variantLists.style.top == "200%") {
    hideVariantLists();
  } else {
    showVariantLists();
  }
}

function handleClickedDocument(e) {
  e.stopPropagation();
  if (!variantTrigger.contains(e.target) && !variantLists.contains(e.target)) {
    hideVariantLists();
  }
}

variantTrigger.addEventListener("click", (e) => handleTriggerVariantClick(e));
graphiteVariant.addEventListener("click", () => handleGraphiteVariant());
paleGreyVariant.addEventListener("click", () => handlePaleGreyVariant());
document.addEventListener("click", (e) => handleClickedDocument(e));
