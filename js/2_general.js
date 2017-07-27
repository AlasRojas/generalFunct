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
function callLigthbox(){}
//Carousel
function callCarousel(){}
//Opacity Carousel
function callOpacityCarousel(){}
//Accordion
function callAccordion(){}
//Parallax
function callParallax(){}
//Loader
function callLoader(){}
//Counter
function callCounter(){}
//Hover Tooltip
function callTooltip(){}
//Hover Zoom
function callImgZoom(){}