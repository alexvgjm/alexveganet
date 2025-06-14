import{f as x,a as n,t as u}from"../chunks/C8u6z3Tc.js";import{p as R,u as L,s as d,f as D,t as v,a as J,g as _,n as i,b as F,c as G}from"../chunks/Cpbaq3x5.js";import{s as q}from"../chunks/Bfx6ipSN.js";import{e as H,i as V}from"../chunks/DXiVSv9y.js";import{s as U}from"../chunks/C6I3nmdi.js";import{C}from"../chunks/CBCq1Mx-.js";import{E,g as s}from"../chunks/mxhJBp4_.js";import{c as h,h as $}from"../chunks/BuVfH6Y1.js";import{u as B}from"../chunks/eJOsRxFa.js";import{C as m}from"../chunks/DdkXf41n.js";import"../chunks/DjRoK1_K.js";/* empty css                */var M=x('<div class="caja"></div>'),N=x('<div id="ej-4" class="caja"></div> <p>Abrir la consola con F12 (en Chrome o Firefox)</p>',1),O=x(`<h1>Tweens</h1> <p><em>Nota: tienes la API completa y extendida de todo lo que veremos aquí en la <a href="https://gsap.com/docs/v3/GSAP/Tween/">documentación oficial de gsap sobre Tweens</a></em></p> <p>Un tween (de in-between) es la unidad básica de animación en GSAP. Solo hay tres tipos y son muy
  fáciles de usar: <em>to</em>, <em>from</em> y <em>fromTo</em>. Todos sirven para indicar estados a
  los que (o de los que) debe llegar los objetos a animar, en cuanto tiempo, cuántas veces, etc...</p> <ul class="no-marks"><li><strong>to(...):</strong> anima los objetivos <strong>HACIA</strong> un estado indicado.</li> <li><strong>from(...):</strong> anima los objetivos <strong>DESDE</strong> un estado indicado a su estado
    original.</li> <li><strong>fromTo(...):</strong> anima los objetivos <strong>DESDE</strong> un estado indicado <strong>HASTA</strong> otro.</li></ul> <!> <h2>¿Qué se crea?</h2> <p>Las tres funciones crean objetos Tween con propiedades y métodos útiles.</p> <!> <h2>Los tweens se destruyen automáticamente, salvo...</h2> <p>Muchas de las páginas que usan o usaban GSAP y que he llegado a auditar
contenian o contienen memory leaks por una mala gestión de tweens. En especial 
aquellas que utilizaban frameworks de diseño basado en componentes (Angular,
React, Vue, Svelte...).</p> <p>Los tweens pueden destruirse explícitamente con kill:</p> <!> <p>Por lo general <strong>no es necesario preocuparse</strong>, los tweens 
están optimizados para que si la variable no es accesible (se pierde la 
referencia), se borren al terminar su ejecución. Pero hay casos extremos 🔥.</p> <p>En concreto, hay que tener cuidado con los tweens infinitos (repeat: -1),
  en circunstancias donde podamos recrearlos manteniendo el anterior.</p> <p>Los tweens son objetos muy ligeros,
    pero ante actualizaciones constantes mal gestionadas <em>(habitual
    en bibliotecas propensas a errores humanos como React)</em> y en aplicaciones
    de una sola página, pueden crearse y mantenerse en exceso. <strong>¿Por qué?</strong> Considera el siguiente ejemplo:</p> <!> <p>Es realmente común pensar que al desaparecer
  la caja, el tween se destruirá. De hecho, es el caso de pérdida de rendimiento
  acumulativo que más me he topado en aplicaciones de una sola página (SPA).</p> <p>El tween seguirá vivo, provocando llamadas de actualización y renderizado.
  Puede probarse desde la pestaña de rendimiento del navegador (recomiendo Firefox
  para esto).</p> <p>En SPA o cuando se trabaja con componentes, al desmontar o destruir un 
  componente, los tweens asociados a sus elementos internos no van a desaparecer
  hasta que terminen (o nunca, si son infinitos). Hay que destruirlos manualmente.
  Lo mismo se aplica a Timelines (siguiente tema).</p> <h2>Los cálculos se realizan en el momento de creación del tween.</h2> <p>Una vez asignado un estado inicial/final se mantiene fijo. Esto implica 
  la escucha activa de eventos y reconstrucción del tween cuando 
  queramos reiniciarlo.</p>`,1);function re(k,A){R(A,!0);const t={},c={"ej-1":{jsSnippet:"gsap.to('#ej-1', {x: 100})",htmlSnippet:$(1),cssSnippet:h,execute(){t["ej-1"]=s.to("#ej-1",{x:100,y:0})},reset(){t["ej-1"].kill(),s.set("#ej-1",{x:0,y:0})}},"ej-2":{jsSnippet:"gsap.from('#ej-2', {x: 100})",htmlSnippet:$(2),cssSnippet:h,execute(){t["ej-2"]=s.from("#ej-2",{x:100,y:0})},reset(){t["ej-2"].kill(),s.set("#ej-2",{x:0,y:0})}},"ej-3":{jsSnippet:"gsap.fromTo('#ej-3', {x: 50}, {x: 100})",htmlSnippet:$(3),cssSnippet:h,execute(){t["ej-3"]=s.fromTo("#ej-3",{x:50,y:0},{x:100,y:0})},reset(){t["ej-3"].kill(),s.set("#ej-3",{x:0,y:0})}}},g={"ej-4":{jsSnippet:`const tw = gsap.to('#ej-4', {
    x: 100, 
    repeat: 3,
    rotate: 360,
    yoyo: true
}) 

function mostrarIteracion() { 
    console.log('Iter: ' + tw.iteration())
}

tw.eventCallback('onStart', printIteracion)
tw.eventCallback('onRepeat', printIteracion)`,execute(){const e=s.to("#ej-4",{x:100,repeat:3,rotate:360,yoyo:!0});function o(){console.log("Iter: "+e.iteration())}e.eventCallback("onStart",o),e.eventCallback("onRepeat",o),t["ej-4"]=e},reset(){t["ej-4"].kill(),s.set("#ej-4",{x:0,rotate:0})}}};L(()=>{B().hljs.highlightAll()});var b=O(),S=d(D(b),8);H(S,17,()=>Object.entries(c),V,(e,o,a,P)=>{var r=F(()=>G(_(o),2));let p=()=>_(r)[0];C(e,{gap:4,$$slots:{left:(f,z)=>{m(f,{slot:"left",language:"JavaScript",children:(j,I)=>{i();var l=u();v(()=>q(l,c[p()].jsSnippet)),n(j,l)},$$slots:{default:!0}})},right:(f,z)=>{E(f,{slot:"right",smallRun:!0,get execute(){return c[p()].execute},get reset(){return c[p()].reset},children:(j,I)=>{var l=M();v(()=>U(l,"id",p())),n(j,l)},$$slots:{default:!0}})}}})});var y=d(S,6);C(y,{gap:4,$$slots:{left:(e,o)=>{m(e,{slot:"left",language:"JavaScript",children:(a,P)=>{i();var r=u();v(()=>q(r,g["ej-4"].jsSnippet)),n(a,r)},$$slots:{default:!0}})},right:(e,o)=>{E(e,{slot:"right",smallRun:!0,get execute(){return g["ej-4"].execute},get reset(){return g["ej-4"].reset},children:(a,P)=>{var r=N();i(2),n(a,r)},$$slots:{default:!0}})}}});var w=d(y,8);m(w,{language:"JavaScript",children:(e,o)=>{i();var a=u();a.nodeValue=`const tw = gsap.to('#ej-1', {x: 100, y: 0})
// ...
// Se puede forzar su destrucción con:
tw.kill()
// Pero si se pierde su referencia también funcionaría:
tw = null
`,n(e,a)},$$slots:{default:!0}});var T=d(w,8);m(T,{language:"JavaScript",children:(e,o)=>{i();var a=u();a.nodeValue=`const tw = gsap.to('#caja', {
    scale: 2, 
    duration: 1,
    repeat: -1  // Se repite infinitamente
})

// Borrar la caja a los dos segundos
const borrarCaja = () => document.querySelector('#caja')
                                 .remove()
                                 
setTimeout(borrarCaja, 2000)`,n(e,a)},$$slots:{default:!0}}),i(10),n(k,b),J()}export{re as component};
