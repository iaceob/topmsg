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
;(function(b){var a="top_msg";b[a]=function(j,g,i){var c={background:"#de4343",bordercolor:"#fff",color:"#000",height:70,fontsize:20,close:3000,click:false,domid:"JQ_TOP_MSG",msg:j?j:""};if(g){c.background="#48bb5e"}if(i?i.click:false){c.click=true}var k=b.extend(c,i);var h=" width: 100%;position: fixed;height: "+k.height+"px;top: 0px;left: 0px;right: 0px;margin: 0px;display: none; z-index: 99999";var f="height: "+k.height+"px;background-color: "+k.background+";border: solid 1px "+k.bordercolor+";";var d=" width: 100%;position: absolute;height: "+k.height+"px;top: 0px;left: 0px;right: 0px;margin: 0px;color: "+k.color+";font-weight: bold;font-size: "+k.fontsize+"px;text-align: center;padding: 10px 0px";var e='<div id="'+k.domid+'" style="'+h+'"><div style="'+f+'">&nbsp;</div><div style="'+d+'">'+k.msg+"</div></div>";if(b("#"+k.domid).length>0){b("#"+k.domid).hide();b("#"+k.domid).slideUp(200,function(){b("#"+k.domid).remove()})}if(k.click){b(e).click(function(){b(this).slideUp(200,function(){b(this).remove()})}).appendTo(b("body")).slideDown(200)}else{b(e).appendTo(b("body")).slideDown(200).delay(k.close).slideUp(200,function(){b(this).remove()})}};b.extend(b[a],{version:1,TYPE_ERROR:0,TYPE_OK:1})})(jQuery);

