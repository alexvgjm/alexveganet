var S=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,W=/\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\b/g,b=/[^-+\dA-Z]/g;function C(r,e,a,m){if(arguments.length===1&&typeof r=="string"&&!/\d/.test(r)&&(e=r,r=void 0),r=r||r===0?r:new Date,r instanceof Date||(r=new Date(r)),isNaN(r))throw TypeError("Invalid date");e=String(_[e]||e||_.default);var d=e.slice(0,4);(d==="UTC:"||d==="GMT:")&&(e=e.slice(4),a=!0,d==="GMT:"&&(m=!0));var n=function(){return a?"getUTC":"get"},y=function(){return r[n()+"Date"]()},M=function(){return r[n()+"Day"]()},s=function(){return r[n()+"Month"]()},f=function(){return r[n()+"FullYear"]()},u=function(){return r[n()+"Hours"]()},c=function(){return r[n()+"Minutes"]()},v=function(){return r[n()+"Seconds"]()},T=function(){return r[n()+"Milliseconds"]()},D=function(){return a?0:r.getTimezoneOffset()},g=function(){return F(r)},N=function(){return A(r)},h={d:function(){return y()},dd:function(){return i(y())},ddd:function(){return o.dayNames[M()]},DDD:function(){return p({y:f(),m:s(),d:y(),_:n(),dayName:o.dayNames[M()],short:!0})},dddd:function(){return o.dayNames[M()+7]},DDDD:function(){return p({y:f(),m:s(),d:y(),_:n(),dayName:o.dayNames[M()+7]})},m:function(){return s()+1},mm:function(){return i(s()+1)},mmm:function(){return o.monthNames[s()]},mmmm:function(){return o.monthNames[s()+12]},yy:function(){return String(f()).slice(2)},yyyy:function(){return i(f(),4)},h:function(){return u()%12||12},hh:function(){return i(u()%12||12)},H:function(){return u()},HH:function(){return i(u())},M:function(){return c()},MM:function(){return i(c())},s:function(){return v()},ss:function(){return i(v())},l:function(){return i(T(),3)},L:function(){return i(Math.floor(T()/10))},t:function(){return u()<12?o.timeNames[0]:o.timeNames[1]},tt:function(){return u()<12?o.timeNames[2]:o.timeNames[3]},T:function(){return u()<12?o.timeNames[4]:o.timeNames[5]},TT:function(){return u()<12?o.timeNames[6]:o.timeNames[7]},Z:function(){return m?"GMT":a?"UTC":Z(r)},o:function(){return(D()>0?"-":"+")+i(Math.floor(Math.abs(D())/60)*100+Math.abs(D())%60,4)},p:function(){return(D()>0?"-":"+")+i(Math.floor(Math.abs(D())/60),2)+":"+i(Math.floor(Math.abs(D())%60),2)},S:function(){return["th","st","nd","rd"][y()%10>3?0:(y()%100-y()%10!=10)*y()%10]},W:function(){return g()},WW:function(){return i(g())},N:function(){return N()}};return e.replace(S,function(t){return t in h?h[t]():t.slice(1,t.length-1)})}var _={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},o={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},i=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;return String(e).padStart(a,"0")},p=function(e){var a=e.y,m=e.m,d=e.d,n=e._,y=e.dayName,M=e.short,s=M===void 0?!1:M,f=new Date,u=new Date;u.setDate(u[n+"Date"]()-1);var c=new Date;c.setDate(c[n+"Date"]()+1);var v=function(){return f[n+"Date"]()},T=function(){return f[n+"Month"]()},D=function(){return f[n+"FullYear"]()},g=function(){return u[n+"Date"]()},N=function(){return u[n+"Month"]()},h=function(){return u[n+"FullYear"]()},t=function(){return c[n+"Date"]()},H=function(){return c[n+"Month"]()},w=function(){return c[n+"FullYear"]()};return D()===a&&T()===m&&v()===d?s?"Tdy":"Today":h()===a&&N()===m&&g()===d?s?"Ysd":"Yesterday":w()===a&&H()===m&&t()===d?s?"Tmw":"Tomorrow":y},F=function(e){var a=new Date(e.getFullYear(),e.getMonth(),e.getDate());a.setDate(a.getDate()-(a.getDay()+6)%7+3);var m=new Date(a.getFullYear(),0,4);m.setDate(m.getDate()-(m.getDay()+6)%7+3);var d=a.getTimezoneOffset()-m.getTimezoneOffset();a.setHours(a.getHours()-d);var n=(a-m)/(864e5*7);return 1+Math.floor(n)},A=function(e){var a=e.getDay();return a===0&&(a=7),a},Z=function(e){return(String(e).match(W)||[""]).pop().replace(b,"").replace(/GMT\+0000/g,"UTC")};export{C as d,o as i};
