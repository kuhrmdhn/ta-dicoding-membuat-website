import {
  dropDownAnimation,
  headerTheme,
  imageAnimation,
  sectionTheme,
  textTheme,
  underlineAnimation,
} from "./animation.js";
const { dropDownOnClose, dropDownTrigger, hideDropDown, showDropDown } = dropDownAnimation;
const { headerDarkTheme, headerLightTheme } = headerTheme;
const { graphiteMouseShow, paleGrayMouseShow } = imageAnimation;
const { sectionDarkTheme, sectionLightTheme } = sectionTheme;
const { textDarkTheme, textLightTheme } = textTheme;
const { underlineDarkTheme, underlineLightTheme } = underlineAnimation;

const articleSelectedVariant = document.getElementById("articleSelectedVariant");
const logo = document.getElementById("logo");
const variantTrigger = document.getElementById("variantTrigger");
const graphiteVariant = document.getElementById("graphiteVariant");
const paleGreyVariant = document.getElementById("paleGreyVariant");

function graphiteVariantTheme() {
  articleSelectedVariant.innerText = "GRAPHITE";
  logo.setAttribute("src", "assets/images/logitech_icon_black.png");
  headerLightTheme();
  underlineLightTheme();
  sectionLightTheme();
  textLightTheme();
  graphiteMouseShow();
  hideDropDown();
}

function paleGreyVariantTheme() {
  articleSelectedVariant.innerText = "PALE GRAY";
  logo.setAttribute("src", "assets/images/logitech_icon_white.png");
  headerDarkTheme();
  underlineDarkTheme();
  sectionDarkTheme();
  textDarkTheme();
  paleGrayMouseShow();
  hideDropDown();
}

variantTrigger.addEventListener("click", (e) => dropDownTrigger(e));
document.addEventListener("click", (e) => dropDownOnClose(e));
graphiteVariant.addEventListener("click", graphiteVariantTheme);
paleGreyVariant.addEventListener("click", paleGreyVariantTheme);
