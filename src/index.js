function createRatingStars(DOMelementToAppend, name, numOfStars, starWidth, color, bgColor,cb) {
  let svgContainer = document.createElement("div");
  svgContainer;
  let result = document.createElement("div");
  result.innerText = "Rating: ";

  for(let i = 0; i<numOfStars; i++){
    let svgClone = createSVG().cloneNode(true);
    svgContainer.appendChild(svgClone);
  };
  svgContainer.appendChild(result);
  DOMelementToAppend.appendChild(svgContainer);
//--------------------------------------------------------------------
//--Events setting----------------------------------------------------  
let stars = [...document.querySelectorAll(`.${name}`)];
  
  //----Setting an object with all positioning props of the stars ---

  let starProps = [];

  stars.forEach((x, i) => {
    starProps.push({
      star: x,
      x0: x.getBoundingClientRect().x,
      x1: x.getBoundingClientRect().x + x.getBoundingClientRect().width / 2,
      x2: x.getBoundingClientRect().x + x.getBoundingClientRect().width,
      y0: x.getBoundingClientRect().y,
      y1: x.getBoundingClientRect().y + x.getBoundingClientRect().height,
      value: i
    });

    //Adds the mouse out event to every star to reset color:
    //It resets only if the mouse shifts from right to left and not from
    //left to right
    x.onmouseout = (ev) => {
      if (
        ev.pageX <
        ev.target.getBoundingClientRect().x +
          ev.target.getBoundingClientRect().width
      )
        ev.target.style.fill = "";
    };

    //adds the onclick event to calculate the score:
    x.onclick = (ev) => {
      //Hover the first half of the star
      let star = starProps[stars.indexOf(ev.currentTarget)];
      if (
        ev.pageX > star.x0 &&
        ev.pageX < star.x1 &&
        ev.pageY > star.y0 &&
        ev.pageY < star.y1
      )
        result.innerText = "Total Score: " + (star.value + 0.5);
      //Hover the second half of the star
      if (
        ev.pageX > star.x1 &&
        ev.pageX < star.x2 &&
        ev.pageY > star.y0 &&
        ev.pageY < star.y1
      )
        result.innerText = "Total Score: " + (star.value + 1);
      //executes the callback optional parameter
      cb ? cb(ev) : null;
    };
  });


  //Resets the color on mouse exiting from the container
  svgContainer.onmouseleave = (ev) => {
    for (let star of stars) star.style.fill = "";
  };

  //--------------------------------------------------------------
  //--Main logic of filling the stars according to mouse positioning
  
  svgContainer.onmousemove = (ev) => {
    for (let star of starProps) {
      //Hover the first half of the star
      
      if (
        ev.pageX > star.x0 &&
        ev.pageX < star.x1 &&
        ev.pageY > star.y0 &&
        ev.pageY < star.y1
      ) {
        star.star.style.fill = `url(#${name})`;
        //Fills the rest of the stars on the left:
        for (let starOrig of stars.slice(0, stars.indexOf(star.star)))
          starOrig.style.fill = color;
          for (let starOrig of stars.slice(stars.indexOf(star.star), stars.length-1))
        starOrig.style.fill = "";
      }
      //Hover the second half of the star
      if (
        ev.pageX > star.x1 &&
        ev.pageX < star.x2 &&
        ev.pageY > star.y0 &&
        ev.pageY < star.y1
      ) {
        star.star.style.fill = color;
        //Fills the rest of the stars on the left:
        for (let starOrig of stars.slice(0, stars.indexOf(star.star)))
          starOrig.style.fill = color;
          for (let starOrig of stars.slice(stars.indexOf(star.star), stars.length-1))
        starOrig.style.fill = "";
      }
    }
  };


  //Create SVG Function
  //------------------------------------------

  function createSVG() {
    let xmlns = "http://www.w3.org/2000/svg";
    let boxWidth = 300;
    let boxHeight = 300;

    let svgElem = document.createElementNS(xmlns, "svg");
    svgElem.setAttributeNS(
      null,
      "viewBox",
      "0 0 " + boxWidth + " " + boxHeight
    );
    svgElem.setAttributeNS(null, "class", name);
    svgElem.setAttributeNS(null, "width", starWidth);
    svgElem.setAttributeNS(null, "fill", bgColor);
    svgElem.setAttributeNS(null, "stroke", color);
    svgElem.setAttributeNS(null, "stroke-width", "15px");

    // draw linear gradient
    let defs = document.createElementNS(xmlns, "defs");
    let grad = document.createElementNS(xmlns, "linearGradient");
    grad.setAttributeNS(null, "id", name);
    grad.setAttributeNS(null, "x1", "0%");
    grad.setAttributeNS(null, "x2", "100%");
    grad.setAttributeNS(null, "y1", "0%");
    grad.setAttributeNS(null, "y2", "0%");
    let stopLeft = document.createElementNS(xmlns, "stop");
    stopLeft.setAttributeNS(null, "offset", "50%");
    stopLeft.setAttributeNS(null, "stop-color", color);
    grad.appendChild(stopLeft);
    let stopRight = document.createElementNS(xmlns, "stop");
    stopRight.setAttributeNS(null, "offset", "50%");
    stopRight.setAttributeNS(null, "stop-color", bgColor);
    grad.appendChild(stopRight);
    defs.appendChild(grad);
    svgElem.appendChild(defs);

    let polygon = document.createElementNS(xmlns, "polygon");
    polygon.setAttributeNS(
      null,
      "points",
      "141.5 23.47 170.5 109.47 260.5 109.47 188.5 163.47 214.5 249.47 141.5 198.47 68.5 249.47 94.5 163.47 22.5 109.47 112.5 109.47 141.5 23.47"
    );
    svgElem.appendChild(polygon);

    return svgElem;
  }
 
}


