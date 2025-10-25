const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

c.width = innerWidth;
c.height = innerHeight;

let x = 100, y = 100, dx = 3, dy = 2, r = 20;

function draw() {
  ctx.clearRect(0, 0, c.width, c.height);

  // Ball
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = "orange";
  ctx.fill();

  // Move + bounce
  x += dx;
  y += dy;
  if (x + r > c.width || x - r < 0) dx = -dx;
  if (y + r > c.height || y - r < 0) dy = -dy;

  requestAnimationFrame(draw);
}

draw();
