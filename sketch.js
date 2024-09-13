function setup() {
    createCanvas(600, 600);
    background("#6E0780");
  }
  
  function draw() {
    stroke("rgb(199,199,246)8")
    fill("#2099A8")
    
    if(mouseIsPressed) { 
      rect(mouseX, mouseY, 20, 35);
    }
   
  }