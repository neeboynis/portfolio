(d => {
  const word = d.querySelector(".wrapper h1");

  const shadow = e => {
    const { x, y } = e;
    const gBCR = word.getBoundingClientRect();
    const w = this;
    const xM = (x - gBCR.left - gBCR.width / 2) / gBCR.width * 5;
    const yM = (y - gBCR.top - gBCR.height / 2) / gBCR.height * 5;
    
    transform(xM, yM);
  };

  const transform = (x, y) => {
    word.style.textShadow = `${x}px ${-y}px 0px rgb(102, 249, 255, 0.5),
                             ${-x}px ${y}px 0px rgb(255, 35, 251, 0.5),
                             ${y}px ${-x}px 0px rgb(255, 255, 73, 0.5),
                             ${-y}px ${x}px 0px rgb(102, 249, 255, 0.5)`;
  };

  window.addEventListener("mousemove", shadow);
})(document);