import { addCustomClass, removeCustomClass } from "../functions/customFunctions";
import _vars from "../_vars";

const { lastSection, footer } = _vars;

document.addEventListener("DOMContentLoaded", function() {
  hoverTrigger(lastSection)
  hoverTrigger(footer)
});


function hoverTrigger(block) {
  block.addEventListener("mouseenter", function() {
    addCustomClass(lastSection, 'active');
    addCustomClass(footer, 'active');
  });

  block.addEventListener("mouseleave", function() {
    removeCustomClass(lastSection, 'active');
    removeCustomClass(footer, 'active');
  });
}
