//The parent parameter is the div in which you will place your ul or
//any other element and that element youl append all the items that you want to
//place in your dropdown, check 'Test' folder for an example

function createDropDown(parent, dropdown, items) {
  parent.appendChild(dropdown).classList.add('drop-down');

  items.forEach((item) => {
    dropdown.appendChild(item).classList.add('dd-item');
  });

  parent.addEventListener('click', () => {
    dropdown.classList.toggle('visible');
  });
}

module.exports.createDropDown = createDropDown;

//If you want it to look like it's droping when it appear, here is a example
//on how the css might look like

//ul {
//  display: flex;
//  flex-direction: column;
//  gap: 15px;
//  pointer-events: none;
//  opacity: 0;
//  margin-top: -2%;
//  transition: opacity 300ms ease;
//  transition: margin-top 200ms ease-in-out;
//}
//
//ul.visible {
//  opacity: 1;
//  margin-top: 2%;
//  pointer-events: all;
//  background-color: yellow;
//}
//
