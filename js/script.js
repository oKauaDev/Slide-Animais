import SlideNav from "./SlideNav.js";

const slide = new SlideNav(".wrapper", ".slide", "ativo");
slide.init();

slide.addNavElements(".prev", ".next");
slide.createNavBar(".navbar", ".navbar");
slide.navTo(0);
