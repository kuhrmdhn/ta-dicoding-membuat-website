const sections = document.querySelectorAll("section");
const footer = document.querySelector("footer");
const underlineAnimationElements = document.querySelectorAll(
  ".underline-hover-animation-light-theme"
);
const textThemes = document.querySelectorAll(".text-light-theme");
const variants = document.querySelectorAll("#variantLists>li");
const navigationItems = document.querySelectorAll(".navigation-list>li>*");
const header = document.getElementById("header");
const articleImage = document.getElementById("articleImage");
const graphiteImage = document.getElementById("graphiteImage");
const paleGreyImage = document.getElementById("paleGreyImage");
const variantTrigger = document.getElementById("variantTrigger");
const variantLists = document.getElementById("variantLists");

export const sectionTheme = {
  sectionDarkTheme: () => {
    footer.classList.add("home-dark-theme");
    footer.classList.remove("home-light-theme");

    variantLists.classList.add("header-dark-theme");
    variantLists.classList.remove("header-light-theme");

    sections.forEach((e) => e.classList.add("home-dark-theme"));
    sections.forEach((e) => e.classList.remove("home-light-theme"));
  },
  sectionLightTheme: () => {
    footer.classList.add("home-light-theme");
    footer.classList.remove("home-dark-theme");

    variantLists.classList.add("header-light-theme");
    variantLists.classList.remove("header-dark-theme");

    sections.forEach((e) => e.classList.add("home-light-theme"));
    sections.forEach((e) => e.classList.remove("home-dark-theme"));
  },
};

export const underlineAnimation = {
  underlineDarkTheme: () => {
    underlineAnimationElements.forEach((item) =>
      item.classList.add("underline-hover-animation-dark-theme")
    );
    underlineAnimationElements.forEach((item) =>
      item.classList.remove("underline-hover-animation-light-theme")
    );
  },
  underlineLightTheme: () => {
    underlineAnimationElements.forEach((item) =>
      item.classList.add("underline-hover-animation-light-theme")
    );
    underlineAnimationElements.forEach((item) =>
      item.classList.remove("underline-hover-animation-dark-theme")
    );
  },
};

export const textTheme = {
  textDarkTheme: () => {
    textThemes.forEach((text) => text.classList.add("text-dark-theme"));
    textThemes.forEach((text) => text.classList.remove("text-light-theme"));

    variants.forEach((item) => item.classList.add("text-dark-theme"));
    variants.forEach((item) => item.classList.remove("text-light-theme"));

    navigationItems.forEach((item) => item.classList.add("text-dark-theme"));
    navigationItems.forEach((item) =>
      item.classList.remove("text-light-theme")
    );
  },
  textLightTheme: () => {
    textThemes.forEach((text) => text.classList.add("text-light-theme"));
    textThemes.forEach((text) => text.classList.remove("text-dark-theme"));

    variants.forEach((item) => item.classList.add("text-light-theme"));
    variants.forEach((item) => item.classList.remove("text-dark-theme"));

    navigationItems.forEach((item) => item.classList.add("text-light-theme"));
    navigationItems.forEach((item) => item.classList.remove("text-dark-theme"));
  },
};

export const headerTheme = {
  headerDarkTheme: () => {
    header.classList.add("header-dark-theme");
    header.classList.remove("header-light-theme");
  },
  headerLightTheme: () => {
    header.classList.add("header-light-theme");
    header.classList.remove("header-dark-theme");
  },
};

export const imageAnimation = {
  graphiteMouseShow: () => {
    articleImage.setAttribute(
      "src",
      "assets/images/mx_master_3s_graphite.webp"
    );

    graphiteImage.classList.add("graphite-mouse-show");
    graphiteImage.classList.remove("graphite-mouse-hide");

    paleGreyImage.classList.add("pale-gray-mouse-hide");
    paleGreyImage.classList.remove("pale-gray-mouse-show");
  },
  paleGrayMouseShow: () => {
    articleImage.setAttribute(
      "src",
      "assets/images/mx_master_3s_pale_grey.webp"
    );
    paleGreyImage.classList.add("pale-gray-mouse-show");
    paleGreyImage.classList.remove("pale-gray-mouse-hide");

    graphiteImage.classList.add("graphite-mouse-hide");
    graphiteImage.classList.remove("graphite-mouse-show");
  },
};

export const dropDownAnimation = {
  showDropDown: () => {
    variantLists.style.top = "200%";
  },
  hideDropDown: () => {
    variantLists.style.top = "-2000%";
  },
  dropDownOnClose: (e) => {
    e.stopPropagation();
    const isVariantTriggerElement = variantTrigger.contains(e.target);
    const isVariantListsElement = variantLists.contains(e.target);
    if (!isVariantTriggerElement && !isVariantListsElement) {
      dropDownAnimation.hideDropDown();
    }
  },
  dropDownTrigger: (e) => {
    e.stopPropagation();
    const { top } = variantLists.style;
    if (top == "200%") {
      dropDownAnimation.hideDropDown();
    } else {
      dropDownAnimation.showDropDown();
    }
  },
};
