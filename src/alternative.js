function createRatingStars(
    DOMelementToAppend,
    name,
    numOfStars,
    starWidth,
    color,
    bgColor,
    cb
) {
    let svgContainer = document.createElement("div");
    svgContainer;
    let result = document.createElement("div");
    result.innerText = "Rating: ";

    for (let i = 0; i < numOfStars; i++) {
        let svgClone = createSVG().cloneNode(true);
        svgContainer.appendChild(svgClone);
    }
    svgContainer.appendChild(result);
    DOMelementToAppend.appendChild(svgContainer);
    //--------------------------------------------------------------------
    //--Events setting----------------------------------------------------
    let stars = [...document.querySelectorAll(`.${name}`)];

    //----Setting an object with all positioning props of the stars ---
    for (let i = 0; i < stars.length; i++) {
        //adds the onclick event to calculate the score:

        stars[i].onclick = (ev) => {
           
            //Hover the first half of the star

            if (
                ev.pageX <
                ev.currentTarget.getBoundingClientRect().x +
                ev.currentTarget.getBoundingClientRect().width / 2
            ){
                result.innerText = "Total Score: " + (i + 0.5);
                cb ? cb(ev.currentTarget,i+0.5) : null;
            }
            //Hover the second half of the star
            else {
                result.innerText = "Total Score: " + (i + 1);
                cb ? cb(ev.currentTarget,i+1) : null;
            }
        };
    
    
        stars[i].onmousemove = (ev) => {
            if (
                ev.pageX <
                ev.currentTarget.getBoundingClientRect().x +
                ev.currentTarget.getBoundingClientRect().width / 2
            )
                ev.currentTarget.style.fill = `url(#${name})`;
            else ev.currentTarget.style.fill = color;
            //Sets the color of the stars to the left and to the right
            for (let starOrig of stars.slice(0, stars.indexOf(ev.currentTarget)))
                starOrig.style.fill = color;
            for (let starOrig of stars.slice(
                stars.indexOf(ev.currentTarget) + 1,
                stars.length
            ))
                starOrig.style.fill = "";
        }
    };

    //Resets the color on mouse exiting from the container
    svgContainer.onmouseleave = (ev) => {
        for (let star of stars) star.style.fill = "";
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
