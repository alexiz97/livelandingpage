function buildlayoutKey() {
    var result = [];
    var i = 1;
    $('.movable').each(function () {
        var tempObj = new Object();
        tempObj.id = $(this).attr('id');
        tempObj.position = '"' + $(this).index() + '"';
        tempObj.name = '"' + $(this).attr('name') + '"';
        result.push(tempObj);
    })
    setCookie('layout=', JSON.stringify(result), 99999)
}

function fillMenu(layoutKey) {
        layoutKey = layoutKey.sort(function (a, b) {
            return a.position.localeCompare(b.position);
        });
        $('#aj-fill').empty();
        names = [];
        for (l = 0; l <= layoutKey.length - 1; l++) {
            console.log(layoutKey.length);           
            names.push(layoutKey[l].id);
        }
        console.log(names);
        for (l = 0; l <= names.length - 1; l++) {
            $('#aj-fill').append("<li><a class='page-scroll capletter' href='#" + names[l] + "'>"+ names[l] +"</a></li>");
        }
        }


function setlayout(layoutKey) {
    if (layoutKey) {
//        var delimiter = '<tr class="ui-state-disabled"><td colspan="20"></td></tr>'
        layoutKey = layoutKey.sort(function (a, b) {
            return a.position.localeCompare(b.position);
        });
        fillMenu(layoutKey);
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

//Default data
if (localStorage.getItem("editor1") === null) {
localStorage.editor1 = '<p style="text-align:center"><img alt="" height="489" src="https://www.coinbase.com/assets/mobile/mobile-app-dcc08ce0469484f95e8c5f282aa741f3059afb115a953d0e025ea5243f7bbe05.png" width="407" /></p>';
}
if (localStorage.getItem("editor2") === null) {
localStorage.editor2 = '<p style="text-align:center">&nbsp;</p> <p style="text-align:center">&nbsp;</p> <p style="text-align:center">&nbsp;</p> <p style="text-align:center"><span style="font-size:48px"><span style="color:#ffffff; font-family:MontserratRegular">AWESOME MOBILE APP</span></span></p> <p style="text-align:center">&nbsp;</p> <p style="text-align:center"><span style="color:#ffffff"><span style="font-size:24px">An awesome live setup landing page system.</span></span></p> <p style="text-align:center">&nbsp;</p> <p style="text-align:center">&nbsp;</p> <div class="download_left_button"> <p style="text-align:center"><br /> <span style="font-family:MontserratRegular"><span style="font-size:20px"><span style="color:#ffffff"><span class="fa fa-paper-plane" style="color:rgb(255, 255, 255);"></span>&nbsp; GOOGLE PLAY</span></span></span></p> </div> <div> <div class="download_right_button"> <p style="text-align:center"><br /> <span style="font-family:MontserratRegular"><span style="font-size:20px"><span style="color:#ffffff"><span class="fa fa-apple" style="color:rgb(255, 255, 255);"></span>&nbsp; APPLE STORE</span></span></span></p> </div> </div>';
}
if (localStorage.getItem("editor3") === null) {
localStorage.editor3 = '<p><span style="color:#ffffff;"><span style="font-family:MontserratRegular;"><span style="font-size:36px;">BEST MOBILE APP</span></span></span></p> <p><span style="color:#95a5a6;"><em><span style="font-size:20px;"><span style="font-family:Verdana,Geneva,sans-serif;">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</span></span></em></span></p> <p>&nbsp;</p> <p><span style="font-size:20px;"><span style="font-family:Verdana,Geneva,sans-serif;"><span style="color:#ffffff;">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</span></span></span></p> <p>&nbsp;</p>';
}
if (localStorage.getItem("editor4") === null) {
localStorage.editor4 = '<p style="text-align: center;"><span style="font-family:MontserratRegular;">BUILD SHOWCASE</span></p>';
}
if (localStorage.getItem("editor5") === null) {
localStorage.editor5 = '<p style="text-align: center;"><span style="font-family:MontserratRegular;">FULL RESPONSIVE</span></p>';
}
if (localStorage.getItem("editor6") === null) {
localStorage.editor6 = '<p style="text-align: center;"><span style="font-family:MontserratRegular;">RETINA READY</span></p>';
}
if (localStorage.getItem("editor7") === null) {
localStorage.editor7 = '<p style="text-align: center;"><span style="font-family:MontserratRegular;">UNIQUE DESIGN</span></p>';
}
if (localStorage.getItem("editor8") === null) {
localStorage.editor8 = '<form enctype="multipart/form-data" id="name" method="post" name="Nazwisko"> <p><span style="color:#bdc3c7;"><span style="font-family:MontserratRegular;"><input name="Nazwisko" required="required" style=" " type="text" value="Nazwisko" /></span></span></p> <p><span style="color:#bdc3c7;"><span style="font-family:MontserratRegular;"><input name="Email" required="required" type="text" value="Email" /></span></span></p> <p><span style="color:#bdc3c7;"><span style="font-family:MontserratRegular;"><input name="Kontakt" type="text" value="Kontakt" /></span></span></p> <p>&nbsp;</p> <div class="send_button" style="margin-left:0px;"> <p style="text-align: center;"><span style="font-size:28px;"><span style="color:#ecf0f1;"><span style="font-family:MontserratRegular;">WYŚLIJ</span></span></span><span style="font-size:48px;"></span></p> </div> </form> <p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p>';
}
if (localStorage.getItem("editor9") === null) {
localStorage.editor9 = '<p><span style="font-family:MontserratRegular;"><span style="font-size:36px;"><br /><span style="color:#3498db;">APP&trade;<span style="font-family:MontserratRegular;"><span style="font-size:10px;"><span style="color:#3498db;">itcave.p</span>l</span></span>&nbsp;</span></span><span style="color:#3498db;"></span><span style="font-size:36px;"></span></span></p>';
}
if (localStorage.getItem("editor10") === null) {
localStorage.editor10 = '<p style="text-align: center;"><br /><span style="font-size:48px;"></span><span style="font-size:48px;"><span class="fa fa-pagelines fa-fw fa-fw" style="color:rgb(0, 0, 0);"></span></span></p>';
}
if (localStorage.getItem("editor11") === null) {
localStorage.editor11 = '<p style="text-align: center;"><br /> <span style="font-size:48px;"></span><span style="font-size:48px;"><span class="fa fa-desktop fa-fw fa-fw" style="color:rgb(0, 0, 0);"></span></span></p>';
}
if (localStorage.getItem("editor12") === null) {
localStorage.editor12 = '<p style="text-align: center;"><br /> <span style="font-size:48px;"></span><span style="font-size:48px;"><span class="fa fa-apple fa-fw fa-fw" style="color:rgb(0, 0, 0);"></span></span></p>';
}
if (localStorage.getItem("editor13") === null) {
localStorage.editor13 = '<p style="text-align: center;"><br /> <span style="font-size:48px;"></span><span style="font-size:48px;"><span class="fa fa-delicious fa-fw fa-fw" style="color:rgb(0, 0, 0);"></span></span></p>';
}
if (localStorage.getItem("editor14") === null) {
localStorage.editor14 = '<p style="text-align: center;"><span style="color:#ecf0f1;"></span><span style="color:#ecf0f1;"><span style="font-size:36px;"><span class="fa fa-phone " style="color:white;"></span></span></span></p> <p style="text-align: center;"><span style="color:#dddddd;"><span style="font-size:18px;"><font face="MontserratRegular">Skontaktuj się z nami&nbsp;</font></span></span></p> <p style="text-align: center;"><span style="color:#dddddd;"><span style="font-size:18px;"><font face="MontserratRegular">telefonicznie:</font></span></span></p> <p style="text-align: center;"><span style="color:#ecf0f1;"><span style="font-size:18px;"><font face="MontserratRegular">123 123 123</font></span></span></p> <p style="text-align: center;">&nbsp;</p> <p style="text-align: center;"><span style="font-size:36px;"><span class="fa fa-envelope " style="color:white;"></span></span></p> <p style="text-align: center;"><span style="color:#ecf0f1;"><span style="font-size:22px;"></span></span></p> <p style="text-align: center;"><span style="color:#dddddd;"><span style="font-size:18px;"><font face="MontserratRegular">Skontaktuj się z nami&nbsp;</font></span></span></p> <p style="text-align: center;"><span style="color:#dddddd;"><span style="font-size:18px;"><font face="MontserratRegular">przez e-mail:</font></span></span></p> <p style="text-align: center;"><span style="font-size:18px;"><span style="color:#ecf0f1;"><font face="MontserratRegular">asd@o2.pl</font></span></span></p>';
}
//localStorage.removeItem("customElements");
//if (localStorage.getItem("customElements") === null) {
//localStorage["customElements"] = '';
//}

var customElements = new Array();
customElements = []
localStorage["customElements"] = JSON.stringify(customElements);

$(document).ready(function(layoutKey){



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
                buildlayoutKey();
                refreshMenu();
        }
});
        
function load(){
    var targets = CKEDITOR.document.find( '.ckeditor' );
    for ( i = 1; i < targets.count()+1; i++ ){
        var tar = i;
        CKEDITOR.inline( 'editor' + tar );
        if (localStorage.getItem('editor' + tar)) {
            data = localStorage.getItem('editor' + tar);
            CKEDITOR.instances['editor' + tar].setData( data, function()
            {
                this.checkDirty();  // true
            });
        }
    }
}

function loadCustom(){
   if (typeof localStorage["cObElements"] === 'undefined' && localStorage["cObElements"] !== null){
       
        }
        else{
            console.log(localStorage["cObElements"]);
            var cElements = JSON.parse(localStorage["cObElements"]);
            console.log(customElements);
            for (l = 0; l <= cElements[0].length - 1; l++) {          
            content = cElements[0][l];
            $( "#section-content" ).append( $( content ) );
        }
    }
};
loadCustom();
load();
refreshMenu();

function deleteCustom(id){
    
}
//localStorage.removeItem("cObElements");
function refreshCK(){
    for(name in CKEDITOR.instances)
    {
        CKEDITOR.instances[name].destroy(true);
    }
    load();
    buildlayoutKey();
};

function refreshMenu(){
    if (getCookie('layout')) {
    setlayout(JSON.parse(getCookie('layout')))
    }
};

CKEDITOR.on( 'instanceReady', function( event ) {
    event.editor.on( 'focus', function() {
        tar = this.name;
        CKEDITOR.instances[tar].on('blur', function() {
        var data = CKEDITOR.instances[tar].getData(); 
         localStorage[tar] = data;
        });
    });
});
      
$("#addElement").click(function(){
    $('#elementCreator').modal('show');
});

// Initialize grid editor
$('#myGrid').gridEditor({
    new_row_layouts: [[12], [6,6], [9,3]],
    content_types: ['ckeditor'],
});


// Get resulting html
$("#add").click(function(ev){
    gridder = $('#myGrid').gridEditor('getHtml');
    id = document.getElementById('identity').value;
    content = "<tr class='movable' id='"+ id +"'> <td> <section id='sec-"+ id +"' class='element contact'> <div class='handler'></div> <div class='container'>" + gridder + "</div> </section> </td> </tr>";
    $( "#section-content" ).append( $( content ) );
    $( "#aj-fill" ).append( $( '<li><a class="page-scroll capletter" href="#'+id+'">'+id+'</a></li>' ) );
    if(localStorage.getItem('cObElements') === null){
        cTabElements = [];
        var cObElements = {
            0 : cTabElements
        }
        localStorage.setItem('cObElements', JSON.stringify(cObElements));
        var cObElements = JSON.parse(localStorage["cObElements"]);
        console.log(cObElements);
        cObElements[0].push(content);
        localStorage.setItem('cObElements', JSON.stringify(cObElements));
    }
    else{
        var cObElements = JSON.parse(localStorage["cObElements"]);
        console.log(cObElements);
        cObElements[0].push(content);
        localStorage.setItem('cObElements', JSON.stringify(cObElements));
    }

//    console.log('cObElements: ', JSON.parse(cObElements));
//    var customs = new Array();
//    var customElements = JSON.parse(localStorage["customElements"]);
//    console.log(customElements);
//    for (l = 0; l < customElements.lenght ; l++) {   
//        temp = customElements[l];
//        customs.push(temp);
//    }
//    customs.push( content );
//    console.log(customs);
    
//    var customElements = JSON.parse(localStorage["customElements"]);
//    customElements.push( content );
//    localStorage["customElements"] = JSON.stringify(customElements);
    refreshCK();
    refreshMenu();
});

//$('#SpaceAccommodation').change(function () {
//    var selectedText = $(this).find("option:selected").text();
//    
//  gridder(selectedText);
//});
//
//
//})
//
//function gridder (gridval) {
//    var gridran = [];
//    for(i = 1; i <= gridval; i++){     
//        gridran.push(i);
//        console.log(gridran);
//    }
//           
//};
//$("#grid12").slider({
//        range: true,
//        min: 0,
//        max: 12,
//        step: 1,
//        value: 1,
//        values: [1, 2, 3, 4, 5, 6],
}); 
