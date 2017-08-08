/*
	Creator: Alexandre Le Goff 
	Name: UX Lib
	Date: 05/17
	Version: 0.0.1
*/
var GNRL = GNRL || {};


//Ajax
GNRL.LaunchServicesManager = function($type, $dataToSend, $serviceName, $callback, $errorCallback, $bCallback){
    var _serviceName,
        _postPetition,
        type,
        _dataToSend;
    _dataToSend = $dataToSend;
    _serviceName = $serviceName;
    if (_postPetition) {
        _postPetition.abort();
        _postPetition = null;
    }
    if($type){
        type = $type;
    } else {
        type = 'POST';
    }    
    _postPetition = $.ajax({
        url:_serviceName,
        type: type,
        data:_dataToSend,
        dataType: 'json',
        beforeSend: function() {
            if (typeof $bCallback === 'function') {
                $bCallback();
            }  
        },
        success: function($data) {
            if (typeof $callback === 'function') {
                $callback($data);
            }
        },
        error: function(jqXHR, $textStatus, $errorThrown) {
            if (typeof $errorCallback === 'function') {
                $errorCallback($errorThrown , jqXHR);
            }
        }/*, 
        complete: function(){
            PRING.PreloaderAnimation.stopAnim();
        }*/
    });
};
//Ligthbox
GNRL.callLigthbox = function($html, $btnClose, $callbackClose){
    var modal = '<div class="modal">';
        if( $btnClose ){
            modal += '<div class="close_modal">X</div>';
        }
            modal += '<div class="lb_cont">';
                modal += $html;
            modal += '</div>';
        modal += '</div>';
    $('.modal, .close_modal').bind('click', function($evt){
        $evt.preventDefault();
        if ( typeof $callbackClose === 'function' ) {
            $callbackClose();
        }else{
            $('.modal').fadeOut(500);
            $('.modal').delay(500).remove();
        }
    });
}
//Carousel
GNRL.callCarousel = function(){
}
//Opacity Carousel
GNRL.callOpacityCarousel = function(){
}
//Accordion
GNRL.callAccordion = function(){
}
//Parallax
GNRL.callParallax = function(){
}
//Loader
GNRL.callLoader = function(){
}
//Counter
GNRL.callCounter = function(){
}
//Hover Tooltip
GNRL.callTooltip = function(){
}
//Hover Zoom
GNRL.callImgZoom = function(){
}