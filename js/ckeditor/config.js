/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config )
{
config.contentsCss = 'js/ckeditor/customfonts/fonts.css';
config.font_names = 'Montserrat Regular/MontserratRegular;Istok Web Regular/IstokWebRegular;' + config.font_names;
config.extraPlugins = 'fontawesome';
config.contentsCss = 'js\ckeditor\plugins\fontawesome\font-awesome\css\font-awesome.min.css';
config.allowedContent = true; 
config.removePlugins = 'uploadimage';
};
