/* ==================================================
   メインナビゲーション
 ================================================== */
$(function () {
	'use strict'
	var menuBtn = $('.menu-btn');
	var gnav = $('.gnav');
	var gBackDrop = $('.gnav-backdrop');
	var flagBtn = false;

	menuBtn.on('click', function () {
		area();
	})
	gBackDrop.on('click', function () {
		area();
	})

	gBackDrop.on('touchmove', function (e) {
		e.preventDefault();
	})

	function area () {
		if (flagBtn) { // クローズ
			menuBtn.attr('aria-expanded', 'false');
			gnav.attr('aria-hidden', 'true');
			flagBtn = false;
		} else { // オープン
			menuBtn.attr('aria-expanded', 'true');
			gnav.attr('aria-hidden', 'false');
			flagBtn = true;
		}
	}

});
