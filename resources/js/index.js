import $ from 'jquery';
import '../scss/common.scss';

$(document).on('click', '.js-turn-page', () => {
    let pages = $('.js-page');
    
    pages.toggleClass('js-current_page');
});
