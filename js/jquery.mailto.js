jQuery.fn.mailto=function(qui,chez) {
	qui='micetf';
	chez='free';
	ext='fr';
	$(this).attr("href",'mailto:'+qui+'@'+chez+'.'+ext);
	$(this).attr("title",'Pour contacter le webmaster...');
	return this;
};	