var newelementIdAttrIndex = 0;
var linksIndex = 0;
var langIndex = getCookie('lang') || 0;
var lang = library.language.select[langIndex].param;
window.onbeforeunload = function(e) {
	return library.language.onExitConfirm[lang];
};

var links = [];
var alternateIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAEdUlEQVR42u2d63XbMAxGNYJH0AgawSN4BI2gEbSBRvEI2SByF7CyQUZoJZtu6yS29SBIkLg8B//auM13DQIgCBZFZmsY+nK0/WjtaN35/P422TCcPj8+fv2eY9Of/ff3+s79rOlnlgVLneAXsZeKvNZucNygQIE43/BmEkFa7LnmgGjwEMKij9ZrEf2xh+h7YPAn/GG0o3bRn8BwnP4PKLlM9N3VxZ+GVIX/vkWcBucVdij8XPg2RCAXzyOcPl3wCAiWhAeEJ3t8Tq5+5dZwsCh8qSmNU5JGllbEbxH9YdbQ5p7L9wg9q45Q5iZ+bSnI8xQk1rmI3yHqam/QpZ7e4fL9bAm71MSvLKd3QulilYz47PdicUGF+EBQqY30ESlYXFCr++YjTHAIKtw+20GF+EBQxRJ/R6qnJkXcxQCAIo+iYhHlXSDoSPeAoJYWvyToUx8Uluz7xAN08tBZ5Nn184tNDgJ/W8GWBs7zGVtiPhtNvbVub/uHYDEAcF7gEL3ah6jxANhcJfQR+CFqPAA2BYTXnr7tOT+ixgbgUhvYRUv7EDUuAKu8gK9vPwBoAWChF5jusvsLRLDYADgv0CzI+/2d8yOqDgAmTYPk/QCgE4DZdQHfM3kQVRUAx+A1f0TVA8DLMwKfwR8AqAWgCXrej6jqAOiDHvkiqi4AHm4DEu4fANQC0Hg98weAtAD4sVdA7sMwbQBM9tX97wHAFgB3o+4lGz4RVS0Arfj+DwB6AbiLAyQveyCqVg9w+gzS8o2oOgH4Ww+QDAABQD0Ae/EbP4iqGoBW/Ko3oqoGoCukx7Yjql4ALpkAABgHQPq+P6Jq3gLGVFCeMkwrAJczAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAgClYOOlYA6DOA0EANungTSEmG4IoSWMljCaQo03hdIWbrktnIshxi+GcDWMq2FcDrV+OZTr4cavhzMgwviACEbEMCKGIVHWh0QxJs74mDgGRRofFMmoWEbFMiza+rBoxsUbHxfPgxE8GMGTMdafjOHRKB6N4tm4zABY9XgkD0fmBMCK52N5OjYPAFY/Hcvj0bkAsPLxaJ6PTx+Azc/H+6gLIGo8AGbn/a/rAut7BRA1DgA/nvlv8AIlAKQFwMuaf6iAEFHDA7Ap8HsBQQ8AugF4et7vYyuQnieAbc75y0JyjR9Q88vWCkBfFyGW9JVybOVV75BLon8QU7jvS1YJMSXVvg0QVASF0YO+qoi5gMCw+P9DgCjB930d4pMeZpzusR3g9oEA8ddBQIroPdVLQ/z7nkKKRT6KPNHyfMrGxsq7khkCccHi/b4uclrXo2S2hJkuvyxyXdKziRMXvy0srIlw6TH1aUX5729Zf+uftZxbThddencoLC+XLraWgkQX5LVJp3eAgPCSIDQ5bQ3O1TcIvyJG8D2zKHBUfzS/x3usITQp1BFcHt+YjOpDwqApjXRpHKJHAmI/BVZXEeQDyOkznODtt5HrLDUeYu8E6iaxlsJxE9kJ3d3EzvEb/gcQqXVwGWRowwAAAABJRU5ErkJggg==';

generateOpenForm();

