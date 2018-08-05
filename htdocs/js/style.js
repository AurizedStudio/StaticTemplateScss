/* ==================================================
   メインナビゲーション
 ================================================== */
$(function () {
	'use strict'
	var menuBtn = $('.menu-btn');
	var menuInner = $('.menu-inner');
	var pageID = $('.page-example');
	var flagBtn = false;
	menuBtn.on('click', function () {
		if (flagBtn) { // クローズ
			menuInner.removeClass('is-menu-inner');
			pageID.removeClass('is-page-example')
			flagBtn = false;
		} else { // オープン
			menuInner.addClass('is-menu-inner');
			pageID.addClass('is-page-example');
			flagBtn = true;
		}
	})
});
