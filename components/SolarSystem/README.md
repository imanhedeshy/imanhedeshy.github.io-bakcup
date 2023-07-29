# Solar System Simulation

This project is a visual and interactive representation of our solar system's celestial bodies. It shows the sun, the eight planets (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune), Pluto, and several moons. The sizes of the celestial bodies and their distances from the sun are not to scale, but this project provides a conceptual understanding of their motion around the sun (or in the case of the moons, around their respective planets).

## Features

- 3D representation of the solar system's celestial bodies using SVGs.
- Celestial bodies are animated to revolve in orbits.
- Dynamic positioning of celestial bodies.
- User interaction for modifying the speed, size, and radius of the celestial bodies.

## Simulation Details

The simulation allows the user to modify the speed, size, and radius of the celestial bodies. Here are the details of the celestial bodies:

| Celestial Body | Diameter (km) | Orbital Speed (km/s) | Orbital Radius (million km) | Year (Earth days) | Min Temp (°C) | Max Temp (°C) | Composition |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Sun | 1,392,700 | N/A | N/A | N/A | 5,500 | N/A | Hydrogen and Helium |
| Mercury | 4,879 | 47.87 | 57.91 | 88 | -173 | 427 | Rock and Metal |
| Venus | 12,104 | 35 | 108.2 | 224.7 | 462 | 462 | Rock and Metal |
| Earth | 12,742 | 29.78 | 149.6 | 365.2 | -89 | 58 | Rock and Water |
| Moon | 3,474 | 1.022 | 0.384 | 27.3 | -233 | 123 | Rock |
| Mars | 6,779 | 24.07 | 227.9 | 687 | -143 | 35 | Rock and Metal |
| Jupiter | 139,820 | 13.07 | 778.5 | 4,333 | -145 | 24 | Hydrogen and Helium |
| Saturn | 116,460 | 9.68 | 1,433.5 | 10,759 | -178 | -139 | Hydrogen and Helium |
| Uranus | 50,724 | 6.8 | 2,872.5 | 30,687 | -224 | -216 | Hydrogen, Helium, and Methane |
| Neptune | 49,244 | 5.43 | 4,495.1 | 60,190 | -218 | -200 | Hydrogen, Helium, and Methane |
| Pluto | 2,377 | 4.74 | 5,906.4 | 90,560 | -229 | -225 | Rock and Ice |

## Technologies Used

- HTML
- CSS
- SCSS
- JavaScript

## Project Structure

The main files of this project are:

- `index.html`: the main HTML file that loads up the simulation.
- `styles.css`: the CSS file for styling the HTML file.
- `solar-system.js`: the main JavaScript file that creates the solar system simulation.
- `assets`: a folder containing the SVG images of the celestial bodies.

## How to Use

Clone this repository and open `index.html` in your browser. 

The controls are located in the top right corner of the simulation. You can adjust the following parameters:

- **Speed**: This changes the speed of the celestial bodies' orbits.
- **Radius**: This changes the size of the celestial bodies' orbits.
- **Size**: This changes the size of the celestial bodies.

After adjusting the parameters, click on the `Apply` button to apply the changes to the simulation.

## Future Scope

- The representation can be made more accurate by considering elliptical orbits.
- More celestial bodies, like other moons and the dwarf planets, can be added.

## Author

Iman Hedeshy
- Github: [@imanhedeshy](https://github.com/imanhedeshy)

## License

This project is open source and available under the MIT License.
