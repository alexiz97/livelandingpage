function buildlayoutKey() {
    var result = [];
    var i = 1;
    $('.movable').each(function () {
        var tempObj = new Object();
        tempObj.id = $(this).attr('id');
        tempObj.position = '"' + $(this).index() + '"';
        tempObj.name = '' + $(this).attr('name') + '';
        result.push(tempObj);
    })
    setCookie('layout=', JSON.stringify(result), 99999)
}

function fillMenu(layoutKey) {
        layoutKey = layoutKey.sort(function (a, b) {
            return a.position.localeCompare(b.position);
        });
        $('#aj-fill').empty();
        $('#editElements').empty();
        ids = [];
        var names = [];
        for (l = 0; l <= layoutKey.length - 1; l++) {
            console.log(layoutKey.length);
            ids.push(layoutKey[l].id);
            names.push(layoutKey[l].name);
        }
        console.log(names);
        for (l = 0; l <= names.length - 1; l++) {
            $('#aj-fill').append("<li><a class='page-scroll capletter' href='#" + ids[l] + "'>"+ names[l] +"</a></li>");
            $('#editElements').append("<li class='dropdown'><a href='#' class='dropdown-toggle capletter' data-toggle='dropdown'>"+ names[l] +"<span class='caret'></span></a><ul class='dropdown-menu' role='menu'><li class='dropdown-header'>Edycja elementu</li><li id='editElements'><a href='#' class='delete' deleteid='"+ids[l]+"'>Usuń</a></li><li id='editElements'><a href='#' class='edit' editid='"+ids[l]+"'>Edytuj</a></li></ul></li>");
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
function loadDefault(){
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
localStorage.editor4 = '<p style="text-align: center;"><span style="font-family:MontserratRegular;">BUILD SHOWCASE</span></p><div class="feature-icon"> <p style="text-align: center;"><span style="font-size:48px;"><span class="fa fa-pagelines" style="color:rgb(0, 0, 0);"></span></span></p> </div>';
}
if (localStorage.getItem("editor5") === null) {
localStorage.editor5 = '<p style="text-align: center;"><span style="font-family:MontserratRegular;">FULL RESPONSIVE</span></p><div class="feature-icon"> <p style="text-align: center;"><span style="font-size:48px;"><span class="fa fa-desktop" style="color:rgb(0, 0, 0);"></span></span></p> </div>';
}
if (localStorage.getItem("editor6") === null) {
localStorage.editor6 = '<p style="text-align: center;"><span style="font-family:MontserratRegular;">RETINA READY</span></p><div class="feature-icon"> <p style="text-align: center;"><span style="font-size:48px;"><span class="fa fa-apple" style="color:rgb(0, 0, 0);"></span></span></p> </div>';
}
if (localStorage.getItem("editor7") === null) {
localStorage.editor7 = '<p style="text-align: center;"><span style="font-family:MontserratRegular;">UNIQUE DESIGN</span></p><div class="feature-icon"> <p style="text-align: center;"><span style="font-size:48px;"><span class="fa fa-delicious" style="color:rgb(0, 0, 0);"></span></span></p> </div>';
}
if (localStorage.getItem("editor8") === null) {
localStorage.editor8 = '<form enctype="multipart/form-data" id="name" method="post" name="Nazwisko"> <p><span style="color:#bdc3c7;"><span style="font-family:MontserratRegular;"><input name="Nazwisko" required="required" style=" " type="text" value="Nazwisko" /></span></span></p> <p><span style="color:#bdc3c7;"><span style="font-family:MontserratRegular;"><input name="Email" required="required" type="text" value="Email" /></span></span></p> <p><span style="color:#bdc3c7;"><span style="font-family:MontserratRegular;"><input name="Kontakt" type="text" value="Kontakt" /></span></span></p> <p>&nbsp;</p> <div class="send_button" style="margin-left:0px;"> <p style="text-align: center;"><span style="font-size:28px;"><span style="color:#ecf0f1;"><span style="font-family:MontserratRegular;">WYŚLIJ</span></span></span><span style="font-size:48px;"></span></p> </div> </form> <p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p>';
}
if (localStorage.getItem("editor9") === null) {
localStorage.editor9 = '<p><span style="font-family:MontserratRegular;"><span style="font-size:36px;"><br /><span style="color:#3498db;">APP&trade;<span style="font-family:MontserratRegular;"><span style="font-size:10px;"><span style="color:#3498db;">itcave.p</span>l</span></span>&nbsp;</span></span><span style="color:#3498db;"></span><span style="font-size:36px;"></span></span></p>';
}
if (localStorage.getItem("editor14") === null) {
localStorage.editor14 = '<p style="text-align: center;"><span style="color:#ecf0f1;"></span><span style="color:#ecf0f1;"><span style="font-size:36px;"><span class="fa fa-phone " style="color:white;"></span></span></span></p> <p style="text-align: center;"><span style="color:#dddddd;"><span style="font-size:18px;"><font face="MontserratRegular">Skontaktuj się z nami&nbsp;</font></span></span></p> <p style="text-align: center;"><span style="color:#dddddd;"><span style="font-size:18px;"><font face="MontserratRegular">telefonicznie:</font></span></span></p> <p style="text-align: center;"><span style="color:#ecf0f1;"><span style="font-size:18px;"><font face="MontserratRegular">123 123 123</font></span></span></p> <p style="text-align: center;">&nbsp;</p> <p style="text-align: center;"><span style="font-size:36px;"><span class="fa fa-envelope " style="color:white;"></span></span></p> <p style="text-align: center;"><span style="color:#ecf0f1;"><span style="font-size:22px;"></span></span></p> <p style="text-align: center;"><span style="color:#dddddd;"><span style="font-size:18px;"><font face="MontserratRegular">Skontaktuj się z nami&nbsp;</font></span></span></p> <p style="text-align: center;"><span style="color:#dddddd;"><span style="font-size:18px;"><font face="MontserratRegular">przez e-mail:</font></span></span></p> <p style="text-align: center;"><span style="font-size:18px;"><span style="color:#ecf0f1;"><font face="MontserratRegular">asd@o2.pl</font></span></span></p>';
}
var customs = JSON.stringify({"0":["home","about","features","contact"],"1":["<tr class='movable' id='home' name='home'> <td> <section id='sec-home' class='element home'> <div class='handler'></div> <div class='container home_container'> <div class='row'> <div class='col-md-5'> <textarea class='ckeditor' id='editor1'>Content 1</textarea> </div> <div class='col-md-7'> <textarea class='ckeditor' id='editor2'>Content 2</textarea> </div> </div> </div> </section> </td> </tr>","<tr class='movable' id='about' name='about'> <td> <section id='sec-about' class='element about'> <div class='handler'></div> <div class='container'> <div class='row'> <div class='col-lg-12 text-center'> <textarea class='ckeditor' id='editor3'>About</textarea> </div> </div> </div> </section> </td> </tr>","<tr class='movable' id='features' name='features'> <td> <section id='sec-features' class='element features'> <div class='handler'></div> <div class='row'> <div class='col-xs-6 col-sm-3 margin'><textarea class='ckeditor' id='editor4'>FEATURE 1</textarea></div> <div class='col-xs-6 col-sm-3 margin'><textarea class='ckeditor' id='editor5'>FEATURE 2</textarea></div> <div class='col-xs-6 col-sm-3 margin'><textarea class='ckeditor' id='editor6'>FEATURE 3</textarea></div> <div class='col-xs-6 col-sm-3 margin'><textarea class='ckeditor' id='editor7'>FEATURE 4</textarea></div> </div> </section> </td> </tr>","<tr class='movable' id='contact' name='contact'> <td> <section id='sec-contact' class='element contact'> <div class='handler'></div> <div class='container'> <div class='row'> <div class='col-md-8'> <textarea class='ckeditor' id='editor8'>Contact</textarea> </div> <div class='col-md-4'> <textarea class='ckeditor' id='editor14'>Contact</textarea> </div> </div> </div> </section> </td> </tr>"]});
if (localStorage.getItem("cObElements") === null) {
localStorage.cObElements = customs;
}
var styles = JSON.stringify({"0":["home","about","features","contact"],"1":["linear-gradient(rgba(33, 150, 243, 0.5), rgba(33, 150, 243, 0.5)), url('https://static.pexels.com/photos/6548/cold-snow-winter-mountain.jpeg')","#1a619a","#f5f5f5","#2980b9"]});
if (localStorage.getItem("cObStyle") === null) {
localStorage.cObStyle = styles;
}
}
loadDefault();
function reloadDefault(){
localStorage.editor1 = '<p style="text-align:center"><img alt="" height="489" src="https://www.coinbase.com/assets/mobile/mobile-app-dcc08ce0469484f95e8c5f282aa741f3059afb115a953d0e025ea5243f7bbe05.png" width="407" /></p>';
localStorage.editor2 = '<p style="text-align:center">&nbsp;</p> <p style="text-align:center">&nbsp;</p> <p style="text-align:center">&nbsp;</p> <p style="text-align:center"><span style="font-size:48px"><span style="color:#ffffff; font-family:MontserratRegular">AWESOME MOBILE APP</span></span></p> <p style="text-align:center">&nbsp;</p> <p style="text-align:center"><span style="color:#ffffff"><span style="font-size:24px">An awesome live setup landing page system.</span></span></p> <p style="text-align:center">&nbsp;</p> <p style="text-align:center">&nbsp;</p> <div class="download_left_button"> <p style="text-align:center"><br /> <span style="font-family:MontserratRegular"><span style="font-size:20px"><span style="color:#ffffff"><span class="fa fa-paper-plane" style="color:rgb(255, 255, 255);"></span>&nbsp; GOOGLE PLAY</span></span></span></p> </div> <div> <div class="download_right_button"> <p style="text-align:center"><br /> <span style="font-family:MontserratRegular"><span style="font-size:20px"><span style="color:#ffffff"><span class="fa fa-apple" style="color:rgb(255, 255, 255);"></span>&nbsp; APPLE STORE</span></span></span></p> </div> </div>';
localStorage.editor3 = '<p><span style="color:#ffffff;"><span style="font-family:MontserratRegular;"><span style="font-size:36px;">BEST MOBILE APP</span></span></span></p> <p><span style="color:#95a5a6;"><em><span style="font-size:20px;"><span style="font-family:Verdana,Geneva,sans-serif;">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</span></span></em></span></p> <p>&nbsp;</p> <p><span style="font-size:20px;"><span style="font-family:Verdana,Geneva,sans-serif;"><span style="color:#ffffff;">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</span></span></span></p> <p>&nbsp;</p>';
localStorage.editor4 = '<p style="text-align: center;"><span style="font-family:MontserratRegular;">BUILD SHOWCASE</span></p><div class="feature-icon"> <p style="text-align: center;"><span style="font-size:48px;"><span class="fa fa-pagelines" style="color:rgb(0, 0, 0);"></span></span></p> </div>';
localStorage.editor5 = '<p style="text-align: center;"><span style="font-family:MontserratRegular;">FULL RESPONSIVE</span></p><div class="feature-icon"> <p style="text-align: center;"><span style="font-size:48px;"><span class="fa fa-desktop" style="color:rgb(0, 0, 0);"></span></span></p> </div>';
localStorage.editor6 = '<p style="text-align: center;"><span style="font-family:MontserratRegular;">RETINA READY</span></p><div class="feature-icon"> <p style="text-align: center;"><span style="font-size:48px;"><span class="fa fa-apple" style="color:rgb(0, 0, 0);"></span></span></p> </div>';
localStorage.editor7 = '<p style="text-align: center;"><span style="font-family:MontserratRegular;">UNIQUE DESIGN</span></p><div class="feature-icon"> <p style="text-align: center;"><span style="font-size:48px;"><span class="fa fa-delicious" style="color:rgb(0, 0, 0);"></span></span></p> </div>';
localStorage.editor8 = '<form enctype="multipart/form-data" id="name" method="post" name="Nazwisko"> <p><span style="color:#bdc3c7;"><span style="font-family:MontserratRegular;"><input name="Nazwisko" required="required" style=" " type="text" value="Nazwisko" /></span></span></p> <p><span style="color:#bdc3c7;"><span style="font-family:MontserratRegular;"><input name="Email" required="required" type="text" value="Email" /></span></span></p> <p><span style="color:#bdc3c7;"><span style="font-family:MontserratRegular;"><input name="Kontakt" type="text" value="Kontakt" /></span></span></p> <p>&nbsp;</p> <div class="send_button" style="margin-left:0px;"> <p style="text-align: center;"><span style="font-size:28px;"><span style="color:#ecf0f1;"><span style="font-family:MontserratRegular;">WYŚLIJ</span></span></span><span style="font-size:48px;"></span></p> </div> </form> <p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p>';
localStorage.editor9 = '<p><span style="font-family:MontserratRegular;"><span style="font-size:36px;"><br /><span style="color:#3498db;">APP&trade;<span style="font-family:MontserratRegular;"><span style="font-size:10px;"><span style="color:#3498db;">itcave.p</span>l</span></span>&nbsp;</span></span><span style="color:#3498db;"></span><span style="font-size:36px;"></span></span></p>';
localStorage.editor14 = '<p style="text-align: center;"><span style="color:#ecf0f1;"></span><span style="color:#ecf0f1;"><span style="font-size:36px;"><span class="fa fa-phone " style="color:white;"></span></span></span></p> <p style="text-align: center;"><span style="color:#dddddd;"><span style="font-size:18px;"><font face="MontserratRegular">Skontaktuj się z nami&nbsp;</font></span></span></p> <p style="text-align: center;"><span style="color:#dddddd;"><span style="font-size:18px;"><font face="MontserratRegular">telefonicznie:</font></span></span></p> <p style="text-align: center;"><span style="color:#ecf0f1;"><span style="font-size:18px;"><font face="MontserratRegular">123 123 123</font></span></span></p> <p style="text-align: center;">&nbsp;</p> <p style="text-align: center;"><span style="font-size:36px;"><span class="fa fa-envelope " style="color:white;"></span></span></p> <p style="text-align: center;"><span style="color:#ecf0f1;"><span style="font-size:22px;"></span></span></p> <p style="text-align: center;"><span style="color:#dddddd;"><span style="font-size:18px;"><font face="MontserratRegular">Skontaktuj się z nami&nbsp;</font></span></span></p> <p style="text-align: center;"><span style="color:#dddddd;"><span style="font-size:18px;"><font face="MontserratRegular">przez e-mail:</font></span></span></p> <p style="text-align: center;"><span style="font-size:18px;"><span style="color:#ecf0f1;"><font face="MontserratRegular">asd@o2.pl</font></span></span></p>';
var customs = JSON.stringify({"0":["home","about","features","contact"],"1":["<tr class='movable' id='home' name='home'> <td> <section id='sec-home' class='element home'> <div class='handler'></div> <div class='container home_container'> <div class='row'> <div class='col-md-5'> <textarea class='ckeditor' id='editor1'>Content 1</textarea> </div> <div class='col-md-7'> <textarea class='ckeditor' id='editor2'>Content 2</textarea> </div> </div> </div> </section> </td> </tr>","<tr class='movable' id='about' name='about'> <td> <section id='sec-about' class='element about'> <div class='handler'></div> <div class='container'> <div class='row'> <div class='col-lg-12 text-center'> <textarea class='ckeditor' id='editor3'>About</textarea> </div> </div> </div> </section> </td> </tr>","<tr class='movable' id='features' name='features'> <td> <section id='sec-features' class='element features'> <div class='handler'></div> <div class='row'> <div class='col-xs-6 col-sm-3 margin'><textarea class='ckeditor' id='editor4'>FEATURE 1</textarea></div> <div class='col-xs-6 col-sm-3 margin'><textarea class='ckeditor' id='editor5'>FEATURE 2</textarea></div> <div class='col-xs-6 col-sm-3 margin'><textarea class='ckeditor' id='editor6'>FEATURE 3</textarea></div> <div class='col-xs-6 col-sm-3 margin'><textarea class='ckeditor' id='editor7'>FEATURE 4</textarea></div> </div>  </section> </td> </tr>","<tr class='movable' id='contact' name='contact'> <td> <section id='sec-contact' class='element contact'> <div class='handler'></div> <div class='container'> <div class='row'> <div class='col-md-8'> <textarea class='ckeditor' id='editor8'>Contact</textarea> </div> <div class='col-md-4'> <textarea class='ckeditor' id='editor14'>Contact</textarea> </div> </div> </div> </section> </td> </tr>"]});
localStorage.cObElements = customs;
var styles = JSON.stringify({"0":["home","about","features","contact"],"1":["linear-gradient(rgba(33, 150, 243, 0.5), rgba(33, 150, 243, 0.5)), url('https://static.pexels.com/photos/6548/cold-snow-winter-mountain.jpeg')","#1a619a","#f5f5f5","#2980b9"]});
localStorage.cObStyle = styles;
}
if (localStorage.getItem("cleared") === null) {
    localStorage.clear();
localStorage.cleared = 'Your browser localstorage has been cleared already';
location.reload();
}

$(document).ready(function(layoutKey){

var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });

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
//        containment: ".movableContener",
        axis: 'y',
        scrollSensitivity: 10,
        start: function (event, ui) {
//            var id_textarea = ui.item.find(".ckeditor").attr("id");
//            CKEDITOR.instances[id_textarea].destroy();
        },
        stop: function (event, ui) {
//            var id_textarea = ui.item.find(".ckeditor").attr("id");
//            CKEDITOR.inline(id_textarea);
                buildlayoutKey();
                refreshMenu();
        }
});
        
