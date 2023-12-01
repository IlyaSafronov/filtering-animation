'use strict';
const filterList = document.querySelector('.filter');
const filterButtons = filterList.querySelectorAll('.filter-btn');
const conferences = document.querySelectorAll('.conference');

filterButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const filter = e.target.getAttribute('data-filter');

    if (!document.startViewTransition) {
      updateActiveButton(e.target);
      filterConf(filter);
    }

    document.startViewTransition(() => {
    // todo change the active button
    updateActiveButton(e.target);
    filterConf(filter);
    // todo filter the list
    });
  });
});

function updateActiveButton(newButton) {
  // todo find the previously active button
  // todo & remove the active class from it
  filterList.querySelector('.active').classList.remove('active');
  // todo add the active class to our new button
  newButton.classList.add('active');
}

function filterConf(confFilter) {
// todo get each conference category
conferences.forEach((conf) => {
  const confCategory = conf.getAttribute('data-category');
    // todo check if that category matches the filter
    if (confFilter === 'all' || confFilter === confCategory) {
      conf.removeAttribute('hidden');
    // todo if it matches, show that conf
    } else {
      conf.setAttribute('hidden', '');
    }
   
    // todo if not, hide that conf
});

}