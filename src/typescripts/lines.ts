import {
  bank,
  bubbles,
  cash,
  chan,
  chart,
  credit,
  dollar,
  monero,
  pig,
  wallet,
} from "./budget_shapes";
import {
  play,
  bike,
  blender,
  docker,
  github,
  react,
  solid,
  square_root,
  stick,
  sword,
} from "./skill_shapes";

type IconType = "skill" | "budget";

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function create_thing(icon: () => string) {
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

function pop(line: HTMLDivElement, type: IconType) {
  let icons;

  if (type === "budget") {
    icons = [
      pig,
      cash,
      dollar,
      monero,
      chan,
      wallet,
      credit,
      bank,
      bubbles,
      chart,
    ];
  } else {
    icons = [
      sword,
      blender,
      stick,
      square_root,
      bike,
      react,
      github,
      docker,
      solid,
      play,
    ];
  }

  for (let i = 0; i < icons.length; i++) line.append(create_thing(icons[i]));
}

function init_line(line: HTMLDivElement, preIndex: number, type: IconType) {
  const text = line.dataset.text;

  text?.split("").forEach((char, index) => {
    const pre = document.createElement("pre");

    pre.style.setProperty("--delay", `${index + preIndex}`);
    pre.innerText = char;

    if (index === text.length - 1) {
      pre.addEventListener("animationend", () => pop(line, type));
    }

    line.append(pre);
  });
}

function fun() {
  const first = document.querySelector(".line.first") as HTMLDivElement;
  const second = document.querySelector(".line.second") as HTMLDivElement;
  const firstText = first.dataset.text;
  const firstDelayIndex = Number(firstText?.length) + 5;

  init_line(first, 0, "skill");
  init_line(second, firstDelayIndex, "budget");
}

fun();