function load(){
    var targets = CKEDITOR.document.find( '.ckeditor' );
    
    for ( i = 0; i < targets.count(); i++ ){
        tar = targets.$[i].id;
            console.log(tar);
        CKEDITOR.inline( tar );
        if (localStorage.getItem(tar)) {
            data = localStorage.getItem(tar);
            CKEDITOR.instances[tar].setData( data, function()
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
            console.log(cElements);
            for (l = 0; l <= cElements[0].length - 1; l++) {          
            content = cElements[1][l];
            $( "#section-content" ).append( $( content ) );
        }
    }
    if (typeof localStorage["cObStyle"] === 'undefined' && localStorage["cObStyle"] !== null){
       
        }
        else{
            console.log(localStorage["cObStyle"]);
            var cObStyle = JSON.parse(localStorage["cObStyle"]);
            console.log(cObStyle);
            for (l = 0; l <= cObStyle[0].length - 1; l++) {          
            id = cObStyle[0][l];
            color = cObStyle[1][l];
            $("#sec-"+id+"").css('backgroundImage', color);
        }
    }
};


function deleteCustom(id){
    var cObElements = JSON.parse(localStorage["cObElements"]);
    console.log(cObElements);
    for(var key in cObElements[0])
    {
        if(cObElements[0][key] === id){
            console.log(key);
            delete cObElements[0].splice(key, 1);
            delete cObElements[1].splice(key, 1);
            console.log(localStorage["cObElements"]);
        }
    }
    localStorage.setItem('cObElements', JSON.stringify(cObElements));
    $( "#"+id+"" ).remove();
    for(name in CKEDITOR.instances)
    {
        CKEDITOR.instances[name].destroy(true);
    }
    refreshMenu();
    load();
}
loadCustom();
load();
refreshMenu();

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
    content_types: ['ckeditor']
});
$("#editElements").on('click','.delete', function() {
    id = $(this).attr('deleteid');
    console.log(id);
    deleteCustom(id);
    buildlayoutKey();
    refreshMenu();
    });
