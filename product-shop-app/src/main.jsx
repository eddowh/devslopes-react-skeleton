/**
 * This is the entry point file for our application. This is the file you will use to construct your
 * HTML. You will use your pre-created Components and then locate the HTML elements that you created
 * in your `index.html` and render the Component
 */

var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./components/nav/NavBar.jsx')

var navLinks = [{
    title: "Home",
    href: "#"
}, {
    title: "Courses",
    href: "#"
}, {
    title: "Blog",
    href: "#"
}, {
    title: "Portfolio",
    href: "#"
}]

ReactDOM.render(<NavBar bgColor="#FFF" titleColor="#3097d1" navData={navLinks} />, document.getElementById('nav'))
