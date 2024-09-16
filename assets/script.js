const home = document.querySelectorAll("section");
const header = document.getElementById("header");
const textThemes = document.querySelectorAll(".text-light-theme");
const articleSelectedVariant = document.getElementById("articleSelectedVariant");
const articleImage = document.getElementById("articleImage")
const logo = document.getElementById("logo");
const variantTrigger = document.getElementById("variantTrigger");
const variantLists = document.getElementById("variantLists");
const graphiteVariant = document.getElementById("graphiteVariant");
const paleGreyVariant = document.getElementById("paleGreyVariant");
const productBanner = document.getElementById("productBanner");
const graphiteImage = document.getElementById("graphiteImage");
const paleGreyImage = document.getElementById("paleGreyImage");
const navigationItems = document.querySelectorAll(".navigation-list>li>*");
const variants = document.querySelectorAll("#variantLists>li");
const underlineAnimationElements = document.querySelectorAll(
  ".underline-hover-animation-light-theme"
);

function showVariantLists() {
  variantLists.style.top = "200%";
}

function hideVariantLists() {
  variantLists.style.top = "-700%";
}

function handleClickedDocument(e) {
  e.stopPropagation();
  if (!variantTrigger.contains(e.target) && !variantLists.contains(e.target)) {
    hideVariantLists();
  }
}

function handleDarkUnderlineAnimation() {
  underlineAnimationElements.forEach((item) =>
    item.classList.add("underline-hover-animation-dark-theme")
  );
  underlineAnimationElements.forEach((item) =>
    item.classList.remove("underline-hover-animation-light-theme")
  );
}

function handleLightUnderlineAnimation() {
  underlineAnimationElements.forEach((item) =>
    item.classList.add("underline-hover-animation-light-theme")
  );
  underlineAnimationElements.forEach((item) =>
    item.classList.remove("underline-hover-animation-dark-theme")
  );
}

function homeLightTheme() {
  home.forEach((e) => e.classList.add("home-light-theme"));
  home.forEach((e) => e.classList.remove("home-dark-theme"));
}

function homeDarkTheme() {
  home.forEach((e) => e.classList.add("home-dark-theme"));
  home.forEach((e) => e.classList.remove("home-light-theme"));
}

console.log(textThemes)

function textDarkTheme() {
  textThemes.forEach((text) => text.classList.add("text-dark-theme"));
  textThemes.forEach((text) => text.classList.remove("text-light-theme"));

  variants.forEach((item) => item.classList.add("text-dark-theme"));
  variants.forEach((item) => item.classList.remove("text-light-theme"));

  navigationItems.forEach((item) => item.classList.add("text-dark-theme"));
  navigationItems.forEach((item) => item.classList.remove("text-light-theme"));
}

function textLightTheme() {
  textThemes.forEach((text) => text.classList.add("text-light-theme"));
  textThemes.forEach((text) => text.classList.remove("text-dark-theme"));

  variants.forEach((item) => item.classList.add("text-light-theme"));
  variants.forEach((item) => item.classList.remove("text-dark-theme"));

  navigationItems.forEach((item) => item.classList.add("text-light-theme"));
  navigationItems.forEach((item) => item.classList.remove("text-dark-theme"));
}

function graphiteMouseShow() {
  articleImage.setAttribute("src", "/assets/images/mx_master_3s_black.png");
  articleSelectedVariant.innerText = "GRAPHITE"
  graphiteImage.classList.add("graphite-mouse-show");
  graphiteImage.classList.remove("graphite-mouse-hide");
  paleGreyImage.classList.add("pale-gray-mouse-hide");
  paleGreyImage.classList.remove("pale-gray-mouse-show");
}

function paleGrayMouseShow() {
  articleImage.setAttribute("src", "/assets/images/mx_master_3s_white.png");
  articleSelectedVariant.innerText = "PALE GRAY";
  paleGreyImage.classList.add("pale-gray-mouse-show");
  paleGreyImage.classList.remove("pale-gray-mouse-hide");
  graphiteImage.classList.add("graphite-mouse-hide");
  graphiteImage.classList.remove("graphite-mouse-show");
}

function handleGraphiteVariant() {
  NavbarLightTheme();
  handleLightUnderlineAnimation();
  homeLightTheme();
  textLightTheme();
  logo.setAttribute("src", "/assets/images/logitech_icon_black.png");
  graphiteMouseShow();
  hideVariantLists();
}

function handlePaleGreyVariant() {
  NavbarDarkTheme();
  handleDarkUnderlineAnimation();
  homeDarkTheme();
  textDarkTheme();
  logo.setAttribute("src", "/assets/images/logitech_icon_white.png");
  paleGrayMouseShow();
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

function NavbarLightTheme() {
  header.classList.add("header-light-theme");
  header.classList.remove("header-dark-theme");
}

function NavbarDarkTheme() {
  header.classList.add("header-dark-theme");
  header.classList.remove("header-light-theme");
}

variantTrigger.addEventListener("click", (e) => handleTriggerVariantClick(e));
graphiteVariant.addEventListener("click", () => handleGraphiteVariant());
paleGreyVariant.addEventListener("click", () => handlePaleGreyVariant());
document.addEventListener("click", (e) => handleClickedDocument(e));
