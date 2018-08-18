var position = [0, 0];

function positionEl() {
  const [x, y] = position;
  document.querySelector("div").style.transform = `translate(${x}px,${y}px)`;
}

var left = document.querySelector("#left");
left.onclick = function() {
  document.querySelector("div").innerText = "clicked left";
  position[0] -= 10;
  positionEl();
};

var up = document.querySelector("#up");
up.onclick = function() {
  document.querySelector("div").innerText = "clicked up";
  position[1] -= 10;
  positionEl();
};

var right = document.querySelector("#right");
right.onclick = function() {
  document.querySelector("div").innerText = "clicked right";
  position[0] += 10;
  positionEl();
};

var down = document.querySelector("#down");
down.onclick = function() {
  document.querySelector("div").innerText = "clicked down";
  position[1] += 10;
  positionEl();
};

//-------

var result = document.addEventListener("keydown", event => {
  var buttonEvent = new Event("click");
  if (event.key === "ArrowLeft") left.dispatchEvent(buttonEvent);
  if (event.key === "ArrowUp") up.dispatchEvent(buttonEvent);
  if (event.key === "ArrowRight") right.dispatchEvent(buttonEvent);
  if (event.key === "ArrowDown") down.dispatchEvent(buttonEvent);
});
