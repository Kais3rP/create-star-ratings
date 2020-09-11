<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** Kais3rP, create-star-ratings, twitter_handle, cesare.polonara@gmail.com
-->





<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Kais3rP/create-star-ratings">
    <img src="logo/Star_.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Custom Star Rating System</h3>

  <p align="center">
    A simple Star Rating System, yet highly customizable and easy to use as is calling a function!
    <br />
    <a href="https://github.com/Kais3rP/create-star-ratings"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://codepen.io/kais3rp/pen/yLOKdVj" target="_blank">View Demo</a>
    ·
    <a href="https://github.com/Kais3rP/create-star-ratings/issues">Report Bug</a>
    ·
    <a href="https://github.com/Kais3rP/create-star-ratings/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
* [Usage](#usage)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

This is a Star Rating System generator, that let you insert in your page UI, a Star Rating graphical interface.
The generator is highly customizable, and lets you choose everything, colors, size, number of stars, etc...
More info on Usage in the proper Section.

### Built With

* [Vanilla JS]()


<!-- GETTING STARTED -->
## Getting Started

You can use this library by using the CDN directly on your page: https://cdn.jsdelivr.net/gh/Kais3rP/create-star-ratings@master/createRatingStars.js

Or by importing the minified version directly as a script.

<!-- USAGE EXAMPLES -->
## Usage

* Import the library in you project.
* Create a container div element for the rating system.
* Simply call the function ##createRatingStars() in a script tag to create the Star Rating System

# This is the function : 
```createRatingStars(DOMelementToAppend, name, numOfStars, starWidth, color, bgColor,cb)```
This is how you call the function:

```
<div id='container-first'></div>
<script type="text/javascript"> 
let containerFirst = document.getElementById('container-first');
createRatingStars(containerFirst, 'stars', 10, 60, "navy", "white", cb); 
</script>

```
<div id='container-first'></div>
<script type="text/javascript"> 
let containerFirst = document.getElementById('container-first');
createRatingStars(containerFirst, 'stars', 10, 60, "navy", "white", cb); 
//minified lib
function createRatingStars(a,b,c,d,e,f,g){function createSVG(){let a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttributeNS(null,"viewBox","0 0 "+300+" "+300),a.setAttributeNS(null,"class",b),a.setAttributeNS(null,"width",d),a.setAttributeNS(null,"fill",f),a.setAttributeNS(null,"stroke",e),a.setAttributeNS(null,"stroke-width","15px");let c=document.createElementNS("http://www.w3.org/2000/svg","defs"),g=document.createElementNS("http://www.w3.org/2000/svg","linearGradient");g.setAttributeNS(null,"id",b),g.setAttributeNS(null,"x1","0%"),g.setAttributeNS(null,"x2","100%"),g.setAttributeNS(null,"y1","0%"),g.setAttributeNS(null,"y2","0%");let h=document.createElementNS("http://www.w3.org/2000/svg","stop");h.setAttributeNS(null,"offset","50%"),h.setAttributeNS(null,"stop-color",e),g.appendChild(h);let i=document.createElementNS("http://www.w3.org/2000/svg","stop");i.setAttributeNS(null,"offset","50%"),i.setAttributeNS(null,"stop-color",f),g.appendChild(i),c.appendChild(g),a.appendChild(c);let j=document.createElementNS("http://www.w3.org/2000/svg","polygon");return j.setAttributeNS(null,"points","141.5 23.47 170.5 109.47 260.5 109.47 188.5 163.47 214.5 249.47 141.5 198.47 68.5 249.47 94.5 163.47 22.5 109.47 112.5 109.47 141.5 23.47"),a.appendChild(j),a}let h=document.createElement("div");let i=document.createElement("div");i.innerText="Rating: ";for(let j,k=0;k<c;k++)j=createSVG().cloneNode(!0),h.appendChild(j);h.appendChild(i),a.appendChild(h);let j=[...document.querySelectorAll(`.${b}`)],k=[];j.forEach((a,b)=>{k.push({star:a,x0:a.getBoundingClientRect().x,x1:a.getBoundingClientRect().x+a.getBoundingClientRect().width/2,x2:a.getBoundingClientRect().x+a.getBoundingClientRect().width,y0:a.getBoundingClientRect().y,y1:a.getBoundingClientRect().y+a.getBoundingClientRect().height,value:b}),a.onmouseout=a=>{a.pageX<a.target.getBoundingClientRect().x+a.target.getBoundingClientRect().width&&(a.target.style.fill="")},a.onclick=a=>{let b=k[j.indexOf(a.currentTarget)];a.pageX>b.x0&&a.pageX<b.x1&&a.pageY>b.y0&&a.pageY<b.y1&&(i.innerText="Total Score: "+(b.value+.5)),a.pageX>b.x1&&a.pageX<b.x2&&a.pageY>b.y0&&a.pageY<b.y1&&(i.innerText="Total Score: "+(b.value+1)),g?g(a):null}}),h.onmouseleave=()=>{for(let a of j)a.style.fill=""},h.onmousemove=a=>{for(let c of k){if(a.pageX>c.x0&&a.pageX<c.x1&&a.pageY>c.y0&&a.pageY<c.y1){c.star.style.fill=`url(#${b})`;for(let a of j.slice(0,j.indexOf(c.star)))a.style.fill=e}if(a.pageX>c.x1&&a.pageX<c.x2&&a.pageY>c.y0&&a.pageY<c.y1){c.star.style.fill=e;for(let a of j.slice(0,j.indexOf(c.star)))a.style.fill=e}}}}

</script>

As you can see, the function takes 7 parameters, the last one, the callback, is (optional), these are
the parameters it takes:

  * type: Object, The DOM element where you want to append the stars
  * type: String, the number of stars
  * type: Number/String, the width of stars, it takes a number in px or a relative unit
  * type: String, the main color of stars (it accepts any format supported by CSS)
  * type: String, the background color of stars (it accepts any format supported by CSS)
  * type: Function, An optional callback that is triggered on click on stars
  
Being built on SVG, the stars are fully responsive on resize, you just have to pay attention to a few things:
* If you want them to be in line, give the container an auto width and then you can give the stars a fixed width
* If you want them to be inline with a fixed container width, give them a relative width according to the number of stars, eg:
  if you have 10 stars, give them a width of '10%', if you have 20 stars, give them a width of '5%', etc...

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/Kais3rP/create-star-ratings/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - cesare.polonara@gmail.com

Project Link: [https://github.com/Kais3rP/create-star-ratings](https://github.com/Kais3rP/create-star-ratings)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* []()
* []()
* []()





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Kais3rP/repo.svg?style=flat-square
[contributors-url]: https://github.com/Kais3rP/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Kais3rP/repo.svg?style=flat-square
[forks-url]: https://github.com/Kais3rP/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/Kais3rP/repo.svg?style=flat-square
[stars-url]: https://github.com/Kais3rP/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/Kais3rP/repo.svg?style=flat-square
[issues-url]: https://github.com/Kais3rP/repo/issues
[license-shield]: https://img.shields.io/github/license/Kais3rP/repo.svg?style=flat-square
[license-url]: https://github.com/Kais3rP/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/Kais3rP
[product-screenshot]: images/screenshot.png