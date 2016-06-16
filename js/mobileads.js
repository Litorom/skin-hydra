(function(mw, $) {
	mw.loader.using('skins.minerva.toggling').then(function() {
		if (window.mobileatflb && window.mobileatflb.length) {
			var atfLbUnit = $('<div id="mobileatflb">').append(window.mobileatflb);
			$("#content").prepend(atfLbUnit);
		}

		var headings = $("#bodyContent").find("> h1, > h2, > h3, > h4, > h5, > h6");
		if (window.mobileatfmrec && window.mobileatfmrec.length) {
			var adUnit = $('<div>').addClass('mobileatfmrec').append(window.mobileatfmrec);
			if ($(headings).length > 1) {
				$(headings[1]).before(adUnit);
			} else if ($(headings).length > 0) {
				$("#bodyContent").prepend(adUnit);
			}
		}
		if (window.mobilebtfmrec && window.mobilebtfmrec.length) {
			if ($(headings).length > 5) {
				var btfMrecUnit = $('<div>').addClass('mobilebtfmrec').append(window.mobilebtfmrec);
				$(headings[4]).before(btfMrecUnit);
			}
		}
		$('body').append($("<div>").attr("id", "cdm-zone-end"));
	});
}(mediaWiki, jQuery));