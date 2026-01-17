import"../chunks/CWj6FrbW.js";import{p as z,u as I,f as x,s as u,a as R,b as r,g as d,t as f,c as L,n as l,h as w,i as D,j as J}from"../chunks/BduZyM7k.js";import{s as P}from"../chunks/CUZXlhwM.js";import{e as F}from"../chunks/C0NDRyn_.js";import{s as G}from"../chunks/CJDWlBBp.js";import{C as _}from"../chunks/0WgYKyNH.js";import{E as q,c as v,h}from"../chunks/BoUKyfmj.js";import{g as n}from"../chunks/CH_iu5NA.js";import{u as H}from"../chunks/CgVzVCqa.js";import{C as m}from"../chunks/DlsCqhfG.js";var V=x('<div class="caja"></div>'),U=x('<div id="ej-4" class="caja"></div> <p>Abrir la consola con F12 (en Chrome o Firefox)</p>',1),B=x(`<h1>Tweens</h1> <p><em>Nota: tienes la API completa y extendida de todo lo que veremos aquí en la <a href="https://gsap.com/docs/v3/GSAP/Tween/">documentación oficial de gsap sobre Tweens</a></em></p> <p>Un tween (de in-between) es la unidad básica de animación en GSAP. Solo hay tres tipos y son muy
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
  queramos reiniciarlo.</p>`,1);function ae(C,E){z(E,!0);const t={},p={"ej-1":{jsSnippet:"gsap.to('#ej-1', {x: 100})",htmlSnippet:h(1),cssSnippet:v,execute(){t["ej-1"]=n.to("#ej-1",{x:100,y:0})},reset(){t["ej-1"].kill(),n.set("#ej-1",{x:0,y:0})}},"ej-2":{jsSnippet:"gsap.from('#ej-2', {x: 100})",htmlSnippet:h(2),cssSnippet:v,execute(){t["ej-2"]=n.from("#ej-2",{x:100,y:0})},reset(){t["ej-2"].kill(),n.set("#ej-2",{x:0,y:0})}},"ej-3":{jsSnippet:"gsap.fromTo('#ej-3', {x: 50}, {x: 100})",htmlSnippet:h(3),cssSnippet:v,execute(){t["ej-3"]=n.fromTo("#ej-3",{x:50,y:0},{x:100,y:0})},reset(){t["ej-3"].kill(),n.set("#ej-3",{x:0,y:0})}}},g={"ej-4":{jsSnippet:`const tw = gsap.to('#ej-4', {
    x: 100, 
    repeat: 3,
    rotate: 360,
    yoyo: true
}) 

function mostrarIteracion() { 
    console.log('Iter: ' + tw.iteration())
}

tw.eventCallback('onStart', printIteracion)
tw.eventCallback('onRepeat', printIteracion)`,execute(){const e=n.to("#ej-4",{x:100,repeat:3,rotate:360,yoyo:!0});function o(){console.log("Iter: "+e.iteration())}e.eventCallback("onStart",o),e.eventCallback("onRepeat",o),t["ej-4"]=e},reset(){t["ej-4"].kill(),n.set("#ej-4",{x:0,rotate:0})}}};I(()=>{H().hljs.highlightAll()});var $=B(),b=u(R($),8);F(b,17,()=>Object.entries(p),([e])=>e,(e,o)=>{var a=D(()=>J(w(o),1));let i=()=>w(a)[0];_(e,{gap:4,$$slots:{left:(s,A)=>{m(s,{slot:"left",language:"JavaScript",children:(j,T)=>{l();var c=d();f(()=>P(c,p[i()].jsSnippet)),r(j,c)},$$slots:{default:!0}})},right:(s,A)=>{q(s,{slot:"right",smallRun:!0,get execute(){return p[i()].execute},get reset(){return p[i()].reset},children:(j,T)=>{var c=V();f(()=>G(c,"id",i())),r(j,c)},$$slots:{default:!0}})}}})});var S=u(b,6);_(S,{gap:4,$$slots:{left:(e,o)=>{m(e,{slot:"left",language:"JavaScript",children:(a,i)=>{l();var s=d();f(()=>P(s,g["ej-4"].jsSnippet)),r(a,s)},$$slots:{default:!0}})},right:(e,o)=>{q(e,{slot:"right",smallRun:!0,get execute(){return g["ej-4"].execute},get reset(){return g["ej-4"].reset},children:(a,i)=>{var s=U();l(2),r(a,s)},$$slots:{default:!0}})}}});var y=u(S,8);m(y,{language:"JavaScript",children:(e,o)=>{l();var a=d();a.nodeValue=`const tw = gsap.to('#ej-1', {x: 100, y: 0})
// ...
// Se puede forzar su destrucción con:
tw.kill()
// Pero si se pierde su referencia también funcionaría:
tw = null
`,r(e,a)},$$slots:{default:!0}});var k=u(y,8);m(k,{language:"JavaScript",children:(e,o)=>{l();var a=d();a.nodeValue=`const tw = gsap.to('#caja', {
    scale: 2, 
    duration: 1,
    repeat: -1  // Se repite infinitamente
})

// Borrar la caja a los dos segundos
const borrarCaja = () => document.querySelector('#caja')
                                 .remove()
                                 
setTimeout(borrarCaja, 2000)`,r(e,a)},$$slots:{default:!0}}),l(10),r(C,$),L()}export{ae as component};
