//=include partials/functions.js
var CF = CF || {};

(function($){

    'use strict';

    CF.initialize = {
        init: function(){
            CF.widgets.init();
            CF.documentOnLoad.init();
            CF.documentOnResize.init();
        }
    };

    CF.widgets = {
        init: function(){
            CF.widgets.detectBrowsers();
        },
        detectBrowsers: function(){
            var user = detect.parse(navigator.userAgent);
            $h.addClass(user.browser.family);
            $h.addClass("v"+user.browser.version);
        }
    };

    CF.documentOnReady = {
        init: function() {
            CF.initialize.init();
            CF.documentOnReady.onReady();
        },
        onReady: function() {

        }
    };

    CF.documentOnLoad = {
        init: function() {
            $w.on('load', function(){

            });
        }
    };

    CF.documentOnResize = {
        init: function() {
            $w.resize(function() {

            });
        }
    };

    var $w = $(window),
        $d = $(document),
        $h = $('html'),
        $b = $('body');

    $d.ready(CF.documentOnReady.init());

})(jQuery);


// var RECAPTCHA_ERRORS = {
//   'missing-input-secret':	'The secret parameter is missing.',
//   'invalid-input-secret':	'The secret parameter is invalid or malformed.',
//   'missing-input-response':	'The response parameter is missing.',
//   'invalid-input-response':	'The response parameter is invalid or malformed.',
//   'bad-request':	'The request is invalid or malformed.',
//   'timeout-or-duplicate':	'The response is no longer valid: either is too old or has been used previously.'
// }
//
// $(document).on('submit', '.contact-section form', function(e) {
//   $('.g-recaptcha-errors').html('')
//   $.post('https://111montgomery.nyc/recaptcha', { response: $('.contact-section form textarea.g-recaptcha-response').val() })
//   .then(function(response){
//     console.log(response)
//     if(response.success)
//       $('.contact-section form').get(0).submit()
//     else{
//       response['error-codes'].forEach(function(elm){
//         $('.g-recaptcha-errors').append(RECAPTCHA_ERRORS[elm] + '<br/>')
//       })
//       return false
//     }
//   })
//   return false
// })