$(".default").click(function(){
    localStorage.removeItem("cObElements");
    $( ".movable" ).remove();
    closeEdit();
    reloadDefault();
    loadCustom();
    refreshCK();
    buildlayoutKey();
    refreshMenu();
    });
    
$("#editElements").on('click','.edit', function() {
    id = $(this).attr('editid');
    console.log(id);
    color = $("#sec-"+id+"").css('backgroundColor');
    console.log(color);
    $('<div id="editorr" elementid="'+id+'" style="width: 100%; height: 55%; background-color: #131313; display: none;">\n\
        <div id="edit-back" elementid="'+id+'" style="height: 30px;width: 25%;background-color: #1a1a1a;color: whitesmoke;text-align: center;">\n\
         <span style="line-height:2;" class="glyphicon glyphicon-ok" aria-hidden="true"></span>\n\
        </div class="form-group">\n\
        <div style="height: 100%;width: 100%;color: whitesmoke;text-align: center;">\n\
         <div>\n\
          <label for="colorpicker">Kolor tła:</label> <div id="cp2" class="input-group colorpicker-component"> <input id="colorpicker" type="text" value="'+color+'" class="form-control" /> <span class="input-group-addon"><i></i></span> </div>\n\
          <label for="img-url">Adres obrazu tła:</label> <input type="text" class="form-control" id="img-url"> \n\
         </div>\n\
        </div>\n\
       </div>').appendTo($('.navbar'));   
    id = $(this).attr('editid');
    var img = $("#sec-"+id+"").css('background-image');
    if (img !== 'none'){
        img = img.match(/url\(.*?\)/);
        img = img[0].replace('url("','').replace('")','');
        $("#img-url").val(img);
    }
    else{
        $("#img-url").val('Brak');
    };
    console.log(id);
    $src = $( ".hiding" );
    $tgt = $( "#editorr" );
    var $parent = $src.parent();
    var width = $parent.width();
    var srcWidth = $src.width();
    $src.css({position: 'absolute'});
    $tgt.hide().appendTo($parent).css({left: width, position: 'absolute'});
    
    $src.animate({left : -width}, 500, function(){
        $src.hide();
        $src.css({left: null, position: null});
    });
    $tgt.show().animate({left: 0}, 500, function(){
        $tgt.css({left: null, position: null});
    });
    $('html, body').animate({
    scrollTop: $("#"+id+"").offset().top -100
    }, 1000);
    $("#img-url").on("keyup", function() {
    img = $(this).val();
    console.log(img);
    color = $('#cp2').colorpicker('getValue');
    console.log(color);
    $("#sec-"+id+"").css('backgroundImage', 'linear-gradient(to bottom, '+color+', '+color+'), url("'+img+'")'); 
    }); 
    $('#cp2').colorpicker({ color: color, format: 'rgba' }).on('changeColor', function(e) {
        color = e.color.toString('rgba');
            $("#sec-"+id+"").css('backgroundImage', 'linear-gradient(to bottom, '+color+', '+color+'), url("'+img+'")'); 
    });
//    $('#colorpicker').val(color);
//    $( ".hiding" ).toggle("slide", {direction:'left'});
//    $( "#editorr" ).show("slide", {direction:'right'});
    }); 
