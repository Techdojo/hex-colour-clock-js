function Hex_Clock(config){
    "use strict";

    var _config = {},
        exports = {},
        _body = document.getElementsByTagName('body')[0];

    _config = {
        element: config.element,
        render_time: ((config.render_time !== undefined) ? config.render_time : true )
    }

    function _render_time(){
        var html = [],
            date = new Date(),
            hour = (date.getHours() <= 9) ? '0' + date.getHours() : date.getHours(),
            mins = (date.getMinutes() <= 9) ? '0' + date.getMinutes() : date.getMinutes(),
            seconds = (date.getSeconds() <= 9) ? '0' + date.getSeconds() : date.getSeconds(),
            hex = '#' + hour + mins + seconds;

        html.push('<div id="hex-clock-time" class="hex-clock-colour">');
        html.push('<span class="hex-symbol">#</span>');
        html.push('<span class="hex-section hex-hours">' + hour + '</span>');
        html.push('<span class="hex-section hex-mins">' + mins + '</span>');
        html.push('<span class="hex-section hex-seconds">' + seconds + '</span>');
        html.push('</div>');

        if(_config.render_time){
            html.push('<div id="hex-clock-colour" class="hex-clock-time">' + (hour + ':' + mins + ':' + seconds) + '</div>');
        }

        _config.element.innerHTML = html.join('');
        _body.style.backgroundColor = hex;

        setTimeout(_render_time, 1000);
    };

    function _add_class_to_wrap_element(){
        _config.element.className += _config.element.className ? ' hex-clock-wrap' : 'hex-clock-wrap';
    };

    exports.init = function(){

        console.log('internal config', _config);

        _add_class_to_wrap_element();
        _render_time();
    };

    return exports;
}

document.addEventListener('DOMContentLoaded', function(){
    Hex_Clock({
        element: document.getElementById('hex-clock-wrap')
    }).init();
}, false);