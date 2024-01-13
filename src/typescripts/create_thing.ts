import random from "./random";

export default function create_thing(icon: () => string) {
  const thing = document.createElement("div");
  const velC = 3;
  const position = {
    x: 0,
    y: 0,
  };
  const velocity = {
    x: random(-velC, velC),
    y: random(-velC, 0),
  };
  const acceleration = { x: 0, y: 0.05 };
  const angle = { value: random(-45, 45), velocity: random(-1, 1) };
  const interval = setInterval(() => {
    thing.style.transform = `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) rotate(${angle.value}deg)`;

    position.x += velocity.x;
    position.y += velocity.y;
    velocity.x += acceleration.x;
    velocity.y += acceleration.y;
    angle.value += angle.velocity;
  }, 16);

  thing.innerHTML = icon()!;
  thing.classList.add("thing");
  thing.style.left = `${random(60, 100)}%`;

  thing.addEventListener("animationend", () => {
    clearInterval(interval);
    thing.parentElement?.removeChild(thing);
  });

  return thing;
}
