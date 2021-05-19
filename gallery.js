const toggle_hide = (parent) => {
  const all = document.getElementsByClassName('inner');
  for (element of all) {
    if (element === parent.lastElementChild) {
      continue;
    }
    if (!element.classList.contains('hide')) {
      element.classList.add('hide');
    }
  }
  parent.lastElementChild.classList.toggle('hide');
  /* element.classList.toggle('hide'); */
};
