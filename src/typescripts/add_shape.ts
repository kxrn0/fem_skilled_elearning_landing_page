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
import create_thing from "./create_thing";
import { IconType } from "./types";

export default function add_shape(line: HTMLDivElement, type: IconType) {
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
