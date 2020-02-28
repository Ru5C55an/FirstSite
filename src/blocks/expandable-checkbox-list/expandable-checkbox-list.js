/* eslint-disable no-underscore-dangle */
import $ from 'jquery';

class ExpandableCheckboxList {
  constructor(component) {
    this.component = component;
    this._attachEventHandler();
    this.$list = $('.js-expandable-checkbox-list', this.$component);
  }

  _attachEventHandler() {
    $('.js-expandable-checkbox-list', this.$component).on('click', () => this.$list.toggleClass('js-expandable-checkbox-list_open'));
  }
}


$(() => {
  $('.js-expandable-checkbox-list').each((index, node) => {
    // eslint-disable-next-line no-new
    new ExpandableCheckboxList(node);
  });
});

/*
$(document).ready(() => {
  let expanded = false;

  function showCheckboxes() {
    const checkboxes = document.querySelector('.expandable-checkbox-list__menu');
    if (!expanded) {
      checkboxes.style.display = 'block';
      expanded = true;
    } else {
      checkboxes.style.display = 'none';
      expanded = false;
    }
  }
});
*/
