import{_ as ht}from"../chunks/preload-helper.D6kgxu3v.js";import{s as Q,n as P,o as ce,x as ze,b as N,d as ft,y as ke,u as mt,g as dt,e as gt,r as pt,z as _t}from"../chunks/scheduler.CaHUfm9I.js";import{S as J,i as K,e as E,c as b,y as B,o as f,g as v,d as h,t as R,s as C,a as $,b as F,f as O,h as g,j as ct,z as Xe,H as vt,A as $t,B as ie,n as T,l as D,C as L,D as q,p as se,u as A,v as M,w as I,x as H,E as nt}from"../chunks/index.B8kFTOav.js";function Ce(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Et(n){let e,t=`<h1 class="hero__title svelte-1lsr2wm">Álex Vega</h1> <h2 class="hero__subtitle svelte-1lsr2wm">Formación y consultoría</h2> <p class="hero__description svelte-1lsr2wm"><strong>Desarrollo web</strong>, 
        <strong>ingeniería de software</strong> y <strong>sistemas de información</strong></p>`;return{c(){e=E("section"),e.innerHTML=t,this.h()},l(s){e=b(s,"SECTION",{class:!0,"data-svelte-h":!0}),B(e)!=="svelte-1grp135"&&(e.innerHTML=t),this.h()},h(){f(e,"class","hero svelte-1lsr2wm")},m(s,o){v(s,e,o)},p:P,i:P,o:P,d(s){s&&h(e)}}}class bt extends J{constructor(e){super(),K(this,e,null,Et,Q,{})}}const ye=[],xt={trigger:"Element top reach screen percent",triggerScreenPercent:.8,initialOffset:0,minOffset:0,length:0};function ut(){ye.forEach(n=>{window.removeEventListener("scroll",n)})}function yt(n,e,t=0){let o=(+n.style.strokeDashoffset.replace("px","")-t)/(e-t);return 1-je(o,0,1)}function Ct(n){let e;typeof n.selectorOrPaths=="string"?e=document.querySelector(n.selectorOrPaths):e=n.selectorOrPaths;let t;typeof n.refElementSelectorOrPath=="string"?t=document.querySelector(n.refElementSelectorOrPath):t=n.refElementSelectorOrPath;const s=Math.ceil(+e.getTotalLength());e.style.strokeDasharray=s.toFixed(),n.length&&(e.style.strokeDasharray=`${n.length} ${s}`);const o=n.endDashOffset,a=n.startDashOffset;return()=>{const l=yt(t,o,a);let i=Math.max(n.minOffset,s*l+n.initialOffset);e.style.strokeDashoffset=i.toFixed(3)}}function Ot(n){let e=[];typeof n.selectorOrPaths=="string"?e=document.querySelectorAll(n.selectorOrPaths):Array.isArray(n.selectorOrPaths)||(e=[n.selectorOrPaths]);for(const s of e){const o=Math.ceil(+s.getTotalLength());s.style.strokeDasharray=o.toFixed(),n.length&&(s.style.strokeDasharray=`${n.length} ${o}`)}return()=>{for(let s of e){const o=Math.ceil(+s.getTotalLength()),a=s.getBoundingClientRect(),l=scrollY+a.top,i=scrollY+a.bottom,r=scrollY+window.innerHeight*n.triggerScreenPercent;let c=r-l,u=i-l,m;if(n.endLimit=="Trigger reach element bottom")m=1-je(c/u,0,1);else{const _=scrollY+window.innerHeight*n.endPercent;let y=r-_,w=i-_;const S=je(c/y,0,1),k=1-je(w/u,0,1);m=1-(S*.5+k*.5)}let p=Math.max(n.minOffset,o*m+n.initialOffset);s.style.strokeDashoffset=p.toFixed(3)}}}function V(n){const e={...xt,...n};if(Array.isArray(e.selectorOrPaths)){e.selectorOrPaths.forEach(s=>V({...e,selectorOrPaths:s}));return}let t;e.trigger=="Element top reach screen percent"?(t=Ot(e),ye.push(t),window.addEventListener("scroll",t),t()):(t=Ct(e),ye.push(t),window.addEventListener("scroll",t),t())}function Ye(n){const e=Array.isArray(n.selectorOrElements)?n.selectorOrElements:document.querySelectorAll(n.selectorOrElements),t=n.onLoad;t!==void 0&&e.forEach(s=>{const o=scrollY+window.innerHeight*n.screenPercent;t(s,o)}),e.forEach(s=>{let o=!1;const a=()=>{const l=scrollY+window.innerHeight*n.screenPercent,i=s.getBoundingClientRect(),r=scrollY+i.top,c=l>=r,u=c!=o;o=c,u&&(c&&n.onDown?(n.onDown(s,l),n.removeAfterOnDown&&(removeEventListener("scroll",a),ye.splice(ye.indexOf(a),1))):n.onUp&&n.onUp(s,l))};addEventListener("scroll",a),ye.push(a)})}function Ve(n){const e=Array.isArray(n.classes)?n.classes:[n.classes];Ye({selectorOrElements:n.selectorOrElements,screenPercent:n.screenPercent,onDown:t=>{t.classList.remove(...e)},onLoad:n.addClassesOnLoad?t=>{t.classList.add(...e)}:void 0,removeAfterOnDown:n.oneTime})}function Qe(n){const e=Array.isArray(n.classes)?n.classes:[n.classes];let t=n.elseClasses??[];t=Array.isArray(t)?t:[t];const s=a=>{a.classList.remove(...t),a.classList.add(...e)},o=a=>{n.elseClasses&&a.classList.add(...t)};Ye({selectorOrElements:n.selectorOrElements,screenPercent:n.screenPercent,onDown:s,onLoad:o,onUp:o})}function je(n,e,t){return Math.max(e,Math.min(t,n))}const wt=Object.freeze(Object.defineProperty({__proto__:null,clearScrollDrawListeners:ut,removeClasses:Ve,scrollDraw:V,scrollTrigger:Ye,setClasses:Qe},Symbol.toStringTag,{value:"Module"}));function st(n,e,t){const s=n.slice();return s[6]=e[t],s[7]=e,s[8]=t,s}function at(n){let e,t,s=n[6].replace("*","")+"",o,a=n[8];const l=()=>n[5](e,a),i=()=>n[5](null,a);return{c(){e=E("li"),t=new vt(!1),o=C(),this.h()},l(r){e=b(r,"LI",{class:!0});var c=$(e);t=$t(c,!1),o=O(c),c.forEach(h),this.h()},h(){t.a=o,f(e,"class","skills-list__item svelte-1ukjcp5"),ie(e,"skills-list__item--expertise",n[6][0]=="*")},m(r,c){v(r,e,c),t.m(s,e),g(e,o),l()},p(r,c){n=r,c&2&&s!==(s=n[6].replace("*","")+"")&&t.p(s),a!==n[8]&&(i(),a=n[8],l()),c&2&&ie(e,"skills-list__item--expertise",n[6][0]=="*")},d(r){r&&h(e),i()}}}function St(n){let e,t,s,o,a,l=Ce(n[1]),i=[];for(let r=0;r<l.length;r+=1)i[r]=at(st(n,l,r));return{c(){e=E("section"),t=E("h1"),s=R(n[0]),o=C(),a=E("ul");for(let r=0;r<i.length;r+=1)i[r].c();this.h()},l(r){e=b(r,"SECTION",{class:!0});var c=$(e);t=b(c,"H1",{class:!0});var u=$(t);s=F(u,n[0]),u.forEach(h),o=O(c),a=b(c,"UL",{class:!0});var m=$(a);for(let p=0;p<i.length;p+=1)i[p].l(m);m.forEach(h),c.forEach(h),this.h()},h(){f(t,"class","skills-list__title svelte-1ukjcp5"),f(a,"class","svelte-1ukjcp5"),f(e,"class","skills-list svelte-1ukjcp5")},m(r,c){v(r,e,c),g(e,t),g(t,s),n[4](t),g(e,o),g(e,a);for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(a,null)},p(r,[c]){if(c&1&&ct(s,r[0]),c&6){l=Ce(r[1]);let u;for(u=0;u<l.length;u+=1){const m=st(r,l,u);i[u]?i[u].p(m,c):(i[u]=at(m),i[u].c(),i[u].m(a,null))}for(;u<i.length;u+=1)i[u].d(1);i.length=l.length}},i:P,o:P,d(r){r&&h(e),n[4](null),Xe(i,r)}}}function Pt(n,e,t){let{title:s}=e,{skills:o}=e,a=[],l;ce(()=>{Ve({selectorOrElements:a,classes:["skills-list__item--hidden"],screenPercent:1,addClassesOnLoad:!0,oneTime:!0}),Ve({selectorOrElements:[l],classes:["skills-list__title--hidden"],screenPercent:1,addClassesOnLoad:!0,oneTime:!0})}),ze(()=>{ut()});function i(c){N[c?"unshift":"push"](()=>{l=c,t(3,l)})}function r(c,u){N[c?"unshift":"push"](()=>{a[u]=c,t(2,a)})}return n.$$set=c=>{"title"in c&&t(0,s=c.title),"skills"in c&&t(1,o=c.skills)},[s,o,a,l,i,r]}class we extends J{constructor(e){super(),K(this,e,Pt,St,Q,{title:0,skills:1})}}function Lt(n){let e,t,s,o,a,l,i,r,c,u;const m=n[5].default,p=ft(m,n,n[4],null);return{c(){e=E("article"),t=E("img"),a=C(),l=E("h1"),i=R(n[0]),r=C(),c=E("p"),p&&p.c(),this.h()},l(_){e=b(_,"ARTICLE",{class:!0});var y=$(e);t=b(y,"IMG",{class:!0,src:!0,alt:!0}),a=O(y),l=b(y,"H1",{class:!0});var w=$(l);i=F(w,n[0]),w.forEach(h),r=O(y),c=b(y,"P",{class:!0});var S=$(c);p&&p.l(S),S.forEach(h),y.forEach(h),this.h()},h(){f(t,"class","feature__icon svelte-r9jcja"),ke(t.src,s=n[1])||f(t,"src",s),f(t,"alt",o="Icono de la sección "+n[0]),f(l,"class","feature__title svelte-r9jcja"),f(c,"class","feature__content svelte-r9jcja"),f(e,"class","feature svelte-r9jcja"),ie(e,"feature--one-column",n[2])},m(_,y){v(_,e,y),g(e,t),g(e,a),g(e,l),g(l,i),g(e,r),g(e,c),p&&p.m(c,null),n[6](e),u=!0},p(_,[y]){(!u||y&2&&!ke(t.src,s=_[1]))&&f(t,"src",s),(!u||y&1&&o!==(o="Icono de la sección "+_[0]))&&f(t,"alt",o),(!u||y&1)&&ct(i,_[0]),p&&p.p&&(!u||y&16)&&mt(p,m,_,_[4],u?gt(m,_[4],y,null):dt(_[4]),null),(!u||y&4)&&ie(e,"feature--one-column",_[2])},i(_){u||(T(p,_),u=!0)},o(_){D(p,_),u=!1},d(_){_&&h(e),p&&p.d(_),n[6](null)}}}function qt(n,e,t){let{$$slots:s={},$$scope:o}=e,{title:a}=e,{imgSrc:l}=e,{oneColumn:i=!1}=e,r;ce(()=>{Qe({selectorOrElements:[r],elseClasses:["hidden"],screenPercent:.8})});function c(u){N[u?"unshift":"push"](()=>{r=u,t(3,r)})}return n.$$set=u=>{"title"in u&&t(0,a=u.title),"imgSrc"in u&&t(1,l=u.imgSrc),"oneColumn"in u&&t(2,i=u.oneColumn),"$$scope"in u&&t(4,o=u.$$scope)},[a,l,i,r,o,s,c]}class xe extends J{constructor(e){super(),K(this,e,qt,Lt,Q,{title:0,imgSrc:1,oneColumn:2})}}function jt(n){let e,t,s,o,a,l,i,r,c,u;return{c(){e=L("svg"),t=L("g"),s=L("path"),o=L("path"),a=L("path"),l=L("path"),i=L("path"),r=L("path"),c=L("path"),u=L("path"),this.h()},l(m){e=q(m,"svg",{class:!0,viewBox:!0,style:!0});var p=$(e);t=q(p,"g",{});var _=$(t);s=q(_,"path",{class:!0,d:!0}),$(s).forEach(h),o=q(_,"path",{class:!0,style:!0,d:!0}),$(o).forEach(h),a=q(_,"path",{class:!0,d:!0}),$(a).forEach(h),l=q(_,"path",{class:!0,style:!0,d:!0}),$(l).forEach(h),i=q(_,"path",{class:!0,style:!0,d:!0}),$(i).forEach(h),r=q(_,"path",{class:!0,style:!0,d:!0}),$(r).forEach(h),c=q(_,"path",{class:!0,style:!0,d:!0}),$(c).forEach(h),u=q(_,"path",{class:!0,d:!0}),$(u).forEach(h),_.forEach(h),p.forEach(h),this.h()},h(){f(s,"class","obstacles__wall"),f(s,"d",`
        m 152 38
        h 245
        v 15
        h -230
        v 105
        h 120
        v 15
        h -135 z

        m 305 0
        v 120
        h -60
        v -60
        h -175
        v 15
        h 160
        v 45
        h -30
        v 15
        h 120
        v -135 z
        `),f(o,"class","obstacles__ball"),se(o,"stroke-width","10"),f(o,"d",`m 320 25
              c 120 10 80 -30 125 40
           c -30 -5  -40 -5  -55 25
           h -110
           a 1 1 1 0 0 -50 0
           h -12
           c -5 0  -10 0  -10 25
           v 35
           h 67
           a 1 1 1 0 1 45 0
           v 58 6 -6 6 -6 6 -6 6 -6 6`),f(a,"class","obstacles__ball-trail"),f(a,"d",`m 320 25
              c 120 10 80 -30 125 40
           c -30 -5  -40 -5  -55 25
           h -110
           a 1 1 1 0 0 -50 0
           h -12
           c -5 0  -10 0  -10 25
           v 35
           h 67
           a 1 1 1 0 1 45 0
           v 64 -6 6 -6 6 -6 6 -6 6 -6`),f(l,"class","obstacles__saw svelte-13qgbeb"),se(l,"stroke","var(--color-font-primary)"),f(l,"d",`m 255 83
                   v 6.75 
                   h -15.75
                   l 4.5 		4.5
                   l -11.25 	11.25
                   h 6.75
                   v 15.75
                   l 4.5 		-4.5 
                   11.25 	11.25
                   v -6.75
                   h 15.75
                   l -4.5 		-4.5 
                   11.25 	-11.25
                   h -6.75
                   v -15.75
                   l -4.5 		4.5 z
          `),f(i,"class","obstacles__pinxos"),se(i,"stroke","var(--color-font-primary)"),f(i,"d",`
        m 402 159
        l 5 -15
          5 15
          5 -15
          5 15
          5 -15
          5 15
          5 -15
          5 15
          5 -15
          5 15
    `),f(r,"class","obstacles__balista"),se(r,"stroke","var(--color-font-primary)"),f(r,"d",`
        m 365 156
        v -5
        h -2
        v -5
        h 2
        v -5
        h 15
        v 15
        z
    `),f(c,"class","obstacles__bolt"),se(c,"stroke","var(--color-font-primary)"),f(c,"d",` m 380 148.5
                h -210`),f(u,"class","obstacles__hr svelte-13qgbeb"),f(u,"d",`
                M 315 203
                q -6 1 -6 10
                c -100 25 -250 -40 -300 10
                M 325 203
                q  6 1  6 10
                c  100 25  250 -40  300 10
            `),f(e,"class","section-svg obstacles svelte-13qgbeb"),f(e,"viewBox","0 0 640 230"),f(e,"style","")},m(m,p){v(m,e,p),g(e,t),g(t,s),g(t,o),g(t,a),g(t,l),g(t,i),g(t,r),g(t,c),g(t,u)},p:P,i:P,o:P,d(m){m&&h(e)}}}function kt(n){return ce(()=>{V({trigger:"Element top reach screen percent",selectorOrPaths:[".obstacles__wall"],endLimit:"Element bottom reach screen percent",endPercent:.4}),V({selectorOrPaths:".obstacles__ball-trail",trigger:"Element top reach screen percent",endLimit:"Element bottom reach screen percent",endPercent:.45,initialOffset:100,length:40}),V({selectorOrPaths:".obstacles__ball",trigger:"Element top reach screen percent",endLimit:"Element bottom reach screen percent",endPercent:.45,minOffset:5,length:1}),V({trigger:"Element top reach screen percent",triggerScreenPercent:.85,selectorOrPaths:[".obstacles__saw",".obstacles__pinxos",".obstacles__balista"],endLimit:"Trigger reach element bottom"}),V({selectorOrPaths:".obstacles__hr",trigger:"Another element reach dashOffset value",endLimit:"Another element reach dashOffset value",refElementSelectorOrPath:".obstacles__ball-trail",startDashOffset:150,endDashOffset:100}),V({selectorOrPaths:".obstacles__bolt",trigger:"Another element reach dashOffset value",endLimit:"Another element reach dashOffset value",refElementSelectorOrPath:".obstacles__ball-trail",initialOffset:20,startDashOffset:300,endDashOffset:100,length:10})}),[]}class zt extends J{constructor(e){super(),K(this,e,kt,jt,Q,{})}}function Tt(n){let e,t,s;return{c(){e=L("svg"),t=L("g"),s=L("path"),this.h()},l(o){e=q(o,"svg",{class:!0,viewBox:!0});var a=$(e);t=q(a,"g",{});var l=$(t);s=q(l,"path",{d:!0}),$(s).forEach(h),l.forEach(h),a.forEach(h),this.h()},h(){f(s,"d",`
            M 315 10
            q -6 1 -6 10
            c -100 25 -250 -40 -300 10
            M 325 10
            q  6 1  6 10
            c  100 25  250 -40  300 10

            M 320 23
            a 1 1 0 0 0 0 -10
            a 1 1 0 0 0 0 10
            m 0 -6.5
            a 1 1 0 0 0 0 3
            a 1 1 0 0 0 0 -3`),f(e,"class","path bigote svelte-zvkn0p"),f(e,"viewBox","0 0 640 40")},m(o,a){v(o,e,a),g(e,t),g(t,s),n[1](s)},p:P,i:P,o:P,d(o){o&&h(e),n[1](null)}}}function Dt(n,e,t){let s;ce(()=>{V({selectorOrPaths:[s],trigger:"Element top reach screen percent",endLimit:"Element bottom reach screen percent",triggerScreenPercent:.9,endPercent:.6})});function o(a){N[a?"unshift":"push"](()=>{s=a,t(0,s)})}return[s,o]}class At extends J{constructor(e){super(),K(this,e,Dt,Tt,Q,{})}}function lt(n,e,t){const s=n.slice();return s[5]=e[t],s[6]=e,s[7]=t,s}function rt(n){let e,t,s,o=n[7];const a=()=>n[2](s,o),l=()=>n[2](null,o);return{c(){e=L("svg"),t=L("g"),s=L("path"),this.h()},l(i){e=q(i,"svg",{class:!0,"data-n":!0,viewBox:!0});var r=$(e);t=q(r,"g",{});var c=$(t);s=q(c,"path",{d:!0,class:!0}),$(s).forEach(h),c.forEach(h),r.forEach(h),this.h()},h(){f(s,"d",`M 55 105
                    a 50 50 0 0 0 0 -100
                    a 50 50 0 0 0 0 100
                    
                    M 55 80
                    a 25 25 0 0 0 0 -50
                    a 25 25 0 0 0 0 50
                    
                    M 55 60
                    a 5 5 0 0 0 0 -10
                    a 5 5 0 0 0 0 10  `),f(s,"class","svelte-1c12kqt"),f(e,"class","path diana svelte-1c12kqt"),f(e,"data-n",n[7]),f(e,"viewBox","0 0 110 110")},m(i,r){v(i,e,r),g(e,t),g(t,s),a()},p(i,r){n=i,o!==n[7]&&(l(),o=n[7],a())},d(i){i&&h(e),l()}}}function Mt(n){let e,t,s,o,a=Ce(n[1]),l=[];for(let i=0;i<a.length;i+=1)l[i]=rt(lt(n,a,i));return s=new At({}),{c(){e=E("div");for(let i=0;i<l.length;i+=1)l[i].c();t=C(),A(s.$$.fragment),this.h()},l(i){e=b(i,"DIV",{class:!0});var r=$(e);for(let c=0;c<l.length;c+=1)l[c].l(r);r.forEach(h),t=O(i),M(s.$$.fragment,i),this.h()},h(){f(e,"class","dianas svelte-1c12kqt")},m(i,r){v(i,e,r);for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(e,null);n[3](e),v(i,t,r),I(s,i,r),o=!0},p(i,[r]){if(r&2){a=Ce(i[1]);let c;for(c=0;c<a.length;c+=1){const u=lt(i,a,c);l[c]?l[c].p(u,r):(l[c]=rt(u),l[c].c(),l[c].m(e,null))}for(;c<l.length;c+=1)l[c].d(1);l.length=a.length}},i(i){o||(T(s.$$.fragment,i),o=!0)},o(i){D(s.$$.fragment,i),o=!1},d(i){i&&(h(e),h(t)),Xe(l,i),n[3](null),H(s,i)}}}function It(n,e,t){let s;const o=Array(8);let a=-1;ce(()=>{function r(){document.querySelectorAll(".diana").forEach(u=>{const m=(+u.getAttribute("data-n")+1)%8;u.setAttribute("data-n",m.toString())})}V({selectorOrPaths:o,trigger:"Element top reach screen percent",endLimit:"Element bottom reach screen percent",endPercent:.4}),a=setInterval(r,3e3)}),ze(()=>{clearInterval(a)});function l(r,c){N[r?"unshift":"push"](()=>{o[c]=r,t(1,o)})}function i(r){N[r?"unshift":"push"](()=>{s=r,t(0,s)})}return[s,o,l,i]}class Ht extends J{constructor(e){super(),K(this,e,It,Mt,Q,{})}}function Rt(n){let e,t,s,o,a,l;return{c(){e=L("svg"),t=L("g"),s=L("path"),o=L("path"),a=L("path"),l=L("path"),this.h()},l(i){e=q(i,"svg",{class:!0,viewBox:!0});var r=$(e);t=q(r,"g",{});var c=$(t);s=q(c,"path",{class:!0,d:!0}),$(s).forEach(h),o=q(c,"path",{class:!0,d:!0}),$(o).forEach(h),a=q(c,"path",{class:!0,d:!0}),$(a).forEach(h),l=q(c,"path",{class:!0,style:!0,d:!0}),$(l).forEach(h),c.forEach(h),r.forEach(h),this.h()},h(){f(s,"class","road"),f(s,"d",`m 320,0
            l 0 255
            a 1 1 1 0 0 0 10
              1 1 1 0 0 0 -10`),f(o,"class","left-road"),f(o,"d",` m 320 0
                l -25 100
                -100 25
                250 0
                -250 0
                100 25
                20 100
               q -6 1 -6 10
               c -100 25 -250 -40 -300 10`),f(a,"class","right-road"),f(a,"d",`m 320 0
               l 25 100
                 100 25
                 -100 25
                 -20 100
                q 6 1 6 10
                c 100 25 250 -40 300 10`),f(l,"class","backstar"),se(l,"stroke","var(--color-font-primary)"),se(l,"stroke-width","1"),f(l,"d",`m 320 125
               m 26 -26
               l 75 -75
                -81 50
               m 81 -50
               l -50 81
               
               m -76 -6
               l -75 -75
                  81 50
                m -81 -50
               l 50 81
               
               m  -50 -81
               m  73 127
               l -75 75
                  81 -50
                m -81 50
                l 50 -81
                
               m  78 6
               l  75 75
                  -81 -50
                m 81 50
                l -50 -81 `),f(e,"class","path"),f(e,"viewBox","0 0 640 280")},m(i,r){v(i,e,r),g(e,t),g(t,s),n[4](s),g(t,o),n[5](o),g(t,a),n[6](a),g(t,l),n[7](l)},p:P,i:P,o:P,d(i){i&&h(e),n[4](null),n[5](null),n[6](null),n[7](null)}}}function Ft(n,e,t){let s,o,a,l;ce(()=>{V({selectorOrPaths:[s,o,l,a],trigger:"Element top reach screen percent",endLimit:"Element bottom reach screen percent",endPercent:.7})});function i(m){N[m?"unshift":"push"](()=>{l=m,t(3,l)})}function r(m){N[m?"unshift":"push"](()=>{s=m,t(0,s)})}function c(m){N[m?"unshift":"push"](()=>{o=m,t(1,o)})}function u(m){N[m?"unshift":"push"](()=>{a=m,t(2,a)})}return[s,o,a,l,i,r,c,u]}class Bt extends J{constructor(e){super(),K(this,e,Ft,Rt,Q,{})}}function ot(n,e,t){const s=n.slice();return s[13]=e[t],s[14]=e,s[15]=t,s}function it(n){let e,t,s=n[13].quote+"",o,a,l,i=n[13].author+"",r,c,u,m=n[15];const p=()=>n[7](e,m),_=()=>n[7](null,m);return{c(){e=E("article"),t=E("blockquote"),o=R(s),a=C(),l=E("address"),r=R(i),c=C(),this.h()},l(y){e=b(y,"ARTICLE",{"data-n":!0,class:!0});var w=$(e);t=b(w,"BLOCKQUOTE",{class:!0});var S=$(t);o=F(S,s),S.forEach(h),a=O(w),l=b(w,"ADDRESS",{class:!0});var k=$(l);r=F(k,i),k.forEach(h),c=O(w),w.forEach(h),this.h()},h(){f(t,"class","experiences__quote svelte-144br61"),f(l,"class","experiences__author svelte-144br61"),f(e,"data-n",u=(n[2]+n[15])%n[4].length),f(e,"class",_t("experiences__item")+" svelte-144br61")},m(y,w){v(y,e,w),g(e,t),g(t,o),g(e,a),g(e,l),g(l,r),g(e,c),p()},p(y,w){n=y,w&4&&u!==(u=(n[2]+n[15])%n[4].length)&&f(e,"data-n",u),m!==n[15]&&(_(),m=n[15],p())},d(y){y&&h(e),_()}}}function Nt(n){let e,t,s,o=Ce(n[4]),a=[];for(let l=0;l<o.length;l+=1)a[l]=it(ot(n,o,l));return{c(){e=E("div");for(let l=0;l<a.length;l+=1)a[l].c();this.h()},l(l){e=b(l,"DIV",{class:!0,style:!0});var i=$(e);for(let r=0;r<a.length;r+=1)a[r].l(i);i.forEach(h),this.h()},h(){f(e,"class","experiences svelte-144br61"),se(e,"height",n[3].toFixed(0)+"px"),ie(e,"experiencies--right-hovering",n[1]=="RIGHT"),ie(e,"experiencies--left-hovering",n[1]=="LEFT")},m(l,i){v(l,e,i);for(let r=0;r<a.length;r+=1)a[r]&&a[r].m(e,null);t||(s=[nt(e,"pointermove",n[5]),nt(e,"pointerdown",n[6])],t=!0)},p(l,[i]){if(i&21){o=Ce(l[4]);let r;for(r=0;r<o.length;r+=1){const c=ot(l,o,r);a[r]?a[r].p(c,i):(a[r]=it(c),a[r].c(),a[r].m(e,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=o.length}i&8&&se(e,"height",l[3].toFixed(0)+"px"),i&2&&ie(e,"experiencies--right-hovering",l[1]=="RIGHT"),i&2&&ie(e,"experiencies--left-hovering",l[1]=="LEFT")},i:P,o:P,d(l){l&&h(e),Xe(a,l),t=!1,pt(s)}}}function Gt(n,e,t){let s,o,a;const l=[],i=[{author:"Miriam Sáez",quote:`Mantengo contacto con Álex para consultar dudas 
            técnicas para las que nadie en mi trabajo parece tener respuesta. 
			Nunca deja de sorprenderme la calidad de su investigación y sus soluciones`},{author:"Raúl Santana",quote:`Los tres meses que contamos con Álex en nuestro equipo 
            marcaron un antes y un después. Más allá de conocimientos, nos trajo
            mucha motivación y una nueva forma de ver nuestra profesión`},{author:"Karlos Elordi Etxebarrieta",quote:`Conocí a Álex buscando clases de programación para mi hijo. 
			Han pasado tres años, mi hijo ya tiene un buen trabajo y aún sigue 
			disfrutando de al menos una clase a la semana`},{author:"Carla Salgado",quote:`Álex me ha acompañado en mi formación desde que estaba en
			3º de carrera hasta hoy. Trabajo como única ingeniera en un equipo
			no técnico, y su papel como mentor externo ha sido vital para mí`},{author:"David Hernández Martín",quote:`Soy un terrible comunicador, y lo que más me gustó de Álex 
			es su empatía, parecía entenderme y conectar al 120%, con pocas 
			palabras sabía qué necesitaba y sus implicaciones`},{author:"Rayco Fernández y José Segura",quote:`Aunque solo solicitamos formación y sugerencia para 
			refactorizar una base gigante de código, junto a Álex descubrimos
			todo un flujo de trabajo que nos aportaba infinita paz mental`},{author:"Samuel Santana",quote:`No soy cliente ni alumno de Álex, pero sí he tenido el
			placer de estudiar y trabajar junto a él. En mi vida he sentido que
			he avanzado más humana y profesionalmente`},{author:"Agustín Artíles de la Nuez",quote:`Nunca había conocido a alguien tan transparente
			y sin miedo a decir que no tiene ni pajorera idea de un tema. Tampoco
			a alguien que se adaptara, aprendiera y dominara una arquitectura 
			tan rápidamente`}];let r=-1;function c(){t(3,a=Math.max(...l.map(S=>S.getBoundingClientRect().height)))}function u(){c(),o=l.findIndex(S=>+S.getAttribute("data-n")==4)-1,o<0&&(o=l.length-1),t(2,s=(s+1)%i.length)}function m(){c(),o=l.findIndex(S=>+S.getAttribute("data-n")==4),o=(o+1)%i.length,t(2,s=s==0?l.length-1:s-1)}ce(()=>{r=setInterval(u,1e4),u()}),ze(()=>{clearInterval(r)});let p;function _(S){const k=S.clientX,ve=window.innerWidth,X=l[o].getBoundingClientRect(),Oe=X.left,W=X.right;k+30<=Oe||k<40?t(1,p="LEFT"):k-30>=W||k>ve-40?t(1,p="RIGHT"):t(1,p="CENTER")}function y(S){_(S),clearInterval(r),r=setInterval(u,1e4),p!="CENTER"&&(p=="LEFT"?m():u())}function w(S,k){N[S?"unshift":"push"](()=>{l[k]=S,t(0,l)})}return t(2,s=0),o=0,t(3,a=130),t(1,p="CENTER"),[l,p,s,a,i,_,y,w]}class Ut extends J{constructor(e){super(),K(this,e,Gt,Nt,Q,{})}}function Vt(n){let e,t,s,o,a,l;return{c(){e=E("div"),t=E("img"),o=C(),a=E("img"),this.h()},l(i){e=b(i,"DIV",{class:!0});var r=$(e);t=b(r,"IMG",{class:!0,src:!0,alt:!0}),o=O(r),a=b(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(h),this.h()},h(){f(t,"class","heart-hands__left svelte-1g6aiia"),ke(t.src,s="/left-hand.svg")||f(t,"src",s),f(t,"alt",""),f(a,"class","heart-hands__right svelte-1g6aiia"),ke(a.src,l="/right-hand.svg")||f(a,"src",l),f(a,"alt",""),f(e,"class","heart-hands svelte-1g6aiia")},m(i,r){v(i,e,r),g(e,t),n[2](t),g(e,o),g(e,a),n[3](a)},p:P,i:P,o:P,d(i){i&&h(e),n[2](null),n[3](null)}}}function Xt(n,e,t){let s,o;ce(()=>{Qe({selectorOrElements:[s,o],screenPercent:.9,elseClasses:["separated"]})});function a(i){N[i?"unshift":"push"](()=>{s=i,t(0,s)})}function l(i){N[i?"unshift":"push"](()=>{o=i,t(1,o)})}return[s,o,a,l]}class Yt extends J{constructor(e){super(),K(this,e,Xt,Vt,Q,{})}}function Qt(n){let e,t,s="pairing",o;return{c(){e=R(`Para estudiantes de todos los niveles y para juniors recién 
			incorporados al mundo profesional, formando y dando soporte en su
			trabajo mediante `),t=E("strong"),t.textContent=s,o=R("."),this.h()},l(a){e=F(a,`Para estudiantes de todos los niveles y para juniors recién 
			incorporados al mundo profesional, formando y dando soporte en su
			trabajo mediante `),t=b(a,"STRONG",{class:!0,"data-svelte-h":!0}),B(t)!=="svelte-sdcs7q"&&(t.textContent=s),o=F(a,"."),this.h()},h(){f(t,"class","svelte-1cz8zhj")},m(a,l){v(a,e,l),v(a,t,l),v(a,o,l)},p:P,d(a){a&&(h(e),h(t),h(o))}}}function Jt(n){let e,t,s="principios ágiles",o;return{c(){e=R(`Me integro con equipos que necesitan tecnologías o metodologías con
			las que tengo experiencia, enfocado en los `),t=E("strong"),t.textContent=s,o=R(`
			y adaptándome a sus objetivos.`),this.h()},l(a){e=F(a,`Me integro con equipos que necesitan tecnologías o metodologías con
			las que tengo experiencia, enfocado en los `),t=b(a,"STRONG",{class:!0,"data-svelte-h":!0}),B(t)!=="svelte-1n3mw7l"&&(t.textContent=s),o=F(a,`
			y adaptándome a sus objetivos.`),this.h()},h(){f(t,"class","svelte-1cz8zhj")},m(a,l){v(a,e,l),v(a,t,l),v(a,o,l)},p:P,d(a){a&&(h(e),h(t),h(o))}}}function Kt(n){let e;return{c(){e=R(`Acorde al estado del arte y el mercado laboral, para particulares o 
			para centros que buscan ampliar itinerarios, docencia o coordinación
			académica en tecnologías de la información.`)},l(t){e=F(t,`Acorde al estado del arte y el mercado laboral, para particulares o 
			para centros que buscan ampliar itinerarios, docencia o coordinación
			académica en tecnologías de la información.`)},m(t,s){v(t,e,s)},d(t){t&&h(e)}}}function Wt(n){let e;return{c(){e=R(`Análisis de requisitos y viabilidad técnica de proyectos.
			Planificación de estrategias de desarrollo y metodología,
			comparación y selección tecnológica, arquitectura y diseño.`)},l(t){e=F(t,`Análisis de requisitos y viabilidad técnica de proyectos.
			Planificación de estrategias de desarrollo y metodología,
			comparación y selección tecnológica, arquitectura y diseño.`)},m(t,s){v(t,e,s)},d(t){t&&h(e)}}}function Zt(n){let e,t,s="(acoplamiento, cohesión, testabilidad...)",o,a,l="(seguridad, rendimiento, monitorización...)",i,r,c="(productividad, comunicación, motivación...)",u;return{c(){e=R(`Análisis de diseño
			`),t=E("small"),t.textContent=s,o=R(`, 
			técnico `),a=E("small"),a.textContent=l,i=R(` 
			y humano `),r=E("small"),r.textContent=c,u=R(`,
			mejorando procesos y toma de decisiones.`),this.h()},l(m){e=F(m,`Análisis de diseño
			`),t=b(m,"SMALL",{class:!0,"data-svelte-h":!0}),B(t)!=="svelte-ajritx"&&(t.textContent=s),o=F(m,`, 
			técnico `),a=b(m,"SMALL",{class:!0,"data-svelte-h":!0}),B(a)!=="svelte-x1nxia"&&(a.textContent=l),i=F(m,` 
			y humano `),r=b(m,"SMALL",{class:!0,"data-svelte-h":!0}),B(r)!=="svelte-s246t6"&&(r.textContent=c),u=F(m,`,
			mejorando procesos y toma de decisiones.`),this.h()},h(){f(t,"class","svelte-1cz8zhj"),f(a,"class","svelte-1cz8zhj"),f(r,"class","svelte-1cz8zhj")},m(m,p){v(m,e,p),v(m,t,p),v(m,o,p),v(m,a,p),v(m,i,p),v(m,r,p),v(m,u,p)},p:P,d(m){m&&(h(e),h(t),h(o),h(a),h(i),h(r),h(u))}}}function en(n){let e,t,s="armonizar equipos",o,a,l=`gestión de requisitos y 
			objetivos`,i,r,c=`habilidades de 
			análisis`,u;return{c(){e=R("Ayudo a "),t=E("strong"),t.textContent=s,o=R(`, ampliando de manera
			accesible la formación técnica en `),a=E("strong"),a.textContent=l,i=R(" de directivos y las "),r=E("strong"),r.textContent=c,u=R(` de los desarrolladores, mejorando la comunicación
			y la calidad de desarrollo.`),this.h()},l(m){e=F(m,"Ayudo a "),t=b(m,"STRONG",{class:!0,"data-svelte-h":!0}),B(t)!=="svelte-9kzzs5"&&(t.textContent=s),o=F(m,`, ampliando de manera
			accesible la formación técnica en `),a=b(m,"STRONG",{class:!0,"data-svelte-h":!0}),B(a)!=="svelte-1pp8xmx"&&(a.textContent=l),i=F(m," de directivos y las "),r=b(m,"STRONG",{class:!0,"data-svelte-h":!0}),B(r)!=="svelte-yq79rc"&&(r.textContent=c),u=F(m,` de los desarrolladores, mejorando la comunicación
			y la calidad de desarrollo.`),this.h()},h(){f(t,"class","svelte-1cz8zhj"),f(a,"class","svelte-1cz8zhj"),f(r,"class","svelte-1cz8zhj")},m(m,p){v(m,e,p),v(m,t,p),v(m,o,p),v(m,a,p),v(m,i,p),v(m,r,p),v(m,u,p)},p:P,d(m){m&&(h(e),h(t),h(o),h(a),h(i),h(r),h(u))}}}function tn(n){let e,t,s,o,a,l,i="Formación con metodologías ágiles",r,c,u=`La agilidad no se trata de rapidez, sino de la capacidad
		para adaptarse a nuevos requisitos y sortear obstáculos`,m,p,_,y,w,S,k,ve,G,X,Oe,W,Je="Consultoría",Te,Y,ae,De,le,Ae,re,Se,j,ue,Me,$e,Ke="Mi camino reciente",Ie,Ee,We=`Aquellos conocimientos y tecnologías que he utilizado o impartido en los últimos 4 años.
	Tengo un profundo interés personal o mucha experiencia con 
	lo marcado con <span class="expertise-mark svelte-1cz8zhj">★</span>.`,He,he,Re,fe,Fe,me,Be,de,Ne,ge,Pe,U,pe,Ge,be,Ze="Personas sin miedo a agradecer",Ue,_e,Le,oe,et=`<h1 class="main-section__title svelte-1cz8zhj">Contacto</h1> <p>La forma más sencilla de contactar conmigo es por correo electrónico.
		No hay reglas, escríbeme como quieras, cuando quieras y para lo que quieras.</p> <p><a href="mailto:contacto@alexvega.net">contacto@alexvega.net</a></p>`,qe;return e=new bt({}),o=new zt({}),_=new xe({props:{imgSrc:"/junior.svg",title:"Clases particulares",$$slots:{default:[Qt]},$$scope:{ctx:n}}}),w=new xe({props:{imgSrc:"/teamwork.svg",title:"Soporte a equipos",$$slots:{default:[Jt]},$$scope:{ctx:n}}}),k=new xe({props:{imgSrc:"/book.svg",oneColumn:!0,title:"Formación al profesorado y dirección académica",$$slots:{default:[Kt]},$$scope:{ctx:n}}}),X=new Ht({}),ae=new xe({props:{imgSrc:"/strategy.svg",title:"Análisis y estrategia",$$slots:{default:[Wt]},$$scope:{ctx:n}}}),le=new xe({props:{imgSrc:"/audit.svg",title:"Auditoría y monitorización",$$slots:{default:[Zt]},$$scope:{ctx:n}}}),re=new xe({props:{oneColumn:!0,imgSrc:"/harmony.svg",title:"Armonización de equipos",$$slots:{default:[en]},$$scope:{ctx:n}}}),ue=new Bt({}),he=new we({props:{title:"Front end, back end, full stack y SGBD",skills:["*Vue","Nuxt","*Svelte","*SvelteKit","*React","Next","Sass/SCSS","*Node","*Express","Ruby on Rails","ReactiveX","*Socket.IO","Electron","Tauri","*Django","Symfony","Laravel","*MySQL","*MariaDB","*PostgreSQL","*SQLite","MongoDB","Redis"]}}),fe=new we({props:{title:"Lenguajes principales",skills:["*HTML","*CSS","*JavaScript","*TypeScript","*Python","Java","C#","PHP"]}}),me=new we({props:{title:"Técnicas, disciplinas, metodologías y filosofías",skills:["*Test-Driven Development","*Behavior-Driven Development","*Event-Driven Architecture","*Developer Experience","Domain-Driven Design","Integración continua","*eXtreme Programming","*Minimalismo","*Software Libre"]}}),de=new we({props:{title:"Administración de sistemas, virtualización, contenerización y DevOps",skills:["* GNU/Linux <small>(RHEL y Debian)</small>","*Bash","Docker","Github Actions"]}}),ge=new we({props:{title:"Gráficos, renderizado, videojuegos, hardware y frikadas",skills:["*PixiJS","*Canvas","P5.js","Three.js","Babylon.js","OpenGL","*WebGL2","*WebGPU","Blender","lwjgl","MC6809","MIPS RXXXX <small>(PSP & Nintendo 64)</small>"]}}),pe=new Yt({}),_e=new Ut({}),{c(){A(e.$$.fragment),t=C(),s=E("section"),A(o.$$.fragment),a=C(),l=E("h1"),l.textContent=i,r=C(),c=E("blockquote"),c.textContent=u,m=C(),p=E("div"),A(_.$$.fragment),y=C(),A(w.$$.fragment),S=C(),A(k.$$.fragment),ve=C(),G=E("section"),A(X.$$.fragment),Oe=C(),W=E("h1"),W.textContent=Je,Te=C(),Y=E("div"),A(ae.$$.fragment),De=C(),A(le.$$.fragment),Ae=C(),A(re.$$.fragment),Se=C(),j=E("section"),A(ue.$$.fragment),Me=C(),$e=E("h1"),$e.textContent=Ke,Ie=C(),Ee=E("p"),Ee.innerHTML=We,He=C(),A(he.$$.fragment),Re=C(),A(fe.$$.fragment),Fe=C(),A(me.$$.fragment),Be=C(),A(de.$$.fragment),Ne=C(),A(ge.$$.fragment),Pe=C(),U=E("section"),A(pe.$$.fragment),Ge=C(),be=E("h1"),be.textContent=Ze,Ue=C(),A(_e.$$.fragment),Le=C(),oe=E("section"),oe.innerHTML=et,this.h()},l(d){M(e.$$.fragment,d),t=O(d),s=b(d,"SECTION",{class:!0});var x=$(s);M(o.$$.fragment,x),a=O(x),l=b(x,"H1",{class:!0,"data-svelte-h":!0}),B(l)!=="svelte-1vkox80"&&(l.textContent=i),r=O(x),c=b(x,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),B(c)!=="svelte-100aq54"&&(c.textContent=u),m=O(x),p=b(x,"DIV",{class:!0});var Z=$(p);M(_.$$.fragment,Z),y=O(Z),M(w.$$.fragment,Z),S=O(Z),M(k.$$.fragment,Z),Z.forEach(h),x.forEach(h),ve=O(d),G=b(d,"SECTION",{class:!0});var ee=$(G);M(X.$$.fragment,ee),Oe=O(ee),W=b(ee,"H1",{class:!0,"data-svelte-h":!0}),B(W)!=="svelte-1o5dpld"&&(W.textContent=Je),Te=O(ee),Y=b(ee,"DIV",{class:!0});var te=$(Y);M(ae.$$.fragment,te),De=O(te),M(le.$$.fragment,te),Ae=O(te),M(re.$$.fragment,te),te.forEach(h),ee.forEach(h),Se=O(d),j=b(d,"SECTION",{class:!0});var z=$(j);M(ue.$$.fragment,z),Me=O(z),$e=b(z,"H1",{"data-svelte-h":!0}),B($e)!=="svelte-1g2lfh8"&&($e.textContent=Ke),Ie=O(z),Ee=b(z,"P",{"data-svelte-h":!0}),B(Ee)!=="svelte-xou7pv"&&(Ee.innerHTML=We),He=O(z),M(he.$$.fragment,z),Re=O(z),M(fe.$$.fragment,z),Fe=O(z),M(me.$$.fragment,z),Be=O(z),M(de.$$.fragment,z),Ne=O(z),M(ge.$$.fragment,z),z.forEach(h),Pe=O(d),U=b(d,"SECTION",{class:!0});var ne=$(U);M(pe.$$.fragment,ne),Ge=O(ne),be=b(ne,"H1",{"data-svelte-h":!0}),B(be)!=="svelte-1557lak"&&(be.textContent=Ze),Ue=O(ne),M(_e.$$.fragment,ne),ne.forEach(h),Le=O(d),oe=b(d,"SECTION",{class:!0,"data-svelte-h":!0}),B(oe)!=="svelte-1hfd539"&&(oe.innerHTML=et),this.h()},h(){f(l,"class","main-section__title svelte-1cz8zhj"),f(c,"class","svelte-1cz8zhj"),f(p,"class","main-section__feature-list svelte-1cz8zhj"),f(s,"class","main-section main-section--learning svelte-1cz8zhj"),f(W,"class","main-section__title svelte-1cz8zhj"),f(Y,"class","main-section__feature-list svelte-1cz8zhj"),f(G,"class","main-section main-section--consulting svelte-1cz8zhj"),f(j,"class","main-section main-section--skills svelte-1cz8zhj"),f(U,"class","main-section main-section--experiences svelte-1cz8zhj"),f(oe,"class","main-section main-section--contact svelte-1cz8zhj")},m(d,x){I(e,d,x),v(d,t,x),v(d,s,x),I(o,s,null),g(s,a),g(s,l),g(s,r),g(s,c),g(s,m),g(s,p),I(_,p,null),g(p,y),I(w,p,null),g(p,S),I(k,p,null),v(d,ve,x),v(d,G,x),I(X,G,null),g(G,Oe),g(G,W),g(G,Te),g(G,Y),I(ae,Y,null),g(Y,De),I(le,Y,null),g(Y,Ae),I(re,Y,null),v(d,Se,x),v(d,j,x),I(ue,j,null),g(j,Me),g(j,$e),g(j,Ie),g(j,Ee),g(j,He),I(he,j,null),g(j,Re),I(fe,j,null),g(j,Fe),I(me,j,null),g(j,Be),I(de,j,null),g(j,Ne),I(ge,j,null),v(d,Pe,x),v(d,U,x),I(pe,U,null),g(U,Ge),g(U,be),g(U,Ue),I(_e,U,null),v(d,Le,x),v(d,oe,x),qe=!0},p(d,[x]){const Z={};x&1&&(Z.$$scope={dirty:x,ctx:d}),_.$set(Z);const ee={};x&1&&(ee.$$scope={dirty:x,ctx:d}),w.$set(ee);const te={};x&1&&(te.$$scope={dirty:x,ctx:d}),k.$set(te);const z={};x&1&&(z.$$scope={dirty:x,ctx:d}),ae.$set(z);const ne={};x&1&&(ne.$$scope={dirty:x,ctx:d}),le.$set(ne);const tt={};x&1&&(tt.$$scope={dirty:x,ctx:d}),re.$set(tt)},i(d){qe||(T(e.$$.fragment,d),T(o.$$.fragment,d),T(_.$$.fragment,d),T(w.$$.fragment,d),T(k.$$.fragment,d),T(X.$$.fragment,d),T(ae.$$.fragment,d),T(le.$$.fragment,d),T(re.$$.fragment,d),T(ue.$$.fragment,d),T(he.$$.fragment,d),T(fe.$$.fragment,d),T(me.$$.fragment,d),T(de.$$.fragment,d),T(ge.$$.fragment,d),T(pe.$$.fragment,d),T(_e.$$.fragment,d),qe=!0)},o(d){D(e.$$.fragment,d),D(o.$$.fragment,d),D(_.$$.fragment,d),D(w.$$.fragment,d),D(k.$$.fragment,d),D(X.$$.fragment,d),D(ae.$$.fragment,d),D(le.$$.fragment,d),D(re.$$.fragment,d),D(ue.$$.fragment,d),D(he.$$.fragment,d),D(fe.$$.fragment,d),D(me.$$.fragment,d),D(de.$$.fragment,d),D(ge.$$.fragment,d),D(pe.$$.fragment,d),D(_e.$$.fragment,d),qe=!1},d(d){d&&(h(t),h(s),h(ve),h(G),h(Se),h(j),h(Pe),h(U),h(Le),h(oe)),H(e,d),H(o),H(_),H(w),H(k),H(X),H(ae),H(le),H(re),H(ue),H(he),H(fe),H(me),H(de),H(ge),H(pe),H(_e)}}}function nn(n){return ze(async()=>{{const{clearScrollDrawListeners:e}=await ht(()=>Promise.resolve().then(()=>wt),void 0,import.meta.url);e()}}),[]}class rn extends J{constructor(e){super(),K(this,e,nn,tn,Q,{})}}export{rn as component};
