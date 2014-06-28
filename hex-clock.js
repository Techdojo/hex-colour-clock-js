function Hex_Clock(){
    "use strict";

    var _element = null,
        _body = document.getElementsByTagName('body')[0],
        exports = {};

    function _render_time(){
        var html = [],
            date = new Date(),
            hour = (date.getHours() <= 9) ? '0' + date.getHours() : date.getHours(),
            mins = (date.getMinutes() <= 9) ? '0' + date.getMinutes() : date.getMinutes(),
            seconds = (date.getSeconds() <= 9) ? '0' + date.getSeconds() : date.getSeconds(),
            hex = '#' + hour + mins + seconds;

        _body.style.backgroundColor = hex;

        html.push('<div id="hex-clock-time" class="hex-clock-colour">');
        html.push('<span class="hex-symbol">#</span>');
        html.push('<span class="hex-section hex-hours">' + hour + '</span>');
        html.push('<span class="hex-section hex-mins">' + mins + '</span>');
        html.push('<span class="hex-section hex-seconds">' + seconds + '</span>');
        html.push('</div>');
        html.push('<div id="hex-clock-colour" class="hex-clock-time">' + (hour + ':' + mins + ':' + seconds) + '</div>');

        _element.innerHTML = html.join('');
        setTimeout(_render_time, 1000);
    };

    function _add_class_to_wrap_element(){
        _element.className += _element.className ? ' hex-clock-wrap' : 'hex-clock-wrap';
    };

    exports.init = function(element){
        _element = element
        _add_class_to_wrap_element();
        _render_time();
    };

    return exports;
}

document.addEventListener('DOMContentLoaded', function(){
    Hex_Clock().init(document.getElementById('hex-clock-wrap'));
}, false);