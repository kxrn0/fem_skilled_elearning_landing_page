import add_shape from "./add_shape";
import { IconType } from "./types";

export default function animate_line(
  line: HTMLDivElement,
  preIndex: number,
  type: IconType
) {
  const text = line.dataset.text;

  text?.split("").forEach((char, index) => {
    const pre = document.createElement("pre");

    pre.style.setProperty("--delay", `${index + preIndex}`);
    pre.innerText = char;

    if (index === text.length - 1 && window.innerWidth > 740)
      pre.addEventListener("animationend", () => add_shape(line, type));

    line.append(pre);
  });
}