function generateOpenForm() {
	
	$('body').append('<div id="open"></div>');
	
	generateSelectLenguage({
		'selector': '#open',
		'callback': function() {
			$('#open').remove();
			generateOpenForm();
		}
	});
	
	$('#open').append('</br><div id="intro"></div>');
	$('#open #intro').append('<img width="128" height="128" title="" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAADBVJREFUeNrsXU9sHFcdfju1HTt27E2dkBorZROj0qZqZAdVCEiJLdreqthIBYkDcS706FhIIHHBEScQyMmlSFzicKJFqjcqPUBB3kBp1RbqpVX/JJLjBSukgQSvE4hjxw3MN35vM9nMenfm/R+/TxptFO++nXnf937/3m9mMyRl+O4fpnP+C45B/+jyj376J7xmGxym7B9F+m+8LvlHwT9KP/7KSClN85VJAeGDlOxDMUlOCiaOsxCFL4iCE4D6FT7sH4cp8SYAIjjjH3nbLETGMtKPhEy6qYB1OG2LGDKGE89IH7bUwuYhBl8IeSeAxkmHDx/1jzEazKUBsAQn/WPKF0PZCaA28cco8VmSTpSpEE6YIoSMI35zCyGjmXz49skUmfokrmFcZ4yQ0UQ8CD9lUBpnQhp5VEfW4Gkgf8J/mXfk3wXMxTydm3RaALrqpy3I402oI4yosgaeIvKR1s068hsC5miWzpn9FsC/kEka5TvEB7KEcSsFQNO7GbfqhbiEIVnpoieJ/H5n8oW7hH4rLAA9Uaz8rONOKMrUEhSNFYAj3z4ReALJZ5G+I18esqIzhIzAlT/r+FGKARGWwBNE/ozjQzlmRASGGUHkO7NvaUyQ4SA/S81+zvGgFSXqDhLVCXhcwIwj3wjkeFywl3D1TxJX5DEJ/ZQT+S6ApiCn3JwbCfQUTEkTAN3Sdbm+2UHhQJyt5LguYNqRbzSylCPxFoB2q/zAthnZ27WD9GV3kJ72LrK9dSv5dHvXhu//x3+XyOLNG+SS/zpXvkIuLF2xUQjHfSswIUwA1PTP23DlbU3NZF93D3mUHiLw/tVLwfGBfyyv3bJFBHsacQVNDQ5mfNCHlX2wt498fteDwscOi+kvl/9O/uwfFlgGcDbEbQFo6/a0ycQ/0/dYYOpVAgJ49W8fmS6EkXot55k65Btb7YOpf2bvY1JWfBzAIrx84T1TXUOJ1KkS1nMBx0wkH+b42YcOBCLQDQgQMcevzr8TxAmGIUc5nIhtAejqnzct7cOqh683EbAGL/pCMLA2sKeWFfDqrH5jyMdqHzswZCz5zBrgHE2wTFW1gWOxLIBpqx8T+u39B+vm8KYAtYSfv/uaSXFBTStQywKMOvL5MpPvPf50UHgyyAqMxnEBY458/nP/1r4vmOQOxhoSAM37jYj8MYE2kh+2BBCwKRkB5bauBThiSrSvurgjSwRf91NWQ3BkQwGEnsalPc83OdpPkh2I2pfgxDDluKYF0E4+fOaz5qwYYTClcFXNsWea+X/ywYdNy6OFCRtuzTQ34FWZf619fkib0mT6o1yBAXFNf9gNeCaZ/6f81Z92PPUZI65xOEoAh3Wvft07eyoAC2BAans4SgCDbvWrgQFubvAuAdBHrmsNkPYpTJNurK6Ql//6Fvnpb18KDvwb/6cyFtAd6DLOm0xY/SBf1YSAaJC+8O87nTznPr5Iigtz5DtPf41sbdmi7JqxfazZChSYCzik80xUFkmqyWfA/+FvabzmGjgUjgH6N4MApv70u0jywyLAezaJAALOm2hOqHTrl/n8Pj8i7ulQExG/PvdhcAAZzyOtXdtIU+u6uV+7uUJuLl0n/7t9O3jPQw/0ki/1PaIkI9DYVJoF94gBcipTIETAqtWPlf3i23+skL+t51PkvpY7MQeE0Ly1jVy/9M9ABHjv7u07ye775RZtcMOK5q7inKciAATxz+0/GByqyUfQ93zhlUqUX00+A/4Pf4v6jCz06K8HDEIAUs8C9W8Qr6sE+jOfyKv/uRb8u33n/ZHkh0WA9wD4DD4rEwZ0DHV5sgJAE5o4kd8jxQNaOtqDox7C78NnMYYsGFAR7PdkXdjYwJDWCywuXPDJe7Oysrd2Nx7n4r3MUmAMjJVWCLcArBdOp3kLp3MI+jp27QheG0X1Z+qljxYjsABCU0D0wOkkH4Hb1OuvVgI4EOk1NcVfGf5n8NmoMVOEbJPI0RDw6fZrSOHYam3b3lXJ9ZMAn8UYy4tLlVRy9MtPCj3fHz1xZxceKSGO969cCu4tUAFhAmA5vk78/sNipdiDvL4128k9JsZYW1klt24sB2OjNvDVR+QUTjGHONAVBQG8dnFO+n6BsCBQd6PD+csXyQu02BNO50QgnD7iO/BdssG6iZ+T7FI9kcrV6fefn3mlEsC17+yOFfQ1EhSGx8R3qYoHMK/IqGQV0ITMkm7Tj108Rkg4hROJcCrJtpRVgWVWMjqmuAUA86RzZ+uFUNC3pXNbQ8WepMDY+A6WajKXowpwCaLnmlsAOk0/gjIEfixij1PsSQp8B8sswkGnKuD+ApExAbcA+jQJoHqHj+XsKhAuEoXTTlXuQOStZtwCULWff0/QV7XDJzLoayQoVL1zWG11RcUDmDWunyPTUfhBaZbt8MkK+uIEhTgXVZ1EggPvMgRQJBYBPpdtzoSDMh0IB504J5XxABaegMVX5LKbOlqb36CTHHeHT2ZQyCzQG4oDwkd38GcE1lmAtuYtiXb4ZMYD7FxwbiohIAMrYi8g8a6DjocgYTMm/9E75Dr5xJindH62+wGyrbuXDD98wDYBLEEABWLRU8Bx48Y393+x7vsgjl988Ca3SFkVLg1PK4lAcGNIiTcfNxEgDMTxIsXkAyWPPlI8cSq4sPgvY69OBHEpJr8M7lkUlTgQPP/xReJgJYosCwDOJh3l3GUnAEtxNiyAQmI7srqc6q5Zk8HZmFKoCMD3BYkFcF9LS2VHzkEtznG4X8a5V62IuGhu2xKcyHnnCtQ78YU5rtVfLYAzSUZie+PsJgwHNUD6zZGCn4kSQD7JSOifRwcurIBzBeqAueZoec/fIwBaD0jEIO61X7cCb6X1Dhrjgj/sPDa3tSbyHOGfk6veTTmd1A3gYM2SKbyDxhhgbk/R3gNY3gS4i2OvlmmIC9xBw07QiUAeWDMMtqATNsLkawqAmoZ8UisQ7pj9/kunnTuQQD6ruTC3G5f86l8T9eqZiHhWoLOiSmYJXGAoxuzjZhTWcYTFlrD9/R5uvYgCASxAKcnorFmSNWrgxNE7DyHoqBOwvkHdY/AGfD/89S8rK3/9LqVEt72Von5FtFZLzcmkJ1wtAgAp4k9+s/5UTpVlYxE3bqi++SOc58PkY97CIgT5SW53r8WptJ+Nw9O28NStT1bvbcjo7ugkn9vVGzyOTcbTuDBhIA5i275nN9dYi/MLpH/3XvKNx58Izlv2amdPLY2Kn0B+QtNf82fjNvrl0AnC2SkEESwvXiMr165rM6EiBKAbzOwnTPuA4z75E1F/2Kir8gThvGcAJ46uWbgEngc1JEVCUyl8DB5g3jp7d/GQX6ZcklgCoObipKiLgAhwcFxIbIhoG9fVes6ecYA54xThSZ5fD4dy8BszOVFC6PCP22trweNZby2v+DHCamScwLtqQZwIsWEMtH3fuFoOzlv2akd5F98p6G6n0karf8MYIBQL4CE20y4btxIjUalfLAFQEcwQzb8p4BAbBZ/8obrWssHBjrr5tA4NcdaQAGj9+LibU2twvLrmz+UCQq5glmj+cQmHusB+/0DDAXPcoIK3NuAgFWXKEZEiAGpWxt08G4vxRk1/UgsAEUzVyy0dtOAE5SYWMkm/zcUD9vp9LgsQAnLMkpt77ShRLohSAdD6sgsKDQj6Nqr1S3MBIVcAN4BKYdbxoZz8IZ98rp67jIgzoSKYdZwoxQAv+bwxQNgd4ERcuVgdjoogX5gFcO7ALrMvTQBOBHaRL8wFRLgDlyJKSPVEky/FAoQsQZZaAlcs4kORki8l3c7IPntfCJP+yzHHYyKgvCt17yWj4ip8EYz6L5MuLojl78eT1PaNFAAVQY6s9xY6l1Df5I/E3dUzXgAhIUwQix5Nqxg1b+BIjQBC1uAUcY2mDAWyXtxRnjlldF41bTlHbJDbxOndeL3W7dQKIJQuIksY20RBIrvr6oSs9M4aAWwyIRhDvHECqBLCKBVCWlxDiRI/ZQrxxgogIkbAvYnDlhIP335ap4+3WgBVWQMTg+l1BOTxeBZPXkdUn0oB1BDDYYPSSKRxZ2wh3WoBRAhikArhELUOsgPIMl3leN5+gedJ604A8ixEjoqiK+Qy4oiDkcxM+hJd5SXbVng9/F+AAQAtPpzZGLcO0QAAAABJRU5ErkJggg==" />');
	$('#open #intro').append('<h2>' + library.language.openIntroTitle[lang] + '</h2><p>' + library.language.openIntro[lang] + '</p>');
	$('#open').append('<div id="options"></div>');
		
	generateOpenOptionCode();
	generateOpenOptionUrl();
	generateOpenOptionTemplate();
	generateOpenOptionFile();
		
}
function generateOpenOptionCode() {
	
	$('#open #options').append('<div id="openCode" class="option" tabindex="1"></div>');
	$('#open #options #openCode').append(library.language.openCode[lang] + '<div class="more"><textarea></textarea><button id="openButton">' + library.language.open[lang] + '</button><div>');
	 
	$('#open #openCode #openButton').click(function() {
		
		openCode( $('#open #openCode textarea').val() );
		$('#open').remove();
		
	});
	
}
function generateOpenOptionUrl() {
	
	$('#open #options').append('<div id="openUrl" class="option" tabindex="1"></div>');
	$('#open #options #openUrl').append(library.language.openUrl[lang] + '<div class="more"><input type="text" /><button id="openButton">' + library.language.open[lang] + '</button></div>');
	$('#open #openUrl #openButton').click(function() {
		
		$.get( $('#open #openUrl input').val(), function( data ) {
			openCode( data );
		});
		$('#open').remove();
		
	});
	
}
function generateOpenOptionTemplate() {
	
	$('#open #options').append('<div id="openTemplate" class="option" tabindex="1"></div>');
	$('#open #options #openTemplate').append(library.language.openTemplate[lang]);
	$('#open #openTemplate').append('<ul class="more"></ul>');
	
	for(i = 0; i < library.template.length; i++ ) {
		
		$('#open #openTemplate .more').append('<li id="' + i + '"><div class="thumbnail"><img src="' + library.template[i].thumbnail + '" /></div>' + getTranslate([ 'template', i, 'language' ]) + '</li>');
		
	}
	
	$('#open #openTemplate .more > li').click(function() {
		
		var templateIndex = $(this).attr('id');
		$.get( library.template[templateIndex].url, function( data ) {
			openCode( data );
		});
		$('#open').remove();

	});
	
}
function generateOpenOptionFile() {
	
	$('#open #options').append('<label for="fileInput" id="openFile" class="option"></label>');
	$('#open #options #openFile').append(library.language.openFile[lang] + '<input id="fileInput" type="file" />');
	document.getElementById('fileInput').addEventListener('change', readFile, false);
	function readFile (evt) {
		var files = evt.target.files;
		var file = files[0];
		var reader = new FileReader();
		reader.onload = function() {
			openCode( this.result );
		};
		reader.readAsText(file);
		$('#open').remove();
	}
	
}
function openCode( framecode ) {

	framecode = framecode.split('<script ').join('<stripscript ');
	framecode = framecode.split('</script>').join('</stripscript>');
	
	//$('iframe#page').attr( 'src', 'data:text/html;charset=utf-8,' + framecode ); // Нельзя использовать Data
	$('iframe#page').attr( 'srcdoc', framecode );
	
	//$('iframe#page').attr( 'srcdoc', '<!DOCTYPE html><html></html>' );

	$('iframe#page').load(function(){
		
		//$('iframe#page').contents().find('html').html( framecode ).load(function(){alert(1);}); //Не работает 
		moveScriptsToHead();
		addEditorStyle();
		
		$('#labels').on('click', 'li', function(event){
			event.stopPropagation();
			generatePopupElementEdit( $(this) );
		});
		$($('iframe#page').contents()).on('click', '.element, .block, .area', function(event){
			event.stopPropagation();
			generatePopupElementEdit( $(this) );
		});
		
		editorinit();
		
		
	});
	
}

