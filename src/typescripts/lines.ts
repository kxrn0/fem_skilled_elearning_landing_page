import animate_line from "./animate_line";

function fun() {
  const first = document.querySelector(".line.first") as HTMLDivElement;
  const second = document.querySelector(".line.second") as HTMLDivElement;
  const firstText = first.dataset.text;
  const firstDelayIndex = Number(firstText?.length) + 5;

  animate_line(first, 0, "skill");
  animate_line(second, firstDelayIndex, "budget");
}

fun();
