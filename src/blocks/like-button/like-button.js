import $ from 'jquery';

let clicks = 0;

document.querySelector('.like-button__counter').innerHTML = clicks;

$('.like-button').click(() => {
  clicks += 1;
  document.querySelector('.like-button__counter').innerHTML = clicks;
  $('.like-button').addClass('like-button_theme_liked');
});