function moveScriptsToHead() {
	
	var head = $('iframe#page').contents().find('head');
	var stop = false;
	
	$('iframe#page').contents().find('body > *').each(function( index ) {
		
		if( ($(this).is('stripscript') || $(this).is('link')) && !stop ) head.append($(this));
		else stop = true;
		
	});
	
}
function addEditorStyle() {
	
	$('iframe#page').contents().find('head').append('<style id="editorStyle">\
		*[checked] {\
			border: 1px solid rgb(161, 60, 60) !important;\
			outline: 0;\
			box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 82, 82, 0.9);\
			transition: All 0.3s ease;\
		}\
		*[over] {\
			border-color: rgb(161, 60, 60) !important;\
			border-width: 1px;\
			border-style: solid;\
		}\
		stripscript {\
			display: none;\
		}\
	</style>');
	
}
function removeEditorStyle() {
	
	$('iframe#page').contents().find('#editorStyle').remove();
	
}

function overElements() {
	
	$('iframe#page').contents().find('.element, .block, .area')
	.mouseover(function(event) {
		event.stopPropagation();
		markOverElements( $(this), links[$(this)[0].link].label );
	})
	.mouseout(function() {
		clearOverElements();
	});
	$('#labels .element, #labels .block, #labels .area')
	.mouseover(function(event) {
		event.stopPropagation();
		markOverElements( links[$(this)[0].link].element, $(this) );
	})
	.mouseout(function() {
		clearOverElements();
	});
	
}
function clearOverElements() {
	
	$('iframe#page').contents().find('.element, .block, .area').removeAttr('over');
	$('#labels li').removeAttr('over');
	
}
function markOverElements(element, label) {
	
	clearOverElements();
	element.attr( "over", "over" );
	label.attr( "over", "over" );
	
}