function closeEdit(){
  $('#cp2').colorpicker('destroy');   
    $tgt = $( ".hiding" );
    $src = $( "#editorr" );
    var $parent = $src.parent();
    var width = $parent.width();
    var srcWidth = $src.width();
    $src.css({position: 'absolute'});
    $tgt.hide().appendTo($parent).css({left: width, position: 'absolute'});
    
    $src.animate({left : -width}, 500, function(){
        $src.hide();
        $src.css({left: null, position: null});
    });
    $tgt.show().animate({left: 0}, 500, function(){
        $tgt.css({left: null, position: null});
    }); 
    $('#editorr').delete;
};
var cObStyle = JSON.parse(localStorage["cObStyle"]);
    console.log(cObStyle);
$(document).on('click', '#edit-back', function(){ 
    id = $('#edit-back').attr('elementid');
    color = $("#sec-"+id+"").css('backgroundImage');
    var cObStyle = JSON.parse(localStorage["cObStyle"]);
    for(var key in cObStyle[0])
    {
        if(cObStyle[0][key] === id){
            console.log(key);
            delete cObStyle[0].splice(key, 1);
            delete cObStyle[1].splice(key, 1);
            console.log(localStorage["cObElements"]);
        }
    }
    console.log(cObStyle);
    cObStyle[0].push(id);
    cObStyle[1].push(color);
    console.log(cObStyle);
    localStorage.setItem('cObStyle', JSON.stringify(cObStyle));
    closeEdit();
//    $( ".hiding" ).toggle("slide", {direction:'left'});
//    $( "#editorr" ).show("slide", {direction:'right'});
    }); 


