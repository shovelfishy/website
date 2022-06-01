//sets variables and imports classes from CSS
const menuToggle = document.querySelector('.toggle')
const sections = document.querySelectorAll('section')
const header = document.querySelector('.land header')
const bg = document.querySelector('.header-bg')
const overlay = document.querySelector('.overlay')
const nav = document.querySelector('.nav')
var page = document.getElementsByTagName('A')
var file = location.href.split("/").pop();
const parallax = document.getElementById("parallax")
const parallax2 = document.querySelectorAll(".parallax")
const articleshadow = document.getElementById("article")

// Initializes AOS animation library
AOS.init();

// Dictionaries that hold all replit links and project descriptions to change iframe src and p element
var easy = {
  rps: ["https://replit.com/@EDWARDLIEW/rpsedward-1?embed=true&lite=1","A simple game of rock paper scissors game that only utilizes basic logic statements"],
  madlib: ["https://replit.com/@EDWARDLIEW/madlib?embed=true&lite=1","It's a Madlib... What did you expect? There's not much else to say"],
  sorter: ["https://replit.com/@EDWARDLIEW/number-sorter?embed=true&lite=1","A simple number sorter that sorts numbers from 1 to 40 in intervals of 10"],
  loop: ["https://replit.com/@EDWARDLIEW/loop-game?embed=true&lite=1","Test your patience with this program... I think??"]
}
var advanced = {
  rps: ["https://replit.com/@EDWARDLIEW/rps-1?embed=true&lite=1","A slighly more complex and comprehensive version of the rock paper scissors game where a win condition can be set"],
  computersncoders: ["https://replit.com/@EDWARDLIEW/Computers-and-Coders-1?embed=true&lite=1","A choose your own adventure game with very basic functionalities and a plain storyline"],
  hangman: ["https://replit.com/@EDWARDLIEW/hangman-1?embed=true&lite=1","A great, fully functional hangman game I coded for a coding workshop I hosted to raise funds for refugees"],
  border: ["https://replit.com/@EDWARDLIEW/ascii-border?embed=true&lite=1","A program that will place a border of a specified ASCII character around a word"]
}
var challenges = {
  discord: ["https://replit.com/@EDWARDLIEW/discord-1?embed=true&lite=1","My own discord bot I made for a coding workshop. The output can't be viewed here but I assure you it works!"],
  robobuddy: ["https://replit.com/@EDWARDLIEW/robobuddy?embed=true&lite=1","A \"game\" (not really) where a RoboBuddy can move around within a confined area"],
  pwd: ["https://replit.com/@EDWARDLIEW/pwd-generator?embed=true&lite=1","A customizable password generator with various features that I made purely for fun and out of curiosity"],
  adventure: ["https://replit.com/@EDWARDLIEW/Choose-your-own-adventure-1?embed=true&lite=1","A fully developed choose your own adventure game with a very, I mean very very, intriguing plot"],
}
var turtle = {
  logo: ["https://replit.com/@EDWARDLIEW/logo?embed=true&lite=1","The website's logo made with Python Turtle"],
  drawings: ["https://replit.com/@EDWARDLIEW/turtle-slow-1?embed=true&lite=1","Some cool little drawings I made"],
  math:["https://replit.com/@EDWARDLIEW/ok-1?embed=true&lite=1","A drawing I made with Turtle to test out some math with coding"]
}
var html = {
  site: ["https://replit.com/@EDWARDLIEW/site-of-web-1?embed=true&lite=1","A simple introductory website I made for fun (and also for the course)","https://site-of-web-1.edwardliew.repl.co"],
  restaurant: ["https://replit.com/@EDWARDLIEW/edwardRestaurauntBlogICS2O-1?embed=true&lite=1","A website about roti canai and Sri Melur with links to other students' websites","https://edwardRestaurauntBlogICS2O-1.edwardliew.repl.co"],
  website: ["https://replit.com/@EDWARDLIEW/website-1?embed=true&lite=1","A super duper cool website project about a travel destination that has 3 different page styles you can choose to view the website in","https://website-1.edwardliew.repl.co"]
}

// will change height of "shadow" in the slide menu for one of the pages so that it is always the full height of the page
var int = setInterval(function(){
  if (articleshadow !== null){
    var article = document.querySelector(".article").clientHeight
    articleshadow.style.height = article + 220 + "px"
  }
}, 100)

// Parallax effect for about page background
window.addEventListener("scroll", function(){
  let offset = window.pageYOffset
  parallax.style.backgroundPositionY = offset * 0.5 + "px"
  parallax2.forEach(item =>{
    item.style.transform = "translateX(" + -offset * 0.3 + "px )"
  })
})

// Slide menu function
menuToggle.addEventListener('click', function(){
  menuToggle.classList.toggle('active')
  sections.forEach(item => {
    item.classList.toggle('active')
  });
  overlay.classList.toggle('active')
})

// Makes header-bg opaque when page is scrolled
window.addEventListener('scroll', function(){
  var scrolled = window.scrollY
  if (scrolled >= 50) {
    bg.classList.add("toggled")
    nav.classList.add("toggled")
    menuToggle.classList.add("toggled")
  } else {
    bg.classList.remove("toggled")
    nav.classList.remove("toggled")
    menuToggle.classList.add("toggled")
  }
})

// Check for current page for slide menu
document.querySelectorAll(".menu ul li a").forEach((item, index) => {
  if (item.getAttribute("href") == file){
    console.log(item.getAttribute("href"), index)
    page[eval(index + 1)].classList.toggle("current")
  }
})

console.log("height:",document.documentElement.clientHeight,", width:",document.documentElement.clientWidth, header.clientHeight)

// portfolio iframe src modifier
function update(event){
  var name = event.target.name;
  var dropdown = document.getElementById(name);
  var parent = dropdown.parentElement
  var desc = parent.querySelector("p")
  var link = parent.querySelector(".weblink")
  var iframe = document.getElementById(CSS.escape(name) + "_");
	var option = dropdown.options[dropdown.selectedIndex].value;
  iframe.setAttribute("src", eval(name)[option][0])
  desc.innerHTML = eval(name)[option][1]
  if (link !== null){
    link.setAttribute("href", eval(name)[option][2])
  }
}
