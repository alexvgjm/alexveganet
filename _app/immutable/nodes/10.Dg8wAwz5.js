import"../chunks/CWj6FrbW.js";import{p as x,u as b,f as r,s as c,a as j,b as t,g as m,c as q,n as s}from"../chunks/BduZyM7k.js";import{C as p}from"../chunks/DlsCqhfG.js";import{g as u}from"../chunks/CH_iu5NA.js";import{u as C}from"../chunks/CgVzVCqa.js";import{C as h}from"../chunks/0WgYKyNH.js";var M=r('<div class="centrado svelte-344319" slot="right" style="position: relative"><div class="caja"></div></div>'),S=r('<div class="centrado svelte-344319" slot="right" style="position: relative"><div class="caja"></div></div>'),_=r(`<h1>Animaciones adaptativas (responsive)</h1> <p>Una de las dudas habituales que surgen cuando se aprende GSAP, relacionándolo
    con animaciones CSS, es qué ocurre con las media queries.</p> <p>A veces queremos animaciones distintas según múltiples preferencias del
sistema (como la preferencia de movimiento reducido), o según tamaños
de pantallas. GSAP proporciona una serie de mecanismos para que esta
tarea sea mucho más sencilla a través de <strong>matchMedia</strong>.</p> <h2>Uso básico de matchMedia</h2> <a href="https://gsap.com/docs/v3/GSAP/Tween/">Documentación oficial de gsap sobre matchMedia</a> <p>Esta función crea un objeto MatchMedia, al que le podemos añadir condiciones
    (media queries) y los tweens o timelines a ejecutar en consecuencia <a href="https://developer.mozilla.org/es/docs/Web/CSS/CSS_media_queries/Using_media_queries">media queries.</a></p> <p>Considera el siguiente código, que cambiará el sentido de rotación de
    la caja dependiendo
    tamaño de la pantalla (prueba a reajustar).</p> <!> <p>Es bastante autoexplicativo. Cuando se cumple una condición, se ejecuta
    su función. Además, las funciones devuelven a su vez otra función de
    limpieza, que será invocada cuando haya un cambio a otra función.</p> <p>Pero hay demasiado código repetido para solo cambiar un valor, ¿no?
    Tenemos solución.</p> <h2>Condiciones en MatchMedia</h2> <p>El mismo código puede simplificarse de la siguiente manera:</p> <!> <p>Como ves ahora usamos un objeto con distintas condiciones.
    Cuando se produce algún cambio, se llama a la función registrada, que
    recibirá un objeto de contexto donde hay, entre otra, información sobre qué
    condiciones se han cumplido.</p>`,1);function z(v,g){x(g,!0);function f(){u.matchMedia().add({isMovil:"(max-width: 576.999px)",isEscritorio:"(min-width: 577px)"},o=>{const{isMovil:e}=o.conditions,n=u.timeline({repeat:-1});return n.to(".caja",{rotate:e?-360:360,duration:3}),()=>{n.kill()}})}b(()=>{f(),C().hljs.highlightAll()});var d=_(),l=c(j(d),14);h(l,{gap:4,$$slots:{left:(a,o)=>{p(a,{slot:"left",language:"JavaScript",children:(e,n)=>{s();var i=m();i.nodeValue=`const mm = gsap.matchMedia() 

mm.add('(max-width: 576.999px)', () => {
    const tl = gsap.timeline({repeat: -1})
                .to('.caja', {
                    rotate: 360,
                    duration: 3,
                })

    return () => { tl.kill() }
})

mm.add('(min-width: 577px)', () => {
    const tl = gsap.timeline({repeat: -1})
                .to('.caja', {
                    rotate: -360,  
                    duration: 3 
                })

    return () => { tl.kill() }
}`,t(e,i)},$$slots:{default:!0}})},right:(a,o)=>{var e=M();t(a,e)}}});var $=c(l,10);h($,{gap:4,$$slots:{left:(a,o)=>{p(a,{slot:"left",language:"JavaScript",children:(e,n)=>{s();var i=m();i.nodeValue=`const mm = gsap.matchMedia()

mm.add({
    isMovil: '(max-width: 576.999px)',
    isEscritorio: '(min-width: 577px)'
}, (contexto) => {
    const tl = gsap.timeline({repeat: -1})
    tl.to('.caja', {
        rotate: (contexto.conditions.isMovil) ? -360 : 360,
        duration: 3,
    })

    return () => { tl.kill() }
})`,t(e,i)},$$slots:{default:!0}})},right:(a,o)=>{var e=S();t(a,e)}}}),s(2),t(v,d),q()}export{z as component};
