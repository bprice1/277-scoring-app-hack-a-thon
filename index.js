import { Footer, Header, Main } from "./components";

const state = {
  buttons: ["addScore", "curveScore", "getAverage", "tallyGrades"],
  currentView: "addScore",
  data: []
};

function render(st) {
  document.querySelector("#root").innerHTML = `
${Header(st)}
${Main(st)}
${Footer(st)}
`;
}