// Get resulting html
$("#add").click(function(ev){
    gridder = $('#myGrid').gridEditor('getHtml');
    name = document.getElementById('identity').value;
    id = name.replace(/\s+/g, '');
    content = "<tr class='movable' id='"+ id +"' name='"+ name +"'> <td> <section id='sec-"+ id +"' class='element contact'> <div class='handler'></div> <div class='container'>" + gridder + "</div> </section> </td> </tr>";
    $( "#section-content" ).append( $( content ) );
    $( "#aj-fill" ).append( $( '<li><a class="page-scroll capletter" href="#'+id+'">'+id+'</a></li>' ) );
    if(localStorage.getItem('cObElements') === null){
        cTabElementsID = [];
        cTabElementsContent = [];
        var cObElements = {
            0 : cTabElementsID,
            1 : cTabElementsContent
        };
        localStorage.setItem('cObElements', JSON.stringify(cObElements));
        var cObElements = JSON.parse(localStorage["cObElements"]);
        console.log(cObElements);
        cObElements[0].push(id);
        cObElements[1].push(content);
        localStorage.setItem('cObElements', JSON.stringify(cObElements));
    }
    else{
        var cObElements = JSON.parse(localStorage["cObElements"]);
        console.log(cObElements);
        cObElements[0].push(id);
        cObElements[1].push(content);
        localStorage.setItem('cObElements', JSON.stringify(cObElements));
    }
    refreshCK();
    buildlayoutKey();
    refreshMenu();
});
$(".i4").click(function(ev){
    $('#page-content-wrapper').unwrap();
    $('.todelete').remove();
    $('.handler').remove();
    $('.tounwrap').unwrap();
    $('.cke').remove();
    $('.cke_screen_reader_only').remove();
    var targets = CKEDITOR.document.find( '.ckeditor' );   
    for ( i = 0; i < targets.count(); i++ ){
        tar = targets.$[i].id;
        data = CKEDITOR.instances[tar].getData();
        container = $('#'+tar+'').parent();
        container.empty();
        container.prepend(data);
    }
    body = $("body").html();
    console.log(body);
	$.ajax({
		url: 'ajax/save.php',
		data: {body:body},
		type: 'POST',
		success: function(){
		}
	});
});
}); 





