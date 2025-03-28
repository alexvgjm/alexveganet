var Au=Object.defineProperty;var wu=(i,e,t)=>e in i?Au(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Rn=(i,e,t)=>wu(i,typeof e!="symbol"?e+"":e,t);import{s as Zt,c as $a,E as Pl,u as Xa,g as Ya,a as Za,e as Pu,n as Ut,y as Ao,o as jc,x as Ru}from"./scheduler.BXM2zGSH.js";import{S as Kt,i as Jt,e as x,s as y,a as b,o as Gt,c as M,d as o,b as yt,x as $n,B as wo,f as l,g as It,t as ht,j as mt,p as gt,q as _t,u as Rs,E as nl,k as Mt,r as C,l as St,m as Ct,n as Et,v as Rl,H as Lu,F as Du}from"./index.CQEGoPrw.js";import{j as Uu}from"./PostTag.svelte_svelte_type_style_lang.DIzkjAzT.js";/* empty css                                           */function Ll(i){let e,t;return{c(){e=x("div"),t=gt(i[0]),this.h()},l(n){e=b(n,"DIV",{class:!0});var a=Gt(e);t=_t(a,i[0]),a.forEach(o),this.h()},h(){yt(e,"class","code-wrapper__lang svelte-fcvtd2")},m(n,a){l(n,e,a),It(e,t)},p(n,a){a&1&&Rs(t,n[0])},d(n){n&&o(e)}}}function Dl(i){let e,t,n=i[4]?"on":"off",a,s,c;return{c(){e=x("button"),t=gt("Text wrap: "),a=gt(n),this.h()},l(r){e=b(r,"BUTTON",{class:!0});var u=Gt(e);t=_t(u,"Text wrap: "),a=_t(u,n),u.forEach(o),this.h()},h(){yt(e,"class","code-wrapper__button svelte-fcvtd2")},m(r,u){l(r,e,u),It(e,t),It(e,a),s||(c=nl(e,"click",i[11]),s=!0)},p(r,u){u&16&&n!==(n=r[4]?"on":"off")&&Rs(a,n)},d(r){r&&o(e),s=!1,c()}}}function Ul(i){let e,t,n,a;return{c(){e=x("button"),t=gt(i[6]),this.h()},l(s){e=b(s,"BUTTON",{class:!0});var c=Gt(e);t=_t(c,i[6]),c.forEach(o),this.h()},h(){yt(e,"class","code-wrapper__button svelte-fcvtd2")},m(s,c){l(s,e,c),It(e,t),n||(a=nl(e,"click",i[8]),n=!0)},p(s,c){c&64&&Rs(t,s[6])},d(s){s&&o(e),n=!1,a()}}}function Iu(i){let e,t,n,a,s,c,r,u,d,p=i[2]&&Ll(i),v=i[1]&&Dl(i),f=i[3]&&Ul(i);const g=i[10].default,E=$a(g,i,i[9],null);return{c(){e=x("div"),p&&p.c(),t=y(),n=x("div"),v&&v.c(),a=y(),f&&f.c(),s=y(),c=x("pre"),r=x("code"),E&&E.c(),this.h()},l(S){e=b(S,"DIV",{class:!0,style:!0});var h=Gt(e);p&&p.l(h),t=M(h),n=b(h,"DIV",{class:!0});var m=Gt(n);v&&v.l(m),a=M(m),f&&f.l(m),m.forEach(o),s=M(h),c=b(h,"PRE",{class:!0});var R=Gt(c);r=b(R,"CODE",{class:!0});var P=Gt(r);E&&E.l(P),P.forEach(o),R.forEach(o),h.forEach(o),this.h()},h(){yt(n,"class","code-wrapper__buttons svelte-fcvtd2"),yt(r,"class",u=Pl(`language-${i[0].toLowerCase()}`)+" svelte-fcvtd2"),yt(c,"class","svelte-fcvtd2"),yt(e,"class","code-wrapper svelte-fcvtd2"),$n(e,"--lang-color",i[2]?i[7][i[0]]:"transparent"),wo(e,"code-wrapper__line-wrap",i[4])},m(S,h){l(S,e,h),p&&p.m(e,null),It(e,t),It(e,n),v&&v.m(n,null),It(n,a),f&&f.m(n,null),It(e,s),It(e,c),It(c,r),E&&E.m(r,null),i[12](r),d=!0},p(S,[h]){S[2]?p?p.p(S,h):(p=Ll(S),p.c(),p.m(e,t)):p&&(p.d(1),p=null),S[1]?v?v.p(S,h):(v=Dl(S),v.c(),v.m(n,a)):v&&(v.d(1),v=null),S[3]?f?f.p(S,h):(f=Ul(S),f.c(),f.m(n,null)):f&&(f.d(1),f=null),E&&E.p&&(!d||h&512)&&Xa(E,g,S,S[9],d?Za(g,S[9],h,null):Ya(S[9]),null),(!d||h&1&&u!==(u=Pl(`language-${S[0].toLowerCase()}`)+" svelte-fcvtd2"))&&yt(r,"class",u),(!d||h&5)&&$n(e,"--lang-color",S[2]?S[7][S[0]]:"transparent"),(!d||h&16)&&wo(e,"code-wrapper__line-wrap",S[4])},i(S){d||(ht(E,S),d=!0)},o(S){mt(E,S),d=!1},d(S){S&&o(e),p&&p.d(),v&&v.d(),f&&f.d(),E&&E.d(S),i[12](null)}}}function Nu(i,e,t){let{$$slots:n={},$$scope:a}=e,{language:s}=e,{showLineWrapButton:c=!1}=e,{showLanguage:r=!0}=e,{showCopyButton:u=!1}=e;const d={CSS:"#2965f1",HTML:"#e34c26",TypeScript:"#3178c6",JavaScript:"#f1dd35"};let p=!1,v,f="📃 Copiar",g=-1;function E(){navigator.clipboard.writeText(v.textContent),t(6,f="¡Copiado!"),clearTimeout(g),g=setTimeout(()=>t(6,f="📃 Copiar"),2e3)}const S=()=>{t(4,p=!p)};function h(m){Pu[m?"unshift":"push"](()=>{v=m,t(5,v)})}return i.$$set=m=>{"language"in m&&t(0,s=m.language),"showLineWrapButton"in m&&t(1,c=m.showLineWrapButton),"showLanguage"in m&&t(2,r=m.showLanguage),"showCopyButton"in m&&t(3,u=m.showCopyButton),"$$scope"in m&&t(9,a=m.$$scope)},[s,c,r,u,p,v,f,d,E,a,n,S,h]}class Fn extends Kt{constructor(e){super(),Jt(this,e,Nu,Iu,Zt,{language:0,showLineWrapButton:1,showLanguage:2,showCopyButton:3})}}function Il(i){let e,t;return{c(){e=x("div"),t=gt(i[0]),this.h()},l(n){e=b(n,"DIV",{class:!0});var a=Gt(e);t=_t(a,i[0]),a.forEach(o),this.h()},h(){yt(e,"class","info-box__title")},m(n,a){l(n,e,a),It(e,t)},p(n,a){a&1&&Rs(t,n[0])},d(n){n&&o(e)}}}function qu(i){let e,t,n,a=i[0]&&Il(i);const s=i[3].default,c=$a(s,i,i[2],null);return{c(){e=x("div"),a&&a.c(),t=y(),c&&c.c(),this.h()},l(r){e=b(r,"DIV",{class:!0});var u=Gt(e);a&&a.l(u),t=M(u),c&&c.l(u),u.forEach(o),this.h()},h(){yt(e,"class","info-box svelte-16gsg44")},m(r,u){l(r,e,u),a&&a.m(e,null),It(e,t),c&&c.m(e,null),n=!0},p(r,[u]){r[0]?a?a.p(r,u):(a=Il(r),a.c(),a.m(e,t)):a&&(a.d(1),a=null),c&&c.p&&(!n||u&4)&&Xa(c,s,r,r[2],n?Za(s,r[2],u,null):Ya(r[2]),null)},i(r){n||(ht(c,r),n=!0)},o(r){mt(c,r),n=!1},d(r){r&&o(e),a&&a.d(),c&&c.d(r)}}}function Fu(i,e,t){let{$$slots:n={},$$scope:a}=e,{title:s}=e,{infoType:c}=e;return i.$$set=r=>{"title"in r&&t(0,s=r.title),"infoType"in r&&t(1,c=r.infoType),"$$scope"in r&&t(2,a=r.$$scope)},[s,c,a,n]}class ti extends Kt{constructor(e){super(),Jt(this,e,Fu,qu,Zt,{title:0,infoType:1})}}function Ou(i){let e,t=`NOTA: Dead Cells no es libre, es software privativo. No entraré en el 
debate de si un videojuego debe ser libre para que sea ético porque en años no
he conseguido tener una posición clara al respecto. Podría considerar que es 
suficiente que las herramientas que permiten su elaboración lo sean, pues las 
ramas artísticas sufren demasiado en nuestro modelo económico como para 
simplemente liberar los resultados del trabajo creativo enfocado a 
entretenimiento, y más siendo el trabajo de toda una vida.`,n,a,s=`En todo caso, considero 
que como parte vital de la cultura deben ser más accesibles, pero en estos 
contextos lamentablemente libre y accesible significa también gratis para la 
mayoría dada la libertad de libre distribución.`;return{c(){e=x("p"),e.textContent=t,n=y(),a=x("p"),a.textContent=s},l(c){e=b(c,"P",{"data-svelte-h":!0}),C(e)!=="svelte-1rd2zn1"&&(e.textContent=t),n=M(c),a=b(c,"P",{"data-svelte-h":!0}),C(a)!=="svelte-1qmx001"&&(a.textContent=s)},m(c,r){l(c,e,r),l(c,n,r),l(c,a,r)},p:Ut,d(c){c&&(o(e),o(n),o(a))}}}function zu(i){let e,t=`Opinión algo impopular: el trabajador autónomo no existe y el trabajo no es un
orgullo. Iré por partes en esta entrada que repasa algunos
conceptos que se consideran importantes en la enseñanza de formación
profesional pero no en la universidad 🤷‍♂️.`,n,a,s="El autónomo no existe",c,r,u=`Siempre que digo que soy autónomo se me escapa una carcajada. ¿Cómo puede alguien
considerarse autónomo si necesita permiso y pagar para serlo?
La única diferencia es que tu jefe es un ente inflexible y abusivo llamado estado,
que concentra poderes contra los que no puedes luchar de manera individual.`,d,p,v=`Un estado lleno de autónomos es un sueño húmedo para el poder. Personas que viven
en la falsa creencia de tener control sobre su vida laboral, rehuyendo de la
cooperación y defensa laboral colectiva, bajando la cabeza porque:`,f,g,E=`<li>Ya conocía los términos y los aceptó: “es lo que toca” suele pensar.</li> <li>Sabe que de forma individual no tiene ningún poder y que salvo sectores muy
concretos la huelga es inefectiva y solo dará paso a otros autónomos oportunistas.</li> <li>Cree que los sindicatos no le apoyarán. Probablemente debido a que los sindicatos
de autónomos son un chiste.
<ul><li>A ver, si te presentas usando la palabra “autónomo” ante la CNT se reirán en tu cara mientras te señalan al edificio de hacienda más cercano, pero eso no significa que no te consideren un trabajador ni vayan a pasar de ti. Otra cosa es que puedan conseguir algo.</li></ul></li> <li>Se vuelve parte de uno el quejarse de hacienda y cuánto le están reventando. Es como la vieja que presume de dolencias ante la vecina, el clásico “qué bien tan mal / qué mal tan bien”.</li>`,S,h,m=`Yo no me libro, e intento convencerme cada día de que al menos tengo libertad
para mandar al carajo al cliente o lo que esté haciendo y ya, sin ninguna carga
de responsabilidad.`,R,P,N=`En teoría, un trabajador asalariado goza de la misma libertad: una relación laboral exige
voluntariedad <small>(discutible con excepciones de servicios públicos ante
emergencias nacionales de extrema necesidad, como el caso de bomberos o
sanitarios)</small>, así que, en teoría
la mayoría puede mandar al carajo su trabajo cuando quiera (xd…).`,W,I,z=`La voluntariedad en el contexto del derecho laboral en la relación laboral
significa que nadie puede obligarte a trabajar (en teoría ni el estado). En ese
sentido el trabajo tiene carácter voluntario (que no significa no remunerado). Claro,
igual de voluntario que comer, e igual de voluntario que pagar un alquiler.
Igual de voluntario que no rajarse las venas.`,F,A,T="La ajenidad",O,Z,K=`Me he críado escuchando un conjunto de falacias
fundamentada en una especie de incoherente orgullo obrero, que en algún
momento acabé interiorizando como algo racional: “yo tengo X años cotizados”,
“yo llevo trabajando desde los 15 años”, “tú no sabes lo que es trabajar”, etc.`,Y,se,re=`Yo solo escucho “he intercambiado X tiempo de mi vida por dinero y la promesa
de más dinero”. Y no cualquier tiempo de su vida, sino de su juventud. Esto
ni siquiera se puede tildar de reduccionista.`,de,J,De=`No entiendo cómo algunos casos que son claros
signos de sumisión son considerados dignos de orgullo. Veo gente
pasando años trabajando para una empresa para la que solo es un recurso,
un trozo de carne o engranaje en su máquina de hacer dinero, y que muestran con orgullo los
días cotizados como si fuera ejemplo de disciplina o autodesarrollo, una
cicatriz de una épica batalla ganada. Eso mientras viven
en la realidad consumista desenfrenada de un capitalismo predatorio donde
no están construyendo ningún futuro y donde están igual que como empezaron,
salvo que con media vida convertida a promesas de una pensión.`,ae,Me,Je=`Y tengo un serio problema con eso. Concretamente con la ajenidad. Cuando la
patronal describe la ajenidad puede hacerlo de una forma tan bonita como:`,je,ie,Ee=`“Exención al trabajador de las consecuencias directas de su labor, de sus costos
y riesgos de la producción, recibiendo un salario en contraprestación de su esfuerzo”.`,Re,we,ke=`Cuando podría resumirse en: “los frutos del trabajo solo pertenecen al empleador”
y que yo extiendo con “y no importa si el trabajador realiza una actividad creativa
con la que el empleador va a seguir cobrando toda su vida. Se paga por su esfuerzo
presente limitado a la duración de la relación laboral.”`,qe,ze,at="La ajenidad en los trabajos creativos",q,Ye,nt=`El problema de la ajenidad es que viene acompañado de cadenas para tu
cerebro cuando se trata de un desarrollo creativo. Cadenas que permanecen
tras el cese de la relación laboral.`,He,Le,st=`En realidad, el empleador no es solo dueño de las consecuencias del trabajo
y sus frutos, es dueño del trabajo en sí mismo y de una parte de ti. Ejemplo:
como desarrollador de herramientas y metodologías custom, se te ocurre alguna
cosita en tu actividad laboral que facilita muchos procesos y ayuda al resto
del equipo, algo muy común en el trabajo de un experto en Developer Experience
o un enablement engineer.`,Ne,Fe,U=`Consideras que tu desarrollo podría ser igual de útil para otros profesionales
o empresas, así que lo publicas por tu cuenta aportando a la comunidad. Al final
sale de tu cabeza, ¿no? Pues no. Saldrá de tu cabeza, pero te han pagado un
salario para que la tengas pudriéndose en ella.`,_,H,xe=`De pronto, ya no tienes solo un jefe, tienes a un maestro de esclavos que te
dice qué puedes hacer o no con tu investigación y tus ideas, porque en el fondo
no son tuyas, amenazando con poderes judiciales si quieres
tan solo compartirlo altruistamente, ya no digamos monetizarlo por tu cuenta.`,pe,ue,Ge=`La acusación más típica y mínima es que tu idea puede o pudo dar una ventaja
frente a la competencia mientras se te pagó por ello y que si tú la estás
exponiendo, estás apoyando a dicha competencia. Acusaciones relacionadas a
la concurrencia desleal <small>(la palabra concurrencia no implica “mientras
trabajas en”. Da igual si esto ocurre tras finalizar contrato).</small>`,Se,Pe,Ze="Anarcosindicalismo y cooperativas",k,he,tt=`Me duele, mucho, pero he de reconocer que entre los franceses hay algunos
de los mejores ejemplos recientes que nos ha brindado la humanidad. No hablo
de Gojira, que también, sino en este contexto laboral, de Motion Twin.`,X,me,We=`Es la empresa que más uso como ejemplo de increíble modelo de desarrollo de
software, tooling y videojuegos. Eso al margen de sus tendencias políticas o
su organización laboral (al menos en sus inicios), que comentaré luego.`,Ke,ct,G=`Este grupo de colegas centraba su trabajo en el desarrollo de juegos usando
Adobe Flash. Entre ellos se encontraba Nicolas Cannasse desarrollando un
lenguaje de alta abstracción y extremadamente orientado a multiplataforma
desde 2005.`,Ce,be,ve=`Cuando Flash murió ya tenían más que pulido su lenguaje Haxe y casi una década
de iniciado su propio motor de renderizado/videojuegos, Heaps.io.`,Te,$e,Qe=`Con eso, trabajando con sus propias herramientas de la manera que a ellos les
gustaba, desarrollaron la joya de Dead Cells, con más de 10 millones de copias
vendidas sin contar DLCs. Y creo que sin tener en cuenta las más de 5 millones
en su versión Android ni la asociación con plataformas estilo Netflix.`,lt,ut,et=`Siendo un juego que no frecuenta ofertas de bundles a precios regalados ni
nada similar, al multiplicar verás que hablamos de millones facturados (incluso
aunque solo costase 50 céntimos). Para
un pequeño equipo de 8 personas creo que da suficiente para unas cuantas vidas.
Pero hay otras cosillas interesantes:`,dt,pt,Q=`<li>Se describen como una cooperativa de trabajadores (puedes leer las descripciones
en su propia página, dentro de una pedazo de estrella roja). En entrevistas no
hablan precisamente pocas veces de cooperativa anarcosindicalista.
<ul><li>Importante aclarar que el tiempo ha transcurrido y han fundado otro
estudio anexo que se aleja de esta perspectiva.</li></ul></li> <li>Sus herramientas principales son libres y compartidas con la comunidad. Cualquier
persona que las tenga dispone de las cuatro libertades fundamentales
del software libre y de código abierto. Comprenden que el éxito de un videojuego como producto
artístico está vinculado al cómo se usan las herramientas y no a la posesión
de las mismas. Podríamos considerar a las herramientas como
el medio de producción.</li>`,Ue,vt,ce,Ie,At=`Han hecho muchas cosas bien, ¿pero se salvan de algo? Las cooperativas fomentan
el carácter asociativo y el rechazo a una organización vertical
y jerarquías de poder en el contexto laboral, con una única excepción: el estado.
Ninguna diferencia con el supuesto autónomo, más allá de posibles “beneficios”
fiscales pasados ciertos umbrales. El beneficio de pagar un poquito menos al
estado soberano, que repartirá sabiamente el dinero entre ayuntamientos para
cubrir necesidades esenciales, como organizar conciertos de Camela si fuera
España.`,ne,B,Xe=`En su caso además habrán tenido que bajar la cabeza con todo tipo de individuos
y empresas abusivas como lo es Steam, llevándose hasta un posible 50%
por distribución en su plataforma.`,Nt,qt,cn="Mi única condición en cualquier trabajo",Vt,w,ee=`Tengo la ventaja de dedicarme a un área donde son las empresas las que te hacen
la pelota, especialmente a la mínima que muestras algo de pasión y autonomía,
o en mi caso, un perfil obsesivo nada sano.`,le,oe,te=`A la mínima que destaques un poco lo raro es que no tengas a empresas de
recruiters o cazatalentos dando la turra con ofertas superbonitas y en
donde tú pones algunas condiciones (otra cosa es que las acepten).`,Oe,Be,V=`Lo único que solicito a esas empresas es la anulación de la ajenidad, aunque
eso implique a veces mayores responsabilidades o trabajar a puro equity. Todo mi
trabajo me pertenece, o al menos en una parte considerable como para no sufrir
consecuencias si quiero publicarlo bajo mis propias condiciones.`,fe,j,Ae=`La mayoría se esfuma y no vuelven a contactarme en la vida, pero a veces cuela.
He conseguido algunos porcentajes por derechos de autor en software de la
rama sanitaria con este modelo.`,it,ft,zt=`Si hago cuentas, muy probablemente esto me reporte bastante menos que haber
aceptado un contrato de asalariado, pero al menos tengo control sobre su destino. Y
esto beneficia a la parte contratante, que no sería contratante
sino socio. No solo reduce la responsabilidad fiscal, reduce los riesgos y los
costes al no contratar, también asegura una mayor implicación del
profesional que al final pasa a ser parte del proyecto y sus resultados, que se
preocupará de su éxito porque de él depende su reputación y sus beneficios.`,Pt,Bt,wt=`También existen empresas que en su modelo de desarrollo no tienen
ningún miedo y fomentan la publicación de herramientas y metodologías
sabiendo que eso manifiesta una imagen de excelencia y seguridad en lo que hacen.`,rt,Dt,xt=`A su vez mejoran las capacidades divulgativas y visibilizan a sus desarrolladores,
generando al menos un ambiente de mayor crecimiento profesional.
Pese a la ajenidad, en ellas sabes que el trabajo que desarrollas al menos no
estará anclado a nadie y hasta se te agradecería el divulgarlo.`,jt,Ht,Qt="Esto no es solo mi trabajo",un,bt,hn=`Al menos la parte de desarrollo propio,
tooling y subnormaladas gráficas, seguiré haciéndolo me de o no dinero, incluso
pagaría si tuviera que hacerlo. Sobre la consultoría hablaré en otra entrada.`,dn,Ft,Vn=`La suerte de que mi hobby es especialmente
rentable, y la mala suerte de vivir en una sociedad donde te llaman
“nini” de manera peyorativa por no explotar el conocimiento
o habilidad, por no querer convertirme en carne para una corporación o por ver 20 años de
retraso en el mundo académico y no querer tocarlo ni con un palo.`,mn,Wt,Di=`En la segunda parte hablaré un poco más sobre mis intereses en
un trabajo, pero adelanto que el último de ellos es el dinero (sin renunciar
a ello, tampoco soy tonto). Todos mis hobbies son baratos o gratuitos,
no soy coleccionista de ninguna cosa y practico una filosofía minimalista
por naturaleza, no es que lo fuerce. Mucho dinero tendrían que ofrecerme
para conseguir verme tentado a trabajar en algo con lo que no esté cómodo.`,Dn,Xt,Ui=`Me dice un colega “si no fueras tan vago, trabajarías menos”
(no es una errata, es una frase con mucho sentido), pero es que se
me hace un mundo hincar la rodilla, bajar la cabeza o pasar por el aro. Ya lo
hice durante algunos años, moviéndome por miedo al juicio ajeno, por no
decepcionar y yendo en contra de mi naturaleza. Acabé consiguiendo lo contrario,
petando de mala manera, aislándome, alejando y decepcionando a todos los que
confiaban en mí.`,Un,Yt,Ii=`Por otra parte cada vez tolero menos las normas y las jerarquías absurdas de
los ambientes corporativos y académicos. En el momento en el
que un simplón me diga alguna incoherencia como que tengo que cumplir con
un horario de trabajo “porque sí”, aunque eso fastidie mi productividad,
perjudicándome a mí y a los objetivos de la empresa, me piraría a mi casa.`,In;return vt=new ti({props:{$$slots:{default:[Ou]},$$scope:{ctx:i}}}),{c(){e=x("p"),e.textContent=t,n=y(),a=x("h2"),a.textContent=s,c=y(),r=x("p"),r.textContent=u,d=y(),p=x("p"),p.textContent=v,f=y(),g=x("ul"),g.innerHTML=E,S=y(),h=x("p"),h.textContent=m,R=y(),P=x("p"),P.innerHTML=N,W=y(),I=x("p"),I.textContent=z,F=y(),A=x("h2"),A.textContent=T,O=y(),Z=x("p"),Z.textContent=K,Y=y(),se=x("p"),se.textContent=re,de=y(),J=x("p"),J.textContent=De,ae=y(),Me=x("p"),Me.textContent=Je,je=y(),ie=x("p"),ie.textContent=Ee,Re=y(),we=x("p"),we.textContent=ke,qe=y(),ze=x("h3"),ze.textContent=at,q=y(),Ye=x("p"),Ye.textContent=nt,He=y(),Le=x("p"),Le.textContent=st,Ne=y(),Fe=x("p"),Fe.textContent=U,_=y(),H=x("p"),H.textContent=xe,pe=y(),ue=x("p"),ue.innerHTML=Ge,Se=y(),Pe=x("h2"),Pe.textContent=Ze,k=y(),he=x("p"),he.textContent=tt,X=y(),me=x("p"),me.textContent=We,Ke=y(),ct=x("p"),ct.textContent=G,Ce=y(),be=x("p"),be.textContent=ve,Te=y(),$e=x("p"),$e.textContent=Qe,lt=y(),ut=x("p"),ut.textContent=et,dt=y(),pt=x("ul"),pt.innerHTML=Q,Ue=y(),Mt(vt.$$.fragment),ce=y(),Ie=x("p"),Ie.textContent=At,ne=y(),B=x("p"),B.textContent=Xe,Nt=y(),qt=x("h2"),qt.textContent=cn,Vt=y(),w=x("p"),w.textContent=ee,le=y(),oe=x("p"),oe.textContent=te,Oe=y(),Be=x("p"),Be.textContent=V,fe=y(),j=x("p"),j.textContent=Ae,it=y(),ft=x("p"),ft.textContent=zt,Pt=y(),Bt=x("p"),Bt.textContent=wt,rt=y(),Dt=x("p"),Dt.textContent=xt,jt=y(),Ht=x("h2"),Ht.textContent=Qt,un=y(),bt=x("p"),bt.textContent=hn,dn=y(),Ft=x("p"),Ft.textContent=Vn,mn=y(),Wt=x("p"),Wt.textContent=Di,Dn=y(),Xt=x("p"),Xt.textContent=Ui,Un=y(),Yt=x("p"),Yt.textContent=Ii},l($){e=b($,"P",{"data-svelte-h":!0}),C(e)!=="svelte-1wpyji2"&&(e.textContent=t),n=M($),a=b($,"H2",{"data-svelte-h":!0}),C(a)!=="svelte-3yagm2"&&(a.textContent=s),c=M($),r=b($,"P",{"data-svelte-h":!0}),C(r)!=="svelte-10a7wn3"&&(r.textContent=u),d=M($),p=b($,"P",{"data-svelte-h":!0}),C(p)!=="svelte-18geujv"&&(p.textContent=v),f=M($),g=b($,"UL",{"data-svelte-h":!0}),C(g)!=="svelte-1qdhirk"&&(g.innerHTML=E),S=M($),h=b($,"P",{"data-svelte-h":!0}),C(h)!=="svelte-t4skty"&&(h.textContent=m),R=M($),P=b($,"P",{"data-svelte-h":!0}),C(P)!=="svelte-z8tuyy"&&(P.innerHTML=N),W=M($),I=b($,"P",{"data-svelte-h":!0}),C(I)!=="svelte-11u0qik"&&(I.textContent=z),F=M($),A=b($,"H2",{"data-svelte-h":!0}),C(A)!=="svelte-1afsrt5"&&(A.textContent=T),O=M($),Z=b($,"P",{"data-svelte-h":!0}),C(Z)!=="svelte-15gqcak"&&(Z.textContent=K),Y=M($),se=b($,"P",{"data-svelte-h":!0}),C(se)!=="svelte-19ha8i3"&&(se.textContent=re),de=M($),J=b($,"P",{"data-svelte-h":!0}),C(J)!=="svelte-80o8sg"&&(J.textContent=De),ae=M($),Me=b($,"P",{"data-svelte-h":!0}),C(Me)!=="svelte-1kcl7s"&&(Me.textContent=Je),je=M($),ie=b($,"P",{"data-svelte-h":!0}),C(ie)!=="svelte-1l9qmbt"&&(ie.textContent=Ee),Re=M($),we=b($,"P",{"data-svelte-h":!0}),C(we)!=="svelte-1y06dud"&&(we.textContent=ke),qe=M($),ze=b($,"H3",{"data-svelte-h":!0}),C(ze)!=="svelte-98m34g"&&(ze.textContent=at),q=M($),Ye=b($,"P",{"data-svelte-h":!0}),C(Ye)!=="svelte-v7iwr3"&&(Ye.textContent=nt),He=M($),Le=b($,"P",{"data-svelte-h":!0}),C(Le)!=="svelte-cs5hk7"&&(Le.textContent=st),Ne=M($),Fe=b($,"P",{"data-svelte-h":!0}),C(Fe)!=="svelte-19jdwc4"&&(Fe.textContent=U),_=M($),H=b($,"P",{"data-svelte-h":!0}),C(H)!=="svelte-17ozwnn"&&(H.textContent=xe),pe=M($),ue=b($,"P",{"data-svelte-h":!0}),C(ue)!=="svelte-1otmt5n"&&(ue.innerHTML=Ge),Se=M($),Pe=b($,"H2",{"data-svelte-h":!0}),C(Pe)!=="svelte-1ronoj4"&&(Pe.textContent=Ze),k=M($),he=b($,"P",{"data-svelte-h":!0}),C(he)!=="svelte-1wysd81"&&(he.textContent=tt),X=M($),me=b($,"P",{"data-svelte-h":!0}),C(me)!=="svelte-aa3yu9"&&(me.textContent=We),Ke=M($),ct=b($,"P",{"data-svelte-h":!0}),C(ct)!=="svelte-ilbqh8"&&(ct.textContent=G),Ce=M($),be=b($,"P",{"data-svelte-h":!0}),C(be)!=="svelte-1lolwil"&&(be.textContent=ve),Te=M($),$e=b($,"P",{"data-svelte-h":!0}),C($e)!=="svelte-j76t9r"&&($e.textContent=Qe),lt=M($),ut=b($,"P",{"data-svelte-h":!0}),C(ut)!=="svelte-t95qk"&&(ut.textContent=et),dt=M($),pt=b($,"UL",{"data-svelte-h":!0}),C(pt)!=="svelte-1dshv2p"&&(pt.innerHTML=Q),Ue=M($),St(vt.$$.fragment,$),ce=M($),Ie=b($,"P",{"data-svelte-h":!0}),C(Ie)!=="svelte-19gb4g2"&&(Ie.textContent=At),ne=M($),B=b($,"P",{"data-svelte-h":!0}),C(B)!=="svelte-om5qlr"&&(B.textContent=Xe),Nt=M($),qt=b($,"H2",{"data-svelte-h":!0}),C(qt)!=="svelte-18licbm"&&(qt.textContent=cn),Vt=M($),w=b($,"P",{"data-svelte-h":!0}),C(w)!=="svelte-13wgyu3"&&(w.textContent=ee),le=M($),oe=b($,"P",{"data-svelte-h":!0}),C(oe)!=="svelte-1r5k9wu"&&(oe.textContent=te),Oe=M($),Be=b($,"P",{"data-svelte-h":!0}),C(Be)!=="svelte-1ao3ou8"&&(Be.textContent=V),fe=M($),j=b($,"P",{"data-svelte-h":!0}),C(j)!=="svelte-144nme8"&&(j.textContent=Ae),it=M($),ft=b($,"P",{"data-svelte-h":!0}),C(ft)!=="svelte-1fksa9d"&&(ft.textContent=zt),Pt=M($),Bt=b($,"P",{"data-svelte-h":!0}),C(Bt)!=="svelte-1koj3tz"&&(Bt.textContent=wt),rt=M($),Dt=b($,"P",{"data-svelte-h":!0}),C(Dt)!=="svelte-crdp6j"&&(Dt.textContent=xt),jt=M($),Ht=b($,"H2",{"data-svelte-h":!0}),C(Ht)!=="svelte-7u7yf2"&&(Ht.textContent=Qt),un=M($),bt=b($,"P",{"data-svelte-h":!0}),C(bt)!=="svelte-171tqxj"&&(bt.textContent=hn),dn=M($),Ft=b($,"P",{"data-svelte-h":!0}),C(Ft)!=="svelte-1eeo9ne"&&(Ft.textContent=Vn),mn=M($),Wt=b($,"P",{"data-svelte-h":!0}),C(Wt)!=="svelte-dnf6u"&&(Wt.textContent=Di),Dn=M($),Xt=b($,"P",{"data-svelte-h":!0}),C(Xt)!=="svelte-1hxg1uq"&&(Xt.textContent=Ui),Un=M($),Yt=b($,"P",{"data-svelte-h":!0}),C(Yt)!=="svelte-mgjb17"&&(Yt.textContent=Ii)},m($,Ve){l($,e,Ve),l($,n,Ve),l($,a,Ve),l($,c,Ve),l($,r,Ve),l($,d,Ve),l($,p,Ve),l($,f,Ve),l($,g,Ve),l($,S,Ve),l($,h,Ve),l($,R,Ve),l($,P,Ve),l($,W,Ve),l($,I,Ve),l($,F,Ve),l($,A,Ve),l($,O,Ve),l($,Z,Ve),l($,Y,Ve),l($,se,Ve),l($,de,Ve),l($,J,Ve),l($,ae,Ve),l($,Me,Ve),l($,je,Ve),l($,ie,Ve),l($,Re,Ve),l($,we,Ve),l($,qe,Ve),l($,ze,Ve),l($,q,Ve),l($,Ye,Ve),l($,He,Ve),l($,Le,Ve),l($,Ne,Ve),l($,Fe,Ve),l($,_,Ve),l($,H,Ve),l($,pe,Ve),l($,ue,Ve),l($,Se,Ve),l($,Pe,Ve),l($,k,Ve),l($,he,Ve),l($,X,Ve),l($,me,Ve),l($,Ke,Ve),l($,ct,Ve),l($,Ce,Ve),l($,be,Ve),l($,Te,Ve),l($,$e,Ve),l($,lt,Ve),l($,ut,Ve),l($,dt,Ve),l($,pt,Ve),l($,Ue,Ve),Ct(vt,$,Ve),l($,ce,Ve),l($,Ie,Ve),l($,ne,Ve),l($,B,Ve),l($,Nt,Ve),l($,qt,Ve),l($,Vt,Ve),l($,w,Ve),l($,le,Ve),l($,oe,Ve),l($,Oe,Ve),l($,Be,Ve),l($,fe,Ve),l($,j,Ve),l($,it,Ve),l($,ft,Ve),l($,Pt,Ve),l($,Bt,Ve),l($,rt,Ve),l($,Dt,Ve),l($,jt,Ve),l($,Ht,Ve),l($,un,Ve),l($,bt,Ve),l($,dn,Ve),l($,Ft,Ve),l($,mn,Ve),l($,Wt,Ve),l($,Dn,Ve),l($,Xt,Ve),l($,Un,Ve),l($,Yt,Ve),In=!0},p($,[Ve]){const Gn={};Ve&1&&(Gn.$$scope={dirty:Ve,ctx:$}),vt.$set(Gn)},i($){In||(ht(vt.$$.fragment,$),In=!0)},o($){mt(vt.$$.fragment,$),In=!1},d($){$&&(o(e),o(n),o(a),o(c),o(r),o(d),o(p),o(f),o(g),o(S),o(h),o(R),o(P),o(W),o(I),o(F),o(A),o(O),o(Z),o(Y),o(se),o(de),o(J),o(ae),o(Me),o(je),o(ie),o(Re),o(we),o(qe),o(ze),o(q),o(Ye),o(He),o(Le),o(Ne),o(Fe),o(_),o(H),o(pe),o(ue),o(Se),o(Pe),o(k),o(he),o(X),o(me),o(Ke),o(ct),o(Ce),o(be),o(Te),o($e),o(lt),o(ut),o(dt),o(pt),o(Ue),o(ce),o(Ie),o(ne),o(B),o(Nt),o(qt),o(Vt),o(w),o(le),o(oe),o(Oe),o(Be),o(fe),o(j),o(it),o(ft),o(Pt),o(Bt),o(rt),o(Dt),o(jt),o(Ht),o(un),o(bt),o(dn),o(Ft),o(mn),o(Wt),o(Dn),o(Xt),o(Un),o(Yt)),Et(vt,$)}}}const Bu={title:"Autonomía y ajenidad (parte 1)",slug:"autonomia-ajenidad-1",coverImage:"/src/assets/posts-covers/starfish.jpg",coverPosition:"normal",coverAuthor:"Pedro Lastra",excerpt:"El trabajador autónomo no existe y el trabajo no es un orgullo.",date:"2024-08-24T13:06:23.177Z",updated:"2024-08-24T13:06:23.903Z",hidden:!1,tags:["Personal","Laboral","Software libre"],keywords:["trabajo","autónomo"],type:"default"};class Hu extends Kt{constructor(e){super(),Jt(this,e,null,zu,Zt,{})}}const ku=Object.freeze(Object.defineProperty({__proto__:null,default:Hu,metadata:Bu},Symbol.toStringTag,{value:"Module"}));function Vu(i){let e,t,n="AVISO: he escrito esto muy rápido en algo de rato libre, espera encontrar más de alguna errata o párrafo sobrecargado hasta que saque tiempo a revisarlo.";return{c(){e=gt(`No voy a centrarme en los hechos principales de este caso, sino en
algunos datos interesantes y relacionados con nuestra actividad, pero daré
algo de contexto adicional que no suele explicarse en otros artículos.
`),t=x("p"),t.textContent=n,this.h()},l(a){e=_t(a,`No voy a centrarme en los hechos principales de este caso, sino en
algunos datos interesantes y relacionados con nuestra actividad, pero daré
algo de contexto adicional que no suele explicarse en otros artículos.
`),t=b(a,"P",{style:!0,"data-svelte-h":!0}),C(t)!=="svelte-ji7l8p"&&(t.textContent=n),this.h()},h(){$n(t,"margin-top","0.5rem"),$n(t,"line-height","1.25rem"),$n(t,"color","var(--color-second-light)")},m(a,s){l(a,e,s),l(a,t,s)},p:Ut,d(a){a&&(o(e),o(t))}}}function Gu(i){let e,t,n,a="Ha pasado más de una década desde que se registró el primer incidente relacionado con uno de los tantos casos de acoso y abuso sexual que salieron a la luz en un periodo muy turbulento para la industria de los videojuegos. Este caso, conocido popularmente como el “Caso de la suite Cosby” o más formalmente como la “Demanda del Departamento de Igualdad en el Empleo y la Vivienda de California (DFEH, por sus siglas en inglés) contra Activision Blizzard”, se centró especialmente en la investigación de asuntos de acoso sexual, entre ellos el suicidio de Kerri Moynihan.",s,c,r="No me gusta la denominación formal, sentida como utilizada deliberadamente para reducir el alcance del problema a un asunto de jurisdicción local y de intereses variables. Un caso iniciado de esta manera es aprovechado por las corporaciones como parte de una estrategia a largo plazo, esperando que eventualmente caiga en manos de un gobierno más favorable. El DFEH, ahora renombrado como el Departamento de Derechos Civiles de California (CRD), tampoco está exento de polémica.",u,d,p="En las corporaciones, el “non bis in idem” (“no dos veces por lo mismo”, recogido en la mayoría de países de occidente en forma de artículo en constitución que otorga el derecho a no volver a ser juzgado por la misma causa), es usado como una herramienta más. Permite elegir el momento oportuno para ser juzgado por algo indefendible, ante la entidad más conveniente, en el lugar más adecuado y con el mayor número de acusaciones posibles de golpe. Así, se minimiza cualquier impacto sobre la corporación y se intenta resolver todo en un único proceso.",v,f,g=`Sin ánimo de quitar hierro al asunto, la suite Cosby era una conveniente portada
para una gigante montaña de denuncias y toxicidad que habían creado un
entorno de alta “fluidez laboral”, una forma de decir que nadie quería trabajar
ahí y que había ciclado la mayoría de la plantilla, no quedando ni una cuarta
parte de la Blizzard original ni sus ideas. El caso de la Suite Cosby era lo
bastante mediático para ser la punta de lanza en una demanda, y lo
suficientemente barato de solucionar.`,E,S,h=`Pero la demanda de la DFEH no parece haber sido la idónea para
Activision Blizzard,
sino una escala inevitable tras el insulto inicial propuesto por la Comisión de
Oportunidad y Empleo Igualitario (EEOC, del inglés), de ofrecer una indemnización
de unos $18 millones, a repartir entre todos los empleados en plantilla entre
2016 y 2021. Unos 10000 empleados, incluyendo hombres y mujeres 🤷‍♂️.
Con un reparto igualitario como el que se proponía, correspondía a $1800 dólares
por empleado en acuerdo llevado mediante decreto de consentimiento.`,m,R,P=`Si eso no suena lo suficientemente absurdo, para el cálculo de los
18 millones solo se tuvo en cuenta el número de empleados que aceptaron y
participaron en el acuerdo con la EEOC, que como imaginarás ante las
condiciones, no fueron precisamente muchos.`,N,W,I=`Probablemente te preguntes a cuántos hombres acosaron sexualmente durante
ese tiempo. No se filtró esa información en detalle, pero muy probablemente
a pocos por no decir ninguno. La EEOC generalizó y metió todas las demandas
laborales en un mismo saco, incluyendo las de acoso sexual, de forma que, muy
conveniente para Activision Blizzard, solventarían todos sus problemas de golpe.`,z,F,A="Antisindicalismo y estado",T,O,Z=`Lo anterior es difícil de comprender para mucha gente, ¿cómo una agencia federal
que se hace llamar “Comisión de Oportunidad y Empleo Igualitario” parece hacer
todo lo contrario y guiar
hacia una salida fácil a una corporación que parece atentar contra sus
empleados?`,K,Y,se=`Por qué, si mientras Bobby Kotick soltaba bonitas palabras vacías para sus empleados (y
algunas otras no tan bonitas), Activision Blizzard no coopera y
destruye pruebas que le son requeridas durante la investigación.`,re,de,J=`Esto se explica porque mientras prometen proteger a sus empleados, también
contratan a las mejores firmas
antisindicalistas del mundo, como lo es WilmerHale, muy conocida por su brutal
eficiencia para erradicar cualquier indicio de sindicalismo en Amazon.`,De,ae,Me=`Y aunque parezca no tener relación, lo que hace verdaderamente fuertes a las
firmas como WilmerHale, más allá de su capacidad para impedir la unión, es que
tienen una increíble conexión con los servicios públicos. No solo hacen
su labor impecablemente, también lo hacen afianzando relaciones y haciendo de
puente entre las corporaciones y los poderes federales, incluyendo el judicial.`,Je,je,ie="Nuestra postura",Ee,Re,we=`En 2021, unos días antes de explotar públicamente todo este caso, poco antes
del lanzamiento de Diablo 2 Resurrected, mi compañero Cristo Santana y yo
trabajábamos en un generador de sitios estáticos minimalista para realizar una
herramienta para la comunidad.`,ke,qe,ze=`El proyecto, <a href="https://d2runewords.com" rel="nofollow">D2Runewords</a> <em>(Diablo 2 rune words, con palabras juntas de forma
deliberada por SEO)</em>, nació casi a la misma vez que se publicó todo este asunto
de manera masiva. En ese instante
queríamos dejarlo de lado, pero finalmente pensamos en algo mejor:
dejar una nota de disconformidad. Es lo mínimo que podíamos hacer, manifestar
nuestro descontento.`,at,q,Ye=`Hasta ahí pensábamos que no iba a pasar nada más, una web desconocida y no
posicionada recientemente creada que solo servía de herramienta y base de datos
para la comunidad de un juego relativamente nicho, seguramente sería irrelevante.`,nt,He,Le="¿Sirvió de algo?",st,Ne,Fe=`Probablemente no cambió nada en absoluto, pero si solo sirvió para que alguna
persona, aunque fuera por un momento, se sintiera apoyada, nos es suficiente.`,U,_,H=`En más de tres años y medio hemos recibido feedback directo de solo nueve
personas, de las cuales dos agradecieron la herramienta en sí sin mencionar al
tema. Entre las siete restantes se encontraba una empleada
de Activision Blizzard con un mensaje algo agridulce:`,xe,pe,ue=`<p>Dear Alex and Cristo,</p> <p>on behalf of my entire team, we want to express our sincere gratitude for your support.</p> <p>Unfortunately, it’s not as simple as you suggest to detach ourselves from this company. For
many of us, working here was once a dream. Yet now, it feels more like a nightmare we wish
we could escape, if only there were better opportunities.</p> <p>The work itself is demanding, but what makes it truly difficult is the knowledge that our
efforts go unrecognized. This is the company’s greatest problem.</p> <p>We wish you all the best.</p> <p>Sincerely,</p> <br/>-omito su nombre y rol, por prudencia-`,Ge,Se,Pe=`De los seis restantes, tres no se habían enterado de qué iba el tema y pedían
más información. Un mensaje que me gustó mucho fue el de Thomas Giuseppe, quien
posteriormente también contribuyó mucho a dar a conocer la herramienta:`,Ze,k,he=`<p>Hey!</p> <p>I just found d2runewords.com, and I think it’s an awesome tool. Basically, it’s the only one
where I can mark what runes I have and clearly see what I can make with them.</p> <p>But I don’t really get the message in the header. I think I’m missing some context, but it
sounds serious. Would it be too much to ask if you could explain what it’s about?</p> <p>Thanks!,<br/>
Giu</p>`,tt,X,me=`Gracias a él nos dimos cuenta de que era importante dejar una referencia al caso
en el mensaje. Parecía que la mayoría ni se había enterado de nada.`,We,Ke,ct=`La página registraba en sus mejores momentos unas 12.000 visitas recurrentes
al mes y unas 300 visitas únicas mensuales (de nuevos usuarios). La diferencia
tan grande entre visitas recurrentes y únicas se debe a que
al tratarse de una webapp herramienta/base de datos, los usuarios
la guardan en marcadores y la consultan regularmente.`,G,Ce,be=`Hemos visto la página aparecer entre algún streaming de Diablo 2, así que estamos
convencidos de que al menos hemos contribuido con un poco más de visibilización.`,ve,Te,$e="¿Cómo está la situación actualmente?",Qe,lt,ut=`En un correo que no consideramos de feedback, nos preguntaron si la situación
ha mejorado. Lamentablemente no tenemos contacto con ningún empleado. Me he
distanciado mucho del tema, por lo que me es imposible responder a esa pregunta.`,et,dt,pt=`Sinceramente soy muy poco optimista, pero me alegra ver cómo algo tan simple
como mantener un mensaje puede incomodar a algunas personas y hacer sentir
apoyadas a otras aunque sea un sentimiento fugaz o considerablemente inútil.`,Q,Ue,vt=`Respecto al uso de la herramienta, en realidad no me sienta mal que se use
y sea útil, no juzgo a nadie por jugar a ningún juego de esta compañía y menos
a Diablo 2, que se comió la mitad de mi adolescencia.`,ce,Ie,At=`Diablo 2 fue un juego de una
Blizzard en la que sin lugar a dudas también
existía una toxicidad destacable, pero también una cultura que, bajo la
dirección de Morhaime reconocía la calidad y trabajo de sus empleados ante
todo, o eso es lo que se suele decir. Yo prefiero no poner más la mano en el
fuego por ninguna empresa ni sus caras visibles.`,ne;return e=new ti({props:{$$slots:{default:[Vu]},$$scope:{ctx:i}}}),{c(){Mt(e.$$.fragment),t=y(),n=x("p"),n.textContent=a,s=y(),c=x("p"),c.textContent=r,u=y(),d=x("p"),d.textContent=p,v=y(),f=x("p"),f.textContent=g,E=y(),S=x("p"),S.textContent=h,m=y(),R=x("p"),R.textContent=P,N=y(),W=x("p"),W.textContent=I,z=y(),F=x("h2"),F.textContent=A,T=y(),O=x("p"),O.textContent=Z,K=y(),Y=x("p"),Y.textContent=se,re=y(),de=x("p"),de.textContent=J,De=y(),ae=x("p"),ae.textContent=Me,Je=y(),je=x("h2"),je.textContent=ie,Ee=y(),Re=x("p"),Re.textContent=we,ke=y(),qe=x("p"),qe.innerHTML=ze,at=y(),q=x("p"),q.textContent=Ye,nt=y(),He=x("h2"),He.textContent=Le,st=y(),Ne=x("p"),Ne.textContent=Fe,U=y(),_=x("p"),_.textContent=H,xe=y(),pe=x("blockquote"),pe.innerHTML=ue,Ge=y(),Se=x("p"),Se.textContent=Pe,Ze=y(),k=x("blockquote"),k.innerHTML=he,tt=y(),X=x("p"),X.textContent=me,We=y(),Ke=x("p"),Ke.textContent=ct,G=y(),Ce=x("p"),Ce.textContent=be,ve=y(),Te=x("h2"),Te.textContent=$e,Qe=y(),lt=x("p"),lt.textContent=ut,et=y(),dt=x("p"),dt.textContent=pt,Q=y(),Ue=x("p"),Ue.textContent=vt,ce=y(),Ie=x("p"),Ie.textContent=At},l(B){St(e.$$.fragment,B),t=M(B),n=b(B,"P",{"data-svelte-h":!0}),C(n)!=="svelte-1v099qf"&&(n.textContent=a),s=M(B),c=b(B,"P",{"data-svelte-h":!0}),C(c)!=="svelte-1tfbix5"&&(c.textContent=r),u=M(B),d=b(B,"P",{"data-svelte-h":!0}),C(d)!=="svelte-sz4bo8"&&(d.textContent=p),v=M(B),f=b(B,"P",{"data-svelte-h":!0}),C(f)!=="svelte-10od9ci"&&(f.textContent=g),E=M(B),S=b(B,"P",{"data-svelte-h":!0}),C(S)!=="svelte-yeweyb"&&(S.textContent=h),m=M(B),R=b(B,"P",{"data-svelte-h":!0}),C(R)!=="svelte-1j91agc"&&(R.textContent=P),N=M(B),W=b(B,"P",{"data-svelte-h":!0}),C(W)!=="svelte-1t5iwwv"&&(W.textContent=I),z=M(B),F=b(B,"H2",{"data-svelte-h":!0}),C(F)!=="svelte-ux6muo"&&(F.textContent=A),T=M(B),O=b(B,"P",{"data-svelte-h":!0}),C(O)!=="svelte-rnggeo"&&(O.textContent=Z),K=M(B),Y=b(B,"P",{"data-svelte-h":!0}),C(Y)!=="svelte-1m1gxox"&&(Y.textContent=se),re=M(B),de=b(B,"P",{"data-svelte-h":!0}),C(de)!=="svelte-8hnozm"&&(de.textContent=J),De=M(B),ae=b(B,"P",{"data-svelte-h":!0}),C(ae)!=="svelte-vh89vv"&&(ae.textContent=Me),Je=M(B),je=b(B,"H2",{"data-svelte-h":!0}),C(je)!=="svelte-zfujpo"&&(je.textContent=ie),Ee=M(B),Re=b(B,"P",{"data-svelte-h":!0}),C(Re)!=="svelte-sagetj"&&(Re.textContent=we),ke=M(B),qe=b(B,"P",{"data-svelte-h":!0}),C(qe)!=="svelte-13j8ias"&&(qe.innerHTML=ze),at=M(B),q=b(B,"P",{"data-svelte-h":!0}),C(q)!=="svelte-otk5si"&&(q.textContent=Ye),nt=M(B),He=b(B,"H2",{"data-svelte-h":!0}),C(He)!=="svelte-15pgp9u"&&(He.textContent=Le),st=M(B),Ne=b(B,"P",{"data-svelte-h":!0}),C(Ne)!=="svelte-15m4iaq"&&(Ne.textContent=Fe),U=M(B),_=b(B,"P",{"data-svelte-h":!0}),C(_)!=="svelte-fd3vki"&&(_.textContent=H),xe=M(B),pe=b(B,"BLOCKQUOTE",{"data-svelte-h":!0}),C(pe)!=="svelte-1h14obb"&&(pe.innerHTML=ue),Ge=M(B),Se=b(B,"P",{"data-svelte-h":!0}),C(Se)!=="svelte-1hplq84"&&(Se.textContent=Pe),Ze=M(B),k=b(B,"BLOCKQUOTE",{"data-svelte-h":!0}),C(k)!=="svelte-c4jdxq"&&(k.innerHTML=he),tt=M(B),X=b(B,"P",{"data-svelte-h":!0}),C(X)!=="svelte-12vt2dj"&&(X.textContent=me),We=M(B),Ke=b(B,"P",{"data-svelte-h":!0}),C(Ke)!=="svelte-98c51j"&&(Ke.textContent=ct),G=M(B),Ce=b(B,"P",{"data-svelte-h":!0}),C(Ce)!=="svelte-sjk0ik"&&(Ce.textContent=be),ve=M(B),Te=b(B,"H2",{"data-svelte-h":!0}),C(Te)!=="svelte-7bymre"&&(Te.textContent=$e),Qe=M(B),lt=b(B,"P",{"data-svelte-h":!0}),C(lt)!=="svelte-810671"&&(lt.textContent=ut),et=M(B),dt=b(B,"P",{"data-svelte-h":!0}),C(dt)!=="svelte-1f3w6xr"&&(dt.textContent=pt),Q=M(B),Ue=b(B,"P",{"data-svelte-h":!0}),C(Ue)!=="svelte-1qurh8p"&&(Ue.textContent=vt),ce=M(B),Ie=b(B,"P",{"data-svelte-h":!0}),C(Ie)!=="svelte-2u7g7e"&&(Ie.textContent=At)},m(B,Xe){Ct(e,B,Xe),l(B,t,Xe),l(B,n,Xe),l(B,s,Xe),l(B,c,Xe),l(B,u,Xe),l(B,d,Xe),l(B,v,Xe),l(B,f,Xe),l(B,E,Xe),l(B,S,Xe),l(B,m,Xe),l(B,R,Xe),l(B,N,Xe),l(B,W,Xe),l(B,z,Xe),l(B,F,Xe),l(B,T,Xe),l(B,O,Xe),l(B,K,Xe),l(B,Y,Xe),l(B,re,Xe),l(B,de,Xe),l(B,De,Xe),l(B,ae,Xe),l(B,Je,Xe),l(B,je,Xe),l(B,Ee,Xe),l(B,Re,Xe),l(B,ke,Xe),l(B,qe,Xe),l(B,at,Xe),l(B,q,Xe),l(B,nt,Xe),l(B,He,Xe),l(B,st,Xe),l(B,Ne,Xe),l(B,U,Xe),l(B,_,Xe),l(B,xe,Xe),l(B,pe,Xe),l(B,Ge,Xe),l(B,Se,Xe),l(B,Ze,Xe),l(B,k,Xe),l(B,tt,Xe),l(B,X,Xe),l(B,We,Xe),l(B,Ke,Xe),l(B,G,Xe),l(B,Ce,Xe),l(B,ve,Xe),l(B,Te,Xe),l(B,Qe,Xe),l(B,lt,Xe),l(B,et,Xe),l(B,dt,Xe),l(B,Q,Xe),l(B,Ue,Xe),l(B,ce,Xe),l(B,Ie,Xe),ne=!0},p(B,[Xe]){const Nt={};Xe&1&&(Nt.$$scope={dirty:Xe,ctx:B}),e.$set(Nt)},i(B){ne||(ht(e.$$.fragment,B),ne=!0)},o(B){mt(e.$$.fragment,B),ne=!1},d(B){B&&(o(t),o(n),o(s),o(c),o(u),o(d),o(v),o(f),o(E),o(S),o(m),o(R),o(N),o(W),o(z),o(F),o(T),o(O),o(K),o(Y),o(re),o(de),o(De),o(ae),o(Je),o(je),o(Ee),o(Re),o(ke),o(qe),o(at),o(q),o(nt),o(He),o(st),o(Ne),o(U),o(_),o(xe),o(pe),o(Ge),o(Se),o(Ze),o(k),o(tt),o(X),o(We),o(Ke),o(G),o(Ce),o(ve),o(Te),o(Qe),o(lt),o(et),o(dt),o(Q),o(Ue),o(ce),o(Ie)),Et(e,B)}}}const ju={title:"🔴 Caso de la suite Cosby",slug:"caso-suite-cosby",coverImage:"/src/assets/posts-covers/blizzard.jpg",coverPosition:"normal",coverAuthor:"Annie Nyle",excerpt:"Repaso algunas experiencias con este caso, implicados, nuestra postura y resultados.",date:"2024-10-06T13:00:23.177Z",updated:"2024-10-06T13:00:23.903Z",hidden:!1,tags:["Personal","Tooling"],keywords:["Blizzard"],type:"default",fullReload:!1};class Wu extends Kt{constructor(e){super(),Jt(this,e,null,Gu,Zt,{})}}const $u=Object.freeze(Object.defineProperty({__proto__:null,default:Wu,metadata:ju},Symbol.toStringTag,{value:"Module"}));function Xu(i){let e,t;const n=i[1].default,a=$a(n,i,i[0],null);return{c(){e=x("span"),a&&a.c(),this.h()},l(s){e=b(s,"SPAN",{class:!0});var c=Gt(e);a&&a.l(c),c.forEach(o),this.h()},h(){yt(e,"class","no-wrap svelte-49cqox")},m(s,c){l(s,e,c),a&&a.m(e,null),t=!0},p(s,[c]){a&&a.p&&(!t||c&1)&&Xa(a,n,s,s[0],t?Za(n,s[0],c,null):Ya(s[0]),null)},i(s){t||(ht(a,s),t=!0)},o(s){mt(a,s),t=!1},d(s){s&&o(e),a&&a.d(s)}}}function Yu(i,e,t){let{$$slots:n={},$$scope:a}=e;return i.$$set=s=>{"$$scope"in s&&t(0,a=s.$$scope)},[a,n]}class br extends Kt{constructor(e){super(),Jt(this,e,Yu,Xu,Zt,{})}}const Zu=i=>({}),Nl=i=>({}),Ku=i=>({}),ql=i=>({});function Ju(i){let e,t,n,a,s;const c=i[2].left,r=$a(c,i,i[1],ql),u=i[2].right,d=$a(u,i,i[1],Nl);return{c(){e=x("div"),t=x("div"),r&&r.c(),n=y(),a=x("div"),d&&d.c(),this.h()},l(p){e=b(p,"DIV",{class:!0,style:!0});var v=Gt(e);t=b(v,"DIV",{class:!0});var f=Gt(t);r&&r.l(f),f.forEach(o),n=M(v),a=b(v,"DIV",{class:!0});var g=Gt(a);d&&d.l(g),g.forEach(o),v.forEach(o),this.h()},h(){yt(t,"class","columns-container__left svelte-j14ov3"),yt(a,"class","columns-container__right svelte-j14ov3"),yt(e,"class","columns-container svelte-j14ov3"),$n(e,"--gap",i[0]+"px")},m(p,v){l(p,e,v),It(e,t),r&&r.m(t,null),It(e,n),It(e,a),d&&d.m(a,null),s=!0},p(p,[v]){r&&r.p&&(!s||v&2)&&Xa(r,c,p,p[1],s?Za(c,p[1],v,Ku):Ya(p[1]),ql),d&&d.p&&(!s||v&2)&&Xa(d,u,p,p[1],s?Za(u,p[1],v,Zu):Ya(p[1]),Nl),(!s||v&1)&&$n(e,"--gap",p[0]+"px")},i(p){s||(ht(r,p),ht(d,p),s=!0)},o(p){mt(r,p),mt(d,p),s=!1},d(p){p&&o(e),r&&r.d(p),d&&d.d(p)}}}function Qu(i,e,t){let{$$slots:n={},$$scope:a}=e,{gap:s=0}=e;return i.$$set=c=>{"gap"in c&&t(0,s=c.gap),"$$scope"in c&&t(1,a=c.$$scope)},[s,a,n]}class Fl extends Kt{constructor(e){super(),Jt(this,e,Qu,Ju,Zt,{gap:0})}}function ed(i){let e,t;const n=i[1].default,a=$a(n,i,i[0],null);return{c(){e=x("span"),a&&a.c(),this.h()},l(s){e=b(s,"SPAN",{class:!0});var c=Gt(e);a&&a.l(c),c.forEach(o),this.h()},h(){yt(e,"class","line-through svelte-kze7de")},m(s,c){l(s,e,c),a&&a.m(e,null),t=!0},p(s,[c]){a&&a.p&&(!t||c&1)&&Xa(a,n,s,s[0],t?Za(n,s[0],c,null):Ya(s[0]),null)},i(s){t||(ht(a,s),t=!0)},o(s){mt(a,s),t=!1},d(s){s&&o(e),a&&a.d(s)}}}function td(i,e,t){let{$$slots:n={},$$scope:a}=e;return i.$$set=s=>{"$$scope"in s&&t(0,a=s.$$scope)},[a,n]}class Wc extends Kt{constructor(e){super(),Jt(this,e,td,ed,Zt,{})}}function nd(i){let e,t;return{c(){e=x("div"),t=x("div"),this.h()},l(n){e=b(n,"DIV",{class:!0});var a=Gt(e);t=b(a,"DIV",{class:!0,style:!0}),Gt(t).forEach(o),a.forEach(o),this.h()},h(){yt(t,"class","test-box svelte-1e8u39k"),$n(t,"width",i[0]+"px"),$n(t,"height",i[1]+"px"),wo(t,"test-box--expected",i[2]),yt(e,"class","example svelte-1e8u39k")},m(n,a){l(n,e,a),It(e,t)},p(n,[a]){a&1&&$n(t,"width",n[0]+"px"),a&2&&$n(t,"height",n[1]+"px"),a&4&&wo(t,"test-box--expected",n[2])},i:Ut,o:Ut,d(n){n&&o(e)}}}function id(i,e,t){let{width:n=250}=e,{height:a=150}=e,{showBorder:s=!1}=e;return i.$$set=c=>{"width"in c&&t(0,n=c.width),"height"in c&&t(1,a=c.height),"showBorder"in c&&t(2,s=c.showBorder)},[n,a,s]}class Ol extends Kt{constructor(e){super(),Jt(this,e,id,nd,Zt,{width:0,height:1,showBorder:2})}}function ad(i){let e,t,n,a;return{c(){e=x("div"),t=x("a"),n=x("img"),this.h()},l(s){e=b(s,"DIV",{class:!0});var c=Gt(e);t=b(c,"A",{href:!0,target:!0});var r=Gt(t);n=b(r,"IMG",{src:!0,alt:!0,class:!0}),r.forEach(o),c.forEach(o),this.h()},h(){Ao(n.src,a=i[0])||yt(n,"src",a),yt(n,"alt",i[1]),yt(n,"class","svelte-u0jlpn"),yt(t,"href",i[0]),yt(t,"target","_blank"),yt(e,"class","image-wrapper")},m(s,c){l(s,e,c),It(e,t),It(t,n)},p(s,c){c&1&&!Ao(n.src,a=s[0])&&yt(n,"src",a),c&2&&yt(n,"alt",s[1]),c&1&&yt(t,"href",s[0])},d(s){s&&o(e)}}}function sd(i){let e,t,n,a,s,c,r;return{c(){e=x("figure"),t=x("a"),n=x("img"),s=y(),c=x("figcaption"),r=new Lu(!1),this.h()},l(u){e=b(u,"FIGURE",{class:!0});var d=Gt(e);t=b(d,"A",{href:!0,target:!0});var p=Gt(t);n=b(p,"IMG",{src:!0,alt:!0,class:!0}),p.forEach(o),s=M(d),c=b(d,"FIGCAPTION",{class:!0});var v=Gt(c);r=Du(v,!1),v.forEach(o),d.forEach(o),this.h()},h(){Ao(n.src,a=i[0])||yt(n,"src",a),yt(n,"alt",i[1]),yt(n,"class","svelte-u0jlpn"),yt(t,"href",i[0]),yt(t,"target","_blank"),r.a=null,yt(c,"class","svelte-u0jlpn"),yt(e,"class","image-wrapper")},m(u,d){l(u,e,d),It(e,t),It(t,n),It(e,s),It(e,c),r.m(i[2],c)},p(u,d){d&1&&!Ao(n.src,a=u[0])&&yt(n,"src",a),d&2&&yt(n,"alt",u[1]),d&1&&yt(t,"href",u[0]),d&4&&r.p(u[2])},d(u){u&&o(e)}}}function od(i){let e;function t(s,c){return s[2]?sd:ad}let n=t(i),a=n(i);return{c(){a.c(),e=Rl()},l(s){a.l(s),e=Rl()},m(s,c){a.m(s,c),l(s,e,c)},p(s,[c]){n===(n=t(s))&&a?a.p(s,c):(a.d(1),a=n(s),a&&(a.c(),a.m(e.parentNode,e)))},i:Ut,o:Ut,d(s){s&&o(e),a.d(s)}}}function rd(i,e,t){let{src:n}=e,{alt:a}=e,{figCaption:s}=e;return i.$$set=c=>{"src"in c&&t(0,n=c.src),"alt"in c&&t(1,a=c.alt),"figCaption"in c&&t(2,s=c.figCaption)},[n,a,s]}class Ma extends Kt{constructor(e){super(),Jt(this,e,rd,od,Zt,{src:0,alt:1,figCaption:2})}}function ld(i){let e,t=`Acabo de publicar un material de presentación relacionado a prácticas que han
causado problemas críticos en múltiples sistemas. Puedes <a href="/avoidable-deaths-by-code">encontrarlo aquí</a>.`,n,a,s=`Es una pequeña recopilación de errores supercomunes junto a un recuento de
víctimas mortales por no considerarlos.`,c,r,u=`Todos los problemas que se presentan me los he topado al menos una vez en
auditorías de los últimos años, aunque no necesariamente vinculados a ningún accidente.
Otros profesionales han referenciado varios de estos errores
con trágicos accidentes y numerosas víctimas mortales.`,d,p,v="Sobre el número de muertos",f,g,E=`Los números NO son reales, los reales pueden ser menores o mayores, nadie lo
sabe, pero <strong>no es ninguna broma</strong>
ni hay que frivolizar con ello. Dicho esto, sí que se puede utilizar como crítica
a algo con lo que me he topado muchísimo en los últimos cinco años:
la falta de rigurosidad a la hora de hablar de muertos en discursos de
seguridad y control de calidad.`,S,h,m=`Hay formas de hablar de muertos con rigurosidad, sin dar cifras que no se tienen
y amparándose en casos reales. Un buen ejemplo se describe en el famoso vídeo
viral de la presentación de Álvaro Sauras, “La idiotez del coche eléctrico” y
el caso (o casos) de
los aceleradores defectuosos de Toyota. En él, se exponen relatos con datos
históricos, acordes y apropiados.`,R,P,N=`En dicho vídeo también se expone el famoso cálculo necrocapitalista de Ford,
donde se valora el coste de corregir un defecto en su flota de vehículos frente
al de indemnizar a la familia de los futuros muertos manteniendo
el defecto. Asumiremos ingenuamente y por salud mental, que estas prácticas ya
no se realizan, o no tan descaradamente.`,W,I,z=`Lo que nos encontramos en numerosos discursos de expertos se aleja
tangencialmente de la calidad da la presentacion de Sauras: opiniones y datos
sacados de la manga. Especialmente en aquellas presentaciones “de puertas para
dentro” y no publicadas.`,F,A,T=`Y es que ya he tenido que preguntar en no pocas ocasiones por el origen de las
fuentes, algo que puede percibirse violento, incluso aunque lo hagas en privado
tras la exposición. He llegado a escuchar a un profesor asegurar que la falta de llaves en
un if provocó la caída en picado al mar de avión de pasajeros de Boeing. La respuesta siempre suele ser la
misma: “no recuerdo ahora, fue de un estudio ahí…”, “me lo dijo Pepito que es un
reconocido experto en seguridad…”, etc.`,O,Z,K=`Lo cierto es que rara vez se revela código en los resultados de auditorías
internas, sin importar el daño que haya podido causar. Es realmente difícil
asociar fallos de programación concretos a víctimas mortales, no porque no se produzcan,
no porque no se haya determinado la causa, sino porque no se revela
públicamente el detalle. En su lugar se resume en “error o negligencia de programación”.`,Y,se,re=`¿Y la razón? A lo mejor te preguntas si es que los jueces son gilipollas o qué,
pero resulta que matar gente no es motivo para revelar tu inversión, amparado
por la ley de propiedad intelectual, aunque esto pudiera ayudar a que otros no
cometan el mismo error.`,de,J,De=`Doy fé de que en muchas auditorías se encuentran fallos que por muchísima suerte
no llegan a producir víctimas mortales, pero que eventualmente y sin lugar a
dudas las producirían de no haberse auditado. Las
auditorías suelen contar con al menos una clausula de confidencialidad, que
solo se podría romper en caso de que la empresa auditada no estuviera dispuesta
a iniciar un proceso con carácter inmediato para corregir el defecto
potencialmente mortal, paralizando cualquier servicio si es necesario.`,ae,Me,Je=`Todo esto hace que el número de víctimas habidas y por haber sea un completo
misterio, pero que las hay y las habrá, no cabe duda. Como sea, <strong>cualquier
alarmismo y exageración es bienvenida</strong> si eso
implica evitar accidentes mortales por malas prácticas de programación, y aún
más si viene acompañado de tips y soluciones.`,je,ie,Ee="Soluciones",Re,we,ke=`Los problemas seleccionados tienen algo en común: son fácilmente prevenibles
incluso de manera automática, y aún así siguen estando muy presentes en
múltiples desarrollos.`,qe,ze,at=`Algunos quedarían totalmente evidenciados con tan solo un correcto linter +
formateador. Otros se podrían prevenir con un flujo de trabajo que
implique una correcta especificación de requisitos y el desarrollo de tests
adecuados.`,q,Ye,nt=`Por supuesto, lo más importante es la divulgación y menos cultura punitiva para
no disuadir del informe de errores. Esto es un problema que afecta al desarrollo
de software en general, libre o privativo.`,He,Le,st=`Aclarar que estas soluciones deberían aplicarse siempre, haya o no
vidas humanas en juego, pues influyen en la calidad de cualquier desarrollo.`,Ne,Fe,U="Próximamente",_,H,xe=`Aprovecho a comentar que este mes de abril me encontraré por la península,
asistiendo a algunos eventos e impartiendo dos cursos relacionados al tema
de esta entrada:`,pe,ue,Ge=`<li>Valladolid. Del 1 al 4 de abril. Impartiendo un curso de “Seguridad en el desarrollo”
para la junta de Castilla y León.</li> <li>Mérida. Del 21 al 24 de abril. Impartiendo un curso de “Calidad del software, estándares y metodologías”, orientado
a ingenieros y/o técnicos de la Dirección General de Digitalización de la Administración de
la Consejería de Economía, Empleo y Transformación Digital de la Junta de Extremadura.</li>`,Se,Pe,Ze=`Entre medias quedo a disponibilidad para cualquier servicio presencial, algo que
rara vez realizo porque soy muy comodón de cara a salir de las islas.`;return{c(){e=x("p"),e.innerHTML=t,n=y(),a=x("p"),a.textContent=s,c=y(),r=x("p"),r.textContent=u,d=y(),p=x("h2"),p.textContent=v,f=y(),g=x("p"),g.innerHTML=E,S=y(),h=x("p"),h.textContent=m,R=y(),P=x("p"),P.textContent=N,W=y(),I=x("p"),I.textContent=z,F=y(),A=x("p"),A.textContent=T,O=y(),Z=x("p"),Z.textContent=K,Y=y(),se=x("p"),se.textContent=re,de=y(),J=x("p"),J.textContent=De,ae=y(),Me=x("p"),Me.innerHTML=Je,je=y(),ie=x("h2"),ie.textContent=Ee,Re=y(),we=x("p"),we.textContent=ke,qe=y(),ze=x("p"),ze.textContent=at,q=y(),Ye=x("p"),Ye.textContent=nt,He=y(),Le=x("p"),Le.textContent=st,Ne=y(),Fe=x("h3"),Fe.textContent=U,_=y(),H=x("p"),H.textContent=xe,pe=y(),ue=x("ul"),ue.innerHTML=Ge,Se=y(),Pe=x("p"),Pe.textContent=Ze},l(k){e=b(k,"P",{"data-svelte-h":!0}),C(e)!=="svelte-193tuby"&&(e.innerHTML=t),n=M(k),a=b(k,"P",{"data-svelte-h":!0}),C(a)!=="svelte-ushzad"&&(a.textContent=s),c=M(k),r=b(k,"P",{"data-svelte-h":!0}),C(r)!=="svelte-1bmx3ll"&&(r.textContent=u),d=M(k),p=b(k,"H2",{"data-svelte-h":!0}),C(p)!=="svelte-u87xh"&&(p.textContent=v),f=M(k),g=b(k,"P",{"data-svelte-h":!0}),C(g)!=="svelte-1avubgq"&&(g.innerHTML=E),S=M(k),h=b(k,"P",{"data-svelte-h":!0}),C(h)!=="svelte-6s9agx"&&(h.textContent=m),R=M(k),P=b(k,"P",{"data-svelte-h":!0}),C(P)!=="svelte-7qnmgu"&&(P.textContent=N),W=M(k),I=b(k,"P",{"data-svelte-h":!0}),C(I)!=="svelte-1crd2wp"&&(I.textContent=z),F=M(k),A=b(k,"P",{"data-svelte-h":!0}),C(A)!=="svelte-19dy5tb"&&(A.textContent=T),O=M(k),Z=b(k,"P",{"data-svelte-h":!0}),C(Z)!=="svelte-2xlq6y"&&(Z.textContent=K),Y=M(k),se=b(k,"P",{"data-svelte-h":!0}),C(se)!=="svelte-15uywsn"&&(se.textContent=re),de=M(k),J=b(k,"P",{"data-svelte-h":!0}),C(J)!=="svelte-2bhlcw"&&(J.textContent=De),ae=M(k),Me=b(k,"P",{"data-svelte-h":!0}),C(Me)!=="svelte-1xusxls"&&(Me.innerHTML=Je),je=M(k),ie=b(k,"H2",{"data-svelte-h":!0}),C(ie)!=="svelte-1h176z6"&&(ie.textContent=Ee),Re=M(k),we=b(k,"P",{"data-svelte-h":!0}),C(we)!=="svelte-10tbxbz"&&(we.textContent=ke),qe=M(k),ze=b(k,"P",{"data-svelte-h":!0}),C(ze)!=="svelte-duoq1h"&&(ze.textContent=at),q=M(k),Ye=b(k,"P",{"data-svelte-h":!0}),C(Ye)!=="svelte-1rdhacq"&&(Ye.textContent=nt),He=M(k),Le=b(k,"P",{"data-svelte-h":!0}),C(Le)!=="svelte-npn90g"&&(Le.textContent=st),Ne=M(k),Fe=b(k,"H3",{"data-svelte-h":!0}),C(Fe)!=="svelte-1x75mgt"&&(Fe.textContent=U),_=M(k),H=b(k,"P",{"data-svelte-h":!0}),C(H)!=="svelte-1wf9i2l"&&(H.textContent=xe),pe=M(k),ue=b(k,"UL",{"data-svelte-h":!0}),C(ue)!=="svelte-19q6d47"&&(ue.innerHTML=Ge),Se=M(k),Pe=b(k,"P",{"data-svelte-h":!0}),C(Pe)!=="svelte-7hbsr"&&(Pe.textContent=Ze)},m(k,he){l(k,e,he),l(k,n,he),l(k,a,he),l(k,c,he),l(k,r,he),l(k,d,he),l(k,p,he),l(k,f,he),l(k,g,he),l(k,S,he),l(k,h,he),l(k,R,he),l(k,P,he),l(k,W,he),l(k,I,he),l(k,F,he),l(k,A,he),l(k,O,he),l(k,Z,he),l(k,Y,he),l(k,se,he),l(k,de,he),l(k,J,he),l(k,ae,he),l(k,Me,he),l(k,je,he),l(k,ie,he),l(k,Re,he),l(k,we,he),l(k,qe,he),l(k,ze,he),l(k,q,he),l(k,Ye,he),l(k,He,he),l(k,Le,he),l(k,Ne,he),l(k,Fe,he),l(k,_,he),l(k,H,he),l(k,pe,he),l(k,ue,he),l(k,Se,he),l(k,Pe,he)},p:Ut,i:Ut,o:Ut,d(k){k&&(o(e),o(n),o(a),o(c),o(r),o(d),o(p),o(f),o(g),o(S),o(h),o(R),o(P),o(W),o(I),o(F),o(A),o(O),o(Z),o(Y),o(se),o(de),o(J),o(ae),o(Me),o(je),o(ie),o(Re),o(we),o(qe),o(ze),o(q),o(Ye),o(He),o(Le),o(Ne),o(Fe),o(_),o(H),o(pe),o(ue),o(Se),o(Pe))}}}const cd={title:"Cuántas muertes evitables...",slug:"cuantas-muertes-evitables",coverAuthor:"",excerpt:"He publicado una lista de errores comunes un pelín alarmista.",date:"2025-03-27T22:38:29.122Z",updated:"2025-03-27T22:38:29.122Z",hidden:!1,tags:["TDD/BDD/ATDD","Ingeniería software"],keywords:["smells","tests"],type:"default",coverPosition:"top"};class ud extends Kt{constructor(e){super(),Jt(this,e,null,ld,Zt,{})}}const dd=Object.freeze(Object.defineProperty({__proto__:null,default:ud,metadata:cd},Symbol.toStringTag,{value:"Module"}));function pd(i){let e;return{c(){e=x("canvas"),this.h()},l(t){e=b(t,"CANVAS",{class:!0,id:!0}),Gt(e).forEach(o),this.h()},h(){yt(e,"class","three-example"),yt(e,"id",i[0])},m(t,n){l(t,e,n)},p(t,[n]){n&1&&yt(e,"id",t[0])},i:Ut,o:Ut,d(t){t&&o(e)}}}function fd(i,e,t){let{sceneManager:n}=e,{id:a}=e;return jc(()=>{n.isInitialized()?location.reload():n.getInstance().startRenderLoop()}),Ru(()=>{n.dispose()}),i.$$set=s=>{"sceneManager"in s&&t(1,n=s.sceneManager),"id"in s&&t(0,a=s.id)},[a,n]}class hd extends Kt{constructor(e){super(),Jt(this,e,fd,pd,Zt,{sceneManager:1,id:0})}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const il="168",md=0,zl=1,vd=2,$c=1,gd=2,Ai=3,Gi=0,On=1,wi=2,ki=0,Ga=1,Bl=2,Hl=3,kl=4,_d=5,_a=100,xd=101,bd=102,yd=103,Md=104,Sd=200,Cd=201,Ed=202,Td=203,yr=204,Mr=205,Ad=206,wd=207,Pd=208,Rd=209,Ld=210,Dd=211,Ud=212,Id=213,Nd=214,qd=0,Fd=1,Od=2,Po=3,zd=4,Bd=5,Hd=6,kd=7,al=0,Vd=1,Gd=2,Vi=0,jd=1,Wd=2,$d=3,Xd=4,Yd=5,Zd=6,Kd=7,Xc=300,Ka=301,Ja=302,Sr=303,Cr=304,Fo=306,Er=1e3,ba=1001,Tr=1002,Xn=1003,Jd=1004,Xs=1005,Qn=1006,Go=1007,ya=1008,Li=1009,Yc=1010,Zc=1011,Ps=1012,sl=1013,Sa=1014,Pi=1015,Ls=1016,ol=1017,rl=1018,Qa=1020,Kc=35902,Jc=1021,Qc=1022,ei=1023,eu=1024,tu=1025,ja=1026,es=1027,nu=1028,ll=1029,iu=1030,cl=1031,ul=1033,yo=33776,Mo=33777,So=33778,Co=33779,Ar=35840,wr=35841,Pr=35842,Rr=35843,Lr=36196,Dr=37492,Ur=37496,Ir=37808,Nr=37809,qr=37810,Fr=37811,Or=37812,zr=37813,Br=37814,Hr=37815,kr=37816,Vr=37817,Gr=37818,jr=37819,Wr=37820,$r=37821,Eo=36492,Xr=36494,Yr=36495,au=36283,Zr=36284,Kr=36285,Jr=36286,Qd=3200,ep=3201,su=0,tp=1,Hi="",oi="srgb",Wi="srgb-linear",dl="display-p3",Oo="display-p3-linear",Ro="linear",$t="srgb",Lo="rec709",Do="p3",Ta=7680,Vl=519,np=512,ip=513,ap=514,ou=515,sp=516,op=517,rp=518,lp=519,Gl=35044,jl="300 es",Ri=2e3,Uo=2001;class ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let s=0,c=a.length;s<c;s++)a[s].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jo=Math.PI/180,Qr=180/Math.PI;function Ds(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function qn(i,e,t){return Math.max(e,Math.min(t,i))}function cp(i,e){return(i%e+e)%e}function Wo(i,e,t){return(1-t)*i+t*e}function xs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ot{constructor(e=0,t=0){Ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),s=this.x-e.x,c=this.y-e.y;return this.x=s*n-c*a+e.x,this.y=s*a+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lt{constructor(e,t,n,a,s,c,r,u,d){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,c,r,u,d)}set(e,t,n,a,s,c,r,u,d){const p=this.elements;return p[0]=e,p[1]=a,p[2]=r,p[3]=t,p[4]=s,p[5]=u,p[6]=n,p[7]=c,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,s=this.elements,c=n[0],r=n[3],u=n[6],d=n[1],p=n[4],v=n[7],f=n[2],g=n[5],E=n[8],S=a[0],h=a[3],m=a[6],R=a[1],P=a[4],N=a[7],W=a[2],I=a[5],z=a[8];return s[0]=c*S+r*R+u*W,s[3]=c*h+r*P+u*I,s[6]=c*m+r*N+u*z,s[1]=d*S+p*R+v*W,s[4]=d*h+p*P+v*I,s[7]=d*m+p*N+v*z,s[2]=f*S+g*R+E*W,s[5]=f*h+g*P+E*I,s[8]=f*m+g*N+E*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],c=e[4],r=e[5],u=e[6],d=e[7],p=e[8];return t*c*p-t*r*d-n*s*p+n*r*u+a*s*d-a*c*u}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],c=e[4],r=e[5],u=e[6],d=e[7],p=e[8],v=p*c-r*d,f=r*u-p*s,g=d*s-c*u,E=t*v+n*f+a*g;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/E;return e[0]=v*S,e[1]=(a*d-p*n)*S,e[2]=(r*n-a*c)*S,e[3]=f*S,e[4]=(p*t-a*u)*S,e[5]=(a*s-r*t)*S,e[6]=g*S,e[7]=(n*u-d*t)*S,e[8]=(c*t-n*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,s,c,r){const u=Math.cos(s),d=Math.sin(s);return this.set(n*u,n*d,-n*(u*c+d*r)+c+e,-a*d,a*u,-a*(-d*c+u*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply($o.makeScale(e,t)),this}rotate(e){return this.premultiply($o.makeRotation(-e)),this}translate(e,t){return this.premultiply($o.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $o=new Lt;function ru(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Io(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function up(){const i=Io("canvas");return i.style.display="block",i}const Wl={};function ws(i){i in Wl||(Wl[i]=!0,console.warn(i))}function dp(i,e,t){return new Promise(function(n,a){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const $l=new Lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xl=new Lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bs={[Wi]:{transfer:Ro,primaries:Lo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[oi]:{transfer:$t,primaries:Lo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Oo]:{transfer:Ro,primaries:Do,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Xl),fromReference:i=>i.applyMatrix3($l)},[dl]:{transfer:$t,primaries:Do,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Xl),fromReference:i=>i.applyMatrix3($l).convertLinearToSRGB()}},pp=new Set([Wi,Oo]),kt={enabled:!0,_workingColorSpace:Wi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!pp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=bs[e].toReference,a=bs[t].fromReference;return a(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return bs[i].primaries},getTransfer:function(i){return i===Hi?Ro:bs[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(bs[e].luminanceCoefficients)}};function Wa(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Aa;class fp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Aa===void 0&&(Aa=Io("canvas")),Aa.width=e.width,Aa.height=e.height;const n=Aa.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Aa}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Io("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),s=a.data;for(let c=0;c<s.length;c++)s[c]=Wa(s[c]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wa(t[n]/255)*255):t[n]=Wa(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hp=0;class lu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Ds(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let c=0,r=a.length;c<r;c++)a[c].isDataTexture?s.push(Yo(a[c].image)):s.push(Yo(a[c]))}else s=Yo(a);n.url=s}return t||(e.images[this.uuid]=n),n}}function Yo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mp=0;class zn extends ns{constructor(e=zn.DEFAULT_IMAGE,t=zn.DEFAULT_MAPPING,n=ba,a=ba,s=Qn,c=ya,r=ei,u=Li,d=zn.DEFAULT_ANISOTROPY,p=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Ds(),this.name="",this.source=new lu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=s,this.minFilter=c,this.anisotropy=d,this.format=r,this.internalFormat=null,this.type=u,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Er:e.x=e.x-Math.floor(e.x);break;case ba:e.x=e.x<0?0:1;break;case Tr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Er:e.y=e.y-Math.floor(e.y);break;case ba:e.y=e.y<0?0:1;break;case Tr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Xc;zn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,t=0,n=0,a=1){sn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,s=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*a+c[12]*s,this.y=c[1]*t+c[5]*n+c[9]*a+c[13]*s,this.z=c[2]*t+c[6]*n+c[10]*a+c[14]*s,this.w=c[3]*t+c[7]*n+c[11]*a+c[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,s;const u=e.elements,d=u[0],p=u[4],v=u[8],f=u[1],g=u[5],E=u[9],S=u[2],h=u[6],m=u[10];if(Math.abs(p-f)<.01&&Math.abs(v-S)<.01&&Math.abs(E-h)<.01){if(Math.abs(p+f)<.1&&Math.abs(v+S)<.1&&Math.abs(E+h)<.1&&Math.abs(d+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(d+1)/2,N=(g+1)/2,W=(m+1)/2,I=(p+f)/4,z=(v+S)/4,F=(E+h)/4;return P>N&&P>W?P<.01?(n=0,a=.707106781,s=.707106781):(n=Math.sqrt(P),a=I/n,s=z/n):N>W?N<.01?(n=.707106781,a=0,s=.707106781):(a=Math.sqrt(N),n=I/a,s=F/a):W<.01?(n=.707106781,a=.707106781,s=0):(s=Math.sqrt(W),n=z/s,a=F/s),this.set(n,a,s,t),this}let R=Math.sqrt((h-E)*(h-E)+(v-S)*(v-S)+(f-p)*(f-p));return Math.abs(R)<.001&&(R=1),this.x=(h-E)/R,this.y=(v-S)/R,this.z=(f-p)/R,this.w=Math.acos((d+g+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vp extends ns{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t);const a={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new zn(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const c=n.count;for(let r=0;r<c;r++)this.textures[r]=s.clone(),this.textures[r].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ca extends vp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class cu extends zn{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gp extends zn{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Us{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,s,c,r){let u=n[a+0],d=n[a+1],p=n[a+2],v=n[a+3];const f=s[c+0],g=s[c+1],E=s[c+2],S=s[c+3];if(r===0){e[t+0]=u,e[t+1]=d,e[t+2]=p,e[t+3]=v;return}if(r===1){e[t+0]=f,e[t+1]=g,e[t+2]=E,e[t+3]=S;return}if(v!==S||u!==f||d!==g||p!==E){let h=1-r;const m=u*f+d*g+p*E+v*S,R=m>=0?1:-1,P=1-m*m;if(P>Number.EPSILON){const W=Math.sqrt(P),I=Math.atan2(W,m*R);h=Math.sin(h*I)/W,r=Math.sin(r*I)/W}const N=r*R;if(u=u*h+f*N,d=d*h+g*N,p=p*h+E*N,v=v*h+S*N,h===1-r){const W=1/Math.sqrt(u*u+d*d+p*p+v*v);u*=W,d*=W,p*=W,v*=W}}e[t]=u,e[t+1]=d,e[t+2]=p,e[t+3]=v}static multiplyQuaternionsFlat(e,t,n,a,s,c){const r=n[a],u=n[a+1],d=n[a+2],p=n[a+3],v=s[c],f=s[c+1],g=s[c+2],E=s[c+3];return e[t]=r*E+p*v+u*g-d*f,e[t+1]=u*E+p*f+d*v-r*g,e[t+2]=d*E+p*g+r*f-u*v,e[t+3]=p*E-r*v-u*f-d*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,s=e._z,c=e._order,r=Math.cos,u=Math.sin,d=r(n/2),p=r(a/2),v=r(s/2),f=u(n/2),g=u(a/2),E=u(s/2);switch(c){case"XYZ":this._x=f*p*v+d*g*E,this._y=d*g*v-f*p*E,this._z=d*p*E+f*g*v,this._w=d*p*v-f*g*E;break;case"YXZ":this._x=f*p*v+d*g*E,this._y=d*g*v-f*p*E,this._z=d*p*E-f*g*v,this._w=d*p*v+f*g*E;break;case"ZXY":this._x=f*p*v-d*g*E,this._y=d*g*v+f*p*E,this._z=d*p*E+f*g*v,this._w=d*p*v-f*g*E;break;case"ZYX":this._x=f*p*v-d*g*E,this._y=d*g*v+f*p*E,this._z=d*p*E-f*g*v,this._w=d*p*v+f*g*E;break;case"YZX":this._x=f*p*v+d*g*E,this._y=d*g*v+f*p*E,this._z=d*p*E-f*g*v,this._w=d*p*v-f*g*E;break;case"XZY":this._x=f*p*v-d*g*E,this._y=d*g*v-f*p*E,this._z=d*p*E+f*g*v,this._w=d*p*v+f*g*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],s=t[8],c=t[1],r=t[5],u=t[9],d=t[2],p=t[6],v=t[10],f=n+r+v;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(p-u)*g,this._y=(s-d)*g,this._z=(c-a)*g}else if(n>r&&n>v){const g=2*Math.sqrt(1+n-r-v);this._w=(p-u)/g,this._x=.25*g,this._y=(a+c)/g,this._z=(s+d)/g}else if(r>v){const g=2*Math.sqrt(1+r-n-v);this._w=(s-d)/g,this._x=(a+c)/g,this._y=.25*g,this._z=(u+p)/g}else{const g=2*Math.sqrt(1+v-n-r);this._w=(c-a)/g,this._x=(s+d)/g,this._y=(u+p)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,s=e._z,c=e._w,r=t._x,u=t._y,d=t._z,p=t._w;return this._x=n*p+c*r+a*d-s*u,this._y=a*p+c*u+s*r-n*d,this._z=s*p+c*d+n*u-a*r,this._w=c*p-n*r-a*u-s*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,a=this._y,s=this._z,c=this._w;let r=c*e._w+n*e._x+a*e._y+s*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=c,this._x=n,this._y=a,this._z=s,this;const u=1-r*r;if(u<=Number.EPSILON){const g=1-t;return this._w=g*c+t*this._w,this._x=g*n+t*this._x,this._y=g*a+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const d=Math.sqrt(u),p=Math.atan2(d,r),v=Math.sin((1-t)*p)/d,f=Math.sin(t*p)/d;return this._w=c*v+this._w*f,this._x=n*v+this._x*f,this._y=a*v+this._y*f,this._z=s*v+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class _e{constructor(e=0,t=0,n=0){_e.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*a,this.y=s[1]*t+s[4]*n+s[7]*a,this.z=s[2]*t+s[5]*n+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,s=e.elements,c=1/(s[3]*t+s[7]*n+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*a+s[12])*c,this.y=(s[1]*t+s[5]*n+s[9]*a+s[13])*c,this.z=(s[2]*t+s[6]*n+s[10]*a+s[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,s=e.x,c=e.y,r=e.z,u=e.w,d=2*(c*a-r*n),p=2*(r*t-s*a),v=2*(s*n-c*t);return this.x=t+u*d+c*v-r*p,this.y=n+u*p+r*d-s*v,this.z=a+u*v+s*p-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a,this.y=s[1]*t+s[5]*n+s[9]*a,this.z=s[2]*t+s[6]*n+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,s=e.z,c=t.x,r=t.y,u=t.z;return this.x=a*u-s*r,this.y=s*c-n*u,this.z=n*r-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zo.copy(this).projectOnVector(e),this.sub(Zo)}reflect(e){return this.sub(Zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zo=new _e,Yl=new Us;class Is{constructor(e=new _e(1/0,1/0,1/0),t=new _e(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let c=0,r=s.count;c<r;c++)e.isMesh===!0?e.getVertexPosition(c,Zn):Zn.fromBufferAttribute(s,c),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ys.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox)),Ys.applyMatrix4(e.matrixWorld),this.union(Ys)}const a=e.children;for(let s=0,c=a.length;s<c;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),Zs.subVectors(this.max,ys),wa.subVectors(e.a,ys),Pa.subVectors(e.b,ys),Ra.subVectors(e.c,ys),Ni.subVectors(Pa,wa),qi.subVectors(Ra,Pa),ca.subVectors(wa,Ra);let t=[0,-Ni.z,Ni.y,0,-qi.z,qi.y,0,-ca.z,ca.y,Ni.z,0,-Ni.x,qi.z,0,-qi.x,ca.z,0,-ca.x,-Ni.y,Ni.x,0,-qi.y,qi.x,0,-ca.y,ca.x,0];return!Ko(t,wa,Pa,Ra,Zs)||(t=[1,0,0,0,1,0,0,0,1],!Ko(t,wa,Pa,Ra,Zs))?!1:(Ks.crossVectors(Ni,qi),t=[Ks.x,Ks.y,Ks.z],Ko(t,wa,Pa,Ra,Zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mi=[new _e,new _e,new _e,new _e,new _e,new _e,new _e,new _e],Zn=new _e,Ys=new Is,wa=new _e,Pa=new _e,Ra=new _e,Ni=new _e,qi=new _e,ca=new _e,ys=new _e,Zs=new _e,Ks=new _e,ua=new _e;function Ko(i,e,t,n,a){for(let s=0,c=i.length-3;s<=c;s+=3){ua.fromArray(i,s);const r=a.x*Math.abs(ua.x)+a.y*Math.abs(ua.y)+a.z*Math.abs(ua.z),u=e.dot(ua),d=t.dot(ua),p=n.dot(ua);if(Math.max(-Math.max(u,d,p),Math.min(u,d,p))>r)return!1}return!0}const _p=new Is,Ms=new _e,Jo=new _e;class zo{constructor(e=new _e,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_p.setFromPoints(e).getCenter(n);let a=0;for(let s=0,c=e.length;s<c;s++)a=Math.max(a,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const t=Ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(Ms,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(Jo)),this.expandByPoint(Ms.copy(e.center).sub(Jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Si=new _e,Qo=new _e,Js=new _e,Fi=new _e,er=new _e,Qs=new _e,tr=new _e;class uu{constructor(e=new _e,t=new _e(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){Qo.copy(e).add(t).multiplyScalar(.5),Js.copy(t).sub(e).normalize(),Fi.copy(this.origin).sub(Qo);const s=e.distanceTo(t)*.5,c=-this.direction.dot(Js),r=Fi.dot(this.direction),u=-Fi.dot(Js),d=Fi.lengthSq(),p=Math.abs(1-c*c);let v,f,g,E;if(p>0)if(v=c*u-r,f=c*r-u,E=s*p,v>=0)if(f>=-E)if(f<=E){const S=1/p;v*=S,f*=S,g=v*(v+c*f+2*r)+f*(c*v+f+2*u)+d}else f=s,v=Math.max(0,-(c*f+r)),g=-v*v+f*(f+2*u)+d;else f=-s,v=Math.max(0,-(c*f+r)),g=-v*v+f*(f+2*u)+d;else f<=-E?(v=Math.max(0,-(-c*s+r)),f=v>0?-s:Math.min(Math.max(-s,-u),s),g=-v*v+f*(f+2*u)+d):f<=E?(v=0,f=Math.min(Math.max(-s,-u),s),g=f*(f+2*u)+d):(v=Math.max(0,-(c*s+r)),f=v>0?s:Math.min(Math.max(-s,-u),s),g=-v*v+f*(f+2*u)+d);else f=c>0?-s:s,v=Math.max(0,-(c*f+r)),g=-v*v+f*(f+2*u)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Qo).addScaledVector(Js,f),g}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const n=Si.dot(this.direction),a=Si.dot(Si)-n*n,s=e.radius*e.radius;if(a>s)return null;const c=Math.sqrt(s-a),r=n-c,u=n+c;return u<0?null:r<0?this.at(u,t):this.at(r,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,s,c,r,u;const d=1/this.direction.x,p=1/this.direction.y,v=1/this.direction.z,f=this.origin;return d>=0?(n=(e.min.x-f.x)*d,a=(e.max.x-f.x)*d):(n=(e.max.x-f.x)*d,a=(e.min.x-f.x)*d),p>=0?(s=(e.min.y-f.y)*p,c=(e.max.y-f.y)*p):(s=(e.max.y-f.y)*p,c=(e.min.y-f.y)*p),n>c||s>a||((s>n||isNaN(n))&&(n=s),(c<a||isNaN(a))&&(a=c),v>=0?(r=(e.min.z-f.z)*v,u=(e.max.z-f.z)*v):(r=(e.max.z-f.z)*v,u=(e.min.z-f.z)*v),n>u||r>a)||((r>n||n!==n)&&(n=r),(u<a||a!==a)&&(a=u),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,a,s){er.subVectors(t,e),Qs.subVectors(n,e),tr.crossVectors(er,Qs);let c=this.direction.dot(tr),r;if(c>0){if(a)return null;r=1}else if(c<0)r=-1,c=-c;else return null;Fi.subVectors(this.origin,e);const u=r*this.direction.dot(Qs.crossVectors(Fi,Qs));if(u<0)return null;const d=r*this.direction.dot(er.cross(Fi));if(d<0||u+d>c)return null;const p=-r*Fi.dot(tr);return p<0?null:this.at(p/c,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,t,n,a,s,c,r,u,d,p,v,f,g,E,S,h){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,c,r,u,d,p,v,f,g,E,S,h)}set(e,t,n,a,s,c,r,u,d,p,v,f,g,E,S,h){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=a,m[1]=s,m[5]=c,m[9]=r,m[13]=u,m[2]=d,m[6]=p,m[10]=v,m[14]=f,m[3]=g,m[7]=E,m[11]=S,m[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,a=1/La.setFromMatrixColumn(e,0).length(),s=1/La.setFromMatrixColumn(e,1).length(),c=1/La.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,s=e.z,c=Math.cos(n),r=Math.sin(n),u=Math.cos(a),d=Math.sin(a),p=Math.cos(s),v=Math.sin(s);if(e.order==="XYZ"){const f=c*p,g=c*v,E=r*p,S=r*v;t[0]=u*p,t[4]=-u*v,t[8]=d,t[1]=g+E*d,t[5]=f-S*d,t[9]=-r*u,t[2]=S-f*d,t[6]=E+g*d,t[10]=c*u}else if(e.order==="YXZ"){const f=u*p,g=u*v,E=d*p,S=d*v;t[0]=f+S*r,t[4]=E*r-g,t[8]=c*d,t[1]=c*v,t[5]=c*p,t[9]=-r,t[2]=g*r-E,t[6]=S+f*r,t[10]=c*u}else if(e.order==="ZXY"){const f=u*p,g=u*v,E=d*p,S=d*v;t[0]=f-S*r,t[4]=-c*v,t[8]=E+g*r,t[1]=g+E*r,t[5]=c*p,t[9]=S-f*r,t[2]=-c*d,t[6]=r,t[10]=c*u}else if(e.order==="ZYX"){const f=c*p,g=c*v,E=r*p,S=r*v;t[0]=u*p,t[4]=E*d-g,t[8]=f*d+S,t[1]=u*v,t[5]=S*d+f,t[9]=g*d-E,t[2]=-d,t[6]=r*u,t[10]=c*u}else if(e.order==="YZX"){const f=c*u,g=c*d,E=r*u,S=r*d;t[0]=u*p,t[4]=S-f*v,t[8]=E*v+g,t[1]=v,t[5]=c*p,t[9]=-r*p,t[2]=-d*p,t[6]=g*v+E,t[10]=f-S*v}else if(e.order==="XZY"){const f=c*u,g=c*d,E=r*u,S=r*d;t[0]=u*p,t[4]=-v,t[8]=d*p,t[1]=f*v+S,t[5]=c*p,t[9]=g*v-E,t[2]=E*v-g,t[6]=r*p,t[10]=S*v+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xp,e,bp)}lookAt(e,t,n){const a=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Oi.crossVectors(n,Bn),Oi.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Oi.crossVectors(n,Bn)),Oi.normalize(),eo.crossVectors(Bn,Oi),a[0]=Oi.x,a[4]=eo.x,a[8]=Bn.x,a[1]=Oi.y,a[5]=eo.y,a[9]=Bn.y,a[2]=Oi.z,a[6]=eo.z,a[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,s=this.elements,c=n[0],r=n[4],u=n[8],d=n[12],p=n[1],v=n[5],f=n[9],g=n[13],E=n[2],S=n[6],h=n[10],m=n[14],R=n[3],P=n[7],N=n[11],W=n[15],I=a[0],z=a[4],F=a[8],A=a[12],T=a[1],O=a[5],Z=a[9],K=a[13],Y=a[2],se=a[6],re=a[10],de=a[14],J=a[3],De=a[7],ae=a[11],Me=a[15];return s[0]=c*I+r*T+u*Y+d*J,s[4]=c*z+r*O+u*se+d*De,s[8]=c*F+r*Z+u*re+d*ae,s[12]=c*A+r*K+u*de+d*Me,s[1]=p*I+v*T+f*Y+g*J,s[5]=p*z+v*O+f*se+g*De,s[9]=p*F+v*Z+f*re+g*ae,s[13]=p*A+v*K+f*de+g*Me,s[2]=E*I+S*T+h*Y+m*J,s[6]=E*z+S*O+h*se+m*De,s[10]=E*F+S*Z+h*re+m*ae,s[14]=E*A+S*K+h*de+m*Me,s[3]=R*I+P*T+N*Y+W*J,s[7]=R*z+P*O+N*se+W*De,s[11]=R*F+P*Z+N*re+W*ae,s[15]=R*A+P*K+N*de+W*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],s=e[12],c=e[1],r=e[5],u=e[9],d=e[13],p=e[2],v=e[6],f=e[10],g=e[14],E=e[3],S=e[7],h=e[11],m=e[15];return E*(+s*u*v-a*d*v-s*r*f+n*d*f+a*r*g-n*u*g)+S*(+t*u*g-t*d*f+s*c*f-a*c*g+a*d*p-s*u*p)+h*(+t*d*v-t*r*g-s*c*v+n*c*g+s*r*p-n*d*p)+m*(-a*r*p-t*u*v+t*r*f+a*c*v-n*c*f+n*u*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],c=e[4],r=e[5],u=e[6],d=e[7],p=e[8],v=e[9],f=e[10],g=e[11],E=e[12],S=e[13],h=e[14],m=e[15],R=v*h*d-S*f*d+S*u*g-r*h*g-v*u*m+r*f*m,P=E*f*d-p*h*d-E*u*g+c*h*g+p*u*m-c*f*m,N=p*S*d-E*v*d+E*r*g-c*S*g-p*r*m+c*v*m,W=E*v*u-p*S*u-E*r*f+c*S*f+p*r*h-c*v*h,I=t*R+n*P+a*N+s*W;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/I;return e[0]=R*z,e[1]=(S*f*s-v*h*s-S*a*g+n*h*g+v*a*m-n*f*m)*z,e[2]=(r*h*s-S*u*s+S*a*d-n*h*d-r*a*m+n*u*m)*z,e[3]=(v*u*s-r*f*s-v*a*d+n*f*d+r*a*g-n*u*g)*z,e[4]=P*z,e[5]=(p*h*s-E*f*s+E*a*g-t*h*g-p*a*m+t*f*m)*z,e[6]=(E*u*s-c*h*s-E*a*d+t*h*d+c*a*m-t*u*m)*z,e[7]=(c*f*s-p*u*s+p*a*d-t*f*d-c*a*g+t*u*g)*z,e[8]=N*z,e[9]=(E*v*s-p*S*s-E*n*g+t*S*g+p*n*m-t*v*m)*z,e[10]=(c*S*s-E*r*s+E*n*d-t*S*d-c*n*m+t*r*m)*z,e[11]=(p*r*s-c*v*s-p*n*d+t*v*d+c*n*g-t*r*g)*z,e[12]=W*z,e[13]=(p*S*a-E*v*a+E*n*f-t*S*f-p*n*h+t*v*h)*z,e[14]=(E*r*a-c*S*a-E*n*u+t*S*u+c*n*h-t*r*h)*z,e[15]=(c*v*a-p*r*a+p*n*u-t*v*u-c*n*f+t*r*f)*z,this}scale(e){const t=this.elements,n=e.x,a=e.y,s=e.z;return t[0]*=n,t[4]*=a,t[8]*=s,t[1]*=n,t[5]*=a,t[9]*=s,t[2]*=n,t[6]*=a,t[10]*=s,t[3]*=n,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),s=1-n,c=e.x,r=e.y,u=e.z,d=s*c,p=s*r;return this.set(d*c+n,d*r-a*u,d*u+a*r,0,d*r+a*u,p*r+n,p*u-a*c,0,d*u-a*r,p*u+a*c,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,s,c){return this.set(1,n,s,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,s=t._x,c=t._y,r=t._z,u=t._w,d=s+s,p=c+c,v=r+r,f=s*d,g=s*p,E=s*v,S=c*p,h=c*v,m=r*v,R=u*d,P=u*p,N=u*v,W=n.x,I=n.y,z=n.z;return a[0]=(1-(S+m))*W,a[1]=(g+N)*W,a[2]=(E-P)*W,a[3]=0,a[4]=(g-N)*I,a[5]=(1-(f+m))*I,a[6]=(h+R)*I,a[7]=0,a[8]=(E+P)*z,a[9]=(h-R)*z,a[10]=(1-(f+S))*z,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;let s=La.set(a[0],a[1],a[2]).length();const c=La.set(a[4],a[5],a[6]).length(),r=La.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],Kn.copy(this);const d=1/s,p=1/c,v=1/r;return Kn.elements[0]*=d,Kn.elements[1]*=d,Kn.elements[2]*=d,Kn.elements[4]*=p,Kn.elements[5]*=p,Kn.elements[6]*=p,Kn.elements[8]*=v,Kn.elements[9]*=v,Kn.elements[10]*=v,t.setFromRotationMatrix(Kn),n.x=s,n.y=c,n.z=r,this}makePerspective(e,t,n,a,s,c,r=Ri){const u=this.elements,d=2*s/(t-e),p=2*s/(n-a),v=(t+e)/(t-e),f=(n+a)/(n-a);let g,E;if(r===Ri)g=-(c+s)/(c-s),E=-2*c*s/(c-s);else if(r===Uo)g=-c/(c-s),E=-c*s/(c-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return u[0]=d,u[4]=0,u[8]=v,u[12]=0,u[1]=0,u[5]=p,u[9]=f,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=E,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,a,s,c,r=Ri){const u=this.elements,d=1/(t-e),p=1/(n-a),v=1/(c-s),f=(t+e)*d,g=(n+a)*p;let E,S;if(r===Ri)E=(c+s)*v,S=-2*v;else if(r===Uo)E=s*v,S=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return u[0]=2*d,u[4]=0,u[8]=0,u[12]=-f,u[1]=0,u[5]=2*p,u[9]=0,u[13]=-g,u[2]=0,u[6]=0,u[10]=S,u[14]=-E,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const La=new _e,Kn=new tn,xp=new _e(0,0,0),bp=new _e(1,1,1),Oi=new _e,eo=new _e,Bn=new _e,Zl=new tn,Kl=new Us;class ui{constructor(e=0,t=0,n=0,a=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,s=a[0],c=a[4],r=a[8],u=a[1],d=a[5],p=a[9],v=a[2],f=a[6],g=a[10];switch(t){case"XYZ":this._y=Math.asin(qn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-p,g),this._z=Math.atan2(-c,s)):(this._x=Math.atan2(f,d),this._z=0);break;case"YXZ":this._x=Math.asin(-qn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(r,g),this._z=Math.atan2(u,d)):(this._y=Math.atan2(-v,s),this._z=0);break;case"ZXY":this._x=Math.asin(qn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-v,g),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-qn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(qn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-v,s)):(this._x=0,this._y=Math.atan2(r,g));break;case"XZY":this._z=Math.asin(-qn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(f,d),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-p,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kl.setFromEuler(this),this.setFromQuaternion(Kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class du{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yp=0;const Jl=new _e,Da=new Us,Ci=new tn,to=new _e,Ss=new _e,Mp=new _e,Sp=new Us,Ql=new _e(1,0,0),ec=new _e(0,1,0),tc=new _e(0,0,1),nc={type:"added"},Cp={type:"removed"},Ua={type:"childadded",child:null},nr={type:"childremoved",child:null};class on extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new _e,t=new ui,n=new Us,a=new _e(1,1,1);function s(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new tn},normalMatrix:{value:new Lt}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new du,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Da.setFromAxisAngle(e,t),this.quaternion.multiply(Da),this}rotateOnWorldAxis(e,t){return Da.setFromAxisAngle(e,t),this.quaternion.premultiply(Da),this}rotateX(e){return this.rotateOnAxis(Ql,e)}rotateY(e){return this.rotateOnAxis(ec,e)}rotateZ(e){return this.rotateOnAxis(tc,e)}translateOnAxis(e,t){return Jl.copy(e).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ql,e)}translateY(e){return this.translateOnAxis(ec,e)}translateZ(e){return this.translateOnAxis(tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?to.copy(e):to.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Ss,to,this.up):Ci.lookAt(to,Ss,this.up),this.quaternion.setFromRotationMatrix(Ci),a&&(Ci.extractRotation(a.matrixWorld),Da.setFromRotationMatrix(Ci),this.quaternion.premultiply(Da.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nc),Ua.child=e,this.dispatchEvent(Ua),Ua.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cp),nr.child=e,this.dispatchEvent(nr),nr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nc),Ua.child=e,this.dispatchEvent(Ua),Ua.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let s=0,c=a.length;s<c;s++)a[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,e,Mp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,Sp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let s=0,c=a.length;s<c;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(r,u){return r[u.uuid]===void 0&&(r[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const u=r.shapes;if(Array.isArray(u))for(let d=0,p=u.length;d<p;d++){const v=u[d];s(e.shapes,v)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let u=0,d=this.material.length;u<d;u++)r.push(s(e.materials,this.material[u]));a.material=r}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let r=0;r<this.children.length;r++)a.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let r=0;r<this.animations.length;r++){const u=this.animations[r];a.animations.push(s(e.animations,u))}}if(t){const r=c(e.geometries),u=c(e.materials),d=c(e.textures),p=c(e.images),v=c(e.shapes),f=c(e.skeletons),g=c(e.animations),E=c(e.nodes);r.length>0&&(n.geometries=r),u.length>0&&(n.materials=u),d.length>0&&(n.textures=d),p.length>0&&(n.images=p),v.length>0&&(n.shapes=v),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),E.length>0&&(n.nodes=E)}return n.object=a,n;function c(r){const u=[];for(const d in r){const p=r[d];delete p.metadata,u.push(p)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}on.DEFAULT_UP=new _e(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new _e,Ei=new _e,ir=new _e,Ti=new _e,Ia=new _e,Na=new _e,ic=new _e,ar=new _e,sr=new _e,or=new _e;class li{constructor(e=new _e,t=new _e,n=new _e){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),Jn.subVectors(e,t),a.cross(Jn);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,n,a,s){Jn.subVectors(a,t),Ei.subVectors(n,t),ir.subVectors(e,t);const c=Jn.dot(Jn),r=Jn.dot(Ei),u=Jn.dot(ir),d=Ei.dot(Ei),p=Ei.dot(ir),v=c*d-r*r;if(v===0)return s.set(0,0,0),null;const f=1/v,g=(d*u-r*p)*f,E=(c*p-r*u)*f;return s.set(1-g-E,E,g)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,n,a,s,c,r,u){return this.getBarycoord(e,t,n,a,Ti)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,Ti.x),u.addScaledVector(c,Ti.y),u.addScaledVector(r,Ti.z),u)}static isFrontFacing(e,t,n,a){return Jn.subVectors(n,t),Ei.subVectors(e,t),Jn.cross(Ei).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Jn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,s){return li.getInterpolation(e,this.a,this.b,this.c,t,n,a,s)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,s=this.c;let c,r;Ia.subVectors(a,n),Na.subVectors(s,n),ar.subVectors(e,n);const u=Ia.dot(ar),d=Na.dot(ar);if(u<=0&&d<=0)return t.copy(n);sr.subVectors(e,a);const p=Ia.dot(sr),v=Na.dot(sr);if(p>=0&&v<=p)return t.copy(a);const f=u*v-p*d;if(f<=0&&u>=0&&p<=0)return c=u/(u-p),t.copy(n).addScaledVector(Ia,c);or.subVectors(e,s);const g=Ia.dot(or),E=Na.dot(or);if(E>=0&&g<=E)return t.copy(s);const S=g*d-u*E;if(S<=0&&d>=0&&E<=0)return r=d/(d-E),t.copy(n).addScaledVector(Na,r);const h=p*E-g*v;if(h<=0&&v-p>=0&&g-E>=0)return ic.subVectors(s,a),r=(v-p)/(v-p+(g-E)),t.copy(a).addScaledVector(ic,r);const m=1/(h+S+f);return c=S*m,r=f*m,t.copy(n).addScaledVector(Ia,c).addScaledVector(Na,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},no={h:0,s:0,l:0};function rr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,a=kt.workingColorSpace){return this.r=e,this.g=t,this.b=n,kt.toWorkingColorSpace(this,a),this}setHSL(e,t,n,a=kt.workingColorSpace){if(e=cp(e,1),t=qn(t,0,1),n=qn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,c=2*n-s;this.r=rr(c,s,e+1/3),this.g=rr(c,s,e),this.b=rr(c,s,e-1/3)}return kt.toWorkingColorSpace(this,a),this}setStyle(e,t=oi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const c=a[1],r=a[2];switch(c){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],c=s.length;if(c===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=oi){const n=pu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wa(e.r),this.g=Wa(e.g),this.b=Wa(e.b),this}copyLinearToSRGB(e){return this.r=Xo(e.r),this.g=Xo(e.g),this.b=Xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return kt.fromWorkingColorSpace(gn.copy(this),e),Math.round(qn(gn.r*255,0,255))*65536+Math.round(qn(gn.g*255,0,255))*256+Math.round(qn(gn.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=kt.workingColorSpace){kt.fromWorkingColorSpace(gn.copy(this),t);const n=gn.r,a=gn.g,s=gn.b,c=Math.max(n,a,s),r=Math.min(n,a,s);let u,d;const p=(r+c)/2;if(r===c)u=0,d=0;else{const v=c-r;switch(d=p<=.5?v/(c+r):v/(2-c-r),c){case n:u=(a-s)/v+(a<s?6:0);break;case a:u=(s-n)/v+2;break;case s:u=(n-a)/v+4;break}u/=6}return e.h=u,e.s=d,e.l=p,e}getRGB(e,t=kt.workingColorSpace){return kt.fromWorkingColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=oi){kt.fromWorkingColorSpace(gn.copy(this),e);const t=gn.r,n=gn.g,a=gn.b;return e!==oi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(no);const n=Wo(zi.h,no.h,t),a=Wo(zi.s,no.s,t),s=Wo(zi.l,no.l,t);return this.setHSL(n,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*a,this.g=s[1]*t+s[4]*n+s[7]*a,this.b=s[2]*t+s[5]*n+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new Tt;Tt.NAMES=pu;let Ep=0;class is extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=Ga,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yr,this.blendDst=Mr,this.blendEquation=_a,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ta,this.stencilZFail=Ta,this.stencilZPass=Ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ga&&(n.blending=this.blending),this.side!==Gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yr&&(n.blendSrc=this.blendSrc),this.blendDst!==Mr&&(n.blendDst=this.blendDst),this.blendEquation!==_a&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Po&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ta&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ta&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ta&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(s){const c=[];for(const r in s){const u=s[r];delete u.metadata,c.push(u)}return c}if(t){const s=a(e.textures),c=a(e.images);s.length>0&&(n.textures=s),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let s=0;s!==a;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fu extends is{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new _e,io=new Ot;class ci{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ws("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)io.fromBufferAttribute(this,t),io.applyMatrix3(e),this.setXY(t,io.x,io.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array),a=Nn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,s){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array),a=Nn(a,this.array),s=Nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gl&&(e.usage=this.usage),e}}class hu extends ci{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class mu extends ci{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class fn extends ci{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Tp=0;const jn=new tn,lr=new on,qa=new _e,Hn=new Is,Cs=new Is,pn=new _e;class kn extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ru(e)?mu:hu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Lt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return lr.lookAt(e),lr.updateMatrix(),this.applyMatrix4(lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qa).negate(),this.translate(qa.x,qa.y,qa.z),this}setFromPoints(e){const t=[];for(let n=0,a=e.length;n<a;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new fn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _e(-1/0,-1/0,-1/0),new _e(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const s=t[n];Hn.setFromBufferAttribute(s),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _e,1/0);return}if(e){const n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let s=0,c=t.length;s<c;s++){const r=t[s];Cs.setFromBufferAttribute(r),this.morphTargetsRelative?(pn.addVectors(Hn.min,Cs.min),Hn.expandByPoint(pn),pn.addVectors(Hn.max,Cs.max),Hn.expandByPoint(pn)):(Hn.expandByPoint(Cs.min),Hn.expandByPoint(Cs.max))}Hn.getCenter(n);let a=0;for(let s=0,c=e.count;s<c;s++)pn.fromBufferAttribute(e,s),a=Math.max(a,n.distanceToSquared(pn));if(t)for(let s=0,c=t.length;s<c;s++){const r=t[s],u=this.morphTargetsRelative;for(let d=0,p=r.count;d<p;d++)pn.fromBufferAttribute(r,d),u&&(qa.fromBufferAttribute(e,d),pn.add(qa)),a=Math.max(a,n.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),r=[],u=[];for(let F=0;F<n.count;F++)r[F]=new _e,u[F]=new _e;const d=new _e,p=new _e,v=new _e,f=new Ot,g=new Ot,E=new Ot,S=new _e,h=new _e;function m(F,A,T){d.fromBufferAttribute(n,F),p.fromBufferAttribute(n,A),v.fromBufferAttribute(n,T),f.fromBufferAttribute(s,F),g.fromBufferAttribute(s,A),E.fromBufferAttribute(s,T),p.sub(d),v.sub(d),g.sub(f),E.sub(f);const O=1/(g.x*E.y-E.x*g.y);isFinite(O)&&(S.copy(p).multiplyScalar(E.y).addScaledVector(v,-g.y).multiplyScalar(O),h.copy(v).multiplyScalar(g.x).addScaledVector(p,-E.x).multiplyScalar(O),r[F].add(S),r[A].add(S),r[T].add(S),u[F].add(h),u[A].add(h),u[T].add(h))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let F=0,A=R.length;F<A;++F){const T=R[F],O=T.start,Z=T.count;for(let K=O,Y=O+Z;K<Y;K+=3)m(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const P=new _e,N=new _e,W=new _e,I=new _e;function z(F){W.fromBufferAttribute(a,F),I.copy(W);const A=r[F];P.copy(A),P.sub(W.multiplyScalar(W.dot(A))).normalize(),N.crossVectors(I,A);const O=N.dot(u[F])<0?-1:1;c.setXYZW(F,P.x,P.y,P.z,O)}for(let F=0,A=R.length;F<A;++F){const T=R[F],O=T.start,Z=T.count;for(let K=O,Y=O+Z;K<Y;K+=3)z(e.getX(K+0)),z(e.getX(K+1)),z(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ci(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);const a=new _e,s=new _e,c=new _e,r=new _e,u=new _e,d=new _e,p=new _e,v=new _e;if(e)for(let f=0,g=e.count;f<g;f+=3){const E=e.getX(f+0),S=e.getX(f+1),h=e.getX(f+2);a.fromBufferAttribute(t,E),s.fromBufferAttribute(t,S),c.fromBufferAttribute(t,h),p.subVectors(c,s),v.subVectors(a,s),p.cross(v),r.fromBufferAttribute(n,E),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,h),r.add(p),u.add(p),d.add(p),n.setXYZ(E,r.x,r.y,r.z),n.setXYZ(S,u.x,u.y,u.z),n.setXYZ(h,d.x,d.y,d.z)}else for(let f=0,g=t.count;f<g;f+=3)a.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),c.fromBufferAttribute(t,f+2),p.subVectors(c,s),v.subVectors(a,s),p.cross(v),n.setXYZ(f+0,p.x,p.y,p.z),n.setXYZ(f+1,p.x,p.y,p.z),n.setXYZ(f+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(r,u){const d=r.array,p=r.itemSize,v=r.normalized,f=new d.constructor(u.length*p);let g=0,E=0;for(let S=0,h=u.length;S<h;S++){r.isInterleavedBufferAttribute?g=u[S]*r.data.stride+r.offset:g=u[S]*p;for(let m=0;m<p;m++)f[E++]=d[g++]}return new ci(f,p,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,n=this.index.array,a=this.attributes;for(const r in a){const u=a[r],d=e(u,n);t.setAttribute(r,d)}const s=this.morphAttributes;for(const r in s){const u=[],d=s[r];for(let p=0,v=d.length;p<v;p++){const f=d[p],g=e(f,n);u.push(g)}t.morphAttributes[r]=u}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let r=0,u=c.length;r<u;r++){const d=c[r];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const d in u)u[d]!==void 0&&(e[d]=u[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const d=n[u];e.data.attributes[u]=d.toJSON(e.data)}const a={};let s=!1;for(const u in this.morphAttributes){const d=this.morphAttributes[u],p=[];for(let v=0,f=d.length;v<f;v++){const g=d[v];p.push(g.toJSON(e.data))}p.length>0&&(a[u]=p,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const a=e.attributes;for(const d in a){const p=a[d];this.setAttribute(d,p.clone(t))}const s=e.morphAttributes;for(const d in s){const p=[],v=s[d];for(let f=0,g=v.length;f<g;f++)p.push(v[f].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,p=c.length;d<p;d++){const v=c[d];this.addGroup(v.start,v.count,v.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ac=new tn,da=new uu,ao=new zo,sc=new _e,Fa=new _e,Oa=new _e,za=new _e,cr=new _e,so=new _e,oo=new Ot,ro=new Ot,lo=new Ot,oc=new _e,rc=new _e,lc=new _e,co=new _e,uo=new _e;class Yn extends on{constructor(e=new kn,t=new fu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=a.length;s<c;s++){const r=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,s=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const r=this.morphTargetInfluences;if(s&&r){so.set(0,0,0);for(let u=0,d=s.length;u<d;u++){const p=r[u],v=s[u];p!==0&&(cr.fromBufferAttribute(v,e),c?so.addScaledVector(cr,p):so.addScaledVector(cr.sub(t),p))}t.add(so)}return t}raycast(e,t){const n=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(s),da.copy(e.ray).recast(e.near),!(ao.containsPoint(da.origin)===!1&&(da.intersectSphere(ao,sc)===null||da.origin.distanceToSquared(sc)>(e.far-e.near)**2))&&(ac.copy(s).invert(),da.copy(e.ray).applyMatrix4(ac),!(n.boundingBox!==null&&da.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,da)))}_computeIntersections(e,t,n){let a;const s=this.geometry,c=this.material,r=s.index,u=s.attributes.position,d=s.attributes.uv,p=s.attributes.uv1,v=s.attributes.normal,f=s.groups,g=s.drawRange;if(r!==null)if(Array.isArray(c))for(let E=0,S=f.length;E<S;E++){const h=f[E],m=c[h.materialIndex],R=Math.max(h.start,g.start),P=Math.min(r.count,Math.min(h.start+h.count,g.start+g.count));for(let N=R,W=P;N<W;N+=3){const I=r.getX(N),z=r.getX(N+1),F=r.getX(N+2);a=po(this,m,e,n,d,p,v,I,z,F),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=h.materialIndex,t.push(a))}}else{const E=Math.max(0,g.start),S=Math.min(r.count,g.start+g.count);for(let h=E,m=S;h<m;h+=3){const R=r.getX(h),P=r.getX(h+1),N=r.getX(h+2);a=po(this,c,e,n,d,p,v,R,P,N),a&&(a.faceIndex=Math.floor(h/3),t.push(a))}}else if(u!==void 0)if(Array.isArray(c))for(let E=0,S=f.length;E<S;E++){const h=f[E],m=c[h.materialIndex],R=Math.max(h.start,g.start),P=Math.min(u.count,Math.min(h.start+h.count,g.start+g.count));for(let N=R,W=P;N<W;N+=3){const I=N,z=N+1,F=N+2;a=po(this,m,e,n,d,p,v,I,z,F),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=h.materialIndex,t.push(a))}}else{const E=Math.max(0,g.start),S=Math.min(u.count,g.start+g.count);for(let h=E,m=S;h<m;h+=3){const R=h,P=h+1,N=h+2;a=po(this,c,e,n,d,p,v,R,P,N),a&&(a.faceIndex=Math.floor(h/3),t.push(a))}}}}function Ap(i,e,t,n,a,s,c,r){let u;if(e.side===On?u=n.intersectTriangle(c,s,a,!0,r):u=n.intersectTriangle(a,s,c,e.side===Gi,r),u===null)return null;uo.copy(r),uo.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(uo);return d<t.near||d>t.far?null:{distance:d,point:uo.clone(),object:i}}function po(i,e,t,n,a,s,c,r,u,d){i.getVertexPosition(r,Fa),i.getVertexPosition(u,Oa),i.getVertexPosition(d,za);const p=Ap(i,e,t,n,Fa,Oa,za,co);if(p){a&&(oo.fromBufferAttribute(a,r),ro.fromBufferAttribute(a,u),lo.fromBufferAttribute(a,d),p.uv=li.getInterpolation(co,Fa,Oa,za,oo,ro,lo,new Ot)),s&&(oo.fromBufferAttribute(s,r),ro.fromBufferAttribute(s,u),lo.fromBufferAttribute(s,d),p.uv1=li.getInterpolation(co,Fa,Oa,za,oo,ro,lo,new Ot)),c&&(oc.fromBufferAttribute(c,r),rc.fromBufferAttribute(c,u),lc.fromBufferAttribute(c,d),p.normal=li.getInterpolation(co,Fa,Oa,za,oc,rc,lc,new _e),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const v={a:r,b:u,c:d,normal:new _e,materialIndex:0};li.getNormal(Fa,Oa,za,v.normal),p.face=v}return p}class Ea extends kn{constructor(e=1,t=1,n=1,a=1,s=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:s,depthSegments:c};const r=this;a=Math.floor(a),s=Math.floor(s),c=Math.floor(c);const u=[],d=[],p=[],v=[];let f=0,g=0;E("z","y","x",-1,-1,n,t,e,c,s,0),E("z","y","x",1,-1,n,t,-e,c,s,1),E("x","z","y",1,1,e,n,t,a,c,2),E("x","z","y",1,-1,e,n,-t,a,c,3),E("x","y","z",1,-1,e,t,n,a,s,4),E("x","y","z",-1,-1,e,t,-n,a,s,5),this.setIndex(u),this.setAttribute("position",new fn(d,3)),this.setAttribute("normal",new fn(p,3)),this.setAttribute("uv",new fn(v,2));function E(S,h,m,R,P,N,W,I,z,F,A){const T=N/z,O=W/F,Z=N/2,K=W/2,Y=I/2,se=z+1,re=F+1;let de=0,J=0;const De=new _e;for(let ae=0;ae<re;ae++){const Me=ae*O-K;for(let Je=0;Je<se;Je++){const je=Je*T-Z;De[S]=je*R,De[h]=Me*P,De[m]=Y,d.push(De.x,De.y,De.z),De[S]=0,De[h]=0,De[m]=I>0?1:-1,p.push(De.x,De.y,De.z),v.push(Je/z),v.push(1-ae/F),de+=1}}for(let ae=0;ae<F;ae++)for(let Me=0;Me<z;Me++){const Je=f+Me+se*ae,je=f+Me+se*(ae+1),ie=f+(Me+1)+se*(ae+1),Ee=f+(Me+1)+se*ae;u.push(Je,je,Ee),u.push(je,ie,Ee),J+=6}r.addGroup(g,J,A),g+=J,f+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ea(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone():Array.isArray(a)?e[t][n]=a.slice():e[t][n]=a}}return e}function Ln(i){const e={};for(let t=0;t<i.length;t++){const n=ts(i[t]);for(const a in n)e[a]=n[a]}return e}function wp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:kt.workingColorSpace}const Pp={clone:ts,merge:Ln};var Rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends is{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rp,this.fragmentShader=Lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=wp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class pl extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new _e,cc=new Ot,uc=new Ot;class Wn extends pl{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qr*2*Math.atan(Math.tan(jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,t){return this.getViewBounds(e,cc,uc),t.subVectors(uc,cc)}setViewOffset(e,t,n,a,s,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jo*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,s=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const u=c.fullWidth,d=c.fullHeight;s+=c.offsetX*a/u,t-=c.offsetY*n/d,a*=c.width/u,n*=c.height/d}const r=this.filmOffset;r!==0&&(s+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ba=-90,Ha=1;class Dp extends on{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Wn(Ba,Ha,e,t);a.layers=this.layers,this.add(a);const s=new Wn(Ba,Ha,e,t);s.layers=this.layers,this.add(s);const c=new Wn(Ba,Ha,e,t);c.layers=this.layers,this.add(c);const r=new Wn(Ba,Ha,e,t);r.layers=this.layers,this.add(r);const u=new Wn(Ba,Ha,e,t);u.layers=this.layers,this.add(u);const d=new Wn(Ba,Ha,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,s,c,r,u]=t;for(const d of t)this.remove(d);if(e===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,c,r,u,d,p]=this.children,v=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,a),e.render(t,s),e.setRenderTarget(n,1,a),e.render(t,c),e.setRenderTarget(n,2,a),e.render(t,r),e.setRenderTarget(n,3,a),e.render(t,u),e.setRenderTarget(n,4,a),e.render(t,d),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,a),e.render(t,p),e.setRenderTarget(v,f,g),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class gu extends zn{constructor(e,t,n,a,s,c,r,u,d,p){e=e!==void 0?e:[],t=t!==void 0?t:Ka,super(e,t,n,a,s,c,r,u,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Up extends Ca{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new gu(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ea(5,5,5),s=new ji({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:ki});s.uniforms.tEquirect.value=t;const c=new Yn(a,s),r=t.minFilter;return t.minFilter===ya&&(t.minFilter=Qn),new Dp(1,10,this).update(e,c),t.minFilter=r,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,a){const s=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,a);e.setRenderTarget(s)}}const ur=new _e,Ip=new _e,Np=new Lt;class va{constructor(e=new _e(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=ur.subVectors(n,t).cross(Ip.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ur),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Np.getNormalMatrix(e),a=this.coplanarPoint(ur).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pa=new zo,fo=new _e;class fl{constructor(e=new va,t=new va,n=new va,a=new va,s=new va,c=new va){this.planes=[e,t,n,a,s,c]}set(e,t,n,a,s,c){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(a),r[4].copy(s),r[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ri){const n=this.planes,a=e.elements,s=a[0],c=a[1],r=a[2],u=a[3],d=a[4],p=a[5],v=a[6],f=a[7],g=a[8],E=a[9],S=a[10],h=a[11],m=a[12],R=a[13],P=a[14],N=a[15];if(n[0].setComponents(u-s,f-d,h-g,N-m).normalize(),n[1].setComponents(u+s,f+d,h+g,N+m).normalize(),n[2].setComponents(u+c,f+p,h+E,N+R).normalize(),n[3].setComponents(u-c,f-p,h-E,N-R).normalize(),n[4].setComponents(u-r,f-v,h-S,N-P).normalize(),t===Ri)n[5].setComponents(u+r,f+v,h+S,N+P).normalize();else if(t===Uo)n[5].setComponents(r,v,S,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pa)}intersectsSprite(e){return pa.center.set(0,0,0),pa.radius=.7071067811865476,pa.applyMatrix4(e.matrixWorld),this.intersectsSphere(pa)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(fo.x=a.normal.x>0?e.max.x:e.min.x,fo.y=a.normal.y>0?e.max.y:e.min.y,fo.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(fo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _u(){let i=null,e=!1,t=null,n=null;function a(s,c){t(s,c),n=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function qp(i){const e=new WeakMap;function t(r,u){const d=r.array,p=r.usage,v=d.byteLength,f=i.createBuffer();i.bindBuffer(u,f),i.bufferData(u,d,p),r.onUploadCallback();let g;if(d instanceof Float32Array)g=i.FLOAT;else if(d instanceof Uint16Array)r.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=i.SHORT;else if(d instanceof Uint32Array)g=i.UNSIGNED_INT;else if(d instanceof Int32Array)g=i.INT;else if(d instanceof Int8Array)g=i.BYTE;else if(d instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:f,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:r.version,size:v}}function n(r,u,d){const p=u.array,v=u._updateRange,f=u.updateRanges;if(i.bindBuffer(d,r),v.count===-1&&f.length===0&&i.bufferSubData(d,0,p),f.length!==0){for(let g=0,E=f.length;g<E;g++){const S=f[g];i.bufferSubData(d,S.start*p.BYTES_PER_ELEMENT,p,S.start,S.count)}u.clearUpdateRanges()}v.count!==-1&&(i.bufferSubData(d,v.offset*p.BYTES_PER_ELEMENT,p,v.offset,v.count),v.count=-1),u.onUploadCallback()}function a(r){return r.isInterleavedBufferAttribute&&(r=r.data),e.get(r)}function s(r){r.isInterleavedBufferAttribute&&(r=r.data);const u=e.get(r);u&&(i.deleteBuffer(u.buffer),e.delete(r))}function c(r,u){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const p=e.get(r);(!p||p.version<r.version)&&e.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const d=e.get(r);if(d===void 0)e.set(r,t(r,u));else if(d.version<r.version){if(d.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,r,u),d.version=r.version}}return{get:a,remove:s,update:c}}class Bo extends kn{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const s=e/2,c=t/2,r=Math.floor(n),u=Math.floor(a),d=r+1,p=u+1,v=e/r,f=t/u,g=[],E=[],S=[],h=[];for(let m=0;m<p;m++){const R=m*f-c;for(let P=0;P<d;P++){const N=P*v-s;E.push(N,-R,0),S.push(0,0,1),h.push(P/r),h.push(1-m/u)}}for(let m=0;m<u;m++)for(let R=0;R<r;R++){const P=R+d*m,N=R+d*(m+1),W=R+1+d*(m+1),I=R+1+d*m;g.push(P,N,I),g.push(N,W,I)}this.setIndex(g),this.setAttribute("position",new fn(E,3)),this.setAttribute("normal",new fn(S,3)),this.setAttribute("uv",new fn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Op=`#ifdef USE_ALPHAHASH
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
#endif`,zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vp=`#ifdef USE_AOMAP
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
#endif`,Gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jp=`#ifdef USE_BATCHING
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
#endif`,Wp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zp=`#ifdef USE_IRIDESCENCE
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
#endif`,Kp=`#ifdef USE_BUMPMAP
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
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rf=`#define PI 3.141592653589793
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
} // validated`,lf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cf=`vec3 transformedNormal = objectNormal;
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
#endif`,uf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,df=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hf="gl_FragColor = linearToOutputTexel( gl_FragColor );",mf=`
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
}`,vf=`#ifdef USE_ENVMAP
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
#endif`,gf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_f=`#ifdef USE_ENVMAP
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
#endif`,xf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,yf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ef=`#ifdef USE_GRADIENTMAP
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
}`,Tf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Af=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pf=`uniform bool receiveShadow;
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
#endif`,Rf=`#ifdef USE_ENVMAP
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
#endif`,Lf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nf=`PhysicalMaterial material;
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
#endif`,qf=`struct PhysicalMaterial {
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
}`,Ff=`
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
#endif`,Of=`#if defined( RE_IndirectDiffuse )
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
#endif`,zf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$f=`#if defined( USE_POINTS_UV )
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
#endif`,Xf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qf=`#ifdef USE_MORPHTARGETS
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
#endif`,eh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,th=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ih=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ah=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oh=`#ifdef USE_NORMALMAP
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
#endif`,rh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ch=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ph=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_h=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mh=`float getShadowMask() {
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
#endif`,Ch=`#ifdef USE_SKINNING
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
#endif`,Eh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Th=`#ifdef USE_SKINNING
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
#endif`,Ah=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ph=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lh=`#ifdef USE_TRANSMISSION
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
#endif`,Dh=`#ifdef USE_TRANSMISSION
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
#endif`,Uh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ih=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Oh=`uniform sampler2D t2D;
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
}`,zh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vh=`#include <common>
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
}`,Gh=`#if DEPTH_PACKING == 3200
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
}`,jh=`#define DISTANCE
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
}`,Wh=`#define DISTANCE
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
}`,$h=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yh=`uniform float scale;
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
}`,Zh=`uniform vec3 diffuse;
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
}`,Kh=`#include <common>
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
}`,Jh=`uniform vec3 diffuse;
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
}`,Qh=`#define LAMBERT
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
}`,em=`#define LAMBERT
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
}`,tm=`#define MATCAP
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
}`,nm=`#define MATCAP
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
}`,im=`#define NORMAL
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
}`,am=`#define NORMAL
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
}`,sm=`#define PHONG
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
}`,om=`#define PHONG
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
}`,rm=`#define STANDARD
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
}`,lm=`#define STANDARD
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
}`,cm=`#define TOON
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
}`,um=`#define TOON
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
}`,dm=`uniform float size;
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
}`,pm=`uniform vec3 diffuse;
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
}`,fm=`#include <common>
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
}`,hm=`uniform vec3 color;
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
}`,mm=`uniform float rotation;
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
}`,vm=`uniform vec3 diffuse;
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
}`,Rt={alphahash_fragment:Fp,alphahash_pars_fragment:Op,alphamap_fragment:zp,alphamap_pars_fragment:Bp,alphatest_fragment:Hp,alphatest_pars_fragment:kp,aomap_fragment:Vp,aomap_pars_fragment:Gp,batching_pars_vertex:jp,batching_vertex:Wp,begin_vertex:$p,beginnormal_vertex:Xp,bsdfs:Yp,iridescence_fragment:Zp,bumpmap_pars_fragment:Kp,clipping_planes_fragment:Jp,clipping_planes_pars_fragment:Qp,clipping_planes_pars_vertex:ef,clipping_planes_vertex:tf,color_fragment:nf,color_pars_fragment:af,color_pars_vertex:sf,color_vertex:of,common:rf,cube_uv_reflection_fragment:lf,defaultnormal_vertex:cf,displacementmap_pars_vertex:uf,displacementmap_vertex:df,emissivemap_fragment:pf,emissivemap_pars_fragment:ff,colorspace_fragment:hf,colorspace_pars_fragment:mf,envmap_fragment:vf,envmap_common_pars_fragment:gf,envmap_pars_fragment:_f,envmap_pars_vertex:xf,envmap_physical_pars_fragment:Rf,envmap_vertex:bf,fog_vertex:yf,fog_pars_vertex:Mf,fog_fragment:Sf,fog_pars_fragment:Cf,gradientmap_pars_fragment:Ef,lightmap_pars_fragment:Tf,lights_lambert_fragment:Af,lights_lambert_pars_fragment:wf,lights_pars_begin:Pf,lights_toon_fragment:Lf,lights_toon_pars_fragment:Df,lights_phong_fragment:Uf,lights_phong_pars_fragment:If,lights_physical_fragment:Nf,lights_physical_pars_fragment:qf,lights_fragment_begin:Ff,lights_fragment_maps:Of,lights_fragment_end:zf,logdepthbuf_fragment:Bf,logdepthbuf_pars_fragment:Hf,logdepthbuf_pars_vertex:kf,logdepthbuf_vertex:Vf,map_fragment:Gf,map_pars_fragment:jf,map_particle_fragment:Wf,map_particle_pars_fragment:$f,metalnessmap_fragment:Xf,metalnessmap_pars_fragment:Yf,morphinstance_vertex:Zf,morphcolor_vertex:Kf,morphnormal_vertex:Jf,morphtarget_pars_vertex:Qf,morphtarget_vertex:eh,normal_fragment_begin:th,normal_fragment_maps:nh,normal_pars_fragment:ih,normal_pars_vertex:ah,normal_vertex:sh,normalmap_pars_fragment:oh,clearcoat_normal_fragment_begin:rh,clearcoat_normal_fragment_maps:lh,clearcoat_pars_fragment:ch,iridescence_pars_fragment:uh,opaque_fragment:dh,packing:ph,premultiplied_alpha_fragment:fh,project_vertex:hh,dithering_fragment:mh,dithering_pars_fragment:vh,roughnessmap_fragment:gh,roughnessmap_pars_fragment:_h,shadowmap_pars_fragment:xh,shadowmap_pars_vertex:bh,shadowmap_vertex:yh,shadowmask_pars_fragment:Mh,skinbase_vertex:Sh,skinning_pars_vertex:Ch,skinning_vertex:Eh,skinnormal_vertex:Th,specularmap_fragment:Ah,specularmap_pars_fragment:wh,tonemapping_fragment:Ph,tonemapping_pars_fragment:Rh,transmission_fragment:Lh,transmission_pars_fragment:Dh,uv_pars_fragment:Uh,uv_pars_vertex:Ih,uv_vertex:Nh,worldpos_vertex:qh,background_vert:Fh,background_frag:Oh,backgroundCube_vert:zh,backgroundCube_frag:Bh,cube_vert:Hh,cube_frag:kh,depth_vert:Vh,depth_frag:Gh,distanceRGBA_vert:jh,distanceRGBA_frag:Wh,equirect_vert:$h,equirect_frag:Xh,linedashed_vert:Yh,linedashed_frag:Zh,meshbasic_vert:Kh,meshbasic_frag:Jh,meshlambert_vert:Qh,meshlambert_frag:em,meshmatcap_vert:tm,meshmatcap_frag:nm,meshnormal_vert:im,meshnormal_frag:am,meshphong_vert:sm,meshphong_frag:om,meshphysical_vert:rm,meshphysical_frag:lm,meshtoon_vert:cm,meshtoon_frag:um,points_vert:dm,points_frag:pm,shadow_vert:fm,shadow_frag:hm,sprite_vert:mm,sprite_frag:vm},ot={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},ri={basic:{uniforms:Ln([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:Ln([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:Ln([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:Ln([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:Ln([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:Ln([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:Ln([ot.points,ot.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:Ln([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:Ln([ot.common,ot.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:Ln([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:Ln([ot.sprite,ot.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distanceRGBA:{uniforms:Ln([ot.common,ot.displacementmap,{referencePosition:{value:new _e},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distanceRGBA_vert,fragmentShader:Rt.distanceRGBA_frag},shadow:{uniforms:Ln([ot.lights,ot.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};ri.physical={uniforms:Ln([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};const ho={r:0,b:0,g:0},fa=new ui,gm=new tn;function _m(i,e,t,n,a,s,c){const r=new Tt(0);let u=s===!0?0:1,d,p,v=null,f=0,g=null;function E(R){let P=R.isScene===!0?R.background:null;return P&&P.isTexture&&(P=(R.backgroundBlurriness>0?t:e).get(P)),P}function S(R){let P=!1;const N=E(R);N===null?m(r,u):N&&N.isColor&&(m(N,1),P=!0);const W=i.xr.getEnvironmentBlendMode();W==="additive"?n.buffers.color.setClear(0,0,0,1,c):W==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||P)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function h(R,P){const N=E(P);N&&(N.isCubeTexture||N.mapping===Fo)?(p===void 0&&(p=new Yn(new Ea(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:ts(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(W,I,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),fa.copy(P.backgroundRotation),fa.x*=-1,fa.y*=-1,fa.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(fa.y*=-1,fa.z*=-1),p.material.uniforms.envMap.value=N,p.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(gm.makeRotationFromEuler(fa)),p.material.toneMapped=kt.getTransfer(N.colorSpace)!==$t,(v!==N||f!==N.version||g!==i.toneMapping)&&(p.material.needsUpdate=!0,v=N,f=N.version,g=i.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(d===void 0&&(d=new Yn(new Bo(2,2),new ji({name:"BackgroundMaterial",uniforms:ts(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=N,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.toneMapped=kt.getTransfer(N.colorSpace)!==$t,N.matrixAutoUpdate===!0&&N.updateMatrix(),d.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||f!==N.version||g!==i.toneMapping)&&(d.material.needsUpdate=!0,v=N,f=N.version,g=i.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null))}function m(R,P){R.getRGB(ho,vu(i)),n.buffers.color.setClear(ho.r,ho.g,ho.b,P,c)}return{getClearColor:function(){return r},setClearColor:function(R,P=1){r.set(R),u=P,m(r,u)},getClearAlpha:function(){return u},setClearAlpha:function(R){u=R,m(r,u)},render:S,addToRenderList:h}}function xm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=f(null);let s=a,c=!1;function r(T,O,Z,K,Y){let se=!1;const re=v(K,Z,O);s!==re&&(s=re,d(s.object)),se=g(T,K,Z,Y),se&&E(T,K,Z,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(se||c)&&(c=!1,N(T,O,Z,K),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function u(){return i.createVertexArray()}function d(T){return i.bindVertexArray(T)}function p(T){return i.deleteVertexArray(T)}function v(T,O,Z){const K=Z.wireframe===!0;let Y=n[T.id];Y===void 0&&(Y={},n[T.id]=Y);let se=Y[O.id];se===void 0&&(se={},Y[O.id]=se);let re=se[K];return re===void 0&&(re=f(u()),se[K]=re),re}function f(T){const O=[],Z=[],K=[];for(let Y=0;Y<t;Y++)O[Y]=0,Z[Y]=0,K[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Z,attributeDivisors:K,object:T,attributes:{},index:null}}function g(T,O,Z,K){const Y=s.attributes,se=O.attributes;let re=0;const de=Z.getAttributes();for(const J in de)if(de[J].location>=0){const ae=Y[J];let Me=se[J];if(Me===void 0&&(J==="instanceMatrix"&&T.instanceMatrix&&(Me=T.instanceMatrix),J==="instanceColor"&&T.instanceColor&&(Me=T.instanceColor)),ae===void 0||ae.attribute!==Me||Me&&ae.data!==Me.data)return!0;re++}return s.attributesNum!==re||s.index!==K}function E(T,O,Z,K){const Y={},se=O.attributes;let re=0;const de=Z.getAttributes();for(const J in de)if(de[J].location>=0){let ae=se[J];ae===void 0&&(J==="instanceMatrix"&&T.instanceMatrix&&(ae=T.instanceMatrix),J==="instanceColor"&&T.instanceColor&&(ae=T.instanceColor));const Me={};Me.attribute=ae,ae&&ae.data&&(Me.data=ae.data),Y[J]=Me,re++}s.attributes=Y,s.attributesNum=re,s.index=K}function S(){const T=s.newAttributes;for(let O=0,Z=T.length;O<Z;O++)T[O]=0}function h(T){m(T,0)}function m(T,O){const Z=s.newAttributes,K=s.enabledAttributes,Y=s.attributeDivisors;Z[T]=1,K[T]===0&&(i.enableVertexAttribArray(T),K[T]=1),Y[T]!==O&&(i.vertexAttribDivisor(T,O),Y[T]=O)}function R(){const T=s.newAttributes,O=s.enabledAttributes;for(let Z=0,K=O.length;Z<K;Z++)O[Z]!==T[Z]&&(i.disableVertexAttribArray(Z),O[Z]=0)}function P(T,O,Z,K,Y,se,re){re===!0?i.vertexAttribIPointer(T,O,Z,Y,se):i.vertexAttribPointer(T,O,Z,K,Y,se)}function N(T,O,Z,K){S();const Y=K.attributes,se=Z.getAttributes(),re=O.defaultAttributeValues;for(const de in se){const J=se[de];if(J.location>=0){let De=Y[de];if(De===void 0&&(de==="instanceMatrix"&&T.instanceMatrix&&(De=T.instanceMatrix),de==="instanceColor"&&T.instanceColor&&(De=T.instanceColor)),De!==void 0){const ae=De.normalized,Me=De.itemSize,Je=e.get(De);if(Je===void 0)continue;const je=Je.buffer,ie=Je.type,Ee=Je.bytesPerElement,Re=ie===i.INT||ie===i.UNSIGNED_INT||De.gpuType===sl;if(De.isInterleavedBufferAttribute){const we=De.data,ke=we.stride,qe=De.offset;if(we.isInstancedInterleavedBuffer){for(let ze=0;ze<J.locationSize;ze++)m(J.location+ze,we.meshPerAttribute);T.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let ze=0;ze<J.locationSize;ze++)h(J.location+ze);i.bindBuffer(i.ARRAY_BUFFER,je);for(let ze=0;ze<J.locationSize;ze++)P(J.location+ze,Me/J.locationSize,ie,ae,ke*Ee,(qe+Me/J.locationSize*ze)*Ee,Re)}else{if(De.isInstancedBufferAttribute){for(let we=0;we<J.locationSize;we++)m(J.location+we,De.meshPerAttribute);T.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let we=0;we<J.locationSize;we++)h(J.location+we);i.bindBuffer(i.ARRAY_BUFFER,je);for(let we=0;we<J.locationSize;we++)P(J.location+we,Me/J.locationSize,ie,ae,Me*Ee,Me/J.locationSize*we*Ee,Re)}}else if(re!==void 0){const ae=re[de];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(J.location,ae);break;case 3:i.vertexAttrib3fv(J.location,ae);break;case 4:i.vertexAttrib4fv(J.location,ae);break;default:i.vertexAttrib1fv(J.location,ae)}}}}R()}function W(){F();for(const T in n){const O=n[T];for(const Z in O){const K=O[Z];for(const Y in K)p(K[Y].object),delete K[Y];delete O[Z]}delete n[T]}}function I(T){if(n[T.id]===void 0)return;const O=n[T.id];for(const Z in O){const K=O[Z];for(const Y in K)p(K[Y].object),delete K[Y];delete O[Z]}delete n[T.id]}function z(T){for(const O in n){const Z=n[O];if(Z[T.id]===void 0)continue;const K=Z[T.id];for(const Y in K)p(K[Y].object),delete K[Y];delete Z[T.id]}}function F(){A(),c=!0,s!==a&&(s=a,d(s.object))}function A(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:r,reset:F,resetDefaultState:A,dispose:W,releaseStatesOfGeometry:I,releaseStatesOfProgram:z,initAttributes:S,enableAttribute:h,disableUnusedAttributes:R}}function bm(i,e,t){let n;function a(d){n=d}function s(d,p){i.drawArrays(n,d,p),t.update(p,n,1)}function c(d,p,v){v!==0&&(i.drawArraysInstanced(n,d,p,v),t.update(p,n,v))}function r(d,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,p,0,v);let g=0;for(let E=0;E<v;E++)g+=p[E];t.update(g,n,1)}function u(d,p,v,f){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let E=0;E<d.length;E++)c(d[E],p[E],f[E]);else{g.multiDrawArraysInstancedWEBGL(n,d,0,p,0,f,0,v);let E=0;for(let S=0;S<v;S++)E+=p[S];for(let S=0;S<f.length;S++)t.update(E,n,f[S])}}this.setMode=a,this.render=s,this.renderInstances=c,this.renderMultiDraw=r,this.renderMultiDrawInstances=u}function ym(i,e,t,n){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(I){return!(I!==ei&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(I){const z=I===Ls&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Li&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Pi&&!z)}function u(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=u(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const v=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),P=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,W=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:c,textureTypeReadable:r,precision:d,logarithmicDepthBuffer:v,maxTextures:f,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:S,maxAttributes:h,maxVertexUniforms:m,maxVaryings:R,maxFragmentUniforms:P,vertexTextures:N,maxSamples:W}}function Mm(i){const e=this;let t=null,n=0,a=!1,s=!1;const c=new va,r=new Lt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(v,f){const g=v.length!==0||f||n!==0||a;return a=f,n=v.length,g},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(v,f){t=p(v,f,0)},this.setState=function(v,f,g){const E=v.clippingPlanes,S=v.clipIntersection,h=v.clipShadows,m=i.get(v);if(!a||E===null||E.length===0||s&&!h)s?p(null):d();else{const R=s?0:n,P=R*4;let N=m.clippingState||null;u.value=N,N=p(E,f,P,g);for(let W=0;W!==P;++W)N[W]=t[W];m.clippingState=N,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=R}};function d(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(v,f,g,E){const S=v!==null?v.length:0;let h=null;if(S!==0){if(h=u.value,E!==!0||h===null){const m=g+S*4,R=f.matrixWorldInverse;r.getNormalMatrix(R),(h===null||h.length<m)&&(h=new Float32Array(m));for(let P=0,N=g;P!==S;++P,N+=4)c.copy(v[P]).applyMatrix4(R,r),c.normal.toArray(h,N),h[N+3]=c.constant}u.value=h,u.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,h}}function Sm(i){let e=new WeakMap;function t(c,r){return r===Sr?c.mapping=Ka:r===Cr&&(c.mapping=Ja),c}function n(c){if(c&&c.isTexture){const r=c.mapping;if(r===Sr||r===Cr)if(e.has(c)){const u=e.get(c).texture;return t(u,c.mapping)}else{const u=c.image;if(u&&u.height>0){const d=new Up(u.height);return d.fromEquirectangularTexture(i,c),e.set(c,d),c.addEventListener("dispose",a),t(d.texture,c.mapping)}else return null}}return c}function a(c){const r=c.target;r.removeEventListener("dispose",a);const u=e.get(r);u!==void 0&&(e.delete(r),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class xu extends pl{constructor(e=-1,t=1,n=1,a=-1,s=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=s,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,s,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=n-e,c=n+e,r=a+t,u=a-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,c=s+d*this.view.width,r-=p*this.view.offsetY,u=r-p*this.view.height}this.projectionMatrix.makeOrthographic(s,c,r,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Va=4,dc=[.125,.215,.35,.446,.526,.582],xa=20,dr=new xu,pc=new Tt;let pr=null,fr=0,hr=0,mr=!1;const ga=(1+Math.sqrt(5))/2,ka=1/ga,fc=[new _e(-ga,ka,0),new _e(ga,ka,0),new _e(-ka,0,ga),new _e(ka,0,ga),new _e(0,ga,-ka),new _e(0,ga,ka),new _e(-1,1,-1),new _e(1,1,-1),new _e(-1,1,1),new _e(1,1,1)];class hc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,a=100){pr=this._renderer.getRenderTarget(),fr=this._renderer.getActiveCubeFace(),hr=this._renderer.getActiveMipmapLevel(),mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,a,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pr,fr,hr),this._renderer.xr.enabled=mr,e.scissorTest=!1,mo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ka||e.mapping===Ja?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pr=this._renderer.getRenderTarget(),fr=this._renderer.getActiveCubeFace(),hr=this._renderer.getActiveMipmapLevel(),mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:Ls,format:ei,colorSpace:Wi,depthBuffer:!1},a=mc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cm(s)),this._blurMaterial=Em(s,e,t)}return a}_compileMaterial(e){const t=new Yn(this._lodPlanes[0],e);this._renderer.compile(t,dr)}_sceneToCubeUV(e,t,n,a){const r=new Wn(90,1,t,n),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,v=p.autoClear,f=p.toneMapping;p.getClearColor(pc),p.toneMapping=Vi,p.autoClear=!1;const g=new fu({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),E=new Yn(new Ea,g);let S=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,S=!0):(g.color.copy(pc),S=!0);for(let m=0;m<6;m++){const R=m%3;R===0?(r.up.set(0,u[m],0),r.lookAt(d[m],0,0)):R===1?(r.up.set(0,0,u[m]),r.lookAt(0,d[m],0)):(r.up.set(0,u[m],0),r.lookAt(0,0,d[m]));const P=this._cubeSize;mo(a,R*P,m>2?P:0,P,P),p.setRenderTarget(a),S&&p.render(E,r),p.render(e,r)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=f,p.autoClear=v,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===Ka||e.mapping===Ja;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vc());const s=a?this._cubemapMaterial:this._equirectMaterial,c=new Yn(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=e;const u=this._cubeSize;mo(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(c,dr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let s=1;s<a;s++){const c=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),r=fc[(a-s-1)%fc.length];this._blur(e,s-1,s,c,r)}t.autoClear=n}_blur(e,t,n,a,s){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,a,"latitudinal",s),this._halfBlur(c,e,n,n,a,"longitudinal",s)}_halfBlur(e,t,n,a,s,c,r){const u=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,v=new Yn(this._lodPlanes[a],d),f=d.uniforms,g=this._sizeLods[n]-1,E=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*xa-1),S=s/E,h=isFinite(s)?1+Math.floor(p*S):xa;h>xa&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${xa}`);const m=[];let R=0;for(let z=0;z<xa;++z){const F=z/S,A=Math.exp(-F*F/2);m.push(A),z===0?R+=A:z<h&&(R+=2*A)}for(let z=0;z<m.length;z++)m[z]=m[z]/R;f.envMap.value=e.texture,f.samples.value=h,f.weights.value=m,f.latitudinal.value=c==="latitudinal",r&&(f.poleAxis.value=r);const{_lodMax:P}=this;f.dTheta.value=E,f.mipInt.value=P-n;const N=this._sizeLods[a],W=3*N*(a>P-Va?a-P+Va:0),I=4*(this._cubeSize-N);mo(t,W,I,3*N,2*N),u.setRenderTarget(t),u.render(v,dr)}}function Cm(i){const e=[],t=[],n=[];let a=i;const s=i-Va+1+dc.length;for(let c=0;c<s;c++){const r=Math.pow(2,a);t.push(r);let u=1/r;c>i-Va?u=dc[c-i+Va-1]:c===0&&(u=0),n.push(u);const d=1/(r-2),p=-d,v=1+d,f=[p,p,v,p,v,v,p,p,v,v,p,v],g=6,E=6,S=3,h=2,m=1,R=new Float32Array(S*E*g),P=new Float32Array(h*E*g),N=new Float32Array(m*E*g);for(let I=0;I<g;I++){const z=I%3*2/3-1,F=I>2?0:-1,A=[z,F,0,z+2/3,F,0,z+2/3,F+1,0,z,F,0,z+2/3,F+1,0,z,F+1,0];R.set(A,S*E*I),P.set(f,h*E*I);const T=[I,I,I,I,I,I];N.set(T,m*E*I)}const W=new kn;W.setAttribute("position",new ci(R,S)),W.setAttribute("uv",new ci(P,h)),W.setAttribute("faceIndex",new ci(N,m)),e.push(W),a>Va&&a--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function mc(i,e,t){const n=new Ca(i,e,t);return n.texture.mapping=Fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mo(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function Em(i,e,t){const n=new Float32Array(xa),a=new _e(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:xa,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:hl(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function vc(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hl(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function gc(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function hl(){return`

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
	`}function Tm(i){let e=new WeakMap,t=null;function n(r){if(r&&r.isTexture){const u=r.mapping,d=u===Sr||u===Cr,p=u===Ka||u===Ja;if(d||p){let v=e.get(r);const f=v!==void 0?v.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==f)return t===null&&(t=new hc(i)),v=d?t.fromEquirectangular(r,v):t.fromCubemap(r,v),v.texture.pmremVersion=r.pmremVersion,e.set(r,v),v.texture;if(v!==void 0)return v.texture;{const g=r.image;return d&&g&&g.height>0||p&&g&&a(g)?(t===null&&(t=new hc(i)),v=d?t.fromEquirectangular(r):t.fromCubemap(r),v.texture.pmremVersion=r.pmremVersion,e.set(r,v),r.addEventListener("dispose",s),v.texture):null}}}return r}function a(r){let u=0;const d=6;for(let p=0;p<d;p++)r[p]!==void 0&&u++;return u===d}function s(r){const u=r.target;u.removeEventListener("dispose",s);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function Am(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&ws("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function wm(i,e,t,n){const a={},s=new WeakMap;function c(v){const f=v.target;f.index!==null&&e.remove(f.index);for(const E in f.attributes)e.remove(f.attributes[E]);for(const E in f.morphAttributes){const S=f.morphAttributes[E];for(let h=0,m=S.length;h<m;h++)e.remove(S[h])}f.removeEventListener("dispose",c),delete a[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function r(v,f){return a[f.id]===!0||(f.addEventListener("dispose",c),a[f.id]=!0,t.memory.geometries++),f}function u(v){const f=v.attributes;for(const E in f)e.update(f[E],i.ARRAY_BUFFER);const g=v.morphAttributes;for(const E in g){const S=g[E];for(let h=0,m=S.length;h<m;h++)e.update(S[h],i.ARRAY_BUFFER)}}function d(v){const f=[],g=v.index,E=v.attributes.position;let S=0;if(g!==null){const R=g.array;S=g.version;for(let P=0,N=R.length;P<N;P+=3){const W=R[P+0],I=R[P+1],z=R[P+2];f.push(W,I,I,z,z,W)}}else if(E!==void 0){const R=E.array;S=E.version;for(let P=0,N=R.length/3-1;P<N;P+=3){const W=P+0,I=P+1,z=P+2;f.push(W,I,I,z,z,W)}}else return;const h=new(ru(f)?mu:hu)(f,1);h.version=S;const m=s.get(v);m&&e.remove(m),s.set(v,h)}function p(v){const f=s.get(v);if(f){const g=v.index;g!==null&&f.version<g.version&&d(v)}else d(v);return s.get(v)}return{get:r,update:u,getWireframeAttribute:p}}function Pm(i,e,t){let n;function a(f){n=f}let s,c;function r(f){s=f.type,c=f.bytesPerElement}function u(f,g){i.drawElements(n,g,s,f*c),t.update(g,n,1)}function d(f,g,E){E!==0&&(i.drawElementsInstanced(n,g,s,f*c,E),t.update(g,n,E))}function p(f,g,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,f,0,E);let h=0;for(let m=0;m<E;m++)h+=g[m];t.update(h,n,1)}function v(f,g,E,S){if(E===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<f.length;m++)d(f[m]/c,g[m],S[m]);else{h.multiDrawElementsInstancedWEBGL(n,g,0,s,f,0,S,0,E);let m=0;for(let R=0;R<E;R++)m+=g[R];for(let R=0;R<S.length;R++)t.update(m,n,S[R])}}this.setMode=a,this.setIndex=r,this.render=u,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=v}function Rm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,c,r){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=r*(s/3);break;case i.LINES:t.lines+=r*(s/2);break;case i.LINE_STRIP:t.lines+=r*(s-1);break;case i.LINE_LOOP:t.lines+=r*s;break;case i.POINTS:t.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function Lm(i,e,t){const n=new WeakMap,a=new sn;function s(c,r,u){const d=c.morphTargetInfluences,p=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,v=p!==void 0?p.length:0;let f=n.get(r);if(f===void 0||f.count!==v){let A=function(){z.dispose(),n.delete(r),r.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();const g=r.morphAttributes.position!==void 0,E=r.morphAttributes.normal!==void 0,S=r.morphAttributes.color!==void 0,h=r.morphAttributes.position||[],m=r.morphAttributes.normal||[],R=r.morphAttributes.color||[];let P=0;g===!0&&(P=1),E===!0&&(P=2),S===!0&&(P=3);let N=r.attributes.position.count*P,W=1;N>e.maxTextureSize&&(W=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const I=new Float32Array(N*W*4*v),z=new cu(I,N,W,v);z.type=Pi,z.needsUpdate=!0;const F=P*4;for(let T=0;T<v;T++){const O=h[T],Z=m[T],K=R[T],Y=N*W*4*T;for(let se=0;se<O.count;se++){const re=se*F;g===!0&&(a.fromBufferAttribute(O,se),I[Y+re+0]=a.x,I[Y+re+1]=a.y,I[Y+re+2]=a.z,I[Y+re+3]=0),E===!0&&(a.fromBufferAttribute(Z,se),I[Y+re+4]=a.x,I[Y+re+5]=a.y,I[Y+re+6]=a.z,I[Y+re+7]=0),S===!0&&(a.fromBufferAttribute(K,se),I[Y+re+8]=a.x,I[Y+re+9]=a.y,I[Y+re+10]=a.z,I[Y+re+11]=K.itemSize===4?a.w:1)}}f={count:v,texture:z,size:new Ot(N,W)},n.set(r,f),r.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let g=0;for(let S=0;S<d.length;S++)g+=d[S];const E=r.morphTargetsRelative?1:1-g;u.getUniforms().setValue(i,"morphTargetBaseInfluence",E),u.getUniforms().setValue(i,"morphTargetInfluences",d)}u.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Dm(i,e,t,n){let a=new WeakMap;function s(u){const d=n.render.frame,p=u.geometry,v=e.get(u,p);if(a.get(v)!==d&&(e.update(v),a.set(v,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",r)===!1&&u.addEventListener("dispose",r),a.get(u)!==d&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),a.set(u,d))),u.isSkinnedMesh){const f=u.skeleton;a.get(f)!==d&&(f.update(),a.set(f,d))}return v}function c(){a=new WeakMap}function r(u){const d=u.target;d.removeEventListener("dispose",r),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:c}}class bu extends zn{constructor(e,t,n,a,s,c,r,u,d,p=ja){if(p!==ja&&p!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===ja&&(n=Sa),n===void 0&&p===es&&(n=Qa),super(null,a,s,c,r,u,p,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=r!==void 0?r:Xn,this.minFilter=u!==void 0?u:Xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const yu=new zn,_c=new bu(1,1),Mu=new cu,Su=new gp,Cu=new gu,xc=[],bc=[],yc=new Float32Array(16),Mc=new Float32Array(9),Sc=new Float32Array(4);function as(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let s=xc[a];if(s===void 0&&(s=new Float32Array(a),xc[a]=s),e!==0){n.toArray(s,0);for(let c=1,r=0;c!==e;++c)r+=t,i[c].toArray(s,r)}return s}function rn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ho(i,e){let t=bc[e];t===void 0&&(t=new Int32Array(e),bc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Um(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2fv(this.addr,e),ln(t,e)}}function Nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;i.uniform3fv(this.addr,e),ln(t,e)}}function qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4fv(this.addr,e),ln(t,e)}}function Fm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(rn(t,n))return;Sc.set(n),i.uniformMatrix2fv(this.addr,!1,Sc),ln(t,n)}}function Om(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(rn(t,n))return;Mc.set(n),i.uniformMatrix3fv(this.addr,!1,Mc),ln(t,n)}}function zm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(rn(t,n))return;yc.set(n),i.uniformMatrix4fv(this.addr,!1,yc),ln(t,n)}}function Bm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2iv(this.addr,e),ln(t,e)}}function km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3iv(this.addr,e),ln(t,e)}}function Vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4iv(this.addr,e),ln(t,e)}}function Gm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2uiv(this.addr,e),ln(t,e)}}function Wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3uiv(this.addr,e),ln(t,e)}}function $m(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4uiv(this.addr,e),ln(t,e)}}function Xm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let s;this.type===i.SAMPLER_2D_SHADOW?(_c.compareFunction=ou,s=_c):s=yu,t.setTexture2D(e||s,a)}function Ym(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||Su,a)}function Zm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||Cu,a)}function Km(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||Mu,a)}function Jm(i){switch(i){case 5126:return Um;case 35664:return Im;case 35665:return Nm;case 35666:return qm;case 35674:return Fm;case 35675:return Om;case 35676:return zm;case 5124:case 35670:return Bm;case 35667:case 35671:return Hm;case 35668:case 35672:return km;case 35669:case 35673:return Vm;case 5125:return Gm;case 36294:return jm;case 36295:return Wm;case 36296:return $m;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return Km}}function Qm(i,e){i.uniform1fv(this.addr,e)}function ev(i,e){const t=as(e,this.size,2);i.uniform2fv(this.addr,t)}function tv(i,e){const t=as(e,this.size,3);i.uniform3fv(this.addr,t)}function nv(i,e){const t=as(e,this.size,4);i.uniform4fv(this.addr,t)}function iv(i,e){const t=as(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function av(i,e){const t=as(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sv(i,e){const t=as(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ov(i,e){i.uniform1iv(this.addr,e)}function rv(i,e){i.uniform2iv(this.addr,e)}function lv(i,e){i.uniform3iv(this.addr,e)}function cv(i,e){i.uniform4iv(this.addr,e)}function uv(i,e){i.uniform1uiv(this.addr,e)}function dv(i,e){i.uniform2uiv(this.addr,e)}function pv(i,e){i.uniform3uiv(this.addr,e)}function fv(i,e){i.uniform4uiv(this.addr,e)}function hv(i,e,t){const n=this.cache,a=e.length,s=Ho(t,a);rn(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||yu,s[c])}function mv(i,e,t){const n=this.cache,a=e.length,s=Ho(t,a);rn(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||Su,s[c])}function vv(i,e,t){const n=this.cache,a=e.length,s=Ho(t,a);rn(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||Cu,s[c])}function gv(i,e,t){const n=this.cache,a=e.length,s=Ho(t,a);rn(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Mu,s[c])}function _v(i){switch(i){case 5126:return Qm;case 35664:return ev;case 35665:return tv;case 35666:return nv;case 35674:return iv;case 35675:return av;case 35676:return sv;case 5124:case 35670:return ov;case 35667:case 35671:return rv;case 35668:case 35672:return lv;case 35669:case 35673:return cv;case 5125:return uv;case 36294:return dv;case 36295:return pv;case 36296:return fv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return mv;case 35680:case 36300:case 36308:case 36293:return vv;case 36289:case 36303:case 36311:case 36292:return gv}}class xv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jm(t.type)}}class bv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_v(t.type)}}class yv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let s=0,c=a.length;s!==c;++s){const r=a[s];r.setValue(e,t[r.id],n)}}}const vr=/(\w+)(\])?(\[|\.)?/g;function Cc(i,e){i.seq.push(e),i.map[e.id]=e}function Mv(i,e,t){const n=i.name,a=n.length;for(vr.lastIndex=0;;){const s=vr.exec(n),c=vr.lastIndex;let r=s[1];const u=s[2]==="]",d=s[3];if(u&&(r=r|0),d===void 0||d==="["&&c+2===a){Cc(t,d===void 0?new xv(r,i,e):new bv(r,i,e));break}else{let v=t.map[r];v===void 0&&(v=new yv(r),Cc(t,v)),t=v}}}class To{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const s=e.getActiveUniform(t,a),c=e.getUniformLocation(t,s.name);Mv(s,c,this)}}setValue(e,t,n,a){const s=this.map[t];s!==void 0&&s.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let s=0,c=t.length;s!==c;++s){const r=t[s],u=n[r.id];u.needsUpdate!==!1&&r.setValue(e,u.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,s=e.length;a!==s;++a){const c=e[a];c.id in t&&n.push(c)}return n}}function Ec(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Sv=37297;let Cv=0;function Ev(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let c=a;c<s;c++){const r=c+1;n.push(`${r===e?">":" "} ${r}: ${t[c]}`)}return n.join(`
`)}function Tv(i){const e=kt.getPrimaries(kt.workingColorSpace),t=kt.getPrimaries(i);let n;switch(e===t?n="":e===Do&&t===Lo?n="LinearDisplayP3ToLinearSRGB":e===Lo&&t===Do&&(n="LinearSRGBToLinearDisplayP3"),i){case Wi:case Oo:return[n,"LinearTransferOETF"];case oi:case dl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Tc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=i.getShaderInfoLog(e).trim();if(n&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const c=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+Ev(i.getShaderSource(e),c)}else return a}function Av(i,e){const t=Tv(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function wv(i,e){let t;switch(e){case jd:t="Linear";break;case Wd:t="Reinhard";break;case $d:t="Cineon";break;case Xd:t="ACESFilmic";break;case Zd:t="AgX";break;case Kd:t="Neutral";break;case Yd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vo=new _e;function Pv(){kt.getLuminanceCoefficients(vo);const i=vo.x.toFixed(4),e=vo.y.toFixed(4),t=vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function Lv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Dv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const s=i.getActiveAttrib(e,a),c=s.name;let r=1;s.type===i.FLOAT_MAT2&&(r=2),s.type===i.FLOAT_MAT3&&(r=3),s.type===i.FLOAT_MAT4&&(r=4),t[c]={type:s.type,location:i.getAttribLocation(e,c),locationSize:r}}return t}function Ts(i){return i!==""}function Ac(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(i){return i.replace(Uv,Nv)}const Iv=new Map;function Nv(i,e){let t=Rt[e];if(t===void 0){const n=Iv.get(e);if(n!==void 0)t=Rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return el(t)}const qv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pc(i){return i.replace(qv,Fv)}function Fv(i,e,t,n){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Rc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Ov(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$c?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===gd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function zv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ka:case Ja:e="ENVMAP_TYPE_CUBE";break;case Fo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ja:e="ENVMAP_MODE_REFRACTION";break}return e}function Hv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case al:e="ENVMAP_BLENDING_MULTIPLY";break;case Vd:e="ENVMAP_BLENDING_MIX";break;case Gd:e="ENVMAP_BLENDING_ADD";break}return e}function kv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Vv(i,e,t,n){const a=i.getContext(),s=t.defines;let c=t.vertexShader,r=t.fragmentShader;const u=Ov(t),d=zv(t),p=Bv(t),v=Hv(t),f=kv(t),g=Rv(t),E=Lv(s),S=a.createProgram();let h,m,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ts).join(`
`),h.length>0&&(h+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ts).join(`
`),m.length>0&&(m+=`
`)):(h=[Rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),m=[Rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?Rt.tonemapping_pars_fragment:"",t.toneMapping!==Vi?wv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Rt.colorspace_pars_fragment,Av("linearToOutputTexel",t.outputColorSpace),Pv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ts).join(`
`)),c=el(c),c=Ac(c,t),c=wc(c,t),r=el(r),r=Ac(r,t),r=wc(r,t),c=Pc(c),r=Pc(r),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,h=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,m=["#define varying in",t.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const P=R+h+c,N=R+m+r,W=Ec(a,a.VERTEX_SHADER,P),I=Ec(a,a.FRAGMENT_SHADER,N);a.attachShader(S,W),a.attachShader(S,I),t.index0AttributeName!==void 0?a.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(S,0,"position"),a.linkProgram(S);function z(O){if(i.debug.checkShaderErrors){const Z=a.getProgramInfoLog(S).trim(),K=a.getShaderInfoLog(W).trim(),Y=a.getShaderInfoLog(I).trim();let se=!0,re=!0;if(a.getProgramParameter(S,a.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,S,W,I);else{const de=Tc(a,W,"vertex"),J=Tc(a,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(S,a.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+Z+`
`+de+`
`+J)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(K===""||Y==="")&&(re=!1);re&&(O.diagnostics={runnable:se,programLog:Z,vertexShader:{log:K,prefix:h},fragmentShader:{log:Y,prefix:m}})}a.deleteShader(W),a.deleteShader(I),F=new To(a,S),A=Dv(a,S)}let F;this.getUniforms=function(){return F===void 0&&z(this),F};let A;this.getAttributes=function(){return A===void 0&&z(this),A};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=a.getProgramParameter(S,Sv)),T},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cv++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=W,this.fragmentShader=I,this}let Gv=0;class jv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(s)===!1&&(c.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Wv(e),t.set(e,n)),n}}class Wv{constructor(e){this.id=Gv++,this.code=e,this.usedTimes=0}}function $v(i,e,t,n,a,s,c){const r=new du,u=new jv,d=new Set,p=[],v=a.logarithmicDepthBuffer,f=a.vertexTextures;let g=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(A){return d.add(A),A===0?"uv":`uv${A}`}function h(A,T,O,Z,K){const Y=Z.fog,se=K.geometry,re=A.isMeshStandardMaterial?Z.environment:null,de=(A.isMeshStandardMaterial?t:e).get(A.envMap||re),J=de&&de.mapping===Fo?de.image.height:null,De=E[A.type];A.precision!==null&&(g=a.getMaxPrecision(A.precision),g!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const ae=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Me=ae!==void 0?ae.length:0;let Je=0;se.morphAttributes.position!==void 0&&(Je=1),se.morphAttributes.normal!==void 0&&(Je=2),se.morphAttributes.color!==void 0&&(Je=3);let je,ie,Ee,Re;if(De){const et=ri[De];je=et.vertexShader,ie=et.fragmentShader}else je=A.vertexShader,ie=A.fragmentShader,u.update(A),Ee=u.getVertexShaderID(A),Re=u.getFragmentShaderID(A);const we=i.getRenderTarget(),ke=K.isInstancedMesh===!0,qe=K.isBatchedMesh===!0,ze=!!A.map,at=!!A.matcap,q=!!de,Ye=!!A.aoMap,nt=!!A.lightMap,He=!!A.bumpMap,Le=!!A.normalMap,st=!!A.displacementMap,Ne=!!A.emissiveMap,Fe=!!A.metalnessMap,U=!!A.roughnessMap,_=A.anisotropy>0,H=A.clearcoat>0,xe=A.dispersion>0,pe=A.iridescence>0,ue=A.sheen>0,Ge=A.transmission>0,Se=_&&!!A.anisotropyMap,Pe=H&&!!A.clearcoatMap,Ze=H&&!!A.clearcoatNormalMap,k=H&&!!A.clearcoatRoughnessMap,he=pe&&!!A.iridescenceMap,tt=pe&&!!A.iridescenceThicknessMap,X=ue&&!!A.sheenColorMap,me=ue&&!!A.sheenRoughnessMap,We=!!A.specularMap,Ke=!!A.specularColorMap,ct=!!A.specularIntensityMap,G=Ge&&!!A.transmissionMap,Ce=Ge&&!!A.thicknessMap,be=!!A.gradientMap,ve=!!A.alphaMap,Te=A.alphaTest>0,$e=!!A.alphaHash,Qe=!!A.extensions;let lt=Vi;A.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(lt=i.toneMapping);const ut={shaderID:De,shaderType:A.type,shaderName:A.name,vertexShader:je,fragmentShader:ie,defines:A.defines,customVertexShaderID:Ee,customFragmentShaderID:Re,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:qe,batchingColor:qe&&K._colorsTexture!==null,instancing:ke,instancingColor:ke&&K.instanceColor!==null,instancingMorph:ke&&K.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:we===null?i.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Wi,alphaToCoverage:!!A.alphaToCoverage,map:ze,matcap:at,envMap:q,envMapMode:q&&de.mapping,envMapCubeUVHeight:J,aoMap:Ye,lightMap:nt,bumpMap:He,normalMap:Le,displacementMap:f&&st,emissiveMap:Ne,normalMapObjectSpace:Le&&A.normalMapType===tp,normalMapTangentSpace:Le&&A.normalMapType===su,metalnessMap:Fe,roughnessMap:U,anisotropy:_,anisotropyMap:Se,clearcoat:H,clearcoatMap:Pe,clearcoatNormalMap:Ze,clearcoatRoughnessMap:k,dispersion:xe,iridescence:pe,iridescenceMap:he,iridescenceThicknessMap:tt,sheen:ue,sheenColorMap:X,sheenRoughnessMap:me,specularMap:We,specularColorMap:Ke,specularIntensityMap:ct,transmission:Ge,transmissionMap:G,thicknessMap:Ce,gradientMap:be,opaque:A.transparent===!1&&A.blending===Ga&&A.alphaToCoverage===!1,alphaMap:ve,alphaTest:Te,alphaHash:$e,combine:A.combine,mapUv:ze&&S(A.map.channel),aoMapUv:Ye&&S(A.aoMap.channel),lightMapUv:nt&&S(A.lightMap.channel),bumpMapUv:He&&S(A.bumpMap.channel),normalMapUv:Le&&S(A.normalMap.channel),displacementMapUv:st&&S(A.displacementMap.channel),emissiveMapUv:Ne&&S(A.emissiveMap.channel),metalnessMapUv:Fe&&S(A.metalnessMap.channel),roughnessMapUv:U&&S(A.roughnessMap.channel),anisotropyMapUv:Se&&S(A.anisotropyMap.channel),clearcoatMapUv:Pe&&S(A.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&S(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&S(A.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&S(A.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&S(A.iridescenceThicknessMap.channel),sheenColorMapUv:X&&S(A.sheenColorMap.channel),sheenRoughnessMapUv:me&&S(A.sheenRoughnessMap.channel),specularMapUv:We&&S(A.specularMap.channel),specularColorMapUv:Ke&&S(A.specularColorMap.channel),specularIntensityMapUv:ct&&S(A.specularIntensityMap.channel),transmissionMapUv:G&&S(A.transmissionMap.channel),thicknessMapUv:Ce&&S(A.thicknessMap.channel),alphaMapUv:ve&&S(A.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(Le||_),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!se.attributes.uv&&(ze||ve),fog:!!Y,useFog:A.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:K.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Je,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:lt,decodeVideoTexture:ze&&A.map.isVideoTexture===!0&&kt.getTransfer(A.map.colorSpace)===$t,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===wi,flipSided:A.side===On,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Qe&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&A.extensions.multiDraw===!0||qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ut.vertexUv1s=d.has(1),ut.vertexUv2s=d.has(2),ut.vertexUv3s=d.has(3),d.clear(),ut}function m(A){const T=[];if(A.shaderID?T.push(A.shaderID):(T.push(A.customVertexShaderID),T.push(A.customFragmentShaderID)),A.defines!==void 0)for(const O in A.defines)T.push(O),T.push(A.defines[O]);return A.isRawShaderMaterial===!1&&(R(T,A),P(T,A),T.push(i.outputColorSpace)),T.push(A.customProgramCacheKey),T.join()}function R(A,T){A.push(T.precision),A.push(T.outputColorSpace),A.push(T.envMapMode),A.push(T.envMapCubeUVHeight),A.push(T.mapUv),A.push(T.alphaMapUv),A.push(T.lightMapUv),A.push(T.aoMapUv),A.push(T.bumpMapUv),A.push(T.normalMapUv),A.push(T.displacementMapUv),A.push(T.emissiveMapUv),A.push(T.metalnessMapUv),A.push(T.roughnessMapUv),A.push(T.anisotropyMapUv),A.push(T.clearcoatMapUv),A.push(T.clearcoatNormalMapUv),A.push(T.clearcoatRoughnessMapUv),A.push(T.iridescenceMapUv),A.push(T.iridescenceThicknessMapUv),A.push(T.sheenColorMapUv),A.push(T.sheenRoughnessMapUv),A.push(T.specularMapUv),A.push(T.specularColorMapUv),A.push(T.specularIntensityMapUv),A.push(T.transmissionMapUv),A.push(T.thicknessMapUv),A.push(T.combine),A.push(T.fogExp2),A.push(T.sizeAttenuation),A.push(T.morphTargetsCount),A.push(T.morphAttributeCount),A.push(T.numDirLights),A.push(T.numPointLights),A.push(T.numSpotLights),A.push(T.numSpotLightMaps),A.push(T.numHemiLights),A.push(T.numRectAreaLights),A.push(T.numDirLightShadows),A.push(T.numPointLightShadows),A.push(T.numSpotLightShadows),A.push(T.numSpotLightShadowsWithMaps),A.push(T.numLightProbes),A.push(T.shadowMapType),A.push(T.toneMapping),A.push(T.numClippingPlanes),A.push(T.numClipIntersection),A.push(T.depthPacking)}function P(A,T){r.disableAll(),T.supportsVertexTextures&&r.enable(0),T.instancing&&r.enable(1),T.instancingColor&&r.enable(2),T.instancingMorph&&r.enable(3),T.matcap&&r.enable(4),T.envMap&&r.enable(5),T.normalMapObjectSpace&&r.enable(6),T.normalMapTangentSpace&&r.enable(7),T.clearcoat&&r.enable(8),T.iridescence&&r.enable(9),T.alphaTest&&r.enable(10),T.vertexColors&&r.enable(11),T.vertexAlphas&&r.enable(12),T.vertexUv1s&&r.enable(13),T.vertexUv2s&&r.enable(14),T.vertexUv3s&&r.enable(15),T.vertexTangents&&r.enable(16),T.anisotropy&&r.enable(17),T.alphaHash&&r.enable(18),T.batching&&r.enable(19),T.dispersion&&r.enable(20),T.batchingColor&&r.enable(21),A.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.skinning&&r.enable(4),T.morphTargets&&r.enable(5),T.morphNormals&&r.enable(6),T.morphColors&&r.enable(7),T.premultipliedAlpha&&r.enable(8),T.shadowMapEnabled&&r.enable(9),T.doubleSided&&r.enable(10),T.flipSided&&r.enable(11),T.useDepthPacking&&r.enable(12),T.dithering&&r.enable(13),T.transmission&&r.enable(14),T.sheen&&r.enable(15),T.opaque&&r.enable(16),T.pointsUvs&&r.enable(17),T.decodeVideoTexture&&r.enable(18),T.alphaToCoverage&&r.enable(19),A.push(r.mask)}function N(A){const T=E[A.type];let O;if(T){const Z=ri[T];O=Pp.clone(Z.uniforms)}else O=A.uniforms;return O}function W(A,T){let O;for(let Z=0,K=p.length;Z<K;Z++){const Y=p[Z];if(Y.cacheKey===T){O=Y,++O.usedTimes;break}}return O===void 0&&(O=new Vv(i,T,A,s),p.push(O)),O}function I(A){if(--A.usedTimes===0){const T=p.indexOf(A);p[T]=p[p.length-1],p.pop(),A.destroy()}}function z(A){u.remove(A)}function F(){u.dispose()}return{getParameters:h,getProgramCacheKey:m,getUniforms:N,acquireProgram:W,releaseProgram:I,releaseShaderCache:z,programs:p,dispose:F}}function Xv(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let r=i.get(c);return r===void 0&&(r={},i.set(c,r)),r}function n(c){i.delete(c)}function a(c,r,u){i.get(c)[r]=u}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:s}}function Yv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Lc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Dc(){const i=[];let e=0;const t=[],n=[],a=[];function s(){e=0,t.length=0,n.length=0,a.length=0}function c(v,f,g,E,S,h){let m=i[e];return m===void 0?(m={id:v.id,object:v,geometry:f,material:g,groupOrder:E,renderOrder:v.renderOrder,z:S,group:h},i[e]=m):(m.id=v.id,m.object=v,m.geometry=f,m.material=g,m.groupOrder=E,m.renderOrder=v.renderOrder,m.z=S,m.group=h),e++,m}function r(v,f,g,E,S,h){const m=c(v,f,g,E,S,h);g.transmission>0?n.push(m):g.transparent===!0?a.push(m):t.push(m)}function u(v,f,g,E,S,h){const m=c(v,f,g,E,S,h);g.transmission>0?n.unshift(m):g.transparent===!0?a.unshift(m):t.unshift(m)}function d(v,f){t.length>1&&t.sort(v||Yv),n.length>1&&n.sort(f||Lc),a.length>1&&a.sort(f||Lc)}function p(){for(let v=e,f=i.length;v<f;v++){const g=i[v];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:a,init:s,push:r,unshift:u,finish:p,sort:d}}function Zv(){let i=new WeakMap;function e(n,a){const s=i.get(n);let c;return s===void 0?(c=new Dc,i.set(n,[c])):a>=s.length?(c=new Dc,s.push(c)):c=s[a],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function Kv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new _e,color:new Tt};break;case"SpotLight":t={position:new _e,direction:new _e,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new _e,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new _e,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":t={color:new Tt,position:new _e,halfWidth:new _e,halfHeight:new _e};break}return i[e.id]=t,t}}}function Jv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Qv=0;function eg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function tg(i){const e=new Kv,t=Jv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new _e);const a=new _e,s=new tn,c=new tn;function r(d){let p=0,v=0,f=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let g=0,E=0,S=0,h=0,m=0,R=0,P=0,N=0,W=0,I=0,z=0;d.sort(eg);for(let A=0,T=d.length;A<T;A++){const O=d[A],Z=O.color,K=O.intensity,Y=O.distance,se=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)p+=Z.r*K,v+=Z.g*K,f+=Z.b*K;else if(O.isLightProbe){for(let re=0;re<9;re++)n.probe[re].addScaledVector(O.sh.coefficients[re],K);z++}else if(O.isDirectionalLight){const re=e.get(O);if(re.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const de=O.shadow,J=t.get(O);J.shadowIntensity=de.intensity,J.shadowBias=de.bias,J.shadowNormalBias=de.normalBias,J.shadowRadius=de.radius,J.shadowMapSize=de.mapSize,n.directionalShadow[g]=J,n.directionalShadowMap[g]=se,n.directionalShadowMatrix[g]=O.shadow.matrix,R++}n.directional[g]=re,g++}else if(O.isSpotLight){const re=e.get(O);re.position.setFromMatrixPosition(O.matrixWorld),re.color.copy(Z).multiplyScalar(K),re.distance=Y,re.coneCos=Math.cos(O.angle),re.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),re.decay=O.decay,n.spot[S]=re;const de=O.shadow;if(O.map&&(n.spotLightMap[W]=O.map,W++,de.updateMatrices(O),O.castShadow&&I++),n.spotLightMatrix[S]=de.matrix,O.castShadow){const J=t.get(O);J.shadowIntensity=de.intensity,J.shadowBias=de.bias,J.shadowNormalBias=de.normalBias,J.shadowRadius=de.radius,J.shadowMapSize=de.mapSize,n.spotShadow[S]=J,n.spotShadowMap[S]=se,N++}S++}else if(O.isRectAreaLight){const re=e.get(O);re.color.copy(Z).multiplyScalar(K),re.halfWidth.set(O.width*.5,0,0),re.halfHeight.set(0,O.height*.5,0),n.rectArea[h]=re,h++}else if(O.isPointLight){const re=e.get(O);if(re.color.copy(O.color).multiplyScalar(O.intensity),re.distance=O.distance,re.decay=O.decay,O.castShadow){const de=O.shadow,J=t.get(O);J.shadowIntensity=de.intensity,J.shadowBias=de.bias,J.shadowNormalBias=de.normalBias,J.shadowRadius=de.radius,J.shadowMapSize=de.mapSize,J.shadowCameraNear=de.camera.near,J.shadowCameraFar=de.camera.far,n.pointShadow[E]=J,n.pointShadowMap[E]=se,n.pointShadowMatrix[E]=O.shadow.matrix,P++}n.point[E]=re,E++}else if(O.isHemisphereLight){const re=e.get(O);re.skyColor.copy(O.color).multiplyScalar(K),re.groundColor.copy(O.groundColor).multiplyScalar(K),n.hemi[m]=re,m++}}h>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=v,n.ambient[2]=f;const F=n.hash;(F.directionalLength!==g||F.pointLength!==E||F.spotLength!==S||F.rectAreaLength!==h||F.hemiLength!==m||F.numDirectionalShadows!==R||F.numPointShadows!==P||F.numSpotShadows!==N||F.numSpotMaps!==W||F.numLightProbes!==z)&&(n.directional.length=g,n.spot.length=S,n.rectArea.length=h,n.point.length=E,n.hemi.length=m,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=N,n.spotShadowMap.length=N,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=N+W-I,n.spotLightMap.length=W,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=z,F.directionalLength=g,F.pointLength=E,F.spotLength=S,F.rectAreaLength=h,F.hemiLength=m,F.numDirectionalShadows=R,F.numPointShadows=P,F.numSpotShadows=N,F.numSpotMaps=W,F.numLightProbes=z,n.version=Qv++)}function u(d,p){let v=0,f=0,g=0,E=0,S=0;const h=p.matrixWorldInverse;for(let m=0,R=d.length;m<R;m++){const P=d[m];if(P.isDirectionalLight){const N=n.directional[v];N.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(h),v++}else if(P.isSpotLight){const N=n.spot[g];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(h),N.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(h),g++}else if(P.isRectAreaLight){const N=n.rectArea[E];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(h),c.identity(),s.copy(P.matrixWorld),s.premultiply(h),c.extractRotation(s),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(c),N.halfHeight.applyMatrix4(c),E++}else if(P.isPointLight){const N=n.point[f];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(h),f++}else if(P.isHemisphereLight){const N=n.hemi[S];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(h),S++}}}return{setup:r,setupView:u,state:n}}function Uc(i){const e=new tg(i),t=[],n=[];function a(p){d.camera=p,t.length=0,n.length=0}function s(p){t.push(p)}function c(p){n.push(p)}function r(){e.setup(t)}function u(p){e.setupView(t,p)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:d,setupLights:r,setupLightsView:u,pushLight:s,pushShadow:c}}function ng(i){let e=new WeakMap;function t(a,s=0){const c=e.get(a);let r;return c===void 0?(r=new Uc(i),e.set(a,[r])):s>=c.length?(r=new Uc(i),c.push(r)):r=c[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}class ig extends is{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ag extends is{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,og=`uniform sampler2D shadow_pass;
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
}`;function rg(i,e,t){let n=new fl;const a=new Ot,s=new Ot,c=new sn,r=new ig({depthPacking:ep}),u=new ag,d={},p=t.maxTextureSize,v={[Gi]:On,[On]:Gi,[wi]:wi},f=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:sg,fragmentShader:og}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const E=new kn;E.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Yn(E,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$c;let m=this.type;this.render=function(I,z,F){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||I.length===0)return;const A=i.getRenderTarget(),T=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(ki),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const K=m!==Ai&&this.type===Ai,Y=m===Ai&&this.type!==Ai;for(let se=0,re=I.length;se<re;se++){const de=I[se],J=de.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;a.copy(J.mapSize);const De=J.getFrameExtents();if(a.multiply(De),s.copy(J.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(s.x=Math.floor(p/De.x),a.x=s.x*De.x,J.mapSize.x=s.x),a.y>p&&(s.y=Math.floor(p/De.y),a.y=s.y*De.y,J.mapSize.y=s.y)),J.map===null||K===!0||Y===!0){const Me=this.type!==Ai?{minFilter:Xn,magFilter:Xn}:{};J.map!==null&&J.map.dispose(),J.map=new Ca(a.x,a.y,Me),J.map.texture.name=de.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const ae=J.getViewportCount();for(let Me=0;Me<ae;Me++){const Je=J.getViewport(Me);c.set(s.x*Je.x,s.y*Je.y,s.x*Je.z,s.y*Je.w),Z.viewport(c),J.updateMatrices(de,Me),n=J.getFrustum(),N(z,F,J.camera,de,this.type)}J.isPointLightShadow!==!0&&this.type===Ai&&R(J,F),J.needsUpdate=!1}m=this.type,h.needsUpdate=!1,i.setRenderTarget(A,T,O)};function R(I,z){const F=e.update(S);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,g.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ca(a.x,a.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(z,null,F,f,S,null),g.uniforms.shadow_pass.value=I.mapPass.texture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(z,null,F,g,S,null)}function P(I,z,F,A){let T=null;const O=F.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(O!==void 0)T=O;else if(T=F.isPointLight===!0?u:r,i.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const Z=T.uuid,K=z.uuid;let Y=d[Z];Y===void 0&&(Y={},d[Z]=Y);let se=Y[K];se===void 0&&(se=T.clone(),Y[K]=se,z.addEventListener("dispose",W)),T=se}if(T.visible=z.visible,T.wireframe=z.wireframe,A===Ai?T.side=z.shadowSide!==null?z.shadowSide:z.side:T.side=z.shadowSide!==null?z.shadowSide:v[z.side],T.alphaMap=z.alphaMap,T.alphaTest=z.alphaTest,T.map=z.map,T.clipShadows=z.clipShadows,T.clippingPlanes=z.clippingPlanes,T.clipIntersection=z.clipIntersection,T.displacementMap=z.displacementMap,T.displacementScale=z.displacementScale,T.displacementBias=z.displacementBias,T.wireframeLinewidth=z.wireframeLinewidth,T.linewidth=z.linewidth,F.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Z=i.properties.get(T);Z.light=F}return T}function N(I,z,F,A,T){if(I.visible===!1)return;if(I.layers.test(z.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&T===Ai)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,I.matrixWorld);const K=e.update(I),Y=I.material;if(Array.isArray(Y)){const se=K.groups;for(let re=0,de=se.length;re<de;re++){const J=se[re],De=Y[J.materialIndex];if(De&&De.visible){const ae=P(I,De,A,T);I.onBeforeShadow(i,I,z,F,K,ae,J),i.renderBufferDirect(F,null,K,ae,I,J),I.onAfterShadow(i,I,z,F,K,ae,J)}}}else if(Y.visible){const se=P(I,Y,A,T);I.onBeforeShadow(i,I,z,F,K,se,null),i.renderBufferDirect(F,null,K,se,I,null),I.onAfterShadow(i,I,z,F,K,se,null)}}const Z=I.children;for(let K=0,Y=Z.length;K<Y;K++)N(Z[K],z,F,A,T)}function W(I){I.target.removeEventListener("dispose",W);for(const F in d){const A=d[F],T=I.target.uuid;T in A&&(A[T].dispose(),delete A[T])}}}function lg(i){function e(){let G=!1;const Ce=new sn;let be=null;const ve=new sn(0,0,0,0);return{setMask:function(Te){be!==Te&&!G&&(i.colorMask(Te,Te,Te,Te),be=Te)},setLocked:function(Te){G=Te},setClear:function(Te,$e,Qe,lt,ut){ut===!0&&(Te*=lt,$e*=lt,Qe*=lt),Ce.set(Te,$e,Qe,lt),ve.equals(Ce)===!1&&(i.clearColor(Te,$e,Qe,lt),ve.copy(Ce))},reset:function(){G=!1,be=null,ve.set(-1,0,0,0)}}}function t(){let G=!1,Ce=null,be=null,ve=null;return{setTest:function(Te){Te?Re(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(Te){Ce!==Te&&!G&&(i.depthMask(Te),Ce=Te)},setFunc:function(Te){if(be!==Te){switch(Te){case qd:i.depthFunc(i.NEVER);break;case Fd:i.depthFunc(i.ALWAYS);break;case Od:i.depthFunc(i.LESS);break;case Po:i.depthFunc(i.LEQUAL);break;case zd:i.depthFunc(i.EQUAL);break;case Bd:i.depthFunc(i.GEQUAL);break;case Hd:i.depthFunc(i.GREATER);break;case kd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=Te}},setLocked:function(Te){G=Te},setClear:function(Te){ve!==Te&&(i.clearDepth(Te),ve=Te)},reset:function(){G=!1,Ce=null,be=null,ve=null}}}function n(){let G=!1,Ce=null,be=null,ve=null,Te=null,$e=null,Qe=null,lt=null,ut=null;return{setTest:function(et){G||(et?Re(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(et){Ce!==et&&!G&&(i.stencilMask(et),Ce=et)},setFunc:function(et,dt,pt){(be!==et||ve!==dt||Te!==pt)&&(i.stencilFunc(et,dt,pt),be=et,ve=dt,Te=pt)},setOp:function(et,dt,pt){($e!==et||Qe!==dt||lt!==pt)&&(i.stencilOp(et,dt,pt),$e=et,Qe=dt,lt=pt)},setLocked:function(et){G=et},setClear:function(et){ut!==et&&(i.clearStencil(et),ut=et)},reset:function(){G=!1,Ce=null,be=null,ve=null,Te=null,$e=null,Qe=null,lt=null,ut=null}}}const a=new e,s=new t,c=new n,r=new WeakMap,u=new WeakMap;let d={},p={},v=new WeakMap,f=[],g=null,E=!1,S=null,h=null,m=null,R=null,P=null,N=null,W=null,I=new Tt(0,0,0),z=0,F=!1,A=null,T=null,O=null,Z=null,K=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,re=0;const de=i.getParameter(i.VERSION);de.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(de)[1]),se=re>=1):de.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),se=re>=2);let J=null,De={};const ae=i.getParameter(i.SCISSOR_BOX),Me=i.getParameter(i.VIEWPORT),Je=new sn().fromArray(ae),je=new sn().fromArray(Me);function ie(G,Ce,be,ve){const Te=new Uint8Array(4),$e=i.createTexture();i.bindTexture(G,$e),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<be;Qe++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Ce,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(Ce+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return $e}const Ee={};Ee[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),Ee[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ee[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),c.setClear(0),Re(i.DEPTH_TEST),s.setFunc(Po),He(!1),Le(zl),Re(i.CULL_FACE),Ye(ki);function Re(G){d[G]!==!0&&(i.enable(G),d[G]=!0)}function we(G){d[G]!==!1&&(i.disable(G),d[G]=!1)}function ke(G,Ce){return p[G]!==Ce?(i.bindFramebuffer(G,Ce),p[G]=Ce,G===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Ce),G===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Ce),!0):!1}function qe(G,Ce){let be=f,ve=!1;if(G){be=v.get(Ce),be===void 0&&(be=[],v.set(Ce,be));const Te=G.textures;if(be.length!==Te.length||be[0]!==i.COLOR_ATTACHMENT0){for(let $e=0,Qe=Te.length;$e<Qe;$e++)be[$e]=i.COLOR_ATTACHMENT0+$e;be.length=Te.length,ve=!0}}else be[0]!==i.BACK&&(be[0]=i.BACK,ve=!0);ve&&i.drawBuffers(be)}function ze(G){return g!==G?(i.useProgram(G),g=G,!0):!1}const at={[_a]:i.FUNC_ADD,[xd]:i.FUNC_SUBTRACT,[bd]:i.FUNC_REVERSE_SUBTRACT};at[yd]=i.MIN,at[Md]=i.MAX;const q={[Sd]:i.ZERO,[Cd]:i.ONE,[Ed]:i.SRC_COLOR,[yr]:i.SRC_ALPHA,[Ld]:i.SRC_ALPHA_SATURATE,[Pd]:i.DST_COLOR,[Ad]:i.DST_ALPHA,[Td]:i.ONE_MINUS_SRC_COLOR,[Mr]:i.ONE_MINUS_SRC_ALPHA,[Rd]:i.ONE_MINUS_DST_COLOR,[wd]:i.ONE_MINUS_DST_ALPHA,[Dd]:i.CONSTANT_COLOR,[Ud]:i.ONE_MINUS_CONSTANT_COLOR,[Id]:i.CONSTANT_ALPHA,[Nd]:i.ONE_MINUS_CONSTANT_ALPHA};function Ye(G,Ce,be,ve,Te,$e,Qe,lt,ut,et){if(G===ki){E===!0&&(we(i.BLEND),E=!1);return}if(E===!1&&(Re(i.BLEND),E=!0),G!==_d){if(G!==S||et!==F){if((h!==_a||P!==_a)&&(i.blendEquation(i.FUNC_ADD),h=_a,P=_a),et)switch(G){case Ga:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bl:i.blendFunc(i.ONE,i.ONE);break;case Hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ga:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}m=null,R=null,N=null,W=null,I.set(0,0,0),z=0,S=G,F=et}return}Te=Te||Ce,$e=$e||be,Qe=Qe||ve,(Ce!==h||Te!==P)&&(i.blendEquationSeparate(at[Ce],at[Te]),h=Ce,P=Te),(be!==m||ve!==R||$e!==N||Qe!==W)&&(i.blendFuncSeparate(q[be],q[ve],q[$e],q[Qe]),m=be,R=ve,N=$e,W=Qe),(lt.equals(I)===!1||ut!==z)&&(i.blendColor(lt.r,lt.g,lt.b,ut),I.copy(lt),z=ut),S=G,F=!1}function nt(G,Ce){G.side===wi?we(i.CULL_FACE):Re(i.CULL_FACE);let be=G.side===On;Ce&&(be=!be),He(be),G.blending===Ga&&G.transparent===!1?Ye(ki):Ye(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),s.setFunc(G.depthFunc),s.setTest(G.depthTest),s.setMask(G.depthWrite),a.setMask(G.colorWrite);const ve=G.stencilWrite;c.setTest(ve),ve&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ne(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Re(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(G){A!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),A=G)}function Le(G){G!==md?(Re(i.CULL_FACE),G!==T&&(G===zl?i.cullFace(i.BACK):G===vd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),T=G}function st(G){G!==O&&(se&&i.lineWidth(G),O=G)}function Ne(G,Ce,be){G?(Re(i.POLYGON_OFFSET_FILL),(Z!==Ce||K!==be)&&(i.polygonOffset(Ce,be),Z=Ce,K=be)):we(i.POLYGON_OFFSET_FILL)}function Fe(G){G?Re(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function U(G){G===void 0&&(G=i.TEXTURE0+Y-1),J!==G&&(i.activeTexture(G),J=G)}function _(G,Ce,be){be===void 0&&(J===null?be=i.TEXTURE0+Y-1:be=J);let ve=De[be];ve===void 0&&(ve={type:void 0,texture:void 0},De[be]=ve),(ve.type!==G||ve.texture!==Ce)&&(J!==be&&(i.activeTexture(be),J=be),i.bindTexture(G,Ce||Ee[G]),ve.type=G,ve.texture=Ce)}function H(){const G=De[J];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function xe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ge(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ze(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function k(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function tt(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function X(G){Je.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Je.copy(G))}function me(G){je.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),je.copy(G))}function We(G,Ce){let be=u.get(Ce);be===void 0&&(be=new WeakMap,u.set(Ce,be));let ve=be.get(G);ve===void 0&&(ve=i.getUniformBlockIndex(Ce,G.name),be.set(G,ve))}function Ke(G,Ce){const ve=u.get(Ce).get(G);r.get(Ce)!==ve&&(i.uniformBlockBinding(Ce,ve,G.__bindingPointIndex),r.set(Ce,ve))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},J=null,De={},p={},v=new WeakMap,f=[],g=null,E=!1,S=null,h=null,m=null,R=null,P=null,N=null,W=null,I=new Tt(0,0,0),z=0,F=!1,A=null,T=null,O=null,Z=null,K=null,Je.set(0,0,i.canvas.width,i.canvas.height),je.set(0,0,i.canvas.width,i.canvas.height),a.reset(),s.reset(),c.reset()}return{buffers:{color:a,depth:s,stencil:c},enable:Re,disable:we,bindFramebuffer:ke,drawBuffers:qe,useProgram:ze,setBlending:Ye,setMaterial:nt,setFlipSided:He,setCullFace:Le,setLineWidth:st,setPolygonOffset:Ne,setScissorTest:Fe,activeTexture:U,bindTexture:_,unbindTexture:H,compressedTexImage2D:xe,compressedTexImage3D:pe,texImage2D:he,texImage3D:tt,updateUBOMapping:We,uniformBlockBinding:Ke,texStorage2D:Ze,texStorage3D:k,texSubImage2D:ue,texSubImage3D:Ge,compressedTexSubImage2D:Se,compressedTexSubImage3D:Pe,scissor:X,viewport:me,reset:ct}}function Ic(i,e,t,n){const a=cg(n);switch(t){case Jc:return i*e;case eu:return i*e;case tu:return i*e*2;case nu:return i*e/a.components*a.byteLength;case ll:return i*e/a.components*a.byteLength;case iu:return i*e*2/a.components*a.byteLength;case cl:return i*e*2/a.components*a.byteLength;case Qc:return i*e*3/a.components*a.byteLength;case ei:return i*e*4/a.components*a.byteLength;case ul:return i*e*4/a.components*a.byteLength;case yo:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case So:case Co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wr:case Rr:return Math.max(i,16)*Math.max(e,8)/4;case Ar:case Pr:return Math.max(i,8)*Math.max(e,8)/2;case Lr:case Dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case qr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Fr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Or:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case zr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Br:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Hr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case kr:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Vr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Gr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case jr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Wr:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $r:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Eo:case Xr:case Yr:return Math.ceil(i/4)*Math.ceil(e/4)*16;case au:case Zr:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Kr:case Jr:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cg(i){switch(i){case Li:case Yc:return{byteLength:1,components:1};case Ps:case Zc:case Ls:return{byteLength:2,components:1};case ol:case rl:return{byteLength:2,components:4};case Sa:case sl:case Pi:return{byteLength:4,components:1};case Kc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ug(i,e,t,n,a,s,c){const r=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ot,p=new WeakMap;let v;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,_){return g?new OffscreenCanvas(U,_):Io("canvas")}function S(U,_,H){let xe=1;const pe=Fe(U);if((pe.width>H||pe.height>H)&&(xe=H/Math.max(pe.width,pe.height)),xe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ue=Math.floor(xe*pe.width),Ge=Math.floor(xe*pe.height);v===void 0&&(v=E(ue,Ge));const Se=_?E(ue,Ge):v;return Se.width=ue,Se.height=Ge,Se.getContext("2d").drawImage(U,0,0,ue,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+ue+"x"+Ge+")."),Se}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),U;return U}function h(U){return U.generateMipmaps&&U.minFilter!==Xn&&U.minFilter!==Qn}function m(U){i.generateMipmap(U)}function R(U,_,H,xe,pe=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ue=_;if(_===i.RED&&(H===i.FLOAT&&(ue=i.R32F),H===i.HALF_FLOAT&&(ue=i.R16F),H===i.UNSIGNED_BYTE&&(ue=i.R8)),_===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(ue=i.R8UI),H===i.UNSIGNED_SHORT&&(ue=i.R16UI),H===i.UNSIGNED_INT&&(ue=i.R32UI),H===i.BYTE&&(ue=i.R8I),H===i.SHORT&&(ue=i.R16I),H===i.INT&&(ue=i.R32I)),_===i.RG&&(H===i.FLOAT&&(ue=i.RG32F),H===i.HALF_FLOAT&&(ue=i.RG16F),H===i.UNSIGNED_BYTE&&(ue=i.RG8)),_===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(ue=i.RG8UI),H===i.UNSIGNED_SHORT&&(ue=i.RG16UI),H===i.UNSIGNED_INT&&(ue=i.RG32UI),H===i.BYTE&&(ue=i.RG8I),H===i.SHORT&&(ue=i.RG16I),H===i.INT&&(ue=i.RG32I)),_===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(ue=i.RGB9_E5),_===i.RGBA){const Ge=pe?Ro:kt.getTransfer(xe);H===i.FLOAT&&(ue=i.RGBA32F),H===i.HALF_FLOAT&&(ue=i.RGBA16F),H===i.UNSIGNED_BYTE&&(ue=Ge===$t?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(ue=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(ue=i.RGB5_A1)}return(ue===i.R16F||ue===i.R32F||ue===i.RG16F||ue===i.RG32F||ue===i.RGBA16F||ue===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function P(U,_){let H;return U?_===null||_===Sa||_===Qa?H=i.DEPTH24_STENCIL8:_===Pi?H=i.DEPTH32F_STENCIL8:_===Ps&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Sa||_===Qa?H=i.DEPTH_COMPONENT24:_===Pi?H=i.DEPTH_COMPONENT32F:_===Ps&&(H=i.DEPTH_COMPONENT16),H}function N(U,_){return h(U)===!0||U.isFramebufferTexture&&U.minFilter!==Xn&&U.minFilter!==Qn?Math.log2(Math.max(_.width,_.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?_.mipmaps.length:1}function W(U){const _=U.target;_.removeEventListener("dispose",W),z(_),_.isVideoTexture&&p.delete(_)}function I(U){const _=U.target;_.removeEventListener("dispose",I),A(_)}function z(U){const _=n.get(U);if(_.__webglInit===void 0)return;const H=U.source,xe=f.get(H);if(xe){const pe=xe[_.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&F(U),Object.keys(xe).length===0&&f.delete(H)}n.remove(U)}function F(U){const _=n.get(U);i.deleteTexture(_.__webglTexture);const H=U.source,xe=f.get(H);delete xe[_.__cacheKey],c.memory.textures--}function A(U){const _=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(_.__webglFramebuffer[xe]))for(let pe=0;pe<_.__webglFramebuffer[xe].length;pe++)i.deleteFramebuffer(_.__webglFramebuffer[xe][pe]);else i.deleteFramebuffer(_.__webglFramebuffer[xe]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[xe])}else{if(Array.isArray(_.__webglFramebuffer))for(let xe=0;xe<_.__webglFramebuffer.length;xe++)i.deleteFramebuffer(_.__webglFramebuffer[xe]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let xe=0;xe<_.__webglColorRenderbuffer.length;xe++)_.__webglColorRenderbuffer[xe]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[xe]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const H=U.textures;for(let xe=0,pe=H.length;xe<pe;xe++){const ue=n.get(H[xe]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),c.memory.textures--),n.remove(H[xe])}n.remove(U)}let T=0;function O(){T=0}function Z(){const U=T;return U>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+a.maxTextures),T+=1,U}function K(U){const _=[];return _.push(U.wrapS),_.push(U.wrapT),_.push(U.wrapR||0),_.push(U.magFilter),_.push(U.minFilter),_.push(U.anisotropy),_.push(U.internalFormat),_.push(U.format),_.push(U.type),_.push(U.generateMipmaps),_.push(U.premultiplyAlpha),_.push(U.flipY),_.push(U.unpackAlignment),_.push(U.colorSpace),_.join()}function Y(U,_){const H=n.get(U);if(U.isVideoTexture&&st(U),U.isRenderTargetTexture===!1&&U.version>0&&H.__version!==U.version){const xe=U.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{je(H,U,_);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+_)}function se(U,_){const H=n.get(U);if(U.version>0&&H.__version!==U.version){je(H,U,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+_)}function re(U,_){const H=n.get(U);if(U.version>0&&H.__version!==U.version){je(H,U,_);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+_)}function de(U,_){const H=n.get(U);if(U.version>0&&H.__version!==U.version){ie(H,U,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+_)}const J={[Er]:i.REPEAT,[ba]:i.CLAMP_TO_EDGE,[Tr]:i.MIRRORED_REPEAT},De={[Xn]:i.NEAREST,[Jd]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[Qn]:i.LINEAR,[Go]:i.LINEAR_MIPMAP_NEAREST,[ya]:i.LINEAR_MIPMAP_LINEAR},ae={[np]:i.NEVER,[lp]:i.ALWAYS,[ip]:i.LESS,[ou]:i.LEQUAL,[ap]:i.EQUAL,[rp]:i.GEQUAL,[sp]:i.GREATER,[op]:i.NOTEQUAL};function Me(U,_){if(_.type===Pi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Qn||_.magFilter===Go||_.magFilter===Xs||_.magFilter===ya||_.minFilter===Qn||_.minFilter===Go||_.minFilter===Xs||_.minFilter===ya)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,J[_.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,J[_.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,J[_.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,De[_.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,De[_.minFilter]),_.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,ae[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Xn||_.minFilter!==Xs&&_.minFilter!==ya||_.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Je(U,_){let H=!1;U.__webglInit===void 0&&(U.__webglInit=!0,_.addEventListener("dispose",W));const xe=_.source;let pe=f.get(xe);pe===void 0&&(pe={},f.set(xe,pe));const ue=K(_);if(ue!==U.__cacheKey){pe[ue]===void 0&&(pe[ue]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,H=!0),pe[ue].usedTimes++;const Ge=pe[U.__cacheKey];Ge!==void 0&&(pe[U.__cacheKey].usedTimes--,Ge.usedTimes===0&&F(_)),U.__cacheKey=ue,U.__webglTexture=pe[ue].texture}return H}function je(U,_,H){let xe=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(xe=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(xe=i.TEXTURE_3D);const pe=Je(U,_),ue=_.source;t.bindTexture(xe,U.__webglTexture,i.TEXTURE0+H);const Ge=n.get(ue);if(ue.version!==Ge.__version||pe===!0){t.activeTexture(i.TEXTURE0+H);const Se=kt.getPrimaries(kt.workingColorSpace),Pe=_.colorSpace===Hi?null:kt.getPrimaries(_.colorSpace),Ze=_.colorSpace===Hi||Se===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let k=S(_.image,!1,a.maxTextureSize);k=Ne(_,k);const he=s.convert(_.format,_.colorSpace),tt=s.convert(_.type);let X=R(_.internalFormat,he,tt,_.colorSpace,_.isVideoTexture);Me(xe,_);let me;const We=_.mipmaps,Ke=_.isVideoTexture!==!0,ct=Ge.__version===void 0||pe===!0,G=ue.dataReady,Ce=N(_,k);if(_.isDepthTexture)X=P(_.format===es,_.type),ct&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,X,k.width,k.height):t.texImage2D(i.TEXTURE_2D,0,X,k.width,k.height,0,he,tt,null));else if(_.isDataTexture)if(We.length>0){Ke&&ct&&t.texStorage2D(i.TEXTURE_2D,Ce,X,We[0].width,We[0].height);for(let be=0,ve=We.length;be<ve;be++)me=We[be],Ke?G&&t.texSubImage2D(i.TEXTURE_2D,be,0,0,me.width,me.height,he,tt,me.data):t.texImage2D(i.TEXTURE_2D,be,X,me.width,me.height,0,he,tt,me.data);_.generateMipmaps=!1}else Ke?(ct&&t.texStorage2D(i.TEXTURE_2D,Ce,X,k.width,k.height),G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,k.width,k.height,he,tt,k.data)):t.texImage2D(i.TEXTURE_2D,0,X,k.width,k.height,0,he,tt,k.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ke&&ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,X,We[0].width,We[0].height,k.depth);for(let be=0,ve=We.length;be<ve;be++)if(me=We[be],_.format!==ei)if(he!==null)if(Ke){if(G)if(_.layerUpdates.size>0){const Te=Ic(me.width,me.height,_.format,_.type);for(const $e of _.layerUpdates){const Qe=me.data.subarray($e*Te/me.data.BYTES_PER_ELEMENT,($e+1)*Te/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,$e,me.width,me.height,1,he,Qe,0,0)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,0,me.width,me.height,k.depth,he,me.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,be,X,me.width,me.height,k.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,0,me.width,me.height,k.depth,he,tt,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,be,X,me.width,me.height,k.depth,0,he,tt,me.data)}else{Ke&&ct&&t.texStorage2D(i.TEXTURE_2D,Ce,X,We[0].width,We[0].height);for(let be=0,ve=We.length;be<ve;be++)me=We[be],_.format!==ei?he!==null?Ke?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,be,0,0,me.width,me.height,he,me.data):t.compressedTexImage2D(i.TEXTURE_2D,be,X,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?G&&t.texSubImage2D(i.TEXTURE_2D,be,0,0,me.width,me.height,he,tt,me.data):t.texImage2D(i.TEXTURE_2D,be,X,me.width,me.height,0,he,tt,me.data)}else if(_.isDataArrayTexture)if(Ke){if(ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,X,k.width,k.height,k.depth),G)if(_.layerUpdates.size>0){const be=Ic(k.width,k.height,_.format,_.type);for(const ve of _.layerUpdates){const Te=k.data.subarray(ve*be/k.data.BYTES_PER_ELEMENT,(ve+1)*be/k.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ve,k.width,k.height,1,he,tt,Te)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,he,tt,k.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,X,k.width,k.height,k.depth,0,he,tt,k.data);else if(_.isData3DTexture)Ke?(ct&&t.texStorage3D(i.TEXTURE_3D,Ce,X,k.width,k.height,k.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,he,tt,k.data)):t.texImage3D(i.TEXTURE_3D,0,X,k.width,k.height,k.depth,0,he,tt,k.data);else if(_.isFramebufferTexture){if(ct)if(Ke)t.texStorage2D(i.TEXTURE_2D,Ce,X,k.width,k.height);else{let be=k.width,ve=k.height;for(let Te=0;Te<Ce;Te++)t.texImage2D(i.TEXTURE_2D,Te,X,be,ve,0,he,tt,null),be>>=1,ve>>=1}}else if(We.length>0){if(Ke&&ct){const be=Fe(We[0]);t.texStorage2D(i.TEXTURE_2D,Ce,X,be.width,be.height)}for(let be=0,ve=We.length;be<ve;be++)me=We[be],Ke?G&&t.texSubImage2D(i.TEXTURE_2D,be,0,0,he,tt,me):t.texImage2D(i.TEXTURE_2D,be,X,he,tt,me);_.generateMipmaps=!1}else if(Ke){if(ct){const be=Fe(k);t.texStorage2D(i.TEXTURE_2D,Ce,X,be.width,be.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,tt,k)}else t.texImage2D(i.TEXTURE_2D,0,X,he,tt,k);h(_)&&m(xe),Ge.__version=ue.version,_.onUpdate&&_.onUpdate(_)}U.__version=_.version}function ie(U,_,H){if(_.image.length!==6)return;const xe=Je(U,_),pe=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+H);const ue=n.get(pe);if(pe.version!==ue.__version||xe===!0){t.activeTexture(i.TEXTURE0+H);const Ge=kt.getPrimaries(kt.workingColorSpace),Se=_.colorSpace===Hi?null:kt.getPrimaries(_.colorSpace),Pe=_.colorSpace===Hi||Ge===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Ze=_.isCompressedTexture||_.image[0].isCompressedTexture,k=_.image[0]&&_.image[0].isDataTexture,he=[];for(let ve=0;ve<6;ve++)!Ze&&!k?he[ve]=S(_.image[ve],!0,a.maxCubemapSize):he[ve]=k?_.image[ve].image:_.image[ve],he[ve]=Ne(_,he[ve]);const tt=he[0],X=s.convert(_.format,_.colorSpace),me=s.convert(_.type),We=R(_.internalFormat,X,me,_.colorSpace),Ke=_.isVideoTexture!==!0,ct=ue.__version===void 0||xe===!0,G=pe.dataReady;let Ce=N(_,tt);Me(i.TEXTURE_CUBE_MAP,_);let be;if(Ze){Ke&&ct&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,We,tt.width,tt.height);for(let ve=0;ve<6;ve++){be=he[ve].mipmaps;for(let Te=0;Te<be.length;Te++){const $e=be[Te];_.format!==ei?X!==null?Ke?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Te,0,0,$e.width,$e.height,X,$e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Te,We,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Te,0,0,$e.width,$e.height,X,me,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Te,We,$e.width,$e.height,0,X,me,$e.data)}}}else{if(be=_.mipmaps,Ke&&ct){be.length>0&&Ce++;const ve=Fe(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,We,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(k){Ke?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,he[ve].width,he[ve].height,X,me,he[ve].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,We,he[ve].width,he[ve].height,0,X,me,he[ve].data);for(let Te=0;Te<be.length;Te++){const Qe=be[Te].image[ve].image;Ke?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Te+1,0,0,Qe.width,Qe.height,X,me,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Te+1,We,Qe.width,Qe.height,0,X,me,Qe.data)}}else{Ke?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,X,me,he[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,We,X,me,he[ve]);for(let Te=0;Te<be.length;Te++){const $e=be[Te];Ke?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Te+1,0,0,X,me,$e.image[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Te+1,We,X,me,$e.image[ve])}}}h(_)&&m(i.TEXTURE_CUBE_MAP),ue.__version=pe.version,_.onUpdate&&_.onUpdate(_)}U.__version=_.version}function Ee(U,_,H,xe,pe,ue){const Ge=s.convert(H.format,H.colorSpace),Se=s.convert(H.type),Pe=R(H.internalFormat,Ge,Se,H.colorSpace);if(!n.get(_).__hasExternalTextures){const k=Math.max(1,_.width>>ue),he=Math.max(1,_.height>>ue);pe===i.TEXTURE_3D||pe===i.TEXTURE_2D_ARRAY?t.texImage3D(pe,ue,Pe,k,he,_.depth,0,Ge,Se,null):t.texImage2D(pe,ue,Pe,k,he,0,Ge,Se,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),Le(_)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,pe,n.get(H).__webglTexture,0,He(_)):(pe===i.TEXTURE_2D||pe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,xe,pe,n.get(H).__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(U,_,H){if(i.bindRenderbuffer(i.RENDERBUFFER,U),_.depthBuffer){const xe=_.depthTexture,pe=xe&&xe.isDepthTexture?xe.type:null,ue=P(_.stencilBuffer,pe),Ge=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=He(_);Le(_)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,ue,_.width,_.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,ue,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ue,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ge,i.RENDERBUFFER,U)}else{const xe=_.textures;for(let pe=0;pe<xe.length;pe++){const ue=xe[pe],Ge=s.convert(ue.format,ue.colorSpace),Se=s.convert(ue.type),Pe=R(ue.internalFormat,Ge,Se,ue.colorSpace),Ze=He(_);H&&Le(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,Pe,_.width,_.height):Le(_)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze,Pe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(U,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y(_.depthTexture,0);const xe=n.get(_.depthTexture).__webglTexture,pe=He(_);if(_.depthTexture.format===ja)Le(_)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0);else if(_.depthTexture.format===es)Le(_)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function ke(U){const _=n.get(U),H=U.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==U.depthTexture){const xe=U.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),xe){const pe=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,xe.removeEventListener("dispose",pe)};xe.addEventListener("dispose",pe),_.__depthDisposeCallback=pe}_.__boundDepthTexture=xe}if(U.depthTexture&&!_.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");we(_.__webglFramebuffer,U)}else if(H){_.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[xe]),_.__webglDepthbuffer[xe]===void 0)_.__webglDepthbuffer[xe]=i.createRenderbuffer(),Re(_.__webglDepthbuffer[xe],U,!1);else{const pe=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=_.__webglDepthbuffer[xe];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,ue)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Re(_.__webglDepthbuffer,U,!1);else{const xe=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,pe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(U,_,H){const xe=n.get(U);_!==void 0&&Ee(xe.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&ke(U)}function ze(U){const _=U.texture,H=n.get(U),xe=n.get(_);U.addEventListener("dispose",I);const pe=U.textures,ue=U.isWebGLCubeRenderTarget===!0,Ge=pe.length>1;if(Ge||(xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture()),xe.__version=_.version,c.memory.textures++),ue){H.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer[Se]=[];for(let Pe=0;Pe<_.mipmaps.length;Pe++)H.__webglFramebuffer[Se][Pe]=i.createFramebuffer()}else H.__webglFramebuffer[Se]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer=[];for(let Se=0;Se<_.mipmaps.length;Se++)H.__webglFramebuffer[Se]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Ge)for(let Se=0,Pe=pe.length;Se<Pe;Se++){const Ze=n.get(pe[Se]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=i.createTexture(),c.memory.textures++)}if(U.samples>0&&Le(U)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Se=0;Se<pe.length;Se++){const Pe=pe[Se];H.__webglColorRenderbuffer[Se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Se]);const Ze=s.convert(Pe.format,Pe.colorSpace),k=s.convert(Pe.type),he=R(Pe.internalFormat,Ze,k,Pe.colorSpace,U.isXRRenderTarget===!0),tt=He(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,he,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,H.__webglColorRenderbuffer[Se])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(H.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,xe.__webglTexture),Me(i.TEXTURE_CUBE_MAP,_);for(let Se=0;Se<6;Se++)if(_.mipmaps&&_.mipmaps.length>0)for(let Pe=0;Pe<_.mipmaps.length;Pe++)Ee(H.__webglFramebuffer[Se][Pe],U,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Pe);else Ee(H.__webglFramebuffer[Se],U,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);h(_)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let Se=0,Pe=pe.length;Se<Pe;Se++){const Ze=pe[Se],k=n.get(Ze);t.bindTexture(i.TEXTURE_2D,k.__webglTexture),Me(i.TEXTURE_2D,Ze),Ee(H.__webglFramebuffer,U,Ze,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,0),h(Ze)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let Se=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Se=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,xe.__webglTexture),Me(Se,_),_.mipmaps&&_.mipmaps.length>0)for(let Pe=0;Pe<_.mipmaps.length;Pe++)Ee(H.__webglFramebuffer[Pe],U,_,i.COLOR_ATTACHMENT0,Se,Pe);else Ee(H.__webglFramebuffer,U,_,i.COLOR_ATTACHMENT0,Se,0);h(_)&&m(Se),t.unbindTexture()}U.depthBuffer&&ke(U)}function at(U){const _=U.textures;for(let H=0,xe=_.length;H<xe;H++){const pe=_[H];if(h(pe)){const ue=U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ge=n.get(pe).__webglTexture;t.bindTexture(ue,Ge),m(ue),t.unbindTexture()}}}const q=[],Ye=[];function nt(U){if(U.samples>0){if(Le(U)===!1){const _=U.textures,H=U.width,xe=U.height;let pe=i.COLOR_BUFFER_BIT;const ue=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ge=n.get(U),Se=_.length>1;if(Se)for(let Pe=0;Pe<_.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Pe=0;Pe<_.length;Pe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(pe|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(pe|=i.STENCIL_BUFFER_BIT)),Se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[Pe]);const Ze=n.get(_[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ze,0)}i.blitFramebuffer(0,0,H,xe,0,0,H,xe,pe,i.NEAREST),u===!0&&(q.length=0,Ye.length=0,q.push(i.COLOR_ATTACHMENT0+Pe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(q.push(ue),Ye.push(ue),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ye)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,q))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Se)for(let Pe=0;Pe<_.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[Pe]);const Ze=n.get(_[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,Ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&u){const _=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function He(U){return Math.min(a.maxSamples,U.samples)}function Le(U){const _=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function st(U){const _=c.render.frame;p.get(U)!==_&&(p.set(U,_),U.update())}function Ne(U,_){const H=U.colorSpace,xe=U.format,pe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||H!==Wi&&H!==Hi&&(kt.getTransfer(H)===$t?(xe!==ei||pe!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),_}function Fe(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(d.width=U.naturalWidth||U.width,d.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(d.width=U.displayWidth,d.height=U.displayHeight):(d.width=U.width,d.height=U.height),d}this.allocateTextureUnit=Z,this.resetTextureUnits=O,this.setTexture2D=Y,this.setTexture2DArray=se,this.setTexture3D=re,this.setTextureCube=de,this.rebindTextures=qe,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Le}function dg(i,e){function t(n,a=Hi){let s;const c=kt.getTransfer(a);if(n===Li)return i.UNSIGNED_BYTE;if(n===ol)return i.UNSIGNED_SHORT_4_4_4_4;if(n===rl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yc)return i.BYTE;if(n===Zc)return i.SHORT;if(n===Ps)return i.UNSIGNED_SHORT;if(n===sl)return i.INT;if(n===Sa)return i.UNSIGNED_INT;if(n===Pi)return i.FLOAT;if(n===Ls)return i.HALF_FLOAT;if(n===Jc)return i.ALPHA;if(n===Qc)return i.RGB;if(n===ei)return i.RGBA;if(n===eu)return i.LUMINANCE;if(n===tu)return i.LUMINANCE_ALPHA;if(n===ja)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===nu)return i.RED;if(n===ll)return i.RED_INTEGER;if(n===iu)return i.RG;if(n===cl)return i.RG_INTEGER;if(n===ul)return i.RGBA_INTEGER;if(n===yo||n===Mo||n===So||n===Co)if(c===$t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===yo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===yo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===So)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Co)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ar||n===wr||n===Pr||n===Rr)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ar)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rr)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lr||n===Dr||n===Ur)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Lr||n===Dr)return c===$t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ur)return c===$t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ir||n===Nr||n===qr||n===Fr||n===Or||n===zr||n===Br||n===Hr||n===kr||n===Vr||n===Gr||n===jr||n===Wr||n===$r)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ir)return c===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nr)return c===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qr)return c===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fr)return c===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Or)return c===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zr)return c===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Br)return c===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hr)return c===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kr)return c===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vr)return c===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gr)return c===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jr)return c===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wr)return c===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$r)return c===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Eo||n===Xr||n===Yr)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Eo)return c===$t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xr)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yr)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===au||n===Zr||n===Kr||n===Jr)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Eo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Zr)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jr)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class pg extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class As extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fg={type:"move"};class gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new As,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new As,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _e,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _e),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new As,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _e,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _e),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,s=null,c=null;const r=this._targetRay,u=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const S of e.hand.values()){const h=t.getJointPose(S,n),m=this._getHandJoint(d,S);h!==null&&(m.matrix.fromArray(h.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=h.radius),m.visible=h!==null}const p=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],f=p.position.distanceTo(v.position),g=.02,E=.005;d.inputState.pinching&&f>g+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&f<=g-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));r!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&s!==null&&(a=s),a!==null&&(r.matrix.fromArray(a.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,a.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(a.linearVelocity)):r.hasLinearVelocity=!1,a.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(a.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(fg)))}return r!==null&&(r.visible=a!==null),u!==null&&(u.visible=s!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new As;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const hg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mg=`
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

}`;class vg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const a=new zn,s=e.properties.get(a);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ji({vertexShader:hg,fragmentShader:mg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yn(new Bo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gg extends ns{constructor(e,t){super();const n=this;let a=null,s=1,c=null,r="local-floor",u=1,d=null,p=null,v=null,f=null,g=null,E=null;const S=new vg,h=t.getContextAttributes();let m=null,R=null;const P=[],N=[],W=new Ot;let I=null;const z=new Wn;z.layers.enable(1),z.viewport=new sn;const F=new Wn;F.layers.enable(2),F.viewport=new sn;const A=[z,F],T=new pg;T.layers.enable(1),T.layers.enable(2);let O=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let Ee=P[ie];return Ee===void 0&&(Ee=new gr,P[ie]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function(ie){let Ee=P[ie];return Ee===void 0&&(Ee=new gr,P[ie]=Ee),Ee.getGripSpace()},this.getHand=function(ie){let Ee=P[ie];return Ee===void 0&&(Ee=new gr,P[ie]=Ee),Ee.getHandSpace()};function K(ie){const Ee=N.indexOf(ie.inputSource);if(Ee===-1)return;const Re=P[Ee];Re!==void 0&&(Re.update(ie.inputSource,ie.frame,d||c),Re.dispatchEvent({type:ie.type,data:ie.inputSource}))}function Y(){a.removeEventListener("select",K),a.removeEventListener("selectstart",K),a.removeEventListener("selectend",K),a.removeEventListener("squeeze",K),a.removeEventListener("squeezestart",K),a.removeEventListener("squeezeend",K),a.removeEventListener("end",Y),a.removeEventListener("inputsourceschange",se);for(let ie=0;ie<P.length;ie++){const Ee=N[ie];Ee!==null&&(N[ie]=null,P[ie].disconnect(Ee))}O=null,Z=null,S.reset(),e.setRenderTarget(m),g=null,f=null,v=null,a=null,R=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(W.width,W.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){r=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(ie){d=ie},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(ie){if(a=ie,a!==null){if(m=e.getRenderTarget(),a.addEventListener("select",K),a.addEventListener("selectstart",K),a.addEventListener("selectend",K),a.addEventListener("squeeze",K),a.addEventListener("squeezestart",K),a.addEventListener("squeezeend",K),a.addEventListener("end",Y),a.addEventListener("inputsourceschange",se),h.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(W),a.renderState.layers===void 0){const Ee={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(a,t,Ee),a.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),R=new Ca(g.framebufferWidth,g.framebufferHeight,{format:ei,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil})}else{let Ee=null,Re=null,we=null;h.depth&&(we=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=h.stencil?es:ja,Re=h.stencil?Qa:Sa);const ke={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};v=new XRWebGLBinding(a,t),f=v.createProjectionLayer(ke),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),R=new Ca(f.textureWidth,f.textureHeight,{format:ei,type:Li,depthTexture:new bu(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(u),d=null,c=await a.requestReferenceSpace(r),je.setContext(a),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function se(ie){for(let Ee=0;Ee<ie.removed.length;Ee++){const Re=ie.removed[Ee],we=N.indexOf(Re);we>=0&&(N[we]=null,P[we].disconnect(Re))}for(let Ee=0;Ee<ie.added.length;Ee++){const Re=ie.added[Ee];let we=N.indexOf(Re);if(we===-1){for(let qe=0;qe<P.length;qe++)if(qe>=N.length){N.push(Re),we=qe;break}else if(N[qe]===null){N[qe]=Re,we=qe;break}if(we===-1)break}const ke=P[we];ke&&ke.connect(Re)}}const re=new _e,de=new _e;function J(ie,Ee,Re){re.setFromMatrixPosition(Ee.matrixWorld),de.setFromMatrixPosition(Re.matrixWorld);const we=re.distanceTo(de),ke=Ee.projectionMatrix.elements,qe=Re.projectionMatrix.elements,ze=ke[14]/(ke[10]-1),at=ke[14]/(ke[10]+1),q=(ke[9]+1)/ke[5],Ye=(ke[9]-1)/ke[5],nt=(ke[8]-1)/ke[0],He=(qe[8]+1)/qe[0],Le=ze*nt,st=ze*He,Ne=we/(-nt+He),Fe=Ne*-nt;if(Ee.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Fe),ie.translateZ(Ne),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),ke[10]===-1)ie.projectionMatrix.copy(Ee.projectionMatrix),ie.projectionMatrixInverse.copy(Ee.projectionMatrixInverse);else{const U=ze+Ne,_=at+Ne,H=Le-Fe,xe=st+(we-Fe),pe=q*at/_*U,ue=Ye*at/_*U;ie.projectionMatrix.makePerspective(H,xe,pe,ue,U,_),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function De(ie,Ee){Ee===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(Ee.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(a===null)return;let Ee=ie.near,Re=ie.far;S.texture!==null&&(S.depthNear>0&&(Ee=S.depthNear),S.depthFar>0&&(Re=S.depthFar)),T.near=F.near=z.near=Ee,T.far=F.far=z.far=Re,(O!==T.near||Z!==T.far)&&(a.updateRenderState({depthNear:T.near,depthFar:T.far}),O=T.near,Z=T.far);const we=ie.parent,ke=T.cameras;De(T,we);for(let qe=0;qe<ke.length;qe++)De(ke[qe],we);ke.length===2?J(T,z,F):T.projectionMatrix.copy(z.projectionMatrix),ae(ie,T,we)};function ae(ie,Ee,Re){Re===null?ie.matrix.copy(Ee.matrixWorld):(ie.matrix.copy(Re.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(Ee.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(Ee.projectionMatrix),ie.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Qr*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&g===null))return u},this.setFoveation=function(ie){u=ie,f!==null&&(f.fixedFoveation=ie),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ie)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(T)};let Me=null;function Je(ie,Ee){if(p=Ee.getViewerPose(d||c),E=Ee,p!==null){const Re=p.views;g!==null&&(e.setRenderTargetFramebuffer(R,g.framebuffer),e.setRenderTarget(R));let we=!1;Re.length!==T.cameras.length&&(T.cameras.length=0,we=!0);for(let qe=0;qe<Re.length;qe++){const ze=Re[qe];let at=null;if(g!==null)at=g.getViewport(ze);else{const Ye=v.getViewSubImage(f,ze);at=Ye.viewport,qe===0&&(e.setRenderTargetTextures(R,Ye.colorTexture,f.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(R))}let q=A[qe];q===void 0&&(q=new Wn,q.layers.enable(qe),q.viewport=new sn,A[qe]=q),q.matrix.fromArray(ze.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(ze.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(at.x,at.y,at.width,at.height),qe===0&&(T.matrix.copy(q.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),we===!0&&T.cameras.push(q)}const ke=a.enabledFeatures;if(ke&&ke.includes("depth-sensing")){const qe=v.getDepthInformation(Re[0]);qe&&qe.isValid&&qe.texture&&S.init(e,qe,a.renderState)}}for(let Re=0;Re<P.length;Re++){const we=N[Re],ke=P[Re];we!==null&&ke!==void 0&&ke.update(we,Ee,d||c)}Me&&Me(ie,Ee),Ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Ee}),E=null}const je=new _u;je.setAnimationLoop(Je),this.setAnimationLoop=function(ie){Me=ie},this.dispose=function(){}}}const ha=new ui,_g=new tn;function xg(i,e){function t(h,m){h.matrixAutoUpdate===!0&&h.updateMatrix(),m.value.copy(h.matrix)}function n(h,m){m.color.getRGB(h.fogColor.value,vu(i)),m.isFog?(h.fogNear.value=m.near,h.fogFar.value=m.far):m.isFogExp2&&(h.fogDensity.value=m.density)}function a(h,m,R,P,N){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(h,m):m.isMeshToonMaterial?(s(h,m),v(h,m)):m.isMeshPhongMaterial?(s(h,m),p(h,m)):m.isMeshStandardMaterial?(s(h,m),f(h,m),m.isMeshPhysicalMaterial&&g(h,m,N)):m.isMeshMatcapMaterial?(s(h,m),E(h,m)):m.isMeshDepthMaterial?s(h,m):m.isMeshDistanceMaterial?(s(h,m),S(h,m)):m.isMeshNormalMaterial?s(h,m):m.isLineBasicMaterial?(c(h,m),m.isLineDashedMaterial&&r(h,m)):m.isPointsMaterial?u(h,m,R,P):m.isSpriteMaterial?d(h,m):m.isShadowMaterial?(h.color.value.copy(m.color),h.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(h,m){h.opacity.value=m.opacity,m.color&&h.diffuse.value.copy(m.color),m.emissive&&h.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(h.map.value=m.map,t(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,t(m.alphaMap,h.alphaMapTransform)),m.bumpMap&&(h.bumpMap.value=m.bumpMap,t(m.bumpMap,h.bumpMapTransform),h.bumpScale.value=m.bumpScale,m.side===On&&(h.bumpScale.value*=-1)),m.normalMap&&(h.normalMap.value=m.normalMap,t(m.normalMap,h.normalMapTransform),h.normalScale.value.copy(m.normalScale),m.side===On&&h.normalScale.value.negate()),m.displacementMap&&(h.displacementMap.value=m.displacementMap,t(m.displacementMap,h.displacementMapTransform),h.displacementScale.value=m.displacementScale,h.displacementBias.value=m.displacementBias),m.emissiveMap&&(h.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,h.emissiveMapTransform)),m.specularMap&&(h.specularMap.value=m.specularMap,t(m.specularMap,h.specularMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);const R=e.get(m),P=R.envMap,N=R.envMapRotation;P&&(h.envMap.value=P,ha.copy(N),ha.x*=-1,ha.y*=-1,ha.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ha.y*=-1,ha.z*=-1),h.envMapRotation.value.setFromMatrix4(_g.makeRotationFromEuler(ha)),h.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=m.reflectivity,h.ior.value=m.ior,h.refractionRatio.value=m.refractionRatio),m.lightMap&&(h.lightMap.value=m.lightMap,h.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,h.lightMapTransform)),m.aoMap&&(h.aoMap.value=m.aoMap,h.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,h.aoMapTransform))}function c(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,m.map&&(h.map.value=m.map,t(m.map,h.mapTransform))}function r(h,m){h.dashSize.value=m.dashSize,h.totalSize.value=m.dashSize+m.gapSize,h.scale.value=m.scale}function u(h,m,R,P){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.size.value=m.size*R,h.scale.value=P*.5,m.map&&(h.map.value=m.map,t(m.map,h.uvTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,t(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function d(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.rotation.value=m.rotation,m.map&&(h.map.value=m.map,t(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,t(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function p(h,m){h.specular.value.copy(m.specular),h.shininess.value=Math.max(m.shininess,1e-4)}function v(h,m){m.gradientMap&&(h.gradientMap.value=m.gradientMap)}function f(h,m){h.metalness.value=m.metalness,m.metalnessMap&&(h.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,h.metalnessMapTransform)),h.roughness.value=m.roughness,m.roughnessMap&&(h.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,h.roughnessMapTransform)),m.envMap&&(h.envMapIntensity.value=m.envMapIntensity)}function g(h,m,R){h.ior.value=m.ior,m.sheen>0&&(h.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),h.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(h.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,h.sheenColorMapTransform)),m.sheenRoughnessMap&&(h.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,h.sheenRoughnessMapTransform))),m.clearcoat>0&&(h.clearcoat.value=m.clearcoat,h.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(h.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,h.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(h.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===On&&h.clearcoatNormalScale.value.negate())),m.dispersion>0&&(h.dispersion.value=m.dispersion),m.iridescence>0&&(h.iridescence.value=m.iridescence,h.iridescenceIOR.value=m.iridescenceIOR,h.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(h.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,h.iridescenceMapTransform)),m.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),m.transmission>0&&(h.transmission.value=m.transmission,h.transmissionSamplerMap.value=R.texture,h.transmissionSamplerSize.value.set(R.width,R.height),m.transmissionMap&&(h.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,h.transmissionMapTransform)),h.thickness.value=m.thickness,m.thicknessMap&&(h.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=m.attenuationDistance,h.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(h.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(h.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=m.specularIntensity,h.specularColor.value.copy(m.specularColor),m.specularColorMap&&(h.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,h.specularColorMapTransform)),m.specularIntensityMap&&(h.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,h.specularIntensityMapTransform))}function E(h,m){m.matcap&&(h.matcap.value=m.matcap)}function S(h,m){const R=e.get(m).light;h.referencePosition.value.setFromMatrixPosition(R.matrixWorld),h.nearDistance.value=R.shadow.camera.near,h.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function bg(i,e,t,n){let a={},s={},c=[];const r=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(R,P){const N=P.program;n.uniformBlockBinding(R,N)}function d(R,P){let N=a[R.id];N===void 0&&(E(R),N=p(R),a[R.id]=N,R.addEventListener("dispose",h));const W=P.program;n.updateUBOMapping(R,W);const I=e.render.frame;s[R.id]!==I&&(f(R),s[R.id]=I)}function p(R){const P=v();R.__bindingPointIndex=P;const N=i.createBuffer(),W=R.__size,I=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,N),i.bufferData(i.UNIFORM_BUFFER,W,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,N),N}function v(){for(let R=0;R<r;R++)if(c.indexOf(R)===-1)return c.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const P=a[R.id],N=R.uniforms,W=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let I=0,z=N.length;I<z;I++){const F=Array.isArray(N[I])?N[I]:[N[I]];for(let A=0,T=F.length;A<T;A++){const O=F[A];if(g(O,I,A,W)===!0){const Z=O.__offset,K=Array.isArray(O.value)?O.value:[O.value];let Y=0;for(let se=0;se<K.length;se++){const re=K[se],de=S(re);typeof re=="number"||typeof re=="boolean"?(O.__data[0]=re,i.bufferSubData(i.UNIFORM_BUFFER,Z+Y,O.__data)):re.isMatrix3?(O.__data[0]=re.elements[0],O.__data[1]=re.elements[1],O.__data[2]=re.elements[2],O.__data[3]=0,O.__data[4]=re.elements[3],O.__data[5]=re.elements[4],O.__data[6]=re.elements[5],O.__data[7]=0,O.__data[8]=re.elements[6],O.__data[9]=re.elements[7],O.__data[10]=re.elements[8],O.__data[11]=0):(re.toArray(O.__data,Y),Y+=de.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(R,P,N,W){const I=R.value,z=P+"_"+N;if(W[z]===void 0)return typeof I=="number"||typeof I=="boolean"?W[z]=I:W[z]=I.clone(),!0;{const F=W[z];if(typeof I=="number"||typeof I=="boolean"){if(F!==I)return W[z]=I,!0}else if(F.equals(I)===!1)return F.copy(I),!0}return!1}function E(R){const P=R.uniforms;let N=0;const W=16;for(let z=0,F=P.length;z<F;z++){const A=Array.isArray(P[z])?P[z]:[P[z]];for(let T=0,O=A.length;T<O;T++){const Z=A[T],K=Array.isArray(Z.value)?Z.value:[Z.value];for(let Y=0,se=K.length;Y<se;Y++){const re=K[Y],de=S(re),J=N%W,De=J%de.boundary,ae=J+De;N+=De,ae!==0&&W-ae<de.storage&&(N+=W-ae),Z.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=N,N+=de.storage}}}const I=N%W;return I>0&&(N+=W-I),R.__size=N,R.__cache={},this}function S(R){const P={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(P.boundary=4,P.storage=4):R.isVector2?(P.boundary=8,P.storage=8):R.isVector3||R.isColor?(P.boundary=16,P.storage=12):R.isVector4?(P.boundary=16,P.storage=16):R.isMatrix3?(P.boundary=48,P.storage=48):R.isMatrix4?(P.boundary=64,P.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),P}function h(R){const P=R.target;P.removeEventListener("dispose",h);const N=c.indexOf(P.__bindingPointIndex);c.splice(N,1),i.deleteBuffer(a[P.id]),delete a[P.id],delete s[P.id]}function m(){for(const R in a)i.deleteBuffer(a[R]);c=[],a={},s={}}return{bind:u,update:d,dispose:m}}class yg{constructor(e={}){const{canvas:t=up(),context:n=null,depth:a=!0,stencil:s=!1,alpha:c=!1,antialias:r=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:v=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=c;const g=new Uint32Array(4),E=new Int32Array(4);let S=null,h=null;const m=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oi,this.toneMapping=Vi,this.toneMappingExposure=1;const P=this;let N=!1,W=0,I=0,z=null,F=-1,A=null;const T=new sn,O=new sn;let Z=null;const K=new Tt(0);let Y=0,se=t.width,re=t.height,de=1,J=null,De=null;const ae=new sn(0,0,se,re),Me=new sn(0,0,se,re);let Je=!1;const je=new fl;let ie=!1,Ee=!1;const Re=new tn,we=new _e,ke=new sn,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function at(){return z===null?de:1}let q=n;function Ye(w,ee){return t.getContext(w,ee)}try{const w={alpha:!0,depth:a,stencil:s,antialias:r,premultipliedAlpha:u,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${il}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",Te,!1),q===null){const ee="webgl2";if(q=Ye(ee,w),q===null)throw Ye(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let nt,He,Le,st,Ne,Fe,U,_,H,xe,pe,ue,Ge,Se,Pe,Ze,k,he,tt,X,me,We,Ke,ct;function G(){nt=new Am(q),nt.init(),We=new dg(q,nt),He=new ym(q,nt,e,We),Le=new lg(q),st=new Rm(q),Ne=new Xv,Fe=new ug(q,nt,Le,Ne,He,We,st),U=new Sm(P),_=new Tm(P),H=new qp(q),Ke=new xm(q,H),xe=new wm(q,H,st,Ke),pe=new Dm(q,xe,H,st),tt=new Lm(q,He,Fe),Ze=new Mm(Ne),ue=new $v(P,U,_,nt,He,Ke,Ze),Ge=new xg(P,Ne),Se=new Zv,Pe=new ng(nt),he=new _m(P,U,_,Le,pe,f,u),k=new rg(P,pe,He),ct=new bg(q,st,He,Le),X=new bm(q,nt,st),me=new Pm(q,nt,st),st.programs=ue.programs,P.capabilities=He,P.extensions=nt,P.properties=Ne,P.renderLists=Se,P.shadowMap=k,P.state=Le,P.info=st}G();const Ce=new gg(P,q);this.xr=Ce,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const w=nt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=nt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(w){w!==void 0&&(de=w,this.setSize(se,re,!1))},this.getSize=function(w){return w.set(se,re)},this.setSize=function(w,ee,le=!0){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=w,re=ee,t.width=Math.floor(w*de),t.height=Math.floor(ee*de),le===!0&&(t.style.width=w+"px",t.style.height=ee+"px"),this.setViewport(0,0,w,ee)},this.getDrawingBufferSize=function(w){return w.set(se*de,re*de).floor()},this.setDrawingBufferSize=function(w,ee,le){se=w,re=ee,de=le,t.width=Math.floor(w*le),t.height=Math.floor(ee*le),this.setViewport(0,0,w,ee)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(ae)},this.setViewport=function(w,ee,le,oe){w.isVector4?ae.set(w.x,w.y,w.z,w.w):ae.set(w,ee,le,oe),Le.viewport(T.copy(ae).multiplyScalar(de).round())},this.getScissor=function(w){return w.copy(Me)},this.setScissor=function(w,ee,le,oe){w.isVector4?Me.set(w.x,w.y,w.z,w.w):Me.set(w,ee,le,oe),Le.scissor(O.copy(Me).multiplyScalar(de).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(w){Le.setScissorTest(Je=w)},this.setOpaqueSort=function(w){J=w},this.setTransparentSort=function(w){De=w},this.getClearColor=function(w){return w.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(w=!0,ee=!0,le=!0){let oe=0;if(w){let te=!1;if(z!==null){const Oe=z.texture.format;te=Oe===ul||Oe===cl||Oe===ll}if(te){const Oe=z.texture.type,Be=Oe===Li||Oe===Sa||Oe===Ps||Oe===Qa||Oe===ol||Oe===rl,V=he.getClearColor(),fe=he.getClearAlpha(),j=V.r,Ae=V.g,it=V.b;Be?(g[0]=j,g[1]=Ae,g[2]=it,g[3]=fe,q.clearBufferuiv(q.COLOR,0,g)):(E[0]=j,E[1]=Ae,E[2]=it,E[3]=fe,q.clearBufferiv(q.COLOR,0,E))}else oe|=q.COLOR_BUFFER_BIT}ee&&(oe|=q.DEPTH_BUFFER_BIT),le&&(oe|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Se.dispose(),Pe.dispose(),Ne.dispose(),U.dispose(),_.dispose(),pe.dispose(),Ke.dispose(),ct.dispose(),ue.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",pt),Ce.removeEventListener("sessionend",Q),Ue.stop()};function be(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const w=st.autoReset,ee=k.enabled,le=k.autoUpdate,oe=k.needsUpdate,te=k.type;G(),st.autoReset=w,k.enabled=ee,k.autoUpdate=le,k.needsUpdate=oe,k.type=te}function Te(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function $e(w){const ee=w.target;ee.removeEventListener("dispose",$e),Qe(ee)}function Qe(w){lt(w),Ne.remove(w)}function lt(w){const ee=Ne.get(w).programs;ee!==void 0&&(ee.forEach(function(le){ue.releaseProgram(le)}),w.isShaderMaterial&&ue.releaseShaderCache(w))}this.renderBufferDirect=function(w,ee,le,oe,te,Oe){ee===null&&(ee=qe);const Be=te.isMesh&&te.matrixWorld.determinant()<0,V=qt(w,ee,le,oe,te);Le.setMaterial(oe,Be);let fe=le.index,j=1;if(oe.wireframe===!0){if(fe=xe.getWireframeAttribute(le),fe===void 0)return;j=2}const Ae=le.drawRange,it=le.attributes.position;let ft=Ae.start*j,zt=(Ae.start+Ae.count)*j;Oe!==null&&(ft=Math.max(ft,Oe.start*j),zt=Math.min(zt,(Oe.start+Oe.count)*j)),fe!==null?(ft=Math.max(ft,0),zt=Math.min(zt,fe.count)):it!=null&&(ft=Math.max(ft,0),zt=Math.min(zt,it.count));const Pt=zt-ft;if(Pt<0||Pt===1/0)return;Ke.setup(te,oe,V,le,fe);let Bt,wt=X;if(fe!==null&&(Bt=H.get(fe),wt=me,wt.setIndex(Bt)),te.isMesh)oe.wireframe===!0?(Le.setLineWidth(oe.wireframeLinewidth*at()),wt.setMode(q.LINES)):wt.setMode(q.TRIANGLES);else if(te.isLine){let rt=oe.linewidth;rt===void 0&&(rt=1),Le.setLineWidth(rt*at()),te.isLineSegments?wt.setMode(q.LINES):te.isLineLoop?wt.setMode(q.LINE_LOOP):wt.setMode(q.LINE_STRIP)}else te.isPoints?wt.setMode(q.POINTS):te.isSprite&&wt.setMode(q.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)wt.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))wt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const rt=te._multiDrawStarts,Dt=te._multiDrawCounts,xt=te._multiDrawCount,jt=fe?H.get(fe).bytesPerElement:1,Ht=Ne.get(oe).currentProgram.getUniforms();for(let Qt=0;Qt<xt;Qt++)Ht.setValue(q,"_gl_DrawID",Qt),wt.render(rt[Qt]/jt,Dt[Qt])}else if(te.isInstancedMesh)wt.renderInstances(ft,Pt,te.count);else if(le.isInstancedBufferGeometry){const rt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Dt=Math.min(le.instanceCount,rt);wt.renderInstances(ft,Pt,Dt)}else wt.render(ft,Pt)};function ut(w,ee,le){w.transparent===!0&&w.side===wi&&w.forceSinglePass===!1?(w.side=On,w.needsUpdate=!0,B(w,ee,le),w.side=Gi,w.needsUpdate=!0,B(w,ee,le),w.side=wi):B(w,ee,le)}this.compile=function(w,ee,le=null){le===null&&(le=w),h=Pe.get(le),h.init(ee),R.push(h),le.traverseVisible(function(te){te.isLight&&te.layers.test(ee.layers)&&(h.pushLight(te),te.castShadow&&h.pushShadow(te))}),w!==le&&w.traverseVisible(function(te){te.isLight&&te.layers.test(ee.layers)&&(h.pushLight(te),te.castShadow&&h.pushShadow(te))}),h.setupLights();const oe=new Set;return w.traverse(function(te){const Oe=te.material;if(Oe)if(Array.isArray(Oe))for(let Be=0;Be<Oe.length;Be++){const V=Oe[Be];ut(V,le,te),oe.add(V)}else ut(Oe,le,te),oe.add(Oe)}),R.pop(),h=null,oe},this.compileAsync=function(w,ee,le=null){const oe=this.compile(w,ee,le);return new Promise(te=>{function Oe(){if(oe.forEach(function(Be){Ne.get(Be).currentProgram.isReady()&&oe.delete(Be)}),oe.size===0){te(w);return}setTimeout(Oe,10)}nt.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let et=null;function dt(w){et&&et(w)}function pt(){Ue.stop()}function Q(){Ue.start()}const Ue=new _u;Ue.setAnimationLoop(dt),typeof self<"u"&&Ue.setContext(self),this.setAnimationLoop=function(w){et=w,Ce.setAnimationLoop(w),w===null?Ue.stop():Ue.start()},Ce.addEventListener("sessionstart",pt),Ce.addEventListener("sessionend",Q),this.render=function(w,ee){if(ee!==void 0&&ee.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(ee),ee=Ce.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,ee,z),h=Pe.get(w,R.length),h.init(ee),R.push(h),Re.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),je.setFromProjectionMatrix(Re),Ee=this.localClippingEnabled,ie=Ze.init(this.clippingPlanes,Ee),S=Se.get(w,m.length),S.init(),m.push(S),Ce.enabled===!0&&Ce.isPresenting===!0){const Oe=P.xr.getDepthSensingMesh();Oe!==null&&vt(Oe,ee,-1/0,P.sortObjects)}vt(w,ee,0,P.sortObjects),S.finish(),P.sortObjects===!0&&S.sort(J,De),ze=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,ze&&he.addToRenderList(S,w),this.info.render.frame++,ie===!0&&Ze.beginShadows();const le=h.state.shadowsArray;k.render(le,w,ee),ie===!0&&Ze.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=S.opaque,te=S.transmissive;if(h.setupLights(),ee.isArrayCamera){const Oe=ee.cameras;if(te.length>0)for(let Be=0,V=Oe.length;Be<V;Be++){const fe=Oe[Be];Ie(oe,te,w,fe)}ze&&he.render(w);for(let Be=0,V=Oe.length;Be<V;Be++){const fe=Oe[Be];ce(S,w,fe,fe.viewport)}}else te.length>0&&Ie(oe,te,w,ee),ze&&he.render(w),ce(S,w,ee);z!==null&&(Fe.updateMultisampleRenderTarget(z),Fe.updateRenderTargetMipmap(z)),w.isScene===!0&&w.onAfterRender(P,w,ee),Ke.resetDefaultState(),F=-1,A=null,R.pop(),R.length>0?(h=R[R.length-1],ie===!0&&Ze.setGlobalState(P.clippingPlanes,h.state.camera)):h=null,m.pop(),m.length>0?S=m[m.length-1]:S=null};function vt(w,ee,le,oe){if(w.visible===!1)return;if(w.layers.test(ee.layers)){if(w.isGroup)le=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(ee);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||je.intersectsSprite(w)){oe&&ke.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Re);const Be=pe.update(w),V=w.material;V.visible&&S.push(w,Be,V,le,ke.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||je.intersectsObject(w))){const Be=pe.update(w),V=w.material;if(oe&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ke.copy(w.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),ke.copy(Be.boundingSphere.center)),ke.applyMatrix4(w.matrixWorld).applyMatrix4(Re)),Array.isArray(V)){const fe=Be.groups;for(let j=0,Ae=fe.length;j<Ae;j++){const it=fe[j],ft=V[it.materialIndex];ft&&ft.visible&&S.push(w,Be,ft,le,ke.z,it)}}else V.visible&&S.push(w,Be,V,le,ke.z,null)}}const Oe=w.children;for(let Be=0,V=Oe.length;Be<V;Be++)vt(Oe[Be],ee,le,oe)}function ce(w,ee,le,oe){const te=w.opaque,Oe=w.transmissive,Be=w.transparent;h.setupLightsView(le),ie===!0&&Ze.setGlobalState(P.clippingPlanes,le),oe&&Le.viewport(T.copy(oe)),te.length>0&&At(te,ee,le),Oe.length>0&&At(Oe,ee,le),Be.length>0&&At(Be,ee,le),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Ie(w,ee,le,oe){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[oe.id]===void 0&&(h.state.transmissionRenderTarget[oe.id]=new Ca(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?Ls:Li,minFilter:ya,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:kt.workingColorSpace}));const Oe=h.state.transmissionRenderTarget[oe.id],Be=oe.viewport||T;Oe.setSize(Be.z,Be.w);const V=P.getRenderTarget();P.setRenderTarget(Oe),P.getClearColor(K),Y=P.getClearAlpha(),Y<1&&P.setClearColor(16777215,.5),P.clear(),ze&&he.render(le);const fe=P.toneMapping;P.toneMapping=Vi;const j=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),h.setupLightsView(oe),ie===!0&&Ze.setGlobalState(P.clippingPlanes,oe),At(w,le,oe),Fe.updateMultisampleRenderTarget(Oe),Fe.updateRenderTargetMipmap(Oe),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let it=0,ft=ee.length;it<ft;it++){const zt=ee[it],Pt=zt.object,Bt=zt.geometry,wt=zt.material,rt=zt.group;if(wt.side===wi&&Pt.layers.test(oe.layers)){const Dt=wt.side;wt.side=On,wt.needsUpdate=!0,ne(Pt,le,oe,Bt,wt,rt),wt.side=Dt,wt.needsUpdate=!0,Ae=!0}}Ae===!0&&(Fe.updateMultisampleRenderTarget(Oe),Fe.updateRenderTargetMipmap(Oe))}P.setRenderTarget(V),P.setClearColor(K,Y),j!==void 0&&(oe.viewport=j),P.toneMapping=fe}function At(w,ee,le){const oe=ee.isScene===!0?ee.overrideMaterial:null;for(let te=0,Oe=w.length;te<Oe;te++){const Be=w[te],V=Be.object,fe=Be.geometry,j=oe===null?Be.material:oe,Ae=Be.group;V.layers.test(le.layers)&&ne(V,ee,le,fe,j,Ae)}}function ne(w,ee,le,oe,te,Oe){w.onBeforeRender(P,ee,le,oe,te,Oe),w.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),te.onBeforeRender(P,ee,le,oe,w,Oe),te.transparent===!0&&te.side===wi&&te.forceSinglePass===!1?(te.side=On,te.needsUpdate=!0,P.renderBufferDirect(le,ee,oe,te,w,Oe),te.side=Gi,te.needsUpdate=!0,P.renderBufferDirect(le,ee,oe,te,w,Oe),te.side=wi):P.renderBufferDirect(le,ee,oe,te,w,Oe),w.onAfterRender(P,ee,le,oe,te,Oe)}function B(w,ee,le){ee.isScene!==!0&&(ee=qe);const oe=Ne.get(w),te=h.state.lights,Oe=h.state.shadowsArray,Be=te.state.version,V=ue.getParameters(w,te.state,Oe,ee,le),fe=ue.getProgramCacheKey(V);let j=oe.programs;oe.environment=w.isMeshStandardMaterial?ee.environment:null,oe.fog=ee.fog,oe.envMap=(w.isMeshStandardMaterial?_:U).get(w.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&w.envMap===null?ee.environmentRotation:w.envMapRotation,j===void 0&&(w.addEventListener("dispose",$e),j=new Map,oe.programs=j);let Ae=j.get(fe);if(Ae!==void 0){if(oe.currentProgram===Ae&&oe.lightsStateVersion===Be)return Nt(w,V),Ae}else V.uniforms=ue.getUniforms(w),w.onBeforeCompile(V,P),Ae=ue.acquireProgram(V,fe),j.set(fe,Ae),oe.uniforms=V.uniforms;const it=oe.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(it.clippingPlanes=Ze.uniform),Nt(w,V),oe.needsLights=Vt(w),oe.lightsStateVersion=Be,oe.needsLights&&(it.ambientLightColor.value=te.state.ambient,it.lightProbe.value=te.state.probe,it.directionalLights.value=te.state.directional,it.directionalLightShadows.value=te.state.directionalShadow,it.spotLights.value=te.state.spot,it.spotLightShadows.value=te.state.spotShadow,it.rectAreaLights.value=te.state.rectArea,it.ltc_1.value=te.state.rectAreaLTC1,it.ltc_2.value=te.state.rectAreaLTC2,it.pointLights.value=te.state.point,it.pointLightShadows.value=te.state.pointShadow,it.hemisphereLights.value=te.state.hemi,it.directionalShadowMap.value=te.state.directionalShadowMap,it.directionalShadowMatrix.value=te.state.directionalShadowMatrix,it.spotShadowMap.value=te.state.spotShadowMap,it.spotLightMatrix.value=te.state.spotLightMatrix,it.spotLightMap.value=te.state.spotLightMap,it.pointShadowMap.value=te.state.pointShadowMap,it.pointShadowMatrix.value=te.state.pointShadowMatrix),oe.currentProgram=Ae,oe.uniformsList=null,Ae}function Xe(w){if(w.uniformsList===null){const ee=w.currentProgram.getUniforms();w.uniformsList=To.seqWithValue(ee.seq,w.uniforms)}return w.uniformsList}function Nt(w,ee){const le=Ne.get(w);le.outputColorSpace=ee.outputColorSpace,le.batching=ee.batching,le.batchingColor=ee.batchingColor,le.instancing=ee.instancing,le.instancingColor=ee.instancingColor,le.instancingMorph=ee.instancingMorph,le.skinning=ee.skinning,le.morphTargets=ee.morphTargets,le.morphNormals=ee.morphNormals,le.morphColors=ee.morphColors,le.morphTargetsCount=ee.morphTargetsCount,le.numClippingPlanes=ee.numClippingPlanes,le.numIntersection=ee.numClipIntersection,le.vertexAlphas=ee.vertexAlphas,le.vertexTangents=ee.vertexTangents,le.toneMapping=ee.toneMapping}function qt(w,ee,le,oe,te){ee.isScene!==!0&&(ee=qe),Fe.resetTextureUnits();const Oe=ee.fog,Be=oe.isMeshStandardMaterial?ee.environment:null,V=z===null?P.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Wi,fe=(oe.isMeshStandardMaterial?_:U).get(oe.envMap||Be),j=oe.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,Ae=!!le.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),it=!!le.morphAttributes.position,ft=!!le.morphAttributes.normal,zt=!!le.morphAttributes.color;let Pt=Vi;oe.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Pt=P.toneMapping);const Bt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,wt=Bt!==void 0?Bt.length:0,rt=Ne.get(oe),Dt=h.state.lights;if(ie===!0&&(Ee===!0||w!==A)){const Ft=w===A&&oe.id===F;Ze.setState(oe,w,Ft)}let xt=!1;oe.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==Dt.state.version||rt.outputColorSpace!==V||te.isBatchedMesh&&rt.batching===!1||!te.isBatchedMesh&&rt.batching===!0||te.isBatchedMesh&&rt.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&rt.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&rt.instancing===!1||!te.isInstancedMesh&&rt.instancing===!0||te.isSkinnedMesh&&rt.skinning===!1||!te.isSkinnedMesh&&rt.skinning===!0||te.isInstancedMesh&&rt.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&rt.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&rt.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&rt.instancingMorph===!1&&te.morphTexture!==null||rt.envMap!==fe||oe.fog===!0&&rt.fog!==Oe||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==Ze.numPlanes||rt.numIntersection!==Ze.numIntersection)||rt.vertexAlphas!==j||rt.vertexTangents!==Ae||rt.morphTargets!==it||rt.morphNormals!==ft||rt.morphColors!==zt||rt.toneMapping!==Pt||rt.morphTargetsCount!==wt)&&(xt=!0):(xt=!0,rt.__version=oe.version);let jt=rt.currentProgram;xt===!0&&(jt=B(oe,ee,te));let Ht=!1,Qt=!1,un=!1;const bt=jt.getUniforms(),hn=rt.uniforms;if(Le.useProgram(jt.program)&&(Ht=!0,Qt=!0,un=!0),oe.id!==F&&(F=oe.id,Qt=!0),Ht||A!==w){bt.setValue(q,"projectionMatrix",w.projectionMatrix),bt.setValue(q,"viewMatrix",w.matrixWorldInverse);const Ft=bt.map.cameraPosition;Ft!==void 0&&Ft.setValue(q,we.setFromMatrixPosition(w.matrixWorld)),He.logarithmicDepthBuffer&&bt.setValue(q,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&bt.setValue(q,"isOrthographic",w.isOrthographicCamera===!0),A!==w&&(A=w,Qt=!0,un=!0)}if(te.isSkinnedMesh){bt.setOptional(q,te,"bindMatrix"),bt.setOptional(q,te,"bindMatrixInverse");const Ft=te.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),bt.setValue(q,"boneTexture",Ft.boneTexture,Fe))}te.isBatchedMesh&&(bt.setOptional(q,te,"batchingTexture"),bt.setValue(q,"batchingTexture",te._matricesTexture,Fe),bt.setOptional(q,te,"batchingIdTexture"),bt.setValue(q,"batchingIdTexture",te._indirectTexture,Fe),bt.setOptional(q,te,"batchingColorTexture"),te._colorsTexture!==null&&bt.setValue(q,"batchingColorTexture",te._colorsTexture,Fe));const dn=le.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&tt.update(te,le,jt),(Qt||rt.receiveShadow!==te.receiveShadow)&&(rt.receiveShadow=te.receiveShadow,bt.setValue(q,"receiveShadow",te.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(hn.envMap.value=fe,hn.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&ee.environment!==null&&(hn.envMapIntensity.value=ee.environmentIntensity),Qt&&(bt.setValue(q,"toneMappingExposure",P.toneMappingExposure),rt.needsLights&&cn(hn,un),Oe&&oe.fog===!0&&Ge.refreshFogUniforms(hn,Oe),Ge.refreshMaterialUniforms(hn,oe,de,re,h.state.transmissionRenderTarget[w.id]),To.upload(q,Xe(rt),hn,Fe)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(To.upload(q,Xe(rt),hn,Fe),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&bt.setValue(q,"center",te.center),bt.setValue(q,"modelViewMatrix",te.modelViewMatrix),bt.setValue(q,"normalMatrix",te.normalMatrix),bt.setValue(q,"modelMatrix",te.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const Ft=oe.uniformsGroups;for(let Vn=0,mn=Ft.length;Vn<mn;Vn++){const Wt=Ft[Vn];ct.update(Wt,jt),ct.bind(Wt,jt)}}return jt}function cn(w,ee){w.ambientLightColor.needsUpdate=ee,w.lightProbe.needsUpdate=ee,w.directionalLights.needsUpdate=ee,w.directionalLightShadows.needsUpdate=ee,w.pointLights.needsUpdate=ee,w.pointLightShadows.needsUpdate=ee,w.spotLights.needsUpdate=ee,w.spotLightShadows.needsUpdate=ee,w.rectAreaLights.needsUpdate=ee,w.hemisphereLights.needsUpdate=ee}function Vt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(w,ee,le){Ne.get(w.texture).__webglTexture=ee,Ne.get(w.depthTexture).__webglTexture=le;const oe=Ne.get(w);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=le===void 0,oe.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,ee){const le=Ne.get(w);le.__webglFramebuffer=ee,le.__useDefaultFramebuffer=ee===void 0},this.setRenderTarget=function(w,ee=0,le=0){z=w,W=ee,I=le;let oe=!0,te=null,Oe=!1,Be=!1;if(w){const fe=Ne.get(w);if(fe.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(q.FRAMEBUFFER,null),oe=!1;else if(fe.__webglFramebuffer===void 0)Fe.setupRenderTarget(w);else if(fe.__hasExternalTextures)Fe.rebindTextures(w,Ne.get(w.texture).__webglTexture,Ne.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const it=w.depthTexture;if(fe.__boundDepthTexture!==it){if(it!==null&&Ne.has(it)&&(w.width!==it.image.width||w.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(w)}}const j=w.texture;(j.isData3DTexture||j.isDataArrayTexture||j.isCompressedArrayTexture)&&(Be=!0);const Ae=Ne.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ae[ee])?te=Ae[ee][le]:te=Ae[ee],Oe=!0):w.samples>0&&Fe.useMultisampledRTT(w)===!1?te=Ne.get(w).__webglMultisampledFramebuffer:Array.isArray(Ae)?te=Ae[le]:te=Ae,T.copy(w.viewport),O.copy(w.scissor),Z=w.scissorTest}else T.copy(ae).multiplyScalar(de).floor(),O.copy(Me).multiplyScalar(de).floor(),Z=Je;if(Le.bindFramebuffer(q.FRAMEBUFFER,te)&&oe&&Le.drawBuffers(w,te),Le.viewport(T),Le.scissor(O),Le.setScissorTest(Z),Oe){const fe=Ne.get(w.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe.__webglTexture,le)}else if(Be){const fe=Ne.get(w.texture),j=ee||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,fe.__webglTexture,le||0,j)}F=-1},this.readRenderTargetPixels=function(w,ee,le,oe,te,Oe,Be){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let V=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Be!==void 0&&(V=V[Be]),V){Le.bindFramebuffer(q.FRAMEBUFFER,V);try{const fe=w.texture,j=fe.format,Ae=fe.type;if(!He.textureFormatReadable(j)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=w.width-oe&&le>=0&&le<=w.height-te&&q.readPixels(ee,le,oe,te,We.convert(j),We.convert(Ae),Oe)}finally{const fe=z!==null?Ne.get(z).__webglFramebuffer:null;Le.bindFramebuffer(q.FRAMEBUFFER,fe)}}},this.readRenderTargetPixelsAsync=async function(w,ee,le,oe,te,Oe,Be){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let V=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Be!==void 0&&(V=V[Be]),V){Le.bindFramebuffer(q.FRAMEBUFFER,V);try{const fe=w.texture,j=fe.format,Ae=fe.type;if(!He.textureFormatReadable(j))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ee>=0&&ee<=w.width-oe&&le>=0&&le<=w.height-te){const it=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,it),q.bufferData(q.PIXEL_PACK_BUFFER,Oe.byteLength,q.STREAM_READ),q.readPixels(ee,le,oe,te,We.convert(j),We.convert(Ae),0),q.flush();const ft=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);await dp(q,ft,4);try{q.bindBuffer(q.PIXEL_PACK_BUFFER,it),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Oe)}finally{q.deleteBuffer(it),q.deleteSync(ft)}return Oe}}finally{const fe=z!==null?Ne.get(z).__webglFramebuffer:null;Le.bindFramebuffer(q.FRAMEBUFFER,fe)}}},this.copyFramebufferToTexture=function(w,ee=null,le=0){w.isTexture!==!0&&(ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ee=arguments[0]||null,w=arguments[1]);const oe=Math.pow(2,-le),te=Math.floor(w.image.width*oe),Oe=Math.floor(w.image.height*oe),Be=ee!==null?ee.x:0,V=ee!==null?ee.y:0;Fe.setTexture2D(w,0),q.copyTexSubImage2D(q.TEXTURE_2D,le,0,0,Be,V,te,Oe),Le.unbindTexture()},this.copyTextureToTexture=function(w,ee,le=null,oe=null,te=0){w.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,w=arguments[1],ee=arguments[2],te=arguments[3]||0,le=null);let Oe,Be,V,fe,j,Ae;le!==null?(Oe=le.max.x-le.min.x,Be=le.max.y-le.min.y,V=le.min.x,fe=le.min.y):(Oe=w.image.width,Be=w.image.height,V=0,fe=0),oe!==null?(j=oe.x,Ae=oe.y):(j=0,Ae=0);const it=We.convert(ee.format),ft=We.convert(ee.type);Fe.setTexture2D(ee,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,ee.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,ee.unpackAlignment);const zt=q.getParameter(q.UNPACK_ROW_LENGTH),Pt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),Bt=q.getParameter(q.UNPACK_SKIP_PIXELS),wt=q.getParameter(q.UNPACK_SKIP_ROWS),rt=q.getParameter(q.UNPACK_SKIP_IMAGES),Dt=w.isCompressedTexture?w.mipmaps[te]:w.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,Dt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Dt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,V),q.pixelStorei(q.UNPACK_SKIP_ROWS,fe),w.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,te,j,Ae,Oe,Be,it,ft,Dt.data):w.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,te,j,Ae,Dt.width,Dt.height,it,Dt.data):q.texSubImage2D(q.TEXTURE_2D,te,j,Ae,Oe,Be,it,ft,Dt),q.pixelStorei(q.UNPACK_ROW_LENGTH,zt),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Pt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Bt),q.pixelStorei(q.UNPACK_SKIP_ROWS,wt),q.pixelStorei(q.UNPACK_SKIP_IMAGES,rt),te===0&&ee.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(w,ee,le=null,oe=null,te=0){w.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,oe=arguments[1]||null,w=arguments[2],ee=arguments[3],te=arguments[4]||0);let Oe,Be,V,fe,j,Ae,it,ft,zt;const Pt=w.isCompressedTexture?w.mipmaps[te]:w.image;le!==null?(Oe=le.max.x-le.min.x,Be=le.max.y-le.min.y,V=le.max.z-le.min.z,fe=le.min.x,j=le.min.y,Ae=le.min.z):(Oe=Pt.width,Be=Pt.height,V=Pt.depth,fe=0,j=0,Ae=0),oe!==null?(it=oe.x,ft=oe.y,zt=oe.z):(it=0,ft=0,zt=0);const Bt=We.convert(ee.format),wt=We.convert(ee.type);let rt;if(ee.isData3DTexture)Fe.setTexture3D(ee,0),rt=q.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)Fe.setTexture2DArray(ee,0),rt=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,ee.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,ee.unpackAlignment);const Dt=q.getParameter(q.UNPACK_ROW_LENGTH),xt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),jt=q.getParameter(q.UNPACK_SKIP_PIXELS),Ht=q.getParameter(q.UNPACK_SKIP_ROWS),Qt=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,Pt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Pt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,fe),q.pixelStorei(q.UNPACK_SKIP_ROWS,j),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Ae),w.isDataTexture||w.isData3DTexture?q.texSubImage3D(rt,te,it,ft,zt,Oe,Be,V,Bt,wt,Pt.data):ee.isCompressedArrayTexture?q.compressedTexSubImage3D(rt,te,it,ft,zt,Oe,Be,V,Bt,Pt.data):q.texSubImage3D(rt,te,it,ft,zt,Oe,Be,V,Bt,wt,Pt),q.pixelStorei(q.UNPACK_ROW_LENGTH,Dt),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,xt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,jt),q.pixelStorei(q.UNPACK_SKIP_ROWS,Ht),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Qt),te===0&&ee.generateMipmaps&&q.generateMipmap(rt),Le.unbindTexture()},this.initRenderTarget=function(w){Ne.get(w).__webglFramebuffer===void 0&&Fe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Fe.setTextureCube(w,0):w.isData3DTexture?Fe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Fe.setTexture2DArray(w,0):Fe.setTexture2D(w,0),Le.unbindTexture()},this.resetState=function(){W=0,I=0,z=null,Le.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===dl?"display-p3":"srgb",t.unpackColorSpace=kt.workingColorSpace===Oo?"display-p3":"srgb"}}class Mg extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ko extends is{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const No=new _e,qo=new _e,Nc=new tn,Es=new uu,go=new zo,_r=new _e,qc=new _e;class tl extends on{constructor(e=new kn,t=new ko){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let a=1,s=t.count;a<s;a++)No.fromBufferAttribute(t,a-1),qo.fromBufferAttribute(t,a),n[a]=n[a-1],n[a]+=No.distanceTo(qo);e.setAttribute("lineDistance",new fn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(a),go.radius+=s,e.ray.intersectsSphere(go)===!1)return;Nc.copy(a).invert(),Es.copy(e.ray).applyMatrix4(Nc);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=r*r,d=this.isLineSegments?2:1,p=n.index,f=n.attributes.position;if(p!==null){const g=Math.max(0,c.start),E=Math.min(p.count,c.start+c.count);for(let S=g,h=E-1;S<h;S+=d){const m=p.getX(S),R=p.getX(S+1),P=_o(this,e,Es,u,m,R);P&&t.push(P)}if(this.isLineLoop){const S=p.getX(E-1),h=p.getX(g),m=_o(this,e,Es,u,S,h);m&&t.push(m)}}else{const g=Math.max(0,c.start),E=Math.min(f.count,c.start+c.count);for(let S=g,h=E-1;S<h;S+=d){const m=_o(this,e,Es,u,S,S+1);m&&t.push(m)}if(this.isLineLoop){const S=_o(this,e,Es,u,E-1,g);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=a.length;s<c;s++){const r=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}function _o(i,e,t,n,a,s){const c=i.geometry.attributes.position;if(No.fromBufferAttribute(c,a),qo.fromBufferAttribute(c,s),t.distanceSqToSegment(No,qo,_r,qc)>n)return;_r.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(_r);if(!(u<e.near||u>e.far))return{distance:u,point:qc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,object:i}}const Fc=new _e,Oc=new _e;class Eu extends tl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let a=0,s=t.count;a<s;a+=2)Fc.fromBufferAttribute(t,a),Oc.fromBufferAttribute(t,a+1),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+Fc.distanceTo(Oc);e.setAttribute("lineDistance",new fn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ml extends kn{constructor(e=1,t=1,n=1,a=32,s=1,c=!1,r=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:a,heightSegments:s,openEnded:c,thetaStart:r,thetaLength:u};const d=this;a=Math.floor(a),s=Math.floor(s);const p=[],v=[],f=[],g=[];let E=0;const S=[],h=n/2;let m=0;R(),c===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(p),this.setAttribute("position",new fn(v,3)),this.setAttribute("normal",new fn(f,3)),this.setAttribute("uv",new fn(g,2));function R(){const N=new _e,W=new _e;let I=0;const z=(t-e)/n;for(let F=0;F<=s;F++){const A=[],T=F/s,O=T*(t-e)+e;for(let Z=0;Z<=a;Z++){const K=Z/a,Y=K*u+r,se=Math.sin(Y),re=Math.cos(Y);W.x=O*se,W.y=-T*n+h,W.z=O*re,v.push(W.x,W.y,W.z),N.set(se,z,re).normalize(),f.push(N.x,N.y,N.z),g.push(K,1-T),A.push(E++)}S.push(A)}for(let F=0;F<a;F++)for(let A=0;A<s;A++){const T=S[A][F],O=S[A+1][F],Z=S[A+1][F+1],K=S[A][F+1];p.push(T,O,K),p.push(O,Z,K),I+=6}d.addGroup(m,I,0),m+=I}function P(N){const W=E,I=new Ot,z=new _e;let F=0;const A=N===!0?e:t,T=N===!0?1:-1;for(let Z=1;Z<=a;Z++)v.push(0,h*T,0),f.push(0,T,0),g.push(.5,.5),E++;const O=E;for(let Z=0;Z<=a;Z++){const Y=Z/a*u+r,se=Math.cos(Y),re=Math.sin(Y);z.x=A*re,z.y=h*T,z.z=A*se,v.push(z.x,z.y,z.z),f.push(0,T,0),I.x=se*.5+.5,I.y=re*.5*T+.5,g.push(I.x,I.y),E++}for(let Z=0;Z<a;Z++){const K=W+Z,Y=O+Z;N===!0?p.push(Y,Y+1,K):p.push(Y+1,Y,K),F+=3}d.addGroup(m,F,N===!0?1:2),m+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zc extends is{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Tt(16777215),this.specular=new Tt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tu extends on{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const xr=new tn,Bc=new _e,Hc=new _e;class Sg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fl,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Bc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bc),Hc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hc),t.updateMatrixWorld(),xr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Cg extends Sg{constructor(){super(new xu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Eg extends Tu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new Cg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Tg extends Tu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ag{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=kc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=kc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function kc(){return(typeof performance>"u"?Date:performance).now()}class wg extends Eu{constructor(e=10,t=10,n=4473924,a=8947848){n=new Tt(n),a=new Tt(a);const s=t/2,c=e/t,r=e/2,u=[],d=[];for(let f=0,g=0,E=-r;f<=t;f++,E+=c){u.push(-r,0,E,r,0,E),u.push(E,0,-r,E,0,r);const S=f===s?n:a;S.toArray(d,g),g+=3,S.toArray(d,g),g+=3,S.toArray(d,g),g+=3,S.toArray(d,g),g+=3}const p=new kn;p.setAttribute("position",new fn(u,3)),p.setAttribute("color",new fn(d,3));const v=new ko({vertexColors:!0,toneMapped:!1});super(p,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Vc=new _e,xo=new _e,Gc=new _e;class Pg extends on{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let a=new kn;a.setAttribute("position",new fn([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new ko({fog:!1,toneMapped:!1});this.lightPlane=new tl(a,s),this.add(this.lightPlane),a=new kn,a.setAttribute("position",new fn([0,0,0,0,0,1],3)),this.targetLine=new tl(a,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Vc.setFromMatrixPosition(this.light.matrixWorld),xo.setFromMatrixPosition(this.light.target.matrixWorld),Gc.subVectors(xo,Vc),this.lightPlane.lookAt(xo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(xo),this.targetLine.scale.z=Gc.length()}}const bo=new _e,en=new pl;class Rg extends Eu{constructor(e){const t=new kn,n=new ko({color:16777215,vertexColors:!0,toneMapped:!1}),a=[],s=[],c={};r("n1","n2"),r("n2","n4"),r("n4","n3"),r("n3","n1"),r("f1","f2"),r("f2","f4"),r("f4","f3"),r("f3","f1"),r("n1","f1"),r("n2","f2"),r("n3","f3"),r("n4","f4"),r("p","n1"),r("p","n2"),r("p","n3"),r("p","n4"),r("u1","u2"),r("u2","u3"),r("u3","u1"),r("c","t"),r("p","c"),r("cn1","cn2"),r("cn3","cn4"),r("cf1","cf2"),r("cf3","cf4");function r(E,S){u(E),u(S)}function u(E){a.push(0,0,0),s.push(0,0,0),c[E]===void 0&&(c[E]=[]),c[E].push(a.length/3-1)}t.setAttribute("position",new fn(a,3)),t.setAttribute("color",new fn(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=c,this.update();const d=new Tt(16755200),p=new Tt(16711680),v=new Tt(43775),f=new Tt(16777215),g=new Tt(3355443);this.setColors(d,p,v,f,g)}setColors(e,t,n,a,s){const r=this.geometry.getAttribute("color");r.setXYZ(0,e.r,e.g,e.b),r.setXYZ(1,e.r,e.g,e.b),r.setXYZ(2,e.r,e.g,e.b),r.setXYZ(3,e.r,e.g,e.b),r.setXYZ(4,e.r,e.g,e.b),r.setXYZ(5,e.r,e.g,e.b),r.setXYZ(6,e.r,e.g,e.b),r.setXYZ(7,e.r,e.g,e.b),r.setXYZ(8,e.r,e.g,e.b),r.setXYZ(9,e.r,e.g,e.b),r.setXYZ(10,e.r,e.g,e.b),r.setXYZ(11,e.r,e.g,e.b),r.setXYZ(12,e.r,e.g,e.b),r.setXYZ(13,e.r,e.g,e.b),r.setXYZ(14,e.r,e.g,e.b),r.setXYZ(15,e.r,e.g,e.b),r.setXYZ(16,e.r,e.g,e.b),r.setXYZ(17,e.r,e.g,e.b),r.setXYZ(18,e.r,e.g,e.b),r.setXYZ(19,e.r,e.g,e.b),r.setXYZ(20,e.r,e.g,e.b),r.setXYZ(21,e.r,e.g,e.b),r.setXYZ(22,e.r,e.g,e.b),r.setXYZ(23,e.r,e.g,e.b),r.setXYZ(24,t.r,t.g,t.b),r.setXYZ(25,t.r,t.g,t.b),r.setXYZ(26,t.r,t.g,t.b),r.setXYZ(27,t.r,t.g,t.b),r.setXYZ(28,t.r,t.g,t.b),r.setXYZ(29,t.r,t.g,t.b),r.setXYZ(30,t.r,t.g,t.b),r.setXYZ(31,t.r,t.g,t.b),r.setXYZ(32,n.r,n.g,n.b),r.setXYZ(33,n.r,n.g,n.b),r.setXYZ(34,n.r,n.g,n.b),r.setXYZ(35,n.r,n.g,n.b),r.setXYZ(36,n.r,n.g,n.b),r.setXYZ(37,n.r,n.g,n.b),r.setXYZ(38,a.r,a.g,a.b),r.setXYZ(39,a.r,a.g,a.b),r.setXYZ(40,s.r,s.g,s.b),r.setXYZ(41,s.r,s.g,s.b),r.setXYZ(42,s.r,s.g,s.b),r.setXYZ(43,s.r,s.g,s.b),r.setXYZ(44,s.r,s.g,s.b),r.setXYZ(45,s.r,s.g,s.b),r.setXYZ(46,s.r,s.g,s.b),r.setXYZ(47,s.r,s.g,s.b),r.setXYZ(48,s.r,s.g,s.b),r.setXYZ(49,s.r,s.g,s.b),r.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,a=1;en.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),nn("c",t,e,en,0,0,-1),nn("t",t,e,en,0,0,1),nn("n1",t,e,en,-n,-a,-1),nn("n2",t,e,en,n,-a,-1),nn("n3",t,e,en,-n,a,-1),nn("n4",t,e,en,n,a,-1),nn("f1",t,e,en,-n,-a,1),nn("f2",t,e,en,n,-a,1),nn("f3",t,e,en,-n,a,1),nn("f4",t,e,en,n,a,1),nn("u1",t,e,en,n*.7,a*1.1,-1),nn("u2",t,e,en,-n*.7,a*1.1,-1),nn("u3",t,e,en,0,a*2,-1),nn("cf1",t,e,en,-n,0,1),nn("cf2",t,e,en,n,0,1),nn("cf3",t,e,en,0,-a,1),nn("cf4",t,e,en,0,a,1),nn("cn1",t,e,en,-n,0,-1),nn("cn2",t,e,en,n,0,-1),nn("cn3",t,e,en,0,-a,-1),nn("cn4",t,e,en,0,a,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function nn(i,e,t,n,a,s,c){bo.set(a,s,c).unproject(n);const r=e[i];if(r!==void 0){const u=t.getAttribute("position");for(let d=0,p=r.length;d<p;d++)u.setXYZ(r[d],bo.x,bo.y,bo.z)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=il);class Lg{constructor(e,t,n){Rn(this,"camera");Rn(this,"canvas");Rn(this,"pivot");this.camera=e,this.pivot=t,this.canvas=n,e.translateZ(30),t.rotateX(-Math.PI/8),window.addEventListener("resize",()=>this.onResize()),this.onResize()}update(e){this.pivot.rotateOnWorldAxis(new _e(0,1,0),e/20)}onResize(){const e=this.canvas.getBoundingClientRect();this.camera.aspect=e.width/e.height,this.camera.updateProjectionMatrix()}}class Dg extends Eg{constructor(t,n){super(t,n);Rn(this,"freeRotationTarget");this.freeRotationTarget=new on,this.freeRotationTarget.position.set(0,-1,0),this.add(this.freeRotationTarget),this.target=this.freeRotationTarget}restoreFreeRotation(){this.target=this.freeRotationTarget}}let ma;class Vo{constructor(){Rn(this,"canvas");Rn(this,"scene");Rn(this,"renderer");Rn(this,"cameraControl");Rn(this,"sun");Rn(this,"clock");Rn(this,"hideables",[]);Rn(this,"rafId",-1);Rn(this,"accDelta",0);Rn(this,"resizeListenerRef");this.scene=new Mg,this.canvas=document.querySelector("#free-light-example-canvas"),this.renderer=new yg({canvas:this.canvas,powerPreference:"high-performance",antialias:!0,alpha:!0}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=2;const e=new Wn,t=new As;t.add(e),this.cameraControl=new Lg(e,t,this.canvas),this.scene.add(t),this.sun=new Dg("#ffffff",2),this.sun.position.setY(9),this.sun.castShadow=!0,this.sun.shadow.camera.left=-8,this.sun.shadow.camera.top=8,this.sun.shadow.camera.right=8,this.sun.shadow.camera.bottom=-8,this.sun.shadow.camera.far=18,this.sun.shadow.bias=1e-4,this.sun.shadow.intensity=.8,this.sun.shadow.mapSize.width=512,this.sun.shadow.mapSize.height=512;const n=new Rg(this.sun.shadow.camera),a=new Pg(this.sun);this.scene.add(n),this.scene.add(a),this.scene.add(this.sun);const s=new Tg("#ffffff",.2);this.scene.add(s);const c=new zc({color:new Tt("#444444")}),r=new zc({color:new Tt("#fd855d")}),u=new Yn(new Ea(20,1,20),c);u.receiveShadow=!0,u.castShadow=!0;const d=new Yn(new Ea(2,2,2),r);d.receiveShadow=!0,d.castShadow=!0,d.position.setY(5.5),this.scene.add(d);const p=new Yn(new ml(3,1.5,4,24),r);p.castShadow=!0,p.receiveShadow=!0,p.position.setY(2.5),this.scene.add(p);const v=new wg(30,30,"#ffb399","#fd855d");v.material.opacity=.2,v.material.transparent=!0,v.position.setY(.51),this.scene.add(v),this.scene.add(u),this.clock=new Ag,this.onResize(),this.initListeners(),this.hideables=[v,n,a]}static isInitialized(){return ma!==void 0}static dispose(){ma&&ma.dispose()}static getInstance(){return ma||(ma=new Vo),ma}onResize(){const e=this.canvas.getBoundingClientRect();this.renderer.setSize(e.width,e.height)}renderLoop(){this.rafId=requestAnimationFrame(this.renderLoop.bind(this));const e=Math.min(120,this.clock.getDelta());this.render(e)}startRenderLoop(){this.renderLoop()}stopRenderLoop(){this.clock.stop(),cancelAnimationFrame(this.rafId)}render(e=33){this.accDelta+=e,this.accDelta>Math.PI*4&&(this.accDelta-=Math.PI*4,console.log("rendering")),this.sun.rotation.set(Math.sin(this.accDelta),0,Math.cos(this.accDelta/2)),this.cameraControl.update(e),this.renderer.render(this.scene,this.cameraControl.camera)}initListeners(){this.resizeListenerRef=this.onResize.bind(this),window.addEventListener("resize",this.resizeListenerRef),window.addEventListener("error",()=>{this.stopRenderLoop()})}dispose(){this.stopRenderLoop(),ma=void 0}showHelpers(e=!0){this.hideables.forEach(t=>t.visible=e)}}function Ug(i){let e;return{c(){e=gt(i[1])},l(t){e=_t(t,i[1])},m(t,n){l(t,e,n)},p:Ut,d(t){t&&o(e)}}}function Ig(i){let e;return{c(){e=gt(i[2])},l(t){e=_t(t,i[2])},m(t,n){l(t,e,n)},p:Ut,d(t){t&&o(e)}}}function Ng(i){let e;return{c(){e=gt("const sun = new RotableDirectionalLight('#ffffff', 2)")},l(t){e=_t(t,"const sun = new RotableDirectionalLight('#ffffff', 2)")},m(t,n){l(t,e,n)},d(t){t&&o(e)}}}function qg(i){let e,t=`Hasta hace unos años me obsesionaba el tiempo, no me dejaba vivir en paz, siempre
sentía que no había tiempo para nada y no disfrutaba ni de un mero paseo o de
leer un libro. Irónicamente, me organizaba mucho peor que ahora.`,n,a,s=`En estos años, tras entender que es muy peligroso intentar controlar demasiado
los tiempos, cuando entendí que cada día con vida es una victoria y cada
arañazo del bruto de mi gato jugando es vida, el tiempo ya no forma parte de
ninguna ecuación. Si algo no llega a tiempo, pues no llega 🤷‍♂️.`,c,r,u=`Esto puede sonar especialmente chocante en un consultor. A algunos clientes
cuando me piden estimaciones de tiempo les digo “esto podría tomar un mes o un
año, quién sabe”. Me miran raro, se supone que si alguien lo sabe soy yo.`,d,p,v=`No suelo infravalorar los factores no medibles y la experiencia me ha enseñado
a no estimar nunca por lo bajo, más vale que sobre el tiempo y darle una alegría
al cliente al terminar mucho antes de lo previsto, a que falte y que el cliente
se lleve una desagradable sorpresa, aunque eso suponga perder algunos clientes
inicialmente a los que tu estimación les parece excesiva.`,f,g,E=`Cuento esto porque el título de esta entrada podría hacer pensar que para mí
es especialmente importante la productividad y no perder el tiempo, pero nada
más lejos de la realidad. Ahora bien, eso no significa que no haya notado una
fuerte diferencia entre la productividad inherente a algunas metodologías.`,S,h,m=`Como frikazo del tooling y DX, sé muy bien que hacerte tus propias herramientas puede
acelerar tu trabajo de una forma que no te puedes ni imaginar. Que quede muy claro cuanto antes: no me refiero a <strong>reinventar la
rueda</strong>. Tampoco lo considero el mal, reinventar tiene numerosas
ventajas y tengo mucho para hablar de ello en otra entrada, pero no, no es
de esto de lo que trato aquí.`,R,P,N="Caso real: luces de rotación libre en Three.js",W,I,z,F,A=i[0]?"Ocultar":"Mostrar",T,O,Z,K,Y=`Si estás en un dispositivo compatible <small>(requiere navegador no muy viejo,
compatible con WebGL al menos)</small> estarás viendo una escena donde hay una
luz direccional. Son fuentes de luz usadas para representar iluminación global
direccional plana, habitualmente un sol. Es una luz algo modificada respecto a
la original. Describo luego.`,se,re,de=`Verás, en casi toda solución de renderizado 3D, los objetos
tienen propiedades de rotación, normalmente asociados a una matriz de
transformación. Siempre se puede rotar todo objeto modificando esta propiedad
o bien mediante algún método rotate. En Three.js funciona igual.`,J,De,ae=`La primera experiencia de un alumno mío con Three.js fue nefasta. Me contó que tras una hora
lo descartó y volvió a otras soluciones como Unity. Concretamente lo que le hizo
abandonar es que no entendía por qué al rotar una “DirectionalLight” no cambiaba
nada. El objeto que representa la luz, cambiaba, su matriz efectivamente era
actualizada, pero no había cambio visible, porque la luz seguía apuntando a
donde quería (concretamente hacia la dirección 0,0,0).`,Me,Je,je=`En Three.js (hasta la fecha, release 168), por defecto, la rotación del objeto
que representa a la fuente de luz es independiente de la dirección de la luz.
La luz se controla con la propiedad <code>target</code>. Siempre apunta hacia un objetivo.
Por defecto, hacia las coordenadas 0,0,0, osea, al centro de la escena.`,ie,Ee,Re=`En realidad no supone ningún problema: moviendo el target puedes cambiar la
dirección, y el target puede ser un objeto vacío invisible por la escena. De
ahí pueden surgir muchas opciones para realmente conseguir el efecto de rotación
libre.`,we,ke,qe=`Aunque se topó con esto, se convenció de que no tenía sentido y que Three.js era
simplemente peor que otras soluciones, que no quería estar apagando fuegos,
porque si con algo “tan básico” según él, ya había un obstáculo, ¿qué le
depararía el futuro? Atento a esto:`,ze,at,q,Ye,nt=`En este caso, <code>sun</code> es una <code>DirectionalLight</code> que como todas, siempre apunta a su
target, no cambia, pero ahora el target es hijo de la luz (con add), y además
está en frente de ella (1 en Z, entiendo +Z como el frente). Así, al rotar
sun también rotas el objeto target, haciendo que efectivamente la luz rote
de manera acorde.`,He,Le,st=`¿Básicamente en 2 líneas hemos hecho que una luz rote acorde a su propiedad
de rotación?, ¿de pronto tenemos luces como en Unity u otros sistemas? Esto no
es precisamente un supertrabajo de ingeniería, pero muchos desarrolladores,
juniors y seniors, tienden a creer que las cosas
son más complejas de lo que realmente son y demasiadas veces a adoptar un rol
de mero usuario.`,Ne,Fe,U=`Esto es común cuando no están acostumbrados a bibliotecas extensibles, libres y
bien documentadas. Creen que lo que necesitan debe venir integrado en las
bibliotecas que utilizan y se olvidan de que pueden extender cuanto quieran, e
incluso contribuir con sus cambios si son muy útiles para alguien.`,_,H,xe=`Me gusta especialmente Three.js porque la mayoría de clases y funciones son
bastante obvias. También porque es un entorno con tantos contribuidores
(más de 800 a fecha de hoy) y tan laxo, que te ves estilos de diseño muy
distintos entre cada parte, haciéndolo muy “multicultural” a su manera.`,pe,ue,Ge=`Siguiendo con el ejemplo, podría abstraerse todo esto y hacer una nueva clase
que herede de DirectionalLight:`,Se,Pe,Ze,k,he="Y así, cuando necesitemos una luz de rotación libre hacer:",tt,X,me,We,Ke=`Solo hay que tener cuidado con la propiedad target, si se modifica manualmente
ya deja de ser de rotación libre y actua como una direccional normal. Esto está
bien, así puede servir de DirectionalLight cumpliendo el principio de sustitución
de Liskov en su forma más pura. Guardamos una referencia al nuevo target con esta
responsabilidad, para poder restablecerlo en otro momento si se quiere recuperar
la rotación libre.`,ct,G,Ce="Independencia tecnológica",be,ve,Te=`A lo mejor te preguntas por qué iba a querer alguien hacerse sus propias
herramientas cuando ya existen soluciones similares, peor si piensas en la dichosa
frase de “reinventar la rueda”. Y puede que te preguntes cómo se supone que
todo esto puede ahorrar tiempo.`,$e,Qe,lt=`La siguiente respuesta se aplica con mayor notoriedad cuando eres un profesional
con mucha experiencia o formas parte de un equipo muy experimentado, que puede
crearse la herramienta adecuada en un momento o adaptar otra preexistente. Si
no es así, probablemente te
fatigue o incluso no sepas ni por dónde empezar por la mera falta de costumbre.`,ut,et,dt=`Cuando las soluciones existentes son privativas la ventaja es bastante obvia:
tener libertad y completo control sobre tus herramientas, sin que una empresa de
turno venga a decirte de pronto qué puedes o no puedes hacer y cuánto debes
pagarle. Además, el soporte a clientes de las herramientas privativas no es tan
maravilloso como muchos intentan defender. Te animo a intentar pedirle a Unity
que solucione alguno de sus millones de problemas técnicos o mejore algunas
de las herramientas más chapuceras que tiene (como las Unity Style Sheets).
Por mucho que pagues una licencia, pasarán de ti.`,pt,Q,Ue=`Pero también es muy común hacerse uno mismo herramientas avanzadas pese a que
existan soluciones libres. No siempre uno está
contento con la arquitectura o el rumbo del proyecto por buenas que sean
sus intenciones, y a veces está tan lejos
de tus requisitos que sentirás que estarás más tiempo pidiendo ayuda y apagando
fuegos que haciendo algo útil.`,vt,ce,Ie=`Cuando no tienes que esperar por nadie para corregir un problema, sino que
puedes ser tú mismo (o alguien de tu equipo) quien lo haga, con garantías de que
eventualmente se hará y exactamente como uno espera que se haga, no hay pausas
salvo las que tú decidas. Te aseguro que en este mundo se notan más las pausas
que simplemente “ir lento”, no solo en el tiempo, también en la motivación.`,At,ne,B=`Además, la complejidad de las características de bibliotecas, frameworks o
sistemas de naturaleza
generalista o multipropósito puede llegar a ser tan grande, que simplemente
estudiarte la documentación y un uso básico se vuelve una pesadilla, siendo
más viable y habitualmente más eficiente hacerte una herramienta a medida o
utilizar bibliotecas orientadas a una única responsabilidad.`,Xe,Nt,qt=`Three.js y PixiJS, por ejemplo, no son motores de videojuego, no tienen
físicas ni muchas otras herramientas, porque su rol principal es de renderizado.
Adaptarlas a un sistema
más complejo implica también estudiarlas hasta el punto que más o menos puedes
entender bien su arquitectura interna, así que te es muy fácil modificarlas
si lo necesitas.`,cn,Vt,w=`En cualquier caso, el objetivo se puede resumir en buscar independencia. Entre más
dependes de soluciones de terceros y entre más completas son sus soluciones,
menos margen de maniobra tienes cuando hay un problema serio con esa dependencia.
He visto a gente mantener issues en bibliotecas durante más de 5 años preguntando
cada 3 meses “¿existe ya una solución?” y quejándose, cuando lo que piden se
puede resolver en una tarde o dos.`,ee,le,oe=`Por último y no menos importante hay otra razón para querer
hacerte tus propias herramientas: por diversión o arte.
Estoy algo cansado de los utilitaristas. Insisto mucho en que esto es un arte,
y para muchos es nuestro hobby principal además de nuestra profesión. A veces
simplemente queremos intentar hacer algo por nuestra cuenta e intentar hacerlo
mejor, sin desmerecer cualquier otra solución previa y sin ánimo de aportar nada
o competir. A veces es una oportunidad magnífica para mejorar.`,te,Oe,Be;return I=new hd({props:{id:"free-light-example-canvas",sceneManager:Vo}}),at=new Fn({props:{language:"TypeScript",$$slots:{default:[Ug]},$$scope:{ctx:i}}}),Pe=new Fn({props:{language:"TypeScript",$$slots:{default:[Ig]},$$scope:{ctx:i}}}),X=new Fn({props:{language:"TypeScript",$$slots:{default:[Ng]},$$scope:{ctx:i}}}),{c(){e=x("p"),e.textContent=t,n=y(),a=x("p"),a.textContent=s,c=y(),r=x("p"),r.textContent=u,d=y(),p=x("p"),p.textContent=v,f=y(),g=x("p"),g.textContent=E,S=y(),h=x("p"),h.innerHTML=m,R=y(),P=x("h2"),P.textContent=N,W=y(),Mt(I.$$.fragment),z=y(),F=x("button"),T=gt(A),O=gt(" helpers"),Z=y(),K=x("p"),K.innerHTML=Y,se=y(),re=x("p"),re.textContent=de,J=y(),De=x("p"),De.textContent=ae,Me=y(),Je=x("p"),Je.innerHTML=je,ie=y(),Ee=x("p"),Ee.textContent=Re,we=y(),ke=x("p"),ke.textContent=qe,ze=y(),Mt(at.$$.fragment),q=y(),Ye=x("p"),Ye.innerHTML=nt,He=y(),Le=x("p"),Le.textContent=st,Ne=y(),Fe=x("p"),Fe.textContent=U,_=y(),H=x("p"),H.textContent=xe,pe=y(),ue=x("p"),ue.textContent=Ge,Se=y(),Mt(Pe.$$.fragment),Ze=y(),k=x("p"),k.textContent=he,tt=y(),Mt(X.$$.fragment),me=y(),We=x("p"),We.textContent=Ke,ct=y(),G=x("h2"),G.textContent=Ce,be=y(),ve=x("p"),ve.textContent=Te,$e=y(),Qe=x("p"),Qe.textContent=lt,ut=y(),et=x("p"),et.textContent=dt,pt=y(),Q=x("p"),Q.textContent=Ue,vt=y(),ce=x("p"),ce.textContent=Ie,At=y(),ne=x("p"),ne.textContent=B,Xe=y(),Nt=x("p"),Nt.textContent=qt,cn=y(),Vt=x("p"),Vt.textContent=w,ee=y(),le=x("p"),le.textContent=oe},l(V){e=b(V,"P",{"data-svelte-h":!0}),C(e)!=="svelte-c5t86c"&&(e.textContent=t),n=M(V),a=b(V,"P",{"data-svelte-h":!0}),C(a)!=="svelte-pk5ahq"&&(a.textContent=s),c=M(V),r=b(V,"P",{"data-svelte-h":!0}),C(r)!=="svelte-197l6dv"&&(r.textContent=u),d=M(V),p=b(V,"P",{"data-svelte-h":!0}),C(p)!=="svelte-ib4xxd"&&(p.textContent=v),f=M(V),g=b(V,"P",{"data-svelte-h":!0}),C(g)!=="svelte-1euodzh"&&(g.textContent=E),S=M(V),h=b(V,"P",{"data-svelte-h":!0}),C(h)!=="svelte-zzi0ez"&&(h.innerHTML=m),R=M(V),P=b(V,"H2",{"data-svelte-h":!0}),C(P)!=="svelte-1tmvlw"&&(P.textContent=N),W=M(V),St(I.$$.fragment,V),z=M(V),F=b(V,"BUTTON",{});var fe=Gt(F);T=_t(fe,A),O=_t(fe," helpers"),fe.forEach(o),Z=M(V),K=b(V,"P",{"data-svelte-h":!0}),C(K)!=="svelte-yx5zak"&&(K.innerHTML=Y),se=M(V),re=b(V,"P",{"data-svelte-h":!0}),C(re)!=="svelte-w5qrkk"&&(re.textContent=de),J=M(V),De=b(V,"P",{"data-svelte-h":!0}),C(De)!=="svelte-10quyp6"&&(De.textContent=ae),Me=M(V),Je=b(V,"P",{"data-svelte-h":!0}),C(Je)!=="svelte-zy0dfi"&&(Je.innerHTML=je),ie=M(V),Ee=b(V,"P",{"data-svelte-h":!0}),C(Ee)!=="svelte-1pb2lwd"&&(Ee.textContent=Re),we=M(V),ke=b(V,"P",{"data-svelte-h":!0}),C(ke)!=="svelte-f7k36c"&&(ke.textContent=qe),ze=M(V),St(at.$$.fragment,V),q=M(V),Ye=b(V,"P",{"data-svelte-h":!0}),C(Ye)!=="svelte-1hstxkr"&&(Ye.innerHTML=nt),He=M(V),Le=b(V,"P",{"data-svelte-h":!0}),C(Le)!=="svelte-1xv2743"&&(Le.textContent=st),Ne=M(V),Fe=b(V,"P",{"data-svelte-h":!0}),C(Fe)!=="svelte-12h2073"&&(Fe.textContent=U),_=M(V),H=b(V,"P",{"data-svelte-h":!0}),C(H)!=="svelte-wynhgl"&&(H.textContent=xe),pe=M(V),ue=b(V,"P",{"data-svelte-h":!0}),C(ue)!=="svelte-1cjupe8"&&(ue.textContent=Ge),Se=M(V),St(Pe.$$.fragment,V),Ze=M(V),k=b(V,"P",{"data-svelte-h":!0}),C(k)!=="svelte-1k1an1v"&&(k.textContent=he),tt=M(V),St(X.$$.fragment,V),me=M(V),We=b(V,"P",{"data-svelte-h":!0}),C(We)!=="svelte-15mcduz"&&(We.textContent=Ke),ct=M(V),G=b(V,"H2",{"data-svelte-h":!0}),C(G)!=="svelte-19g7tyv"&&(G.textContent=Ce),be=M(V),ve=b(V,"P",{"data-svelte-h":!0}),C(ve)!=="svelte-1jgn7bv"&&(ve.textContent=Te),$e=M(V),Qe=b(V,"P",{"data-svelte-h":!0}),C(Qe)!=="svelte-6lsf2o"&&(Qe.textContent=lt),ut=M(V),et=b(V,"P",{"data-svelte-h":!0}),C(et)!=="svelte-ab3ka0"&&(et.textContent=dt),pt=M(V),Q=b(V,"P",{"data-svelte-h":!0}),C(Q)!=="svelte-1rp33dg"&&(Q.textContent=Ue),vt=M(V),ce=b(V,"P",{"data-svelte-h":!0}),C(ce)!=="svelte-1g994jb"&&(ce.textContent=Ie),At=M(V),ne=b(V,"P",{"data-svelte-h":!0}),C(ne)!=="svelte-gjgp1o"&&(ne.textContent=B),Xe=M(V),Nt=b(V,"P",{"data-svelte-h":!0}),C(Nt)!=="svelte-6ydtym"&&(Nt.textContent=qt),cn=M(V),Vt=b(V,"P",{"data-svelte-h":!0}),C(Vt)!=="svelte-vjyqrs"&&(Vt.textContent=w),ee=M(V),le=b(V,"P",{"data-svelte-h":!0}),C(le)!=="svelte-11prgsj"&&(le.textContent=oe)},m(V,fe){l(V,e,fe),l(V,n,fe),l(V,a,fe),l(V,c,fe),l(V,r,fe),l(V,d,fe),l(V,p,fe),l(V,f,fe),l(V,g,fe),l(V,S,fe),l(V,h,fe),l(V,R,fe),l(V,P,fe),l(V,W,fe),Ct(I,V,fe),l(V,z,fe),l(V,F,fe),It(F,T),It(F,O),l(V,Z,fe),l(V,K,fe),l(V,se,fe),l(V,re,fe),l(V,J,fe),l(V,De,fe),l(V,Me,fe),l(V,Je,fe),l(V,ie,fe),l(V,Ee,fe),l(V,we,fe),l(V,ke,fe),l(V,ze,fe),Ct(at,V,fe),l(V,q,fe),l(V,Ye,fe),l(V,He,fe),l(V,Le,fe),l(V,Ne,fe),l(V,Fe,fe),l(V,_,fe),l(V,H,fe),l(V,pe,fe),l(V,ue,fe),l(V,Se,fe),Ct(Pe,V,fe),l(V,Ze,fe),l(V,k,fe),l(V,tt,fe),Ct(X,V,fe),l(V,me,fe),l(V,We,fe),l(V,ct,fe),l(V,G,fe),l(V,be,fe),l(V,ve,fe),l(V,$e,fe),l(V,Qe,fe),l(V,ut,fe),l(V,et,fe),l(V,pt,fe),l(V,Q,fe),l(V,vt,fe),l(V,ce,fe),l(V,At,fe),l(V,ne,fe),l(V,Xe,fe),l(V,Nt,fe),l(V,cn,fe),l(V,Vt,fe),l(V,ee,fe),l(V,le,fe),te=!0,Oe||(Be=nl(F,"click",i[3]),Oe=!0)},p(V,[fe]){(!te||fe&1)&&A!==(A=V[0]?"Ocultar":"Mostrar")&&Rs(T,A);const j={};fe&16&&(j.$$scope={dirty:fe,ctx:V}),at.$set(j);const Ae={};fe&16&&(Ae.$$scope={dirty:fe,ctx:V}),Pe.$set(Ae);const it={};fe&16&&(it.$$scope={dirty:fe,ctx:V}),X.$set(it)},i(V){te||(ht(I.$$.fragment,V),ht(at.$$.fragment,V),ht(Pe.$$.fragment,V),ht(X.$$.fragment,V),te=!0)},o(V){mt(I.$$.fragment,V),mt(at.$$.fragment,V),mt(Pe.$$.fragment,V),mt(X.$$.fragment,V),te=!1},d(V){V&&(o(e),o(n),o(a),o(c),o(r),o(d),o(p),o(f),o(g),o(S),o(h),o(R),o(P),o(W),o(z),o(F),o(Z),o(K),o(se),o(re),o(J),o(De),o(Me),o(Je),o(ie),o(Ee),o(we),o(ke),o(ze),o(q),o(Ye),o(He),o(Le),o(Ne),o(Fe),o(_),o(H),o(pe),o(ue),o(Se),o(Ze),o(k),o(tt),o(me),o(We),o(ct),o(G),o(be),o(ve),o($e),o(Qe),o(ut),o(et),o(pt),o(Q),o(vt),o(ce),o(At),o(ne),o(Xe),o(Nt),o(cn),o(Vt),o(ee),o(le)),Et(I,V),Et(at,V),Et(Pe,V),Et(X,V),Oe=!1,Be()}}}const Fg={title:"Deja de esperar por otros",slug:"deja-esperar-otros",coverImage:"/src/assets/posts-covers/jon-tyson.jpg",coverPosition:"normal",coverAuthor:"Jon Tyson",excerpt:"Hacerte tus propias herramientas puede acelerar tu trabajo, explico por qué.",date:"2024-09-13T13:00:23.177Z",updated:"2024-09-13T13:00:23.903Z",hidden:!1,tags:["Tooling","Three.js","DX"],keywords:["herramientas","esperar","Three"],type:"default",fullReload:!1};function Og(i,e,t){let n;const a=`const sun = new DirectionalLight('#ffffff', 2)
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
}`;function c(){t(0,n=!n),Vo.getInstance().showHelpers(n)}return t(0,n=!0),[n,a,s,c]}class zg extends Kt{constructor(e){super(),Jt(this,e,Og,qg,Zt,{})}}const Bg=Object.freeze(Object.defineProperty({__proto__:null,default:zg,metadata:Fg},Symbol.toStringTag,{value:"Module"}));function Hg(i){let e,t=`En mi oficio es normal despertarse un día, ver código del día anterior y
preguntarse: “¿Yo escribí esta porquería?“. Veo que no solo ocurre con código.
Ayer publiqué una entrada titulada “Primatología: directivos”. Ya no existe.
Solo describía mi realidad trabajando
con directivos y no aportaba nada. No molaba ni el tono. ¿Primatología? Que
sí, que somos todos unos monos, pero decirlo así suena tan pedante, tan esnob…`,n,a,s=`He considerado que esa entrada era intolerable, y he reafirmado alguna que otra
convicción por el camino. Irónicamente, es la entrada que más feedback positivo
ha recibido; todos los compañeros que han tenido que lidiar con directivos sin
formación técnica se han sentido muy identificados. ¿Mereció la pena?`,c,r,u=`No pretendo ir de gurú y menos
en estos ámbitos donde estoy a un palillo de ser un hikikomori, pero sí
tengo claro qué cosas me sientan mal y
cómo he aprendido a cargármelas sin dudar. Quizás mi experiencia le sirva a
alguien.`,d,p,v="🔴🤚 Discursos segregacionistas",f,g,E=`Una de las ventajas de exponer lo que escribes es que, salvo que seas un
psicópata al que le importa un pimiento lo que pueda producir, te estarás
preguntando un buen tiempo si no la habrás cagado, liando a quien pueda leerte o
metiendo fuego innecesariamente.`,S,h,m=`Lo que escribí sobre los problemas de directivos o jefes de proyecto de
software sin conocimientos técnicos no era erróneo, pero era innecesario.
Esos discursos que señalan a roles comunes, especialmente cuando los asocian a
algo negativo, suelen ser discursos segregacionistas si
se publican a lo loco y se usan indebidamente. Si ese fuera mi objetivo
estaría escribiendo en Linkedin o Twitter.`,R,P,N=`Si mi trabajo se fundamenta principalmente en unir, y si llevo toda la vida
conociendo de primera mano los problemas de poner barreras entre las personas,
el daño que provoca el mantener juicios inmutables por acciones pasadas, y un
largo etcétera, ¿qué pinto escribiendo algo así?`,W,I,z=`Entre mis contactos no figuran directivos sin conocimiento técnico, ninguno va
a leerlo y sentirse mal. Pero yo sí lo leo, leo un texto que solo fortalece
una percepción negativa con un discurso donde realizo una generalización
apresurada. <em><small>He formado a siete directivos, solo siete (7) en todos estos años, y solo
tres en el contexto de su entorno laboral, pero escribía esa entrada como si
hubiera tratado a cientos con el mismo resultado.</small></em>`,F,A,T="Dudar cuando guste",O,Z,K=`Lo que hizo que se me encendieran las alarmas es la buena acogida de esa
entrada. Ganar notoriedad por algo con lo que no te quieres ver reflejado es
algo que siempre he considerado aterrador.`,Y,se,re=`Tengo un problema que hace años manejaba de forma extraña. Implicaba esconder
cualquier logro pasado
indebidamente por connotaciones negativas que solo yo veía. Creía
que si alguien me aplaudía algo de lo que yo mismo dudaba, eventualmente me
acabaría sintiendo el triple de mal o pensando que cambiar de opinión
me dejaría como un fraude.`,de,J,De=`Hoy día le he encontrado un sentido más justificado. Me he topado
demasiadas veces con variaciones de la ley de Twyman: cuanto más interesante y
polémico es un discurso, más probable es que esté equivocado; cuanto más
impresionantes sean
los datos, más probable es que sean fruto de un error o de una manipulación
deliberada. En este caso, lo asocio al reduccionismo tan bestia que apliqué.`;return{c(){e=x("p"),e.textContent=t,n=y(),a=x("p"),a.textContent=s,c=y(),r=x("p"),r.textContent=u,d=y(),p=x("h2"),p.textContent=v,f=y(),g=x("p"),g.textContent=E,S=y(),h=x("p"),h.textContent=m,R=y(),P=x("p"),P.textContent=N,W=y(),I=x("p"),I.innerHTML=z,F=y(),A=x("h2"),A.textContent=T,O=y(),Z=x("p"),Z.textContent=K,Y=y(),se=x("p"),se.textContent=re,de=y(),J=x("p"),J.textContent=De},l(ae){e=b(ae,"P",{"data-svelte-h":!0}),C(e)!=="svelte-1a38mrp"&&(e.textContent=t),n=M(ae),a=b(ae,"P",{"data-svelte-h":!0}),C(a)!=="svelte-12mga9c"&&(a.textContent=s),c=M(ae),r=b(ae,"P",{"data-svelte-h":!0}),C(r)!=="svelte-1pbgmfd"&&(r.textContent=u),d=M(ae),p=b(ae,"H2",{"data-svelte-h":!0}),C(p)!=="svelte-18r6i93"&&(p.textContent=v),f=M(ae),g=b(ae,"P",{"data-svelte-h":!0}),C(g)!=="svelte-16n6dho"&&(g.textContent=E),S=M(ae),h=b(ae,"P",{"data-svelte-h":!0}),C(h)!=="svelte-jipa73"&&(h.textContent=m),R=M(ae),P=b(ae,"P",{"data-svelte-h":!0}),C(P)!=="svelte-13vvo6n"&&(P.textContent=N),W=M(ae),I=b(ae,"P",{"data-svelte-h":!0}),C(I)!=="svelte-iluout"&&(I.innerHTML=z),F=M(ae),A=b(ae,"H2",{"data-svelte-h":!0}),C(A)!=="svelte-1nncrjc"&&(A.textContent=T),O=M(ae),Z=b(ae,"P",{"data-svelte-h":!0}),C(Z)!=="svelte-1to1n8l"&&(Z.textContent=K),Y=M(ae),se=b(ae,"P",{"data-svelte-h":!0}),C(se)!=="svelte-dac09"&&(se.textContent=re),de=M(ae),J=b(ae,"P",{"data-svelte-h":!0}),C(J)!=="svelte-1cyse93"&&(J.textContent=De)},m(ae,Me){l(ae,e,Me),l(ae,n,Me),l(ae,a,Me),l(ae,c,Me),l(ae,r,Me),l(ae,d,Me),l(ae,p,Me),l(ae,f,Me),l(ae,g,Me),l(ae,S,Me),l(ae,h,Me),l(ae,R,Me),l(ae,P,Me),l(ae,W,Me),l(ae,I,Me),l(ae,F,Me),l(ae,A,Me),l(ae,O,Me),l(ae,Z,Me),l(ae,Y,Me),l(ae,se,Me),l(ae,de,Me),l(ae,J,Me)},p:Ut,i:Ut,o:Ut,d(ae){ae&&(o(e),o(n),o(a),o(c),o(r),o(d),o(p),o(f),o(g),o(S),o(h),o(R),o(P),o(W),o(I),o(F),o(A),o(O),o(Z),o(Y),o(se),o(de),o(J))}}}const kg={title:"Discursos segregacionistas",slug:"discursos-segregacionistas",coverImage:"/src/assets/posts-covers/valla.jpg",coverPosition:"normal",coverAuthor:"Alex Shuper",excerpt:"Recogiendo cable. Explico por qué no tolero ni en mí mismo algunos discursos.",date:"2024-09-07T22:06:23.177Z",updated:"2024-09-07T22:06:23.903Z",hidden:!1,tags:["Personal","Salud mental"],keywords:[],type:"default"};class Vg extends Kt{constructor(e){super(),Jt(this,e,null,Hg,Zt,{})}}const Gg=Object.freeze(Object.defineProperty({__proto__:null,default:Vg,metadata:kg},Symbol.toStringTag,{value:"Module"})),jg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWoAAADyCAMAAABTRH9LAAAAM1BMVEUAAAD///8AAADOzs6mpqaDg4MWFhZjY2MuLi5HR0cHBwfy8vINDQ3Pz894eHiAgICPj4990EOxAAAAAXRSTlMAQObYZgAACEtJREFUeNrsm4FuozAMhhfbJOH9X/iM6xR21OikcYCn/5PaJsRRra+RxyT8ReAavr6ogCuA6giozgtUR0B1XqA6AqrzAtURUJ0XqI6A6rxAdQRU5wWqI6A6L1AdAdV5geoIqM5LoJrAz/h31TjpPwOqQ6A6LVAdAtVpgeoQqE4LVIdAdVqgOgSqC9PCxCTfLnJ5OClVD6tQHXCyaiYR6qR5EbHOZqKplElncymNbKZrz/kJkqtWnbWpX531IrpAojNmWtZfa09JO6dqpb9Uc5Elrfqq3L2xrbP/Gr5WnkFK1ebxrXqh2cXerHL41WmslWeQX3UtPlsOsBCv66xrDyK9avVbhIRpLjoVTbITT3VZH2vlGeRXXaxWqGqycq0TFawTktfaU0p1RtVZgeoQqE4LVIdAdVqgOgSq0wLVIVCdFqi+DMKTqEfgSdRSfkl+UG1ANVTfT8b8oNqAaqi+n4z5QbUB1VB9Pxnzg2oDqqH6fjLmB9UGVEO1w0RU/WnFHSQeETzeJeQbT1dNBu+SFf/KeNO8zc5h4vtVy5J2q8eqOd79v061/bRz/6j6eFOdH6q6NnsXU01EsqTlL5q3qv0661VqxYL1VdeNvuK9FmeoFvKWjdHHwST+ldR0Pr0z4e0m9mgN9dFBN8hlqplkHVh3BLtSm31Wrdft8dw2C60bx4r3Wpx0qr1lw/s41gJCcxHPxCPGJg31aFn3xd0gF6rmt2ob1+mtlLe1ug/V/mEHTt+DjSfV6nfLBlseW9Vi2TGxR7jqEe0rPjrqBrlItcvcVMHeti7rp1Pty57tbmORkwoI6+vdstFICVRbxPZUe7SG+uioG+Qy1b3Z+3Rwqo9V7zZ67AkFZFrbOYQ4PNV1V+A9eh0F3SC33YF4yV0SbvpR5++12q8PoSS6TWhf5Kd6Wq3ufbRsCOnss2qPeG/SZDxaaIyOukEuU11kc1+tQ7E/06p0mfW+qh7XNzcotMTsb11mm52hmql5y4b3cZhk+ku1RyheEUa0zn100A2C/xafAFSHQDVU30/G/KDagGqovp+M+UG1AdVQ/Ye9M9ptFQaCqHZsjDE0yf9/bZMtKILg5KnxrjVHurrlbXq0xdtWHbfHYz6qVqiaqtvjMR9VKx2pno2rfuTj3y36pNm9MPMyi2U+5PN0Bc+lXMUy5/k8qp4LiuWxruTzqPqywPRYV/I5VD0XwPJY1/I5VH1ZAMtjXcvnT/VcyrIsxexYV/P5U30tg0BuZse6ms+d6vm2fvd0sznWb/J5U638iG1O8/lUTai6jlfVWWxzms+nautfOaf5qPqOy3zcQLiB9AdV1/CqmhsIj8X+jkWq5gbCDaRHqLqGV9XcQHgs9ncsUjU3EG4gPULVNbyqzvsnTKJEGLkFPh+1TJrupVBuTNokZFk1jk/GVOP4jKjpjtVbWi00mZ5q7B6AKDokQNJHCRhb3IxdVz2lP9VRS2OehXIBEbZfIPsTfisSkrhVwa3tb43QfIeEedR0GGRCeE61jBhtq96DuLan3f/Tj0JAaP4S2SfcurJEc0GROwOiN9UPxk212FMtY46QIT0ewloot75abKvOR9V/ec2ozq+qJU3PqV4L5fQlkkbTqnH8RJ7FbFoF11o1TlRHHN7VWSs7H/9cqV7b03T5AJpP9ZlqmaC+N9XaRKv9cMmyas8/AxmSq+8WvRJwJ1C1M/hbGP4W5i0u81F1b6o9byDOVBOqruNVNTcQHov9HYtUzQ2EG0iPUHUNr6q5gfBY7O9YpGpuINxAeoSqazhUrd1I2Xh3U+6ju+labgIZDDeSab4OGslkLktCWgz37Gm+Hnr2tHIU5SJWqeVzqJqdqN9s+rU81NV8HlWzv/qLreymh7qWz6Vq3jXAGzT+C17B8xn/V/CIUDVVK1RN1e3xmI+qFaqm6t/2zna3kRCGoutrPt//hTeDYTpbhXbUlRhc3SNVCZAf9pFFJpILz+MxPqpuUDVVT1DE8Zu+ikLt/bvPhaWq0VBJ7TWNCEX6/Bdx7qo6lzr+ZzjFQ3XKIhkyYZ3q8zAPhY5xqhZqTtLj9FTVSTFU16zQj8Ra8QQUpCgRitCmxBbWqA4YqsdYBaHN34xzI9VapMauGuGIv7Sk5DzSJkrNUqsi2Nk2tvBMVQuCVXWRm3FupDpnibVvgNmyigCinEfa6PGBFBTBaqwvrNmr5ZPqFMdefTfOfVQXSwjhnzPGwuVIGxVNmmSkIH1hQVXr6+99VYf7cW6juqWR4kV1LGJlkuSFJYVcLymkZV+LEfp5rz6/wW/EudfXYj4CrvWieuR4HmmjIgVB1Aoqp76wQrWUz08g2VSH+3FuozrltuldVcvluTVatWSIaEsDGAtLVCvyqfogjzdRbsa5T1V/D38tUrUIVVP183iMj6obVE3Vz+MxPqpuUDVVP4/H+NiJeoWdqP6g6ilU7RaqnkLVbqHqKVTtFqqeQtVu+c2qFVE2wp3qqz9FeN8ZarN1K9P+VOdS73bg7nP9l0/VSSF2FWM8qxqA9dhVscGYDaKoQJYd8KbaWlsV7eqspnp0hiJIhNqgzeZj3C5t3CJyd6pba6tVbcmKj87Q3n7XBwi9XVD3uUnQm+qCF03eVfVBxgu1wZgtmap/ylmrob1cVAdzagNW9X8zWlsVdezVozP0cFygNjj36p1ufXWmure2tueKIF21As0zYoo2OJ9AHr+00a/qTa44p+q98anaJVQ9hardQtVTqNotVD2Fqt1C1d/ATlSP8LKSH+HqUGVC1V9A1X6h6hlU7ReqnkHVfqHqGVTtF6qeQdV+oeoZVO0Xqp5B1X6h6hlU7ReqXoSpJmv4Q5bxFwShgra0PpAdAAAAAElFTkSuQmCC",Wg=""+new URL("../assets/caso-hacking-firebase-modelo2.Cy1_403W.png",import.meta.url).href;function $g(i){let e;return{c(){e=gt(`Entrada resubida, rescatada de tantas tonterías que escribí hace un 
par de años. Contra todo pronóstico resulta ser que interesó a algunas personas, 
las mismas que me pidieron la resubida para mantener ciertas fuentes. Aunque 
he borrado la parte personal dado que estoy preparando otra entrada
relacionada a salud mental.`)},l(t){e=_t(t,`Entrada resubida, rescatada de tantas tonterías que escribí hace un 
par de años. Contra todo pronóstico resulta ser que interesó a algunas personas, 
las mismas que me pidieron la resubida para mantener ciertas fuentes. Aunque 
he borrado la parte personal dado que estoy preparando otra entrada
relacionada a salud mental.`)},m(t,n){l(t,e,n)},d(t){t&&o(e)}}}function Xg(i){let e=`...,
userRequests: {
    v8934sdafbi4r3vfewsjkvwevqwe: {
        request: { ... },
        response: { ... }
    },
    wigr908u43nwpdfglxjretjkhne3: {
        request: { ... },
        response: { ... }
    }
}`,t;return{c(){t=gt(e)},l(n){t=_t(n,e)},m(n,a){l(n,t,a)},p:Ut,d(n){n&&o(t)}}}function Yg(i){let e=`...,
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
}`,t;return{c(){t=gt(e)},l(n){t=_t(n,e)},m(n,a){l(n,t,a)},p:Ut,d(n){n&&o(t)}}}function Zg(i){let e,t,n,a=`Mi último año por la universidad cursé una asignatura de desarrollo de
aplicaciones web de la mano de un profesor al que estaré eternamente agradecido:
Abraham Rodríguez, el ahora vicegerente de Agenda Digital de la ULPGC, lo que
carajo sea que eso signifique…`,s,c,r=`Una de las primeras tareas consistía en hacer una aplicación con Angular 2+ e
Ionic que de backend utilizara el servicio Firebase de Google.`,u,d,p=`Por aquel entonces nos hacían trabajar con la base
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
decidió poner obstáculos.`,E,S,h="Las antiguas limitaciones de Cloud Functions",m,R,P=`Concretamente solo me tocó hacer un mero chat por salas, pero Google me
bloqueaba un servicio de Firebase fundamental: Cloud Functions. Lo cierto es que
su único requisito era que pusiera una tarjeta de crédito o débito y ni siquiera
conllevaba ningún cargo inicial salvo que gastaras mucho tiempo de ejecución
o hicieras miles de llamadas a las funciones.`,N,W,I=`Cloud Functions es una característica y framework de Firebase que
permite ejecutar código JS en la nube a través de peticiones http y que se
integraba correctamente con la base de datos en tiempo real (RTDB, del inglés)
y otras features cloud del servicio. Todas estas historias que se
popularizaron como serverless computing y permitían hacer una API rápidamente.`,z,F,A=`Muy convenientemente para Google estas funciones podían entrar en una
suerte de recursividad casi infinita si tenías un error, generando facturas
de cientos de euros en una noche si no te dabas cuenta. Por ello nunca deberías
usar tu tarjeta en un servicio que no te establezca un límite duro de cuotas y
te de opción de detener el servicio si se superan en lugar de cobrarte por
exceso. Y no, no vale una tarjeta monedero, acabarás con una deuda que Google
intentará resolver de forma muy activa por lo que me han contado.`,T,O,Z=`Ignorando a Cloud Functions, los primeros cuatro días los invertí buscando
formas de conseguir un CRUD perfecto con validación en backend usando
exclusivamente la base de datos y su sistema de permisos integrados con su
sistema de auth. No tardaron en aparecer los primeros inconvenientes.`,K,Y,se=`Necesitaba algunas funciones relacionadas a la creación de salas y el límite
de salas que podía tener un único usuario, algo que requería algo más de
lógica. Desde una API con Cloud Functions no costaba nada, mientras que por
razones de responsabilidad no eran posibles de realizar en la base de datos. Los
esquemas de la RTDB eran más reducidos que ahora.`,re,de,J,De,ae=`Pero Cloud Functions en realidad sí estaba disponible, lo único que limitaba
eran las llamadas a la API de manera externa, vamos, justamente lo que más
necesita alguien que quiera usar el servicio.`,Me,Je,je=`Lo que exploté es que sí permitía definir “triggers” o disparadores.
Funciones que se ejecutaran ante situaciones concretas en la base de datos,
como que un usuario escribe un dato en determinado nodo.`,ie,Ee,Re=`El servicio no garantizaba que la ejecución de esos disparadores fuera
inmediata. Además, solo se podía comunicar con la base de datos,
no podía responder hacia fuera de ninguna manera… ¿o sí? 🙂`,we,ke,qe="Los observables",ze,at,q=`La gracia de la RTDB es que es en tiempo real como su nombre indica. Esto
significa que puedes observar cualquier nodo mediante un
socket y que te sea notificado cuando cambie. Esto es lo que permite, por
ejemplo, que veas mensajes aparecer en un chat sin tu pulsar un botón de
refrescar.`,Ye,nt,He=`Ahora supongamos una base de datos en la que se reserva para cada usuario un
nodo con 2 subnodos a los que coherentemente llamamos request y response:`,Le,st,Ne,Fe,U=`Cuando un usuario quiere hacer una petición POST, en lugar de hacer una petición
HTTP a Cloud Functions con el clásico fetch de JavaScript, puede
escribir directamente en su nodo request adecuado en la RTDB con NgRx.
Las ristras largas y aleatorias representan la ID de un usuario autenticado,
que bien podría ser un UUID estándar.
En su propio nodo request —que es donde único tendría permiso de escritura un
usuario— puede establecer los datos de la petición.`,_,H,xe=`El exploit reside en la configuración de un trigger que se disparará cuando un
usuario escriba su request. Este nodo solo tiene
parámetros como si de una función post se tratara. El trigger ya me adelanta
parte del trabajo porque por defecto recibe información acerca del
usuario que ha causado el cambio y el nodo cambiado. Por tanto,
escribir en el nodo request provoca la llamada a una función que conocerá dicho
contexto siendo, en efecto, una forma de invocar una función con argumentos.`,pe,ue,Ge,Se,Pe=`Si se quiere crear una sala de chat, el usuario solo tendría que escribir en su
nodo request un UUID aleatorio generado previamente a fin de tener algo que
identifique la petición, la operación que quiere realizar
(CREATE_ROOM en este caso) y los parámetros que pueda requerir dicha operación.
En este ejemplo el único parámetro se trataba de una contraseña para la sala.`,Ze,k,he=`En resumen: hice una API a través de una base de datos. La forma de recibir
respuesta es mediante eventos, usando NgRx se observa el
nodo response. Sabrá que ha sido respondida cuando la ID en response coincida
con la ID enviada. Y la respuesta la recibirá en el nodo body de response. En
este caso el servidor da una ID de la sala, la típica que compartir con tus
amigos para que entren como se hace en juegos online o Hangouts (EDIT:
actualmente Meets)`,tt,X,me,We,Ke=`Todo este proceso es transparente a la aplicación. Podemos abstraer una interfaz
del servicio original y mantener las dos implementaciones si queremos, como
se muestra en el diagrama. Para
la aplicación, la interfaz del servicio sería la misma, que puede trabajar con
simples promesas como si de un fetch se tratara.`,ct,G,Ce=`Claro que esto no es un uso realista de la base de datos. Estamos
sobrecargándola y además implica tratar con unas esperas del trigger que a veces
podía llegar a los 4 segundos. Para una operación de creación de un recurso
no es algo tan bestial, pero estas esperas reducen drásticamente la
aplicabilidad en muchos otros casos de uso. También, de esta manera es más
fácil gastar la cuota de uso de la base de datos, aunque su ampliación sea más
barata que Cloud Functions en sí misma.`,be,ve,Te="Las consecuencias",$e,Qe,lt=`Las consecuencias no fueron más que gotas a un vaso a punto
de rebosar o leña para una hoguera que comenzaba a arder. En la versión original
de esta entrada hablaba de una crisis que
mezcla obsesión, irresponsabilidad afectiva y retraso madurativo a partes
iguales. En los próximos días publicaré algo al respecto <small>(UPDATE del 28 noviembre de 2024: sigue pendiente)</small>. De momento prefiero no mezclar cosas.`,ut,et,dt=`Nunca he tenido la intención de usar la acepción de
hacking como cibercrimen o nada relacionado a seguridad, sino como sobrepasar
los límites de una tecnología o técnica para una aplicación mayor o con un uso
no pensado. Sin embargo, esto sí era un claro bypass a una restricción de
servicio. De publicarse y popularizarse estoy seguro de que como mínimo
Google habría limitado mucho más a Cloud Functions si ésta
era una de sus principales características monetizadas.`,pt;return e=new ti({props:{$$slots:{default:[$g]},$$scope:{ctx:i}}}),de=new Ma({props:{src:jg,alt:"Modelo describiendo la comunicación tradicional con Firebase",figCaption:"Modelo ideal. No válido dado que Google bloqueaba cualquier tipo de petición externa a Cloud Functions si no tenías tarjeta de crédito o débito."}}),st=new Fn({props:{language:"TypeScript",showLanguage:!1,$$slots:{default:[Xg]},$$scope:{ctx:i}}}),ue=new Fn({props:{language:"TypeScript",showLanguage:!1,$$slots:{default:[Yg]},$$scope:{ctx:i}}}),X=new Ma({props:{src:Wg,alt:"diagrama describiendo la comunicación con el servicio faked",figCaption:"Modificaciones. Las peticiones por fetch son reemplazadas por escrituras en la RTDB que disparaban triggers de Cloud Functions. La instancia concreta de FakeAPIService en realidad se inyecta. <small>Nota en 2024: Ahora soy consciente de que, aunque correcto, el diagrama es bastante feucho. En esos tiempos no conocía formas más claras de representar inyecciones de dependencias, inversiones de control y otras tantas cosas.</small>"}}),{c(){Mt(e.$$.fragment),t=y(),n=x("p"),n.textContent=a,s=y(),c=x("p"),c.textContent=r,u=y(),d=x("p"),d.textContent=p,v=y(),f=x("p"),f.textContent=g,E=y(),S=x("h2"),S.textContent=h,m=y(),R=x("p"),R.textContent=P,N=y(),W=x("p"),W.textContent=I,z=y(),F=x("p"),F.textContent=A,T=y(),O=x("p"),O.textContent=Z,K=y(),Y=x("p"),Y.textContent=se,re=y(),Mt(de.$$.fragment),J=y(),De=x("p"),De.textContent=ae,Me=y(),Je=x("p"),Je.textContent=je,ie=y(),Ee=x("p"),Ee.textContent=Re,we=y(),ke=x("h2"),ke.textContent=qe,ze=y(),at=x("p"),at.textContent=q,Ye=y(),nt=x("p"),nt.textContent=He,Le=y(),Mt(st.$$.fragment),Ne=y(),Fe=x("p"),Fe.textContent=U,_=y(),H=x("p"),H.textContent=xe,pe=y(),Mt(ue.$$.fragment),Ge=y(),Se=x("p"),Se.textContent=Pe,Ze=y(),k=x("p"),k.textContent=he,tt=y(),Mt(X.$$.fragment),me=y(),We=x("p"),We.textContent=Ke,ct=y(),G=x("p"),G.textContent=Ce,be=y(),ve=x("h2"),ve.textContent=Te,$e=y(),Qe=x("p"),Qe.innerHTML=lt,ut=y(),et=x("p"),et.textContent=dt},l(Q){St(e.$$.fragment,Q),t=M(Q),n=b(Q,"P",{"data-svelte-h":!0}),C(n)!=="svelte-1mjfyua"&&(n.textContent=a),s=M(Q),c=b(Q,"P",{"data-svelte-h":!0}),C(c)!=="svelte-1c8qw35"&&(c.textContent=r),u=M(Q),d=b(Q,"P",{"data-svelte-h":!0}),C(d)!=="svelte-13zoj2o"&&(d.textContent=p),v=M(Q),f=b(Q,"P",{"data-svelte-h":!0}),C(f)!=="svelte-glayny"&&(f.textContent=g),E=M(Q),S=b(Q,"H2",{"data-svelte-h":!0}),C(S)!=="svelte-scitqc"&&(S.textContent=h),m=M(Q),R=b(Q,"P",{"data-svelte-h":!0}),C(R)!=="svelte-7tylqy"&&(R.textContent=P),N=M(Q),W=b(Q,"P",{"data-svelte-h":!0}),C(W)!=="svelte-rwfbr7"&&(W.textContent=I),z=M(Q),F=b(Q,"P",{"data-svelte-h":!0}),C(F)!=="svelte-15pt39w"&&(F.textContent=A),T=M(Q),O=b(Q,"P",{"data-svelte-h":!0}),C(O)!=="svelte-v4oe8z"&&(O.textContent=Z),K=M(Q),Y=b(Q,"P",{"data-svelte-h":!0}),C(Y)!=="svelte-1bnaaes"&&(Y.textContent=se),re=M(Q),St(de.$$.fragment,Q),J=M(Q),De=b(Q,"P",{"data-svelte-h":!0}),C(De)!=="svelte-1mfqzxf"&&(De.textContent=ae),Me=M(Q),Je=b(Q,"P",{"data-svelte-h":!0}),C(Je)!=="svelte-tm1gye"&&(Je.textContent=je),ie=M(Q),Ee=b(Q,"P",{"data-svelte-h":!0}),C(Ee)!=="svelte-areo0q"&&(Ee.textContent=Re),we=M(Q),ke=b(Q,"H2",{"data-svelte-h":!0}),C(ke)!=="svelte-bxldt2"&&(ke.textContent=qe),ze=M(Q),at=b(Q,"P",{"data-svelte-h":!0}),C(at)!=="svelte-1tm3ijv"&&(at.textContent=q),Ye=M(Q),nt=b(Q,"P",{"data-svelte-h":!0}),C(nt)!=="svelte-uq0d93"&&(nt.textContent=He),Le=M(Q),St(st.$$.fragment,Q),Ne=M(Q),Fe=b(Q,"P",{"data-svelte-h":!0}),C(Fe)!=="svelte-unhgdf"&&(Fe.textContent=U),_=M(Q),H=b(Q,"P",{"data-svelte-h":!0}),C(H)!=="svelte-1iicecn"&&(H.textContent=xe),pe=M(Q),St(ue.$$.fragment,Q),Ge=M(Q),Se=b(Q,"P",{"data-svelte-h":!0}),C(Se)!=="svelte-1nsooy1"&&(Se.textContent=Pe),Ze=M(Q),k=b(Q,"P",{"data-svelte-h":!0}),C(k)!=="svelte-1u2tz29"&&(k.textContent=he),tt=M(Q),St(X.$$.fragment,Q),me=M(Q),We=b(Q,"P",{"data-svelte-h":!0}),C(We)!=="svelte-1b6hvwu"&&(We.textContent=Ke),ct=M(Q),G=b(Q,"P",{"data-svelte-h":!0}),C(G)!=="svelte-5vr4hi"&&(G.textContent=Ce),be=M(Q),ve=b(Q,"H2",{"data-svelte-h":!0}),C(ve)!=="svelte-16wekeb"&&(ve.textContent=Te),$e=M(Q),Qe=b(Q,"P",{"data-svelte-h":!0}),C(Qe)!=="svelte-e8czz0"&&(Qe.innerHTML=lt),ut=M(Q),et=b(Q,"P",{"data-svelte-h":!0}),C(et)!=="svelte-11wdxif"&&(et.textContent=dt)},m(Q,Ue){Ct(e,Q,Ue),l(Q,t,Ue),l(Q,n,Ue),l(Q,s,Ue),l(Q,c,Ue),l(Q,u,Ue),l(Q,d,Ue),l(Q,v,Ue),l(Q,f,Ue),l(Q,E,Ue),l(Q,S,Ue),l(Q,m,Ue),l(Q,R,Ue),l(Q,N,Ue),l(Q,W,Ue),l(Q,z,Ue),l(Q,F,Ue),l(Q,T,Ue),l(Q,O,Ue),l(Q,K,Ue),l(Q,Y,Ue),l(Q,re,Ue),Ct(de,Q,Ue),l(Q,J,Ue),l(Q,De,Ue),l(Q,Me,Ue),l(Q,Je,Ue),l(Q,ie,Ue),l(Q,Ee,Ue),l(Q,we,Ue),l(Q,ke,Ue),l(Q,ze,Ue),l(Q,at,Ue),l(Q,Ye,Ue),l(Q,nt,Ue),l(Q,Le,Ue),Ct(st,Q,Ue),l(Q,Ne,Ue),l(Q,Fe,Ue),l(Q,_,Ue),l(Q,H,Ue),l(Q,pe,Ue),Ct(ue,Q,Ue),l(Q,Ge,Ue),l(Q,Se,Ue),l(Q,Ze,Ue),l(Q,k,Ue),l(Q,tt,Ue),Ct(X,Q,Ue),l(Q,me,Ue),l(Q,We,Ue),l(Q,ct,Ue),l(Q,G,Ue),l(Q,be,Ue),l(Q,ve,Ue),l(Q,$e,Ue),l(Q,Qe,Ue),l(Q,ut,Ue),l(Q,et,Ue),pt=!0},p(Q,[Ue]){const vt={};Ue&2&&(vt.$$scope={dirty:Ue,ctx:Q}),e.$set(vt);const ce={};Ue&2&&(ce.$$scope={dirty:Ue,ctx:Q}),st.$set(ce);const Ie={};Ue&2&&(Ie.$$scope={dirty:Ue,ctx:Q}),ue.$set(Ie)},i(Q){pt||(ht(e.$$.fragment,Q),ht(de.$$.fragment,Q),ht(st.$$.fragment,Q),ht(ue.$$.fragment,Q),ht(X.$$.fragment,Q),pt=!0)},o(Q){mt(e.$$.fragment,Q),mt(de.$$.fragment,Q),mt(st.$$.fragment,Q),mt(ue.$$.fragment,Q),mt(X.$$.fragment,Q),pt=!1},d(Q){Q&&(o(t),o(n),o(s),o(c),o(u),o(d),o(v),o(f),o(E),o(S),o(m),o(R),o(N),o(W),o(z),o(F),o(T),o(O),o(K),o(Y),o(re),o(J),o(De),o(Me),o(Je),o(ie),o(Ee),o(we),o(ke),o(ze),o(at),o(Ye),o(nt),o(Le),o(Ne),o(Fe),o(_),o(H),o(pe),o(Ge),o(Se),o(Ze),o(k),o(tt),o(me),o(We),o(ct),o(G),o(be),o(ve),o($e),o(Qe),o(ut),o(et)),Et(e,Q),Et(de,Q),Et(st,Q),Et(ue,Q),Et(X,Q)}}}const Kg={title:"El hacking a Google",slug:"el-hacking-a-google",coverImage:"machinery.jpg",coverAuthor:"Isis França",excerpt:"Entrada resubida. Cuento una batalla contra el servicio Firebase de Google y un caso de aplicación de ingeniería de software.",date:"2024-08-02T01:19:04.325Z",updated:"2024-08-02T01:19:04.326Z",hidden:!1,tags:["Hacking","Back end","Front end","Cloud"],keywords:[],type:"default"};function Jg(i){return[]}class Qg extends Kt{constructor(e){super(),Jt(this,e,Jg,Zg,Zt,{})}}const e_=Object.freeze(Object.defineProperty({__proto__:null,default:Qg,metadata:Kg},Symbol.toStringTag,{value:"Module"})),t_=""+new URL("../assets/visual-specs-index.DUyx9Wot.png",import.meta.url).href,n_=""+new URL("../assets/captura-error.DS5ipSG-.png",import.meta.url).href;function i_(i){let e,t="estas palabras";return{c(){e=x("span"),e.textContent=t,this.h()},l(n){e=b(n,"SPAN",{id:!0,class:!0,"data-svelte-h":!0}),C(e)!=="svelte-tntrd9"&&(e.textContent=t),this.h()},h(){yt(e,"id","example-target"),yt(e,"class","hl")},m(n,a){l(n,e,a)},p:Ut,d(n){n&&o(e)}}}function a_(i){let e,t=`AVISO: ¿Estás buscando un tutorial paso a paso de cómo
desarrollar una biblioteca de manera profesional? Pues este NO es el lugar.
Solo encontrarás fragmentos de código relevantes para plantear el temita
de la especificación visual.`;return{c(){e=x("p"),e.textContent=t},l(n){e=b(n,"P",{"data-svelte-h":!0}),C(e)!=="svelte-enicy2"&&(e.textContent=t)},m(n,a){l(n,e,a)},p:Ut,d(n){n&&o(e)}}}function s_(i){let e="create(shape: ShapeName, {target: string | HTMLElement})",t;return{c(){t=gt(e)},l(n){t=_t(n,e)},m(n,a){l(n,t,a)},p:Ut,d(n){n&&o(t)}}}function o_(i){let e=`describe('create(...)', ()=>{
    ...
    it('creates an SVG and appends it to the body', ()=>{
        ...
    })
})`,t;return{c(){t=gt(e)},l(n){t=_t(n,e)},m(n,a){l(n,t,a)},p:Ut,d(n){n&&o(t)}}}function r_(i){let e;return{c(){e=gt("Cosexa Pgropia™")},l(t){e=_t(t,"Cosexa Pgropia™")},m(t,n){l(t,e,n)},d(t){t&&o(e)}}}function l_(i){let e=`describe("create('rect', {...})", ()=> {
    ...
    describe('Default behaviors (no options)', () => {
        ...
        it('creates an orange rect of 4px width around target', ()=>{
            ...
        })
    })
})`,t;return{c(){t=gt(e)},l(n){t=_t(n,e)},m(n,a){l(n,t,a)},p:Ut,d(n){n&&o(t)}}}function c_(i){let e='<div class="test-box"></div>',t;return{c(){t=gt(e)},l(n){t=_t(n,e)},m(n,a){l(n,t,a)},p:Ut,d(n){n&&o(t)}}}function u_(i){let e,t;return e=new Fn({props:{slot:"left",language:"HTML",$$slots:{default:[c_]},$$scope:{ctx:i}}}),{c(){Mt(e.$$.fragment)},l(n){St(e.$$.fragment,n)},m(n,a){Ct(e,n,a),t=!0},p(n,a){const s={};a&8&&(s.$$scope={dirty:a,ctx:n}),e.$set(s)},i(n){t||(ht(e.$$.fragment,n),t=!0)},o(n){mt(e.$$.fragment,n),t=!1},d(n){Et(e,n)}}}function d_(i){let e=`.test-box {
    background: #333;
    width: 250px;
    height: 150px;
}`,t;return{c(){t=gt(e)},l(n){t=_t(n,e)},m(n,a){l(n,t,a)},p:Ut,d(n){n&&o(t)}}}function p_(i){let e,t;return e=new Fn({props:{slot:"right",language:"CSS",$$slots:{default:[d_]},$$scope:{ctx:i}}}),{c(){Mt(e.$$.fragment)},l(n){St(e.$$.fragment,n)},m(n,a){Ct(e,n,a),t=!0},p(n,a){const s={};a&8&&(s.$$scope={dirty:a,ctx:n}),e.$set(s)},i(n){t||(ht(e.$$.fragment,n),t=!0)},o(n){mt(e.$$.fragment,n),t=!1},d(n){Et(e,n)}}}function f_(i){let e='<div class="test-box test-box--expected"></div>',t;return{c(){t=gt(e)},l(n){t=_t(n,e)},m(n,a){l(n,t,a)},p:Ut,d(n){n&&o(t)}}}function h_(i){let e,t;return e=new Fn({props:{slot:"left",language:"HTML",$$slots:{default:[f_]},$$scope:{ctx:i}}}),{c(){Mt(e.$$.fragment)},l(n){St(e.$$.fragment,n)},m(n,a){Ct(e,n,a),t=!0},p(n,a){const s={};a&8&&(s.$$scope={dirty:a,ctx:n}),e.$set(s)},i(n){t||(ht(e.$$.fragment,n),t=!0)},o(n){mt(e.$$.fragment,n),t=!1},d(n){Et(e,n)}}}function m_(i){let e=`...
.test-box--expected {
    box-sizing: content-box;
    border: 4px solid orange;
}
`,t;return{c(){t=gt(e)},l(n){t=_t(n,e)},m(n,a){l(n,t,a)},p:Ut,d(n){n&&o(t)}}}function v_(i){let e,t;return e=new Fn({props:{slot:"right",language:"CSS",$$slots:{default:[m_]},$$scope:{ctx:i}}}),{c(){Mt(e.$$.fragment)},l(n){St(e.$$.fragment,n)},m(n,a){Ct(e,n,a),t=!0},p(n,a){const s={};a&8&&(s.$$scope={dirty:a,ctx:n}),e.$set(s)},i(n){t||(ht(e.$$.fragment,n),t=!0)},o(n){mt(e.$$.fragment,n),t=!1},d(n){Et(e,n)}}}function g_(i){let e="it(`creates an orange rect of 4px width around target (${xW}x${xH})`, async ({ page }) => {\n    await comparePages({\n        testingURL: `/${xW}x${xH}`,\n        expectedURL: `/expected/rect/${xW}x${xH}-default`,\n        action: () => {\n            return page.evaluate(() => {\n                pio.create('rect', {target: `.test-box--${xW}x${xH}`})\n            })\n        }\n    })\n})",t;return{c(){t=gt(e)},l(n){t=_t(n,e)},m(n,a){l(n,t,a)},p:Ut,d(n){n&&o(t)}}}function __(i){let e;return{c(){e=gt(`Lamentablemente Playwright no tiene una función tan mágica y bonita como
comparePages. Es propia, resultado de un poco de 
hacking con los mecanismos de regresión visual de Playwright, pero tienes total
libertad para meterle un copia y pega (hazlo del repo, que es la que funciona).`)},l(t){e=_t(t,`Lamentablemente Playwright no tiene una función tan mágica y bonita como
comparePages. Es propia, resultado de un poco de 
hacking con los mecanismos de regresión visual de Playwright, pero tienes total
libertad para meterle un copia y pega (hazlo del repo, que es la que funciona).`)},m(t,n){l(t,e,n)},d(t){t&&o(e)}}}function x_(i){let e,t=`He tenido la necesidad de crear formas posicionables sobre sitios web,
señalando o conectando elementos. Muchas veces. Es un must en aplicaciones
interactivas que requieren de algún tipo de señalización, como podría ocurrir
en tutoriales.`,n,a,s=`Harto de reinventar la rueda decido buscar una biblioteca sencillita que me
resuelva este problema. Esperaba encontrar muchas para ello, o quizás
como alguna feature de alguna muy gorda y conocida.
Estaba casi convencido de que existiría algo, pero que aún así quizás tendría que
hacer yo mismo una biblioteca propia con <strong>filosofía minimalista</strong>.`,c,r,u=`Pero lo cierto es que, al menos en unas pocas búsquedas sencillas, no he
encontrado nada. Que no sea fácil de encontrar no significa que no exista,
no te imaginas cuántas superherramientas sin visibilidad he encontrado entre
repositorios perdidos.`,d,p,v=`A falta de soluciones (o como resultado de una mala investigación), me pongo
manos a la obra en el desarrollo de una biblioteca para ello (Point it out) y
me doy cuenta de que necesito algo para especificar qué resultado visual busco.
Necesito alguna técnica de <strong>especificación visual</strong>, si es que existe algo
así y si significa lo que pretendo que signifique.`,f,g,E="Describiendo el problema: cómo señalizar elementos",S,h,m,R,P,N,W,I=`“Pero Alexander, ¿me estás diciendo que ya existe entonces solución?” No, lo que
estás viendo es fruto del resultado final (o al menos de lo que ya tengo
desarrollado). Dado que ya tengo una medio solución, ¿por qué no mostrarlo?`,z,F,A,T,O=`En una primera versión, la biblioteca debía aportar al menos un primer mecanismo simple de
señalización. Para ello especifiqué la siguiente función:`,Z,K,Y,se,re=`<code>ShapeName</code> se trata de una string, un tipo de unión ‘rect’ | ‘image’, aunque
en un primer momento solo existe ‘rect’. La opción target es un selector CSS
o una referencia directa al elemento objetivo.`,de,J,De=`<li>Si es un selector, trabajará con el primer elemento que encuentre con ese selector, o lanzará excepción si no encuentra nada.</li> <li>Creará un elemento SVG que añadirá como hijo al body.</li> <li>Dicho SVG debe estar posicionado absolutamente sobre el elemento a señalar.</li> <li>Dicho SVG debe tener un tamaño similar al elemento a señalar.
<ul><li>Digo similar porque podría ser más grande, si quiere rodearse sin taparlo.</li></ul></li>`,ae,Me,Je="En las primeras iteraciones de herramientas gráficas me gusta centrarme en la exploración tecnológica. Hacer un caso mínimo funcional que dé un resultado visual inmediato.",je,ie,Ee="Especificaciones formales con algún framework de testing",Re,we,ke=`Aquí empieza lo realmente interesante. Hay que testar visualmente, eso está
claro, estamos ante una librería cuyo objetivo es renderizar cosas. Pero eso no
significa que inmediatamente todo vaya a ser regresión visual y E2E.
Considera la siguiente spec:`,qe,ze,at,q,Ye=`Esto no requiere renderizado. Vale con un DOM virtual, comprobar que se crea
un nuevo nodo y si queda colgando del body. Hacer una prueba E2E para esto es
matar moscas a cañonazos.`,nt,He,Le="Especificación visual",st,Ne,Fe=`Me gusta la <em>regresión visual</em>, pero tiene un pequeño problema. Por si no sabes
de qué te estoy hablando, consiste en la generación y comparación mediante
snapshots <em>(ficheros que describan el estado de una aplicación ante
ciertas condiciones. Típicamente suelen ser screenshots)</em>. Su fortaleza
reside en la cobertura futura. Por lo general se
generan snapshots una vez se tiene el resultado buscado para que en futuras
comparaciones tras refactoring recibamos un feedback de si algo ha cambiado más
de lo esperado.`,U,_,H=`Y aunque es una herramienta útil y bienvenida en mantenimiento de aplicaciones
que controlan muy bien la interfaz de usuario y donde es crítico que estas no
cambien inesperadamente, la regresión visual no forma exactamente parte del
flujo de las metodologías estilo TDD, BDD o ATDD. Recordemos que son
metodologías de diseño y <strong>la regresión visual no aporta nada en la fase de diseño o para definir especificaciones preimplementación.</strong>`,xe,pe,ue="Buscando la alternativa a la regresión visual",Ge,Se,Pe,Ze,k,he,tt,X=`El proceso que he realizado es el siguiente: adaptar una biblioteca o framework
con capacidades para regresión visual (en este caso Playwright) para que
en su lugar genere screenshots de dos páginas distintas y
las compare. Una de las páginas presenta el escenario donde ejecutas la acción
a probar; la otra es la versión con el resultado final esperado, hecha a mano
y centrándonos solo en el resultado visual.`,me,We,Ke="Supongamos la siguiente especificacion:",ct,G,Ce,be,ve="Nuestro escenario de pruebas podría contener, entre otras cosas, lo siguiente:",Te,$e,Qe,lt,ut,et,dt="Y por otra parte, una página copia modificada con el resultado VISUAL esperado",pt,Q,Ue,vt,ce,Ie,At=`SÉ LO QUE ESTÁS PENSANDO (o deberías): “pero Alexander, en el esperado no hay
ningún SVG, ¡solo le has puesto un borde naranja de 4 píxeles al elemento!”`,ne,B,Xe=`A esto es a lo que me refiero con especificación visual. Podría haber un SVG
hecho a mano (de hecho los hay en specs más complejas) y seguiría siendo válido,
pero en realidad no importa la estructura,
no es lo que estamos especificando ni testando aquí.`,Nt,qt,cn=`Al igual que con tests convencionales, buscamos la forma menos compleja y más
directa de definir lo que queremos (en este caso lo que queremos visualmente).`,Vt,w,ee=`Créeme, esto no lo hago por mejorar la adaptabilidad y reducir la fragilidad del
test, aunque sean sus efectos positivos principales, sino porque simplemente es la
forma más sencilla que se me ha ocurrido de conseguir lo que se busca visualmente.`,le,oe,te=`En una clásica “especificación por ejemplo” con GIVEN-WHEN-THEN, esta parte
correspondería al THEN, y al igual que en las especificaciones convencionales,
debe expresarse de la forma más directa y clara atendiendo en este caso
exclusivamente al resultado visible (ya que es la única responsabilidad en
estos tests).`,Oe,Be,V=`Veamos un test similar al del Mundo Real™. El original y funcional lo tienes
en el repositorio (enlace al final). Es un test parametrizado, se genera con variaciones de
expectedWidth (xW) y expectedHeight (xH).`,fe,j,Ae,it,ft=`NOTA: que veas tanta especificidad como
orange o 4px, algo que no suele ser recomendado en specs/tests, es normal en este caso porque
estamos especificando los valores default, es de las pocas excepciones a la regla.`,zt,Pt,Bt=`La función es autoexplicativa. Recibe la página donde se ejecutará la acción
a testar, la página con la que comparar, y la acción a realizar. Tras lanzar el
test debería fallar al no tener implementación inicialmente.
El test report de Playwright en este caso me reporta una comparación de
múltiples formas, entre ellas una muy chula con un slider. Captura:`,wt,rt,Dt,xt,jt,Ht,Qt="Sólo lo visible",un,bt,hn=`Tengo que insistir en que sólo hago esto con fines de testar el resultado
visual. Puede que te preguntes algo como “¿No estás perdiendo la oportunidad
de especificar directamente un resultado final que sirva también de
especificación del DOM deseado para una prueba E2E completa?”`,dn,Ft,Vn=`No conozco (todavía) el DOM deseado y no puedo <em>perder tiempo</em> planificando.
Esto me permite especificar el
resultado visual, que es lo único que tengo claro ahora mismo. Además los SVG
para un mismo objetivo se pueden generar de múltiples maneras. Exagerar el
detalle aumenta la rigidez del diseño, no permite posponer decisiones y aumenta
la fragilidad de los tests.`,mn,Wt,Di=`Por otra parte también nos limitaría más con escenarios menos deterministas.
Imagina que quieres que el recuadro
siga al elemento si este se reposiciona (típico al reescalar pantalla).
Esto es algo que debe hacer la biblioteca, ¿cómo especificaríamos algo así?
Implicaría lógica en el propio test. En los expects
se evitan lógicas complejas a favor de resultados directos deterministas.
Un borde por CSS no solo está fijado a un elemento, también funciona aunque
reescales o lo muevas.`,Dn,Xt,Ui="Otras preguntas relacionadas que me he planteado",Un,Yt,Ii=`¿Por qué hacer un esfuerzo en especificar partes del aspecto visual esperado
en un desarrollo si muy probablemente haya partes que no
podremos especificar de todas formas?, ¿no es como intentar construir una casa
en la que sabemos de antemano que nunca tendremos techo o alguna otra parte
fundamental?`,In,$,Ve=`Ya tenemos la respuesta en la jerarquía de tests. Sabemos que las pruebas
unitarias no nos sirven para todo, ni tampoco las de integración. Pero lo
hacemos igualmente porque nos guían y cubren el desarrollo, cada una a su
manera, con pros y contras. Técnicamente podríamos usar solo tests de aceptación
si estos fueran infinitamente rápidos, y aún así, muy probablemente se seguirían
realizando pruebas unitarias y de integración junto a ellos.`,Gn,_n,ss=`Puedes tener un muy buen maquetador, diseñador, artista o artista técnico en tu
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
posición y gire apuntando siempre al objetivo (un “look at” en gráficos).`,mi,Sn,us=`La descripción anterior es incluso difícil de imaginar para algunos, supone
problemas en cómo especificarla y cómo testarla. Y ni siquiera es algo realmente
complejo. En las artes visuales muchas
veces no queda más remedio que romper el orden rojo-verde porque el esfuerzo de
especificar puede ser indistinguible del de implementar.`,vi,Cn,ds=`Es ahí donde destaca la regresión visual clásica. Implementas y cuando estés
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
Aquí una screenshot:`,yi,Pn,$i;return R=new br({props:{$$slots:{default:[i_]},$$scope:{ctx:i}}}),F=new ti({props:{$$slots:{default:[a_]},$$scope:{ctx:i}}}),K=new Fn({props:{language:"TypeScript",$$slots:{default:[s_]},$$scope:{ctx:i}}}),ze=new Fn({props:{language:"TypeScript",$$slots:{default:[o_]},$$scope:{ctx:i}}}),Ze=new br({props:{$$slots:{default:[r_]},$$scope:{ctx:i}}}),G=new Fn({props:{language:"TypeScript",$$slots:{default:[l_]},$$scope:{ctx:i}}}),$e=new Fl({props:{gap:4,$$slots:{right:[p_],left:[u_]},$$scope:{ctx:i}}}),lt=new Ol({props:{width:250,height:150}}),Q=new Fl({props:{gap:4,$$slots:{right:[v_],left:[h_]},$$scope:{ctx:i}}}),vt=new Ol({props:{width:250,height:150,showBorder:!0}}),j=new Fn({props:{language:"TypeScript",$$slots:{default:[g_]},$$scope:{ctx:i}}}),rt=new Ma({props:{src:n_,alt:"Test report de Playwright mostrando resultado actual y esperado con slider"}}),xt=new ti({props:{$$slots:{default:[__]},$$scope:{ctx:i}}}),Pn=new Ma({props:{src:t_,alt:""}}),{c(){e=x("p"),e.textContent=t,n=y(),a=x("p"),a.innerHTML=s,c=y(),r=x("p"),r.textContent=u,d=y(),p=x("p"),p.innerHTML=v,f=y(),g=x("h2"),g.textContent=E,S=y(),h=x("p"),m=gt(`Por ejemplo, ¿qué podría hacer si quisiera
señalizar `),Mt(R.$$.fragment),P=gt(`?
Si todo funciona bien deberías estar viendo un rectángulo verde sobre las palabras indicadas.`),N=y(),W=x("p"),W.textContent=I,z=y(),Mt(F.$$.fragment),A=y(),T=x("p"),T.textContent=O,Z=y(),Mt(K.$$.fragment),Y=y(),se=x("p"),se.innerHTML=re,de=y(),J=x("ul"),J.innerHTML=De,ae=y(),Me=x("p"),Me.textContent=Je,je=y(),ie=x("h3"),ie.textContent=Ee,Re=y(),we=x("p"),we.textContent=ke,qe=y(),Mt(ze.$$.fragment),at=y(),q=x("p"),q.textContent=Ye,nt=y(),He=x("h2"),He.textContent=Le,st=y(),Ne=x("p"),Ne.innerHTML=Fe,U=y(),_=x("p"),_.innerHTML=H,xe=y(),pe=x("h3"),pe.textContent=ue,Ge=y(),Se=x("p"),Pe=gt("La siguiente forma de proceder y opiniones son, hasta donde sé, de "),Mt(Ze.$$.fragment),k=gt(`. No he hecho una investigación exhaustiva ni
sé si hay autores que han escrito sobre esto a favor o en contra. Por eso no
asumas nada de lo que expongo aquí, evita todo prejuicio positivo y afila la
sospecha y la duda.`),he=y(),tt=x("p"),tt.textContent=X,me=y(),We=x("p"),We.textContent=Ke,ct=y(),Mt(G.$$.fragment),Ce=y(),be=x("p"),be.textContent=ve,Te=y(),Mt($e.$$.fragment),Qe=y(),Mt(lt.$$.fragment),ut=y(),et=x("p"),et.textContent=dt,pt=y(),Mt(Q.$$.fragment),Ue=y(),Mt(vt.$$.fragment),ce=y(),Ie=x("p"),Ie.textContent=At,ne=y(),B=x("p"),B.textContent=Xe,Nt=y(),qt=x("p"),qt.textContent=cn,Vt=y(),w=x("p"),w.textContent=ee,le=y(),oe=x("p"),oe.textContent=te,Oe=y(),Be=x("p"),Be.textContent=V,fe=y(),Mt(j.$$.fragment),Ae=y(),it=x("small"),it.textContent=ft,zt=y(),Pt=x("p"),Pt.textContent=Bt,wt=y(),Mt(rt.$$.fragment),Dt=y(),Mt(xt.$$.fragment),jt=y(),Ht=x("h4"),Ht.textContent=Qt,un=y(),bt=x("p"),bt.textContent=hn,dn=y(),Ft=x("p"),Ft.innerHTML=Vn,mn=y(),Wt=x("p"),Wt.textContent=Di,Dn=y(),Xt=x("h3"),Xt.textContent=Ui,Un=y(),Yt=x("p"),Yt.textContent=Ii,In=y(),$=x("p"),$.textContent=Ve,Gn=y(),_n=x("p"),_n.textContent=ss,di=y(),xn=x("p"),xn.textContent=os,pi=y(),bn=x("h3"),bn.textContent=rs,fi=y(),yn=x("p"),yn.textContent=ls,hi=y(),Mn=x("p"),Mn.textContent=cs,mi=y(),Sn=x("p"),Sn.textContent=us,vi=y(),Cn=x("p"),Cn.textContent=ds,gi=y(),En=x("p"),En.textContent=ps,_i=y(),Tn=x("h2"),Tn.textContent=fs,xi=y(),An=x("p"),An.innerHTML=hs,bi=y(),wn=x("p"),wn.textContent=ms,yi=y(),Mt(Pn.$$.fragment)},l(D){e=b(D,"P",{"data-svelte-h":!0}),C(e)!=="svelte-kz757p"&&(e.textContent=t),n=M(D),a=b(D,"P",{"data-svelte-h":!0}),C(a)!=="svelte-yr62zz"&&(a.innerHTML=s),c=M(D),r=b(D,"P",{"data-svelte-h":!0}),C(r)!=="svelte-1ajb8gz"&&(r.textContent=u),d=M(D),p=b(D,"P",{"data-svelte-h":!0}),C(p)!=="svelte-10jjd54"&&(p.innerHTML=v),f=M(D),g=b(D,"H2",{"data-svelte-h":!0}),C(g)!=="svelte-jzlcfs"&&(g.textContent=E),S=M(D),h=b(D,"P",{});var ge=Gt(h);m=_t(ge,`Por ejemplo, ¿qué podría hacer si quisiera
señalizar `),St(R.$$.fragment,ge),P=_t(ge,`?
Si todo funciona bien deberías estar viendo un rectángulo verde sobre las palabras indicadas.`),ge.forEach(o),N=M(D),W=b(D,"P",{"data-svelte-h":!0}),C(W)!=="svelte-h9dgi1"&&(W.textContent=I),z=M(D),St(F.$$.fragment,D),A=M(D),T=b(D,"P",{"data-svelte-h":!0}),C(T)!=="svelte-wn3vay"&&(T.textContent=O),Z=M(D),St(K.$$.fragment,D),Y=M(D),se=b(D,"P",{"data-svelte-h":!0}),C(se)!=="svelte-rz0i50"&&(se.innerHTML=re),de=M(D),J=b(D,"UL",{"data-svelte-h":!0}),C(J)!=="svelte-ts57wb"&&(J.innerHTML=De),ae=M(D),Me=b(D,"P",{"data-svelte-h":!0}),C(Me)!=="svelte-1li2hkb"&&(Me.textContent=Je),je=M(D),ie=b(D,"H3",{"data-svelte-h":!0}),C(ie)!=="svelte-1cetu9r"&&(ie.textContent=Ee),Re=M(D),we=b(D,"P",{"data-svelte-h":!0}),C(we)!=="svelte-nv0msx"&&(we.textContent=ke),qe=M(D),St(ze.$$.fragment,D),at=M(D),q=b(D,"P",{"data-svelte-h":!0}),C(q)!=="svelte-86gsr"&&(q.textContent=Ye),nt=M(D),He=b(D,"H2",{"data-svelte-h":!0}),C(He)!=="svelte-1jmchc1"&&(He.textContent=Le),st=M(D),Ne=b(D,"P",{"data-svelte-h":!0}),C(Ne)!=="svelte-18ctydr"&&(Ne.innerHTML=Fe),U=M(D),_=b(D,"P",{"data-svelte-h":!0}),C(_)!=="svelte-13avi2k"&&(_.innerHTML=H),xe=M(D),pe=b(D,"H3",{"data-svelte-h":!0}),C(pe)!=="svelte-1gxnwn7"&&(pe.textContent=ue),Ge=M(D),Se=b(D,"P",{});var ni=Gt(Se);Pe=_t(ni,"La siguiente forma de proceder y opiniones son, hasta donde sé, de "),St(Ze.$$.fragment,ni),k=_t(ni,`. No he hecho una investigación exhaustiva ni
sé si hay autores que han escrito sobre esto a favor o en contra. Por eso no
asumas nada de lo que expongo aquí, evita todo prejuicio positivo y afila la
sospecha y la duda.`),ni.forEach(o),he=M(D),tt=b(D,"P",{"data-svelte-h":!0}),C(tt)!=="svelte-evd6ah"&&(tt.textContent=X),me=M(D),We=b(D,"P",{"data-svelte-h":!0}),C(We)!=="svelte-1usqu0d"&&(We.textContent=Ke),ct=M(D),St(G.$$.fragment,D),Ce=M(D),be=b(D,"P",{"data-svelte-h":!0}),C(be)!=="svelte-13cl2ob"&&(be.textContent=ve),Te=M(D),St($e.$$.fragment,D),Qe=M(D),St(lt.$$.fragment,D),ut=M(D),et=b(D,"P",{"data-svelte-h":!0}),C(et)!=="svelte-1pvoef4"&&(et.textContent=dt),pt=M(D),St(Q.$$.fragment,D),Ue=M(D),St(vt.$$.fragment,D),ce=M(D),Ie=b(D,"P",{"data-svelte-h":!0}),C(Ie)!=="svelte-s99gcn"&&(Ie.textContent=At),ne=M(D),B=b(D,"P",{"data-svelte-h":!0}),C(B)!=="svelte-xp8med"&&(B.textContent=Xe),Nt=M(D),qt=b(D,"P",{"data-svelte-h":!0}),C(qt)!=="svelte-1qkk97s"&&(qt.textContent=cn),Vt=M(D),w=b(D,"P",{"data-svelte-h":!0}),C(w)!=="svelte-lro4l7"&&(w.textContent=ee),le=M(D),oe=b(D,"P",{"data-svelte-h":!0}),C(oe)!=="svelte-1hghbyz"&&(oe.textContent=te),Oe=M(D),Be=b(D,"P",{"data-svelte-h":!0}),C(Be)!=="svelte-1n9drh4"&&(Be.textContent=V),fe=M(D),St(j.$$.fragment,D),Ae=M(D),it=b(D,"SMALL",{"data-svelte-h":!0}),C(it)!=="svelte-og0ogg"&&(it.textContent=ft),zt=M(D),Pt=b(D,"P",{"data-svelte-h":!0}),C(Pt)!=="svelte-1u74y51"&&(Pt.textContent=Bt),wt=M(D),St(rt.$$.fragment,D),Dt=M(D),St(xt.$$.fragment,D),jt=M(D),Ht=b(D,"H4",{"data-svelte-h":!0}),C(Ht)!=="svelte-ftmlr4"&&(Ht.textContent=Qt),un=M(D),bt=b(D,"P",{"data-svelte-h":!0}),C(bt)!=="svelte-1dxwr9q"&&(bt.textContent=hn),dn=M(D),Ft=b(D,"P",{"data-svelte-h":!0}),C(Ft)!=="svelte-1t2sbdi"&&(Ft.innerHTML=Vn),mn=M(D),Wt=b(D,"P",{"data-svelte-h":!0}),C(Wt)!=="svelte-1d5db4w"&&(Wt.textContent=Di),Dn=M(D),Xt=b(D,"H3",{"data-svelte-h":!0}),C(Xt)!=="svelte-xnqpfg"&&(Xt.textContent=Ui),Un=M(D),Yt=b(D,"P",{"data-svelte-h":!0}),C(Yt)!=="svelte-10rlsf7"&&(Yt.textContent=Ii),In=M(D),$=b(D,"P",{"data-svelte-h":!0}),C($)!=="svelte-1t9pwnw"&&($.textContent=Ve),Gn=M(D),_n=b(D,"P",{"data-svelte-h":!0}),C(_n)!=="svelte-dp70ds"&&(_n.textContent=ss),di=M(D),xn=b(D,"P",{"data-svelte-h":!0}),C(xn)!=="svelte-hpg0ix"&&(xn.textContent=os),pi=M(D),bn=b(D,"H3",{"data-svelte-h":!0}),C(bn)!=="svelte-12fyqdo"&&(bn.textContent=rs),fi=M(D),yn=b(D,"P",{"data-svelte-h":!0}),C(yn)!=="svelte-1lhdzti"&&(yn.textContent=ls),hi=M(D),Mn=b(D,"P",{"data-svelte-h":!0}),C(Mn)!=="svelte-1rh7odk"&&(Mn.textContent=cs),mi=M(D),Sn=b(D,"P",{"data-svelte-h":!0}),C(Sn)!=="svelte-urr5oj"&&(Sn.textContent=us),vi=M(D),Cn=b(D,"P",{"data-svelte-h":!0}),C(Cn)!=="svelte-1appavq"&&(Cn.textContent=ds),gi=M(D),En=b(D,"P",{"data-svelte-h":!0}),C(En)!=="svelte-zv5b0r"&&(En.textContent=ps),_i=M(D),Tn=b(D,"H2",{"data-svelte-h":!0}),C(Tn)!=="svelte-tboj21"&&(Tn.textContent=fs),xi=M(D),An=b(D,"P",{"data-svelte-h":!0}),C(An)!=="svelte-1yr7544"&&(An.innerHTML=hs),bi=M(D),wn=b(D,"P",{"data-svelte-h":!0}),C(wn)!=="svelte-hh4l2w"&&(wn.textContent=ms),yi=M(D),St(Pn.$$.fragment,D)},m(D,ge){l(D,e,ge),l(D,n,ge),l(D,a,ge),l(D,c,ge),l(D,r,ge),l(D,d,ge),l(D,p,ge),l(D,f,ge),l(D,g,ge),l(D,S,ge),l(D,h,ge),It(h,m),Ct(R,h,null),It(h,P),l(D,N,ge),l(D,W,ge),l(D,z,ge),Ct(F,D,ge),l(D,A,ge),l(D,T,ge),l(D,Z,ge),Ct(K,D,ge),l(D,Y,ge),l(D,se,ge),l(D,de,ge),l(D,J,ge),l(D,ae,ge),l(D,Me,ge),l(D,je,ge),l(D,ie,ge),l(D,Re,ge),l(D,we,ge),l(D,qe,ge),Ct(ze,D,ge),l(D,at,ge),l(D,q,ge),l(D,nt,ge),l(D,He,ge),l(D,st,ge),l(D,Ne,ge),l(D,U,ge),l(D,_,ge),l(D,xe,ge),l(D,pe,ge),l(D,Ge,ge),l(D,Se,ge),It(Se,Pe),Ct(Ze,Se,null),It(Se,k),l(D,he,ge),l(D,tt,ge),l(D,me,ge),l(D,We,ge),l(D,ct,ge),Ct(G,D,ge),l(D,Ce,ge),l(D,be,ge),l(D,Te,ge),Ct($e,D,ge),l(D,Qe,ge),Ct(lt,D,ge),l(D,ut,ge),l(D,et,ge),l(D,pt,ge),Ct(Q,D,ge),l(D,Ue,ge),Ct(vt,D,ge),l(D,ce,ge),l(D,Ie,ge),l(D,ne,ge),l(D,B,ge),l(D,Nt,ge),l(D,qt,ge),l(D,Vt,ge),l(D,w,ge),l(D,le,ge),l(D,oe,ge),l(D,Oe,ge),l(D,Be,ge),l(D,fe,ge),Ct(j,D,ge),l(D,Ae,ge),l(D,it,ge),l(D,zt,ge),l(D,Pt,ge),l(D,wt,ge),Ct(rt,D,ge),l(D,Dt,ge),Ct(xt,D,ge),l(D,jt,ge),l(D,Ht,ge),l(D,un,ge),l(D,bt,ge),l(D,dn,ge),l(D,Ft,ge),l(D,mn,ge),l(D,Wt,ge),l(D,Dn,ge),l(D,Xt,ge),l(D,Un,ge),l(D,Yt,ge),l(D,In,ge),l(D,$,ge),l(D,Gn,ge),l(D,_n,ge),l(D,di,ge),l(D,xn,ge),l(D,pi,ge),l(D,bn,ge),l(D,fi,ge),l(D,yn,ge),l(D,hi,ge),l(D,Mn,ge),l(D,mi,ge),l(D,Sn,ge),l(D,vi,ge),l(D,Cn,ge),l(D,gi,ge),l(D,En,ge),l(D,_i,ge),l(D,Tn,ge),l(D,xi,ge),l(D,An,ge),l(D,bi,ge),l(D,wn,ge),l(D,yi,ge),Ct(Pn,D,ge),$i=!0},p(D,[ge]){const ni={};ge&8&&(ni.$$scope={dirty:ge,ctx:D}),R.$set(ni);const Xi={};ge&8&&(Xi.$$scope={dirty:ge,ctx:D}),F.$set(Xi);const ii={};ge&8&&(ii.$$scope={dirty:ge,ctx:D}),K.$set(ii);const vs={};ge&8&&(vs.$$scope={dirty:ge,ctx:D}),ze.$set(vs);const Yi={};ge&8&&(Yi.$$scope={dirty:ge,ctx:D}),Ze.$set(Yi);const ai={};ge&8&&(ai.$$scope={dirty:ge,ctx:D}),G.$set(ai);const gs={};ge&8&&(gs.$$scope={dirty:ge,ctx:D}),$e.$set(gs);const Zi={};ge&8&&(Zi.$$scope={dirty:ge,ctx:D}),Q.$set(Zi);const si={};ge&8&&(si.$$scope={dirty:ge,ctx:D}),j.$set(si);const _s={};ge&8&&(_s.$$scope={dirty:ge,ctx:D}),xt.$set(_s)},i(D){$i||(ht(R.$$.fragment,D),ht(F.$$.fragment,D),ht(K.$$.fragment,D),ht(ze.$$.fragment,D),ht(Ze.$$.fragment,D),ht(G.$$.fragment,D),ht($e.$$.fragment,D),ht(lt.$$.fragment,D),ht(Q.$$.fragment,D),ht(vt.$$.fragment,D),ht(j.$$.fragment,D),ht(rt.$$.fragment,D),ht(xt.$$.fragment,D),ht(Pn.$$.fragment,D),$i=!0)},o(D){mt(R.$$.fragment,D),mt(F.$$.fragment,D),mt(K.$$.fragment,D),mt(ze.$$.fragment,D),mt(Ze.$$.fragment,D),mt(G.$$.fragment,D),mt($e.$$.fragment,D),mt(lt.$$.fragment,D),mt(Q.$$.fragment,D),mt(vt.$$.fragment,D),mt(j.$$.fragment,D),mt(rt.$$.fragment,D),mt(xt.$$.fragment,D),mt(Pn.$$.fragment,D),$i=!1},d(D){D&&(o(e),o(n),o(a),o(c),o(r),o(d),o(p),o(f),o(g),o(S),o(h),o(N),o(W),o(z),o(A),o(T),o(Z),o(Y),o(se),o(de),o(J),o(ae),o(Me),o(je),o(ie),o(Re),o(we),o(qe),o(at),o(q),o(nt),o(He),o(st),o(Ne),o(U),o(_),o(xe),o(pe),o(Ge),o(Se),o(he),o(tt),o(me),o(We),o(ct),o(Ce),o(be),o(Te),o(Qe),o(ut),o(et),o(pt),o(Ue),o(ce),o(Ie),o(ne),o(B),o(Nt),o(qt),o(Vt),o(w),o(le),o(oe),o(Oe),o(Be),o(fe),o(Ae),o(it),o(zt),o(Pt),o(wt),o(Dt),o(jt),o(Ht),o(un),o(bt),o(dn),o(Ft),o(mn),o(Wt),o(Dn),o(Xt),o(Un),o(Yt),o(In),o($),o(Gn),o(_n),o(di),o(xn),o(pi),o(bn),o(fi),o(yn),o(hi),o(Mn),o(mi),o(Sn),o(vi),o(Cn),o(gi),o(En),o(_i),o(Tn),o(xi),o(An),o(bi),o(wn),o(yi)),Et(R),Et(F,D),Et(K,D),Et(ze,D),Et(Ze),Et(G,D),Et($e,D),Et(lt,D),Et(Q,D),Et(vt,D),Et(j,D),Et(rt,D),Et(xt,D),Et(Pn,D)}}}const b_={title:"Especificación visual. Caso Point it out!",slug:"especificacion-visual-caso-point-it-out",coverImage:"/src/assets/posts-covers/pio-round-fail-test.png",coverAuthor:"",excerpt:"Caso de un proyecto en activo para el que repaso el concepto de regresión visual y especificación visual. Contenido denso.",date:"2024-07-25T15:06:23.177Z",updated:"2024-07-25T15:06:23.903Z",hidden:!1,tags:["TDD/BDD/ATDD","Tooling","DX"],keywords:["svg","regresión visual","visual testing"],type:"default",coverPosition:"top"};function y_(i){return jc(()=>{Uu("rect",{target:"#example-target",strokeWidth:4,strokeColor:"#3f37",padding:2})}),[]}class M_ extends Kt{constructor(e){super(),Jt(this,e,y_,x_,Zt,{})}}const S_=Object.freeze(Object.defineProperty({__proto__:null,default:M_,metadata:b_},Symbol.toStringTag,{value:"Module"}));function C_(i){let e,t=`Me aconsejaba un compañero, preocupado, que no debería atreverme a exponer aquí
opiniones personales que puedan mostrar lo que algunas empresas consideran
red flags, por muy personal que sea este blog.`,n,a,s=`Y no le falta razón. Puedes generar rechazo incluso en aquellos que comparten
tus mismos valores y opiniones: parecer imprudente o demasiado polémico no suele
ser buena idea.`,c,r,u=`Lejos de lo que pueda proyectar a mis alumnos o compañeros, no estoy en
ninguna situación privilegiada que me permita hacer o decir lo que quiera. No
tengo una cola de empresas interesadas en mí, un millón en el banco ni ningún
otro tipo de estabilidad garantizada. Cada opinión podría sentenciarme o hacerme
perder oportunidades.`,d,p,v="Entonces, ¿por qué me expongo?",f,g,E="Cincel",S,h,m=`Suelo decir que moriré en el momento en el que deje de
cambiar, y una forma muy efectiva de realizar introspección es poner en tela
de juicio mis propias convicciones. Uso este blog como una herramienta para
dicho fin.`,R,P,N=`Mojarme con opiniones personales me genera la suficiente ansiedad y tensión
psicológica para disparar muchas dudas. Esto se intensifica tras ver que mucha
más gente de la que creía lee este blog con tanto interés <em>(sinceramente
estaba convencido de que no lo leería nadie, eso lo hacía todo más fácil)</em>.`,W,I,z=`Nunca he tenido la intención de construir una marca personal con este sitio y
menos con un blog. Solo es un espacio donde poder contar
<a href="/blog/el-hacking-a-google">batallitas</a>, experimentar con alguna
<a href="/blog/especificacion-visual-caso-point-it-out">técnica</a> que se me ocurra y
hablar de resultados de <a href="/blog/tamano-no-importa-tree-shakeables">algunas pruebas</a>.
Tampoco me expongo tanto. Como dije en mi primera entrada, a diferencia de una
red social, aquí tengo mejor control del contenido.`;return{c(){e=x("p"),e.textContent=t,n=y(),a=x("p"),a.textContent=s,c=y(),r=x("p"),r.textContent=u,d=y(),p=x("p"),p.textContent=v,f=y(),g=x("h2"),g.textContent=E,S=y(),h=x("p"),h.textContent=m,R=y(),P=x("p"),P.innerHTML=N,W=y(),I=x("p"),I.innerHTML=z},l(F){e=b(F,"P",{"data-svelte-h":!0}),C(e)!=="svelte-1xcuoki"&&(e.textContent=t),n=M(F),a=b(F,"P",{"data-svelte-h":!0}),C(a)!=="svelte-1ih9oma"&&(a.textContent=s),c=M(F),r=b(F,"P",{"data-svelte-h":!0}),C(r)!=="svelte-1mnz7bv"&&(r.textContent=u),d=M(F),p=b(F,"P",{"data-svelte-h":!0}),C(p)!=="svelte-1qj6ocr"&&(p.textContent=v),f=M(F),g=b(F,"H2",{"data-svelte-h":!0}),C(g)!=="svelte-whrey8"&&(g.textContent=E),S=M(F),h=b(F,"P",{"data-svelte-h":!0}),C(h)!=="svelte-8rc8kg"&&(h.textContent=m),R=M(F),P=b(F,"P",{"data-svelte-h":!0}),C(P)!=="svelte-g0oryt"&&(P.innerHTML=N),W=M(F),I=b(F,"P",{"data-svelte-h":!0}),C(I)!=="svelte-13eb6x1"&&(I.innerHTML=z)},m(F,A){l(F,e,A),l(F,n,A),l(F,a,A),l(F,c,A),l(F,r,A),l(F,d,A),l(F,p,A),l(F,f,A),l(F,g,A),l(F,S,A),l(F,h,A),l(F,R,A),l(F,P,A),l(F,W,A),l(F,I,A)},p:Ut,i:Ut,o:Ut,d(F){F&&(o(e),o(n),o(a),o(c),o(r),o(d),o(p),o(f),o(g),o(S),o(h),o(R),o(P),o(W),o(I))}}}const E_={title:"Miedo de decir, miedo de ser",slug:"miedo-de-decir-miedo-de-ser",coverImage:"paisaje-miedo.jpg",coverAuthor:"Karsten Würth",excerpt:"Me han preguntado si no me da miedo escribir algunas cosas,  pues podría estar saboteando mi futuro. Respondo.",date:"2024-11-28T01:09:04.325Z",updated:"2024-11-28T01:09:04.326Z",hidden:!1,tags:["Personal","Laboral"],keywords:[],type:"default"};class T_ extends Kt{constructor(e){super(),Jt(this,e,null,C_,Zt,{})}}const A_=Object.freeze(Object.defineProperty({__proto__:null,default:T_,metadata:E_},Symbol.toStringTag,{value:"Module"}));function w_(i){let e,t,n="Type Challenges",a;return{c(){e=gt("En el repo "),t=x("a"),t.textContent=n,a=gt(`
de Anthony Fu puedes encontrar una gran variedad de desafíos y soluciones de
tipado de todos los niveles, donde verás que no en pocas ocasiones se utiliza
any en un sentido semántico y justificado, sin implicaciones
problemáticas, pero incluso ahí, en la mayoría de casos puede usarse alguna
alternativa, muchas veces un simple unknown puede reemplazarlo sin necesidad
de narrowing ni nada extra.`),this.h()},l(s){e=_t(s,"En el repo "),t=b(s,"A",{href:!0,style:!0,"data-svelte-h":!0}),C(t)!=="svelte-1cco9go"&&(t.textContent=n),a=_t(s,`
de Anthony Fu puedes encontrar una gran variedad de desafíos y soluciones de
tipado de todos los niveles, donde verás que no en pocas ocasiones se utiliza
any en un sentido semántico y justificado, sin implicaciones
problemáticas, pero incluso ahí, en la mayoría de casos puede usarse alguna
alternativa, muchas veces un simple unknown puede reemplazarlo sin necesidad
de narrowing ni nada extra.`),this.h()},h(){yt(t,"href","https://github.com/type-challenges"),$n(t,"color","var(--color-font-highlight)")},m(s,c){l(s,e,c),l(s,t,c),l(s,a,c)},p:Ut,d(s){s&&(o(e),o(t),o(a))}}}function P_(i){let e,t=`Recientemente un colega de profesión se ha sorprendido al
permitirle usar <code>any</code> en TypeScript. Suelo dar mucho la turra con ello.
En la práctica totalidad del código que he auditado rara vez he
encontrado algún <code>any</code> justificado en usos “normales”.`,n,a,s=`El uso justificado de <code>any</code> más habitual que he
visto es precisamente el que <a href="https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#any" rel="nofollow">podemos encontrar en la documentación</a>, traduzco:`,c,r,u=`<p>❌ No uses <code>any</code> como un tipo salvo que estés en proceso de migrar un proyecto
de JavaScript a TypeScript.
El compilador tratará el <code>any</code> como “por favor desactiva la revisión de tipos para esto”.
Similar a poner un comentario @ts-ignore alrededor de cada uso de la variable.
Esto puede ser realmente útil cuando comienzas a migrar un proyecto de JavaScript a TypeScript
dado que puedes establecer el tipo de las partes aún no migradas a any, pero en un
proyecto full TypeScript estarás desactivando el tipado para cada parte del programa que
lo utilice.</p>`,d,p,v=`Pero, ¿quién decide qué es justificación y qué excusa?, ¿cómo diferencias una
negligencia de una decisión deliberada con buena finalidad?`,f,g,E,S,h="Lo mejor no significa lo más práctico",m,R,P=`Cuando no tienes conocimientos avanzados de TypeScript y tipar correctamente un
caso extraño puede implicar muchas horas, hay que aprender a poner límites a la
excelencia.`,N,W,I=`Tenemos muchas herramientas para minimizar el impacto de la deuda técnica
que implica un tipado incompleto, empezando por flexibilizar el tipo y proteger
con tests.`,z,F,A=`No hace falta que haya prisa o se acerque una deadline para tomar estas
decisiones, quizás hemos pillado mucho impulso y no queremos
pararnos a estar con detalles, por mucho que sea lo correcto, no estamos en el
“mood” de hacer esto.`,T,O,Z=`Esto puede ser todavía más crítico durante una fase de diseño donde no está del
todo claro la estructura que vamos a tener. Definir tipos muy avanzados y
complejos a medida que se trabaja puede impedirnos el posponer decisiones.
También puede hacer que tomar decisiones prematuras tenga un impacto mayor
en el tiempo invertido si finalmente son descartadas.`,K,Y,se="Roles y responsabilidades",re,de,J=`Hace un año, David Heinemeier Hansson (DHH), creador de Ruby on Rails,
generó una fuerte polémica en lo que fue casi entendido como <a href="https://world.hey.com/dhh/turbo-8-is-dropping-typescript-70165c01" rel="nofollow">un manifiesto
contra TypeScript</a>, explicando
cómo abandonaron TypeScript en su proyecto Turbo tras pasar infiernos con él.`,De,ae,Me=`DHH señalaba, entre tantas quejas, a la enorme necesidad de usar any que tenían
en su proyecto, siendo TypeScript inútil o estando desactivado en la mayoría de
casos. Hice una auditoría personal a ese proyecto. Mi conclusión: no lo entendían
ni sabían usarlo.`,Je,je,ie=`Y no es que yo me considerara un experto en esta tecnología entonces, ni ahora,
pero claramente veía el trabajo de personas que la habían trivializado. Muchos
seniors creen que TypeScript es una “tontería” para meter tipado y ya, algo que
se aprende en minutos.`,Ee,Re,we=`Entender correctamente sus flujos de análisis y sus características
avanzadas no es algo trivial, y casi diría que es muy vocacional: aquellos que
disfrutan el tooling y la DX tienen una mayor inclinación natural hacia él.`,ke,qe,ze=`Al principio uno puede estar horas, y no exagero, dando vueltas a cómo conseguir
tipar una estructura de datos sencillita para que tenga coherencia. Quien
trivializa considerará que es una tontería que se hace en cinco minutos.`,at,q,Ye=`Era evidente que entre el equipo de DHH no había nadie con experiencia avanzada
en TypeScript, lo que me sorprende porque el propio DHH decía haber estado
cinco años trabajando con él, lo que resalta la necesidad de tener al menos a
una persona centrada en la experiencia de desarrollo y profundizar en esto.`,nt,He,Le=`JavaScript puede migrarse a TypeScript, y durante un proyecto puede trabajarse
con JavaScript o desactivar el chequeo de tipos de algún tipo complejo <strong>mientras
alguien asume la responsabilidad de revisar y tipar</strong>. De este modo,
todo el mundo está cómodo en su trabajo y se sigue obteniendo lo mejor de ambos
mundos de cara al futuro del proyecto.`,st,Ne,Fe=`Con este enfoque y con el tiempo, el conocimiento de los expertos
(habitualmente DX) acaba
permeando y transmitiéndose a todo el equipo y poco a poco otros van
aprendiendo TypeScript a niveles avanzados, sin forzar nada y sin frustraciones.
Eso es más viable que el salto a una piscina vacía como el que veo hacer a tanta
gente, comenzando proyectos con TypeScript desde el inicio sin saber utilizarlo.`,U;return g=new ti({props:{$$slots:{default:[w_]},$$scope:{ctx:i}}}),{c(){e=x("p"),e.innerHTML=t,n=y(),a=x("p"),a.innerHTML=s,c=y(),r=x("blockquote"),r.innerHTML=u,d=y(),p=x("p"),p.textContent=v,f=y(),Mt(g.$$.fragment),E=y(),S=x("h2"),S.textContent=h,m=y(),R=x("p"),R.textContent=P,N=y(),W=x("p"),W.textContent=I,z=y(),F=x("p"),F.textContent=A,T=y(),O=x("p"),O.textContent=Z,K=y(),Y=x("h2"),Y.textContent=se,re=y(),de=x("p"),de.innerHTML=J,De=y(),ae=x("p"),ae.textContent=Me,Je=y(),je=x("p"),je.textContent=ie,Ee=y(),Re=x("p"),Re.textContent=we,ke=y(),qe=x("p"),qe.textContent=ze,at=y(),q=x("p"),q.textContent=Ye,nt=y(),He=x("p"),He.innerHTML=Le,st=y(),Ne=x("p"),Ne.textContent=Fe},l(_){e=b(_,"P",{"data-svelte-h":!0}),C(e)!=="svelte-sjnakw"&&(e.innerHTML=t),n=M(_),a=b(_,"P",{"data-svelte-h":!0}),C(a)!=="svelte-fv1i7n"&&(a.innerHTML=s),c=M(_),r=b(_,"BLOCKQUOTE",{"data-svelte-h":!0}),C(r)!=="svelte-1xn0fql"&&(r.innerHTML=u),d=M(_),p=b(_,"P",{"data-svelte-h":!0}),C(p)!=="svelte-sbj1fj"&&(p.textContent=v),f=M(_),St(g.$$.fragment,_),E=M(_),S=b(_,"H2",{"data-svelte-h":!0}),C(S)!=="svelte-199tknj"&&(S.textContent=h),m=M(_),R=b(_,"P",{"data-svelte-h":!0}),C(R)!=="svelte-szda7b"&&(R.textContent=P),N=M(_),W=b(_,"P",{"data-svelte-h":!0}),C(W)!=="svelte-1l3a23l"&&(W.textContent=I),z=M(_),F=b(_,"P",{"data-svelte-h":!0}),C(F)!=="svelte-1t7y2h0"&&(F.textContent=A),T=M(_),O=b(_,"P",{"data-svelte-h":!0}),C(O)!=="svelte-1gy0ois"&&(O.textContent=Z),K=M(_),Y=b(_,"H2",{"data-svelte-h":!0}),C(Y)!=="svelte-hsg5ny"&&(Y.textContent=se),re=M(_),de=b(_,"P",{"data-svelte-h":!0}),C(de)!=="svelte-kx4rd3"&&(de.innerHTML=J),De=M(_),ae=b(_,"P",{"data-svelte-h":!0}),C(ae)!=="svelte-1hl5rv3"&&(ae.textContent=Me),Je=M(_),je=b(_,"P",{"data-svelte-h":!0}),C(je)!=="svelte-1497ylu"&&(je.textContent=ie),Ee=M(_),Re=b(_,"P",{"data-svelte-h":!0}),C(Re)!=="svelte-p2hppe"&&(Re.textContent=we),ke=M(_),qe=b(_,"P",{"data-svelte-h":!0}),C(qe)!=="svelte-1nicutq"&&(qe.textContent=ze),at=M(_),q=b(_,"P",{"data-svelte-h":!0}),C(q)!=="svelte-jjnjrv"&&(q.textContent=Ye),nt=M(_),He=b(_,"P",{"data-svelte-h":!0}),C(He)!=="svelte-1nun4zh"&&(He.innerHTML=Le),st=M(_),Ne=b(_,"P",{"data-svelte-h":!0}),C(Ne)!=="svelte-1l1d6xr"&&(Ne.textContent=Fe)},m(_,H){l(_,e,H),l(_,n,H),l(_,a,H),l(_,c,H),l(_,r,H),l(_,d,H),l(_,p,H),l(_,f,H),Ct(g,_,H),l(_,E,H),l(_,S,H),l(_,m,H),l(_,R,H),l(_,N,H),l(_,W,H),l(_,z,H),l(_,F,H),l(_,T,H),l(_,O,H),l(_,K,H),l(_,Y,H),l(_,re,H),l(_,de,H),l(_,De,H),l(_,ae,H),l(_,Je,H),l(_,je,H),l(_,Ee,H),l(_,Re,H),l(_,ke,H),l(_,qe,H),l(_,at,H),l(_,q,H),l(_,nt,H),l(_,He,H),l(_,st,H),l(_,Ne,H),U=!0},p(_,[H]){const xe={};H&1&&(xe.$$scope={dirty:H,ctx:_}),g.$set(xe)},i(_){U||(ht(g.$$.fragment,_),U=!0)},o(_){mt(g.$$.fragment,_),U=!1},d(_){_&&(o(e),o(n),o(a),o(c),o(r),o(d),o(p),o(f),o(E),o(S),o(m),o(R),o(N),o(W),o(z),o(F),o(T),o(O),o(K),o(Y),o(re),o(de),o(De),o(ae),o(Je),o(je),o(Ee),o(Re),o(ke),o(qe),o(at),o(q),o(nt),o(He),o(st),o(Ne)),Et(g,_)}}}const R_={title:"El peligro de trivializar. Edición TypeScript.",slug:"peligro-trivializar-typescript",coverImage:"/src/assets/posts-covers/any-code.png",coverPosition:"normal",excerpt:"Un error común es creer que TypeScript es una tontería que se aprende en cinco minutos. Quienes lo creen van directos a un precipicio.",date:"2024-09-28T16:31:23.177Z",updated:"2024-09-28T16:31:23.903Z",hidden:!1,tags:["TypeScript","DX"],keywords:["dx","any","typescript"],type:"default"};class L_ extends Kt{constructor(e){super(),Jt(this,e,null,P_,Zt,{})}}const D_=Object.freeze(Object.defineProperty({__proto__:null,default:L_,metadata:R_},Symbol.toStringTag,{value:"Module"}));function U_(i){let e,t,n="personal",a;return{c(){e=gt("En este artículo hablo de blogs de carácter "),t=x("strong"),t.textContent=n,a=gt(`, 
no de blogs corporativos, institucionales, etc. Esos tienen otras razones para 
seguir siendo útiles.`)},l(s){e=_t(s,"En este artículo hablo de blogs de carácter "),t=b(s,"STRONG",{"data-svelte-h":!0}),C(t)!=="svelte-1kfgueg"&&(t.textContent=n),a=_t(s,`, 
no de blogs corporativos, institucionales, etc. Esos tienen otras razones para 
seguir siendo útiles.`)},m(s,c){l(s,e,c),l(s,t,c),l(s,a,c)},p:Ut,d(s){s&&(o(e),o(t),o(a))}}}function I_(i){let e,t="👇 al final.";return{c(){e=x("a"),e.textContent=t,this.h()},l(n){e=b(n,"A",{href:!0,"data-svelte-h":!0}),C(e)!=="svelte-alaku3"&&(e.textContent=t),this.h()},h(){yt(e,"href","#detalles-tecnicos")},m(n,a){l(n,e,a)},p:Ut,d(n){n&&o(e)}}}function N_(i){let e;return{c(){e=gt(`Esto es un apartado más técnico. Si no te interesa no sé qué haces
leyendo este blog, para empezar.`)},l(t){e=_t(t,`Esto es un apartado más técnico. Si no te interesa no sé qué haces
leyendo este blog, para empezar.`)},m(t,n){l(t,e,n)},d(t){t&&o(e)}}}function q_(i){let e;return{c(){e=gt("déjame un comentario")},l(t){e=_t(t,"déjame un comentario")},m(t,n){l(t,e,n)},d(t){t&&o(e)}}}function F_(i){let e,t,n,a,s,c,r,u=`Estoy cansado de leer sobre la importancia de dejar por escrito tu oficio o
pensamientos aunque nadie te lea. No le veía sentido práctico y no sentía que
me ayudara, pero recientemente le he visto dos utilidades.`,d,p,v=`La primera, tener un espacio donde compartir lo que suelo repetir con cada
alumno. Así puedo dejar directamente comentarios, recomendaciones, patrones,
etc., limitándome a mandarles el enlace y no robándoles tiempo en clase.`,f,g,E=`La segunda, más personal y clásica de un blog, es dejar algún rastro de mi
evolución. Muchas veces he
intentado recordar sin éxito qué pensaba o qué razones tenía en el pasado para
decir o hacer determinadas cosas, como apoyar ciertas corrientes o tecnologías.
Saber cómo era ayuda a la introspección, a asimiliar y ajustar cambios.`,S,h,m="Ventajas de un blog personal en la actualidad",R,P,N=`Todos conocemos por qué este formato ha muerto. Un blog personal no genera
dopamina, no está en medio de todo ni te da
seguidores <small>(o no tantos)</small>. De hecho requiere un esfuerzo para
mejorar su visibilidad si necesitaras que otros pasen por él. Todo esto puede
considerarse ventajas si lo vemos como un pequeño refugio.`,W,I,z=`Otra ventaja que surge de la adversidad solo por un cambio de enfoque
es que hay menos posibilidades de negocio, lo que provoca que un blog personal
se reduzca por necesidad a su esencia. Actualmente todo internet está saturado
de contenido basura y autogenerado bien posicionado por magufidades del SEO, por
lo que la dificultad de posicionar algo aumenta tanto que me disuade y aleja
de esas ideas de pseudoéxito capitalista.`,F,A,T=`Al renunciar al posicionamiento, a las visitas e incluso a los comentarios,
escribir un blog se convierte en una experiencia más personal y limpia. Y lo
mejor es que me permite realizar aquellas acciones tradicionalmente
superdestructivas y dañinas para el posicionamiento en un sitio normal,
como borrar entradas.`,O,Z,K=`Ya desde el primer párrafo que escribes puedes notar algo de no
estar pululando cerca de una red social: se acabó el que secuestren tu atención,
el destruir tu productividad con spam de vídeos de gatitos y Milei dando cringe.`,Y,se,re=`Pero lo mejor de todo es que en este formato tienes el control de tu contenido,
no hay un servicio que te diga qué puedes o no publicar. Incluso con servicios
de alojamiento con restricción de contenido o posibilidad de cambiar sus
políticas, siempre podrás llevártelo a otro lado. Hoy día, tener el control
sobre tu contenido es un privilegio.`,de,J,De="Por qué no tengo una sección de comentarios",ae,Me,Je=`Quitando que es un rollo integrar un sistema de comentarios dinámicos externo
en un sitio estático, cabe aclarar que los comentarios no tienen nada de malo,
de hecho tienen más pros que contras, pero para mi caso particular pesan más
los contras. Mi idea es <strong>eliminar la interacción social</strong> en este espacio (más
sobre esto en una futura entrada).`,je,ie,Ee=`Entre las razones más evidentes para no incluirlos está evitarme
todo tipo de spam, trolls e incluso comentarios positivos, que solo son alimento
para el ego. No necesito que quede constancia de si a alguien le gusta o no lo
que he escrito, aunque con ello se pierda las utilidades más importantes de los
comentarios: la obtención de feedback constructivo, correcciones y sugerencias.`,Re,we,ke=`A ver, existe el correo electrónico, pero nadie lo usa
salvo que no haya más remedio. Es una vía más directa
pero con algunas desventajas, como la posibilidad de que el correo nunca llegue
y ni lo sepas.`,qe,ze,at=`La razón de peso más típica para incluir comentarios suele estar relacionada con
el SEO. Los comentarios cuentan como nuevo
contenido y pueden atraer visitas por sí mismos. Todo eso me da igual, no busco
visibilidad ni posicionamiento con este blog.`,q,Ye,nt="SvelteKit como generador de blogs estáticos",He,Le,st,Ne,Fe=`No estoy usando ningún framework específico para blogs sino <strong>SvelteKit</strong> como
generador de sitios estáticos, adaptado a mis necesidades.`,U,_,H=`Hoy día los sitios estáticos no son ninguna sorpresa. Recuerdo a
principios de milenio cuando la comunidad de php te miraba raro al decir
de hacer todo en estático, y lo nicho que fue Jekyll hasta que Ruby on Rails
pilló más popularidad.`,xe,pe,ue=`Entre 2022 y 2023 comencé un proyecto un poco más ambicioso al que llamé
Simple Static Blog Generator, fundamentado en TypeScript y MarkDown. Estaba
orientado a experiencia de desarrollo con capa de vista totalmente desacoplada,
teniendo solo una implementación básica de demostración con pug como sistema
de templates.`,Ge,Se,Pe=`Aunque utilizaba herramientas modernas, integrar con frameworks de SPA,
reactividad y diseño orientado a componentes era demasiado
reinventar la rueda. Pensando en rediseñar el sistema sobre Nuxt (Vue),
conocí Svelte y SvelteKit. El proyecto de Rich Harris me parecía increíble como
para no darle una oportunidad, y no me arrepiento.`,Ze,k,he=`SvelteKit es a Svelte lo que Next a React o Nuxt a Vue, aunque con soporte
oficial; digamos que SvelteKit/Svelte son parte del mismo proyecto
en manos de la misma comunidad y se desarrollan completamente a la vez.`,tt,X,me=`Quizás seas como yo y no te guste este tipo de frameworks “todo en uno”
porque, al menos en flujos normales, implica una <small>no obligatoria pero
recomendada</small> implementación de back end; pero su modo generador de sitios
estáticos es con mucho margen la mejor experiencia de desarrollo que he tenido.`,We,Ke,ct=`Alojar un sitio estático es prácticamente gratuito y apenas consume recursos.
El servidor, a fin de cuentas, solo se dedica a enviar ficheros. Existen
diversos servicios gratuitos para alojarlo, como Github Pages, donde
justo está este blog.`,G,Ce,be=`En términos de seguridad, los sitios estáticos son más seguros por naturaleza.
Los ataques de tipo DDoS solo funcionan por saturación de red y no por cómputo,
dado el esfuerzo mínimo que tiene que hacer el servidor. Esto no evita que se
agoten las cotas de recursos en servicios de hosting y es crítico
cuando no se tiene ningún control del backend. En servicios como Pages
donde además no se dispone de formas claras de auditar los ataques, solo se
complica, especialmente con capas gratuitas.`,ve,Te,$e,Qe,lt="(y contras)",ut,et,dt="más",pt,Q,Ue,vt;return e=new ti({props:{$$slots:{default:[U_]},$$scope:{ctx:i}}}),s=new br({props:{$$slots:{default:[I_]},$$scope:{ctx:i}}}),Le=new ti({props:{$$slots:{default:[N_]},$$scope:{ctx:i}}}),Q=new Wc({props:{$$slots:{default:[q_]},$$scope:{ctx:i}}}),{c(){Mt(e.$$.fragment),t=y(),n=x("p"),a=gt(`Esta es la primera entrada de un blog en el que controlo todo su proceso
generativo y contenido. Detalles
técnicos `),Mt(s.$$.fragment),c=y(),r=x("p"),r.textContent=u,d=y(),p=x("p"),p.textContent=v,f=y(),g=x("p"),g.textContent=E,S=y(),h=x("h2"),h.textContent=m,R=y(),P=x("p"),P.innerHTML=N,W=y(),I=x("p"),I.textContent=z,F=y(),A=x("p"),A.textContent=T,O=y(),Z=x("p"),Z.textContent=K,Y=y(),se=x("p"),se.textContent=re,de=y(),J=x("h2"),J.textContent=De,ae=y(),Me=x("p"),Me.innerHTML=Je,je=y(),ie=x("p"),ie.textContent=Ee,Re=y(),we=x("p"),we.textContent=ke,qe=y(),ze=x("p"),ze.textContent=at,q=y(),Ye=x("h2"),Ye.textContent=nt,He=y(),Mt(Le.$$.fragment),st=y(),Ne=x("p"),Ne.innerHTML=Fe,U=y(),_=x("p"),_.textContent=H,xe=y(),pe=x("p"),pe.textContent=ue,Ge=y(),Se=x("p"),Se.textContent=Pe,Ze=y(),k=x("p"),k.textContent=he,tt=y(),X=x("p"),X.innerHTML=me,We=y(),Ke=x("p"),Ke.textContent=ct,G=y(),Ce=x("p"),Ce.textContent=be,ve=y(),Te=x("p"),$e=gt("Hay otros beneficios "),Qe=x("small"),Qe.textContent=lt,ut=gt(`, pero no voy a
dar `),et=x("small"),et.textContent=dt,pt=gt(` la chapa en esta entrada. Si tienes dudas
concretas sobre implementación o quieres hacerte tu propio sitio
estático con estas tecnologías y no sabes ni por dónde
empezar `),Mt(Q.$$.fragment),Ue=gt(" mándame un correo."),this.h()},l(ce){St(e.$$.fragment,ce),t=M(ce),n=b(ce,"P",{});var Ie=Gt(n);a=_t(Ie,`Esta es la primera entrada de un blog en el que controlo todo su proceso
generativo y contenido. Detalles
técnicos `),St(s.$$.fragment,Ie),Ie.forEach(o),c=M(ce),r=b(ce,"P",{"data-svelte-h":!0}),C(r)!=="svelte-gel1sl"&&(r.textContent=u),d=M(ce),p=b(ce,"P",{"data-svelte-h":!0}),C(p)!=="svelte-14h9b1d"&&(p.textContent=v),f=M(ce),g=b(ce,"P",{"data-svelte-h":!0}),C(g)!=="svelte-w90q66"&&(g.textContent=E),S=M(ce),h=b(ce,"H2",{"data-svelte-h":!0}),C(h)!=="svelte-1dd0thw"&&(h.textContent=m),R=M(ce),P=b(ce,"P",{"data-svelte-h":!0}),C(P)!=="svelte-10c8ry6"&&(P.innerHTML=N),W=M(ce),I=b(ce,"P",{"data-svelte-h":!0}),C(I)!=="svelte-18rmamq"&&(I.textContent=z),F=M(ce),A=b(ce,"P",{"data-svelte-h":!0}),C(A)!=="svelte-1u3loif"&&(A.textContent=T),O=M(ce),Z=b(ce,"P",{"data-svelte-h":!0}),C(Z)!=="svelte-gfynom"&&(Z.textContent=K),Y=M(ce),se=b(ce,"P",{"data-svelte-h":!0}),C(se)!=="svelte-1owvlqx"&&(se.textContent=re),de=M(ce),J=b(ce,"H2",{"data-svelte-h":!0}),C(J)!=="svelte-5qf7jp"&&(J.textContent=De),ae=M(ce),Me=b(ce,"P",{"data-svelte-h":!0}),C(Me)!=="svelte-1xwjm58"&&(Me.innerHTML=Je),je=M(ce),ie=b(ce,"P",{"data-svelte-h":!0}),C(ie)!=="svelte-1obppyr"&&(ie.textContent=Ee),Re=M(ce),we=b(ce,"P",{"data-svelte-h":!0}),C(we)!=="svelte-1e7wgil"&&(we.textContent=ke),qe=M(ce),ze=b(ce,"P",{"data-svelte-h":!0}),C(ze)!=="svelte-lv4okb"&&(ze.textContent=at),q=M(ce),Ye=b(ce,"H2",{id:!0,"data-svelte-h":!0}),C(Ye)!=="svelte-809ml2"&&(Ye.textContent=nt),He=M(ce),St(Le.$$.fragment,ce),st=M(ce),Ne=b(ce,"P",{"data-svelte-h":!0}),C(Ne)!=="svelte-1c01o13"&&(Ne.innerHTML=Fe),U=M(ce),_=b(ce,"P",{"data-svelte-h":!0}),C(_)!=="svelte-1u01tjt"&&(_.textContent=H),xe=M(ce),pe=b(ce,"P",{"data-svelte-h":!0}),C(pe)!=="svelte-r8zxp3"&&(pe.textContent=ue),Ge=M(ce),Se=b(ce,"P",{"data-svelte-h":!0}),C(Se)!=="svelte-avlmxs"&&(Se.textContent=Pe),Ze=M(ce),k=b(ce,"P",{"data-svelte-h":!0}),C(k)!=="svelte-10ibczo"&&(k.textContent=he),tt=M(ce),X=b(ce,"P",{"data-svelte-h":!0}),C(X)!=="svelte-zmfge8"&&(X.innerHTML=me),We=M(ce),Ke=b(ce,"P",{"data-svelte-h":!0}),C(Ke)!=="svelte-wmnnp"&&(Ke.textContent=ct),G=M(ce),Ce=b(ce,"P",{"data-svelte-h":!0}),C(Ce)!=="svelte-oa6bid"&&(Ce.textContent=be),ve=M(ce),Te=b(ce,"P",{});var At=Gt(Te);$e=_t(At,"Hay otros beneficios "),Qe=b(At,"SMALL",{"data-svelte-h":!0}),C(Qe)!=="svelte-12yc462"&&(Qe.textContent=lt),ut=_t(At,`, pero no voy a
dar `),et=b(At,"SMALL",{"data-svelte-h":!0}),C(et)!=="svelte-ohh2xh"&&(et.textContent=dt),pt=_t(At,` la chapa en esta entrada. Si tienes dudas
concretas sobre implementación o quieres hacerte tu propio sitio
estático con estas tecnologías y no sabes ni por dónde
empezar `),St(Q.$$.fragment,At),Ue=_t(At," mándame un correo."),At.forEach(o),this.h()},h(){yt(Ye,"id","detalles-tecnicos")},m(ce,Ie){Ct(e,ce,Ie),l(ce,t,Ie),l(ce,n,Ie),It(n,a),Ct(s,n,null),l(ce,c,Ie),l(ce,r,Ie),l(ce,d,Ie),l(ce,p,Ie),l(ce,f,Ie),l(ce,g,Ie),l(ce,S,Ie),l(ce,h,Ie),l(ce,R,Ie),l(ce,P,Ie),l(ce,W,Ie),l(ce,I,Ie),l(ce,F,Ie),l(ce,A,Ie),l(ce,O,Ie),l(ce,Z,Ie),l(ce,Y,Ie),l(ce,se,Ie),l(ce,de,Ie),l(ce,J,Ie),l(ce,ae,Ie),l(ce,Me,Ie),l(ce,je,Ie),l(ce,ie,Ie),l(ce,Re,Ie),l(ce,we,Ie),l(ce,qe,Ie),l(ce,ze,Ie),l(ce,q,Ie),l(ce,Ye,Ie),l(ce,He,Ie),Ct(Le,ce,Ie),l(ce,st,Ie),l(ce,Ne,Ie),l(ce,U,Ie),l(ce,_,Ie),l(ce,xe,Ie),l(ce,pe,Ie),l(ce,Ge,Ie),l(ce,Se,Ie),l(ce,Ze,Ie),l(ce,k,Ie),l(ce,tt,Ie),l(ce,X,Ie),l(ce,We,Ie),l(ce,Ke,Ie),l(ce,G,Ie),l(ce,Ce,Ie),l(ce,ve,Ie),l(ce,Te,Ie),It(Te,$e),It(Te,Qe),It(Te,ut),It(Te,et),It(Te,pt),Ct(Q,Te,null),It(Te,Ue),vt=!0},p(ce,[Ie]){const At={};Ie&1&&(At.$$scope={dirty:Ie,ctx:ce}),e.$set(At);const ne={};Ie&1&&(ne.$$scope={dirty:Ie,ctx:ce}),s.$set(ne);const B={};Ie&1&&(B.$$scope={dirty:Ie,ctx:ce}),Le.$set(B);const Xe={};Ie&1&&(Xe.$$scope={dirty:Ie,ctx:ce}),Q.$set(Xe)},i(ce){vt||(ht(e.$$.fragment,ce),ht(s.$$.fragment,ce),ht(Le.$$.fragment,ce),ht(Q.$$.fragment,ce),vt=!0)},o(ce){mt(e.$$.fragment,ce),mt(s.$$.fragment,ce),mt(Le.$$.fragment,ce),mt(Q.$$.fragment,ce),vt=!1},d(ce){ce&&(o(t),o(n),o(c),o(r),o(d),o(p),o(f),o(g),o(S),o(h),o(R),o(P),o(W),o(I),o(F),o(A),o(O),o(Z),o(Y),o(se),o(de),o(J),o(ae),o(Me),o(je),o(ie),o(Re),o(we),o(qe),o(ze),o(q),o(Ye),o(He),o(st),o(Ne),o(U),o(_),o(xe),o(pe),o(Ge),o(Se),o(Ze),o(k),o(tt),o(X),o(We),o(Ke),o(G),o(Ce),o(ve),o(Te)),Et(e,ce),Et(s),Et(Le,ce),Et(Q)}}}const O_={title:"Por qué un blog en 2024",slug:"por-que-un-blog-en-2024",coverImage:"/src/assets/posts-covers/maquina-escribir.jpg",coverPosition:"normal",coverAuthor:"Patrick Fore",excerpt:"Esta es la primera entrada de un un blog en el que controlo todo su proceso generativo y contenido.",date:"2024-06-24T15:06:23.177Z",updated:"2024-06-24T15:06:23.903Z",hidden:!1,tags:["Personal"],keywords:["estático","blog"],type:"default"};class z_ extends Kt{constructor(e){super(),Jt(this,e,null,F_,Zt,{})}}const B_=Object.freeze(Object.defineProperty({__proto__:null,default:z_,metadata:O_},Symbol.toStringTag,{value:"Module"})),H_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZ0AAACZCAMAAADD5xcyAAAC8VBMVEUfHx8gICAEOV4oKChFRUUcJhzMzMzc3KqIiIj////BzMyur63/zQIgX5qrqatPT09dmMEkLiTMzKvMrH7/1wV+ICCYmJjBmF3My8YrHx+rq6ucwMyHuKnMzMGrgCDIycsgIV5+rMwfHyue4P+szMy3t7edOV4EOcAgIX7Dw8MgIm/Qo0PGzMzGu7LS26rXtF9SJB+oxsyvqa3vzKfMuJIgIDw6JB4JtObX/+Xc253cumSZXyDD9P/Hxsf/8dTMy7zc24x8fHwiOF63kVDt/f9zy/Rmmb7Lxr0EOajFo3A2NjandibIyQHb/f///fX//+gifqnOkXchY3etj3MfHzAfHyXFZiCHHx9eHx/woBm+xstypMWus73NzLdHfqrMvprYyYM/Ml8iIiJfKx7+shb3//+Is8y7u7v82rdrbGx0OV4fIE1uICD/9uAEltj24MmXrr21sa+53KrOs4i0hz+nfTxuMCBJIB/bzQS2zMywvMnMwbfI3KrMxaeioqLFsJ4naZ4xXoJBZ12rhE4fKzCNYSlSOSKHQSCkZh+XVx9+Kx/chRyruAHPx55Lc5mitJYYPIa0noApS3pXV1efeU0cTxW1xMyRt8x7qMaktsJOkLeHprY8hbIndaaRjZEgU49ag37MqXsiRW2+n2SXc1EfM0dyTCscNRegqAWM1vux06qgyKq/yqW4rJVIkJJSbIV6cHbSrFLOekM/Pz8vLy9+Wy6daiaySx6TJR6nShz/wRM0dRBxmguDnAq97P378ex1sNoEW8YVeLvMxrCxwKZegKRlo5wEVZx3qJgrYY8EWImag3nDk3UEOXWocmPKrmGaVV6ugCmPTyAwHx+jKx0jXxPz1wDq1wAQp+BgrtvauKswb5+HlphwkZimlosjgYiDg4Oki2q2gV5wVV7ikhofHxrerhDX7PiOyegkmdjrzL6rwYJQeXS2mHOGOV5dOV4rT1DBnD7EkTHCuQW24PW8xrZ+b59NYV64hSxZfRHxxgQJuLdNAAAMj0lEQVR42uybV6wNQRjHZ5VZOS5Rjjgn+gmJHF24ySFC3IQoD7rLVUN4cB/0LnrvovdOdBKdJyWERPQHRCR4QaKE4Ml/Znb328W6q+w9B/N7uGfLN7tjfjvfzM45WFooZji0fjSxGudtDx43Mpp+dZvkGoUOSwdkJ3EpwnmLFi04L28UzLBHFysY6YHsENOHVzTCJN12Em14la5zsNH00nKjYGrXLFfByBzK8MK3U3zv56ysXgtYaJAdPJEXZhtB0XYg512W4MwpFhZkJ9moSnMjMNoOY+ezFL1YWJCdjXxb3CBKRcrvyuMt52OqsAHD0VQ5Ueh2eB1mDfV2xuGGC6SgFcOr8djB3VSWwhxqVGk+fR3nk2bKY1RkWqTJOOwPWxPrYIA8fDj373ZpNV1l+4bemK8s322dM4SPquIybbuOE9sSCKLqqohGvEnDcOw86wgz4XYeslOD3zS8dvI4R3e6uppPatyHx8bgYCe0Vmm5ndzQOFKlcemD+ciIERycyFtSz6Mwl53NERHFRxuAiiQr9Z2LA8sm8Hb4qF6p3ALn/qPWyiC+I65KtG1cujdvOdtlp2sjUTPeLm4sKT0RwaVXGlRdK4Lz/rkh2RmfZXGHEaHYQcOgn3jsTHqPxxYJL4bnHc/4lLFo9lfiOXyA550y25YJLU9gStGvLj2jFEZ2uLhMYj1fnO8tkicfio2yEXFiVLZz/9gU0VGWRFAvnKiyMo5O2aYuqmHbgbjb4jbwa2U2b3VxbOhUcY2/v+/gsZWNTXZUklkvHk005VrsWiQRSnby0B1kbup7yw6gMLKjLpPEM+AtsqluO1y9Rv/h2Iak0XR/axhsw3eIEjlyp+kQRDh2Ro1Th6qSHXd1cQyOJH/7uFNdpBhArbM4X/7bVSOh4SrKEeVh6d7VuMtO0k5GeWgkCwojO0puAp+eIrjM4nz8abep7michSLn/uhYVorLVvlPJc1tZCfH0pdj2/FWF8dg/k/hP2cLc0oNO+qpjCHbEGiBuJTGbSrKpM5j9Rr3Jjv44BZkxx1GswL1iShPkQTOoAOdqF2zfDzZCEbo/vZG/1yp0HHl2MENlRfnL1VX2aGhNAQ7bI8ceU6yEIEdyiAEWkB1KYz9ipXGskZ4XRXHPHba2gHW2xKF+djxFtmIRz9vSn7TIVPyp9Wt6L4/daLaNfvn0kPja8dbXYoAIdgBewc/fz44m4UG2ZkWuWCnNmodjA00WUBaaadGXrKjdghPmI8dzwlM10YNrIQC62Mn1leZZwDqJFYuQwnKbAj1s+OtbmHYWcjODmbhQXaaruX9B+GT7FBWB9QO8Eh2kBFpuvB1mI8dKqL8l/tQt4O44fUhyF90fyVkGOYBGOTtWQFGe187TnX/QTsGXtwm7byNjV2XlpMdzH7FXNaYvjTX6AR/Mg7NjiSinvRNagEosQSFJBTmY8dbBJ2mFmYJuF69mjSI4/68yVgxh+b95RzanlE3yf2uHdwUfc1bXYqIzQzHzicMOwtZaJAdsH0dF2vU1bBGTXaw/KbeAzFgY8ytMqIPn6oGlDbYwTI1Fk/F+19vJCAFhfnZoSKWBzkByeOiX5CdqZViI+T7p1OLPhE+Za7xfTvLavJ6fXLc1XUiUB/s/SbpXaNWE2GsjGC29WSOYwdMx7IM1lAGCX9y5WSgavbqG/AKmS+6wERYrffEagAK87XjLZKsxEerTugsFCgDrTe4Voimi6rV64oS37MDlqzm6CJUXYpIiHT399vJJISBzIIFQdtJC9oOoe1oOz+DtkNoO9rOz6DtZDYsCNpOMLSd/woWBG0nGNrOfwULgrYTDG3nv4IFQdsJhrbzX8GCoO0E41+xowkEc1P0z1LCjftEyZL+YRoXodopS/ja8YZpO8S3dtifpERxogRzUbKkf5jGhbbz16DtZDLaTiaj7WQy4dhZNf601ey7rnfu4dhJXOt8LNcKO/98kLYTlp2tB+r42oGc6MIC7OzpGO2Vre2EZKey6WtHtTzZOemxky3DlEFtJw129kYHD7KbvWnXzqdp3DnS+ZgTdvZetIe2U+h27t7LwqhTgB1wPnpmkLZToJ3XS+ub5oAxt0Wjp+bNulLfTI2OM9B96wHTTOWMk9szRFTqxiDGqo80bZrJUy9F2I5BVrMvivYq7rZzx22nhysBjo/20HYKsrMVrQ5a9ZRdIme/3PuInW6VTUkDoaeLjILFBV47kHPZOjNWDSj3s+4Em1Gfiw7O1nZ+bKfLZHPA7PisGS+UHcgYO6uy2awhY4fMVmNuz9o62Xwr7DSZOYeJnTeezCa9pXKyu8/YZx6NsxKqzYPZuXs/ekfb+bEdmBjHbGCnTlw0OHrSsH2pDgw8rg9VNpfNBl/ZSVSGPbB9cqsKaHYktqdB30Y7RntoOz+0U31fah4jO6IDiJEFdrpMHpDP7B2y08xtR50+JUeY/bhQCdnkAe1A5EJt50cgsVHbe6dij00bGSFmBeAbO8iMFr9gp5e282M79YPZOQQ337dTX9sJi6LJkan5Xjs02g/IZRYYhMwBx+M+mc3RqzPbH7bTdD+Gmu/aqb6PvCF/yeGp+xXHzlGmwAVuMgs9K/jDdooeMs0bx+Pd7Rk12YGJVmIWPWPpG/kGerRh9xkX7cx2yEyNyWb2Zs4cvK0+vMF+bkaNN6NT2s6P7djvnK3IjsWu/aYCxxJW1OL6yk7rkc4gpC6gdkrIt5iT+m30T9nBQsxFuZITt+wQsx4dMHEGPQPbV2TQdGVHLf9AiL3gA287xtJKThA7ezrqlZzC//bt7L2sk0HsoOs01HYK0Q59g+BvhyRGT+pvEArVDn375mtHf/uWVjuy5Z8WZEd/c50eO+Du+NMF2Tnfa5z+1Yf+xdTfTNE/if6V+++j/4dIJsPSQ/timgCwtNC+iCYILC0UK6LRdv52WBC0nWBoO/8VLAjaTjC0nf+KL+zdsW7aQBjA8eMbIn0vgKWulmDswEAHC6mRLXmx/QRVSySrtBL20AdIH6Gv0KoLW58ACAsSFWlGYOjQDG0ypEulrv3OZ6leAl8Wi5y/n5RgOMPAX+c7WFAcUodH6jSK4pA6PFKnUVT9TJ11gBW9UxBHVKf7rAOlyp3V/GeKOHs5BOLGzvKXj/FOp+tjb72NMM6vgejHMX5Bx5k/eFu+SJSAZRRHfXUCNEY6iIu7KWrvQNfJzWBO5RYeFsaf4SIa34Gmj8AyqmbVOt0IC0nnf528/RfeTzD+AVRHt/iydHHwm+roGN8/bVMa+uDS4XC19ali6CXmuXoWgWUUT11zxwg9fApUx6xHmZ90ijqD63IoS5NLIDd0G05jh6YNBezjCCyj+OqvYy5w3cjUGV8BcWkooIHyvG/0gAMbmmx6ZQLLKJ66rmxrvSsgpk717e4jrf6liRkoU9HfJPZfFQeWUTw1zR1aUMjBOm61Dk2Z0Lv18uEkdsAyiqO2OlmKt2/0FWt/ncCsMPo8BzJ/lPlOkFy6yRVYRrHV8Wk0MAmWB+ps0OwKNimtRRfRKBjfZenOoxMso2rA/yanj/H56Woe4f46oVfsqOc+9vSdWTTS//18CJZRHLXVWURY8PfXgRsfC7pHOEX8CDBB+zbUR1YHFlPEOP8aHKgDiz8p4ux8CMRFveBkqX0b6mOrI6TOo6E4pA6P1GkUxSF1eKROoygOqcMjdRpFPZj8sti9bPllsZaQOo+d4pA6PFKnURSH1OGROo2iOKQOj9QpPX/dbtlPcRxhnScnUqckdepwTHXO2icV7bPWQ0idf+zdPY6DMBCGYUYbjSJFwh0FjSsKH4LCrY9Bg1xyAV+CnjOsBAfKUdbESdakchMLwfcUSCNR+RXmp+FrQh3RCHqKhrq1pmpZ3R+1ZqdYNpYCc+0lq2omofilpkMrUmSsw9eGPan9MPa8kvdwTphYo86XhTqvVVYiqiOlu5iSB0PLjYeR5kqqkYjMwOq+dKJau2Fn28h37cj1FmRbJfyh9+dR53giIh0iBagTyVnHdeusfJ3qGUA/9i8X50CdjVw7W7zoZXx3MQ1rekOdjVzXTrzodVxnRp0EGetUmwA1T/SGOp+yvI3Gi67lYOht4v5C/0p2dHxFDulfcuI6l54Hu9Csb9ZPo+L+d6HXE/XErV7o6IpU+euQbfmhteTp5xTqiB5vo7H8dUg45dvc7A+txnVSk6EwlS3qxPb0jfocihSokwZ1TqVIgTppUOdUihSokwZ1TqVIgTppjlKnI9htHWOQZ7918GexPf9ZDAAAAAAAAAAAAAD+2oNDAgAAAABB/1+bfAEAALAAIub1vVvcopMAAAAASUVORK5CYII=",k_=""+new URL("../assets/intellisense-2.EFI6DBq0.png",import.meta.url).href,V_=""+new URL("../assets/intellisense-3.B4K9i5PN.png",import.meta.url).href;function G_(i){let e;return{c(){e=gt("Era")},l(t){e=_t(t,"Era")},m(t,n){l(t,e,n)},d(t){t&&o(e)}}}function j_(i){let e=`interface PointerOptions {
    rect: CommonOptions & SVGOptions & RectOptions
    arrow: CommonOptions & SVGOptions & ArrowOptions
}`,t;return{c(){t=gt(e)},l(n){t=_t(n,e)},m(n,a){l(n,t,a)},p:Ut,d(n){n&&o(t)}}}function W_(i){let e,t=`He estado aprovechando los tiempos muertos (<em>a.k.a todo el día</em>) para
desarrollar una biblioteca que permita señalar elementos en una aplicación web
de manera sencilla y de paso hacer experimentos para arrojar algo de luz sobre
las herramientas de tree shaking actuales (spoiler: son lo mismo que hace 8
años pero con esteroides).`,n,a,s=`Aunque lo que comenzó como toy/pet project para un caso de uso sencillo, al final se
ha convertido en un lanzamiento oficial con
<a href="https://alexvgjm.github.io/point-it-out-docs/" rel="nofollow">su documentación</a> y todo.
Durante el desarrollo me he obsesionado con el tamaño del paquete 🌞. No
pretendo ser casposo, esa frase va a seguir sonando turbia por
mucho que la modifique.`,c,r,u=`Esperaba que Point it out no pasara de los 5 KB gzipped, lo que para una
biblioteca que tendrá capacidad para generar distintos tipos de
imágenes SVG procedimentalmente es más que aceptable, pero siempre hay margen
para mejorar.`,d,p,v="🍂Tree Shaking",f,g,E,S,h,m,R,P=`Algunas cositas siguen siendo muy útiles, como las funciones de throttling y
debouncing, pero, ¿instalarías tremenda biblioteca con un paquete de
unos 25 KB (min + gzipped) por unas pocas de sus decenas de características
(muchas ya obsoletas)?`,N,W,I=`Para el desarrollador no supone gran problema descargar todo un paquete más,
es algo que haces una vez. Lo que realmente preocupa es que cada usuario tuviera que descargar eso, perjudicando la carga del sitio.`,z,F,A=`Antes no era tan problemático porque estas bibliotecas eran muy comunes y porque
se distribuían principalmente por CDN. Con muy alta probabilidad, algún usuario
que pasara por tu sitio ya habría pasado anteriormente por otro que usara la
misma biblioteca, teniéndola en caché de su navegador.`,T,O,Z=`Pero ahora tampoco es un problema, porque tenemos bibliotecas tree-shakeables
<em>(en realidad desde hace como 9 años, pero ahora es cuando más compatibilidad
con los módulos ES tenemos)</em>. De hecho Lodash tiene una versión tree-shakeable en ESM.`,K,Y,se="En qué consiste el tree shaking y los tree-shakeables",re,de,J=`Cuando generas el bundle de tu web, aplicación, librería o lo que sea que estés
bundleando, los bundlers modernos tiran de herramientas como rollup para
minificar el resultado y de paso realizar “dead code elimination”.`,De,ae,Me=`La “dead code elimination” es autoexplicativa. Elimina el código que nunca es
accedido por evaluación de referencias y otras técnicas. Nada nuevo, esta
es una de las responsabilidades típicas de los optimizadores en compiladores.
Lo que es relativamente nuevo (en el ecosistema web), es la cultura de construir
bibliotecas modulares orientadas a esto.`,Je,je,ie=`En el mundo de JavaScript y aplicado especialmente a dependencias externas,
es decir, a las bibliotecas que utilizas, el dead code elimination se conoce
como “tree shaking”. Es un concepto bastante gráfico si piensas en un
árbol de dependencias que sacudes y del que caen todas las hojas y ramas
muertas. Por tanto se extrae solo aquellas partes necesarias en lugar de
mandarle al usuario todo el tocho.`,Ee,Re,we="Diseño, DX y Tree Shaking",ke,qe,ze=`No todos los módulos ES son automáticamente tree-shakeables, deben separar muy
bien sus características y aplicar correctamente SRP para que tenga sentido.`,at,q,Ye=`Creí que mi biblioteca no sería apta para tree-shaking. La
idea era hacer una única función punto de entrada muy bien adaptada tirando
de tipado e ideas de DX opinionadas a más no poder. En un IDE con capacidad
para manejar un language-server de TypeScript (casi todos hoy día), al
empezar a escribir el primer parámetro de la función create
(en la versión 0.1.11 al menos), una string, te daría dos opciones:`,nt,He,Le,st,Ne=`Esto ya me permite un mecanismo que me evite crear dos funciones por
separado como createArrow y createRect. A lo mejor te preguntas cosas como,
“¿Y eso qué tiene de malo?”, “¿no sería lo correcto cumpliendo con el principio
de responsabilidad única (SRP)?“.`,Fe,U,_=`Internamente no se está rompiendo el SRP, existen las dos funciones (en realidad
peor, existen 2 clases distintas) con implementaciones bien separadas. Una cosa
es la API y otra la implementación. A diferencia de la UX, la DX puede ser algo
más opinionada y relacionada al estilo de un equipo. Me gusta que solo exista
una sola función para crear y que sea lo más guiada posible. Pocas funciones muy
configurables con muy pocas opciones obligatorias.`,H,xe,pe=`El segundo parámetro de la función son sus opciones. Tanto
arrow como rect son los dos primeros tipos de punteros disponibles en la
librería, y ambos son SVGs, por tanto tienen opciones comunes por ser punteros y
por ser SVGs:`,ue,Ge,Se,Pe,Ze=`Vemos que la única opción obligatoria es target, por eso aparece la primera, las
otras están en orden alfabético. Si en lugar de ‘rect’ hubiéramos escrito ‘arrow’,
las opciones serían:`,k,he,tt,X,me=`Nótese que han desaparecido las opciones de rect y han aparecido otras exclusivas
de arrow. Solo por haber cambiado una string en el primer parámetro.`,We,Ke,ct=`Esto no es un caso avanzado de TypeScript, en realidad es una definición muy
simple de momento:`,G,Ce,be,ve,Te="Espera… ¿y el tree shaking cómo se lleva con esto?",$e,Qe,lt=`Y ahí es a donde quería llegar. Creí que no tendría más remedio que pasar por
el aro y volver a la tradición.`,ut,et,dt=`En algún punto de mi librería hay arcaicos if que evalúan la string del
tipo, una comparación cutre para decidir qué clase usar. ¿Serían las herramientas
de eliminación de código tan avanzadas como para detectar eso?, si no
ejecutan el código, y al fin y al cabo TypeScript “no existe”.`,pt,Q,Ue=`Pues resulta que he creado un proyecto de JavaScript vanilla con Vite,
instalado Point it out, creado un rect, hecho una build, y en el .js bundleado
no haber ni rastro de arrows, ni de sus propiedades ni su clase ni na’.
Repito el proceso con solo arrows y veo que ni rastro de rect.`,vt,ce,Ie=`Así que funciona asombrosamente bien, parece que esto es más avanzado de lo que
creía. No tengo ni idea de qué estrategia seguirá, pero de momento el poder
continuar con mi diseño sin consecuencias técnicas es una muy buena noticia.`,At;return S=new Wc({props:{$$slots:{default:[G_]},$$scope:{ctx:i}}}),He=new Ma({props:{src:H_,alt:"Sugerencia de VSCode al empezar a escribir la función create(). Se aprecia que sugiere tanto arrow como rect."}}),Ge=new Ma({props:{src:k_,alt:"Sugerencia de VSCode al escribir las opciones de la función create para el tipo rect",figCaption:"Opciones comunes para todos los punteros y para aquellos de tipo SVG, además de las opciones exclusivas de 'rect'. <small>NOTA: los simbolitos son de accesibilidad para personas con algún tipo de deficiencia de visión de color.</small>"}}),he=new Ma({props:{src:V_,alt:"Sugerencia de VSCode al escribir las opciones de la función create para el tipo rect",figCaption:"Opciones comunes además de las opciones exclusivas de 'arrow'."}}),Ce=new Fn({props:{language:"TypeScript",$$slots:{default:[j_]},$$scope:{ctx:i}}}),{c(){e=x("p"),e.innerHTML=t,n=y(),a=x("p"),a.innerHTML=s,c=y(),r=x("p"),r.textContent=u,d=y(),p=x("h2"),p.textContent=v,f=y(),g=x("p"),E=gt("Estaba acordándome de la vieja Lodash. "),Mt(S.$$.fragment),h=gt(` Es una
famosa biblioteca que brinda utilidades para aplicar programación
funcional a muchas partes de JavaScript.`),m=y(),R=x("p"),R.textContent=P,N=y(),W=x("p"),W.textContent=I,z=y(),F=x("p"),F.textContent=A,T=y(),O=x("p"),O.innerHTML=Z,K=y(),Y=x("h3"),Y.textContent=se,re=y(),de=x("p"),de.textContent=J,De=y(),ae=x("p"),ae.textContent=Me,Je=y(),je=x("p"),je.textContent=ie,Ee=y(),Re=x("h2"),Re.textContent=we,ke=y(),qe=x("p"),qe.textContent=ze,at=y(),q=x("p"),q.textContent=Ye,nt=y(),Mt(He.$$.fragment),Le=y(),st=x("p"),st.textContent=Ne,Fe=y(),U=x("p"),U.textContent=_,H=y(),xe=x("p"),xe.textContent=pe,ue=y(),Mt(Ge.$$.fragment),Se=y(),Pe=x("p"),Pe.textContent=Ze,k=y(),Mt(he.$$.fragment),tt=y(),X=x("p"),X.textContent=me,We=y(),Ke=x("p"),Ke.textContent=ct,G=y(),Mt(Ce.$$.fragment),be=y(),ve=x("h3"),ve.textContent=Te,$e=y(),Qe=x("p"),Qe.textContent=lt,ut=y(),et=x("p"),et.textContent=dt,pt=y(),Q=x("p"),Q.textContent=Ue,vt=y(),ce=x("p"),ce.textContent=Ie},l(ne){e=b(ne,"P",{"data-svelte-h":!0}),C(e)!=="svelte-1fujiav"&&(e.innerHTML=t),n=M(ne),a=b(ne,"P",{"data-svelte-h":!0}),C(a)!=="svelte-pu5b15"&&(a.innerHTML=s),c=M(ne),r=b(ne,"P",{"data-svelte-h":!0}),C(r)!=="svelte-1twu8y9"&&(r.textContent=u),d=M(ne),p=b(ne,"H2",{"data-svelte-h":!0}),C(p)!=="svelte-g7u8rd"&&(p.textContent=v),f=M(ne),g=b(ne,"P",{});var B=Gt(g);E=_t(B,"Estaba acordándome de la vieja Lodash. "),St(S.$$.fragment,B),h=_t(B,` Es una
famosa biblioteca que brinda utilidades para aplicar programación
funcional a muchas partes de JavaScript.`),B.forEach(o),m=M(ne),R=b(ne,"P",{"data-svelte-h":!0}),C(R)!=="svelte-1kopbf0"&&(R.textContent=P),N=M(ne),W=b(ne,"P",{"data-svelte-h":!0}),C(W)!=="svelte-1fyk4rs"&&(W.textContent=I),z=M(ne),F=b(ne,"P",{"data-svelte-h":!0}),C(F)!=="svelte-6x6eyz"&&(F.textContent=A),T=M(ne),O=b(ne,"P",{"data-svelte-h":!0}),C(O)!=="svelte-9ajmea"&&(O.innerHTML=Z),K=M(ne),Y=b(ne,"H3",{"data-svelte-h":!0}),C(Y)!=="svelte-wkrciz"&&(Y.textContent=se),re=M(ne),de=b(ne,"P",{"data-svelte-h":!0}),C(de)!=="svelte-1av9y9e"&&(de.textContent=J),De=M(ne),ae=b(ne,"P",{"data-svelte-h":!0}),C(ae)!=="svelte-135wybo"&&(ae.textContent=Me),Je=M(ne),je=b(ne,"P",{"data-svelte-h":!0}),C(je)!=="svelte-hd5dc4"&&(je.textContent=ie),Ee=M(ne),Re=b(ne,"H2",{"data-svelte-h":!0}),C(Re)!=="svelte-168zpit"&&(Re.textContent=we),ke=M(ne),qe=b(ne,"P",{"data-svelte-h":!0}),C(qe)!=="svelte-1phfsg3"&&(qe.textContent=ze),at=M(ne),q=b(ne,"P",{"data-svelte-h":!0}),C(q)!=="svelte-fiagbg"&&(q.textContent=Ye),nt=M(ne),St(He.$$.fragment,ne),Le=M(ne),st=b(ne,"P",{"data-svelte-h":!0}),C(st)!=="svelte-rqe7j"&&(st.textContent=Ne),Fe=M(ne),U=b(ne,"P",{"data-svelte-h":!0}),C(U)!=="svelte-1pv97ce"&&(U.textContent=_),H=M(ne),xe=b(ne,"P",{"data-svelte-h":!0}),C(xe)!=="svelte-kmg0ao"&&(xe.textContent=pe),ue=M(ne),St(Ge.$$.fragment,ne),Se=M(ne),Pe=b(ne,"P",{"data-svelte-h":!0}),C(Pe)!=="svelte-8ubglo"&&(Pe.textContent=Ze),k=M(ne),St(he.$$.fragment,ne),tt=M(ne),X=b(ne,"P",{"data-svelte-h":!0}),C(X)!=="svelte-yj2hnq"&&(X.textContent=me),We=M(ne),Ke=b(ne,"P",{"data-svelte-h":!0}),C(Ke)!=="svelte-1ebwcib"&&(Ke.textContent=ct),G=M(ne),St(Ce.$$.fragment,ne),be=M(ne),ve=b(ne,"H3",{"data-svelte-h":!0}),C(ve)!=="svelte-sek9rw"&&(ve.textContent=Te),$e=M(ne),Qe=b(ne,"P",{"data-svelte-h":!0}),C(Qe)!=="svelte-1lpsewo"&&(Qe.textContent=lt),ut=M(ne),et=b(ne,"P",{"data-svelte-h":!0}),C(et)!=="svelte-1sw6anc"&&(et.textContent=dt),pt=M(ne),Q=b(ne,"P",{"data-svelte-h":!0}),C(Q)!=="svelte-1dizd6g"&&(Q.textContent=Ue),vt=M(ne),ce=b(ne,"P",{"data-svelte-h":!0}),C(ce)!=="svelte-1d7x851"&&(ce.textContent=Ie)},m(ne,B){l(ne,e,B),l(ne,n,B),l(ne,a,B),l(ne,c,B),l(ne,r,B),l(ne,d,B),l(ne,p,B),l(ne,f,B),l(ne,g,B),It(g,E),Ct(S,g,null),It(g,h),l(ne,m,B),l(ne,R,B),l(ne,N,B),l(ne,W,B),l(ne,z,B),l(ne,F,B),l(ne,T,B),l(ne,O,B),l(ne,K,B),l(ne,Y,B),l(ne,re,B),l(ne,de,B),l(ne,De,B),l(ne,ae,B),l(ne,Je,B),l(ne,je,B),l(ne,Ee,B),l(ne,Re,B),l(ne,ke,B),l(ne,qe,B),l(ne,at,B),l(ne,q,B),l(ne,nt,B),Ct(He,ne,B),l(ne,Le,B),l(ne,st,B),l(ne,Fe,B),l(ne,U,B),l(ne,H,B),l(ne,xe,B),l(ne,ue,B),Ct(Ge,ne,B),l(ne,Se,B),l(ne,Pe,B),l(ne,k,B),Ct(he,ne,B),l(ne,tt,B),l(ne,X,B),l(ne,We,B),l(ne,Ke,B),l(ne,G,B),Ct(Ce,ne,B),l(ne,be,B),l(ne,ve,B),l(ne,$e,B),l(ne,Qe,B),l(ne,ut,B),l(ne,et,B),l(ne,pt,B),l(ne,Q,B),l(ne,vt,B),l(ne,ce,B),At=!0},p(ne,[B]){const Xe={};B&1&&(Xe.$$scope={dirty:B,ctx:ne}),S.$set(Xe);const Nt={};B&1&&(Nt.$$scope={dirty:B,ctx:ne}),Ce.$set(Nt)},i(ne){At||(ht(S.$$.fragment,ne),ht(He.$$.fragment,ne),ht(Ge.$$.fragment,ne),ht(he.$$.fragment,ne),ht(Ce.$$.fragment,ne),At=!0)},o(ne){mt(S.$$.fragment,ne),mt(He.$$.fragment,ne),mt(Ge.$$.fragment,ne),mt(he.$$.fragment,ne),mt(Ce.$$.fragment,ne),At=!1},d(ne){ne&&(o(e),o(n),o(a),o(c),o(r),o(d),o(p),o(f),o(g),o(m),o(R),o(N),o(W),o(z),o(F),o(T),o(O),o(K),o(Y),o(re),o(de),o(De),o(ae),o(Je),o(je),o(Ee),o(Re),o(ke),o(qe),o(at),o(q),o(nt),o(Le),o(st),o(Fe),o(U),o(H),o(xe),o(ue),o(Se),o(Pe),o(k),o(tt),o(X),o(We),o(Ke),o(G),o(be),o(ve),o($e),o(Qe),o(ut),o(et),o(pt),o(Q),o(vt),o(ce)),Et(S),Et(He,ne),Et(Ge,ne),Et(he,ne),Et(Ce,ne)}}}const $_={title:"Tamaños que no importan: tree-shakeables",slug:"tamano-no-importa-tree-shakeables",coverImage:"/src/assets/posts-covers/tree-shaking.jpg",coverAuthor:"Edoardo Botez",excerpt:"Arrojo un poco de luz a esto del tree-shaking en módulos ECMAScript.",date:"2024-08-11T15:06:23.177Z",updated:"2024-08-11T15:06:23.903Z",hidden:!1,tags:["DX","Front end"],keywords:["tree-shake","side-effects","biblioteca"],type:"default"};class X_ extends Kt{constructor(e){super(),Jt(this,e,null,W_,Zt,{})}}const Y_=Object.freeze(Object.defineProperty({__proto__:null,default:X_,metadata:$_},Symbol.toStringTag,{value:"Module"}));function Z_(i){let e,t="Proyectos y sitios que no podré continuar, mantener, guardar o lo que sea. Algunos públicos, otros sin repositorio y otros en repos privados en GitHub o GitLab. Muchos son tonterías y otros los conservaba más por razones históricas.",n,a,s="Si te interesa algo de esto para lo que sea, avísame:",c,r,u=`<li>El código fuente de este sitio web (el repo con SvelteKit), incluyendo de este blog y toda la configuración de CI/CD en Github Actions. Si lo vas usar, evidentemente cambia el nombre y contenido.</li> <li>El código fuente y todo el repo de lo que haya en <a href="https://alexvgjm.github.io" rel="nofollow">alexvgjm.github.io</a></li> <li>El sitio <a href="https://d2runewords.com" rel="nofollow">d2runewords.com</a> (si quieres también el dominio eso ya corre de tu cuenta).</li> <li>Un intento de motor de videojuegos 2D con PixiJS como motor de renderizado.</li> <li>Un recién iniciado sistema de partículas custom en WebGL para Three.js</li> <li><a href="https://alexvgjm.github.io/point-it-out-docs" rel="nofollow">Point it out</a>. NOTA: recibió recientemente un refactoring muy duro en local y se aleja más de lo actualmente publicado. Tiene más características y una arquitectura distinta a la publicada. Ya se acerca más a una alpha.</li> <li>Prototipos de aplicaciones orientadas a terapia visual / fototerapia (vanilla js y ts).</li> <li>Distintos prototipos de aplicaciones interactivas en Vue, incluyendo una especie de juego roguelike y un idle.</li> <li>Viejos plugins de IRC de por lo menos 2007 ya obsoletos e innecesarios, que tenían de propósito evadir el escudo dorado chino de manera simple.</li> <li>Viejo código en C y en otro extraño lenguaje híbrido muy similar a Objective-C. Principalmente homebrew para PSP y otro material de pruebas. También incluye
algo de ensamblador para la especie de MIPS R4000 de la PSP.</li>`,d,p,v=`Los publicados en GitHub tienen algún tipo de licencia libre
en cualquier caso, así que tienes libertad para hacer un fork de lo que quieras
de todas formas aunque no te lo traspase oficialmente.`;return{c(){e=x("p"),e.textContent=t,n=y(),a=x("p"),a.textContent=s,c=y(),r=x("ul"),r.innerHTML=u,d=y(),p=x("p"),p.textContent=v},l(f){e=b(f,"P",{"data-svelte-h":!0}),C(e)!=="svelte-1rsxxnj"&&(e.textContent=t),n=M(f),a=b(f,"P",{"data-svelte-h":!0}),C(a)!=="svelte-1be2y5s"&&(a.textContent=s),c=M(f),r=b(f,"UL",{"data-svelte-h":!0}),C(r)!=="svelte-hik07y"&&(r.innerHTML=u),d=M(f),p=b(f,"P",{"data-svelte-h":!0}),C(p)!=="svelte-xxedhx"&&(p.textContent=v)},m(f,g){l(f,e,g),l(f,n,g),l(f,a,g),l(f,c,g),l(f,r,g),l(f,d,g),l(f,p,g)},p:Ut,i:Ut,o:Ut,d(f){f&&(o(e),o(n),o(a),o(c),o(r),o(d),o(p))}}}const K_={title:"Traspaso proyectos (gratis)",slug:"traspaso-proyectos",excerpt:"Tengo proyectos que no puedo continuar, mantener, guardar o lo que sea. Si quieres alguno pídelo.",date:"2025-02-04T01:26:23.177Z",updated:"2025-02-04T01:26:23.903Z",hidden:!1,tags:["Personal"],keywords:["estático","blog"],type:"default"};class J_ extends Kt{constructor(e){super(),Jt(this,e,null,Z_,Zt,{})}}const Q_=Object.freeze(Object.defineProperty({__proto__:null,default:J_,metadata:K_},Symbol.toStringTag,{value:"Module"}));function ex(i){let e;return{c(){e=gt(`NOTA: no he notado diferencias de género en este ámbito, más allá de
una mayor cantidad hombres. Asume que cuando digo directivo digo también 
directiva/e.`)},l(t){e=_t(t,`NOTA: no he notado diferencias de género en este ámbito, más allá de
una mayor cantidad hombres. Asume que cuando digo directivo digo también 
directiva/e.`)},m(t,n){l(t,e,n)},d(t){t&&o(e)}}}function tx(i){let e,t=`En la <a href="/blog/autonomia-ajenidad-1">primera parte</a> de estas entradas que originalmente
(y erróneamente) titulé “mi problema con el trabajo”, hablaba de esa trampa de
la ilusión de la libertad como supuesto autónomo.`,n,a,s=`También hablaba de lo injusto que me parece el concepto de ajenidad aplicado a
los trabajos creativos, eso de que alguien se adueñe de los resultados de tu
creatividad de manera permanente por un salario puntual incluso tras el cese
de la relación laboral.`,c,r,u=`Nombré excepciones, comenté que incluso con ajenidad de por medio, muchas veces no se
produce esa apropiación de la creatividad y que muchas empresas fomentan
el divulgar publicamente sobre sus procesos de desarrollo para manifestar
excelencia técnica. Y en realidad, esas excepciones no son tan infrecuentes.`,d,p,v=`Pero hay una visión un tanto “condescendiente” con la empresa capitalista en
este sector. Y esto es debido al trato supuestamente “privilegiado” que se da
a los profesionales de la ingeniería de software. Quiero hablar de ello.`,f,g,E="Como siempre, esto es un blog personal y esto es una opinión no menos personal.",S,h,m="Los dos tipos de consultoría",R,P,N=`Primero tengo que explicar en qué consiste mi trabajo y qué me ha llevado a
conocer a tanta gente y entornos en los últimos 3 años.`,W,I,z=`A ver, no conozco cuántas definiciones de consultoría existen, pero sí es
notable dos tipos de actividades diferenciadas.`,F,A,T="La consultoría IT más común",O,Z,K=`Es la que define a las empresas “consultoras” IT, entendidas como empresas de
desarrollo de soluciones IT a medida. Aquellas que se encargan de todos los
procesos enfocados a desarrollar una solución tecnológica adaptada a las
necesidades de una empresa (incluyendo al estado).`,Y,se,re=`Suena muy bonito, pero aunque hay consultoras excelentes con personal muy
cualificado, hay muchas otras que
gozan de una imagen justificadamente mala, las grandes consultoras
internacionales son muchas veces entendidas también como cárnicas. Una cárnica
en este sector es denominada así por su tendencia a contratar programadores a
decenas, centenas o incluso millares (“por kilos”), como si de carne se tratara.`,de,J,De=`Por lo general hacen muchos convenios con academias y les importa poco el nivel
y el desarrollo que puedan obtener sus profesionales, pues en realidad el que
sean o no productivos a veces ni importa.`,ae,Me,Je=`Entre los objetivos de esta contratación masiva se encuentra el de manifestar 
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
resultados 🙂).</small>`,je,ie,Ee=`Hay otras razones, como hacer un filtrado masivo como quien filtra kilos
de tierra de río para sacar cantidades insignificantes de oro, una estrategia
de búsqueda de talento habitual en grandes tecnológicas, pero eso da para otras
entradas.`,Re,we,ke=`Esto es una realidad bastante obvia cuando te acercas a puestos de dirección o
si como autónomo has estado pendiente al BOE y licitaciones, pero es como si a
nadie le gustara hablar de ello 🤷‍♂️.`,qe,ze,at="La consultoría profesional",q,Ye,nt=`No sé cómo llamarla. Algunos la llaman consultoría clásica sin más, y otros
defienden que debería llamarse “formación especializada” y ya.`,He,Le,st=`Es a lo que me dedico. No se aleja de la definición de la primera, con la
diferencia de que por lo general te integras al entorno del cliente y tu
actividad tiene lugar en él o al menos compromete a su plantilla.`,Ne,Fe,U=`En esta actividad se ofrecen los mismos servicios de consultoría pero es más
habitual que se te valore por tu experiencia y habilidad, especialmente en
términos de formación, comunicación y dinámica de equipo. Como además te
integras a un grupo profesional, acabas ejerciendo de mentor y comunicándote
directamente con todos transmitiendo como mejor puedas tus conocimientos y
experiencias previas ante problemas similares.`,_,H,xe=`Es un trabajo excelente porque conoces a mucha gente, te obligas a cargarte
prejuicios, a volverte más tolerante y a buscar el mejor lado de toda persona.
A nivel técnico perfilas tus habilidades de análisis al extremo, dado que cada
nuevo entorno implica auditar y analizar soluciones custom que llevan
desarrollando años otras personas, a fin de identificar los puntos críticos y
qué está produciendo los problemas por los que te requieren.`,pe,ue,Ge=`Por otra parte, no pocas veces eres tú quien más aprende. Conocer tantos nuevos
entornos y soluciones desarrolladas por otros hace que empieces a ver patrones
continuos y a identificar aquello que está fuera de la norma para bien, a
toparte con soluciones brillantes y excepcionales, normalmente provenientes de
alguna persona muy ingeniosa que ya no forma parte del equipo, alguien que
se fue en búsqueda de desafíos mayores, dejando su legado.`,Se,Pe,Ze=`Es la forma más directa de asumir desafíos continuos y de crecer hasta cierto
punto. Eso sí, con una responsabilidad que puede ser muy estresante. No es
especialmente cómodo llegar a un equipo como un supuesto experto y saber que
todos esperan que muestres soluciones a problemas que llevan teniendo durante
años. Más sabiendo que muchas veces serás uno más en equipos de
profesionales que no tienen un nivel inferior a ti y que ciertamente no te
necesitan, sino que tienen a directivos incompetentes que confían antes en el
gurú extranjero de turno que en sus propios empleados.`,k,he,tt=`Es por esto que mi actividad suele centrarse en directivos sin formación técnica.
Pero no es fácil
hacer comprender la naturaleza de este trabajo a personas que no han picado una
sola línea de código y lleva a cargo de programadores más de una década,
creyendo que conocen muy bien cómo funciona el desarrollo de software y sin
pensar ni por un segundo que el problema de un proyecto pueden ser ellos mismos.`,X,me,We="Tratamiento para directivos",Ke,ct,G,Ce,be=`Un directivo (o jefe de proyecto) de software sin nociones técnicas no comprende que el error
es una parte natural de este arte. No comprende que es necesario dedicar el tiempo
que haga falta a asegurar una correcta testabilidad y realizar refactoring, y que
aún así seguirá siendo necesario la monitorización y seguirá habiendo errores.`,ve,Te,$e=`Un directivo que no comprende los procesos de desarrollo solo ve que el producto
no está cambiando de cara al usuario, no tiene capacidad para saber si los
empleados están haciendo realmente algo o les están mintiendo en su cara mientras
dicen que están mejorando el código.`,Qe,lt,ut=`Aún peor, muchos asumen que si su equipo lleva una semana haciendo refactoring
creen que es porque hicieron cosas mal y que ahora están corrigiendo errores,
cuando en un primer momento tendrían que haberlo hecho “bien”.`,et,dt,pt=`Muchos ven a equipos de ingeniería como meros obreros que tienen que decidir
algo, planificarlo y hacerlo “bien”, no comprenden la naturaleza del error, la
deuda técnica, la flexibilidad y dinamismo que debe
haber en los procesos de desarrollo.`,Q,Ue,vt=`Un directivo así solo mete presiones y no tiene capacidad para determinar el
estado ni el rumbo del proyecto, no le salva ni el delegar porque nunca
podrá comprender el feedback que pueda recibir de la persona en la que delega.`,ce,Ie,At=`Lo mejor que puede pasar con un directivo así es que delegue completamente y con
fé ciega, pero entonces se acaba dando cuenta de que su papel es
completamente irrelevante, y no solo él se da cuenta de ello. Cuando nadie
necesita un capitán, el capitán solo es un estorbo, un imbécil con autoridad
que además suele cobrar más.`,ne,B,Xe=`Pero cuando no delegan es mucho peor, ya no solo son dispensables, entorpecen a
todo el equipo, fomentan malas prácticas por exigir resultados visibles cuanto
antes y generan una fuerte sensación de impotencia, ansiedad y estancamiento
profesional en todos los desarrolladores. Por no decir que no suelen asumir ni una
sola de las responsabilidades que deben asumir como directivos de un proyecto
de software, porque la mayoría requiere algunos conocimientos técnicos base.`,Nt,qt,cn=`Por suerte, hasta ahora todos los directivos con los que he llegado a toparme
en mi actividad han podido comprender la importancia y los problemas que
supone su incompetencia técnica, y todos han podido ver los errores y tremendas
estupideces que estaban diciendo y cometiendo tras una correcta formación, pero
desde luego no es algo especialmente fácil.`,Vt,w,ee=`La comunicación con directivos puede ser complicada, se necesita
otro lenguaje, se necesita otro tono y se necesitan enfoques muy prácticos,
directos, precisos y tajantes. Es normal, recordemos que no dejan de ser seres
humanos que en su caso han estado en posiciones de poder, a veces demasiado tiempo.`,le,oe,te=`Es muy frecuente que en su trayectoria profesional coman discusiones muy absurdas con
personas que se quejan sin dar soluciones. Es frecuente que sean ellos los que
deban decir “hasta aquí” y zanjar asuntos aún ante el descontento de alguien, y
esto acaba por generar conductas a veces algo poco empáticas.`,Oe,Be,V=`El trabajo de un
consultor cuando debe tratar con directivos se acerca a partes iguales al de
consejero real y al de dom/dominatrix: tener la sutileza para provocar cambios
sin cuestionar su autoridad delante del equipo, y tener la firmeza para darle
algunos latigazos en privado cuando sea necesario, a lo que suelen estar
sorprendentemente dispuestos, especialmente cuando son ellos los que han pagado
por tu servicio para mejorar la situación laboral.`,fe;return ct=new ti({props:{$$slots:{default:[ex]},$$scope:{ctx:i}}}),{c(){e=x("p"),e.innerHTML=t,n=y(),a=x("p"),a.textContent=s,c=y(),r=x("p"),r.textContent=u,d=y(),p=x("p"),p.textContent=v,f=y(),g=x("p"),g.textContent=E,S=y(),h=x("h2"),h.textContent=m,R=y(),P=x("p"),P.textContent=N,W=y(),I=x("p"),I.textContent=z,F=y(),A=x("h3"),A.textContent=T,O=y(),Z=x("p"),Z.textContent=K,Y=y(),se=x("p"),se.textContent=re,de=y(),J=x("p"),J.textContent=De,ae=y(),Me=x("p"),Me.innerHTML=Je,je=y(),ie=x("p"),ie.textContent=Ee,Re=y(),we=x("p"),we.textContent=ke,qe=y(),ze=x("h3"),ze.textContent=at,q=y(),Ye=x("p"),Ye.textContent=nt,He=y(),Le=x("p"),Le.textContent=st,Ne=y(),Fe=x("p"),Fe.textContent=U,_=y(),H=x("p"),H.textContent=xe,pe=y(),ue=x("p"),ue.textContent=Ge,Se=y(),Pe=x("p"),Pe.textContent=Ze,k=y(),he=x("p"),he.textContent=tt,X=y(),me=x("h2"),me.textContent=We,Ke=y(),Mt(ct.$$.fragment),G=y(),Ce=x("p"),Ce.textContent=be,ve=y(),Te=x("p"),Te.textContent=$e,Qe=y(),lt=x("p"),lt.textContent=ut,et=y(),dt=x("p"),dt.textContent=pt,Q=y(),Ue=x("p"),Ue.textContent=vt,ce=y(),Ie=x("p"),Ie.textContent=At,ne=y(),B=x("p"),B.textContent=Xe,Nt=y(),qt=x("p"),qt.textContent=cn,Vt=y(),w=x("p"),w.textContent=ee,le=y(),oe=x("p"),oe.textContent=te,Oe=y(),Be=x("p"),Be.textContent=V},l(j){e=b(j,"P",{"data-svelte-h":!0}),C(e)!=="svelte-1iiakgo"&&(e.innerHTML=t),n=M(j),a=b(j,"P",{"data-svelte-h":!0}),C(a)!=="svelte-12tujuj"&&(a.textContent=s),c=M(j),r=b(j,"P",{"data-svelte-h":!0}),C(r)!=="svelte-10ktz68"&&(r.textContent=u),d=M(j),p=b(j,"P",{"data-svelte-h":!0}),C(p)!=="svelte-15vlnlv"&&(p.textContent=v),f=M(j),g=b(j,"P",{"data-svelte-h":!0}),C(g)!=="svelte-mqtgny"&&(g.textContent=E),S=M(j),h=b(j,"H2",{"data-svelte-h":!0}),C(h)!=="svelte-1j7xnh3"&&(h.textContent=m),R=M(j),P=b(j,"P",{"data-svelte-h":!0}),C(P)!=="svelte-1hn486m"&&(P.textContent=N),W=M(j),I=b(j,"P",{"data-svelte-h":!0}),C(I)!=="svelte-1u70d73"&&(I.textContent=z),F=M(j),A=b(j,"H3",{"data-svelte-h":!0}),C(A)!=="svelte-14ihzmv"&&(A.textContent=T),O=M(j),Z=b(j,"P",{"data-svelte-h":!0}),C(Z)!=="svelte-1kugems"&&(Z.textContent=K),Y=M(j),se=b(j,"P",{"data-svelte-h":!0}),C(se)!=="svelte-1cy21h5"&&(se.textContent=re),de=M(j),J=b(j,"P",{"data-svelte-h":!0}),C(J)!=="svelte-1cme0t5"&&(J.textContent=De),ae=M(j),Me=b(j,"P",{"data-svelte-h":!0}),C(Me)!=="svelte-g1skft"&&(Me.innerHTML=Je),je=M(j),ie=b(j,"P",{"data-svelte-h":!0}),C(ie)!=="svelte-b22wq9"&&(ie.textContent=Ee),Re=M(j),we=b(j,"P",{"data-svelte-h":!0}),C(we)!=="svelte-1wtdicu"&&(we.textContent=ke),qe=M(j),ze=b(j,"H3",{"data-svelte-h":!0}),C(ze)!=="svelte-175l5aq"&&(ze.textContent=at),q=M(j),Ye=b(j,"P",{"data-svelte-h":!0}),C(Ye)!=="svelte-1rac4fd"&&(Ye.textContent=nt),He=M(j),Le=b(j,"P",{"data-svelte-h":!0}),C(Le)!=="svelte-134t9a7"&&(Le.textContent=st),Ne=M(j),Fe=b(j,"P",{"data-svelte-h":!0}),C(Fe)!=="svelte-9jnm7l"&&(Fe.textContent=U),_=M(j),H=b(j,"P",{"data-svelte-h":!0}),C(H)!=="svelte-1a30uqh"&&(H.textContent=xe),pe=M(j),ue=b(j,"P",{"data-svelte-h":!0}),C(ue)!=="svelte-z6pw4r"&&(ue.textContent=Ge),Se=M(j),Pe=b(j,"P",{"data-svelte-h":!0}),C(Pe)!=="svelte-11vlw5e"&&(Pe.textContent=Ze),k=M(j),he=b(j,"P",{"data-svelte-h":!0}),C(he)!=="svelte-t0fih4"&&(he.textContent=tt),X=M(j),me=b(j,"H2",{"data-svelte-h":!0}),C(me)!=="svelte-pcnb56"&&(me.textContent=We),Ke=M(j),St(ct.$$.fragment,j),G=M(j),Ce=b(j,"P",{"data-svelte-h":!0}),C(Ce)!=="svelte-18d246z"&&(Ce.textContent=be),ve=M(j),Te=b(j,"P",{"data-svelte-h":!0}),C(Te)!=="svelte-99tjnl"&&(Te.textContent=$e),Qe=M(j),lt=b(j,"P",{"data-svelte-h":!0}),C(lt)!=="svelte-l9x7lv"&&(lt.textContent=ut),et=M(j),dt=b(j,"P",{"data-svelte-h":!0}),C(dt)!=="svelte-ahiizd"&&(dt.textContent=pt),Q=M(j),Ue=b(j,"P",{"data-svelte-h":!0}),C(Ue)!=="svelte-8qowcd"&&(Ue.textContent=vt),ce=M(j),Ie=b(j,"P",{"data-svelte-h":!0}),C(Ie)!=="svelte-oa0pwp"&&(Ie.textContent=At),ne=M(j),B=b(j,"P",{"data-svelte-h":!0}),C(B)!=="svelte-11i1gv6"&&(B.textContent=Xe),Nt=M(j),qt=b(j,"P",{"data-svelte-h":!0}),C(qt)!=="svelte-yml7fg"&&(qt.textContent=cn),Vt=M(j),w=b(j,"P",{"data-svelte-h":!0}),C(w)!=="svelte-1kgj6vx"&&(w.textContent=ee),le=M(j),oe=b(j,"P",{"data-svelte-h":!0}),C(oe)!=="svelte-1khq7r0"&&(oe.textContent=te),Oe=M(j),Be=b(j,"P",{"data-svelte-h":!0}),C(Be)!=="svelte-tlkjpl"&&(Be.textContent=V)},m(j,Ae){l(j,e,Ae),l(j,n,Ae),l(j,a,Ae),l(j,c,Ae),l(j,r,Ae),l(j,d,Ae),l(j,p,Ae),l(j,f,Ae),l(j,g,Ae),l(j,S,Ae),l(j,h,Ae),l(j,R,Ae),l(j,P,Ae),l(j,W,Ae),l(j,I,Ae),l(j,F,Ae),l(j,A,Ae),l(j,O,Ae),l(j,Z,Ae),l(j,Y,Ae),l(j,se,Ae),l(j,de,Ae),l(j,J,Ae),l(j,ae,Ae),l(j,Me,Ae),l(j,je,Ae),l(j,ie,Ae),l(j,Re,Ae),l(j,we,Ae),l(j,qe,Ae),l(j,ze,Ae),l(j,q,Ae),l(j,Ye,Ae),l(j,He,Ae),l(j,Le,Ae),l(j,Ne,Ae),l(j,Fe,Ae),l(j,_,Ae),l(j,H,Ae),l(j,pe,Ae),l(j,ue,Ae),l(j,Se,Ae),l(j,Pe,Ae),l(j,k,Ae),l(j,he,Ae),l(j,X,Ae),l(j,me,Ae),l(j,Ke,Ae),Ct(ct,j,Ae),l(j,G,Ae),l(j,Ce,Ae),l(j,ve,Ae),l(j,Te,Ae),l(j,Qe,Ae),l(j,lt,Ae),l(j,et,Ae),l(j,dt,Ae),l(j,Q,Ae),l(j,Ue,Ae),l(j,ce,Ae),l(j,Ie,Ae),l(j,ne,Ae),l(j,B,Ae),l(j,Nt,Ae),l(j,qt,Ae),l(j,Vt,Ae),l(j,w,Ae),l(j,le,Ae),l(j,oe,Ae),l(j,Oe,Ae),l(j,Be,Ae),fe=!0},p(j,[Ae]){const it={};Ae&1&&(it.$$scope={dirty:Ae,ctx:j}),ct.$set(it)},i(j){fe||(ht(ct.$$.fragment,j),fe=!0)},o(j){mt(ct.$$.fragment,j),fe=!1},d(j){j&&(o(e),o(n),o(a),o(c),o(r),o(d),o(p),o(f),o(g),o(S),o(h),o(R),o(P),o(W),o(I),o(F),o(A),o(O),o(Z),o(Y),o(se),o(de),o(J),o(ae),o(Me),o(je),o(ie),o(Re),o(we),o(qe),o(ze),o(q),o(Ye),o(He),o(Le),o(Ne),o(Fe),o(_),o(H),o(pe),o(ue),o(Se),o(Pe),o(k),o(he),o(X),o(me),o(Ke),o(G),o(Ce),o(ve),o(Te),o(Qe),o(lt),o(et),o(dt),o(Q),o(Ue),o(ce),o(Ie),o(ne),o(B),o(Nt),o(qt),o(Vt),o(w),o(le),o(oe),o(Oe),o(Be)),Et(ct,j)}}}const nx={title:"Autonomía y ajenidad (parte 2)",slug:"autonomia-ajenidad-2",coverImage:"/src/assets/posts-covers/starfish.jpg",coverPosition:"normal",coverAuthor:"Pedro Lastra",excerpt:"Segunda parte. Analizo la consultoría y el mentoring.",date:"2024-09-05T13:06:23.177Z",updated:"2024-09-05T13:06:23.903Z",hidden:!0,tags:["Personal","Laboral","Consultoría"],keywords:["trabajo","autónomo"],type:"default"};class ix extends Kt{constructor(e){super(),Jt(this,e,null,tx,Zt,{})}}const ax=Object.freeze(Object.defineProperty({__proto__:null,default:ix,metadata:nx},Symbol.toStringTag,{value:"Module"}));function sx(i){let e;return{c(){e=gt(`NOTA: no he notado diferencias de género en este ámbito, más allá de
una mayor cantidad hombres. Asume que cuando digo directivo digo también 
directiva/e.`)},l(t){e=_t(t,`NOTA: no he notado diferencias de género en este ámbito, más allá de
una mayor cantidad hombres. Asume que cuando digo directivo digo también 
directiva/e.`)},m(t,n){l(t,e,n)},d(t){t&&o(e)}}}function ox(i){let e,t=`En la <a href="/blog/autonomia-ajenidad-1">primera parte</a> de un conjunto de
entradas sobre la relación laboral que originalmente (y erróneamente) titulé
“mi problema con el trabajo”, abarcaba temas como esa trampa de la ilusión de la libertad
como supuesto autónomo y de lo injusto que me parece el concepto de ajenidad
aplicado a los trabajos creativos.`,n,a,s=`En esa entrada comentaba que hablaría sobre la consultoría en la siguiente parte,
que aún tengo en borrador. Pero he preferido dedicarle un espacio propio en esta
entrada independiente.`,c,r,u="Como siempre, esto es un blog personal y esto es una opinión no menos personal.",d,p,v="Los dos tipos de consultoría",f,g,E=`Primero tengo que explicar en qué consiste mi trabajo y qué me ha llevado a
conocer a tanta gente y entornos en los últimos 3-4 años.`,S,h,m=`A ver, no conozco cuántas definiciones de consultoría existen, pero sí es
notable dos tipos de actividades diferenciadas.`,R,P,N="La consultoría IT",W,I,z=`Es la que define a las empresas “consultoras” IT, entendidas como empresas de
desarrollo de soluciones tecnológicas a medida (habitualmente software y
sistemas de información). Aquellas que se encargan de todos los
procesos enfocados a desarrollar una solución tecnológica adaptada a las
necesidades de una empresa (incluyendo al estado).`,F,A,T=`Suena muy bonito, pero aunque hay consultoras excelentes con personal muy
cualificado, hay muchas otras que
gozan de una imagen justificadamente mala, como muchas grandes consultoras
internacionales que suelen ser entendidas también como cárnicas. Una cárnica
en este sector es denominada así por su tendencia a contratar programadores a
decenas, centenas o incluso millares (“por kilos”), como si de carne se tratara.`,O,Z,K=`Suelen hacer muchos convenios con academias y les importa poco el nivel
y el desarrollo que puedan obtener sus profesionales, pues en realidad el que
sean o no productivos a veces ni importa.`,Y,se,re=`Entre los objetivos de esta contratación masiva se encuentra el de manifestar 
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
resultados 🙂).</small>`,de,J,De=`Hay otras razones, como hacer un filtrado masivo como quien filtra kilos
de tierra de río para sacar cantidades insignificantes de oro, una estrategia
de búsqueda de talento habitual en grandes tecnológicas, pero eso da para otras
entradas.`,ae,Me,Je=`Esto es una realidad bastante obvia cuando te acercas a puestos de dirección o
si como autónomo has estado pendiente al BOE y licitaciones, pero es como si a
nadie le gustara hablar de ello 🤷‍♂️.`,je,ie,Ee="Consultoría para profesionales en IT",Re,we,ke=`No sé cómo llamarla. Algunos la llaman consultoría sin más, y otros
defienden que debería llamarse “formación especializada” y ya.`,qe,ze,at=`Es a lo que me dedico. No se aleja de la definición de la primera, con la
diferencia de que por lo general el cliente ya dispone de un equipo de IT
consolidado, o incluso puede ser a su vez otra consultora, y tú te integras a
su entorno para dar una formación o un servicio especializado enfocado a cumplir
ciertos objetivos o a formar en determinadas tecnologías o metodologías a su
plantilla.`,q,Ye,nt=`En esta actividad se ofrecen los mismos servicios de consultoría pero es más
habitual que se te valore por tu experiencia y habilidad, especialmente en
términos de formación, comunicación y dinámica de equipo. Como además te
integras a un grupo profesional, acabas ejerciendo de mentor y comunicándote
directamente con todos transmitiendo como mejor puedas tus conocimientos y
experiencias previas ante problemas similares.`,He,Le,st=`Es un trabajo excelente porque conoces a mucha gente, te obligas a cargarte
prejuicios, a volverte más tolerante y a buscar el mejor lado de toda persona.
A nivel técnico perfilas tus habilidades de análisis al extremo, dado que cada
nuevo entorno implica auditar y analizar soluciones custom que llevan
desarrollando años otras personas, a fin de identificar los puntos críticos y
qué está produciendo los problemas por los que te requieren.`,Ne,Fe,U=`Por otra parte, no pocas veces eres tú quien más aprende. Conocer tantos nuevos
entornos y soluciones desarrolladas por otros hace que empieces a ver patrones
continuos y a identificar aquello que está fuera de la norma para bien, a
toparte con soluciones brillantes y excepcionales, normalmente provenientes de
alguna persona muy ingeniosa que ya no forma parte del equipo, alguien que
se fue en búsqueda de desafíos mayores y que ha dejado su legado.`,_,H,xe=`Es la forma más directa de asumir desafíos continuos y de crecer hasta cierto
punto. Eso sí, con una responsabilidad que puede ser muy estresante. No es
especialmente cómodo llegar a un equipo como un supuesto experto y saber que
todos esperan que muestres soluciones a problemas que llevan teniendo durante
años.`,pe,ue,Ge=`Algunos en un primer momento piensan que vienes a juzgar su trabajo y tienen
miedo que se les exponga. A esto sumar que muchas veces serás uno más en equipos de
profesionales que no tienen un nivel inferior a ti y que ciertamente no te
necesitan, sino que tienen a directivos incompetentes que confían antes en el
gurú extranjero de turno que en sus propios empleados.`,Se,Pe,Ze=`Es por esto que mi actividad suele centrarse en directivos sin formación técnica.
Pero no es fácil
hacer comprender la naturaleza de este trabajo a personas que no han picado una
sola línea de código y lleva a cargo de programadores más de una década,
creyendo que conocen muy bien cómo funciona el desarrollo de software y sin
pensar ni por un segundo que el problema de un proyecto pueden ser ellos mismos.`,k,he,tt="Tratamiento para directivos",X,me,We,Ke,ct=`Un directivo (o jefe de proyecto) de software sin nociones técnicas no comprende que el error
es una parte natural de este arte. No comprende que es necesario dedicar el tiempo
que haga falta a asegurar una correcta testabilidad y realizar refactoring (reescribir
o rediseñar algunas partes del código para mejorar su mantenibilidad, testabilidad, etc), y que
aún así seguirá siendo necesario la monitorización y seguirá habiendo errores.`,G,Ce,be=`Un directivo que no comprende los procesos de desarrollo solo ve que el producto
no está cambiando de cara al usuario, no tiene capacidad para saber si los
empleados están haciendo realmente algo o les están mintiendo en su cara mientras
dicen que están mejorando el código.`,ve,Te,$e=`Aún peor, muchos asumen que si su equipo lleva una semana haciendo refactoring
creen que es porque hicieron cosas mal y que ahora están corrigiendo errores,
cuando en un primer momento tendrían que haberlo hecho “bien”.`,Qe,lt,ut=`Muchos ven a equipos técnicos como meros obreros que tienen que decidir
algo, planificarlo y hacerlo “bien”, no comprenden la naturaleza del error, la
deuda técnica, la flexibilidad y dinamismo que debe
haber en los procesos de desarrollo.`,et,dt,pt=`Un directivo así solo mete presiones y no tiene capacidad para determinar el
estado ni el rumbo del proyecto, no le salva ni el delegar porque nunca
podrá comprender el feedback que pueda recibir de la persona en la que delega.`,Q,Ue,vt=`Lo mejor que puede pasar con un directivo así es que delegue completamente y con
fé ciega, pero entonces se acaba dando cuenta de que su papel es
completamente irrelevante, y no solo él se da cuenta de ello. Cuando nadie
necesita un capitán, el capitán solo es un estorbo, un imbécil con autoridad
que además suele cobrar más.`,ce,Ie,At=`Pero cuando no delegan es mucho peor, ya no solo son dispensables, entorpecen a
todo el equipo, fomentan malas prácticas por exigir resultados visibles cuanto
antes y generan una fuerte sensación de impotencia, ansiedad y estancamiento
profesional en todos los desarrolladores. Por no decir que no suelen asumir ni una
sola de las responsabilidades que deben asumir como directivos de un proyecto
de software, porque la mayoría requiere algunos conocimientos técnicos base.`,ne,B,Xe=`Por suerte, hasta ahora todos los directivos con los que he llegado a toparme
en mi actividad han podido comprender la importancia y los problemas que
supone su incompetencia técnica, y todos han podido ver los errores y tremendas
estupideces que estaban diciendo y cometiendo tras una correcta formación, pero
desde luego no es algo especialmente fácil.`,Nt,qt,cn=`La comunicación con directivos puede ser complicada, se necesita
otro lenguaje, se necesita otro tono y se necesitan enfoques muy prácticos,
directos, precisos y tajantes. Es normal, recordemos que no dejan de ser seres
humanos que en su caso han estado en posiciones de poder, a veces demasiado tiempo.`,Vt,w,ee=`Es muy frecuente que en su trayectoria profesional coman discusiones muy absurdas con
personas que se quejan sin dar soluciones. Es frecuente que sean ellos los que
deban decir “hasta aquí” y zanjar asuntos aún ante el descontento de alguien, y
esto acaba por generar conductas a veces algo poco empáticas.`,le,oe,te=`Una postura típica es considerar que los conocimientos técnicos no son parte
de su competencia, y ahí es importante cortarles inmediatamente y no dar espacio:
si quieren dirigir un proyecto de software, deben aprender unas bases técnicas
y acercarse a la realidad de sus empleados a cargo.`,Oe,Be,V=`El trabajo de un
consultor cuando debe tratar con directivos se acerca a partes iguales al de
consejero real y al de dom/dominatrix: tener la sutileza para provocar cambios
sin cuestionar su autoridad delante del equipo, y tener la firmeza para darle
algunos latigazos en privado cuando sea necesario, a lo que suelen estar
sorprendentemente dispuestos, especialmente cuando son ellos los que han pagado
por tu servicio para mejorar la situación laboral.`,fe,j,Ae="El miedo a mostrar código y al juicio ajeno",it,ft,zt=`Establezco una regla muy directa en mi trabajo: no expongo a nadie, o no por la
calidad de su trabajo, desde luego. Por lo general ningún directivo me ha pedido
a priori y directamente que busque a culpables o al más incompetente del equipo
para funarlo, pero indirectamente es algo que ven en auditorías. Si expongo
una mala decisión de diseño, alguien buscará a quién tomó dicha decisión.`,Pt,Bt,wt=`Es por eso que antes de cualquier auditoría o antes de presentar los resultados
hago mucho hincapié en que en este mundo no tiene ningún sentido la cultura
punitiva y que hay cientos de factores por los que un profesional comete
errores, tenga la experiencia que tenga.`,rt,Dt,xt="La vergüenza",jt,Ht,Qt=`Lo que realmente afecta a muchos profesionales es que otros observen sus
espaguetis, su deuda técnica, la ausencia de principios de diseño y otras
cuestiones de la que ellos mismos son conscientes.`,un,bt,hn=`Muchas personas se autocastigan porque saben muy bien que están haciendo
locuras, que no están siguiendo buenas prácticas por “pereza” (aunque suponga
trabajar más 🤦‍♂️) y que no se pueden justificar. Es uno de los motivos por los
que muchos quieren cambiar de trabajo, se empiezan a sentir incómodos con su
propio trabajo o se sienten estancados porque no hay nadie que les anime a
mejorar.`,dn,Ft,Vn=`El problema es que son conscientes de que lo pueden hacer mejor, pero eso
conlleva un esfuerzo investigador e incluso horas en casa, un esfuerzo que
consideran que nadie valorará. Tristemente no se suelen equivocar.`,mn,Wt,Di=`Supón que estás en esa situación, un consultor externo llega a auditar
código y decide que quiere sentarse 8 horas junto a ti a ver qué y cómo has
hecho algo de lo que tú mismo te avergüenzas, es natural pensar que viene a
juzgarte y no a ayudar.`,Dn,Xt,Ui=`Hacer comprender a una persona que no vienes a juzgarle y que su situación es
muy común, mientras que lo animas y le das razones y estrategias para escribir
código de mayor calidad, es un reto que solo suele funcionar cuando viene
acompañado de una reestructuración completa de la dinámica de trabajo y el
entorno laboral.`,Un,Yt,Ii="Soluciones que producen un mindblow en directivos",In,$,Ve=`No puedo exponer aquí todos mis truquillos, no porque tema compartirlos,
casi todos son obviedades bien conocidas desde los 80, sino porque la entrada
sería más larga de lo que ya es. Me centraré en aquellas que suelen dejar
ojipláticos a las personas con empleados a cargo.`,Gn,_n,ss=`Cada equipo es un mundo, no se puede generalizar, lo que es especialmente
efectivo en un entorno puede ser contraproducente en otro, es necesario una
evaluación individual de los empleados, sus motivaciones y sus necesidades.`,di,xn,os=`Muchas de las técnicas requieren además una metodología adicional o comprender
un enfoque, un mentor y supervisor que entienda si algo realmente funciona
y cómo ajustarlo.`,pi,bn,rs="El pair programming para la construcción de vínculos",fi,yn,ls=`Es un clásico, y la versión más clásica es la más efectiva en un primer momento:
reducir los dispositivos encendidos a la mitad una buena parte de la jornada, porque
solo se trabaja en equipos de 2, donde solo uno está al teclado y el otro
“copilotando” sentado junto a él, alternándose los roles cada cierto tiempo.`,hi,Mn,cs=`Esto produce un shock brutal en directivos porque creen que poner a dos personas
a trabajar en el mismo problema es perder la mitad de los recursos humanos de
golpe.`,mi,Sn,us=`Es una técnica que implica ejercicio de comunicación, aprender a manejar
discusiones, aprender ceder cooperando. Ante un desacuerdo, si se elige el
camino de uno, el otro debe apoyar en ese camino aunque crea que no es el adecuado.`,vi,Cn,ds="Considera las siguientes posturas finales ante un desacuerdo:",gi,En,ps=`Postura 1:
<code>Eso no funcionará, allá tú, haz lo que quieras, ya verás...</code>`,_i,Tn,fs=`Postura 2:
<code>En mi cabeza creo que eso no va a funcionar, pero confío, vamos a probar y ver qué sale...</code>`,xi,An,hs=`Al adoptar la postura 2, más abierta y menos inmovilista, incluso aunque tengas
certeza de que tu
compañero está equivocado, en el peor caso se perderá algo de tiempo. A cambio,
fomentarás un entorno cooperativo y,
cuando la situación se invierta y quieras que confíen en ti, será más fácil.`,bi,wn,ms=`Por otra parte, muchas veces existe la posibilidad de que realmente estés
equivocado y no hayas visto factores que tu compañero sí. En ese caso no
quedarás como un bocazas.`,yi,Pn,$i=`Esta técnica, lejos de “partir por la mitad los recursos humanos”, suele
multiplicar la productividad: trabajamos mejor en pareja. No solo se toman
mejores decisiones, suele haber menos “empanes”
y menos distracciones, también se evita realizar tantas malas prácticas.`,D,ge,ni=`Solo hay que evitar el error común de imponer esta práctica en toda la jornada,
hay que dar también espacio personal en solitario a quien lo necesite.`,Xi,ii,vs="La rotación de parejas",Yi,ai,gs=`Todos deberían conocer el trabajo de todos, y por supuesto, todos deberían
conocerse. No tiene por qué ser algo frecuente ni forzado, pero sí debería
haber al menos una temporada de rotación. Los cambios de contexto también pueden
venir muy bien a muchos, permiten que algunos encuentren nuevas áreas de interés,
el desarrollo de habilidades transversales y mejorar la transmisión de
conocimiento y habilidad entre miembros del equipo.`,Zi,si,_s=`En el caso de conflictos laborales, se sabe que las conexiones entre todos los
empleados ayudan a diluir las tensiones entre dos de ellos. Teniendo amigos en
común es más difícil ser enemigos. Evidentemente esto no es la panacea a estos
problemas.`,Ns,Ki,vl=`Es otra medida no muy bien vista por los directivos porque suele implicar
más movilización y cambios de contexto que a priori parecen interrumpir y
disminuir la productividad, pero cuando se forma una sinergia fuerte, como
cuando dos empleados que apenas se conocen descubren que son especialmente buenos
trabajando en equipo, pueden no solo compensar cualquier bajada de productividad
puntual, pueden dar una motivación y ejemplo al resto que es difícil de describir.`,qs,Ji,gl="La reducción del tiempo de trabajo",Fs,Qi,_l=`Cuando sugiero reducir a la mitad el tiempo de trabajo, me han llegado a decir
“eso nos permitiría contratar unos cuantos más”, porque no me han entendido.
No digo reducir la jornada laboral, los empleados siguen cobrando
lo mismo, digo reducir el tiempo que trabajan activamente en las necesidades
de la empresa.`,Os,ea,xl=`Me miran como un loco, como diciendo “claro, trabajan 6 horas y les pagamos 8,
eh… gracias por venir, cuando queramos regalar dinero te volveremos a llamar”.
Pero lo cierto es que ya lo hacen.`,zs,ta,bl=`Muchos profesionales solo pueden ser
realmente productivos durante 4 o 6 horas. Extender más horas en este sector solo
consigue que se llegue antes a un burnout. Me he encontrado con no pocos casos
donde los trabajadores realmente solo están produciendo 1 hora o 2 horas de lo
quemados que están.`,Bs,na,yl=`Sabiendo esto, es muy buena oportunidad para mejorar las condiciones laborales
y las habilidades de tus empleados. Las otras horas pueden dedicarla al
desarrollo propio en habilidades que les interesen, pet projects o simplemente
a descansar, como si quieren irse a casa o ponerse a jugar.`,Hs,ia,Ml=`Se sentirán mejor, mejorarán en su trabajo y eso se notará en la productividad.
Y si no se nota, en el peor caso la productividad será la misma y todos estarán
más contentos. Es incontable la de empresas que he encontrado con gimnasio
y sala de exposiciones para nada, porque no dan tiempo a sus empleados a darle
un uso realista.`,ks,aa,Sl=`Una actividad tan simple como exponer sobre un tema cualquiera de interés
personal al resto del equipo, relacionado o no con el trabajo, por turnos
(cada día una persona), puede ayudar a amenizar mucho el trabajo y a mejorar
las relaciones interpersonales, y a conocer proyectos y necesidades personales
que a veces pueden ser muy fáciles de satisfacer para una empresa.`,Vs,sa,Cl=`El desarrollo en equipo de un pet project no relacionado necesariamente con
la actividad laboral, donde además se
intercambian los roles habituales, puede ser especialmente efectivo para mejorar
otras habilidades cuando en el trabajo no existe posibilidad.`,Gs,oa,El=`Además, ocurre una cosa muy curiosa, y es que aunque exista esta posibilidad,
muchos simplemente siguen trabajando en esas horas libres.`,js,ra,Tl=`En definitiva, muchas de las soluciones pasan directamente por mejorar las
condiciones laborales y fomentar la comunicación. Esto no es
exclusivo de esta profesión, pero aquí se nota especialmente.`,Ws,la,Al=`Insisto en que debe recogerse feedback y deben ser medidas que se tomen
idealmente en consenso con el resto de empleados, sin asumir que van a
funcionar.`,$s;return me=new ti({props:{$$slots:{default:[sx]},$$scope:{ctx:i}}}),{c(){e=x("p"),e.innerHTML=t,n=y(),a=x("p"),a.textContent=s,c=y(),r=x("p"),r.textContent=u,d=y(),p=x("h2"),p.textContent=v,f=y(),g=x("p"),g.textContent=E,S=y(),h=x("p"),h.textContent=m,R=y(),P=x("h3"),P.textContent=N,W=y(),I=x("p"),I.textContent=z,F=y(),A=x("p"),A.textContent=T,O=y(),Z=x("p"),Z.textContent=K,Y=y(),se=x("p"),se.innerHTML=re,de=y(),J=x("p"),J.textContent=De,ae=y(),Me=x("p"),Me.textContent=Je,je=y(),ie=x("h3"),ie.textContent=Ee,Re=y(),we=x("p"),we.textContent=ke,qe=y(),ze=x("p"),ze.textContent=at,q=y(),Ye=x("p"),Ye.textContent=nt,He=y(),Le=x("p"),Le.textContent=st,Ne=y(),Fe=x("p"),Fe.textContent=U,_=y(),H=x("p"),H.textContent=xe,pe=y(),ue=x("p"),ue.textContent=Ge,Se=y(),Pe=x("p"),Pe.textContent=Ze,k=y(),he=x("h2"),he.textContent=tt,X=y(),Mt(me.$$.fragment),We=y(),Ke=x("p"),Ke.textContent=ct,G=y(),Ce=x("p"),Ce.textContent=be,ve=y(),Te=x("p"),Te.textContent=$e,Qe=y(),lt=x("p"),lt.textContent=ut,et=y(),dt=x("p"),dt.textContent=pt,Q=y(),Ue=x("p"),Ue.textContent=vt,ce=y(),Ie=x("p"),Ie.textContent=At,ne=y(),B=x("p"),B.textContent=Xe,Nt=y(),qt=x("p"),qt.textContent=cn,Vt=y(),w=x("p"),w.textContent=ee,le=y(),oe=x("p"),oe.textContent=te,Oe=y(),Be=x("p"),Be.textContent=V,fe=y(),j=x("h2"),j.textContent=Ae,it=y(),ft=x("p"),ft.textContent=zt,Pt=y(),Bt=x("p"),Bt.textContent=wt,rt=y(),Dt=x("h3"),Dt.textContent=xt,jt=y(),Ht=x("p"),Ht.textContent=Qt,un=y(),bt=x("p"),bt.textContent=hn,dn=y(),Ft=x("p"),Ft.textContent=Vn,mn=y(),Wt=x("p"),Wt.textContent=Di,Dn=y(),Xt=x("p"),Xt.textContent=Ui,Un=y(),Yt=x("h2"),Yt.textContent=Ii,In=y(),$=x("p"),$.textContent=Ve,Gn=y(),_n=x("p"),_n.textContent=ss,di=y(),xn=x("p"),xn.textContent=os,pi=y(),bn=x("h3"),bn.textContent=rs,fi=y(),yn=x("p"),yn.textContent=ls,hi=y(),Mn=x("p"),Mn.textContent=cs,mi=y(),Sn=x("p"),Sn.textContent=us,vi=y(),Cn=x("p"),Cn.textContent=ds,gi=y(),En=x("p"),En.innerHTML=ps,_i=y(),Tn=x("p"),Tn.innerHTML=fs,xi=y(),An=x("p"),An.textContent=hs,bi=y(),wn=x("p"),wn.textContent=ms,yi=y(),Pn=x("p"),Pn.textContent=$i,D=y(),ge=x("p"),ge.textContent=ni,Xi=y(),ii=x("h3"),ii.textContent=vs,Yi=y(),ai=x("p"),ai.textContent=gs,Zi=y(),si=x("p"),si.textContent=_s,Ns=y(),Ki=x("p"),Ki.textContent=vl,qs=y(),Ji=x("h3"),Ji.textContent=gl,Fs=y(),Qi=x("p"),Qi.textContent=_l,Os=y(),ea=x("p"),ea.textContent=xl,zs=y(),ta=x("p"),ta.textContent=bl,Bs=y(),na=x("p"),na.textContent=yl,Hs=y(),ia=x("p"),ia.textContent=Ml,ks=y(),aa=x("p"),aa.textContent=Sl,Vs=y(),sa=x("p"),sa.textContent=Cl,Gs=y(),oa=x("p"),oa.textContent=El,js=y(),ra=x("p"),ra.textContent=Tl,Ws=y(),la=x("p"),la.textContent=Al},l(L){e=b(L,"P",{"data-svelte-h":!0}),C(e)!=="svelte-1pq7vyw"&&(e.innerHTML=t),n=M(L),a=b(L,"P",{"data-svelte-h":!0}),C(a)!=="svelte-abxeo0"&&(a.textContent=s),c=M(L),r=b(L,"P",{"data-svelte-h":!0}),C(r)!=="svelte-mqtgny"&&(r.textContent=u),d=M(L),p=b(L,"H2",{"data-svelte-h":!0}),C(p)!=="svelte-1j7xnh3"&&(p.textContent=v),f=M(L),g=b(L,"P",{"data-svelte-h":!0}),C(g)!=="svelte-yxjwvv"&&(g.textContent=E),S=M(L),h=b(L,"P",{"data-svelte-h":!0}),C(h)!=="svelte-1u70d73"&&(h.textContent=m),R=M(L),P=b(L,"H3",{"data-svelte-h":!0}),C(P)!=="svelte-1m6w651"&&(P.textContent=N),W=M(L),I=b(L,"P",{"data-svelte-h":!0}),C(I)!=="svelte-1ilp7u3"&&(I.textContent=z),F=M(L),A=b(L,"P",{"data-svelte-h":!0}),C(A)!=="svelte-1e17jd4"&&(A.textContent=T),O=M(L),Z=b(L,"P",{"data-svelte-h":!0}),C(Z)!=="svelte-1hwpnf5"&&(Z.textContent=K),Y=M(L),se=b(L,"P",{"data-svelte-h":!0}),C(se)!=="svelte-yxfdwh"&&(se.innerHTML=re),de=M(L),J=b(L,"P",{"data-svelte-h":!0}),C(J)!=="svelte-b22wq9"&&(J.textContent=De),ae=M(L),Me=b(L,"P",{"data-svelte-h":!0}),C(Me)!=="svelte-1wtdicu"&&(Me.textContent=Je),je=M(L),ie=b(L,"H3",{"data-svelte-h":!0}),C(ie)!=="svelte-1nvx6i9"&&(ie.textContent=Ee),Re=M(L),we=b(L,"P",{"data-svelte-h":!0}),C(we)!=="svelte-1f5x6pb"&&(we.textContent=ke),qe=M(L),ze=b(L,"P",{"data-svelte-h":!0}),C(ze)!=="svelte-1x1p4km"&&(ze.textContent=at),q=M(L),Ye=b(L,"P",{"data-svelte-h":!0}),C(Ye)!=="svelte-9jnm7l"&&(Ye.textContent=nt),He=M(L),Le=b(L,"P",{"data-svelte-h":!0}),C(Le)!=="svelte-1a30uqh"&&(Le.textContent=st),Ne=M(L),Fe=b(L,"P",{"data-svelte-h":!0}),C(Fe)!=="svelte-kxw3c"&&(Fe.textContent=U),_=M(L),H=b(L,"P",{"data-svelte-h":!0}),C(H)!=="svelte-88ec34"&&(H.textContent=xe),pe=M(L),ue=b(L,"P",{"data-svelte-h":!0}),C(ue)!=="svelte-b0jvnw"&&(ue.textContent=Ge),Se=M(L),Pe=b(L,"P",{"data-svelte-h":!0}),C(Pe)!=="svelte-t0fih4"&&(Pe.textContent=Ze),k=M(L),he=b(L,"H2",{"data-svelte-h":!0}),C(he)!=="svelte-pcnb56"&&(he.textContent=tt),X=M(L),St(me.$$.fragment,L),We=M(L),Ke=b(L,"P",{"data-svelte-h":!0}),C(Ke)!=="svelte-159kbjq"&&(Ke.textContent=ct),G=M(L),Ce=b(L,"P",{"data-svelte-h":!0}),C(Ce)!=="svelte-99tjnl"&&(Ce.textContent=be),ve=M(L),Te=b(L,"P",{"data-svelte-h":!0}),C(Te)!=="svelte-l9x7lv"&&(Te.textContent=$e),Qe=M(L),lt=b(L,"P",{"data-svelte-h":!0}),C(lt)!=="svelte-1kethm3"&&(lt.textContent=ut),et=M(L),dt=b(L,"P",{"data-svelte-h":!0}),C(dt)!=="svelte-8qowcd"&&(dt.textContent=pt),Q=M(L),Ue=b(L,"P",{"data-svelte-h":!0}),C(Ue)!=="svelte-oa0pwp"&&(Ue.textContent=vt),ce=M(L),Ie=b(L,"P",{"data-svelte-h":!0}),C(Ie)!=="svelte-11i1gv6"&&(Ie.textContent=At),ne=M(L),B=b(L,"P",{"data-svelte-h":!0}),C(B)!=="svelte-yml7fg"&&(B.textContent=Xe),Nt=M(L),qt=b(L,"P",{"data-svelte-h":!0}),C(qt)!=="svelte-1kgj6vx"&&(qt.textContent=cn),Vt=M(L),w=b(L,"P",{"data-svelte-h":!0}),C(w)!=="svelte-1khq7r0"&&(w.textContent=ee),le=M(L),oe=b(L,"P",{"data-svelte-h":!0}),C(oe)!=="svelte-nfhhac"&&(oe.textContent=te),Oe=M(L),Be=b(L,"P",{"data-svelte-h":!0}),C(Be)!=="svelte-tlkjpl"&&(Be.textContent=V),fe=M(L),j=b(L,"H2",{"data-svelte-h":!0}),C(j)!=="svelte-mspdjd"&&(j.textContent=Ae),it=M(L),ft=b(L,"P",{"data-svelte-h":!0}),C(ft)!=="svelte-1i64b7z"&&(ft.textContent=zt),Pt=M(L),Bt=b(L,"P",{"data-svelte-h":!0}),C(Bt)!=="svelte-ox7h5v"&&(Bt.textContent=wt),rt=M(L),Dt=b(L,"H3",{"data-svelte-h":!0}),C(Dt)!=="svelte-1mfbf1j"&&(Dt.textContent=xt),jt=M(L),Ht=b(L,"P",{"data-svelte-h":!0}),C(Ht)!=="svelte-1cg3q6t"&&(Ht.textContent=Qt),un=M(L),bt=b(L,"P",{"data-svelte-h":!0}),C(bt)!=="svelte-12rk8x8"&&(bt.textContent=hn),dn=M(L),Ft=b(L,"P",{"data-svelte-h":!0}),C(Ft)!=="svelte-1np96pv"&&(Ft.textContent=Vn),mn=M(L),Wt=b(L,"P",{"data-svelte-h":!0}),C(Wt)!=="svelte-15kxlz3"&&(Wt.textContent=Di),Dn=M(L),Xt=b(L,"P",{"data-svelte-h":!0}),C(Xt)!=="svelte-1qwsq7u"&&(Xt.textContent=Ui),Un=M(L),Yt=b(L,"H2",{"data-svelte-h":!0}),C(Yt)!=="svelte-1p3a73p"&&(Yt.textContent=Ii),In=M(L),$=b(L,"P",{"data-svelte-h":!0}),C($)!=="svelte-19yh2ox"&&($.textContent=Ve),Gn=M(L),_n=b(L,"P",{"data-svelte-h":!0}),C(_n)!=="svelte-lc891x"&&(_n.textContent=ss),di=M(L),xn=b(L,"P",{"data-svelte-h":!0}),C(xn)!=="svelte-absoyy"&&(xn.textContent=os),pi=M(L),bn=b(L,"H3",{"data-svelte-h":!0}),C(bn)!=="svelte-1k48gpz"&&(bn.textContent=rs),fi=M(L),yn=b(L,"P",{"data-svelte-h":!0}),C(yn)!=="svelte-p03p28"&&(yn.textContent=ls),hi=M(L),Mn=b(L,"P",{"data-svelte-h":!0}),C(Mn)!=="svelte-1p619ai"&&(Mn.textContent=cs),mi=M(L),Sn=b(L,"P",{"data-svelte-h":!0}),C(Sn)!=="svelte-ywz4kq"&&(Sn.textContent=us),vi=M(L),Cn=b(L,"P",{"data-svelte-h":!0}),C(Cn)!=="svelte-1279eml"&&(Cn.textContent=ds),gi=M(L),En=b(L,"P",{"data-svelte-h":!0}),C(En)!=="svelte-c5j9dk"&&(En.innerHTML=ps),_i=M(L),Tn=b(L,"P",{"data-svelte-h":!0}),C(Tn)!=="svelte-uple9a"&&(Tn.innerHTML=fs),xi=M(L),An=b(L,"P",{"data-svelte-h":!0}),C(An)!=="svelte-1gem8j1"&&(An.textContent=hs),bi=M(L),wn=b(L,"P",{"data-svelte-h":!0}),C(wn)!=="svelte-1os79ly"&&(wn.textContent=ms),yi=M(L),Pn=b(L,"P",{"data-svelte-h":!0}),C(Pn)!=="svelte-13v7s8d"&&(Pn.textContent=$i),D=M(L),ge=b(L,"P",{"data-svelte-h":!0}),C(ge)!=="svelte-ny6vqa"&&(ge.textContent=ni),Xi=M(L),ii=b(L,"H3",{"data-svelte-h":!0}),C(ii)!=="svelte-qy87mf"&&(ii.textContent=vs),Yi=M(L),ai=b(L,"P",{"data-svelte-h":!0}),C(ai)!=="svelte-n6i6w7"&&(ai.textContent=gs),Zi=M(L),si=b(L,"P",{"data-svelte-h":!0}),C(si)!=="svelte-1h0m0ej"&&(si.textContent=_s),Ns=M(L),Ki=b(L,"P",{"data-svelte-h":!0}),C(Ki)!=="svelte-19dp3u7"&&(Ki.textContent=vl),qs=M(L),Ji=b(L,"H3",{"data-svelte-h":!0}),C(Ji)!=="svelte-15fddhw"&&(Ji.textContent=gl),Fs=M(L),Qi=b(L,"P",{"data-svelte-h":!0}),C(Qi)!=="svelte-sr6kct"&&(Qi.textContent=_l),Os=M(L),ea=b(L,"P",{"data-svelte-h":!0}),C(ea)!=="svelte-a3sp9u"&&(ea.textContent=xl),zs=M(L),ta=b(L,"P",{"data-svelte-h":!0}),C(ta)!=="svelte-1gjch7e"&&(ta.textContent=bl),Bs=M(L),na=b(L,"P",{"data-svelte-h":!0}),C(na)!=="svelte-1wwy3oo"&&(na.textContent=yl),Hs=M(L),ia=b(L,"P",{"data-svelte-h":!0}),C(ia)!=="svelte-1bvhbmc"&&(ia.textContent=Ml),ks=M(L),aa=b(L,"P",{"data-svelte-h":!0}),C(aa)!=="svelte-jd2b3q"&&(aa.textContent=Sl),Vs=M(L),sa=b(L,"P",{"data-svelte-h":!0}),C(sa)!=="svelte-1dk0rdk"&&(sa.textContent=Cl),Gs=M(L),oa=b(L,"P",{"data-svelte-h":!0}),C(oa)!=="svelte-lon14c"&&(oa.textContent=El),js=M(L),ra=b(L,"P",{"data-svelte-h":!0}),C(ra)!=="svelte-1bfitb4"&&(ra.textContent=Tl),Ws=M(L),la=b(L,"P",{"data-svelte-h":!0}),C(la)!=="svelte-15kh5zk"&&(la.textContent=Al)},m(L,ye){l(L,e,ye),l(L,n,ye),l(L,a,ye),l(L,c,ye),l(L,r,ye),l(L,d,ye),l(L,p,ye),l(L,f,ye),l(L,g,ye),l(L,S,ye),l(L,h,ye),l(L,R,ye),l(L,P,ye),l(L,W,ye),l(L,I,ye),l(L,F,ye),l(L,A,ye),l(L,O,ye),l(L,Z,ye),l(L,Y,ye),l(L,se,ye),l(L,de,ye),l(L,J,ye),l(L,ae,ye),l(L,Me,ye),l(L,je,ye),l(L,ie,ye),l(L,Re,ye),l(L,we,ye),l(L,qe,ye),l(L,ze,ye),l(L,q,ye),l(L,Ye,ye),l(L,He,ye),l(L,Le,ye),l(L,Ne,ye),l(L,Fe,ye),l(L,_,ye),l(L,H,ye),l(L,pe,ye),l(L,ue,ye),l(L,Se,ye),l(L,Pe,ye),l(L,k,ye),l(L,he,ye),l(L,X,ye),Ct(me,L,ye),l(L,We,ye),l(L,Ke,ye),l(L,G,ye),l(L,Ce,ye),l(L,ve,ye),l(L,Te,ye),l(L,Qe,ye),l(L,lt,ye),l(L,et,ye),l(L,dt,ye),l(L,Q,ye),l(L,Ue,ye),l(L,ce,ye),l(L,Ie,ye),l(L,ne,ye),l(L,B,ye),l(L,Nt,ye),l(L,qt,ye),l(L,Vt,ye),l(L,w,ye),l(L,le,ye),l(L,oe,ye),l(L,Oe,ye),l(L,Be,ye),l(L,fe,ye),l(L,j,ye),l(L,it,ye),l(L,ft,ye),l(L,Pt,ye),l(L,Bt,ye),l(L,rt,ye),l(L,Dt,ye),l(L,jt,ye),l(L,Ht,ye),l(L,un,ye),l(L,bt,ye),l(L,dn,ye),l(L,Ft,ye),l(L,mn,ye),l(L,Wt,ye),l(L,Dn,ye),l(L,Xt,ye),l(L,Un,ye),l(L,Yt,ye),l(L,In,ye),l(L,$,ye),l(L,Gn,ye),l(L,_n,ye),l(L,di,ye),l(L,xn,ye),l(L,pi,ye),l(L,bn,ye),l(L,fi,ye),l(L,yn,ye),l(L,hi,ye),l(L,Mn,ye),l(L,mi,ye),l(L,Sn,ye),l(L,vi,ye),l(L,Cn,ye),l(L,gi,ye),l(L,En,ye),l(L,_i,ye),l(L,Tn,ye),l(L,xi,ye),l(L,An,ye),l(L,bi,ye),l(L,wn,ye),l(L,yi,ye),l(L,Pn,ye),l(L,D,ye),l(L,ge,ye),l(L,Xi,ye),l(L,ii,ye),l(L,Yi,ye),l(L,ai,ye),l(L,Zi,ye),l(L,si,ye),l(L,Ns,ye),l(L,Ki,ye),l(L,qs,ye),l(L,Ji,ye),l(L,Fs,ye),l(L,Qi,ye),l(L,Os,ye),l(L,ea,ye),l(L,zs,ye),l(L,ta,ye),l(L,Bs,ye),l(L,na,ye),l(L,Hs,ye),l(L,ia,ye),l(L,ks,ye),l(L,aa,ye),l(L,Vs,ye),l(L,sa,ye),l(L,Gs,ye),l(L,oa,ye),l(L,js,ye),l(L,ra,ye),l(L,Ws,ye),l(L,la,ye),$s=!0},p(L,[ye]){const wl={};ye&1&&(wl.$$scope={dirty:ye,ctx:L}),me.$set(wl)},i(L){$s||(ht(me.$$.fragment,L),$s=!0)},o(L){mt(me.$$.fragment,L),$s=!1},d(L){L&&(o(e),o(n),o(a),o(c),o(r),o(d),o(p),o(f),o(g),o(S),o(h),o(R),o(P),o(W),o(I),o(F),o(A),o(O),o(Z),o(Y),o(se),o(de),o(J),o(ae),o(Me),o(je),o(ie),o(Re),o(we),o(qe),o(ze),o(q),o(Ye),o(He),o(Le),o(Ne),o(Fe),o(_),o(H),o(pe),o(ue),o(Se),o(Pe),o(k),o(he),o(X),o(We),o(Ke),o(G),o(Ce),o(ve),o(Te),o(Qe),o(lt),o(et),o(dt),o(Q),o(Ue),o(ce),o(Ie),o(ne),o(B),o(Nt),o(qt),o(Vt),o(w),o(le),o(oe),o(Oe),o(Be),o(fe),o(j),o(it),o(ft),o(Pt),o(Bt),o(rt),o(Dt),o(jt),o(Ht),o(un),o(bt),o(dn),o(Ft),o(mn),o(Wt),o(Dn),o(Xt),o(Un),o(Yt),o(In),o($),o(Gn),o(_n),o(di),o(xn),o(pi),o(bn),o(fi),o(yn),o(hi),o(Mn),o(mi),o(Sn),o(vi),o(Cn),o(gi),o(En),o(_i),o(Tn),o(xi),o(An),o(bi),o(wn),o(yi),o(Pn),o(D),o(ge),o(Xi),o(ii),o(Yi),o(ai),o(Zi),o(si),o(Ns),o(Ki),o(qs),o(Ji),o(Fs),o(Qi),o(Os),o(ea),o(zs),o(ta),o(Bs),o(na),o(Hs),o(ia),o(ks),o(aa),o(Vs),o(sa),o(Gs),o(oa),o(js),o(ra),o(Ws),o(la)),Et(me,L)}}}const rx={title:"Relaciones interpersonales en la consultoría",slug:"relaciones-interpersonales-consultoria",coverImage:"/src/assets/posts-covers/mono-espejo.jpg",coverPosition:"normal",coverAuthor:"Pedro Lastra",excerpt:"Un análisis sobre la consultoría y la formación a directivos de software.",date:"2024-09-05T13:06:23.177Z",updated:"2024-09-05T13:06:23.903Z",hidden:!0,tags:["Personal","Laboral","Consultoría"],keywords:["trabajo","consultor","consultoría"],type:"default"};class lx extends Kt{constructor(e){super(),Jt(this,e,null,ox,Zt,{})}}const cx=Object.freeze(Object.defineProperty({__proto__:null,default:lx,metadata:rx},Symbol.toStringTag,{value:"Module"}));function ux(i){let e;return{c(){e=gt("Por si para alguien es importante que lo recalque, cuando digo directivo digo también directiva/e.")},l(t){e=_t(t,"Por si para alguien es importante que lo recalque, cuando digo directivo digo también directiva/e.")},m(t,n){l(t,e,n)},d(t){t&&o(e)}}}function dx(i){let e,t=`Siempre es una buena señal y honra a una persona el que entienda que hay
un problema con sus competencias, o que
considere que es bueno acercarse a la realidad técnica de los empleados a cargo,
pero también es una mala señal que
exista ese miedo a que se sepa públicamente que está solicitando ayuda o
formación.`,n,a,s=`Más de la mitad de directivos que he formado en dirección de proyectos de
software como consultor ha sido de manera particular lejos de su entorno laboral.
El tener una preocupación por la percepción de sus competencias técnicas y
una pérdida de autoridad es en sí un problema. Da mucho para hablar en otro
momento.`,c,r,u=`Pero los que realmente me preocupan y de los que vengo a hablar hoy son
aquellos que ni siquiera son conscientes de que sus carencias de conocimiento
técnico están destruyendo a su equipo.`,d,p,v,f,g="💩 Dirigir proyectos de software sin conocimiento técnico",E,S,h=`Hablando con otros compañeros de profesión, parece que no soy el único que ha
concluído alguna auditoría interna exponiendo que el problema principal
que estanca al desarrollo de un proyecto reside en una mala dirección y no en
las decisiones tomadas por desarrolladores.`,m,R,P=`Esto no suele gustar, dado que
quien insiste en la contratación de servicios de auditoría y consultoría suele
ser algún directivo/jefe de proyecto, algunos con maliciosa esperanza de que
señale a algún empleado.
Verse como la fuente del problema suele hacerles pensar que se han pegado un
tiro en el pie al contratarme.`,N,W,I=`Muchos jefes de proyecto de software sin nociones técnicas (existen, y muchos) no
comprenden que el error es una parte natural de este arte. No comprenden que es
necesario dedicar el tiempo que haga falta a asegurar una correcta testabilidad
y realizar refactoring (reescribir o rediseñar algunas partes del código para
mejorar su mantenibilidad, testabilidad, etc), y que aún así seguirá siendo
necesario la monitorización y seguirá habiendo errores.`,z,F,A=`Un directivo que no comprende los procesos de desarrollo solo ve que el producto
no está cambiando de cara al cliente, interesado o usuario. No tiene capacidad para
saber si se está haciendo realmente algo o le están mintiendo en su cara mientras
dicen que están mejorando el código.`,T,O,Z=`Aún peor, muchos asumen que si su equipo lleva una semana haciendo refactoring
creen que es porque hicieron cosas mal y que ahora están corrigiendo errores,
cuando en un primer momento tendrían que haberlo hecho “bien”.`,K,Y,se=`Muchos ven a equipos técnicos como meros obreros que tienen que decidir
algo, planificarlo y hacerlo “bien”, no comprenden la naturaleza del error, la
deuda técnica, la flexibilidad y dinamismo que debe
haber en los procesos de desarrollo.`,re,de,J=`Un directivo así solo mete presiones y no tiene capacidad para determinar el
estado ni el rumbo del proyecto, no le salva ni el delegar porque nunca
podrá comprender el feedback que pueda recibir de la persona en la que delega.`,De,ae,Me=`Lo mejor que puede pasar con un directivo así es que delegue completamente y con
fé ciega en alguien que sí tenga competencias. Será con suerte porque tampoco
sabrá identificar a esa persona. Entonces se acaba dando cuenta de que su papel es
completamente irrelevante, y no solo él se da cuenta de ello. Cuando nadie
necesita un capitán, el capitán solo es un estorbo, un imbécil con autoridad
que además suele cobrar más.`,Je,je,ie=`Pero cuando no delegan es mucho peor. No solo son dispensables, también entorpecen a
todo el equipo, fomentan malas prácticas por exigir resultados visibles cuanto
antes y generan una fuerte sensación de impotencia, ansiedad y estancamiento
profesional en todos los desarrolladores que se ven obligados a dar “resultados”,
siendo esto sinónimo de “cambios que el jefe pueda notar”. Por no decir que no suelen asumir ni una
sola de las responsabilidades que deben asumir como directivos en un proyecto
de software, porque muchas requieren algunos conocimientos técnicos base.`,Ee,Re,we="Tratando con directivos",ke,qe,ze=`Por suerte, hasta ahora todos los directivos con los que he llegado a toparme
en mi actividad han podido comprender los problemas derivados de su
incompetencia técnica, y todos han podido ver los errores y tremendas
estupideces que estaban diciendo y cometiendo tras una correcta formación, pero
desde luego no es una tarea sencilla.`,at,q,Ye=`La comunicación con directivos puede ser complicada, se necesita
otro lenguaje, se necesita otro tono y se necesitan enfoques muy prácticos,
directos, precisos y tajantes. Es normal, recordemos que no dejan de ser seres
humanos que han estado en posiciones de “poder”, algunos tomándose muy en
serio ese “poder” y a veces demasiado tiempo.`,nt,He,Le=`Es muy frecuente que en su trayectoria profesional hayan comido discusiones muy absurdas con
personas que se quejan sin dar soluciones. Es frecuente que sean ellos los que
hayan tenido que decir “hasta aquí” y zanjar asuntos aún ante el descontento de alguien
demasiadas veces, y esto y otras tantas cosas acaban por generar conductas a veces
demasiado autoritarias que les hacen cerrar oídos y los vuelven algo más
cabezotas, también algo menos empáticos.`,st,Ne,Fe=`Una postura típica es considerar que los conocimientos técnicos no son parte
de su competencias esenciales, y ahí es importante cortarles inmediatamente y no dar espacio:
si quieren dirigir un proyecto de software, deben aprender unas bases técnicas
y acercarse a la realidad de sus empleados a cargo. No es negociable.`,U,_,H=`El trabajo de un
consultor cuando debe tratar con directivos en su mismo entorno de trabajo es
más curioso y se acerca a partes iguales al de
consejero real y al de dom/dominatrix: tener la sutileza para provocar cambios
sin cuestionar su autoridad delante del equipo, y tener la firmeza para darle
algunos latigazos en privado cuando sea necesario, a lo que suelen estar
sorprendentemente dispuestos, especialmente cuando son ellos los que han pagado
por tu servicio para mejorar la situación laboral.`,xe,pe,ue=`Por lo demás, no se aleja de trabajar junto a cualquier otro miembro de la
plantilla, solo cambia el tipo de conocimientos que necesito que aprenda y
la profundidad a la que deben aprenderlo. No
necesito que un directivo sepa programar, pero sí lo justo para que pueda
entender de primera mano cómo funcionan algunos ciclos de desarrollo y la
importancia de saber especificar requisitos. Para eso necesito que como
mínimo no sienta que está leyendo chino al ver código.`,Ge,Se,Pe=`Por otra parte, es un buen trabajo de empatía, porque muchos saben que sus
empleados realizan un ejercicio intelectual que puede ser estresante, pero no
se imaginan a qué nivel hasta que realmente lo sufren, aunque solo vean la
complejidad de un ejercicio de introducción de una FP.`,Ze,k,he=`También ayuda a acercarse a la realidad de la explosión tecnológica, saber
cómo de rápido evoluciona todo, a los fenómenos derivados de esto y los
problemas que pueden acarrear en la motivación de sus empleados a cargo
(como la famosa fatiga tecnológica). Todo esto se traduce a una mejor toma de
decisiones cruciales.`,tt;return p=new ti({props:{$$slots:{default:[ux]},$$scope:{ctx:i}}}),{c(){e=x("p"),e.textContent=t,n=y(),a=x("p"),a.textContent=s,c=y(),r=x("p"),r.textContent=u,d=y(),Mt(p.$$.fragment),v=y(),f=x("h2"),f.textContent=g,E=y(),S=x("p"),S.textContent=h,m=y(),R=x("p"),R.textContent=P,N=y(),W=x("p"),W.textContent=I,z=y(),F=x("p"),F.textContent=A,T=y(),O=x("p"),O.textContent=Z,K=y(),Y=x("p"),Y.textContent=se,re=y(),de=x("p"),de.textContent=J,De=y(),ae=x("p"),ae.textContent=Me,Je=y(),je=x("p"),je.textContent=ie,Ee=y(),Re=x("h2"),Re.textContent=we,ke=y(),qe=x("p"),qe.textContent=ze,at=y(),q=x("p"),q.textContent=Ye,nt=y(),He=x("p"),He.textContent=Le,st=y(),Ne=x("p"),Ne.textContent=Fe,U=y(),_=x("p"),_.textContent=H,xe=y(),pe=x("p"),pe.textContent=ue,Ge=y(),Se=x("p"),Se.textContent=Pe,Ze=y(),k=x("p"),k.textContent=he},l(X){e=b(X,"P",{"data-svelte-h":!0}),C(e)!=="svelte-323h1a"&&(e.textContent=t),n=M(X),a=b(X,"P",{"data-svelte-h":!0}),C(a)!=="svelte-6jfw7f"&&(a.textContent=s),c=M(X),r=b(X,"P",{"data-svelte-h":!0}),C(r)!=="svelte-128xgm7"&&(r.textContent=u),d=M(X),St(p.$$.fragment,X),v=M(X),f=b(X,"H2",{"data-svelte-h":!0}),C(f)!=="svelte-1rdxl44"&&(f.textContent=g),E=M(X),S=b(X,"P",{"data-svelte-h":!0}),C(S)!=="svelte-1gh1z9j"&&(S.textContent=h),m=M(X),R=b(X,"P",{"data-svelte-h":!0}),C(R)!=="svelte-16qt68x"&&(R.textContent=P),N=M(X),W=b(X,"P",{"data-svelte-h":!0}),C(W)!=="svelte-1m8rdbx"&&(W.textContent=I),z=M(X),F=b(X,"P",{"data-svelte-h":!0}),C(F)!=="svelte-1m4hq6f"&&(F.textContent=A),T=M(X),O=b(X,"P",{"data-svelte-h":!0}),C(O)!=="svelte-l9x7lv"&&(O.textContent=Z),K=M(X),Y=b(X,"P",{"data-svelte-h":!0}),C(Y)!=="svelte-1kethm3"&&(Y.textContent=se),re=M(X),de=b(X,"P",{"data-svelte-h":!0}),C(de)!=="svelte-8qowcd"&&(de.textContent=J),De=M(X),ae=b(X,"P",{"data-svelte-h":!0}),C(ae)!=="svelte-1symv4t"&&(ae.textContent=Me),Je=M(X),je=b(X,"P",{"data-svelte-h":!0}),C(je)!=="svelte-1ft41dr"&&(je.textContent=ie),Ee=M(X),Re=b(X,"H2",{"data-svelte-h":!0}),C(Re)!=="svelte-y356br"&&(Re.textContent=we),ke=M(X),qe=b(X,"P",{"data-svelte-h":!0}),C(qe)!=="svelte-uaqa2t"&&(qe.textContent=ze),at=M(X),q=b(X,"P",{"data-svelte-h":!0}),C(q)!=="svelte-1ril95z"&&(q.textContent=Ye),nt=M(X),He=b(X,"P",{"data-svelte-h":!0}),C(He)!=="svelte-jyiq0e"&&(He.textContent=Le),st=M(X),Ne=b(X,"P",{"data-svelte-h":!0}),C(Ne)!=="svelte-1p0xfdd"&&(Ne.textContent=Fe),U=M(X),_=b(X,"P",{"data-svelte-h":!0}),C(_)!=="svelte-p3wnw"&&(_.textContent=H),xe=M(X),pe=b(X,"P",{"data-svelte-h":!0}),C(pe)!=="svelte-lo7wd"&&(pe.textContent=ue),Ge=M(X),Se=b(X,"P",{"data-svelte-h":!0}),C(Se)!=="svelte-wxdtbe"&&(Se.textContent=Pe),Ze=M(X),k=b(X,"P",{"data-svelte-h":!0}),C(k)!=="svelte-9w55yz"&&(k.textContent=he)},m(X,me){l(X,e,me),l(X,n,me),l(X,a,me),l(X,c,me),l(X,r,me),l(X,d,me),Ct(p,X,me),l(X,v,me),l(X,f,me),l(X,E,me),l(X,S,me),l(X,m,me),l(X,R,me),l(X,N,me),l(X,W,me),l(X,z,me),l(X,F,me),l(X,T,me),l(X,O,me),l(X,K,me),l(X,Y,me),l(X,re,me),l(X,de,me),l(X,De,me),l(X,ae,me),l(X,Je,me),l(X,je,me),l(X,Ee,me),l(X,Re,me),l(X,ke,me),l(X,qe,me),l(X,at,me),l(X,q,me),l(X,nt,me),l(X,He,me),l(X,st,me),l(X,Ne,me),l(X,U,me),l(X,_,me),l(X,xe,me),l(X,pe,me),l(X,Ge,me),l(X,Se,me),l(X,Ze,me),l(X,k,me),tt=!0},p(X,[me]){const We={};me&1&&(We.$$scope={dirty:me,ctx:X}),p.$set(We)},i(X){tt||(ht(p.$$.fragment,X),tt=!0)},o(X){mt(p.$$.fragment,X),tt=!1},d(X){X&&(o(e),o(n),o(a),o(c),o(r),o(d),o(v),o(f),o(E),o(S),o(m),o(R),o(N),o(W),o(z),o(F),o(T),o(O),o(K),o(Y),o(re),o(de),o(De),o(ae),o(Je),o(je),o(Ee),o(Re),o(ke),o(qe),o(at),o(q),o(nt),o(He),o(st),o(Ne),o(U),o(_),o(xe),o(pe),o(Ge),o(Se),o(Ze),o(k)),Et(p,X)}}}const px={title:"Primatología: directivos ",slug:"primatologia-directivos",coverImage:"/src/assets/posts-covers/mono-espejo.jpg",coverPosition:"normal",coverAuthor:"Andre Mouton",excerpt:"Un análisis sobre la consultoría y la formación a directivos y jefes de proyecto en proyectos de desarrollo de software.",date:"2024-09-06T07:06:23.177Z",updated:"2024-09-06T07:06:23.903Z",hidden:!0,tags:["Personal","Laboral","Consultoría"],keywords:["trabajo","consultor","consultoría"],type:"default"};class fx extends Kt{constructor(e){super(),Jt(this,e,null,dx,Zt,{})}}const hx=Object.freeze(Object.defineProperty({__proto__:null,default:fx,metadata:px},Symbol.toStringTag,{value:"Module"})),mx={sources:{avif:""+new URL("../assets/any-code.CFI7ySdt.avif",import.meta.url).href+" 640w, "+new URL("../assets/any-code.ChCtRogW.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/any-code.C8s4CXVk.webp",import.meta.url).href+" 640w, "+new URL("../assets/any-code.DcSfFKdy.webp",import.meta.url).href+" 1280w",png:""+new URL("../assets/any-code.BNjfBBW2.png",import.meta.url).href+" 640w, "+new URL("../assets/any-code.CsSctziI.png",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/any-code.CsSctziI.png",import.meta.url).href,w:1280,h:720}},vx=Object.freeze(Object.defineProperty({__proto__:null,default:mx},Symbol.toStringTag,{value:"Module"})),gx={sources:{avif:""+new URL("../assets/blizzard.B0n5vUrb.avif",import.meta.url).href+" 640w, "+new URL("../assets/blizzard.nTJkc5qf.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/blizzard.CybShHHZ.webp",import.meta.url).href+" 640w, "+new URL("../assets/blizzard.C8i5Cr0L.webp",import.meta.url).href+" 1280w",jpeg:""+new URL("../assets/blizzard.CehEdUNF.jpeg",import.meta.url).href+" 640w, "+new URL("../assets/blizzard.DanEHBUr.jpeg",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/blizzard.DanEHBUr.jpeg",import.meta.url).href,w:1280,h:720}},_x=Object.freeze(Object.defineProperty({__proto__:null,default:gx},Symbol.toStringTag,{value:"Module"})),xx={sources:{avif:""+new URL("../assets/jon-tyson.CpLcHNBP.avif",import.meta.url).href+" 640w, "+new URL("../assets/jon-tyson.CGY63FNr.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/jon-tyson.Cp146D7f.webp",import.meta.url).href+" 640w, "+new URL("../assets/jon-tyson.CjWtVi3C.webp",import.meta.url).href+" 1280w",jpeg:""+new URL("../assets/jon-tyson.sgBkeOW9.jpeg",import.meta.url).href+" 640w, "+new URL("../assets/jon-tyson.MygLIirx.jpeg",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/jon-tyson.MygLIirx.jpeg",import.meta.url).href,w:1280,h:720}},bx=Object.freeze(Object.defineProperty({__proto__:null,default:xx},Symbol.toStringTag,{value:"Module"})),yx={sources:{avif:""+new URL("../assets/machinery.CBcXNtDz.avif",import.meta.url).href+" 640w, "+new URL("../assets/machinery.BSg4eTqW.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/machinery.XKRnVKXm.webp",import.meta.url).href+" 640w, "+new URL("../assets/machinery.CVc1jLYE.webp",import.meta.url).href+" 1280w",jpeg:""+new URL("../assets/machinery.CmYyaLYN.jpeg",import.meta.url).href+" 640w, "+new URL("../assets/machinery.lcec4MJm.jpeg",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/machinery.lcec4MJm.jpeg",import.meta.url).href,w:1280,h:720}},Mx=Object.freeze(Object.defineProperty({__proto__:null,default:yx},Symbol.toStringTag,{value:"Module"})),Sx={sources:{avif:""+new URL("../assets/maquina-escribir.ocOQ3ckB.avif",import.meta.url).href+" 640w, "+new URL("../assets/maquina-escribir.MJCCWAI_.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/maquina-escribir.BnNhWCjk.webp",import.meta.url).href+" 640w, "+new URL("../assets/maquina-escribir.CI-vJ5nO.webp",import.meta.url).href+" 1280w",jpeg:""+new URL("../assets/maquina-escribir.CR4I1sxo.jpeg",import.meta.url).href+" 640w, "+new URL("../assets/maquina-escribir.D_dAKKRX.jpeg",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/maquina-escribir.D_dAKKRX.jpeg",import.meta.url).href,w:1280,h:720}},Cx=Object.freeze(Object.defineProperty({__proto__:null,default:Sx},Symbol.toStringTag,{value:"Module"})),Ex={sources:{avif:""+new URL("../assets/mono-espejo.DzLKRbb2.avif",import.meta.url).href+" 640w, "+new URL("../assets/mono-espejo.BAKynXAY.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/mono-espejo.Ddhs2ZMX.webp",import.meta.url).href+" 640w, "+new URL("../assets/mono-espejo.DHYr2_Wv.webp",import.meta.url).href+" 1280w",jpeg:""+new URL("../assets/mono-espejo.DRdjxkSr.jpeg",import.meta.url).href+" 640w, "+new URL("../assets/mono-espejo.DFCEYnu1.jpeg",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/mono-espejo.DFCEYnu1.jpeg",import.meta.url).href,w:1280,h:720}},Tx=Object.freeze(Object.defineProperty({__proto__:null,default:Ex},Symbol.toStringTag,{value:"Module"})),Ax={sources:{avif:""+new URL("../assets/paisaje-miedo.DBFuYu9l.avif",import.meta.url).href+" 640w, "+new URL("../assets/paisaje-miedo.CZGKQdgn.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/paisaje-miedo.D_7fOhrA.webp",import.meta.url).href+" 640w, "+new URL("../assets/paisaje-miedo.BPgBLAZ-.webp",import.meta.url).href+" 1280w",jpeg:""+new URL("../assets/paisaje-miedo.TpHsYGSs.jpeg",import.meta.url).href+" 640w, "+new URL("../assets/paisaje-miedo.DzkZpwmi.jpeg",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/paisaje-miedo.DzkZpwmi.jpeg",import.meta.url).href,w:1280,h:720}},wx=Object.freeze(Object.defineProperty({__proto__:null,default:Ax},Symbol.toStringTag,{value:"Module"})),Px={sources:{avif:""+new URL("../assets/pio-round-fail-test.LC2_1E1I.avif",import.meta.url).href+" 640w, "+new URL("../assets/pio-round-fail-test.DYV41UhK.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/pio-round-fail-test.Dw2-sPvT.webp",import.meta.url).href+" 640w, "+new URL("../assets/pio-round-fail-test.DFm94EAo.webp",import.meta.url).href+" 1280w",png:""+new URL("../assets/pio-round-fail-test.BlNGe3_C.png",import.meta.url).href+" 640w, "+new URL("../assets/pio-round-fail-test.sUgEF5ut.png",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/pio-round-fail-test.sUgEF5ut.png",import.meta.url).href,w:1280,h:720}},Rx=Object.freeze(Object.defineProperty({__proto__:null,default:Px},Symbol.toStringTag,{value:"Module"})),Lx={sources:{avif:""+new URL("../assets/starfish.D2P8hSmn.avif",import.meta.url).href+" 640w, "+new URL("../assets/starfish.DwHCSMoP.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/starfish.Dfj_-D5_.webp",import.meta.url).href+" 640w, "+new URL("../assets/starfish.d5pPDI95.webp",import.meta.url).href+" 1280w",jpeg:""+new URL("../assets/starfish.Di2y8SqM.jpeg",import.meta.url).href+" 640w, "+new URL("../assets/starfish.CayEXQ_w.jpeg",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/starfish.CayEXQ_w.jpeg",import.meta.url).href,w:1280,h:720}},Dx=Object.freeze(Object.defineProperty({__proto__:null,default:Lx},Symbol.toStringTag,{value:"Module"})),Ux={sources:{avif:""+new URL("../assets/tree-shaking.CiijQW-8.avif",import.meta.url).href+" 640w, "+new URL("../assets/tree-shaking.CVASrZOr.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/tree-shaking.rN-B0IuQ.webp",import.meta.url).href+" 640w, "+new URL("../assets/tree-shaking.C6f3tNrs.webp",import.meta.url).href+" 1280w",jpeg:""+new URL("../assets/tree-shaking.DwjQOLAz.jpeg",import.meta.url).href+" 640w, "+new URL("../assets/tree-shaking.BVwql0Kq.jpeg",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/tree-shaking.BVwql0Kq.jpeg",import.meta.url).href,w:1280,h:720}},Ix=Object.freeze(Object.defineProperty({__proto__:null,default:Ux},Symbol.toStringTag,{value:"Module"})),Nx={sources:{avif:""+new URL("../assets/valla.DaMGKg_i.avif",import.meta.url).href+" 640w, "+new URL("../assets/valla.zzk0y5bn.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/valla.BjJKHA0T.webp",import.meta.url).href+" 640w, "+new URL("../assets/valla.CSlq1MCB.webp",import.meta.url).href+" 1280w",jpeg:""+new URL("../assets/valla.CuKW0Rqf.jpeg",import.meta.url).href+" 640w, "+new URL("../assets/valla.CyjHcVT7.jpeg",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/valla.CyjHcVT7.jpeg",import.meta.url).href,w:1280,h:720}},qx=Object.freeze(Object.defineProperty({__proto__:null,default:Nx},Symbol.toStringTag,{value:"Module"})),jx=(i=!1)=>{var s;const n={...Object.assign({"/src/posts/autonomia-ajenidad-1.md":ku,"/src/posts/caso-suite-cosby.md":$u,"/src/posts/cuantas-muertes-evitables.md":dd,"/src/posts/deja-esperar-otros.md":Bg,"/src/posts/discursos-segregacionistas.md":Gg,"/src/posts/el-hacking-a-google.md":e_,"/src/posts/especificacion-visual-caso-point-it-out.md":S_,"/src/posts/miedo-de-decir-miedo-de-ser.md":A_,"/src/posts/peligro-trivializar-typescript.md":D_,"/src/posts/por-que-un-blog-en-2024.md":B_,"/src/posts/tamano-no-importa-tree-shakeables.md":Y_,"/src/posts/traspaso-proyectos.md":Q_}),...Object.assign({"/src/posts/borradores/autonomia-ajenidad-2.md":ax,"/src/posts/borradores/relaciones-interpersonales-consultoria.md":cx,"/src/posts/ocultados/primatologia-directivos.md":hx})},a=[];for(const c in n){const r=n[c];if(r){let u=r.metadata.coverImage;u&&(u=u.substring(u.lastIndexOf("/")+1)),a.push({...r.metadata,coverImage:u,path:c,html:i&&r.default.render?(s=r.default.render())==null?void 0:s.html:void 0})}}return a},Wx=i=>i.filter(e=>!e.hidden).sort((e,t)=>new Date(e.date).getTime()>new Date(t.date).getTime()?-1:new Date(e.date).getTime()<new Date(t.date).getTime()?1:0).map(e=>{const t=Fx(i,e);return{...e,relatedPosts:t}}),$x=i=>{const e={};return i.forEach(t=>{t.tags.forEach(n=>{const a=zx(n);e[a]||(e[a]={name:n,posts:[]}),e[a].posts.push(t)})}),e},Fx=(i,e,t=3)=>i.filter(a=>!a.hidden&&a.slug!==e.slug).sort((a,s)=>{var u,d;const c=(u=a.tags)==null?void 0:u.filter(p=>{var v;return(v=e.tags)==null?void 0:v.includes(p)}),r=(d=s.tags)==null?void 0:d.filter(p=>{var v;return(v=e.tags)==null?void 0:v.includes(p)});return(c==null?void 0:c.length)>(r==null?void 0:r.length)?-1:(c==null?void 0:c.length)<(r==null?void 0:r.length)?1:0}).slice(0,t).map(a=>({...a})),Ox={á:"a",à:"a",ä:"a",é:"e",è:"e",ë:"e",í:"i",ì:"i",ï:"i",ó:"o",ò:"o",ö:"o",ú:"u",ù:"u",ü:"u",ñ:"n",ç:"c"," ":"-","/":"-"},zx=i=>i.toLowerCase().replace(/[áéíóúàèìòùäëïöüñç\/ ]/g,e=>Ox[e]??e),Xx=Object.assign({"../../assets/posts-covers/any-code.png":vx,"../../assets/posts-covers/blizzard.jpg":_x,"../../assets/posts-covers/jon-tyson.jpg":bx,"../../assets/posts-covers/machinery.jpg":Mx,"../../assets/posts-covers/maquina-escribir.jpg":Cx,"../../assets/posts-covers/mono-espejo.jpg":Tx,"../../assets/posts-covers/paisaje-miedo.jpg":wx,"../../assets/posts-covers/pio-round-fail-test.png":Rx,"../../assets/posts-covers/starfish.jpg":Dx,"../../assets/posts-covers/tree-shaking.jpg":Ix,"../../assets/posts-covers/valla.jpg":qx});export{ku as _,$x as a,$u as b,Xx as c,dd as d,Bg as e,Gg as f,Wx as g,e_ as h,jx as i,S_ as j,A_ as k,D_ as l,B_ as m,Y_ as n,Q_ as o,zx as s};
