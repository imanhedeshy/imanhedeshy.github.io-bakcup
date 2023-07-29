const speedMultiplier = 1;
const radiusMultiplier = 1;
const sizeMultiplier = 1;

const celestialBodies = [
  {
    name: "sun",
    radius: 0 * radiusMultiplier,
    speed: 0 * speedMultiplier,
    size: 3 * sizeMultiplier,
  },
  {
    name: "mercury",
    radius: 120 * radiusMultiplier,
    speed: 0.021 * speedMultiplier,
    size: 0.7 * sizeMultiplier,
  },
  {
    name: "venus",
    radius: 140 * radiusMultiplier,
    speed: 0.013 * speedMultiplier,
    size: 0.9 * sizeMultiplier,
  },
  {
    name: "earth",
    radius: 180 * radiusMultiplier,
    speed: 0.01 * speedMultiplier,
    size: 1 * sizeMultiplier,
  },
  {
    name: "moon",
    radius: 50 * radiusMultiplier,
    speed: 0.03 * speedMultiplier,
    revolvesAround: "earth",
    initialAngle: Math.random() * 2 * Math.PI,
    size: 0.2 * sizeMultiplier,
  },
  {
    name: "mars",
    radius: 220 * radiusMultiplier,
    speed: 0.008 * speedMultiplier,
    size: 0.8 * sizeMultiplier,
  },
  {
    name: "jupiter",
    radius: 260 * radiusMultiplier,
    speed: 0.004 * speedMultiplier,
    size: 1.3 * sizeMultiplier,
  },
  {
    name: "saturn",
    radius: 300 * radiusMultiplier,
    speed: 0.003 * speedMultiplier,
    size: 1.2 * sizeMultiplier,
  },
  {
    name: "uranus",
    radius: 340 * radiusMultiplier,
    speed: 0.002 * speedMultiplier,
    size: 1.1 * sizeMultiplier,
  },
  {
    name: "neptune",
    radius: 380 * radiusMultiplier,
    speed: 0.001 * speedMultiplier,
    size: 1.1 * sizeMultiplier,
  },
  {
    name: "pluto",
    radius: 400 * radiusMultiplier,
    speed: 0.0006 * speedMultiplier,
    size: 0.6 * sizeMultiplier,
  },
  {
    name: "phobos",
    radius: 26 * radiusMultiplier,
    speed: 0.056 * speedMultiplier,
    revolvesAround: "mars",
    initialAngle: Math.random() * 2 * Math.PI,
    size: 0.2 * sizeMultiplier,
  },
  {
    name: "deimos",
    radius: 40 * radiusMultiplier,
    speed: 0.027 * speedMultiplier,
    revolvesAround: "mars",
    initialAngle: Math.random() * 2 * Math.PI,
    size: 0.2 * sizeMultiplier,
  },
  {
    name: "io",
    radius: 50 * radiusMultiplier,
    speed: 0.045 * speedMultiplier,
    revolvesAround: "jupiter",
    initialAngle: Math.random() * 2 * Math.PI,
    size: 0.3 * sizeMultiplier,
  },
];

const speedInput = document.getElementById("speedMultiplier");
const radiusInput = document.getElementById("radiusMultiplier");
const sizeInput = document.getElementById("sizeMultiplier");
const solarSystemDom = document.getElementById("solar-system");
const parents = {};

celestialBodies.forEach((body) => {
  let angle =
    body.initialAngle !== undefined
      ? body.initialAngle
      : Math.random() * 2 * Math.PI;
  let dom = document.getElementById(body.name);

  function updatePosition() {
    let position = calculatePosition(body, angle);

    dom.style.left = `${position.x}px`;
    dom.style.top = `${position.y}px`;

    if (!body.revolvesAround) {
      parents[body.name] = position;
    }

    angle += body.speed;
    requestAnimationFrame(updatePosition);
  }

  updatePosition();
});

function calculatePosition(body, angle) {
  let parentPos;
  if (body.revolvesAround) {
    parentPos = parents[body.revolvesAround];
  } else {
    const rect = solarSystemDom.getBoundingClientRect();
    parentPos = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
  }

  const x = parentPos.x + body.radius * Math.cos(angle);
  const y = parentPos.y + body.radius * Math.sin(angle);

  return { x, y };
}

function applyChanges(event) {
  event.preventDefault();

  const speedMultiplier = parseFloat(speedInput.value);
  const radiusMultiplier = parseFloat(radiusInput.value);
  const sizeMultiplier = parseFloat(sizeInput.value);

  celestialBodies.forEach((body) => {
    body.speed = body.speed * speedMultiplier;
    body.radius = body.radius * radiusMultiplier;
    body.size = body.size * sizeMultiplier;
  });


}

document.getElementById("controls").addEventListener("submit", applyChanges);
