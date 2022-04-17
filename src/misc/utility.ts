export const buildPath = (...args: string[]) => {
  return args
    .map((part, i) => {
      if (i === 0) {
        return part.trim().replace(/[\/]*$/g, "");
      } else {
        return part.trim().replace(/(^[\/]*|[\/]*$)/g, "");
      }
    })
    .filter((x) => x.length)
    .join("/");
};

export const toggleVisibility = (
  elem: HTMLElement,
  visNullDefault?: string
) => {
  elem.style.visibility =
    elem.style.visibility !== ""
      ? elem.style.visibility === "visible"
        ? "hidden"
        : "visible"
      : typeof visNullDefault !== "undefined"
      ? visNullDefault
      : "hidden";
};

export const hideParentOnClick = (eventOrElement: MouseEvent | HTMLElement) => {
  let elem =
    eventOrElement instanceof MouseEvent
      ? (eventOrElement.target as HTMLElement).parentNode
      : eventOrElement;
  [].slice
    .call(elem?.children)
    .forEach((child: HTMLElement) => toggleVisibility(child));
  toggleVisibility(elem as HTMLElement);
};