function clearCheckedElements() {

	for(i=0; i < links.length; i++) {
		links[i].element.removeAttr('checked');
		links[i].label.removeAttr('checked');
	}
	
}
function markCheckedElements(obj) {
	
	var linkIndex = obj[0].link;
	var dictionary = obj[0].dictionary;
	var element = links[linkIndex].element;
	var label = links[linkIndex].label;
	
	clearCheckedElements();
	element.attr( "checked", "checked" );
	label.attr( "checked", "checked" );
	
	$("#labels").animate({scrollTop: label.offset().top - 100}, 300);
	$('iframe').contents().find("body").animate({scrollTop: element.offset().top - 20}, 300);
	
}

function editorinit() {
	
	$('#loading').show();
	
	generateMenuMain();
	generateMenuLabels();
	
	$('#loading').hide();
}

function sortingElementEnable() {
	
	$('#elements .area > ul, #elements > ul').sortable({
		connectWith: ".connectedSortable",
		stop: function(event, ui) {
			thisArea = ui.item.parent();

			var areaLinkIndex = thisArea.parent()[0].link;
			var areaDictionary = thisArea.parent()[0].dictionary;
			thisArea.find('> li').each(function(index) {

				cutElement = links[$(this)[0].link].element.detach();
				cutElement.appendTo(links[areaLinkIndex].element);

			});

		},
		placeholder: "portlet-placeholder"
	}).disableSelection();

}

function generateMenuLabels() {
	
	$("#resurces").html( '<p>' + library.language.resurcesPart[lang] + '</p>' );
	$("#elements").html( '<p>' + library.language.elementsPart[lang] + '</p>' );
	
	linksIndex = 0;
	links.length = 0;
	
	linkLabelToElement( $("#resurces"), $('iframe#page').contents().find('head'), 'resurce', -1);
	linkLabelToElement( $("#elements"), $('iframe#page').contents().find('body'), 'element', -1);
	
	generateLabelsList( '#resurces' );
	generateLabelsList( '#elements' );
	
	overElements();	
	sortingElementEnable();
	
}
function generateMenuMain() {
	
	$('#menu').html('<ul></ul>');
	
	generateMenuMainButtonSave();
	generateMenuMainButtonPreview();
	generateMenuMainButtonSettings();
	
}

function showEditorPopupWindow() {
	$("#editorpopup").show("slow");
	$("#editorpopup").animate({scrollTop: 0}, 200);
	$("#blackback").show("slow");
	$("#editorpopup").html('');
}

function moveElementsScripts() {
	
	$('iframe#page').contents().find('stripscript').each(function( index ) { console($(this));
			
		$('iframe#page').contents().find('body').append($(this));
			
	});
		
}

