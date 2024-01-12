function callAndBacks(entries: IntersectionObserverEntry[]) {
  const card = entries[0];

  if (card.isIntersecting) card.target.classList.add("observed");
}

function init_observer(element: Element, threshold: number) {
  const observer = new IntersectionObserver(callAndBacks, {
    threshold,
  });

  observer.observe(element);
}

function fnu() {
  const container = document.querySelector(".main .container")!;
  const courses = [...document.querySelectorAll(".card.contentful")];
  const footer = document.querySelector(".footer")!;

  courses.forEach((course) => init_observer(course, 0.75));
  init_observer(container, 0.25);
  init_observer(footer, 0.5);
}

fnu();
