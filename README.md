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
    <a href="https://github.com/Kais3rP/create-star-ratings">View Demo</a>
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