function generateMenuMainButtonSave() {
	
	$('#menu > ul').append('<li id="save">' + library.language.menuSave[lang] + '</li>');
	$('#menu #save').click(function() {
		
		removeEditorStyle();
		moveElementsScripts();
		HTML({
			'code': '<!DOCTYPE html><html>' + $('iframe#page').contents().find('html').html() + '</html>',
			'callback': function(code) {
				
				showEditorPopupWindow();
				generateButtonCloce();
				
				$('#editorpopup').append('<div id="intro"></div>');
				$('#editorpopup #intro').append('<img width="128" height="128" title="" alt="" src="data:image/png;base64,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" />');
				$('#editorpopup #intro').append('<h2>' + library.language.saveIntroTitle[lang] + '</h2><p>' + library.language.saveIntro[lang] + '</p>');
				$('#editorpopup').append('<div id="options"></div>');

				$("#editorpopup #options").append("<div id='download' class='option' tabindex='1'><a href='#' download='index.html'>" + library.language.menuSaveDownload[lang] + "</a></div>");
				$('#download > a').attr('href', 'data:text/html;charset=utf-8,' + code);
				
				$("#editorpopup #options").append("<div id='getcode' class='option' tabindex='1'>" + library.language.menuSaveGetCode[lang] + "</div>");
				$("#editorpopup #options #getcode").append("<div class='more'><textarea></textarea></div>");
				$('#getcode textarea').val(code);
				
			}
		});
		addEditorStyle();
		
	});
	
}
function generateMenuMainButtonPreview() {
	
	$('#menu > ul').append('<li id="preview">' + library.language.menuPreview[lang] + '</li>');
	$('#menu #preview').click(function() {
		
		removeEditorStyle();
		moveElementsScripts();
		cleanHTML({
			'code': '<!DOCTYPE html><html>' + $('iframe#page').contents().find('html').html() + '</html>',
			'callback': function(code) {

				window.open('data:text/html;charset=utf-8,' + code,'_blank');
				
			}
		});
		addEditorStyle();
		
	});
	
}
function generateMenuMainButtonSettings() {
	
	$('#menu > ul').append('<li id="settings">' + library.language.menuSettings[lang] + '</li>');
	$('#menu #settings').click(function() {
		
		generatePopupSettings();
		
	});
	
}
function generatePopupSettings() {
	
	showEditorPopupWindow();

	generateButtonCloce();
		
	$('#editorpopup').append('<div id="intro"></div>');
	$('#editorpopup #intro').append('<img width="128" height="128" title="" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACddJREFUeNrsXUtwFEUY/mey2WyyibsYBIOlLlii5asSxZIq1ARLvVkkBy1PEg56TXKQgweF8qRVVsLFiweCZZXiwQTRCz6ygFC+sz4jlMAqhVUg6AYCBojR/oee1CTsZmd2enqme/6vqmvDTjcz09/X/6Onp9cAzbB530iOfWDpYiXDSjs/hJ9Zl/9NiZUC/xs/J1nJs1J89eGeok79ZWhAeBcnu9MjybXCFsdeFAUTRJ4EIH+Ed7OygRMfBaAIdrEyqpqFMBQjfaPDpEcVaB12qCIGI+LE26R3K2phR1EMTAijJAD3pKMP72WljwdzOgAtwTZWhpkYSiSAysT3c+KzoCdKXAhDURGCQcTHWwhGyOSjbx/UyNTX4hoGwowRjJCIR8K3RyiNi0IauSmMrMEMgfwt7OMYkT8P2BfHeN/oaQH4qB9RII+PwjxCjyxrYEoiH9O6cSLfFbCPxnmfqW8B2I0M8iif4B2YJQwoKQCe3o3RqBfiEtYHlS6aAZHfTiZfuEtoV8IC8AvFkZ8l7oSixC1BIbICIPLVE4EpkHw70ifyg0NWdIZgCBz548SPVHSIsASmIPLHiA/pGBMRGBqCyCezr2hMYPggP8vNfo54CBVF7g5qmifw4wLGiPxIIOfHBZs1jv5BoEmeKKGdcxK8C+ApyHbq80gC1xQMByYA/kiXcv1oB4UdXh4le3UBI0R+pJHlHImPAfhqFfL7asQDW4S6AG76j1HfKoWVblyBWwtAQZ96cMWZ6WL049LtLupP5dDFuavdBcia7ZsqnoFTnx+Dy+emrX/Xt6Rg2dqV0JxrpfP5QxGqzBJWswD9Msg/8dHEXOcg8G/8Do/R+XwhB1XWY5pVRn9f0FeII6OWY3Q+1+jjXHq2AP0ycn7nyPByjM7naW6g35MAZI1+gjRUtAKVLEAv0IyfTrD3XHAtABr9GloBVwLguWOO+ks75MrNC5SzABupr7TFxkUF4NiNi6AnujnHc0gsrKB7Dzzy0P2srIG7br9l3vc//nIEPt3/NZyIgQhYGaokAG3N/5JUEzxzxwOw4qFM2eMoCCx/nJ+EN3/+Av6evqCzGxi6ygVw09CuK/l9HethRTpTtS7WwbrYRlO0O92AGQfzjyO/MVHvuj7WxTaau4GrBLBBxzu9b/lNrkZ+OUuAbTXFhnIC6NLxTtf4IHGNvgLomicAvuW6lliVWRpK26jD5tzUefQTqlsBWwCd1B+xQ6dTALTcO36wODd5Tqjto9/DJ0+E0lYBZJF7tAA5ne/y4K8TobRVBJYAtA4ADx6ZgON/nfbcDttgW90DQRRARve7fD3/IVy4dNF1fayLbWKAjKl7AJhINcCZqbPw8gfvuLIEWAfrYhtsq3sgmND9Dhta0jAzfZGL4G1YPZmGxx9ZB/fcedu8et//dAj2fHoADmfOz2urOxK6W4BkcxqmJ8/Bv5cuW//+aOyAVSrh5u4r3VGXrLfa6m4BTIjB6t/m5UvBMN1vhYB1sU0MkDXjcJdmIgHX3LDcGtXVgHWwLraJA+Jxl3MiuB6SKRYTXL4Is//OzD9el4BEfYNVJ05IQMxQl0hahcCFT10QbySoC4IDLi17uudxayXysqVL5r4/f+Ef+HHiCOzesx8ukwD0xJ2tbfDk6nvLrkVMNzXCA/fdZZVvTv4Ou4/+AP/MhCMFcgEBANcSul2IinWfu+dBigF0AS4nf2LV3Z7a4AJUr21IABHFYzfd7mkJuo0Hb7gllHcRUAAlok1c0OdnKTnGDZJRQgEUiDoxaEv7e7IeggAK5AIEYkWzeksryALEG5YFmKR+EIM/ppTrykkUQJ6oE4Pjf5/2Nxx/Pyr7kvMogCJRJwZTU+d8LSQtHJcugGICtxTfvG8EU8FQFobotmPH7u++hPYbV0FT0tt6wk8mCnB66iy0tKSkpYDIvf0sAAPBLpkdpeOOHXXJJJw5cwre/Wo/9K571L3r+Os07GRtJC9CLdhZAGKvbPJ13LHDXnGEbuD1MXdL0bHua3ves/5OphtlXu5epwCkBoK67tiBawnthaToz194bwe8tfN9OHlqfnA4df4CHPxyHJ5/8VUYPvDxnFDqm6QKwOJ87vcCWBzwn4yz4lTpU6vvrantu4e/tR6f+sGhNz5b9Phtz/p7Mjc7MwNnT5yE/2ZnrX//Nrr4NIu9CrnhmhZoapUXhjH/bzgtgDQroPuOHbj20CuR6Dpkku/k2imAXTLOHIcdO9ANuF2KjnVb2pbJvsRd5QQwSpm8OKA/z9zYBvXJxquEYBgG1LG4pqGxBdLXXevpnQVBGL1KAPwnxui5gOCgMJFMQaopA43NS+ZKKp2FZKrZWooeAgrOn5NbKL0dRJv2mMexWck0BAXasSN0jFYUADcNgYqAduwIl/yFvyZqVjMRwgVAO3ZExvyXFQBTCFqAYpBXQTt2hIIi5xaqWQDEtqCugnbsCA1lOa2Uhwyz8hIE8IiYduwIBSXOqTsB4G/Nbt43so2LQChox45wRn+l3w9ebApqCAJ6Z4B27JA++ocqHazIAldMILEA7dgRjdFfzQLYVqAYnAiu7NhRbkoUv8NjWIfIrz3yX2z0VxUAV85AkFeIu3XgQxHnXDkW/I528vCNgcVGvxsLYM8L5KkvlUO+XN7vWQAcm6g/lYMrzlwJgM8fb6U+VQZbF875+7UAKIItQOsFVECBcwVCBcDRI3puoH6RFyHqA3hJQvPzlThHEIgAuFkRmhUsW7uypmN0vopRv6e0vc7rGQ5s31lYt+lpfEawVsQVJ7NNkGpNw/SfUzB7aWZuZLR13grNuVbhhGh8viFG/iteGxm1nm3zvpFxoB+bipLf76iloZ/lqOuB3iyOAoqcC5AqAD7DJDwoJHgP+qrN9gXiAhyuAN3AGMTgdwciSP56Rr6v1NwQcSVcBOPEiVR0+CXfbwzgdAd4ITRdLA+bRJAvzAKQO1DL7AcmABKBWuQLcwFl3AGliAGkeqLJD8QCOCxBllsCmizyhwInP5B02wj66pkQBtlHP/FYE3B6N9AVWYaMu2Ai6GUfgxQXePL3+GBnOOgTGbLuCH+rnn2MkEtwZfJ7vD7Vi7wAHELYAgG8cKIJtnpZzKGkABzWYDtI3pwywsjDlckd6ZmTEeZdMyF089ggF+P0bsDN6l0tBeBIFzFL6ItRkGi/dTUUVHqnjABiJoTIEB85ASwQQi8Xgi6uociJH44K8ZEVQJkYYSMr3YoSj759R5g+XmkBLMgabDFEfR4B83jci2c0jKheSwFUEMOGCKWRmMbtUoV0pQVQRhBdXAid3DoEHUCW+CjH/fbxBcy8yv2nvAAqWIgcF0XG4TK8iMMm2Tbpk3yUF1Ub4dXwvwADAEu9s+hGEymZAAAAAElFTkSuQmCC" />');
	$('#editorpopup #intro').append('<h2>' + library.language.settingsIntroTitle[lang] + '</h2><p>' + library.language.settingsIntro[lang] + '</p>');
	$('#editorpopup').append('<div id="options"></div>');
		
	$('#editorpopup #options').append('<div id="language" class="option">' + library.language.menuSettingsLanguage[lang] + '</div>');
	generateSelectLenguage({
		'selector': '#editorpopup #language',
		'callback': function() {
			generatePopupSettings();
		}
	});
	
}
function generateSelectLenguage(param) {
	
	var selector = param.selector;
	$(selector).append('<select class="lang"></select>');
	var langIndex = getCookie('lang') || 0;
	
	$('select.lang').css('background-image', 'url(' + library.language.select[langIndex].icon + ')');
	
	for(i = 0; i < library.language.select.length; i++ ) {
			
		selected = (langIndex == i) ? ' selected' : '';
		$(selector + ' > select.lang').append('<option value="' + i + '"' + selected + '>' + library.language.select[i].name + '</option>');
			
	}
	$(selector + ' > select.lang').change(function () {
		
		langIndex = $(this).find('option:selected').val();
		var date = new Date( new Date().getTime() + 364*24*60*60*1000 );
		document.cookie="lang=" + langIndex + "; path=/; expires="+date.toUTCString();
		lang = library.language.select[langIndex].param;
		editorinit();
		param.callback();
		
	});
	
}
function getCookie(name) {
	var matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

function linkLabelToElement( label, element, dictionary, elementTypeIndex) {
	
	label[0].link = linksIndex;
	label[0].dictionary = dictionary;

	element[0].link = linksIndex;
	element[0].dictionary = dictionary;
	
	links[linksIndex] = { 
		'element': element,
		'label': label,
		'typeIndex': elementTypeIndex,
		'dictionary': dictionary
	};
	linksIndex++;
	
}

function generateLabelsList( label ) {
	
	var labelObj = $(label);
	var linkIndex = labelObj[0].link;
	var parentElement = links[linkIndex].element;
	var dictionary = links[linkIndex].dictionary;
	
	$(label).append("<ul class='connectedSortable'></ul>" );

	var globalSelector = "";
	for(i = 0; i < library[dictionary].length; i++ ) {
		fullselector = " > " + library[dictionary][i].selector;
		globalSelector += globalSelector ? ", " + fullselector : fullselector;
	}
	
	parentElement.find( globalSelector ).each(function( index ) {
		
		var element = $(this);
		var elementTypeIndex = getElementTypeIndex( $(this), dictionary );
		var elementIdAttr = $(this).attr('id') || '';
		
		labelTitle = getFromLibrary( [dictionary, elementTypeIndex, 'title'] ) ? library[dictionary][elementTypeIndex].title( $(this) ) : elementIdAttr;
		labelTitle = labelTitle ? " (" + labelTitle + ")" : "";

		var elementTypeName = " " + library[dictionary][elementTypeIndex].name;
		if(dictionary == 'element' && library[dictionary][elementTypeIndex].properties) elementTypeName += " element";
		if(dictionary == 'element' && library[dictionary][elementTypeIndex].area) elementTypeName += " block";
		
		$(label + ' > ul').append("<li id='" + elementIdAttr + "' title='" + elementIdAttr + "' class='" + index + elementTypeName +"'>" + library[dictionary][elementTypeIndex].language[lang] + labelTitle + "</li>" );
				
		if(library[dictionary][elementTypeIndex].area) {
			$(label + ' > ul > .' + index ).append("<ul></ul>" );
			for(j = 0; j < library[dictionary][elementTypeIndex].area.length; j++ ) {
				
				elementIdAttrSelector = elementIdAttr ? "#" + elementIdAttr : "";
				
				if(library[dictionary][elementTypeIndex].area[j].selector) {
					areaSelector = library[dictionary][elementTypeIndex].area[j].name;
					childLabel = label + ' > ul > .' + index + ' > ul > ' + library[dictionary][elementTypeIndex].area[j].selector;
					areaElement = element.find( library[dictionary][elementTypeIndex].area[j].selector );
				}
				else {
					areaSelector = "area";
					childLabel = label + ' > ul > .' + index + ' > ul > .area';
					areaElement = element;
				}
				
				$(label + ' > ul > .' + index + ' > ul').append("<li class='" + areaSelector + "'>" + library[dictionary][elementTypeIndex].area[j].language[lang] + "</li>" );
				
				linkLabelToElement( $(childLabel), areaElement, dictionary, elementTypeIndex);
				
				generateLabelsList( childLabel );
				
			}
		}
		
		linkLabelToElement( $(label + ' > ul > li').last(), element, dictionary, elementTypeIndex);
		
	});
	
}

function getElementTypeIndex( element, dictionary ) {
	
	for(i = 0; i < library[dictionary].length; i++ ) {
		if( element.is( library[dictionary][i].selector ) ) {
			return i;
		}
	}
	return false;
}
function getElementFromlibrary( elementName, dictionary ) {
	
	for(i = 0; i < library[dictionary].length; i++ ) {
		if( library[dictionary][i].name == elementName ) {
			return library[dictionary][i];
		}
	}
	return false;
}
function generateElementIdAttr() {
	
	while( $('iframe#page').contents().find( '#element' + newelementIdAttrIndex )[0] ) {
		newelementIdAttrIndex++;
	}
	return "element" + newelementIdAttrIndex;
}

function generatePopupElementEdit( obj ) {
	
	var linkIndex = obj[0].link;
	var dictionary = obj[0].dictionary;
	var element = links[linkIndex].element;
	var label = links[linkIndex].label;	
	var elementTypeIndex = links[linkIndex].typeIndex;
	var elementIdAttr = element.attr('id') || '';
	
	markCheckedElements( obj );
	
	showEditorPopupWindow();
	
	if( element.is('.element') || label.is('.block') ) $("#editorpopup").append("ID: <input id=\"" + elementIdAttr + "\" class=\"editId\" value=\"" + elementIdAttr + "\" onBlur='this.value=this.value.replace(/[^A-Za-z0-9]/ig,\"\");' onkeyup='this.value=this.value.replace(/[^A-Za-z0-9]/ig,\"\");' />");
	
	generateButtonCloce();
	if( !label.is('.area')  && !label.is('#elements') && !label.is('#resurces') ) {
		
		generateButtonDelete( obj );
		generateButtonEdit( obj );
		
	}
	
	$("#editorpopup").append('<div id="tabs"></div>');
	
	if( label.is('.area') || label.is('#elements') || label.is('#resurces') ) addElement(label);
	if( !label.is('.area') && !label.is('#elements') && !label.is('#resurces') ) elementEditFields(element);
	if( element.is('.block') ) blockPopupVisible(element);
	if( label.is('.block') || (getFromLibrary([ 'element', elementTypeIndex, 'area' ]) && label.is('.element')) ) blockAreasList(label);
	
	$('#editorpopup #tabs .tab').first().addClass('activ');
	$('#editorpopup .tabContent').first().show();
	
}

function getFromLibrary(query, alternate) {
	
	var result = library;
	for(p = 0; p < query.length; p++ ) {
		if( !(result = result[ query[p] ]) ) {
			return alternate || '';
		}
	}
	return result;
	
}
function getTranslate(query) {
	
	queryEn = query.slice(0);
	query.push(lang);
	queryEn.push('en');
	return (lang != 'en') ? getFromLibrary( query, getFromLibrary(queryEn) ) : getFromLibrary(query);
	
}

function addElement(obj) {
	
	var objIndex = obj[0].link;
	var dictionary = obj[0].dictionary;
	var element = links[objIndex].element;
		
	$("#editorpopup").append("<p>" + getTranslate([ 'language', 'AddElementText' ]) + "</p>");
		
	ret = "<ul id='add'>";
			
	for(i = 0; i < library[dictionary].length; i++ ) {
		elementIcon = getFromLibrary([ dictionary, i, 'info', 'icon' ], alternateIcon);
		elementName = getTranslate([ dictionary, i, 'language' ]);
		ret += "<li class='" + i + "'><img src='" + elementIcon + "' /><p>" + elementName + "</p></li>";
	}
			
	ret += "</ul>";
	$("#editorpopup").append( ret );
			
	$('#editorpopup #add > li').click(function(event) {
		event.stopPropagation();

		var elementTypeIndex = $(this).attr('class');

		$("#elementinfopopup").html("");
		$("#elementinfopopup").show("slow");
		$("#blackback").css("z-index", "11");
		
		generateButtonBack();
		generateButtonAdd(dictionary, elementTypeIndex, element, objIndex);

		generateElementInfo(dictionary, elementTypeIndex, "#elementinfopopup");
		
	});
}
function generateElementInfo(dictionary, elementTypeIndex, target) {
	
	$(target).append("<div id='elementinfo'></div>");
	$(target + " > #elementinfo").append("<img src='" + getFromLibrary([dictionary, elementTypeIndex, 'info', 'icon'], alternateIcon) + "' />");
	$(target + " > #elementinfo").append("<p id='name'>" + getTranslate([dictionary, elementTypeIndex, 'language']) + "</p>");
	$(target + " > #elementinfo").append("<p id='autor'>" + getTranslate(['language', 'AddElementInfoAuthor']) + ': ' + getFromLibrary([dictionary, elementTypeIndex, 'info', 'author']) + "</p>");
	$(target + " > #elementinfo").append("<a id='url' href='" + getFromLibrary([dictionary, elementTypeIndex, 'info', 'url']) + "'>(" + getTranslate(['language', 'AddElementInfoUrl']) + ")</a>");
	$(target + " > #elementinfo").append("<p id='version'>" + getTranslate(['language', 'AddElementInfoVersion']) + ': ' + getFromLibrary([dictionary, elementTypeIndex, 'info', 'version']) + "</p>");
	if (getFromLibrary([dictionary, elementTypeIndex, 'info', 'screenshot'])) {

		ret = '';
		for (i = 0; i < library[dictionary][elementTypeIndex].info.screenshot.length; i++) {
			ret += "<img src='" + library[dictionary][elementTypeIndex].info.screenshot[i] + "' />";
			//$(target + " > #elementinfo").append('<input type="radio" name="screenshot" value="' + i + '" />');
		}
			
		$(target + " > #elementinfo").append("<div id='screenshots'></div>");
		$(target + " > #elementinfo #screenshots").append(ret);
	}
	$(target + " > #elementinfo").append("<div id='desciption'>" + getTranslate([dictionary, elementTypeIndex, 'info', 'description']) + "</div>");

}
function blockPopupVisible(obj) {
	
	var objIndex = obj[0].link;
	var dictionary = obj[0].dictionary;
	var element = links[objIndex].element;
	var elementIdAttr = element.attr('id') || '';
	
	if(obj.is(".popup")) {
		
		var checked  = element.is(":visible") ? " checked" : "";
		$("#editorpopup").append("<input type=\"checkbox\"  id=\"" + elementIdAttr + "\" class=\"dispay\" " + checked +">" + library.language.popupViewButton[lang] );
			
		$('#editorpopup .dispay').click(function() {
			if( $(this).is(':checked') ) {
				element.show("slow");
			} else {
				element.hide("slow");
			}	
		});
	}
	
}
function generateTab(tabName) {
	
	$("#editorpopup #tabs").append('<div id="' + tabName + '" class="tab">' + getTranslate([ 'language', tabName ]) + '</div>');
	$('#editorpopup #tabs #' + tabName).click(function() {
		
		$('#editorpopup #tabs .tab').removeClass('activ');
		$(this).addClass('activ');
		$('#editorpopup .tabContent').hide();
		$('#editorpopup > #' + tabName).show();
		
	});
	$("#editorpopup").append("<div id='" + tabName + "' class='tabContent'></div>");
	
}
function blockAreasList(obj) {
	
	var objIndex = obj[0].link;
	var dictionary = obj[0].dictionary;
	var elementTypeIndex = links[objIndex].typeIndex;
	var element = links[objIndex].element;
	var label = links[objIndex].label;
	var elementIdAttr = element.attr('id') || '';
	
	generateTab('blockAreasList');	
	$("#editorpopup > #blockAreasList").append("<ul class='" + label.attr('class') + "'></ul>");
	
	label.find("> ul > li.area").each(function() {
		AreaLabel = $(this).clone().appendTo("#editorpopup > #blockAreasList > ul");
		AreaLabel[0].link = $(this)[0].link;
		AreaLabel[0].dictionary = $(this)[0].dictionary;
		AreaLabel.find(' > ul').remove();
		
	});
		
	$('#editorpopup li.area').click(function(event) {
		event.stopPropagation();
		generatePopupElementEdit( $(this) );
	});
	
}
function elementEditFields(obj) {
	
	var objIndex = obj[0].link;
	var dictionary = obj[0].dictionary;
	var elementTypeIndex = links[objIndex].typeIndex;
	var element = links[objIndex].element;
	
	if(library[dictionary][elementTypeIndex].properties) {
		
		generateTab('elementEditFields');
		
		for(j = 0; j < library[dictionary][elementTypeIndex].properties.length; j++ ) {
				
			var propertie = library[dictionary][elementTypeIndex].properties[j];
			var editlabel = propertie.language[lang];
			var editclass = propertie.name;
			obj = propertie.select ? propertie.select( element ) : element;
			var editvalue = propertie.get( obj ) ? propertie.get( obj ) : "";
			var editId = 'editField' + objIndex + '_' + j;
				
					
			$("#editorpopup > #elementEditFields").append( '<ul>' + library.tool[propertie.type].edit( objIndex, propertie, obj, editlabel, editId, editclass, editvalue ) + '</ul>');
				
		}
			
	}
	
}

function generateButtonBack() {
	
	$("#elementinfopopup").append("<button class=\"close\">" + library.language.close[lang] + "</button>");
	$('#elementinfopopup .close').click(function() {
		
		if ( confirm( library.language.closeConfirmText[lang] ) ) {
			
			$("#elementinfopopup").hide("slow");
			$("#blackback").css("z-index","9");
			
		}	
			
	});
	
}
function generateButtonAdd( dictionary, elementTypeIndex, element, objIndex ) {
	
	$("#elementinfopopup").append("<button class=\"add\">" + library.language.add[lang] + "</button>");
	$('#elementinfopopup .add').click(function() {
		
		createdElement = library[dictionary][elementTypeIndex].add( element );
		clearCheckedElements();
		$("#editorpopup").hide("slow");
		$("#elementinfopopup").hide("slow");
		$("#blackback").css("z-index","9");
		$("#blackback").hide("slow");
		clearCheckedElements();
		editorinit();
		
		if(createdElement) {
			generatePopupElementEdit( createdElement );
		} else {
			generatePopupElementEdit( links[objIndex].label.find(' > ul > li:last-of-type') );
		}
			
	});
	
}

function generateButtonCloce() {
	
	$("#editorpopup").append("<button class=\"close\">" + library.language.close[lang] + "</button>"); // Кнопка закрытия окна	
	$('#editorpopup .close').click(function() {
		
		if ( confirm( library.language.closeConfirmText[lang] ) ) {
			
			clearCheckedElements();
			$("#editorpopup").hide("slow");
			$("#blackback").hide("slow");
			
		}	
			
	});
	
}
function generateButtonDelete( obj ) {
	
	var linkIndex = obj[0].link;
	var dictionary = obj[0].dictionary;
	var element = links[linkIndex].element;	
	var elementTypeIndex = links[linkIndex].typeIndex;
	
	$("#editorpopup").append("<button id=\"" + linkIndex + "\" class=\"del\">" + library.language.del[lang] + "</button>"); // Кнопка удаления
	$('#editorpopup .del').click(function() {
		
		if ( confirm( library.language.deleteConfirmText[lang] ) ) {
			
			getFromLibrary( 
				[dictionary, elementTypeIndex, 'del'],
				function( obj ) {
					obj.remove();
				}
			)( element );
			$("#elements li#" + linkIndex).remove();
			$("#editorpopup").hide("slow");
			$("#blackback").hide("slow");
			
			generateMenuLabels();
				
		}
			
	});
	
}
function generateButtonEdit( obj ) {
	
	var linkIndex = obj[0].link;
	var dictionary = obj[0].dictionary;
	var element = links[linkIndex].element;	
	var elementTypeIndex = links[linkIndex].typeIndex;
	var elementIdAttr = element.attr('id');
	
	$("#editorpopup").append("<button id=\"" + linkIndex + "\" class=\"edit\">" + library.language.edit[lang] + "</button><br>"); // Кнопка Редактирования	
	$('#editorpopup .edit#' + linkIndex).click(function() {

			if ( confirm( library.language.editConfirmText[lang] ) ) {

				if(library[dictionary][elementTypeIndex].properties) {
					
					for(j = 0; j < library[dictionary][elementTypeIndex].properties.length; j++ ) {
		
						var propertie = library[dictionary][elementTypeIndex].properties[j];
						var obj = propertie.select ? propertie.select( element ) : element;
						var editId = 'editField' + linkIndex + '_' + j;
						var editFeild = $('#editorpopup .' + propertie.name + '#' + editId);
						
						library.tool[propertie.type].save( editFeild, propertie, obj );
						
					}
					
				}
				
				value = $("#editorpopup .editId").val();
				if(value) {
					if( $("#labels li#" + value).html() && ( value != elementIdAttr) ) {
						alert( library.language.idExists[lang] );
					} else {

						getFromLibrary( 
							[dictionary, elementTypeIndex, 'rename'],
							function( obj, value ) {
								obj.attr('id', value);
							}
						)( element, value );
						links[linkIndex].label.attr('id', value);
					}
				} else {
					
					if(!getFromLibrary( [dictionary, elementTypeIndex, 'idRequired'] )) {
						element.removeAttr('id');
						links[linkIndex].label.removeAttr('id');
					} else {
						alert( library.language.idRequired[lang] );
					}
				
				}
				
				clearCheckedElements();
				$("#editorpopup").hide("slow");
				$("#blackback").hide("slow");
				
				generateMenuLabels();
			
			}	
				
	});

}
