//CKEDITOR.disableAutoInline = true;
//
//function attachEditorToElement( element ) {
//      element.once( 'click', function() {
//        if ( element.getEditor() )
//                return;
//
//        element.setAttribute( 'contenteditable', true );
//
//        CKEDITOR.inline( element, {
//            plugins: 'floatingspace,toolbar,basicstyles',
//            on: {
//                instanceReady: function() {
//                    // Focus the instance immediately.
//                    this.focus();
//                },
//                blur: function() {
//                    var el = this.element;
//                    el.removeAttribute( 'contenteditable' );
//
//                    this.destroy();
//
//                    attachEditorToElement( el );
//                }
//            }
//        } );
//    } );
//}
//
//var divs = CKEDITOR.document.find( 'p.editable' );
//
//// Create editor instances when div is clicked.
//for ( var i = divs.count(); i--; )
//    attachEditorToElement( divs.getItem( i ) );
    CKEDITOR.disableAutoInline = true;