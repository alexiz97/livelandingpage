$(document).ready(function() {
    getdata();
    $( "#content" ).sortable();
    $( "#content" ).disableSelection();
  } );
function getdata() {
	$.ajax({
	 type: "POST",
	 url: "ajax/init.php",
	 success: function(data){
		 $('#content').html(data);
	 }
 });
}