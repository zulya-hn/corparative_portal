import $ from 'jquery';
import '../scss/common.scss';

$(document).on('click', '.js-turn-page, #alert-ok', () => {
    let pages = $('.js-page');
    
    pages.toggleClass('js-current_page');
});
