// import the code dependency( i.e. jarallax )
import { jarallax } from "jarallax";
import "jarallax/dist/jarallax.min.css";
import "./style.css";

// import the DOM representation of the elements from the page
var slowJarallaxElements = document.getElementsByClassName("jarallax");
var fastJarallaxElements = document.getElementsByClassName("fastJarallax");
var menuBtn = document.getElementById("menu-btn");
var navCtn = document.getElementById("nav-ctn");

// initalize the parallax effect using jarallax
jarallax( slowJarallaxElements, {
    speed: 0.3,
    imgSize: "cover"
});

jarallax( fastJarallaxElements, {
    speed: 0.1,
});



// add a click listener to the menu btn in order to toggle the nav container ( nav-ctn )
menuBtn.addEventListener( "click", function() {
    navCtn.classList.toggle("h-max");
});