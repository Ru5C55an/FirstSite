import('item-quantity-dropdown/lib/item-quantity-dropdown.min.js')
import('item-quantity-dropdown/lib/item-quantity-dropdown.min.css')
//import $ from 'jquery';

$(document).ready(() => {
  $('.iqdropdown').iqDropdown({ 
      // max total items
      maxItems: Infinity,
      // min total items
      minItems: 0,
      // text to show on the dropdown
      selectionText: 'item',
      // text to show for multiple items
      textPlural: 'items',
      // buttons to increment/decrement
      controls: {
        position: 'right',
        displayCls: 'iqdropdown-item-display',
        controlsCls: 'iqdropdown-item-controls',
        counterCls: 'counter'
      },
      // fires when an item quantity changes
      onChange: (id, count, totalItems) => {},
      // return false to prevent an item decrement
      beforeDecrement: (id, itemCount) => {},
      // return false to prevent an item increment
      beforeIncrement: (id, itemCount) => {}
   });
});

/*
$(document).ready(() => {
    $('.iqdropdown').iqDropdown({ 
    // min total items
    minItems: 0,
    // max total items
    maxItems: 20,
    // text to show on the dropdown
    selectionText: 'Сколько гостей',
    textPlural: 'гость',
    textPluralDeclination:['гость','гостя','гостей'],
    items: {},
    controls: {
      position: 'right',
      displayCls: 'iqdropdown-item-display',
      controlsCls: 'iqdropdown-item-controls',
      counterCls: 'counter'
    },
    // buttons to increment/decrement
    // fires when an item quantity changes
    onChange: function(id, count, totalItems) {
      //console.log(id, count, totalItems);
    },
    // return false to prevent an item decrement
    beforeDecrement: (id, itemCount) => true,
    // return false to prevent an item increment
    beforeIncrement: (id, itemCount) => {return true;}
    });
  });
  */