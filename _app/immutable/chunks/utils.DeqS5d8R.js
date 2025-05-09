var wu=Object.defineProperty;var Pu=(i,e,t)=>e in i?wu(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Rn=(i,e,t)=>Pu(i,typeof e!="symbol"?e+"":e,t);import{s as $t,c as ja,E as Pl,u as Wa,g as $a,a as Xa,e as Ru,n as wt,y as Ao,o as Wc,x as Lu}from"./scheduler.BXM2zGSH.js";import{S as Xt,i as Yt,e as x,s as y,a as b,o as kt,c as M,d as o,b as yt,x as jn,B as wo,f as r,g as _t,t as vt,j as gt,p as dt,q as pt,u as Rs,E as nl,k as Ct,r as C,l as St,m as Et,n as Tt,v as Rl,H as Du,F as Uu}from"./index.CQEGoPrw.js";import{j as Iu}from"./PostTag.svelte_svelte_type_style_lang.D06JldY0.js";/* empty css                                           */function Ll(i){let e,t;return{c(){e=x("div"),t=dt(i[0]),this.h()},l(n){e=b(n,"DIV",{class:!0});var a=kt(e);t=pt(a,i[0]),a.forEach(o),this.h()},h(){yt(e,"class","code-wrapper__lang svelte-fcvtd2")},m(n,a){r(n,e,a),_t(e,t)},p(n,a){a&1&&Rs(t,n[0])},d(n){n&&o(e)}}}function Dl(i){let e,t,n=i[4]?"on":"off",a,s,c;return{c(){e=x("button"),t=dt("Text wrap: "),a=dt(n),this.h()},l(l){e=b(l,"BUTTON",{class:!0});var u=kt(e);t=pt(u,"Text wrap: "),a=pt(u,n),u.forEach(o),this.h()},h(){yt(e,"class","code-wrapper__button svelte-fcvtd2")},m(l,u){r(l,e,u),_t(e,t),_t(e,a),s||(c=nl(e,"click",i[11]),s=!0)},p(l,u){u&16&&n!==(n=l[4]?"on":"off")&&Rs(a,n)},d(l){l&&o(e),s=!1,c()}}}function Ul(i){let e,t,n,a;return{c(){e=x("button"),t=dt(i[6]),this.h()},l(s){e=b(s,"BUTTON",{class:!0});var c=kt(e);t=pt(c,i[6]),c.forEach(o),this.h()},h(){yt(e,"class","code-wrapper__button svelte-fcvtd2")},m(s,c){r(s,e,c),_t(e,t),n||(a=nl(e,"click",i[8]),n=!0)},p(s,c){c&64&&Rs(t,s[6])},d(s){s&&o(e),n=!1,a()}}}function Nu(i){let e,t,n,a,s,c,l,u,p,d=i[2]&&Ll(i),v=i[1]&&Dl(i),f=i[3]&&Ul(i);const g=i[10].default,T=ja(g,i,i[9],null);return{c(){e=x("div"),d&&d.c(),t=y(),n=x("div"),v&&v.c(),a=y(),f&&f.c(),s=y(),c=x("pre"),l=x("code"),T&&T.c(),this.h()},l(S){e=b(S,"DIV",{class:!0,style:!0});var h=kt(e);d&&d.l(h),t=M(h),n=b(h,"DIV",{class:!0});var m=kt(n);v&&v.l(m),a=M(m),f&&f.l(m),m.forEach(o),s=M(h),c=b(h,"PRE",{class:!0});var L=kt(c);l=b(L,"CODE",{class:!0});var P=kt(l);T&&T.l(P),P.forEach(o),L.forEach(o),h.forEach(o),this.h()},h(){yt(n,"class","code-wrapper__buttons svelte-fcvtd2"),yt(l,"class",u=Pl(`language-${i[0].toLowerCase()}`)+" svelte-fcvtd2"),yt(c,"class","svelte-fcvtd2"),yt(e,"class","code-wrapper svelte-fcvtd2"),jn(e,"--lang-color",i[2]?i[7][i[0]]:"transparent"),wo(e,"code-wrapper__line-wrap",i[4])},m(S,h){r(S,e,h),d&&d.m(e,null),_t(e,t),_t(e,n),v&&v.m(n,null),_t(n,a),f&&f.m(n,null),_t(e,s),_t(e,c),_t(c,l),T&&T.m(l,null),i[12](l),p=!0},p(S,[h]){S[2]?d?d.p(S,h):(d=Ll(S),d.c(),d.m(e,t)):d&&(d.d(1),d=null),S[1]?v?v.p(S,h):(v=Dl(S),v.c(),v.m(n,a)):v&&(v.d(1),v=null),S[3]?f?f.p(S,h):(f=Ul(S),f.c(),f.m(n,null)):f&&(f.d(1),f=null),T&&T.p&&(!p||h&512)&&Wa(T,g,S,S[9],p?Xa(g,S[9],h,null):$a(S[9]),null),(!p||h&1&&u!==(u=Pl(`language-${S[0].toLowerCase()}`)+" svelte-fcvtd2"))&&yt(l,"class",u),(!p||h&5)&&jn(e,"--lang-color",S[2]?S[7][S[0]]:"transparent"),(!p||h&16)&&wo(e,"code-wrapper__line-wrap",S[4])},i(S){p||(vt(T,S),p=!0)},o(S){gt(T,S),p=!1},d(S){S&&o(e),d&&d.d(),v&&v.d(),f&&f.d(),T&&T.d(S),i[12](null)}}}function qu(i,e,t){let{$$slots:n={},$$scope:a}=e,{language:s}=e,{showLineWrapButton:c=!1}=e,{showLanguage:l=!0}=e,{showCopyButton:u=!1}=e;const p={CSS:"#2965f1",HTML:"#e34c26",TypeScript:"#3178c6",JavaScript:"#f1dd35"};let d=!1,v,f="📃 Copiar",g=-1;function T(){navigator.clipboard.writeText(v.textContent),t(6,f="¡Copiado!"),clearTimeout(g),g=setTimeout(()=>t(6,f="📃 Copiar"),2e3)}const S=()=>{t(4,d=!d)};function h(m){Ru[m?"unshift":"push"](()=>{v=m,t(5,v)})}return i.$$set=m=>{"language"in m&&t(0,s=m.language),"showLineWrapButton"in m&&t(1,c=m.showLineWrapButton),"showLanguage"in m&&t(2,l=m.showLanguage),"showCopyButton"in m&&t(3,u=m.showCopyButton),"$$scope"in m&&t(9,a=m.$$scope)},[s,c,l,u,d,v,f,p,T,a,n,S,h]}class Nn extends Xt{constructor(e){super(),Yt(this,e,qu,Nu,$t,{language:0,showLineWrapButton:1,showLanguage:2,showCopyButton:3})}}function Il(i){let e,t;return{c(){e=x("div"),t=dt(i[0]),this.h()},l(n){e=b(n,"DIV",{class:!0});var a=kt(e);t=pt(a,i[0]),a.forEach(o),this.h()},h(){yt(e,"class","info-box__title")},m(n,a){r(n,e,a),_t(e,t)},p(n,a){a&1&&Rs(t,n[0])},d(n){n&&o(e)}}}function Fu(i){let e,t,n,a=i[0]&&Il(i);const s=i[3].default,c=ja(s,i,i[2],null);return{c(){e=x("div"),a&&a.c(),t=y(),c&&c.c(),this.h()},l(l){e=b(l,"DIV",{class:!0});var u=kt(e);a&&a.l(u),t=M(u),c&&c.l(u),u.forEach(o),this.h()},h(){yt(e,"class","info-box svelte-16gsg44")},m(l,u){r(l,e,u),a&&a.m(e,null),_t(e,t),c&&c.m(e,null),n=!0},p(l,[u]){l[0]?a?a.p(l,u):(a=Il(l),a.c(),a.m(e,t)):a&&(a.d(1),a=null),c&&c.p&&(!n||u&4)&&Wa(c,s,l,l[2],n?Xa(s,l[2],u,null):$a(l[2]),null)},i(l){n||(vt(c,l),n=!0)},o(l){gt(c,l),n=!1},d(l){l&&o(e),a&&a.d(),c&&c.d(l)}}}function Ou(i,e,t){let{$$slots:n={},$$scope:a}=e,{title:s}=e,{infoType:c}=e;return i.$$set=l=>{"title"in l&&t(0,s=l.title),"infoType"in l&&t(1,c=l.infoType),"$$scope"in l&&t(2,a=l.$$scope)},[s,c,a,n]}class Xn extends Xt{constructor(e){super(),Yt(this,e,Ou,Fu,$t,{title:0,infoType:1})}}function zu(i){let e,t=`NOTA: Dead Cells no es libre, es software privativo. No entraré en el 
debate de si un videojuego debe ser libre para que sea ético porque en años no
he conseguido tener una posición clara al respecto. Podría considerar que es 
suficiente que las herramientas que permiten su elaboración lo sean, pues las 
ramas artísticas sufren demasiado en nuestro modelo económico como para 
simplemente liberar los resultados del trabajo creativo enfocado a 
entretenimiento, y más siendo el trabajo de toda una vida.`,n,a,s=`En todo caso, considero 
que como parte vital de la cultura deben ser más accesibles, pero en estos 
contextos lamentablemente libre y accesible significa también gratis para la 
mayoría dada la libertad de libre distribución.`;return{c(){e=x("p"),e.textContent=t,n=y(),a=x("p"),a.textContent=s},l(c){e=b(c,"P",{"data-svelte-h":!0}),C(e)!=="svelte-1rd2zn1"&&(e.textContent=t),n=M(c),a=b(c,"P",{"data-svelte-h":!0}),C(a)!=="svelte-1qmx001"&&(a.textContent=s)},m(c,l){r(c,e,l),r(c,n,l),r(c,a,l)},p:wt,d(c){c&&(o(e),o(n),o(a))}}}function Bu(i){let e,t=`Opinión algo impopular: el trabajador autónomo no existe y el trabajo no es un
orgullo. Iré por partes en esta entrada que repasa algunos
conceptos que se consideran importantes en la enseñanza de formación
profesional pero no en la universidad 🤷‍♂️.`,n,a,s="El autónomo no existe",c,l,u=`Siempre que digo que soy autónomo siento que suelto una incoherencia. ¿Cómo puede alguien
considerarse autónomo si necesita permiso y pagar para serlo?
La única diferencia es que tu jefe es un ente inflexible llamado estado,
que concentra poderes contra los que no puedes luchar de manera individual.`,p,d,v=`Para muchos, ser autónomo significa vivir
en la falsa creencia de tener control sobre su vida laboral, rehuyendo de la
cooperación y defensa laboral colectiva, bajando la cabeza porque:`,f,g,T=`<li>Ya conocía los términos y los aceptó: “es lo que toca” suele pensar.</li> <li>Sabe que de forma individual no tiene ningún poder y que salvo sectores muy
concretos la huelga es inefectiva y solo dará paso a otros autónomos oportunistas.</li> <li>Cree que los sindicatos no le apoyarán. Probablemente debido a que los sindicatos
de autónomos son un chiste.
<ul><li>A ver, si te presentas usando la palabra “autónomo” ante la CNT se reirán en tu cara mientras te señalan al edificio de hacienda más cercano, pero eso no significa que no te consideren un trabajador ni vayan a pasar de ti. Otra cosa es que puedan conseguir algo.</li></ul></li> <li>Se vuelve parte de uno el quejarse de hacienda y cuánto le están reventando.
Es como la vecina que presume de dolencias.</li>`,S,h,m=`Yo no me libro, e intento convencerme cada día de que al menos tengo libertad
para mandar al carajo al cliente o lo que esté haciendo y ya, sin ninguna carga
de responsabilidad. Lo cierto es que no es algo que haría, por ética, pero que
en teoría se puede.`,L,P,q=`En teoría, un trabajador asalariado goza de la misma libertad: una relación laboral exige
voluntariedad <small>(discutible con excepciones de servicios públicos ante
emergencias nacionales de extrema necesidad, como el caso de bomberos o
sanitarios)</small>, así que en teoría,
la mayoría puede mandar al carajo su trabajo cuando quiera (xd…).`,V,I,H=`La voluntariedad en el contexto del derecho laboral en la relación laboral
significa que nadie puede obligarte a trabajar (ni el estado). En ese
sentido el trabajo tiene carácter voluntario (que no significa no remunerado). Claro,
igual de voluntario que comer, e igual de voluntario que pagar un alquiler.
Igual de voluntario que no rajarse las venas.`,z,w,A="La ajenidad",B,W,Y=`Me he críado escuchando un conjunto de falacias
fundamentada en una especie de incoherente orgullo obrero, que en algún
momento acabé interiorizando como algo racional: “yo tengo X años cotizados”,
“yo llevo trabajando desde los 15 años”, “tú no sabes lo que es trabajar”, etc.`,X,te,se=`Yo solo escucho “he intercambiado X tiempo de mi vida por dinero y la promesa
de más dinero”. Y no cualquier tiempo de su vida, sino de su juventud. Esto
ni siquiera se puede tildar de reduccionista.`,de,$,De=`No entiendo cómo algunos casos que son claros
signos de sumisión son considerados dignos de orgullo. Veo gente
pasando años trabajando para una empresa para la que solo es un recurso,
un trozo de carne o engranaje en su máquina de hacer dinero, y que muestran con orgullo los
días cotizados como si fuera ejemplo de disciplina o autodesarrollo, una
cicatriz de una épica batalla ganada. Eso mientras viven
en la realidad consumista desenfrenada de un capitalismo predatorio donde
no están construyendo ningún futuro y donde están igual que como empezaron,
salvo que con media vida convertida a promesas de una pensión.`,ie,me,We=`Y tengo un serio problema con eso. Concretamente con la ajenidad. Cuando la
patronal describe la ajenidad puede hacerlo de una forma tan bonita como:`,ze,J,Ee=`“Exención al trabajador de las consecuencias directas de su labor, de sus costos
y riesgos de la producción, recibiendo un salario en contraprestación de su esfuerzo”.`,Re,Se,Be=`Cuando podría resumirse en: “los frutos del trabajo solo pertenecen al empleador”
y que yo extiendo con “y no importa si el trabajador realiza una actividad creativa
con la que el empleador va a seguir cobrando toda su vida. Se paga por su esfuerzo
presente limitado a la duración de la relación laboral.”`,ce,Te,it="La ajenidad en los trabajos creativos",F,Ge,nt=`El problema de la ajenidad es que viene acompañado de cadenas para tu
cerebro cuando se trata de un desarrollo creativo. Cadenas que permanecen
tras el cese de la relación laboral.`,He,Le,st=`En realidad, el empleador no es solo dueño de las consecuencias del trabajo
y sus frutos, es dueño del trabajo en sí mismo y de una parte de ti. Ejemplo:
como desarrollador de herramientas y metodologías custom, se te ocurre alguna
cosita en tu actividad laboral que facilita muchos procesos y ayuda al resto
del equipo, algo muy común en el trabajo de un experto en Developer Experience
o un enablement engineer.`,Ue,Fe,O=`Consideras que tu desarrollo podría ser igual de útil para otros profesionales
o empresas, así que lo publicas por tu cuenta aportando a la comunidad. Al final
sale de tu cabeza, ¿no? Pues no. Saldrá de tu cabeza, pero te han pagado un
salario para que la tengas pudriéndose en ella.`,_,R,ne=`De pronto, ya no tienes solo un jefe, tienes a un maestro de esclavos que te
dice qué puedes hacer o no con tu investigación y tus ideas, porque en el fondo
no son tuyas, amenazando con poderes judiciales si quieres
tan solo compartirlo altruistamente, ya no digamos monetizarlo por tu cuenta.`,pe,he,Ve=`La acusación más típica y mínima es que tu idea puede o pudo dar una ventaja
frente a la competencia mientras se te pagó por ello y que si tú la estás
exponiendo, estás apoyando a dicha competencia. Acusaciones relacionadas a
la concurrencia desleal <small>(la palabra concurrencia no implica “mientras
trabajas en”. Da igual si esto ocurre tras finalizar contrato).</small>`,Ae,Ie,$e="Anarcosindicalismo y cooperativas",k,_e,et=`Duele, pero he de reconocer que entre los franceses hay algunos
de los mejores ejemplos recientes que nos ha brindado la humanidad. No hablo
de Gojira, que también, sino en este contexto laboral, de Motion Twin.`,Z,ve,Xe=`Es la empresa que más uso como ejemplo de increíble modelo de desarrollo de
software, tooling y videojuegos. Eso al margen de sus tendencias políticas o
su organización laboral (al menos en sus inicios), que comentaré luego.`,Je,ct,G=`Este grupo de colegas centraba su trabajo en el desarrollo de juegos usando
Adobe Flash. Entre ellos se encontraba Nicolas Cannasse desarrollando un
lenguaje de alta abstracción y extremadamente orientado a multiplataforma
desde 2005.`,we,Ce,ye=`Cuando Flash murió ya tenían más que pulido su lenguaje Haxe y casi una década
de iniciado su propio motor de renderizado/videojuegos, Heaps.io.`,Pe,Ze,tt=`Con eso, trabajando con sus propias herramientas de la manera que a ellos les
gustaba, desarrollaron la joya de Dead Cells, con más de 10 millones de copias
vendidas sin contar DLCs. Y creo que sin tener en cuenta las más de 5 millones
en su versión Android ni la asociación con plataformas estilo Netflix.`,ot,ut,Ke=`Siendo un juego que no frecuenta ofertas de bundles a precios regalados ni
nada similar, al multiplicar verás que hablamos de millones facturados (incluso
aunque solo costase 50 céntimos). Para
un pequeño equipo de 8 personas creo que da suficiente para unas cuantas vidas.
Pero hay otras cosillas interesantes:`,ft,mt,Q=`<li>Se describen como una cooperativa de trabajadores (puedes leer las descripciones
en su propia página, dentro de una pedazo de estrella roja). En entrevistas no
hablan precisamente pocas veces de cooperativa anarcosindicalista.
<ul><li>Importante aclarar que el tiempo ha transcurrido y han fundado otro
estudio anexo que se aleja de esta perspectiva.</li></ul></li> <li>Sus herramientas principales son libres y compartidas con la comunidad. Cualquier
persona que las tenga dispone de las cuatro libertades fundamentales
del software libre y de código abierto. Comprenden que el éxito de un videojuego como producto
artístico está vinculado al cómo se usan las herramientas y no a la posesión
de las mismas. Podríamos considerar a las herramientas como
el medio de producción.</li>`,Ne,xt,fe,qe,Lt=`Han hecho muchas cosas bien, ¿pero se salvan de algo? Las cooperativas fomentan
el carácter asociativo y el rechazo a una organización vertical
y jerarquías de poder en el contexto laboral, con una única excepción: el estado.
Ninguna diferencia con el supuesto autónomo, más allá de posibles “beneficios”
fiscales pasados ciertos umbrales. El beneficio de pagar un poquito menos al
estado soberano, que repartirá sabiamente el dinero entre ayuntamientos para
cubrir necesidades esenciales, como organizar conciertos de Camela si fuera
España.`,bt,re,Ye=`En su caso además habrán tenido que bajar la cabeza con todo tipo de individuos
y empresas abusivas como lo es Steam, llevándose hasta un posible 50%
por distribución en su plataforma.`,Dt,qt,Kt="Mi única condición en cualquier trabajo",oe,E,ee=`Lo único que solicito a empresas que por alguna incomprensible razón me
quieren en su plantilla es la anulación de la ajenidad, aunque
eso implique a veces mayores responsabilidades o trabajar a puro equity. Todo mi
trabajo me pertenece, o al menos en una parte considerable como para no sufrir
consecuencias si quiero publicarlo bajo mis propias condiciones.`,ue,le,ae=`La mayoría se esfuma y no vuelven a contactarme en la vida, pero a veces cuela.
He conseguido algunos porcentajes por derechos de autor en software de la
rama sanitaria con este modelo.`,Oe,ke,at=`Si hago cuentas, muy probablemente esto me reporte bastante menos que haber
aceptado un contrato de asalariado, pero al menos tengo control sobre su destino. Y
esto beneficia a la parte contratante, que no sería contratante
sino socio. No solo reduce la responsabilidad fiscal, reduce los riesgos y los
costes al no contratar, también asegura una mayor implicación del
profesional que al final pasa a ser parte del proyecto y sus resultados, que se
preocupará de su éxito porque de él depende su reputación y sus beneficios.`,Qe,j,N=`También existen empresas que en su modelo de desarrollo no tienen
ningún miedo y fomentan la publicación de herramientas y metodologías
sabiendo que eso manifiesta una imagen de excelencia y seguridad en lo que hacen.`,ge,ht,Ot=`A su vez mejoran las capacidades divulgativas y visibilizan a sus desarrolladores,
generando al menos un ambiente de mayor crecimiento profesional.
Pese a la ajenidad, en ellas sabes que el trabajo que desarrollas al menos no
estará anclado a nadie y hasta se te agradecería el divulgarlo.`,Pt,Ht,Ut="Esto no es solo mi trabajo",lt,Ft,Mt=`Al menos la parte de desarrollo propio,
tooling y subnormaladas gráficas, seguiré haciéndolo me de o no dinero, incluso
pagaría si tuviera que hacerlo. Sobre la consultoría hablaré en otra entrada.`,jt,Vt,Jt=`La suerte de que mi hobby es especialmente
rentable, y la mala suerte de vivir en una sociedad donde te llaman
“nini” de manera peyorativa por no explotar el conocimiento
o habilidad, por no querer convertirme en carne para una corporación o por ver 20 años de
retraso en el mundo académico y no querer tocarlo ni con un palo.`,ln,At,pn=`En la segunda parte hablaré un poco más sobre mis intereses en
un trabajo, pero adelanto que el último de ellos es el dinero (sin renunciar
a ello, tampoco soy tonto). Todos mis hobbies son baratos o gratuitos,
no soy coleccionista de ninguna cosa y practico una filosofía minimalista
por naturaleza, no es que lo fuerce. Mucho dinero tendrían que ofrecerme
para conseguir verme tentado a trabajar en algo con lo que no esté cómodo.`,cn,zt,Hn=`Me dice un colega “si no fueras tan vago, trabajarías menos”
(no es una errata, es una frase con mucho sentido), pero es que se
me hace un mundo hincar la rodilla, bajar la cabeza o pasar por el aro. Ya lo
hice durante algunos años, moviéndome por miedo al juicio ajeno, por no
decepcionar y yendo en contra de mi naturaleza. Acabé consiguiendo lo contrario,
petando de mala manera, aislándome, alejando y decepcionando a todos los que
confiaban en mí.`,fn,Wt,Di=`Por otra parte cada vez tolero menos las normas y las jerarquías absurdas de
los ambientes corporativos y académicos. En el momento en el
que alguien me diga alguna incoherencia como que tengo que cumplir con
un horario de trabajo “porque sí”, aunque eso fastidie mi productividad,
perjudicándome a mí y a los objetivos de la empresa, me piraría a mi casa.`,Dn;return xt=new Xn({props:{$$slots:{default:[zu]},$$scope:{ctx:i}}}),{c(){e=x("p"),e.textContent=t,n=y(),a=x("h2"),a.textContent=s,c=y(),l=x("p"),l.textContent=u,p=y(),d=x("p"),d.textContent=v,f=y(),g=x("ul"),g.innerHTML=T,S=y(),h=x("p"),h.textContent=m,L=y(),P=x("p"),P.innerHTML=q,V=y(),I=x("p"),I.textContent=H,z=y(),w=x("h2"),w.textContent=A,B=y(),W=x("p"),W.textContent=Y,X=y(),te=x("p"),te.textContent=se,de=y(),$=x("p"),$.textContent=De,ie=y(),me=x("p"),me.textContent=We,ze=y(),J=x("p"),J.textContent=Ee,Re=y(),Se=x("p"),Se.textContent=Be,ce=y(),Te=x("h3"),Te.textContent=it,F=y(),Ge=x("p"),Ge.textContent=nt,He=y(),Le=x("p"),Le.textContent=st,Ue=y(),Fe=x("p"),Fe.textContent=O,_=y(),R=x("p"),R.textContent=ne,pe=y(),he=x("p"),he.innerHTML=Ve,Ae=y(),Ie=x("h2"),Ie.textContent=$e,k=y(),_e=x("p"),_e.textContent=et,Z=y(),ve=x("p"),ve.textContent=Xe,Je=y(),ct=x("p"),ct.textContent=G,we=y(),Ce=x("p"),Ce.textContent=ye,Pe=y(),Ze=x("p"),Ze.textContent=tt,ot=y(),ut=x("p"),ut.textContent=Ke,ft=y(),mt=x("ul"),mt.innerHTML=Q,Ne=y(),Ct(xt.$$.fragment),fe=y(),qe=x("p"),qe.textContent=Lt,bt=y(),re=x("p"),re.textContent=Ye,Dt=y(),qt=x("h2"),qt.textContent=Kt,oe=y(),E=x("p"),E.textContent=ee,ue=y(),le=x("p"),le.textContent=ae,Oe=y(),ke=x("p"),ke.textContent=at,Qe=y(),j=x("p"),j.textContent=N,ge=y(),ht=x("p"),ht.textContent=Ot,Pt=y(),Ht=x("h2"),Ht.textContent=Ut,lt=y(),Ft=x("p"),Ft.textContent=Mt,jt=y(),Vt=x("p"),Vt.textContent=Jt,ln=y(),At=x("p"),At.textContent=pn,cn=y(),zt=x("p"),zt.textContent=Hn,fn=y(),Wt=x("p"),Wt.textContent=Di},l(K){e=b(K,"P",{"data-svelte-h":!0}),C(e)!=="svelte-1wpyji2"&&(e.textContent=t),n=M(K),a=b(K,"H2",{"data-svelte-h":!0}),C(a)!=="svelte-3yagm2"&&(a.textContent=s),c=M(K),l=b(K,"P",{"data-svelte-h":!0}),C(l)!=="svelte-1wzutex"&&(l.textContent=u),p=M(K),d=b(K,"P",{"data-svelte-h":!0}),C(d)!=="svelte-9h728s"&&(d.textContent=v),f=M(K),g=b(K,"UL",{"data-svelte-h":!0}),C(g)!=="svelte-1oqcb4b"&&(g.innerHTML=T),S=M(K),h=b(K,"P",{"data-svelte-h":!0}),C(h)!=="svelte-ph3yn2"&&(h.textContent=m),L=M(K),P=b(K,"P",{"data-svelte-h":!0}),C(P)!=="svelte-h8edyk"&&(P.innerHTML=q),V=M(K),I=b(K,"P",{"data-svelte-h":!0}),C(I)!=="svelte-frlbaz"&&(I.textContent=H),z=M(K),w=b(K,"H2",{"data-svelte-h":!0}),C(w)!=="svelte-1afsrt5"&&(w.textContent=A),B=M(K),W=b(K,"P",{"data-svelte-h":!0}),C(W)!=="svelte-15gqcak"&&(W.textContent=Y),X=M(K),te=b(K,"P",{"data-svelte-h":!0}),C(te)!=="svelte-19ha8i3"&&(te.textContent=se),de=M(K),$=b(K,"P",{"data-svelte-h":!0}),C($)!=="svelte-80o8sg"&&($.textContent=De),ie=M(K),me=b(K,"P",{"data-svelte-h":!0}),C(me)!=="svelte-1kcl7s"&&(me.textContent=We),ze=M(K),J=b(K,"P",{"data-svelte-h":!0}),C(J)!=="svelte-1l9qmbt"&&(J.textContent=Ee),Re=M(K),Se=b(K,"P",{"data-svelte-h":!0}),C(Se)!=="svelte-1y06dud"&&(Se.textContent=Be),ce=M(K),Te=b(K,"H3",{"data-svelte-h":!0}),C(Te)!=="svelte-98m34g"&&(Te.textContent=it),F=M(K),Ge=b(K,"P",{"data-svelte-h":!0}),C(Ge)!=="svelte-v7iwr3"&&(Ge.textContent=nt),He=M(K),Le=b(K,"P",{"data-svelte-h":!0}),C(Le)!=="svelte-cs5hk7"&&(Le.textContent=st),Ue=M(K),Fe=b(K,"P",{"data-svelte-h":!0}),C(Fe)!=="svelte-19jdwc4"&&(Fe.textContent=O),_=M(K),R=b(K,"P",{"data-svelte-h":!0}),C(R)!=="svelte-17ozwnn"&&(R.textContent=ne),pe=M(K),he=b(K,"P",{"data-svelte-h":!0}),C(he)!=="svelte-1otmt5n"&&(he.innerHTML=Ve),Ae=M(K),Ie=b(K,"H2",{"data-svelte-h":!0}),C(Ie)!=="svelte-1ronoj4"&&(Ie.textContent=$e),k=M(K),_e=b(K,"P",{"data-svelte-h":!0}),C(_e)!=="svelte-r19z87"&&(_e.textContent=et),Z=M(K),ve=b(K,"P",{"data-svelte-h":!0}),C(ve)!=="svelte-aa3yu9"&&(ve.textContent=Xe),Je=M(K),ct=b(K,"P",{"data-svelte-h":!0}),C(ct)!=="svelte-ilbqh8"&&(ct.textContent=G),we=M(K),Ce=b(K,"P",{"data-svelte-h":!0}),C(Ce)!=="svelte-1lolwil"&&(Ce.textContent=ye),Pe=M(K),Ze=b(K,"P",{"data-svelte-h":!0}),C(Ze)!=="svelte-j76t9r"&&(Ze.textContent=tt),ot=M(K),ut=b(K,"P",{"data-svelte-h":!0}),C(ut)!=="svelte-t95qk"&&(ut.textContent=Ke),ft=M(K),mt=b(K,"UL",{"data-svelte-h":!0}),C(mt)!=="svelte-1dshv2p"&&(mt.innerHTML=Q),Ne=M(K),St(xt.$$.fragment,K),fe=M(K),qe=b(K,"P",{"data-svelte-h":!0}),C(qe)!=="svelte-19gb4g2"&&(qe.textContent=Lt),bt=M(K),re=b(K,"P",{"data-svelte-h":!0}),C(re)!=="svelte-om5qlr"&&(re.textContent=Ye),Dt=M(K),qt=b(K,"H2",{"data-svelte-h":!0}),C(qt)!=="svelte-18licbm"&&(qt.textContent=Kt),oe=M(K),E=b(K,"P",{"data-svelte-h":!0}),C(E)!=="svelte-u8yqg9"&&(E.textContent=ee),ue=M(K),le=b(K,"P",{"data-svelte-h":!0}),C(le)!=="svelte-144nme8"&&(le.textContent=ae),Oe=M(K),ke=b(K,"P",{"data-svelte-h":!0}),C(ke)!=="svelte-1fksa9d"&&(ke.textContent=at),Qe=M(K),j=b(K,"P",{"data-svelte-h":!0}),C(j)!=="svelte-1koj3tz"&&(j.textContent=N),ge=M(K),ht=b(K,"P",{"data-svelte-h":!0}),C(ht)!=="svelte-crdp6j"&&(ht.textContent=Ot),Pt=M(K),Ht=b(K,"H2",{"data-svelte-h":!0}),C(Ht)!=="svelte-7u7yf2"&&(Ht.textContent=Ut),lt=M(K),Ft=b(K,"P",{"data-svelte-h":!0}),C(Ft)!=="svelte-171tqxj"&&(Ft.textContent=Mt),jt=M(K),Vt=b(K,"P",{"data-svelte-h":!0}),C(Vt)!=="svelte-1eeo9ne"&&(Vt.textContent=Jt),ln=M(K),At=b(K,"P",{"data-svelte-h":!0}),C(At)!=="svelte-dnf6u"&&(At.textContent=pn),cn=M(K),zt=b(K,"P",{"data-svelte-h":!0}),C(zt)!=="svelte-1hxg1uq"&&(zt.textContent=Hn),fn=M(K),Wt=b(K,"P",{"data-svelte-h":!0}),C(Wt)!=="svelte-suc7at"&&(Wt.textContent=Di)},m(K,je){r(K,e,je),r(K,n,je),r(K,a,je),r(K,c,je),r(K,l,je),r(K,p,je),r(K,d,je),r(K,f,je),r(K,g,je),r(K,S,je),r(K,h,je),r(K,L,je),r(K,P,je),r(K,V,je),r(K,I,je),r(K,z,je),r(K,w,je),r(K,B,je),r(K,W,je),r(K,X,je),r(K,te,je),r(K,de,je),r(K,$,je),r(K,ie,je),r(K,me,je),r(K,ze,je),r(K,J,je),r(K,Re,je),r(K,Se,je),r(K,ce,je),r(K,Te,je),r(K,F,je),r(K,Ge,je),r(K,He,je),r(K,Le,je),r(K,Ue,je),r(K,Fe,je),r(K,_,je),r(K,R,je),r(K,pe,je),r(K,he,je),r(K,Ae,je),r(K,Ie,je),r(K,k,je),r(K,_e,je),r(K,Z,je),r(K,ve,je),r(K,Je,je),r(K,ct,je),r(K,we,je),r(K,Ce,je),r(K,Pe,je),r(K,Ze,je),r(K,ot,je),r(K,ut,je),r(K,ft,je),r(K,mt,je),r(K,Ne,je),Et(xt,K,je),r(K,fe,je),r(K,qe,je),r(K,bt,je),r(K,re,je),r(K,Dt,je),r(K,qt,je),r(K,oe,je),r(K,E,je),r(K,ue,je),r(K,le,je),r(K,Oe,je),r(K,ke,je),r(K,Qe,je),r(K,j,je),r(K,ge,je),r(K,ht,je),r(K,Pt,je),r(K,Ht,je),r(K,lt,je),r(K,Ft,je),r(K,jt,je),r(K,Vt,je),r(K,ln,je),r(K,At,je),r(K,cn,je),r(K,zt,je),r(K,fn,je),r(K,Wt,je),Dn=!0},p(K,[je]){const kn={};je&1&&(kn.$$scope={dirty:je,ctx:K}),xt.$set(kn)},i(K){Dn||(vt(xt.$$.fragment,K),Dn=!0)},o(K){gt(xt.$$.fragment,K),Dn=!1},d(K){K&&(o(e),o(n),o(a),o(c),o(l),o(p),o(d),o(f),o(g),o(S),o(h),o(L),o(P),o(V),o(I),o(z),o(w),o(B),o(W),o(X),o(te),o(de),o($),o(ie),o(me),o(ze),o(J),o(Re),o(Se),o(ce),o(Te),o(F),o(Ge),o(He),o(Le),o(Ue),o(Fe),o(_),o(R),o(pe),o(he),o(Ae),o(Ie),o(k),o(_e),o(Z),o(ve),o(Je),o(ct),o(we),o(Ce),o(Pe),o(Ze),o(ot),o(ut),o(ft),o(mt),o(Ne),o(fe),o(qe),o(bt),o(re),o(Dt),o(qt),o(oe),o(E),o(ue),o(le),o(Oe),o(ke),o(Qe),o(j),o(ge),o(ht),o(Pt),o(Ht),o(lt),o(Ft),o(jt),o(Vt),o(ln),o(At),o(cn),o(zt),o(fn),o(Wt)),Tt(xt,K)}}}const Hu={title:"Autonomía y ajenidad (parte 1)",slug:"autonomia-ajenidad-1",coverImage:"/src/assets/posts-covers/starfish.jpg",coverPosition:"normal",coverAuthor:"Pedro Lastra",excerpt:"El trabajador autónomo no existe y el trabajo no es un orgullo.",date:"2024-08-24T13:06:23.177Z",updated:"2024-08-24T13:06:23.903Z",hidden:!1,tags:["Personal","Laboral","Software libre"],keywords:["trabajo","autónomo"],type:"default"};class ku extends Xt{constructor(e){super(),Yt(this,e,null,Bu,$t,{})}}const Vu=Object.freeze(Object.defineProperty({__proto__:null,default:ku,metadata:Hu},Symbol.toStringTag,{value:"Module"}));function Gu(i){let e,t,n="AVISO: he escrito esto muy rápido en algo de rato libre, espera encontrar más de alguna errata o párrafo sobrecargado hasta que saque tiempo a revisarlo.";return{c(){e=dt(`No voy a centrarme en los hechos principales de este caso, sino en
algunos datos interesantes y relacionados con nuestra actividad, pero daré
algo de contexto adicional que no suele explicarse en otros artículos.
`),t=x("p"),t.textContent=n,this.h()},l(a){e=pt(a,`No voy a centrarme en los hechos principales de este caso, sino en
algunos datos interesantes y relacionados con nuestra actividad, pero daré
algo de contexto adicional que no suele explicarse en otros artículos.
`),t=b(a,"P",{style:!0,"data-svelte-h":!0}),C(t)!=="svelte-ji7l8p"&&(t.textContent=n),this.h()},h(){jn(t,"margin-top","0.5rem"),jn(t,"line-height","1.25rem"),jn(t,"color","var(--color-second-light)")},m(a,s){r(a,e,s),r(a,t,s)},p:wt,d(a){a&&(o(e),o(t))}}}function ju(i){let e,t,n,a="Ha pasado más de una década desde que se registró el primer incidente relacionado con uno de los tantos casos de acoso y abuso sexual que salieron a la luz en un periodo muy turbulento para la industria de los videojuegos. Este caso, conocido popularmente como el “Caso de la suite Cosby” o más formalmente como la “Demanda del Departamento de Igualdad en el Empleo y la Vivienda de California (DFEH, por sus siglas en inglés) contra Activision Blizzard”, se centró especialmente en la investigación de asuntos de acoso sexual, entre ellos el suicidio de Kerri Moynihan.",s,c,l="No me gusta la denominación formal, sentida como utilizada deliberadamente para reducir el alcance del problema a un asunto de jurisdicción local y de intereses variables. Un caso iniciado de esta manera es aprovechado por las corporaciones como parte de una estrategia a largo plazo, esperando que eventualmente caiga en manos de un gobierno más favorable. El DFEH, ahora renombrado como el Departamento de Derechos Civiles de California (CRD), tampoco está exento de polémica.",u,p,d="En las corporaciones, el “non bis in idem” (“no dos veces por lo mismo”, recogido en la mayoría de países de occidente en forma de artículo en constitución que otorga el derecho a no volver a ser juzgado por la misma causa), es usado como una herramienta más. Permite elegir el momento oportuno para ser juzgado por algo indefendible, ante la entidad más conveniente, en el lugar más adecuado y con el mayor número de acusaciones posibles de golpe. Así, se minimiza cualquier impacto sobre la corporación y se intenta resolver todo en un único proceso.",v,f,g=`Sin ánimo de quitar hierro al asunto, la suite Cosby era una conveniente portada
para una gigante montaña de denuncias y toxicidad que habían creado un
entorno de alta “fluidez laboral”, una forma de decir que nadie quería trabajar
ahí y que había ciclado la mayoría de la plantilla, no quedando ni una cuarta
parte de la Blizzard original ni sus ideas. El caso de la Suite Cosby era lo
bastante mediático para ser la punta de lanza en una demanda, y lo
suficientemente barato de solucionar.`,T,S,h=`Pero la demanda de la DFEH no parece haber sido la idónea para
Activision Blizzard,
sino una escala inevitable tras el insulto inicial propuesto por la Comisión de
Oportunidad y Empleo Igualitario (EEOC, del inglés), de ofrecer una indemnización
de unos $18 millones, a repartir entre todos los empleados en plantilla entre
2016 y 2021. Unos 10000 empleados, incluyendo hombres y mujeres 🤷‍♂️.
Con un reparto igualitario como el que se proponía, correspondía a $1800 dólares
por empleado en acuerdo llevado mediante decreto de consentimiento.`,m,L,P=`Si eso no suena lo suficientemente absurdo, para el cálculo de los
18 millones solo se tuvo en cuenta el número de empleados que aceptaron y
participaron en el acuerdo con la EEOC, que como imaginarás ante las
condiciones, no fueron precisamente muchos.`,q,V,I=`La EEOC generalizó y metió todas las demandas
laborales en un mismo saco junto a las de acoso sexual, de forma que, muy
conveniente para Activision Blizzard, solventarían todos sus problemas de golpe.`,H,z,w="Antisindicalismo y estado",A,B,W=`Lo anterior es difícil de comprender para mucha gente, ¿cómo una agencia federal
que se hace llamar “Comisión de Oportunidad y Empleo Igualitario” parece hacer
todo lo contrario y guiar
hacia una salida fácil a una corporación que parece atentar contra sus
empleados?`,Y,X,te=`¿Por qué?, si mientras Bobby Kotick soltaba bonitas palabras vacías para sus empleados (y
algunas otras no tan bonitas), Activision Blizzard no coopera y
destruye pruebas que le son requeridas durante la investigación.`,se,de,$=`Esto se explica porque mientras prometen proteger a sus empleados, también
contratan a las mejores firmas
antisindicalistas del mundo, como lo es WilmerHale, muy conocida por su brutal
eficiencia para erradicar cualquier indicio de sindicalismo en Amazon.`,De,ie,me=`Y aunque parezca no tener relación, lo que hace verdaderamente fuertes a las
firmas como WilmerHale, más allá de su capacidad para impedir la unión, es que
tienen una increíble conexión con los servicios públicos. No solo hacen
su labor impecablemente, también lo hacen afianzando relaciones y haciendo de
puente entre las corporaciones y los poderes federales, incluyendo el judicial.`,We,ze,J="Nuestra postura",Ee,Re,Se=`En 2021, unos días antes de explotar públicamente todo este caso, poco antes
del lanzamiento de Diablo 2 Resurrected, mi compañero Cristo Santana y yo
trabajábamos en un generador de sitios estáticos minimalista para realizar una
herramienta para la comunidad.`,Be,ce,Te=`El proyecto, <a href="https://d2runewords.com" rel="nofollow">D2Runewords</a> <em>(Diablo 2 rune words, con palabras juntas de forma
deliberada por SEO)</em>, nació casi a la misma vez que se publicó todo este asunto
de manera masiva. En ese instante
queríamos dejarlo de lado, pero finalmente pensamos en algo mejor:
dejar una nota de disconformidad. Es lo mínimo que podíamos hacer, manifestar
nuestro descontento.`,it,F,Ge=`Hasta ahí pensábamos que no iba a pasar nada más, una web desconocida y no
posicionada recientemente creada que solo servía de herramienta y base de datos
para la comunidad de un juego relativamente nicho, seguramente sería irrelevante.`,nt,He,Le="¿Sirvió de algo?",st,Ue,Fe=`Probablemente no cambió nada en absoluto, pero si solo sirvió para que alguna
persona, aunque fuera por un momento, se sintiera apoyada, nos es suficiente.`,O,_,R=`En más de tres años y medio hemos recibido feedback directo de solo nueve
personas, de las cuales dos agradecieron la herramienta en sí sin mencionar al
tema. Entre las siete restantes se encontraba una empleada
de Activision Blizzard con un mensaje algo agridulce:`,ne,pe,he=`<p>Dear Alex and Cristo,</p> <p>on behalf of my entire team, we want to express our sincere gratitude for your support.</p> <p>Unfortunately, it’s not as simple as you suggest to detach ourselves from this company. For
many of us, working here was once a dream. Yet now, it feels more like a nightmare we wish
we could escape, if only there were better opportunities.</p> <p>The work itself is demanding, but what makes it truly difficult is the knowledge that our
efforts go unrecognized. This is the company’s greatest problem.</p> <p>We wish you all the best.</p> <p>Sincerely,</p> <br/>-omito su nombre y rol, por prudencia-`,Ve,Ae,Ie=`De los seis restantes, tres no se habían enterado de qué iba el tema y pedían
más información. Un mensaje que me gustó mucho fue el de Thomas Giuseppe, quien
posteriormente también contribuyó mucho a dar a conocer la herramienta:`,$e,k,_e=`<p>Hey!</p> <p>I just found d2runewords.com, and I think it’s an awesome tool. Basically, it’s the only one
where I can mark what runes I have and clearly see what I can make with them.</p> <p>But I don’t really get the message in the header. I think I’m missing some context, but it
sounds serious. Would it be too much to ask if you could explain what it’s about?</p> <p>Thanks!,<br/>
Giu</p>`,et,Z,ve=`Gracias a él nos dimos cuenta de que era importante dejar una referencia al caso
en el mensaje. Parecía que la mayoría ni se había enterado de nada.`,Xe,Je,ct=`La página registraba en sus mejores momentos unas 12.000 visitas recurrentes
al mes y unas 300 visitas únicas mensuales (de nuevos usuarios). La diferencia
tan grande entre visitas recurrentes y únicas se debe a que
al tratarse de una webapp herramienta/base de datos, los usuarios
la guardan en marcadores y la consultan regularmente.`,G,we,Ce=`Hemos visto la página aparecer entre algún streaming de Diablo 2, así que estamos
convencidos de que al menos hemos contribuido con un poco más de visibilización.`,ye,Pe,Ze="¿Cómo está la situación actualmente?",tt,ot,ut=`En un correo que no consideramos de feedback, nos preguntaron si la situación
ha mejorado. Lamentablemente no tenemos contacto con ningún empleado. Me he
distanciado mucho del tema, por lo que me es imposible responder a esa pregunta.`,Ke,ft,mt=`Sinceramente soy muy poco optimista, pero me alegra ver cómo algo tan simple
como mantener un mensaje puede incomodar a algunas personas y hacer sentir
apoyadas a otras aunque sea un sentimiento fugaz o considerablemente inútil.`,Q,Ne,xt=`Respecto al uso de la herramienta, en realidad no me sienta mal que se use
y sea útil, no juzgo a nadie por jugar a ningún juego de esta compañía y menos
a Diablo 2, que se comió la mitad de mi adolescencia.`,fe,qe,Lt=`Diablo 2 fue un juego de una
Blizzard en la que sin lugar a dudas también
existía una toxicidad destacable, pero también una cultura que, bajo la
dirección de Morhaime reconocía la calidad y trabajo de sus empleados ante
todo, o eso es lo que se suele decir. Yo prefiero no poner más la mano en el
fuego por ninguna empresa ni sus caras visibles.`,bt;return e=new Xn({props:{$$slots:{default:[Gu]},$$scope:{ctx:i}}}),{c(){Ct(e.$$.fragment),t=y(),n=x("p"),n.textContent=a,s=y(),c=x("p"),c.textContent=l,u=y(),p=x("p"),p.textContent=d,v=y(),f=x("p"),f.textContent=g,T=y(),S=x("p"),S.textContent=h,m=y(),L=x("p"),L.textContent=P,q=y(),V=x("p"),V.textContent=I,H=y(),z=x("h2"),z.textContent=w,A=y(),B=x("p"),B.textContent=W,Y=y(),X=x("p"),X.textContent=te,se=y(),de=x("p"),de.textContent=$,De=y(),ie=x("p"),ie.textContent=me,We=y(),ze=x("h2"),ze.textContent=J,Ee=y(),Re=x("p"),Re.textContent=Se,Be=y(),ce=x("p"),ce.innerHTML=Te,it=y(),F=x("p"),F.textContent=Ge,nt=y(),He=x("h2"),He.textContent=Le,st=y(),Ue=x("p"),Ue.textContent=Fe,O=y(),_=x("p"),_.textContent=R,ne=y(),pe=x("blockquote"),pe.innerHTML=he,Ve=y(),Ae=x("p"),Ae.textContent=Ie,$e=y(),k=x("blockquote"),k.innerHTML=_e,et=y(),Z=x("p"),Z.textContent=ve,Xe=y(),Je=x("p"),Je.textContent=ct,G=y(),we=x("p"),we.textContent=Ce,ye=y(),Pe=x("h2"),Pe.textContent=Ze,tt=y(),ot=x("p"),ot.textContent=ut,Ke=y(),ft=x("p"),ft.textContent=mt,Q=y(),Ne=x("p"),Ne.textContent=xt,fe=y(),qe=x("p"),qe.textContent=Lt},l(re){St(e.$$.fragment,re),t=M(re),n=b(re,"P",{"data-svelte-h":!0}),C(n)!=="svelte-1v099qf"&&(n.textContent=a),s=M(re),c=b(re,"P",{"data-svelte-h":!0}),C(c)!=="svelte-1tfbix5"&&(c.textContent=l),u=M(re),p=b(re,"P",{"data-svelte-h":!0}),C(p)!=="svelte-sz4bo8"&&(p.textContent=d),v=M(re),f=b(re,"P",{"data-svelte-h":!0}),C(f)!=="svelte-10od9ci"&&(f.textContent=g),T=M(re),S=b(re,"P",{"data-svelte-h":!0}),C(S)!=="svelte-yeweyb"&&(S.textContent=h),m=M(re),L=b(re,"P",{"data-svelte-h":!0}),C(L)!=="svelte-1j91agc"&&(L.textContent=P),q=M(re),V=b(re,"P",{"data-svelte-h":!0}),C(V)!=="svelte-160ek9n"&&(V.textContent=I),H=M(re),z=b(re,"H2",{"data-svelte-h":!0}),C(z)!=="svelte-ux6muo"&&(z.textContent=w),A=M(re),B=b(re,"P",{"data-svelte-h":!0}),C(B)!=="svelte-rnggeo"&&(B.textContent=W),Y=M(re),X=b(re,"P",{"data-svelte-h":!0}),C(X)!=="svelte-1m0xnh1"&&(X.textContent=te),se=M(re),de=b(re,"P",{"data-svelte-h":!0}),C(de)!=="svelte-8hnozm"&&(de.textContent=$),De=M(re),ie=b(re,"P",{"data-svelte-h":!0}),C(ie)!=="svelte-vh89vv"&&(ie.textContent=me),We=M(re),ze=b(re,"H2",{"data-svelte-h":!0}),C(ze)!=="svelte-zfujpo"&&(ze.textContent=J),Ee=M(re),Re=b(re,"P",{"data-svelte-h":!0}),C(Re)!=="svelte-sagetj"&&(Re.textContent=Se),Be=M(re),ce=b(re,"P",{"data-svelte-h":!0}),C(ce)!=="svelte-13j8ias"&&(ce.innerHTML=Te),it=M(re),F=b(re,"P",{"data-svelte-h":!0}),C(F)!=="svelte-otk5si"&&(F.textContent=Ge),nt=M(re),He=b(re,"H2",{"data-svelte-h":!0}),C(He)!=="svelte-15pgp9u"&&(He.textContent=Le),st=M(re),Ue=b(re,"P",{"data-svelte-h":!0}),C(Ue)!=="svelte-15m4iaq"&&(Ue.textContent=Fe),O=M(re),_=b(re,"P",{"data-svelte-h":!0}),C(_)!=="svelte-fd3vki"&&(_.textContent=R),ne=M(re),pe=b(re,"BLOCKQUOTE",{"data-svelte-h":!0}),C(pe)!=="svelte-1h14obb"&&(pe.innerHTML=he),Ve=M(re),Ae=b(re,"P",{"data-svelte-h":!0}),C(Ae)!=="svelte-1hplq84"&&(Ae.textContent=Ie),$e=M(re),k=b(re,"BLOCKQUOTE",{"data-svelte-h":!0}),C(k)!=="svelte-c4jdxq"&&(k.innerHTML=_e),et=M(re),Z=b(re,"P",{"data-svelte-h":!0}),C(Z)!=="svelte-12vt2dj"&&(Z.textContent=ve),Xe=M(re),Je=b(re,"P",{"data-svelte-h":!0}),C(Je)!=="svelte-98c51j"&&(Je.textContent=ct),G=M(re),we=b(re,"P",{"data-svelte-h":!0}),C(we)!=="svelte-sjk0ik"&&(we.textContent=Ce),ye=M(re),Pe=b(re,"H2",{"data-svelte-h":!0}),C(Pe)!=="svelte-7bymre"&&(Pe.textContent=Ze),tt=M(re),ot=b(re,"P",{"data-svelte-h":!0}),C(ot)!=="svelte-810671"&&(ot.textContent=ut),Ke=M(re),ft=b(re,"P",{"data-svelte-h":!0}),C(ft)!=="svelte-1f3w6xr"&&(ft.textContent=mt),Q=M(re),Ne=b(re,"P",{"data-svelte-h":!0}),C(Ne)!=="svelte-1qurh8p"&&(Ne.textContent=xt),fe=M(re),qe=b(re,"P",{"data-svelte-h":!0}),C(qe)!=="svelte-2u7g7e"&&(qe.textContent=Lt)},m(re,Ye){Et(e,re,Ye),r(re,t,Ye),r(re,n,Ye),r(re,s,Ye),r(re,c,Ye),r(re,u,Ye),r(re,p,Ye),r(re,v,Ye),r(re,f,Ye),r(re,T,Ye),r(re,S,Ye),r(re,m,Ye),r(re,L,Ye),r(re,q,Ye),r(re,V,Ye),r(re,H,Ye),r(re,z,Ye),r(re,A,Ye),r(re,B,Ye),r(re,Y,Ye),r(re,X,Ye),r(re,se,Ye),r(re,de,Ye),r(re,De,Ye),r(re,ie,Ye),r(re,We,Ye),r(re,ze,Ye),r(re,Ee,Ye),r(re,Re,Ye),r(re,Be,Ye),r(re,ce,Ye),r(re,it,Ye),r(re,F,Ye),r(re,nt,Ye),r(re,He,Ye),r(re,st,Ye),r(re,Ue,Ye),r(re,O,Ye),r(re,_,Ye),r(re,ne,Ye),r(re,pe,Ye),r(re,Ve,Ye),r(re,Ae,Ye),r(re,$e,Ye),r(re,k,Ye),r(re,et,Ye),r(re,Z,Ye),r(re,Xe,Ye),r(re,Je,Ye),r(re,G,Ye),r(re,we,Ye),r(re,ye,Ye),r(re,Pe,Ye),r(re,tt,Ye),r(re,ot,Ye),r(re,Ke,Ye),r(re,ft,Ye),r(re,Q,Ye),r(re,Ne,Ye),r(re,fe,Ye),r(re,qe,Ye),bt=!0},p(re,[Ye]){const Dt={};Ye&1&&(Dt.$$scope={dirty:Ye,ctx:re}),e.$set(Dt)},i(re){bt||(vt(e.$$.fragment,re),bt=!0)},o(re){gt(e.$$.fragment,re),bt=!1},d(re){re&&(o(t),o(n),o(s),o(c),o(u),o(p),o(v),o(f),o(T),o(S),o(m),o(L),o(q),o(V),o(H),o(z),o(A),o(B),o(Y),o(X),o(se),o(de),o(De),o(ie),o(We),o(ze),o(Ee),o(Re),o(Be),o(ce),o(it),o(F),o(nt),o(He),o(st),o(Ue),o(O),o(_),o(ne),o(pe),o(Ve),o(Ae),o($e),o(k),o(et),o(Z),o(Xe),o(Je),o(G),o(we),o(ye),o(Pe),o(tt),o(ot),o(Ke),o(ft),o(Q),o(Ne),o(fe),o(qe)),Tt(e,re)}}}const Wu={title:"🔴 Caso de la suite Cosby",slug:"caso-suite-cosby",coverImage:"/src/assets/posts-covers/blizzard.jpg",coverPosition:"normal",coverAuthor:"Annie Nyle",excerpt:"Repaso algunas experiencias con este caso, implicados, nuestra postura y resultados.",date:"2024-10-06T13:00:23.177Z",updated:"2024-10-06T13:00:23.903Z",hidden:!1,tags:["Personal","Tooling"],keywords:["Blizzard"],type:"default",fullReload:!1};class $u extends Xt{constructor(e){super(),Yt(this,e,null,ju,$t,{})}}const Xu=Object.freeze(Object.defineProperty({__proto__:null,default:$u,metadata:Wu},Symbol.toStringTag,{value:"Module"}));function Yu(i){let e,t;const n=i[1].default,a=ja(n,i,i[0],null);return{c(){e=x("span"),a&&a.c(),this.h()},l(s){e=b(s,"SPAN",{class:!0});var c=kt(e);a&&a.l(c),c.forEach(o),this.h()},h(){yt(e,"class","no-wrap svelte-49cqox")},m(s,c){r(s,e,c),a&&a.m(e,null),t=!0},p(s,[c]){a&&a.p&&(!t||c&1)&&Wa(a,n,s,s[0],t?Xa(n,s[0],c,null):$a(s[0]),null)},i(s){t||(vt(a,s),t=!0)},o(s){gt(a,s),t=!1},d(s){s&&o(e),a&&a.d(s)}}}function Zu(i,e,t){let{$$slots:n={},$$scope:a}=e;return i.$$set=s=>{"$$scope"in s&&t(0,a=s.$$scope)},[a,n]}class br extends Xt{constructor(e){super(),Yt(this,e,Zu,Yu,$t,{})}}const Ku=i=>({}),Nl=i=>({}),Ju=i=>({}),ql=i=>({});function Qu(i){let e,t,n,a,s;const c=i[2].left,l=ja(c,i,i[1],ql),u=i[2].right,p=ja(u,i,i[1],Nl);return{c(){e=x("div"),t=x("div"),l&&l.c(),n=y(),a=x("div"),p&&p.c(),this.h()},l(d){e=b(d,"DIV",{class:!0,style:!0});var v=kt(e);t=b(v,"DIV",{class:!0});var f=kt(t);l&&l.l(f),f.forEach(o),n=M(v),a=b(v,"DIV",{class:!0});var g=kt(a);p&&p.l(g),g.forEach(o),v.forEach(o),this.h()},h(){yt(t,"class","columns-container__left svelte-j14ov3"),yt(a,"class","columns-container__right svelte-j14ov3"),yt(e,"class","columns-container svelte-j14ov3"),jn(e,"--gap",i[0]+"px")},m(d,v){r(d,e,v),_t(e,t),l&&l.m(t,null),_t(e,n),_t(e,a),p&&p.m(a,null),s=!0},p(d,[v]){l&&l.p&&(!s||v&2)&&Wa(l,c,d,d[1],s?Xa(c,d[1],v,Ju):$a(d[1]),ql),p&&p.p&&(!s||v&2)&&Wa(p,u,d,d[1],s?Xa(u,d[1],v,Ku):$a(d[1]),Nl),(!s||v&1)&&jn(e,"--gap",d[0]+"px")},i(d){s||(vt(l,d),vt(p,d),s=!0)},o(d){gt(l,d),gt(p,d),s=!1},d(d){d&&o(e),l&&l.d(d),p&&p.d(d)}}}function ed(i,e,t){let{$$slots:n={},$$scope:a}=e,{gap:s=0}=e;return i.$$set=c=>{"gap"in c&&t(0,s=c.gap),"$$scope"in c&&t(1,a=c.$$scope)},[s,a,n]}class Fl extends Xt{constructor(e){super(),Yt(this,e,ed,Qu,$t,{gap:0})}}function td(i){let e,t;const n=i[1].default,a=ja(n,i,i[0],null);return{c(){e=x("span"),a&&a.c(),this.h()},l(s){e=b(s,"SPAN",{class:!0});var c=kt(e);a&&a.l(c),c.forEach(o),this.h()},h(){yt(e,"class","line-through svelte-kze7de")},m(s,c){r(s,e,c),a&&a.m(e,null),t=!0},p(s,[c]){a&&a.p&&(!t||c&1)&&Wa(a,n,s,s[0],t?Xa(n,s[0],c,null):$a(s[0]),null)},i(s){t||(vt(a,s),t=!0)},o(s){gt(a,s),t=!1},d(s){s&&o(e),a&&a.d(s)}}}function nd(i,e,t){let{$$slots:n={},$$scope:a}=e;return i.$$set=s=>{"$$scope"in s&&t(0,a=s.$$scope)},[a,n]}class $c extends Xt{constructor(e){super(),Yt(this,e,nd,td,$t,{})}}function id(i){let e,t;return{c(){e=x("div"),t=x("div"),this.h()},l(n){e=b(n,"DIV",{class:!0});var a=kt(e);t=b(a,"DIV",{class:!0,style:!0}),kt(t).forEach(o),a.forEach(o),this.h()},h(){yt(t,"class","test-box svelte-1e8u39k"),jn(t,"width",i[0]+"px"),jn(t,"height",i[1]+"px"),wo(t,"test-box--expected",i[2]),yt(e,"class","example svelte-1e8u39k")},m(n,a){r(n,e,a),_t(e,t)},p(n,[a]){a&1&&jn(t,"width",n[0]+"px"),a&2&&jn(t,"height",n[1]+"px"),a&4&&wo(t,"test-box--expected",n[2])},i:wt,o:wt,d(n){n&&o(e)}}}function ad(i,e,t){let{width:n=250}=e,{height:a=150}=e,{showBorder:s=!1}=e;return i.$$set=c=>{"width"in c&&t(0,n=c.width),"height"in c&&t(1,a=c.height),"showBorder"in c&&t(2,s=c.showBorder)},[n,a,s]}class Ol extends Xt{constructor(e){super(),Yt(this,e,ad,id,$t,{width:0,height:1,showBorder:2})}}function sd(i){let e,t,n,a;return{c(){e=x("div"),t=x("a"),n=x("img"),this.h()},l(s){e=b(s,"DIV",{class:!0});var c=kt(e);t=b(c,"A",{href:!0,target:!0});var l=kt(t);n=b(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(o),c.forEach(o),this.h()},h(){Ao(n.src,a=i[0])||yt(n,"src",a),yt(n,"alt",i[1]),yt(n,"class","svelte-u0jlpn"),yt(t,"href",i[0]),yt(t,"target","_blank"),yt(e,"class","image-wrapper")},m(s,c){r(s,e,c),_t(e,t),_t(t,n)},p(s,c){c&1&&!Ao(n.src,a=s[0])&&yt(n,"src",a),c&2&&yt(n,"alt",s[1]),c&1&&yt(t,"href",s[0])},d(s){s&&o(e)}}}function od(i){let e,t,n,a,s,c,l;return{c(){e=x("figure"),t=x("a"),n=x("img"),s=y(),c=x("figcaption"),l=new Du(!1),this.h()},l(u){e=b(u,"FIGURE",{class:!0});var p=kt(e);t=b(p,"A",{href:!0,target:!0});var d=kt(t);n=b(d,"IMG",{src:!0,alt:!0,class:!0}),d.forEach(o),s=M(p),c=b(p,"FIGCAPTION",{class:!0});var v=kt(c);l=Uu(v,!1),v.forEach(o),p.forEach(o),this.h()},h(){Ao(n.src,a=i[0])||yt(n,"src",a),yt(n,"alt",i[1]),yt(n,"class","svelte-u0jlpn"),yt(t,"href",i[0]),yt(t,"target","_blank"),l.a=null,yt(c,"class","svelte-u0jlpn"),yt(e,"class","image-wrapper")},m(u,p){r(u,e,p),_t(e,t),_t(t,n),_t(e,s),_t(e,c),l.m(i[2],c)},p(u,p){p&1&&!Ao(n.src,a=u[0])&&yt(n,"src",a),p&2&&yt(n,"alt",u[1]),p&1&&yt(t,"href",u[0]),p&4&&l.p(u[2])},d(u){u&&o(e)}}}function rd(i){let e;function t(s,c){return s[2]?od:sd}let n=t(i),a=n(i);return{c(){a.c(),e=Rl()},l(s){a.l(s),e=Rl()},m(s,c){a.m(s,c),r(s,e,c)},p(s,[c]){n===(n=t(s))&&a?a.p(s,c):(a.d(1),a=n(s),a&&(a.c(),a.m(e.parentNode,e)))},i:wt,o:wt,d(s){s&&o(e),a.d(s)}}}function ld(i,e,t){let{src:n}=e,{alt:a}=e,{figCaption:s}=e;return i.$$set=c=>{"src"in c&&t(0,n=c.src),"alt"in c&&t(1,a=c.alt),"figCaption"in c&&t(2,s=c.figCaption)},[n,a,s]}class ba extends Xt{constructor(e){super(),Yt(this,e,ld,rd,$t,{src:0,alt:1,figCaption:2})}}function cd(i){let e,t=`Acabo de publicar un material de presentación relacionado a prácticas que han
causado problemas críticos en múltiples sistemas. Puedes <a href="/avoidable-deaths-by-code">encontrarlo aquí</a>.`,n,a,s=`Es una pequeña recopilación de errores supercomunes junto a un recuento de
víctimas mortales por no considerarlos.`,c,l,u=`Todos los problemas que se presentan me los he topado al menos una vez en
auditorías de los últimos años, aunque no necesariamente vinculados a ningún accidente.
Otros profesionales han referenciado varios de estos errores
con trágicos accidentes y numerosas víctimas mortales.`,p,d,v="Sobre el número de muertos",f,g,T=`Los números NO son reales, los reales pueden ser menores o mayores, nadie lo
sabe, pero <strong>no es ninguna broma</strong>
ni hay que frivolizar con ello. Dicho esto, sí que se puede utilizar como crítica
a algo con lo que me he topado muchísimo en los últimos cinco años:
la falta de rigurosidad a la hora de hablar de muertos en discursos de
seguridad y control de calidad.`,S,h,m=`Hay formas de hablar de muertos con rigurosidad, sin dar cifras que no se tienen
y amparándose en casos reales. Un buen ejemplo se describe en el famoso vídeo
viral de la presentación de Álvaro Sauras, “La idiotez del coche eléctrico” y
el caso (o casos) de
los aceleradores defectuosos de Toyota. En él, se exponen relatos con datos
históricos, acordes y apropiados.`,L,P,q=`En dicho vídeo también se expone el famoso cálculo necrocapitalista de Ford,
donde se valora el coste de corregir un defecto en su flota de vehículos frente
al de indemnizar a la familia de los futuros muertos manteniendo
el defecto. Asumiremos ingenuamente y por salud mental, que estas prácticas ya
no se realizan, o no tan descaradamente.`,V,I,H=`Lo que nos encontramos en numerosos discursos de expertos se aleja
tangencialmente de la calidad da la presentacion de Sauras: opiniones y datos
sacados de la manga. Especialmente en aquellas presentaciones “de puertas para
dentro” y no publicadas.`,z,w,A=`Y es que ya he tenido que preguntar en no pocas ocasiones por el origen de las
fuentes, algo que puede percibirse violento, incluso aunque lo hagas en privado
tras la exposición. He llegado a escuchar a un profesor asegurar que la falta de llaves en
un if provocó la caída en picado al mar de avión de pasajeros de Boeing. La respuesta siempre suele ser la
misma: “no recuerdo ahora, fue de un estudio ahí…”, “me lo dijo Pepito que es un
reconocido experto en seguridad…”, etc.`,B,W,Y=`Lo cierto es que rara vez se revela código en los resultados de auditorías
internas, sin importar el daño que haya podido causar. Es realmente difícil
asociar fallos de programación concretos a víctimas mortales, no porque no se produzcan,
no porque no se haya determinado la causa, sino porque no se revela
públicamente el detalle. En su lugar se resume en “error o negligencia de programación”.`,X,te,se=`¿Y la razón? A lo mejor te preguntas si es que los jueces son gilipollas o qué,
pero resulta que matar gente no es motivo para revelar tu inversión, amparado
por la ley de propiedad intelectual, aunque esto pudiera ayudar a que otros no
cometan el mismo error.`,de,$,De=`Doy fé de que en muchas auditorías se encuentran fallos que por muchísima suerte
no llegan a producir víctimas mortales, pero que eventualmente y sin lugar a
dudas las producirían de no haberse auditado. Las
auditorías suelen contar con al menos una clausula de confidencialidad, que
solo se podría romper en caso de que la empresa auditada no estuviera dispuesta
a iniciar un proceso con carácter inmediato para corregir el defecto
potencialmente mortal, paralizando cualquier servicio si es necesario.`,ie,me,We=`Todo esto hace que el número de víctimas habidas y por haber sea un completo
misterio, pero que las hay y las habrá, no cabe duda. Como sea, <strong>cualquier
alarmismo y exageración es bienvenida</strong> si eso
implica evitar accidentes mortales por malas prácticas de programación, y aún
más si viene acompañado de tips y soluciones.`,ze,J,Ee="Soluciones",Re,Se,Be=`Los problemas seleccionados tienen algo en común: son fácilmente prevenibles
incluso de manera automática, y aún así siguen estando muy presentes en
múltiples desarrollos.`,ce,Te,it=`Algunos quedarían totalmente evidenciados con tan solo un correcto linter +
formateador. Otros se podrían prevenir con un flujo de trabajo que
implique una correcta especificación de requisitos y el desarrollo de tests
adecuados.`,F,Ge,nt=`Por supuesto, lo más importante es la divulgación y menos cultura punitiva para
no disuadir del informe de errores. Esto es un problema que afecta al desarrollo
de software en general, libre o privativo.`,He,Le,st=`Aclarar que estas soluciones deberían aplicarse siempre, haya o no
vidas humanas en juego, pues influyen en la calidad de cualquier desarrollo.`,Ue,Fe,O="Próximamente",_,R,ne=`Aprovecho a comentar que este mes de abril me encontraré por la península,
asistiendo a algunos eventos e impartiendo dos cursos relacionados al tema
de esta entrada:`,pe,he,Ve=`<li>Valladolid. Del 1 al 4 de abril. Impartiendo un curso de “Seguridad en el desarrollo”
para la junta de Castilla y León.</li> <li>Mérida. Del 21 al 24 de abril. Impartiendo un curso de “Calidad del software, estándares y metodologías”, orientado
a ingenieros y/o técnicos de la Dirección General de Digitalización de la Administración de
la Consejería de Economía, Empleo y Transformación Digital de la Junta de Extremadura.</li>`,Ae,Ie,$e=`Entre medias quedo a disponibilidad para cualquier servicio presencial, algo que
rara vez realizo porque soy muy comodón de cara a salir de las islas.`;return{c(){e=x("p"),e.innerHTML=t,n=y(),a=x("p"),a.textContent=s,c=y(),l=x("p"),l.textContent=u,p=y(),d=x("h2"),d.textContent=v,f=y(),g=x("p"),g.innerHTML=T,S=y(),h=x("p"),h.textContent=m,L=y(),P=x("p"),P.textContent=q,V=y(),I=x("p"),I.textContent=H,z=y(),w=x("p"),w.textContent=A,B=y(),W=x("p"),W.textContent=Y,X=y(),te=x("p"),te.textContent=se,de=y(),$=x("p"),$.textContent=De,ie=y(),me=x("p"),me.innerHTML=We,ze=y(),J=x("h2"),J.textContent=Ee,Re=y(),Se=x("p"),Se.textContent=Be,ce=y(),Te=x("p"),Te.textContent=it,F=y(),Ge=x("p"),Ge.textContent=nt,He=y(),Le=x("p"),Le.textContent=st,Ue=y(),Fe=x("h3"),Fe.textContent=O,_=y(),R=x("p"),R.textContent=ne,pe=y(),he=x("ul"),he.innerHTML=Ve,Ae=y(),Ie=x("p"),Ie.textContent=$e},l(k){e=b(k,"P",{"data-svelte-h":!0}),C(e)!=="svelte-193tuby"&&(e.innerHTML=t),n=M(k),a=b(k,"P",{"data-svelte-h":!0}),C(a)!=="svelte-ushzad"&&(a.textContent=s),c=M(k),l=b(k,"P",{"data-svelte-h":!0}),C(l)!=="svelte-1bmx3ll"&&(l.textContent=u),p=M(k),d=b(k,"H2",{"data-svelte-h":!0}),C(d)!=="svelte-u87xh"&&(d.textContent=v),f=M(k),g=b(k,"P",{"data-svelte-h":!0}),C(g)!=="svelte-1avubgq"&&(g.innerHTML=T),S=M(k),h=b(k,"P",{"data-svelte-h":!0}),C(h)!=="svelte-6s9agx"&&(h.textContent=m),L=M(k),P=b(k,"P",{"data-svelte-h":!0}),C(P)!=="svelte-7qnmgu"&&(P.textContent=q),V=M(k),I=b(k,"P",{"data-svelte-h":!0}),C(I)!=="svelte-1crd2wp"&&(I.textContent=H),z=M(k),w=b(k,"P",{"data-svelte-h":!0}),C(w)!=="svelte-19dy5tb"&&(w.textContent=A),B=M(k),W=b(k,"P",{"data-svelte-h":!0}),C(W)!=="svelte-2xlq6y"&&(W.textContent=Y),X=M(k),te=b(k,"P",{"data-svelte-h":!0}),C(te)!=="svelte-15uywsn"&&(te.textContent=se),de=M(k),$=b(k,"P",{"data-svelte-h":!0}),C($)!=="svelte-2bhlcw"&&($.textContent=De),ie=M(k),me=b(k,"P",{"data-svelte-h":!0}),C(me)!=="svelte-1xusxls"&&(me.innerHTML=We),ze=M(k),J=b(k,"H2",{"data-svelte-h":!0}),C(J)!=="svelte-1h176z6"&&(J.textContent=Ee),Re=M(k),Se=b(k,"P",{"data-svelte-h":!0}),C(Se)!=="svelte-10tbxbz"&&(Se.textContent=Be),ce=M(k),Te=b(k,"P",{"data-svelte-h":!0}),C(Te)!=="svelte-duoq1h"&&(Te.textContent=it),F=M(k),Ge=b(k,"P",{"data-svelte-h":!0}),C(Ge)!=="svelte-1rdhacq"&&(Ge.textContent=nt),He=M(k),Le=b(k,"P",{"data-svelte-h":!0}),C(Le)!=="svelte-npn90g"&&(Le.textContent=st),Ue=M(k),Fe=b(k,"H3",{"data-svelte-h":!0}),C(Fe)!=="svelte-1x75mgt"&&(Fe.textContent=O),_=M(k),R=b(k,"P",{"data-svelte-h":!0}),C(R)!=="svelte-1wf9i2l"&&(R.textContent=ne),pe=M(k),he=b(k,"UL",{"data-svelte-h":!0}),C(he)!=="svelte-19q6d47"&&(he.innerHTML=Ve),Ae=M(k),Ie=b(k,"P",{"data-svelte-h":!0}),C(Ie)!=="svelte-7hbsr"&&(Ie.textContent=$e)},m(k,_e){r(k,e,_e),r(k,n,_e),r(k,a,_e),r(k,c,_e),r(k,l,_e),r(k,p,_e),r(k,d,_e),r(k,f,_e),r(k,g,_e),r(k,S,_e),r(k,h,_e),r(k,L,_e),r(k,P,_e),r(k,V,_e),r(k,I,_e),r(k,z,_e),r(k,w,_e),r(k,B,_e),r(k,W,_e),r(k,X,_e),r(k,te,_e),r(k,de,_e),r(k,$,_e),r(k,ie,_e),r(k,me,_e),r(k,ze,_e),r(k,J,_e),r(k,Re,_e),r(k,Se,_e),r(k,ce,_e),r(k,Te,_e),r(k,F,_e),r(k,Ge,_e),r(k,He,_e),r(k,Le,_e),r(k,Ue,_e),r(k,Fe,_e),r(k,_,_e),r(k,R,_e),r(k,pe,_e),r(k,he,_e),r(k,Ae,_e),r(k,Ie,_e)},p:wt,i:wt,o:wt,d(k){k&&(o(e),o(n),o(a),o(c),o(l),o(p),o(d),o(f),o(g),o(S),o(h),o(L),o(P),o(V),o(I),o(z),o(w),o(B),o(W),o(X),o(te),o(de),o($),o(ie),o(me),o(ze),o(J),o(Re),o(Se),o(ce),o(Te),o(F),o(Ge),o(He),o(Le),o(Ue),o(Fe),o(_),o(R),o(pe),o(he),o(Ae),o(Ie))}}}const ud={title:"Cuántas muertes evitables...",slug:"cuantas-muertes-evitables",coverAuthor:"",excerpt:"He publicado una lista de errores comunes un pelín alarmista.",date:"2025-03-27T22:38:29.122Z",updated:"2025-03-27T22:38:29.122Z",hidden:!1,tags:["TDD/BDD/ATDD","Ingeniería software"],keywords:["smells","tests"],type:"default",coverPosition:"top"};class dd extends Xt{constructor(e){super(),Yt(this,e,null,cd,$t,{})}}const pd=Object.freeze(Object.defineProperty({__proto__:null,default:dd,metadata:ud},Symbol.toStringTag,{value:"Module"}));function fd(i){let e;return{c(){e=x("canvas"),this.h()},l(t){e=b(t,"CANVAS",{class:!0,id:!0}),kt(e).forEach(o),this.h()},h(){yt(e,"class","three-example"),yt(e,"id",i[0])},m(t,n){r(t,e,n)},p(t,[n]){n&1&&yt(e,"id",t[0])},i:wt,o:wt,d(t){t&&o(e)}}}function hd(i,e,t){let{sceneManager:n}=e,{id:a}=e;return Wc(()=>{n.isInitialized()?location.reload():n.getInstance().startRenderLoop()}),Lu(()=>{n.dispose()}),i.$$set=s=>{"sceneManager"in s&&t(1,n=s.sceneManager),"id"in s&&t(0,a=s.id)},[a,n]}class md extends Xt{constructor(e){super(),Yt(this,e,hd,fd,$t,{sceneManager:1,id:0})}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const il="168",vd=0,zl=1,gd=2,Xc=1,_d=2,Ai=3,ki=0,qn=1,wi=2,Bi=0,ka=1,Bl=2,Hl=3,kl=4,xd=5,va=100,bd=101,yd=102,Md=103,Cd=104,Sd=200,Ed=201,Td=202,Ad=203,yr=204,Mr=205,wd=206,Pd=207,Rd=208,Ld=209,Dd=210,Ud=211,Id=212,Nd=213,qd=214,Fd=0,Od=1,zd=2,Po=3,Bd=4,Hd=5,kd=6,Vd=7,al=0,Gd=1,jd=2,Hi=0,Wd=1,$d=2,Xd=3,Yd=4,Zd=5,Kd=6,Jd=7,Yc=300,Ya=301,Za=302,Cr=303,Sr=304,Fo=306,Er=1e3,_a=1001,Tr=1002,Wn=1003,Qd=1004,Xs=1005,Jn=1006,Go=1007,xa=1008,Li=1009,Zc=1010,Kc=1011,Ps=1012,sl=1013,ya=1014,Pi=1015,Ls=1016,ol=1017,rl=1018,Ka=1020,Jc=35902,Qc=1021,eu=1022,Qn=1023,tu=1024,nu=1025,Va=1026,Ja=1027,iu=1028,ll=1029,au=1030,cl=1031,ul=1033,yo=33776,Mo=33777,Co=33778,So=33779,Ar=35840,wr=35841,Pr=35842,Rr=35843,Lr=36196,Dr=37492,Ur=37496,Ir=37808,Nr=37809,qr=37810,Fr=37811,Or=37812,zr=37813,Br=37814,Hr=37815,kr=37816,Vr=37817,Gr=37818,jr=37819,Wr=37820,$r=37821,Eo=36492,Xr=36494,Yr=36495,su=36283,Zr=36284,Kr=36285,Jr=36286,ep=3200,tp=3201,ou=0,np=1,zi="",ai="srgb",Gi="srgb-linear",dl="display-p3",Oo="display-p3-linear",Ro="linear",Zt="srgb",Lo="rec709",Do="p3",Sa=7680,Vl=519,ip=512,ap=513,sp=514,ru=515,op=516,rp=517,lp=518,cp=519,Gl=35044,jl="300 es",Ri=2e3,Uo=2001;class es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let s=0,c=a.length;s<c;s++)a[s].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jo=Math.PI/180,Qr=180/Math.PI;function Ds(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function In(i,e,t){return Math.max(e,Math.min(t,i))}function up(i,e){return(i%e+e)%e}function Wo(i,e,t){return(1-t)*i+t*e}function xs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Bt{constructor(e=0,t=0){Bt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(In(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),s=this.x-e.x,c=this.y-e.y;return this.x=s*n-c*a+e.x,this.y=s*a+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(e,t,n,a,s,c,l,u,p){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,c,l,u,p)}set(e,t,n,a,s,c,l,u,p){const d=this.elements;return d[0]=e,d[1]=a,d[2]=l,d[3]=t,d[4]=s,d[5]=u,d[6]=n,d[7]=c,d[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,s=this.elements,c=n[0],l=n[3],u=n[6],p=n[1],d=n[4],v=n[7],f=n[2],g=n[5],T=n[8],S=a[0],h=a[3],m=a[6],L=a[1],P=a[4],q=a[7],V=a[2],I=a[5],H=a[8];return s[0]=c*S+l*L+u*V,s[3]=c*h+l*P+u*I,s[6]=c*m+l*q+u*H,s[1]=p*S+d*L+v*V,s[4]=p*h+d*P+v*I,s[7]=p*m+d*q+v*H,s[2]=f*S+g*L+T*V,s[5]=f*h+g*P+T*I,s[8]=f*m+g*q+T*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],c=e[4],l=e[5],u=e[6],p=e[7],d=e[8];return t*c*d-t*l*p-n*s*d+n*l*u+a*s*p-a*c*u}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],c=e[4],l=e[5],u=e[6],p=e[7],d=e[8],v=d*c-l*p,f=l*u-d*s,g=p*s-c*u,T=t*v+n*f+a*g;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/T;return e[0]=v*S,e[1]=(a*p-d*n)*S,e[2]=(l*n-a*c)*S,e[3]=f*S,e[4]=(d*t-a*u)*S,e[5]=(a*s-l*t)*S,e[6]=g*S,e[7]=(n*u-p*t)*S,e[8]=(c*t-n*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,s,c,l){const u=Math.cos(s),p=Math.sin(s);return this.set(n*u,n*p,-n*(u*c+p*l)+c+e,-a*p,a*u,-a*(-p*c+u*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply($o.makeScale(e,t)),this}rotate(e){return this.premultiply($o.makeRotation(-e)),this}translate(e,t){return this.premultiply($o.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $o=new Nt;function lu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Io(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dp(){const i=Io("canvas");return i.style.display="block",i}const Wl={};function ws(i){i in Wl||(Wl[i]=!0,console.warn(i))}function pp(i,e,t){return new Promise(function(n,a){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const $l=new Nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xl=new Nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bs={[Gi]:{transfer:Ro,primaries:Lo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[ai]:{transfer:Zt,primaries:Lo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Oo]:{transfer:Ro,primaries:Do,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Xl),fromReference:i=>i.applyMatrix3($l)},[dl]:{transfer:Zt,primaries:Do,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Xl),fromReference:i=>i.applyMatrix3($l).convertLinearToSRGB()}},fp=new Set([Gi,Oo]),Gt={enabled:!0,_workingColorSpace:Gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!fp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=bs[e].toReference,a=bs[t].fromReference;return a(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return bs[i].primaries},getTransfer:function(i){return i===zi?Ro:bs[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(bs[e].luminanceCoefficients)}};function Ga(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ea;class hp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ea===void 0&&(Ea=Io("canvas")),Ea.width=e.width,Ea.height=e.height;const n=Ea.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ea}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Io("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),s=a.data;for(let c=0;c<s.length;c++)s[c]=Ga(s[c]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ga(t[n]/255)*255):t[n]=Ga(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mp=0;class cu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Ds(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let c=0,l=a.length;c<l;c++)a[c].isDataTexture?s.push(Yo(a[c].image)):s.push(Yo(a[c]))}else s=Yo(a);n.url=s}return t||(e.images[this.uuid]=n),n}}function Yo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vp=0;class Fn extends es{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,n=_a,a=_a,s=Jn,c=xa,l=Qn,u=Li,p=Fn.DEFAULT_ANISOTROPY,d=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Ds(),this.name="",this.source=new cu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=s,this.minFilter=c,this.anisotropy=p,this.format=l,this.internalFormat=null,this.type=u,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Er:e.x=e.x-Math.floor(e.x);break;case _a:e.x=e.x<0?0:1;break;case Tr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Er:e.y=e.y-Math.floor(e.y);break;case _a:e.y=e.y<0?0:1;break;case Tr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Yc;Fn.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,t=0,n=0,a=1){an.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,s=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*a+c[12]*s,this.y=c[1]*t+c[5]*n+c[9]*a+c[13]*s,this.z=c[2]*t+c[6]*n+c[10]*a+c[14]*s,this.w=c[3]*t+c[7]*n+c[11]*a+c[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,s;const u=e.elements,p=u[0],d=u[4],v=u[8],f=u[1],g=u[5],T=u[9],S=u[2],h=u[6],m=u[10];if(Math.abs(d-f)<.01&&Math.abs(v-S)<.01&&Math.abs(T-h)<.01){if(Math.abs(d+f)<.1&&Math.abs(v+S)<.1&&Math.abs(T+h)<.1&&Math.abs(p+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,q=(g+1)/2,V=(m+1)/2,I=(d+f)/4,H=(v+S)/4,z=(T+h)/4;return P>q&&P>V?P<.01?(n=0,a=.707106781,s=.707106781):(n=Math.sqrt(P),a=I/n,s=H/n):q>V?q<.01?(n=.707106781,a=0,s=.707106781):(a=Math.sqrt(q),n=I/a,s=z/a):V<.01?(n=.707106781,a=.707106781,s=0):(s=Math.sqrt(V),n=H/s,a=z/s),this.set(n,a,s,t),this}let L=Math.sqrt((h-T)*(h-T)+(v-S)*(v-S)+(f-d)*(f-d));return Math.abs(L)<.001&&(L=1),this.x=(h-T)/L,this.y=(v-S)/L,this.z=(f-d)/L,this.w=Math.acos((p+g+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gp extends es{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t);const a={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Fn(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const c=n.count;for(let l=0;l<c;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ma extends gp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class uu extends Fn{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _p extends Fn{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Us{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,s,c,l){let u=n[a+0],p=n[a+1],d=n[a+2],v=n[a+3];const f=s[c+0],g=s[c+1],T=s[c+2],S=s[c+3];if(l===0){e[t+0]=u,e[t+1]=p,e[t+2]=d,e[t+3]=v;return}if(l===1){e[t+0]=f,e[t+1]=g,e[t+2]=T,e[t+3]=S;return}if(v!==S||u!==f||p!==g||d!==T){let h=1-l;const m=u*f+p*g+d*T+v*S,L=m>=0?1:-1,P=1-m*m;if(P>Number.EPSILON){const V=Math.sqrt(P),I=Math.atan2(V,m*L);h=Math.sin(h*I)/V,l=Math.sin(l*I)/V}const q=l*L;if(u=u*h+f*q,p=p*h+g*q,d=d*h+T*q,v=v*h+S*q,h===1-l){const V=1/Math.sqrt(u*u+p*p+d*d+v*v);u*=V,p*=V,d*=V,v*=V}}e[t]=u,e[t+1]=p,e[t+2]=d,e[t+3]=v}static multiplyQuaternionsFlat(e,t,n,a,s,c){const l=n[a],u=n[a+1],p=n[a+2],d=n[a+3],v=s[c],f=s[c+1],g=s[c+2],T=s[c+3];return e[t]=l*T+d*v+u*g-p*f,e[t+1]=u*T+d*f+p*v-l*g,e[t+2]=p*T+d*g+l*f-u*v,e[t+3]=d*T-l*v-u*f-p*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,s=e._z,c=e._order,l=Math.cos,u=Math.sin,p=l(n/2),d=l(a/2),v=l(s/2),f=u(n/2),g=u(a/2),T=u(s/2);switch(c){case"XYZ":this._x=f*d*v+p*g*T,this._y=p*g*v-f*d*T,this._z=p*d*T+f*g*v,this._w=p*d*v-f*g*T;break;case"YXZ":this._x=f*d*v+p*g*T,this._y=p*g*v-f*d*T,this._z=p*d*T-f*g*v,this._w=p*d*v+f*g*T;break;case"ZXY":this._x=f*d*v-p*g*T,this._y=p*g*v+f*d*T,this._z=p*d*T+f*g*v,this._w=p*d*v-f*g*T;break;case"ZYX":this._x=f*d*v-p*g*T,this._y=p*g*v+f*d*T,this._z=p*d*T-f*g*v,this._w=p*d*v+f*g*T;break;case"YZX":this._x=f*d*v+p*g*T,this._y=p*g*v+f*d*T,this._z=p*d*T-f*g*v,this._w=p*d*v-f*g*T;break;case"XZY":this._x=f*d*v-p*g*T,this._y=p*g*v-f*d*T,this._z=p*d*T+f*g*v,this._w=p*d*v+f*g*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],s=t[8],c=t[1],l=t[5],u=t[9],p=t[2],d=t[6],v=t[10],f=n+l+v;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(d-u)*g,this._y=(s-p)*g,this._z=(c-a)*g}else if(n>l&&n>v){const g=2*Math.sqrt(1+n-l-v);this._w=(d-u)/g,this._x=.25*g,this._y=(a+c)/g,this._z=(s+p)/g}else if(l>v){const g=2*Math.sqrt(1+l-n-v);this._w=(s-p)/g,this._x=(a+c)/g,this._y=.25*g,this._z=(u+d)/g}else{const g=2*Math.sqrt(1+v-n-l);this._w=(c-a)/g,this._x=(s+p)/g,this._y=(u+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(In(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,s=e._z,c=e._w,l=t._x,u=t._y,p=t._z,d=t._w;return this._x=n*d+c*l+a*p-s*u,this._y=a*d+c*u+s*l-n*p,this._z=s*d+c*p+n*u-a*l,this._w=c*d-n*l-a*u-s*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,a=this._y,s=this._z,c=this._w;let l=c*e._w+n*e._x+a*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=c,this._x=n,this._y=a,this._z=s,this;const u=1-l*l;if(u<=Number.EPSILON){const g=1-t;return this._w=g*c+t*this._w,this._x=g*n+t*this._x,this._y=g*a+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const p=Math.sqrt(u),d=Math.atan2(p,l),v=Math.sin((1-t)*d)/p,f=Math.sin(t*d)/p;return this._w=c*v+this._w*f,this._x=n*v+this._x*f,this._y=a*v+this._y*f,this._z=s*v+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class be{constructor(e=0,t=0,n=0){be.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*a,this.y=s[1]*t+s[4]*n+s[7]*a,this.z=s[2]*t+s[5]*n+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,s=e.elements,c=1/(s[3]*t+s[7]*n+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*a+s[12])*c,this.y=(s[1]*t+s[5]*n+s[9]*a+s[13])*c,this.z=(s[2]*t+s[6]*n+s[10]*a+s[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,s=e.x,c=e.y,l=e.z,u=e.w,p=2*(c*a-l*n),d=2*(l*t-s*a),v=2*(s*n-c*t);return this.x=t+u*p+c*v-l*d,this.y=n+u*d+l*p-s*v,this.z=a+u*v+s*d-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a,this.y=s[1]*t+s[5]*n+s[9]*a,this.z=s[2]*t+s[6]*n+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,s=e.z,c=t.x,l=t.y,u=t.z;return this.x=a*u-s*l,this.y=s*c-n*u,this.z=n*l-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zo.copy(this).projectOnVector(e),this.sub(Zo)}reflect(e){return this.sub(Zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(In(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zo=new be,Yl=new Us;class Is{constructor(e=new be(1/0,1/0,1/0),t=new be(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let c=0,l=s.count;c<l;c++)e.isMesh===!0?e.getVertexPosition(c,Yn):Yn.fromBufferAttribute(s,c),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ys.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox)),Ys.applyMatrix4(e.matrixWorld),this.union(Ys)}const a=e.children;for(let s=0,c=a.length;s<c;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),Zs.subVectors(this.max,ys),Ta.subVectors(e.a,ys),Aa.subVectors(e.b,ys),wa.subVectors(e.c,ys),Ui.subVectors(Aa,Ta),Ii.subVectors(wa,Aa),ra.subVectors(Ta,wa);let t=[0,-Ui.z,Ui.y,0,-Ii.z,Ii.y,0,-ra.z,ra.y,Ui.z,0,-Ui.x,Ii.z,0,-Ii.x,ra.z,0,-ra.x,-Ui.y,Ui.x,0,-Ii.y,Ii.x,0,-ra.y,ra.x,0];return!Ko(t,Ta,Aa,wa,Zs)||(t=[1,0,0,0,1,0,0,0,1],!Ko(t,Ta,Aa,wa,Zs))?!1:(Ks.crossVectors(Ui,Ii),t=[Ks.x,Ks.y,Ks.z],Ko(t,Ta,Aa,wa,Zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mi=[new be,new be,new be,new be,new be,new be,new be,new be],Yn=new be,Ys=new Is,Ta=new be,Aa=new be,wa=new be,Ui=new be,Ii=new be,ra=new be,ys=new be,Zs=new be,Ks=new be,la=new be;function Ko(i,e,t,n,a){for(let s=0,c=i.length-3;s<=c;s+=3){la.fromArray(i,s);const l=a.x*Math.abs(la.x)+a.y*Math.abs(la.y)+a.z*Math.abs(la.z),u=e.dot(la),p=t.dot(la),d=n.dot(la);if(Math.max(-Math.max(u,p,d),Math.min(u,p,d))>l)return!1}return!0}const xp=new Is,Ms=new be,Jo=new be;class zo{constructor(e=new be,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xp.setFromPoints(e).getCenter(n);let a=0;for(let s=0,c=e.length;s<c;s++)a=Math.max(a,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const t=Ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(Ms,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(Jo)),this.expandByPoint(Ms.copy(e.center).sub(Jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new be,Qo=new be,Js=new be,Ni=new be,er=new be,Qs=new be,tr=new be;class du{constructor(e=new be,t=new be(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){Qo.copy(e).add(t).multiplyScalar(.5),Js.copy(t).sub(e).normalize(),Ni.copy(this.origin).sub(Qo);const s=e.distanceTo(t)*.5,c=-this.direction.dot(Js),l=Ni.dot(this.direction),u=-Ni.dot(Js),p=Ni.lengthSq(),d=Math.abs(1-c*c);let v,f,g,T;if(d>0)if(v=c*u-l,f=c*l-u,T=s*d,v>=0)if(f>=-T)if(f<=T){const S=1/d;v*=S,f*=S,g=v*(v+c*f+2*l)+f*(c*v+f+2*u)+p}else f=s,v=Math.max(0,-(c*f+l)),g=-v*v+f*(f+2*u)+p;else f=-s,v=Math.max(0,-(c*f+l)),g=-v*v+f*(f+2*u)+p;else f<=-T?(v=Math.max(0,-(-c*s+l)),f=v>0?-s:Math.min(Math.max(-s,-u),s),g=-v*v+f*(f+2*u)+p):f<=T?(v=0,f=Math.min(Math.max(-s,-u),s),g=f*(f+2*u)+p):(v=Math.max(0,-(c*s+l)),f=v>0?s:Math.min(Math.max(-s,-u),s),g=-v*v+f*(f+2*u)+p);else f=c>0?-s:s,v=Math.max(0,-(c*f+l)),g=-v*v+f*(f+2*u)+p;return n&&n.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Qo).addScaledVector(Js,f),g}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);const n=Ci.dot(this.direction),a=Ci.dot(Ci)-n*n,s=e.radius*e.radius;if(a>s)return null;const c=Math.sqrt(s-a),l=n-c,u=n+c;return u<0?null:l<0?this.at(u,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,s,c,l,u;const p=1/this.direction.x,d=1/this.direction.y,v=1/this.direction.z,f=this.origin;return p>=0?(n=(e.min.x-f.x)*p,a=(e.max.x-f.x)*p):(n=(e.max.x-f.x)*p,a=(e.min.x-f.x)*p),d>=0?(s=(e.min.y-f.y)*d,c=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,c=(e.min.y-f.y)*d),n>c||s>a||((s>n||isNaN(n))&&(n=s),(c<a||isNaN(a))&&(a=c),v>=0?(l=(e.min.z-f.z)*v,u=(e.max.z-f.z)*v):(l=(e.max.z-f.z)*v,u=(e.min.z-f.z)*v),n>u||l>a)||((l>n||n!==n)&&(n=l),(u<a||a!==a)&&(a=u),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,n,a,s){er.subVectors(t,e),Qs.subVectors(n,e),tr.crossVectors(er,Qs);let c=this.direction.dot(tr),l;if(c>0){if(a)return null;l=1}else if(c<0)l=-1,c=-c;else return null;Ni.subVectors(this.origin,e);const u=l*this.direction.dot(Qs.crossVectors(Ni,Qs));if(u<0)return null;const p=l*this.direction.dot(er.cross(Ni));if(p<0||u+p>c)return null;const d=-l*Ni.dot(tr);return d<0?null:this.at(d/c,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(e,t,n,a,s,c,l,u,p,d,v,f,g,T,S,h){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,c,l,u,p,d,v,f,g,T,S,h)}set(e,t,n,a,s,c,l,u,p,d,v,f,g,T,S,h){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=a,m[1]=s,m[5]=c,m[9]=l,m[13]=u,m[2]=p,m[6]=d,m[10]=v,m[14]=f,m[3]=g,m[7]=T,m[11]=S,m[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,a=1/Pa.setFromMatrixColumn(e,0).length(),s=1/Pa.setFromMatrixColumn(e,1).length(),c=1/Pa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,s=e.z,c=Math.cos(n),l=Math.sin(n),u=Math.cos(a),p=Math.sin(a),d=Math.cos(s),v=Math.sin(s);if(e.order==="XYZ"){const f=c*d,g=c*v,T=l*d,S=l*v;t[0]=u*d,t[4]=-u*v,t[8]=p,t[1]=g+T*p,t[5]=f-S*p,t[9]=-l*u,t[2]=S-f*p,t[6]=T+g*p,t[10]=c*u}else if(e.order==="YXZ"){const f=u*d,g=u*v,T=p*d,S=p*v;t[0]=f+S*l,t[4]=T*l-g,t[8]=c*p,t[1]=c*v,t[5]=c*d,t[9]=-l,t[2]=g*l-T,t[6]=S+f*l,t[10]=c*u}else if(e.order==="ZXY"){const f=u*d,g=u*v,T=p*d,S=p*v;t[0]=f-S*l,t[4]=-c*v,t[8]=T+g*l,t[1]=g+T*l,t[5]=c*d,t[9]=S-f*l,t[2]=-c*p,t[6]=l,t[10]=c*u}else if(e.order==="ZYX"){const f=c*d,g=c*v,T=l*d,S=l*v;t[0]=u*d,t[4]=T*p-g,t[8]=f*p+S,t[1]=u*v,t[5]=S*p+f,t[9]=g*p-T,t[2]=-p,t[6]=l*u,t[10]=c*u}else if(e.order==="YZX"){const f=c*u,g=c*p,T=l*u,S=l*p;t[0]=u*d,t[4]=S-f*v,t[8]=T*v+g,t[1]=v,t[5]=c*d,t[9]=-l*d,t[2]=-p*d,t[6]=g*v+T,t[10]=f-S*v}else if(e.order==="XZY"){const f=c*u,g=c*p,T=l*u,S=l*p;t[0]=u*d,t[4]=-v,t[8]=p*d,t[1]=f*v+S,t[5]=c*d,t[9]=g*v-T,t[2]=T*v-g,t[6]=l*d,t[10]=S*v+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bp,e,yp)}lookAt(e,t,n){const a=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),qi.crossVectors(n,On),qi.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),qi.crossVectors(n,On)),qi.normalize(),eo.crossVectors(On,qi),a[0]=qi.x,a[4]=eo.x,a[8]=On.x,a[1]=qi.y,a[5]=eo.y,a[9]=On.y,a[2]=qi.z,a[6]=eo.z,a[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,s=this.elements,c=n[0],l=n[4],u=n[8],p=n[12],d=n[1],v=n[5],f=n[9],g=n[13],T=n[2],S=n[6],h=n[10],m=n[14],L=n[3],P=n[7],q=n[11],V=n[15],I=a[0],H=a[4],z=a[8],w=a[12],A=a[1],B=a[5],W=a[9],Y=a[13],X=a[2],te=a[6],se=a[10],de=a[14],$=a[3],De=a[7],ie=a[11],me=a[15];return s[0]=c*I+l*A+u*X+p*$,s[4]=c*H+l*B+u*te+p*De,s[8]=c*z+l*W+u*se+p*ie,s[12]=c*w+l*Y+u*de+p*me,s[1]=d*I+v*A+f*X+g*$,s[5]=d*H+v*B+f*te+g*De,s[9]=d*z+v*W+f*se+g*ie,s[13]=d*w+v*Y+f*de+g*me,s[2]=T*I+S*A+h*X+m*$,s[6]=T*H+S*B+h*te+m*De,s[10]=T*z+S*W+h*se+m*ie,s[14]=T*w+S*Y+h*de+m*me,s[3]=L*I+P*A+q*X+V*$,s[7]=L*H+P*B+q*te+V*De,s[11]=L*z+P*W+q*se+V*ie,s[15]=L*w+P*Y+q*de+V*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],s=e[12],c=e[1],l=e[5],u=e[9],p=e[13],d=e[2],v=e[6],f=e[10],g=e[14],T=e[3],S=e[7],h=e[11],m=e[15];return T*(+s*u*v-a*p*v-s*l*f+n*p*f+a*l*g-n*u*g)+S*(+t*u*g-t*p*f+s*c*f-a*c*g+a*p*d-s*u*d)+h*(+t*p*v-t*l*g-s*c*v+n*c*g+s*l*d-n*p*d)+m*(-a*l*d-t*u*v+t*l*f+a*c*v-n*c*f+n*u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],c=e[4],l=e[5],u=e[6],p=e[7],d=e[8],v=e[9],f=e[10],g=e[11],T=e[12],S=e[13],h=e[14],m=e[15],L=v*h*p-S*f*p+S*u*g-l*h*g-v*u*m+l*f*m,P=T*f*p-d*h*p-T*u*g+c*h*g+d*u*m-c*f*m,q=d*S*p-T*v*p+T*l*g-c*S*g-d*l*m+c*v*m,V=T*v*u-d*S*u-T*l*f+c*S*f+d*l*h-c*v*h,I=t*L+n*P+a*q+s*V;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/I;return e[0]=L*H,e[1]=(S*f*s-v*h*s-S*a*g+n*h*g+v*a*m-n*f*m)*H,e[2]=(l*h*s-S*u*s+S*a*p-n*h*p-l*a*m+n*u*m)*H,e[3]=(v*u*s-l*f*s-v*a*p+n*f*p+l*a*g-n*u*g)*H,e[4]=P*H,e[5]=(d*h*s-T*f*s+T*a*g-t*h*g-d*a*m+t*f*m)*H,e[6]=(T*u*s-c*h*s-T*a*p+t*h*p+c*a*m-t*u*m)*H,e[7]=(c*f*s-d*u*s+d*a*p-t*f*p-c*a*g+t*u*g)*H,e[8]=q*H,e[9]=(T*v*s-d*S*s-T*n*g+t*S*g+d*n*m-t*v*m)*H,e[10]=(c*S*s-T*l*s+T*n*p-t*S*p-c*n*m+t*l*m)*H,e[11]=(d*l*s-c*v*s-d*n*p+t*v*p+c*n*g-t*l*g)*H,e[12]=V*H,e[13]=(d*S*a-T*v*a+T*n*f-t*S*f-d*n*h+t*v*h)*H,e[14]=(T*l*a-c*S*a-T*n*u+t*S*u+c*n*h-t*l*h)*H,e[15]=(c*v*a-d*l*a+d*n*u-t*v*u-c*n*f+t*l*f)*H,this}scale(e){const t=this.elements,n=e.x,a=e.y,s=e.z;return t[0]*=n,t[4]*=a,t[8]*=s,t[1]*=n,t[5]*=a,t[9]*=s,t[2]*=n,t[6]*=a,t[10]*=s,t[3]*=n,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),s=1-n,c=e.x,l=e.y,u=e.z,p=s*c,d=s*l;return this.set(p*c+n,p*l-a*u,p*u+a*l,0,p*l+a*u,d*l+n,d*u-a*c,0,p*u-a*l,d*u+a*c,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,s,c){return this.set(1,n,s,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,s=t._x,c=t._y,l=t._z,u=t._w,p=s+s,d=c+c,v=l+l,f=s*p,g=s*d,T=s*v,S=c*d,h=c*v,m=l*v,L=u*p,P=u*d,q=u*v,V=n.x,I=n.y,H=n.z;return a[0]=(1-(S+m))*V,a[1]=(g+q)*V,a[2]=(T-P)*V,a[3]=0,a[4]=(g-q)*I,a[5]=(1-(f+m))*I,a[6]=(h+L)*I,a[7]=0,a[8]=(T+P)*H,a[9]=(h-L)*H,a[10]=(1-(f+S))*H,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;let s=Pa.set(a[0],a[1],a[2]).length();const c=Pa.set(a[4],a[5],a[6]).length(),l=Pa.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],Zn.copy(this);const p=1/s,d=1/c,v=1/l;return Zn.elements[0]*=p,Zn.elements[1]*=p,Zn.elements[2]*=p,Zn.elements[4]*=d,Zn.elements[5]*=d,Zn.elements[6]*=d,Zn.elements[8]*=v,Zn.elements[9]*=v,Zn.elements[10]*=v,t.setFromRotationMatrix(Zn),n.x=s,n.y=c,n.z=l,this}makePerspective(e,t,n,a,s,c,l=Ri){const u=this.elements,p=2*s/(t-e),d=2*s/(n-a),v=(t+e)/(t-e),f=(n+a)/(n-a);let g,T;if(l===Ri)g=-(c+s)/(c-s),T=-2*c*s/(c-s);else if(l===Uo)g=-c/(c-s),T=-c*s/(c-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=p,u[4]=0,u[8]=v,u[12]=0,u[1]=0,u[5]=d,u[9]=f,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=T,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,a,s,c,l=Ri){const u=this.elements,p=1/(t-e),d=1/(n-a),v=1/(c-s),f=(t+e)*p,g=(n+a)*d;let T,S;if(l===Ri)T=(c+s)*v,S=-2*v;else if(l===Uo)T=s*v,S=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=2*p,u[4]=0,u[8]=0,u[12]=-f,u[1]=0,u[5]=2*d,u[9]=0,u[13]=-g,u[2]=0,u[6]=0,u[10]=S,u[14]=-T,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pa=new be,Zn=new en,bp=new be(0,0,0),yp=new be(1,1,1),qi=new be,eo=new be,On=new be,Zl=new en,Kl=new Us;class li{constructor(e=0,t=0,n=0,a=li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,s=a[0],c=a[4],l=a[8],u=a[1],p=a[5],d=a[9],v=a[2],f=a[6],g=a[10];switch(t){case"XYZ":this._y=Math.asin(In(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-c,s)):(this._x=Math.atan2(f,p),this._z=0);break;case"YXZ":this._x=Math.asin(-In(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(u,p)):(this._y=Math.atan2(-v,s),this._z=0);break;case"ZXY":this._x=Math.asin(In(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-v,g),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-In(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(In(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,p),this._y=Math.atan2(-v,s)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-In(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(f,p),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kl.setFromEuler(this),this.setFromQuaternion(Kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class pu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mp=0;const Jl=new be,Ra=new Us,Si=new en,to=new be,Cs=new be,Cp=new be,Sp=new Us,Ql=new be(1,0,0),ec=new be(0,1,0),tc=new be(0,0,1),nc={type:"added"},Ep={type:"removed"},La={type:"childadded",child:null},nr={type:"childremoved",child:null};class sn extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new be,t=new li,n=new Us,a=new be(1,1,1);function s(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new en},normalMatrix:{value:new Nt}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ra.setFromAxisAngle(e,t),this.quaternion.multiply(Ra),this}rotateOnWorldAxis(e,t){return Ra.setFromAxisAngle(e,t),this.quaternion.premultiply(Ra),this}rotateX(e){return this.rotateOnAxis(Ql,e)}rotateY(e){return this.rotateOnAxis(ec,e)}rotateZ(e){return this.rotateOnAxis(tc,e)}translateOnAxis(e,t){return Jl.copy(e).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ql,e)}translateY(e){return this.translateOnAxis(ec,e)}translateZ(e){return this.translateOnAxis(tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?to.copy(e):to.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Cs,to,this.up):Si.lookAt(to,Cs,this.up),this.quaternion.setFromRotationMatrix(Si),a&&(Si.extractRotation(a.matrixWorld),Ra.setFromRotationMatrix(Si),this.quaternion.premultiply(Ra.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nc),La.child=e,this.dispatchEvent(La),La.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ep),nr.child=e,this.dispatchEvent(nr),nr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nc),La.child=e,this.dispatchEvent(La),La.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let s=0,c=a.length;s<c;s++)a[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,Cp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,Sp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let s=0,c=a.length;s<c;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let p=0,d=u.length;p<d;p++){const v=u[p];s(e.shapes,v)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,p=this.material.length;u<p;u++)l.push(s(e.materials,this.material[u]));a.material=l}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let l=0;l<this.children.length;l++)a.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];a.animations.push(s(e.animations,u))}}if(t){const l=c(e.geometries),u=c(e.materials),p=c(e.textures),d=c(e.images),v=c(e.shapes),f=c(e.skeletons),g=c(e.animations),T=c(e.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),p.length>0&&(n.textures=p),d.length>0&&(n.images=d),v.length>0&&(n.shapes=v),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),T.length>0&&(n.nodes=T)}return n.object=a,n;function c(l){const u=[];for(const p in l){const d=l[p];delete d.metadata,u.push(d)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}sn.DEFAULT_UP=new be(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new be,Ei=new be,ir=new be,Ti=new be,Da=new be,Ua=new be,ic=new be,ar=new be,sr=new be,or=new be;class oi{constructor(e=new be,t=new be,n=new be){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),Kn.subVectors(e,t),a.cross(Kn);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,n,a,s){Kn.subVectors(a,t),Ei.subVectors(n,t),ir.subVectors(e,t);const c=Kn.dot(Kn),l=Kn.dot(Ei),u=Kn.dot(ir),p=Ei.dot(Ei),d=Ei.dot(ir),v=c*p-l*l;if(v===0)return s.set(0,0,0),null;const f=1/v,g=(p*u-l*d)*f,T=(c*d-l*u)*f;return s.set(1-g-T,T,g)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,n,a,s,c,l,u){return this.getBarycoord(e,t,n,a,Ti)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,Ti.x),u.addScaledVector(c,Ti.y),u.addScaledVector(l,Ti.z),u)}static isFrontFacing(e,t,n,a){return Kn.subVectors(n,t),Ei.subVectors(e,t),Kn.cross(Ei).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Kn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,s){return oi.getInterpolation(e,this.a,this.b,this.c,t,n,a,s)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,s=this.c;let c,l;Da.subVectors(a,n),Ua.subVectors(s,n),ar.subVectors(e,n);const u=Da.dot(ar),p=Ua.dot(ar);if(u<=0&&p<=0)return t.copy(n);sr.subVectors(e,a);const d=Da.dot(sr),v=Ua.dot(sr);if(d>=0&&v<=d)return t.copy(a);const f=u*v-d*p;if(f<=0&&u>=0&&d<=0)return c=u/(u-d),t.copy(n).addScaledVector(Da,c);or.subVectors(e,s);const g=Da.dot(or),T=Ua.dot(or);if(T>=0&&g<=T)return t.copy(s);const S=g*p-u*T;if(S<=0&&p>=0&&T<=0)return l=p/(p-T),t.copy(n).addScaledVector(Ua,l);const h=d*T-g*v;if(h<=0&&v-d>=0&&g-T>=0)return ic.subVectors(s,a),l=(v-d)/(v-d+(g-T)),t.copy(a).addScaledVector(ic,l);const m=1/(h+S+f);return c=S*m,l=f*m,t.copy(n).addScaledVector(Da,c).addScaledVector(Ua,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},no={h:0,s:0,l:0};function rr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,a=Gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Gt.toWorkingColorSpace(this,a),this}setHSL(e,t,n,a=Gt.workingColorSpace){if(e=up(e,1),t=In(t,0,1),n=In(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,c=2*n-s;this.r=rr(c,s,e+1/3),this.g=rr(c,s,e),this.b=rr(c,s,e-1/3)}return Gt.toWorkingColorSpace(this,a),this}setStyle(e,t=ai){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const c=a[1],l=a[2];switch(c){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],c=s.length;if(c===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ai){const n=fu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}copyLinearToSRGB(e){return this.r=Xo(e.r),this.g=Xo(e.g),this.b=Xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return Gt.fromWorkingColorSpace(mn.copy(this),e),Math.round(In(mn.r*255,0,255))*65536+Math.round(In(mn.g*255,0,255))*256+Math.round(In(mn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gt.workingColorSpace){Gt.fromWorkingColorSpace(mn.copy(this),t);const n=mn.r,a=mn.g,s=mn.b,c=Math.max(n,a,s),l=Math.min(n,a,s);let u,p;const d=(l+c)/2;if(l===c)u=0,p=0;else{const v=c-l;switch(p=d<=.5?v/(c+l):v/(2-c-l),c){case n:u=(a-s)/v+(a<s?6:0);break;case a:u=(s-n)/v+2;break;case s:u=(n-a)/v+4;break}u/=6}return e.h=u,e.s=p,e.l=d,e}getRGB(e,t=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=ai){Gt.fromWorkingColorSpace(mn.copy(this),e);const t=mn.r,n=mn.g,a=mn.b;return e!==ai?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(no);const n=Wo(Fi.h,no.h,t),a=Wo(Fi.s,no.s,t),s=Wo(Fi.l,no.l,t);return this.setHSL(n,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*a,this.g=s[1]*t+s[4]*n+s[7]*a,this.b=s[2]*t+s[5]*n+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new Rt;Rt.NAMES=fu;let Tp=0;class ts extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=ka,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yr,this.blendDst=Mr,this.blendEquation=va,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sa,this.stencilZFail=Sa,this.stencilZPass=Sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ka&&(n.blending=this.blending),this.side!==ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yr&&(n.blendSrc=this.blendSrc),this.blendDst!==Mr&&(n.blendDst=this.blendDst),this.blendEquation!==va&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Po&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sa&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Sa&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Sa&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(s){const c=[];for(const l in s){const u=s[l];delete u.metadata,c.push(u)}return c}if(t){const s=a(e.textures),c=a(e.images);s.length>0&&(n.textures=s),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let s=0;s!==a;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hu extends ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nn=new be,io=new Bt;class ri{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ws("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)io.fromBufferAttribute(this,t),io.applyMatrix3(e),this.setXY(t,io.x,io.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),n=Un(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),n=Un(n,this.array),a=Un(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,s){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),n=Un(n,this.array),a=Un(a,this.array),s=Un(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gl&&(e.usage=this.usage),e}}class mu extends ri{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vu extends ri{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dn extends ri{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ap=0;const Vn=new en,lr=new sn,Ia=new be,zn=new Is,Ss=new Is,un=new be;class Bn extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lu(e)?vu:mu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,n){return Vn.makeTranslation(e,t,n),this.applyMatrix4(Vn),this}scale(e,t,n){return Vn.makeScale(e,t,n),this.applyMatrix4(Vn),this}lookAt(e){return lr.lookAt(e),lr.updateMatrix(),this.applyMatrix4(lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ia).negate(),this.translate(Ia.x,Ia.y,Ia.z),this}setFromPoints(e){const t=[];for(let n=0,a=e.length;n<a;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new be(-1/0,-1/0,-1/0),new be(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const s=t[n];zn.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new be,1/0);return}if(e){const n=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let s=0,c=t.length;s<c;s++){const l=t[s];Ss.setFromBufferAttribute(l),this.morphTargetsRelative?(un.addVectors(zn.min,Ss.min),zn.expandByPoint(un),un.addVectors(zn.max,Ss.max),zn.expandByPoint(un)):(zn.expandByPoint(Ss.min),zn.expandByPoint(Ss.max))}zn.getCenter(n);let a=0;for(let s=0,c=e.count;s<c;s++)un.fromBufferAttribute(e,s),a=Math.max(a,n.distanceToSquared(un));if(t)for(let s=0,c=t.length;s<c;s++){const l=t[s],u=this.morphTargetsRelative;for(let p=0,d=l.count;p<d;p++)un.fromBufferAttribute(l,p),u&&(Ia.fromBufferAttribute(e,p),un.add(Ia)),a=Math.max(a,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),l=[],u=[];for(let z=0;z<n.count;z++)l[z]=new be,u[z]=new be;const p=new be,d=new be,v=new be,f=new Bt,g=new Bt,T=new Bt,S=new be,h=new be;function m(z,w,A){p.fromBufferAttribute(n,z),d.fromBufferAttribute(n,w),v.fromBufferAttribute(n,A),f.fromBufferAttribute(s,z),g.fromBufferAttribute(s,w),T.fromBufferAttribute(s,A),d.sub(p),v.sub(p),g.sub(f),T.sub(f);const B=1/(g.x*T.y-T.x*g.y);isFinite(B)&&(S.copy(d).multiplyScalar(T.y).addScaledVector(v,-g.y).multiplyScalar(B),h.copy(v).multiplyScalar(g.x).addScaledVector(d,-T.x).multiplyScalar(B),l[z].add(S),l[w].add(S),l[A].add(S),u[z].add(h),u[w].add(h),u[A].add(h))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let z=0,w=L.length;z<w;++z){const A=L[z],B=A.start,W=A.count;for(let Y=B,X=B+W;Y<X;Y+=3)m(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const P=new be,q=new be,V=new be,I=new be;function H(z){V.fromBufferAttribute(a,z),I.copy(V);const w=l[z];P.copy(w),P.sub(V.multiplyScalar(V.dot(w))).normalize(),q.crossVectors(I,w);const B=q.dot(u[z])<0?-1:1;c.setXYZW(z,P.x,P.y,P.z,B)}for(let z=0,w=L.length;z<w;++z){const A=L[z],B=A.start,W=A.count;for(let Y=B,X=B+W;Y<X;Y+=3)H(e.getX(Y+0)),H(e.getX(Y+1)),H(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ri(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);const a=new be,s=new be,c=new be,l=new be,u=new be,p=new be,d=new be,v=new be;if(e)for(let f=0,g=e.count;f<g;f+=3){const T=e.getX(f+0),S=e.getX(f+1),h=e.getX(f+2);a.fromBufferAttribute(t,T),s.fromBufferAttribute(t,S),c.fromBufferAttribute(t,h),d.subVectors(c,s),v.subVectors(a,s),d.cross(v),l.fromBufferAttribute(n,T),u.fromBufferAttribute(n,S),p.fromBufferAttribute(n,h),l.add(d),u.add(d),p.add(d),n.setXYZ(T,l.x,l.y,l.z),n.setXYZ(S,u.x,u.y,u.z),n.setXYZ(h,p.x,p.y,p.z)}else for(let f=0,g=t.count;f<g;f+=3)a.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),c.fromBufferAttribute(t,f+2),d.subVectors(c,s),v.subVectors(a,s),d.cross(v),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(l,u){const p=l.array,d=l.itemSize,v=l.normalized,f=new p.constructor(u.length*d);let g=0,T=0;for(let S=0,h=u.length;S<h;S++){l.isInterleavedBufferAttribute?g=u[S]*l.data.stride+l.offset:g=u[S]*d;for(let m=0;m<d;m++)f[T++]=p[g++]}return new ri(f,d,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,n=this.index.array,a=this.attributes;for(const l in a){const u=a[l],p=e(u,n);t.setAttribute(l,p)}const s=this.morphAttributes;for(const l in s){const u=[],p=s[l];for(let d=0,v=p.length;d<v;d++){const f=p[d],g=e(f,n);u.push(g)}t.morphAttributes[l]=u}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let l=0,u=c.length;l<u;l++){const p=c[l];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const p in u)u[p]!==void 0&&(e[p]=u[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const p=n[u];e.data.attributes[u]=p.toJSON(e.data)}const a={};let s=!1;for(const u in this.morphAttributes){const p=this.morphAttributes[u],d=[];for(let v=0,f=p.length;v<f;v++){const g=p[v];d.push(g.toJSON(e.data))}d.length>0&&(a[u]=d,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const a=e.attributes;for(const p in a){const d=a[p];this.setAttribute(p,d.clone(t))}const s=e.morphAttributes;for(const p in s){const d=[],v=s[p];for(let f=0,g=v.length;f<g;f++)d.push(v[f].clone(t));this.morphAttributes[p]=d}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,d=c.length;p<d;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ac=new en,ca=new du,ao=new zo,sc=new be,Na=new be,qa=new be,Fa=new be,cr=new be,so=new be,oo=new Bt,ro=new Bt,lo=new Bt,oc=new be,rc=new be,lc=new be,co=new be,uo=new be;class $n extends sn{constructor(e=new Bn,t=new hu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=a.length;s<c;s++){const l=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,s=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const l=this.morphTargetInfluences;if(s&&l){so.set(0,0,0);for(let u=0,p=s.length;u<p;u++){const d=l[u],v=s[u];d!==0&&(cr.fromBufferAttribute(v,e),c?so.addScaledVector(cr,d):so.addScaledVector(cr.sub(t),d))}t.add(so)}return t}raycast(e,t){const n=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(s),ca.copy(e.ray).recast(e.near),!(ao.containsPoint(ca.origin)===!1&&(ca.intersectSphere(ao,sc)===null||ca.origin.distanceToSquared(sc)>(e.far-e.near)**2))&&(ac.copy(s).invert(),ca.copy(e.ray).applyMatrix4(ac),!(n.boundingBox!==null&&ca.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ca)))}_computeIntersections(e,t,n){let a;const s=this.geometry,c=this.material,l=s.index,u=s.attributes.position,p=s.attributes.uv,d=s.attributes.uv1,v=s.attributes.normal,f=s.groups,g=s.drawRange;if(l!==null)if(Array.isArray(c))for(let T=0,S=f.length;T<S;T++){const h=f[T],m=c[h.materialIndex],L=Math.max(h.start,g.start),P=Math.min(l.count,Math.min(h.start+h.count,g.start+g.count));for(let q=L,V=P;q<V;q+=3){const I=l.getX(q),H=l.getX(q+1),z=l.getX(q+2);a=po(this,m,e,n,p,d,v,I,H,z),a&&(a.faceIndex=Math.floor(q/3),a.face.materialIndex=h.materialIndex,t.push(a))}}else{const T=Math.max(0,g.start),S=Math.min(l.count,g.start+g.count);for(let h=T,m=S;h<m;h+=3){const L=l.getX(h),P=l.getX(h+1),q=l.getX(h+2);a=po(this,c,e,n,p,d,v,L,P,q),a&&(a.faceIndex=Math.floor(h/3),t.push(a))}}else if(u!==void 0)if(Array.isArray(c))for(let T=0,S=f.length;T<S;T++){const h=f[T],m=c[h.materialIndex],L=Math.max(h.start,g.start),P=Math.min(u.count,Math.min(h.start+h.count,g.start+g.count));for(let q=L,V=P;q<V;q+=3){const I=q,H=q+1,z=q+2;a=po(this,m,e,n,p,d,v,I,H,z),a&&(a.faceIndex=Math.floor(q/3),a.face.materialIndex=h.materialIndex,t.push(a))}}else{const T=Math.max(0,g.start),S=Math.min(u.count,g.start+g.count);for(let h=T,m=S;h<m;h+=3){const L=h,P=h+1,q=h+2;a=po(this,c,e,n,p,d,v,L,P,q),a&&(a.faceIndex=Math.floor(h/3),t.push(a))}}}}function wp(i,e,t,n,a,s,c,l){let u;if(e.side===qn?u=n.intersectTriangle(c,s,a,!0,l):u=n.intersectTriangle(a,s,c,e.side===ki,l),u===null)return null;uo.copy(l),uo.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(uo);return p<t.near||p>t.far?null:{distance:p,point:uo.clone(),object:i}}function po(i,e,t,n,a,s,c,l,u,p){i.getVertexPosition(l,Na),i.getVertexPosition(u,qa),i.getVertexPosition(p,Fa);const d=wp(i,e,t,n,Na,qa,Fa,co);if(d){a&&(oo.fromBufferAttribute(a,l),ro.fromBufferAttribute(a,u),lo.fromBufferAttribute(a,p),d.uv=oi.getInterpolation(co,Na,qa,Fa,oo,ro,lo,new Bt)),s&&(oo.fromBufferAttribute(s,l),ro.fromBufferAttribute(s,u),lo.fromBufferAttribute(s,p),d.uv1=oi.getInterpolation(co,Na,qa,Fa,oo,ro,lo,new Bt)),c&&(oc.fromBufferAttribute(c,l),rc.fromBufferAttribute(c,u),lc.fromBufferAttribute(c,p),d.normal=oi.getInterpolation(co,Na,qa,Fa,oc,rc,lc,new be),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const v={a:l,b:u,c:p,normal:new be,materialIndex:0};oi.getNormal(Na,qa,Fa,v.normal),d.face=v}return d}class Ca extends Bn{constructor(e=1,t=1,n=1,a=1,s=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:s,depthSegments:c};const l=this;a=Math.floor(a),s=Math.floor(s),c=Math.floor(c);const u=[],p=[],d=[],v=[];let f=0,g=0;T("z","y","x",-1,-1,n,t,e,c,s,0),T("z","y","x",1,-1,n,t,-e,c,s,1),T("x","z","y",1,1,e,n,t,a,c,2),T("x","z","y",1,-1,e,n,-t,a,c,3),T("x","y","z",1,-1,e,t,n,a,s,4),T("x","y","z",-1,-1,e,t,-n,a,s,5),this.setIndex(u),this.setAttribute("position",new dn(p,3)),this.setAttribute("normal",new dn(d,3)),this.setAttribute("uv",new dn(v,2));function T(S,h,m,L,P,q,V,I,H,z,w){const A=q/H,B=V/z,W=q/2,Y=V/2,X=I/2,te=H+1,se=z+1;let de=0,$=0;const De=new be;for(let ie=0;ie<se;ie++){const me=ie*B-Y;for(let We=0;We<te;We++){const ze=We*A-W;De[S]=ze*L,De[h]=me*P,De[m]=X,p.push(De.x,De.y,De.z),De[S]=0,De[h]=0,De[m]=I>0?1:-1,d.push(De.x,De.y,De.z),v.push(We/H),v.push(1-ie/z),de+=1}}for(let ie=0;ie<z;ie++)for(let me=0;me<H;me++){const We=f+me+te*ie,ze=f+me+te*(ie+1),J=f+(me+1)+te*(ie+1),Ee=f+(me+1)+te*ie;u.push(We,ze,Ee),u.push(ze,J,Ee),$+=6}l.addGroup(g,$,w),g+=$,f+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qa(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone():Array.isArray(a)?e[t][n]=a.slice():e[t][n]=a}}return e}function Ln(i){const e={};for(let t=0;t<i.length;t++){const n=Qa(i[t]);for(const a in n)e[a]=n[a]}return e}function Pp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function gu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Gt.workingColorSpace}const Rp={clone:Qa,merge:Ln};var Lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lp,this.fragmentShader=Dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qa(e.uniforms),this.uniformsGroups=Pp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class pl extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oi=new be,cc=new Bt,uc=new Bt;class Gn extends pl{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qr*2*Math.atan(Math.tan(jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,t){return this.getViewBounds(e,cc,uc),t.subVectors(uc,cc)}setViewOffset(e,t,n,a,s,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jo*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,s=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const u=c.fullWidth,p=c.fullHeight;s+=c.offsetX*a/u,t-=c.offsetY*n/p,a*=c.width/u,n*=c.height/p}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oa=-90,za=1;class Up extends sn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Gn(Oa,za,e,t);a.layers=this.layers,this.add(a);const s=new Gn(Oa,za,e,t);s.layers=this.layers,this.add(s);const c=new Gn(Oa,za,e,t);c.layers=this.layers,this.add(c);const l=new Gn(Oa,za,e,t);l.layers=this.layers,this.add(l);const u=new Gn(Oa,za,e,t);u.layers=this.layers,this.add(u);const p=new Gn(Oa,za,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,s,c,l,u]=t;for(const p of t)this.remove(p);if(e===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,c,l,u,p,d]=this.children,v=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,a),e.render(t,s),e.setRenderTarget(n,1,a),e.render(t,c),e.setRenderTarget(n,2,a),e.render(t,l),e.setRenderTarget(n,3,a),e.render(t,u),e.setRenderTarget(n,4,a),e.render(t,p),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,a),e.render(t,d),e.setRenderTarget(v,f,g),e.xr.enabled=T,n.texture.needsPMREMUpdate=!0}}class _u extends Fn{constructor(e,t,n,a,s,c,l,u,p,d){e=e!==void 0?e:[],t=t!==void 0?t:Ya,super(e,t,n,a,s,c,l,u,p,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ip extends Ma{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new _u(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Ca(5,5,5),s=new Vi({name:"CubemapFromEquirect",uniforms:Qa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qn,blending:Bi});s.uniforms.tEquirect.value=t;const c=new $n(a,s),l=t.minFilter;return t.minFilter===xa&&(t.minFilter=Jn),new Up(1,10,this).update(e,c),t.minFilter=l,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,a){const s=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,a);e.setRenderTarget(s)}}const ur=new be,Np=new be,qp=new Nt;class ha{constructor(e=new be(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=ur.subVectors(n,t).cross(Np.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ur),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qp.getNormalMatrix(e),a=this.coplanarPoint(ur).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ua=new zo,fo=new be;class fl{constructor(e=new ha,t=new ha,n=new ha,a=new ha,s=new ha,c=new ha){this.planes=[e,t,n,a,s,c]}set(e,t,n,a,s,c){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(a),l[4].copy(s),l[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ri){const n=this.planes,a=e.elements,s=a[0],c=a[1],l=a[2],u=a[3],p=a[4],d=a[5],v=a[6],f=a[7],g=a[8],T=a[9],S=a[10],h=a[11],m=a[12],L=a[13],P=a[14],q=a[15];if(n[0].setComponents(u-s,f-p,h-g,q-m).normalize(),n[1].setComponents(u+s,f+p,h+g,q+m).normalize(),n[2].setComponents(u+c,f+d,h+T,q+L).normalize(),n[3].setComponents(u-c,f-d,h-T,q-L).normalize(),n[4].setComponents(u-l,f-v,h-S,q-P).normalize(),t===Ri)n[5].setComponents(u+l,f+v,h+S,q+P).normalize();else if(t===Uo)n[5].setComponents(l,v,S,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ua.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ua.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ua)}intersectsSprite(e){return ua.center.set(0,0,0),ua.radius=.7071067811865476,ua.applyMatrix4(e.matrixWorld),this.intersectsSphere(ua)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(fo.x=a.normal.x>0?e.max.x:e.min.x,fo.y=a.normal.y>0?e.max.y:e.min.y,fo.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(fo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xu(){let i=null,e=!1,t=null,n=null;function a(s,c){t(s,c),n=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Fp(i){const e=new WeakMap;function t(l,u){const p=l.array,d=l.usage,v=p.byteLength,f=i.createBuffer();i.bindBuffer(u,f),i.bufferData(u,p,d),l.onUploadCallback();let g;if(p instanceof Float32Array)g=i.FLOAT;else if(p instanceof Uint16Array)l.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)g=i.SHORT;else if(p instanceof Uint32Array)g=i.UNSIGNED_INT;else if(p instanceof Int32Array)g=i.INT;else if(p instanceof Int8Array)g=i.BYTE;else if(p instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:f,type:g,bytesPerElement:p.BYTES_PER_ELEMENT,version:l.version,size:v}}function n(l,u,p){const d=u.array,v=u._updateRange,f=u.updateRanges;if(i.bindBuffer(p,l),v.count===-1&&f.length===0&&i.bufferSubData(p,0,d),f.length!==0){for(let g=0,T=f.length;g<T;g++){const S=f[g];i.bufferSubData(p,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}u.clearUpdateRanges()}v.count!==-1&&(i.bufferSubData(p,v.offset*d.BYTES_PER_ELEMENT,d,v.offset,v.count),v.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=e.get(l);u&&(i.deleteBuffer(u.buffer),e.delete(l))}function c(l,u){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const d=e.get(l);(!d||d.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const p=e.get(l);if(p===void 0)e.set(l,t(l,u));else if(p.version<l.version){if(p.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(p.buffer,l,u),p.version=l.version}}return{get:a,remove:s,update:c}}class Bo extends Bn{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const s=e/2,c=t/2,l=Math.floor(n),u=Math.floor(a),p=l+1,d=u+1,v=e/l,f=t/u,g=[],T=[],S=[],h=[];for(let m=0;m<d;m++){const L=m*f-c;for(let P=0;P<p;P++){const q=P*v-s;T.push(q,-L,0),S.push(0,0,1),h.push(P/l),h.push(1-m/u)}}for(let m=0;m<u;m++)for(let L=0;L<l;L++){const P=L+p*m,q=L+p*(m+1),V=L+1+p*(m+1),I=L+1+p*m;g.push(P,q,I),g.push(q,V,I)}this.setIndex(g),this.setAttribute("position",new dn(T,3)),this.setAttribute("normal",new dn(S,3)),this.setAttribute("uv",new dn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Kp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ff=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",vf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ef=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Af=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Lf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Df=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,If=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ff=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Of=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$f=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,th=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ih=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ah=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ch=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ph=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_h=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ch=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Th=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ah=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ph=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Uh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ih=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Oh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Wh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$h=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,im=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,om=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,It={alphahash_fragment:Op,alphahash_pars_fragment:zp,alphamap_fragment:Bp,alphamap_pars_fragment:Hp,alphatest_fragment:kp,alphatest_pars_fragment:Vp,aomap_fragment:Gp,aomap_pars_fragment:jp,batching_pars_vertex:Wp,batching_vertex:$p,begin_vertex:Xp,beginnormal_vertex:Yp,bsdfs:Zp,iridescence_fragment:Kp,bumpmap_pars_fragment:Jp,clipping_planes_fragment:Qp,clipping_planes_pars_fragment:ef,clipping_planes_pars_vertex:tf,clipping_planes_vertex:nf,color_fragment:af,color_pars_fragment:sf,color_pars_vertex:of,color_vertex:rf,common:lf,cube_uv_reflection_fragment:cf,defaultnormal_vertex:uf,displacementmap_pars_vertex:df,displacementmap_vertex:pf,emissivemap_fragment:ff,emissivemap_pars_fragment:hf,colorspace_fragment:mf,colorspace_pars_fragment:vf,envmap_fragment:gf,envmap_common_pars_fragment:_f,envmap_pars_fragment:xf,envmap_pars_vertex:bf,envmap_physical_pars_fragment:Lf,envmap_vertex:yf,fog_vertex:Mf,fog_pars_vertex:Cf,fog_fragment:Sf,fog_pars_fragment:Ef,gradientmap_pars_fragment:Tf,lightmap_pars_fragment:Af,lights_lambert_fragment:wf,lights_lambert_pars_fragment:Pf,lights_pars_begin:Rf,lights_toon_fragment:Df,lights_toon_pars_fragment:Uf,lights_phong_fragment:If,lights_phong_pars_fragment:Nf,lights_physical_fragment:qf,lights_physical_pars_fragment:Ff,lights_fragment_begin:Of,lights_fragment_maps:zf,lights_fragment_end:Bf,logdepthbuf_fragment:Hf,logdepthbuf_pars_fragment:kf,logdepthbuf_pars_vertex:Vf,logdepthbuf_vertex:Gf,map_fragment:jf,map_pars_fragment:Wf,map_particle_fragment:$f,map_particle_pars_fragment:Xf,metalnessmap_fragment:Yf,metalnessmap_pars_fragment:Zf,morphinstance_vertex:Kf,morphcolor_vertex:Jf,morphnormal_vertex:Qf,morphtarget_pars_vertex:eh,morphtarget_vertex:th,normal_fragment_begin:nh,normal_fragment_maps:ih,normal_pars_fragment:ah,normal_pars_vertex:sh,normal_vertex:oh,normalmap_pars_fragment:rh,clearcoat_normal_fragment_begin:lh,clearcoat_normal_fragment_maps:ch,clearcoat_pars_fragment:uh,iridescence_pars_fragment:dh,opaque_fragment:ph,packing:fh,premultiplied_alpha_fragment:hh,project_vertex:mh,dithering_fragment:vh,dithering_pars_fragment:gh,roughnessmap_fragment:_h,roughnessmap_pars_fragment:xh,shadowmap_pars_fragment:bh,shadowmap_pars_vertex:yh,shadowmap_vertex:Mh,shadowmask_pars_fragment:Ch,skinbase_vertex:Sh,skinning_pars_vertex:Eh,skinning_vertex:Th,skinnormal_vertex:Ah,specularmap_fragment:wh,specularmap_pars_fragment:Ph,tonemapping_fragment:Rh,tonemapping_pars_fragment:Lh,transmission_fragment:Dh,transmission_pars_fragment:Uh,uv_pars_fragment:Ih,uv_pars_vertex:Nh,uv_vertex:qh,worldpos_vertex:Fh,background_vert:Oh,background_frag:zh,backgroundCube_vert:Bh,backgroundCube_frag:Hh,cube_vert:kh,cube_frag:Vh,depth_vert:Gh,depth_frag:jh,distanceRGBA_vert:Wh,distanceRGBA_frag:$h,equirect_vert:Xh,equirect_frag:Yh,linedashed_vert:Zh,linedashed_frag:Kh,meshbasic_vert:Jh,meshbasic_frag:Qh,meshlambert_vert:em,meshlambert_frag:tm,meshmatcap_vert:nm,meshmatcap_frag:im,meshnormal_vert:am,meshnormal_frag:sm,meshphong_vert:om,meshphong_frag:rm,meshphysical_vert:lm,meshphysical_frag:cm,meshtoon_vert:um,meshtoon_frag:dm,points_vert:pm,points_frag:fm,shadow_vert:hm,shadow_frag:mm,sprite_vert:vm,sprite_frag:gm},rt={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},si={basic:{uniforms:Ln([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:Ln([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:Ln([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:Ln([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:Ln([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:Ln([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:Ln([rt.points,rt.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:Ln([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:Ln([rt.common,rt.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:Ln([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:Ln([rt.sprite,rt.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distanceRGBA:{uniforms:Ln([rt.common,rt.displacementmap,{referencePosition:{value:new be},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distanceRGBA_vert,fragmentShader:It.distanceRGBA_frag},shadow:{uniforms:Ln([rt.lights,rt.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};si.physical={uniforms:Ln([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};const ho={r:0,b:0,g:0},da=new li,_m=new en;function xm(i,e,t,n,a,s,c){const l=new Rt(0);let u=s===!0?0:1,p,d,v=null,f=0,g=null;function T(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?t:e).get(P)),P}function S(L){let P=!1;const q=T(L);q===null?m(l,u):q&&q.isColor&&(m(q,1),P=!0);const V=i.xr.getEnvironmentBlendMode();V==="additive"?n.buffers.color.setClear(0,0,0,1,c):V==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||P)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function h(L,P){const q=T(P);q&&(q.isCubeTexture||q.mapping===Fo)?(d===void 0&&(d=new $n(new Ca(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:Qa(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(V,I,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),da.copy(P.backgroundRotation),da.x*=-1,da.y*=-1,da.z*=-1,q.isCubeTexture&&q.isRenderTargetTexture===!1&&(da.y*=-1,da.z*=-1),d.material.uniforms.envMap.value=q,d.material.uniforms.flipEnvMap.value=q.isCubeTexture&&q.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(_m.makeRotationFromEuler(da)),d.material.toneMapped=Gt.getTransfer(q.colorSpace)!==Zt,(v!==q||f!==q.version||g!==i.toneMapping)&&(d.material.needsUpdate=!0,v=q,f=q.version,g=i.toneMapping),d.layers.enableAll(),L.unshift(d,d.geometry,d.material,0,0,null)):q&&q.isTexture&&(p===void 0&&(p=new $n(new Bo(2,2),new Vi({name:"BackgroundMaterial",uniforms:Qa(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=q,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Gt.getTransfer(q.colorSpace)!==Zt,q.matrixAutoUpdate===!0&&q.updateMatrix(),p.material.uniforms.uvTransform.value.copy(q.matrix),(v!==q||f!==q.version||g!==i.toneMapping)&&(p.material.needsUpdate=!0,v=q,f=q.version,g=i.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function m(L,P){L.getRGB(ho,gu(i)),n.buffers.color.setClear(ho.r,ho.g,ho.b,P,c)}return{getClearColor:function(){return l},setClearColor:function(L,P=1){l.set(L),u=P,m(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(L){u=L,m(l,u)},render:S,addToRenderList:h}}function bm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=f(null);let s=a,c=!1;function l(A,B,W,Y,X){let te=!1;const se=v(Y,W,B);s!==se&&(s=se,p(s.object)),te=g(A,Y,W,X),te&&T(A,Y,W,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(te||c)&&(c=!1,q(A,B,W,Y),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function u(){return i.createVertexArray()}function p(A){return i.bindVertexArray(A)}function d(A){return i.deleteVertexArray(A)}function v(A,B,W){const Y=W.wireframe===!0;let X=n[A.id];X===void 0&&(X={},n[A.id]=X);let te=X[B.id];te===void 0&&(te={},X[B.id]=te);let se=te[Y];return se===void 0&&(se=f(u()),te[Y]=se),se}function f(A){const B=[],W=[],Y=[];for(let X=0;X<t;X++)B[X]=0,W[X]=0,Y[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:W,attributeDivisors:Y,object:A,attributes:{},index:null}}function g(A,B,W,Y){const X=s.attributes,te=B.attributes;let se=0;const de=W.getAttributes();for(const $ in de)if(de[$].location>=0){const ie=X[$];let me=te[$];if(me===void 0&&($==="instanceMatrix"&&A.instanceMatrix&&(me=A.instanceMatrix),$==="instanceColor"&&A.instanceColor&&(me=A.instanceColor)),ie===void 0||ie.attribute!==me||me&&ie.data!==me.data)return!0;se++}return s.attributesNum!==se||s.index!==Y}function T(A,B,W,Y){const X={},te=B.attributes;let se=0;const de=W.getAttributes();for(const $ in de)if(de[$].location>=0){let ie=te[$];ie===void 0&&($==="instanceMatrix"&&A.instanceMatrix&&(ie=A.instanceMatrix),$==="instanceColor"&&A.instanceColor&&(ie=A.instanceColor));const me={};me.attribute=ie,ie&&ie.data&&(me.data=ie.data),X[$]=me,se++}s.attributes=X,s.attributesNum=se,s.index=Y}function S(){const A=s.newAttributes;for(let B=0,W=A.length;B<W;B++)A[B]=0}function h(A){m(A,0)}function m(A,B){const W=s.newAttributes,Y=s.enabledAttributes,X=s.attributeDivisors;W[A]=1,Y[A]===0&&(i.enableVertexAttribArray(A),Y[A]=1),X[A]!==B&&(i.vertexAttribDivisor(A,B),X[A]=B)}function L(){const A=s.newAttributes,B=s.enabledAttributes;for(let W=0,Y=B.length;W<Y;W++)B[W]!==A[W]&&(i.disableVertexAttribArray(W),B[W]=0)}function P(A,B,W,Y,X,te,se){se===!0?i.vertexAttribIPointer(A,B,W,X,te):i.vertexAttribPointer(A,B,W,Y,X,te)}function q(A,B,W,Y){S();const X=Y.attributes,te=W.getAttributes(),se=B.defaultAttributeValues;for(const de in te){const $=te[de];if($.location>=0){let De=X[de];if(De===void 0&&(de==="instanceMatrix"&&A.instanceMatrix&&(De=A.instanceMatrix),de==="instanceColor"&&A.instanceColor&&(De=A.instanceColor)),De!==void 0){const ie=De.normalized,me=De.itemSize,We=e.get(De);if(We===void 0)continue;const ze=We.buffer,J=We.type,Ee=We.bytesPerElement,Re=J===i.INT||J===i.UNSIGNED_INT||De.gpuType===sl;if(De.isInterleavedBufferAttribute){const Se=De.data,Be=Se.stride,ce=De.offset;if(Se.isInstancedInterleavedBuffer){for(let Te=0;Te<$.locationSize;Te++)m($.location+Te,Se.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Te=0;Te<$.locationSize;Te++)h($.location+Te);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let Te=0;Te<$.locationSize;Te++)P($.location+Te,me/$.locationSize,J,ie,Be*Ee,(ce+me/$.locationSize*Te)*Ee,Re)}else{if(De.isInstancedBufferAttribute){for(let Se=0;Se<$.locationSize;Se++)m($.location+Se,De.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let Se=0;Se<$.locationSize;Se++)h($.location+Se);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let Se=0;Se<$.locationSize;Se++)P($.location+Se,me/$.locationSize,J,ie,me*Ee,me/$.locationSize*Se*Ee,Re)}}else if(se!==void 0){const ie=se[de];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv($.location,ie);break;case 3:i.vertexAttrib3fv($.location,ie);break;case 4:i.vertexAttrib4fv($.location,ie);break;default:i.vertexAttrib1fv($.location,ie)}}}}L()}function V(){z();for(const A in n){const B=n[A];for(const W in B){const Y=B[W];for(const X in Y)d(Y[X].object),delete Y[X];delete B[W]}delete n[A]}}function I(A){if(n[A.id]===void 0)return;const B=n[A.id];for(const W in B){const Y=B[W];for(const X in Y)d(Y[X].object),delete Y[X];delete B[W]}delete n[A.id]}function H(A){for(const B in n){const W=n[B];if(W[A.id]===void 0)continue;const Y=W[A.id];for(const X in Y)d(Y[X].object),delete Y[X];delete W[A.id]}}function z(){w(),c=!0,s!==a&&(s=a,p(s.object))}function w(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:l,reset:z,resetDefaultState:w,dispose:V,releaseStatesOfGeometry:I,releaseStatesOfProgram:H,initAttributes:S,enableAttribute:h,disableUnusedAttributes:L}}function ym(i,e,t){let n;function a(p){n=p}function s(p,d){i.drawArrays(n,p,d),t.update(d,n,1)}function c(p,d,v){v!==0&&(i.drawArraysInstanced(n,p,d,v),t.update(d,n,v))}function l(p,d,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,p,0,d,0,v);let g=0;for(let T=0;T<v;T++)g+=d[T];t.update(g,n,1)}function u(p,d,v,f){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let T=0;T<p.length;T++)c(p[T],d[T],f[T]);else{g.multiDrawArraysInstancedWEBGL(n,p,0,d,0,f,0,v);let T=0;for(let S=0;S<v;S++)T+=d[S];for(let S=0;S<f.length;S++)t.update(T,n,f[S])}}this.setMode=a,this.render=s,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function Mm(i,e,t,n){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(I){return!(I!==Qn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(I){const H=I===Ls&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Li&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Pi&&!H)}function u(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const d=u(p);d!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",d,"instead."),p=d);const v=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),P=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),q=g>0,V=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:c,textureTypeReadable:l,precision:p,logarithmicDepthBuffer:v,maxTextures:f,maxVertexTextures:g,maxTextureSize:T,maxCubemapSize:S,maxAttributes:h,maxVertexUniforms:m,maxVaryings:L,maxFragmentUniforms:P,vertexTextures:q,maxSamples:V}}function Cm(i){const e=this;let t=null,n=0,a=!1,s=!1;const c=new ha,l=new Nt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(v,f){const g=v.length!==0||f||n!==0||a;return a=f,n=v.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(v,f){t=d(v,f,0)},this.setState=function(v,f,g){const T=v.clippingPlanes,S=v.clipIntersection,h=v.clipShadows,m=i.get(v);if(!a||T===null||T.length===0||s&&!h)s?d(null):p();else{const L=s?0:n,P=L*4;let q=m.clippingState||null;u.value=q,q=d(T,f,P,g);for(let V=0;V!==P;++V)q[V]=t[V];m.clippingState=q,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=L}};function p(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(v,f,g,T){const S=v!==null?v.length:0;let h=null;if(S!==0){if(h=u.value,T!==!0||h===null){const m=g+S*4,L=f.matrixWorldInverse;l.getNormalMatrix(L),(h===null||h.length<m)&&(h=new Float32Array(m));for(let P=0,q=g;P!==S;++P,q+=4)c.copy(v[P]).applyMatrix4(L,l),c.normal.toArray(h,q),h[q+3]=c.constant}u.value=h,u.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,h}}function Sm(i){let e=new WeakMap;function t(c,l){return l===Cr?c.mapping=Ya:l===Sr&&(c.mapping=Za),c}function n(c){if(c&&c.isTexture){const l=c.mapping;if(l===Cr||l===Sr)if(e.has(c)){const u=e.get(c).texture;return t(u,c.mapping)}else{const u=c.image;if(u&&u.height>0){const p=new Ip(u.height);return p.fromEquirectangularTexture(i,c),e.set(c,p),c.addEventListener("dispose",a),t(p.texture,c.mapping)}else return null}}return c}function a(c){const l=c.target;l.removeEventListener("dispose",a);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class bu extends pl{constructor(e=-1,t=1,n=1,a=-1,s=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=s,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,s,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=n-e,c=n+e,l=a+t,u=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=p*this.view.offsetX,c=s+p*this.view.width,l-=d*this.view.offsetY,u=l-d*this.view.height}this.projectionMatrix.makeOrthographic(s,c,l,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ha=4,dc=[.125,.215,.35,.446,.526,.582],ga=20,dr=new bu,pc=new Rt;let pr=null,fr=0,hr=0,mr=!1;const ma=(1+Math.sqrt(5))/2,Ba=1/ma,fc=[new be(-ma,Ba,0),new be(ma,Ba,0),new be(-Ba,0,ma),new be(Ba,0,ma),new be(0,ma,-Ba),new be(0,ma,Ba),new be(-1,1,-1),new be(1,1,-1),new be(-1,1,1),new be(1,1,1)];class hc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,a=100){pr=this._renderer.getRenderTarget(),fr=this._renderer.getActiveCubeFace(),hr=this._renderer.getActiveMipmapLevel(),mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,a,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pr,fr,hr),this._renderer.xr.enabled=mr,e.scissorTest=!1,mo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ya||e.mapping===Za?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pr=this._renderer.getRenderTarget(),fr=this._renderer.getActiveCubeFace(),hr=this._renderer.getActiveMipmapLevel(),mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:Ls,format:Qn,colorSpace:Gi,depthBuffer:!1},a=mc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Em(s)),this._blurMaterial=Tm(s,e,t)}return a}_compileMaterial(e){const t=new $n(this._lodPlanes[0],e);this._renderer.compile(t,dr)}_sceneToCubeUV(e,t,n,a){const l=new Gn(90,1,t,n),u=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],d=this._renderer,v=d.autoClear,f=d.toneMapping;d.getClearColor(pc),d.toneMapping=Hi,d.autoClear=!1;const g=new hu({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),T=new $n(new Ca,g);let S=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,S=!0):(g.color.copy(pc),S=!0);for(let m=0;m<6;m++){const L=m%3;L===0?(l.up.set(0,u[m],0),l.lookAt(p[m],0,0)):L===1?(l.up.set(0,0,u[m]),l.lookAt(0,p[m],0)):(l.up.set(0,u[m],0),l.lookAt(0,0,p[m]));const P=this._cubeSize;mo(a,L*P,m>2?P:0,P,P),d.setRenderTarget(a),S&&d.render(T,l),d.render(e,l)}T.geometry.dispose(),T.material.dispose(),d.toneMapping=f,d.autoClear=v,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===Ya||e.mapping===Za;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vc());const s=a?this._cubemapMaterial:this._equirectMaterial,c=new $n(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const u=this._cubeSize;mo(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(c,dr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let s=1;s<a;s++){const c=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=fc[(a-s-1)%fc.length];this._blur(e,s-1,s,c,l)}t.autoClear=n}_blur(e,t,n,a,s){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,a,"latitudinal",s),this._halfBlur(c,e,n,n,a,"longitudinal",s)}_halfBlur(e,t,n,a,s,c,l){const u=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,v=new $n(this._lodPlanes[a],p),f=p.uniforms,g=this._sizeLods[n]-1,T=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*ga-1),S=s/T,h=isFinite(s)?1+Math.floor(d*S):ga;h>ga&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${ga}`);const m=[];let L=0;for(let H=0;H<ga;++H){const z=H/S,w=Math.exp(-z*z/2);m.push(w),H===0?L+=w:H<h&&(L+=2*w)}for(let H=0;H<m.length;H++)m[H]=m[H]/L;f.envMap.value=e.texture,f.samples.value=h,f.weights.value=m,f.latitudinal.value=c==="latitudinal",l&&(f.poleAxis.value=l);const{_lodMax:P}=this;f.dTheta.value=T,f.mipInt.value=P-n;const q=this._sizeLods[a],V=3*q*(a>P-Ha?a-P+Ha:0),I=4*(this._cubeSize-q);mo(t,V,I,3*q,2*q),u.setRenderTarget(t),u.render(v,dr)}}function Em(i){const e=[],t=[],n=[];let a=i;const s=i-Ha+1+dc.length;for(let c=0;c<s;c++){const l=Math.pow(2,a);t.push(l);let u=1/l;c>i-Ha?u=dc[c-i+Ha-1]:c===0&&(u=0),n.push(u);const p=1/(l-2),d=-p,v=1+p,f=[d,d,v,d,v,v,d,d,v,v,d,v],g=6,T=6,S=3,h=2,m=1,L=new Float32Array(S*T*g),P=new Float32Array(h*T*g),q=new Float32Array(m*T*g);for(let I=0;I<g;I++){const H=I%3*2/3-1,z=I>2?0:-1,w=[H,z,0,H+2/3,z,0,H+2/3,z+1,0,H,z,0,H+2/3,z+1,0,H,z+1,0];L.set(w,S*T*I),P.set(f,h*T*I);const A=[I,I,I,I,I,I];q.set(A,m*T*I)}const V=new Bn;V.setAttribute("position",new ri(L,S)),V.setAttribute("uv",new ri(P,h)),V.setAttribute("faceIndex",new ri(q,m)),e.push(V),a>Ha&&a--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function mc(i,e,t){const n=new Ma(i,e,t);return n.texture.mapping=Fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mo(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function Tm(i,e,t){const n=new Float32Array(ga),a=new be(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:ga,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function vc(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function gc(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function hl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Am(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const u=l.mapping,p=u===Cr||u===Sr,d=u===Ya||u===Za;if(p||d){let v=e.get(l);const f=v!==void 0?v.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==f)return t===null&&(t=new hc(i)),v=p?t.fromEquirectangular(l,v):t.fromCubemap(l,v),v.texture.pmremVersion=l.pmremVersion,e.set(l,v),v.texture;if(v!==void 0)return v.texture;{const g=l.image;return p&&g&&g.height>0||d&&g&&a(g)?(t===null&&(t=new hc(i)),v=p?t.fromEquirectangular(l):t.fromCubemap(l),v.texture.pmremVersion=l.pmremVersion,e.set(l,v),l.addEventListener("dispose",s),v.texture):null}}}return l}function a(l){let u=0;const p=6;for(let d=0;d<p;d++)l[d]!==void 0&&u++;return u===p}function s(l){const u=l.target;u.removeEventListener("dispose",s);const p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function wm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&ws("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function Pm(i,e,t,n){const a={},s=new WeakMap;function c(v){const f=v.target;f.index!==null&&e.remove(f.index);for(const T in f.attributes)e.remove(f.attributes[T]);for(const T in f.morphAttributes){const S=f.morphAttributes[T];for(let h=0,m=S.length;h<m;h++)e.remove(S[h])}f.removeEventListener("dispose",c),delete a[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function l(v,f){return a[f.id]===!0||(f.addEventListener("dispose",c),a[f.id]=!0,t.memory.geometries++),f}function u(v){const f=v.attributes;for(const T in f)e.update(f[T],i.ARRAY_BUFFER);const g=v.morphAttributes;for(const T in g){const S=g[T];for(let h=0,m=S.length;h<m;h++)e.update(S[h],i.ARRAY_BUFFER)}}function p(v){const f=[],g=v.index,T=v.attributes.position;let S=0;if(g!==null){const L=g.array;S=g.version;for(let P=0,q=L.length;P<q;P+=3){const V=L[P+0],I=L[P+1],H=L[P+2];f.push(V,I,I,H,H,V)}}else if(T!==void 0){const L=T.array;S=T.version;for(let P=0,q=L.length/3-1;P<q;P+=3){const V=P+0,I=P+1,H=P+2;f.push(V,I,I,H,H,V)}}else return;const h=new(lu(f)?vu:mu)(f,1);h.version=S;const m=s.get(v);m&&e.remove(m),s.set(v,h)}function d(v){const f=s.get(v);if(f){const g=v.index;g!==null&&f.version<g.version&&p(v)}else p(v);return s.get(v)}return{get:l,update:u,getWireframeAttribute:d}}function Rm(i,e,t){let n;function a(f){n=f}let s,c;function l(f){s=f.type,c=f.bytesPerElement}function u(f,g){i.drawElements(n,g,s,f*c),t.update(g,n,1)}function p(f,g,T){T!==0&&(i.drawElementsInstanced(n,g,s,f*c,T),t.update(g,n,T))}function d(f,g,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,f,0,T);let h=0;for(let m=0;m<T;m++)h+=g[m];t.update(h,n,1)}function v(f,g,T,S){if(T===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<f.length;m++)p(f[m]/c,g[m],S[m]);else{h.multiDrawElementsInstancedWEBGL(n,g,0,s,f,0,S,0,T);let m=0;for(let L=0;L<T;L++)m+=g[L];for(let L=0;L<S.length;L++)t.update(m,n,S[L])}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=p,this.renderMultiDraw=d,this.renderMultiDrawInstances=v}function Lm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,c,l){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=l*(s/3);break;case i.LINES:t.lines+=l*(s/2);break;case i.LINE_STRIP:t.lines+=l*(s-1);break;case i.LINE_LOOP:t.lines+=l*s;break;case i.POINTS:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function Dm(i,e,t){const n=new WeakMap,a=new an;function s(c,l,u){const p=c.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,v=d!==void 0?d.length:0;let f=n.get(l);if(f===void 0||f.count!==v){let w=function(){H.dispose(),n.delete(l),l.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();const g=l.morphAttributes.position!==void 0,T=l.morphAttributes.normal!==void 0,S=l.morphAttributes.color!==void 0,h=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],L=l.morphAttributes.color||[];let P=0;g===!0&&(P=1),T===!0&&(P=2),S===!0&&(P=3);let q=l.attributes.position.count*P,V=1;q>e.maxTextureSize&&(V=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const I=new Float32Array(q*V*4*v),H=new uu(I,q,V,v);H.type=Pi,H.needsUpdate=!0;const z=P*4;for(let A=0;A<v;A++){const B=h[A],W=m[A],Y=L[A],X=q*V*4*A;for(let te=0;te<B.count;te++){const se=te*z;g===!0&&(a.fromBufferAttribute(B,te),I[X+se+0]=a.x,I[X+se+1]=a.y,I[X+se+2]=a.z,I[X+se+3]=0),T===!0&&(a.fromBufferAttribute(W,te),I[X+se+4]=a.x,I[X+se+5]=a.y,I[X+se+6]=a.z,I[X+se+7]=0),S===!0&&(a.fromBufferAttribute(Y,te),I[X+se+8]=a.x,I[X+se+9]=a.y,I[X+se+10]=a.z,I[X+se+11]=Y.itemSize===4?a.w:1)}}f={count:v,texture:H,size:new Bt(q,V)},n.set(l,f),l.addEventListener("dispose",w)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let g=0;for(let S=0;S<p.length;S++)g+=p[S];const T=l.morphTargetsRelative?1:1-g;u.getUniforms().setValue(i,"morphTargetBaseInfluence",T),u.getUniforms().setValue(i,"morphTargetInfluences",p)}u.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Um(i,e,t,n){let a=new WeakMap;function s(u){const p=n.render.frame,d=u.geometry,v=e.get(u,d);if(a.get(v)!==p&&(e.update(v),a.set(v,p)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),a.get(u)!==p&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),a.set(u,p))),u.isSkinnedMesh){const f=u.skeleton;a.get(f)!==p&&(f.update(),a.set(f,p))}return v}function c(){a=new WeakMap}function l(u){const p=u.target;p.removeEventListener("dispose",l),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:s,dispose:c}}class yu extends Fn{constructor(e,t,n,a,s,c,l,u,p,d=Va){if(d!==Va&&d!==Ja)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Va&&(n=ya),n===void 0&&d===Ja&&(n=Ka),super(null,a,s,c,l,u,d,n,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:Wn,this.minFilter=u!==void 0?u:Wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Mu=new Fn,_c=new yu(1,1),Cu=new uu,Su=new _p,Eu=new _u,xc=[],bc=[],yc=new Float32Array(16),Mc=new Float32Array(9),Cc=new Float32Array(4);function ns(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let s=xc[a];if(s===void 0&&(s=new Float32Array(a),xc[a]=s),e!==0){n.toArray(s,0);for(let c=1,l=0;c!==e;++c)l+=t,i[c].toArray(s,l)}return s}function on(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ho(i,e){let t=bc[e];t===void 0&&(t=new Int32Array(e),bc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Im(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2fv(this.addr,e),rn(t,e)}}function qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;i.uniform3fv(this.addr,e),rn(t,e)}}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4fv(this.addr,e),rn(t,e)}}function Om(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(on(t,n))return;Cc.set(n),i.uniformMatrix2fv(this.addr,!1,Cc),rn(t,n)}}function zm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(on(t,n))return;Mc.set(n),i.uniformMatrix3fv(this.addr,!1,Mc),rn(t,n)}}function Bm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(on(t,n))return;yc.set(n),i.uniformMatrix4fv(this.addr,!1,yc),rn(t,n)}}function Hm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2iv(this.addr,e),rn(t,e)}}function Vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3iv(this.addr,e),rn(t,e)}}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4iv(this.addr,e),rn(t,e)}}function jm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2uiv(this.addr,e),rn(t,e)}}function $m(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3uiv(this.addr,e),rn(t,e)}}function Xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4uiv(this.addr,e),rn(t,e)}}function Ym(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let s;this.type===i.SAMPLER_2D_SHADOW?(_c.compareFunction=ru,s=_c):s=Mu,t.setTexture2D(e||s,a)}function Zm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||Su,a)}function Km(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||Eu,a)}function Jm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||Cu,a)}function Qm(i){switch(i){case 5126:return Im;case 35664:return Nm;case 35665:return qm;case 35666:return Fm;case 35674:return Om;case 35675:return zm;case 35676:return Bm;case 5124:case 35670:return Hm;case 35667:case 35671:return km;case 35668:case 35672:return Vm;case 35669:case 35673:return Gm;case 5125:return jm;case 36294:return Wm;case 36295:return $m;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return Ym;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return Jm}}function ev(i,e){i.uniform1fv(this.addr,e)}function tv(i,e){const t=ns(e,this.size,2);i.uniform2fv(this.addr,t)}function nv(i,e){const t=ns(e,this.size,3);i.uniform3fv(this.addr,t)}function iv(i,e){const t=ns(e,this.size,4);i.uniform4fv(this.addr,t)}function av(i,e){const t=ns(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function sv(i,e){const t=ns(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ov(i,e){const t=ns(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function rv(i,e){i.uniform1iv(this.addr,e)}function lv(i,e){i.uniform2iv(this.addr,e)}function cv(i,e){i.uniform3iv(this.addr,e)}function uv(i,e){i.uniform4iv(this.addr,e)}function dv(i,e){i.uniform1uiv(this.addr,e)}function pv(i,e){i.uniform2uiv(this.addr,e)}function fv(i,e){i.uniform3uiv(this.addr,e)}function hv(i,e){i.uniform4uiv(this.addr,e)}function mv(i,e,t){const n=this.cache,a=e.length,s=Ho(t,a);on(n,s)||(i.uniform1iv(this.addr,s),rn(n,s));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||Mu,s[c])}function vv(i,e,t){const n=this.cache,a=e.length,s=Ho(t,a);on(n,s)||(i.uniform1iv(this.addr,s),rn(n,s));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||Su,s[c])}function gv(i,e,t){const n=this.cache,a=e.length,s=Ho(t,a);on(n,s)||(i.uniform1iv(this.addr,s),rn(n,s));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||Eu,s[c])}function _v(i,e,t){const n=this.cache,a=e.length,s=Ho(t,a);on(n,s)||(i.uniform1iv(this.addr,s),rn(n,s));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Cu,s[c])}function xv(i){switch(i){case 5126:return ev;case 35664:return tv;case 35665:return nv;case 35666:return iv;case 35674:return av;case 35675:return sv;case 35676:return ov;case 5124:case 35670:return rv;case 35667:case 35671:return lv;case 35668:case 35672:return cv;case 35669:case 35673:return uv;case 5125:return dv;case 36294:return pv;case 36295:return fv;case 36296:return hv;case 35678:case 36198:case 36298:case 36306:case 35682:return mv;case 35679:case 36299:case 36307:return vv;case 35680:case 36300:case 36308:case 36293:return gv;case 36289:case 36303:case 36311:case 36292:return _v}}class bv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qm(t.type)}}class yv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xv(t.type)}}class Mv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let s=0,c=a.length;s!==c;++s){const l=a[s];l.setValue(e,t[l.id],n)}}}const vr=/(\w+)(\])?(\[|\.)?/g;function Sc(i,e){i.seq.push(e),i.map[e.id]=e}function Cv(i,e,t){const n=i.name,a=n.length;for(vr.lastIndex=0;;){const s=vr.exec(n),c=vr.lastIndex;let l=s[1];const u=s[2]==="]",p=s[3];if(u&&(l=l|0),p===void 0||p==="["&&c+2===a){Sc(t,p===void 0?new bv(l,i,e):new yv(l,i,e));break}else{let v=t.map[l];v===void 0&&(v=new Mv(l),Sc(t,v)),t=v}}}class To{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const s=e.getActiveUniform(t,a),c=e.getUniformLocation(t,s.name);Cv(s,c,this)}}setValue(e,t,n,a){const s=this.map[t];s!==void 0&&s.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let s=0,c=t.length;s!==c;++s){const l=t[s],u=n[l.id];u.needsUpdate!==!1&&l.setValue(e,u.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,s=e.length;a!==s;++a){const c=e[a];c.id in t&&n.push(c)}return n}}function Ec(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Sv=37297;let Ev=0;function Tv(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let c=a;c<s;c++){const l=c+1;n.push(`${l===e?">":" "} ${l}: ${t[c]}`)}return n.join(`
`)}function Av(i){const e=Gt.getPrimaries(Gt.workingColorSpace),t=Gt.getPrimaries(i);let n;switch(e===t?n="":e===Do&&t===Lo?n="LinearDisplayP3ToLinearSRGB":e===Lo&&t===Do&&(n="LinearSRGBToLinearDisplayP3"),i){case Gi:case Oo:return[n,"LinearTransferOETF"];case ai:case dl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Tc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=i.getShaderInfoLog(e).trim();if(n&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const c=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+Tv(i.getShaderSource(e),c)}else return a}function wv(i,e){const t=Av(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Pv(i,e){let t;switch(e){case Wd:t="Linear";break;case $d:t="Reinhard";break;case Xd:t="Cineon";break;case Yd:t="ACESFilmic";break;case Kd:t="AgX";break;case Jd:t="Neutral";break;case Zd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vo=new be;function Rv(){Gt.getLuminanceCoefficients(vo);const i=vo.x.toFixed(4),e=vo.y.toFixed(4),t=vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function Dv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Uv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const s=i.getActiveAttrib(e,a),c=s.name;let l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),t[c]={type:s.type,location:i.getAttribLocation(e,c),locationSize:l}}return t}function Ts(i){return i!==""}function Ac(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Iv=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(i){return i.replace(Iv,qv)}const Nv=new Map;function qv(i,e){let t=It[e];if(t===void 0){const n=Nv.get(e);if(n!==void 0)t=It[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return el(t)}const Fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pc(i){return i.replace(Fv,Ov)}function Ov(i,e,t,n){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Rc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===_d?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function Bv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ya:case Za:e="ENVMAP_TYPE_CUBE";break;case Fo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Za:e="ENVMAP_MODE_REFRACTION";break}return e}function kv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case al:e="ENVMAP_BLENDING_MULTIPLY";break;case Gd:e="ENVMAP_BLENDING_MIX";break;case jd:e="ENVMAP_BLENDING_ADD";break}return e}function Vv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Gv(i,e,t,n){const a=i.getContext(),s=t.defines;let c=t.vertexShader,l=t.fragmentShader;const u=zv(t),p=Bv(t),d=Hv(t),v=kv(t),f=Vv(t),g=Lv(t),T=Dv(s),S=a.createProgram();let h,m,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Ts).join(`
`),h.length>0&&(h+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Ts).join(`
`),m.length>0&&(m+=`
`)):(h=[Rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),m=[Rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+d:"",t.envMap?"#define "+v:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?It.tonemapping_pars_fragment:"",t.toneMapping!==Hi?Pv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,wv("linearToOutputTexel",t.outputColorSpace),Rv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ts).join(`
`)),c=el(c),c=Ac(c,t),c=wc(c,t),l=el(l),l=Ac(l,t),l=wc(l,t),c=Pc(c),l=Pc(l),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,h=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,m=["#define varying in",t.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const P=L+h+c,q=L+m+l,V=Ec(a,a.VERTEX_SHADER,P),I=Ec(a,a.FRAGMENT_SHADER,q);a.attachShader(S,V),a.attachShader(S,I),t.index0AttributeName!==void 0?a.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(S,0,"position"),a.linkProgram(S);function H(B){if(i.debug.checkShaderErrors){const W=a.getProgramInfoLog(S).trim(),Y=a.getShaderInfoLog(V).trim(),X=a.getShaderInfoLog(I).trim();let te=!0,se=!0;if(a.getProgramParameter(S,a.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,S,V,I);else{const de=Tc(a,V,"vertex"),$=Tc(a,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(S,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+W+`
`+de+`
`+$)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(Y===""||X==="")&&(se=!1);se&&(B.diagnostics={runnable:te,programLog:W,vertexShader:{log:Y,prefix:h},fragmentShader:{log:X,prefix:m}})}a.deleteShader(V),a.deleteShader(I),z=new To(a,S),w=Uv(a,S)}let z;this.getUniforms=function(){return z===void 0&&H(this),z};let w;this.getAttributes=function(){return w===void 0&&H(this),w};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(S,Sv)),A},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ev++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=V,this.fragmentShader=I,this}let jv=0;class Wv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(s)===!1&&(c.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $v(e),t.set(e,n)),n}}class $v{constructor(e){this.id=jv++,this.code=e,this.usedTimes=0}}function Xv(i,e,t,n,a,s,c){const l=new pu,u=new Wv,p=new Set,d=[],v=a.logarithmicDepthBuffer,f=a.vertexTextures;let g=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(w){return p.add(w),w===0?"uv":`uv${w}`}function h(w,A,B,W,Y){const X=W.fog,te=Y.geometry,se=w.isMeshStandardMaterial?W.environment:null,de=(w.isMeshStandardMaterial?t:e).get(w.envMap||se),$=de&&de.mapping===Fo?de.image.height:null,De=T[w.type];w.precision!==null&&(g=a.getMaxPrecision(w.precision),g!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const ie=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,me=ie!==void 0?ie.length:0;let We=0;te.morphAttributes.position!==void 0&&(We=1),te.morphAttributes.normal!==void 0&&(We=2),te.morphAttributes.color!==void 0&&(We=3);let ze,J,Ee,Re;if(De){const Ke=si[De];ze=Ke.vertexShader,J=Ke.fragmentShader}else ze=w.vertexShader,J=w.fragmentShader,u.update(w),Ee=u.getVertexShaderID(w),Re=u.getFragmentShaderID(w);const Se=i.getRenderTarget(),Be=Y.isInstancedMesh===!0,ce=Y.isBatchedMesh===!0,Te=!!w.map,it=!!w.matcap,F=!!de,Ge=!!w.aoMap,nt=!!w.lightMap,He=!!w.bumpMap,Le=!!w.normalMap,st=!!w.displacementMap,Ue=!!w.emissiveMap,Fe=!!w.metalnessMap,O=!!w.roughnessMap,_=w.anisotropy>0,R=w.clearcoat>0,ne=w.dispersion>0,pe=w.iridescence>0,he=w.sheen>0,Ve=w.transmission>0,Ae=_&&!!w.anisotropyMap,Ie=R&&!!w.clearcoatMap,$e=R&&!!w.clearcoatNormalMap,k=R&&!!w.clearcoatRoughnessMap,_e=pe&&!!w.iridescenceMap,et=pe&&!!w.iridescenceThicknessMap,Z=he&&!!w.sheenColorMap,ve=he&&!!w.sheenRoughnessMap,Xe=!!w.specularMap,Je=!!w.specularColorMap,ct=!!w.specularIntensityMap,G=Ve&&!!w.transmissionMap,we=Ve&&!!w.thicknessMap,Ce=!!w.gradientMap,ye=!!w.alphaMap,Pe=w.alphaTest>0,Ze=!!w.alphaHash,tt=!!w.extensions;let ot=Hi;w.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(ot=i.toneMapping);const ut={shaderID:De,shaderType:w.type,shaderName:w.name,vertexShader:ze,fragmentShader:J,defines:w.defines,customVertexShaderID:Ee,customFragmentShaderID:Re,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:ce,batchingColor:ce&&Y._colorsTexture!==null,instancing:Be,instancingColor:Be&&Y.instanceColor!==null,instancingMorph:Be&&Y.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Se===null?i.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Gi,alphaToCoverage:!!w.alphaToCoverage,map:Te,matcap:it,envMap:F,envMapMode:F&&de.mapping,envMapCubeUVHeight:$,aoMap:Ge,lightMap:nt,bumpMap:He,normalMap:Le,displacementMap:f&&st,emissiveMap:Ue,normalMapObjectSpace:Le&&w.normalMapType===np,normalMapTangentSpace:Le&&w.normalMapType===ou,metalnessMap:Fe,roughnessMap:O,anisotropy:_,anisotropyMap:Ae,clearcoat:R,clearcoatMap:Ie,clearcoatNormalMap:$e,clearcoatRoughnessMap:k,dispersion:ne,iridescence:pe,iridescenceMap:_e,iridescenceThicknessMap:et,sheen:he,sheenColorMap:Z,sheenRoughnessMap:ve,specularMap:Xe,specularColorMap:Je,specularIntensityMap:ct,transmission:Ve,transmissionMap:G,thicknessMap:we,gradientMap:Ce,opaque:w.transparent===!1&&w.blending===ka&&w.alphaToCoverage===!1,alphaMap:ye,alphaTest:Pe,alphaHash:Ze,combine:w.combine,mapUv:Te&&S(w.map.channel),aoMapUv:Ge&&S(w.aoMap.channel),lightMapUv:nt&&S(w.lightMap.channel),bumpMapUv:He&&S(w.bumpMap.channel),normalMapUv:Le&&S(w.normalMap.channel),displacementMapUv:st&&S(w.displacementMap.channel),emissiveMapUv:Ue&&S(w.emissiveMap.channel),metalnessMapUv:Fe&&S(w.metalnessMap.channel),roughnessMapUv:O&&S(w.roughnessMap.channel),anisotropyMapUv:Ae&&S(w.anisotropyMap.channel),clearcoatMapUv:Ie&&S(w.clearcoatMap.channel),clearcoatNormalMapUv:$e&&S(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&S(w.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&S(w.iridescenceMap.channel),iridescenceThicknessMapUv:et&&S(w.iridescenceThicknessMap.channel),sheenColorMapUv:Z&&S(w.sheenColorMap.channel),sheenRoughnessMapUv:ve&&S(w.sheenRoughnessMap.channel),specularMapUv:Xe&&S(w.specularMap.channel),specularColorMapUv:Je&&S(w.specularColorMap.channel),specularIntensityMapUv:ct&&S(w.specularIntensityMap.channel),transmissionMapUv:G&&S(w.transmissionMap.channel),thicknessMapUv:we&&S(w.thicknessMap.channel),alphaMapUv:ye&&S(w.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Le||_),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!te.attributes.uv&&(Te||ye),fog:!!X,useFog:w.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:Y.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:We,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:ot,decodeVideoTexture:Te&&w.map.isVideoTexture===!0&&Gt.getTransfer(w.map.colorSpace)===Zt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===wi,flipSided:w.side===qn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:tt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&w.extensions.multiDraw===!0||ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ut.vertexUv1s=p.has(1),ut.vertexUv2s=p.has(2),ut.vertexUv3s=p.has(3),p.clear(),ut}function m(w){const A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(const B in w.defines)A.push(B),A.push(w.defines[B]);return w.isRawShaderMaterial===!1&&(L(A,w),P(A,w),A.push(i.outputColorSpace)),A.push(w.customProgramCacheKey),A.join()}function L(w,A){w.push(A.precision),w.push(A.outputColorSpace),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.mapUv),w.push(A.alphaMapUv),w.push(A.lightMapUv),w.push(A.aoMapUv),w.push(A.bumpMapUv),w.push(A.normalMapUv),w.push(A.displacementMapUv),w.push(A.emissiveMapUv),w.push(A.metalnessMapUv),w.push(A.roughnessMapUv),w.push(A.anisotropyMapUv),w.push(A.clearcoatMapUv),w.push(A.clearcoatNormalMapUv),w.push(A.clearcoatRoughnessMapUv),w.push(A.iridescenceMapUv),w.push(A.iridescenceThicknessMapUv),w.push(A.sheenColorMapUv),w.push(A.sheenRoughnessMapUv),w.push(A.specularMapUv),w.push(A.specularColorMapUv),w.push(A.specularIntensityMapUv),w.push(A.transmissionMapUv),w.push(A.thicknessMapUv),w.push(A.combine),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numSpotLightMaps),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.numSpotLightShadowsWithMaps),w.push(A.numLightProbes),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function P(w,A){l.disableAll(),A.supportsVertexTextures&&l.enable(0),A.instancing&&l.enable(1),A.instancingColor&&l.enable(2),A.instancingMorph&&l.enable(3),A.matcap&&l.enable(4),A.envMap&&l.enable(5),A.normalMapObjectSpace&&l.enable(6),A.normalMapTangentSpace&&l.enable(7),A.clearcoat&&l.enable(8),A.iridescence&&l.enable(9),A.alphaTest&&l.enable(10),A.vertexColors&&l.enable(11),A.vertexAlphas&&l.enable(12),A.vertexUv1s&&l.enable(13),A.vertexUv2s&&l.enable(14),A.vertexUv3s&&l.enable(15),A.vertexTangents&&l.enable(16),A.anisotropy&&l.enable(17),A.alphaHash&&l.enable(18),A.batching&&l.enable(19),A.dispersion&&l.enable(20),A.batchingColor&&l.enable(21),w.push(l.mask),l.disableAll(),A.fog&&l.enable(0),A.useFog&&l.enable(1),A.flatShading&&l.enable(2),A.logarithmicDepthBuffer&&l.enable(3),A.skinning&&l.enable(4),A.morphTargets&&l.enable(5),A.morphNormals&&l.enable(6),A.morphColors&&l.enable(7),A.premultipliedAlpha&&l.enable(8),A.shadowMapEnabled&&l.enable(9),A.doubleSided&&l.enable(10),A.flipSided&&l.enable(11),A.useDepthPacking&&l.enable(12),A.dithering&&l.enable(13),A.transmission&&l.enable(14),A.sheen&&l.enable(15),A.opaque&&l.enable(16),A.pointsUvs&&l.enable(17),A.decodeVideoTexture&&l.enable(18),A.alphaToCoverage&&l.enable(19),w.push(l.mask)}function q(w){const A=T[w.type];let B;if(A){const W=si[A];B=Rp.clone(W.uniforms)}else B=w.uniforms;return B}function V(w,A){let B;for(let W=0,Y=d.length;W<Y;W++){const X=d[W];if(X.cacheKey===A){B=X,++B.usedTimes;break}}return B===void 0&&(B=new Gv(i,A,w,s),d.push(B)),B}function I(w){if(--w.usedTimes===0){const A=d.indexOf(w);d[A]=d[d.length-1],d.pop(),w.destroy()}}function H(w){u.remove(w)}function z(){u.dispose()}return{getParameters:h,getProgramCacheKey:m,getUniforms:q,acquireProgram:V,releaseProgram:I,releaseShaderCache:H,programs:d,dispose:z}}function Yv(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let l=i.get(c);return l===void 0&&(l={},i.set(c,l)),l}function n(c){i.delete(c)}function a(c,l,u){i.get(c)[l]=u}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:s}}function Zv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Lc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Dc(){const i=[];let e=0;const t=[],n=[],a=[];function s(){e=0,t.length=0,n.length=0,a.length=0}function c(v,f,g,T,S,h){let m=i[e];return m===void 0?(m={id:v.id,object:v,geometry:f,material:g,groupOrder:T,renderOrder:v.renderOrder,z:S,group:h},i[e]=m):(m.id=v.id,m.object=v,m.geometry=f,m.material=g,m.groupOrder=T,m.renderOrder=v.renderOrder,m.z=S,m.group=h),e++,m}function l(v,f,g,T,S,h){const m=c(v,f,g,T,S,h);g.transmission>0?n.push(m):g.transparent===!0?a.push(m):t.push(m)}function u(v,f,g,T,S,h){const m=c(v,f,g,T,S,h);g.transmission>0?n.unshift(m):g.transparent===!0?a.unshift(m):t.unshift(m)}function p(v,f){t.length>1&&t.sort(v||Zv),n.length>1&&n.sort(f||Lc),a.length>1&&a.sort(f||Lc)}function d(){for(let v=e,f=i.length;v<f;v++){const g=i[v];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:a,init:s,push:l,unshift:u,finish:d,sort:p}}function Kv(){let i=new WeakMap;function e(n,a){const s=i.get(n);let c;return s===void 0?(c=new Dc,i.set(n,[c])):a>=s.length?(c=new Dc,s.push(c)):c=s[a],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function Jv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new be,color:new Rt};break;case"SpotLight":t={position:new be,direction:new be,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new be,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new be,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new be,halfWidth:new be,halfHeight:new be};break}return i[e.id]=t,t}}}function Qv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let eg=0;function tg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ng(i){const e=new Jv,t=Qv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)n.probe.push(new be);const a=new be,s=new en,c=new en;function l(p){let d=0,v=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let g=0,T=0,S=0,h=0,m=0,L=0,P=0,q=0,V=0,I=0,H=0;p.sort(tg);for(let w=0,A=p.length;w<A;w++){const B=p[w],W=B.color,Y=B.intensity,X=B.distance,te=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=W.r*Y,v+=W.g*Y,f+=W.b*Y;else if(B.isLightProbe){for(let se=0;se<9;se++)n.probe[se].addScaledVector(B.sh.coefficients[se],Y);H++}else if(B.isDirectionalLight){const se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const de=B.shadow,$=t.get(B);$.shadowIntensity=de.intensity,$.shadowBias=de.bias,$.shadowNormalBias=de.normalBias,$.shadowRadius=de.radius,$.shadowMapSize=de.mapSize,n.directionalShadow[g]=$,n.directionalShadowMap[g]=te,n.directionalShadowMatrix[g]=B.shadow.matrix,L++}n.directional[g]=se,g++}else if(B.isSpotLight){const se=e.get(B);se.position.setFromMatrixPosition(B.matrixWorld),se.color.copy(W).multiplyScalar(Y),se.distance=X,se.coneCos=Math.cos(B.angle),se.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),se.decay=B.decay,n.spot[S]=se;const de=B.shadow;if(B.map&&(n.spotLightMap[V]=B.map,V++,de.updateMatrices(B),B.castShadow&&I++),n.spotLightMatrix[S]=de.matrix,B.castShadow){const $=t.get(B);$.shadowIntensity=de.intensity,$.shadowBias=de.bias,$.shadowNormalBias=de.normalBias,$.shadowRadius=de.radius,$.shadowMapSize=de.mapSize,n.spotShadow[S]=$,n.spotShadowMap[S]=te,q++}S++}else if(B.isRectAreaLight){const se=e.get(B);se.color.copy(W).multiplyScalar(Y),se.halfWidth.set(B.width*.5,0,0),se.halfHeight.set(0,B.height*.5,0),n.rectArea[h]=se,h++}else if(B.isPointLight){const se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),se.distance=B.distance,se.decay=B.decay,B.castShadow){const de=B.shadow,$=t.get(B);$.shadowIntensity=de.intensity,$.shadowBias=de.bias,$.shadowNormalBias=de.normalBias,$.shadowRadius=de.radius,$.shadowMapSize=de.mapSize,$.shadowCameraNear=de.camera.near,$.shadowCameraFar=de.camera.far,n.pointShadow[T]=$,n.pointShadowMap[T]=te,n.pointShadowMatrix[T]=B.shadow.matrix,P++}n.point[T]=se,T++}else if(B.isHemisphereLight){const se=e.get(B);se.skyColor.copy(B.color).multiplyScalar(Y),se.groundColor.copy(B.groundColor).multiplyScalar(Y),n.hemi[m]=se,m++}}h>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=v,n.ambient[2]=f;const z=n.hash;(z.directionalLength!==g||z.pointLength!==T||z.spotLength!==S||z.rectAreaLength!==h||z.hemiLength!==m||z.numDirectionalShadows!==L||z.numPointShadows!==P||z.numSpotShadows!==q||z.numSpotMaps!==V||z.numLightProbes!==H)&&(n.directional.length=g,n.spot.length=S,n.rectArea.length=h,n.point.length=T,n.hemi.length=m,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=q,n.spotShadowMap.length=q,n.directionalShadowMatrix.length=L,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=q+V-I,n.spotLightMap.length=V,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=H,z.directionalLength=g,z.pointLength=T,z.spotLength=S,z.rectAreaLength=h,z.hemiLength=m,z.numDirectionalShadows=L,z.numPointShadows=P,z.numSpotShadows=q,z.numSpotMaps=V,z.numLightProbes=H,n.version=eg++)}function u(p,d){let v=0,f=0,g=0,T=0,S=0;const h=d.matrixWorldInverse;for(let m=0,L=p.length;m<L;m++){const P=p[m];if(P.isDirectionalLight){const q=n.directional[v];q.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),q.direction.sub(a),q.direction.transformDirection(h),v++}else if(P.isSpotLight){const q=n.spot[g];q.position.setFromMatrixPosition(P.matrixWorld),q.position.applyMatrix4(h),q.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),q.direction.sub(a),q.direction.transformDirection(h),g++}else if(P.isRectAreaLight){const q=n.rectArea[T];q.position.setFromMatrixPosition(P.matrixWorld),q.position.applyMatrix4(h),c.identity(),s.copy(P.matrixWorld),s.premultiply(h),c.extractRotation(s),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),q.halfWidth.applyMatrix4(c),q.halfHeight.applyMatrix4(c),T++}else if(P.isPointLight){const q=n.point[f];q.position.setFromMatrixPosition(P.matrixWorld),q.position.applyMatrix4(h),f++}else if(P.isHemisphereLight){const q=n.hemi[S];q.direction.setFromMatrixPosition(P.matrixWorld),q.direction.transformDirection(h),S++}}}return{setup:l,setupView:u,state:n}}function Uc(i){const e=new ng(i),t=[],n=[];function a(d){p.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function c(d){n.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}const p={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:l,setupLightsView:u,pushLight:s,pushShadow:c}}function ig(i){let e=new WeakMap;function t(a,s=0){const c=e.get(a);let l;return c===void 0?(l=new Uc(i),e.set(a,[l])):s>=c.length?(l=new Uc(i),c.push(l)):l=c[s],l}function n(){e=new WeakMap}return{get:t,dispose:n}}class ag extends ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ep,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sg extends ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lg(i,e,t){let n=new fl;const a=new Bt,s=new Bt,c=new an,l=new ag({depthPacking:tp}),u=new sg,p={},d=t.maxTextureSize,v={[ki]:qn,[qn]:ki,[wi]:wi},f=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:og,fragmentShader:rg}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const T=new Bn;T.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new $n(T,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xc;let m=this.type;this.render=function(I,H,z){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||I.length===0)return;const w=i.getRenderTarget(),A=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Bi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const Y=m!==Ai&&this.type===Ai,X=m===Ai&&this.type!==Ai;for(let te=0,se=I.length;te<se;te++){const de=I[te],$=de.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;a.copy($.mapSize);const De=$.getFrameExtents();if(a.multiply(De),s.copy($.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(s.x=Math.floor(d/De.x),a.x=s.x*De.x,$.mapSize.x=s.x),a.y>d&&(s.y=Math.floor(d/De.y),a.y=s.y*De.y,$.mapSize.y=s.y)),$.map===null||Y===!0||X===!0){const me=this.type!==Ai?{minFilter:Wn,magFilter:Wn}:{};$.map!==null&&$.map.dispose(),$.map=new Ma(a.x,a.y,me),$.map.texture.name=de.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const ie=$.getViewportCount();for(let me=0;me<ie;me++){const We=$.getViewport(me);c.set(s.x*We.x,s.y*We.y,s.x*We.z,s.y*We.w),W.viewport(c),$.updateMatrices(de,me),n=$.getFrustum(),q(H,z,$.camera,de,this.type)}$.isPointLightShadow!==!0&&this.type===Ai&&L($,z),$.needsUpdate=!1}m=this.type,h.needsUpdate=!1,i.setRenderTarget(w,A,B)};function L(I,H){const z=e.update(S);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,g.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ma(a.x,a.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(H,null,z,f,S,null),g.uniforms.shadow_pass.value=I.mapPass.texture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(H,null,z,g,S,null)}function P(I,H,z,w){let A=null;const B=z.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(B!==void 0)A=B;else if(A=z.isPointLight===!0?u:l,i.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0){const W=A.uuid,Y=H.uuid;let X=p[W];X===void 0&&(X={},p[W]=X);let te=X[Y];te===void 0&&(te=A.clone(),X[Y]=te,H.addEventListener("dispose",V)),A=te}if(A.visible=H.visible,A.wireframe=H.wireframe,w===Ai?A.side=H.shadowSide!==null?H.shadowSide:H.side:A.side=H.shadowSide!==null?H.shadowSide:v[H.side],A.alphaMap=H.alphaMap,A.alphaTest=H.alphaTest,A.map=H.map,A.clipShadows=H.clipShadows,A.clippingPlanes=H.clippingPlanes,A.clipIntersection=H.clipIntersection,A.displacementMap=H.displacementMap,A.displacementScale=H.displacementScale,A.displacementBias=H.displacementBias,A.wireframeLinewidth=H.wireframeLinewidth,A.linewidth=H.linewidth,z.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const W=i.properties.get(A);W.light=z}return A}function q(I,H,z,w,A){if(I.visible===!1)return;if(I.layers.test(H.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&A===Ai)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,I.matrixWorld);const Y=e.update(I),X=I.material;if(Array.isArray(X)){const te=Y.groups;for(let se=0,de=te.length;se<de;se++){const $=te[se],De=X[$.materialIndex];if(De&&De.visible){const ie=P(I,De,w,A);I.onBeforeShadow(i,I,H,z,Y,ie,$),i.renderBufferDirect(z,null,Y,ie,I,$),I.onAfterShadow(i,I,H,z,Y,ie,$)}}}else if(X.visible){const te=P(I,X,w,A);I.onBeforeShadow(i,I,H,z,Y,te,null),i.renderBufferDirect(z,null,Y,te,I,null),I.onAfterShadow(i,I,H,z,Y,te,null)}}const W=I.children;for(let Y=0,X=W.length;Y<X;Y++)q(W[Y],H,z,w,A)}function V(I){I.target.removeEventListener("dispose",V);for(const z in p){const w=p[z],A=I.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}function cg(i){function e(){let G=!1;const we=new an;let Ce=null;const ye=new an(0,0,0,0);return{setMask:function(Pe){Ce!==Pe&&!G&&(i.colorMask(Pe,Pe,Pe,Pe),Ce=Pe)},setLocked:function(Pe){G=Pe},setClear:function(Pe,Ze,tt,ot,ut){ut===!0&&(Pe*=ot,Ze*=ot,tt*=ot),we.set(Pe,Ze,tt,ot),ye.equals(we)===!1&&(i.clearColor(Pe,Ze,tt,ot),ye.copy(we))},reset:function(){G=!1,Ce=null,ye.set(-1,0,0,0)}}}function t(){let G=!1,we=null,Ce=null,ye=null;return{setTest:function(Pe){Pe?Re(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(Pe){we!==Pe&&!G&&(i.depthMask(Pe),we=Pe)},setFunc:function(Pe){if(Ce!==Pe){switch(Pe){case Fd:i.depthFunc(i.NEVER);break;case Od:i.depthFunc(i.ALWAYS);break;case zd:i.depthFunc(i.LESS);break;case Po:i.depthFunc(i.LEQUAL);break;case Bd:i.depthFunc(i.EQUAL);break;case Hd:i.depthFunc(i.GEQUAL);break;case kd:i.depthFunc(i.GREATER);break;case Vd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ce=Pe}},setLocked:function(Pe){G=Pe},setClear:function(Pe){ye!==Pe&&(i.clearDepth(Pe),ye=Pe)},reset:function(){G=!1,we=null,Ce=null,ye=null}}}function n(){let G=!1,we=null,Ce=null,ye=null,Pe=null,Ze=null,tt=null,ot=null,ut=null;return{setTest:function(Ke){G||(Ke?Re(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(Ke){we!==Ke&&!G&&(i.stencilMask(Ke),we=Ke)},setFunc:function(Ke,ft,mt){(Ce!==Ke||ye!==ft||Pe!==mt)&&(i.stencilFunc(Ke,ft,mt),Ce=Ke,ye=ft,Pe=mt)},setOp:function(Ke,ft,mt){(Ze!==Ke||tt!==ft||ot!==mt)&&(i.stencilOp(Ke,ft,mt),Ze=Ke,tt=ft,ot=mt)},setLocked:function(Ke){G=Ke},setClear:function(Ke){ut!==Ke&&(i.clearStencil(Ke),ut=Ke)},reset:function(){G=!1,we=null,Ce=null,ye=null,Pe=null,Ze=null,tt=null,ot=null,ut=null}}}const a=new e,s=new t,c=new n,l=new WeakMap,u=new WeakMap;let p={},d={},v=new WeakMap,f=[],g=null,T=!1,S=null,h=null,m=null,L=null,P=null,q=null,V=null,I=new Rt(0,0,0),H=0,z=!1,w=null,A=null,B=null,W=null,Y=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,se=0;const de=i.getParameter(i.VERSION);de.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(de)[1]),te=se>=1):de.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),te=se>=2);let $=null,De={};const ie=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),We=new an().fromArray(ie),ze=new an().fromArray(me);function J(G,we,Ce,ye){const Pe=new Uint8Array(4),Ze=i.createTexture();i.bindTexture(G,Ze),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let tt=0;tt<Ce;tt++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(we+tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return Ze}const Ee={};Ee[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),Ee[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ee[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),c.setClear(0),Re(i.DEPTH_TEST),s.setFunc(Po),He(!1),Le(zl),Re(i.CULL_FACE),Ge(Bi);function Re(G){p[G]!==!0&&(i.enable(G),p[G]=!0)}function Se(G){p[G]!==!1&&(i.disable(G),p[G]=!1)}function Be(G,we){return d[G]!==we?(i.bindFramebuffer(G,we),d[G]=we,G===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=we),G===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=we),!0):!1}function ce(G,we){let Ce=f,ye=!1;if(G){Ce=v.get(we),Ce===void 0&&(Ce=[],v.set(we,Ce));const Pe=G.textures;if(Ce.length!==Pe.length||Ce[0]!==i.COLOR_ATTACHMENT0){for(let Ze=0,tt=Pe.length;Ze<tt;Ze++)Ce[Ze]=i.COLOR_ATTACHMENT0+Ze;Ce.length=Pe.length,ye=!0}}else Ce[0]!==i.BACK&&(Ce[0]=i.BACK,ye=!0);ye&&i.drawBuffers(Ce)}function Te(G){return g!==G?(i.useProgram(G),g=G,!0):!1}const it={[va]:i.FUNC_ADD,[bd]:i.FUNC_SUBTRACT,[yd]:i.FUNC_REVERSE_SUBTRACT};it[Md]=i.MIN,it[Cd]=i.MAX;const F={[Sd]:i.ZERO,[Ed]:i.ONE,[Td]:i.SRC_COLOR,[yr]:i.SRC_ALPHA,[Dd]:i.SRC_ALPHA_SATURATE,[Rd]:i.DST_COLOR,[wd]:i.DST_ALPHA,[Ad]:i.ONE_MINUS_SRC_COLOR,[Mr]:i.ONE_MINUS_SRC_ALPHA,[Ld]:i.ONE_MINUS_DST_COLOR,[Pd]:i.ONE_MINUS_DST_ALPHA,[Ud]:i.CONSTANT_COLOR,[Id]:i.ONE_MINUS_CONSTANT_COLOR,[Nd]:i.CONSTANT_ALPHA,[qd]:i.ONE_MINUS_CONSTANT_ALPHA};function Ge(G,we,Ce,ye,Pe,Ze,tt,ot,ut,Ke){if(G===Bi){T===!0&&(Se(i.BLEND),T=!1);return}if(T===!1&&(Re(i.BLEND),T=!0),G!==xd){if(G!==S||Ke!==z){if((h!==va||P!==va)&&(i.blendEquation(i.FUNC_ADD),h=va,P=va),Ke)switch(G){case ka:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bl:i.blendFunc(i.ONE,i.ONE);break;case Hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ka:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}m=null,L=null,q=null,V=null,I.set(0,0,0),H=0,S=G,z=Ke}return}Pe=Pe||we,Ze=Ze||Ce,tt=tt||ye,(we!==h||Pe!==P)&&(i.blendEquationSeparate(it[we],it[Pe]),h=we,P=Pe),(Ce!==m||ye!==L||Ze!==q||tt!==V)&&(i.blendFuncSeparate(F[Ce],F[ye],F[Ze],F[tt]),m=Ce,L=ye,q=Ze,V=tt),(ot.equals(I)===!1||ut!==H)&&(i.blendColor(ot.r,ot.g,ot.b,ut),I.copy(ot),H=ut),S=G,z=!1}function nt(G,we){G.side===wi?Se(i.CULL_FACE):Re(i.CULL_FACE);let Ce=G.side===qn;we&&(Ce=!Ce),He(Ce),G.blending===ka&&G.transparent===!1?Ge(Bi):Ge(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),s.setFunc(G.depthFunc),s.setTest(G.depthTest),s.setMask(G.depthWrite),a.setMask(G.colorWrite);const ye=G.stencilWrite;c.setTest(ye),ye&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ue(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Re(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(G){w!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),w=G)}function Le(G){G!==vd?(Re(i.CULL_FACE),G!==A&&(G===zl?i.cullFace(i.BACK):G===gd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),A=G}function st(G){G!==B&&(te&&i.lineWidth(G),B=G)}function Ue(G,we,Ce){G?(Re(i.POLYGON_OFFSET_FILL),(W!==we||Y!==Ce)&&(i.polygonOffset(we,Ce),W=we,Y=Ce)):Se(i.POLYGON_OFFSET_FILL)}function Fe(G){G?Re(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function O(G){G===void 0&&(G=i.TEXTURE0+X-1),$!==G&&(i.activeTexture(G),$=G)}function _(G,we,Ce){Ce===void 0&&($===null?Ce=i.TEXTURE0+X-1:Ce=$);let ye=De[Ce];ye===void 0&&(ye={type:void 0,texture:void 0},De[Ce]=ye),(ye.type!==G||ye.texture!==we)&&($!==Ce&&(i.activeTexture(Ce),$=Ce),i.bindTexture(G,we||Ee[G]),ye.type=G,ye.texture=we)}function R(){const G=De[$];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ie(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $e(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function k(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Z(G){We.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),We.copy(G))}function ve(G){ze.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),ze.copy(G))}function Xe(G,we){let Ce=u.get(we);Ce===void 0&&(Ce=new WeakMap,u.set(we,Ce));let ye=Ce.get(G);ye===void 0&&(ye=i.getUniformBlockIndex(we,G.name),Ce.set(G,ye))}function Je(G,we){const ye=u.get(we).get(G);l.get(we)!==ye&&(i.uniformBlockBinding(we,ye,G.__bindingPointIndex),l.set(we,ye))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},$=null,De={},d={},v=new WeakMap,f=[],g=null,T=!1,S=null,h=null,m=null,L=null,P=null,q=null,V=null,I=new Rt(0,0,0),H=0,z=!1,w=null,A=null,B=null,W=null,Y=null,We.set(0,0,i.canvas.width,i.canvas.height),ze.set(0,0,i.canvas.width,i.canvas.height),a.reset(),s.reset(),c.reset()}return{buffers:{color:a,depth:s,stencil:c},enable:Re,disable:Se,bindFramebuffer:Be,drawBuffers:ce,useProgram:Te,setBlending:Ge,setMaterial:nt,setFlipSided:He,setCullFace:Le,setLineWidth:st,setPolygonOffset:Ue,setScissorTest:Fe,activeTexture:O,bindTexture:_,unbindTexture:R,compressedTexImage2D:ne,compressedTexImage3D:pe,texImage2D:_e,texImage3D:et,updateUBOMapping:Xe,uniformBlockBinding:Je,texStorage2D:$e,texStorage3D:k,texSubImage2D:he,texSubImage3D:Ve,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ie,scissor:Z,viewport:ve,reset:ct}}function Ic(i,e,t,n){const a=ug(n);switch(t){case Qc:return i*e;case tu:return i*e;case nu:return i*e*2;case iu:return i*e/a.components*a.byteLength;case ll:return i*e/a.components*a.byteLength;case au:return i*e*2/a.components*a.byteLength;case cl:return i*e*2/a.components*a.byteLength;case eu:return i*e*3/a.components*a.byteLength;case Qn:return i*e*4/a.components*a.byteLength;case ul:return i*e*4/a.components*a.byteLength;case yo:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Co:case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wr:case Rr:return Math.max(i,16)*Math.max(e,8)/4;case Ar:case Pr:return Math.max(i,8)*Math.max(e,8)/2;case Lr:case Dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case qr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Fr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Or:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case zr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Br:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Hr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case kr:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Vr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Gr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case jr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Wr:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $r:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Eo:case Xr:case Yr:return Math.ceil(i/4)*Math.ceil(e/4)*16;case su:case Zr:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Kr:case Jr:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ug(i){switch(i){case Li:case Zc:return{byteLength:1,components:1};case Ps:case Kc:case Ls:return{byteLength:2,components:1};case ol:case rl:return{byteLength:2,components:4};case ya:case sl:case Pi:return{byteLength:4,components:1};case Jc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function dg(i,e,t,n,a,s,c){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Bt,d=new WeakMap;let v;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(O,_){return g?new OffscreenCanvas(O,_):Io("canvas")}function S(O,_,R){let ne=1;const pe=Fe(O);if((pe.width>R||pe.height>R)&&(ne=R/Math.max(pe.width,pe.height)),ne<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const he=Math.floor(ne*pe.width),Ve=Math.floor(ne*pe.height);v===void 0&&(v=T(he,Ve));const Ae=_?T(he,Ve):v;return Ae.width=he,Ae.height=Ve,Ae.getContext("2d").drawImage(O,0,0,he,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+he+"x"+Ve+")."),Ae}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),O;return O}function h(O){return O.generateMipmaps&&O.minFilter!==Wn&&O.minFilter!==Jn}function m(O){i.generateMipmap(O)}function L(O,_,R,ne,pe=!1){if(O!==null){if(i[O]!==void 0)return i[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let he=_;if(_===i.RED&&(R===i.FLOAT&&(he=i.R32F),R===i.HALF_FLOAT&&(he=i.R16F),R===i.UNSIGNED_BYTE&&(he=i.R8)),_===i.RED_INTEGER&&(R===i.UNSIGNED_BYTE&&(he=i.R8UI),R===i.UNSIGNED_SHORT&&(he=i.R16UI),R===i.UNSIGNED_INT&&(he=i.R32UI),R===i.BYTE&&(he=i.R8I),R===i.SHORT&&(he=i.R16I),R===i.INT&&(he=i.R32I)),_===i.RG&&(R===i.FLOAT&&(he=i.RG32F),R===i.HALF_FLOAT&&(he=i.RG16F),R===i.UNSIGNED_BYTE&&(he=i.RG8)),_===i.RG_INTEGER&&(R===i.UNSIGNED_BYTE&&(he=i.RG8UI),R===i.UNSIGNED_SHORT&&(he=i.RG16UI),R===i.UNSIGNED_INT&&(he=i.RG32UI),R===i.BYTE&&(he=i.RG8I),R===i.SHORT&&(he=i.RG16I),R===i.INT&&(he=i.RG32I)),_===i.RGB&&R===i.UNSIGNED_INT_5_9_9_9_REV&&(he=i.RGB9_E5),_===i.RGBA){const Ve=pe?Ro:Gt.getTransfer(ne);R===i.FLOAT&&(he=i.RGBA32F),R===i.HALF_FLOAT&&(he=i.RGBA16F),R===i.UNSIGNED_BYTE&&(he=Ve===Zt?i.SRGB8_ALPHA8:i.RGBA8),R===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),R===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function P(O,_){let R;return O?_===null||_===ya||_===Ka?R=i.DEPTH24_STENCIL8:_===Pi?R=i.DEPTH32F_STENCIL8:_===Ps&&(R=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ya||_===Ka?R=i.DEPTH_COMPONENT24:_===Pi?R=i.DEPTH_COMPONENT32F:_===Ps&&(R=i.DEPTH_COMPONENT16),R}function q(O,_){return h(O)===!0||O.isFramebufferTexture&&O.minFilter!==Wn&&O.minFilter!==Jn?Math.log2(Math.max(_.width,_.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?_.mipmaps.length:1}function V(O){const _=O.target;_.removeEventListener("dispose",V),H(_),_.isVideoTexture&&d.delete(_)}function I(O){const _=O.target;_.removeEventListener("dispose",I),w(_)}function H(O){const _=n.get(O);if(_.__webglInit===void 0)return;const R=O.source,ne=f.get(R);if(ne){const pe=ne[_.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&z(O),Object.keys(ne).length===0&&f.delete(R)}n.remove(O)}function z(O){const _=n.get(O);i.deleteTexture(_.__webglTexture);const R=O.source,ne=f.get(R);delete ne[_.__cacheKey],c.memory.textures--}function w(O){const _=n.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(_.__webglFramebuffer[ne]))for(let pe=0;pe<_.__webglFramebuffer[ne].length;pe++)i.deleteFramebuffer(_.__webglFramebuffer[ne][pe]);else i.deleteFramebuffer(_.__webglFramebuffer[ne]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[ne])}else{if(Array.isArray(_.__webglFramebuffer))for(let ne=0;ne<_.__webglFramebuffer.length;ne++)i.deleteFramebuffer(_.__webglFramebuffer[ne]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let ne=0;ne<_.__webglColorRenderbuffer.length;ne++)_.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[ne]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const R=O.textures;for(let ne=0,pe=R.length;ne<pe;ne++){const he=n.get(R[ne]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),c.memory.textures--),n.remove(R[ne])}n.remove(O)}let A=0;function B(){A=0}function W(){const O=A;return O>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+a.maxTextures),A+=1,O}function Y(O){const _=[];return _.push(O.wrapS),_.push(O.wrapT),_.push(O.wrapR||0),_.push(O.magFilter),_.push(O.minFilter),_.push(O.anisotropy),_.push(O.internalFormat),_.push(O.format),_.push(O.type),_.push(O.generateMipmaps),_.push(O.premultiplyAlpha),_.push(O.flipY),_.push(O.unpackAlignment),_.push(O.colorSpace),_.join()}function X(O,_){const R=n.get(O);if(O.isVideoTexture&&st(O),O.isRenderTargetTexture===!1&&O.version>0&&R.__version!==O.version){const ne=O.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(R,O,_);return}}t.bindTexture(i.TEXTURE_2D,R.__webglTexture,i.TEXTURE0+_)}function te(O,_){const R=n.get(O);if(O.version>0&&R.__version!==O.version){ze(R,O,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,R.__webglTexture,i.TEXTURE0+_)}function se(O,_){const R=n.get(O);if(O.version>0&&R.__version!==O.version){ze(R,O,_);return}t.bindTexture(i.TEXTURE_3D,R.__webglTexture,i.TEXTURE0+_)}function de(O,_){const R=n.get(O);if(O.version>0&&R.__version!==O.version){J(R,O,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+_)}const $={[Er]:i.REPEAT,[_a]:i.CLAMP_TO_EDGE,[Tr]:i.MIRRORED_REPEAT},De={[Wn]:i.NEAREST,[Qd]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[Jn]:i.LINEAR,[Go]:i.LINEAR_MIPMAP_NEAREST,[xa]:i.LINEAR_MIPMAP_LINEAR},ie={[ip]:i.NEVER,[cp]:i.ALWAYS,[ap]:i.LESS,[ru]:i.LEQUAL,[sp]:i.EQUAL,[lp]:i.GEQUAL,[op]:i.GREATER,[rp]:i.NOTEQUAL};function me(O,_){if(_.type===Pi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Jn||_.magFilter===Go||_.magFilter===Xs||_.magFilter===xa||_.minFilter===Jn||_.minFilter===Go||_.minFilter===Xs||_.minFilter===xa)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,$[_.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,$[_.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,$[_.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,De[_.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,De[_.minFilter]),_.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,ie[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Wn||_.minFilter!==Xs&&_.minFilter!==xa||_.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const R=e.get("EXT_texture_filter_anisotropic");i.texParameterf(O,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function We(O,_){let R=!1;O.__webglInit===void 0&&(O.__webglInit=!0,_.addEventListener("dispose",V));const ne=_.source;let pe=f.get(ne);pe===void 0&&(pe={},f.set(ne,pe));const he=Y(_);if(he!==O.__cacheKey){pe[he]===void 0&&(pe[he]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,R=!0),pe[he].usedTimes++;const Ve=pe[O.__cacheKey];Ve!==void 0&&(pe[O.__cacheKey].usedTimes--,Ve.usedTimes===0&&z(_)),O.__cacheKey=he,O.__webglTexture=pe[he].texture}return R}function ze(O,_,R){let ne=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ne=i.TEXTURE_3D);const pe=We(O,_),he=_.source;t.bindTexture(ne,O.__webglTexture,i.TEXTURE0+R);const Ve=n.get(he);if(he.version!==Ve.__version||pe===!0){t.activeTexture(i.TEXTURE0+R);const Ae=Gt.getPrimaries(Gt.workingColorSpace),Ie=_.colorSpace===zi?null:Gt.getPrimaries(_.colorSpace),$e=_.colorSpace===zi||Ae===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let k=S(_.image,!1,a.maxTextureSize);k=Ue(_,k);const _e=s.convert(_.format,_.colorSpace),et=s.convert(_.type);let Z=L(_.internalFormat,_e,et,_.colorSpace,_.isVideoTexture);me(ne,_);let ve;const Xe=_.mipmaps,Je=_.isVideoTexture!==!0,ct=Ve.__version===void 0||pe===!0,G=he.dataReady,we=q(_,k);if(_.isDepthTexture)Z=P(_.format===Ja,_.type),ct&&(Je?t.texStorage2D(i.TEXTURE_2D,1,Z,k.width,k.height):t.texImage2D(i.TEXTURE_2D,0,Z,k.width,k.height,0,_e,et,null));else if(_.isDataTexture)if(Xe.length>0){Je&&ct&&t.texStorage2D(i.TEXTURE_2D,we,Z,Xe[0].width,Xe[0].height);for(let Ce=0,ye=Xe.length;Ce<ye;Ce++)ve=Xe[Ce],Je?G&&t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,ve.width,ve.height,_e,et,ve.data):t.texImage2D(i.TEXTURE_2D,Ce,Z,ve.width,ve.height,0,_e,et,ve.data);_.generateMipmaps=!1}else Je?(ct&&t.texStorage2D(i.TEXTURE_2D,we,Z,k.width,k.height),G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,k.width,k.height,_e,et,k.data)):t.texImage2D(i.TEXTURE_2D,0,Z,k.width,k.height,0,_e,et,k.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Je&&ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Z,Xe[0].width,Xe[0].height,k.depth);for(let Ce=0,ye=Xe.length;Ce<ye;Ce++)if(ve=Xe[Ce],_.format!==Qn)if(_e!==null)if(Je){if(G)if(_.layerUpdates.size>0){const Pe=Ic(ve.width,ve.height,_.format,_.type);for(const Ze of _.layerUpdates){const tt=ve.data.subarray(Ze*Pe/ve.data.BYTES_PER_ELEMENT,(Ze+1)*Pe/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ce,0,0,Ze,ve.width,ve.height,1,_e,tt,0,0)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ce,0,0,0,ve.width,ve.height,k.depth,_e,ve.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ce,Z,ve.width,ve.height,k.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ce,0,0,0,ve.width,ve.height,k.depth,_e,et,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ce,Z,ve.width,ve.height,k.depth,0,_e,et,ve.data)}else{Je&&ct&&t.texStorage2D(i.TEXTURE_2D,we,Z,Xe[0].width,Xe[0].height);for(let Ce=0,ye=Xe.length;Ce<ye;Ce++)ve=Xe[Ce],_.format!==Qn?_e!==null?Je?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,Ce,0,0,ve.width,ve.height,_e,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,Ce,Z,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?G&&t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,ve.width,ve.height,_e,et,ve.data):t.texImage2D(i.TEXTURE_2D,Ce,Z,ve.width,ve.height,0,_e,et,ve.data)}else if(_.isDataArrayTexture)if(Je){if(ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Z,k.width,k.height,k.depth),G)if(_.layerUpdates.size>0){const Ce=Ic(k.width,k.height,_.format,_.type);for(const ye of _.layerUpdates){const Pe=k.data.subarray(ye*Ce/k.data.BYTES_PER_ELEMENT,(ye+1)*Ce/k.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ye,k.width,k.height,1,_e,et,Pe)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,_e,et,k.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Z,k.width,k.height,k.depth,0,_e,et,k.data);else if(_.isData3DTexture)Je?(ct&&t.texStorage3D(i.TEXTURE_3D,we,Z,k.width,k.height,k.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,_e,et,k.data)):t.texImage3D(i.TEXTURE_3D,0,Z,k.width,k.height,k.depth,0,_e,et,k.data);else if(_.isFramebufferTexture){if(ct)if(Je)t.texStorage2D(i.TEXTURE_2D,we,Z,k.width,k.height);else{let Ce=k.width,ye=k.height;for(let Pe=0;Pe<we;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,Z,Ce,ye,0,_e,et,null),Ce>>=1,ye>>=1}}else if(Xe.length>0){if(Je&&ct){const Ce=Fe(Xe[0]);t.texStorage2D(i.TEXTURE_2D,we,Z,Ce.width,Ce.height)}for(let Ce=0,ye=Xe.length;Ce<ye;Ce++)ve=Xe[Ce],Je?G&&t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,_e,et,ve):t.texImage2D(i.TEXTURE_2D,Ce,Z,_e,et,ve);_.generateMipmaps=!1}else if(Je){if(ct){const Ce=Fe(k);t.texStorage2D(i.TEXTURE_2D,we,Z,Ce.width,Ce.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,et,k)}else t.texImage2D(i.TEXTURE_2D,0,Z,_e,et,k);h(_)&&m(ne),Ve.__version=he.version,_.onUpdate&&_.onUpdate(_)}O.__version=_.version}function J(O,_,R){if(_.image.length!==6)return;const ne=We(O,_),pe=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+R);const he=n.get(pe);if(pe.version!==he.__version||ne===!0){t.activeTexture(i.TEXTURE0+R);const Ve=Gt.getPrimaries(Gt.workingColorSpace),Ae=_.colorSpace===zi?null:Gt.getPrimaries(_.colorSpace),Ie=_.colorSpace===zi||Ve===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const $e=_.isCompressedTexture||_.image[0].isCompressedTexture,k=_.image[0]&&_.image[0].isDataTexture,_e=[];for(let ye=0;ye<6;ye++)!$e&&!k?_e[ye]=S(_.image[ye],!0,a.maxCubemapSize):_e[ye]=k?_.image[ye].image:_.image[ye],_e[ye]=Ue(_,_e[ye]);const et=_e[0],Z=s.convert(_.format,_.colorSpace),ve=s.convert(_.type),Xe=L(_.internalFormat,Z,ve,_.colorSpace),Je=_.isVideoTexture!==!0,ct=he.__version===void 0||ne===!0,G=pe.dataReady;let we=q(_,et);me(i.TEXTURE_CUBE_MAP,_);let Ce;if($e){Je&&ct&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Xe,et.width,et.height);for(let ye=0;ye<6;ye++){Ce=_e[ye].mipmaps;for(let Pe=0;Pe<Ce.length;Pe++){const Ze=Ce[Pe];_.format!==Qn?Z!==null?Je?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Pe,0,0,Ze.width,Ze.height,Z,Ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Pe,Xe,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Pe,0,0,Ze.width,Ze.height,Z,ve,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Pe,Xe,Ze.width,Ze.height,0,Z,ve,Ze.data)}}}else{if(Ce=_.mipmaps,Je&&ct){Ce.length>0&&we++;const ye=Fe(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Xe,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(k){Je?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,_e[ye].width,_e[ye].height,Z,ve,_e[ye].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Xe,_e[ye].width,_e[ye].height,0,Z,ve,_e[ye].data);for(let Pe=0;Pe<Ce.length;Pe++){const tt=Ce[Pe].image[ye].image;Je?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Pe+1,0,0,tt.width,tt.height,Z,ve,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Pe+1,Xe,tt.width,tt.height,0,Z,ve,tt.data)}}else{Je?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Z,ve,_e[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Xe,Z,ve,_e[ye]);for(let Pe=0;Pe<Ce.length;Pe++){const Ze=Ce[Pe];Je?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Pe+1,0,0,Z,ve,Ze.image[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Pe+1,Xe,Z,ve,Ze.image[ye])}}}h(_)&&m(i.TEXTURE_CUBE_MAP),he.__version=pe.version,_.onUpdate&&_.onUpdate(_)}O.__version=_.version}function Ee(O,_,R,ne,pe,he){const Ve=s.convert(R.format,R.colorSpace),Ae=s.convert(R.type),Ie=L(R.internalFormat,Ve,Ae,R.colorSpace);if(!n.get(_).__hasExternalTextures){const k=Math.max(1,_.width>>he),_e=Math.max(1,_.height>>he);pe===i.TEXTURE_3D||pe===i.TEXTURE_2D_ARRAY?t.texImage3D(pe,he,Ie,k,_e,_.depth,0,Ve,Ae,null):t.texImage2D(pe,he,Ie,k,_e,0,Ve,Ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),Le(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,pe,n.get(R).__webglTexture,0,He(_)):(pe===i.TEXTURE_2D||pe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,pe,n.get(R).__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(O,_,R){if(i.bindRenderbuffer(i.RENDERBUFFER,O),_.depthBuffer){const ne=_.depthTexture,pe=ne&&ne.isDepthTexture?ne.type:null,he=P(_.stencilBuffer,pe),Ve=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=He(_);Le(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,he,_.width,_.height):R?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,he,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,he,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ve,i.RENDERBUFFER,O)}else{const ne=_.textures;for(let pe=0;pe<ne.length;pe++){const he=ne[pe],Ve=s.convert(he.format,he.colorSpace),Ae=s.convert(he.type),Ie=L(he.internalFormat,Ve,Ae,he.colorSpace),$e=He(_);R&&Le(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,Ie,_.width,_.height):Le(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e,Ie,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(O,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);const ne=n.get(_.depthTexture).__webglTexture,pe=He(_);if(_.depthTexture.format===Va)Le(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(_.depthTexture.format===Ja)Le(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Be(O){const _=n.get(O),R=O.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==O.depthTexture){const ne=O.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ne){const pe=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ne.removeEventListener("dispose",pe)};ne.addEventListener("dispose",pe),_.__depthDisposeCallback=pe}_.__boundDepthTexture=ne}if(O.depthTexture&&!_.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");Se(_.__webglFramebuffer,O)}else if(R){_.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[ne]),_.__webglDepthbuffer[ne]===void 0)_.__webglDepthbuffer[ne]=i.createRenderbuffer(),Re(_.__webglDepthbuffer[ne],O,!1);else{const pe=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=_.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,he)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Re(_.__webglDepthbuffer,O,!1);else{const ne=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,pe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(O,_,R){const ne=n.get(O);_!==void 0&&Ee(ne.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),R!==void 0&&Be(O)}function Te(O){const _=O.texture,R=n.get(O),ne=n.get(_);O.addEventListener("dispose",I);const pe=O.textures,he=O.isWebGLCubeRenderTarget===!0,Ve=pe.length>1;if(Ve||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=_.version,c.memory.textures++),he){R.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(_.mipmaps&&_.mipmaps.length>0){R.__webglFramebuffer[Ae]=[];for(let Ie=0;Ie<_.mipmaps.length;Ie++)R.__webglFramebuffer[Ae][Ie]=i.createFramebuffer()}else R.__webglFramebuffer[Ae]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){R.__webglFramebuffer=[];for(let Ae=0;Ae<_.mipmaps.length;Ae++)R.__webglFramebuffer[Ae]=i.createFramebuffer()}else R.__webglFramebuffer=i.createFramebuffer();if(Ve)for(let Ae=0,Ie=pe.length;Ae<Ie;Ae++){const $e=n.get(pe[Ae]);$e.__webglTexture===void 0&&($e.__webglTexture=i.createTexture(),c.memory.textures++)}if(O.samples>0&&Le(O)===!1){R.__webglMultisampledFramebuffer=i.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let Ae=0;Ae<pe.length;Ae++){const Ie=pe[Ae];R.__webglColorRenderbuffer[Ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,R.__webglColorRenderbuffer[Ae]);const $e=s.convert(Ie.format,Ie.colorSpace),k=s.convert(Ie.type),_e=L(Ie.internalFormat,$e,k,Ie.colorSpace,O.isXRRenderTarget===!0),et=He(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,et,_e,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,R.__webglColorRenderbuffer[Ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(R.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(R.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),me(i.TEXTURE_CUBE_MAP,_);for(let Ae=0;Ae<6;Ae++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ie=0;Ie<_.mipmaps.length;Ie++)Ee(R.__webglFramebuffer[Ae][Ie],O,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie);else Ee(R.__webglFramebuffer[Ae],O,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);h(_)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let Ae=0,Ie=pe.length;Ae<Ie;Ae++){const $e=pe[Ae],k=n.get($e);t.bindTexture(i.TEXTURE_2D,k.__webglTexture),me(i.TEXTURE_2D,$e),Ee(R.__webglFramebuffer,O,$e,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,0),h($e)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let Ae=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ae=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ae,ne.__webglTexture),me(Ae,_),_.mipmaps&&_.mipmaps.length>0)for(let Ie=0;Ie<_.mipmaps.length;Ie++)Ee(R.__webglFramebuffer[Ie],O,_,i.COLOR_ATTACHMENT0,Ae,Ie);else Ee(R.__webglFramebuffer,O,_,i.COLOR_ATTACHMENT0,Ae,0);h(_)&&m(Ae),t.unbindTexture()}O.depthBuffer&&Be(O)}function it(O){const _=O.textures;for(let R=0,ne=_.length;R<ne;R++){const pe=_[R];if(h(pe)){const he=O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ve=n.get(pe).__webglTexture;t.bindTexture(he,Ve),m(he),t.unbindTexture()}}}const F=[],Ge=[];function nt(O){if(O.samples>0){if(Le(O)===!1){const _=O.textures,R=O.width,ne=O.height;let pe=i.COLOR_BUFFER_BIT;const he=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ve=n.get(O),Ae=_.length>1;if(Ae)for(let Ie=0;Ie<_.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ie=0;Ie<_.length;Ie++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(pe|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(pe|=i.STENCIL_BUFFER_BIT)),Ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ie]);const $e=n.get(_[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$e,0)}i.blitFramebuffer(0,0,R,ne,0,0,R,ne,pe,i.NEAREST),u===!0&&(F.length=0,Ge.length=0,F.push(i.COLOR_ATTACHMENT0+Ie),O.depthBuffer&&O.resolveDepthBuffer===!1&&(F.push(he),Ge.push(he),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ge)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,F))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ae)for(let Ie=0;Ie<_.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ie]);const $e=n.get(_[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,$e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&u){const _=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function He(O){return Math.min(a.maxSamples,O.samples)}function Le(O){const _=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function st(O){const _=c.render.frame;d.get(O)!==_&&(d.set(O,_),O.update())}function Ue(O,_){const R=O.colorSpace,ne=O.format,pe=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||R!==Gi&&R!==zi&&(Gt.getTransfer(R)===Zt?(ne!==Qn||pe!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),_}function Fe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=W,this.resetTextureUnits=B,this.setTexture2D=X,this.setTexture2DArray=te,this.setTexture3D=se,this.setTextureCube=de,this.rebindTextures=ce,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Le}function pg(i,e){function t(n,a=zi){let s;const c=Gt.getTransfer(a);if(n===Li)return i.UNSIGNED_BYTE;if(n===ol)return i.UNSIGNED_SHORT_4_4_4_4;if(n===rl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zc)return i.BYTE;if(n===Kc)return i.SHORT;if(n===Ps)return i.UNSIGNED_SHORT;if(n===sl)return i.INT;if(n===ya)return i.UNSIGNED_INT;if(n===Pi)return i.FLOAT;if(n===Ls)return i.HALF_FLOAT;if(n===Qc)return i.ALPHA;if(n===eu)return i.RGB;if(n===Qn)return i.RGBA;if(n===tu)return i.LUMINANCE;if(n===nu)return i.LUMINANCE_ALPHA;if(n===Va)return i.DEPTH_COMPONENT;if(n===Ja)return i.DEPTH_STENCIL;if(n===iu)return i.RED;if(n===ll)return i.RED_INTEGER;if(n===au)return i.RG;if(n===cl)return i.RG_INTEGER;if(n===ul)return i.RGBA_INTEGER;if(n===yo||n===Mo||n===Co||n===So)if(c===Zt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===yo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===yo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Co)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===So)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ar||n===wr||n===Pr||n===Rr)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ar)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rr)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lr||n===Dr||n===Ur)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Lr||n===Dr)return c===Zt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ur)return c===Zt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ir||n===Nr||n===qr||n===Fr||n===Or||n===zr||n===Br||n===Hr||n===kr||n===Vr||n===Gr||n===jr||n===Wr||n===$r)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ir)return c===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nr)return c===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qr)return c===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fr)return c===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Or)return c===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zr)return c===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Br)return c===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hr)return c===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kr)return c===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vr)return c===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gr)return c===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jr)return c===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wr)return c===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$r)return c===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Eo||n===Xr||n===Yr)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Eo)return c===Zt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xr)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yr)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===su||n===Zr||n===Kr||n===Jr)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Eo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Zr)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jr)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ka?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class fg extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class As extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hg={type:"move"};class gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new As,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new As,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new be,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new be),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new As,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new be,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new be),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,s=null,c=null;const l=this._targetRay,u=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const S of e.hand.values()){const h=t.getJointPose(S,n),m=this._getHandJoint(p,S);h!==null&&(m.matrix.fromArray(h.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=h.radius),m.visible=h!==null}const d=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],f=d.position.distanceTo(v.position),g=.02,T=.005;p.inputState.pinching&&f>g+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&f<=g-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&s!==null&&(a=s),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(hg)))}return l!==null&&(l.visible=a!==null),u!==null&&(u.visible=s!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new As;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const mg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const a=new Fn,s=e.properties.get(a);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Vi({vertexShader:mg,fragmentShader:vg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $n(new Bo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _g extends es{constructor(e,t){super();const n=this;let a=null,s=1,c=null,l="local-floor",u=1,p=null,d=null,v=null,f=null,g=null,T=null;const S=new gg,h=t.getContextAttributes();let m=null,L=null;const P=[],q=[],V=new Bt;let I=null;const H=new Gn;H.layers.enable(1),H.viewport=new an;const z=new Gn;z.layers.enable(2),z.viewport=new an;const w=[H,z],A=new fg;A.layers.enable(1),A.layers.enable(2);let B=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let Ee=P[J];return Ee===void 0&&(Ee=new gr,P[J]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function(J){let Ee=P[J];return Ee===void 0&&(Ee=new gr,P[J]=Ee),Ee.getGripSpace()},this.getHand=function(J){let Ee=P[J];return Ee===void 0&&(Ee=new gr,P[J]=Ee),Ee.getHandSpace()};function Y(J){const Ee=q.indexOf(J.inputSource);if(Ee===-1)return;const Re=P[Ee];Re!==void 0&&(Re.update(J.inputSource,J.frame,p||c),Re.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){a.removeEventListener("select",Y),a.removeEventListener("selectstart",Y),a.removeEventListener("selectend",Y),a.removeEventListener("squeeze",Y),a.removeEventListener("squeezestart",Y),a.removeEventListener("squeezeend",Y),a.removeEventListener("end",X),a.removeEventListener("inputsourceschange",te);for(let J=0;J<P.length;J++){const Ee=q[J];Ee!==null&&(q[J]=null,P[J].disconnect(Ee))}B=null,W=null,S.reset(),e.setRenderTarget(m),g=null,f=null,v=null,a=null,L=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(V.width,V.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){l=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(m=e.getRenderTarget(),a.addEventListener("select",Y),a.addEventListener("selectstart",Y),a.addEventListener("selectend",Y),a.addEventListener("squeeze",Y),a.addEventListener("squeezestart",Y),a.addEventListener("squeezeend",Y),a.addEventListener("end",X),a.addEventListener("inputsourceschange",te),h.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(V),a.renderState.layers===void 0){const Ee={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(a,t,Ee),a.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),L=new Ma(g.framebufferWidth,g.framebufferHeight,{format:Qn,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil})}else{let Ee=null,Re=null,Se=null;h.depth&&(Se=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=h.stencil?Ja:Va,Re=h.stencil?Ka:ya);const Be={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};v=new XRWebGLBinding(a,t),f=v.createProjectionLayer(Be),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),L=new Ma(f.textureWidth,f.textureHeight,{format:Qn,type:Li,depthTexture:new yu(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(u),p=null,c=await a.requestReferenceSpace(l),ze.setContext(a),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function te(J){for(let Ee=0;Ee<J.removed.length;Ee++){const Re=J.removed[Ee],Se=q.indexOf(Re);Se>=0&&(q[Se]=null,P[Se].disconnect(Re))}for(let Ee=0;Ee<J.added.length;Ee++){const Re=J.added[Ee];let Se=q.indexOf(Re);if(Se===-1){for(let ce=0;ce<P.length;ce++)if(ce>=q.length){q.push(Re),Se=ce;break}else if(q[ce]===null){q[ce]=Re,Se=ce;break}if(Se===-1)break}const Be=P[Se];Be&&Be.connect(Re)}}const se=new be,de=new be;function $(J,Ee,Re){se.setFromMatrixPosition(Ee.matrixWorld),de.setFromMatrixPosition(Re.matrixWorld);const Se=se.distanceTo(de),Be=Ee.projectionMatrix.elements,ce=Re.projectionMatrix.elements,Te=Be[14]/(Be[10]-1),it=Be[14]/(Be[10]+1),F=(Be[9]+1)/Be[5],Ge=(Be[9]-1)/Be[5],nt=(Be[8]-1)/Be[0],He=(ce[8]+1)/ce[0],Le=Te*nt,st=Te*He,Ue=Se/(-nt+He),Fe=Ue*-nt;if(Ee.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Fe),J.translateZ(Ue),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Be[10]===-1)J.projectionMatrix.copy(Ee.projectionMatrix),J.projectionMatrixInverse.copy(Ee.projectionMatrixInverse);else{const O=Te+Ue,_=it+Ue,R=Le-Fe,ne=st+(Se-Fe),pe=F*it/_*O,he=Ge*it/_*O;J.projectionMatrix.makePerspective(R,ne,pe,he,O,_),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function De(J,Ee){Ee===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(Ee.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let Ee=J.near,Re=J.far;S.texture!==null&&(S.depthNear>0&&(Ee=S.depthNear),S.depthFar>0&&(Re=S.depthFar)),A.near=z.near=H.near=Ee,A.far=z.far=H.far=Re,(B!==A.near||W!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),B=A.near,W=A.far);const Se=J.parent,Be=A.cameras;De(A,Se);for(let ce=0;ce<Be.length;ce++)De(Be[ce],Se);Be.length===2?$(A,H,z):A.projectionMatrix.copy(H.projectionMatrix),ie(J,A,Se)};function ie(J,Ee,Re){Re===null?J.matrix.copy(Ee.matrixWorld):(J.matrix.copy(Re.matrixWorld),J.matrix.invert(),J.matrix.multiply(Ee.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(Ee.projectionMatrix),J.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Qr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&g===null))return u},this.setFoveation=function(J){u=J,f!==null&&(f.fixedFoveation=J),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=J)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(A)};let me=null;function We(J,Ee){if(d=Ee.getViewerPose(p||c),T=Ee,d!==null){const Re=d.views;g!==null&&(e.setRenderTargetFramebuffer(L,g.framebuffer),e.setRenderTarget(L));let Se=!1;Re.length!==A.cameras.length&&(A.cameras.length=0,Se=!0);for(let ce=0;ce<Re.length;ce++){const Te=Re[ce];let it=null;if(g!==null)it=g.getViewport(Te);else{const Ge=v.getViewSubImage(f,Te);it=Ge.viewport,ce===0&&(e.setRenderTargetTextures(L,Ge.colorTexture,f.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(L))}let F=w[ce];F===void 0&&(F=new Gn,F.layers.enable(ce),F.viewport=new an,w[ce]=F),F.matrix.fromArray(Te.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(Te.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(it.x,it.y,it.width,it.height),ce===0&&(A.matrix.copy(F.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Se===!0&&A.cameras.push(F)}const Be=a.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const ce=v.getDepthInformation(Re[0]);ce&&ce.isValid&&ce.texture&&S.init(e,ce,a.renderState)}}for(let Re=0;Re<P.length;Re++){const Se=q[Re],Be=P[Re];Se!==null&&Be!==void 0&&Be.update(Se,Ee,p||c)}me&&me(J,Ee),Ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Ee}),T=null}const ze=new xu;ze.setAnimationLoop(We),this.setAnimationLoop=function(J){me=J},this.dispose=function(){}}}const pa=new li,xg=new en;function bg(i,e){function t(h,m){h.matrixAutoUpdate===!0&&h.updateMatrix(),m.value.copy(h.matrix)}function n(h,m){m.color.getRGB(h.fogColor.value,gu(i)),m.isFog?(h.fogNear.value=m.near,h.fogFar.value=m.far):m.isFogExp2&&(h.fogDensity.value=m.density)}function a(h,m,L,P,q){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(h,m):m.isMeshToonMaterial?(s(h,m),v(h,m)):m.isMeshPhongMaterial?(s(h,m),d(h,m)):m.isMeshStandardMaterial?(s(h,m),f(h,m),m.isMeshPhysicalMaterial&&g(h,m,q)):m.isMeshMatcapMaterial?(s(h,m),T(h,m)):m.isMeshDepthMaterial?s(h,m):m.isMeshDistanceMaterial?(s(h,m),S(h,m)):m.isMeshNormalMaterial?s(h,m):m.isLineBasicMaterial?(c(h,m),m.isLineDashedMaterial&&l(h,m)):m.isPointsMaterial?u(h,m,L,P):m.isSpriteMaterial?p(h,m):m.isShadowMaterial?(h.color.value.copy(m.color),h.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(h,m){h.opacity.value=m.opacity,m.color&&h.diffuse.value.copy(m.color),m.emissive&&h.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(h.map.value=m.map,t(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,t(m.alphaMap,h.alphaMapTransform)),m.bumpMap&&(h.bumpMap.value=m.bumpMap,t(m.bumpMap,h.bumpMapTransform),h.bumpScale.value=m.bumpScale,m.side===qn&&(h.bumpScale.value*=-1)),m.normalMap&&(h.normalMap.value=m.normalMap,t(m.normalMap,h.normalMapTransform),h.normalScale.value.copy(m.normalScale),m.side===qn&&h.normalScale.value.negate()),m.displacementMap&&(h.displacementMap.value=m.displacementMap,t(m.displacementMap,h.displacementMapTransform),h.displacementScale.value=m.displacementScale,h.displacementBias.value=m.displacementBias),m.emissiveMap&&(h.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,h.emissiveMapTransform)),m.specularMap&&(h.specularMap.value=m.specularMap,t(m.specularMap,h.specularMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);const L=e.get(m),P=L.envMap,q=L.envMapRotation;P&&(h.envMap.value=P,pa.copy(q),pa.x*=-1,pa.y*=-1,pa.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(pa.y*=-1,pa.z*=-1),h.envMapRotation.value.setFromMatrix4(xg.makeRotationFromEuler(pa)),h.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=m.reflectivity,h.ior.value=m.ior,h.refractionRatio.value=m.refractionRatio),m.lightMap&&(h.lightMap.value=m.lightMap,h.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,h.lightMapTransform)),m.aoMap&&(h.aoMap.value=m.aoMap,h.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,h.aoMapTransform))}function c(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,m.map&&(h.map.value=m.map,t(m.map,h.mapTransform))}function l(h,m){h.dashSize.value=m.dashSize,h.totalSize.value=m.dashSize+m.gapSize,h.scale.value=m.scale}function u(h,m,L,P){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.size.value=m.size*L,h.scale.value=P*.5,m.map&&(h.map.value=m.map,t(m.map,h.uvTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,t(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function p(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.rotation.value=m.rotation,m.map&&(h.map.value=m.map,t(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,t(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function d(h,m){h.specular.value.copy(m.specular),h.shininess.value=Math.max(m.shininess,1e-4)}function v(h,m){m.gradientMap&&(h.gradientMap.value=m.gradientMap)}function f(h,m){h.metalness.value=m.metalness,m.metalnessMap&&(h.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,h.metalnessMapTransform)),h.roughness.value=m.roughness,m.roughnessMap&&(h.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,h.roughnessMapTransform)),m.envMap&&(h.envMapIntensity.value=m.envMapIntensity)}function g(h,m,L){h.ior.value=m.ior,m.sheen>0&&(h.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),h.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(h.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,h.sheenColorMapTransform)),m.sheenRoughnessMap&&(h.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,h.sheenRoughnessMapTransform))),m.clearcoat>0&&(h.clearcoat.value=m.clearcoat,h.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(h.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,h.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(h.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qn&&h.clearcoatNormalScale.value.negate())),m.dispersion>0&&(h.dispersion.value=m.dispersion),m.iridescence>0&&(h.iridescence.value=m.iridescence,h.iridescenceIOR.value=m.iridescenceIOR,h.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(h.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,h.iridescenceMapTransform)),m.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),m.transmission>0&&(h.transmission.value=m.transmission,h.transmissionSamplerMap.value=L.texture,h.transmissionSamplerSize.value.set(L.width,L.height),m.transmissionMap&&(h.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,h.transmissionMapTransform)),h.thickness.value=m.thickness,m.thicknessMap&&(h.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=m.attenuationDistance,h.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(h.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(h.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=m.specularIntensity,h.specularColor.value.copy(m.specularColor),m.specularColorMap&&(h.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,h.specularColorMapTransform)),m.specularIntensityMap&&(h.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,h.specularIntensityMapTransform))}function T(h,m){m.matcap&&(h.matcap.value=m.matcap)}function S(h,m){const L=e.get(m).light;h.referencePosition.value.setFromMatrixPosition(L.matrixWorld),h.nearDistance.value=L.shadow.camera.near,h.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function yg(i,e,t,n){let a={},s={},c=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(L,P){const q=P.program;n.uniformBlockBinding(L,q)}function p(L,P){let q=a[L.id];q===void 0&&(T(L),q=d(L),a[L.id]=q,L.addEventListener("dispose",h));const V=P.program;n.updateUBOMapping(L,V);const I=e.render.frame;s[L.id]!==I&&(f(L),s[L.id]=I)}function d(L){const P=v();L.__bindingPointIndex=P;const q=i.createBuffer(),V=L.__size,I=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,q),i.bufferData(i.UNIFORM_BUFFER,V,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,q),q}function v(){for(let L=0;L<l;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(L){const P=a[L.id],q=L.uniforms,V=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let I=0,H=q.length;I<H;I++){const z=Array.isArray(q[I])?q[I]:[q[I]];for(let w=0,A=z.length;w<A;w++){const B=z[w];if(g(B,I,w,V)===!0){const W=B.__offset,Y=Array.isArray(B.value)?B.value:[B.value];let X=0;for(let te=0;te<Y.length;te++){const se=Y[te],de=S(se);typeof se=="number"||typeof se=="boolean"?(B.__data[0]=se,i.bufferSubData(i.UNIFORM_BUFFER,W+X,B.__data)):se.isMatrix3?(B.__data[0]=se.elements[0],B.__data[1]=se.elements[1],B.__data[2]=se.elements[2],B.__data[3]=0,B.__data[4]=se.elements[3],B.__data[5]=se.elements[4],B.__data[6]=se.elements[5],B.__data[7]=0,B.__data[8]=se.elements[6],B.__data[9]=se.elements[7],B.__data[10]=se.elements[8],B.__data[11]=0):(se.toArray(B.__data,X),X+=de.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(L,P,q,V){const I=L.value,H=P+"_"+q;if(V[H]===void 0)return typeof I=="number"||typeof I=="boolean"?V[H]=I:V[H]=I.clone(),!0;{const z=V[H];if(typeof I=="number"||typeof I=="boolean"){if(z!==I)return V[H]=I,!0}else if(z.equals(I)===!1)return z.copy(I),!0}return!1}function T(L){const P=L.uniforms;let q=0;const V=16;for(let H=0,z=P.length;H<z;H++){const w=Array.isArray(P[H])?P[H]:[P[H]];for(let A=0,B=w.length;A<B;A++){const W=w[A],Y=Array.isArray(W.value)?W.value:[W.value];for(let X=0,te=Y.length;X<te;X++){const se=Y[X],de=S(se),$=q%V,De=$%de.boundary,ie=$+De;q+=De,ie!==0&&V-ie<de.storage&&(q+=V-ie),W.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=q,q+=de.storage}}}const I=q%V;return I>0&&(q+=V-I),L.__size=q,L.__cache={},this}function S(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),P}function h(L){const P=L.target;P.removeEventListener("dispose",h);const q=c.indexOf(P.__bindingPointIndex);c.splice(q,1),i.deleteBuffer(a[P.id]),delete a[P.id],delete s[P.id]}function m(){for(const L in a)i.deleteBuffer(a[L]);c=[],a={},s={}}return{bind:u,update:p,dispose:m}}class Mg{constructor(e={}){const{canvas:t=dp(),context:n=null,depth:a=!0,stencil:s=!1,alpha:c=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:p=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:v=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=c;const g=new Uint32Array(4),T=new Int32Array(4);let S=null,h=null;const m=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ai,this.toneMapping=Hi,this.toneMappingExposure=1;const P=this;let q=!1,V=0,I=0,H=null,z=-1,w=null;const A=new an,B=new an;let W=null;const Y=new Rt(0);let X=0,te=t.width,se=t.height,de=1,$=null,De=null;const ie=new an(0,0,te,se),me=new an(0,0,te,se);let We=!1;const ze=new fl;let J=!1,Ee=!1;const Re=new en,Se=new be,Be=new an,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Te=!1;function it(){return H===null?de:1}let F=n;function Ge(E,ee){return t.getContext(E,ee)}try{const E={alpha:!0,depth:a,stencil:s,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:p,powerPreference:d,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${il}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),F===null){const ee="webgl2";if(F=Ge(ee,E),F===null)throw Ge(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let nt,He,Le,st,Ue,Fe,O,_,R,ne,pe,he,Ve,Ae,Ie,$e,k,_e,et,Z,ve,Xe,Je,ct;function G(){nt=new wm(F),nt.init(),Xe=new pg(F,nt),He=new Mm(F,nt,e,Xe),Le=new cg(F),st=new Lm(F),Ue=new Yv,Fe=new dg(F,nt,Le,Ue,He,Xe,st),O=new Sm(P),_=new Am(P),R=new Fp(F),Je=new bm(F,R),ne=new Pm(F,R,st,Je),pe=new Um(F,ne,R,st),et=new Dm(F,He,Fe),$e=new Cm(Ue),he=new Xv(P,O,_,nt,He,Je,$e),Ve=new bg(P,Ue),Ae=new Kv,Ie=new ig(nt),_e=new xm(P,O,_,Le,pe,f,u),k=new lg(P,pe,He),ct=new yg(F,st,He,Le),Z=new ym(F,nt,st),ve=new Rm(F,nt,st),st.programs=he.programs,P.capabilities=He,P.extensions=nt,P.properties=Ue,P.renderLists=Ae,P.shadowMap=k,P.state=Le,P.info=st}G();const we=new _g(P,F);this.xr=we,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=nt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=nt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(E){E!==void 0&&(de=E,this.setSize(te,se,!1))},this.getSize=function(E){return E.set(te,se)},this.setSize=function(E,ee,ue=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=E,se=ee,t.width=Math.floor(E*de),t.height=Math.floor(ee*de),ue===!0&&(t.style.width=E+"px",t.style.height=ee+"px"),this.setViewport(0,0,E,ee)},this.getDrawingBufferSize=function(E){return E.set(te*de,se*de).floor()},this.setDrawingBufferSize=function(E,ee,ue){te=E,se=ee,de=ue,t.width=Math.floor(E*ue),t.height=Math.floor(ee*ue),this.setViewport(0,0,E,ee)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(ie)},this.setViewport=function(E,ee,ue,le){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,ee,ue,le),Le.viewport(A.copy(ie).multiplyScalar(de).round())},this.getScissor=function(E){return E.copy(me)},this.setScissor=function(E,ee,ue,le){E.isVector4?me.set(E.x,E.y,E.z,E.w):me.set(E,ee,ue,le),Le.scissor(B.copy(me).multiplyScalar(de).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(E){Le.setScissorTest(We=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){De=E},this.getClearColor=function(E){return E.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(E=!0,ee=!0,ue=!0){let le=0;if(E){let ae=!1;if(H!==null){const Oe=H.texture.format;ae=Oe===ul||Oe===cl||Oe===ll}if(ae){const Oe=H.texture.type,ke=Oe===Li||Oe===ya||Oe===Ps||Oe===Ka||Oe===ol||Oe===rl,at=_e.getClearColor(),Qe=_e.getClearAlpha(),j=at.r,N=at.g,ge=at.b;ke?(g[0]=j,g[1]=N,g[2]=ge,g[3]=Qe,F.clearBufferuiv(F.COLOR,0,g)):(T[0]=j,T[1]=N,T[2]=ge,T[3]=Qe,F.clearBufferiv(F.COLOR,0,T))}else le|=F.COLOR_BUFFER_BIT}ee&&(le|=F.DEPTH_BUFFER_BIT),ue&&(le|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),Ae.dispose(),Ie.dispose(),Ue.dispose(),O.dispose(),_.dispose(),pe.dispose(),Je.dispose(),ct.dispose(),he.dispose(),we.dispose(),we.removeEventListener("sessionstart",mt),we.removeEventListener("sessionend",Q),Ne.stop()};function Ce(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const E=st.autoReset,ee=k.enabled,ue=k.autoUpdate,le=k.needsUpdate,ae=k.type;G(),st.autoReset=E,k.enabled=ee,k.autoUpdate=ue,k.needsUpdate=le,k.type=ae}function Pe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ze(E){const ee=E.target;ee.removeEventListener("dispose",Ze),tt(ee)}function tt(E){ot(E),Ue.remove(E)}function ot(E){const ee=Ue.get(E).programs;ee!==void 0&&(ee.forEach(function(ue){he.releaseProgram(ue)}),E.isShaderMaterial&&he.releaseShaderCache(E))}this.renderBufferDirect=function(E,ee,ue,le,ae,Oe){ee===null&&(ee=ce);const ke=ae.isMesh&&ae.matrixWorld.determinant()<0,at=qt(E,ee,ue,le,ae);Le.setMaterial(le,ke);let Qe=ue.index,j=1;if(le.wireframe===!0){if(Qe=ne.getWireframeAttribute(ue),Qe===void 0)return;j=2}const N=ue.drawRange,ge=ue.attributes.position;let ht=N.start*j,Ot=(N.start+N.count)*j;Oe!==null&&(ht=Math.max(ht,Oe.start*j),Ot=Math.min(Ot,(Oe.start+Oe.count)*j)),Qe!==null?(ht=Math.max(ht,0),Ot=Math.min(Ot,Qe.count)):ge!=null&&(ht=Math.max(ht,0),Ot=Math.min(Ot,ge.count));const Pt=Ot-ht;if(Pt<0||Pt===1/0)return;Je.setup(ae,le,at,ue,Qe);let Ht,Ut=Z;if(Qe!==null&&(Ht=R.get(Qe),Ut=ve,Ut.setIndex(Ht)),ae.isMesh)le.wireframe===!0?(Le.setLineWidth(le.wireframeLinewidth*it()),Ut.setMode(F.LINES)):Ut.setMode(F.TRIANGLES);else if(ae.isLine){let lt=le.linewidth;lt===void 0&&(lt=1),Le.setLineWidth(lt*it()),ae.isLineSegments?Ut.setMode(F.LINES):ae.isLineLoop?Ut.setMode(F.LINE_LOOP):Ut.setMode(F.LINE_STRIP)}else ae.isPoints?Ut.setMode(F.POINTS):ae.isSprite&&Ut.setMode(F.TRIANGLES);if(ae.isBatchedMesh)if(ae._multiDrawInstances!==null)Ut.renderMultiDrawInstances(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount,ae._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))Ut.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const lt=ae._multiDrawStarts,Ft=ae._multiDrawCounts,Mt=ae._multiDrawCount,jt=Qe?R.get(Qe).bytesPerElement:1,Vt=Ue.get(le).currentProgram.getUniforms();for(let Jt=0;Jt<Mt;Jt++)Vt.setValue(F,"_gl_DrawID",Jt),Ut.render(lt[Jt]/jt,Ft[Jt])}else if(ae.isInstancedMesh)Ut.renderInstances(ht,Pt,ae.count);else if(ue.isInstancedBufferGeometry){const lt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ft=Math.min(ue.instanceCount,lt);Ut.renderInstances(ht,Pt,Ft)}else Ut.render(ht,Pt)};function ut(E,ee,ue){E.transparent===!0&&E.side===wi&&E.forceSinglePass===!1?(E.side=qn,E.needsUpdate=!0,re(E,ee,ue),E.side=ki,E.needsUpdate=!0,re(E,ee,ue),E.side=wi):re(E,ee,ue)}this.compile=function(E,ee,ue=null){ue===null&&(ue=E),h=Ie.get(ue),h.init(ee),L.push(h),ue.traverseVisible(function(ae){ae.isLight&&ae.layers.test(ee.layers)&&(h.pushLight(ae),ae.castShadow&&h.pushShadow(ae))}),E!==ue&&E.traverseVisible(function(ae){ae.isLight&&ae.layers.test(ee.layers)&&(h.pushLight(ae),ae.castShadow&&h.pushShadow(ae))}),h.setupLights();const le=new Set;return E.traverse(function(ae){const Oe=ae.material;if(Oe)if(Array.isArray(Oe))for(let ke=0;ke<Oe.length;ke++){const at=Oe[ke];ut(at,ue,ae),le.add(at)}else ut(Oe,ue,ae),le.add(Oe)}),L.pop(),h=null,le},this.compileAsync=function(E,ee,ue=null){const le=this.compile(E,ee,ue);return new Promise(ae=>{function Oe(){if(le.forEach(function(ke){Ue.get(ke).currentProgram.isReady()&&le.delete(ke)}),le.size===0){ae(E);return}setTimeout(Oe,10)}nt.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Ke=null;function ft(E){Ke&&Ke(E)}function mt(){Ne.stop()}function Q(){Ne.start()}const Ne=new xu;Ne.setAnimationLoop(ft),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(E){Ke=E,we.setAnimationLoop(E),E===null?Ne.stop():Ne.start()},we.addEventListener("sessionstart",mt),we.addEventListener("sessionend",Q),this.render=function(E,ee){if(ee!==void 0&&ee.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(ee),ee=we.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,ee,H),h=Ie.get(E,L.length),h.init(ee),L.push(h),Re.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),ze.setFromProjectionMatrix(Re),Ee=this.localClippingEnabled,J=$e.init(this.clippingPlanes,Ee),S=Ae.get(E,m.length),S.init(),m.push(S),we.enabled===!0&&we.isPresenting===!0){const Oe=P.xr.getDepthSensingMesh();Oe!==null&&xt(Oe,ee,-1/0,P.sortObjects)}xt(E,ee,0,P.sortObjects),S.finish(),P.sortObjects===!0&&S.sort($,De),Te=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,Te&&_e.addToRenderList(S,E),this.info.render.frame++,J===!0&&$e.beginShadows();const ue=h.state.shadowsArray;k.render(ue,E,ee),J===!0&&$e.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=S.opaque,ae=S.transmissive;if(h.setupLights(),ee.isArrayCamera){const Oe=ee.cameras;if(ae.length>0)for(let ke=0,at=Oe.length;ke<at;ke++){const Qe=Oe[ke];qe(le,ae,E,Qe)}Te&&_e.render(E);for(let ke=0,at=Oe.length;ke<at;ke++){const Qe=Oe[ke];fe(S,E,Qe,Qe.viewport)}}else ae.length>0&&qe(le,ae,E,ee),Te&&_e.render(E),fe(S,E,ee);H!==null&&(Fe.updateMultisampleRenderTarget(H),Fe.updateRenderTargetMipmap(H)),E.isScene===!0&&E.onAfterRender(P,E,ee),Je.resetDefaultState(),z=-1,w=null,L.pop(),L.length>0?(h=L[L.length-1],J===!0&&$e.setGlobalState(P.clippingPlanes,h.state.camera)):h=null,m.pop(),m.length>0?S=m[m.length-1]:S=null};function xt(E,ee,ue,le){if(E.visible===!1)return;if(E.layers.test(ee.layers)){if(E.isGroup)ue=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(ee);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ze.intersectsSprite(E)){le&&Be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Re);const ke=pe.update(E),at=E.material;at.visible&&S.push(E,ke,at,ue,Be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ze.intersectsObject(E))){const ke=pe.update(E),at=E.material;if(le&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Be.copy(E.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),Be.copy(ke.boundingSphere.center)),Be.applyMatrix4(E.matrixWorld).applyMatrix4(Re)),Array.isArray(at)){const Qe=ke.groups;for(let j=0,N=Qe.length;j<N;j++){const ge=Qe[j],ht=at[ge.materialIndex];ht&&ht.visible&&S.push(E,ke,ht,ue,Be.z,ge)}}else at.visible&&S.push(E,ke,at,ue,Be.z,null)}}const Oe=E.children;for(let ke=0,at=Oe.length;ke<at;ke++)xt(Oe[ke],ee,ue,le)}function fe(E,ee,ue,le){const ae=E.opaque,Oe=E.transmissive,ke=E.transparent;h.setupLightsView(ue),J===!0&&$e.setGlobalState(P.clippingPlanes,ue),le&&Le.viewport(A.copy(le)),ae.length>0&&Lt(ae,ee,ue),Oe.length>0&&Lt(Oe,ee,ue),ke.length>0&&Lt(ke,ee,ue),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function qe(E,ee,ue,le){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[le.id]===void 0&&(h.state.transmissionRenderTarget[le.id]=new Ma(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?Ls:Li,minFilter:xa,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace}));const Oe=h.state.transmissionRenderTarget[le.id],ke=le.viewport||A;Oe.setSize(ke.z,ke.w);const at=P.getRenderTarget();P.setRenderTarget(Oe),P.getClearColor(Y),X=P.getClearAlpha(),X<1&&P.setClearColor(16777215,.5),P.clear(),Te&&_e.render(ue);const Qe=P.toneMapping;P.toneMapping=Hi;const j=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),h.setupLightsView(le),J===!0&&$e.setGlobalState(P.clippingPlanes,le),Lt(E,ue,le),Fe.updateMultisampleRenderTarget(Oe),Fe.updateRenderTargetMipmap(Oe),nt.has("WEBGL_multisampled_render_to_texture")===!1){let N=!1;for(let ge=0,ht=ee.length;ge<ht;ge++){const Ot=ee[ge],Pt=Ot.object,Ht=Ot.geometry,Ut=Ot.material,lt=Ot.group;if(Ut.side===wi&&Pt.layers.test(le.layers)){const Ft=Ut.side;Ut.side=qn,Ut.needsUpdate=!0,bt(Pt,ue,le,Ht,Ut,lt),Ut.side=Ft,Ut.needsUpdate=!0,N=!0}}N===!0&&(Fe.updateMultisampleRenderTarget(Oe),Fe.updateRenderTargetMipmap(Oe))}P.setRenderTarget(at),P.setClearColor(Y,X),j!==void 0&&(le.viewport=j),P.toneMapping=Qe}function Lt(E,ee,ue){const le=ee.isScene===!0?ee.overrideMaterial:null;for(let ae=0,Oe=E.length;ae<Oe;ae++){const ke=E[ae],at=ke.object,Qe=ke.geometry,j=le===null?ke.material:le,N=ke.group;at.layers.test(ue.layers)&&bt(at,ee,ue,Qe,j,N)}}function bt(E,ee,ue,le,ae,Oe){E.onBeforeRender(P,ee,ue,le,ae,Oe),E.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),ae.onBeforeRender(P,ee,ue,le,E,Oe),ae.transparent===!0&&ae.side===wi&&ae.forceSinglePass===!1?(ae.side=qn,ae.needsUpdate=!0,P.renderBufferDirect(ue,ee,le,ae,E,Oe),ae.side=ki,ae.needsUpdate=!0,P.renderBufferDirect(ue,ee,le,ae,E,Oe),ae.side=wi):P.renderBufferDirect(ue,ee,le,ae,E,Oe),E.onAfterRender(P,ee,ue,le,ae,Oe)}function re(E,ee,ue){ee.isScene!==!0&&(ee=ce);const le=Ue.get(E),ae=h.state.lights,Oe=h.state.shadowsArray,ke=ae.state.version,at=he.getParameters(E,ae.state,Oe,ee,ue),Qe=he.getProgramCacheKey(at);let j=le.programs;le.environment=E.isMeshStandardMaterial?ee.environment:null,le.fog=ee.fog,le.envMap=(E.isMeshStandardMaterial?_:O).get(E.envMap||le.environment),le.envMapRotation=le.environment!==null&&E.envMap===null?ee.environmentRotation:E.envMapRotation,j===void 0&&(E.addEventListener("dispose",Ze),j=new Map,le.programs=j);let N=j.get(Qe);if(N!==void 0){if(le.currentProgram===N&&le.lightsStateVersion===ke)return Dt(E,at),N}else at.uniforms=he.getUniforms(E),E.onBeforeCompile(at,P),N=he.acquireProgram(at,Qe),j.set(Qe,N),le.uniforms=at.uniforms;const ge=le.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ge.clippingPlanes=$e.uniform),Dt(E,at),le.needsLights=oe(E),le.lightsStateVersion=ke,le.needsLights&&(ge.ambientLightColor.value=ae.state.ambient,ge.lightProbe.value=ae.state.probe,ge.directionalLights.value=ae.state.directional,ge.directionalLightShadows.value=ae.state.directionalShadow,ge.spotLights.value=ae.state.spot,ge.spotLightShadows.value=ae.state.spotShadow,ge.rectAreaLights.value=ae.state.rectArea,ge.ltc_1.value=ae.state.rectAreaLTC1,ge.ltc_2.value=ae.state.rectAreaLTC2,ge.pointLights.value=ae.state.point,ge.pointLightShadows.value=ae.state.pointShadow,ge.hemisphereLights.value=ae.state.hemi,ge.directionalShadowMap.value=ae.state.directionalShadowMap,ge.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,ge.spotShadowMap.value=ae.state.spotShadowMap,ge.spotLightMatrix.value=ae.state.spotLightMatrix,ge.spotLightMap.value=ae.state.spotLightMap,ge.pointShadowMap.value=ae.state.pointShadowMap,ge.pointShadowMatrix.value=ae.state.pointShadowMatrix),le.currentProgram=N,le.uniformsList=null,N}function Ye(E){if(E.uniformsList===null){const ee=E.currentProgram.getUniforms();E.uniformsList=To.seqWithValue(ee.seq,E.uniforms)}return E.uniformsList}function Dt(E,ee){const ue=Ue.get(E);ue.outputColorSpace=ee.outputColorSpace,ue.batching=ee.batching,ue.batchingColor=ee.batchingColor,ue.instancing=ee.instancing,ue.instancingColor=ee.instancingColor,ue.instancingMorph=ee.instancingMorph,ue.skinning=ee.skinning,ue.morphTargets=ee.morphTargets,ue.morphNormals=ee.morphNormals,ue.morphColors=ee.morphColors,ue.morphTargetsCount=ee.morphTargetsCount,ue.numClippingPlanes=ee.numClippingPlanes,ue.numIntersection=ee.numClipIntersection,ue.vertexAlphas=ee.vertexAlphas,ue.vertexTangents=ee.vertexTangents,ue.toneMapping=ee.toneMapping}function qt(E,ee,ue,le,ae){ee.isScene!==!0&&(ee=ce),Fe.resetTextureUnits();const Oe=ee.fog,ke=le.isMeshStandardMaterial?ee.environment:null,at=H===null?P.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Gi,Qe=(le.isMeshStandardMaterial?_:O).get(le.envMap||ke),j=le.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,N=!!ue.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),ge=!!ue.morphAttributes.position,ht=!!ue.morphAttributes.normal,Ot=!!ue.morphAttributes.color;let Pt=Hi;le.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Pt=P.toneMapping);const Ht=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Ut=Ht!==void 0?Ht.length:0,lt=Ue.get(le),Ft=h.state.lights;if(J===!0&&(Ee===!0||E!==w)){const zt=E===w&&le.id===z;$e.setState(le,E,zt)}let Mt=!1;le.version===lt.__version?(lt.needsLights&&lt.lightsStateVersion!==Ft.state.version||lt.outputColorSpace!==at||ae.isBatchedMesh&&lt.batching===!1||!ae.isBatchedMesh&&lt.batching===!0||ae.isBatchedMesh&&lt.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&lt.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&lt.instancing===!1||!ae.isInstancedMesh&&lt.instancing===!0||ae.isSkinnedMesh&&lt.skinning===!1||!ae.isSkinnedMesh&&lt.skinning===!0||ae.isInstancedMesh&&lt.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&lt.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&lt.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&lt.instancingMorph===!1&&ae.morphTexture!==null||lt.envMap!==Qe||le.fog===!0&&lt.fog!==Oe||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==$e.numPlanes||lt.numIntersection!==$e.numIntersection)||lt.vertexAlphas!==j||lt.vertexTangents!==N||lt.morphTargets!==ge||lt.morphNormals!==ht||lt.morphColors!==Ot||lt.toneMapping!==Pt||lt.morphTargetsCount!==Ut)&&(Mt=!0):(Mt=!0,lt.__version=le.version);let jt=lt.currentProgram;Mt===!0&&(jt=re(le,ee,ae));let Vt=!1,Jt=!1,ln=!1;const At=jt.getUniforms(),pn=lt.uniforms;if(Le.useProgram(jt.program)&&(Vt=!0,Jt=!0,ln=!0),le.id!==z&&(z=le.id,Jt=!0),Vt||w!==E){At.setValue(F,"projectionMatrix",E.projectionMatrix),At.setValue(F,"viewMatrix",E.matrixWorldInverse);const zt=At.map.cameraPosition;zt!==void 0&&zt.setValue(F,Se.setFromMatrixPosition(E.matrixWorld)),He.logarithmicDepthBuffer&&At.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&At.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,Jt=!0,ln=!0)}if(ae.isSkinnedMesh){At.setOptional(F,ae,"bindMatrix"),At.setOptional(F,ae,"bindMatrixInverse");const zt=ae.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),At.setValue(F,"boneTexture",zt.boneTexture,Fe))}ae.isBatchedMesh&&(At.setOptional(F,ae,"batchingTexture"),At.setValue(F,"batchingTexture",ae._matricesTexture,Fe),At.setOptional(F,ae,"batchingIdTexture"),At.setValue(F,"batchingIdTexture",ae._indirectTexture,Fe),At.setOptional(F,ae,"batchingColorTexture"),ae._colorsTexture!==null&&At.setValue(F,"batchingColorTexture",ae._colorsTexture,Fe));const cn=ue.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&et.update(ae,ue,jt),(Jt||lt.receiveShadow!==ae.receiveShadow)&&(lt.receiveShadow=ae.receiveShadow,At.setValue(F,"receiveShadow",ae.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(pn.envMap.value=Qe,pn.flipEnvMap.value=Qe.isCubeTexture&&Qe.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&ee.environment!==null&&(pn.envMapIntensity.value=ee.environmentIntensity),Jt&&(At.setValue(F,"toneMappingExposure",P.toneMappingExposure),lt.needsLights&&Kt(pn,ln),Oe&&le.fog===!0&&Ve.refreshFogUniforms(pn,Oe),Ve.refreshMaterialUniforms(pn,le,de,se,h.state.transmissionRenderTarget[E.id]),To.upload(F,Ye(lt),pn,Fe)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(To.upload(F,Ye(lt),pn,Fe),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&At.setValue(F,"center",ae.center),At.setValue(F,"modelViewMatrix",ae.modelViewMatrix),At.setValue(F,"normalMatrix",ae.normalMatrix),At.setValue(F,"modelMatrix",ae.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const zt=le.uniformsGroups;for(let Hn=0,fn=zt.length;Hn<fn;Hn++){const Wt=zt[Hn];ct.update(Wt,jt),ct.bind(Wt,jt)}}return jt}function Kt(E,ee){E.ambientLightColor.needsUpdate=ee,E.lightProbe.needsUpdate=ee,E.directionalLights.needsUpdate=ee,E.directionalLightShadows.needsUpdate=ee,E.pointLights.needsUpdate=ee,E.pointLightShadows.needsUpdate=ee,E.spotLights.needsUpdate=ee,E.spotLightShadows.needsUpdate=ee,E.rectAreaLights.needsUpdate=ee,E.hemisphereLights.needsUpdate=ee}function oe(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(E,ee,ue){Ue.get(E.texture).__webglTexture=ee,Ue.get(E.depthTexture).__webglTexture=ue;const le=Ue.get(E);le.__hasExternalTextures=!0,le.__autoAllocateDepthBuffer=ue===void 0,le.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,ee){const ue=Ue.get(E);ue.__webglFramebuffer=ee,ue.__useDefaultFramebuffer=ee===void 0},this.setRenderTarget=function(E,ee=0,ue=0){H=E,V=ee,I=ue;let le=!0,ae=null,Oe=!1,ke=!1;if(E){const Qe=Ue.get(E);if(Qe.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(F.FRAMEBUFFER,null),le=!1;else if(Qe.__webglFramebuffer===void 0)Fe.setupRenderTarget(E);else if(Qe.__hasExternalTextures)Fe.rebindTextures(E,Ue.get(E.texture).__webglTexture,Ue.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ge=E.depthTexture;if(Qe.__boundDepthTexture!==ge){if(ge!==null&&Ue.has(ge)&&(E.width!==ge.image.width||E.height!==ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(E)}}const j=E.texture;(j.isData3DTexture||j.isDataArrayTexture||j.isCompressedArrayTexture)&&(ke=!0);const N=Ue.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(N[ee])?ae=N[ee][ue]:ae=N[ee],Oe=!0):E.samples>0&&Fe.useMultisampledRTT(E)===!1?ae=Ue.get(E).__webglMultisampledFramebuffer:Array.isArray(N)?ae=N[ue]:ae=N,A.copy(E.viewport),B.copy(E.scissor),W=E.scissorTest}else A.copy(ie).multiplyScalar(de).floor(),B.copy(me).multiplyScalar(de).floor(),W=We;if(Le.bindFramebuffer(F.FRAMEBUFFER,ae)&&le&&Le.drawBuffers(E,ae),Le.viewport(A),Le.scissor(B),Le.setScissorTest(W),Oe){const Qe=Ue.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Qe.__webglTexture,ue)}else if(ke){const Qe=Ue.get(E.texture),j=ee||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Qe.__webglTexture,ue||0,j)}z=-1},this.readRenderTargetPixels=function(E,ee,ue,le,ae,Oe,ke){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let at=Ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ke!==void 0&&(at=at[ke]),at){Le.bindFramebuffer(F.FRAMEBUFFER,at);try{const Qe=E.texture,j=Qe.format,N=Qe.type;if(!He.textureFormatReadable(j)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(N)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=E.width-le&&ue>=0&&ue<=E.height-ae&&F.readPixels(ee,ue,le,ae,Xe.convert(j),Xe.convert(N),Oe)}finally{const Qe=H!==null?Ue.get(H).__webglFramebuffer:null;Le.bindFramebuffer(F.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(E,ee,ue,le,ae,Oe,ke){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let at=Ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ke!==void 0&&(at=at[ke]),at){Le.bindFramebuffer(F.FRAMEBUFFER,at);try{const Qe=E.texture,j=Qe.format,N=Qe.type;if(!He.textureFormatReadable(j))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(N))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ee>=0&&ee<=E.width-le&&ue>=0&&ue<=E.height-ae){const ge=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ge),F.bufferData(F.PIXEL_PACK_BUFFER,Oe.byteLength,F.STREAM_READ),F.readPixels(ee,ue,le,ae,Xe.convert(j),Xe.convert(N),0),F.flush();const ht=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);await pp(F,ht,4);try{F.bindBuffer(F.PIXEL_PACK_BUFFER,ge),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Oe)}finally{F.deleteBuffer(ge),F.deleteSync(ht)}return Oe}}finally{const Qe=H!==null?Ue.get(H).__webglFramebuffer:null;Le.bindFramebuffer(F.FRAMEBUFFER,Qe)}}},this.copyFramebufferToTexture=function(E,ee=null,ue=0){E.isTexture!==!0&&(ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ee=arguments[0]||null,E=arguments[1]);const le=Math.pow(2,-ue),ae=Math.floor(E.image.width*le),Oe=Math.floor(E.image.height*le),ke=ee!==null?ee.x:0,at=ee!==null?ee.y:0;Fe.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,ue,0,0,ke,at,ae,Oe),Le.unbindTexture()},this.copyTextureToTexture=function(E,ee,ue=null,le=null,ae=0){E.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture function signature has changed."),le=arguments[0]||null,E=arguments[1],ee=arguments[2],ae=arguments[3]||0,ue=null);let Oe,ke,at,Qe,j,N;ue!==null?(Oe=ue.max.x-ue.min.x,ke=ue.max.y-ue.min.y,at=ue.min.x,Qe=ue.min.y):(Oe=E.image.width,ke=E.image.height,at=0,Qe=0),le!==null?(j=le.x,N=le.y):(j=0,N=0);const ge=Xe.convert(ee.format),ht=Xe.convert(ee.type);Fe.setTexture2D(ee,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,ee.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,ee.unpackAlignment);const Ot=F.getParameter(F.UNPACK_ROW_LENGTH),Pt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ht=F.getParameter(F.UNPACK_SKIP_PIXELS),Ut=F.getParameter(F.UNPACK_SKIP_ROWS),lt=F.getParameter(F.UNPACK_SKIP_IMAGES),Ft=E.isCompressedTexture?E.mipmaps[ae]:E.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Ft.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ft.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,at),F.pixelStorei(F.UNPACK_SKIP_ROWS,Qe),E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ae,j,N,Oe,ke,ge,ht,Ft.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ae,j,N,Ft.width,Ft.height,ge,Ft.data):F.texSubImage2D(F.TEXTURE_2D,ae,j,N,Oe,ke,ge,ht,Ft),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ot),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ht),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ut),F.pixelStorei(F.UNPACK_SKIP_IMAGES,lt),ae===0&&ee.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(E,ee,ue=null,le=null,ae=0){E.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ue=arguments[0]||null,le=arguments[1]||null,E=arguments[2],ee=arguments[3],ae=arguments[4]||0);let Oe,ke,at,Qe,j,N,ge,ht,Ot;const Pt=E.isCompressedTexture?E.mipmaps[ae]:E.image;ue!==null?(Oe=ue.max.x-ue.min.x,ke=ue.max.y-ue.min.y,at=ue.max.z-ue.min.z,Qe=ue.min.x,j=ue.min.y,N=ue.min.z):(Oe=Pt.width,ke=Pt.height,at=Pt.depth,Qe=0,j=0,N=0),le!==null?(ge=le.x,ht=le.y,Ot=le.z):(ge=0,ht=0,Ot=0);const Ht=Xe.convert(ee.format),Ut=Xe.convert(ee.type);let lt;if(ee.isData3DTexture)Fe.setTexture3D(ee,0),lt=F.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)Fe.setTexture2DArray(ee,0),lt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,ee.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,ee.unpackAlignment);const Ft=F.getParameter(F.UNPACK_ROW_LENGTH),Mt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),jt=F.getParameter(F.UNPACK_SKIP_PIXELS),Vt=F.getParameter(F.UNPACK_SKIP_ROWS),Jt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Pt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Qe),F.pixelStorei(F.UNPACK_SKIP_ROWS,j),F.pixelStorei(F.UNPACK_SKIP_IMAGES,N),E.isDataTexture||E.isData3DTexture?F.texSubImage3D(lt,ae,ge,ht,Ot,Oe,ke,at,Ht,Ut,Pt.data):ee.isCompressedArrayTexture?F.compressedTexSubImage3D(lt,ae,ge,ht,Ot,Oe,ke,at,Ht,Pt.data):F.texSubImage3D(lt,ae,ge,ht,Ot,Oe,ke,at,Ht,Ut,Pt),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ft),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Mt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,jt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Vt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Jt),ae===0&&ee.generateMipmaps&&F.generateMipmap(lt),Le.unbindTexture()},this.initRenderTarget=function(E){Ue.get(E).__webglFramebuffer===void 0&&Fe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Fe.setTextureCube(E,0):E.isData3DTexture?Fe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Fe.setTexture2DArray(E,0):Fe.setTexture2D(E,0),Le.unbindTexture()},this.resetState=function(){V=0,I=0,H=null,Le.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===dl?"display-p3":"srgb",t.unpackColorSpace=Gt.workingColorSpace===Oo?"display-p3":"srgb"}}class Cg extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ko extends ts{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const No=new be,qo=new be,Nc=new en,Es=new du,go=new zo,_r=new be,qc=new be;class tl extends sn{constructor(e=new Bn,t=new ko){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let a=1,s=t.count;a<s;a++)No.fromBufferAttribute(t,a-1),qo.fromBufferAttribute(t,a),n[a]=n[a-1],n[a]+=No.distanceTo(qo);e.setAttribute("lineDistance",new dn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(a),go.radius+=s,e.ray.intersectsSphere(go)===!1)return;Nc.copy(a).invert(),Es.copy(e.ray).applyMatrix4(Nc);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,p=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const g=Math.max(0,c.start),T=Math.min(d.count,c.start+c.count);for(let S=g,h=T-1;S<h;S+=p){const m=d.getX(S),L=d.getX(S+1),P=_o(this,e,Es,u,m,L);P&&t.push(P)}if(this.isLineLoop){const S=d.getX(T-1),h=d.getX(g),m=_o(this,e,Es,u,S,h);m&&t.push(m)}}else{const g=Math.max(0,c.start),T=Math.min(f.count,c.start+c.count);for(let S=g,h=T-1;S<h;S+=p){const m=_o(this,e,Es,u,S,S+1);m&&t.push(m)}if(this.isLineLoop){const S=_o(this,e,Es,u,T-1,g);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=a.length;s<c;s++){const l=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function _o(i,e,t,n,a,s){const c=i.geometry.attributes.position;if(No.fromBufferAttribute(c,a),qo.fromBufferAttribute(c,s),t.distanceSqToSegment(No,qo,_r,qc)>n)return;_r.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(_r);if(!(u<e.near||u>e.far))return{distance:u,point:qc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,object:i}}const Fc=new be,Oc=new be;class Tu extends tl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let a=0,s=t.count;a<s;a+=2)Fc.fromBufferAttribute(t,a),Oc.fromBufferAttribute(t,a+1),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+Fc.distanceTo(Oc);e.setAttribute("lineDistance",new dn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ml extends Bn{constructor(e=1,t=1,n=1,a=32,s=1,c=!1,l=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:a,heightSegments:s,openEnded:c,thetaStart:l,thetaLength:u};const p=this;a=Math.floor(a),s=Math.floor(s);const d=[],v=[],f=[],g=[];let T=0;const S=[],h=n/2;let m=0;L(),c===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(d),this.setAttribute("position",new dn(v,3)),this.setAttribute("normal",new dn(f,3)),this.setAttribute("uv",new dn(g,2));function L(){const q=new be,V=new be;let I=0;const H=(t-e)/n;for(let z=0;z<=s;z++){const w=[],A=z/s,B=A*(t-e)+e;for(let W=0;W<=a;W++){const Y=W/a,X=Y*u+l,te=Math.sin(X),se=Math.cos(X);V.x=B*te,V.y=-A*n+h,V.z=B*se,v.push(V.x,V.y,V.z),q.set(te,H,se).normalize(),f.push(q.x,q.y,q.z),g.push(Y,1-A),w.push(T++)}S.push(w)}for(let z=0;z<a;z++)for(let w=0;w<s;w++){const A=S[w][z],B=S[w+1][z],W=S[w+1][z+1],Y=S[w][z+1];d.push(A,B,Y),d.push(B,W,Y),I+=6}p.addGroup(m,I,0),m+=I}function P(q){const V=T,I=new Bt,H=new be;let z=0;const w=q===!0?e:t,A=q===!0?1:-1;for(let W=1;W<=a;W++)v.push(0,h*A,0),f.push(0,A,0),g.push(.5,.5),T++;const B=T;for(let W=0;W<=a;W++){const X=W/a*u+l,te=Math.cos(X),se=Math.sin(X);H.x=w*se,H.y=h*A,H.z=w*te,v.push(H.x,H.y,H.z),f.push(0,A,0),I.x=te*.5+.5,I.y=se*.5*A+.5,g.push(I.x,I.y),T++}for(let W=0;W<a;W++){const Y=V+W,X=B+W;q===!0?d.push(X,X+1,Y):d.push(X+1,X,Y),z+=3}p.addGroup(m,z,q===!0?1:2),m+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zc extends ts{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Rt(16777215),this.specular=new Rt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ou,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Au extends sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const xr=new en,Bc=new be,Hc=new be;class Sg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fl,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Bc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bc),Hc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hc),t.updateMatrixWorld(),xr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Eg extends Sg{constructor(){super(new bu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tg extends Au{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new Eg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ag extends Au{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class wg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=kc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=kc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function kc(){return(typeof performance>"u"?Date:performance).now()}class Pg extends Tu{constructor(e=10,t=10,n=4473924,a=8947848){n=new Rt(n),a=new Rt(a);const s=t/2,c=e/t,l=e/2,u=[],p=[];for(let f=0,g=0,T=-l;f<=t;f++,T+=c){u.push(-l,0,T,l,0,T),u.push(T,0,-l,T,0,l);const S=f===s?n:a;S.toArray(p,g),g+=3,S.toArray(p,g),g+=3,S.toArray(p,g),g+=3,S.toArray(p,g),g+=3}const d=new Bn;d.setAttribute("position",new dn(u,3)),d.setAttribute("color",new dn(p,3));const v=new ko({vertexColors:!0,toneMapped:!1});super(d,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Vc=new be,xo=new be,Gc=new be;class Rg extends sn{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let a=new Bn;a.setAttribute("position",new dn([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new ko({fog:!1,toneMapped:!1});this.lightPlane=new tl(a,s),this.add(this.lightPlane),a=new Bn,a.setAttribute("position",new dn([0,0,0,0,0,1],3)),this.targetLine=new tl(a,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Vc.setFromMatrixPosition(this.light.matrixWorld),xo.setFromMatrixPosition(this.light.target.matrixWorld),Gc.subVectors(xo,Vc),this.lightPlane.lookAt(xo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(xo),this.targetLine.scale.z=Gc.length()}}const bo=new be,Qt=new pl;class Lg extends Tu{constructor(e){const t=new Bn,n=new ko({color:16777215,vertexColors:!0,toneMapped:!1}),a=[],s=[],c={};l("n1","n2"),l("n2","n4"),l("n4","n3"),l("n3","n1"),l("f1","f2"),l("f2","f4"),l("f4","f3"),l("f3","f1"),l("n1","f1"),l("n2","f2"),l("n3","f3"),l("n4","f4"),l("p","n1"),l("p","n2"),l("p","n3"),l("p","n4"),l("u1","u2"),l("u2","u3"),l("u3","u1"),l("c","t"),l("p","c"),l("cn1","cn2"),l("cn3","cn4"),l("cf1","cf2"),l("cf3","cf4");function l(T,S){u(T),u(S)}function u(T){a.push(0,0,0),s.push(0,0,0),c[T]===void 0&&(c[T]=[]),c[T].push(a.length/3-1)}t.setAttribute("position",new dn(a,3)),t.setAttribute("color",new dn(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=c,this.update();const p=new Rt(16755200),d=new Rt(16711680),v=new Rt(43775),f=new Rt(16777215),g=new Rt(3355443);this.setColors(p,d,v,f,g)}setColors(e,t,n,a,s){const l=this.geometry.getAttribute("color");l.setXYZ(0,e.r,e.g,e.b),l.setXYZ(1,e.r,e.g,e.b),l.setXYZ(2,e.r,e.g,e.b),l.setXYZ(3,e.r,e.g,e.b),l.setXYZ(4,e.r,e.g,e.b),l.setXYZ(5,e.r,e.g,e.b),l.setXYZ(6,e.r,e.g,e.b),l.setXYZ(7,e.r,e.g,e.b),l.setXYZ(8,e.r,e.g,e.b),l.setXYZ(9,e.r,e.g,e.b),l.setXYZ(10,e.r,e.g,e.b),l.setXYZ(11,e.r,e.g,e.b),l.setXYZ(12,e.r,e.g,e.b),l.setXYZ(13,e.r,e.g,e.b),l.setXYZ(14,e.r,e.g,e.b),l.setXYZ(15,e.r,e.g,e.b),l.setXYZ(16,e.r,e.g,e.b),l.setXYZ(17,e.r,e.g,e.b),l.setXYZ(18,e.r,e.g,e.b),l.setXYZ(19,e.r,e.g,e.b),l.setXYZ(20,e.r,e.g,e.b),l.setXYZ(21,e.r,e.g,e.b),l.setXYZ(22,e.r,e.g,e.b),l.setXYZ(23,e.r,e.g,e.b),l.setXYZ(24,t.r,t.g,t.b),l.setXYZ(25,t.r,t.g,t.b),l.setXYZ(26,t.r,t.g,t.b),l.setXYZ(27,t.r,t.g,t.b),l.setXYZ(28,t.r,t.g,t.b),l.setXYZ(29,t.r,t.g,t.b),l.setXYZ(30,t.r,t.g,t.b),l.setXYZ(31,t.r,t.g,t.b),l.setXYZ(32,n.r,n.g,n.b),l.setXYZ(33,n.r,n.g,n.b),l.setXYZ(34,n.r,n.g,n.b),l.setXYZ(35,n.r,n.g,n.b),l.setXYZ(36,n.r,n.g,n.b),l.setXYZ(37,n.r,n.g,n.b),l.setXYZ(38,a.r,a.g,a.b),l.setXYZ(39,a.r,a.g,a.b),l.setXYZ(40,s.r,s.g,s.b),l.setXYZ(41,s.r,s.g,s.b),l.setXYZ(42,s.r,s.g,s.b),l.setXYZ(43,s.r,s.g,s.b),l.setXYZ(44,s.r,s.g,s.b),l.setXYZ(45,s.r,s.g,s.b),l.setXYZ(46,s.r,s.g,s.b),l.setXYZ(47,s.r,s.g,s.b),l.setXYZ(48,s.r,s.g,s.b),l.setXYZ(49,s.r,s.g,s.b),l.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,a=1;Qt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),tn("c",t,e,Qt,0,0,-1),tn("t",t,e,Qt,0,0,1),tn("n1",t,e,Qt,-n,-a,-1),tn("n2",t,e,Qt,n,-a,-1),tn("n3",t,e,Qt,-n,a,-1),tn("n4",t,e,Qt,n,a,-1),tn("f1",t,e,Qt,-n,-a,1),tn("f2",t,e,Qt,n,-a,1),tn("f3",t,e,Qt,-n,a,1),tn("f4",t,e,Qt,n,a,1),tn("u1",t,e,Qt,n*.7,a*1.1,-1),tn("u2",t,e,Qt,-n*.7,a*1.1,-1),tn("u3",t,e,Qt,0,a*2,-1),tn("cf1",t,e,Qt,-n,0,1),tn("cf2",t,e,Qt,n,0,1),tn("cf3",t,e,Qt,0,-a,1),tn("cf4",t,e,Qt,0,a,1),tn("cn1",t,e,Qt,-n,0,-1),tn("cn2",t,e,Qt,n,0,-1),tn("cn3",t,e,Qt,0,-a,-1),tn("cn4",t,e,Qt,0,a,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function tn(i,e,t,n,a,s,c){bo.set(a,s,c).unproject(n);const l=e[i];if(l!==void 0){const u=t.getAttribute("position");for(let p=0,d=l.length;p<d;p++)u.setXYZ(l[p],bo.x,bo.y,bo.z)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=il);class Dg{constructor(e,t,n){Rn(this,"camera");Rn(this,"canvas");Rn(this,"pivot");this.camera=e,this.pivot=t,this.canvas=n,e.translateZ(30),t.rotateX(-Math.PI/8),window.addEventListener("resize",()=>this.onResize()),this.onResize()}update(e){this.pivot.rotateOnWorldAxis(new be(0,1,0),e/20)}onResize(){const e=this.canvas.getBoundingClientRect();this.camera.aspect=e.width/e.height,this.camera.updateProjectionMatrix()}}class Ug extends Tg{constructor(t,n){super(t,n);Rn(this,"freeRotationTarget");this.freeRotationTarget=new sn,this.freeRotationTarget.position.set(0,-1,0),this.add(this.freeRotationTarget),this.target=this.freeRotationTarget}restoreFreeRotation(){this.target=this.freeRotationTarget}}let fa;class Vo{constructor(){Rn(this,"canvas");Rn(this,"scene");Rn(this,"renderer");Rn(this,"cameraControl");Rn(this,"sun");Rn(this,"clock");Rn(this,"hideables",[]);Rn(this,"rafId",-1);Rn(this,"accDelta",0);Rn(this,"resizeListenerRef");this.scene=new Cg,this.canvas=document.querySelector("#free-light-example-canvas"),this.renderer=new Mg({canvas:this.canvas,powerPreference:"high-performance",antialias:!0,alpha:!0}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=2;const e=new Gn,t=new As;t.add(e),this.cameraControl=new Dg(e,t,this.canvas),this.scene.add(t),this.sun=new Ug("#ffffff",2),this.sun.position.setY(9),this.sun.castShadow=!0,this.sun.shadow.camera.left=-8,this.sun.shadow.camera.top=8,this.sun.shadow.camera.right=8,this.sun.shadow.camera.bottom=-8,this.sun.shadow.camera.far=18,this.sun.shadow.bias=1e-4,this.sun.shadow.intensity=.8,this.sun.shadow.mapSize.width=512,this.sun.shadow.mapSize.height=512;const n=new Lg(this.sun.shadow.camera),a=new Rg(this.sun);this.scene.add(n),this.scene.add(a),this.scene.add(this.sun);const s=new Ag("#ffffff",.2);this.scene.add(s);const c=new zc({color:new Rt("#444444")}),l=new zc({color:new Rt("#fd855d")}),u=new $n(new Ca(20,1,20),c);u.receiveShadow=!0,u.castShadow=!0;const p=new $n(new Ca(2,2,2),l);p.receiveShadow=!0,p.castShadow=!0,p.position.setY(5.5),this.scene.add(p);const d=new $n(new ml(3,1.5,4,24),l);d.castShadow=!0,d.receiveShadow=!0,d.position.setY(2.5),this.scene.add(d);const v=new Pg(30,30,"#ffb399","#fd855d");v.material.opacity=.2,v.material.transparent=!0,v.position.setY(.51),this.scene.add(v),this.scene.add(u),this.clock=new wg,this.onResize(),this.initListeners(),this.hideables=[v,n,a]}static isInitialized(){return fa!==void 0}static dispose(){fa&&fa.dispose()}static getInstance(){return fa||(fa=new Vo),fa}onResize(){const e=this.canvas.getBoundingClientRect();this.renderer.setSize(e.width,e.height)}renderLoop(){this.rafId=requestAnimationFrame(this.renderLoop.bind(this));const e=Math.min(120,this.clock.getDelta());this.render(e)}startRenderLoop(){this.renderLoop()}stopRenderLoop(){this.clock.stop(),cancelAnimationFrame(this.rafId)}render(e=33){this.accDelta+=e,this.accDelta>Math.PI*4&&(this.accDelta-=Math.PI*4,console.log("rendering")),this.sun.rotation.set(Math.sin(this.accDelta),0,Math.cos(this.accDelta/2)),this.cameraControl.update(e),this.renderer.render(this.scene,this.cameraControl.camera)}initListeners(){this.resizeListenerRef=this.onResize.bind(this),window.addEventListener("resize",this.resizeListenerRef),window.addEventListener("error",()=>{this.stopRenderLoop()})}dispose(){this.stopRenderLoop(),fa=void 0}showHelpers(e=!0){this.hideables.forEach(t=>t.visible=e)}}function Ig(i){let e;return{c(){e=dt(i[1])},l(t){e=pt(t,i[1])},m(t,n){r(t,e,n)},p:wt,d(t){t&&o(e)}}}function Ng(i){let e;return{c(){e=dt(i[2])},l(t){e=pt(t,i[2])},m(t,n){r(t,e,n)},p:wt,d(t){t&&o(e)}}}function qg(i){let e;return{c(){e=dt("const sun = new RotableDirectionalLight('#ffffff', 2)")},l(t){e=pt(t,"const sun = new RotableDirectionalLight('#ffffff', 2)")},m(t,n){r(t,e,n)},d(t){t&&o(e)}}}function Fg(i){let e,t=`Hasta hace unos años me obsesionaba el tiempo, no me dejaba vivir en paz, siempre
sentía que no había tiempo para nada y no disfrutaba ni de un mero paseo o de
leer un libro. Irónicamente, me organizaba mucho peor que ahora.`,n,a,s=`En estos años, tras entender que es muy peligroso intentar controlar demasiado
los tiempos, cuando entendí que cada día con vida es una victoria y cada
arañazo del bruto de mi gato jugando es vida, el tiempo ya no forma parte de
ninguna ecuación. Si algo no llega a tiempo, pues no llega 🤷‍♂️.`,c,l,u=`Esto puede sonar especialmente chocante en un consultor. A algunos clientes
cuando me piden estimaciones de tiempo les digo “esto podría tomar un mes o un
año, quién sabe”. Me miran raro, se supone que si alguien lo sabe soy yo.`,p,d,v=`No suelo infravalorar los factores no medibles y la experiencia me ha enseñado
a no estimar nunca por lo bajo, más vale que sobre el tiempo y darle una alegría
al cliente al terminar mucho antes de lo previsto, a que falte y que el cliente
se lleve una desagradable sorpresa, aunque eso suponga perder algunos clientes
inicialmente a los que tu estimación les parece excesiva.`,f,g,T=`Cuento esto porque el título de esta entrada podría hacer pensar que para mí
es especialmente importante la productividad y no perder el tiempo, pero nada
más lejos de la realidad. Ahora bien, eso no significa que no haya notado una
fuerte diferencia entre la productividad inherente a algunas metodologías.`,S,h,m=`Como frikazo del tooling y DX, sé muy bien que hacerte tus propias herramientas puede
acelerar tu trabajo de una forma que no te puedes ni imaginar. Que quede muy claro cuanto antes: no me refiero a <strong>reinventar la
rueda</strong>. Tampoco lo considero el mal, reinventar tiene numerosas
ventajas y tengo mucho para hablar de ello en otra entrada, pero no, no es
de esto de lo que trato aquí.`,L,P,q="Caso real: luces de rotación libre en Three.js",V,I,H,z,w=i[0]?"Ocultar":"Mostrar",A,B,W,Y,X=`Si estás en un dispositivo compatible <small>(requiere navegador no muy viejo,
compatible con WebGL al menos)</small> estarás viendo una escena donde hay una
luz direccional. Son fuentes de luz usadas para representar iluminación global
direccional plana, habitualmente un sol. Es una luz algo modificada respecto a
la original. Describo luego.`,te,se,de=`Verás, en casi toda solución de renderizado 3D, los objetos
tienen propiedades de rotación, normalmente asociados a una matriz de
transformación. Siempre se puede rotar todo objeto modificando esta propiedad
o bien mediante algún método rotate. En Three.js funciona igual.`,$,De,ie=`La primera experiencia de un alumno mío con Three.js fue nefasta. Me contó que tras una hora
lo descartó y volvió a otras soluciones como Unity. Concretamente lo que le hizo
abandonar es que no entendía por qué al rotar una “DirectionalLight” no cambiaba
nada. El objeto que representa la luz, cambiaba, su matriz efectivamente era
actualizada, pero no había cambio visible, porque la luz seguía apuntando a
donde quería (concretamente hacia la dirección 0,0,0).`,me,We,ze=`En Three.js (hasta la fecha, release 168), por defecto, la rotación del objeto
que representa a la fuente de luz es independiente de la dirección de la luz.
La luz se controla con la propiedad <code>target</code>. Siempre apunta hacia un objetivo.
Por defecto, hacia las coordenadas 0,0,0, osea, al centro de la escena.`,J,Ee,Re=`En realidad no supone ningún problema: moviendo el target puedes cambiar la
dirección, y el target puede ser un objeto vacío invisible por la escena. De
ahí pueden surgir muchas opciones para realmente conseguir el efecto de rotación
libre.`,Se,Be,ce=`Aunque se topó con esto, se convenció de que no tenía sentido y que Three.js era
simplemente peor que otras soluciones, que no quería estar apagando fuegos,
porque si con algo “tan básico” según él, ya había un obstáculo, ¿qué le
depararía el futuro? Atento a esto:`,Te,it,F,Ge,nt=`En este caso, <code>sun</code> es una <code>DirectionalLight</code> que como todas, siempre apunta a su
target, no cambia, pero ahora el target es hijo de la luz (con add), y además
está en frente de ella (1 en Z, entiendo +Z como el frente). Así, al rotar
sun también rotas el objeto target, haciendo que efectivamente la luz rote
de manera acorde.`,He,Le,st=`¿Básicamente en 2 líneas hemos hecho que una luz rote acorde a su propiedad
de rotación?, ¿de pronto tenemos luces como en Unity u otros sistemas? Esto no
es precisamente un supertrabajo de ingeniería, pero muchos desarrolladores,
juniors y seniors, tienden a creer que las cosas
son más complejas de lo que realmente son y demasiadas veces a adoptar un rol
de mero usuario.`,Ue,Fe,O=`Esto es común cuando no están acostumbrados a bibliotecas extensibles, libres y
bien documentadas. Creen que lo que necesitan debe venir integrado en las
bibliotecas que utilizan y se olvidan de que pueden extender cuanto quieran, e
incluso contribuir con sus cambios si son muy útiles para alguien.`,_,R,ne=`Me gusta especialmente Three.js porque la mayoría de clases y funciones son
bastante obvias. También porque es un entorno con tantos contribuidores
(más de 800 a fecha de hoy) y tan laxo, que te ves estilos de diseño muy
distintos entre cada parte, haciéndolo muy “multicultural” a su manera.`,pe,he,Ve=`Siguiendo con el ejemplo, podría abstraerse (o especializarse mejor dicho)
todo esto y hacer una nueva clase que herede de DirectionalLight:`,Ae,Ie,$e,k,_e="Y así, cuando necesitemos una luz de rotación libre hacer:",et,Z,ve,Xe,Je=`Mucho cuidado con esta tendencia a abstraer y generar una clase a la primera de
cambio por un único comportamiento. Es muy fácil que acabemos añadiendo
sorpresas y complejidad accidental.`,ct,G,we=`Solo hay que tener cuidado con la propiedad target, si se modifica manualmente
ya deja de ser de rotación libre y actua como una direccional normal. Esto está
bien, así puede servir de DirectionalLight cumpliendo el principio de sustitución
de Liskov en su forma más pura. Guardamos una referencia al nuevo target con esta
responsabilidad, para poder restablecerlo en otro momento si se quiere recuperar
la rotación libre.`,Ce,ye,Pe="Independencia tecnológica",Ze,tt,ot=`A lo mejor te preguntas por qué iba a querer alguien hacerse sus propias
herramientas cuando ya existen soluciones similares. Empeora si piensas en la dichosa
frase de “reinventar la rueda”. Y puede que te preguntes cómo se supone que
todo esto puede ahorrar tiempo.`,ut,Ke,ft=`La siguiente respuesta se aplica con mayor notoriedad cuando eres un profesional
con mucha experiencia o formas parte de un equipo muy experimentado, que puede
crearse la herramienta adecuada en un momento o adaptar otra preexistente. Si
no es así, probablemente te
fatigue o incluso no sepas ni por dónde empezar por la mera falta de costumbre.`,mt,Q,Ne=`Cuando las soluciones existentes son privativas la ventaja es bastante obvia:
tener libertad y completo control sobre tus herramientas, sin que una empresa de
turno venga a decirte de pronto qué puedes o no puedes hacer y cuánto debes
pagarle. Además, el soporte a clientes de las herramientas privativas no es tan
maravilloso como muchos intentan defender. Te animo a intentar pedirle a Unity
que solucione alguno de sus millones de problemas técnicos o mejore algunas
de las herramientas más chapuceras que tiene (como las Unity Style Sheets).
Por mucho que pagues una licencia, pasarán de ti.`,xt,fe,qe=`Pero también es muy común hacerse uno mismo herramientas avanzadas pese a que
existan soluciones libres. No siempre uno está
contento con la arquitectura o el rumbo del proyecto por buenas que sean
sus intenciones, y a veces está tan lejos
de tus requisitos que sentirás que estarás más tiempo pidiendo ayuda y apagando
fuegos que haciendo algo útil.`,Lt,bt,re=`Cuando no tienes que esperar por nadie para corregir un problema, sino que
puedes ser tú mismo (o alguien de tu equipo) quien lo haga, con garantías de que
eventualmente se hará y exactamente como uno espera que se haga, no hay pausas
salvo las que tú decidas. Te aseguro que en este mundo se notan más las pausas
que simplemente “ir lento”, no solo en el tiempo, también en la motivación.`,Ye,Dt,qt=`Además, la complejidad de las características de bibliotecas, frameworks o
sistemas de naturaleza
generalista o multipropósito puede llegar a ser tan grande, que simplemente
estudiarte la documentación y un uso básico se vuelve una pesadilla, siendo
en ocasiones viable y más eficiente hacerte una herramienta a medida o
integrar distintas bibliotecas orientadas a una única responsabilidad.`,Kt,oe,E=`Three.js y PixiJS, por ejemplo, no son motores de videojuego, no tienen
físicas ni muchas otras herramientas, porque su rol principal es de renderizado.
Adaptarlas a un sistema
más complejo implica también estudiarlas hasta el punto que más o menos puedes
entender bien su arquitectura interna, así que te es muy fácil modificarlas
si lo necesitas.`,ee,ue,le=`En cualquier caso, el objetivo se puede resumir en buscar independencia. Entre más
dependes de soluciones de terceros y entre más completas son sus soluciones,
menos margen de maniobra tienes cuando hay un problema serio con esa dependencia.
He visto a gente mantener issues en bibliotecas durante más de 5 años preguntando
cada 3 meses “¿existe ya una solución?” y quejándose, cuando lo que piden se
puede resolver en una tarde o dos.`,ae,Oe,ke=`Por último y no menos importante hay otra razón para querer
hacerte tus propias herramientas: por diversión o arte.
Estoy algo cansado de los utilitaristas. Insisto mucho en que esto es un arte,
y para muchos es nuestro hobby principal además de nuestra profesión. A veces
simplemente queremos intentar hacer algo por nuestra cuenta e intentar hacerlo
mejor, sin desmerecer cualquier otra solución previa y sin ánimo de aportar nada
o competir.`,at,Qe,j;return I=new md({props:{id:"free-light-example-canvas",sceneManager:Vo}}),it=new Nn({props:{language:"TypeScript",$$slots:{default:[Ig]},$$scope:{ctx:i}}}),Ie=new Nn({props:{language:"TypeScript",$$slots:{default:[Ng]},$$scope:{ctx:i}}}),Z=new Nn({props:{language:"TypeScript",$$slots:{default:[qg]},$$scope:{ctx:i}}}),{c(){e=x("p"),e.textContent=t,n=y(),a=x("p"),a.textContent=s,c=y(),l=x("p"),l.textContent=u,p=y(),d=x("p"),d.textContent=v,f=y(),g=x("p"),g.textContent=T,S=y(),h=x("p"),h.innerHTML=m,L=y(),P=x("h2"),P.textContent=q,V=y(),Ct(I.$$.fragment),H=y(),z=x("button"),A=dt(w),B=dt(" helpers"),W=y(),Y=x("p"),Y.innerHTML=X,te=y(),se=x("p"),se.textContent=de,$=y(),De=x("p"),De.textContent=ie,me=y(),We=x("p"),We.innerHTML=ze,J=y(),Ee=x("p"),Ee.textContent=Re,Se=y(),Be=x("p"),Be.textContent=ce,Te=y(),Ct(it.$$.fragment),F=y(),Ge=x("p"),Ge.innerHTML=nt,He=y(),Le=x("p"),Le.textContent=st,Ue=y(),Fe=x("p"),Fe.textContent=O,_=y(),R=x("p"),R.textContent=ne,pe=y(),he=x("p"),he.textContent=Ve,Ae=y(),Ct(Ie.$$.fragment),$e=y(),k=x("p"),k.textContent=_e,et=y(),Ct(Z.$$.fragment),ve=y(),Xe=x("p"),Xe.textContent=Je,ct=y(),G=x("p"),G.textContent=we,Ce=y(),ye=x("h2"),ye.textContent=Pe,Ze=y(),tt=x("p"),tt.textContent=ot,ut=y(),Ke=x("p"),Ke.textContent=ft,mt=y(),Q=x("p"),Q.textContent=Ne,xt=y(),fe=x("p"),fe.textContent=qe,Lt=y(),bt=x("p"),bt.textContent=re,Ye=y(),Dt=x("p"),Dt.textContent=qt,Kt=y(),oe=x("p"),oe.textContent=E,ee=y(),ue=x("p"),ue.textContent=le,ae=y(),Oe=x("p"),Oe.textContent=ke},l(N){e=b(N,"P",{"data-svelte-h":!0}),C(e)!=="svelte-c5t86c"&&(e.textContent=t),n=M(N),a=b(N,"P",{"data-svelte-h":!0}),C(a)!=="svelte-pk5ahq"&&(a.textContent=s),c=M(N),l=b(N,"P",{"data-svelte-h":!0}),C(l)!=="svelte-197l6dv"&&(l.textContent=u),p=M(N),d=b(N,"P",{"data-svelte-h":!0}),C(d)!=="svelte-ib4xxd"&&(d.textContent=v),f=M(N),g=b(N,"P",{"data-svelte-h":!0}),C(g)!=="svelte-1euodzh"&&(g.textContent=T),S=M(N),h=b(N,"P",{"data-svelte-h":!0}),C(h)!=="svelte-zzi0ez"&&(h.innerHTML=m),L=M(N),P=b(N,"H2",{"data-svelte-h":!0}),C(P)!=="svelte-1tmvlw"&&(P.textContent=q),V=M(N),St(I.$$.fragment,N),H=M(N),z=b(N,"BUTTON",{});var ge=kt(z);A=pt(ge,w),B=pt(ge," helpers"),ge.forEach(o),W=M(N),Y=b(N,"P",{"data-svelte-h":!0}),C(Y)!=="svelte-yx5zak"&&(Y.innerHTML=X),te=M(N),se=b(N,"P",{"data-svelte-h":!0}),C(se)!=="svelte-w5qrkk"&&(se.textContent=de),$=M(N),De=b(N,"P",{"data-svelte-h":!0}),C(De)!=="svelte-10quyp6"&&(De.textContent=ie),me=M(N),We=b(N,"P",{"data-svelte-h":!0}),C(We)!=="svelte-zy0dfi"&&(We.innerHTML=ze),J=M(N),Ee=b(N,"P",{"data-svelte-h":!0}),C(Ee)!=="svelte-1pb2lwd"&&(Ee.textContent=Re),Se=M(N),Be=b(N,"P",{"data-svelte-h":!0}),C(Be)!=="svelte-f7k36c"&&(Be.textContent=ce),Te=M(N),St(it.$$.fragment,N),F=M(N),Ge=b(N,"P",{"data-svelte-h":!0}),C(Ge)!=="svelte-1hstxkr"&&(Ge.innerHTML=nt),He=M(N),Le=b(N,"P",{"data-svelte-h":!0}),C(Le)!=="svelte-1xv2743"&&(Le.textContent=st),Ue=M(N),Fe=b(N,"P",{"data-svelte-h":!0}),C(Fe)!=="svelte-12h2073"&&(Fe.textContent=O),_=M(N),R=b(N,"P",{"data-svelte-h":!0}),C(R)!=="svelte-wynhgl"&&(R.textContent=ne),pe=M(N),he=b(N,"P",{"data-svelte-h":!0}),C(he)!=="svelte-olebwq"&&(he.textContent=Ve),Ae=M(N),St(Ie.$$.fragment,N),$e=M(N),k=b(N,"P",{"data-svelte-h":!0}),C(k)!=="svelte-1k1an1v"&&(k.textContent=_e),et=M(N),St(Z.$$.fragment,N),ve=M(N),Xe=b(N,"P",{"data-svelte-h":!0}),C(Xe)!=="svelte-x2ih8i"&&(Xe.textContent=Je),ct=M(N),G=b(N,"P",{"data-svelte-h":!0}),C(G)!=="svelte-8gfrcf"&&(G.textContent=we),Ce=M(N),ye=b(N,"H2",{"data-svelte-h":!0}),C(ye)!=="svelte-19g7tyv"&&(ye.textContent=Pe),Ze=M(N),tt=b(N,"P",{"data-svelte-h":!0}),C(tt)!=="svelte-wlzr4g"&&(tt.textContent=ot),ut=M(N),Ke=b(N,"P",{"data-svelte-h":!0}),C(Ke)!=="svelte-6lsf2o"&&(Ke.textContent=ft),mt=M(N),Q=b(N,"P",{"data-svelte-h":!0}),C(Q)!=="svelte-ab3ka0"&&(Q.textContent=Ne),xt=M(N),fe=b(N,"P",{"data-svelte-h":!0}),C(fe)!=="svelte-1rp33dg"&&(fe.textContent=qe),Lt=M(N),bt=b(N,"P",{"data-svelte-h":!0}),C(bt)!=="svelte-1g994jb"&&(bt.textContent=re),Ye=M(N),Dt=b(N,"P",{"data-svelte-h":!0}),C(Dt)!=="svelte-llebk4"&&(Dt.textContent=qt),Kt=M(N),oe=b(N,"P",{"data-svelte-h":!0}),C(oe)!=="svelte-6ydtym"&&(oe.textContent=E),ee=M(N),ue=b(N,"P",{"data-svelte-h":!0}),C(ue)!=="svelte-vjyqrs"&&(ue.textContent=le),ae=M(N),Oe=b(N,"P",{"data-svelte-h":!0}),C(Oe)!=="svelte-1xr5go6"&&(Oe.textContent=ke)},m(N,ge){r(N,e,ge),r(N,n,ge),r(N,a,ge),r(N,c,ge),r(N,l,ge),r(N,p,ge),r(N,d,ge),r(N,f,ge),r(N,g,ge),r(N,S,ge),r(N,h,ge),r(N,L,ge),r(N,P,ge),r(N,V,ge),Et(I,N,ge),r(N,H,ge),r(N,z,ge),_t(z,A),_t(z,B),r(N,W,ge),r(N,Y,ge),r(N,te,ge),r(N,se,ge),r(N,$,ge),r(N,De,ge),r(N,me,ge),r(N,We,ge),r(N,J,ge),r(N,Ee,ge),r(N,Se,ge),r(N,Be,ge),r(N,Te,ge),Et(it,N,ge),r(N,F,ge),r(N,Ge,ge),r(N,He,ge),r(N,Le,ge),r(N,Ue,ge),r(N,Fe,ge),r(N,_,ge),r(N,R,ge),r(N,pe,ge),r(N,he,ge),r(N,Ae,ge),Et(Ie,N,ge),r(N,$e,ge),r(N,k,ge),r(N,et,ge),Et(Z,N,ge),r(N,ve,ge),r(N,Xe,ge),r(N,ct,ge),r(N,G,ge),r(N,Ce,ge),r(N,ye,ge),r(N,Ze,ge),r(N,tt,ge),r(N,ut,ge),r(N,Ke,ge),r(N,mt,ge),r(N,Q,ge),r(N,xt,ge),r(N,fe,ge),r(N,Lt,ge),r(N,bt,ge),r(N,Ye,ge),r(N,Dt,ge),r(N,Kt,ge),r(N,oe,ge),r(N,ee,ge),r(N,ue,ge),r(N,ae,ge),r(N,Oe,ge),at=!0,Qe||(j=nl(z,"click",i[3]),Qe=!0)},p(N,[ge]){(!at||ge&1)&&w!==(w=N[0]?"Ocultar":"Mostrar")&&Rs(A,w);const ht={};ge&16&&(ht.$$scope={dirty:ge,ctx:N}),it.$set(ht);const Ot={};ge&16&&(Ot.$$scope={dirty:ge,ctx:N}),Ie.$set(Ot);const Pt={};ge&16&&(Pt.$$scope={dirty:ge,ctx:N}),Z.$set(Pt)},i(N){at||(vt(I.$$.fragment,N),vt(it.$$.fragment,N),vt(Ie.$$.fragment,N),vt(Z.$$.fragment,N),at=!0)},o(N){gt(I.$$.fragment,N),gt(it.$$.fragment,N),gt(Ie.$$.fragment,N),gt(Z.$$.fragment,N),at=!1},d(N){N&&(o(e),o(n),o(a),o(c),o(l),o(p),o(d),o(f),o(g),o(S),o(h),o(L),o(P),o(V),o(H),o(z),o(W),o(Y),o(te),o(se),o($),o(De),o(me),o(We),o(J),o(Ee),o(Se),o(Be),o(Te),o(F),o(Ge),o(He),o(Le),o(Ue),o(Fe),o(_),o(R),o(pe),o(he),o(Ae),o($e),o(k),o(et),o(ve),o(Xe),o(ct),o(G),o(Ce),o(ye),o(Ze),o(tt),o(ut),o(Ke),o(mt),o(Q),o(xt),o(fe),o(Lt),o(bt),o(Ye),o(Dt),o(Kt),o(oe),o(ee),o(ue),o(ae),o(Oe)),Tt(I,N),Tt(it,N),Tt(Ie,N),Tt(Z,N),Qe=!1,j()}}}const Og={title:"Deja de esperar por otros",slug:"deja-esperar-otros",coverImage:"/src/assets/posts-covers/jon-tyson.jpg",coverPosition:"normal",coverAuthor:"Jon Tyson",excerpt:"Hacerte tus propias herramientas puede acelerar tu trabajo, explico por qué.",date:"2024-09-13T13:00:23.177Z",updated:"2024-09-13T13:00:23.903Z",hidden:!1,tags:["Tooling","Three.js","DX"],keywords:["herramientas","esperar","Three"],type:"default",fullReload:!1};function zg(i,e,t){let n;const a=`const sun = new DirectionalLight('#ffffff', 2)
sun.target.position.setZ(1)
sun.add(sun.target)`,s=`class RotableDirectionalLight extends DirectionalLight {
    freeRotationTarget: Object3D

    constructor(color: ColorRepresentation, intensity: number) {
        super(color, intensity)
        this.freeRotationTarget = new Object3D()
        this.freeRotationTarget.setZ(1)
        this.add(this.freeRotationTarget)
        this.target = this.freeRotationTarget
    }
}`;function c(){t(0,n=!n),Vo.getInstance().showHelpers(n)}return t(0,n=!0),[n,a,s,c]}class Bg extends Xt{constructor(e){super(),Yt(this,e,zg,Fg,$t,{})}}const Hg=Object.freeze(Object.defineProperty({__proto__:null,default:Bg,metadata:Og},Symbol.toStringTag,{value:"Module"}));function kg(i){let e,t=`En mi oficio es normal despertarse un día, ver código del día anterior y
preguntarse: “¿Yo escribí esta porquería?“. Veo que no solo ocurre con código.
Ayer publiqué una entrada titulada “Primatología: directivos”. Ya no existe.
Solo describía mi realidad trabajando
con directivos sin formación técnica y no aportaba nada. No molaba ni el tono. ¿Primatología? Que
sí, que somos todos unos monos, pero decirlo así suena tan pedante…`,n,a,s=`He considerado que esa entrada era intolerable, y he reafirmado alguna que otra
convicción por el camino. Irónicamente, es la entrada que más feedback positivo
ha recibido; todos los compañeros que han tenido que lidiar con directivos sin
formación técnica se han sentido muy identificados. ¿Mereció la pena?`,c,l,u=`No pretendo ir de gurú y menos
en estos ámbitos donde estoy a un palillo de ser un hikikomori, pero sí
tengo claro qué cosas me sientan mal y
cómo he aprendido a cargármelas sin dudar. Quizás mi experiencia le sirva a
alguien.`,p,d,v="🔴🤚 Discursos segregacionistas",f,g,T=`Una de las ventajas de exponer lo que escribes es que, salvo que seas un
psicópata al que le importa un pimiento lo que pueda producir, te estarás
preguntando un buen tiempo si no la habrás cagado, liando a quien pueda leerte o
metiendo fuego innecesariamente.`,S,h,m=`Lo que escribí sobre los problemas de directivos o jefes de proyecto de
software sin conocimientos técnicos no era erróneo, pero era innecesario.
Esos discursos que señalan a roles comunes, especialmente cuando los asocian a
algo negativo, suelen entenderse como discursos segregacionistas.
Si ese fuera mi objetivo
estaría escribiendo en Linkedin o Twitter.`,L,P,q=`Si mi trabajo se fundamenta principalmente en unir, y si llevo toda la vida
conociendo de primera mano los problemas de poner barreras entre las personas,
el daño que provoca el mantener juicios inmutables por acciones pasadas, y un
largo etcétera, ¿qué pinto escribiendo algo así?`,V,I,H=`Entre mis contactos no figuran directivos sin conocimiento técnico, ninguno va
a leerlo y sentirse mal. Pero yo sí lo leo, leo un texto que solo fortalece
una percepción negativa con un discurso donde realizo una generalización
apresurada.`,z,w,A="Dudar cuando guste",B,W,Y=`Lo que hizo que se me encendieran las alarmas es la buena acogida de esa
entrada. Ganar notoriedad por algo con lo que no te quieres ver reflejado es
algo que siempre he considerado aterrador.`,X,te,se=`Antes tendía a esconder
cualquier logro pasado
indebidamente por connotaciones negativas que solo yo veía. Creía
que si alguien me aplaudía algo de lo que yo mismo dudaba, eventualmente me
acabaría sintiendo el triple de mal o pensando que cambiar de opinión
me dejaría como un fraude.`,de,$,De=`Hoy día le he encontrado un sentido más justificado. Me he topado
demasiadas veces con variaciones de la ley de Twyman: cuanto más interesante y
polémico es un discurso, más probable es que esté equivocado; cuanto más
impresionantes sean
los datos, más probable es que sean fruto de un error o de una manipulación
deliberada.`;return{c(){e=x("p"),e.textContent=t,n=y(),a=x("p"),a.textContent=s,c=y(),l=x("p"),l.textContent=u,p=y(),d=x("h2"),d.textContent=v,f=y(),g=x("p"),g.textContent=T,S=y(),h=x("p"),h.textContent=m,L=y(),P=x("p"),P.textContent=q,V=y(),I=x("p"),I.textContent=H,z=y(),w=x("h2"),w.textContent=A,B=y(),W=x("p"),W.textContent=Y,X=y(),te=x("p"),te.textContent=se,de=y(),$=x("p"),$.textContent=De},l(ie){e=b(ie,"P",{"data-svelte-h":!0}),C(e)!=="svelte-1a71ft2"&&(e.textContent=t),n=M(ie),a=b(ie,"P",{"data-svelte-h":!0}),C(a)!=="svelte-12mga9c"&&(a.textContent=s),c=M(ie),l=b(ie,"P",{"data-svelte-h":!0}),C(l)!=="svelte-1pbgmfd"&&(l.textContent=u),p=M(ie),d=b(ie,"H2",{"data-svelte-h":!0}),C(d)!=="svelte-18r6i93"&&(d.textContent=v),f=M(ie),g=b(ie,"P",{"data-svelte-h":!0}),C(g)!=="svelte-16n6dho"&&(g.textContent=T),S=M(ie),h=b(ie,"P",{"data-svelte-h":!0}),C(h)!=="svelte-1irq9as"&&(h.textContent=m),L=M(ie),P=b(ie,"P",{"data-svelte-h":!0}),C(P)!=="svelte-13vvo6n"&&(P.textContent=q),V=M(ie),I=b(ie,"P",{"data-svelte-h":!0}),C(I)!=="svelte-33gn6p"&&(I.textContent=H),z=M(ie),w=b(ie,"H2",{"data-svelte-h":!0}),C(w)!=="svelte-1nncrjc"&&(w.textContent=A),B=M(ie),W=b(ie,"P",{"data-svelte-h":!0}),C(W)!=="svelte-1to1n8l"&&(W.textContent=Y),X=M(ie),te=b(ie,"P",{"data-svelte-h":!0}),C(te)!=="svelte-1gosm6f"&&(te.textContent=se),de=M(ie),$=b(ie,"P",{"data-svelte-h":!0}),C($)!=="svelte-xtgzzq"&&($.textContent=De)},m(ie,me){r(ie,e,me),r(ie,n,me),r(ie,a,me),r(ie,c,me),r(ie,l,me),r(ie,p,me),r(ie,d,me),r(ie,f,me),r(ie,g,me),r(ie,S,me),r(ie,h,me),r(ie,L,me),r(ie,P,me),r(ie,V,me),r(ie,I,me),r(ie,z,me),r(ie,w,me),r(ie,B,me),r(ie,W,me),r(ie,X,me),r(ie,te,me),r(ie,de,me),r(ie,$,me)},p:wt,i:wt,o:wt,d(ie){ie&&(o(e),o(n),o(a),o(c),o(l),o(p),o(d),o(f),o(g),o(S),o(h),o(L),o(P),o(V),o(I),o(z),o(w),o(B),o(W),o(X),o(te),o(de),o($))}}}const Vg={title:"Discursos segregacionistas",slug:"discursos-segregacionistas",coverImage:"/src/assets/posts-covers/valla.jpg",coverPosition:"normal",coverAuthor:"Alex Shuper",excerpt:"Recogiendo cable. Explico por qué no tolero ni en mí mismo algunos discursos.",date:"2024-09-07T22:06:23.177Z",updated:"2024-09-07T22:06:23.903Z",hidden:!1,tags:["Personal","Salud mental"],keywords:[],type:"default"};class Gg extends Xt{constructor(e){super(),Yt(this,e,null,kg,$t,{})}}const jg=Object.freeze(Object.defineProperty({__proto__:null,default:Gg,metadata:Vg},Symbol.toStringTag,{value:"Module"})),Wg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWoAAADyCAMAAABTRH9LAAAAM1BMVEUAAAD///8AAADOzs6mpqaDg4MWFhZjY2MuLi5HR0cHBwfy8vINDQ3Pz894eHiAgICPj4990EOxAAAAAXRSTlMAQObYZgAACEtJREFUeNrsm4FuozAMhhfbJOH9X/iM6xR21OikcYCn/5PaJsRRra+RxyT8ReAavr6ogCuA6giozgtUR0B1XqA6AqrzAtURUJ0XqI6A6rxAdQRU5wWqI6A6L1AdAdV5geoIqM5LoJrAz/h31TjpPwOqQ6A6LVAdAtVpgeoQqE4LVIdAdVqgOgSqC9PCxCTfLnJ5OClVD6tQHXCyaiYR6qR5EbHOZqKplElncymNbKZrz/kJkqtWnbWpX531IrpAojNmWtZfa09JO6dqpb9Uc5Elrfqq3L2xrbP/Gr5WnkFK1ebxrXqh2cXerHL41WmslWeQX3UtPlsOsBCv66xrDyK9avVbhIRpLjoVTbITT3VZH2vlGeRXXaxWqGqycq0TFawTktfaU0p1RtVZgeoQqE4LVIdAdVqgOgSq0wLVIVCdFqi+DMKTqEfgSdRSfkl+UG1ANVTfT8b8oNqAaqi+n4z5QbUB1VB9Pxnzg2oDqqH6fjLmB9UGVEO1w0RU/WnFHSQeETzeJeQbT1dNBu+SFf/KeNO8zc5h4vtVy5J2q8eqOd79v061/bRz/6j6eFOdH6q6NnsXU01EsqTlL5q3qv0661VqxYL1VdeNvuK9FmeoFvKWjdHHwST+ldR0Pr0z4e0m9mgN9dFBN8hlqplkHVh3BLtSm31Wrdft8dw2C60bx4r3Wpx0qr1lw/s41gJCcxHPxCPGJg31aFn3xd0gF6rmt2ob1+mtlLe1ug/V/mEHTt+DjSfV6nfLBlseW9Vi2TGxR7jqEe0rPjrqBrlItcvcVMHeti7rp1Pty57tbmORkwoI6+vdstFICVRbxPZUe7SG+uioG+Qy1b3Z+3Rwqo9V7zZ67AkFZFrbOYQ4PNV1V+A9eh0F3SC33YF4yV0SbvpR5++12q8PoSS6TWhf5Kd6Wq3ufbRsCOnss2qPeG/SZDxaaIyOukEuU11kc1+tQ7E/06p0mfW+qh7XNzcotMTsb11mm52hmql5y4b3cZhk+ku1RyheEUa0zn100A2C/xafAFSHQDVU30/G/KDagGqovp+M+UG1AdVQ/Ye9M9ptFQaCqHZsjDE0yf9/bZMtKILg5KnxrjVHurrlbXq0xdtWHbfHYz6qVqiaqtvjMR9VKx2pno2rfuTj3y36pNm9MPMyi2U+5PN0Bc+lXMUy5/k8qp4LiuWxruTzqPqywPRYV/I5VD0XwPJY1/I5VH1ZAMtjXcvnT/VcyrIsxexYV/P5U30tg0BuZse6ms+d6vm2fvd0sznWb/J5U638iG1O8/lUTai6jlfVWWxzms+nautfOaf5qPqOy3zcQLiB9AdV1/CqmhsIj8X+jkWq5gbCDaRHqLqGV9XcQHgs9ncsUjU3EG4gPULVNbyqzvsnTKJEGLkFPh+1TJrupVBuTNokZFk1jk/GVOP4jKjpjtVbWi00mZ5q7B6AKDokQNJHCRhb3IxdVz2lP9VRS2OehXIBEbZfIPsTfisSkrhVwa3tb43QfIeEedR0GGRCeE61jBhtq96DuLan3f/Tj0JAaP4S2SfcurJEc0GROwOiN9UPxk212FMtY46QIT0ewloot75abKvOR9V/ec2ozq+qJU3PqV4L5fQlkkbTqnH8RJ7FbFoF11o1TlRHHN7VWSs7H/9cqV7b03T5AJpP9ZlqmaC+N9XaRKv9cMmyas8/AxmSq+8WvRJwJ1C1M/hbGP4W5i0u81F1b6o9byDOVBOqruNVNTcQHov9HYtUzQ2EG0iPUHUNr6q5gfBY7O9YpGpuINxAeoSqazhUrd1I2Xh3U+6ju+labgIZDDeSab4OGslkLktCWgz37Gm+Hnr2tHIU5SJWqeVzqJqdqN9s+rU81NV8HlWzv/qLreymh7qWz6Vq3jXAGzT+C17B8xn/V/CIUDVVK1RN1e3xmI+qFaqm6t/2zna3kRCGoutrPt//hTeDYTpbhXbUlRhc3SNVCZAf9pFFJpILz+MxPqpuUDVVT1DE8Zu+ikLt/bvPhaWq0VBJ7TWNCEX6/Bdx7qo6lzr+ZzjFQ3XKIhkyYZ3q8zAPhY5xqhZqTtLj9FTVSTFU16zQj8Ra8QQUpCgRitCmxBbWqA4YqsdYBaHN34xzI9VapMauGuGIv7Sk5DzSJkrNUqsi2Nk2tvBMVQuCVXWRm3FupDpnibVvgNmyigCinEfa6PGBFBTBaqwvrNmr5ZPqFMdefTfOfVQXSwjhnzPGwuVIGxVNmmSkIH1hQVXr6+99VYf7cW6juqWR4kV1LGJlkuSFJYVcLymkZV+LEfp5rz6/wW/EudfXYj4CrvWieuR4HmmjIgVB1Aoqp76wQrWUz08g2VSH+3FuozrltuldVcvluTVatWSIaEsDGAtLVCvyqfogjzdRbsa5T1V/D38tUrUIVVP183iMj6obVE3Vz+MxPqpuUDVVP4/H+NiJeoWdqP6g6ilU7RaqnkLVbqHqKVTtFqqeQtVu+c2qFVE2wp3qqz9FeN8ZarN1K9P+VOdS73bg7nP9l0/VSSF2FWM8qxqA9dhVscGYDaKoQJYd8KbaWlsV7eqspnp0hiJIhNqgzeZj3C5t3CJyd6pba6tVbcmKj87Q3n7XBwi9XVD3uUnQm+qCF03eVfVBxgu1wZgtmap/ylmrob1cVAdzagNW9X8zWlsVdezVozP0cFygNjj36p1ufXWmure2tueKIF21As0zYoo2OJ9AHr+00a/qTa44p+q98anaJVQ9hardQtVTqNotVD2Fqt1C1d/ATlSP8LKSH+HqUGVC1V9A1X6h6hlU7ReqnkHVfqHqGVTtF6qeQdV+oeoZVO0Xqp5B1X6h6hlU7ReqXoSpJmv4Q5bxFwShgra0PpAdAAAAAElFTkSuQmCC",$g=""+new URL("../assets/caso-hacking-firebase-modelo2.Cy1_403W.png",import.meta.url).href;function Xg(i){let e;return{c(){e=dt(`Entrada resubida, rescatada de tantas tonterías que escribí hace un 
par de años. Contra todo pronóstico resulta ser que interesó a algunas personas, 
las mismas que me pidieron la resubida para mantener ciertas fuentes. Aunque 
he borrado la parte personal dado que estoy preparando otra entrada
relacionada a salud mental.`)},l(t){e=pt(t,`Entrada resubida, rescatada de tantas tonterías que escribí hace un 
par de años. Contra todo pronóstico resulta ser que interesó a algunas personas, 
las mismas que me pidieron la resubida para mantener ciertas fuentes. Aunque 
he borrado la parte personal dado que estoy preparando otra entrada
relacionada a salud mental.`)},m(t,n){r(t,e,n)},d(t){t&&o(e)}}}function Yg(i){let e=`...,
userRequests: {
    v8934sdafbi4r3vfewsjkvwevqwe: {
        request: { ... },
        response: { ... }
    },
    wigr908u43nwpdfglxjretjkhne3: {
        request: { ... },
        response: { ... }
    }
}`,t;return{c(){t=dt(e)},l(n){t=pt(n,e)},m(n,a){r(n,t,a)},p:wt,d(n){n&&o(t)}}}function Zg(i){let e=`...,
userRequests: {
    v8934sdafbi4r3vfewsjkvwevqwe: {
        request: {
            id: '4afb4ef5065a',
            op: 'CREATE_ROOM',
            body: { password: '1234' }
        },
        response: {
            id: '4afb4ef5065a',
            body: { createdRoomID: 'x87bhu43'}
        }
    },
    ...
}`,t;return{c(){t=dt(e)},l(n){t=pt(n,e)},m(n,a){r(n,t,a)},p:wt,d(n){n&&o(t)}}}function Kg(i){let e,t,n,a=`Mi último año por la universidad cursé una asignatura de desarrollo de
aplicaciones web de la mano de un profesor al que estaré eternamente agradecido:
Abraham Rodríguez, el ahora vicegerente de Agenda Digital de la ULPGC, lo que
carajo sea que eso signifique…`,s,c,l=`Una de las primeras tareas consistía en hacer una aplicación con Angular 2+ e
Ionic que de backend utilizara el servicio Firebase de Google.`,u,p,d=`Por aquel entonces nos hacían trabajar con la base
de datos en tiempo real de dicho servicio, algo que podía explotarse muy bien
con la librería RxJS —la implementación de ReactiveX en JavaScript— para obtener
reactividad de datos a nivel de servicio y a través de sockets. Se hacía uso del
framework NgRx sobre ella, que facilitaba las tareas de comunicación y
control de estado centralizado, distribuido en red y reactivo en Angular.`,v,f,g=`Mi descubrimiento de ReactiveX y los diagramas reactivos me emocionó, muchísimo,
era un nuevo mundo que bebía del mecanismo, patrón, técnica, paradigma y casi
filosofía de desarrollo que más me gustaba: era la evolución del patrón
observer y la programación reactiva en general, llevada a red. Aún ni conocía
qué era la Event-Driven Architecture, pero sí me sentía atraído por
una comunicación vía observación, eventos y mensajes. Sabía que sería
un trabajo que disfrutar como un niño pequeño. El problema es que Google
decidió poner obstáculos.`,T,S,h="Las antiguas limitaciones de Cloud Functions",m,L,P=`Concretamente solo me tocó hacer un mero chat por salas, pero Google me
bloqueaba un servicio de Firebase fundamental: Cloud Functions. Lo cierto es que
su único requisito era que pusiera una tarjeta de crédito o débito y ni siquiera
conllevaba ningún cargo inicial salvo que gastaras mucho tiempo de ejecución
o hicieras miles de llamadas a las funciones.`,q,V,I=`Cloud Functions es una característica y framework de Firebase que
permite ejecutar código JS en la nube a través de peticiones http y que se
integraba correctamente con la base de datos en tiempo real (RTDB, del inglés)
y otras features cloud del servicio. Todas estas historias que se
popularizaron como serverless computing y permitían hacer una API rápidamente.`,H,z,w=`Muy convenientemente para Google estas funciones podían entrar en una
suerte de recursividad casi infinita si tenías un error, generando facturas
de cientos de euros en una noche si no te dabas cuenta. Por ello nunca deberías
usar tu tarjeta en un servicio que no te establezca un límite duro de cuotas y
te de opción de detener el servicio si se superan en lugar de cobrarte por
exceso. Y no, no vale una tarjeta monedero, acabarás con una deuda que Google
intentará resolver de forma muy activa por lo que me han contado.`,A,B,W=`Ignorando a Cloud Functions, los primeros cuatro días los invertí buscando
formas de conseguir un CRUD perfecto con validación en backend usando
exclusivamente la base de datos y su sistema de permisos integrados con su
sistema de auth. No tardaron en aparecer los primeros inconvenientes.`,Y,X,te=`Necesitaba algunas funciones relacionadas a la creación de salas y el límite
de salas que podía tener un único usuario, algo que requería algo más de
lógica. Desde una API con Cloud Functions no costaba nada, mientras que por
razones de responsabilidad no eran posibles de realizar en la base de datos. Los
esquemas de la RTDB eran más reducidos que ahora.`,se,de,$,De,ie=`Pero Cloud Functions en realidad sí estaba disponible, lo único que limitaba
eran las llamadas a la API de manera externa, vamos, justamente lo que más
necesita alguien que quiera usar el servicio.`,me,We,ze=`Lo que exploté es que sí permitía definir “triggers” o disparadores.
Funciones que se ejecutaran ante situaciones concretas en la base de datos,
como que un usuario escribe un dato en determinado nodo.`,J,Ee,Re=`El servicio no garantizaba que la ejecución de esos disparadores fuera
inmediata. Además, solo se podía comunicar con la base de datos,
no podía responder hacia fuera de ninguna manera… ¿o sí? 🙂`,Se,Be,ce="Los observables",Te,it,F=`La gracia de la RTDB es que es en tiempo real como su nombre indica. Esto
significa que puedes observar cualquier nodo mediante un
socket y que te sea notificado cuando cambie. Esto es lo que permite, por
ejemplo, que veas mensajes aparecer en un chat sin tu pulsar un botón de
refrescar.`,Ge,nt,He=`Ahora supongamos una base de datos en la que se reserva para cada usuario un
nodo con 2 subnodos a los que coherentemente llamamos request y response:`,Le,st,Ue,Fe,O=`Cuando un usuario quiere hacer una petición POST, en lugar de hacer una petición
HTTP a Cloud Functions con el clásico fetch de JavaScript, puede
escribir directamente en su nodo request adecuado en la RTDB con NgRx.
Las ristras largas y aleatorias representan la ID de un usuario autenticado,
que bien podría ser un UUID estándar.
En su propio nodo request —que es donde único tendría permiso de escritura un
usuario— puede establecer los datos de la petición.`,_,R,ne=`El exploit reside en la configuración de un trigger que se disparará cuando un
usuario escriba su request. Este nodo solo tiene
parámetros como si de una función post se tratara. El trigger ya me adelanta
parte del trabajo porque por defecto recibe información acerca del
usuario que ha causado el cambio y el nodo cambiado. Por tanto,
escribir en el nodo request provoca la llamada a una función que conocerá dicho
contexto siendo, en efecto, una forma de invocar una función con argumentos.`,pe,he,Ve,Ae,Ie=`Si se quiere crear una sala de chat, el usuario solo tendría que escribir en su
nodo request un UUID aleatorio generado previamente a fin de tener algo que
identifique la petición, la operación que quiere realizar
(CREATE_ROOM en este caso) y los parámetros que pueda requerir dicha operación.
En este ejemplo el único parámetro se trataba de una contraseña para la sala.`,$e,k,_e=`En resumen: hice una API a través de una base de datos. La forma de recibir
respuesta es mediante eventos, usando NgRx se observa el
nodo response. Sabrá que ha sido respondida cuando la ID en response coincida
con la ID enviada. Y la respuesta la recibirá en el nodo body de response. En
este caso el servidor da una ID de la sala, la típica que compartir con tus
amigos para que entren como se hace en juegos online o Hangouts (EDIT:
actualmente Meets)`,et,Z,ve,Xe,Je=`Todo este proceso es transparente a la aplicación. Podemos abstraer una interfaz
del servicio original y mantener las dos implementaciones si queremos, como
se muestra en el diagrama. Para
la aplicación, la interfaz del servicio sería la misma, que puede trabajar con
simples promesas como si de un fetch se tratara.`,ct,G,we=`Claro que esto no es un uso realista de la base de datos. Estamos
sobrecargándola y además implica tratar con unas esperas del trigger que a veces
podía llegar a los 4 segundos. Para una operación de creación de un recurso
no es algo tan bestial, pero estas esperas reducen drásticamente la
aplicabilidad en muchos otros casos de uso. También, de esta manera es más
fácil gastar la cuota de uso de la base de datos, aunque su ampliación sea más
barata que Cloud Functions en sí misma.`,Ce,ye,Pe="Las consecuencias",Ze,tt,ot=`Las consecuencias no fueron más que gotas a un vaso a punto
de rebosar o leña para una hoguera que comenzaba a arder. En la versión original
de esta entrada hablaba de una crisis que
mezcla obsesión, irresponsabilidad afectiva y retraso madurativo a partes
iguales. En los próximos días publicaré algo al respecto <small>(UPDATE del 28 noviembre de 2024: sigue pendiente)</small>. De momento prefiero no mezclar cosas.`,ut,Ke,ft=`Nunca he tenido la intención de usar la acepción de
hacking como cibercrimen o nada relacionado a seguridad, sino como sobrepasar
los límites de una tecnología o técnica para una aplicación mayor o con un uso
no pensado. Sin embargo, esto sí era un claro bypass a una restricción de
servicio. De publicarse y popularizarse estoy seguro de que como mínimo
Google habría limitado mucho más a Cloud Functions si ésta
era una de sus principales características monetizadas.`,mt;return e=new Xn({props:{$$slots:{default:[Xg]},$$scope:{ctx:i}}}),de=new ba({props:{src:Wg,alt:"Modelo describiendo la comunicación tradicional con Firebase",figCaption:"Modelo ideal. No válido dado que Google bloqueaba cualquier tipo de petición externa a Cloud Functions si no tenías tarjeta de crédito o débito."}}),st=new Nn({props:{language:"TypeScript",showLanguage:!1,$$slots:{default:[Yg]},$$scope:{ctx:i}}}),he=new Nn({props:{language:"TypeScript",showLanguage:!1,$$slots:{default:[Zg]},$$scope:{ctx:i}}}),Z=new ba({props:{src:$g,alt:"diagrama describiendo la comunicación con el servicio faked",figCaption:"Modificaciones. Las peticiones por fetch son reemplazadas por escrituras en la RTDB que disparaban triggers de Cloud Functions. La instancia concreta de FakeAPIService en realidad se inyecta. <small>Nota en 2024: Ahora soy consciente de que, aunque correcto, el diagrama es bastante feucho. En esos tiempos no conocía formas más claras de representar inyecciones de dependencias, inversiones de control y otras tantas cosas.</small>"}}),{c(){Ct(e.$$.fragment),t=y(),n=x("p"),n.textContent=a,s=y(),c=x("p"),c.textContent=l,u=y(),p=x("p"),p.textContent=d,v=y(),f=x("p"),f.textContent=g,T=y(),S=x("h2"),S.textContent=h,m=y(),L=x("p"),L.textContent=P,q=y(),V=x("p"),V.textContent=I,H=y(),z=x("p"),z.textContent=w,A=y(),B=x("p"),B.textContent=W,Y=y(),X=x("p"),X.textContent=te,se=y(),Ct(de.$$.fragment),$=y(),De=x("p"),De.textContent=ie,me=y(),We=x("p"),We.textContent=ze,J=y(),Ee=x("p"),Ee.textContent=Re,Se=y(),Be=x("h2"),Be.textContent=ce,Te=y(),it=x("p"),it.textContent=F,Ge=y(),nt=x("p"),nt.textContent=He,Le=y(),Ct(st.$$.fragment),Ue=y(),Fe=x("p"),Fe.textContent=O,_=y(),R=x("p"),R.textContent=ne,pe=y(),Ct(he.$$.fragment),Ve=y(),Ae=x("p"),Ae.textContent=Ie,$e=y(),k=x("p"),k.textContent=_e,et=y(),Ct(Z.$$.fragment),ve=y(),Xe=x("p"),Xe.textContent=Je,ct=y(),G=x("p"),G.textContent=we,Ce=y(),ye=x("h2"),ye.textContent=Pe,Ze=y(),tt=x("p"),tt.innerHTML=ot,ut=y(),Ke=x("p"),Ke.textContent=ft},l(Q){St(e.$$.fragment,Q),t=M(Q),n=b(Q,"P",{"data-svelte-h":!0}),C(n)!=="svelte-1mjfyua"&&(n.textContent=a),s=M(Q),c=b(Q,"P",{"data-svelte-h":!0}),C(c)!=="svelte-1c8qw35"&&(c.textContent=l),u=M(Q),p=b(Q,"P",{"data-svelte-h":!0}),C(p)!=="svelte-13zoj2o"&&(p.textContent=d),v=M(Q),f=b(Q,"P",{"data-svelte-h":!0}),C(f)!=="svelte-glayny"&&(f.textContent=g),T=M(Q),S=b(Q,"H2",{"data-svelte-h":!0}),C(S)!=="svelte-scitqc"&&(S.textContent=h),m=M(Q),L=b(Q,"P",{"data-svelte-h":!0}),C(L)!=="svelte-7tylqy"&&(L.textContent=P),q=M(Q),V=b(Q,"P",{"data-svelte-h":!0}),C(V)!=="svelte-rwfbr7"&&(V.textContent=I),H=M(Q),z=b(Q,"P",{"data-svelte-h":!0}),C(z)!=="svelte-15pt39w"&&(z.textContent=w),A=M(Q),B=b(Q,"P",{"data-svelte-h":!0}),C(B)!=="svelte-v4oe8z"&&(B.textContent=W),Y=M(Q),X=b(Q,"P",{"data-svelte-h":!0}),C(X)!=="svelte-1bnaaes"&&(X.textContent=te),se=M(Q),St(de.$$.fragment,Q),$=M(Q),De=b(Q,"P",{"data-svelte-h":!0}),C(De)!=="svelte-1mfqzxf"&&(De.textContent=ie),me=M(Q),We=b(Q,"P",{"data-svelte-h":!0}),C(We)!=="svelte-tm1gye"&&(We.textContent=ze),J=M(Q),Ee=b(Q,"P",{"data-svelte-h":!0}),C(Ee)!=="svelte-areo0q"&&(Ee.textContent=Re),Se=M(Q),Be=b(Q,"H2",{"data-svelte-h":!0}),C(Be)!=="svelte-bxldt2"&&(Be.textContent=ce),Te=M(Q),it=b(Q,"P",{"data-svelte-h":!0}),C(it)!=="svelte-1tm3ijv"&&(it.textContent=F),Ge=M(Q),nt=b(Q,"P",{"data-svelte-h":!0}),C(nt)!=="svelte-uq0d93"&&(nt.textContent=He),Le=M(Q),St(st.$$.fragment,Q),Ue=M(Q),Fe=b(Q,"P",{"data-svelte-h":!0}),C(Fe)!=="svelte-unhgdf"&&(Fe.textContent=O),_=M(Q),R=b(Q,"P",{"data-svelte-h":!0}),C(R)!=="svelte-1iicecn"&&(R.textContent=ne),pe=M(Q),St(he.$$.fragment,Q),Ve=M(Q),Ae=b(Q,"P",{"data-svelte-h":!0}),C(Ae)!=="svelte-1nsooy1"&&(Ae.textContent=Ie),$e=M(Q),k=b(Q,"P",{"data-svelte-h":!0}),C(k)!=="svelte-1u2tz29"&&(k.textContent=_e),et=M(Q),St(Z.$$.fragment,Q),ve=M(Q),Xe=b(Q,"P",{"data-svelte-h":!0}),C(Xe)!=="svelte-1b6hvwu"&&(Xe.textContent=Je),ct=M(Q),G=b(Q,"P",{"data-svelte-h":!0}),C(G)!=="svelte-5vr4hi"&&(G.textContent=we),Ce=M(Q),ye=b(Q,"H2",{"data-svelte-h":!0}),C(ye)!=="svelte-16wekeb"&&(ye.textContent=Pe),Ze=M(Q),tt=b(Q,"P",{"data-svelte-h":!0}),C(tt)!=="svelte-e8czz0"&&(tt.innerHTML=ot),ut=M(Q),Ke=b(Q,"P",{"data-svelte-h":!0}),C(Ke)!=="svelte-11wdxif"&&(Ke.textContent=ft)},m(Q,Ne){Et(e,Q,Ne),r(Q,t,Ne),r(Q,n,Ne),r(Q,s,Ne),r(Q,c,Ne),r(Q,u,Ne),r(Q,p,Ne),r(Q,v,Ne),r(Q,f,Ne),r(Q,T,Ne),r(Q,S,Ne),r(Q,m,Ne),r(Q,L,Ne),r(Q,q,Ne),r(Q,V,Ne),r(Q,H,Ne),r(Q,z,Ne),r(Q,A,Ne),r(Q,B,Ne),r(Q,Y,Ne),r(Q,X,Ne),r(Q,se,Ne),Et(de,Q,Ne),r(Q,$,Ne),r(Q,De,Ne),r(Q,me,Ne),r(Q,We,Ne),r(Q,J,Ne),r(Q,Ee,Ne),r(Q,Se,Ne),r(Q,Be,Ne),r(Q,Te,Ne),r(Q,it,Ne),r(Q,Ge,Ne),r(Q,nt,Ne),r(Q,Le,Ne),Et(st,Q,Ne),r(Q,Ue,Ne),r(Q,Fe,Ne),r(Q,_,Ne),r(Q,R,Ne),r(Q,pe,Ne),Et(he,Q,Ne),r(Q,Ve,Ne),r(Q,Ae,Ne),r(Q,$e,Ne),r(Q,k,Ne),r(Q,et,Ne),Et(Z,Q,Ne),r(Q,ve,Ne),r(Q,Xe,Ne),r(Q,ct,Ne),r(Q,G,Ne),r(Q,Ce,Ne),r(Q,ye,Ne),r(Q,Ze,Ne),r(Q,tt,Ne),r(Q,ut,Ne),r(Q,Ke,Ne),mt=!0},p(Q,[Ne]){const xt={};Ne&2&&(xt.$$scope={dirty:Ne,ctx:Q}),e.$set(xt);const fe={};Ne&2&&(fe.$$scope={dirty:Ne,ctx:Q}),st.$set(fe);const qe={};Ne&2&&(qe.$$scope={dirty:Ne,ctx:Q}),he.$set(qe)},i(Q){mt||(vt(e.$$.fragment,Q),vt(de.$$.fragment,Q),vt(st.$$.fragment,Q),vt(he.$$.fragment,Q),vt(Z.$$.fragment,Q),mt=!0)},o(Q){gt(e.$$.fragment,Q),gt(de.$$.fragment,Q),gt(st.$$.fragment,Q),gt(he.$$.fragment,Q),gt(Z.$$.fragment,Q),mt=!1},d(Q){Q&&(o(t),o(n),o(s),o(c),o(u),o(p),o(v),o(f),o(T),o(S),o(m),o(L),o(q),o(V),o(H),o(z),o(A),o(B),o(Y),o(X),o(se),o($),o(De),o(me),o(We),o(J),o(Ee),o(Se),o(Be),o(Te),o(it),o(Ge),o(nt),o(Le),o(Ue),o(Fe),o(_),o(R),o(pe),o(Ve),o(Ae),o($e),o(k),o(et),o(ve),o(Xe),o(ct),o(G),o(Ce),o(ye),o(Ze),o(tt),o(ut),o(Ke)),Tt(e,Q),Tt(de,Q),Tt(st,Q),Tt(he,Q),Tt(Z,Q)}}}const Jg={title:"El hacking a Google",slug:"el-hacking-a-google",coverImage:"machinery.jpg",coverAuthor:"Isis França",excerpt:"Entrada resubida. Cuento una batalla contra el servicio Firebase de Google y un caso de aplicación de ingeniería de software.",date:"2024-08-02T01:19:04.325Z",updated:"2024-08-02T01:19:04.326Z",hidden:!1,tags:["Hacking","Back end","Front end","Cloud"],keywords:[],type:"default"};function Qg(i){return[]}class e_ extends Xt{constructor(e){super(),Yt(this,e,Qg,Kg,$t,{})}}const t_=Object.freeze(Object.defineProperty({__proto__:null,default:e_,metadata:Jg},Symbol.toStringTag,{value:"Module"}));function n_(i){let e,t,n,a,s=i[0].join(" ")+"",c,l,u,p,d;return{c(){e=x("span"),t=dt("—"),n=dt(i[1]),a=y(),c=dt(s),l=y(),u=x("span"),p=dt(i[2]),d=dt("—"),this.h()},l(v){e=b(v,"SPAN",{class:!0});var f=kt(e);t=pt(f,"—"),n=pt(f,i[1]),f.forEach(o),a=M(v),c=pt(v,s),l=M(v),u=b(v,"SPAN",{class:!0});var g=kt(u);p=pt(g,i[2]),d=pt(g,"—"),g.forEach(o),this.h()},h(){yt(e,"class","no-wrap svelte-hbocqj"),yt(u,"class","no-wrap svelte-hbocqj")},m(v,f){r(v,e,f),_t(e,t),_t(e,n),r(v,a,f),r(v,c,f),r(v,l,f),r(v,u,f),_t(u,p),_t(u,d)},p:wt,i:wt,o:wt,d(v){v&&(o(e),o(a),o(c),o(l),o(u))}}}function i_(i,e,t){let{content:n}=e;const a=n.split(" "),s=a.splice(0,1)[0],c=a.length>0?a.splice(a.length-1,1)[0]:s;return i.$$set=l=>{"content"in l&&t(3,n=l.content)},[a,s,c,n]}class jc extends Xt{constructor(e){super(),Yt(this,e,i_,n_,$t,{content:3})}}function a_(i){let e;return{c(){e=dt(`Al leer "transversal", muchas personas suelen pensar en habilidades secundarias aplicables a múltiples ámbitos, que aportan pero no son vitales. Lo incorrecto aquí es pensar que 
son secundarias. Una habilidad puede ser transversal y ser a su vez la más 
importante e imprescindible en un oficio.`)},l(t){e=pt(t,`Al leer "transversal", muchas personas suelen pensar en habilidades secundarias aplicables a múltiples ámbitos, que aportan pero no son vitales. Lo incorrecto aquí es pensar que 
son secundarias. Una habilidad puede ser transversal y ser a su vez la más 
importante e imprescindible en un oficio.`)},m(t,n){r(t,e,n)},d(t){t&&o(e)}}}function s_(i){let e,t,n,a="artesanía de software",s,c,l,u,p="comunicación",d,v,f,g="Puede que no exista maestro en esta profesión que dude de ello. Con notable seguridad, si tuviéramos que elegir una habilidad transversal asociada a la calidad de un desarrollo de software, elegimos la comunicación, pues está presente de alguna manera en todas las técnicas, procesos y herramientas que utilizamos.",T,S,h,m,L="No es necesario que una persona sea experta en oratoria, que hable bien en público, ni siquiera que hable bien en general. Puede no ser importante si tartamudea, si tiene poco vocabulario, o si no tiene fluidez con el idioma en el que intenta expresarse. Puede que no importe en absoluto si comete errores ortográficos, si usa tacos o los evita a toda costa. De hecho la riqueza y complejidad léxica puede ser contraproducente si dificulta o sobrecarga el mensaje.",P,q,V="Lo que sí es importante es que sepa extraer y simplificar ideas, que persiga la precisión semántica pero manteniendo a raya los dogmatismos. Y aún más importante, que dude y esté dispuesta a criticar, pulir, reemplazar o destruir sus propias ideas —o la expresión de las mismas— de ser necesario.",I,H,z="En nuestra práctica, palabras como <strong>“flexibilidad”</strong> y otras con carga semántica similar, como <strong>“adaptabilidad”</strong>, se vuelven especialmente notorias en nuestro camino hacia la <strong>“sostenibilidad”</strong>, siendo esta última probablemente la palabra más importante y definitoria del resultado de nuestro arte.",w,A,B,W,Y="empatía",X,te,se,de,$,De="Si bien estas habilidades son clave en cualquier oficio y en la vida misma, los desarrollos de calidad se vuelven extremadamente sensibles a su dominio. Descuidarlas es un camino asegurado hacia hábitos que provocarán la introducción constante de complejidad accidental.",ie,me,We="¿Crees que es casualidad que las personas más famosas de la ingeniería de software, en el pasado y en el presente, tengan sus habilidades para expresar ideas y divulgar a la par de sus habilidades técnicas? Yo no lo creo, y tengo en cuenta el error lógico evidente: <em>“son famosas precisamente porque divulgan”</em>. No, no creo que sea casualidad. Como tampoco creo que sea casualidad que el primer valor del manifiesto ágil sea “Individuos e interacciones sobre procesos y herramientas”.",ze,J,Ee=`En muchas otras artes, la divulgación no necesariamente requiere la excelencia
técnica y práctica continua en el área. Si bien debe comprenderse lo suficiente para
poder hablar con un mínimo de autoridad.`,Re,Se,Be="También es cierto lo contrario: muchas mentes brillantes resultaban no ser especialmente buenas acercando sus ideas a compañeros, ya no digamos a sangre nueva o a estudiantes.",ce,Te,it=`Algunas disciplinas, como la filosofía o la artesanía de software, dependen claramente de
habilidades similares, y es que existe una correlación directa entre lo bien que construimos y nuestra capacidad para estructurar y expresar ideas. No es necesario dedicarse a la divulgación (externa), pero sí es necesario contar con la habilidad para hacerlo, pues debemos hacerlo internamente, a nivel de equipo o para nosotros mismos.`,F,Ge,nt=`La enseñanza permite trabajar todos estos conceptos. Es a fin de cuentas, una forma
de divulgación. Al menos, si quieres enseñar bien, debes perseguir la excelencia técnica, dudar de todo mientras haces un esfuerzo empático que te ayude a destilar realmente el problema. No puedes pillar cosas con pinzas, no puedes simplemente ir hacia delante sin tener claro algo, porque es tu responsabilidad no transmitir tu incertidumbre a tu alumnado.`,He,Le,st="Ya como opinión personal, si además adoptas la dialéctica y metodologías socráticas que permitan que de forma guiada tu alumnado conozca o descubra realmente el problema y solución de primera mano, será un ejercicio inmejorable.",Ue,Fe,O="Es por esto que suelo recomendar a todos los profesionales acoger a alumnos en prácticas y ejercer la mentoría, mejorando estas habilidades y revisitando ideas. También suelo recomendar a empresas fomentar el trabajo en parejas (pairing) y la rotación de las mismas, de modo que todo el mundo tenga oportunidad de instruir o ser instruido, o como mínimo, de compartir ideas, formas de pensar y debatir, de mejorar su comunicación y asertividad, conociendo el trabajo de otros y creando vínculos que refuercen el crecimiento personal y del equipo, fomentando la transmisión de conocimiento.",_;return c=new jc({props:{content:"haciendo esfuerzo por resaltar una naturaleza gremial"}}),S=new Xn({props:{$$slots:{default:[a_]},$$scope:{ctx:i}}}),te=new jc({props:{content:"y se debe"}}),{c(){e=x("p"),t=dt("Nuestro arte u oficio, el que intento transmitir y que identificamos como "),n=x("strong"),n.textContent=a,s=y(),Ct(c.$$.fragment),l=dt(", se caracteriza especialmente por el uso de la "),u=x("strong"),u.textContent=p,d=dt("."),v=y(),f=x("p"),f.textContent=g,T=y(),Ct(S.$$.fragment),h=y(),m=x("p"),m.textContent=L,P=y(),q=x("p"),q.textContent=V,I=y(),H=x("p"),H.innerHTML=z,w=y(),A=x("p"),B=dt("No obstante, no es posible una correcta comunicación sin un esfuerzo empático. Y es por tanto, la "),W=x("strong"),W.textContent=Y,X=dt(" entendida como una habilidad, la piedra angular de una correcta comunicación. Como toda habilidad, esta se puede "),Ct(te.$$.fragment),se=dt(" entrenar, en un proceso que no solo nos vuelve mejores profesionales, también mejores personas."),de=y(),$=x("p"),$.textContent=De,ie=y(),me=x("p"),me.innerHTML=We,ze=y(),J=x("p"),J.textContent=Ee,Re=y(),Se=x("p"),Se.textContent=Be,ce=y(),Te=x("p"),Te.textContent=it,F=y(),Ge=x("p"),Ge.textContent=nt,He=y(),Le=x("p"),Le.textContent=st,Ue=y(),Fe=x("p"),Fe.textContent=O},l(R){e=b(R,"P",{});var ne=kt(e);t=pt(ne,"Nuestro arte u oficio, el que intento transmitir y que identificamos como "),n=b(ne,"STRONG",{"data-svelte-h":!0}),C(n)!=="svelte-1lsbczq"&&(n.textContent=a),s=M(ne),St(c.$$.fragment,ne),l=pt(ne,", se caracteriza especialmente por el uso de la "),u=b(ne,"STRONG",{"data-svelte-h":!0}),C(u)!=="svelte-mcy79w"&&(u.textContent=p),d=pt(ne,"."),ne.forEach(o),v=M(R),f=b(R,"P",{"data-svelte-h":!0}),C(f)!=="svelte-6ijxki"&&(f.textContent=g),T=M(R),St(S.$$.fragment,R),h=M(R),m=b(R,"P",{"data-svelte-h":!0}),C(m)!=="svelte-1745m8r"&&(m.textContent=L),P=M(R),q=b(R,"P",{"data-svelte-h":!0}),C(q)!=="svelte-177t0xj"&&(q.textContent=V),I=M(R),H=b(R,"P",{"data-svelte-h":!0}),C(H)!=="svelte-51q7et"&&(H.innerHTML=z),w=M(R),A=b(R,"P",{});var pe=kt(A);B=pt(pe,"No obstante, no es posible una correcta comunicación sin un esfuerzo empático. Y es por tanto, la "),W=b(pe,"STRONG",{"data-svelte-h":!0}),C(W)!=="svelte-1vh5i1p"&&(W.textContent=Y),X=pt(pe," entendida como una habilidad, la piedra angular de una correcta comunicación. Como toda habilidad, esta se puede "),St(te.$$.fragment,pe),se=pt(pe," entrenar, en un proceso que no solo nos vuelve mejores profesionales, también mejores personas."),pe.forEach(o),de=M(R),$=b(R,"P",{"data-svelte-h":!0}),C($)!=="svelte-7k4od"&&($.textContent=De),ie=M(R),me=b(R,"P",{"data-svelte-h":!0}),C(me)!=="svelte-bvu9or"&&(me.innerHTML=We),ze=M(R),J=b(R,"P",{"data-svelte-h":!0}),C(J)!=="svelte-176yacn"&&(J.textContent=Ee),Re=M(R),Se=b(R,"P",{"data-svelte-h":!0}),C(Se)!=="svelte-18pyzi8"&&(Se.textContent=Be),ce=M(R),Te=b(R,"P",{"data-svelte-h":!0}),C(Te)!=="svelte-1wy8f36"&&(Te.textContent=it),F=M(R),Ge=b(R,"P",{"data-svelte-h":!0}),C(Ge)!=="svelte-rz47ja"&&(Ge.textContent=nt),He=M(R),Le=b(R,"P",{"data-svelte-h":!0}),C(Le)!=="svelte-1kxqp25"&&(Le.textContent=st),Ue=M(R),Fe=b(R,"P",{"data-svelte-h":!0}),C(Fe)!=="svelte-1fa3e3b"&&(Fe.textContent=O)},m(R,ne){r(R,e,ne),_t(e,t),_t(e,n),_t(e,s),Et(c,e,null),_t(e,l),_t(e,u),_t(e,d),r(R,v,ne),r(R,f,ne),r(R,T,ne),Et(S,R,ne),r(R,h,ne),r(R,m,ne),r(R,P,ne),r(R,q,ne),r(R,I,ne),r(R,H,ne),r(R,w,ne),r(R,A,ne),_t(A,B),_t(A,W),_t(A,X),Et(te,A,null),_t(A,se),r(R,de,ne),r(R,$,ne),r(R,ie,ne),r(R,me,ne),r(R,ze,ne),r(R,J,ne),r(R,Re,ne),r(R,Se,ne),r(R,ce,ne),r(R,Te,ne),r(R,F,ne),r(R,Ge,ne),r(R,He,ne),r(R,Le,ne),r(R,Ue,ne),r(R,Fe,ne),_=!0},p(R,[ne]){const pe={};ne&1&&(pe.$$scope={dirty:ne,ctx:R}),S.$set(pe)},i(R){_||(vt(c.$$.fragment,R),vt(S.$$.fragment,R),vt(te.$$.fragment,R),_=!0)},o(R){gt(c.$$.fragment,R),gt(S.$$.fragment,R),gt(te.$$.fragment,R),_=!1},d(R){R&&(o(e),o(v),o(f),o(T),o(h),o(m),o(P),o(q),o(I),o(H),o(w),o(A),o(de),o($),o(ie),o(me),o(ze),o(J),o(Re),o(Se),o(ce),o(Te),o(F),o(Ge),o(He),o(Le),o(Ue),o(Fe)),Tt(c),Tt(S,R),Tt(te)}}}const o_={title:"La enseñanza es la forma de aprendizaje más profunda",slug:"ensenanza-aprendizaje-profundo",coverImage:"",excerpt:"La enseñanza se presenta como una forma de trabajar múltiples habilidades necesarias en nuestra profesión, empezando por la comunicación.",date:"2025-05-09T20:41:04.325Z",updated:"2025-05-09T20:41:04.326Z",hidden:!1,tags:["Formación","Ingeniería software"],keywords:["Enseñanza","Sostenibilidad","Artesanía","Comunicación"],type:"default"};class r_ extends Xt{constructor(e){super(),Yt(this,e,null,s_,$t,{})}}const l_=Object.freeze(Object.defineProperty({__proto__:null,default:r_,metadata:o_},Symbol.toStringTag,{value:"Module"})),c_=""+new URL("../assets/visual-specs-index.DUyx9Wot.png",import.meta.url).href,u_=""+new URL("../assets/captura-error.DS5ipSG-.png",import.meta.url).href;function d_(i){let e,t="estas palabras";return{c(){e=x("span"),e.textContent=t,this.h()},l(n){e=b(n,"SPAN",{id:!0,class:!0,"data-svelte-h":!0}),C(e)!=="svelte-tntrd9"&&(e.textContent=t),this.h()},h(){yt(e,"id","example-target"),yt(e,"class","hl")},m(n,a){r(n,e,a)},p:wt,d(n){n&&o(e)}}}function p_(i){let e,t=`AVISO: ¿Estás buscando un tutorial paso a paso de cómo
desarrollar una biblioteca de manera profesional? Pues este NO es el lugar.
Solo encontrarás fragmentos de código relevantes para plantear el temita
de la especificación visual.`;return{c(){e=x("p"),e.textContent=t},l(n){e=b(n,"P",{"data-svelte-h":!0}),C(e)!=="svelte-enicy2"&&(e.textContent=t)},m(n,a){r(n,e,a)},p:wt,d(n){n&&o(e)}}}function f_(i){let e="create(shape: ShapeName, {target: string | HTMLElement})",t;return{c(){t=dt(e)},l(n){t=pt(n,e)},m(n,a){r(n,t,a)},p:wt,d(n){n&&o(t)}}}function h_(i){let e=`describe('create(...)', ()=>{
    ...
    it('creates an SVG and appends it to the body', ()=>{
        ...
    })
})`,t;return{c(){t=dt(e)},l(n){t=pt(n,e)},m(n,a){r(n,t,a)},p:wt,d(n){n&&o(t)}}}function m_(i){let e;return{c(){e=dt("Cosexa Pgropia™")},l(t){e=pt(t,"Cosexa Pgropia™")},m(t,n){r(t,e,n)},d(t){t&&o(e)}}}function v_(i){let e=`describe("create('rect', {...})", ()=> {
    ...
    describe('Default behaviors (no options)', () => {
        ...
        it('creates an orange rect of 4px width around target', ()=>{
            ...
        })
    })
})`,t;return{c(){t=dt(e)},l(n){t=pt(n,e)},m(n,a){r(n,t,a)},p:wt,d(n){n&&o(t)}}}function g_(i){let e='<div class="test-box"></div>',t;return{c(){t=dt(e)},l(n){t=pt(n,e)},m(n,a){r(n,t,a)},p:wt,d(n){n&&o(t)}}}function __(i){let e,t;return e=new Nn({props:{slot:"left",language:"HTML",$$slots:{default:[g_]},$$scope:{ctx:i}}}),{c(){Ct(e.$$.fragment)},l(n){St(e.$$.fragment,n)},m(n,a){Et(e,n,a),t=!0},p(n,a){const s={};a&8&&(s.$$scope={dirty:a,ctx:n}),e.$set(s)},i(n){t||(vt(e.$$.fragment,n),t=!0)},o(n){gt(e.$$.fragment,n),t=!1},d(n){Tt(e,n)}}}function x_(i){let e=`.test-box {
    background: #333;
    width: 250px;
    height: 150px;
}`,t;return{c(){t=dt(e)},l(n){t=pt(n,e)},m(n,a){r(n,t,a)},p:wt,d(n){n&&o(t)}}}function b_(i){let e,t;return e=new Nn({props:{slot:"right",language:"CSS",$$slots:{default:[x_]},$$scope:{ctx:i}}}),{c(){Ct(e.$$.fragment)},l(n){St(e.$$.fragment,n)},m(n,a){Et(e,n,a),t=!0},p(n,a){const s={};a&8&&(s.$$scope={dirty:a,ctx:n}),e.$set(s)},i(n){t||(vt(e.$$.fragment,n),t=!0)},o(n){gt(e.$$.fragment,n),t=!1},d(n){Tt(e,n)}}}function y_(i){let e='<div class="test-box test-box--expected"></div>',t;return{c(){t=dt(e)},l(n){t=pt(n,e)},m(n,a){r(n,t,a)},p:wt,d(n){n&&o(t)}}}function M_(i){let e,t;return e=new Nn({props:{slot:"left",language:"HTML",$$slots:{default:[y_]},$$scope:{ctx:i}}}),{c(){Ct(e.$$.fragment)},l(n){St(e.$$.fragment,n)},m(n,a){Et(e,n,a),t=!0},p(n,a){const s={};a&8&&(s.$$scope={dirty:a,ctx:n}),e.$set(s)},i(n){t||(vt(e.$$.fragment,n),t=!0)},o(n){gt(e.$$.fragment,n),t=!1},d(n){Tt(e,n)}}}function C_(i){let e=`...
.test-box--expected {
    box-sizing: content-box;
    border: 4px solid orange;
}
`,t;return{c(){t=dt(e)},l(n){t=pt(n,e)},m(n,a){r(n,t,a)},p:wt,d(n){n&&o(t)}}}function S_(i){let e,t;return e=new Nn({props:{slot:"right",language:"CSS",$$slots:{default:[C_]},$$scope:{ctx:i}}}),{c(){Ct(e.$$.fragment)},l(n){St(e.$$.fragment,n)},m(n,a){Et(e,n,a),t=!0},p(n,a){const s={};a&8&&(s.$$scope={dirty:a,ctx:n}),e.$set(s)},i(n){t||(vt(e.$$.fragment,n),t=!0)},o(n){gt(e.$$.fragment,n),t=!1},d(n){Tt(e,n)}}}function E_(i){let e="it(`creates an orange rect of 4px width around target (${xW}x${xH})`, async ({ page }) => {\n    await comparePages({\n        testingURL: `/${xW}x${xH}`,\n        expectedURL: `/expected/rect/${xW}x${xH}-default`,\n        action: () => {\n            return page.evaluate(() => {\n                pio.create('rect', {target: `.test-box--${xW}x${xH}`})\n            })\n        }\n    })\n})",t;return{c(){t=dt(e)},l(n){t=pt(n,e)},m(n,a){r(n,t,a)},p:wt,d(n){n&&o(t)}}}function T_(i){let e;return{c(){e=dt(`Lamentablemente Playwright no tiene una función tan mágica y bonita como
comparePages. Es propia, resultado de un poco de 
hacking con los mecanismos de regresión visual de Playwright, pero tienes total
libertad para meterle un copia y pega (hazlo del repo, que es la que funciona).`)},l(t){e=pt(t,`Lamentablemente Playwright no tiene una función tan mágica y bonita como
comparePages. Es propia, resultado de un poco de 
hacking con los mecanismos de regresión visual de Playwright, pero tienes total
libertad para meterle un copia y pega (hazlo del repo, que es la que funciona).`)},m(t,n){r(t,e,n)},d(t){t&&o(e)}}}function A_(i){let e,t=`He tenido la necesidad de crear formas posicionables sobre sitios web,
señalando o conectando elementos. Muchas veces. Es un must en aplicaciones
interactivas que requieren de algún tipo de señalización, como podría ocurrir
en tutoriales.`,n,a,s=`Harto de reinventar la rueda decido buscar una biblioteca sencillita que me
resuelva este problema. Esperaba encontrar muchas para ello, o quizás
como alguna feature de alguna muy gorda y conocida.
Estaba casi convencido de que existiría algo, pero que aún así quizás tendría que
hacer yo mismo una biblioteca propia con <strong>filosofía minimalista</strong>.`,c,l,u=`Pero lo cierto es que, al menos en unas pocas búsquedas sencillas, no he
encontrado nada. Que no sea fácil de encontrar no significa que no exista,
no te imaginas cuántas superherramientas sin visibilidad he encontrado entre
repositorios perdidos.`,p,d,v=`A falta de soluciones (o como resultado de una mala investigación), me pongo
manos a la obra en el desarrollo de una biblioteca para ello (Point it out) y
me doy cuenta de que necesito algo para especificar qué resultado visual busco.
Necesito alguna técnica de <strong>especificación visual</strong>, si es que existe algo
así y si significa lo que pretendo que signifique.`,f,g,T="Describiendo el problema: cómo señalizar elementos",S,h,m,L,P,q,V,I=`“Pero Alexander, ¿me estás diciendo que ya existe entonces solución?” No, lo que
estás viendo es fruto del resultado final (o al menos de lo que ya tengo
desarrollado). Dado que ya tengo una medio solución, ¿por qué no mostrarlo?`,H,z,w,A,B=`En una primera versión, la biblioteca debía aportar al menos un primer mecanismo simple de
señalización. Para ello especifiqué la siguiente función:`,W,Y,X,te,se=`<code>ShapeName</code> se trata de una string, un tipo de unión ‘rect’ | ‘image’, aunque
en un primer momento solo existe ‘rect’. La opción target es un selector CSS
o una referencia directa al elemento objetivo.`,de,$,De=`<li>Si es un selector, trabajará con el primer elemento que encuentre con ese selector, o lanzará excepción si no encuentra nada.</li> <li>Creará un elemento SVG que añadirá como hijo al body.</li> <li>Dicho SVG debe estar posicionado absolutamente sobre el elemento a señalar.</li> <li>Dicho SVG debe tener un tamaño similar al elemento a señalar.
<ul><li>Digo similar porque podría ser más grande, si quiere rodearse sin taparlo.</li></ul></li>`,ie,me,We="En las primeras iteraciones de herramientas gráficas me gusta centrarme en la exploración tecnológica. Hacer un caso mínimo funcional que dé un resultado visual inmediato.",ze,J,Ee="Especificaciones formales con algún framework de testing",Re,Se,Be=`Aquí empieza lo realmente interesante. Hay que testar visualmente, eso está
claro, estamos ante una librería cuyo objetivo es renderizar cosas. Pero eso no
significa que inmediatamente todo vaya a ser regresión visual y E2E.
Considera la siguiente spec:`,ce,Te,it,F,Ge=`Esto no requiere renderizado. Vale con un DOM virtual, comprobar que se crea
un nuevo nodo y si queda colgando del body. Hacer una prueba E2E para esto es
matar moscas a cañonazos.`,nt,He,Le="Especificación visual",st,Ue,Fe=`Me gusta la <em>regresión visual</em>, pero tiene un pequeño problema. Por si no sabes
de qué te estoy hablando, consiste en la generación y comparación mediante
snapshots <em>(ficheros que describan el estado de una aplicación ante
ciertas condiciones. Típicamente suelen ser screenshots)</em>. Su fortaleza
reside en la cobertura futura. Por lo general se
generan snapshots una vez se tiene el resultado buscado para que en futuras
comparaciones tras refactoring recibamos un feedback de si algo ha cambiado más
de lo esperado.`,O,_,R=`Y aunque es una herramienta útil y bienvenida en mantenimiento de aplicaciones
que controlan muy bien la interfaz de usuario y donde es crítico que estas no
cambien inesperadamente, la regresión visual no forma exactamente parte del
flujo de las metodologías estilo TDD, BDD o ATDD. Recordemos que son
metodologías de diseño y <strong>la regresión visual no aporta nada en la fase de diseño o para definir especificaciones preimplementación.</strong>`,ne,pe,he="Buscando la alternativa a la regresión visual",Ve,Ae,Ie,$e,k,_e,et,Z=`El proceso que he realizado es el siguiente: adaptar una biblioteca o framework
con capacidades para regresión visual (en este caso Playwright) para que
en su lugar genere screenshots de dos páginas distintas y
las compare. Una de las páginas presenta el escenario donde ejecutas la acción
a probar; la otra es la versión con el resultado final esperado, hecha a mano
y centrándonos solo en el resultado visual.`,ve,Xe,Je="Supongamos la siguiente especificacion:",ct,G,we,Ce,ye="Nuestro escenario de pruebas podría contener, entre otras cosas, lo siguiente:",Pe,Ze,tt,ot,ut,Ke,ft="Y por otra parte, una página copia modificada con el resultado VISUAL esperado",mt,Q,Ne,xt,fe,qe,Lt=`SÉ LO QUE ESTÁS PENSANDO (o deberías): “pero Alexander, en el esperado no hay
ningún SVG, ¡solo le has puesto un borde naranja de 4 píxeles al elemento!”`,bt,re,Ye=`A esto es a lo que me refiero con especificación visual. Podría haber un SVG
hecho a mano (de hecho los hay en specs más complejas) y seguiría siendo válido,
pero en realidad no importa la estructura,
no es lo que estamos especificando ni testando aquí.`,Dt,qt,Kt=`Al igual que con tests convencionales, buscamos la forma menos compleja y más
directa de definir lo que queremos (en este caso lo que queremos visualmente).`,oe,E,ee=`Créeme, esto no lo hago por mejorar la adaptabilidad y reducir la fragilidad del
test, aunque sean sus efectos positivos principales, sino porque simplemente es la
forma más sencilla que se me ha ocurrido de conseguir lo que se busca visualmente.`,ue,le,ae=`En una clásica “especificación por ejemplo” con GIVEN-WHEN-THEN, esta parte
correspondería al THEN, y al igual que en las especificaciones convencionales,
debe expresarse de la forma más directa y clara atendiendo en este caso
exclusivamente al resultado visible (ya que es la única responsabilidad en
estos tests).`,Oe,ke,at=`Veamos un test similar al del Mundo Real™. El original y funcional lo tienes
en el repositorio (enlace al final). Es un test parametrizado, se genera con variaciones de
expectedWidth (xW) y expectedHeight (xH).`,Qe,j,N,ge,ht=`NOTA: que veas tanta especificidad como
orange o 4px, algo que no suele ser recomendado en specs/tests, es normal en este caso porque
estamos especificando los valores default, es de las pocas excepciones a la regla.`,Ot,Pt,Ht=`La función es autoexplicativa. Recibe la página donde se ejecutará la acción
a testar, la página con la que comparar, y la acción a realizar. Tras lanzar el
test debería fallar al no tener implementación inicialmente.
El test report de Playwright en este caso me reporta una comparación de
múltiples formas, entre ellas una muy chula con un slider. Captura:`,Ut,lt,Ft,Mt,jt,Vt,Jt="Sólo lo visible",ln,At,pn=`Tengo que insistir en que sólo hago esto con fines de testar el resultado
visual. Puede que te preguntes algo como “¿No estás perdiendo la oportunidad
de especificar directamente un resultado final que sirva también de
especificación del DOM deseado para una prueba E2E completa?”`,cn,zt,Hn=`No conozco (todavía) el DOM deseado y no puedo <em>perder tiempo</em> planificando.
Esto me permite especificar el
resultado visual, que es lo único que tengo claro ahora mismo. Además los SVG
para un mismo objetivo se pueden generar de múltiples maneras. Exagerar el
detalle aumenta la rigidez del diseño, no permite posponer decisiones y aumenta
la fragilidad de los tests.`,fn,Wt,Di=`Por otra parte también nos limitaría más con escenarios menos deterministas.
Imagina que quieres que el recuadro
siga al elemento si este se reposiciona (típico al reescalar pantalla).
Esto es algo que debe hacer la biblioteca, ¿cómo especificaríamos algo así?
Implicaría lógica en el propio test. En los expects
se evitan lógicas complejas a favor de resultados directos deterministas.
Un borde por CSS no solo está fijado a un elemento, también funciona aunque
reescales o lo muevas.`,Dn,K,je="Otras preguntas relacionadas que me he planteado",kn,vn,is=`¿Por qué hacer un esfuerzo en especificar partes del aspecto visual esperado
en un desarrollo si muy probablemente haya partes que no
podremos especificar de todas formas?, ¿no es como intentar construir una casa
en la que sabemos de antemano que nunca tendremos techo o alguna otra parte
fundamental?`,ci,gn,as=`Ya tenemos la respuesta en la jerarquía de tests. Sabemos que las pruebas
unitarias no nos sirven para todo, ni tampoco las de integración. Pero lo
hacemos igualmente porque nos guían y cubren el desarrollo, cada una a su
manera, con pros y contras. Técnicamente podríamos usar solo tests de aceptación
si estos fueran infinitamente rápidos, y aún así, muy probablemente se seguirían
realizando pruebas unitarias y de integración junto a ellos.`,ui,_n,ss=`Puedes tener un muy buen maquetador, diseñador, artista o artista técnico en tu
equipo durante el desarrollo de una aplicación, con capacidad para
diseñar/especificar rápidamente el resultado que quieres pero sin competencias o tiempo
para realizar la herramienta que produzca ese resultado.`,di,xn,os=`He conocido empresas que trabajan con un flujo basado en
prototipos, y eso está perfecto, pero podría ser muy útil entender esos
prototipos como especificaciones y realizar pruebas directas contra ellos.`,pi,bn,rs="¿Cómo de útil es esto realmente?",fi,yn,ls=`La respuesta es algo evidente: si fuera muy útil habría
literatura al respecto y alguna que otra herramienta conocida. Créeme, no soy
ningún genio extendiendo el estado del arte. Esta “técnica”
viene de perlas para el desarrollo de esta biblioteca en concreto, pero, ¿se
te ocurre alguna otra? No es especialmente extrapolable. Ni siquiera es
suficiente para todos los casos de esta biblioteca.`,hi,Mn,cs=`Voy a describirte un caso difícil de explicar: imagina que quieres
señalizar con una flecha que apunta siempre a un objetivo.
Supón que incluso aunque este se mueva en pantalla la flecha mantenga su
posición y gire apuntando siempre al objetivo (un “look at” en gráficos).`,mi,Cn,us=`La descripción anterior es incluso difícil de imaginar para algunos, supone
problemas en cómo especificarla y cómo testarla. Y ni siquiera es algo realmente
complejo. En las artes visuales muchas
veces no queda más remedio que romper el orden rojo-verde porque el esfuerzo de
especificar puede ser indistinguible del de implementar.`,vi,Sn,ds=`Es ahí donde destaca la regresión visual clásica. Implementas y cuando estés
satisfecho, snapshot que servirá como “expected”. No te habrá servido para
guiar tu diseño e implementación, pero seguirás protegiendo tu código y
permitiendo el refactoring.`,gi,En,ps=`Pero no olvides que al final eres tú (o tu equipo) quien decide si cualquier
técnica es o no rentable de aplicar en el flujo de trabajo. Incluso aunque
existiera garantía de que aplicarlo mejorase la productividad o calidad,
podría causar el efecto contrario si diezma la moral al percibirse como
algo pesado, raro o molesto por mera falta de costumbre. La misma historia
del TDD.`,_i,Tn,fs="Point it out como posible ejemplo de especificación visual",xi,An,hs=`Puedes seguir el desarrollo de <a href="https://github.com/alexvgjm/point-it-out" rel="nofollow">Point it out! en github</a>,
donde verás que hay mucho de lo hablado en este artículo llevado a un
nivel enfermizo. Es un proyecto pensado para experimentar y debatir
acerca de las posibilidades de la especificación visual.`,bi,wn,ms=`Si clonas y ejecutas el proyecto en modo de desarrollo podrás encontrar una
jerarquía de especificaciones bastante intensa para al menos dos formas y
dos tamaños de objetivos.
Aquí una screenshot:`,yi,Pn,ji;return L=new br({props:{$$slots:{default:[d_]},$$scope:{ctx:i}}}),z=new Xn({props:{$$slots:{default:[p_]},$$scope:{ctx:i}}}),Y=new Nn({props:{language:"TypeScript",$$slots:{default:[f_]},$$scope:{ctx:i}}}),Te=new Nn({props:{language:"TypeScript",$$slots:{default:[h_]},$$scope:{ctx:i}}}),$e=new br({props:{$$slots:{default:[m_]},$$scope:{ctx:i}}}),G=new Nn({props:{language:"TypeScript",$$slots:{default:[v_]},$$scope:{ctx:i}}}),Ze=new Fl({props:{gap:4,$$slots:{right:[b_],left:[__]},$$scope:{ctx:i}}}),ot=new Ol({props:{width:250,height:150}}),Q=new Fl({props:{gap:4,$$slots:{right:[S_],left:[M_]},$$scope:{ctx:i}}}),xt=new Ol({props:{width:250,height:150,showBorder:!0}}),j=new Nn({props:{language:"TypeScript",$$slots:{default:[E_]},$$scope:{ctx:i}}}),lt=new ba({props:{src:u_,alt:"Test report de Playwright mostrando resultado actual y esperado con slider"}}),Mt=new Xn({props:{$$slots:{default:[T_]},$$scope:{ctx:i}}}),Pn=new ba({props:{src:c_,alt:""}}),{c(){e=x("p"),e.textContent=t,n=y(),a=x("p"),a.innerHTML=s,c=y(),l=x("p"),l.textContent=u,p=y(),d=x("p"),d.innerHTML=v,f=y(),g=x("h2"),g.textContent=T,S=y(),h=x("p"),m=dt(`Por ejemplo, ¿qué podría hacer si quisiera
señalizar `),Ct(L.$$.fragment),P=dt(`?
Si todo funciona bien deberías estar viendo un rectángulo verde sobre las palabras indicadas.`),q=y(),V=x("p"),V.textContent=I,H=y(),Ct(z.$$.fragment),w=y(),A=x("p"),A.textContent=B,W=y(),Ct(Y.$$.fragment),X=y(),te=x("p"),te.innerHTML=se,de=y(),$=x("ul"),$.innerHTML=De,ie=y(),me=x("p"),me.textContent=We,ze=y(),J=x("h3"),J.textContent=Ee,Re=y(),Se=x("p"),Se.textContent=Be,ce=y(),Ct(Te.$$.fragment),it=y(),F=x("p"),F.textContent=Ge,nt=y(),He=x("h2"),He.textContent=Le,st=y(),Ue=x("p"),Ue.innerHTML=Fe,O=y(),_=x("p"),_.innerHTML=R,ne=y(),pe=x("h3"),pe.textContent=he,Ve=y(),Ae=x("p"),Ie=dt("La siguiente forma de proceder y opiniones son, hasta donde sé, de "),Ct($e.$$.fragment),k=dt(`. No he hecho una investigación exhaustiva ni
sé si hay autores que han escrito sobre esto a favor o en contra. Por eso no
asumas nada de lo que expongo aquí, evita todo prejuicio positivo y afila la
sospecha y la duda.`),_e=y(),et=x("p"),et.textContent=Z,ve=y(),Xe=x("p"),Xe.textContent=Je,ct=y(),Ct(G.$$.fragment),we=y(),Ce=x("p"),Ce.textContent=ye,Pe=y(),Ct(Ze.$$.fragment),tt=y(),Ct(ot.$$.fragment),ut=y(),Ke=x("p"),Ke.textContent=ft,mt=y(),Ct(Q.$$.fragment),Ne=y(),Ct(xt.$$.fragment),fe=y(),qe=x("p"),qe.textContent=Lt,bt=y(),re=x("p"),re.textContent=Ye,Dt=y(),qt=x("p"),qt.textContent=Kt,oe=y(),E=x("p"),E.textContent=ee,ue=y(),le=x("p"),le.textContent=ae,Oe=y(),ke=x("p"),ke.textContent=at,Qe=y(),Ct(j.$$.fragment),N=y(),ge=x("small"),ge.textContent=ht,Ot=y(),Pt=x("p"),Pt.textContent=Ht,Ut=y(),Ct(lt.$$.fragment),Ft=y(),Ct(Mt.$$.fragment),jt=y(),Vt=x("h4"),Vt.textContent=Jt,ln=y(),At=x("p"),At.textContent=pn,cn=y(),zt=x("p"),zt.innerHTML=Hn,fn=y(),Wt=x("p"),Wt.textContent=Di,Dn=y(),K=x("h3"),K.textContent=je,kn=y(),vn=x("p"),vn.textContent=is,ci=y(),gn=x("p"),gn.textContent=as,ui=y(),_n=x("p"),_n.textContent=ss,di=y(),xn=x("p"),xn.textContent=os,pi=y(),bn=x("h3"),bn.textContent=rs,fi=y(),yn=x("p"),yn.textContent=ls,hi=y(),Mn=x("p"),Mn.textContent=cs,mi=y(),Cn=x("p"),Cn.textContent=us,vi=y(),Sn=x("p"),Sn.textContent=ds,gi=y(),En=x("p"),En.textContent=ps,_i=y(),Tn=x("h2"),Tn.textContent=fs,xi=y(),An=x("p"),An.innerHTML=hs,bi=y(),wn=x("p"),wn.textContent=ms,yi=y(),Ct(Pn.$$.fragment)},l(U){e=b(U,"P",{"data-svelte-h":!0}),C(e)!=="svelte-kz757p"&&(e.textContent=t),n=M(U),a=b(U,"P",{"data-svelte-h":!0}),C(a)!=="svelte-yr62zz"&&(a.innerHTML=s),c=M(U),l=b(U,"P",{"data-svelte-h":!0}),C(l)!=="svelte-1ajb8gz"&&(l.textContent=u),p=M(U),d=b(U,"P",{"data-svelte-h":!0}),C(d)!=="svelte-10jjd54"&&(d.innerHTML=v),f=M(U),g=b(U,"H2",{"data-svelte-h":!0}),C(g)!=="svelte-jzlcfs"&&(g.textContent=T),S=M(U),h=b(U,"P",{});var xe=kt(h);m=pt(xe,`Por ejemplo, ¿qué podría hacer si quisiera
señalizar `),St(L.$$.fragment,xe),P=pt(xe,`?
Si todo funciona bien deberías estar viendo un rectángulo verde sobre las palabras indicadas.`),xe.forEach(o),q=M(U),V=b(U,"P",{"data-svelte-h":!0}),C(V)!=="svelte-h9dgi1"&&(V.textContent=I),H=M(U),St(z.$$.fragment,U),w=M(U),A=b(U,"P",{"data-svelte-h":!0}),C(A)!=="svelte-wn3vay"&&(A.textContent=B),W=M(U),St(Y.$$.fragment,U),X=M(U),te=b(U,"P",{"data-svelte-h":!0}),C(te)!=="svelte-rz0i50"&&(te.innerHTML=se),de=M(U),$=b(U,"UL",{"data-svelte-h":!0}),C($)!=="svelte-ts57wb"&&($.innerHTML=De),ie=M(U),me=b(U,"P",{"data-svelte-h":!0}),C(me)!=="svelte-1li2hkb"&&(me.textContent=We),ze=M(U),J=b(U,"H3",{"data-svelte-h":!0}),C(J)!=="svelte-1cetu9r"&&(J.textContent=Ee),Re=M(U),Se=b(U,"P",{"data-svelte-h":!0}),C(Se)!=="svelte-nv0msx"&&(Se.textContent=Be),ce=M(U),St(Te.$$.fragment,U),it=M(U),F=b(U,"P",{"data-svelte-h":!0}),C(F)!=="svelte-86gsr"&&(F.textContent=Ge),nt=M(U),He=b(U,"H2",{"data-svelte-h":!0}),C(He)!=="svelte-1jmchc1"&&(He.textContent=Le),st=M(U),Ue=b(U,"P",{"data-svelte-h":!0}),C(Ue)!=="svelte-18ctydr"&&(Ue.innerHTML=Fe),O=M(U),_=b(U,"P",{"data-svelte-h":!0}),C(_)!=="svelte-13avi2k"&&(_.innerHTML=R),ne=M(U),pe=b(U,"H3",{"data-svelte-h":!0}),C(pe)!=="svelte-1gxnwn7"&&(pe.textContent=he),Ve=M(U),Ae=b(U,"P",{});var ei=kt(Ae);Ie=pt(ei,"La siguiente forma de proceder y opiniones son, hasta donde sé, de "),St($e.$$.fragment,ei),k=pt(ei,`. No he hecho una investigación exhaustiva ni
sé si hay autores que han escrito sobre esto a favor o en contra. Por eso no
asumas nada de lo que expongo aquí, evita todo prejuicio positivo y afila la
sospecha y la duda.`),ei.forEach(o),_e=M(U),et=b(U,"P",{"data-svelte-h":!0}),C(et)!=="svelte-evd6ah"&&(et.textContent=Z),ve=M(U),Xe=b(U,"P",{"data-svelte-h":!0}),C(Xe)!=="svelte-1usqu0d"&&(Xe.textContent=Je),ct=M(U),St(G.$$.fragment,U),we=M(U),Ce=b(U,"P",{"data-svelte-h":!0}),C(Ce)!=="svelte-13cl2ob"&&(Ce.textContent=ye),Pe=M(U),St(Ze.$$.fragment,U),tt=M(U),St(ot.$$.fragment,U),ut=M(U),Ke=b(U,"P",{"data-svelte-h":!0}),C(Ke)!=="svelte-1pvoef4"&&(Ke.textContent=ft),mt=M(U),St(Q.$$.fragment,U),Ne=M(U),St(xt.$$.fragment,U),fe=M(U),qe=b(U,"P",{"data-svelte-h":!0}),C(qe)!=="svelte-s99gcn"&&(qe.textContent=Lt),bt=M(U),re=b(U,"P",{"data-svelte-h":!0}),C(re)!=="svelte-xp8med"&&(re.textContent=Ye),Dt=M(U),qt=b(U,"P",{"data-svelte-h":!0}),C(qt)!=="svelte-1qkk97s"&&(qt.textContent=Kt),oe=M(U),E=b(U,"P",{"data-svelte-h":!0}),C(E)!=="svelte-lro4l7"&&(E.textContent=ee),ue=M(U),le=b(U,"P",{"data-svelte-h":!0}),C(le)!=="svelte-1hghbyz"&&(le.textContent=ae),Oe=M(U),ke=b(U,"P",{"data-svelte-h":!0}),C(ke)!=="svelte-1n9drh4"&&(ke.textContent=at),Qe=M(U),St(j.$$.fragment,U),N=M(U),ge=b(U,"SMALL",{"data-svelte-h":!0}),C(ge)!=="svelte-og0ogg"&&(ge.textContent=ht),Ot=M(U),Pt=b(U,"P",{"data-svelte-h":!0}),C(Pt)!=="svelte-1u74y51"&&(Pt.textContent=Ht),Ut=M(U),St(lt.$$.fragment,U),Ft=M(U),St(Mt.$$.fragment,U),jt=M(U),Vt=b(U,"H4",{"data-svelte-h":!0}),C(Vt)!=="svelte-ftmlr4"&&(Vt.textContent=Jt),ln=M(U),At=b(U,"P",{"data-svelte-h":!0}),C(At)!=="svelte-1dxwr9q"&&(At.textContent=pn),cn=M(U),zt=b(U,"P",{"data-svelte-h":!0}),C(zt)!=="svelte-1t2sbdi"&&(zt.innerHTML=Hn),fn=M(U),Wt=b(U,"P",{"data-svelte-h":!0}),C(Wt)!=="svelte-1d5db4w"&&(Wt.textContent=Di),Dn=M(U),K=b(U,"H3",{"data-svelte-h":!0}),C(K)!=="svelte-xnqpfg"&&(K.textContent=je),kn=M(U),vn=b(U,"P",{"data-svelte-h":!0}),C(vn)!=="svelte-10rlsf7"&&(vn.textContent=is),ci=M(U),gn=b(U,"P",{"data-svelte-h":!0}),C(gn)!=="svelte-1t9pwnw"&&(gn.textContent=as),ui=M(U),_n=b(U,"P",{"data-svelte-h":!0}),C(_n)!=="svelte-dp70ds"&&(_n.textContent=ss),di=M(U),xn=b(U,"P",{"data-svelte-h":!0}),C(xn)!=="svelte-hpg0ix"&&(xn.textContent=os),pi=M(U),bn=b(U,"H3",{"data-svelte-h":!0}),C(bn)!=="svelte-12fyqdo"&&(bn.textContent=rs),fi=M(U),yn=b(U,"P",{"data-svelte-h":!0}),C(yn)!=="svelte-1lhdzti"&&(yn.textContent=ls),hi=M(U),Mn=b(U,"P",{"data-svelte-h":!0}),C(Mn)!=="svelte-1rh7odk"&&(Mn.textContent=cs),mi=M(U),Cn=b(U,"P",{"data-svelte-h":!0}),C(Cn)!=="svelte-urr5oj"&&(Cn.textContent=us),vi=M(U),Sn=b(U,"P",{"data-svelte-h":!0}),C(Sn)!=="svelte-1appavq"&&(Sn.textContent=ds),gi=M(U),En=b(U,"P",{"data-svelte-h":!0}),C(En)!=="svelte-zv5b0r"&&(En.textContent=ps),_i=M(U),Tn=b(U,"H2",{"data-svelte-h":!0}),C(Tn)!=="svelte-tboj21"&&(Tn.textContent=fs),xi=M(U),An=b(U,"P",{"data-svelte-h":!0}),C(An)!=="svelte-1yr7544"&&(An.innerHTML=hs),bi=M(U),wn=b(U,"P",{"data-svelte-h":!0}),C(wn)!=="svelte-hh4l2w"&&(wn.textContent=ms),yi=M(U),St(Pn.$$.fragment,U)},m(U,xe){r(U,e,xe),r(U,n,xe),r(U,a,xe),r(U,c,xe),r(U,l,xe),r(U,p,xe),r(U,d,xe),r(U,f,xe),r(U,g,xe),r(U,S,xe),r(U,h,xe),_t(h,m),Et(L,h,null),_t(h,P),r(U,q,xe),r(U,V,xe),r(U,H,xe),Et(z,U,xe),r(U,w,xe),r(U,A,xe),r(U,W,xe),Et(Y,U,xe),r(U,X,xe),r(U,te,xe),r(U,de,xe),r(U,$,xe),r(U,ie,xe),r(U,me,xe),r(U,ze,xe),r(U,J,xe),r(U,Re,xe),r(U,Se,xe),r(U,ce,xe),Et(Te,U,xe),r(U,it,xe),r(U,F,xe),r(U,nt,xe),r(U,He,xe),r(U,st,xe),r(U,Ue,xe),r(U,O,xe),r(U,_,xe),r(U,ne,xe),r(U,pe,xe),r(U,Ve,xe),r(U,Ae,xe),_t(Ae,Ie),Et($e,Ae,null),_t(Ae,k),r(U,_e,xe),r(U,et,xe),r(U,ve,xe),r(U,Xe,xe),r(U,ct,xe),Et(G,U,xe),r(U,we,xe),r(U,Ce,xe),r(U,Pe,xe),Et(Ze,U,xe),r(U,tt,xe),Et(ot,U,xe),r(U,ut,xe),r(U,Ke,xe),r(U,mt,xe),Et(Q,U,xe),r(U,Ne,xe),Et(xt,U,xe),r(U,fe,xe),r(U,qe,xe),r(U,bt,xe),r(U,re,xe),r(U,Dt,xe),r(U,qt,xe),r(U,oe,xe),r(U,E,xe),r(U,ue,xe),r(U,le,xe),r(U,Oe,xe),r(U,ke,xe),r(U,Qe,xe),Et(j,U,xe),r(U,N,xe),r(U,ge,xe),r(U,Ot,xe),r(U,Pt,xe),r(U,Ut,xe),Et(lt,U,xe),r(U,Ft,xe),Et(Mt,U,xe),r(U,jt,xe),r(U,Vt,xe),r(U,ln,xe),r(U,At,xe),r(U,cn,xe),r(U,zt,xe),r(U,fn,xe),r(U,Wt,xe),r(U,Dn,xe),r(U,K,xe),r(U,kn,xe),r(U,vn,xe),r(U,ci,xe),r(U,gn,xe),r(U,ui,xe),r(U,_n,xe),r(U,di,xe),r(U,xn,xe),r(U,pi,xe),r(U,bn,xe),r(U,fi,xe),r(U,yn,xe),r(U,hi,xe),r(U,Mn,xe),r(U,mi,xe),r(U,Cn,xe),r(U,vi,xe),r(U,Sn,xe),r(U,gi,xe),r(U,En,xe),r(U,_i,xe),r(U,Tn,xe),r(U,xi,xe),r(U,An,xe),r(U,bi,xe),r(U,wn,xe),r(U,yi,xe),Et(Pn,U,xe),ji=!0},p(U,[xe]){const ei={};xe&8&&(ei.$$scope={dirty:xe,ctx:U}),L.$set(ei);const Wi={};xe&8&&(Wi.$$scope={dirty:xe,ctx:U}),z.$set(Wi);const ti={};xe&8&&(ti.$$scope={dirty:xe,ctx:U}),Y.$set(ti);const vs={};xe&8&&(vs.$$scope={dirty:xe,ctx:U}),Te.$set(vs);const $i={};xe&8&&($i.$$scope={dirty:xe,ctx:U}),$e.$set($i);const ni={};xe&8&&(ni.$$scope={dirty:xe,ctx:U}),G.$set(ni);const gs={};xe&8&&(gs.$$scope={dirty:xe,ctx:U}),Ze.$set(gs);const Xi={};xe&8&&(Xi.$$scope={dirty:xe,ctx:U}),Q.$set(Xi);const ii={};xe&8&&(ii.$$scope={dirty:xe,ctx:U}),j.$set(ii);const _s={};xe&8&&(_s.$$scope={dirty:xe,ctx:U}),Mt.$set(_s)},i(U){ji||(vt(L.$$.fragment,U),vt(z.$$.fragment,U),vt(Y.$$.fragment,U),vt(Te.$$.fragment,U),vt($e.$$.fragment,U),vt(G.$$.fragment,U),vt(Ze.$$.fragment,U),vt(ot.$$.fragment,U),vt(Q.$$.fragment,U),vt(xt.$$.fragment,U),vt(j.$$.fragment,U),vt(lt.$$.fragment,U),vt(Mt.$$.fragment,U),vt(Pn.$$.fragment,U),ji=!0)},o(U){gt(L.$$.fragment,U),gt(z.$$.fragment,U),gt(Y.$$.fragment,U),gt(Te.$$.fragment,U),gt($e.$$.fragment,U),gt(G.$$.fragment,U),gt(Ze.$$.fragment,U),gt(ot.$$.fragment,U),gt(Q.$$.fragment,U),gt(xt.$$.fragment,U),gt(j.$$.fragment,U),gt(lt.$$.fragment,U),gt(Mt.$$.fragment,U),gt(Pn.$$.fragment,U),ji=!1},d(U){U&&(o(e),o(n),o(a),o(c),o(l),o(p),o(d),o(f),o(g),o(S),o(h),o(q),o(V),o(H),o(w),o(A),o(W),o(X),o(te),o(de),o($),o(ie),o(me),o(ze),o(J),o(Re),o(Se),o(ce),o(it),o(F),o(nt),o(He),o(st),o(Ue),o(O),o(_),o(ne),o(pe),o(Ve),o(Ae),o(_e),o(et),o(ve),o(Xe),o(ct),o(we),o(Ce),o(Pe),o(tt),o(ut),o(Ke),o(mt),o(Ne),o(fe),o(qe),o(bt),o(re),o(Dt),o(qt),o(oe),o(E),o(ue),o(le),o(Oe),o(ke),o(Qe),o(N),o(ge),o(Ot),o(Pt),o(Ut),o(Ft),o(jt),o(Vt),o(ln),o(At),o(cn),o(zt),o(fn),o(Wt),o(Dn),o(K),o(kn),o(vn),o(ci),o(gn),o(ui),o(_n),o(di),o(xn),o(pi),o(bn),o(fi),o(yn),o(hi),o(Mn),o(mi),o(Cn),o(vi),o(Sn),o(gi),o(En),o(_i),o(Tn),o(xi),o(An),o(bi),o(wn),o(yi)),Tt(L),Tt(z,U),Tt(Y,U),Tt(Te,U),Tt($e),Tt(G,U),Tt(Ze,U),Tt(ot,U),Tt(Q,U),Tt(xt,U),Tt(j,U),Tt(lt,U),Tt(Mt,U),Tt(Pn,U)}}}const w_={title:"Especificación visual. Caso Point it out!",slug:"especificacion-visual-caso-point-it-out",coverImage:"/src/assets/posts-covers/pio-round-fail-test.png",coverAuthor:"",excerpt:"Caso de un proyecto en activo para el que repaso el concepto de regresión visual y especificación visual. Contenido denso.",date:"2024-07-25T15:06:23.177Z",updated:"2024-07-25T15:06:23.903Z",hidden:!1,tags:["TDD/BDD/ATDD","Tooling","DX"],keywords:["svg","regresión visual","visual testing"],type:"default",coverPosition:"top"};function P_(i){return Wc(()=>{Iu("rect",{target:"#example-target",strokeWidth:4,strokeColor:"#3f37",padding:2})}),[]}class R_ extends Xt{constructor(e){super(),Yt(this,e,P_,A_,$t,{})}}const L_=Object.freeze(Object.defineProperty({__proto__:null,default:R_,metadata:w_},Symbol.toStringTag,{value:"Module"}));function D_(i){let e,t=`Me aconsejaba un compañero, preocupado, que no debería atreverme a exponer aquí
opiniones personales que puedan mostrar lo que algunas empresas consideran
red flags, por muy personal que sea este blog.`,n,a,s=`Y no le falta razón. Puedes generar rechazo incluso en aquellos que comparten
tus mismos valores y opiniones: parecer imprudente o demasiado polémico no suele
ser buena idea.`,c,l,u=`Lejos de lo que pueda proyectar a mis alumnos o compañeros, no estoy en
ninguna situación privilegiada que me permita hacer o decir lo que quiera. No
tengo una cola de empresas interesadas en mí, un millón en el banco ni ningún
otro tipo de estabilidad garantizada. Cada opinión podría sentenciarme o hacerme
perder oportunidades.`,p,d,v="Entonces, ¿por qué me expongo?",f,g,T="Cincel",S,h,m=`Suelo decir que moriré en el momento en el que deje de
cambiar, y una forma muy efectiva de realizar introspección es poner en tela
de juicio mis propias convicciones. Uso este blog como una herramienta para
dicho fin.`,L,P,q=`Mojarme con opiniones personales me genera la suficiente ansiedad y tensión
psicológica para disparar muchas dudas. Esto se intensifica tras ver que mucha
más gente de la que creía lee este blog con tanto interés <em>(sinceramente
estaba convencido de que no lo leería nadie, eso lo hacía todo más fácil)</em>.`,V,I,H=`Nunca he tenido la intención de construir una marca personal con este sitio y
menos con un blog. Solo es un espacio donde poder contar
<a href="/blog/el-hacking-a-google">batallitas</a>, experimentar con alguna
<a href="/blog/especificacion-visual-caso-point-it-out">técnica</a> que se me ocurra y
hablar de resultados de <a href="/blog/tamano-no-importa-tree-shakeables">algunas pruebas</a>.
Tampoco me expongo tanto. Como dije en mi primera entrada, a diferencia de una
red social, aquí tengo mejor control del contenido.`;return{c(){e=x("p"),e.textContent=t,n=y(),a=x("p"),a.textContent=s,c=y(),l=x("p"),l.textContent=u,p=y(),d=x("p"),d.textContent=v,f=y(),g=x("h2"),g.textContent=T,S=y(),h=x("p"),h.textContent=m,L=y(),P=x("p"),P.innerHTML=q,V=y(),I=x("p"),I.innerHTML=H},l(z){e=b(z,"P",{"data-svelte-h":!0}),C(e)!=="svelte-1xcuoki"&&(e.textContent=t),n=M(z),a=b(z,"P",{"data-svelte-h":!0}),C(a)!=="svelte-1ih9oma"&&(a.textContent=s),c=M(z),l=b(z,"P",{"data-svelte-h":!0}),C(l)!=="svelte-1mnz7bv"&&(l.textContent=u),p=M(z),d=b(z,"P",{"data-svelte-h":!0}),C(d)!=="svelte-1qj6ocr"&&(d.textContent=v),f=M(z),g=b(z,"H2",{"data-svelte-h":!0}),C(g)!=="svelte-whrey8"&&(g.textContent=T),S=M(z),h=b(z,"P",{"data-svelte-h":!0}),C(h)!=="svelte-8rc8kg"&&(h.textContent=m),L=M(z),P=b(z,"P",{"data-svelte-h":!0}),C(P)!=="svelte-g0oryt"&&(P.innerHTML=q),V=M(z),I=b(z,"P",{"data-svelte-h":!0}),C(I)!=="svelte-13eb6x1"&&(I.innerHTML=H)},m(z,w){r(z,e,w),r(z,n,w),r(z,a,w),r(z,c,w),r(z,l,w),r(z,p,w),r(z,d,w),r(z,f,w),r(z,g,w),r(z,S,w),r(z,h,w),r(z,L,w),r(z,P,w),r(z,V,w),r(z,I,w)},p:wt,i:wt,o:wt,d(z){z&&(o(e),o(n),o(a),o(c),o(l),o(p),o(d),o(f),o(g),o(S),o(h),o(L),o(P),o(V),o(I))}}}const U_={title:"Miedo de decir, miedo de ser",slug:"miedo-de-decir-miedo-de-ser",coverImage:"paisaje-miedo.jpg",coverAuthor:"Karsten Würth",excerpt:"Me han preguntado si no me da miedo escribir algunas cosas,  pues podría estar saboteando mi futuro. Respondo.",date:"2024-11-28T01:09:04.325Z",updated:"2024-11-28T01:09:04.326Z",hidden:!1,tags:["Personal","Laboral"],keywords:[],type:"default"};class I_ extends Xt{constructor(e){super(),Yt(this,e,null,D_,$t,{})}}const N_=Object.freeze(Object.defineProperty({__proto__:null,default:I_,metadata:U_},Symbol.toStringTag,{value:"Module"}));function q_(i){let e,t,n="Type Challenges",a;return{c(){e=dt("En el repo "),t=x("a"),t.textContent=n,a=dt(`
de Anthony Fu puedes encontrar una gran variedad de desafíos y soluciones de
tipado de todos los niveles, donde verás que no en pocas ocasiones se utiliza
any en un sentido semántico y justificado, sin implicaciones
problemáticas, pero incluso ahí, en la mayoría de casos puede usarse alguna
alternativa, muchas veces un simple unknown puede reemplazarlo sin necesidad
de narrowing ni nada extra.`),this.h()},l(s){e=pt(s,"En el repo "),t=b(s,"A",{href:!0,style:!0,"data-svelte-h":!0}),C(t)!=="svelte-1cco9go"&&(t.textContent=n),a=pt(s,`
de Anthony Fu puedes encontrar una gran variedad de desafíos y soluciones de
tipado de todos los niveles, donde verás que no en pocas ocasiones se utiliza
any en un sentido semántico y justificado, sin implicaciones
problemáticas, pero incluso ahí, en la mayoría de casos puede usarse alguna
alternativa, muchas veces un simple unknown puede reemplazarlo sin necesidad
de narrowing ni nada extra.`),this.h()},h(){yt(t,"href","https://github.com/type-challenges"),jn(t,"color","var(--color-font-highlight)")},m(s,c){r(s,e,c),r(s,t,c),r(s,a,c)},p:wt,d(s){s&&(o(e),o(t),o(a))}}}function F_(i){let e,t=`Recientemente un colega de profesión se ha sorprendido al
permitirle usar <code>any</code> en TypeScript. Suelo dar mucho la turra con ello.
En la práctica totalidad del código que he auditado rara vez he
encontrado algún <code>any</code> justificado en usos “normales”.`,n,a,s=`El uso justificado de <code>any</code> más habitual que he
visto es precisamente el que <a href="https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#any" rel="nofollow">podemos encontrar en la documentación</a>, traduzco:`,c,l,u=`<p>❌ No uses <code>any</code> como un tipo salvo que estés en proceso de migrar un proyecto
de JavaScript a TypeScript.
El compilador tratará el <code>any</code> como “por favor desactiva la revisión de tipos para esto”.
Similar a poner un comentario @ts-ignore alrededor de cada uso de la variable.
Esto puede ser realmente útil cuando comienzas a migrar un proyecto de JavaScript a TypeScript
dado que puedes establecer el tipo de las partes aún no migradas a any, pero en un
proyecto full TypeScript estarás desactivando el tipado para cada parte del programa que
lo utilice.</p>`,p,d,v=`Pero, ¿quién decide qué es justificación y qué excusa?, ¿cómo diferencias una
negligencia de una decisión deliberada con buena finalidad?`,f,g,T,S,h="Lo mejor no significa lo más práctico",m,L,P=`Cuando no tienes conocimientos avanzados de TypeScript y tipar correctamente un
caso extraño puede implicar muchas horas, hay que aprender a poner límites a la
excelencia.`,q,V,I=`Tenemos muchas herramientas para minimizar el impacto
que implica un tipado incompleto, empezando por flexibilizar el tipo y proteger
con tests.`,H,z,w=`No hace falta que haya prisa o se acerque una deadline para tomar estas
decisiones, quizás hemos pillado mucho impulso y no queremos
pararnos a estar con detalles, por mucho que sea lo correcto, no estamos en el
“mood” de hacer esto.`,A,B,W=`Esto puede ser todavía más crítico durante una fase de diseño donde no está del
todo claro la estructura que vamos a tener. Definir tipos muy avanzados y
complejos a medida que se trabaja puede impedirnos el posponer decisiones. Tengo
mucho que escribir sobre el arte de posponer decisiones. De momento te recomiendo
buscar “El arte del patadón pa’lante” de Eduardo Ferro.`,Y,X,te="Roles y responsabilidades",se,de,$=`Hace un año, David Heinemeier Hansson (DHH), creador de Ruby on Rails,
generó una fuerte polémica en lo que fue casi entendido como <a href="https://world.hey.com/dhh/turbo-8-is-dropping-typescript-70165c01" rel="nofollow">un manifiesto
contra TypeScript</a>, explicando
cómo abandonaron TypeScript en su proyecto Turbo tras pasar infiernos con él.`,De,ie,me=`DHH señalaba, entre tantas quejas, a la enorme necesidad de usar any que tenían
en su proyecto, siendo TypeScript inútil o estando desactivado en la mayoría de
casos. Hice una auditoría personal a ese proyecto. Mi conclusión: no lo entendían
ni sabían usarlo.`,We,ze,J=`Y no es que yo me considerara un experto en esta tecnología entonces, ni ahora,
pero claramente veía el trabajo de personas que la habían trivializado. Muchos
seniors creen que TypeScript es una “tontería” para meter tipado y ya, algo que
se aprende en minutos.`,Ee,Re,Se=`Entender correctamente sus flujos de análisis y sus características
avanzadas no es algo trivial, y casi diría que es muy vocacional: aquellos que
disfrutan el tooling y la DX tienen una mayor inclinación natural hacia él.`,Be,ce,Te=`Al principio uno puede estar horas, y no exagero, dando vueltas a cómo conseguir
tipar una estructura de datos sencillita para que tenga coherencia. Quien
trivializa considerará que es una tontería que se hace en cinco minutos.`,it,F,Ge=`Era evidente que entre el equipo de DHH no había nadie con experiencia avanzada
en TypeScript, lo que me sorprende porque el propio DHH decía haber estado
cinco años trabajando con él, lo que resalta la necesidad de tener al menos a
una persona centrada en la experiencia de desarrollo y profundizar en esto.`,nt,He,Le=`JavaScript puede migrarse a TypeScript, y durante un proyecto puede trabajarse
con JavaScript o desactivar el chequeo de tipos de algún tipo complejo <strong>mientras
alguien asume la responsabilidad de revisar y tipar</strong>. De este modo,
todo el mundo está cómodo en su trabajo y se sigue obteniendo lo mejor de ambos
mundos de cara al futuro del proyecto.`,st,Ue,Fe=`Con este enfoque y con el tiempo, el conocimiento de los expertos
(habitualmente DX) acaba
permeando y transmitiéndose a todo el equipo y poco a poco otros van
aprendiendo TypeScript a niveles avanzados, sin forzar nada y sin frustraciones.
Eso es más viable que el salto a una piscina vacía como el que veo hacer a tanta
gente, comenzando proyectos con TypeScript desde el inicio sin saber utilizarlo.`,O;return g=new Xn({props:{$$slots:{default:[q_]},$$scope:{ctx:i}}}),{c(){e=x("p"),e.innerHTML=t,n=y(),a=x("p"),a.innerHTML=s,c=y(),l=x("blockquote"),l.innerHTML=u,p=y(),d=x("p"),d.textContent=v,f=y(),Ct(g.$$.fragment),T=y(),S=x("h2"),S.textContent=h,m=y(),L=x("p"),L.textContent=P,q=y(),V=x("p"),V.textContent=I,H=y(),z=x("p"),z.textContent=w,A=y(),B=x("p"),B.textContent=W,Y=y(),X=x("h2"),X.textContent=te,se=y(),de=x("p"),de.innerHTML=$,De=y(),ie=x("p"),ie.textContent=me,We=y(),ze=x("p"),ze.textContent=J,Ee=y(),Re=x("p"),Re.textContent=Se,Be=y(),ce=x("p"),ce.textContent=Te,it=y(),F=x("p"),F.textContent=Ge,nt=y(),He=x("p"),He.innerHTML=Le,st=y(),Ue=x("p"),Ue.textContent=Fe},l(_){e=b(_,"P",{"data-svelte-h":!0}),C(e)!=="svelte-sjnakw"&&(e.innerHTML=t),n=M(_),a=b(_,"P",{"data-svelte-h":!0}),C(a)!=="svelte-fv1i7n"&&(a.innerHTML=s),c=M(_),l=b(_,"BLOCKQUOTE",{"data-svelte-h":!0}),C(l)!=="svelte-1xn0fql"&&(l.innerHTML=u),p=M(_),d=b(_,"P",{"data-svelte-h":!0}),C(d)!=="svelte-sbj1fj"&&(d.textContent=v),f=M(_),St(g.$$.fragment,_),T=M(_),S=b(_,"H2",{"data-svelte-h":!0}),C(S)!=="svelte-199tknj"&&(S.textContent=h),m=M(_),L=b(_,"P",{"data-svelte-h":!0}),C(L)!=="svelte-szda7b"&&(L.textContent=P),q=M(_),V=b(_,"P",{"data-svelte-h":!0}),C(V)!=="svelte-1yxq33r"&&(V.textContent=I),H=M(_),z=b(_,"P",{"data-svelte-h":!0}),C(z)!=="svelte-1t7y2h0"&&(z.textContent=w),A=M(_),B=b(_,"P",{"data-svelte-h":!0}),C(B)!=="svelte-eqmm4y"&&(B.textContent=W),Y=M(_),X=b(_,"H2",{"data-svelte-h":!0}),C(X)!=="svelte-hsg5ny"&&(X.textContent=te),se=M(_),de=b(_,"P",{"data-svelte-h":!0}),C(de)!=="svelte-kx4rd3"&&(de.innerHTML=$),De=M(_),ie=b(_,"P",{"data-svelte-h":!0}),C(ie)!=="svelte-1hl5rv3"&&(ie.textContent=me),We=M(_),ze=b(_,"P",{"data-svelte-h":!0}),C(ze)!=="svelte-1497ylu"&&(ze.textContent=J),Ee=M(_),Re=b(_,"P",{"data-svelte-h":!0}),C(Re)!=="svelte-p2hppe"&&(Re.textContent=Se),Be=M(_),ce=b(_,"P",{"data-svelte-h":!0}),C(ce)!=="svelte-1nicutq"&&(ce.textContent=Te),it=M(_),F=b(_,"P",{"data-svelte-h":!0}),C(F)!=="svelte-jjnjrv"&&(F.textContent=Ge),nt=M(_),He=b(_,"P",{"data-svelte-h":!0}),C(He)!=="svelte-1nun4zh"&&(He.innerHTML=Le),st=M(_),Ue=b(_,"P",{"data-svelte-h":!0}),C(Ue)!=="svelte-1l1d6xr"&&(Ue.textContent=Fe)},m(_,R){r(_,e,R),r(_,n,R),r(_,a,R),r(_,c,R),r(_,l,R),r(_,p,R),r(_,d,R),r(_,f,R),Et(g,_,R),r(_,T,R),r(_,S,R),r(_,m,R),r(_,L,R),r(_,q,R),r(_,V,R),r(_,H,R),r(_,z,R),r(_,A,R),r(_,B,R),r(_,Y,R),r(_,X,R),r(_,se,R),r(_,de,R),r(_,De,R),r(_,ie,R),r(_,We,R),r(_,ze,R),r(_,Ee,R),r(_,Re,R),r(_,Be,R),r(_,ce,R),r(_,it,R),r(_,F,R),r(_,nt,R),r(_,He,R),r(_,st,R),r(_,Ue,R),O=!0},p(_,[R]){const ne={};R&1&&(ne.$$scope={dirty:R,ctx:_}),g.$set(ne)},i(_){O||(vt(g.$$.fragment,_),O=!0)},o(_){gt(g.$$.fragment,_),O=!1},d(_){_&&(o(e),o(n),o(a),o(c),o(l),o(p),o(d),o(f),o(T),o(S),o(m),o(L),o(q),o(V),o(H),o(z),o(A),o(B),o(Y),o(X),o(se),o(de),o(De),o(ie),o(We),o(ze),o(Ee),o(Re),o(Be),o(ce),o(it),o(F),o(nt),o(He),o(st),o(Ue)),Tt(g,_)}}}const O_={title:"El peligro de trivializar. Edición TypeScript.",slug:"peligro-trivializar-typescript",coverImage:"/src/assets/posts-covers/any-code.png",coverPosition:"normal",excerpt:"Un error común es creer que TypeScript es una tontería que se aprende en cinco minutos. Quienes lo creen van directos a un precipicio.",date:"2024-09-28T16:31:23.177Z",updated:"2024-09-28T16:31:23.903Z",hidden:!1,tags:["TypeScript","DX"],keywords:["dx","any","typescript"],type:"default"};class z_ extends Xt{constructor(e){super(),Yt(this,e,null,F_,$t,{})}}const B_=Object.freeze(Object.defineProperty({__proto__:null,default:z_,metadata:O_},Symbol.toStringTag,{value:"Module"}));function H_(i){let e,t,n="personal",a;return{c(){e=dt("En este artículo hablo de blogs de carácter "),t=x("strong"),t.textContent=n,a=dt(`, 
no de blogs corporativos, institucionales, etc. Esos tienen otras razones para 
seguir siendo útiles.`)},l(s){e=pt(s,"En este artículo hablo de blogs de carácter "),t=b(s,"STRONG",{"data-svelte-h":!0}),C(t)!=="svelte-1kfgueg"&&(t.textContent=n),a=pt(s,`, 
no de blogs corporativos, institucionales, etc. Esos tienen otras razones para 
seguir siendo útiles.`)},m(s,c){r(s,e,c),r(s,t,c),r(s,a,c)},p:wt,d(s){s&&(o(e),o(t),o(a))}}}function k_(i){let e,t="👇 al final.";return{c(){e=x("a"),e.textContent=t,this.h()},l(n){e=b(n,"A",{href:!0,"data-svelte-h":!0}),C(e)!=="svelte-alaku3"&&(e.textContent=t),this.h()},h(){yt(e,"href","#detalles-tecnicos")},m(n,a){r(n,e,a)},p:wt,d(n){n&&o(e)}}}function V_(i){let e;return{c(){e=dt(`Esto es un apartado más técnico. Si no te interesa no sé qué haces
leyendo este blog, para empezar.`)},l(t){e=pt(t,`Esto es un apartado más técnico. Si no te interesa no sé qué haces
leyendo este blog, para empezar.`)},m(t,n){r(t,e,n)},d(t){t&&o(e)}}}function G_(i){let e;return{c(){e=dt("déjame un comentario")},l(t){e=pt(t,"déjame un comentario")},m(t,n){r(t,e,n)},d(t){t&&o(e)}}}function j_(i){let e,t,n,a,s,c,l,u=`Estoy cansado de leer sobre la importancia de dejar por escrito tu oficio o
pensamientos aunque nadie te lea. No le veía sentido práctico y no sentía que
me ayudara, pero recientemente le he visto dos utilidades.`,p,d,v=`La primera, tener un espacio donde compartir lo que suelo repetir con cada
alumno. Así puedo dejar directamente comentarios, recomendaciones, patrones,
etc., limitándome a mandarles el enlace y no robándoles tiempo en clase.`,f,g,T=`La segunda, más personal y clásica de un blog, es dejar algún rastro de mi
evolución. Muchas veces he
intentado recordar sin éxito qué pensaba o qué razones tenía en el pasado para
decir o hacer determinadas cosas, como apoyar ciertas corrientes o tecnologías.
Saber cómo era ayuda a la introspección, a asimiliar y ajustar cambios.`,S,h,m="Ventajas de un blog personal en la actualidad",L,P,q=`Todos conocemos por qué este formato ha muerto. Un blog personal no genera
dopamina, no está en medio de todo ni te da
seguidores <small>(o no tantos)</small>. De hecho requiere un esfuerzo para
mejorar su visibilidad si necesitaras que otros pasen por él. Todo esto puede
considerarse ventajas si lo vemos como un pequeño refugio.`,V,I,H=`Otra ventaja que surge de la adversidad solo por un cambio de enfoque
es que hay menos posibilidades de negocio, lo que provoca que un blog personal
se reduzca por necesidad a su esencia. Actualmente todo internet está saturado
de contenido basura y autogenerado bien posicionado por magufidades del SEO, por
lo que la dificultad de posicionar algo aumenta tanto que me disuade y aleja
de esas ideas de pseudoéxito capitalista.`,z,w,A=`Al renunciar al posicionamiento, a las visitas e incluso a los comentarios,
escribir un blog se convierte en una experiencia más personal y limpia. Y lo
mejor es que me permite realizar aquellas acciones tradicionalmente
superdestructivas y dañinas para el posicionamiento en un sitio normal,
como borrar entradas.`,B,W,Y=`Ya desde el primer párrafo que escribes puedes notar algo de no
estar pululando cerca de una red social: se acabó el que secuestren tu atención,
el destruir tu productividad con spam de vídeos de gatitos y Milei dando cringe.`,X,te,se=`Pero lo mejor de todo es que en este formato tienes el control de tu contenido,
no hay un servicio que te diga qué puedes o no publicar. Incluso con servicios
de alojamiento con restricción de contenido o posibilidad de cambiar sus
políticas, siempre podrás llevártelo a otro lado. Hoy día, tener el control
sobre tu contenido es un privilegio.`,de,$,De="Por qué no tengo una sección de comentarios",ie,me,We=`Quitando que es un rollo integrar un sistema de comentarios dinámicos externo
en un sitio estático, cabe aclarar que los comentarios no tienen nada de malo,
de hecho tienen más pros que contras, pero para mi caso particular pesan más
los contras. Mi idea es <strong>eliminar la interacción social</strong> en este espacio (más
sobre esto en una futura entrada).`,ze,J,Ee=`Entre las razones más evidentes para no incluirlos está evitarme
todo tipo de spam, trolls e incluso comentarios positivos, que solo son alimento
para el ego. No necesito que quede constancia de si a alguien le gusta o no lo
que he escrito, aunque con ello se pierda las utilidades más importantes de los
comentarios: la obtención de feedback constructivo, correcciones y sugerencias.`,Re,Se,Be=`A ver, existe el correo electrónico, pero nadie lo usa
salvo que no haya más remedio. Es una vía más directa
pero con algunas desventajas, como la posibilidad de que el correo nunca llegue
y ni lo sepas.`,ce,Te,it=`La razón de peso más típica para incluir comentarios suele estar relacionada con
el SEO. Los comentarios cuentan como nuevo
contenido y pueden atraer visitas por sí mismos. Todo eso me da igual, no busco
visibilidad ni posicionamiento con este blog.`,F,Ge,nt="SvelteKit como generador de blogs estáticos",He,Le,st,Ue,Fe=`No estoy usando ningún framework específico para blogs sino <strong>SvelteKit</strong> como
generador de sitios estáticos, adaptado a mis necesidades.`,O,_,R=`Hoy día los sitios estáticos no son ninguna sorpresa. Recuerdo a
principios de milenio cuando la comunidad de php te miraba raro al decir
de hacer todo en estático, y lo nicho que fue Jekyll hasta que Ruby on Rails
pilló más popularidad.`,ne,pe,he=`Entre 2022 y 2023 comencé un proyecto un poco más ambicioso al que llamé
Simple Static Blog Generator, fundamentado en TypeScript y MarkDown. Estaba
orientado a experiencia de desarrollo con capa de vista totalmente desacoplada,
teniendo solo una implementación básica de demostración con pug como sistema
de templates.`,Ve,Ae,Ie=`Aunque utilizaba herramientas modernas, integrar con frameworks de SPA,
reactividad y diseño orientado a componentes era demasiado
reinventar la rueda. Pensando en rediseñar el sistema sobre Nuxt (Vue),
conocí Svelte y SvelteKit. El proyecto de Rich Harris me parecía increíble como
para no darle una oportunidad, y no me arrepiento.`,$e,k,_e=`SvelteKit es a Svelte lo que Next a React o Nuxt a Vue, aunque con soporte
oficial; digamos que SvelteKit/Svelte son parte del mismo proyecto
en manos de la misma comunidad y se desarrollan completamente a la vez.`,et,Z,ve=`Quizás seas como yo y no te guste este tipo de frameworks “todo en uno”
porque, al menos en flujos normales, implica una <small>no obligatoria pero
recomendada</small> implementación de back end; pero su modo generador de sitios
estáticos es con mucho margen la mejor experiencia de desarrollo que he tenido.`,Xe,Je,ct=`Alojar un sitio estático es prácticamente gratuito y apenas consume recursos.
El servidor, a fin de cuentas, solo se dedica a enviar ficheros. Existen
diversos servicios gratuitos para alojarlo, como Github Pages, donde
justo está este blog.`,G,we,Ce=`En términos de seguridad, los sitios estáticos son más seguros por naturaleza.
Los ataques de tipo DDoS solo funcionan por saturación de red y no por cómputo,
dado el esfuerzo mínimo que tiene que hacer el servidor. Esto no evita que se
agoten las cotas de recursos en servicios de hosting y es crítico
cuando no se tiene ningún control del backend. En servicios como Pages
donde además no se dispone de formas claras de auditar los ataques, solo se
complica, especialmente con capas gratuitas.`,ye,Pe,Ze,tt,ot="(y contras)",ut,Ke,ft="más",mt,Q,Ne,xt;return e=new Xn({props:{$$slots:{default:[H_]},$$scope:{ctx:i}}}),s=new br({props:{$$slots:{default:[k_]},$$scope:{ctx:i}}}),Le=new Xn({props:{$$slots:{default:[V_]},$$scope:{ctx:i}}}),Q=new $c({props:{$$slots:{default:[G_]},$$scope:{ctx:i}}}),{c(){Ct(e.$$.fragment),t=y(),n=x("p"),a=dt(`Esta es la primera entrada de un blog en el que controlo todo su proceso
generativo y contenido. Detalles
técnicos `),Ct(s.$$.fragment),c=y(),l=x("p"),l.textContent=u,p=y(),d=x("p"),d.textContent=v,f=y(),g=x("p"),g.textContent=T,S=y(),h=x("h2"),h.textContent=m,L=y(),P=x("p"),P.innerHTML=q,V=y(),I=x("p"),I.textContent=H,z=y(),w=x("p"),w.textContent=A,B=y(),W=x("p"),W.textContent=Y,X=y(),te=x("p"),te.textContent=se,de=y(),$=x("h2"),$.textContent=De,ie=y(),me=x("p"),me.innerHTML=We,ze=y(),J=x("p"),J.textContent=Ee,Re=y(),Se=x("p"),Se.textContent=Be,ce=y(),Te=x("p"),Te.textContent=it,F=y(),Ge=x("h2"),Ge.textContent=nt,He=y(),Ct(Le.$$.fragment),st=y(),Ue=x("p"),Ue.innerHTML=Fe,O=y(),_=x("p"),_.textContent=R,ne=y(),pe=x("p"),pe.textContent=he,Ve=y(),Ae=x("p"),Ae.textContent=Ie,$e=y(),k=x("p"),k.textContent=_e,et=y(),Z=x("p"),Z.innerHTML=ve,Xe=y(),Je=x("p"),Je.textContent=ct,G=y(),we=x("p"),we.textContent=Ce,ye=y(),Pe=x("p"),Ze=dt("Hay otros beneficios "),tt=x("small"),tt.textContent=ot,ut=dt(`, pero no voy a
dar `),Ke=x("small"),Ke.textContent=ft,mt=dt(` la chapa en esta entrada. Si tienes dudas
concretas sobre implementación o quieres hacerte tu propio sitio
estático con estas tecnologías y no sabes ni por dónde
empezar `),Ct(Q.$$.fragment),Ne=dt(" mándame un correo."),this.h()},l(fe){St(e.$$.fragment,fe),t=M(fe),n=b(fe,"P",{});var qe=kt(n);a=pt(qe,`Esta es la primera entrada de un blog en el que controlo todo su proceso
generativo y contenido. Detalles
técnicos `),St(s.$$.fragment,qe),qe.forEach(o),c=M(fe),l=b(fe,"P",{"data-svelte-h":!0}),C(l)!=="svelte-gel1sl"&&(l.textContent=u),p=M(fe),d=b(fe,"P",{"data-svelte-h":!0}),C(d)!=="svelte-14h9b1d"&&(d.textContent=v),f=M(fe),g=b(fe,"P",{"data-svelte-h":!0}),C(g)!=="svelte-w90q66"&&(g.textContent=T),S=M(fe),h=b(fe,"H2",{"data-svelte-h":!0}),C(h)!=="svelte-1dd0thw"&&(h.textContent=m),L=M(fe),P=b(fe,"P",{"data-svelte-h":!0}),C(P)!=="svelte-10c8ry6"&&(P.innerHTML=q),V=M(fe),I=b(fe,"P",{"data-svelte-h":!0}),C(I)!=="svelte-18rmamq"&&(I.textContent=H),z=M(fe),w=b(fe,"P",{"data-svelte-h":!0}),C(w)!=="svelte-1u3loif"&&(w.textContent=A),B=M(fe),W=b(fe,"P",{"data-svelte-h":!0}),C(W)!=="svelte-gfynom"&&(W.textContent=Y),X=M(fe),te=b(fe,"P",{"data-svelte-h":!0}),C(te)!=="svelte-1owvlqx"&&(te.textContent=se),de=M(fe),$=b(fe,"H2",{"data-svelte-h":!0}),C($)!=="svelte-5qf7jp"&&($.textContent=De),ie=M(fe),me=b(fe,"P",{"data-svelte-h":!0}),C(me)!=="svelte-1xwjm58"&&(me.innerHTML=We),ze=M(fe),J=b(fe,"P",{"data-svelte-h":!0}),C(J)!=="svelte-1obppyr"&&(J.textContent=Ee),Re=M(fe),Se=b(fe,"P",{"data-svelte-h":!0}),C(Se)!=="svelte-1e7wgil"&&(Se.textContent=Be),ce=M(fe),Te=b(fe,"P",{"data-svelte-h":!0}),C(Te)!=="svelte-lv4okb"&&(Te.textContent=it),F=M(fe),Ge=b(fe,"H2",{id:!0,"data-svelte-h":!0}),C(Ge)!=="svelte-809ml2"&&(Ge.textContent=nt),He=M(fe),St(Le.$$.fragment,fe),st=M(fe),Ue=b(fe,"P",{"data-svelte-h":!0}),C(Ue)!=="svelte-1c01o13"&&(Ue.innerHTML=Fe),O=M(fe),_=b(fe,"P",{"data-svelte-h":!0}),C(_)!=="svelte-1u01tjt"&&(_.textContent=R),ne=M(fe),pe=b(fe,"P",{"data-svelte-h":!0}),C(pe)!=="svelte-r8zxp3"&&(pe.textContent=he),Ve=M(fe),Ae=b(fe,"P",{"data-svelte-h":!0}),C(Ae)!=="svelte-avlmxs"&&(Ae.textContent=Ie),$e=M(fe),k=b(fe,"P",{"data-svelte-h":!0}),C(k)!=="svelte-10ibczo"&&(k.textContent=_e),et=M(fe),Z=b(fe,"P",{"data-svelte-h":!0}),C(Z)!=="svelte-zmfge8"&&(Z.innerHTML=ve),Xe=M(fe),Je=b(fe,"P",{"data-svelte-h":!0}),C(Je)!=="svelte-wmnnp"&&(Je.textContent=ct),G=M(fe),we=b(fe,"P",{"data-svelte-h":!0}),C(we)!=="svelte-oa6bid"&&(we.textContent=Ce),ye=M(fe),Pe=b(fe,"P",{});var Lt=kt(Pe);Ze=pt(Lt,"Hay otros beneficios "),tt=b(Lt,"SMALL",{"data-svelte-h":!0}),C(tt)!=="svelte-12yc462"&&(tt.textContent=ot),ut=pt(Lt,`, pero no voy a
dar `),Ke=b(Lt,"SMALL",{"data-svelte-h":!0}),C(Ke)!=="svelte-ohh2xh"&&(Ke.textContent=ft),mt=pt(Lt,` la chapa en esta entrada. Si tienes dudas
concretas sobre implementación o quieres hacerte tu propio sitio
estático con estas tecnologías y no sabes ni por dónde
empezar `),St(Q.$$.fragment,Lt),Ne=pt(Lt," mándame un correo."),Lt.forEach(o),this.h()},h(){yt(Ge,"id","detalles-tecnicos")},m(fe,qe){Et(e,fe,qe),r(fe,t,qe),r(fe,n,qe),_t(n,a),Et(s,n,null),r(fe,c,qe),r(fe,l,qe),r(fe,p,qe),r(fe,d,qe),r(fe,f,qe),r(fe,g,qe),r(fe,S,qe),r(fe,h,qe),r(fe,L,qe),r(fe,P,qe),r(fe,V,qe),r(fe,I,qe),r(fe,z,qe),r(fe,w,qe),r(fe,B,qe),r(fe,W,qe),r(fe,X,qe),r(fe,te,qe),r(fe,de,qe),r(fe,$,qe),r(fe,ie,qe),r(fe,me,qe),r(fe,ze,qe),r(fe,J,qe),r(fe,Re,qe),r(fe,Se,qe),r(fe,ce,qe),r(fe,Te,qe),r(fe,F,qe),r(fe,Ge,qe),r(fe,He,qe),Et(Le,fe,qe),r(fe,st,qe),r(fe,Ue,qe),r(fe,O,qe),r(fe,_,qe),r(fe,ne,qe),r(fe,pe,qe),r(fe,Ve,qe),r(fe,Ae,qe),r(fe,$e,qe),r(fe,k,qe),r(fe,et,qe),r(fe,Z,qe),r(fe,Xe,qe),r(fe,Je,qe),r(fe,G,qe),r(fe,we,qe),r(fe,ye,qe),r(fe,Pe,qe),_t(Pe,Ze),_t(Pe,tt),_t(Pe,ut),_t(Pe,Ke),_t(Pe,mt),Et(Q,Pe,null),_t(Pe,Ne),xt=!0},p(fe,[qe]){const Lt={};qe&1&&(Lt.$$scope={dirty:qe,ctx:fe}),e.$set(Lt);const bt={};qe&1&&(bt.$$scope={dirty:qe,ctx:fe}),s.$set(bt);const re={};qe&1&&(re.$$scope={dirty:qe,ctx:fe}),Le.$set(re);const Ye={};qe&1&&(Ye.$$scope={dirty:qe,ctx:fe}),Q.$set(Ye)},i(fe){xt||(vt(e.$$.fragment,fe),vt(s.$$.fragment,fe),vt(Le.$$.fragment,fe),vt(Q.$$.fragment,fe),xt=!0)},o(fe){gt(e.$$.fragment,fe),gt(s.$$.fragment,fe),gt(Le.$$.fragment,fe),gt(Q.$$.fragment,fe),xt=!1},d(fe){fe&&(o(t),o(n),o(c),o(l),o(p),o(d),o(f),o(g),o(S),o(h),o(L),o(P),o(V),o(I),o(z),o(w),o(B),o(W),o(X),o(te),o(de),o($),o(ie),o(me),o(ze),o(J),o(Re),o(Se),o(ce),o(Te),o(F),o(Ge),o(He),o(st),o(Ue),o(O),o(_),o(ne),o(pe),o(Ve),o(Ae),o($e),o(k),o(et),o(Z),o(Xe),o(Je),o(G),o(we),o(ye),o(Pe)),Tt(e,fe),Tt(s),Tt(Le,fe),Tt(Q)}}}const W_={title:"Por qué un blog en 2024",slug:"por-que-un-blog-en-2024",coverImage:"/src/assets/posts-covers/maquina-escribir.jpg",coverPosition:"normal",coverAuthor:"Patrick Fore",excerpt:"Esta es la primera entrada de un un blog en el que controlo todo su proceso generativo y contenido.",date:"2024-06-24T15:06:23.177Z",updated:"2024-06-24T15:06:23.903Z",hidden:!1,tags:["Personal"],keywords:["estático","blog"],type:"default"};class $_ extends Xt{constructor(e){super(),Yt(this,e,null,j_,$t,{})}}const X_=Object.freeze(Object.defineProperty({__proto__:null,default:$_,metadata:W_},Symbol.toStringTag,{value:"Module"}));function Y_(i){let e,t=`Actualmente un conocido se está enfrentando a consecuencias de actos que le
perseguirán y atormentarán hasta sus últimos días. No son pocas las personas que
están o estarán en situaciones similares, y entre las que me incluyo.`,n,a,s=`Hay errores que cruzan líneas invisibles, y el daño de cruzar esas líneas no
siempre se repara con tiempo o justicia. Lo que
condena no es un juez, sino una memoria social, la de los otros, y también la
propia. La repetición de las consecuencias no viene de una “justicia eterna”,
sino del estigma.`,c,l,u=`Es terriblemente cruel el modo en que la sociedad, incluso en nombre de la moral
o la prudencia, ejerce esa vigilancia eterna; el modo en el que el pasado se
convierte en presente renovado.`,p,d,v=`Y luego está la consecuencia más silenciosa pero más corrosiva: la
interiorización. Cuando ya no puedes dejar de recordártelo. Cuando el espejo se
agrieta entre quien fuiste, quien eres, y quien intentas ser, pero se
mantiene dolorosamente estático, sin llegar siquiera a fragmentarse.`,f,g,T=`Después de tanto tiempo cargando con el juicio propio y ajeno, unos empiezan a
confundirse con la condena. Ya no sabemos si lo que hicimos estuvo mal o si
<em>somos</em> mal. La línea entre el acto y el ser se difumina. No sabemos cuándo comienza
ni termina el castigo, no sabes si se castigan tus actos o tu mera existencia. A veces
no sabes ni cómo ni quién lo está haciendo, y probablemente cargamos con culpas de
actos que ya no importan a nadie, pero aún así surge esa pregunta: “si dependiera
de mí, ¿merezco perdón?”, y la garganta se cierra.`,S,h,m=`La palabra que más resuena en todo esto es <strong>responsabilidad</strong>.
Tal y como lo veo, hacerse responsable es decidir cada día qué haces con tus fantasmas.
No es solo entender y pedir perdón, que aunque fundamental, no suele ser suficiente.`,L,P,q="Asumimos que uno puede dar un paso en falso y morir despeñado, atropellado, ahogado… pero nos cuesta asumir una muerte (o asesinato) social. En lo social abundan los pasos en falso, por usar las palabras incorrectas, por hablar en caliente, por no saber agradecer, por arrimarnos a quien no debemos, por un impulso, autoestima, soledad, amistad, miedo, amor, orgullo…",V,I,H="Comprender quién eras o qué motivaciones tenías no cambia nada. Deseamos poder creernos esa milonga de que ya no tenemos nada que ver con quienes éramos, que somos otra persona. Eso sería peor, nos estaríamos comiendo las consecuencias de los actos de otro.",z,w,A="La responsabilidad no trata de consuelo, y si así fuera solo consuela tanto como nos creamos que no cometeremos los mismos errores, así no tengamos forma o ganas de volver a ponernos a prueba y solo nos queden las consecuencias.",B,W,Y=`Los caminos de martirio y penitencia llegan a ser una forma más de construir una
narrativa de nuestra vida, muy comunes en estos casos. Nada saludables, en mi opinión. Esto no tiene nada que
ver con expiación ni con ser víctima ni verdugo de nada.`,X,te,se=`Lo que realmente considero más peligroso de estas situaciones, y que me afecta
especialmente, es la visión que nos
brinda de los demás. En el martirio, y
en especial en la soledad, tendemos a extremar la tolerancia y ver lo mejor de
todos. Nos volvemos patológicamente incapaces de negar el perdón, y resulta
muy fácil acercarnos indebidamente a quien no debemos en el ejercicio
de la tolerancia. La inversa también se cumple. Es más fácil odiar y expulsar a otros
cuando creemos que gozamos de la compañía incondicional de nuestros actuales
cercanos.`,de,$,De="Seguridad psicológica",ie,me,We="La semana pasada impartí un curso de cuatro días en Valladolid enfocado a seguridad en el desarrollo, donde una buena parte, por necesidad, la enfoqué a cultura de la seguridad y seguridad psicológica. Creo que nunca había pasado tantos días sin dormir.",ze,J,Ee="No estaba nervioso, no era un grupo numeroso, al contrario, el más pequeño que he tenido en un curso de esa duración: solo once personas, y maravillosas personas he de añadir. El centro de Valladolid tampoco sería un problema para dormir, salvo una noche en la que un borracho cantaba a pleno pulmón el cara al sol (parece que el apodo de “Fachadolid” era más literal de lo que creía).",Re,Se,Be="Estando solo en la distancia la compañía de los fantasmas es más notable; la ansiedad y la incertidumbre se disparan. No pude centrarme, nunca me había costado tanto hablar y encontrar palabras. El sueño influye, pero el agotamiento no venía solo de no dormir. Es difícil, doloroso, incluso fraudulento, hablar de cultura punitiva cuando sabes que la teoría todo el mundo la comprende, pero en la práctica no soltamos el dedo del gatillo.";return{c(){e=x("p"),e.textContent=t,n=y(),a=x("p"),a.textContent=s,c=y(),l=x("p"),l.textContent=u,p=y(),d=x("p"),d.textContent=v,f=y(),g=x("p"),g.innerHTML=T,S=y(),h=x("p"),h.innerHTML=m,L=y(),P=x("p"),P.textContent=q,V=y(),I=x("p"),I.textContent=H,z=y(),w=x("p"),w.textContent=A,B=y(),W=x("p"),W.textContent=Y,X=y(),te=x("p"),te.textContent=se,de=y(),$=x("h2"),$.textContent=De,ie=y(),me=x("p"),me.textContent=We,ze=y(),J=x("p"),J.textContent=Ee,Re=y(),Se=x("p"),Se.textContent=Be},l(ce){e=b(ce,"P",{"data-svelte-h":!0}),C(e)!=="svelte-1w2ae4c"&&(e.textContent=t),n=M(ce),a=b(ce,"P",{"data-svelte-h":!0}),C(a)!=="svelte-lpntvh"&&(a.textContent=s),c=M(ce),l=b(ce,"P",{"data-svelte-h":!0}),C(l)!=="svelte-88i9yf"&&(l.textContent=u),p=M(ce),d=b(ce,"P",{"data-svelte-h":!0}),C(d)!=="svelte-1at1mes"&&(d.textContent=v),f=M(ce),g=b(ce,"P",{"data-svelte-h":!0}),C(g)!=="svelte-16t9ul5"&&(g.innerHTML=T),S=M(ce),h=b(ce,"P",{"data-svelte-h":!0}),C(h)!=="svelte-15msnc9"&&(h.innerHTML=m),L=M(ce),P=b(ce,"P",{"data-svelte-h":!0}),C(P)!=="svelte-1wi4qr5"&&(P.textContent=q),V=M(ce),I=b(ce,"P",{"data-svelte-h":!0}),C(I)!=="svelte-40yjco"&&(I.textContent=H),z=M(ce),w=b(ce,"P",{"data-svelte-h":!0}),C(w)!=="svelte-jaszs1"&&(w.textContent=A),B=M(ce),W=b(ce,"P",{"data-svelte-h":!0}),C(W)!=="svelte-gowtjh"&&(W.textContent=Y),X=M(ce),te=b(ce,"P",{"data-svelte-h":!0}),C(te)!=="svelte-34nhet"&&(te.textContent=se),de=M(ce),$=b(ce,"H2",{"data-svelte-h":!0}),C($)!=="svelte-1jnbrtl"&&($.textContent=De),ie=M(ce),me=b(ce,"P",{"data-svelte-h":!0}),C(me)!=="svelte-a0evrv"&&(me.textContent=We),ze=M(ce),J=b(ce,"P",{"data-svelte-h":!0}),C(J)!=="svelte-3e3cdp"&&(J.textContent=Ee),Re=M(ce),Se=b(ce,"P",{"data-svelte-h":!0}),C(Se)!=="svelte-4649lr"&&(Se.textContent=Be)},m(ce,Te){r(ce,e,Te),r(ce,n,Te),r(ce,a,Te),r(ce,c,Te),r(ce,l,Te),r(ce,p,Te),r(ce,d,Te),r(ce,f,Te),r(ce,g,Te),r(ce,S,Te),r(ce,h,Te),r(ce,L,Te),r(ce,P,Te),r(ce,V,Te),r(ce,I,Te),r(ce,z,Te),r(ce,w,Te),r(ce,B,Te),r(ce,W,Te),r(ce,X,Te),r(ce,te,Te),r(ce,de,Te),r(ce,$,Te),r(ce,ie,Te),r(ce,me,Te),r(ce,ze,Te),r(ce,J,Te),r(ce,Re,Te),r(ce,Se,Te)},p:wt,i:wt,o:wt,d(ce){ce&&(o(e),o(n),o(a),o(c),o(l),o(p),o(d),o(f),o(g),o(S),o(h),o(L),o(P),o(V),o(I),o(z),o(w),o(B),o(W),o(X),o(te),o(de),o($),o(ie),o(me),o(ze),o(J),o(Re),o(Se))}}}const Z_={title:"Sobre las consecuencias y su recurrencia",slug:"sobre-consecuencias-y-su-recurrencia",coverImage:"",excerpt:"Es terriblemente cruel el modo en que la sociedad, incluso en nombre de la moral o la prudencia, ejerce esa vigilancia eterna; el modo en el que el pasado se convierte en presente renovado.",date:"2025-04-07T01:09:04.325Z",updated:"2025-04-07T01:09:04.326Z",hidden:!1,tags:["Personal","Salud mental"],keywords:[],type:"default"};class K_ extends Xt{constructor(e){super(),Yt(this,e,null,Y_,$t,{})}}const J_=Object.freeze(Object.defineProperty({__proto__:null,default:K_,metadata:Z_},Symbol.toStringTag,{value:"Module"})),Q_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZ0AAACZCAMAAADD5xcyAAAC8VBMVEUfHx8gICAEOV4oKChFRUUcJhzMzMzc3KqIiIj////BzMyur63/zQIgX5qrqatPT09dmMEkLiTMzKvMrH7/1wV+ICCYmJjBmF3My8YrHx+rq6ucwMyHuKnMzMGrgCDIycsgIV5+rMwfHyue4P+szMy3t7edOV4EOcAgIX7Dw8MgIm/Qo0PGzMzGu7LS26rXtF9SJB+oxsyvqa3vzKfMuJIgIDw6JB4JtObX/+Xc253cumSZXyDD9P/Hxsf/8dTMy7zc24x8fHwiOF63kVDt/f9zy/Rmmb7Lxr0EOajFo3A2NjandibIyQHb/f///fX//+gifqnOkXchY3etj3MfHzAfHyXFZiCHHx9eHx/woBm+xstypMWus73NzLdHfqrMvprYyYM/Ml8iIiJfKx7+shb3//+Is8y7u7v82rdrbGx0OV4fIE1uICD/9uAEltj24MmXrr21sa+53KrOs4i0hz+nfTxuMCBJIB/bzQS2zMywvMnMwbfI3KrMxaeioqLFsJ4naZ4xXoJBZ12rhE4fKzCNYSlSOSKHQSCkZh+XVx9+Kx/chRyruAHPx55Lc5mitJYYPIa0noApS3pXV1efeU0cTxW1xMyRt8x7qMaktsJOkLeHprY8hbIndaaRjZEgU49ag37MqXsiRW2+n2SXc1EfM0dyTCscNRegqAWM1vux06qgyKq/yqW4rJVIkJJSbIV6cHbSrFLOekM/Pz8vLy9+Wy6daiaySx6TJR6nShz/wRM0dRBxmguDnAq97P378ex1sNoEW8YVeLvMxrCxwKZegKRlo5wEVZx3qJgrYY8EWImag3nDk3UEOXWocmPKrmGaVV6ugCmPTyAwHx+jKx0jXxPz1wDq1wAQp+BgrtvauKswb5+HlphwkZimlosjgYiDg4Oki2q2gV5wVV7ikhofHxrerhDX7PiOyegkmdjrzL6rwYJQeXS2mHOGOV5dOV4rT1DBnD7EkTHCuQW24PW8xrZ+b59NYV64hSxZfRHxxgQJuLdNAAAMj0lEQVR42uybV6wNQRjHZ5VZOS5Rjjgn+gmJHF24ySFC3IQoD7rLVUN4cB/0LnrvovdOdBKdJyWERPQHRCR4QaKE4Ml/Znb328W6q+w9B/N7uGfLN7tjfjvfzM45WFooZji0fjSxGudtDx43Mpp+dZvkGoUOSwdkJ3EpwnmLFi04L28UzLBHFysY6YHsENOHVzTCJN12Em14la5zsNH00nKjYGrXLFfByBzK8MK3U3zv56ysXgtYaJAdPJEXZhtB0XYg512W4MwpFhZkJ9moSnMjMNoOY+ezFL1YWJCdjXxb3CBKRcrvyuMt52OqsAHD0VQ5Ueh2eB1mDfV2xuGGC6SgFcOr8djB3VSWwhxqVGk+fR3nk2bKY1RkWqTJOOwPWxPrYIA8fDj373ZpNV1l+4bemK8s322dM4SPquIybbuOE9sSCKLqqohGvEnDcOw86wgz4XYeslOD3zS8dvI4R3e6uppPatyHx8bgYCe0Vmm5ndzQOFKlcemD+ciIERycyFtSz6Mwl53NERHFRxuAiiQr9Z2LA8sm8Hb4qF6p3ALn/qPWyiC+I65KtG1cujdvOdtlp2sjUTPeLm4sKT0RwaVXGlRdK4Lz/rkh2RmfZXGHEaHYQcOgn3jsTHqPxxYJL4bnHc/4lLFo9lfiOXyA550y25YJLU9gStGvLj2jFEZ2uLhMYj1fnO8tkicfio2yEXFiVLZz/9gU0VGWRFAvnKiyMo5O2aYuqmHbgbjb4jbwa2U2b3VxbOhUcY2/v+/gsZWNTXZUklkvHk005VrsWiQRSnby0B1kbup7yw6gMLKjLpPEM+AtsqluO1y9Rv/h2Iak0XR/axhsw3eIEjlyp+kQRDh2Ro1Th6qSHXd1cQyOJH/7uFNdpBhArbM4X/7bVSOh4SrKEeVh6d7VuMtO0k5GeWgkCwojO0puAp+eIrjM4nz8abep7michSLn/uhYVorLVvlPJc1tZCfH0pdj2/FWF8dg/k/hP2cLc0oNO+qpjCHbEGiBuJTGbSrKpM5j9Rr3Jjv44BZkxx1GswL1iShPkQTOoAOdqF2zfDzZCEbo/vZG/1yp0HHl2MENlRfnL1VX2aGhNAQ7bI8ceU6yEIEdyiAEWkB1KYz9ipXGskZ4XRXHPHba2gHW2xKF+djxFtmIRz9vSn7TIVPyp9Wt6L4/daLaNfvn0kPja8dbXYoAIdgBewc/fz44m4UG2ZkWuWCnNmodjA00WUBaaadGXrKjdghPmI8dzwlM10YNrIQC62Mn1leZZwDqJFYuQwnKbAj1s+OtbmHYWcjODmbhQXaaruX9B+GT7FBWB9QO8Eh2kBFpuvB1mI8dKqL8l/tQt4O44fUhyF90fyVkGOYBGOTtWQFGe187TnX/QTsGXtwm7byNjV2XlpMdzH7FXNaYvjTX6AR/Mg7NjiSinvRNagEosQSFJBTmY8dbBJ2mFmYJuF69mjSI4/68yVgxh+b95RzanlE3yf2uHdwUfc1bXYqIzQzHzicMOwtZaJAdsH0dF2vU1bBGTXaw/KbeAzFgY8ytMqIPn6oGlDbYwTI1Fk/F+19vJCAFhfnZoSKWBzkByeOiX5CdqZViI+T7p1OLPhE+Za7xfTvLavJ6fXLc1XUiUB/s/SbpXaNWE2GsjGC29WSOYwdMx7IM1lAGCX9y5WSgavbqG/AKmS+6wERYrffEagAK87XjLZKsxEerTugsFCgDrTe4Voimi6rV64oS37MDlqzm6CJUXYpIiHT399vJJISBzIIFQdtJC9oOoe1oOz+DtkNoO9rOz6DtZDYsCNpOMLSd/woWBG0nGNrOfwULgrYTDG3nv4IFQdsJhrbzX8GCoO0E41+xowkEc1P0z1LCjftEyZL+YRoXodopS/ja8YZpO8S3dtifpERxogRzUbKkf5jGhbbz16DtZDLaTiaj7WQy4dhZNf601ey7rnfu4dhJXOt8LNcKO/98kLYTlp2tB+r42oGc6MIC7OzpGO2Vre2EZKey6WtHtTzZOemxky3DlEFtJw129kYHD7KbvWnXzqdp3DnS+ZgTdvZetIe2U+h27t7LwqhTgB1wPnpmkLZToJ3XS+ub5oAxt0Wjp+bNulLfTI2OM9B96wHTTOWMk9szRFTqxiDGqo80bZrJUy9F2I5BVrMvivYq7rZzx22nhysBjo/20HYKsrMVrQ5a9ZRdIme/3PuInW6VTUkDoaeLjILFBV47kHPZOjNWDSj3s+4Em1Gfiw7O1nZ+bKfLZHPA7PisGS+UHcgYO6uy2awhY4fMVmNuz9o62Xwr7DSZOYeJnTeezCa9pXKyu8/YZx6NsxKqzYPZuXs/ekfb+bEdmBjHbGCnTlw0OHrSsH2pDgw8rg9VNpfNBl/ZSVSGPbB9cqsKaHYktqdB30Y7RntoOz+0U31fah4jO6IDiJEFdrpMHpDP7B2y08xtR50+JUeY/bhQCdnkAe1A5EJt50cgsVHbe6dij00bGSFmBeAbO8iMFr9gp5e282M79YPZOQQ337dTX9sJi6LJkan5Xjs02g/IZRYYhMwBx+M+mc3RqzPbH7bTdD+Gmu/aqb6PvCF/yeGp+xXHzlGmwAVuMgs9K/jDdooeMs0bx+Pd7Rk12YGJVmIWPWPpG/kGerRh9xkX7cx2yEyNyWb2Zs4cvK0+vMF+bkaNN6NT2s6P7djvnK3IjsWu/aYCxxJW1OL6yk7rkc4gpC6gdkrIt5iT+m30T9nBQsxFuZITt+wQsx4dMHEGPQPbV2TQdGVHLf9AiL3gA287xtJKThA7ezrqlZzC//bt7L2sk0HsoOs01HYK0Q59g+BvhyRGT+pvEArVDn375mtHf/uWVjuy5Z8WZEd/c50eO+Du+NMF2Tnfa5z+1Yf+xdTfTNE/if6V+++j/4dIJsPSQ/timgCwtNC+iCYILC0UK6LRdv52WBC0nWBoO/8VLAjaTjC0nf+KL+zdsW7aQBjA8eMbIn0vgKWulmDswEAHC6mRLXmx/QRVSySrtBL20AdIH6Gv0KoLW58ACAsSFWlGYOjQDG0ypEulrv3OZ6leAl8Wi5y/n5RgOMPAX+c7WFAcUodH6jSK4pA6PFKnUVT9TJ11gBW9UxBHVKf7rAOlyp3V/GeKOHs5BOLGzvKXj/FOp+tjb72NMM6vgejHMX5Bx5k/eFu+SJSAZRRHfXUCNEY6iIu7KWrvQNfJzWBO5RYeFsaf4SIa34Gmj8AyqmbVOt0IC0nnf528/RfeTzD+AVRHt/iydHHwm+roGN8/bVMa+uDS4XC19ali6CXmuXoWgWUUT11zxwg9fApUx6xHmZ90ijqD63IoS5NLIDd0G05jh6YNBezjCCyj+OqvYy5w3cjUGV8BcWkooIHyvG/0gAMbmmx6ZQLLKJ66rmxrvSsgpk717e4jrf6liRkoU9HfJPZfFQeWUTw1zR1aUMjBOm61Dk2Z0Lv18uEkdsAyiqO2OlmKt2/0FWt/ncCsMPo8BzJ/lPlOkFy6yRVYRrHV8Wk0MAmWB+ps0OwKNimtRRfRKBjfZenOoxMso2rA/yanj/H56Woe4f46oVfsqOc+9vSdWTTS//18CJZRHLXVWURY8PfXgRsfC7pHOEX8CDBB+zbUR1YHFlPEOP8aHKgDiz8p4ux8CMRFveBkqX0b6mOrI6TOo6E4pA6P1GkUxSF1eKROoygOqcMjdRpFPZj8sti9bPllsZaQOo+d4pA6PFKnURSH1OGROo2iOKQOj9QpPX/dbtlPcRxhnScnUqckdepwTHXO2icV7bPWQ0idf+zdPY6DMBCGYUYbjSJFwh0FjSsKH4LCrY9Bg1xyAV+CnjOsBAfKUdbESdakchMLwfcUSCNR+RXmp+FrQh3RCHqKhrq1pmpZ3R+1ZqdYNpYCc+0lq2omofilpkMrUmSsw9eGPan9MPa8kvdwTphYo86XhTqvVVYiqiOlu5iSB0PLjYeR5kqqkYjMwOq+dKJau2Fn28h37cj1FmRbJfyh9+dR53giIh0iBagTyVnHdeusfJ3qGUA/9i8X50CdjVw7W7zoZXx3MQ1rekOdjVzXTrzodVxnRp0EGetUmwA1T/SGOp+yvI3Gi67lYOht4v5C/0p2dHxFDulfcuI6l54Hu9Csb9ZPo+L+d6HXE/XErV7o6IpU+euQbfmhteTp5xTqiB5vo7H8dUg45dvc7A+txnVSk6EwlS3qxPb0jfocihSokwZ1TqVIgTppUOdUihSokwZ1TqVIgTppjlKnI9htHWOQZ7918GexPf9ZDAAAAAAAAAAAAAD+2oNDAgAAAABB/1+bfAEAALAAIub1vVvcopMAAAAASUVORK5CYII=",ex=""+new URL("../assets/intellisense-2.EFI6DBq0.png",import.meta.url).href,tx=""+new URL("../assets/intellisense-3.B4K9i5PN.png",import.meta.url).href;function nx(i){let e;return{c(){e=dt("Era")},l(t){e=pt(t,"Era")},m(t,n){r(t,e,n)},d(t){t&&o(e)}}}function ix(i){let e=`interface PointerOptions {
    rect: CommonOptions & SVGOptions & RectOptions
    arrow: CommonOptions & SVGOptions & ArrowOptions
}`,t;return{c(){t=dt(e)},l(n){t=pt(n,e)},m(n,a){r(n,t,a)},p:wt,d(n){n&&o(t)}}}function ax(i){let e,t=`He estado desarrollando una biblioteca con unos alumnos, de cara a crear algo
relativamente sucio pero familiar donde llegado a un punto empezar a aplicar
refactoring. Algo así como un pet project.`,n,a,s=`La biblioteca facilita la creación de punteros que permitan señalar elementos en una aplicación web
de manera sencilla.`,c,l,u=`He aprovechado a hacer experimentos para arrojar algo de luz sobre
las herramientas de tree shaking actuales (spoiler: son lo mismo que hace 8
años pero con esteroides).`,p,d,v=`Aunque lo que comenzó como toy/pet project para un caso de uso sencillo, al final se
ha convertido en un lanzamiento algo más serio con
<a href="https://alexvgjm.github.io/point-it-out-docs/" rel="nofollow">su documentación</a> y todo.
Durante el desarrollo me he obsesionado con el tamaño del paquete 🌞. No
pretendo ser casposo, esa frase va a seguir sonando turbia por
mucho que la modifique.`,f,g,T=`Esperaba que Point it out no pasara de los 5 KB gzipped, lo que para una
biblioteca que tendrá capacidad para generar distintos tipos de
imágenes SVG procedimentalmente es más que aceptable, pero siempre hay margen
para mejorar.`,S,h,m="🍂Tree Shaking",L,P,q,V,I,H,z,w=`Algunas cositas siguen siendo muy útiles, como las funciones de throttling y
debouncing, pero, ¿instalarías tremenda biblioteca con un paquete de
unos 25 KB (min + gzipped) por unas pocas de sus decenas de características
(muchas ya obsoletas)?`,A,B,W=`Para el desarrollador no supone gran problema descargar todo un paquete más,
es algo que haces una vez. Lo que realmente preocupa es que cada usuario tuviera que descargar eso, perjudicando la carga del sitio.`,Y,X,te=`Antes no era tan problemático porque estas bibliotecas eran muy comunes y porque
se distribuían principalmente por CDN. Con muy alta probabilidad, algún usuario
que pasara por tu sitio ya habría pasado anteriormente por otro que usara la
misma biblioteca, teniéndola en caché de su navegador.`,se,de,$=`Pero ahora tampoco es un problema, porque tenemos bibliotecas tree-shakeables
<em>(en realidad desde hace como 9 años, pero ahora es cuando más compatibilidad
con los módulos ES tenemos)</em>. De hecho Lodash tiene una versión tree-shakeable en ESM.`,De,ie,me="En qué consiste el tree shaking y los tree-shakeables",We,ze,J=`Cuando generas el bundle de tu web, aplicación, biblioteca o lo que sea que estés
bundleando, los bundlers modernos tiran de herramientas como rollup para
minificar el resultado y de paso realizar “dead code elimination”.`,Ee,Re,Se=`La “dead code elimination” es autoexplicativa. Elimina el código que nunca es
accedido por evaluación de referencias y otras técnicas. Nada nuevo, esta
es una de las responsabilidades típicas de los optimizadores en compiladores.
Lo que es relativamente nuevo (en el ecosistema web), es la cultura de construir
bibliotecas modulares orientadas a esto.`,Be,ce,Te=`En el mundo de JavaScript y aplicado especialmente a dependencias externas,
es decir, a las bibliotecas que utilizas, el dead code elimination se conoce
como “tree shaking”. Es un concepto bastante gráfico si piensas en un
árbol de dependencias que sacudes y del que caen todas las hojas y ramas
muertas. Por tanto se extrae solo aquellas partes necesarias en lugar de
mandarle al usuario todo el tocho.`,it,F,Ge="Diseño, DX y Tree Shaking",nt,He,Le=`No todos los módulos ES son automáticamente tree-shakeables, deben separar muy
bien sus características. Idealmente al priorizar la cohesión (y disminuir el
acoplamiento) se consigue una buena separación. Cobra especial importancia
principios como el SRP.`,st,Ue,Fe=`Creí que mi biblioteca no sería apta para tree-shaking. La
idea era hacer una única función punto de entrada muy bien adaptada tirando
de tipado e ideas de DX opinionadas a más no poder. En un IDE con capacidad
para manejar un language-server de TypeScript (casi todos hoy día), al
empezar a escribir el primer parámetro de la función create
(en la versión 0.1.11 al menos), una string, te daría dos opciones:`,O,_,R,ne,pe=`Esto ya me permite un mecanismo que me evite crear dos funciones por
separado como createArrow y createRect. A lo mejor te preguntas cosas como,
“¿Y eso qué tiene de malo?”, “¿no sería lo correcto cumpliendo con el principio
de responsabilidad única (SRP)?“.`,he,Ve,Ae=`Internamente no se está rompiendo el SRP, existen las dos funciones (en realidad
peor, existen 2 clases distintas) con implementaciones bien separadas. Una cosa
es la API y otra la implementación. A diferencia de la UX, la DX puede ser algo
más opinionada y relacionada al estilo de un equipo. Me gusta que solo exista
una sola función para crear y que sea lo más guiada posible. Pocas funciones muy
configurables con muy pocas opciones obligatorias.`,Ie,$e,k=`El segundo parámetro de la función son sus opciones. Tanto
arrow como rect son los dos primeros tipos de punteros disponibles en la
biblioteca, y ambos son SVGs, por tanto tienen opciones comunes por ser punteros y
por ser SVGs:`,_e,et,Z,ve,Xe=`Vemos que la única opción obligatoria es target, por eso aparece la primera, las
otras están en orden alfabético. Si en lugar de ‘rect’ hubiéramos escrito ‘arrow’,
las opciones serían:`,Je,ct,G,we,Ce=`Nótese que han desaparecido las opciones de rect y han aparecido otras exclusivas
de arrow. Solo por haber cambiado una string en el primer parámetro.`,ye,Pe,Ze=`Esto no es un caso avanzado de TypeScript, en realidad es una definición muy
simple de momento:`,tt,ot,ut,Ke,ft="Espera… ¿y el tree shaking cómo se lleva con esto?",mt,Q,Ne=`Y ahí es a donde quería llegar. Creí que no tendría más remedio que pasar por
el aro y volver a la tradición.`,xt,fe,qe=`En algún punto de mi biblioteca hay arcaicos if que evalúan la string del
tipo, una comparación cutre para decidir qué clase usar. ¿Serían las herramientas
de eliminación de código tan avanzadas como para detectar eso?, si no
ejecutan el código, y al fin y al cabo TypeScript “no existe”.`,Lt,bt,re=`Pues resulta que he creado un proyecto de JavaScript vanilla con Vite,
instalado Point it out, creado un rect, hecho una build, y en el .js bundleado
no haber ni rastro de arrows, ni de sus propiedades ni su clase ni na’.
Repito el proceso con solo arrows y veo que ni rastro de rect.`,Ye,Dt,qt=`Así que funciona asombrosamente bien, parece que esto es más avanzado de lo que
creía. No tengo ni idea de qué estrategia seguirá, pero de momento el poder
continuar con mi diseño sin consecuencias técnicas es una muy buena noticia.`,Kt;return V=new $c({props:{$$slots:{default:[nx]},$$scope:{ctx:i}}}),_=new ba({props:{src:Q_,alt:"Sugerencia de VSCode al empezar a escribir la función create(). Se aprecia que sugiere tanto arrow como rect."}}),et=new ba({props:{src:ex,alt:"Sugerencia de VSCode al escribir las opciones de la función create para el tipo rect",figCaption:"Opciones comunes para todos los punteros y para aquellos de tipo SVG, además de las opciones exclusivas de 'rect'. <small>NOTA: los simbolitos son de accesibilidad para personas con algún tipo de deficiencia de visión de color.</small>"}}),ct=new ba({props:{src:tx,alt:"Sugerencia de VSCode al escribir las opciones de la función create para el tipo rect",figCaption:"Opciones comunes además de las opciones exclusivas de 'arrow'."}}),ot=new Nn({props:{language:"TypeScript",$$slots:{default:[ix]},$$scope:{ctx:i}}}),{c(){e=x("p"),e.textContent=t,n=y(),a=x("p"),a.textContent=s,c=y(),l=x("p"),l.textContent=u,p=y(),d=x("p"),d.innerHTML=v,f=y(),g=x("p"),g.textContent=T,S=y(),h=x("h2"),h.textContent=m,L=y(),P=x("p"),q=dt("Estaba acordándome de la vieja Lodash. "),Ct(V.$$.fragment),I=dt(` Es una
famosa biblioteca que brinda utilidades para aplicar programación
funcional a muchas partes de JavaScript.`),H=y(),z=x("p"),z.textContent=w,A=y(),B=x("p"),B.textContent=W,Y=y(),X=x("p"),X.textContent=te,se=y(),de=x("p"),de.innerHTML=$,De=y(),ie=x("h3"),ie.textContent=me,We=y(),ze=x("p"),ze.textContent=J,Ee=y(),Re=x("p"),Re.textContent=Se,Be=y(),ce=x("p"),ce.textContent=Te,it=y(),F=x("h2"),F.textContent=Ge,nt=y(),He=x("p"),He.textContent=Le,st=y(),Ue=x("p"),Ue.textContent=Fe,O=y(),Ct(_.$$.fragment),R=y(),ne=x("p"),ne.textContent=pe,he=y(),Ve=x("p"),Ve.textContent=Ae,Ie=y(),$e=x("p"),$e.textContent=k,_e=y(),Ct(et.$$.fragment),Z=y(),ve=x("p"),ve.textContent=Xe,Je=y(),Ct(ct.$$.fragment),G=y(),we=x("p"),we.textContent=Ce,ye=y(),Pe=x("p"),Pe.textContent=Ze,tt=y(),Ct(ot.$$.fragment),ut=y(),Ke=x("h3"),Ke.textContent=ft,mt=y(),Q=x("p"),Q.textContent=Ne,xt=y(),fe=x("p"),fe.textContent=qe,Lt=y(),bt=x("p"),bt.textContent=re,Ye=y(),Dt=x("p"),Dt.textContent=qt},l(oe){e=b(oe,"P",{"data-svelte-h":!0}),C(e)!=="svelte-15e5vpf"&&(e.textContent=t),n=M(oe),a=b(oe,"P",{"data-svelte-h":!0}),C(a)!=="svelte-vjhh0i"&&(a.textContent=s),c=M(oe),l=b(oe,"P",{"data-svelte-h":!0}),C(l)!=="svelte-1wxcq8o"&&(l.textContent=u),p=M(oe),d=b(oe,"P",{"data-svelte-h":!0}),C(d)!=="svelte-1jell40"&&(d.innerHTML=v),f=M(oe),g=b(oe,"P",{"data-svelte-h":!0}),C(g)!=="svelte-1twu8y9"&&(g.textContent=T),S=M(oe),h=b(oe,"H2",{"data-svelte-h":!0}),C(h)!=="svelte-g7u8rd"&&(h.textContent=m),L=M(oe),P=b(oe,"P",{});var E=kt(P);q=pt(E,"Estaba acordándome de la vieja Lodash. "),St(V.$$.fragment,E),I=pt(E,` Es una
famosa biblioteca que brinda utilidades para aplicar programación
funcional a muchas partes de JavaScript.`),E.forEach(o),H=M(oe),z=b(oe,"P",{"data-svelte-h":!0}),C(z)!=="svelte-1kopbf0"&&(z.textContent=w),A=M(oe),B=b(oe,"P",{"data-svelte-h":!0}),C(B)!=="svelte-1fyk4rs"&&(B.textContent=W),Y=M(oe),X=b(oe,"P",{"data-svelte-h":!0}),C(X)!=="svelte-6x6eyz"&&(X.textContent=te),se=M(oe),de=b(oe,"P",{"data-svelte-h":!0}),C(de)!=="svelte-9ajmea"&&(de.innerHTML=$),De=M(oe),ie=b(oe,"H3",{"data-svelte-h":!0}),C(ie)!=="svelte-wkrciz"&&(ie.textContent=me),We=M(oe),ze=b(oe,"P",{"data-svelte-h":!0}),C(ze)!=="svelte-gdwgvo"&&(ze.textContent=J),Ee=M(oe),Re=b(oe,"P",{"data-svelte-h":!0}),C(Re)!=="svelte-135wybo"&&(Re.textContent=Se),Be=M(oe),ce=b(oe,"P",{"data-svelte-h":!0}),C(ce)!=="svelte-hd5dc4"&&(ce.textContent=Te),it=M(oe),F=b(oe,"H2",{"data-svelte-h":!0}),C(F)!=="svelte-168zpit"&&(F.textContent=Ge),nt=M(oe),He=b(oe,"P",{"data-svelte-h":!0}),C(He)!=="svelte-138drnp"&&(He.textContent=Le),st=M(oe),Ue=b(oe,"P",{"data-svelte-h":!0}),C(Ue)!=="svelte-fiagbg"&&(Ue.textContent=Fe),O=M(oe),St(_.$$.fragment,oe),R=M(oe),ne=b(oe,"P",{"data-svelte-h":!0}),C(ne)!=="svelte-rqe7j"&&(ne.textContent=pe),he=M(oe),Ve=b(oe,"P",{"data-svelte-h":!0}),C(Ve)!=="svelte-1pv97ce"&&(Ve.textContent=Ae),Ie=M(oe),$e=b(oe,"P",{"data-svelte-h":!0}),C($e)!=="svelte-1vc47c6"&&($e.textContent=k),_e=M(oe),St(et.$$.fragment,oe),Z=M(oe),ve=b(oe,"P",{"data-svelte-h":!0}),C(ve)!=="svelte-8ubglo"&&(ve.textContent=Xe),Je=M(oe),St(ct.$$.fragment,oe),G=M(oe),we=b(oe,"P",{"data-svelte-h":!0}),C(we)!=="svelte-yj2hnq"&&(we.textContent=Ce),ye=M(oe),Pe=b(oe,"P",{"data-svelte-h":!0}),C(Pe)!=="svelte-1ebwcib"&&(Pe.textContent=Ze),tt=M(oe),St(ot.$$.fragment,oe),ut=M(oe),Ke=b(oe,"H3",{"data-svelte-h":!0}),C(Ke)!=="svelte-sek9rw"&&(Ke.textContent=ft),mt=M(oe),Q=b(oe,"P",{"data-svelte-h":!0}),C(Q)!=="svelte-1lpsewo"&&(Q.textContent=Ne),xt=M(oe),fe=b(oe,"P",{"data-svelte-h":!0}),C(fe)!=="svelte-1ii0rsm"&&(fe.textContent=qe),Lt=M(oe),bt=b(oe,"P",{"data-svelte-h":!0}),C(bt)!=="svelte-1dizd6g"&&(bt.textContent=re),Ye=M(oe),Dt=b(oe,"P",{"data-svelte-h":!0}),C(Dt)!=="svelte-1d7x851"&&(Dt.textContent=qt)},m(oe,E){r(oe,e,E),r(oe,n,E),r(oe,a,E),r(oe,c,E),r(oe,l,E),r(oe,p,E),r(oe,d,E),r(oe,f,E),r(oe,g,E),r(oe,S,E),r(oe,h,E),r(oe,L,E),r(oe,P,E),_t(P,q),Et(V,P,null),_t(P,I),r(oe,H,E),r(oe,z,E),r(oe,A,E),r(oe,B,E),r(oe,Y,E),r(oe,X,E),r(oe,se,E),r(oe,de,E),r(oe,De,E),r(oe,ie,E),r(oe,We,E),r(oe,ze,E),r(oe,Ee,E),r(oe,Re,E),r(oe,Be,E),r(oe,ce,E),r(oe,it,E),r(oe,F,E),r(oe,nt,E),r(oe,He,E),r(oe,st,E),r(oe,Ue,E),r(oe,O,E),Et(_,oe,E),r(oe,R,E),r(oe,ne,E),r(oe,he,E),r(oe,Ve,E),r(oe,Ie,E),r(oe,$e,E),r(oe,_e,E),Et(et,oe,E),r(oe,Z,E),r(oe,ve,E),r(oe,Je,E),Et(ct,oe,E),r(oe,G,E),r(oe,we,E),r(oe,ye,E),r(oe,Pe,E),r(oe,tt,E),Et(ot,oe,E),r(oe,ut,E),r(oe,Ke,E),r(oe,mt,E),r(oe,Q,E),r(oe,xt,E),r(oe,fe,E),r(oe,Lt,E),r(oe,bt,E),r(oe,Ye,E),r(oe,Dt,E),Kt=!0},p(oe,[E]){const ee={};E&1&&(ee.$$scope={dirty:E,ctx:oe}),V.$set(ee);const ue={};E&1&&(ue.$$scope={dirty:E,ctx:oe}),ot.$set(ue)},i(oe){Kt||(vt(V.$$.fragment,oe),vt(_.$$.fragment,oe),vt(et.$$.fragment,oe),vt(ct.$$.fragment,oe),vt(ot.$$.fragment,oe),Kt=!0)},o(oe){gt(V.$$.fragment,oe),gt(_.$$.fragment,oe),gt(et.$$.fragment,oe),gt(ct.$$.fragment,oe),gt(ot.$$.fragment,oe),Kt=!1},d(oe){oe&&(o(e),o(n),o(a),o(c),o(l),o(p),o(d),o(f),o(g),o(S),o(h),o(L),o(P),o(H),o(z),o(A),o(B),o(Y),o(X),o(se),o(de),o(De),o(ie),o(We),o(ze),o(Ee),o(Re),o(Be),o(ce),o(it),o(F),o(nt),o(He),o(st),o(Ue),o(O),o(R),o(ne),o(he),o(Ve),o(Ie),o($e),o(_e),o(Z),o(ve),o(Je),o(G),o(we),o(ye),o(Pe),o(tt),o(ut),o(Ke),o(mt),o(Q),o(xt),o(fe),o(Lt),o(bt),o(Ye),o(Dt)),Tt(V),Tt(_,oe),Tt(et,oe),Tt(ct,oe),Tt(ot,oe)}}}const sx={title:"Tamaños que no importan: tree-shakeables",slug:"tamano-no-importa-tree-shakeables",coverImage:"/src/assets/posts-covers/tree-shaking.jpg",coverAuthor:"Edoardo Botez",excerpt:"Arrojo un poco de luz a esto del tree-shaking en módulos ECMAScript.",date:"2024-08-11T15:06:23.177Z",updated:"2024-08-11T15:06:23.903Z",hidden:!1,tags:["DX","Front end"],keywords:["tree-shake","side-effects","biblioteca"],type:"default"};class ox extends Xt{constructor(e){super(),Yt(this,e,null,ax,$t,{})}}const rx=Object.freeze(Object.defineProperty({__proto__:null,default:ox,metadata:sx},Symbol.toStringTag,{value:"Module"}));function lx(i){let e;return{c(){e=dt(`NOTA: no he notado diferencias de género en este ámbito, más allá de
una mayor cantidad hombres. Asume que cuando digo directivo digo también 
directiva/e.`)},l(t){e=pt(t,`NOTA: no he notado diferencias de género en este ámbito, más allá de
una mayor cantidad hombres. Asume que cuando digo directivo digo también 
directiva/e.`)},m(t,n){r(t,e,n)},d(t){t&&o(e)}}}function cx(i){let e,t=`En la <a href="/blog/autonomia-ajenidad-1">primera parte</a> de estas entradas que originalmente
(y erróneamente) titulé “mi problema con el trabajo”, hablaba de esa trampa de
la ilusión de la libertad como supuesto autónomo.`,n,a,s=`También hablaba de lo injusto que me parece el concepto de ajenidad aplicado a
los trabajos creativos, eso de que alguien se adueñe de los resultados de tu
creatividad de manera permanente por un salario puntual incluso tras el cese
de la relación laboral.`,c,l,u=`Nombré excepciones, comenté que incluso con ajenidad de por medio, muchas veces no se
produce esa apropiación de la creatividad y que muchas empresas fomentan
el divulgar publicamente sobre sus procesos de desarrollo para manifestar
excelencia técnica. Y en realidad, esas excepciones no son tan infrecuentes.`,p,d,v=`Pero hay una visión un tanto “condescendiente” con la empresa capitalista en
este sector. Y esto es debido al trato supuestamente “privilegiado” que se da
a los profesionales de la ingeniería de software. Quiero hablar de ello.`,f,g,T="Como siempre, esto es un blog personal y esto es una opinión no menos personal.",S,h,m="Los dos tipos de consultoría",L,P,q=`Primero tengo que explicar en qué consiste mi trabajo y qué me ha llevado a
conocer a tanta gente y entornos en los últimos 3 años.`,V,I,H=`A ver, no conozco cuántas definiciones de consultoría existen, pero sí es
notable dos tipos de actividades diferenciadas.`,z,w,A="La consultoría IT más común",B,W,Y=`Es la que define a las empresas “consultoras” IT, entendidas como empresas de
desarrollo de soluciones IT a medida. Aquellas que se encargan de todos los
procesos enfocados a desarrollar una solución tecnológica adaptada a las
necesidades de una empresa (incluyendo al estado).`,X,te,se=`Suena muy bonito, pero aunque hay consultoras excelentes con personal muy
cualificado, hay muchas otras que
gozan de una imagen justificadamente mala, las grandes consultoras
internacionales son muchas veces entendidas también como cárnicas. Una cárnica
en este sector es denominada así por su tendencia a contratar programadores a
decenas, centenas o incluso millares (“por kilos”), como si de carne se tratara.`,de,$,De=`Por lo general hacen muchos convenios con academias y les importa poco el nivel
y el desarrollo que puedan obtener sus profesionales, pues en realidad el que
sean o no productivos a veces ni importa.`,ie,me,We=`Entre los objetivos de esta contratación masiva se encuentra el de manifestar 
poder de contratación. En procesos de 
adjudicación de proyectos con oferta pública (licitaciones), cuando surgen del
estado o empresas asociadas a él, tiene mucho valor la capacidad para 
generar empleo, así sea de manera artificial y aunque esto luego implique
despidos masivos tras periodos de pruebas. 
<small>Por supuesto tiene más valor si
una consultora decide cobrar 4 veces menos que su competencia por alguna razón
que nadie comprende (como el caso de Indra aceptando llevar el recuento electrónico de 
votos durante las elecciones generales de 2015, con un para nada sospechoso
resultado extremadamente alejado de los sondeos previos. Menos mal que
vivimos en una socialdemocracia donde es impensable la posibilidad de manipular
resultados 🙂).</small>`,ze,J,Ee=`Hay otras razones, como hacer un filtrado masivo como quien filtra kilos
de tierra de río para sacar cantidades insignificantes de oro, una estrategia
de búsqueda de talento habitual en grandes tecnológicas, pero eso da para otras
entradas.`,Re,Se,Be=`Esto es una realidad bastante obvia cuando te acercas a puestos de dirección o
si como autónomo has estado pendiente al BOE y licitaciones, pero es como si a
nadie le gustara hablar de ello 🤷‍♂️.`,ce,Te,it="La consultoría profesional",F,Ge,nt=`No sé cómo llamarla. Algunos la llaman consultoría clásica sin más, y otros
defienden que debería llamarse “formación especializada” y ya.`,He,Le,st=`Es a lo que me dedico. No se aleja de la definición de la primera, con la
diferencia de que por lo general te integras al entorno del cliente y tu
actividad tiene lugar en él o al menos compromete a su plantilla.`,Ue,Fe,O=`En esta actividad se ofrecen los mismos servicios de consultoría pero es más
habitual que se te valore por tu experiencia y habilidad, especialmente en
términos de formación, comunicación y dinámica de equipo. Como además te
integras a un grupo profesional, acabas ejerciendo de mentor y comunicándote
directamente con todos transmitiendo como mejor puedas tus conocimientos y
experiencias previas ante problemas similares.`,_,R,ne=`Es un trabajo excelente porque conoces a mucha gente, te obligas a cargarte
prejuicios, a volverte más tolerante y a buscar el mejor lado de toda persona.
A nivel técnico perfilas tus habilidades de análisis al extremo, dado que cada
nuevo entorno implica auditar y analizar soluciones custom que llevan
desarrollando años otras personas, a fin de identificar los puntos críticos y
qué está produciendo los problemas por los que te requieren.`,pe,he,Ve=`Por otra parte, no pocas veces eres tú quien más aprende. Conocer tantos nuevos
entornos y soluciones desarrolladas por otros hace que empieces a ver patrones
continuos y a identificar aquello que está fuera de la norma para bien, a
toparte con soluciones brillantes y excepcionales, normalmente provenientes de
alguna persona muy ingeniosa que ya no forma parte del equipo, alguien que
se fue en búsqueda de desafíos mayores, dejando su legado.`,Ae,Ie,$e=`Es la forma más directa de asumir desafíos continuos y de crecer hasta cierto
punto. Eso sí, con una responsabilidad que puede ser muy estresante. No es
especialmente cómodo llegar a un equipo como un supuesto experto y saber que
todos esperan que muestres soluciones a problemas que llevan teniendo durante
años. Más sabiendo que muchas veces serás uno más en equipos de
profesionales que no tienen un nivel inferior a ti y que ciertamente no te
necesitan, sino que tienen a directivos incompetentes que confían antes en el
gurú extranjero de turno que en sus propios empleados.`,k,_e,et=`Es por esto que mi actividad suele centrarse en directivos sin formación técnica.
Pero no es fácil
hacer comprender la naturaleza de este trabajo a personas que no han picado una
sola línea de código y lleva a cargo de programadores más de una década,
creyendo que conocen muy bien cómo funciona el desarrollo de software y sin
pensar ni por un segundo que el problema de un proyecto pueden ser ellos mismos.`,Z,ve,Xe="Tratamiento para directivos",Je,ct,G,we,Ce=`Un directivo (o jefe de proyecto) de software sin nociones técnicas no comprende que el error
es una parte natural de este arte. No comprende que es necesario dedicar el tiempo
que haga falta a asegurar una correcta testabilidad y realizar refactoring, y que
aún así seguirá siendo necesario la monitorización y seguirá habiendo errores.`,ye,Pe,Ze=`Un directivo que no comprende los procesos de desarrollo solo ve que el producto
no está cambiando de cara al usuario, no tiene capacidad para saber si los
empleados están haciendo realmente algo o les están mintiendo en su cara mientras
dicen que están mejorando el código.`,tt,ot,ut=`Aún peor, muchos asumen que si su equipo lleva una semana haciendo refactoring
creen que es porque hicieron cosas mal y que ahora están corrigiendo errores,
cuando en un primer momento tendrían que haberlo hecho “bien”.`,Ke,ft,mt=`Muchos ven a equipos de ingeniería como meros obreros que tienen que decidir
algo, planificarlo y hacerlo “bien”, no comprenden la naturaleza del error, la
deuda técnica, la flexibilidad y dinamismo que debe
haber en los procesos de desarrollo.`,Q,Ne,xt=`Un directivo así solo mete presiones y no tiene capacidad para determinar el
estado ni el rumbo del proyecto, no le salva ni el delegar porque nunca
podrá comprender el feedback que pueda recibir de la persona en la que delega.`,fe,qe,Lt=`Lo mejor que puede pasar con un directivo así es que delegue completamente y con
fé ciega, pero entonces se acaba dando cuenta de que su papel es
completamente irrelevante, y no solo él se da cuenta de ello. Cuando nadie
necesita un capitán, el capitán solo es un estorbo, un imbécil con autoridad
que además suele cobrar más.`,bt,re,Ye=`Pero cuando no delegan es mucho peor, ya no solo son dispensables, entorpecen a
todo el equipo, fomentan malas prácticas por exigir resultados visibles cuanto
antes y generan una fuerte sensación de impotencia, ansiedad y estancamiento
profesional en todos los desarrolladores. Por no decir que no suelen asumir ni una
sola de las responsabilidades que deben asumir como directivos de un proyecto
de software, porque la mayoría requiere algunos conocimientos técnicos base.`,Dt,qt,Kt=`Por suerte, hasta ahora todos los directivos con los que he llegado a toparme
en mi actividad han podido comprender la importancia y los problemas que
supone su incompetencia técnica, y todos han podido ver los errores y tremendas
estupideces que estaban diciendo y cometiendo tras una correcta formación, pero
desde luego no es algo especialmente fácil.`,oe,E,ee=`La comunicación con directivos puede ser complicada, se necesita
otro lenguaje, se necesita otro tono y se necesitan enfoques muy prácticos,
directos, precisos y tajantes. Es normal, recordemos que no dejan de ser seres
humanos que en su caso han estado en posiciones de poder, a veces demasiado tiempo.`,ue,le,ae=`Es muy frecuente que en su trayectoria profesional coman discusiones muy absurdas con
personas que se quejan sin dar soluciones. Es frecuente que sean ellos los que
deban decir “hasta aquí” y zanjar asuntos aún ante el descontento de alguien, y
esto acaba por generar conductas a veces algo poco empáticas.`,Oe,ke,at=`El trabajo de un
consultor cuando debe tratar con directivos se acerca a partes iguales al de
consejero real y al de dom/dominatrix: tener la sutileza para provocar cambios
sin cuestionar su autoridad delante del equipo, y tener la firmeza para darle
algunos latigazos en privado cuando sea necesario, a lo que suelen estar
sorprendentemente dispuestos, especialmente cuando son ellos los que han pagado
por tu servicio para mejorar la situación laboral.`,Qe;return ct=new Xn({props:{$$slots:{default:[lx]},$$scope:{ctx:i}}}),{c(){e=x("p"),e.innerHTML=t,n=y(),a=x("p"),a.textContent=s,c=y(),l=x("p"),l.textContent=u,p=y(),d=x("p"),d.textContent=v,f=y(),g=x("p"),g.textContent=T,S=y(),h=x("h2"),h.textContent=m,L=y(),P=x("p"),P.textContent=q,V=y(),I=x("p"),I.textContent=H,z=y(),w=x("h3"),w.textContent=A,B=y(),W=x("p"),W.textContent=Y,X=y(),te=x("p"),te.textContent=se,de=y(),$=x("p"),$.textContent=De,ie=y(),me=x("p"),me.innerHTML=We,ze=y(),J=x("p"),J.textContent=Ee,Re=y(),Se=x("p"),Se.textContent=Be,ce=y(),Te=x("h3"),Te.textContent=it,F=y(),Ge=x("p"),Ge.textContent=nt,He=y(),Le=x("p"),Le.textContent=st,Ue=y(),Fe=x("p"),Fe.textContent=O,_=y(),R=x("p"),R.textContent=ne,pe=y(),he=x("p"),he.textContent=Ve,Ae=y(),Ie=x("p"),Ie.textContent=$e,k=y(),_e=x("p"),_e.textContent=et,Z=y(),ve=x("h2"),ve.textContent=Xe,Je=y(),Ct(ct.$$.fragment),G=y(),we=x("p"),we.textContent=Ce,ye=y(),Pe=x("p"),Pe.textContent=Ze,tt=y(),ot=x("p"),ot.textContent=ut,Ke=y(),ft=x("p"),ft.textContent=mt,Q=y(),Ne=x("p"),Ne.textContent=xt,fe=y(),qe=x("p"),qe.textContent=Lt,bt=y(),re=x("p"),re.textContent=Ye,Dt=y(),qt=x("p"),qt.textContent=Kt,oe=y(),E=x("p"),E.textContent=ee,ue=y(),le=x("p"),le.textContent=ae,Oe=y(),ke=x("p"),ke.textContent=at},l(j){e=b(j,"P",{"data-svelte-h":!0}),C(e)!=="svelte-1iiakgo"&&(e.innerHTML=t),n=M(j),a=b(j,"P",{"data-svelte-h":!0}),C(a)!=="svelte-12tujuj"&&(a.textContent=s),c=M(j),l=b(j,"P",{"data-svelte-h":!0}),C(l)!=="svelte-10ktz68"&&(l.textContent=u),p=M(j),d=b(j,"P",{"data-svelte-h":!0}),C(d)!=="svelte-15vlnlv"&&(d.textContent=v),f=M(j),g=b(j,"P",{"data-svelte-h":!0}),C(g)!=="svelte-mqtgny"&&(g.textContent=T),S=M(j),h=b(j,"H2",{"data-svelte-h":!0}),C(h)!=="svelte-1j7xnh3"&&(h.textContent=m),L=M(j),P=b(j,"P",{"data-svelte-h":!0}),C(P)!=="svelte-1hn486m"&&(P.textContent=q),V=M(j),I=b(j,"P",{"data-svelte-h":!0}),C(I)!=="svelte-1u70d73"&&(I.textContent=H),z=M(j),w=b(j,"H3",{"data-svelte-h":!0}),C(w)!=="svelte-14ihzmv"&&(w.textContent=A),B=M(j),W=b(j,"P",{"data-svelte-h":!0}),C(W)!=="svelte-1kugems"&&(W.textContent=Y),X=M(j),te=b(j,"P",{"data-svelte-h":!0}),C(te)!=="svelte-1cy21h5"&&(te.textContent=se),de=M(j),$=b(j,"P",{"data-svelte-h":!0}),C($)!=="svelte-1cme0t5"&&($.textContent=De),ie=M(j),me=b(j,"P",{"data-svelte-h":!0}),C(me)!=="svelte-g1skft"&&(me.innerHTML=We),ze=M(j),J=b(j,"P",{"data-svelte-h":!0}),C(J)!=="svelte-b22wq9"&&(J.textContent=Ee),Re=M(j),Se=b(j,"P",{"data-svelte-h":!0}),C(Se)!=="svelte-1wtdicu"&&(Se.textContent=Be),ce=M(j),Te=b(j,"H3",{"data-svelte-h":!0}),C(Te)!=="svelte-175l5aq"&&(Te.textContent=it),F=M(j),Ge=b(j,"P",{"data-svelte-h":!0}),C(Ge)!=="svelte-1rac4fd"&&(Ge.textContent=nt),He=M(j),Le=b(j,"P",{"data-svelte-h":!0}),C(Le)!=="svelte-134t9a7"&&(Le.textContent=st),Ue=M(j),Fe=b(j,"P",{"data-svelte-h":!0}),C(Fe)!=="svelte-9jnm7l"&&(Fe.textContent=O),_=M(j),R=b(j,"P",{"data-svelte-h":!0}),C(R)!=="svelte-1a30uqh"&&(R.textContent=ne),pe=M(j),he=b(j,"P",{"data-svelte-h":!0}),C(he)!=="svelte-z6pw4r"&&(he.textContent=Ve),Ae=M(j),Ie=b(j,"P",{"data-svelte-h":!0}),C(Ie)!=="svelte-11vlw5e"&&(Ie.textContent=$e),k=M(j),_e=b(j,"P",{"data-svelte-h":!0}),C(_e)!=="svelte-t0fih4"&&(_e.textContent=et),Z=M(j),ve=b(j,"H2",{"data-svelte-h":!0}),C(ve)!=="svelte-pcnb56"&&(ve.textContent=Xe),Je=M(j),St(ct.$$.fragment,j),G=M(j),we=b(j,"P",{"data-svelte-h":!0}),C(we)!=="svelte-18d246z"&&(we.textContent=Ce),ye=M(j),Pe=b(j,"P",{"data-svelte-h":!0}),C(Pe)!=="svelte-99tjnl"&&(Pe.textContent=Ze),tt=M(j),ot=b(j,"P",{"data-svelte-h":!0}),C(ot)!=="svelte-l9x7lv"&&(ot.textContent=ut),Ke=M(j),ft=b(j,"P",{"data-svelte-h":!0}),C(ft)!=="svelte-ahiizd"&&(ft.textContent=mt),Q=M(j),Ne=b(j,"P",{"data-svelte-h":!0}),C(Ne)!=="svelte-8qowcd"&&(Ne.textContent=xt),fe=M(j),qe=b(j,"P",{"data-svelte-h":!0}),C(qe)!=="svelte-oa0pwp"&&(qe.textContent=Lt),bt=M(j),re=b(j,"P",{"data-svelte-h":!0}),C(re)!=="svelte-11i1gv6"&&(re.textContent=Ye),Dt=M(j),qt=b(j,"P",{"data-svelte-h":!0}),C(qt)!=="svelte-yml7fg"&&(qt.textContent=Kt),oe=M(j),E=b(j,"P",{"data-svelte-h":!0}),C(E)!=="svelte-1kgj6vx"&&(E.textContent=ee),ue=M(j),le=b(j,"P",{"data-svelte-h":!0}),C(le)!=="svelte-1khq7r0"&&(le.textContent=ae),Oe=M(j),ke=b(j,"P",{"data-svelte-h":!0}),C(ke)!=="svelte-tlkjpl"&&(ke.textContent=at)},m(j,N){r(j,e,N),r(j,n,N),r(j,a,N),r(j,c,N),r(j,l,N),r(j,p,N),r(j,d,N),r(j,f,N),r(j,g,N),r(j,S,N),r(j,h,N),r(j,L,N),r(j,P,N),r(j,V,N),r(j,I,N),r(j,z,N),r(j,w,N),r(j,B,N),r(j,W,N),r(j,X,N),r(j,te,N),r(j,de,N),r(j,$,N),r(j,ie,N),r(j,me,N),r(j,ze,N),r(j,J,N),r(j,Re,N),r(j,Se,N),r(j,ce,N),r(j,Te,N),r(j,F,N),r(j,Ge,N),r(j,He,N),r(j,Le,N),r(j,Ue,N),r(j,Fe,N),r(j,_,N),r(j,R,N),r(j,pe,N),r(j,he,N),r(j,Ae,N),r(j,Ie,N),r(j,k,N),r(j,_e,N),r(j,Z,N),r(j,ve,N),r(j,Je,N),Et(ct,j,N),r(j,G,N),r(j,we,N),r(j,ye,N),r(j,Pe,N),r(j,tt,N),r(j,ot,N),r(j,Ke,N),r(j,ft,N),r(j,Q,N),r(j,Ne,N),r(j,fe,N),r(j,qe,N),r(j,bt,N),r(j,re,N),r(j,Dt,N),r(j,qt,N),r(j,oe,N),r(j,E,N),r(j,ue,N),r(j,le,N),r(j,Oe,N),r(j,ke,N),Qe=!0},p(j,[N]){const ge={};N&1&&(ge.$$scope={dirty:N,ctx:j}),ct.$set(ge)},i(j){Qe||(vt(ct.$$.fragment,j),Qe=!0)},o(j){gt(ct.$$.fragment,j),Qe=!1},d(j){j&&(o(e),o(n),o(a),o(c),o(l),o(p),o(d),o(f),o(g),o(S),o(h),o(L),o(P),o(V),o(I),o(z),o(w),o(B),o(W),o(X),o(te),o(de),o($),o(ie),o(me),o(ze),o(J),o(Re),o(Se),o(ce),o(Te),o(F),o(Ge),o(He),o(Le),o(Ue),o(Fe),o(_),o(R),o(pe),o(he),o(Ae),o(Ie),o(k),o(_e),o(Z),o(ve),o(Je),o(G),o(we),o(ye),o(Pe),o(tt),o(ot),o(Ke),o(ft),o(Q),o(Ne),o(fe),o(qe),o(bt),o(re),o(Dt),o(qt),o(oe),o(E),o(ue),o(le),o(Oe),o(ke)),Tt(ct,j)}}}const ux={title:"Autonomía y ajenidad (parte 2)",slug:"autonomia-ajenidad-2",coverImage:"/src/assets/posts-covers/starfish.jpg",coverPosition:"normal",coverAuthor:"Pedro Lastra",excerpt:"Segunda parte. Analizo la consultoría y el mentoring.",date:"2024-09-05T13:06:23.177Z",updated:"2024-09-05T13:06:23.903Z",hidden:!0,tags:["Personal","Laboral","Consultoría"],keywords:["trabajo","autónomo"],type:"default"};class dx extends Xt{constructor(e){super(),Yt(this,e,null,cx,$t,{})}}const px=Object.freeze(Object.defineProperty({__proto__:null,default:dx,metadata:ux},Symbol.toStringTag,{value:"Module"}));function fx(i){let e;return{c(){e=dt(`NOTA: no he notado diferencias de género en este ámbito, más allá de
una mayor cantidad hombres. Asume que cuando digo directivo digo también 
directiva/e.`)},l(t){e=pt(t,`NOTA: no he notado diferencias de género en este ámbito, más allá de
una mayor cantidad hombres. Asume que cuando digo directivo digo también 
directiva/e.`)},m(t,n){r(t,e,n)},d(t){t&&o(e)}}}function hx(i){let e,t=`En la <a href="/blog/autonomia-ajenidad-1">primera parte</a> de un conjunto de
entradas sobre la relación laboral que originalmente (y erróneamente) titulé
“mi problema con el trabajo”, abarcaba temas como esa trampa de la ilusión de la libertad
como supuesto autónomo y de lo injusto que me parece el concepto de ajenidad
aplicado a los trabajos creativos.`,n,a,s=`En esa entrada comentaba que hablaría sobre la consultoría en la siguiente parte,
que aún tengo en borrador. Pero he preferido dedicarle un espacio propio en esta
entrada independiente.`,c,l,u="Como siempre, esto es un blog personal y esto es una opinión no menos personal.",p,d,v="Los dos tipos de consultoría",f,g,T=`Primero tengo que explicar en qué consiste mi trabajo y qué me ha llevado a
conocer a tanta gente y entornos en los últimos 3-4 años.`,S,h,m=`A ver, no conozco cuántas definiciones de consultoría existen, pero sí es
notable dos tipos de actividades diferenciadas.`,L,P,q="La consultoría IT",V,I,H=`Es la que define a las empresas “consultoras” IT, entendidas como empresas de
desarrollo de soluciones tecnológicas a medida (habitualmente software y
sistemas de información). Aquellas que se encargan de todos los
procesos enfocados a desarrollar una solución tecnológica adaptada a las
necesidades de una empresa (incluyendo al estado).`,z,w,A=`Suena muy bonito, pero aunque hay consultoras excelentes con personal muy
cualificado, hay muchas otras que
gozan de una imagen justificadamente mala, como muchas grandes consultoras
internacionales que suelen ser entendidas también como cárnicas. Una cárnica
en este sector es denominada así por su tendencia a contratar programadores a
decenas, centenas o incluso millares (“por kilos”), como si de carne se tratara.`,B,W,Y=`Suelen hacer muchos convenios con academias y les importa poco el nivel
y el desarrollo que puedan obtener sus profesionales, pues en realidad el que
sean o no productivos a veces ni importa.`,X,te,se=`Entre los objetivos de esta contratación masiva se encuentra el de manifestar 
poder de contratación. En procesos de 
adjudicación de proyectos con oferta pública (licitaciones), cuando surgen del
estado o empresas asociadas a él, tiene mucho valor la capacidad para 
generar empleo, así sea de manera artificial y aunque esto luego implique
despidos masivos tras periodos de pruebas. 
<small>Por supuesto tiene más valor si
una consultora decide cobrar 4 veces menos que su competencia por alguna razón
que nadie comprende (como el caso de Indra aceptando llevar el recuento electrónico de 
votos durante las elecciones generales de 2015, con un para nada sospechoso
resultado alejado de los sondeos previos. Menos mal que
vivimos en una socialdemocracia donde es impensable la posibilidad de manipular
resultados 🙂).</small>`,de,$,De=`Hay otras razones, como hacer un filtrado masivo como quien filtra kilos
de tierra de río para sacar cantidades insignificantes de oro, una estrategia
de búsqueda de talento habitual en grandes tecnológicas, pero eso da para otras
entradas.`,ie,me,We=`Esto es una realidad bastante obvia cuando te acercas a puestos de dirección o
si como autónomo has estado pendiente al BOE y licitaciones, pero es como si a
nadie le gustara hablar de ello 🤷‍♂️.`,ze,J,Ee="Consultoría para profesionales en IT",Re,Se,Be=`No sé cómo llamarla. Algunos la llaman consultoría sin más, y otros
defienden que debería llamarse “formación especializada” y ya.`,ce,Te,it=`Es a lo que me dedico. No se aleja de la definición de la primera, con la
diferencia de que por lo general el cliente ya dispone de un equipo de IT
consolidado, o incluso puede ser a su vez otra consultora, y tú te integras a
su entorno para dar una formación o un servicio especializado enfocado a cumplir
ciertos objetivos o a formar en determinadas tecnologías o metodologías a su
plantilla.`,F,Ge,nt=`En esta actividad se ofrecen los mismos servicios de consultoría pero es más
habitual que se te valore por tu experiencia y habilidad, especialmente en
términos de formación, comunicación y dinámica de equipo. Como además te
integras a un grupo profesional, acabas ejerciendo de mentor y comunicándote
directamente con todos transmitiendo como mejor puedas tus conocimientos y
experiencias previas ante problemas similares.`,He,Le,st=`Es un trabajo excelente porque conoces a mucha gente, te obligas a cargarte
prejuicios, a volverte más tolerante y a buscar el mejor lado de toda persona.
A nivel técnico perfilas tus habilidades de análisis al extremo, dado que cada
nuevo entorno implica auditar y analizar soluciones custom que llevan
desarrollando años otras personas, a fin de identificar los puntos críticos y
qué está produciendo los problemas por los que te requieren.`,Ue,Fe,O=`Por otra parte, no pocas veces eres tú quien más aprende. Conocer tantos nuevos
entornos y soluciones desarrolladas por otros hace que empieces a ver patrones
continuos y a identificar aquello que está fuera de la norma para bien, a
toparte con soluciones brillantes y excepcionales, normalmente provenientes de
alguna persona muy ingeniosa que ya no forma parte del equipo, alguien que
se fue en búsqueda de desafíos mayores y que ha dejado su legado.`,_,R,ne=`Es la forma más directa de asumir desafíos continuos y de crecer hasta cierto
punto. Eso sí, con una responsabilidad que puede ser muy estresante. No es
especialmente cómodo llegar a un equipo como un supuesto experto y saber que
todos esperan que muestres soluciones a problemas que llevan teniendo durante
años.`,pe,he,Ve=`Algunos en un primer momento piensan que vienes a juzgar su trabajo y tienen
miedo que se les exponga. A esto sumar que muchas veces serás uno más en equipos de
profesionales que no tienen un nivel inferior a ti y que ciertamente no te
necesitan, sino que tienen a directivos incompetentes que confían antes en el
gurú extranjero de turno que en sus propios empleados.`,Ae,Ie,$e=`Es por esto que mi actividad suele centrarse en directivos sin formación técnica.
Pero no es fácil
hacer comprender la naturaleza de este trabajo a personas que no han picado una
sola línea de código y lleva a cargo de programadores más de una década,
creyendo que conocen muy bien cómo funciona el desarrollo de software y sin
pensar ni por un segundo que el problema de un proyecto pueden ser ellos mismos.`,k,_e,et="Tratamiento para directivos",Z,ve,Xe,Je,ct=`Un directivo (o jefe de proyecto) de software sin nociones técnicas no comprende que el error
es una parte natural de este arte. No comprende que es necesario dedicar el tiempo
que haga falta a asegurar una correcta testabilidad y realizar refactoring (reescribir
o rediseñar algunas partes del código para mejorar su mantenibilidad, testabilidad, etc), y que
aún así seguirá siendo necesario la monitorización y seguirá habiendo errores.`,G,we,Ce=`Un directivo que no comprende los procesos de desarrollo solo ve que el producto
no está cambiando de cara al usuario, no tiene capacidad para saber si los
empleados están haciendo realmente algo o les están mintiendo en su cara mientras
dicen que están mejorando el código.`,ye,Pe,Ze=`Aún peor, muchos asumen que si su equipo lleva una semana haciendo refactoring
creen que es porque hicieron cosas mal y que ahora están corrigiendo errores,
cuando en un primer momento tendrían que haberlo hecho “bien”.`,tt,ot,ut=`Muchos ven a equipos técnicos como meros obreros que tienen que decidir
algo, planificarlo y hacerlo “bien”, no comprenden la naturaleza del error, la
deuda técnica, la flexibilidad y dinamismo que debe
haber en los procesos de desarrollo.`,Ke,ft,mt=`Un directivo así solo mete presiones y no tiene capacidad para determinar el
estado ni el rumbo del proyecto, no le salva ni el delegar porque nunca
podrá comprender el feedback que pueda recibir de la persona en la que delega.`,Q,Ne,xt=`Lo mejor que puede pasar con un directivo así es que delegue completamente y con
fé ciega, pero entonces se acaba dando cuenta de que su papel es
completamente irrelevante, y no solo él se da cuenta de ello. Cuando nadie
necesita un capitán, el capitán solo es un estorbo, un imbécil con autoridad
que además suele cobrar más.`,fe,qe,Lt=`Pero cuando no delegan es mucho peor, ya no solo son dispensables, entorpecen a
todo el equipo, fomentan malas prácticas por exigir resultados visibles cuanto
antes y generan una fuerte sensación de impotencia, ansiedad y estancamiento
profesional en todos los desarrolladores. Por no decir que no suelen asumir ni una
sola de las responsabilidades que deben asumir como directivos de un proyecto
de software, porque la mayoría requiere algunos conocimientos técnicos base.`,bt,re,Ye=`Por suerte, hasta ahora todos los directivos con los que he llegado a toparme
en mi actividad han podido comprender la importancia y los problemas que
supone su incompetencia técnica, y todos han podido ver los errores y tremendas
estupideces que estaban diciendo y cometiendo tras una correcta formación, pero
desde luego no es algo especialmente fácil.`,Dt,qt,Kt=`La comunicación con directivos puede ser complicada, se necesita
otro lenguaje, se necesita otro tono y se necesitan enfoques muy prácticos,
directos, precisos y tajantes. Es normal, recordemos que no dejan de ser seres
humanos que en su caso han estado en posiciones de poder, a veces demasiado tiempo.`,oe,E,ee=`Es muy frecuente que en su trayectoria profesional coman discusiones muy absurdas con
personas que se quejan sin dar soluciones. Es frecuente que sean ellos los que
deban decir “hasta aquí” y zanjar asuntos aún ante el descontento de alguien, y
esto acaba por generar conductas a veces algo poco empáticas.`,ue,le,ae=`Una postura típica es considerar que los conocimientos técnicos no son parte
de su competencia, y ahí es importante cortarles inmediatamente y no dar espacio:
si quieren dirigir un proyecto de software, deben aprender unas bases técnicas
y acercarse a la realidad de sus empleados a cargo.`,Oe,ke,at=`El trabajo de un
consultor cuando debe tratar con directivos se acerca a partes iguales al de
consejero real y al de dom/dominatrix: tener la sutileza para provocar cambios
sin cuestionar su autoridad delante del equipo, y tener la firmeza para darle
algunos latigazos en privado cuando sea necesario, a lo que suelen estar
sorprendentemente dispuestos, especialmente cuando son ellos los que han pagado
por tu servicio para mejorar la situación laboral.`,Qe,j,N="El miedo a mostrar código y al juicio ajeno",ge,ht,Ot=`Establezco una regla muy directa en mi trabajo: no expongo a nadie, o no por la
calidad de su trabajo, desde luego. Por lo general ningún directivo me ha pedido
a priori y directamente que busque a culpables o al más incompetente del equipo
para funarlo, pero indirectamente es algo que ven en auditorías. Si expongo
una mala decisión de diseño, alguien buscará a quién tomó dicha decisión.`,Pt,Ht,Ut=`Es por eso que antes de cualquier auditoría o antes de presentar los resultados
hago mucho hincapié en que en este mundo no tiene ningún sentido la cultura
punitiva y que hay cientos de factores por los que un profesional comete
errores, tenga la experiencia que tenga.`,lt,Ft,Mt="La vergüenza",jt,Vt,Jt=`Lo que realmente afecta a muchos profesionales es que otros observen sus
espaguetis, su deuda técnica, la ausencia de principios de diseño y otras
cuestiones de la que ellos mismos son conscientes.`,ln,At,pn=`Muchas personas se autocastigan porque saben muy bien que están haciendo
locuras, que no están siguiendo buenas prácticas por “pereza” (aunque suponga
trabajar más 🤦‍♂️) y que no se pueden justificar. Es uno de los motivos por los
que muchos quieren cambiar de trabajo, se empiezan a sentir incómodos con su
propio trabajo o se sienten estancados porque no hay nadie que les anime a
mejorar.`,cn,zt,Hn=`El problema es que son conscientes de que lo pueden hacer mejor, pero eso
conlleva un esfuerzo investigador e incluso horas en casa, un esfuerzo que
consideran que nadie valorará. Tristemente no se suelen equivocar.`,fn,Wt,Di=`Supón que estás en esa situación, un consultor externo llega a auditar
código y decide que quiere sentarse 8 horas junto a ti a ver qué y cómo has
hecho algo de lo que tú mismo te avergüenzas, es natural pensar que viene a
juzgarte y no a ayudar.`,Dn,K,je=`Hacer comprender a una persona que no vienes a juzgarle y que su situación es
muy común, mientras que lo animas y le das razones y estrategias para escribir
código de mayor calidad, es un reto que solo suele funcionar cuando viene
acompañado de una reestructuración completa de la dinámica de trabajo y el
entorno laboral.`,kn,vn,is="Soluciones que producen un mindblow en directivos",ci,gn,as=`No puedo exponer aquí todos mis truquillos, no porque tema compartirlos,
casi todos son obviedades bien conocidas desde los 80, sino porque la entrada
sería más larga de lo que ya es. Me centraré en aquellas que suelen dejar
ojipláticos a las personas con empleados a cargo.`,ui,_n,ss=`Cada equipo es un mundo, no se puede generalizar, lo que es especialmente
efectivo en un entorno puede ser contraproducente en otro, es necesario una
evaluación individual de los empleados, sus motivaciones y sus necesidades.`,di,xn,os=`Muchas de las técnicas requieren además una metodología adicional o comprender
un enfoque, un mentor y supervisor que entienda si algo realmente funciona
y cómo ajustarlo.`,pi,bn,rs="El pair programming para la construcción de vínculos",fi,yn,ls=`Es un clásico, y la versión más clásica es la más efectiva en un primer momento:
reducir los dispositivos encendidos a la mitad una buena parte de la jornada, porque
solo se trabaja en equipos de 2, donde solo uno está al teclado y el otro
“copilotando” sentado junto a él, alternándose los roles cada cierto tiempo.`,hi,Mn,cs=`Esto produce un shock brutal en directivos porque creen que poner a dos personas
a trabajar en el mismo problema es perder la mitad de los recursos humanos de
golpe.`,mi,Cn,us=`Es una técnica que implica ejercicio de comunicación, aprender a manejar
discusiones, aprender ceder cooperando. Ante un desacuerdo, si se elige el
camino de uno, el otro debe apoyar en ese camino aunque crea que no es el adecuado.`,vi,Sn,ds="Considera las siguientes posturas finales ante un desacuerdo:",gi,En,ps=`Postura 1:
<code>Eso no funcionará, allá tú, haz lo que quieras, ya verás...</code>`,_i,Tn,fs=`Postura 2:
<code>En mi cabeza creo que eso no va a funcionar, pero confío, vamos a probar y ver qué sale...</code>`,xi,An,hs=`Al adoptar la postura 2, más abierta y menos inmovilista, incluso aunque tengas
certeza de que tu
compañero está equivocado, en el peor caso se perderá algo de tiempo. A cambio,
fomentarás un entorno cooperativo y,
cuando la situación se invierta y quieras que confíen en ti, será más fácil.`,bi,wn,ms=`Por otra parte, muchas veces existe la posibilidad de que realmente estés
equivocado y no hayas visto factores que tu compañero sí. En ese caso no
quedarás como un bocazas.`,yi,Pn,ji=`Esta técnica, lejos de “partir por la mitad los recursos humanos”, suele
multiplicar la productividad: trabajamos mejor en pareja. No solo se toman
mejores decisiones, suele haber menos “empanes”
y menos distracciones, también se evita realizar tantas malas prácticas.`,U,xe,ei=`Solo hay que evitar el error común de imponer esta práctica en toda la jornada,
hay que dar también espacio personal en solitario a quien lo necesite.`,Wi,ti,vs="La rotación de parejas",$i,ni,gs=`Todos deberían conocer el trabajo de todos, y por supuesto, todos deberían
conocerse. No tiene por qué ser algo frecuente ni forzado, pero sí debería
haber al menos una temporada de rotación. Los cambios de contexto también pueden
venir muy bien a muchos, permiten que algunos encuentren nuevas áreas de interés,
el desarrollo de habilidades transversales y mejorar la transmisión de
conocimiento y habilidad entre miembros del equipo.`,Xi,ii,_s=`En el caso de conflictos laborales, se sabe que las conexiones entre todos los
empleados ayudan a diluir las tensiones entre dos de ellos. Teniendo amigos en
común es más difícil ser enemigos. Evidentemente esto no es la panacea a estos
problemas.`,Ns,Yi,vl=`Es otra medida no muy bien vista por los directivos porque suele implicar
más movilización y cambios de contexto que a priori parecen interrumpir y
disminuir la productividad, pero cuando se forma una sinergia fuerte, como
cuando dos empleados que apenas se conocen descubren que son especialmente buenos
trabajando en equipo, pueden no solo compensar cualquier bajada de productividad
puntual, pueden dar una motivación y ejemplo al resto que es difícil de describir.`,qs,Zi,gl="La reducción del tiempo de trabajo",Fs,Ki,_l=`Cuando sugiero reducir a la mitad el tiempo de trabajo, me han llegado a decir
“eso nos permitiría contratar unos cuantos más”, porque no me han entendido.
No digo reducir la jornada laboral, los empleados siguen cobrando
lo mismo, digo reducir el tiempo que trabajan activamente en las necesidades
de la empresa.`,Os,Ji,xl=`Me miran como un loco, como diciendo “claro, trabajan 6 horas y les pagamos 8,
eh… gracias por venir, cuando queramos regalar dinero te volveremos a llamar”.
Pero lo cierto es que ya lo hacen.`,zs,Qi,bl=`Muchos profesionales solo pueden ser
realmente productivos durante 4 o 6 horas. Extender más horas en este sector solo
consigue que se llegue antes a un burnout. Me he encontrado con no pocos casos
donde los trabajadores realmente solo están produciendo 1 hora o 2 horas de lo
quemados que están.`,Bs,ea,yl=`Sabiendo esto, es muy buena oportunidad para mejorar las condiciones laborales
y las habilidades de tus empleados. Las otras horas pueden dedicarla al
desarrollo propio en habilidades que les interesen, pet projects o simplemente
a descansar, como si quieren irse a casa o ponerse a jugar.`,Hs,ta,Ml=`Se sentirán mejor, mejorarán en su trabajo y eso se notará en la productividad.
Y si no se nota, en el peor caso la productividad será la misma y todos estarán
más contentos. Es incontable la de empresas que he encontrado con gimnasio
y sala de exposiciones para nada, porque no dan tiempo a sus empleados a darle
un uso realista.`,ks,na,Cl=`Una actividad tan simple como exponer sobre un tema cualquiera de interés
personal al resto del equipo, relacionado o no con el trabajo, por turnos
(cada día una persona), puede ayudar a amenizar mucho el trabajo y a mejorar
las relaciones interpersonales, y a conocer proyectos y necesidades personales
que a veces pueden ser muy fáciles de satisfacer para una empresa.`,Vs,ia,Sl=`El desarrollo en equipo de un pet project no relacionado necesariamente con
la actividad laboral, donde además se
intercambian los roles habituales, puede ser especialmente efectivo para mejorar
otras habilidades cuando en el trabajo no existe posibilidad.`,Gs,aa,El=`Además, ocurre una cosa muy curiosa, y es que aunque exista esta posibilidad,
muchos simplemente siguen trabajando en esas horas libres.`,js,sa,Tl=`En definitiva, muchas de las soluciones pasan directamente por mejorar las
condiciones laborales y fomentar la comunicación. Esto no es
exclusivo de esta profesión, pero aquí se nota especialmente.`,Ws,oa,Al=`Insisto en que debe recogerse feedback y deben ser medidas que se tomen
idealmente en consenso con el resto de empleados, sin asumir que van a
funcionar.`,$s;return ve=new Xn({props:{$$slots:{default:[fx]},$$scope:{ctx:i}}}),{c(){e=x("p"),e.innerHTML=t,n=y(),a=x("p"),a.textContent=s,c=y(),l=x("p"),l.textContent=u,p=y(),d=x("h2"),d.textContent=v,f=y(),g=x("p"),g.textContent=T,S=y(),h=x("p"),h.textContent=m,L=y(),P=x("h3"),P.textContent=q,V=y(),I=x("p"),I.textContent=H,z=y(),w=x("p"),w.textContent=A,B=y(),W=x("p"),W.textContent=Y,X=y(),te=x("p"),te.innerHTML=se,de=y(),$=x("p"),$.textContent=De,ie=y(),me=x("p"),me.textContent=We,ze=y(),J=x("h3"),J.textContent=Ee,Re=y(),Se=x("p"),Se.textContent=Be,ce=y(),Te=x("p"),Te.textContent=it,F=y(),Ge=x("p"),Ge.textContent=nt,He=y(),Le=x("p"),Le.textContent=st,Ue=y(),Fe=x("p"),Fe.textContent=O,_=y(),R=x("p"),R.textContent=ne,pe=y(),he=x("p"),he.textContent=Ve,Ae=y(),Ie=x("p"),Ie.textContent=$e,k=y(),_e=x("h2"),_e.textContent=et,Z=y(),Ct(ve.$$.fragment),Xe=y(),Je=x("p"),Je.textContent=ct,G=y(),we=x("p"),we.textContent=Ce,ye=y(),Pe=x("p"),Pe.textContent=Ze,tt=y(),ot=x("p"),ot.textContent=ut,Ke=y(),ft=x("p"),ft.textContent=mt,Q=y(),Ne=x("p"),Ne.textContent=xt,fe=y(),qe=x("p"),qe.textContent=Lt,bt=y(),re=x("p"),re.textContent=Ye,Dt=y(),qt=x("p"),qt.textContent=Kt,oe=y(),E=x("p"),E.textContent=ee,ue=y(),le=x("p"),le.textContent=ae,Oe=y(),ke=x("p"),ke.textContent=at,Qe=y(),j=x("h2"),j.textContent=N,ge=y(),ht=x("p"),ht.textContent=Ot,Pt=y(),Ht=x("p"),Ht.textContent=Ut,lt=y(),Ft=x("h3"),Ft.textContent=Mt,jt=y(),Vt=x("p"),Vt.textContent=Jt,ln=y(),At=x("p"),At.textContent=pn,cn=y(),zt=x("p"),zt.textContent=Hn,fn=y(),Wt=x("p"),Wt.textContent=Di,Dn=y(),K=x("p"),K.textContent=je,kn=y(),vn=x("h2"),vn.textContent=is,ci=y(),gn=x("p"),gn.textContent=as,ui=y(),_n=x("p"),_n.textContent=ss,di=y(),xn=x("p"),xn.textContent=os,pi=y(),bn=x("h3"),bn.textContent=rs,fi=y(),yn=x("p"),yn.textContent=ls,hi=y(),Mn=x("p"),Mn.textContent=cs,mi=y(),Cn=x("p"),Cn.textContent=us,vi=y(),Sn=x("p"),Sn.textContent=ds,gi=y(),En=x("p"),En.innerHTML=ps,_i=y(),Tn=x("p"),Tn.innerHTML=fs,xi=y(),An=x("p"),An.textContent=hs,bi=y(),wn=x("p"),wn.textContent=ms,yi=y(),Pn=x("p"),Pn.textContent=ji,U=y(),xe=x("p"),xe.textContent=ei,Wi=y(),ti=x("h3"),ti.textContent=vs,$i=y(),ni=x("p"),ni.textContent=gs,Xi=y(),ii=x("p"),ii.textContent=_s,Ns=y(),Yi=x("p"),Yi.textContent=vl,qs=y(),Zi=x("h3"),Zi.textContent=gl,Fs=y(),Ki=x("p"),Ki.textContent=_l,Os=y(),Ji=x("p"),Ji.textContent=xl,zs=y(),Qi=x("p"),Qi.textContent=bl,Bs=y(),ea=x("p"),ea.textContent=yl,Hs=y(),ta=x("p"),ta.textContent=Ml,ks=y(),na=x("p"),na.textContent=Cl,Vs=y(),ia=x("p"),ia.textContent=Sl,Gs=y(),aa=x("p"),aa.textContent=El,js=y(),sa=x("p"),sa.textContent=Tl,Ws=y(),oa=x("p"),oa.textContent=Al},l(D){e=b(D,"P",{"data-svelte-h":!0}),C(e)!=="svelte-1pq7vyw"&&(e.innerHTML=t),n=M(D),a=b(D,"P",{"data-svelte-h":!0}),C(a)!=="svelte-abxeo0"&&(a.textContent=s),c=M(D),l=b(D,"P",{"data-svelte-h":!0}),C(l)!=="svelte-mqtgny"&&(l.textContent=u),p=M(D),d=b(D,"H2",{"data-svelte-h":!0}),C(d)!=="svelte-1j7xnh3"&&(d.textContent=v),f=M(D),g=b(D,"P",{"data-svelte-h":!0}),C(g)!=="svelte-yxjwvv"&&(g.textContent=T),S=M(D),h=b(D,"P",{"data-svelte-h":!0}),C(h)!=="svelte-1u70d73"&&(h.textContent=m),L=M(D),P=b(D,"H3",{"data-svelte-h":!0}),C(P)!=="svelte-1m6w651"&&(P.textContent=q),V=M(D),I=b(D,"P",{"data-svelte-h":!0}),C(I)!=="svelte-1ilp7u3"&&(I.textContent=H),z=M(D),w=b(D,"P",{"data-svelte-h":!0}),C(w)!=="svelte-1e17jd4"&&(w.textContent=A),B=M(D),W=b(D,"P",{"data-svelte-h":!0}),C(W)!=="svelte-1hwpnf5"&&(W.textContent=Y),X=M(D),te=b(D,"P",{"data-svelte-h":!0}),C(te)!=="svelte-yxfdwh"&&(te.innerHTML=se),de=M(D),$=b(D,"P",{"data-svelte-h":!0}),C($)!=="svelte-b22wq9"&&($.textContent=De),ie=M(D),me=b(D,"P",{"data-svelte-h":!0}),C(me)!=="svelte-1wtdicu"&&(me.textContent=We),ze=M(D),J=b(D,"H3",{"data-svelte-h":!0}),C(J)!=="svelte-1nvx6i9"&&(J.textContent=Ee),Re=M(D),Se=b(D,"P",{"data-svelte-h":!0}),C(Se)!=="svelte-1f5x6pb"&&(Se.textContent=Be),ce=M(D),Te=b(D,"P",{"data-svelte-h":!0}),C(Te)!=="svelte-1x1p4km"&&(Te.textContent=it),F=M(D),Ge=b(D,"P",{"data-svelte-h":!0}),C(Ge)!=="svelte-9jnm7l"&&(Ge.textContent=nt),He=M(D),Le=b(D,"P",{"data-svelte-h":!0}),C(Le)!=="svelte-1a30uqh"&&(Le.textContent=st),Ue=M(D),Fe=b(D,"P",{"data-svelte-h":!0}),C(Fe)!=="svelte-kxw3c"&&(Fe.textContent=O),_=M(D),R=b(D,"P",{"data-svelte-h":!0}),C(R)!=="svelte-88ec34"&&(R.textContent=ne),pe=M(D),he=b(D,"P",{"data-svelte-h":!0}),C(he)!=="svelte-b0jvnw"&&(he.textContent=Ve),Ae=M(D),Ie=b(D,"P",{"data-svelte-h":!0}),C(Ie)!=="svelte-t0fih4"&&(Ie.textContent=$e),k=M(D),_e=b(D,"H2",{"data-svelte-h":!0}),C(_e)!=="svelte-pcnb56"&&(_e.textContent=et),Z=M(D),St(ve.$$.fragment,D),Xe=M(D),Je=b(D,"P",{"data-svelte-h":!0}),C(Je)!=="svelte-159kbjq"&&(Je.textContent=ct),G=M(D),we=b(D,"P",{"data-svelte-h":!0}),C(we)!=="svelte-99tjnl"&&(we.textContent=Ce),ye=M(D),Pe=b(D,"P",{"data-svelte-h":!0}),C(Pe)!=="svelte-l9x7lv"&&(Pe.textContent=Ze),tt=M(D),ot=b(D,"P",{"data-svelte-h":!0}),C(ot)!=="svelte-1kethm3"&&(ot.textContent=ut),Ke=M(D),ft=b(D,"P",{"data-svelte-h":!0}),C(ft)!=="svelte-8qowcd"&&(ft.textContent=mt),Q=M(D),Ne=b(D,"P",{"data-svelte-h":!0}),C(Ne)!=="svelte-oa0pwp"&&(Ne.textContent=xt),fe=M(D),qe=b(D,"P",{"data-svelte-h":!0}),C(qe)!=="svelte-11i1gv6"&&(qe.textContent=Lt),bt=M(D),re=b(D,"P",{"data-svelte-h":!0}),C(re)!=="svelte-yml7fg"&&(re.textContent=Ye),Dt=M(D),qt=b(D,"P",{"data-svelte-h":!0}),C(qt)!=="svelte-1kgj6vx"&&(qt.textContent=Kt),oe=M(D),E=b(D,"P",{"data-svelte-h":!0}),C(E)!=="svelte-1khq7r0"&&(E.textContent=ee),ue=M(D),le=b(D,"P",{"data-svelte-h":!0}),C(le)!=="svelte-nfhhac"&&(le.textContent=ae),Oe=M(D),ke=b(D,"P",{"data-svelte-h":!0}),C(ke)!=="svelte-tlkjpl"&&(ke.textContent=at),Qe=M(D),j=b(D,"H2",{"data-svelte-h":!0}),C(j)!=="svelte-mspdjd"&&(j.textContent=N),ge=M(D),ht=b(D,"P",{"data-svelte-h":!0}),C(ht)!=="svelte-1i64b7z"&&(ht.textContent=Ot),Pt=M(D),Ht=b(D,"P",{"data-svelte-h":!0}),C(Ht)!=="svelte-ox7h5v"&&(Ht.textContent=Ut),lt=M(D),Ft=b(D,"H3",{"data-svelte-h":!0}),C(Ft)!=="svelte-1mfbf1j"&&(Ft.textContent=Mt),jt=M(D),Vt=b(D,"P",{"data-svelte-h":!0}),C(Vt)!=="svelte-1cg3q6t"&&(Vt.textContent=Jt),ln=M(D),At=b(D,"P",{"data-svelte-h":!0}),C(At)!=="svelte-12rk8x8"&&(At.textContent=pn),cn=M(D),zt=b(D,"P",{"data-svelte-h":!0}),C(zt)!=="svelte-1np96pv"&&(zt.textContent=Hn),fn=M(D),Wt=b(D,"P",{"data-svelte-h":!0}),C(Wt)!=="svelte-15kxlz3"&&(Wt.textContent=Di),Dn=M(D),K=b(D,"P",{"data-svelte-h":!0}),C(K)!=="svelte-1qwsq7u"&&(K.textContent=je),kn=M(D),vn=b(D,"H2",{"data-svelte-h":!0}),C(vn)!=="svelte-1p3a73p"&&(vn.textContent=is),ci=M(D),gn=b(D,"P",{"data-svelte-h":!0}),C(gn)!=="svelte-19yh2ox"&&(gn.textContent=as),ui=M(D),_n=b(D,"P",{"data-svelte-h":!0}),C(_n)!=="svelte-lc891x"&&(_n.textContent=ss),di=M(D),xn=b(D,"P",{"data-svelte-h":!0}),C(xn)!=="svelte-absoyy"&&(xn.textContent=os),pi=M(D),bn=b(D,"H3",{"data-svelte-h":!0}),C(bn)!=="svelte-1k48gpz"&&(bn.textContent=rs),fi=M(D),yn=b(D,"P",{"data-svelte-h":!0}),C(yn)!=="svelte-p03p28"&&(yn.textContent=ls),hi=M(D),Mn=b(D,"P",{"data-svelte-h":!0}),C(Mn)!=="svelte-1p619ai"&&(Mn.textContent=cs),mi=M(D),Cn=b(D,"P",{"data-svelte-h":!0}),C(Cn)!=="svelte-ywz4kq"&&(Cn.textContent=us),vi=M(D),Sn=b(D,"P",{"data-svelte-h":!0}),C(Sn)!=="svelte-1279eml"&&(Sn.textContent=ds),gi=M(D),En=b(D,"P",{"data-svelte-h":!0}),C(En)!=="svelte-c5j9dk"&&(En.innerHTML=ps),_i=M(D),Tn=b(D,"P",{"data-svelte-h":!0}),C(Tn)!=="svelte-uple9a"&&(Tn.innerHTML=fs),xi=M(D),An=b(D,"P",{"data-svelte-h":!0}),C(An)!=="svelte-1gem8j1"&&(An.textContent=hs),bi=M(D),wn=b(D,"P",{"data-svelte-h":!0}),C(wn)!=="svelte-1os79ly"&&(wn.textContent=ms),yi=M(D),Pn=b(D,"P",{"data-svelte-h":!0}),C(Pn)!=="svelte-13v7s8d"&&(Pn.textContent=ji),U=M(D),xe=b(D,"P",{"data-svelte-h":!0}),C(xe)!=="svelte-ny6vqa"&&(xe.textContent=ei),Wi=M(D),ti=b(D,"H3",{"data-svelte-h":!0}),C(ti)!=="svelte-qy87mf"&&(ti.textContent=vs),$i=M(D),ni=b(D,"P",{"data-svelte-h":!0}),C(ni)!=="svelte-n6i6w7"&&(ni.textContent=gs),Xi=M(D),ii=b(D,"P",{"data-svelte-h":!0}),C(ii)!=="svelte-1h0m0ej"&&(ii.textContent=_s),Ns=M(D),Yi=b(D,"P",{"data-svelte-h":!0}),C(Yi)!=="svelte-19dp3u7"&&(Yi.textContent=vl),qs=M(D),Zi=b(D,"H3",{"data-svelte-h":!0}),C(Zi)!=="svelte-15fddhw"&&(Zi.textContent=gl),Fs=M(D),Ki=b(D,"P",{"data-svelte-h":!0}),C(Ki)!=="svelte-sr6kct"&&(Ki.textContent=_l),Os=M(D),Ji=b(D,"P",{"data-svelte-h":!0}),C(Ji)!=="svelte-a3sp9u"&&(Ji.textContent=xl),zs=M(D),Qi=b(D,"P",{"data-svelte-h":!0}),C(Qi)!=="svelte-1gjch7e"&&(Qi.textContent=bl),Bs=M(D),ea=b(D,"P",{"data-svelte-h":!0}),C(ea)!=="svelte-1wwy3oo"&&(ea.textContent=yl),Hs=M(D),ta=b(D,"P",{"data-svelte-h":!0}),C(ta)!=="svelte-1bvhbmc"&&(ta.textContent=Ml),ks=M(D),na=b(D,"P",{"data-svelte-h":!0}),C(na)!=="svelte-jd2b3q"&&(na.textContent=Cl),Vs=M(D),ia=b(D,"P",{"data-svelte-h":!0}),C(ia)!=="svelte-1dk0rdk"&&(ia.textContent=Sl),Gs=M(D),aa=b(D,"P",{"data-svelte-h":!0}),C(aa)!=="svelte-lon14c"&&(aa.textContent=El),js=M(D),sa=b(D,"P",{"data-svelte-h":!0}),C(sa)!=="svelte-1bfitb4"&&(sa.textContent=Tl),Ws=M(D),oa=b(D,"P",{"data-svelte-h":!0}),C(oa)!=="svelte-15kh5zk"&&(oa.textContent=Al)},m(D,Me){r(D,e,Me),r(D,n,Me),r(D,a,Me),r(D,c,Me),r(D,l,Me),r(D,p,Me),r(D,d,Me),r(D,f,Me),r(D,g,Me),r(D,S,Me),r(D,h,Me),r(D,L,Me),r(D,P,Me),r(D,V,Me),r(D,I,Me),r(D,z,Me),r(D,w,Me),r(D,B,Me),r(D,W,Me),r(D,X,Me),r(D,te,Me),r(D,de,Me),r(D,$,Me),r(D,ie,Me),r(D,me,Me),r(D,ze,Me),r(D,J,Me),r(D,Re,Me),r(D,Se,Me),r(D,ce,Me),r(D,Te,Me),r(D,F,Me),r(D,Ge,Me),r(D,He,Me),r(D,Le,Me),r(D,Ue,Me),r(D,Fe,Me),r(D,_,Me),r(D,R,Me),r(D,pe,Me),r(D,he,Me),r(D,Ae,Me),r(D,Ie,Me),r(D,k,Me),r(D,_e,Me),r(D,Z,Me),Et(ve,D,Me),r(D,Xe,Me),r(D,Je,Me),r(D,G,Me),r(D,we,Me),r(D,ye,Me),r(D,Pe,Me),r(D,tt,Me),r(D,ot,Me),r(D,Ke,Me),r(D,ft,Me),r(D,Q,Me),r(D,Ne,Me),r(D,fe,Me),r(D,qe,Me),r(D,bt,Me),r(D,re,Me),r(D,Dt,Me),r(D,qt,Me),r(D,oe,Me),r(D,E,Me),r(D,ue,Me),r(D,le,Me),r(D,Oe,Me),r(D,ke,Me),r(D,Qe,Me),r(D,j,Me),r(D,ge,Me),r(D,ht,Me),r(D,Pt,Me),r(D,Ht,Me),r(D,lt,Me),r(D,Ft,Me),r(D,jt,Me),r(D,Vt,Me),r(D,ln,Me),r(D,At,Me),r(D,cn,Me),r(D,zt,Me),r(D,fn,Me),r(D,Wt,Me),r(D,Dn,Me),r(D,K,Me),r(D,kn,Me),r(D,vn,Me),r(D,ci,Me),r(D,gn,Me),r(D,ui,Me),r(D,_n,Me),r(D,di,Me),r(D,xn,Me),r(D,pi,Me),r(D,bn,Me),r(D,fi,Me),r(D,yn,Me),r(D,hi,Me),r(D,Mn,Me),r(D,mi,Me),r(D,Cn,Me),r(D,vi,Me),r(D,Sn,Me),r(D,gi,Me),r(D,En,Me),r(D,_i,Me),r(D,Tn,Me),r(D,xi,Me),r(D,An,Me),r(D,bi,Me),r(D,wn,Me),r(D,yi,Me),r(D,Pn,Me),r(D,U,Me),r(D,xe,Me),r(D,Wi,Me),r(D,ti,Me),r(D,$i,Me),r(D,ni,Me),r(D,Xi,Me),r(D,ii,Me),r(D,Ns,Me),r(D,Yi,Me),r(D,qs,Me),r(D,Zi,Me),r(D,Fs,Me),r(D,Ki,Me),r(D,Os,Me),r(D,Ji,Me),r(D,zs,Me),r(D,Qi,Me),r(D,Bs,Me),r(D,ea,Me),r(D,Hs,Me),r(D,ta,Me),r(D,ks,Me),r(D,na,Me),r(D,Vs,Me),r(D,ia,Me),r(D,Gs,Me),r(D,aa,Me),r(D,js,Me),r(D,sa,Me),r(D,Ws,Me),r(D,oa,Me),$s=!0},p(D,[Me]){const wl={};Me&1&&(wl.$$scope={dirty:Me,ctx:D}),ve.$set(wl)},i(D){$s||(vt(ve.$$.fragment,D),$s=!0)},o(D){gt(ve.$$.fragment,D),$s=!1},d(D){D&&(o(e),o(n),o(a),o(c),o(l),o(p),o(d),o(f),o(g),o(S),o(h),o(L),o(P),o(V),o(I),o(z),o(w),o(B),o(W),o(X),o(te),o(de),o($),o(ie),o(me),o(ze),o(J),o(Re),o(Se),o(ce),o(Te),o(F),o(Ge),o(He),o(Le),o(Ue),o(Fe),o(_),o(R),o(pe),o(he),o(Ae),o(Ie),o(k),o(_e),o(Z),o(Xe),o(Je),o(G),o(we),o(ye),o(Pe),o(tt),o(ot),o(Ke),o(ft),o(Q),o(Ne),o(fe),o(qe),o(bt),o(re),o(Dt),o(qt),o(oe),o(E),o(ue),o(le),o(Oe),o(ke),o(Qe),o(j),o(ge),o(ht),o(Pt),o(Ht),o(lt),o(Ft),o(jt),o(Vt),o(ln),o(At),o(cn),o(zt),o(fn),o(Wt),o(Dn),o(K),o(kn),o(vn),o(ci),o(gn),o(ui),o(_n),o(di),o(xn),o(pi),o(bn),o(fi),o(yn),o(hi),o(Mn),o(mi),o(Cn),o(vi),o(Sn),o(gi),o(En),o(_i),o(Tn),o(xi),o(An),o(bi),o(wn),o(yi),o(Pn),o(U),o(xe),o(Wi),o(ti),o($i),o(ni),o(Xi),o(ii),o(Ns),o(Yi),o(qs),o(Zi),o(Fs),o(Ki),o(Os),o(Ji),o(zs),o(Qi),o(Bs),o(ea),o(Hs),o(ta),o(ks),o(na),o(Vs),o(ia),o(Gs),o(aa),o(js),o(sa),o(Ws),o(oa)),Tt(ve,D)}}}const mx={title:"Relaciones interpersonales en la consultoría",slug:"relaciones-interpersonales-consultoria",coverImage:"/src/assets/posts-covers/mono-espejo.jpg",coverPosition:"normal",coverAuthor:"Pedro Lastra",excerpt:"Un análisis sobre la consultoría y la formación a directivos de software.",date:"2024-09-05T13:06:23.177Z",updated:"2024-09-05T13:06:23.903Z",hidden:!0,tags:["Personal","Laboral","Consultoría"],keywords:["trabajo","consultor","consultoría"],type:"default"};class vx extends Xt{constructor(e){super(),Yt(this,e,null,hx,$t,{})}}const gx=Object.freeze(Object.defineProperty({__proto__:null,default:vx,metadata:mx},Symbol.toStringTag,{value:"Module"}));function _x(i){let e;return{c(){e=dt("Por si para alguien es importante que lo recalque, cuando digo directivo digo también directiva/e.")},l(t){e=pt(t,"Por si para alguien es importante que lo recalque, cuando digo directivo digo también directiva/e.")},m(t,n){r(t,e,n)},d(t){t&&o(e)}}}function xx(i){let e,t=`Siempre es una buena señal y honra a una persona el que entienda que hay
un problema con sus competencias, o que
considere que es bueno acercarse a la realidad técnica de los empleados a cargo,
pero también es una mala señal que
exista ese miedo a que se sepa públicamente que está solicitando ayuda o
formación.`,n,a,s=`Más de la mitad de directivos que he formado en dirección de proyectos de
software como consultor ha sido de manera particular lejos de su entorno laboral.
El tener una preocupación por la percepción de sus competencias técnicas y
una pérdida de autoridad es en sí un problema. Da mucho para hablar en otro
momento.`,c,l,u=`Pero los que realmente me preocupan y de los que vengo a hablar hoy son
aquellos que ni siquiera son conscientes de que sus carencias de conocimiento
técnico están destruyendo a su equipo.`,p,d,v,f,g="💩 Dirigir proyectos de software sin conocimiento técnico",T,S,h=`Hablando con otros compañeros de profesión, parece que no soy el único que ha
concluído alguna auditoría interna exponiendo que el problema principal
que estanca al desarrollo de un proyecto reside en una mala dirección y no en
las decisiones tomadas por desarrolladores.`,m,L,P=`Esto no suele gustar, dado que
quien insiste en la contratación de servicios de auditoría y consultoría suele
ser algún directivo/jefe de proyecto, algunos con maliciosa esperanza de que
señale a algún empleado.
Verse como la fuente del problema suele hacerles pensar que se han pegado un
tiro en el pie al contratarme.`,q,V,I=`Muchos jefes de proyecto de software sin nociones técnicas (existen, y muchos) no
comprenden que el error es una parte natural de este arte. No comprenden que es
necesario dedicar el tiempo que haga falta a asegurar una correcta testabilidad
y realizar refactoring (reescribir o rediseñar algunas partes del código para
mejorar su mantenibilidad, testabilidad, etc), y que aún así seguirá siendo
necesario la monitorización y seguirá habiendo errores.`,H,z,w=`Un directivo que no comprende los procesos de desarrollo solo ve que el producto
no está cambiando de cara al cliente, interesado o usuario. No tiene capacidad para
saber si se está haciendo realmente algo o le están mintiendo en su cara mientras
dicen que están mejorando el código.`,A,B,W=`Aún peor, muchos asumen que si su equipo lleva una semana haciendo refactoring
creen que es porque hicieron cosas mal y que ahora están corrigiendo errores,
cuando en un primer momento tendrían que haberlo hecho “bien”.`,Y,X,te=`Muchos ven a equipos técnicos como meros obreros que tienen que decidir
algo, planificarlo y hacerlo “bien”, no comprenden la naturaleza del error, la
deuda técnica, la flexibilidad y dinamismo que debe
haber en los procesos de desarrollo.`,se,de,$=`Un directivo así solo mete presiones y no tiene capacidad para determinar el
estado ni el rumbo del proyecto, no le salva ni el delegar porque nunca
podrá comprender el feedback que pueda recibir de la persona en la que delega.`,De,ie,me=`Lo mejor que puede pasar con un directivo así es que delegue completamente y con
fé ciega en alguien que sí tenga competencias. Será con suerte porque tampoco
sabrá identificar a esa persona. Entonces se acaba dando cuenta de que su papel es
completamente irrelevante, y no solo él se da cuenta de ello. Cuando nadie
necesita un capitán, el capitán solo es un estorbo, un imbécil con autoridad
que además suele cobrar más.`,We,ze,J=`Pero cuando no delegan es mucho peor. No solo son dispensables, también entorpecen a
todo el equipo, fomentan malas prácticas por exigir resultados visibles cuanto
antes y generan una fuerte sensación de impotencia, ansiedad y estancamiento
profesional en todos los desarrolladores que se ven obligados a dar “resultados”,
siendo esto sinónimo de “cambios que el jefe pueda notar”. Por no decir que no suelen asumir ni una
sola de las responsabilidades que deben asumir como directivos en un proyecto
de software, porque muchas requieren algunos conocimientos técnicos base.`,Ee,Re,Se="Tratando con directivos",Be,ce,Te=`Por suerte, hasta ahora todos los directivos con los que he llegado a toparme
en mi actividad han podido comprender los problemas derivados de su
incompetencia técnica, y todos han podido ver los errores y tremendas
estupideces que estaban diciendo y cometiendo tras una correcta formación, pero
desde luego no es una tarea sencilla.`,it,F,Ge=`La comunicación con directivos puede ser complicada, se necesita
otro lenguaje, se necesita otro tono y se necesitan enfoques muy prácticos,
directos, precisos y tajantes. Es normal, recordemos que no dejan de ser seres
humanos que han estado en posiciones de “poder”, algunos tomándose muy en
serio ese “poder” y a veces demasiado tiempo.`,nt,He,Le=`Es muy frecuente que en su trayectoria profesional hayan comido discusiones muy absurdas con
personas que se quejan sin dar soluciones. Es frecuente que sean ellos los que
hayan tenido que decir “hasta aquí” y zanjar asuntos aún ante el descontento de alguien
demasiadas veces, y esto y otras tantas cosas acaban por generar conductas a veces
demasiado autoritarias que les hacen cerrar oídos y los vuelven algo más
cabezotas, también algo menos empáticos.`,st,Ue,Fe=`Una postura típica es considerar que los conocimientos técnicos no son parte
de su competencias esenciales, y ahí es importante cortarles inmediatamente y no dar espacio:
si quieren dirigir un proyecto de software, deben aprender unas bases técnicas
y acercarse a la realidad de sus empleados a cargo. No es negociable.`,O,_,R=`El trabajo de un
consultor cuando debe tratar con directivos en su mismo entorno de trabajo es
más curioso y se acerca a partes iguales al de
consejero real y al de dom/dominatrix: tener la sutileza para provocar cambios
sin cuestionar su autoridad delante del equipo, y tener la firmeza para darle
algunos latigazos en privado cuando sea necesario, a lo que suelen estar
sorprendentemente dispuestos, especialmente cuando son ellos los que han pagado
por tu servicio para mejorar la situación laboral.`,ne,pe,he=`Por lo demás, no se aleja de trabajar junto a cualquier otro miembro de la
plantilla, solo cambia el tipo de conocimientos que necesito que aprenda y
la profundidad a la que deben aprenderlo. No
necesito que un directivo sepa programar, pero sí lo justo para que pueda
entender de primera mano cómo funcionan algunos ciclos de desarrollo y la
importancia de saber especificar requisitos. Para eso necesito que como
mínimo no sienta que está leyendo chino al ver código.`,Ve,Ae,Ie=`Por otra parte, es un buen trabajo de empatía, porque muchos saben que sus
empleados realizan un ejercicio intelectual que puede ser estresante, pero no
se imaginan a qué nivel hasta que realmente lo sufren, aunque solo vean la
complejidad de un ejercicio de introducción de una FP.`,$e,k,_e=`También ayuda a acercarse a la realidad de la explosión tecnológica, saber
cómo de rápido evoluciona todo, a los fenómenos derivados de esto y los
problemas que pueden acarrear en la motivación de sus empleados a cargo
(como la famosa fatiga tecnológica). Todo esto se traduce a una mejor toma de
decisiones cruciales.`,et;return d=new Xn({props:{$$slots:{default:[_x]},$$scope:{ctx:i}}}),{c(){e=x("p"),e.textContent=t,n=y(),a=x("p"),a.textContent=s,c=y(),l=x("p"),l.textContent=u,p=y(),Ct(d.$$.fragment),v=y(),f=x("h2"),f.textContent=g,T=y(),S=x("p"),S.textContent=h,m=y(),L=x("p"),L.textContent=P,q=y(),V=x("p"),V.textContent=I,H=y(),z=x("p"),z.textContent=w,A=y(),B=x("p"),B.textContent=W,Y=y(),X=x("p"),X.textContent=te,se=y(),de=x("p"),de.textContent=$,De=y(),ie=x("p"),ie.textContent=me,We=y(),ze=x("p"),ze.textContent=J,Ee=y(),Re=x("h2"),Re.textContent=Se,Be=y(),ce=x("p"),ce.textContent=Te,it=y(),F=x("p"),F.textContent=Ge,nt=y(),He=x("p"),He.textContent=Le,st=y(),Ue=x("p"),Ue.textContent=Fe,O=y(),_=x("p"),_.textContent=R,ne=y(),pe=x("p"),pe.textContent=he,Ve=y(),Ae=x("p"),Ae.textContent=Ie,$e=y(),k=x("p"),k.textContent=_e},l(Z){e=b(Z,"P",{"data-svelte-h":!0}),C(e)!=="svelte-323h1a"&&(e.textContent=t),n=M(Z),a=b(Z,"P",{"data-svelte-h":!0}),C(a)!=="svelte-6jfw7f"&&(a.textContent=s),c=M(Z),l=b(Z,"P",{"data-svelte-h":!0}),C(l)!=="svelte-128xgm7"&&(l.textContent=u),p=M(Z),St(d.$$.fragment,Z),v=M(Z),f=b(Z,"H2",{"data-svelte-h":!0}),C(f)!=="svelte-1rdxl44"&&(f.textContent=g),T=M(Z),S=b(Z,"P",{"data-svelte-h":!0}),C(S)!=="svelte-1gh1z9j"&&(S.textContent=h),m=M(Z),L=b(Z,"P",{"data-svelte-h":!0}),C(L)!=="svelte-16qt68x"&&(L.textContent=P),q=M(Z),V=b(Z,"P",{"data-svelte-h":!0}),C(V)!=="svelte-1m8rdbx"&&(V.textContent=I),H=M(Z),z=b(Z,"P",{"data-svelte-h":!0}),C(z)!=="svelte-1m4hq6f"&&(z.textContent=w),A=M(Z),B=b(Z,"P",{"data-svelte-h":!0}),C(B)!=="svelte-l9x7lv"&&(B.textContent=W),Y=M(Z),X=b(Z,"P",{"data-svelte-h":!0}),C(X)!=="svelte-1kethm3"&&(X.textContent=te),se=M(Z),de=b(Z,"P",{"data-svelte-h":!0}),C(de)!=="svelte-8qowcd"&&(de.textContent=$),De=M(Z),ie=b(Z,"P",{"data-svelte-h":!0}),C(ie)!=="svelte-1symv4t"&&(ie.textContent=me),We=M(Z),ze=b(Z,"P",{"data-svelte-h":!0}),C(ze)!=="svelte-1ft41dr"&&(ze.textContent=J),Ee=M(Z),Re=b(Z,"H2",{"data-svelte-h":!0}),C(Re)!=="svelte-y356br"&&(Re.textContent=Se),Be=M(Z),ce=b(Z,"P",{"data-svelte-h":!0}),C(ce)!=="svelte-uaqa2t"&&(ce.textContent=Te),it=M(Z),F=b(Z,"P",{"data-svelte-h":!0}),C(F)!=="svelte-1ril95z"&&(F.textContent=Ge),nt=M(Z),He=b(Z,"P",{"data-svelte-h":!0}),C(He)!=="svelte-jyiq0e"&&(He.textContent=Le),st=M(Z),Ue=b(Z,"P",{"data-svelte-h":!0}),C(Ue)!=="svelte-1p0xfdd"&&(Ue.textContent=Fe),O=M(Z),_=b(Z,"P",{"data-svelte-h":!0}),C(_)!=="svelte-p3wnw"&&(_.textContent=R),ne=M(Z),pe=b(Z,"P",{"data-svelte-h":!0}),C(pe)!=="svelte-lo7wd"&&(pe.textContent=he),Ve=M(Z),Ae=b(Z,"P",{"data-svelte-h":!0}),C(Ae)!=="svelte-wxdtbe"&&(Ae.textContent=Ie),$e=M(Z),k=b(Z,"P",{"data-svelte-h":!0}),C(k)!=="svelte-9w55yz"&&(k.textContent=_e)},m(Z,ve){r(Z,e,ve),r(Z,n,ve),r(Z,a,ve),r(Z,c,ve),r(Z,l,ve),r(Z,p,ve),Et(d,Z,ve),r(Z,v,ve),r(Z,f,ve),r(Z,T,ve),r(Z,S,ve),r(Z,m,ve),r(Z,L,ve),r(Z,q,ve),r(Z,V,ve),r(Z,H,ve),r(Z,z,ve),r(Z,A,ve),r(Z,B,ve),r(Z,Y,ve),r(Z,X,ve),r(Z,se,ve),r(Z,de,ve),r(Z,De,ve),r(Z,ie,ve),r(Z,We,ve),r(Z,ze,ve),r(Z,Ee,ve),r(Z,Re,ve),r(Z,Be,ve),r(Z,ce,ve),r(Z,it,ve),r(Z,F,ve),r(Z,nt,ve),r(Z,He,ve),r(Z,st,ve),r(Z,Ue,ve),r(Z,O,ve),r(Z,_,ve),r(Z,ne,ve),r(Z,pe,ve),r(Z,Ve,ve),r(Z,Ae,ve),r(Z,$e,ve),r(Z,k,ve),et=!0},p(Z,[ve]){const Xe={};ve&1&&(Xe.$$scope={dirty:ve,ctx:Z}),d.$set(Xe)},i(Z){et||(vt(d.$$.fragment,Z),et=!0)},o(Z){gt(d.$$.fragment,Z),et=!1},d(Z){Z&&(o(e),o(n),o(a),o(c),o(l),o(p),o(v),o(f),o(T),o(S),o(m),o(L),o(q),o(V),o(H),o(z),o(A),o(B),o(Y),o(X),o(se),o(de),o(De),o(ie),o(We),o(ze),o(Ee),o(Re),o(Be),o(ce),o(it),o(F),o(nt),o(He),o(st),o(Ue),o(O),o(_),o(ne),o(pe),o(Ve),o(Ae),o($e),o(k)),Tt(d,Z)}}}const bx={title:"Primatología: directivos ",slug:"primatologia-directivos",coverImage:"/src/assets/posts-covers/mono-espejo.jpg",coverPosition:"normal",coverAuthor:"Andre Mouton",excerpt:"Un análisis sobre la consultoría y la formación a directivos y jefes de proyecto en proyectos de desarrollo de software.",date:"2024-09-06T07:06:23.177Z",updated:"2024-09-06T07:06:23.903Z",hidden:!0,tags:["Personal","Laboral","Consultoría"],keywords:["trabajo","consultor","consultoría"],type:"default"};class yx extends Xt{constructor(e){super(),Yt(this,e,null,xx,$t,{})}}const Mx=Object.freeze(Object.defineProperty({__proto__:null,default:yx,metadata:bx},Symbol.toStringTag,{value:"Module"}));function Cx(i){let e,t="Proyectos y sitios que no podré continuar, mantener, guardar o lo que sea. Algunos públicos, otros sin repositorio y otros en repos privados en GitHub o GitLab. Muchos son tonterías y otros los conservaba más por razones históricas.",n,a,s="Si te interesa algo de esto para lo que sea, avísame:",c,l,u=`<li>El código fuente de este sitio web (el repo con SvelteKit), incluyendo de este blog y toda la configuración de CI/CD en Github Actions. Si lo vas usar, evidentemente cambia el nombre y contenido.</li> <li>El código fuente y todo el repo de lo que haya en <a href="https://alexvgjm.github.io" rel="nofollow">alexvgjm.github.io</a></li> <li>El sitio <a href="https://d2runewords.com" rel="nofollow">d2runewords.com</a> (si quieres también el dominio eso ya corre de tu cuenta).</li> <li>Un intento de motor de videojuegos 2D con PixiJS como motor de renderizado.</li> <li>Un recién iniciado sistema de partículas custom en WebGL para Three.js</li> <li><a href="https://alexvgjm.github.io/point-it-out-docs" rel="nofollow">Point it out</a>. NOTA: recibió recientemente un refactoring muy duro en local y se aleja más de lo actualmente publicado. Tiene más características y una arquitectura distinta a la publicada. Ya se acerca más a una alpha.</li> <li>Prototipos de aplicaciones orientadas a terapia visual / fototerapia (vanilla js y ts).</li> <li>Distintos prototipos de aplicaciones interactivas en Vue, incluyendo una especie de juego roguelike y un idle.</li> <li>Viejos plugins de IRC de por lo menos 2007 ya obsoletos e innecesarios, que tenían de propósito evadir el escudo dorado chino de manera simple.</li> <li>Viejo código en C y en otro extraño lenguaje híbrido muy similar a Objective-C. Principalmente homebrew para PSP y otro material de pruebas. También incluye
algo de ensamblador para la especie de MIPS R4000 de la PSP.</li>`,p,d,v=`Los publicados en GitHub tienen algún tipo de licencia libre
en cualquier caso, así que tienes libertad para hacer un fork de lo que quieras
de todas formas aunque no te lo traspase oficialmente.`;return{c(){e=x("p"),e.textContent=t,n=y(),a=x("p"),a.textContent=s,c=y(),l=x("ul"),l.innerHTML=u,p=y(),d=x("p"),d.textContent=v},l(f){e=b(f,"P",{"data-svelte-h":!0}),C(e)!=="svelte-1rsxxnj"&&(e.textContent=t),n=M(f),a=b(f,"P",{"data-svelte-h":!0}),C(a)!=="svelte-1be2y5s"&&(a.textContent=s),c=M(f),l=b(f,"UL",{"data-svelte-h":!0}),C(l)!=="svelte-hik07y"&&(l.innerHTML=u),p=M(f),d=b(f,"P",{"data-svelte-h":!0}),C(d)!=="svelte-xxedhx"&&(d.textContent=v)},m(f,g){r(f,e,g),r(f,n,g),r(f,a,g),r(f,c,g),r(f,l,g),r(f,p,g),r(f,d,g)},p:wt,i:wt,o:wt,d(f){f&&(o(e),o(n),o(a),o(c),o(l),o(p),o(d))}}}const Sx={title:"Traspaso proyectos (gratis)",slug:"traspaso-proyectos",excerpt:"Tengo proyectos que no puedo continuar, mantener, guardar o lo que sea. Si quieres alguno pídelo.",date:"2025-02-04T01:26:23.177Z",updated:"2025-02-04T01:26:23.903Z",hidden:!0,tags:["Personal"],keywords:["estático","blog"],type:"default"};class Ex extends Xt{constructor(e){super(),Yt(this,e,null,Cx,$t,{})}}const Tx=Object.freeze(Object.defineProperty({__proto__:null,default:Ex,metadata:Sx},Symbol.toStringTag,{value:"Module"})),Ax={sources:{avif:""+new URL("../assets/any-code.CFI7ySdt.avif",import.meta.url).href+" 640w, "+new URL("../assets/any-code.ChCtRogW.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/any-code.C8s4CXVk.webp",import.meta.url).href+" 640w, "+new URL("../assets/any-code.DcSfFKdy.webp",import.meta.url).href+" 1280w",png:""+new URL("../assets/any-code.BNjfBBW2.png",import.meta.url).href+" 640w, "+new URL("../assets/any-code.CsSctziI.png",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/any-code.CsSctziI.png",import.meta.url).href,w:1280,h:720}},wx=Object.freeze(Object.defineProperty({__proto__:null,default:Ax},Symbol.toStringTag,{value:"Module"})),Px={sources:{avif:""+new URL("../assets/blizzard.B0n5vUrb.avif",import.meta.url).href+" 640w, "+new URL("../assets/blizzard.nTJkc5qf.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/blizzard.CybShHHZ.webp",import.meta.url).href+" 640w, "+new URL("../assets/blizzard.C8i5Cr0L.webp",import.meta.url).href+" 1280w",jpeg:""+new URL("../assets/blizzard.CehEdUNF.jpeg",import.meta.url).href+" 640w, "+new URL("../assets/blizzard.DanEHBUr.jpeg",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/blizzard.DanEHBUr.jpeg",import.meta.url).href,w:1280,h:720}},Rx=Object.freeze(Object.defineProperty({__proto__:null,default:Px},Symbol.toStringTag,{value:"Module"})),Lx={sources:{avif:""+new URL("../assets/jon-tyson.CpLcHNBP.avif",import.meta.url).href+" 640w, "+new URL("../assets/jon-tyson.CGY63FNr.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/jon-tyson.Cp146D7f.webp",import.meta.url).href+" 640w, "+new URL("../assets/jon-tyson.CjWtVi3C.webp",import.meta.url).href+" 1280w",jpeg:""+new URL("../assets/jon-tyson.sgBkeOW9.jpeg",import.meta.url).href+" 640w, "+new URL("../assets/jon-tyson.MygLIirx.jpeg",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/jon-tyson.MygLIirx.jpeg",import.meta.url).href,w:1280,h:720}},Dx=Object.freeze(Object.defineProperty({__proto__:null,default:Lx},Symbol.toStringTag,{value:"Module"})),Ux={sources:{avif:""+new URL("../assets/machinery.CBcXNtDz.avif",import.meta.url).href+" 640w, "+new URL("../assets/machinery.BSg4eTqW.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/machinery.XKRnVKXm.webp",import.meta.url).href+" 640w, "+new URL("../assets/machinery.CVc1jLYE.webp",import.meta.url).href+" 1280w",jpeg:""+new URL("../assets/machinery.CmYyaLYN.jpeg",import.meta.url).href+" 640w, "+new URL("../assets/machinery.lcec4MJm.jpeg",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/machinery.lcec4MJm.jpeg",import.meta.url).href,w:1280,h:720}},Ix=Object.freeze(Object.defineProperty({__proto__:null,default:Ux},Symbol.toStringTag,{value:"Module"})),Nx={sources:{avif:""+new URL("../assets/maquina-escribir.ocOQ3ckB.avif",import.meta.url).href+" 640w, "+new URL("../assets/maquina-escribir.MJCCWAI_.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/maquina-escribir.BnNhWCjk.webp",import.meta.url).href+" 640w, "+new URL("../assets/maquina-escribir.CI-vJ5nO.webp",import.meta.url).href+" 1280w",jpeg:""+new URL("../assets/maquina-escribir.CR4I1sxo.jpeg",import.meta.url).href+" 640w, "+new URL("../assets/maquina-escribir.D_dAKKRX.jpeg",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/maquina-escribir.D_dAKKRX.jpeg",import.meta.url).href,w:1280,h:720}},qx=Object.freeze(Object.defineProperty({__proto__:null,default:Nx},Symbol.toStringTag,{value:"Module"})),Fx={sources:{avif:""+new URL("../assets/mono-espejo.DzLKRbb2.avif",import.meta.url).href+" 640w, "+new URL("../assets/mono-espejo.BAKynXAY.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/mono-espejo.Ddhs2ZMX.webp",import.meta.url).href+" 640w, "+new URL("../assets/mono-espejo.DHYr2_Wv.webp",import.meta.url).href+" 1280w",jpeg:""+new URL("../assets/mono-espejo.DRdjxkSr.jpeg",import.meta.url).href+" 640w, "+new URL("../assets/mono-espejo.DFCEYnu1.jpeg",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/mono-espejo.DFCEYnu1.jpeg",import.meta.url).href,w:1280,h:720}},Ox=Object.freeze(Object.defineProperty({__proto__:null,default:Fx},Symbol.toStringTag,{value:"Module"})),zx={sources:{avif:""+new URL("../assets/paisaje-miedo.DBFuYu9l.avif",import.meta.url).href+" 640w, "+new URL("../assets/paisaje-miedo.CZGKQdgn.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/paisaje-miedo.D_7fOhrA.webp",import.meta.url).href+" 640w, "+new URL("../assets/paisaje-miedo.BPgBLAZ-.webp",import.meta.url).href+" 1280w",jpeg:""+new URL("../assets/paisaje-miedo.TpHsYGSs.jpeg",import.meta.url).href+" 640w, "+new URL("../assets/paisaje-miedo.DzkZpwmi.jpeg",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/paisaje-miedo.DzkZpwmi.jpeg",import.meta.url).href,w:1280,h:720}},Bx=Object.freeze(Object.defineProperty({__proto__:null,default:zx},Symbol.toStringTag,{value:"Module"})),Hx={sources:{avif:""+new URL("../assets/pio-round-fail-test.LC2_1E1I.avif",import.meta.url).href+" 640w, "+new URL("../assets/pio-round-fail-test.DYV41UhK.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/pio-round-fail-test.Dw2-sPvT.webp",import.meta.url).href+" 640w, "+new URL("../assets/pio-round-fail-test.DFm94EAo.webp",import.meta.url).href+" 1280w",png:""+new URL("../assets/pio-round-fail-test.BlNGe3_C.png",import.meta.url).href+" 640w, "+new URL("../assets/pio-round-fail-test.sUgEF5ut.png",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/pio-round-fail-test.sUgEF5ut.png",import.meta.url).href,w:1280,h:720}},kx=Object.freeze(Object.defineProperty({__proto__:null,default:Hx},Symbol.toStringTag,{value:"Module"})),Vx={sources:{avif:""+new URL("../assets/starfish.D2P8hSmn.avif",import.meta.url).href+" 640w, "+new URL("../assets/starfish.DwHCSMoP.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/starfish.Dfj_-D5_.webp",import.meta.url).href+" 640w, "+new URL("../assets/starfish.d5pPDI95.webp",import.meta.url).href+" 1280w",jpeg:""+new URL("../assets/starfish.Di2y8SqM.jpeg",import.meta.url).href+" 640w, "+new URL("../assets/starfish.CayEXQ_w.jpeg",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/starfish.CayEXQ_w.jpeg",import.meta.url).href,w:1280,h:720}},Gx=Object.freeze(Object.defineProperty({__proto__:null,default:Vx},Symbol.toStringTag,{value:"Module"})),jx={sources:{avif:""+new URL("../assets/tree-shaking.CiijQW-8.avif",import.meta.url).href+" 640w, "+new URL("../assets/tree-shaking.CVASrZOr.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/tree-shaking.rN-B0IuQ.webp",import.meta.url).href+" 640w, "+new URL("../assets/tree-shaking.C6f3tNrs.webp",import.meta.url).href+" 1280w",jpeg:""+new URL("../assets/tree-shaking.DwjQOLAz.jpeg",import.meta.url).href+" 640w, "+new URL("../assets/tree-shaking.BVwql0Kq.jpeg",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/tree-shaking.BVwql0Kq.jpeg",import.meta.url).href,w:1280,h:720}},Wx=Object.freeze(Object.defineProperty({__proto__:null,default:jx},Symbol.toStringTag,{value:"Module"})),$x={sources:{avif:""+new URL("../assets/valla.DaMGKg_i.avif",import.meta.url).href+" 640w, "+new URL("../assets/valla.zzk0y5bn.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/valla.BjJKHA0T.webp",import.meta.url).href+" 640w, "+new URL("../assets/valla.CSlq1MCB.webp",import.meta.url).href+" 1280w",jpeg:""+new URL("../assets/valla.CuKW0Rqf.jpeg",import.meta.url).href+" 640w, "+new URL("../assets/valla.CyjHcVT7.jpeg",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/valla.CyjHcVT7.jpeg",import.meta.url).href,w:1280,h:720}},Xx=Object.freeze(Object.defineProperty({__proto__:null,default:$x},Symbol.toStringTag,{value:"Module"})),i0=(i=!1)=>{var s;const n={...Object.assign({"/src/posts/autonomia-ajenidad-1.md":Vu,"/src/posts/caso-suite-cosby.md":Xu,"/src/posts/cuantas-muertes-evitables.md":pd,"/src/posts/deja-esperar-otros.md":Hg,"/src/posts/discursos-segregacionistas.md":jg,"/src/posts/el-hacking-a-google.md":t_,"/src/posts/ensenanza-aprendizaje-profundo.md":l_,"/src/posts/especificacion-visual-caso-point-it-out.md":L_,"/src/posts/miedo-de-decir-miedo-de-ser.md":N_,"/src/posts/peligro-trivializar-typescript.md":B_,"/src/posts/por-que-un-blog-en-2024.md":X_,"/src/posts/sobre-consecuencias-y-su-recurrencia.md":J_,"/src/posts/tamano-no-importa-tree-shakeables.md":rx}),...Object.assign({"/src/posts/borradores/autonomia-ajenidad-2.md":px,"/src/posts/borradores/relaciones-interpersonales-consultoria.md":gx,"/src/posts/ocultados/primatologia-directivos.md":Mx,"/src/posts/ocultados/traspaso-proyectos.md":Tx})},a=[];for(const c in n){const l=n[c];if(l){let u=l.metadata.coverImage;u&&(u=u.substring(u.lastIndexOf("/")+1)),a.push({...l.metadata,coverImage:u,path:c,html:i&&l.default.render?(s=l.default.render())==null?void 0:s.html:void 0})}}return a},a0=i=>i.filter(e=>!e.hidden).sort((e,t)=>new Date(e.date).getTime()>new Date(t.date).getTime()?-1:new Date(e.date).getTime()<new Date(t.date).getTime()?1:0).map(e=>{const t=Yx(i,e);return{...e,relatedPosts:t}}),s0=i=>{const e={};return i.forEach(t=>{t.tags.forEach(n=>{const a=Kx(n);e[a]||(e[a]={name:n,posts:[]}),e[a].posts.push(t)})}),e},Yx=(i,e,t=3)=>i.filter(a=>!a.hidden&&a.slug!==e.slug).sort((a,s)=>{var u,p;const c=(u=a.tags)==null?void 0:u.filter(d=>{var v;return(v=e.tags)==null?void 0:v.includes(d)}),l=(p=s.tags)==null?void 0:p.filter(d=>{var v;return(v=e.tags)==null?void 0:v.includes(d)});return(c==null?void 0:c.length)>(l==null?void 0:l.length)?-1:(c==null?void 0:c.length)<(l==null?void 0:l.length)?1:0}).slice(0,t).map(a=>({...a})),Zx={á:"a",à:"a",ä:"a",é:"e",è:"e",ë:"e",í:"i",ì:"i",ï:"i",ó:"o",ò:"o",ö:"o",ú:"u",ù:"u",ü:"u",ñ:"n",ç:"c"," ":"-","/":"-"},Kx=i=>i.toLowerCase().replace(/[áéíóúàèìòùäëïöüñç\/ ]/g,e=>Zx[e]??e),o0=Object.assign({"../../assets/posts-covers/any-code.png":wx,"../../assets/posts-covers/blizzard.jpg":Rx,"../../assets/posts-covers/jon-tyson.jpg":Dx,"../../assets/posts-covers/machinery.jpg":Ix,"../../assets/posts-covers/maquina-escribir.jpg":qx,"../../assets/posts-covers/mono-espejo.jpg":Ox,"../../assets/posts-covers/paisaje-miedo.jpg":Bx,"../../assets/posts-covers/pio-round-fail-test.png":kx,"../../assets/posts-covers/starfish.jpg":Gx,"../../assets/posts-covers/tree-shaking.jpg":Wx,"../../assets/posts-covers/valla.jpg":Xx});export{Vu as _,s0 as a,Xu as b,o0 as c,pd as d,Hg as e,jg as f,a0 as g,t_ as h,i0 as i,l_ as j,L_ as k,N_ as l,B_ as m,X_ as n,J_ as o,rx as p,Kx as s};
