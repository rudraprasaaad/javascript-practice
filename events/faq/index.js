const tabs = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

function activateTab(index) {
  tabs.forEach((tab, i) => {
    const isActive = i === index;
    tab.setAttribute("aria-selected", isActive);
    tab.classList.toggle("active", isActive);
    tabPanels[i].classList.toggle("active", isActive);
  });
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateTab(index));
});

document.addEventListener("keydown", (e) => {
  if (["1", "2", "3"].includes(e.key)) {
    activateTab(parseInt(e.key, 10) - 1);
  }
});
