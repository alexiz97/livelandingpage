function buildlayoutKey() {
    var result = [];
    var i = 1;
    $('.movable').each(function () {
        var tempObj = new Object();
        tempObj.id = $(this).attr('id');
        tempObj.position = '"' + $(this).index() + '"';
        result.push(tempObj);
    })
    setCookie('layout=', JSON.stringify(result), 99999)
}

function setlayout(layoutKey) {
    if (layoutKey) {
//        var delimiter = '<tr class="ui-state-disabled"><td colspan="20"></td></tr>'
        layoutKey = layoutKey.sort(function (a, b) {
            return a.position.localeCompare(b.position);
        });
        for (l = layoutKey.length - 1; l >= 0; l--) {
            var el = $('#' + layoutKey[l].id);
            $('#' + layoutKey[l].id).remove();
            var target = $('.movableContener').find('tbody');
            $(target).prepend($(el));
//            $(target).prepend(delimiter)
        }
    }

}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length + 1, c.length);
        }
    }
    return "";
}

function setEncodeCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "" + encodeURIComponent(cvalue) + "; " + expires;
}

function getDecodeCookie(cname) {
    var name = cname + "=";
    var decodedCookie = document.cookie;
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
                    val = decodeURIComponent(c.substring(name.length, c.length));
            return val;
        }
    }
    return "";
}

$(document).ready(function(){

	if (getCookie('layout')) {
        setlayout(JSON.parse(getCookie('layout')))
    }
	var fixHelper = function (e, ui) {
                ui.children().each(function () {
                    $(this).width($(this).width());
                });
                return ui;
            };
	
	$(".movableContener tbody").sortable({
		helper: fixHelper,
		handle: ".handler",
		placeholder: "ui-state-highlight",
		items: "tr.movable",
		start: function (event, ui) {
                    var id_textarea = ui.item.find(".ckeditor").attr("id");
                    CKEDITOR.instances[id_textarea].destroy();
		},
		stop: function (event, ui) {
                    var id_textarea = ui.item.find(".ckeditor").attr("id");
                    CKEDITOR.inline(id_textarea);
			buildlayoutKey()
		}
	});
        
        var targets = CKEDITOR.document.find( '.ckeditor' );
        for ( i = 1; i < targets.count()+1; i++ ){
            var tar = 'editor' + i;
            CKEDITOR.inline( tar );
        if (getDecodeCookie(tar)) {
            data = getDecodeCookie(tar);
            CKEDITOR.instances[tar].setData( data, function()
{
    this.checkDirty();  // true
});
    }
        }
        CKEDITOR.on( 'instanceReady', function( event ) {
    event.editor.on( 'focus', function() {
        tar = this.name;
        CKEDITOR.instances[tar].on('blur', function() {
        var data = CKEDITOR.instances[tar].getData(); 
         setEncodeCookie(tar + '=', data, 99999)
        });
    });
});
        
        
        
       
        
       

})