// ======================
// Rover Object Goes Here
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
};

// ======================
// Welcome msg
console.log("Welcome aboard human. Please, tell me where you want me to go :)");

// ======================
// Rover greeting
function roverGreeting() {
  console.log("Hello, human. Guide me in your search for extraterrestrial life");
}

// ======================
// Rover turns
function turnLeft() {
  switch (rover.direction) {
    case "N":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "N";
    break;
  } 
    console.log("My compass indicates that we are looking at " + rover.direction);
}

function turnRight() {
  switch(rover.direction) {
    case "N":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "N";
    break;
  }
    console.log("My compass indicates that we are looking at " + rover.direction);
}

// ======================
// Rover moves
function moveForward() {
  switch (rover.direction) {
    case "S":
    rover.y += 1;
    break;
    case "N":
    rover.y -= 1;
    break;
    case "W":
    rover.x -= 1;
    break;
    case "E":
    rover.x += 1;
    break;
  }

  console.log("Mars Rover looking at " + rover.direction + ". The coordinates are " + rover.travelLog.push([[rover.x]+[rover.y]]));
}

function moveBackward() {
  switch (rover.direction) {
    case "N":
    rover.y += 1;
    break;
    case "S":
    rover.y -= 1;
    break;
    case "W":
    rover.x += 1;
    break;
    case "E":
    rover.x -= 1;
    break;
  }

  console.log("Mars Rover looking at " + rover.direction + ". The coordinates are " + rover.travelLog.push([[rover.x]+[rover.y]]));
}

// ======================
// Grid edges
function marsGrid() {
  if (rover.x > 9 || rover.y > 9 || rover.x < 1 || rover.y < 1) {
    console.log("WARNING! My body is not ready to go through a lunar crater");
  } else {
    console.log("Step forward :)");
  } 
}

// ======================
// Rover commands ()
function commands(str) {
  switch (str) {
    case "F":
    if (rover.x <= 9 && rover.y <= 9 && rover.x >= 0 && rover.y >= 0) {
    moveForward(); 
  } else {
    console.log("WARNING! We are on the edge of the crater.")
  }
    break;
    case "B":
    moveBackward();
    break;
    case "L":
    turnLeft();
    break;
    case "R":
    turnRight();
    break;
    default:
    console.log("I'm not as smart as Siri or Alexa, I'm more like Cortana. Be patient with me and choose a correct command :(.");
    break;
  }
    console.log(marsGrid());
    console.log('Current direction: ' + rover.direction);
    console.log('Current position: ' + rover.x , rover.y);
    console.log(rover.travelLog);
}

// ==============================================================================================================
// roverTwo goes here
var roverTwo = {
  direction: "S",
  x: 8,
  y: 8,
  travelLog: [],
};

// ======================
// RoverTwo turns
function turnLeftTwo() {
  switch (roverTwo.direction) {
    case "N":
    roverTwo.direction = "W";
    break;
    case "W":
    roverTwo.direction = "S";
    break;
    case "S":
    roverTwo.direction = "E";
    break;
    case "E":
    roverTwo.direction = "N";
    break;
  } 
    console.log("My compass indicates that we are looking at " + roverTwo.direction);
}

function turnRightTwo() {
  switch(roverTwo.direction) {
    case "N":
    roverTwo.direction = "E";
    break;
    case "E":
    roverTwo.direction = "S";
    break;
    case "S":
    roverTwo.direction = "W";
    break;
    case "W":
    roverTwo.direction = "N";
    break;
  }
    console.log("My compass indicates that we are looking at " + roverTwo.direction);
}

// ======================
// RoverTwo moves
function moveForwardTwo() {
  switch (roverTwo.direction) {
    case "S":
    roverTwo.y += 1;
    break;
    case "N":
    roverTwo.y -= 1;
    break;
    case "W":
    roverTwo.x -= 1;
    break;
    case "E":
    roverTwo.x += 1;
    break;
  }

  console.log("Mars RoverTwo looking at " + roverTwo.direction + ". The coordinates are " + roverTwo.travelLog.push([[roverTwo.x]+[roverTwo.y]]));
}

function moveBackwardTwo() {
  switch (roverTwo.direction) {
    case "N":
    roverTwo.y += 1;
    break;
    case "S":
    roverTwo.y -= 1;
    break;
    case "W":
    roverTwo.x += 1;
    break;
    case "E":
    roverTwo.x -= 1;
    break;
  }

  console.log("Mars RoverTwo looking at " + roverTwo.direction + ". The coordinates are " + roverTwo.travelLog.push([[roverTwo.x]+[roverTwo.y]]));
}

// ======================
// Grid edges
function marsGrid() {
  if (roverTwo.x > 9 || roverTwo.y > 9 || roverTwo.x < 1 || roverTwo.y < 1) {
    console.log("WARNING! My body is not ready to go through a lunar crater");
  } else {
    console.log("Step forward :)");
  } 
}

// ======================
// Rover commands ()
function commandsTwo(str) {
  switch (str) {
    case "F":
    if (roverTwo.x <= 9 && roverTwo.y <= 9 && roverTwo.x >= 0 && roverTwo.y >= 0) {
    moveForwardTwo(); 
  } else {
    console.log("WARNING! We are on the edge of the crater.")
  }
    break;
    case "B":
    moveBackwardTwo();
    break;
    case "L":
    turnLeftTwo();
    break;
    case "R":
    turnRightTwo();
    break;
    default:
    console.log("I'm not as smart as Siri or Alexa, I'm more like Cortana. Be patient with me and choose a correct command :(.");
    break;
  }
    console.log(marsGrid());
    console.log('Current direction: ' + roverTwo.direction);
    console.log('Current position: ' + roverTwo.x , roverTwo.y);
    console.log(roverTwo.travelLog);
}