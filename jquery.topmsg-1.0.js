/**
 * Copyright 2014 iaceob 
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *    http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

;(function($) {
    var pluginName = "top_msg";
    $[pluginName] = function(message, type, arg) {
        var defaults = {
            background:"#de4343",
            bordercolor:"#fff",
            color:"#000",
            height:70,
            fontsize:20,
            close:3e3,
            click: false,
            domid:"JQ_TOP_MSG",
            msg:message ? message :""
        };
        if (type) {
            defaults.background = "#48bb5e";
        }
        if ( arg.click ) {
        	defaults.click = true;
        }
        var options = $.extend(defaults, arg);
        var barStyle = " width: 100%;position: fixed;height: " + options.height + "px;top: 0px;left: 0px;right: 0px;margin: 0px;display: none; z-index: 99999";
        var overlayStyle = "height: " + options.height + "px;background-color: " + options.background + ";border: solid 1px " + options.bordercolor + ";";
        var messageStyle = " width: 100%;position: absolute;height: " + options.height + "px;top: 0px;left: 0px;right: 0px;margin: 0px;color: " + options.color + ";font-weight: bold;font-size: " + options.fontsize + "px;text-align: center;padding: 10px 0px";
        var html = '<div id="' + options.domid + '" style="' + barStyle + '"><div style="' + overlayStyle + '">&nbsp;</div><div style="' + messageStyle + '">' + options.msg + "</div></div>";
        if ($("#" + options.domid).length > 0) {
            // Hide already existing bars
            $("#" + options.domid).hide();
            $("#" + options.domid).slideUp(200, function() {
                $("#" + options.domid).remove();
            });
        }
        if ( options.click ) {
            $(html).click(function() {
                $(this).slideUp(200, function() {
                    $(this).remove();
                });
            }).appendTo($("body")).slideDown(200);
        } else {
            $(html).appendTo($("body")).slideDown(200).delay(options.close).slideUp(200, function() {
                $(this).remove();
            });
        }
    };
    $.extend($[pluginName], {
        version:1.0,
        TYPE_ERROR:0,
        TYPE_OK:1
    });
})(jQuery);
