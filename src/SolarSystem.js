import React, { useState, useEffect, useRef } from "react";

const G = 6.674 * Math.pow(10, -11); // Gravitational constant

const SolarSystem = ({ multipliers }) => {
  const [celestialBodies, setCelestialBodies] = useState([]);
  const [parents, setParents] = useState({});
  const solarSystemDom = useRef(null);

  const radiusMultiplier = multipliers.radiusMultiplier;
  const speedMultiplier = multipliers.speedMultiplier;
  const sizeMultiplier = multipliers.sizeMultiplier;

  // Define the initial state for the celestial bodies
  const initialCelestialBodies = [
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

  useEffect(() => {
    setCelestialBodies([...initialCelestialBodies]);
  }, [radiusMultiplier, speedMultiplier, sizeMultiplier]);

  // Calculate gravitational force between two celestial bodies
  const calculateForce = (body1, body2) => {
    const distance = Math.sqrt(
      Math.pow(body2.x - body1.x, 2) + Math.pow(body2.y - body1.y, 2)
    );
    const force = (G * body1.mass * body2.mass) / Math.pow(distance, 2);
    return force;
  };

  // Calculate new position for a celestial body
  const calculatePosition = (body, angle) => {
    const parentPos = parents[body.revolvesAround];
    if (!parentPos) {
      console.warn(`Failed to calculate parent position for ${body.name}`);
      return null;
    }

    const distance = 50 + body.radius + parentPos.radius;
    const x = parentPos.x + distance * Math.cos(angle);
    const y = parentPos.y + distance * Math.sin(angle);

    return { x, y };
  };

  // Separate useEffect for updating celestial body positions
  useEffect(() => {
    const updatePositions = () => {
      celestialBodies.forEach((body) => {
        let angle =
          body.initialAngle !== undefined
            ? body.initialAngle
            : Math.random() * 2 * Math.PI;
        let dom = document.getElementById(body.name);

        if (!dom) {
          console.warn(`Could not find DOM element with id ${body.name}`);
          return;
        }

        const updatePosition = () => {
          let position = calculatePosition(body, angle);

          if (!position) {
            console.warn(`Failed to calculate position for ${body.name}`);
            return;
          }

          dom.style.left = `${position.x}px`;
          dom.style.top = `${position.y}px`;

          angle += body.speed;
          requestAnimationFrame(updatePosition);
        };

        updatePosition();
      });
    };

    const animationFrameId = requestAnimationFrame(updatePositions);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [celestialBodies, parents]);

  // Separate useEffect for updating parent positions
  useEffect(() => {
    const parentPositions = {};
    celestialBodies.forEach((body) => {
      if (!body.revolvesAround) {
        const rect = solarSystemDom.current.getBoundingClientRect();
        const parentPos = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          radius: body.radius,
        };
        parentPositions[body.name] = parentPos;
      }
    });

    setParents(parentPositions);
  }, [celestialBodies]);

  return (
    <div className="solar-system" ref={solarSystemDom}>
      {celestialBodies.map((body) => (
        <div
          key={body.name}
          id={body.name}
          className={`celestial-body ${body.name}`}
          style={{
            width: body.radius * 2,
            height: body.radius * 2,
            borderRadius: body.radius,
          }}
        ></div>
      ))}
    </div>
  );
};

export default SolarSystem;
