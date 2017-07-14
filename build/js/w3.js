"use strict";var w3={};w3.hide=function(e){w3.hideElements(w3.getElements(e))},w3.hideElements=function(e){var t,n=e.length;for(t=0;t<n;t++)w3.hideElement(e[t])},w3.hideElement=function(e){w3.styleElement(e,"display","none")},w3.show=function(e,t){var n=w3.getElements(e);t&&w3.hideElements(n),w3.showElements(n)},w3.showElements=function(e){var t,n=e.length;for(t=0;t<n;t++)w3.showElement(e[t])},w3.showElement=function(e){w3.styleElement(e,"display","block")},w3.addStyle=function(e,t,n){w3.styleElements(w3.getElements(e),t,n)},w3.styleElements=function(e,t,n){var s,l=e.length;for(s=0;s<l;s++)w3.styleElement(e[s],t,n)},w3.styleElement=function(e,t,n){e.style.setProperty(t,n)},w3.toggleShow=function(e){var t,n=w3.getElements(e),s=n.length;for(t=0;t<s;t++)"none"==n[t].style.display?w3.styleElement(n[t],"display","block"):w3.styleElement(n[t],"display","none")},w3.addClass=function(e,t){w3.addClassElements(w3.getElements(e),t)},w3.addClassElements=function(e,t){var n,s=e.length;for(n=0;n<s;n++)w3.addClassElement(e[n],t)},w3.addClassElement=function(e,t){var n,s,l;for(s=e.className.split(" "),l=t.split(" "),n=0;n<l.length;n++)-1==s.indexOf(l[n])&&(e.className+=" "+l[n])},w3.removeClass=function(e,t){w3.removeClassElements(w3.getElements(e),t)},w3.removeClassElements=function(e,t){var n,s=e.length;for(n=0;n<s;n++)w3.removeClassElement(e[n],t)},w3.removeClassElement=function(e,t){var n,s,l;for(s=e.className.split(" "),l=t.split(" "),n=0;n<l.length;n++)for(;s.indexOf(l[n])>-1;)s.splice(s.indexOf(l[n]),1);e.className=s.join(" ")},w3.toggleClass=function(e,t,n){w3.toggleClassElements(w3.getElements(e),t,n)},w3.toggleClassElements=function(e,t,n){var s,l=e.length;for(s=0;s<l;s++)w3.toggleClassElement(e[s],t,n)},w3.toggleClassElement=function(e,t,n){var s,l,r,o,a,i,c;if(s=t||"",l=n||"",r=s.split(" "),o=l.split(" "),i=e.className.split(" "),0==o.length){for(c=!0,a=0;a<r.length;a++)-1==i.indexOf(r[a])&&(c=!1);c?w3.removeClassElement(e,s):w3.addClassElement(e,s)}else{for(c=!0,a=0;a<r.length;a++)-1==i.indexOf(r[a])&&(c=!1);c?(w3.removeClassElement(e,s),w3.addClassElement(e,l)):(w3.removeClassElement(e,l),w3.addClassElement(e,s))}},w3.getElements=function(e){return"object"==typeof e?[e]:document.querySelectorAll(e)},w3.filterHTML=function(e,t,n){var s,l,r,o,a,i,c;for(s=w3.getElements(e),o=0;o<s.length;o++)for(l=w3.getElements(t),a=0;a<l.length;a++){for(c=0,l[a].innerHTML.toUpperCase().indexOf(n.toUpperCase())>-1&&(c=1),r=l[a].getElementsByTagName("*"),i=0;i<r.length;i++)r[i].innerHTML.toUpperCase().indexOf(n.toUpperCase())>-1&&(c=1);l[a].style.display=1==c?"":"none"}},w3.sortHTML=function(e,t,n){var s,l,r,o,a,i,c,u,w,d;for(s=w3.getElements(e),r=0;r<s.length;r++)for(d=0;d<2;d++){for(w=0,a=1;1==a;){for(a=0,l=s[r].querySelectorAll(t),o=0;o<l.length-1;o++)if(i=0,n?(c=l[o].querySelector(n).innerHTML.toLowerCase(),u=l[o+1].querySelector(n).innerHTML.toLowerCase()):(c=l[o].innerHTML.toLowerCase(),u=l[o+1].innerHTML.toLowerCase()),0==d&&c>u||1==d&&c<u){i=1;break}1==i&&(l[o].parentNode.insertBefore(l[o+1],l[o]),a=1,w++)}if(w>0)break}},w3.slideshow=function(e,t,n){var s,l=w3.getElements(e);l.length;return s={},s.current=1,s.x=l,s.ondisplaychange=n,isNaN(t)&&0!=t?s.milliseconds=1e3:s.milliseconds=t,s.start=function(){s.display(s.current),s.ondisplaychange&&s.ondisplaychange(),s.milliseconds>0&&(window.clearTimeout(s.timeout),s.timeout=window.setTimeout(s.next,s.milliseconds))},s.next=function(){s.current+=1,s.current>s.x.length&&(s.current=1),s.start()},s.previous=function(){s.current-=1,s.current<1&&(s.current=s.x.length),s.start()},s.display=function(e){w3.styleElements(s.x,"display","none"),w3.styleElement(s.x[e-1],"display","block")},s.start(),s},w3.includeHTML=function(e){var t,n,s,l,r;for(t=document.getElementsByTagName("*"),n=0;n<t.length;n++)if(s=t[n],l=s.getAttribute("w3-include-html"))return r=new XMLHttpRequest,r.onreadystatechange=function(){4==this.readyState&&200==this.status&&(s.innerHTML=this.responseText,s.removeAttribute("w3-include-html"),w3.includeHTML(e))},r.open("GET",l,!0),void r.send();e&&e()},w3.getHttpData=function(e,t){w3.http(e,function(){4==this.readyState&&200==this.status&&t(this.responseText)})},w3.getHttpObject=function(e,t){w3.http(e,function(){4==this.readyState&&200==this.status&&t(JSON.parse(this.responseText))})},w3.displayHttp=function(e,t){w3.http(t,function(){4==this.readyState&&200==this.status&&w3.displayObject(e,JSON.parse(this.responseText))})},w3.http=function(e,t,n,s){var l;s||(s="GET"),window.XMLHttpRequest?l=new XMLHttpRequest:window.ActiveXObject&&(l=new ActiveXObject("Microsoft.XMLHTTP")),l&&(t&&(l.onreadystatechange=t),l.open(s,e,!0),l.send(n))},w3.getElementsByAttribute=function(e,t){var n,s,l=[],r=-1,o=e.getElementsByTagName("*"),a=t.toUpperCase();for(s=o.length,n=-1;n<s;n+=1)-1==n&&(o[n]=e),null!==o[n].getAttribute(a)&&(l[r+=1]=o[n]);return l},w3.dataObject={},w3.displayObject=function(e,t){function n(e,n,l,r){var o,a,i,c,u,w,d,m,f,g=[];for(a=e.cloneNode(!0),i=0;i>-1&&(u="attribute"==n?a.value:a.innerHTML,-1!==(i=u.indexOf("{{",i)));){for(c=u.indexOf("}}",i+1),g=(w=u.substring(i+2,c)).split("||"),o=void 0,d=0;d<g.length&&(g[d]=g[d].replace(/^\s+|\s+$/gm,""),r&&(o=r[g[d]]),void 0==o&&t&&(o=t[g[d]]),void 0==o&&(m=g[d].split("."))[0]==l&&(o=r[m[1]]),void 0==o&&g[d]==l&&(o=r),void 0==o&&('"'==g[d].substr(0,1)?o=g[d].replace(/"/g,""):"'"==g[d].substr(0,1)&&(o=g[d].replace(/'/g,""))),void 0==o);d+=1);void 0!=o&&(f="{{"+w+"}}","attribute"==n?a.value=a.value.replace(f,o):s(a,f,o)),i+=1}return a}function s(e,t,n){var s,l,r,e;if(e.hasAttributes())for(l=(s=e.attributes).length,r=0;r<l;r+=1)s[r].value.indexOf(t)>-1&&(s[r].value=s[r].value.replace(t,n));l=e.getElementsByTagName("*").length,e.innerHTML=e.innerHTML.replace(t,n)}var l,r,o,a,i,c,u,w,d,m,f,g=[],p="";for(r=function(e,t){var n;return n=t.cloneNode(!0),w3.dataObject.hasOwnProperty(e)?w3.dataObject[e]:(w3.dataObject[e]=n,n)}(e,l=document.getElementById(e)).cloneNode(!0),c=(g=w3.getElementsByAttribute(r,"w3-repeat")).length-1;c>=0;c-=1)if(1==(d=g[c].getAttribute("w3-repeat").split(" ")).length?m=d[0]:(p=d[0],m=d[2]),g[c].removeAttribute("w3-repeat"),(f=t[m])&&"object"==typeof f&&"undefined"!=f.length){u=0;for(i in f){for(u+=1,o=(a=n(a=g[c],"element",p,f[i])).attributes,w=0;w<o.length;w+=1)o[w].value=n(o[w],"attribute",p,f[i]).value;u===f.length?g[c].parentNode.replaceChild(a,g[c]):g[c].parentNode.insertBefore(a,g[c])}}else console.log("w3-repeat must be an array. "+m+" is not an array.");r=n(r,"element"),l.parentNode.replaceChild(r,l)};