window.addEventListener("gamepadconnected", (event) => {
  console.log("Gamepad connected:", event.gamepad.id);
});

function checkGamepadInput() {
  const gamepad = navigator.getGamepads()[0]; // First controller
  if (gamepad) {
    // Example: Log the A button (usually button 0)
    if (gamepad.buttons[0].pressed) {
      console.log("Triangle");
    }
    if (gamepad.buttons[1].pressed) {
      console.log("Circle");
    }
    if (gamepad.buttons[2].pressed) {
      console.log("X");
    }
    if (gamepad.buttons[3].pressed) {
      console.log("Square");
    }
    if (gamepad.buttons[4].pressed) {
      console.log("L1");
    }
    if (gamepad.buttons[5].pressed) {
      console.log("R1");
    }
    if (gamepad.buttons[6].pressed) {
      console.log("L2");
    }
    if (gamepad.buttons[7].pressed) {
      console.log("R2");
    }
    if (gamepad.buttons[8].pressed) {
      console.log("Select");
    }
    if (gamepad.buttons[9].pressed) {
      console.log("Start");
    }


  }
  requestAnimationFrame(checkGamepadInput); // Keep checking
}

checkGamepadInput();

function detectAxesMovement() {
  const gp = navigator.getGamepads()[0];
  if (gp) {
    gp.axes.forEach((val, i) => {
      if (Math.abs(val) > 0.1) {
        console.log(`Axis ${i}:`, val.toFixed(2));
      }
    });
  }
  requestAnimationFrame(detectAxesMovement);
}

window.addEventListener("gamepadconnected", () => {
  detectAxesMovement();
});

function pollDpadFromAxes() {
  const gp = navigator.getGamepads()[0];
  if (gp) {
    const vert = gp.axes[4];
    const horz = gp.axes[5];

    if (vert < -0.5) {
        document.querySelector(".box").style.transform +="translateX(-10px)"
        console.log("D pad Left")
    }
    else if (vert > 0.5) {
        console.log("D-Pad Right");
    document.querySelector(".box").style.transform +="translateX(10px)"
    }

    if (horz < -0.5) {
        console.log("D-Pad Up");
    document.querySelector(".box").style.transform +="translateY(-10px)"
    }
    else if (horz > 0.5) {
        console.log("D-Pad Down");
    document.querySelector(".box").style.transform +="translateY( 10px)"
    }
  }
  requestAnimationFrame(pollDpadFromAxes);
}

window.addEventListener("gamepadconnected", pollDpadFromAxes);