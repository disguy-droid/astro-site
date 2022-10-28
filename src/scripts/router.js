import * as turbo from "@hotwired/turbo";

turbo.start();

function onBeforeRender(event) {
  document.removeEventListener("turbo:before-render", onBeforeRender);

  event.preventDefault();

  if (!document.createDocumentTransition) {
    event.detail.resume();
    return;
  }

  const transtition = document.createDocumentTransition();

  transtition.start(() => {
    event.detail.resume();
  });
}

document.addEventListener("turbo:load", () => {
  document.addEventListener("turbo:before-render", onBeforeRender);
});
