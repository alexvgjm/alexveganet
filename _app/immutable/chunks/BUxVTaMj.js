var ca=Object.defineProperty;var ua=(o,e,a)=>e in o?ca(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a;var g=(o,e,a)=>ua(o,typeof e!="symbol"?e+"":e,a);import"./CWj6FrbW.js";import"./69_IOA4Y.js";import{f as b,b as t,d as S,r as x,p as V,k as se,ae as pa,c as O,s as l,h as A,o as ma,m as K,t as H,i as ga,j as ba,ac as ha,e as pe,a as z,g as v,n as i,aI as va,aJ as fa,S as qa,A as ze,al as ya,J as ja}from"./BduZyM7k.js";import{I as k}from"./CNfEwzh9.js";import{s as U}from"./CUZXlhwM.js";import{s as Ee}from"./D4COoUHs.js";import{e as ne,i as me}from"./C0NDRyn_.js";import{d as wa,e as xa}from"./B6loGvSK.js";import{s as X}from"./BSOZMg1Q.js";import{i as _a}from"./BqxltznQ.js";import{C as j}from"./DlsCqhfG.js";import{I as D}from"./Dav-uZcp.js";import{i as W}from"./611aVr9j.js";import{o as ce,a as Sa}from"./k_-SACZf.js";import{s as za}from"./CJDWlBBp.js";import{p as B}from"./Km-0Pu8Z.js";import{V as Z,i as $e,l as Ea,k as re,G as $a,o as Ta,b as Pa,A as Te,q as ge,r as be,M as F,B as te,w as Ca,x as Pe,C as La,D as Ce,y as Aa,z as ka,Q as Le,E as he,O as Ra,W as Da,T as Ma,u as Va,H as Oa,d as Ia,J as Ua,K as Ha,L as Na}from"./CAlu0Wgt.js";import{C as ie}from"./B-RjqsGW.js";import{s as Ae}from"./DIabmNBn.js";import{s as Ba}from"./Wkx9sMwb.js";var Ga=b('<span class="no-wrap svelte-49cqox"><!></span>');function de(o,e){var a=Ga(),s=S(a);Ae(s,e,"default",{}),x(a),t(o,a)}var Fa=b('<span class="line-through svelte-kze7de"><!></span>');function ke(o,e){var a=Fa(),s=S(a);Ae(s,e,"default",{}),x(a),t(o,a)}var Ya=(o,e,a)=>e(a()),Wa=b("<button> </button>"),Za=b('<section class="tabs-container svelte-svnq2w"><nav class="tabs-container__navigation svelte-svnq2w"></nav> <div class="tabs-container__content svelte-svnq2w"><!></div></section>');function Ka(o,e){V(e,!0);let a=se({}),s=ma(void 0);function n(h){K(s,h,!0)}function r(h,m){a[h]=m,A(s)===void 0&&K(s,h,!0)}pa("tabs",{tabs:a,active:()=>A(s),goToTab:n,registerTab:r});var c=Za(),d=S(c);ne(d,21,()=>Object.entries(a),([h,m])=>h,(h,m)=>{var _=ga(()=>ba(A(m),2));let f=()=>A(_)[0],M=()=>A(_)[1];var R=Wa();let w;R.__click=[Ya,n,f];var E=S(R,!0);x(R),H($=>{w=X(R,1,"tabs-container__tab-button svelte-svnq2w",null,w,$),U(E,M())},[()=>({"tabs-container__tab-button--active":A(s)===f()})]),t(h,R)}),x(d);var u=l(d,2),p=S(u);Ee(p,()=>e.children),x(u),x(c),t(o,c),O()}wa(["click"]);function ve(o,e){V(e,!0);const a=ha("tabs");a.registerTab(e.id,e.tabButtonContent);var s=pe(),n=z(s);{var r=c=>{var d=pe(),u=z(d);Ee(u,()=>e.children),t(c,d)};_a(n,c=>{a.active()===e.id&&c(r)})}t(o,s),O()}const Xa=""+new URL("../assets/tabs-context.BGQcv530.png",import.meta.url).href,Re={title:"Arneses para testeo de componentes de UI",slug:"arneses-testing-componentes",excerpt:"Ventajas de los arneses en testing de componentes compuestos.",date:"2026-01-16T01:26:23.177Z",updated:"2026-01-16T01:26:23.903Z",tags:["Testing/TDD/BDD/ATDD","UI/UX","Component design"],keywords:["arneses","harness","testing"],type:"default"},{title:qr,slug:yr,excerpt:jr,date:wr,updated:xr,tags:_r,keywords:Sr,type:zr}=Re;var Qa=b("<h1>Estás en la primera pestaña</h1> <p>Este es el contenido de la primera pestaña.</p>",1),Ja=b("<h1>Estás en la segunda pestaña</h1> <p>Este es el contenido de la segunda pestaña.</p>",1),eo=b("<!> <!>",1),ao=b(`<p>No paro de encontrarme este caso últimamente. Considera un componente
contenedor con pestañas, que se pueda definir de la siguiente forma:</p> <!> <p>Aquí el resultado:</p> <!> <p>Son dos tipos de componente, <code>TabsContainer</code> y <code>Tab</code>,
si bien el segundo solo tiene sentido dentro del primero.</p> <p>De entrada, este tipo de componentes presenta un desafío de comunicación.
Por ejemplo, la cabecera (la línea de pestañas como tal) es renderizada
en el propio contenedor principal como un <code>&lt;nav&gt;</code> con elementos <code>&lt;button&gt;</code> en este caso. Cabe preguntarse cómo
sabe el padre exactamente qué hijos lo componen.</p> <p>No estamos indicando por propiedades o atributos cuáles son las pestañas,
sino que establecemos su contenido como hijos directos del contenedor.</p> <p>No es trivial en absoluto que el contenedor “sepa” qué hijos tiene,
como sí podría ocurrir en un entorno vanilla con DOM puro (filtrando
con children aquellos que tienen alguna clase).</p> <p>Existen múltiples formas de resolver este problema de comunicación,
y una de las más típicas y efectivas es usar un contexto compartido
expuesto por el padre hacia los hijos.</p> <p>En bibliotecas como React o frameworks como Svelte contamos con contextos.
En Vue tenemos provide/inject, donde provide genera un contexto
e inject lo expone en el descendiente que queramos.</p> <p>En este caso (con Svelte), podemos hacer que cuando un componente Tab es montado, este acceda
a un conjunto de funciones expuestas por contexto (una API) del padre (TabsContext),
entre ellas una función <em>registerTab</em>.</p> <p>En una parte de TabsContainer (padre):</p> <!> <p>En una parte de Tab (hijo):</p> <!> <!> <h2>La complejidad de testar componentes compuestos</h2> <p>Cuando se requiere el renderizado compuesto de múltiples componentes, muchas
bibliotecas tienen ciertas dificultades por las dependencias de mecanismos más
avanzados o modernos.</p> <p>A veces simplemente no funcionan. Especialmente
cuando dependemos de mecanismos de bibliotecas de terceros, nuevos o de renderizado
“programático”. En este caso la
contextAPI de Svelte puede simplemente fallar con los mecanismos tradicionales: no está
preparada para una creación programática de componentes hijos <em>(a fecha de publicación de esta entrada)</em>,
sino que espera
un entorno de ejecución algo más “real” donde desde un componente se construyan todos.</p> <p>Esto nos lleva a la estrategia de utilizar “arneses”. Observa el siguiente componente:</p> <!> <!> <!> <p>Es un arnés (<em>harness</em>), el componente que usaremos en los tests para montar
el escenario completo:</p> <!> <h2>¿Contras?</h2> <p>En testing siempre se aconseja evitar lógicas complejas en la construcción
de los escenarios de pruebas. Es preferible siempre un determinismo
brutal y que se pueda leer de entrada qué se pretende. Explicitar
cada caso cuanto sea posible.</p> <p>Esta preferencia choca con la idea de usar arneses, que introducen
complejidad y un nivel de abstracción en la construcción del
escenario de testeo. Aún más si son parametrizables como es el caso.</p> <p>Sin embargo, las alternativas que me he encontrado hasta ahora en
distintas auditorías tomaban un camino que a veces conllevaba
rediseñar el componente <em>(por ejemplo, para que solo trabajara
con propiedades de forma explícita, sin admitir contenido
arbitrario como hijos)</em> o hacer sobreingeniería hasta conseguir que
funcionara una característica de un framework o biblioteca en un flujo
natural.</p> <p>Lo peor es que ni siquiera se obtenía finalmente una mayor legibilidad
del test. Pero aún así, lo que se pudiera ganar en legibilidad y
comprensión del test se perdía en la implementación en sí misma. Adaptar el diseño
para mejorar la testabilidad es algo deseable, pero recordemos que
el principal objetivo es la sostenibilidad, no hacer tests bonitos
por tener tests bonitos.</p>`,1);function oo(o){var e=ao(),a=l(z(e),2);j(a,{language:"HTML",showLanguage:!1,noMargin:!0,children:(m,_)=>{i();var f=v();f.nodeValue=`<TabsContainer>

    <Tab id="tab-1" title="Primera pestaña">
        <h1>Estás en la primera pestaña</h1>
        <p>Este es el contenido de la primera pestaña.</p>
    </Tab>

    <Tab id="tab-2" title="Segunda pestaña">
        <h1>Estás en la segunda pestaña</h1>
        <p>Este es el contenido de la segunda pestaña.</p>
    </Tab>

</TabsContainer>`,t(m,f)},$$slots:{default:!0}});var s=l(a,4);Ka(s,{children:(m,_)=>{var f=eo(),M=z(f);ve(M,{id:"tab-1",tabButtonContent:"Primera pestaña",children:(w,E)=>{var $=Qa();i(2),t(w,$)},$$slots:{default:!0}});var R=l(M,2);ve(R,{id:"tab-2",tabButtonContent:"Segunda pestaña",children:(w,E)=>{var $=Ja();i(2),t(w,$)},$$slots:{default:!0}}),t(m,f)},$$slots:{default:!0}});var n=l(s,18);j(n,{language:"TypeScript",showLanguage:!1,noMargin:!0,children:(m,_)=>{i();var f=v();f.nodeValue=`// TabsContainer.svelte
// ... 
    export type TabID = string
    export type TabTitle = string
    export interface TabsContext {
    	currentTabID: () => TabID | undefined,
    	registerTab: (tabID: TabID, title: TabTitle) => void
    }
    
    let currentTabID  = $state<TabID | undefined>()
    let tabsInfo: { [key: TabID]: TabTitle } = $state({})

    function registerTab(tabID: TabID, title: TabTitle) {
    	tabsInfo[tabID] = title
    	const isNoTabActive = currentTabID === undefined
    	if (isNoTabActive) { currentTabID = tabID }
    }
    
    setContext<TabsContext>('tabs', {
    	currentTabID: () => currentTabID,
    	registerTab
    })
// ...`,t(m,f)},$$slots:{default:!0}});var r=l(n,4);j(r,{language:"TypeScript",showLanguage:!1,noMargin:!0,children:(m,_)=>{i();var f=v();f.nodeValue=`// Tab.svelte
// ...
interface TabsProps {
    readonly id: TabID,
    title: TabTitle,
    children: Snippet
}

let { id, title, children }: TabsProps = $props()
const tabsContext = getContext<TabsContext>('tabs')
// svelte-ignore state_referenced_locally
tabsContext.registerTab(id, title)
// ...`,t(m,f)},$$slots:{default:!0}});var c=l(r,2);D(c,{shadow:!1,get src(){return Xa},alt:"Diagrama de comunicación entre TabsContainer y Tab mediante contexto"});var d=l(c,10);j(d,{language:"HTML",showLanguage:!1,noMargin:!0,children:(m,_)=>{i();var f=v();f.nodeValue=`<!-- TabsTestHarness.svelte -->
<script lang="ts">`,t(m,f)},$$slots:{default:!0}});var u=l(d,2);j(u,{language:"TypeScript",showLanguage:!1,children:(m,_)=>{i();var f=v();f.nodeValue=`import TabsContainer from '$lib/ui/TabsContainer.svelte'
import Tab from '$lib/ui/Tab.svelte'

interface TabConfig {
    id: string
    title: string
    content: string
}

let { tabs = [] }: { tabs: TabConfig[] } = $props()`,t(m,f)},$$slots:{default:!0}});var p=l(u,2);j(p,{language:"HTML",showLanguage:!1,children:(m,_)=>{i();var f=v();f.nodeValue=`<\/script>


<TabsContainer>
{#each tabs as tab (tab.id)}
    <Tab id={tab.id} title={tab.title}>
        {tab.content}
    </Tab>
{/each}
</TabsContainer>`,t(m,f)},$$slots:{default:!0}});var h=l(p,4);j(h,{language:"TypeScript",showLanguage:!1,noMargin:!0,children:(m,_)=>{i();var f=v();f.nodeValue=`// Parte de TabsContainer.svelte.spec.ts ...
it('shows first tab content by default', async () => {
    render(TabsTestHarness, { // Se usa el arnés de testeo
        props: {
            tabs: [ // Se le pasan datos para que construya las <Tab>
                { id: 'tab1', title: 'First Tab', content: 'Content 1' },
                { id: 'tab2', title: 'Second Tab', content: 'Content 2' }
            ]
        }
    })

    await expect.element(page.getByText('Content 1')).toBeInTheDocument()
    await expect.element(page.getByText('Content 2')).not.toBeInTheDocument()
})
// ...
    `,t(m,f)},$$slots:{default:!0}}),i(10),t(o,e)}const so=Object.freeze(Object.defineProperty({__proto__:null,default:oo,metadata:Re},Symbol.toStringTag,{value:"Module"})),De={title:"Autonomía y ajenidad (parte 1)",slug:"autonomia-ajenidad-1",coverImage:"/src/assets/posts-covers/starfish.jpg",coverPosition:"normal",coverAuthor:"Pedro Lastra",excerpt:"El trabajador autónomo no existe y el trabajo no es un orgullo.",date:"2024-08-24T13:06:23.177Z",updated:"2024-08-24T13:06:23.903Z",hidden:!1,tags:["Personal","Laboral","Software libre"],keywords:["trabajo","autónomo"],type:"default"},{title:Er,slug:$r,coverImage:Tr,coverPosition:Pr,coverAuthor:Cr,excerpt:Lr,date:Ar,updated:kr,hidden:Rr,tags:Dr,keywords:Mr,type:Vr}=De;var no=b(`<p>NOTA: Dead Cells no es libre, es software privativo. No entraré en el 
debate de si un videojuego debe ser libre para que sea ético porque en años no
he conseguido tener una posición clara al respecto. Podría considerar que es 
suficiente que las herramientas que permiten su elaboración lo sean, pues las 
ramas artísticas sufren demasiado en nuestro modelo económico como para 
simplemente liberar los resultados del trabajo creativo enfocado a 
entretenimiento, y más siendo el trabajo de toda una vida.</p> <p>En todo caso, considero 
que como parte vital de la cultura deben ser más accesibles, pero en estos 
contextos lamentablemente libre y accesible significa también gratis para la 
mayoría dada la libertad de libre distribución.</p>`,1),ro=b(`<p>Opinión algo impopular: el trabajador autónomo no existe y el trabajo no es un
orgullo. Iré por partes en esta entrada que repasa algunos
conceptos que se consideran importantes en la enseñanza de formación
profesional pero no en la universidad 🤷‍♂️.</p> <h2>El autónomo no existe</h2> <p>Siempre que digo que soy autónomo siento que suelto una incoherencia. ¿Cómo puede alguien
considerarse autónomo si necesita permiso y pagar para serlo?
La única diferencia es que tu jefe es un ente inflexible llamado estado,
que concentra poderes contra los que no puedes luchar de manera individual.</p> <p>Para muchos, ser autónomo significa vivir
en la falsa creencia de tener control sobre su vida laboral, rehuyendo de la
cooperación y defensa laboral colectiva, bajando la cabeza porque:</p> <ul><li>Ya conocía los términos y los aceptó: “es lo que toca” suele pensar.</li> <li>Sabe que de forma individual no tiene ningún poder y que salvo sectores muy
concretos la huelga es inefectiva y solo dará paso a otros autónomos oportunistas.</li> <li>Cree que los sindicatos no le apoyarán. Probablemente debido a que los sindicatos
de autónomos son un chiste. <ul><li>A ver, si te presentas usando la palabra “autónomo” ante la CNT se reirán en tu cara mientras te señalan al edificio de hacienda más cercano, pero eso no significa que no te consideren un trabajador ni vayan a pasar de ti. Otra cosa es que puedan conseguir algo.</li></ul></li> <li>Se vuelve parte de uno el quejarse de hacienda y cuánto le están reventando.
Es como la vecina que presume de dolencias.</li></ul> <p>Yo no me libro, e intento convencerme cada día de que al menos tengo libertad
para mandar al carajo al cliente o lo que esté haciendo y ya, sin ninguna carga
de responsabilidad. Lo cierto es que no es algo que haría, por ética, pero que
en teoría se puede.</p> <p>En teoría, un trabajador asalariado goza de la misma libertad: una relación laboral exige
voluntariedad <small>(discutible con excepciones de servicios públicos ante
emergencias nacionales de extrema necesidad, como el caso de bomberos o
sanitarios)</small>, así que en teoría,
la mayoría puede mandar al carajo su trabajo cuando quiera (xd…).</p> <p>La voluntariedad en el contexto del derecho laboral en la relación laboral
significa que nadie puede obligarte a trabajar (ni el estado). En ese
sentido el trabajo tiene carácter voluntario (que no significa no remunerado). Claro,
igual de voluntario que comer, e igual de voluntario que pagar un alquiler.
Igual de voluntario que no rajarse las venas.</p> <h2>La ajenidad</h2> <p>Me he críado escuchando un conjunto de falacias
fundamentada en una especie de incoherente orgullo obrero, que en algún
momento acabé interiorizando como algo racional: “yo tengo X años cotizados”,
“yo llevo trabajando desde los 15 años”, “tú no sabes lo que es trabajar”, etc.</p> <p>Yo solo escucho “he intercambiado X tiempo de mi vida por dinero y la promesa
de más dinero”. Y no cualquier tiempo de su vida, sino de su juventud. Esto
ni siquiera se puede tildar de reduccionista.</p> <p>No entiendo cómo algunos casos que son claros
signos de sumisión son considerados dignos de orgullo. Veo gente
pasando años trabajando para una empresa para la que solo es un recurso,
un trozo de carne o engranaje en su máquina de hacer dinero, y que muestran con orgullo los
días cotizados como si fuera ejemplo de disciplina o autodesarrollo, una
cicatriz de una épica batalla ganada. Eso mientras viven
en la realidad consumista desenfrenada de un capitalismo predatorio donde
no están construyendo ningún futuro y donde están igual que como empezaron,
salvo que con media vida convertida a promesas de una pensión.</p> <p>Y tengo un serio problema con eso. Concretamente con la ajenidad. Cuando la
patronal describe la ajenidad puede hacerlo de una forma tan bonita como:</p> <p>“Exención al trabajador de las consecuencias directas de su labor, de sus costos
y riesgos de la producción, recibiendo un salario en contraprestación de su esfuerzo”.</p> <p>Cuando podría resumirse en: “los frutos del trabajo solo pertenecen al empleador”
y que yo extiendo con “y no importa si el trabajador realiza una actividad creativa
con la que el empleador va a seguir cobrando toda su vida. Se paga por su esfuerzo
presente limitado a la duración de la relación laboral.”</p> <h3>La ajenidad en los trabajos creativos</h3> <p>El problema de la ajenidad es que viene acompañado de cadenas para tu
cerebro cuando se trata de un desarrollo creativo. Cadenas que permanecen
tras el cese de la relación laboral.</p> <p>En realidad, el empleador no es solo dueño de las consecuencias del trabajo
y sus frutos, es dueño del trabajo en sí mismo y de una parte de ti. Ejemplo:
como desarrollador de herramientas y metodologías custom, se te ocurre alguna
cosita en tu actividad laboral que facilita muchos procesos y ayuda al resto
del equipo, algo muy común en el trabajo de un experto en Developer Experience
o un enablement engineer.</p> <p>Consideras que tu desarrollo podría ser igual de útil para otros profesionales
o empresas, así que lo publicas por tu cuenta aportando a la comunidad. Al final
sale de tu cabeza, ¿no? Pues no. Saldrá de tu cabeza, pero te han pagado un
salario para que la tengas pudriéndose en ella.</p> <p>De pronto, ya no tienes solo un jefe, tienes a un maestro de esclavos que te
dice qué puedes hacer o no con tu investigación y tus ideas, porque en el fondo
no son tuyas, amenazando con poderes judiciales si quieres
tan solo compartirlo altruistamente, ya no digamos monetizarlo por tu cuenta.</p> <p>La acusación más típica y mínima es que tu idea puede o pudo dar una ventaja
frente a la competencia mientras se te pagó por ello y que si tú la estás
exponiendo, estás apoyando a dicha competencia. Acusaciones relacionadas a
la concurrencia desleal <small>(la palabra concurrencia no implica “mientras
trabajas en”. Da igual si esto ocurre tras finalizar contrato).</small></p> <h2>Anarcosindicalismo y cooperativas</h2> <p>Duele, pero he de reconocer que entre los franceses hay algunos
de los mejores ejemplos recientes que nos ha brindado la humanidad. No hablo
de Gojira, que también, sino en este contexto laboral, de Motion Twin.</p> <p>Es la empresa que más uso como ejemplo de increíble modelo de desarrollo de
software, tooling y videojuegos. Eso al margen de sus tendencias políticas o
su organización laboral (al menos en sus inicios), que comentaré luego.</p> <p>Este grupo de colegas centraba su trabajo en el desarrollo de juegos usando
Adobe Flash. Entre ellos se encontraba Nicolas Cannasse desarrollando un
lenguaje de alta abstracción y extremadamente orientado a multiplataforma
desde 2005.</p> <p>Cuando Flash murió ya tenían más que pulido su lenguaje Haxe y casi una década
de iniciado su propio motor de renderizado/videojuegos, Heaps.io.</p> <p>Con eso, trabajando con sus propias herramientas de la manera que a ellos les
gustaba, desarrollaron la joya de Dead Cells, con más de 10 millones de copias
vendidas sin contar DLCs. Y creo que sin tener en cuenta las más de 5 millones
en su versión Android ni la asociación con plataformas estilo Netflix.</p> <p>Siendo un juego que no frecuenta ofertas de bundles a precios regalados ni
nada similar, al multiplicar verás que hablamos de millones facturados (incluso
aunque solo costase 50 céntimos). Para
un pequeño equipo de 8 personas creo que da suficiente para unas cuantas vidas.
Pero hay otras cosillas interesantes:</p> <ul><li>Se describen como una cooperativa de trabajadores (puedes leer las descripciones
en su propia página, dentro de una pedazo de estrella roja). En entrevistas no
hablan precisamente pocas veces de cooperativa anarcosindicalista. <ul><li>Importante aclarar que el tiempo ha transcurrido y han fundado otro
estudio anexo que se aleja de esta perspectiva.</li></ul></li> <li>Sus herramientas principales son libres y compartidas con la comunidad. Cualquier
persona que las tenga dispone de las cuatro libertades fundamentales
del software libre y de código abierto. Comprenden que el éxito de un videojuego como producto
artístico está vinculado al cómo se usan las herramientas y no a la posesión
de las mismas. Podríamos considerar a las herramientas como
el medio de producción.</li></ul> <!> <p>Han hecho muchas cosas bien, ¿pero se salvan de algo? Las cooperativas fomentan
el carácter asociativo y el rechazo a una organización vertical
y jerarquías de poder en el contexto laboral, con una única excepción: el estado.
Ninguna diferencia con el supuesto autónomo, más allá de posibles “beneficios”
fiscales pasados ciertos umbrales. El beneficio de pagar un poquito menos al
estado soberano, que repartirá sabiamente el dinero entre ayuntamientos para
cubrir necesidades esenciales, como organizar conciertos de Camela si fuera
España.</p> <p>En su caso además habrán tenido que bajar la cabeza con todo tipo de individuos
y empresas abusivas como lo es Steam, llevándose hasta un posible 50%
por distribución en su plataforma.</p> <h2>Mi única condición en cualquier trabajo</h2> <p>Lo único que solicito a empresas que por alguna incomprensible razón me
quieren en su plantilla es la anulación de la ajenidad, aunque
eso implique a veces mayores responsabilidades o trabajar a puro equity. Todo mi
trabajo me pertenece, o al menos en una parte considerable como para no sufrir
consecuencias si quiero publicarlo bajo mis propias condiciones.</p> <p>La mayoría se esfuma y no vuelven a contactarme en la vida, pero a veces cuela.
He conseguido algunos porcentajes por derechos de autor en software de la
rama sanitaria con este modelo.</p> <p>Si hago cuentas, muy probablemente esto me reporte bastante menos que haber
aceptado un contrato de asalariado, pero al menos tengo control sobre su destino. Y
esto beneficia a la parte contratante, que no sería contratante
sino socio. No solo reduce la responsabilidad fiscal, reduce los riesgos y los
costes al no contratar, también asegura una mayor implicación del
profesional que al final pasa a ser parte del proyecto y sus resultados, que se
preocupará de su éxito porque de él depende su reputación y sus beneficios.</p> <p>También existen empresas que en su modelo de desarrollo no tienen
ningún miedo y fomentan la publicación de herramientas y metodologías
sabiendo que eso manifiesta una imagen de excelencia y seguridad en lo que hacen.</p> <p>A su vez mejoran las capacidades divulgativas y visibilizan a sus desarrolladores,
generando al menos un ambiente de mayor crecimiento profesional.
Pese a la ajenidad, en ellas sabes que el trabajo que desarrollas al menos no
estará anclado a nadie y hasta se te agradecería el divulgarlo.</p> <h2>Esto no es solo mi trabajo</h2> <p>Al menos la parte de desarrollo propio,
tooling y subnormaladas gráficas, seguiré haciéndolo me de o no dinero, incluso
pagaría si tuviera que hacerlo. Sobre la consultoría hablaré en otra entrada.</p> <p>La suerte de que mi hobby es especialmente
rentable, y la mala suerte de vivir en una sociedad donde te llaman
“nini” de manera peyorativa por no explotar el conocimiento
o habilidad, por no querer convertirme en carne para una corporación o por ver 20 años de
retraso en el mundo académico y no querer tocarlo ni con un palo.</p> <p>En la segunda parte hablaré un poco más sobre mis intereses en
un trabajo, pero adelanto que el último de ellos es el dinero (sin renunciar
a ello, tampoco soy tonto). Todos mis hobbies son baratos o gratuitos,
no soy coleccionista de ninguna cosa y practico una filosofía minimalista
por naturaleza, no es que lo fuerce. Mucho dinero tendrían que ofrecerme
para conseguir verme tentado a trabajar en algo con lo que no esté cómodo.</p> <p>Me dice un colega “si no fueras tan vago, trabajarías menos”
(no es una errata, es una frase con mucho sentido), pero es que se
me hace un mundo hincar la rodilla, bajar la cabeza o pasar por el aro. Ya lo
hice durante algunos años, moviéndome por miedo al juicio ajeno, por no
decepcionar y yendo en contra de mi naturaleza. Acabé consiguiendo lo contrario,
petando de mala manera, aislándome, alejando y decepcionando a todos los que
confiaban en mí.</p> <p>Por otra parte cada vez tolero menos las normas y las jerarquías absurdas de
los ambientes corporativos y académicos. En el momento en el
que alguien me diga alguna incoherencia como que tengo que cumplir con
un horario de trabajo “porque sí”, aunque eso fastidie mi productividad,
perjudicándome a mí y a los objetivos de la empresa, me piraría a mi casa.</p>`,1);function to(o){var e=ro(),a=l(z(e),58);k(a,{children:(s,n)=>{var r=no();i(2),t(s,r)},$$slots:{default:!0}}),i(28),t(o,e)}const io=Object.freeze(Object.defineProperty({__proto__:null,default:to,metadata:De},Symbol.toStringTag,{value:"Module"})),Me={title:"🔴 Caso de la suite Cosby",slug:"caso-suite-cosby",coverImage:"/src/assets/posts-covers/blizzard.jpg",coverPosition:"normal",coverAuthor:"Annie Nyle",excerpt:"Repaso algunas experiencias con este caso, implicados, nuestra postura y resultados.",date:"2024-10-06T13:00:23.177Z",updated:"2024-10-06T13:00:23.903Z",hidden:!1,tags:["Personal","Tooling"],keywords:["Blizzard"],type:"default",fullReload:!1},{title:Or,slug:Ir,coverImage:Ur,coverPosition:Hr,coverAuthor:Nr,excerpt:Br,date:Gr,updated:Fr,hidden:Yr,tags:Wr,keywords:Zr,type:Kr,fullReload:Xr}=Me;var lo=b(`No voy a centrarme en los hechos principales de este caso, sino en
algunos datos interesantes y relacionados con nuestra actividad, pero daré
algo de contexto adicional que no suele explicarse en otros artículos. <p style="margin-top: 0.5rem; line-height: 1.25rem; color: var(--color-second-light)">AVISO: he escrito esto muy rápido en algo de rato libre, espera encontrar más de alguna errata o párrafo sobrecargado hasta que saque tiempo a revisarlo.</p>`,1),co=b(`<!> <p>Ha pasado más de una década desde que se registró el primer incidente relacionado con uno de los tantos casos de acoso y abuso sexual que salieron a la luz en un periodo muy turbulento para la industria de los videojuegos. Este caso, conocido popularmente como el “Caso de la suite Cosby” o más formalmente como la “Demanda del Departamento de Igualdad en el Empleo y la Vivienda de California (DFEH, por sus siglas en inglés) contra Activision Blizzard”, se centró especialmente en la investigación de asuntos de acoso sexual, entre ellos el suicidio de Kerri Moynihan.</p> <p>No me gusta la denominación formal, sentida como utilizada deliberadamente para reducir el alcance del problema a un asunto de jurisdicción local y de intereses variables. Un caso iniciado de esta manera es aprovechado por las corporaciones como parte de una estrategia a largo plazo, esperando que eventualmente caiga en manos de un gobierno más favorable. El DFEH, ahora renombrado como el Departamento de Derechos Civiles de California (CRD), tampoco está exento de polémica.</p> <p>En las corporaciones, el “non bis in idem” (“no dos veces por lo mismo”, recogido en la mayoría de países de occidente en forma de artículo en constitución que otorga el derecho a no volver a ser juzgado por la misma causa), es usado como una herramienta más. Permite elegir el momento oportuno para ser juzgado por algo indefendible, ante la entidad más conveniente, en el lugar más adecuado y con el mayor número de acusaciones posibles de golpe. Así, se minimiza cualquier impacto sobre la corporación y se intenta resolver todo en un único proceso.</p> <p>Sin ánimo de quitar hierro al asunto, la suite Cosby era una conveniente portada
para una gigante montaña de denuncias y toxicidad que habían creado un
entorno de alta “fluidez laboral”, una forma de decir que nadie quería trabajar
ahí y que había ciclado la mayoría de la plantilla, no quedando ni una cuarta
parte de la Blizzard original ni sus ideas. El caso de la Suite Cosby era lo
bastante mediático para ser la punta de lanza en una demanda, y lo
suficientemente barato de solucionar.</p> <p>Pero la demanda de la DFEH no parece haber sido la idónea para
Activision Blizzard,
sino una escala inevitable tras el insulto inicial propuesto por la Comisión de
Oportunidad y Empleo Igualitario (EEOC, del inglés), de ofrecer una indemnización
de unos $18 millones, a repartir entre todos los empleados en plantilla entre
2016 y 2021. Unos 10000 empleados, incluyendo hombres y mujeres 🤷‍♂️.
Con un reparto igualitario como el que se proponía, correspondía a $1800 dólares
por empleado en acuerdo llevado mediante decreto de consentimiento.</p> <p>Si eso no suena lo suficientemente absurdo, para el cálculo de los
18 millones solo se tuvo en cuenta el número de empleados que aceptaron y
participaron en el acuerdo con la EEOC, que como imaginarás ante las
condiciones, no fueron precisamente muchos.</p> <p>La EEOC generalizó y metió todas las demandas
laborales en un mismo saco junto a las de acoso sexual, de forma que, muy
conveniente para Activision Blizzard, solventarían todos sus problemas de golpe.</p> <h2>Antisindicalismo y estado</h2> <p>Lo anterior es difícil de comprender para mucha gente, ¿cómo una agencia federal
que se hace llamar “Comisión de Oportunidad y Empleo Igualitario” parece hacer
todo lo contrario y guiar
hacia una salida fácil a una corporación que parece atentar contra sus
empleados?</p> <p>¿Por qué?, si mientras Bobby Kotick soltaba bonitas palabras vacías para sus empleados (y
algunas otras no tan bonitas), Activision Blizzard no coopera y
destruye pruebas que le son requeridas durante la investigación.</p> <p>Esto se explica porque mientras prometen proteger a sus empleados, también
contratan a las mejores firmas
antisindicalistas del mundo, como lo es WilmerHale, muy conocida por su brutal
eficiencia para erradicar cualquier indicio de sindicalismo en Amazon.</p> <p>Y aunque parezca no tener relación, lo que hace verdaderamente fuertes a las
firmas como WilmerHale, más allá de su capacidad para impedir la unión, es que
tienen una increíble conexión con los servicios públicos. No solo hacen
su labor impecablemente, también lo hacen afianzando relaciones y haciendo de
puente entre las corporaciones y los poderes federales, incluyendo el judicial.</p> <h2>Nuestra postura</h2> <p>En 2021, unos días antes de explotar públicamente todo este caso, poco antes
del lanzamiento de Diablo 2 Resurrected, mi compañero Cristo Santana y yo
trabajábamos en un generador de sitios estáticos minimalista para realizar una
herramienta para la comunidad.</p> <p>El proyecto, <a href="https://d2runewords.com" rel="nofollow">D2Runewords</a> <em>(Diablo 2 rune words, con palabras juntas de forma
deliberada por SEO)</em>, nació casi a la misma vez que se publicó todo este asunto
de manera masiva. En ese instante
queríamos dejarlo de lado, pero finalmente pensamos en algo mejor:
dejar una nota de disconformidad. Es lo mínimo que podíamos hacer, manifestar
nuestro descontento.</p> <p>Hasta ahí pensábamos que no iba a pasar nada más, una web desconocida y no
posicionada recientemente creada que solo servía de herramienta y base de datos
para la comunidad de un juego relativamente nicho, seguramente sería irrelevante.</p> <h2>¿Sirvió de algo?</h2> <p>Probablemente no cambió nada en absoluto, pero si solo sirvió para que alguna
persona, aunque fuera por un momento, se sintiera apoyada, nos es suficiente.</p> <p>En más de tres años y medio hemos recibido feedback directo de solo nueve
personas, de las cuales dos agradecieron la herramienta en sí sin mencionar al
tema. Entre las siete restantes se encontraba una empleada
de Activision Blizzard con un mensaje algo agridulce:</p> <blockquote><p>Dear Alex and Cristo,</p> <p>on behalf of my entire team, we want to express our sincere gratitude for your support.</p> <p>Unfortunately, it’s not as simple as you suggest to detach ourselves from this company. For
many of us, working here was once a dream. Yet now, it feels more like a nightmare we wish
we could escape, if only there were better opportunities.</p> <p>The work itself is demanding, but what makes it truly difficult is the knowledge that our
efforts go unrecognized. This is the company’s greatest problem.</p> <p>We wish you all the best.</p> <p>Sincerely,</p> <br/>-omito su nombre y rol, por prudencia-</blockquote> <p>De los seis restantes, tres no se habían enterado de qué iba el tema y pedían
más información. Un mensaje que me gustó mucho fue el de Thomas Giuseppe, quien
posteriormente también contribuyó mucho a dar a conocer la herramienta:</p> <blockquote><p>Hey!</p> <p>I just found d2runewords.com, and I think it’s an awesome tool. Basically, it’s the only one
where I can mark what runes I have and clearly see what I can make with them.</p> <p>But I don’t really get the message in the header. I think I’m missing some context, but it
sounds serious. Would it be too much to ask if you could explain what it’s about?</p> <p>Thanks!,<br/> Giu</p></blockquote> <p>Gracias a él nos dimos cuenta de que era importante dejar una referencia al caso
en el mensaje. Parecía que la mayoría ni se había enterado de nada.</p> <p>La página registraba en sus mejores momentos unas 12.000 visitas recurrentes
al mes y unas 300 visitas únicas mensuales (de nuevos usuarios). La diferencia
tan grande entre visitas recurrentes y únicas se debe a que
al tratarse de una webapp herramienta/base de datos, los usuarios
la guardan en marcadores y la consultan regularmente.</p> <p>Hemos visto la página aparecer entre algún streaming de Diablo 2, así que estamos
convencidos de que al menos hemos contribuido con un poco más de visibilización.</p> <h2>¿Cómo está la situación actualmente?</h2> <p>En un correo que no consideramos de feedback, nos preguntaron si la situación
ha mejorado. Lamentablemente no tenemos contacto con ningún empleado. Me he
distanciado mucho del tema, por lo que me es imposible responder a esa pregunta.</p> <p>Sinceramente soy muy poco optimista, pero me alegra ver cómo algo tan simple
como mantener un mensaje puede incomodar a algunas personas y hacer sentir
apoyadas a otras aunque sea un sentimiento fugaz o considerablemente inútil.</p> <p>Respecto al uso de la herramienta, en realidad no me sienta mal que se use
y sea útil, no juzgo a nadie por jugar a ningún juego de esta compañía y menos
a Diablo 2, que se comió la mitad de mi adolescencia.</p> <p>Diablo 2 fue un juego de una
Blizzard en la que sin lugar a dudas también
existía una toxicidad destacable, pero también una cultura que, bajo la
dirección de Morhaime reconocía la calidad y trabajo de sus empleados ante
todo, o eso es lo que se suele decir. Yo prefiero no poner más la mano en el
fuego por ninguna empresa ni sus caras visibles.</p>`,1);function uo(o){var e=co(),a=z(e);k(a,{children:(s,n)=>{i();var r=lo();i(),t(s,r)},$$slots:{default:!0}}),i(60),t(o,e)}const po=Object.freeze(Object.defineProperty({__proto__:null,default:uo,metadata:Me},Symbol.toStringTag,{value:"Module"})),Ve={title:"Cuántas muertes evitables...",slug:"cuantas-muertes-evitables",coverAuthor:"",excerpt:"He publicado una lista de errores comunes un pelín alarmista.",date:"2025-03-27T22:38:29.122Z",updated:"2025-03-27T22:38:29.122Z",hidden:!1,tags:["TDD/BDD/ATDD","Ingeniería software"],keywords:["smells","tests"],type:"default",coverPosition:"top"},{title:Qr,slug:Jr,coverAuthor:et,excerpt:at,date:ot,updated:st,hidden:nt,tags:rt,keywords:tt,type:it,coverPosition:dt}=Ve;var mo=b(`<p>Acabo de publicar un material de presentación relacionado a prácticas que han
causado problemas críticos en múltiples sistemas. Puedes <a href="/avoidable-deaths-by-code">encontrarlo aquí</a>.</p> <p>Es una pequeña recopilación de errores supercomunes junto a un recuento de
víctimas mortales por no considerarlos.</p> <p>Todos los problemas que se presentan me los he topado al menos una vez en
auditorías de los últimos años, aunque no necesariamente vinculados a ningún accidente.
Otros profesionales han referenciado varios de estos errores
con trágicos accidentes y numerosas víctimas mortales.</p> <h2>Sobre el número de muertos</h2> <p>Los números NO son reales, los reales pueden ser menores o mayores, nadie lo
sabe, pero <strong>no es ninguna broma</strong> ni hay que frivolizar con ello. Dicho esto, sí que se puede utilizar como crítica
a algo con lo que me he topado muchísimo en los últimos cinco años:
la falta de rigurosidad a la hora de hablar de muertos en discursos de
seguridad y control de calidad.</p> <p>Hay formas de hablar de muertos con rigurosidad, sin dar cifras que no se tienen
y amparándose en casos reales. Un buen ejemplo se describe en el famoso vídeo
viral de la presentación de Álvaro Sauras, “La idiotez del coche eléctrico” y
el caso (o casos) de
los aceleradores defectuosos de Toyota. En él, se exponen relatos con datos
históricos, acordes y apropiados.</p> <p>En dicho vídeo también se expone el famoso cálculo necrocapitalista de Ford,
donde se valora el coste de corregir un defecto en su flota de vehículos frente
al de indemnizar a la familia de los futuros muertos manteniendo
el defecto. Asumiremos ingenuamente y por salud mental, que estas prácticas ya
no se realizan, o no tan descaradamente.</p> <p>Lo que nos encontramos en numerosos discursos de expertos se aleja
tangencialmente de la calidad da la presentacion de Sauras: opiniones y datos
sacados de la manga. Especialmente en aquellas presentaciones “de puertas para
adentro” y no publicadas.</p> <p>Y es que ya he tenido que preguntar en no pocas ocasiones por el origen de las
fuentes, algo que puede percibirse violento, incluso aunque lo hagas en privado
tras la exposición. He llegado a escuchar a un profesor asegurar que la falta de llaves en
un if provocó la caída en picado al mar de avión de pasajeros de Boeing. La respuesta siempre suele ser la
misma: “no recuerdo ahora, fue de un estudio ahí…”, “me lo dijo Pepito que es un
reconocido experto en seguridad…”, etc.</p> <p>Lo cierto es que rara vez se revela código en los resultados de auditorías
internas, sin importar el daño que haya podido causar. Es realmente difícil
asociar fallos de programación concretos a víctimas mortales, no porque no se produzcan,
no porque no se haya determinado la causa, sino porque no se revela
públicamente el detalle. En su lugar se resume en “error o negligencia de programación”.</p> <p>¿Y la razón? A lo mejor te preguntas si es que los jueces son gilipollas o qué,
pero resulta que matar gente no es motivo para revelar tu inversión, amparado
por la ley de propiedad intelectual, aunque esto pudiera ayudar a que otros no
cometan el mismo error.</p> <p>Doy fé de que en muchas auditorías se encuentran fallos que por muchísima suerte
no llegan a producir víctimas mortales, pero que eventualmente y sin lugar a
dudas las producirían de no haberse auditado. Las
auditorías suelen contar con al menos una clausula de confidencialidad, que
solo se podría romper en caso de que la empresa auditada no estuviera dispuesta
a iniciar un proceso con carácter inmediato para corregir el defecto
potencialmente mortal, paralizando cualquier servicio si es necesario.</p> <p>Todo esto hace que el número de víctimas habidas y por haber sea un completo
misterio, pero que las hay y las habrá, no cabe duda. Como sea, <strong>cualquier
alarmismo y exageración es bienvenida</strong> si eso
implica evitar accidentes mortales por malas prácticas de programación, y aún
más si viene acompañado de tips y soluciones.</p> <h2>Soluciones</h2> <p>Los problemas seleccionados tienen algo en común: son fácilmente prevenibles
incluso de manera automática, y aún así siguen estando muy presentes en
múltiples desarrollos.</p> <p>Algunos quedarían totalmente evidenciados con tan solo un correcto linter +
formateador. Otros se podrían prevenir con un flujo de trabajo que
implique una correcta especificación de requisitos y el desarrollo de tests
adecuados.</p> <p>Por supuesto, lo más importante es la divulgación y menos cultura punitiva para
no disuadir del informe de errores. Esto es un problema que afecta al desarrollo
de software en general, libre o privativo.</p> <p>Aclarar que estas soluciones deberían aplicarse siempre, haya o no
vidas humanas en juego, pues influyen en la calidad de cualquier desarrollo.</p> <h3>Próximamente</h3> <p>Aprovecho a comentar que este mes de abril me encontraré por la península,
asistiendo a algunos eventos e impartiendo dos cursos relacionados al tema
de esta entrada:</p> <ul><li>Valladolid. Del 1 al 4 de abril. Impartiendo un curso de “Seguridad en el desarrollo”
para la junta de Castilla y León.</li> <li>Mérida. Del 21 al 24 de abril. Impartiendo un curso de “Calidad del software, estándares y metodologías”, orientado
a ingenieros y/o técnicos de la Dirección General de Digitalización de la Administración de
la Consejería de Economía, Empleo y Transformación Digital de la Junta de Extremadura.</li></ul> <p>Entre medias quedo a disponibilidad para cualquier servicio presencial, algo que
rara vez realizo porque soy muy comodón de cara a salir de las islas.</p>`,1);function go(o){var e=mo();i(42),t(o,e)}const bo=Object.freeze(Object.defineProperty({__proto__:null,default:go,metadata:Ve},Symbol.toStringTag,{value:"Module"}));var ho=b('<canvas class="three-example"></canvas>');function vo(o,e){V(e,!1);let a=B(e,"sceneManager",8),s=B(e,"id",8);ce(()=>{a().isInitialized()?location.reload():a().getInstance().startRenderLoop()}),Sa(()=>{a().dispose()}),W();var n=ho();H(()=>za(n,"id",s())),t(o,n),O()}class fo{constructor(e,a,s){g(this,"camera");g(this,"canvas");g(this,"pivot");this.camera=e,this.pivot=a,this.canvas=s,e.translateZ(30),a.rotateX(-Math.PI/8),window.addEventListener("resize",()=>this.onResize()),this.onResize()}update(e){this.pivot.rotateOnWorldAxis(new Z(0,1,0),e/20)}onResize(){const e=this.canvas.getBoundingClientRect();this.camera.aspect=e.width/e.height,this.camera.updateProjectionMatrix()}}class qo extends Ce{constructor(a,s){super(a,s);g(this,"freeRotationTarget");this.freeRotationTarget=new Aa,this.freeRotationTarget.position.set(0,-1,0),this.add(this.freeRotationTarget),this.target=this.freeRotationTarget}restoreFreeRotation(){this.target=this.freeRotationTarget}}let I;class Q{constructor(){g(this,"canvas");g(this,"scene");g(this,"renderer");g(this,"cameraControl");g(this,"sun");g(this,"clock");g(this,"hideables",[]);g(this,"rafId",-1);g(this,"accDelta",0);g(this,"resizeListenerRef");this.scene=new $e,this.canvas=document.querySelector("#free-light-example-canvas"),this.renderer=new Ea({canvas:this.canvas,powerPreference:"high-performance",antialias:!0,alpha:!0}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=2;const e=new re,a=new $a;a.add(e),this.cameraControl=new fo(e,a,this.canvas),this.scene.add(a),this.sun=new qo("#ffffff",2),this.sun.position.setY(9),this.sun.castShadow=!0,this.sun.shadow.camera.left=-8,this.sun.shadow.camera.top=8,this.sun.shadow.camera.right=8,this.sun.shadow.camera.bottom=-8,this.sun.shadow.camera.far=18,this.sun.shadow.bias=1e-4,this.sun.shadow.intensity=.8,this.sun.shadow.mapSize.width=512,this.sun.shadow.mapSize.height=512;const s=new Ta(this.sun.shadow.camera),n=new Pa(this.sun);this.scene.add(s),this.scene.add(n),this.scene.add(this.sun);const r=new Te("#ffffff",.2);this.scene.add(r);const c=new ge({color:new be("#444444")}),d=new ge({color:new be("#fd855d")}),u=new F(new te(20,1,20),c);u.receiveShadow=!0,u.castShadow=!0;const p=new F(new te(2,2,2),d);p.receiveShadow=!0,p.castShadow=!0,p.position.setY(5.5),this.scene.add(p);const h=new F(new Ca(3,1.5,4,24),d);h.castShadow=!0,h.receiveShadow=!0,h.position.setY(2.5),this.scene.add(h);const m=new Pe(30,30,"#ffb399","#fd855d");m.material.opacity=.2,m.material.transparent=!0,m.position.setY(.51),this.scene.add(m),this.scene.add(u),this.clock=new La,this.onResize(),this.initListeners(),this.hideables=[m,s,n]}static isInitialized(){return I!==void 0}static dispose(){I&&I.dispose()}static getInstance(){return I||(I=new Q),I}onResize(){const e=this.canvas.getBoundingClientRect();this.renderer.setSize(e.width,e.height)}renderLoop(){this.rafId=requestAnimationFrame(this.renderLoop.bind(this));const e=Math.min(120,this.clock.getDelta());this.render(e)}startRenderLoop(){this.renderLoop()}stopRenderLoop(){this.clock.stop(),cancelAnimationFrame(this.rafId)}render(e=33){this.accDelta+=e,this.accDelta>Math.PI*4&&(this.accDelta-=Math.PI*4,console.log("rendering")),this.sun.rotation.set(Math.sin(this.accDelta),0,Math.cos(this.accDelta/2)),this.cameraControl.update(e),this.renderer.render(this.scene,this.cameraControl.camera)}initListeners(){this.resizeListenerRef=this.onResize.bind(this),window.addEventListener("resize",this.resizeListenerRef),window.addEventListener("error",()=>{this.stopRenderLoop()})}dispose(){this.stopRenderLoop(),I=void 0}showHelpers(e=!0){this.hideables.forEach(a=>a.visible=e)}}const Oe={title:"Deja de esperar por otros",slug:"deja-esperar-otros",coverImage:"/src/assets/posts-covers/jon-tyson.jpg",coverPosition:"normal",coverAuthor:"Jon Tyson",excerpt:"Hacerte tus propias herramientas puede acelerar tu trabajo, explico por qué.",date:"2024-09-13T13:00:23.177Z",updated:"2024-09-13T13:00:23.903Z",hidden:!1,tags:["Tooling","Three.js","DX"],keywords:["herramientas","esperar","Three"],type:"default",fullReload:!1},{title:lt,slug:ct,coverImage:ut,coverPosition:pt,coverAuthor:mt,excerpt:gt,date:bt,updated:ht,hidden:vt,tags:ft,keywords:qt,type:yt,fullReload:jt}=Oe;var yo=b(`<p>Hasta hace unos años me obsesionaba el tiempo, no me dejaba vivir en paz, siempre
sentía que no había tiempo para nada y no disfrutaba ni de un mero paseo o de
leer un libro. Irónicamente, me organizaba mucho peor que ahora.</p> <p>En estos años, tras entender que es muy peligroso intentar controlar demasiado
los tiempos, cuando entendí que cada día con vida es una victoria y cada
arañazo del bruto de mi gato jugando es vida, el tiempo ya no forma parte de
ninguna ecuación. Si algo no llega a tiempo, pues no llega 🤷‍♂️.</p> <p>Esto puede sonar especialmente chocante en un consultor. A algunos clientes
cuando me piden estimaciones de tiempo les digo “esto podría tomar un mes o un
año, quién sabe”. Me miran raro, se supone que si alguien lo sabe soy yo.</p> <p>No suelo infravalorar los factores no medibles y la experiencia me ha enseñado
a no estimar nunca por lo bajo, más vale que sobre el tiempo y darle una alegría
al cliente al terminar mucho antes de lo previsto, a que falte y que el cliente
se lleve una desagradable sorpresa, aunque eso suponga perder algunos clientes
inicialmente a los que tu estimación les parece excesiva.</p> <p>Cuento esto porque el título de esta entrada podría hacer pensar que para mí
es especialmente importante la productividad y no perder el tiempo, pero nada
más lejos de la realidad. Ahora bien, eso no significa que no haya notado una
fuerte diferencia entre la productividad inherente a algunas metodologías.</p> <p>Como frikazo del tooling y DX, sé muy bien que hacerte tus propias herramientas puede
acelerar tu trabajo de una forma que no te puedes ni imaginar. Que quede muy claro cuanto antes: no me refiero a <strong>reinventar la
rueda</strong>. Tampoco lo considero el mal, reinventar tiene numerosas
ventajas y tengo mucho para hablar de ello en otra entrada, pero no, no es
de esto de lo que trato aquí.</p> <h2>Caso real: luces de rotación libre en Three.js</h2> <!> <button> </button> <p>Si estás en un dispositivo compatible <small>(requiere navegador no muy viejo,
compatible con WebGL al menos)</small> estarás viendo una escena donde hay una
luz direccional. Son fuentes de luz usadas para representar iluminación global
direccional plana, habitualmente un sol. Es una luz algo modificada respecto a
la original. Describo luego.</p> <p>Verás, en casi toda solución de renderizado 3D, los objetos
tienen propiedades de rotación, normalmente asociados a una matriz de
transformación. Siempre se puede rotar todo objeto modificando esta propiedad
o bien mediante algún método rotate. En Three.js funciona igual.</p> <p>La primera experiencia de un alumno mío con Three.js fue nefasta. Me contó que tras una hora
lo descartó y volvió a otras soluciones como Unity. Concretamente lo que le hizo
abandonar es que no entendía por qué al rotar una “DirectionalLight” no cambiaba
nada. El objeto que representa la luz, cambiaba, su matriz efectivamente era
actualizada, pero no había cambio visible, porque la luz seguía apuntando a
donde quería (concretamente hacia la dirección 0,0,0).</p> <p>En Three.js (hasta la fecha, release 168), por defecto, la rotación del objeto
que representa a la fuente de luz es independiente de la dirección de la luz.
La luz se controla con la propiedad <code>target</code>. Siempre apunta hacia un objetivo.
Por defecto, hacia las coordenadas 0,0,0, osea, al centro de la escena.</p> <p>En realidad no supone ningún problema: moviendo el target puedes cambiar la
dirección, y el target puede ser un objeto vacío invisible por la escena. De
ahí pueden surgir muchas opciones para realmente conseguir el efecto de rotación
libre.</p> <p>Aunque se topó con esto, se convenció de que no tenía sentido y que Three.js era
simplemente peor que otras soluciones, que no quería estar apagando fuegos,
porque si con algo “tan básico” según él, ya había un obstáculo, ¿qué le
depararía el futuro? Atento a esto:</p> <!> <p>En este caso, <code>sun</code> es una <code>DirectionalLight</code> que como todas, siempre apunta a su
target, no cambia, pero ahora el target es hijo de la luz (con add), y además
está en frente de ella (1 en Z, entiendo +Z como el frente). Así, al rotar
sun también rotas el objeto target, haciendo que efectivamente la luz rote
de manera acorde.</p> <p>¿Básicamente en 2 líneas hemos hecho que una luz rote acorde a su propiedad
de rotación?, ¿de pronto tenemos luces como en Unity u otros sistemas? Esto no
es precisamente un supertrabajo de ingeniería, pero muchos desarrolladores,
juniors y seniors, tienden a creer que las cosas
son más complejas de lo que realmente son y demasiadas veces a adoptar un rol
de mero usuario.</p> <p>Esto es común cuando no están acostumbrados a bibliotecas extensibles, libres y
bien documentadas. Creen que lo que necesitan debe venir integrado en las
bibliotecas que utilizan y se olvidan de que pueden extender cuanto quieran, e
incluso contribuir con sus cambios si son muy útiles para alguien.</p> <p>Me gusta especialmente Three.js porque la mayoría de clases y funciones son
bastante obvias. También porque es un entorno con tantos contribuidores
(más de 800 a fecha de hoy) y tan laxo, que te ves estilos de diseño muy
distintos entre cada parte, haciéndolo muy “multicultural” a su manera.</p> <p>Siguiendo con el ejemplo, podría abstraerse (o especializarse mejor dicho)
todo esto y hacer una nueva clase que herede de DirectionalLight:</p> <!> <p>Y así, cuando necesitemos una luz de rotación libre hacer:</p> <!> <p>Mucho cuidado con esta tendencia a abstraer y generar una clase a la primera de
cambio por un único comportamiento. Es muy fácil que acabemos añadiendo
sorpresas y complejidad accidental.</p> <p>Solo hay que tener cuidado con la propiedad target, si se modifica manualmente
ya deja de ser de rotación libre y actua como una direccional normal. Esto está
bien, así puede servir de DirectionalLight cumpliendo el principio de sustitución
de Liskov en su forma más pura. Guardamos una referencia al nuevo target con esta
responsabilidad, para poder restablecerlo en otro momento si se quiere recuperar
la rotación libre.</p> <h2>Independencia tecnológica</h2> <p>A lo mejor te preguntas por qué iba a querer alguien hacerse sus propias
herramientas cuando ya existen soluciones similares. Empeora si piensas en la dichosa
frase de “reinventar la rueda”. Y puede que te preguntes cómo se supone que
todo esto puede ahorrar tiempo.</p> <p>La siguiente respuesta se aplica con mayor notoriedad cuando eres un profesional
con mucha experiencia o formas parte de un equipo muy experimentado, que puede
crearse la herramienta adecuada en un momento o adaptar otra preexistente. Si
no es así, probablemente te
fatigue o incluso no sepas ni por dónde empezar por la mera falta de costumbre.</p> <p>Cuando las soluciones existentes son privativas la ventaja es bastante obvia:
tener libertad y completo control sobre tus herramientas, sin que una empresa de
turno venga a decirte de pronto qué puedes o no puedes hacer y cuánto debes
pagarle. Además, el soporte a clientes de las herramientas privativas no es tan
maravilloso como muchos intentan defender. Te animo a intentar pedirle a Unity
que solucione alguno de sus millones de problemas técnicos o mejore algunas
de las herramientas más chapuceras que tiene (como las Unity Style Sheets).
Por mucho que pagues una licencia, pasarán de ti.</p> <p>Pero también es muy común hacerse uno mismo herramientas avanzadas pese a que
existan soluciones libres. No siempre uno está
contento con la arquitectura o el rumbo del proyecto por buenas que sean
sus intenciones, y a veces está tan lejos
de tus requisitos que sentirás que estarás más tiempo pidiendo ayuda y apagando
fuegos que haciendo algo útil.</p> <p>Cuando no tienes que esperar por nadie para corregir un problema, sino que
puedes ser tú mismo (o alguien de tu equipo) quien lo haga, con garantías de que
eventualmente se hará y exactamente como uno espera que se haga, no hay pausas
salvo las que tú decidas. Te aseguro que en este mundo se notan más las pausas
que simplemente “ir lento”, no solo en el tiempo, también en la motivación.</p> <p>Además, la complejidad de las características de bibliotecas, frameworks o
sistemas de naturaleza
generalista o multipropósito puede llegar a ser tan grande, que simplemente
estudiarte la documentación y un uso básico se vuelve una pesadilla, siendo
en ocasiones viable y más eficiente hacerte una herramienta a medida o
integrar distintas bibliotecas orientadas a una única responsabilidad.</p> <p>Three.js y PixiJS, por ejemplo, no son motores de videojuego, no tienen
físicas ni muchas otras herramientas, porque su rol principal es de renderizado.
Adaptarlas a un sistema
más complejo implica también estudiarlas hasta el punto que más o menos puedes
entender bien su arquitectura interna, así que te es muy fácil modificarlas
si lo necesitas.</p> <p>En cualquier caso, el objetivo se puede resumir en buscar independencia. Entre más
dependes de soluciones de terceros y entre más completas son sus soluciones,
menos margen de maniobra tienes cuando hay un problema serio con esa dependencia.
He visto a gente mantener issues en bibliotecas durante más de 5 años preguntando
cada 3 meses “¿existe ya una solución?” y quejándose, cuando lo que piden se
puede resolver en una tarde o dos.</p> <p>Por último y no menos importante hay otra razón para querer
hacerte tus propias herramientas: por diversión o arte.
Estoy algo cansado de los utilitaristas. Insisto mucho en que esto es un arte,
y para muchos es nuestro hobby principal además de nuestra profesión. A veces
simplemente queremos intentar hacer algo por nuestra cuenta e intentar hacerlo
mejor, sin desmerecer cualquier otra solución previa y sin ánimo de aportar nada
o competir.</p>`,1);function jo(o,e){V(e,!1);const a=qa();function s(){K(a,!A(a)),Q.getInstance().showHelpers(A(a))}va(()=>{},()=>{K(a,!0)}),fa(),W();var n=yo(),r=l(z(n),14);vo(r,{id:"free-light-example-canvas",get sceneManager(){return Q}});var c=l(r,2),d=S(c);x(c);var u=l(c,14);j(u,{language:"TypeScript",children:(m,_)=>{i();var f=v();f.nodeValue=`const sun = new DirectionalLight('#ffffff', 2)
sun.target.position.setZ(1)
sun.add(sun.target)`,t(m,f)},$$slots:{default:!0}});var p=l(u,12);j(p,{language:"TypeScript",children:(m,_)=>{i();var f=v();f.nodeValue=`class RotableDirectionalLight extends DirectionalLight {
    freeRotationTarget: Object3D

    constructor(color: ColorRepresentation, intensity: number) {
        super(color, intensity)
        this.freeRotationTarget = new Object3D()
        this.freeRotationTarget.setZ(1)
        this.add(this.freeRotationTarget)
        this.target = this.freeRotationTarget
    }
}`,t(m,f)},$$slots:{default:!0}});var h=l(p,4);j(h,{language:"TypeScript",children:(m,_)=>{i();var f=v("const sun = new RotableDirectionalLight('#ffffff', 2)");t(m,f)},$$slots:{default:!0}}),i(24),H(()=>U(d,`${A(a)?"Ocultar":"Mostrar"} helpers`)),xa("click",c,s),t(o,n),O()}const wo=Object.freeze(Object.defineProperty({__proto__:null,default:jo,metadata:Oe},Symbol.toStringTag,{value:"Module"})),xo=""+new URL("../assets/diagrama-changeset.KLw6lWUw.png",import.meta.url).href,_o=""+new URL("../assets/captura-unnamed-idle-game.Da0vEvfh.png",import.meta.url).href,Ie={title:"DevLog #1: ChangeSet",slug:"devlog-1-changesets",excerpt:"Inicio DevLog en este blog, hablando de ChangeSets y reactividad",date:"2026-07-18T08:50:23.177Z",updated:"2026-07-18T08:50:23.903Z",tags:["Gamedev","Ingeniería de software"],keywords:["gamedev"],type:"default"},{title:wt,slug:xt,excerpt:_t,date:St,updated:zt,tags:Et,keywords:$t,type:Tt}=Ie;var So=b("<div> </div>"),zo=b('<div slot="left"><h3>Tiempo real</h3> <div class="registro-cambios registro-cambios--tiempo-real svelte-1gm0060"></div></div>'),Eo=b("<div> </div>"),$o=b('<div slot="right"><h3>Actualización controlada</h3> <div class="registro-cambios registro-cambios--lento svelte-1gm0060"></div></div>'),To=b(`<p>He decidido, <em>durante lo que aguante mi motivación</em>, escribir un DevLog enfocado
en la exploración y explicación de mecánicas e ingeniería de software aplicada
a motores gráficos y motores de videojuegos.</p> <p>En este primer DevLog, hablaré de los desafíos de sistemas vivos de alta
actualización y la representación reactiva de su estado en la interfaz de usuario.
Como de costumbre, el objetivo es la separación de
responsabilidades en busca de la testabilidad y sostenibilidad.</p> <h2>Reactividad en sistemas complejos de alta frecuencia de modificación no determinista</h2> <p>Imagina que un sistema vivo muta su estado cada 16ms (60 veces por segundo).
Podrías diseñar un sistema de representación que en cada actualización del estado,
renderice (dibuje) el nuevo estado. No tiene mucho problema, pero añadamos dificultades:</p> <h3>¿Y si cambia el estado 300 veces por segundo?, ¿o de forma irregular?</h3> <p>Esto es muy poquito para un procesador. Pero en un sistema de vista reactiva, cada
cambio de estado es registrado. Esto no significa que
cada cambio sea inmediatamente actualizado en vista, pintado en pantalla. No se puede
dibujar 300 veces por segundo ni tiene sentido, eso sí sería muy caro,
especialmente hablando de elementos web.</p> <p>Pero aunque no se dibuje, sigue teniendo un precio. Seguimos registrando ese cambio.
React, Vue, Svelte, etc. tienen un sistema de microtareas y microbatching que
junta todos los cambios finales y solo pinta una vez por fotograma, adaptado
a demanda del navegador, pero sigue teniendo en cuenta el cambio.</p> <p>Aunque el DOM no sufra, el motor de reactividad sí. Cada mutación obliga al framework a marcar variables como “sucias”, evaluar dependencias y encolar microtareas. Ejecutar este ciclo cientos de veces por segundo para valores intermedios que el usuario jamás llegará a ver en pantalla es lo que conocemos como over-triggering.</p> <h3>¿Y si solo cambian unas pocas partes y no todo el sistema?</h3> <p>Podrías pensar: <em>“pero Álex, en un sistema reactivo no nos importa, suelen tener granularidad a nivel de variable, exceptuando React que apesta por todos lados con su programación funcional, sus modelos inmutables y renderizados completos por defecto…”</em></p> <p><strong>Dificultad</strong>: ¿Dónde tienes esa reactividad? Los frameworks de vista, son frameworks de vista, valga la redundancia. Si quieres aprovechar sus mecanismos de reactividad para controlar el estado del sistema, estarás acoplando tu sistema a un framework de vista.</p> <p><em>(Hago un inciso para recordar que el sistema de reactividad de Vue, @vue/reactivity, está desacoplado y puede usarse con otros fines más allá de la vista)</em></p> <p>El principal problema, como siempre, cae en la testabilidad. Quieres poder probar tu sistema sin necesidad de estar cargando dependencias de terceros con una responsabilidad que ni siquiera estás testando (representación).</p> <h3>Ilustración</h3> <p>Este ejemplo no usa ninguna solución de las planteadas en este artículo, es una
mera “ilustración”. Tenemos algo que
cambia su valor muy rápidamente. Además de una representación mucho más costosa,
también podría ser completamente innecesaria. De hecho, en este caso destruye
la experiencia de usuario, ni siquiera puede leerse correctamente los valores
con esa tasa de refresco.</p> <!> <p>Ambos usan los mismos datos, solo se “pintan” a intervalos diferentes. Uno a tiempo
real y otro cada dos segundos. Ambos tienen en cuenta su valor anterior según
su intervalo para determinar si es subida o bajada. El lento no actualiza su
valor si el valor es el mismo que hace dos segundos (sin cambios relativos).</p> <h2>ChangeSet</h2> <p>Un ChangeSet, <em>en este contexto entendido como estructura de datos</em>, representa un conjunto de cambios. Quizás simples etiquetas o IDs de cosas que han cambiado. En forma más básica, no importa cuántas veces desde la última vez que se revisó el ChangeSet, solo se anota si ha cambiado,
mantiene una naturaleza idempotente frente a múltiples cambios.</p> <p>Es en definitiva, un set, de strings habitualmente. Pueden ser emitidos por un sistema de publicación/subscripción (pub/sub), siendo tratados como ValueObject o el mismo ChangeSet ser en sí mismo dicho sistema, siendo un objeto mutable, subscribíble y publisher. Cada cual con la sobrecarga de responsabilidad que le guste más, ahí no me meto…</p> <p>No tiene por qué almacenar detalles (payloads), no es un sistema de eventos al uso, ni un command bus, ni cosas raras que puedas asociar a una arquitectura basada en eventos. No tiene temporalidad, no tiene por qué saber cuándo se mutó.</p> <p>En esta forma primitiva normalmente no es apto para sistemas de información y en red. Tampoco es ideal en sistemas asíncronos. Cuando se “emite” un ChangeSet, se asume que todos los interesados tienen acceso al estado real, a la única fuente de verdad (que en realidad puede ser una copia
de la fuente de verdad, a fin de evitar modificaciones).</p> <p>El ChangeSet primitivo almacena cambios, sin más, y los emite de golpe (y se limpia), cuando decidamos, a un ritmo que decidamos. <strong>¿Qué tiene de diferente de los dirty flags o sistemas similares de seguimientos de cambios como los que tenemos en frameworks de vista?</strong> En esencia, nada. La única diferencia clave es que lo controlamos nosotros, y esto, entre otras, nos obliga a registrar los cambios de forma explícita.</p> <p>Esto de por sí, a pesar de ser otra responsabilidad y una complejidad añadida, es un fuerte plus: <strong>nos obliga a definir y controlar muy bien todos los puntos de mutación del estado</strong>. Cuando es un rollo mutar cosas, te aseguro que nadie quiere estar duplicando ese rollo en otros lados, evita muchas sorpresas.</p> <figure><!> <figcaption class="svelte-1gm0060">Código primitivo y muy explícito para añadir cambios a un ChangeSet. Se puede añadir mucha magia para que automáticamente al mutar el estado, el ChangeSet también lo registre (mediante proxy mismo), pero aumenta la sorpresa (acciones ocultas) y además, ya no daría miedo mutar fuera de este método, y el miedo previene daños :).</figcaption></figure> <p>Podemos tener numerosos ChangeSets, quizás por temáticas (fomentando el slicing). Ayuda a que un componente de vista solo tenga que subscribirse al ChangeSet que le interesa. Nos permite ajustar la granularidad a nuestro gusto en lugar de tener una granularidad completa por defecto.</p> <p>Quizás también te preguntes <strong>por qué querríamos tener menos granularidad, si al final necesitaríamos tirar de preguntas (if) en muchos casos para ver qué ha cambiado</strong>. Con el tiempo,
verás que las preguntas son una herramienta increíblemente poderosa para dejar
muy claro la intención del código. Más que verlas como un coste computacional
o un error de novato, empieza a verlas como una gran pista de lo que se pretende
hacer y una drástica disminución de la sorpresa, de la sobreingeniería o
de la complejidad accidental.</p> <h2>Caso de uso en idles</h2> <p>No tiene sentido un DevLog sin Dev. Estoy en medio del desarrollo de
un motor custom para un juego tipo idle con gestión
de recursos y muchos otros sistemas complejos. Puede tener cientos
de módulos independientes que se actualizan cientos de veces por segundo, y
debe ser completamente testable sin dependencias de la capa de vista.</p> <p>En un primer momento utilizaba Svelte como vista, y todo el estado del juego era
reactivo mediante la propia reactividad del framework. No funcionaba mal,
pero estaba tomando cada vez más decisiones de diseño que no quería tomar,
basadas en el hecho de que no tengo control sobre el ciclo de actualización
de los elementos del DOM, y por supuesto, acoplando el núcleo del motor a
una biblioteca externa.</p> <p>Pero <strong>soy un yonqui de Svelte y su sistema de runas</strong>. Quería
una vista en Svelte y seguir disfrutando de diseño basado en componentes
reactivos, así que tenía que envolver de alguna manera el estado del motor en
alguna capa reactiva.</p> <p>En una store✨ <em>(estado centralizado, único y accesible globalmente, en una palabra bonita que se han inventado los ingenieros frontend para que nadie les tire piedras por llamarlo por lo que realmente es: un singleton de manual, con sus mismos problemas)</em>, decidí que tendría todo el estado
reactivo que alimentaría a la vista. Los datos de la store se alimentan cuando
el sistema emite los cambios.</p> <!> <p>El flush de los ChangeSet, es decir, emitir notificaciones de cambios y limpiarse,
es controlado, nunca automático. Se necesita una tercera pieza que asuma el rol
de dispatcher. Lo normal, quien se encarga de iniciar el loop de
actualización del juego, también se encarga de este proceso.</p> <!> <h2>Alternativas</h2> <p>Como siempre, existen muchas otras técnicas, mecanismos y patrones. Recientemente he implementado un sistema con cola de eventos.
Algo muy similar, pero con temporalidad. Simplemente todos los eventos que van ocurriendo (con su payload) en un sistema de un juego por turnos, se encolan para luego ser procesados por la vista en el orden y al ritmo adecuado. Un Event Queue mezclado con Command pattern, por si a alguien le interesan nombres conocidos.</p> <p>Ya cada cual con su tema, pero yo últimamente me estoy centrando más en soluciones muy fáciles de entender a largo plazo, por lo explícitas que suelen ser.</p>`,1);function Po(o,e){V(e,!0);let a=se([]),s=se([" "," "," "," "," "," "," "," "," "," "]),n=50,r=50;function c(w,E=a){E.push(w),E.length>10&&E.shift()}function d(){const w=new Date,E=String(w.getHours()).padStart(2,"0"),$=String(w.getMinutes()).padStart(2,"0"),y=String(w.getSeconds()).padStart(2,"0");return`${E}:${$}:${y}`}function u(){for(;;){let w=1+Math.floor(Math.random()*5),E=Math.random()<.5;if(!(E&&w>r-10)&&!(!E&&r+w>99)){r+=E?-w:w,c(E?`${d()} | Caída  | Actual: ${r} €`:`${d()} | Subida | Actual: ${r} €`);break}}}function p(){if(n==r)return;let w=n>r?"Caída ":"Subida";n=r,c(`${d()} | ${w} | Actual: ${r} €`,s)}setInterval(()=>{u()},30),setInterval(()=>{p()},2e3);var h=To(),m=l(z(h),30);ie(m,{noMargin:!0,gap:0,leftWidth:"auto",rightWidth:"auto",leftGrow:!0,rightGrow:!0,$$slots:{left:(w,E)=>{var $=zo(),y=l(S($),2);ne(y,21,()=>a,me,(P,q)=>{var L=So();let T;var ae=S(L,!0);x(L),H(oe=>{T=X(L,1,"registro-cambios__msg svelte-1gm0060",null,T,oe),U(ae,A(q))},[()=>({"registro-cambios__msg--caida":A(q)[11]=="C"})]),t(P,L)}),x(y),x($),t(w,$)},right:(w,E)=>{var $=$o(),y=l(S($),2);ne(y,21,()=>s,me,(P,q)=>{var L=Eo();let T;var ae=S(L,!0);x(L),H(oe=>{T=X(L,1,"registro-cambios__msg svelte-1gm0060",null,T,oe),U(ae,A(q))},[()=>({"registro-cambios__msg--caida":A(q)[11]=="C"})]),t(P,L)}),x(y),x($),t(w,$)}}});var _=l(m,18),f=S(_);j(f,{language:"TypeScript",showLanguage:!1,noMargin:!0,children:(w,E)=>{i();var $=v();$.nodeValue=`export const addResource = (resource: ResourceID, amount: number) => {
    const previousValue = resourcesState.resources[resource]
    const capacity = resourcesState.baseCapacity[resource]
    const newValue = clamp(previousValue + amount, 0, capacity)
    if (previousValue == newValue) { return }
    
    resourcesState.resources[resource] = newValue
    resourcesChangeSet.addChange('altered')
    resourcesChangeSet.addChange(\`altered.\${resource}\`)
}`,t(w,$)},$$slots:{default:!0}}),i(2),x(_);var M=l(_,16);D(M,{shadow:!1,get src(){return xo},alt:"Diagrama mostrando uso de un ChangeSet",figCaption:`En este caso, el ChangeSet es también publisher, aunque no emite
    nunca de forma automática.`});var R=l(M,4);D(R,{shadow:!1,get src(){return _o},alt:"Captura del idle con ChangeSets",figCaption:"Una primera versión de pruebas del sistema con unos pocos recursos y acciones. Todo es reactivo de cara a la vista, pero los datos reactivos surgen de manera controlada del estado del juego mediante ChangeSets"}),i(6),t(o,h),O()}const Co=Object.freeze(Object.defineProperty({__proto__:null,default:Po,metadata:Ie},Symbol.toStringTag,{value:"Module"})),Ue={title:"Discursos segregacionistas",slug:"discursos-segregacionistas",coverImage:"/src/assets/posts-covers/valla.jpg",coverPosition:"normal",coverAuthor:"Alex Shuper",excerpt:"Recogiendo cable. Explico por qué no tolero ni en mí mismo algunos discursos.",date:"2024-09-07T22:06:23.177Z",updated:"2024-09-07T22:06:23.903Z",hidden:!1,tags:["Personal","Salud mental"],keywords:[],type:"default"},{title:Pt,slug:Ct,coverImage:Lt,coverPosition:At,coverAuthor:kt,excerpt:Rt,date:Dt,updated:Mt,hidden:Vt,tags:Ot,keywords:It,type:Ut}=Ue;var Lo=b(`<p>En mi oficio es normal despertarse un día, ver código del día anterior y
preguntarse: “¿Yo escribí esta porquería?“. Veo que no solo ocurre con código.
Ayer publiqué una entrada titulada “Primatología: directivos”. Ya no existe.
Solo describía mi realidad trabajando
con directivos sin formación técnica y no aportaba nada. No molaba ni el tono. ¿Primatología? Que
sí, que somos todos unos monos, pero decirlo así suena tan pedante…</p> <p>He considerado que esa entrada era intolerable, y he reafirmado alguna que otra
convicción por el camino. Irónicamente, es la entrada que más feedback positivo
ha recibido; todos los compañeros que han tenido que lidiar con directivos sin
formación técnica se han sentido muy identificados. ¿Mereció la pena?</p> <p>No pretendo ir de gurú y menos
en estos ámbitos donde estoy a un palillo de ser un hikikomori, pero sí
tengo claro qué cosas me sientan mal y
cómo he aprendido a cargármelas sin dudar. Quizás mi experiencia le sirva a
alguien.</p> <h2>🔴🤚 Discursos segregacionistas</h2> <p>Una de las ventajas de exponer lo que escribes es que, salvo que seas un
psicópata al que le importa un pimiento lo que pueda producir, te estarás
preguntando un buen tiempo si no la habrás cagado, liando a quien pueda leerte o
metiendo fuego innecesariamente.</p> <p>Lo que escribí sobre los problemas de directivos o jefes de proyecto de
software sin conocimientos técnicos no era erróneo, pero era innecesario.
Esos discursos que señalan a roles comunes, especialmente cuando los asocian a
algo negativo, suelen entenderse como discursos segregacionistas.
Si ese fuera mi objetivo
estaría escribiendo en Linkedin o Twitter.</p> <p>Si mi trabajo se fundamenta principalmente en unir, y si llevo toda la vida
conociendo de primera mano los problemas de poner barreras entre las personas,
el daño que provoca el mantener juicios inmutables por acciones pasadas, y un
largo etcétera, ¿qué pinto escribiendo algo así?</p> <p>Entre mis contactos no figuran directivos sin conocimiento técnico, ninguno va
a leerlo y sentirse mal. Pero yo sí lo leo, leo un texto que solo fortalece
una percepción negativa con un discurso donde realizo una generalización
apresurada.</p> <h2>Dudar cuando guste</h2> <p>Lo que hizo que se me encendieran las alarmas es la buena acogida de esa
entrada. Ganar notoriedad por algo con lo que no te quieres ver reflejado es
algo que siempre he considerado aterrador.</p> <p>Antes tendía a esconder
cualquier logro pasado
indebidamente por connotaciones negativas que solo yo veía. Creía
que si alguien me aplaudía algo de lo que yo mismo dudaba, eventualmente me
acabaría sintiendo el triple de mal o pensando que cambiar de opinión
me dejaría como un fraude.</p> <p>Hoy día le he encontrado un sentido más justificado. Me he topado
demasiadas veces con variaciones de la ley de Twyman: cuanto más interesante y
polémico es un discurso, más probable es que esté equivocado; cuanto más
impresionantes sean
los datos, más probable es que sean fruto de un error o de una manipulación
deliberada.</p>`,1);function Ao(o){var e=Lo();i(22),t(o,e)}const ko=Object.freeze(Object.defineProperty({__proto__:null,default:Ao,metadata:Ue},Symbol.toStringTag,{value:"Module"})),Ro="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWoAAADyCAMAAABTRH9LAAAAM1BMVEUAAAD///8AAADOzs6mpqaDg4MWFhZjY2MuLi5HR0cHBwfy8vINDQ3Pz894eHiAgICPj4990EOxAAAAAXRSTlMAQObYZgAACEtJREFUeNrsm4FuozAMhhfbJOH9X/iM6xR21OikcYCn/5PaJsRRra+RxyT8ReAavr6ogCuA6giozgtUR0B1XqA6AqrzAtURUJ0XqI6A6rxAdQRU5wWqI6A6L1AdAdV5geoIqM5LoJrAz/h31TjpPwOqQ6A6LVAdAtVpgeoQqE4LVIdAdVqgOgSqC9PCxCTfLnJ5OClVD6tQHXCyaiYR6qR5EbHOZqKplElncymNbKZrz/kJkqtWnbWpX531IrpAojNmWtZfa09JO6dqpb9Uc5Elrfqq3L2xrbP/Gr5WnkFK1ebxrXqh2cXerHL41WmslWeQX3UtPlsOsBCv66xrDyK9avVbhIRpLjoVTbITT3VZH2vlGeRXXaxWqGqycq0TFawTktfaU0p1RtVZgeoQqE4LVIdAdVqgOgSq0wLVIVCdFqi+DMKTqEfgSdRSfkl+UG1ANVTfT8b8oNqAaqi+n4z5QbUB1VB9Pxnzg2oDqqH6fjLmB9UGVEO1w0RU/WnFHSQeETzeJeQbT1dNBu+SFf/KeNO8zc5h4vtVy5J2q8eqOd79v061/bRz/6j6eFOdH6q6NnsXU01EsqTlL5q3qv0661VqxYL1VdeNvuK9FmeoFvKWjdHHwST+ldR0Pr0z4e0m9mgN9dFBN8hlqplkHVh3BLtSm31Wrdft8dw2C60bx4r3Wpx0qr1lw/s41gJCcxHPxCPGJg31aFn3xd0gF6rmt2ob1+mtlLe1ug/V/mEHTt+DjSfV6nfLBlseW9Vi2TGxR7jqEe0rPjrqBrlItcvcVMHeti7rp1Pty57tbmORkwoI6+vdstFICVRbxPZUe7SG+uioG+Qy1b3Z+3Rwqo9V7zZ67AkFZFrbOYQ4PNV1V+A9eh0F3SC33YF4yV0SbvpR5++12q8PoSS6TWhf5Kd6Wq3ufbRsCOnss2qPeG/SZDxaaIyOukEuU11kc1+tQ7E/06p0mfW+qh7XNzcotMTsb11mm52hmql5y4b3cZhk+ku1RyheEUa0zn100A2C/xafAFSHQDVU30/G/KDagGqovp+M+UG1AdVQ/Ye9M9ptFQaCqHZsjDE0yf9/bZMtKILg5KnxrjVHurrlbXq0xdtWHbfHYz6qVqiaqtvjMR9VKx2pno2rfuTj3y36pNm9MPMyi2U+5PN0Bc+lXMUy5/k8qp4LiuWxruTzqPqywPRYV/I5VD0XwPJY1/I5VH1ZAMtjXcvnT/VcyrIsxexYV/P5U30tg0BuZse6ms+d6vm2fvd0sznWb/J5U638iG1O8/lUTai6jlfVWWxzms+nautfOaf5qPqOy3zcQLiB9AdV1/CqmhsIj8X+jkWq5gbCDaRHqLqGV9XcQHgs9ncsUjU3EG4gPULVNbyqzvsnTKJEGLkFPh+1TJrupVBuTNokZFk1jk/GVOP4jKjpjtVbWi00mZ5q7B6AKDokQNJHCRhb3IxdVz2lP9VRS2OehXIBEbZfIPsTfisSkrhVwa3tb43QfIeEedR0GGRCeE61jBhtq96DuLan3f/Tj0JAaP4S2SfcurJEc0GROwOiN9UPxk212FMtY46QIT0ewloot75abKvOR9V/ec2ozq+qJU3PqV4L5fQlkkbTqnH8RJ7FbFoF11o1TlRHHN7VWSs7H/9cqV7b03T5AJpP9ZlqmaC+N9XaRKv9cMmyas8/AxmSq+8WvRJwJ1C1M/hbGP4W5i0u81F1b6o9byDOVBOqruNVNTcQHov9HYtUzQ2EG0iPUHUNr6q5gfBY7O9YpGpuINxAeoSqazhUrd1I2Xh3U+6ju+labgIZDDeSab4OGslkLktCWgz37Gm+Hnr2tHIU5SJWqeVzqJqdqN9s+rU81NV8HlWzv/qLreymh7qWz6Vq3jXAGzT+C17B8xn/V/CIUDVVK1RN1e3xmI+qFaqm6t/2zna3kRCGoutrPt//hTeDYTpbhXbUlRhc3SNVCZAf9pFFJpILz+MxPqpuUDVVT1DE8Zu+ikLt/bvPhaWq0VBJ7TWNCEX6/Bdx7qo6lzr+ZzjFQ3XKIhkyYZ3q8zAPhY5xqhZqTtLj9FTVSTFU16zQj8Ra8QQUpCgRitCmxBbWqA4YqsdYBaHN34xzI9VapMauGuGIv7Sk5DzSJkrNUqsi2Nk2tvBMVQuCVXWRm3FupDpnibVvgNmyigCinEfa6PGBFBTBaqwvrNmr5ZPqFMdefTfOfVQXSwjhnzPGwuVIGxVNmmSkIH1hQVXr6+99VYf7cW6juqWR4kV1LGJlkuSFJYVcLymkZV+LEfp5rz6/wW/EudfXYj4CrvWieuR4HmmjIgVB1Aoqp76wQrWUz08g2VSH+3FuozrltuldVcvluTVatWSIaEsDGAtLVCvyqfogjzdRbsa5T1V/D38tUrUIVVP183iMj6obVE3Vz+MxPqpuUDVVP4/H+NiJeoWdqP6g6ilU7RaqnkLVbqHqKVTtFqqeQtVu+c2qFVE2wp3qqz9FeN8ZarN1K9P+VOdS73bg7nP9l0/VSSF2FWM8qxqA9dhVscGYDaKoQJYd8KbaWlsV7eqspnp0hiJIhNqgzeZj3C5t3CJyd6pba6tVbcmKj87Q3n7XBwi9XVD3uUnQm+qCF03eVfVBxgu1wZgtmap/ylmrob1cVAdzagNW9X8zWlsVdezVozP0cFygNjj36p1ufXWmure2tueKIF21As0zYoo2OJ9AHr+00a/qTa44p+q98anaJVQ9hardQtVTqNotVD2Fqt1C1d/ATlSP8LKSH+HqUGVC1V9A1X6h6hlU7ReqnkHVfqHqGVTtF6qeQdV+oeoZVO0Xqp5B1X6h6hlU7ReqXoSpJmv4Q5bxFwShgra0PpAdAAAAAElFTkSuQmCC",Do=""+new URL("../assets/caso-hacking-firebase-modelo2.Cy1_403W.png",import.meta.url).href,He={title:"El hacking a Google",slug:"el-hacking-a-google",coverImage:"machinery.jpg",coverAuthor:"Isis França",excerpt:"Entrada resubida. Cuento una batalla contra el servicio Firebase de Google y un caso de aplicación de ingeniería de software.",date:"2024-08-02T01:19:04.325Z",updated:"2024-08-02T01:19:04.326Z",hidden:!1,tags:["Hacking","Back end","Front end","Cloud"],keywords:[],type:"default"},{title:Ht,slug:Nt,coverImage:Bt,coverAuthor:Gt,excerpt:Ft,date:Yt,updated:Wt,hidden:Zt,tags:Kt,keywords:Xt,type:Qt}=He;var Mo=b(`<!> <p>Mi último año por la universidad cursé una asignatura de desarrollo de
aplicaciones web de la mano de un profesor al que estaré eternamente agradecido:
Abraham Rodríguez, el ahora vicegerente de Agenda Digital de la ULPGC, lo que
carajo sea que eso signifique…</p> <p>Una de las primeras tareas consistía en hacer una aplicación con Angular 2+ e
Ionic que de backend utilizara el servicio Firebase de Google.</p> <p>Por aquel entonces nos hacían trabajar con la base
de datos en tiempo real de dicho servicio, algo que podía explotarse muy bien
con la librería RxJS —la implementación de ReactiveX en JavaScript— para obtener
reactividad de datos a nivel de servicio y a través de sockets. Se hacía uso del
framework NgRx sobre ella, que facilitaba las tareas de comunicación y
control de estado centralizado, distribuido en red y reactivo en Angular.</p> <p>Mi descubrimiento de ReactiveX y los diagramas reactivos me emocionó, muchísimo,
era un nuevo mundo que bebía del mecanismo, patrón, técnica, paradigma y casi
filosofía de desarrollo que más me gustaba: era la evolución del patrón
observer y la programación reactiva en general, llevada a red. Aún ni conocía
qué era la Event-Driven Architecture, pero sí me sentía atraído por
una comunicación vía observación, eventos y mensajes. Sabía que sería
un trabajo que disfrutar como un niño pequeño. El problema es que Google
decidió poner obstáculos.</p> <h2>Las antiguas limitaciones de Cloud Functions</h2> <p>Concretamente solo me tocó hacer un mero chat por salas, pero Google me
bloqueaba un servicio de Firebase fundamental: Cloud Functions. Lo cierto es que
su único requisito era que pusiera una tarjeta de crédito o débito y ni siquiera
conllevaba ningún cargo inicial salvo que gastaras mucho tiempo de ejecución
o hicieras miles de llamadas a las funciones.</p> <p>Cloud Functions es una característica y framework de Firebase que
permite ejecutar código JS en la nube a través de peticiones http y que se
integraba correctamente con la base de datos en tiempo real (RTDB, del inglés)
y otras features cloud del servicio. Todas estas historias que se
popularizaron como serverless computing y permitían hacer una API rápidamente.</p> <p>Muy convenientemente para Google estas funciones podían entrar en una
suerte de recursividad casi infinita si tenías un error, generando facturas
de cientos de euros en una noche si no te dabas cuenta. Por ello nunca deberías
usar tu tarjeta en un servicio que no te establezca un límite duro de cuotas y
te de opción de detener el servicio si se superan en lugar de cobrarte por
exceso. Y no, no vale una tarjeta monedero, acabarás con una deuda que Google
intentará resolver de forma muy activa por lo que me han contado.</p> <p>Ignorando a Cloud Functions, los primeros cuatro días los invertí buscando
formas de conseguir un CRUD perfecto con validación en backend usando
exclusivamente la base de datos y su sistema de permisos integrados con su
sistema de auth. No tardaron en aparecer los primeros inconvenientes.</p> <p>Necesitaba algunas funciones relacionadas a la creación de salas y el límite
de salas que podía tener un único usuario, algo que requería algo más de
lógica. Desde una API con Cloud Functions no costaba nada, mientras que por
razones de responsabilidad no eran posibles de realizar en la base de datos. Los
esquemas de la RTDB eran más reducidos que ahora.</p> <!> <p>Pero Cloud Functions en realidad sí estaba disponible, lo único que limitaba
eran las llamadas a la API de manera externa, vamos, justamente lo que más
necesita alguien que quiera usar el servicio.</p> <p>Lo que exploté es que sí permitía definir “triggers” o disparadores.
Funciones que se ejecutaran ante situaciones concretas en la base de datos,
como que un usuario escribe un dato en determinado nodo.</p> <p>El servicio no garantizaba que la ejecución de esos disparadores fuera
inmediata. Además, solo se podía comunicar con la base de datos,
no podía responder hacia fuera de ninguna manera… ¿o sí? 🙂</p> <h2>Los observables</h2> <p>La gracia de la RTDB es que es en tiempo real como su nombre indica. Esto
significa que puedes observar cualquier nodo mediante un
socket y que te sea notificado cuando cambie. Esto es lo que permite, por
ejemplo, que veas mensajes aparecer en un chat sin tu pulsar un botón de
refrescar.</p> <p>Ahora supongamos una base de datos en la que se reserva para cada usuario un
nodo con 2 subnodos a los que coherentemente llamamos request y response:</p> <!> <p>Cuando un usuario quiere hacer una petición POST, en lugar de hacer una petición
HTTP a Cloud Functions con el clásico fetch de JavaScript, puede
escribir directamente en su nodo request adecuado en la RTDB con NgRx.
Las ristras largas y aleatorias representan la ID de un usuario autenticado,
que bien podría ser un UUID estándar.
En su propio nodo request —que es donde único tendría permiso de escritura un
usuario— puede establecer los datos de la petición.</p> <p>El exploit reside en la configuración de un trigger que se disparará cuando un
usuario escriba su request. Este nodo solo tiene
parámetros como si de una función post se tratara. El trigger ya me adelanta
parte del trabajo porque por defecto recibe información acerca del
usuario que ha causado el cambio y el nodo cambiado. Por tanto,
escribir en el nodo request provoca la llamada a una función que conocerá dicho
contexto siendo, en efecto, una forma de invocar una función con argumentos.</p> <!> <p>Si se quiere crear una sala de chat, el usuario solo tendría que escribir en su
nodo request un UUID aleatorio generado previamente a fin de tener algo que
identifique la petición, la operación que quiere realizar
(CREATE_ROOM en este caso) y los parámetros que pueda requerir dicha operación.
En este ejemplo el único parámetro se trataba de una contraseña para la sala.</p> <p>En resumen: hice una API a través de una base de datos. La forma de recibir
respuesta es mediante eventos, usando NgRx se observa el
nodo response. Sabrá que ha sido respondida cuando la ID en response coincida
con la ID enviada. Y la respuesta la recibirá en el nodo body de response. En
este caso el servidor da una ID de la sala, la típica que compartir con tus
amigos para que entren como se hace en juegos online o Hangouts (EDIT:
actualmente Meets)</p> <!> <p>Todo este proceso es transparente a la aplicación. Podemos abstraer una interfaz
del servicio original y mantener las dos implementaciones si queremos, como
se muestra en el diagrama. Para
la aplicación, la interfaz del servicio sería la misma, que puede trabajar con
simples promesas como si de un fetch se tratara.</p> <p>Claro que esto no es un uso realista de la base de datos. Estamos
sobrecargándola y además implica tratar con unas esperas del trigger que a veces
podía llegar a los 4 segundos. Para una operación de creación de un recurso
no es algo tan bestial, pero estas esperas reducen drásticamente la
aplicabilidad en muchos otros casos de uso. También, de esta manera es más
fácil gastar la cuota de uso de la base de datos, aunque su ampliación sea más
barata que Cloud Functions en sí misma.</p> <h2>Las consecuencias</h2> <p>Las consecuencias no fueron más que gotas a un vaso a punto
de rebosar o leña para una hoguera que comenzaba a arder. En la versión original
de esta entrada hablaba de una crisis que
mezcla obsesión, irresponsabilidad afectiva y retraso madurativo a partes
iguales. En los próximos días publicaré algo al respecto <small>(UPDATE del 28 noviembre de 2024: sigue pendiente)</small>. De momento prefiero no mezclar cosas.</p> <p>Nunca he tenido la intención de usar la acepción de
hacking como cibercrimen o nada relacionado a seguridad, sino como sobrepasar
los límites de una tecnología o técnica para una aplicación mayor o con un uso
no pensado. Sin embargo, esto sí era un claro bypass a una restricción de
servicio. De publicarse y popularizarse estoy seguro de que como mínimo
Google habría limitado mucho más a Cloud Functions si ésta
era una de sus principales características monetizadas.</p>`,1);function Vo(o){var e=Mo(),a=z(e);k(a,{children:(d,u)=>{i();var p=v(`Entrada resubida, rescatada de tantas tonterías que escribí hace un 
par de años. Contra todo pronóstico resulta ser que interesó a algunas personas, 
las mismas que me pidieron la resubida para mantener ciertas fuentes. Aunque 
he borrado la parte personal dado que estoy preparando otra entrada
relacionada a salud mental.`);t(d,p)},$$slots:{default:!0}});var s=l(a,22);D(s,{get src(){return Ro},alt:"Modelo describiendo la comunicación tradicional con Firebase",figCaption:"Modelo ideal. No válido dado que Google bloqueaba cualquier tipo de petición externa a Cloud Functions si no tenías tarjeta de crédito o débito."});var n=l(s,14);j(n,{language:"TypeScript",showLanguage:!1,children:(d,u)=>{i();var p=v();p.nodeValue=`...,
userRequests: {
    v8934sdafbi4r3vfewsjkvwevqwe: {
        request: { ... },
        response: { ... }
    },
    wigr908u43nwpdfglxjretjkhne3: {
        request: { ... },
        response: { ... }
    }
}`,t(d,p)},$$slots:{default:!0}});var r=l(n,6);j(r,{language:"TypeScript",showLanguage:!1,children:(d,u)=>{i();var p=v();p.nodeValue=`...,
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
}`,t(d,p)},$$slots:{default:!0}});var c=l(r,6);D(c,{get src(){return Do},alt:"diagrama describiendo la comunicación con el servicio faked",figCaption:"Modificaciones. Las peticiones por fetch son reemplazadas por escrituras en la RTDB que disparaban triggers de Cloud Functions. La instancia concreta de FakeAPIService en realidad se inyecta. <small>Nota en 2024: Ahora soy consciente de que, aunque correcto, el diagrama es bastante feucho. En esos tiempos no conocía formas más claras de representar inyecciones de dependencias, inversiones de control y otras tantas cosas.</small>"}),i(10),t(o,e)}const Oo=Object.freeze(Object.defineProperty({__proto__:null,default:Vo,metadata:He},Symbol.toStringTag,{value:"Module"}));var Io=b('<span class="no-wrap svelte-hbocqj"> </span> <span class="no-wrap svelte-hbocqj"> </span>',1);function fe(o,e){V(e,!1);const s=B(e,"content",8)().split(" "),n=s.splice(0,1)[0],r=s.length>0?s.splice(s.length-1,1)[0]:n;W();var c=Io(),d=z(c),u=S(d);x(d);var p=l(d),h=l(p),m=S(h);x(h),H(_=>{U(u,`—${n??""}`),U(p,` ${_??""} `),U(m,`${r??""}—`)},[()=>s.join(" ")],ze),t(o,c),O()}const Ne={title:"La enseñanza es la forma de aprendizaje más profunda",slug:"ensenanza-aprendizaje-profundo",coverImage:"",excerpt:"La enseñanza se presenta como una forma de trabajar múltiples habilidades necesarias en nuestra profesión, empezando por la comunicación.",date:"2025-05-09T20:41:04.325Z",updated:"2025-05-09T20:41:04.326Z",hidden:!1,tags:["Formación","Ingeniería software"],keywords:["Enseñanza","Sostenibilidad","Artesanía","Comunicación"],type:"default"},{title:Jt,slug:ei,coverImage:ai,excerpt:oi,date:si,updated:ni,hidden:ri,tags:ti,keywords:ii,type:di}=Ne;var Uo=b(`<p>Nuestro arte u oficio, el que intento transmitir y que identificamos como <strong>artesanía de software</strong> <!>, se caracteriza especialmente por el uso de la <strong>comunicación</strong>.</p> <p>Puede que no exista maestro en esta profesión que dude de ello. Con notable seguridad, si tuviéramos que elegir una habilidad transversal asociada a la calidad de un desarrollo de software, elegimos la comunicación, pues está presente de alguna manera en todas las técnicas, procesos y herramientas que utilizamos.</p> <!> <p>No es necesario que una persona sea experta en oratoria, que hable bien en público, ni siquiera que hable bien en general. Puede no ser importante si tartamudea, si tiene poco vocabulario, o si no tiene fluidez con el idioma en el que intenta expresarse. Puede que no importe en absoluto si comete errores ortográficos, si usa tacos o los evita a toda costa. De hecho la riqueza y complejidad léxica puede ser contraproducente si dificulta o sobrecarga el mensaje.</p> <p>Lo que sí es importante es que sepa extraer y simplificar ideas, que persiga la precisión semántica pero manteniendo a raya los dogmatismos. Y aún más importante, que dude y esté dispuesta a criticar, pulir, reemplazar o destruir sus propias ideas —o la expresión de las mismas— de ser necesario.</p> <p>No es posible una correcta comunicación sin un esfuerzo empático. La <strong>empatía</strong> entendida como una habilidad, es la piedra angular de una correcta comunicación. Como toda habilidad, esta se puede <!> entrenar, en un proceso que no solo nos vuelve mejores profesionales, también mejores personas.</p> <p>Si bien estas habilidades son clave en cualquier oficio y en la vida misma, los desarrollos de calidad se vuelven extremadamente sensibles a su dominio. Descuidarlas es un camino asegurado hacia hábitos que provocarán la introducción constante de complejidad accidental.</p> <p>¿Crees que es casualidad que las personas más famosas de la ingeniería de software, en el pasado y en el presente, tengan sus habilidades para expresar ideas y divulgar a la par de sus habilidades técnicas? Yo no lo creo, y tengo en cuenta el error lógico evidente: <em>“son famosas precisamente porque divulgan”</em>. No, no creo que sea casualidad. Como tampoco creo que sea casualidad que el primer valor del manifiesto ágil sea “Individuos e interacciones sobre procesos y herramientas”.</p> <p>En muchas otras artes, la divulgación no necesariamente requiere la excelencia
técnica y práctica continua en el área. Si bien debe comprenderse lo suficiente para
poder hablar con un mínimo de autoridad.</p> <p>En esas otras artes vemos casos contrarios: muchas mentes brillantes resultaban
no ser especialmente buenas acercando sus ideas a compañeros, ya no digamos a
sangre nueva o a estudiantes.</p> <p>Algunas disciplinas a priori dispares, como la filosofía o la artesanía de software, comparten claramente de
habilidades similares, y es que existe una correlación directa entre lo bien que hacemos software y nuestra capacidad para estructurar y expresar ideas. No es necesario dedicarse a la divulgación (externa), pero sí es necesario contar con la habilidad para hacerlo,
pues debemos hacerlo a nivel de equipo o para nosotros mismos.</p> <p>La enseñanza permite trabajar todos estos conceptos. Es a fin de cuentas, una forma
de divulgación. Al menos, si quieres enseñar bien, debes perseguir la excelencia técnica, dudar de todo mientras haces un esfuerzo empático que te ayude a destilar realmente el problema. No puedes pillar cosas con pinzas, no puedes simplemente ir hacia delante sin tener claro algo, porque es tu responsabilidad no transmitir tu incertidumbre a tu alumnado.</p> <p>Ese esfuerzo empático es vital, en grupos reducidos, o durante la mentoría, es vital
identificar la desorientación y frustración para minimizarla cuanto sea posible. También
para no pasarnos de condescendientes y siempre intentar apretar lo justo.</p> <p>Es por esto que suelo recomendar a todos los profesionales acoger a alumnos en prácticas y ejercer la mentoría, mejorando estas habilidades y revisitando ideas. También suelo recomendar a empresas fomentar el trabajo en parejas (pairing) y la rotación de las mismas, de modo que todo el mundo tenga oportunidad de instruir o ser instruido, o como mínimo, de compartir ideas, formas de pensar y debatir, de mejorar su comunicación y asertividad, conociendo el trabajo de otros y creando vínculos que refuercen el crecimiento personal y del equipo, fomentando la transmisión de conocimiento.</p>`,1);function Ho(o){var e=Uo(),a=z(e),s=l(S(a),3);fe(s,{content:"haciendo esfuerzo por resaltar una naturaleza gremial"}),i(3),x(a);var n=l(a,4);k(n,{children:(d,u)=>{i();var p=v(`Al leer "transversal", muchas personas suelen pensar en habilidades secundarias aplicables a múltiples ámbitos, que aportan pero no son vitales. Lo incorrecto aquí es pensar que 
son secundarias. Una habilidad puede ser transversal y ser a su vez la más 
importante e imprescindible en un oficio.`);t(d,p)},$$slots:{default:!0}});var r=l(n,6),c=l(S(r),3);fe(c,{content:"y se debe"}),i(),x(r),i(16),t(o,e)}const No=Object.freeze(Object.defineProperty({__proto__:null,default:Ho,metadata:Ne},Symbol.toStringTag,{value:"Module"}));var Bo=Object.defineProperty,Go=(o,e,a)=>e in o?Bo(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,C=(o,e,a)=>Go(o,typeof e!="symbol"?e+"":e,a);const Be={className:void 0,zIndex:9999},J={strokeColor:"darkorange",fillColor:"orange",strokeWidth:4};function Fo(o){const e=document.createElementNS("http://www.w3.org/2000/svg","svg"),a={...Be,...J,...o};return e.style.zIndex=a.zIndex.toString(),e.style.position="absolute",e.style.stroke=a.strokeColor,e.style.fill=a.fillColor,e.style.strokeWidth=`${a.strokeWidth}`,e.style.pointerEvents="none",e.style.strokeLinejoin="round",e.style.strokeLinecap="round",a.className&&e.classList.add(a.className),e.style.strokeWidth=a.strokeWidth+"px",e}function le(o){return document.createElementNS("http://www.w3.org/2000/svg",o)}function qe(o){return typeof o=="string"?document.querySelector(o):o}class Yo{constructor(e){C(this,"destroyed",!1),C(this,"target"),C(this,"pointerElement"),C(this,"container"),C(this,"listeners"),C(this,"on",(r,c)=>{if(this.listeners[r]===void 0)return this.listeners[r]=[c];this.listeners[r].includes(c)||this.listeners[r].push(c)});const a={...Be,...e},s=qe(a.container||document.body);if(!s)throw new Error(`PointItOut: container is ${s}. Check container option.`);const n=qe(e.target);if(!n)throw new Error(`PointItOut: Target is ${n}. Check target option.`);this.listeners={},this.container=s,this.target=n,this.pointerElement=Fo(e)}destroy(){var e;if(this.destroyed)throw new Error("Pointer already destroyed");this.destroyed=!0,this.pointerElement.remove(),(e=this.listeners.destroy)==null||e.forEach(a=>a(this))}}class Ge extends Yo{constructor(e){super(e),C(this,"strokeWidth"),C(this,"strokeColor"),C(this,"fillColor");const a={...J,...e};this.strokeWidth=a.strokeWidth,this.strokeColor=a.strokeColor,this.fillColor=a.fillColor}}function Fe(o,e){const a=o.getBoundingClientRect(),s=e.getBoundingClientRect(),n=a.top-s.top,r=a.left-s.left,c=n+e.scrollTop,d=r+e.scrollLeft;return{targetRect:a,containerRect:s,relativeTop:n,relativeLeft:r,targetTop:c,targetLeft:d}}const Wo=Object.freeze({"top-right":315,top:270,"top-left":225,left:180,"bottom-left":135,bottom:90,"bottom-right":45,right:0});function Zo(o){return Wo[o]}const ye=Object.freeze({...J,fillColor:"none",round:0,padding:{x:0,y:0}});class Ko extends Ge{constructor(e){const a=Object.freeze({...ye,...e});super(a),C(this,"rectElm"),C(this,"round",0),C(this,"padding"),this.rectElm=le("rect"),this.pointerElement.appendChild(this.rectElm),this.container.appendChild(this.pointerElement),this.round=e.round??ye.round,typeof a.padding=="number"?this.padding={x:a.padding,y:a.padding}:this.padding={x:a.padding.x??0,y:a.padding.y??0},this.update()}update(){const{targetRect:e,targetTop:a,targetLeft:s}=Fe(this.target,this.container),n=this.strokeWidth,r=e.width+n*2+this.padding.x*2,c=e.height+n*2+this.padding.y*2,d=Math.round(n/2);this.pointerElement.style.left=s-n-this.padding.x+"px",this.pointerElement.style.top=a-n-this.padding.y+"px",this.pointerElement.setAttribute("width",r.toString()),this.pointerElement.setAttribute("height",c.toString()),this.rectElm.setAttribute("x",`${d}`),this.rectElm.setAttribute("y",`${d}`),this.rectElm.setAttribute("width",`${r-n}`),this.rectElm.setAttribute("height",`${c-n}`),typeof this.round=="object"?(this.rectElm.setAttribute("rx",`${this.round.rx}`),this.rectElm.setAttribute("ry",`${this.round.ry}`)):this.rectElm.setAttribute("rx",`${this.round}`)}}function Xo(o,e,a,s){return`M${s+a/2} ${o/2+a/2} L${s+e/2+a/2} ${o+a/2} l0 -${o/3} l${e/2} 0 l0 -${o/3} l-${e/2} 0 l0 -${o/3} Z`}const Qo=Object.freeze({...J,strokeWidth:0,distance:0});class Jo extends Ge{constructor(e){super({...Qo,...e}),C(this,"path"),C(this,"fromAngle"),C(this,"distance");const a=le("g");this.path=le("path"),a.appendChild(this.path),this.pointerElement.appendChild(a),this.container.appendChild(this.pointerElement),typeof e.fromAngle=="string"?this.fromAngle=Zo(e.fromAngle):this.fromAngle=e.fromAngle??45,this.distance=e.distance??0,this.path.setAttribute("d",Xo(96,128,this.strokeWidth,this.distance)),this.pointerElement.style.fill=this.fillColor,this.pointerElement.style.stroke=this.strokeColor,this.pointerElement.style.strokeWidth=`${this.strokeWidth==0?"none":this.strokeWidth}`,this.pointerElement.style.transformOrigin="center left",this.pointerElement.style.transform=`translateY(-50%) rotate(${this.fromAngle}deg)`,this.pointerElement.setAttribute("width",`${128+this.strokeWidth+this.distance}`),this.pointerElement.setAttribute("height",`${96+this.strokeWidth}`),this.update()}update(){const{targetRect:e,targetTop:a,targetLeft:s}=Fe(this.target,this.container);this.pointerElement.style.left=s+e.width/2+"px",this.pointerElement.style.top=a+e.height/2+"px"}}const ee=new Set,je=()=>{ue()},we=()=>{ue()};let N={updateOnResize:!0,updateAfterLoad:!0};typeof window<"u"&&Ye(N);function es(o){ee.delete(o)}function Ye(o){return N={...N,...o},window.removeEventListener("resize",je),window.removeEventListener("load",we),N.updateOnResize&&window.addEventListener("resize",je),N.updateAfterLoad&&window.addEventListener("load",we),structuredClone(N)}function We(o,e){let a;return o=="rect"?a=new Ko(e):o=="arrow"&&(a=new Jo(e)),a.on("destroy",es),ee.add(a),a}function as(){ee.forEach(o=>o.destroy())}function ue(){ee.forEach(o=>o.update())}const li=Object.freeze(Object.defineProperty({__proto__:null,clear:as,config:Ye,create:We,update:ue},Symbol.toStringTag,{value:"Module"}));var os=b('<div class="example svelte-1e8u39k"><div></div></div>');function xe(o,e){let a=B(e,"width",8,250),s=B(e,"height",8,150),n=B(e,"showBorder",8,!1);var r=os(),c=S(r);let d;x(r),H(u=>{d=X(c,1,"test-box svelte-1e8u39k",null,d,u),Ba(c,`width: ${a()??""}px; height: ${s()??""}px`)},[()=>({"test-box--expected":n()})],ze),t(o,r)}const ss=""+new URL("../assets/visual-specs-index.DUyx9Wot.png",import.meta.url).href,ns=""+new URL("../assets/captura-error.DS5ipSG-.png",import.meta.url).href,Ze={title:"Especificación visual. Caso Point it out!",slug:"especificacion-visual-caso-point-it-out",coverImage:"/src/assets/posts-covers/pio-round-fail-test.png",coverAuthor:"",excerpt:"Caso de un proyecto en activo para el que repaso el concepto de regresión visual y especificación visual. Contenido denso.",date:"2024-07-25T15:06:23.177Z",updated:"2024-07-25T15:06:23.903Z",hidden:!1,tags:["Testing/TDD/BDD/ATDD","Tooling","DX"],keywords:["svg","regresión visual","visual testing"],type:"default",coverPosition:"top"},{title:ci,slug:ui,coverImage:pi,coverAuthor:mi,excerpt:gi,date:bi,updated:hi,hidden:vi,tags:fi,keywords:qi,type:yi,coverPosition:ji}=Ze;var rs=b('<span id="example-target" class="hl">estas palabras</span>'),ts=b(`<p>AVISO: ¿Estás buscando un tutorial paso a paso de cómo
desarrollar una biblioteca de manera profesional? Pues este NO es el lugar.
Solo encontrarás fragmentos de código relevantes para plantear el temita
de la especificación visual.</p>`),is=b(`<p>He tenido la necesidad de crear formas posicionables sobre sitios web,
señalando o conectando elementos. Muchas veces. Es un must en aplicaciones
interactivas que requieren de algún tipo de señalización, como podría ocurrir
en tutoriales.</p> <p>Harto de reinventar la rueda decido buscar una biblioteca sencillita que me
resuelva este problema. Esperaba encontrar muchas para ello, o quizás
como alguna feature de alguna muy gorda y conocida.
Estaba casi convencido de que existiría algo, pero que aún así quizás tendría que
hacer yo mismo una biblioteca propia con <strong>filosofía minimalista</strong>.</p> <p>Pero lo cierto es que, al menos en unas pocas búsquedas sencillas, no he
encontrado nada. Que no sea fácil de encontrar no significa que no exista,
no te imaginas cuántas superherramientas sin visibilidad he encontrado entre
repositorios perdidos.</p> <p>A falta de soluciones (o como resultado de una mala investigación), me pongo
manos a la obra en el desarrollo de una biblioteca para ello (Point it out) y
me doy cuenta de que necesito algo para especificar qué resultado visual busco.
Necesito alguna técnica de <strong>especificación visual</strong>, si es que existe algo
así y si significa lo que pretendo que signifique.</p> <h2>Describiendo el problema: cómo señalizar elementos</h2> <p>Por ejemplo, ¿qué podría hacer si quisiera
señalizar <!>?
Si todo funciona bien deberías estar viendo un rectángulo verde sobre las palabras indicadas.</p> <p>“Pero Alexander, ¿me estás diciendo que ya existe entonces solución?” No, lo que
estás viendo es fruto del resultado final (o al menos de lo que ya tengo
desarrollado). Dado que ya tengo una medio solución, ¿por qué no mostrarlo?</p> <!> <p>En una primera versión, la biblioteca debía aportar al menos un primer mecanismo simple de
señalización. Para ello especifiqué la siguiente función:</p> <!> <p><code>ShapeName</code> se trata de una string, un tipo de unión ‘rect’ | ‘image’, aunque
en un primer momento solo existe ‘rect’. La opción target es un selector CSS
o una referencia directa al elemento objetivo.</p> <ul><li>Si es un selector, trabajará con el primer elemento que encuentre con ese selector, o lanzará excepción si no encuentra nada.</li> <li>Creará un elemento SVG que añadirá como hijo al body.</li> <li>Dicho SVG debe estar posicionado absolutamente sobre el elemento a señalar.</li> <li>Dicho SVG debe tener un tamaño similar al elemento a señalar. <ul><li>Digo similar porque podría ser más grande, si quiere rodearse sin taparlo.</li></ul></li></ul> <p>En las primeras iteraciones de herramientas gráficas me gusta centrarme en la exploración tecnológica. Hacer un caso mínimo funcional que dé un resultado visual inmediato.</p> <h3>Especificaciones formales con algún framework de testing</h3> <p>Aquí empieza lo realmente interesante. Hay que testar visualmente, eso está
claro, estamos ante una librería cuyo objetivo es renderizar cosas. Pero eso no
significa que inmediatamente todo vaya a ser regresión visual y E2E.
Considera la siguiente spec:</p> <!> <p>Esto no requiere renderizado. Vale con un DOM virtual, comprobar que se crea
un nuevo nodo y si queda colgando del body. Hacer una prueba E2E para esto es
matar moscas a cañonazos.</p> <h2>Especificación visual</h2> <p>Me gusta la <em>regresión visual</em>, pero tiene un pequeño problema. Por si no sabes
de qué te estoy hablando, consiste en la generación y comparación mediante
snapshots <em>(ficheros que describan el estado de una aplicación ante
ciertas condiciones. Típicamente suelen ser screenshots)</em>. Su fortaleza
reside en la cobertura futura. Por lo general se
generan snapshots una vez se tiene el resultado buscado para que en futuras
comparaciones tras refactoring recibamos un feedback de si algo ha cambiado más
de lo esperado.</p> <p>Y aunque es una herramienta útil y bienvenida en mantenimiento de aplicaciones
que controlan muy bien la interfaz de usuario y donde es crítico que estas no
cambien inesperadamente, la regresión visual no forma exactamente parte del
flujo de las metodologías estilo TDD, BDD o ATDD. Recordemos que son
metodologías de diseño y <strong>la regresión visual no aporta nada en la fase de diseño o para definir especificaciones preimplementación.</strong></p> <h3>Buscando la alternativa a la regresión visual</h3> <p>La siguiente forma de proceder y opiniones son, hasta donde sé, de <!>. No he hecho una investigación exhaustiva ni
sé si hay autores que han escrito sobre esto a favor o en contra. Por eso no
asumas nada de lo que expongo aquí, evita todo prejuicio positivo y afila la
sospecha y la duda.</p> <p>El proceso que he realizado es el siguiente: adaptar una biblioteca o framework
con capacidades para regresión visual (en este caso Playwright) para que
en su lugar genere screenshots de dos páginas distintas y
las compare. Una de las páginas presenta el escenario donde ejecutas la acción
a probar; la otra es la versión con el resultado final esperado, hecha a mano
y centrándonos solo en el resultado visual.</p> <p>Supongamos la siguiente especificacion:</p> <!> <p>Nuestro escenario de pruebas podría contener, entre otras cosas, lo siguiente:</p> <!> <!> <p>Y por otra parte, una página copia modificada con el resultado VISUAL esperado</p> <!> <!> <p>SÉ LO QUE ESTÁS PENSANDO (o deberías): “pero Alexander, en el esperado no hay
ningún SVG, ¡solo le has puesto un borde naranja de 4 píxeles al elemento!”</p> <p>A esto es a lo que me refiero con especificación visual. Podría haber un SVG
hecho a mano (de hecho los hay en specs más complejas) y seguiría siendo válido,
pero en realidad no importa la estructura,
no es lo que estamos especificando ni testando aquí.</p> <p>Al igual que con tests convencionales, buscamos la forma menos compleja y más
directa de definir lo que queremos (en este caso lo que queremos visualmente).</p> <p>Créeme, esto no lo hago por mejorar la adaptabilidad y reducir la fragilidad del
test, aunque sean sus efectos positivos principales, sino porque simplemente es la
forma más sencilla que se me ha ocurrido de conseguir lo que se busca visualmente.</p> <p>En una clásica “especificación por ejemplo” con GIVEN-WHEN-THEN, esta parte
correspondería al THEN, y al igual que en las especificaciones convencionales,
debe expresarse de la forma más directa y clara atendiendo en este caso
exclusivamente al resultado visible (ya que es la única responsabilidad en
estos tests).</p> <p>Veamos un test similar al del Mundo Real™. El original y funcional lo tienes
en el repositorio (enlace al final). Es un test parametrizado, se genera con variaciones de
expectedWidth (xW) y expectedHeight (xH).</p> <!> <small>NOTA: que veas tanta especificidad como
orange o 4px, algo que no suele ser recomendado en specs/tests, es normal en este caso porque
estamos especificando los valores default, es de las pocas excepciones a la regla.</small> <p>La función es autoexplicativa. Recibe la página donde se ejecutará la acción
a testar, la página con la que comparar, y la acción a realizar. Tras lanzar el
test debería fallar al no tener implementación inicialmente.
El test report de Playwright en este caso me reporta una comparación de
múltiples formas, entre ellas una muy chula con un slider. Captura:</p> <!> <!> <h4>Sólo lo visible</h4> <p>Tengo que insistir en que sólo hago esto con fines de testar el resultado
visual. Puede que te preguntes algo como “¿No estás perdiendo la oportunidad
de especificar directamente un resultado final que sirva también de
especificación del DOM deseado para una prueba E2E completa?”</p> <p>No conozco (todavía) el DOM deseado y no puedo <em>perder tiempo</em> planificando.
Esto me permite especificar el
resultado visual, que es lo único que tengo claro ahora mismo. Además los SVG
para un mismo objetivo se pueden generar de múltiples maneras. Exagerar el
detalle aumenta la rigidez del diseño, no permite posponer decisiones y aumenta
la fragilidad de los tests.</p> <p>Por otra parte también nos limitaría más con escenarios menos deterministas.
Imagina que quieres que el recuadro
siga al elemento si este se reposiciona (típico al reescalar pantalla).
Esto es algo que debe hacer la biblioteca, ¿cómo especificaríamos algo así?
Implicaría lógica en el propio test. En los expects
se evitan lógicas complejas a favor de resultados directos deterministas.
Un borde por CSS no solo está fijado a un elemento, también funciona aunque
reescales o lo muevas.</p> <h3>Otras preguntas relacionadas que me he planteado</h3> <p>¿Por qué hacer un esfuerzo en especificar partes del aspecto visual esperado
en un desarrollo si muy probablemente haya partes que no
podremos especificar de todas formas?, ¿no es como intentar construir una casa
en la que sabemos de antemano que nunca tendremos techo o alguna otra parte
fundamental?</p> <p>Ya tenemos la respuesta en la jerarquía de tests. Sabemos que las pruebas
unitarias no nos sirven para todo, ni tampoco las de integración. Pero lo
hacemos igualmente porque nos guían y cubren el desarrollo, cada una a su
manera, con pros y contras. Técnicamente podríamos usar solo tests de aceptación
si estos fueran infinitamente rápidos, y aún así, muy probablemente se seguirían
realizando pruebas unitarias y de integración junto a ellos.</p> <p>Puedes tener un muy buen maquetador, diseñador, artista o artista técnico en tu
equipo durante el desarrollo de una aplicación, con capacidad para
diseñar/especificar rápidamente el resultado que quieres pero sin competencias o tiempo
para realizar la herramienta que produzca ese resultado.</p> <p>He conocido empresas que trabajan con un flujo basado en
prototipos, y eso está perfecto, pero podría ser muy útil entender esos
prototipos como especificaciones y realizar pruebas directas contra ellos.</p> <h3>¿Cómo de útil es esto realmente?</h3> <p>La respuesta es algo evidente: si fuera muy útil habría
literatura al respecto y alguna que otra herramienta conocida. Créeme, no soy
ningún genio extendiendo el estado del arte. Esta “técnica”
viene de perlas para el desarrollo de esta biblioteca en concreto, pero, ¿se
te ocurre alguna otra? No es especialmente extrapolable. Ni siquiera es
suficiente para todos los casos de esta biblioteca.</p> <p>Voy a describirte un caso difícil de explicar: imagina que quieres
señalizar con una flecha que apunta siempre a un objetivo.
Supón que incluso aunque este se mueva en pantalla la flecha mantenga su
posición y gire apuntando siempre al objetivo (un “look at” en gráficos).</p> <p>La descripción anterior es incluso difícil de imaginar para algunos, supone
problemas en cómo especificarla y cómo testarla. Y ni siquiera es algo realmente
complejo. En las artes visuales muchas
veces no queda más remedio que romper el orden rojo-verde porque el esfuerzo de
especificar puede ser indistinguible del de implementar.</p> <p>Es ahí donde destaca la regresión visual clásica. Implementas y cuando estés
satisfecho, snapshot que servirá como “expected”. No te habrá servido para
guiar tu diseño e implementación, pero seguirás protegiendo tu código y
permitiendo el refactoring.</p> <p>Pero no olvides que al final eres tú (o tu equipo) quien decide si cualquier
técnica es o no rentable de aplicar en el flujo de trabajo. Incluso aunque
existiera garantía de que aplicarlo mejorase la productividad o calidad,
podría causar el efecto contrario si diezma la moral al percibirse como
algo pesado, raro o molesto por mera falta de costumbre. La misma historia
del TDD.</p> <h2>Point it out como posible ejemplo de especificación visual</h2> <p>Puedes seguir el desarrollo de <a href="https://github.com/alexvgjm/point-it-out" rel="nofollow">Point it out! en github</a>,
donde verás que hay mucho de lo hablado en este artículo llevado a un
nivel enfermizo. Es un proyecto pensado para experimentar y debatir
acerca de las posibilidades de la especificación visual.</p> <p>Si clonas y ejecutas el proyecto en modo de desarrollo podrás encontrar una
jerarquía de especificaciones bastante intensa para al menos dos formas y
dos tamaños de objetivos.
Aquí una screenshot:</p> <!>`,1);function ds(o,e){V(e,!1),ce(()=>{We("rect",{target:"#example-target",strokeWidth:4,strokeColor:"#3f37",padding:2})}),W();var a=is(),s=l(z(a),10),n=l(S(s));de(n,{children:(y,P)=>{var q=rs();t(y,q)},$$slots:{default:!0}}),i(),x(s);var r=l(s,4);k(r,{children:(y,P)=>{var q=ts();t(y,q)},$$slots:{default:!0}});var c=l(r,4);j(c,{language:"TypeScript",children:(y,P)=>{i();var q=v();q.nodeValue="create(shape: ShapeName, {target: string | HTMLElement})",t(y,q)},$$slots:{default:!0}});var d=l(c,12);j(d,{language:"TypeScript",children:(y,P)=>{i();var q=v();q.nodeValue=`describe('create(...)', ()=>{
    ...
    it('creates an SVG and appends it to the body', ()=>{
        ...
    })
})`,t(y,q)},$$slots:{default:!0}});var u=l(d,12),p=l(S(u));de(p,{children:(y,P)=>{i();var q=v("Cosexa Pgropia™");t(y,q)},$$slots:{default:!0}}),i(),x(u);var h=l(u,6);j(h,{language:"TypeScript",children:(y,P)=>{i();var q=v();q.nodeValue=`describe("create('rect', {...})", ()=> {
    ...
    describe('Default behaviors (no options)', () => {
        ...
        it('creates an orange rect of 4px width around target', ()=>{
            ...
        })
    })
})`,t(y,q)},$$slots:{default:!0}});var m=l(h,4);ie(m,{gap:4,$$slots:{left:(y,P)=>{j(y,{slot:"left",language:"HTML",children:(q,L)=>{i();var T=v();T.nodeValue='<div class="test-box"></div>',t(q,T)},$$slots:{default:!0}})},right:(y,P)=>{j(y,{slot:"right",language:"CSS",children:(q,L)=>{i();var T=v();T.nodeValue=`.test-box {
    background: #333;
    width: 250px;
    height: 150px;
}`,t(q,T)},$$slots:{default:!0}})}}});var _=l(m,2);xe(_,{width:250,height:150});var f=l(_,4);ie(f,{gap:4,$$slots:{left:(y,P)=>{j(y,{slot:"left",language:"HTML",children:(q,L)=>{i();var T=v();T.nodeValue='<div class="test-box test-box--expected"></div>',t(q,T)},$$slots:{default:!0}})},right:(y,P)=>{j(y,{slot:"right",language:"CSS",children:(q,L)=>{i();var T=v();T.nodeValue=`...
.test-box--expected {
    box-sizing: content-box;
    border: 4px solid orange;
}
`,t(q,T)},$$slots:{default:!0}})}}});var M=l(f,2);xe(M,{width:250,height:150,showBorder:!0});var R=l(M,14);j(R,{language:"TypeScript",children:(y,P)=>{i();var q=v();q.nodeValue="it(`creates an orange rect of 4px width around target (${xW}x${xH})`, async ({ page }) => {\n    await comparePages({\n        testingURL: `/${xW}x${xH}`,\n        expectedURL: `/expected/rect/${xW}x${xH}-default`,\n        action: () => {\n            return page.evaluate(() => {\n                pio.create('rect', {target: `.test-box--${xW}x${xH}`})\n            })\n        }\n    })\n})",t(y,q)},$$slots:{default:!0}});var w=l(R,6);D(w,{get src(){return ns},alt:"Test report de Playwright mostrando resultado actual y esperado con slider"});var E=l(w,2);k(E,{children:(y,P)=>{i();var q=v(`Lamentablemente Playwright no tiene una función tan mágica y bonita como
comparePages. Es propia, resultado de un poco de 
hacking con los mecanismos de regresión visual de Playwright, pero tienes total
libertad para meterle un copia y pega (hazlo del repo, que es la que funciona).`);t(y,q)},$$slots:{default:!0}});var $=l(E,38);D($,{get src(){return ss},alt:""}),t(o,a),O()}const ls=Object.freeze(Object.defineProperty({__proto__:null,default:ds,metadata:Ze},Symbol.toStringTag,{value:"Module"})),Ke={title:"Flipadismos de mecanismos en programación orientada a objetos",slug:"flipadismos-mecanismos-oop",coverImage:"",excerpt:"El código simple es fácil de cambiar; los flipadismos que nadie ha pedido, no.",date:"2025-09-04T19:32:04.325Z",updated:"2025-09-04T19:32:04.326Z",hidden:!1,tags:["Ingeniería software","Programación orientada a objetos"],keywords:[],type:"default"},{title:wi,slug:xi,coverImage:_i,excerpt:Si,date:zi,updated:Ei,hidden:$i,tags:Ti,keywords:Pi,type:Ci}=Ke;var cs=b(`<p>Recomendaba un viejo profesor mío, que si un libro de programación orientada a objetos empezaba hablándote de herencia, lo tirases a la basura. No lo comparto, ni creo que lo dijera literalmente o tiraríamos todos a la basura, pero se entiende el punto.</p> <p>Estaba pensando en escribir algún día sobre COI (Composition over Inheritance) tras experimentar seriamente con posibilidades en JavaScript/TypeScript. Hoy no es ese día, antes me gustaría dejar por escrito que la mayoría de nuestros problemas surgen porque nos venimos arriba aplicando mecanismos para resolver problemas que no tenemos.</p> <h2>Sobre clases e interfaces</h2> <p>Es importante entender realmente que en ingeniería de software, la palabra más importante en diseño es “interfaz”, a lo que muchas veces llamamos también contrato.</p> <p>El objetivo de las clases es definir <em>e implementar</em> atributos y comportamientos que
tiene <em>un tipo</em> en sí (a atributos, campos, métodos, etc, les llamamos “miembros”). A todos los miembros públicos, los que percibimos desde “fuera” cuando manipulamos una clase y objeto, es a lo que llamamos interfaz, o API, o como se ha dicho, <em>contrato</em>.</p> <p>Una clase es instanciable, puede crearse objetos con dichos atributos y comportamientos, define su interfaz y la implementación de la misma, cumple su propio contrato.</p> <h2>La abstracción</h2> <p>Las clases no dan problemas per se, el problema llega en sistemas jerárquicos o taxonómicos profundos, donde creemos que inevitablemente necesitamos crear variaciones.</p> <p>Tradicionalmente se expone la herencia con ejemplos tan bobos como:</p> <!> <p>Ejemplos como este me he encontrado a punta pala en ámbito académico. Son especializaciones sin fundamento. Tipos diferenciados “porque sí”. Transmiten la idea equivocada de que lo primero al diseñar es crear jerarquías. En la realidad especializar o generalizar es de las acciones más duras y últimas a las que debemos recurrir. Suele presentarse estos casos o bien para enseñar lo que es la herencia o bien como antiejemplo metido con calzador para hablar de composición.</p> <p>Veamos un problema un poco más real (no por ello bueno), con decisiones de diseño habituales sin tanta profundidad. Supongamos que modelando alguna especie de juego de tablero, tenemos animales que realizan movimientos, algunos con capacidad de volar y otros no. Eso sí, todos pueden comer. Una tendencia natural suele ser la de generalizar creando una clase abstracta:</p> <!> <p>Nótese que se ha simplificado la “jerarquía”. Esto es un ejemplo más realista y simple que nos permite manifestar los problemas de la herencia de igual forma. Un error común que debemos evitar activamente es especializar y crear subtipos intermedios a la primera característica que vemos diferente.</p> <p>Aquí el mayor impacto de diseño lo introduce la necesidad de generar un contrato parcial. Una clase abstracta es precisamente una clase que no termina de implementarse (y tampoco puede ser instanciada) sino que delega en sus clases hijas los detalles de implementación que le puedan faltar.</p> <p>Quiere decir “si quieres ser de tipo Animal, tendrás que implementar una lógica de movimiento”.</p> <p>Ahora viene el verdadero problema. ¿Qué pasa si tenemos 20 tipos de animales distintos y queremos reglas de movimiento distintas para algunos pero que otros (la mayoría) se mantengan igual?</p> <p>Llega el momento en que mucha gente empieza a ponerse nerviosa porque va a tener código duplicado, que necesita un caso base, y recurre a cosas aparentemente más simples como:</p> <!> <p>Y entonces hay quien se flipa más y dice “voy a refactorizar y limpiar esto un poco”, llegando a resultados como:</p> <!> <p>Todo parece muy bonito, muy obvio… el problema es que <em>se está diseñando y remodelando todas las clases basándose en <strong>UNA CARACTERÍSTICA</strong></em>. En El Mundo Real®, las clases no solo tienen más características exclusivas sino que además tienen la mala costumbre de mezclar más de una responsabilidad <em>(sobre esto se puede hablar largo y tendido)</em>. No solo tienen un único comportamiento que pueda ser diferente entre distintos subtipos.</p> <h2>¿Qué haría alguien que está comenzando y no conoce estos mecanismos?</h2> <p>Paradójicamente suelen proponer algo mejor. Quiero que veas el siguiente código y te preguntes si entiendes su propósito:</p> <!> <p>¿Qué tenemos aquí? Una variable de instancia (un campo, o atributo si es público, o propiedad en los mundos de JS) que define si es o no volador. Podemos indicar esto en tiempo de construcción. Y una bifurcación, dependiendo de ese campo booleano. Todo surgiendo de lo más básico de la programación estructurada, variable + control de flujo.</p> <p>En nuestro sistema de ejemplo, si algo puede o no volar solo afecta a la forma en la que se mueve, y es una característica que pueden o no tener una gran parte de animales, independientemente de su “reino”. Por ejemplo, un pingüino no puede volar por mucha ave que sea, pero una cabra con un JetPack sí.</p> <p>Este código es mucho más fácil de mantener, su intención sigue siendo clara, la responsabilidad de mover sigue siendo la misma y sigue siendo única (mover al animal a una posición). La diferencia es que ahora tenemos un atributo para identificar si el animal puede volar y una acción para cada caso. ¿Esto es escalable?, ¿es una práctica adecuada en POO?, me dan igual esas preguntas, lo que me importa es:</p> <ul><li>Se entiende, su propósito queda claro</li> <li>Es testable</li> <li>Es sostenible</li> <li>Es fácil generalizar en otro momento <em>si llegase</em> a ser necesario</li></ul> <p>Lo último es lo más importante, si estás pensando “pero Álex, ¿y si algo que puede volar pudiera en un futuro tener mayores diferencias en otros campos y comportamientos?, ¿o si una función u otra parte del sistema necesitara trabajar con animales estrictamente voladores?“.</p> <p>Te puedes responder con otra pregunta: “¿Y si no?”, ¿por qué no esperar a tener la necesidad?, quizás resulta que nunca la llegas a tener y habrás añadido complejidad a tu código y trabajado más para nada. Además, ¿dónde pones el límite?, ¿por qué parar solo en la necesidad de diferenciar voladores entonces? Puestos al “por si acaso”, genera cientos de clases que nadie te ha pedido.</p> <p>Aquí puede surgir otro tipo de flipadismo, especialmente al ver ese booleano, el de tener demasiado en cuenta el principio abierto-cerrado o identificar una supuesta baja escalabilidad. Peca de exactamente lo mismo, estás pensando en diseño anticipado y asumiendo que tu código no puede modificarse en cualquier momento para cumplir con el principio que consideres oportuno cuando sea necesario o con demandas de escalabilidad.</p> <p>Incluso acercándote a la necesidad, podrías no llegar a necesitar aún la generalización. ¿Necesitas asegurar que solo se trabaja con lo que sea volador? Filtra, usa guards, o con una interfaz ligera <code>Volador &lbrace; isVolador: true &rbrace;</code>, que te fuerce a usarlo como “as Volador” en tiempo de compilación o con validadores de tipos en el caso de TS (funciones booleanas que devuelven : is Volador). Hay muchas más opciones sencillas que ayudan a mantener una naturaleza polimórfica sin recurrir a generalizaciones.</p> <p>Por supuesto, luego está la composición y le implementación de interfaces funcionales y/o segregadas habilitantes (implements Volador) pero ese es tema gordo para otro día.</p> <p>En resumen, no te flipes. Sé que es más fácil decirlo que hacerlo, que no manejamos bien la incertidumbre, nos genera ansiedad y odiamos postergar decisiones. Recomiendo echar un ojo a la <a href="https://www.youtube.com/watch?v=vEr2xbNoUxM" rel="nofollow">presentación de Eduardo Ferro en el CAS Vitoria de 2016, “El arte del patadón pa’lante”</a>, un recurso que tengo ya quemadísimo, pero es que ha envejecido muy bien. Oro puro.</p>`,1);function us(o){var e=cs(),a=l(z(e),18);j(a,{language:"TypeScript",children:(d,u)=>{i();var p=v();p.nodeValue=`
class Animal {
  comer() { console.log("Comiendo") }
}

class Pajaro extends Animal {
  volar() { console.log("Volando") }
}

class Pinguino extends Pajaro {
  // No queremos fly
  volar() { throw new Error("Los pingüinos no vuelan") }
}`,t(d,p)},$$slots:{default:!0}});var s=l(a,6);j(s,{language:"TypeScript",children:(d,u)=>{i();var p=v();p.nodeValue=`
abstract class Animal {
  comer() { console.log("Comiendo") }
  // No implementamos move
  abstract mover(hacia: Posicion): void; 
}

class Mono extends Animal {
  mover(hacia: Posicion) { 
    // ... lógica del movimiento normal
  }
}

class Loro extends Animal {
  mover(hacia: Posicion) { 
    // ... lógica del movimiento volando
  }
}`,t(d,p)},$$slots:{default:!0}});var n=l(s,12);j(n,{language:"TypeScript",children:(d,u)=>{i();var p=v();p.nodeValue=`
abstract class Animal {
  comer() { console.log("Comiendo") }
  // Ahora Animal sí implementa mover, por defecto movimiento terrestre.
  mover(hacia: Posicion) {
    // ... lógica de movimiento más común, terrestre.
  }
}

class Mono extends Animal {
    // Nada que implementar.
}

class Loro extends Animal {
  override mover(hacia: Posicion) { 
    // los tipo Loro reemplazan su comportamiento de movimiento.
  }
}`,t(d,p)},$$slots:{default:!0}});var r=l(n,4);j(r,{language:"TypeScript",children:(d,u)=>{i();var p=v();p.nodeValue=`
class Animal {
  comer() { console.log("Comiendo") }
  // Ahora Animal sí implementa mover, por defecto movimiento terrestre.
  mover(hacia: Posicion) {
    // lógica de movimiento normal, terrestre.
  }
}

class Ave extends Animal {
  override mover(hacia: Posicion) { 
    // los tipo Ave reemplazan comportamiento de movimiento por defecto.
  }
}
`,t(d,p)},$$slots:{default:!0}});var c=l(r,8);j(c,{language:"TypeScript",children:(d,u)=>{i();var p=v();p.nodeValue=`
class Animal {
  puedeVolar: boolean
  ...
  comer() { console.log("Comiendo") }

  mover(hacia: Posicion) {
    if ( this.puedeVolar ) {
      // Lógica de movimiento de vuelo
    } else {
      // Lógica de movimiento terrestre 
    }
  }
}
`,t(d,p)},$$slots:{default:!0}}),i(20),t(o,e)}const ps=Object.freeze(Object.defineProperty({__proto__:null,default:us,metadata:Ke},Symbol.toStringTag,{value:"Module"})),Xe={title:"Miedo de decir, miedo de ser",slug:"miedo-de-decir-miedo-de-ser",coverImage:"paisaje-miedo.jpg",coverAuthor:"Karsten Würth",excerpt:"Me han preguntado si no me da miedo escribir algunas cosas,  pues podría estar saboteando mi futuro. Respondo.",date:"2024-11-28T01:09:04.325Z",updated:"2024-11-28T01:09:04.326Z",hidden:!1,tags:["Personal","Laboral"],keywords:[],type:"default"},{title:Li,slug:Ai,coverImage:ki,coverAuthor:Ri,excerpt:Di,date:Mi,updated:Vi,hidden:Oi,tags:Ii,keywords:Ui,type:Hi}=Xe;var ms=b(`<p>Me aconsejaba un compañero, preocupado, que no debería atreverme a exponer aquí
opiniones personales que puedan mostrar lo que algunas empresas consideran
red flags, por muy personal que sea este blog.</p> <p>Y no le falta razón. Puedes generar rechazo incluso en aquellos que comparten
tus mismos valores y opiniones: parecer imprudente o demasiado polémico no suele
ser buena idea.</p> <p>Lejos de lo que pueda proyectar a mis alumnos o compañeros, no estoy en
ninguna situación privilegiada que me permita hacer o decir lo que quiera. No
tengo una cola de empresas interesadas en mí, un millón en el banco ni ningún
otro tipo de estabilidad garantizada. Cada opinión podría sentenciarme o hacerme
perder oportunidades.</p> <p>Entonces, ¿por qué me expongo?</p> <h2>Cincel</h2> <p>Suelo decir que moriré en el momento en el que deje de
cambiar, y una forma muy efectiva de realizar introspección es poner en tela
de juicio mis propias convicciones. Uso este blog como una herramienta para
dicho fin.</p> <p>Mojarme con opiniones personales me genera la suficiente ansiedad y tensión
psicológica para disparar muchas dudas. Esto se intensifica tras ver que mucha
más gente de la que creía lee este blog con tanto interés <em>(sinceramente
estaba convencido de que no lo leería nadie, eso lo hacía todo más fácil)</em>.</p> <p>Nunca he tenido la intención de construir una marca personal con este sitio y
menos con un blog. Solo es un espacio donde poder contar <a href="/blog/el-hacking-a-google">batallitas</a>, experimentar con alguna <a href="/blog/especificacion-visual-caso-point-it-out">técnica</a> que se me ocurra y
hablar de resultados de <a href="/blog/tamano-no-importa-tree-shakeables">algunas pruebas</a>.
Tampoco me expongo tanto. Como dije en mi primera entrada, a diferencia de una
red social, aquí tengo mejor control del contenido.</p>`,1);function gs(o){var e=ms();i(14),t(o,e)}const bs=Object.freeze(Object.defineProperty({__proto__:null,default:gs,metadata:Xe},Symbol.toStringTag,{value:"Module"})),Qe={title:"Template Method Pattern. Partiendo otra lanza por los clásicos.",slug:"oop-template-method-pattern",excerpt:"Revisito un viejo patrón para combatir el dogma. Lo de siempre...",date:"2026-06-09T15:10:05.000Z",updated:"2026-06-09T15:10:05.000Z",tags:["Programación orientada a objetos","Ingeniería software"],keywords:["patrones"],type:"default"},{title:Ni,slug:Bi,excerpt:Gi,date:Fi,updated:Yi,tags:Wi,keywords:Zi,type:Ki}=Qe;var hs=b(`<p>Ya hacía unos meses que no pasaba por aquí, pero empieza otra etapa en la vida
mucho más despejada. Quería escribir algunos nuevos propósitos, pero hablando
con un colega me acordé que tenía este borrador por algún lado pendiente.</p> <p>Seguimos luchando contra dogmatismos y acercándonos al día que escriba sobre
Composition over Inheritance (<em>lo siento, hoy tampoco es ese día…</em>)</p> <p>Entre los perfiles que leen este blog, cuando hablo de programación orientada a
objetos (OOP), hay dos posiciones muy comunes con preguntas prácticamente opuestas:</p> <ul><li>¿Por qué hablas como si la OOP clásica hubiera muerto?</li> <li>¿Por qué hablas como si alguien usase mecanismos clásicos de OOP en 2026?</li></ul> <!> <p>La primera pregunta es común en los perfiles que siguen trabajando en ecosistemas
donde los mecanismos clásicos de la OOP son el pan de cada día, especialmente
con lenguajes como Java o C#.</p> <p>La segunda se la hacen los perfiles que llevan más años en el frente del estado
del arte: la ingeniería de software moderna potenciada por mecanismos
superflexibles y lenguajes de cadena de prototipo (te estoy mirando a ti,
ECMAScript), la que es completamente capaz de solventar
todos los problemas que daban razón de ser a los mecanismos clásicos de OOP,
como las clases y la herencia.</p> <h2>El suceso definitorio: la postura de Evan You</h2> <p>El mismo Evan You, creador de Vue.js, reorientó toda la arquitectura de Vue 3
y Vite (especialmente en la Composition API), a evadir completamente las clases.
Tenía muchas razones para ello bien explicadas, empezando porque las clases no
existen como tal en JavaScript, solo son sugars sintáctico que llena de hacks
el código y problemas de rendimiento. O al menos así era en aquella época.</p> <p>Esa sensación no era nueva en el mundillo. Los que sabíamos <em>la verdad™</em>, sobre cómo
construir funciones y definir su cadena de prototipo, sabíamos que algo olía
raro en esa sintaxis. Las palabras de Evan You reforzaron a una nueva generación
que se alejó de las clases y empezó a experimentar con mecanismos y patrones
que no encajaban en los modelos clásicos.</p> <p>Es un error garrafal pensar que la programación orientada a objetos va de
“clases”. Las clases son un mecanismo más. Los verdaderos protagonistas son
los objetos, y hay más de una forma de definirlos, construirlos y relacionarlos.</p> <p>Pero es un error aún más grave pensar que las clases <strong>son malas</strong> o que <strong>no se deben usar</strong>, o que sus mecanismos asociados como la herencia son
peligrosos para la ingeniería de software.</p> <p>Por supuesto esto no es lo que defiende Evan You, él solo explicaba los motivos
en los contextos de JavaScript y en sus propias arquitecturas, no inició ninguna
especie de cruzada en contra como algunos parece que asumieron.</p> <h2>El (no tan) problema de las clases, abstracción y herencia</h2> <p>Soy muy fan de la composición, y
también prometo que no tengo ningún problema personal ni ningún juicio negativo contra
mecanismos como las clases y la herencia. Lo demostraré.</p> <p>¿Has oído hablar de eso del principio abierto/cerrado (OCP)? Seguramente, como todo
el gremio, la O de los SOLID, la joyita de Bertrand Meyer favorita del tito Bob Martin, y el principio
que menos entendemos y menos sabemos explicar.</p> <p>Ese principio es, en realidad, en el que se fundamentan aquellos patrones que
buscan erradicar los problemas más graves de la abstracción en clases, y hoy
voy a rescatarlo con otro ejemplo más real.</p> <h3>Caso real: creando un sistema de componentes UI</h3> <p>Imagínate, en el viejo mundo, que definimos una clase abstracta <code>BaseComponent</code>,
donde queremos definir su ciclo de vida (creación, montaje, renderizado,
desmontaje).</p> <!> <p>Decidimos que <code>render</code> sea abstracto, parte del contrato, cada componente se
renderiza como quiere así que debe implementarlo. Pregunta, ¿esto respeta
el principio abierto/cerrado?</p> <p>Aquí nacen los verdaderos problemas de la abstracción y la herencia y por qué
todo empieza a irse de madres rápidamente.</p> <p>El principal problema no está en los abstractos, <em>a mí me es irrelevante si quieres dejar funciones dummies o si te cargas la palabra abstract de todos lados</em>, solo lo puse para despistar.</p> <p>Supón que el primer componente
que creas, tiene que hacer cosas durante el montaje o el desmontaje. ¿Qué haces?</p> <p>“Fácil, sobreescribo el método mount y listo, primero llamando al método padre
para respetar lo que hiciera antes…“.</p> <!> <p>Esto tiene una buena cantidad de problemas:</p> <ul><li>Tienes que llamar al supermétodo. Aquí de por sí encontramos otro conjunto de
problemas, derivados del simple hecho de darte esa responsabilidad <em>(empezando
por lo obvio: que no te olvides de llamarla)</em></li> <li>El punto más crítico es que estás controlando el flujo de vida del componente,
modificando su comportamiento. <em>Ok, no lo estamos haciendo, pero podríamos, y eventualmente
tendremos necesidad o tentación de hacerlo</em>. Aquí es
cuando entran los líos, se introducen
sorpresas y se empieza a dispersar responsabilidades por todos lados, <strong>este es el escenario al que nunca queremos llegar</strong>. Es al que todo el
mundo teme. <ul><li>Un caso habitual ocurre cuando decide posponerse la llamada al padre, primero
hacer algo, y al final invocar al supermétodo. A lo mejor funciona, pero puede que
tras un cambio de la implementación del padre, la nueva acción no se pueda
realizar antes, quizás necesita de algo que solo se construye tras un primer
mount. Nadie definió que pudieras hacer eso, y pagas cualquier side effect.</li></ul></li></ul> <p>¿Qué tal si decidimos que el ciclo de vida del componente sea inmutable? Que sí
puedas definir qué
hacer tras cada paso, sin saber siquiera lo que hacen de base ni tener la
opción de modificarlo (ni de olvidarte). ¿Cómo podemos entonces <strong>extender</strong> el comportamiento sin <strong>modificar</strong> y sin tener la posibilidad de meter la pata?</p> <h2>El Template Method Pattern</h2> <p>Es un patrón con muchas variantes, pero todas ellas se basan en la misma idea:
mantener un flujo y dejar pasos concretos a otros sin posiblidad de alterar el flujo.</p> <p>Para este caso se definen métodos adicionales que representan qué hacer tras
el paso concreto en el ciclo de vida. Por ejemplo, métodos anclaje como <code>onMount()</code> u <code>onRender()</code>,
que se llamarán tras el montaje o el renderizado respectivamente, pero que NO HACEN NADA por sí mismos.</p> <!> <p>De ahí la palabra “Template”. Básicamente ofreces una plantilla de ejecución,
donde tipos concretos de la clase solo meten el código propio en los puntos
claves del ciclo de vida.</p> <p>También podemos controlar el orden, meter otra forma de anclar al ciclo de vida
antes o después de cada punto, como <code>beforeMount()</code> o <code>afterMount()</code>.</p> <p>Lo importante es que el componente hijo no sabría de detalles de ejecución
ni modifica el comportamiento del padre, pero sí puede extenderlo. Es el ejemplo
realista más explícito de OCP que he encontrado recientemente.</p> <h3>¿Notaste el “sutil” cambio de sintaxis?</h3> <p>Volvamos con esas quejas de Evan You.</p> <p>Nótese que en TypeScript hemos cambiado el método <code>mount</code> a una función de flecha
de solo lectura, para evitar su sobreescritura. En lenguajes más tradicionales
enfocados a OOP tenemos palabros como <code>final</code> o <code>sealed</code> para marcar métodos
como no sobrescribibles. En JavaScript, no. Como decíamos, en JavaScript en
realidad no existen ni las clases como tal.</p> <p>En TypeScript no tenemos esto para métodos, pero sí para campos.
Por alguna razón se les resiste en métodos, de ahí lo de pasarlo a un campo
readonly y función flecha (y esto no es gratis, ojo, no es un mero cambio
de sintaxis).</p> <p>Dicen que es un debate complicado por la incongruencia entre ejecución y
compilación, pero lo cierto es que ya existen mecanismos restrictivos en
TypeScript como ReadonlySet, para definir un Set como de solo lectura, y que
en ejecución no deja de ser un Set normal y corriente.</p> <p>Si te gusta la DX, seguramente ya estés pensando que se podría añadir
una regla a ESLint o un plugin de TypeScript para que se pueda usar readonly,
final, sealed o algún otro palabro, o un decorador. Y así es, yo meto
metaprogramación por DX en mis proyectos como si no hubiera mañana.</p> <h2>Middleware, eventos, composición funcional, clausuras, inyección de dependencias…</h2> <p>A la que tengas un poco de conocimiento ya se te habrán ocurrido muchas otras
formas de solucionar el mismo problema, muchas que entran en el camino de la
Composión sobre la Herencia (COI), y algunas que ni requieren clases <em>(en
lenguajes que permitan prescindir de ellas)</em>.</p> <p>A mí personalmente me encanta trabajar con eventos y listeners (o
cualquier variante de observer o pub/sub), los prefiero
a todo esto. Pero he hecho ya una buena cantidad de auditorías, las suficientes
como para garantizarte que pueden usarse mecanismos, patrones y arquitecturas
clásicas exactamente igual de eficientes y fáciles de mantener.</p> <p>El código más fácil de explicar es evidentemente el que no requiere explicación,
y la herencia es algo que se suele entender fácilmente <em>(quizás tiene algo que ver el que la metan hasta en la sopa sin ningún contexto en FP y primeros años de universidad)</em>. Para mí es una herramienta
de diseño de muy alto valor, y la despreciamos porque no nos
paramos a pulirla un poquito o porque nos suena a algo viejo o “demasiado fácil”.</p> <p>La mayoría de opiniones que veo en estos debates están poco justificadas y cargadas de dogma. Para mí es una guerra donde no hay botín, y a la que cuaquier persona con
un mínimo de conocimiento le importará un pimiento mientras exista una buena
especificación y batería de tests. Aconsejo un poco más de la infalible
tolerancia y pragmatismo.</p>`,1);function vs(o){var e=hs(),a=l(z(e),8);k(a,{children:(c,d)=>{i();var u=v(`NOTA: me tomo una licencia con mi idioma, de usar formas del adjetivo "clásico" no solo
con su acepción original, sino también con una sobrecarga de significado: 
"relacionado con las clases". A Don Pérez Reverte
le estará picando la nariz. Me la suda.`);t(c,u)},$$slots:{default:!0}});var s=l(a,30);j(s,{language:"TypeScript",showLanguage:!1,noMargin:!0,children:(c,d)=>{i();var u=v();u.nodeValue=` abstract class BaseComponent{
    root: HTMLElement

    constructor(options: BaseComponentProps) {
    	this.root = document.createElement(options.root) 
    }
    
    mount(target: HTMLElement) {
    	target.appendChild(this.root)
    }

    unmount() {
    	this.root.remove()
    }

    abstract render(): void
}`,t(c,u)},$$slots:{default:!0}});var n=l(s,12);j(n,{language:"TypeScript",showLanguage:!1,noMargin:!0,children:(c,d)=>{i();var u=v();u.nodeValue=`
// En una clase que hereda de BaseComponent
// ...
mount(target: HTMLElement) {
    super.mount(target)
    // Hago cosas específicas de este componente durante el montaje
}
// ...`,t(c,u)},$$slots:{default:!0}});var r=l(n,14);j(r,{language:"TypeScript",showLanguage:!1,noMargin:!0,children:(c,d)=>{i();var u=v();u.nodeValue=`
// En BaseComponent
readonly mount = (target: HTMLElement) => {
    target.appendChild(this.root)
    this.onMount()
}

onMount() {}`,t(c,u)},$$slots:{default:!0}}),i(28),t(o,e)}const fs=Object.freeze(Object.defineProperty({__proto__:null,default:vs,metadata:Qe},Symbol.toStringTag,{value:"Module"})),Je={title:"El peligro de trivializar. Edición TypeScript.",slug:"peligro-trivializar-typescript",coverImage:"/src/assets/posts-covers/any-code.png",coverPosition:"normal",excerpt:"Un error común es creer que TypeScript es una tontería que se aprende en cinco minutos. Quienes lo creen van directos a un precipicio.",date:"2024-09-28T16:31:23.177Z",updated:"2024-09-28T16:31:23.903Z",hidden:!1,tags:["TypeScript","DX"],keywords:["dx","any","typescript"],type:"default"},{title:Xi,slug:Qi,coverImage:Ji,coverPosition:ed,excerpt:ad,date:od,updated:sd,hidden:nd,tags:rd,keywords:td,type:id}=Je;var qs=b(`En el repo <a href="https://github.com/type-challenges" style="color: var(--color-font-highlight)">Type Challenges</a> de Anthony Fu puedes encontrar una gran variedad de desafíos y soluciones de
tipado de todos los niveles, donde verás que no en pocas ocasiones se utiliza
any en un sentido semántico y justificado, sin implicaciones
problemáticas, pero incluso ahí, en la mayoría de casos puede usarse alguna
alternativa, muchas veces un simple unknown puede reemplazarlo sin necesidad
de narrowing ni nada extra.`,1),ys=b(`<p>Recientemente un colega de profesión se ha sorprendido al
permitirle usar <code>any</code> en TypeScript. Suelo dar mucho la turra con ello.
En la práctica totalidad del código que he auditado rara vez he
encontrado algún <code>any</code> justificado en usos “normales”.</p> <p>El uso justificado de <code>any</code> más habitual que he
visto es precisamente el que <a href="https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#any" rel="nofollow">podemos encontrar en la documentación</a>, traduzco:</p> <blockquote><p>❌ No uses <code>any</code> como un tipo salvo que estés en proceso de migrar un proyecto
de JavaScript a TypeScript.
El compilador tratará el <code>any</code> como “por favor desactiva la revisión de tipos para esto”.
Similar a poner un comentario @ts-ignore alrededor de cada uso de la variable.
Esto puede ser realmente útil cuando comienzas a migrar un proyecto de JavaScript a TypeScript
dado que puedes establecer el tipo de las partes aún no migradas a any, pero en un
proyecto full TypeScript estarás desactivando el tipado para cada parte del programa que
lo utilice.</p></blockquote> <p>Pero, ¿quién decide qué es justificación y qué excusa?, ¿cómo diferencias una
negligencia de una decisión deliberada con buena finalidad?</p> <!> <h2>Lo mejor no significa lo más práctico</h2> <p>Cuando no tienes conocimientos avanzados de TypeScript y tipar correctamente un
caso extraño puede implicar muchas horas, hay que aprender a poner límites a la
excelencia.</p> <p>Tenemos muchas herramientas para minimizar el impacto
que implica un tipado incompleto, empezando por flexibilizar el tipo y proteger
con tests.</p> <p>No hace falta que haya prisa o se acerque una deadline para tomar estas
decisiones, quizás hemos pillado mucho impulso y no queremos
pararnos a estar con detalles, por mucho que sea lo correcto, no estamos en el
“mood” de hacer esto.</p> <p>Esto puede ser todavía más crítico durante una fase de diseño donde no está del
todo claro la estructura que vamos a tener. Definir tipos muy avanzados y
complejos a medida que se trabaja puede impedirnos el posponer decisiones. Tengo
mucho que escribir sobre el arte de posponer decisiones. De momento te recomiendo
buscar “El arte del patadón pa’lante” de Eduardo Ferro.</p> <h2>Roles y responsabilidades</h2> <p>Hace un año, David Heinemeier Hansson (DHH), creador de Ruby on Rails,
generó una fuerte polémica en lo que fue casi entendido como <a href="https://world.hey.com/dhh/turbo-8-is-dropping-typescript-70165c01" rel="nofollow">un manifiesto
contra TypeScript</a>, explicando
cómo abandonaron TypeScript en su proyecto Turbo tras pasar infiernos con él.</p> <p>DHH señalaba, entre tantas quejas, a la enorme necesidad de usar any que tenían
en su proyecto, siendo TypeScript inútil o estando desactivado en la mayoría de
casos. Hice una auditoría personal a ese proyecto. Mi conclusión: no lo entendían
ni sabían usarlo.</p> <p>Y no es que yo me considerara un experto en esta tecnología entonces, ni ahora,
pero claramente veía el trabajo de personas que la habían trivializado. Muchos
seniors creen que TypeScript es una “tontería” para meter tipado y ya, algo que
se aprende en minutos.</p> <p>Entender correctamente sus flujos de análisis y sus características
avanzadas no es algo trivial, y casi diría que es muy vocacional: aquellos que
disfrutan el tooling y la DX tienen una mayor inclinación natural hacia él.</p> <p>Al principio uno puede estar horas, y no exagero, dando vueltas a cómo conseguir
tipar una estructura de datos sencillita para que tenga coherencia. Quien
trivializa considerará que es una tontería que se hace en cinco minutos.</p> <p>Era evidente que entre el equipo de DHH no había nadie con experiencia avanzada
en TypeScript, lo que me sorprende porque el propio DHH decía haber estado
cinco años trabajando con él, lo que resalta la necesidad de tener al menos a
una persona centrada en la experiencia de desarrollo y profundizar en esto.</p> <p>JavaScript puede migrarse a TypeScript, y durante un proyecto puede trabajarse
con JavaScript o desactivar el chequeo de tipos de algún tipo complejo <strong>mientras
alguien asume la responsabilidad de revisar y tipar</strong>. De este modo,
todo el mundo está cómodo en su trabajo y se sigue obteniendo lo mejor de ambos
mundos de cara al futuro del proyecto.</p> <p>Con este enfoque y con el tiempo, el conocimiento de los expertos
(habitualmente DX) acaba
permeando y transmitiéndose a todo el equipo y poco a poco otros van
aprendiendo TypeScript a niveles avanzados, sin forzar nada y sin frustraciones.
Eso es más viable que el salto a una piscina vacía como el que veo hacer a tanta
gente, comenzando proyectos con TypeScript desde el inicio sin saber utilizarlo.</p>`,1);function js(o){var e=ys(),a=l(z(e),8);k(a,{children:(s,n)=>{i();var r=qs();i(2),t(s,r)},$$slots:{default:!0}}),i(28),t(o,e)}const ws=Object.freeze(Object.defineProperty({__proto__:null,default:js,metadata:Je},Symbol.toStringTag,{value:"Module"})),ea={title:"Por qué un blog en 2024",slug:"por-que-un-blog-en-2024",coverImage:"/src/assets/posts-covers/maquina-escribir.jpg",coverPosition:"normal",coverAuthor:"Patrick Fore",excerpt:"Esta es la primera entrada de un un blog en el que controlo todo su proceso generativo y contenido.",date:"2024-06-24T15:06:23.177Z",updated:"2024-06-24T15:06:23.903Z",hidden:!1,tags:["Personal"],keywords:["estático","blog"],type:"default"},{title:dd,slug:ld,coverImage:cd,coverPosition:ud,coverAuthor:pd,excerpt:md,date:gd,updated:bd,hidden:hd,tags:vd,keywords:fd,type:qd}=ea;var xs=b(`En este artículo hablo de blogs de carácter <strong>personal</strong>, 
no de blogs corporativos, institucionales, etc. Esos tienen otras razones para 
seguir siendo útiles.`,1),_s=b('<a href="#detalles-tecnicos">👇 al final.</a>'),Ss=b(`<!> <p>Esta es la primera entrada de un blog en el que controlo todo su proceso
generativo y contenido. Detalles
técnicos <!></p> <p>Estoy cansado de leer sobre la importancia de dejar por escrito tu oficio o
pensamientos aunque nadie te lea. No le veía sentido práctico y no sentía que
me ayudara, pero recientemente le he visto dos utilidades.</p> <p>La primera, tener un espacio donde compartir lo que suelo repetir con cada
alumno. Así puedo dejar directamente comentarios, recomendaciones, patrones,
etc., limitándome a mandarles el enlace y no robándoles tiempo en clase.</p> <p>La segunda, más personal y clásica de un blog, es dejar algún rastro de mi
evolución. Muchas veces he
intentado recordar sin éxito qué pensaba o qué razones tenía en el pasado para
decir o hacer determinadas cosas, como apoyar ciertas corrientes o tecnologías.
Saber cómo era ayuda a la introspección, a asimiliar y ajustar cambios.</p> <h2>Ventajas de un blog personal en la actualidad</h2> <p>Todos conocemos por qué este formato ha muerto. Un blog personal no genera
dopamina, no está en medio de todo ni te da
seguidores <small>(o no tantos)</small>. De hecho requiere un esfuerzo para
mejorar su visibilidad si necesitaras que otros pasen por él. Todo esto puede
considerarse ventajas si lo vemos como un pequeño refugio.</p> <p>Otra ventaja que surge de la adversidad solo por un cambio de enfoque
es que hay menos posibilidades de negocio, lo que provoca que un blog personal
se reduzca por necesidad a su esencia. Actualmente todo internet está saturado
de contenido basura y autogenerado bien posicionado por magufidades del SEO, por
lo que la dificultad de posicionar algo aumenta tanto que me disuade y aleja
de esas ideas de pseudoéxito capitalista.</p> <p>Al renunciar al posicionamiento, a las visitas e incluso a los comentarios,
escribir un blog se convierte en una experiencia más personal y limpia. Y lo
mejor es que me permite realizar aquellas acciones tradicionalmente
superdestructivas y dañinas para el posicionamiento en un sitio normal,
como borrar entradas.</p> <p>Ya desde el primer párrafo que escribes puedes notar algo de no
estar pululando cerca de una red social: se acabó el que secuestren tu atención,
el destruir tu productividad con spam de vídeos de gatitos y Milei dando cringe.</p> <p>Pero lo mejor de todo es que en este formato tienes el control de tu contenido,
no hay un servicio que te diga qué puedes o no publicar. Incluso con servicios
de alojamiento con restricción de contenido o posibilidad de cambiar sus
políticas, siempre podrás llevártelo a otro lado. Hoy día, tener el control
sobre tu contenido es un privilegio.</p> <h2>Por qué no tengo una sección de comentarios</h2> <p>Quitando que es un rollo integrar un sistema de comentarios dinámicos externo
en un sitio estático, cabe aclarar que los comentarios no tienen nada de malo,
de hecho tienen más pros que contras, pero para mi caso particular pesan más
los contras. Mi idea es <strong>eliminar la interacción social</strong> en este espacio (más
sobre esto en una futura entrada).</p> <p>Entre las razones más evidentes para no incluirlos está evitarme
todo tipo de spam, trolls e incluso comentarios positivos, que solo son alimento
para el ego. No necesito que quede constancia de si a alguien le gusta o no lo
que he escrito, aunque con ello se pierda las utilidades más importantes de los
comentarios: la obtención de feedback constructivo, correcciones y sugerencias.</p> <p>A ver, existe el correo electrónico, pero nadie lo usa
salvo que no haya más remedio. Es una vía más directa
pero con algunas desventajas, como la posibilidad de que el correo nunca llegue
y ni lo sepas.</p> <p>La razón de peso más típica para incluir comentarios suele estar relacionada con
el SEO. Los comentarios cuentan como nuevo
contenido y pueden atraer visitas por sí mismos. Todo eso me da igual, no busco
visibilidad ni posicionamiento con este blog.</p> <h2 id="detalles-tecnicos">SvelteKit como generador de blogs estáticos</h2> <!> <p>No estoy usando ningún framework específico para blogs sino <strong>SvelteKit</strong> como
generador de sitios estáticos, adaptado a mis necesidades.</p> <p>Hoy día los sitios estáticos no son ninguna sorpresa. Recuerdo a
principios de milenio cuando la comunidad de php te miraba raro al decir
de hacer todo en estático, y lo nicho que fue Jekyll hasta que Ruby on Rails
pilló más popularidad.</p> <p>Entre 2022 y 2023 comencé un proyecto un poco más ambicioso al que llamé
Simple Static Blog Generator, fundamentado en TypeScript y MarkDown. Estaba
orientado a experiencia de desarrollo con capa de vista totalmente desacoplada,
teniendo solo una implementación básica de demostración con pug como sistema
de templates.</p> <p>Aunque utilizaba herramientas modernas, integrar con frameworks de SPA,
reactividad y diseño orientado a componentes era demasiado
reinventar la rueda. Pensando en rediseñar el sistema sobre Nuxt (Vue),
conocí Svelte y SvelteKit. El proyecto de Rich Harris me parecía increíble como
para no darle una oportunidad, y no me arrepiento.</p> <p>SvelteKit es a Svelte lo que Next a React o Nuxt a Vue, aunque con soporte
oficial; digamos que SvelteKit/Svelte son parte del mismo proyecto
en manos de la misma comunidad y se desarrollan completamente a la vez.</p> <p>Quizás seas como yo y no te guste este tipo de frameworks “todo en uno”
porque, al menos en flujos normales, implica una <small>no obligatoria pero
recomendada</small> implementación de back end; pero su modo generador de sitios
estáticos es con mucho margen la mejor experiencia de desarrollo que he tenido.</p> <p>Alojar un sitio estático es prácticamente gratuito y apenas consume recursos.
El servidor, a fin de cuentas, solo se dedica a enviar ficheros. Existen
diversos servicios gratuitos para alojarlo, como Github Pages, donde
justo está este blog.</p> <p>En términos de seguridad, los sitios estáticos son más seguros por naturaleza.
Los ataques de tipo DDoS solo funcionan por saturación de red y no por cómputo,
dado el esfuerzo mínimo que tiene que hacer el servidor. Esto no evita que se
agoten las cotas de recursos en servicios de hosting y es crítico
cuando no se tiene ningún control del backend. En servicios como Pages
donde además no se dispone de formas claras de auditar los ataques, solo se
complica, especialmente con capas gratuitas.</p> <p>Hay otros beneficios <small>(y contras)</small>, pero no voy a
dar <small>más</small> la chapa en esta entrada. Si tienes dudas
concretas sobre implementación o quieres hacerte tu propio sitio
estático con estas tecnologías y no sabes ni por dónde
empezar <!> mándame un correo.</p>`,1);function zs(o){var e=Ss(),a=z(e);k(a,{children:(u,p)=>{i();var h=xs();i(2),t(u,h)},$$slots:{default:!0}});var s=l(a,2),n=l(S(s));de(n,{children:(u,p)=>{var h=_s();t(u,h)},$$slots:{default:!0}}),x(s);var r=l(s,32);k(r,{children:(u,p)=>{i();var h=v(`Esto es un apartado más técnico. Si no te interesa no sé qué haces
leyendo este blog, para empezar.`);t(u,h)},$$slots:{default:!0}});var c=l(r,18),d=l(S(c),5);ke(d,{children:(u,p)=>{i();var h=v("déjame un comentario");t(u,h)},$$slots:{default:!0}}),i(),x(c),t(o,e)}const Es=Object.freeze(Object.defineProperty({__proto__:null,default:zs,metadata:ea},Symbol.toStringTag,{value:"Module"})),aa={title:"Sobre las consecuencias y su recurrencia",slug:"sobre-consecuencias-y-su-recurrencia",coverImage:"",excerpt:"Es terriblemente cruel el modo en que la sociedad, incluso en nombre de la moral o la prudencia, ejerce esa vigilancia eterna; el modo en el que el pasado se convierte en presente renovado.",date:"2025-04-07T01:09:04.325Z",updated:"2025-04-07T01:09:04.326Z",hidden:!1,tags:["Personal","Salud mental"],keywords:[],type:"default"},{title:yd,slug:jd,coverImage:wd,excerpt:xd,date:_d,updated:Sd,hidden:zd,tags:Ed,keywords:$d,type:Td}=aa;var $s=b(`<p>Actualmente un conocido se está enfrentando a consecuencias de actos que le
perseguirán y atormentarán hasta sus últimos días. No son pocas las personas que
están o estarán en situaciones similares, y entre las que me incluyo.</p> <p>Hay errores que cruzan líneas invisibles, y el daño de cruzar esas líneas no
siempre se repara con tiempo o justicia. Lo que
condena no es un juez, sino una memoria social, la de los otros, y también la
propia. La repetición de las consecuencias no viene de una “justicia eterna”,
sino del estigma.</p> <p>Es terriblemente cruel el modo en que la sociedad, incluso en nombre de la moral
o la prudencia, ejerce esa vigilancia eterna; el modo en el que el pasado se
convierte en presente renovado.</p> <p>Y luego está la consecuencia más silenciosa pero más corrosiva: la
interiorización. Cuando ya no puedes dejar de recordártelo. Cuando el espejo se
agrieta entre quien fuiste, quien eres, y quien intentas ser, pero se
mantiene dolorosamente estático, sin llegar siquiera a fragmentarse.</p> <p>Después de tanto tiempo cargando con el juicio propio y ajeno, unos empiezan a
confundirse con la condena. Ya no sabemos si lo que hicimos estuvo mal o si <em>somos</em> mal. La línea entre el acto y el ser se difumina. No sabemos cuándo comienza
ni termina el castigo, no sabes si se castigan tus actos o tu mera existencia. A veces
no sabes ni cómo ni quién lo está haciendo, y probablemente cargamos con culpas de
actos que ya no importan a nadie, pero aún así surge esa pregunta: “si dependiera
de mí, ¿merezco perdón?”, y la garganta se cierra.</p> <p>La palabra que más resuena en todo esto es <strong>responsabilidad</strong>.
Tal y como lo veo, hacerse responsable es decidir cada día qué haces con tus fantasmas.
No es solo entender y pedir perdón, que aunque fundamental, no suele ser suficiente.</p> <p>Asumimos que uno puede dar un paso en falso y morir despeñado, atropellado, ahogado… pero nos cuesta asumir una muerte (o asesinato) social. En lo social abundan los pasos en falso, por usar las palabras incorrectas, por hablar en caliente, por no saber agradecer, por arrimarnos a quien no debemos, por un impulso, autoestima, soledad, amistad, miedo, amor, orgullo…</p> <p>Comprender quién eras o qué motivaciones tenías no cambia nada. Deseamos poder creernos esa milonga de que ya no tenemos nada que ver con quienes éramos, que somos otra persona. Eso sería peor, nos estaríamos comiendo las consecuencias de los actos de otro.</p> <p>La responsabilidad no trata de consuelo, y si así fuera solo consuela tanto como nos creamos que no cometeremos los mismos errores, así no tengamos forma o ganas de volver a ponernos a prueba y solo nos queden las consecuencias.</p> <p>Los caminos de martirio y penitencia llegan a ser una forma más de construir una
narrativa de nuestra vida, muy comunes en estos casos. Nada saludables, en mi opinión. Esto no tiene nada que
ver con expiación ni con ser víctima ni verdugo de nada.</p> <p>Lo que realmente considero más peligroso de estas situaciones, y que me afecta
especialmente, es la visión que nos
brinda de los demás. En el martirio, y
en especial en la soledad, tendemos a extremar la tolerancia y ver lo mejor de
todos. Nos volvemos patológicamente incapaces de negar el perdón, y resulta
muy fácil acercarnos indebidamente a quien no debemos en el ejercicio
de la tolerancia. La inversa también se cumple. Es más fácil odiar y expulsar a otros
cuando creemos que gozamos de la compañía incondicional de nuestros actuales
cercanos.</p> <h2>Seguridad psicológica</h2> <p>La semana pasada impartí un curso de cuatro días en Valladolid enfocado a seguridad en el desarrollo, donde una buena parte, por necesidad, la enfoqué a cultura de la seguridad y seguridad psicológica. Creo que nunca había pasado tantos días sin dormir.</p> <p>No estaba nervioso, no era un grupo numeroso, al contrario, el más pequeño que he tenido en un curso de esa duración: solo once personas, y maravillosas personas he de añadir. El centro de Valladolid tampoco sería un problema para dormir, salvo una noche en la que un borracho cantaba a pleno pulmón el cara al sol (parece que el apodo de “Fachadolid” era más literal de lo que creía).</p> <p>Estando solo en la distancia la compañía de los fantasmas es más notable; la ansiedad y la incertidumbre se disparan. No pude centrarme, nunca me había costado tanto hablar y encontrar palabras. El sueño influye, pero el agotamiento no venía solo de no dormir. Es difícil, doloroso, incluso fraudulento, hablar de cultura punitiva cuando sabes que la teoría todo el mundo la comprende, pero en la práctica no soltamos el dedo del gatillo.</p>`,1);function Ts(o){var e=$s();i(28),t(o,e)}const Ps=Object.freeze(Object.defineProperty({__proto__:null,default:Ts,metadata:aa},Symbol.toStringTag,{value:"Module"})),Cs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZ0AAACZCAMAAADD5xcyAAAC8VBMVEUfHx8gICAEOV4oKChFRUUcJhzMzMzc3KqIiIj////BzMyur63/zQIgX5qrqatPT09dmMEkLiTMzKvMrH7/1wV+ICCYmJjBmF3My8YrHx+rq6ucwMyHuKnMzMGrgCDIycsgIV5+rMwfHyue4P+szMy3t7edOV4EOcAgIX7Dw8MgIm/Qo0PGzMzGu7LS26rXtF9SJB+oxsyvqa3vzKfMuJIgIDw6JB4JtObX/+Xc253cumSZXyDD9P/Hxsf/8dTMy7zc24x8fHwiOF63kVDt/f9zy/Rmmb7Lxr0EOajFo3A2NjandibIyQHb/f///fX//+gifqnOkXchY3etj3MfHzAfHyXFZiCHHx9eHx/woBm+xstypMWus73NzLdHfqrMvprYyYM/Ml8iIiJfKx7+shb3//+Is8y7u7v82rdrbGx0OV4fIE1uICD/9uAEltj24MmXrr21sa+53KrOs4i0hz+nfTxuMCBJIB/bzQS2zMywvMnMwbfI3KrMxaeioqLFsJ4naZ4xXoJBZ12rhE4fKzCNYSlSOSKHQSCkZh+XVx9+Kx/chRyruAHPx55Lc5mitJYYPIa0noApS3pXV1efeU0cTxW1xMyRt8x7qMaktsJOkLeHprY8hbIndaaRjZEgU49ag37MqXsiRW2+n2SXc1EfM0dyTCscNRegqAWM1vux06qgyKq/yqW4rJVIkJJSbIV6cHbSrFLOekM/Pz8vLy9+Wy6daiaySx6TJR6nShz/wRM0dRBxmguDnAq97P378ex1sNoEW8YVeLvMxrCxwKZegKRlo5wEVZx3qJgrYY8EWImag3nDk3UEOXWocmPKrmGaVV6ugCmPTyAwHx+jKx0jXxPz1wDq1wAQp+BgrtvauKswb5+HlphwkZimlosjgYiDg4Oki2q2gV5wVV7ikhofHxrerhDX7PiOyegkmdjrzL6rwYJQeXS2mHOGOV5dOV4rT1DBnD7EkTHCuQW24PW8xrZ+b59NYV64hSxZfRHxxgQJuLdNAAAMj0lEQVR42uybV6wNQRjHZ5VZOS5Rjjgn+gmJHF24ySFC3IQoD7rLVUN4cB/0LnrvovdOdBKdJyWERPQHRCR4QaKE4Ml/Znb328W6q+w9B/N7uGfLN7tjfjvfzM45WFooZji0fjSxGudtDx43Mpp+dZvkGoUOSwdkJ3EpwnmLFi04L28UzLBHFysY6YHsENOHVzTCJN12Em14la5zsNH00nKjYGrXLFfByBzK8MK3U3zv56ysXgtYaJAdPJEXZhtB0XYg512W4MwpFhZkJ9moSnMjMNoOY+ezFL1YWJCdjXxb3CBKRcrvyuMt52OqsAHD0VQ5Ueh2eB1mDfV2xuGGC6SgFcOr8djB3VSWwhxqVGk+fR3nk2bKY1RkWqTJOOwPWxPrYIA8fDj373ZpNV1l+4bemK8s322dM4SPquIybbuOE9sSCKLqqohGvEnDcOw86wgz4XYeslOD3zS8dvI4R3e6uppPatyHx8bgYCe0Vmm5ndzQOFKlcemD+ciIERycyFtSz6Mwl53NERHFRxuAiiQr9Z2LA8sm8Hb4qF6p3ALn/qPWyiC+I65KtG1cujdvOdtlp2sjUTPeLm4sKT0RwaVXGlRdK4Lz/rkh2RmfZXGHEaHYQcOgn3jsTHqPxxYJL4bnHc/4lLFo9lfiOXyA550y25YJLU9gStGvLj2jFEZ2uLhMYj1fnO8tkicfio2yEXFiVLZz/9gU0VGWRFAvnKiyMo5O2aYuqmHbgbjb4jbwa2U2b3VxbOhUcY2/v+/gsZWNTXZUklkvHk005VrsWiQRSnby0B1kbup7yw6gMLKjLpPEM+AtsqluO1y9Rv/h2Iak0XR/axhsw3eIEjlyp+kQRDh2Ro1Th6qSHXd1cQyOJH/7uFNdpBhArbM4X/7bVSOh4SrKEeVh6d7VuMtO0k5GeWgkCwojO0puAp+eIrjM4nz8abep7michSLn/uhYVorLVvlPJc1tZCfH0pdj2/FWF8dg/k/hP2cLc0oNO+qpjCHbEGiBuJTGbSrKpM5j9Rr3Jjv44BZkxx1GswL1iShPkQTOoAOdqF2zfDzZCEbo/vZG/1yp0HHl2MENlRfnL1VX2aGhNAQ7bI8ceU6yEIEdyiAEWkB1KYz9ipXGskZ4XRXHPHba2gHW2xKF+djxFtmIRz9vSn7TIVPyp9Wt6L4/daLaNfvn0kPja8dbXYoAIdgBewc/fz44m4UG2ZkWuWCnNmodjA00WUBaaadGXrKjdghPmI8dzwlM10YNrIQC62Mn1leZZwDqJFYuQwnKbAj1s+OtbmHYWcjODmbhQXaaruX9B+GT7FBWB9QO8Eh2kBFpuvB1mI8dKqL8l/tQt4O44fUhyF90fyVkGOYBGOTtWQFGe187TnX/QTsGXtwm7byNjV2XlpMdzH7FXNaYvjTX6AR/Mg7NjiSinvRNagEosQSFJBTmY8dbBJ2mFmYJuF69mjSI4/68yVgxh+b95RzanlE3yf2uHdwUfc1bXYqIzQzHzicMOwtZaJAdsH0dF2vU1bBGTXaw/KbeAzFgY8ytMqIPn6oGlDbYwTI1Fk/F+19vJCAFhfnZoSKWBzkByeOiX5CdqZViI+T7p1OLPhE+Za7xfTvLavJ6fXLc1XUiUB/s/SbpXaNWE2GsjGC29WSOYwdMx7IM1lAGCX9y5WSgavbqG/AKmS+6wERYrffEagAK87XjLZKsxEerTugsFCgDrTe4Voimi6rV64oS37MDlqzm6CJUXYpIiHT399vJJISBzIIFQdtJC9oOoe1oOz+DtkNoO9rOz6DtZDYsCNpOMLSd/woWBG0nGNrOfwULgrYTDG3nv4IFQdsJhrbzX8GCoO0E41+xowkEc1P0z1LCjftEyZL+YRoXodopS/ja8YZpO8S3dtifpERxogRzUbKkf5jGhbbz16DtZDLaTiaj7WQy4dhZNf601ey7rnfu4dhJXOt8LNcKO/98kLYTlp2tB+r42oGc6MIC7OzpGO2Vre2EZKey6WtHtTzZOemxky3DlEFtJw129kYHD7KbvWnXzqdp3DnS+ZgTdvZetIe2U+h27t7LwqhTgB1wPnpmkLZToJ3XS+ub5oAxt0Wjp+bNulLfTI2OM9B96wHTTOWMk9szRFTqxiDGqo80bZrJUy9F2I5BVrMvivYq7rZzx22nhysBjo/20HYKsrMVrQ5a9ZRdIme/3PuInW6VTUkDoaeLjILFBV47kHPZOjNWDSj3s+4Em1Gfiw7O1nZ+bKfLZHPA7PisGS+UHcgYO6uy2awhY4fMVmNuz9o62Xwr7DSZOYeJnTeezCa9pXKyu8/YZx6NsxKqzYPZuXs/ekfb+bEdmBjHbGCnTlw0OHrSsH2pDgw8rg9VNpfNBl/ZSVSGPbB9cqsKaHYktqdB30Y7RntoOz+0U31fah4jO6IDiJEFdrpMHpDP7B2y08xtR50+JUeY/bhQCdnkAe1A5EJt50cgsVHbe6dij00bGSFmBeAbO8iMFr9gp5e282M79YPZOQQ337dTX9sJi6LJkan5Xjs02g/IZRYYhMwBx+M+mc3RqzPbH7bTdD+Gmu/aqb6PvCF/yeGp+xXHzlGmwAVuMgs9K/jDdooeMs0bx+Pd7Rk12YGJVmIWPWPpG/kGerRh9xkX7cx2yEyNyWb2Zs4cvK0+vMF+bkaNN6NT2s6P7djvnK3IjsWu/aYCxxJW1OL6yk7rkc4gpC6gdkrIt5iT+m30T9nBQsxFuZITt+wQsx4dMHEGPQPbV2TQdGVHLf9AiL3gA287xtJKThA7ezrqlZzC//bt7L2sk0HsoOs01HYK0Q59g+BvhyRGT+pvEArVDn375mtHf/uWVjuy5Z8WZEd/c50eO+Du+NMF2Tnfa5z+1Yf+xdTfTNE/if6V+++j/4dIJsPSQ/timgCwtNC+iCYILC0UK6LRdv52WBC0nWBoO/8VLAjaTjC0nf+KL+zdsW7aQBjA8eMbIn0vgKWulmDswEAHC6mRLXmx/QRVSySrtBL20AdIH6Gv0KoLW58ACAsSFWlGYOjQDG0ypEulrv3OZ6leAl8Wi5y/n5RgOMPAX+c7WFAcUodH6jSK4pA6PFKnUVT9TJ11gBW9UxBHVKf7rAOlyp3V/GeKOHs5BOLGzvKXj/FOp+tjb72NMM6vgejHMX5Bx5k/eFu+SJSAZRRHfXUCNEY6iIu7KWrvQNfJzWBO5RYeFsaf4SIa34Gmj8AyqmbVOt0IC0nnf528/RfeTzD+AVRHt/iydHHwm+roGN8/bVMa+uDS4XC19ali6CXmuXoWgWUUT11zxwg9fApUx6xHmZ90ijqD63IoS5NLIDd0G05jh6YNBezjCCyj+OqvYy5w3cjUGV8BcWkooIHyvG/0gAMbmmx6ZQLLKJ66rmxrvSsgpk717e4jrf6liRkoU9HfJPZfFQeWUTw1zR1aUMjBOm61Dk2Z0Lv18uEkdsAyiqO2OlmKt2/0FWt/ncCsMPo8BzJ/lPlOkFy6yRVYRrHV8Wk0MAmWB+ps0OwKNimtRRfRKBjfZenOoxMso2rA/yanj/H56Woe4f46oVfsqOc+9vSdWTTS//18CJZRHLXVWURY8PfXgRsfC7pHOEX8CDBB+zbUR1YHFlPEOP8aHKgDiz8p4ux8CMRFveBkqX0b6mOrI6TOo6E4pA6P1GkUxSF1eKROoygOqcMjdRpFPZj8sti9bPllsZaQOo+d4pA6PFKnURSH1OGROo2iOKQOj9QpPX/dbtlPcRxhnScnUqckdepwTHXO2icV7bPWQ0idf+zdPY6DMBCGYUYbjSJFwh0FjSsKH4LCrY9Bg1xyAV+CnjOsBAfKUdbESdakchMLwfcUSCNR+RXmp+FrQh3RCHqKhrq1pmpZ3R+1ZqdYNpYCc+0lq2omofilpkMrUmSsw9eGPan9MPa8kvdwTphYo86XhTqvVVYiqiOlu5iSB0PLjYeR5kqqkYjMwOq+dKJau2Fn28h37cj1FmRbJfyh9+dR53giIh0iBagTyVnHdeusfJ3qGUA/9i8X50CdjVw7W7zoZXx3MQ1rekOdjVzXTrzodVxnRp0EGetUmwA1T/SGOp+yvI3Gi67lYOht4v5C/0p2dHxFDulfcuI6l54Hu9Csb9ZPo+L+d6HXE/XErV7o6IpU+euQbfmhteTp5xTqiB5vo7H8dUg45dvc7A+txnVSk6EwlS3qxPb0jfocihSokwZ1TqVIgTppUOdUihSokwZ1TqVIgTppjlKnI9htHWOQZ7918GexPf9ZDAAAAAAAAAAAAAD+2oNDAgAAAABB/1+bfAEAALAAIub1vVvcopMAAAAASUVORK5CYII=",Ls=""+new URL("../assets/intellisense-2.EFI6DBq0.png",import.meta.url).href,As=""+new URL("../assets/intellisense-3.B4K9i5PN.png",import.meta.url).href,oa={title:"Tamaños que no importan: tree-shakeables",slug:"tamano-no-importa-tree-shakeables",coverImage:"/src/assets/posts-covers/tree-shaking.jpg",coverAuthor:"Edoardo Botez",excerpt:"Arrojo un poco de luz a esto del tree-shaking en módulos ECMAScript.",date:"2024-08-11T15:06:23.177Z",updated:"2024-08-11T15:06:23.903Z",hidden:!1,tags:["DX","Front end"],keywords:["tree-shake","side-effects","biblioteca"],type:"default"},{title:Pd,slug:Cd,coverImage:Ld,coverAuthor:Ad,excerpt:kd,date:Rd,updated:Dd,hidden:Md,tags:Vd,keywords:Od,type:Id}=oa;var ks=b(`<p>He estado desarrollando una biblioteca con unos alumnos, de cara a crear algo
relativamente sucio pero familiar donde llegado a un punto empezar a aplicar
refactoring. Algo así como un pet project.</p> <p>La biblioteca facilita la creación de punteros que permitan señalar elementos en una aplicación web
de manera sencilla.</p> <p>He aprovechado a hacer experimentos para arrojar algo de luz sobre
las herramientas de tree shaking actuales (spoiler: son lo mismo que hace 8
años pero con esteroides).</p> <p>Aunque lo que comenzó como toy/pet project para un caso de uso sencillo, al final se
ha convertido en un lanzamiento algo más serio con <a href="https://alexvgjm.github.io/point-it-out-docs/" rel="nofollow">su documentación</a> y todo.
Durante el desarrollo me he obsesionado con el tamaño del paquete 🌞. No
pretendo ser casposo, esa frase va a seguir sonando turbia por
mucho que la modifique.</p> <p>Esperaba que Point it out no pasara de los 5 KB gzipped, lo que para una
biblioteca que tendrá capacidad para generar distintos tipos de
imágenes SVG procedimentalmente es más que aceptable, pero siempre hay margen
para mejorar.</p> <h2>🍂Tree Shaking</h2> <p>Estaba acordándome de la vieja Lodash. <!> Es una
famosa biblioteca que brinda utilidades para aplicar programación
funcional a muchas partes de JavaScript.</p> <p>Algunas cositas siguen siendo muy útiles, como las funciones de throttling y
debouncing, pero, ¿instalarías tremenda biblioteca con un paquete de
unos 25 KB (min + gzipped) por unas pocas de sus decenas de características
(muchas ya obsoletas)?</p> <p>Para el desarrollador no supone gran problema descargar todo un paquete más,
es algo que haces una vez. Lo que realmente preocupa es que cada usuario tuviera que descargar eso, perjudicando la carga del sitio.</p> <p>Antes no era tan problemático porque estas bibliotecas eran muy comunes y porque
se distribuían principalmente por CDN. Con muy alta probabilidad, algún usuario
que pasara por tu sitio ya habría pasado anteriormente por otro que usara la
misma biblioteca, teniéndola en caché de su navegador.</p> <p>Pero ahora tampoco es un problema, porque tenemos bibliotecas tree-shakeables <em>(en realidad desde hace como 9 años, pero ahora es cuando más compatibilidad
con los módulos ES tenemos)</em>. De hecho Lodash tiene una versión tree-shakeable en ESM.</p> <h3>En qué consiste el tree shaking y los tree-shakeables</h3> <p>Cuando generas el bundle de tu web, aplicación, biblioteca o lo que sea que estés
bundleando, los bundlers modernos tiran de herramientas como rollup para
minificar el resultado y de paso realizar “dead code elimination”.</p> <p>La “dead code elimination” es autoexplicativa. Elimina el código que nunca es
accedido por evaluación de referencias y otras técnicas. Nada nuevo, esta
es una de las responsabilidades típicas de los optimizadores en compiladores.
Lo que es relativamente nuevo (en el ecosistema web), es la cultura de construir
bibliotecas modulares orientadas a esto.</p> <p>En el mundo de JavaScript y aplicado especialmente a dependencias externas,
es decir, a las bibliotecas que utilizas, el dead code elimination se conoce
como “tree shaking”. Es un concepto bastante gráfico si piensas en un
árbol de dependencias que sacudes y del que caen todas las hojas y ramas
muertas. Por tanto se extrae solo aquellas partes necesarias en lugar de
mandarle al usuario todo el tocho.</p> <h2>Diseño, DX y Tree Shaking</h2> <p>No todos los módulos ES son automáticamente tree-shakeables, deben separar muy
bien sus características. Idealmente al priorizar la cohesión (y disminuir el
acoplamiento) se consigue una buena separación. Cobra especial importancia
principios como el SRP.</p> <p>Creí que mi biblioteca no sería apta para tree-shaking. La
idea era hacer una única función punto de entrada muy bien adaptada tirando
de tipado e ideas de DX opinionadas a más no poder. En un IDE con capacidad
para manejar un language-server de TypeScript (casi todos hoy día), al
empezar a escribir el primer parámetro de la función create
(en la versión 0.1.11 al menos), una string, te daría dos opciones:</p> <!> <p>Esto ya me permite un mecanismo que me evite crear dos funciones por
separado como createArrow y createRect. A lo mejor te preguntas cosas como,
“¿Y eso qué tiene de malo?”, “¿no sería lo correcto cumpliendo con el principio
de responsabilidad única (SRP)?“.</p> <p>Internamente no se está rompiendo el SRP, existen las dos funciones (en realidad
peor, existen 2 clases distintas) con implementaciones bien separadas. Una cosa
es la API y otra la implementación. A diferencia de la UX, la DX puede ser algo
más opinionada y relacionada al estilo de un equipo. Me gusta que solo exista
una sola función para crear y que sea lo más guiada posible. Pocas funciones muy
configurables con muy pocas opciones obligatorias.</p> <p>El segundo parámetro de la función son sus opciones. Tanto
arrow como rect son los dos primeros tipos de punteros disponibles en la
biblioteca, y ambos son SVGs, por tanto tienen opciones comunes por ser punteros y
por ser SVGs:</p> <!> <p>Vemos que la única opción obligatoria es target, por eso aparece la primera, las
otras están en orden alfabético. Si en lugar de ‘rect’ hubiéramos escrito ‘arrow’,
las opciones serían:</p> <!> <p>Nótese que han desaparecido las opciones de rect y han aparecido otras exclusivas
de arrow. Solo por haber cambiado una string en el primer parámetro.</p> <p>Esto no es un caso avanzado de TypeScript, en realidad es una definición muy
simple de momento:</p> <!> <h3>Espera… ¿y el tree shaking cómo se lleva con esto?</h3> <p>Y ahí es a donde quería llegar. Creí que no tendría más remedio que pasar por
el aro y volver a la tradición.</p> <p>En algún punto de mi biblioteca hay arcaicos if que evalúan la string del
tipo, una comparación cutre para decidir qué clase usar. ¿Serían las herramientas
de eliminación de código tan avanzadas como para detectar eso?, si no
ejecutan el código, y al fin y al cabo TypeScript “no existe”.</p> <p>Pues resulta que he creado un proyecto de JavaScript vanilla con Vite,
instalado Point it out, creado un rect, hecho una build, y en el .js bundleado
no haber ni rastro de arrows, ni de sus propiedades ni su clase ni na’.
Repito el proceso con solo arrows y veo que ni rastro de rect.</p> <p>Así que funciona asombrosamente bien, parece que esto es más avanzado de lo que
creía. No tengo ni idea de qué estrategia seguirá, pero de momento el poder
continuar con mi diseño sin consecuencias técnicas es una muy buena noticia.</p>`,1);function Rs(o){var e=ks(),a=l(z(e),12),s=l(S(a));ke(s,{children:(u,p)=>{i();var h=v("Era");t(u,h)},$$slots:{default:!0}}),i(),x(a);var n=l(a,24);D(n,{get src(){return Cs},alt:"Sugerencia de VSCode al empezar a escribir la función create(). Se aprecia que sugiere tanto arrow como rect."});var r=l(n,8);D(r,{get src(){return Ls},alt:"Sugerencia de VSCode al escribir las opciones de la función create para el tipo rect",figCaption:"Opciones comunes para todos los punteros y para aquellos de tipo SVG, además de las opciones exclusivas de 'rect'. <small>NOTA: los simbolitos son de accesibilidad para personas con algún tipo de deficiencia de visión de color.</small>"});var c=l(r,4);D(c,{get src(){return As},alt:"Sugerencia de VSCode al escribir las opciones de la función create para el tipo rect",figCaption:"Opciones comunes además de las opciones exclusivas de 'arrow'."});var d=l(c,6);j(d,{language:"TypeScript",children:(u,p)=>{i();var h=v();h.nodeValue=`interface PointerOptions {
    rect: CommonOptions & SVGOptions & RectOptions
    arrow: CommonOptions & SVGOptions & ArrowOptions
}`,t(u,h)},$$slots:{default:!0}}),i(10),t(o,e)}const Ds=Object.freeze(Object.defineProperty({__proto__:null,default:Rs,metadata:oa},Symbol.toStringTag,{value:"Module"})),Ms={type:"change"},_e=1e-6,Se=new Le;class Vs extends ka{constructor(e,a=null){super(e,a),this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1,this._moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this._moveVector=new Z(0,0,0),this._rotationVector=new Z(0,0,0),this._lastQuaternion=new Le,this._lastPosition=new Z,this._status=0,this._onKeyDown=Os.bind(this),this._onKeyUp=Is.bind(this),this._onPointerMove=Hs.bind(this),this._onPointerDown=Us.bind(this),this._onPointerUp=Ns.bind(this),this._onPointerCancel=Bs.bind(this),this._onContextMenu=Gs.bind(this),a!==null&&this.connect(a)}connect(e){super.connect(e),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.addEventListener("pointercancel",this._onPointerCancel),this.domElement.addEventListener("contextmenu",this._onContextMenu)}disconnect(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("contextmenu",this._onContextMenu)}dispose(){this.disconnect()}update(e){if(this.enabled===!1)return;const a=this.object,s=e*this.movementSpeed,n=e*this.rollSpeed;a.translateX(this._moveVector.x*s),a.translateY(this._moveVector.y*s),a.translateZ(this._moveVector.z*s),Se.set(this._rotationVector.x*n,this._rotationVector.y*n,this._rotationVector.z*n,1).normalize(),a.quaternion.multiply(Se),(this._lastPosition.distanceToSquared(a.position)>_e||8*(1-this._lastQuaternion.dot(a.quaternion))>_e)&&(this.dispatchEvent(Ms),this._lastQuaternion.copy(a.quaternion),this._lastPosition.copy(a.position))}_updateMovementVector(){const e=this._moveState.forward||this.autoForward&&!this._moveState.back?1:0;this._moveVector.x=-this._moveState.left+this._moveState.right,this._moveVector.y=-this._moveState.down+this._moveState.up,this._moveVector.z=-e+this._moveState.back}_updateRotationVector(){this._rotationVector.x=-this._moveState.pitchDown+this._moveState.pitchUp,this._rotationVector.y=-this._moveState.yawRight+this._moveState.yawLeft,this._rotationVector.z=-this._moveState.rollRight+this._moveState.rollLeft}_getContainerDimensions(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}}}function Os(o){if(!(o.altKey||this.enabled===!1)){switch(o.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this._moveState.forward=1;break;case"KeyS":this._moveState.back=1;break;case"KeyA":this._moveState.left=1;break;case"KeyD":this._moveState.right=1;break;case"KeyR":this._moveState.up=1;break;case"KeyF":this._moveState.down=1;break;case"ArrowUp":this._moveState.pitchUp=1;break;case"ArrowDown":this._moveState.pitchDown=1;break;case"ArrowLeft":this._moveState.yawLeft=1;break;case"ArrowRight":this._moveState.yawRight=1;break;case"KeyQ":this._moveState.rollLeft=1;break;case"KeyE":this._moveState.rollRight=1;break}this._updateMovementVector(),this._updateRotationVector()}}function Is(o){if(this.enabled!==!1){switch(o.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this._moveState.forward=0;break;case"KeyS":this._moveState.back=0;break;case"KeyA":this._moveState.left=0;break;case"KeyD":this._moveState.right=0;break;case"KeyR":this._moveState.up=0;break;case"KeyF":this._moveState.down=0;break;case"ArrowUp":this._moveState.pitchUp=0;break;case"ArrowDown":this._moveState.pitchDown=0;break;case"ArrowLeft":this._moveState.yawLeft=0;break;case"ArrowRight":this._moveState.yawRight=0;break;case"KeyQ":this._moveState.rollLeft=0;break;case"KeyE":this._moveState.rollRight=0;break}this._updateMovementVector(),this._updateRotationVector()}}function Us(o){if(this.enabled!==!1)if(this.dragToLook)this._status++;else{switch(o.button){case 0:this._moveState.forward=1;break;case 2:this._moveState.back=1;break}this._updateMovementVector()}}function Hs(o){if(this.enabled!==!1&&(!this.dragToLook||this._status>0)){const e=this._getContainerDimensions(),a=e.size[0]/2,s=e.size[1]/2;this._moveState.yawLeft=-(o.pageX-e.offset[0]-a)/a,this._moveState.pitchDown=(o.pageY-e.offset[1]-s)/s,this._updateRotationVector()}}function Ns(o){if(this.enabled!==!1){if(this.dragToLook)this._status--,this._moveState.yawLeft=this._moveState.pitchDown=0;else{switch(o.button){case 0:this._moveState.forward=0;break;case 2:this._moveState.back=0;break}this._updateMovementVector()}this._updateRotationVector()}}function Bs(){this.enabled!==!1&&(this.dragToLook?(this._status=0,this._moveState.yawLeft=this._moveState.pitchDown=0):(this._moveState.forward=0,this._moveState.back=0,this._updateMovementVector()),this._updateRotationVector())}function Gs(o){this.enabled!==!1&&o.preventDefault()}class Fs{constructor(e){g(this,"orthoCamera");g(this,"perspectiveCamera");g(this,"currentCamera");g(this,"orbitControls");g(this,"flyControls");g(this,"mode");g(this,"engine");this.perspectiveCamera=new re,this.orthoCamera=new he,this.currentCamera=this.perspectiveCamera,this.mode="orbit",this.orbitControls=new Ra(this.currentCamera,e.renderSystem.canvas),this.flyControls=new Vs(this.currentCamera,e.renderSystem.canvas),this.flyControls.movementSpeed=4,this.engine=e,this.setControlsMode("orbit"),this.setCamera("perspective"),this.currentCamera.position.set(0,5,20)}setControlsMode(e){this.orbitControls.enabled=e==="orbit",this.flyControls.enabled=e==="fly"}setCamera(e){const a=this.currentCamera,s=e==="perspective";this.currentCamera=s?this.perspectiveCamera:this.orthoCamera,this.currentCamera.position.copy(a.position),this.orbitControls.object=this.currentCamera,this.flyControls.object=this.currentCamera,this.engine.scene.remove(this.orthoCamera),this.engine.scene.remove(this.perspectiveCamera),this.engine.scene.add(this.currentCamera),this.onResize()}update(e){this.orbitControls.update(e),this.flyControls.update(e)}onResize(){if(this.currentCamera instanceof re){const e=this.engine.renderSystem.canvas.getBoundingClientRect();this.currentCamera.aspect=e.width/e.height,this.currentCamera.updateProjectionMatrix()}if(this.currentCamera instanceof he){const e=this.engine.renderSystem.canvas.getBoundingClientRect(),a=Math.floor(e.width/32)*32,s=Math.floor(e.height/32)*32;this.currentCamera.left=-a/256,this.currentCamera.right=a/256,this.currentCamera.top=s/256,this.currentCamera.bottom=-s/256,this.currentCamera.updateProjectionMatrix()}}}class Ys{constructor(e){g(this,"ambientLight");g(this,"directionalLight");g(this,"engine");this.ambientLight=new Te(16777215,.2),this.directionalLight=new Ce(16777215,1),this.directionalLight.position.set(11,9,7.5),this.directionalLight.castShadow=!0,this.directionalLight.shadow.mapSize.set(512,512),this.engine=e,this.engine.scene.add(this.ambientLight),this.engine.scene.add(this.directionalLight)}}class Ws{constructor(e,a="canvas"){g(this,"canvas");g(this,"renderer");g(this,"engine");this.canvas=document.querySelector(a),console.log(this.canvas),this.renderer=new Da({canvas:this.canvas,forceWebGL:!0}),this.renderer.shadowMap.enabled=!0,this.engine=e}startRenderLoop(e){this.renderer.setAnimationLoop(e)}stopRenderLoop(){this.renderer.setAnimationLoop(null)}render(){this.renderer.render(this.engine.scene,this.engine.cameraSystem.currentCamera)}onResize(){const e=this.canvas.getBoundingClientRect();this.renderer.setSize(e.width,e.height)}}function Zs(o,e,a){return Math.max(e,Math.min(a,o))}class Ks{constructor(e="canvas"){g(this,"scene");g(this,"renderSystem");g(this,"cameraSystem");g(this,"lightsSystem");g(this,"timer");g(this,"updatables",[]);g(this,"isStarted",!1);this.timer=new Ma,this.scene=new $e,this.renderSystem=new Ws(this,e),this.cameraSystem=new Fs(this),this.lightsSystem=new Ys(this)}start(){this.isStarted||(this.isStarted=!0,this.renderSystem.startRenderLoop(this.update.bind(this)),window.addEventListener("resize",this.onResize.bind(this)),this.onResize())}update(){this.timer.update();const e=Zs(this.timer.getDelta(),0,.033);this.updatables.forEach(a=>a.update(e)),this.cameraSystem.update(e),this.renderSystem.render()}onResize(){this.renderSystem.onResize(),this.cameraSystem.onResize()}}const sa=Va(.3);function Xs(){const o=new Ia({color:16777215,side:2}),a=Ua(Ha().mul(6)).greaterThan(sa);return o.maskNode=a,o.castShadowNode=Na(0,0,0,a),o.transparent=!0,o}function Qs(o="canvas"){const e=new Ks(o),a=new te,s=new Oa({color:16777215}),n=new F(a,s);n.scale.set(5,1,5),n.receiveShadow=!0,e.scene.add(n);const r=new F(a,Xs());r.position.set(0,2,0),r.castShadow=!0;const c={update(u){r.rotation.y+=u,r.rotation.x+=u*.5,r.rotation.z+=u*.25,sa.value=Math.sin(Date.now()*.002)}};e.updatables.push(c),e.scene.add(r);const d=new Pe(10,10,5592405,10070732);e.scene.add(d),e.cameraSystem.currentCamera.translateZ(-15),e.cameraSystem.orbitControls.enableDamping=!0,e.cameraSystem.orbitControls.enableRotate=!1,e.cameraSystem.orbitControls.enablePan=!1,e.cameraSystem.orbitControls.target.set(r.position.x,r.position.y,r.position.z),e.cameraSystem.orbitControls.autoRotate=!0,e.cameraSystem.orbitControls.autoRotateSpeed=.5,e.start()}const Js=""+new URL("../assets/old-three-chunks-example.CBROaH_s.png",import.meta.url).href,na={title:"DevLog #2: Ventajas de los DSL. Caso gráficos.",slug:"ventajas-dsl-graficos",excerpt:"Trasteando con TSL en Three",date:"2026-08-18T04:00:23.177Z",updated:"2026-08-18T04:00:23.903Z",hidden:!1,tags:["Computación gráfica","Three.js"],keywords:["Ingeniería de software","Three"],type:"default",fullReload:!1},{title:Ud,slug:Hd,excerpt:Nd,date:Bd,updated:Gd,hidden:Fd,tags:Yd,keywords:Wd,type:Zd,fullReload:Kd}=na;var en=b(`<p>Un DSL (lenguaje específico de dominio, por sus siglas en inglés), es básicamente
un lenguaje custom orientado a cumplir objetivos arquitectónicos y de experiencia
de desarrollo. Probablemente podemos listar más razones, pero considero que
esas son las dos principales.</p> <p>En gráficos son especialmente comunes, casi cualquier motor gráfico tiene su
propio DSL, aunque Three.js era una de las pocas excepciones. Durante años la forma
tradicional de construir en Three un shader (un programa que corre en la GPU),
era mediante escritura de código GLSL/WGSL puro.</p> <h2>El pasado de Three.js</h2> <p>Three.js en su forma más tradicional mantenía trozos de código (cadenas de
texto sin más) de GLSL que importábamos y concatenábamos para construir shaders
de forma modular. Pequeñas piezas que denominaron “chunks”.</p> <p>Algunas de estas piezas se limitaban a inyectar uniforms y
otras variables de entrada y salida que Three alimentaba de forma automática,
como la matriz de transformación del mundo o de la cámara, siendo necesarias a
su vez para ser consumidas por otras piezas.</p> <p>Esto era una solución modular que nos evitaba tratar con un
“uber shader”, un solo programa petado de variables
para controlar su comportamiento, con limitaciones técnicas importantes.
Pero suponía un desafío evidente, había que saber cómo estaban formadas esas
piezas, dónde estaban, cómo se llamaban e incluso en qué orden importarlas.</p> <!> <p>Incluso aunque separes el texto en ficheros
como <code>miShader.vert</code> y <code>miShader.frag</code> con coloreado de sintaxis y todo el rollo,
seguirás teniendo mero texto. Mucha gente se hacía sus propios replacers o
extensores, funciones
donde indicabas el chunk a reemplazar y código que querías inyectar y cosas así,
pero en definitiva todo era construir una pedazo de cadena de texto que pasarle
al compilador de WGSL.</p> <p>Además, otro problema de los chunks es que no propiciaba demasiado la abstracción,
muchas de esas piezas conllevan conocimiento muy técnico sobre cómo funcionan los algoritmos principales
utilizados. Por ejemplo, no es lo mismo calcular iluminación en un shader de vértices
(algoritmo de Gouraud) que en un shader de fragmentos (algoritmo de Phong), y
conocer estos detalles es vital para saber cómo y dónde se importan las luces,
es decir, es necesario entender bien la arquitectura.</p> <p>Dado que puede haber muchos chunks con una responsabilidad clara pero pequeñas
variaciones, se decidió partir todo lo que sea posiblemente común en más chunks,
habiendo decenas de ellos, algunos de tan solo 2-3 líneas.</p> <p>Por suerte contábamos con una buena cantidad de materiales base con sus shaders
ya formados. Si queremos que un objeto siempre presente su color real sin ser afectado por la
iluminación podíamos usar algún material compatible con unlit o el MeshBasicMaterial;
mientras que si queríamos un efecto cartoon usamos MeshToonMaterial, etc. Todo eso podemos
lograrlo sin necesidad de tocar ningún shader.</p> <p>Incluso para customs, la buena noticia es que no era necesario construir todo el
shader a piezas desde cero, ya que Three.js nos permitía extender los shaders
de sus materiales base (reemplazando cadenas de texto como se dijo).
Pero lo siento mucho por ti si lo que buscas es un efecto dissolve como el
del siguiente ejemplo:</p> <canvas id="ejemplo-1" class="three-example svelte-ayabh3">Ops!, dispositivo no compatible con este ejemplo</canvas> <h2>Three.js Shading Language (TSL)</h2> <p>TSL es una solución basada en nodos que nos permite construir shaders de forma
sencilla y abstracta. El material del cubo del ejemplo anterior fue escrito de
la siguiente manera:</p> <!> <p>Básicamente las tres primeras líneas sirven para crear una máscara de opacidad
a partir de ruido, osea, el código del shader en sí que se ejecutará en la GPU.</p> <p>El resto es simplemente el procedimiento estándar para crear un material y
asignarle el código del shader. Three propone nodos para controlar opacidad
de forma parcial o total (en este caso maskNode para total).</p> <p>De hecho, la auténtica maravilla de este código es que afecta a la sombra.
Hemos utilizado exactamente la misma máscara en un nodo del pase de sombras,
que controla el color (y opacidad) de cada píxel de la misma.</p> <p>Pero hay más ventajas. Enumerando algunas:</p> <ul><li>Simplicidad sintáctica. Toda operación queda perfectamente definida con
funciones/objetos que creamos sobre TypeScript. El hecho de que todo pase por eso
es lo que lo define como lenguaje.</li> <li>Disminución de código imperativo específico. Se diluye el sentimiento de <em>programa para la GPU dividido en dos partes (vertex y fragment) clásico</em>. Creamos piezas que hacen cosas y modifican la salida de posición de vértices
o de color según nuestras intenciones. También aplicable a otros pases de postprocesado, niebla, o sombras como acabamos de ver.</li> <li>Abstracción de lenguajes. Por si no resulta evidente, TSL es un lenguaje
transpilable a GLSL y WGSL (de WebGL y de WebGPU respectivamente), no tenemos que
aprender ningún lenguaje de shaders base <em>(aunque en realidad ayuda muchísimo conocer alguno, entender cómo
funcionan y saber qué podemos conseguir)</em></li> <li>Todos los nodos son reutilizables. Three los combina todos inteligentemente
y evita una cantidad enorme de duplicidad o replicación en memoria.</li> <li>Tipado. Al estar sobre TypeScript el IDE puede ayudarnos a detectar
errores de sintaxis, a entender las APIs y ver opciones disponibles muy rápidamente,
no tenemos que sumergirnos en otros lenguajes sin soportes.</li> <li>Depuración. Si alguna vez has intentado depurar código GLSL sabrás a qué me refiero.
Sacar información de la GPU a la CPU es un dolor de cabeza. Con TSL no solo ves
errores antes de que ocurran, también brinda métodos para depurar el estado de
una forma más sencilla. También para ver el código final al que compila.</li> <li>Clara separación de lo que es código que se ejecutará en la GPU. Aunque al principio
parezca lo contrario, la realidad es que podemos ver claramente qué es de GPU:
literalmente todas las funciones nodo que surgen del módulo <code>three/tsl</code>.</li></ul> <h2>¿Por qué no más DSL?</h2> <p>Cada día es más raro encontrar DSLs fuera del mundo gráfico. Antiguamente muchas
tecnologías y plataformas incorporaban su propio set de instrucciones que luego
compilaban o transpilaban a uno o más lenguajes. Algunos DSL son ya tratados
como si fueran lenguajes en sí mismos (como el famoso SQL y sus sabores).</p> <p>Hoy día la tendencia es la contraria. Es más ventajoso tener un único lenguaje
que podamos extender mediante una biblioteca muy bien definida, aprovechando
todos los mecanismos básicos del mismo.</p> <p>En el mundo gráfico se justifica porque no nos queda otra que tratar con APIs
gráficas (WebGL, OpenGL, Vulkan, DirectX, Metal…), que además de ser toscas
y carecer de una arquitectura en sí <em>(te da las piezas, tú decides qué montar)</em>,
son muy diferentes entre sí. En cuanto quieras dar al menos soporte a 2, no te
queda otra que usar un lenguaje común (y transpilar/compilar con estrategias
diferentes).</p> <h2>Bonus: ¿cómo se lleva la IA con TSL?</h2> <p>De más general a más particular:</p> <ol><li><p>La IA no se lleva muy bien con las artes gráficas generativas por código,
necesitaría ser retroalimentada con imágenes, y tampoco es buena
interpretando (además de ser caro).</p></li> <li><p>Tampoco con el mundo de la computación gráfica. Es un mundo muy oscuro donde
las técnicas más increíbles no suelen publicarse y explicarse bien, no de forma
relacionable a código de Three.js, y empeora con bibliotecas menos conocidas.</p></li> <li><p>Aún mucho peor con TSL. Pese a que Three es la biblioteca de renderizado
más famosa del mundo, TSL ha tenido
un periodo de madurez, experimentación y cambio extremadamente turbulento. La IA
no para de mezclar, sugerir cosas eliminadas o renombradas. Suma esto a una poderosa
falta de ejemplos. Si
quieres que una IA te ayude, asegúrate de que se empape de la última documentación
y del código de las últimas versiones, si no, te va a sugerir demasiadas cosas
que no son posibles.</p></li></ol> <p>Quitando esto, TSL es un lenguaje más simple. Una vez adaptada, trabajar con una
IA en TSL debería ser órdenes de magnitud más barato que sobre código directo.</p>`,1);function an(o,e){V(e,!1),ce(Qs),W();var a=en(),s=l(z(a),12);D(s,{shadow:!1,get src(){return Js},figCaption:`Un cachito de una string replicando el fragment shader de Phong (tiene otras cientos de líneas). 
    La alternativa
    menos horrible y más segura es no copiar todo, solo usar el original reemplazando
    (con replace) lo que quieras. Los #include hacen referencia a los chunks,
    son reemplazados por otros masacotes de código.`});var n=l(s,18);j(n,{language:"TypeScript",children:(r,c)=>{i();var d=v();d.nodeValue=`
const dissolveProgress = uniform(0.3)
const noise = mx_noise_float(uv().mul(6.0))
const mask = noise.greaterThan(dissolveProgress)

const material = new MeshStandardNodeMaterial({ color: 0xffffff, side: 2 })
material.maskNode = mask
material.castShadowNode = vec4(0, 0, 0, mask)
material.transparent = true`,t(r,d)},$$slots:{default:!0}}),i(26),t(o,a),O()}const on=Object.freeze(Object.defineProperty({__proto__:null,default:an,metadata:na},Symbol.toStringTag,{value:"Module"})),ra={title:"Autonomía y ajenidad (parte 2)",slug:"autonomia-ajenidad-2",coverImage:"/src/assets/posts-covers/starfish.jpg",coverPosition:"normal",coverAuthor:"Pedro Lastra",excerpt:"Segunda parte. Analizo la consultoría y el mentoring.",date:"2024-09-05T13:06:23.177Z",updated:"2024-09-05T13:06:23.903Z",hidden:!0,tags:["Personal","Laboral","Consultoría"],keywords:["trabajo","autónomo"],type:"default"},{title:Xd,slug:Qd,coverImage:Jd,coverPosition:el,coverAuthor:al,excerpt:ol,date:sl,updated:nl,hidden:rl,tags:tl,keywords:il,type:dl}=ra;var sn=b(`<p>En la <a href="/blog/autonomia-ajenidad-1">primera parte</a> de estas entradas que originalmente
(y erróneamente) titulé “mi problema con el trabajo”, hablaba de esa trampa de
la ilusión de la libertad como supuesto autónomo.</p> <p>También hablaba de lo injusto que me parece el concepto de ajenidad aplicado a
los trabajos creativos, eso de que alguien se adueñe de los resultados de tu
creatividad de manera permanente por un salario puntual incluso tras el cese
de la relación laboral.</p> <p>Nombré excepciones, comenté que incluso con ajenidad de por medio, muchas veces no se
produce esa apropiación de la creatividad y que muchas empresas fomentan
el divulgar publicamente sobre sus procesos de desarrollo para manifestar
excelencia técnica. Y en realidad, esas excepciones no son tan infrecuentes.</p> <p>Pero hay una visión un tanto “condescendiente” con la empresa capitalista en
este sector. Y esto es debido al trato supuestamente “privilegiado” que se da
a los profesionales de la ingeniería de software. Quiero hablar de ello.</p> <p>Como siempre, esto es un blog personal y esto es una opinión no menos personal.</p> <h2>Los dos tipos de consultoría</h2> <p>Primero tengo que explicar en qué consiste mi trabajo y qué me ha llevado a
conocer a tanta gente y entornos en los últimos 3 años.</p> <p>A ver, no conozco cuántas definiciones de consultoría existen, pero sí es
notable dos tipos de actividades diferenciadas.</p> <h3>La consultoría IT más común</h3> <p>Es la que define a las empresas “consultoras” IT, entendidas como empresas de
desarrollo de soluciones IT a medida. Aquellas que se encargan de todos los
procesos enfocados a desarrollar una solución tecnológica adaptada a las
necesidades de una empresa (incluyendo al estado).</p> <p>Suena muy bonito, pero aunque hay consultoras excelentes con personal muy
cualificado, hay muchas otras que
gozan de una imagen justificadamente mala, las grandes consultoras
internacionales son muchas veces entendidas también como cárnicas. Una cárnica
en este sector es denominada así por su tendencia a contratar programadores a
decenas, centenas o incluso millares (“por kilos”), como si de carne se tratara.</p> <p>Por lo general hacen muchos convenios con academias y les importa poco el nivel
y el desarrollo que puedan obtener sus profesionales, pues en realidad el que
sean o no productivos a veces ni importa.</p> <p>Entre los objetivos de esta contratación masiva se encuentra el de manifestar 
poder de contratación. En procesos de 
adjudicación de proyectos con oferta pública (licitaciones), cuando surgen del
estado o empresas asociadas a él, tiene mucho valor la capacidad para 
generar empleo, así sea de manera artificial y aunque esto luego implique
despidos masivos tras periodos de pruebas. <small>Por supuesto tiene más valor si
una consultora decide cobrar 4 veces menos que su competencia por alguna razón
que nadie comprende (como el caso de Indra aceptando llevar el recuento electrónico de 
votos durante las elecciones generales de 2015, con un para nada sospechoso
resultado extremadamente alejado de los sondeos previos. Menos mal que
vivimos en una socialdemocracia donde es impensable la posibilidad de manipular
resultados 🙂).</small></p> <p>Hay otras razones, como hacer un filtrado masivo como quien filtra kilos
de tierra de río para sacar cantidades insignificantes de oro, una estrategia
de búsqueda de talento habitual en grandes tecnológicas, pero eso da para otras
entradas.</p> <p>Esto es una realidad bastante obvia cuando te acercas a puestos de dirección o
si como autónomo has estado pendiente al BOE y licitaciones, pero es como si a
nadie le gustara hablar de ello 🤷‍♂️.</p> <h3>La consultoría profesional</h3> <p>No sé cómo llamarla. Algunos la llaman consultoría clásica sin más, y otros
defienden que debería llamarse “formación especializada” y ya.</p> <p>Es a lo que me dedico. No se aleja de la definición de la primera, con la
diferencia de que por lo general te integras al entorno del cliente y tu
actividad tiene lugar en él o al menos compromete a su plantilla.</p> <p>En esta actividad se ofrecen los mismos servicios de consultoría pero es más
habitual que se te valore por tu experiencia y habilidad, especialmente en
términos de formación, comunicación y dinámica de equipo. Como además te
integras a un grupo profesional, acabas ejerciendo de mentor y comunicándote
directamente con todos transmitiendo como mejor puedas tus conocimientos y
experiencias previas ante problemas similares.</p> <p>Es un trabajo excelente porque conoces a mucha gente, te obligas a cargarte
prejuicios, a volverte más tolerante y a buscar el mejor lado de toda persona.
A nivel técnico perfilas tus habilidades de análisis al extremo, dado que cada
nuevo entorno implica auditar y analizar soluciones custom que llevan
desarrollando años otras personas, a fin de identificar los puntos críticos y
qué está produciendo los problemas por los que te requieren.</p> <p>Por otra parte, no pocas veces eres tú quien más aprende. Conocer tantos nuevos
entornos y soluciones desarrolladas por otros hace que empieces a ver patrones
continuos y a identificar aquello que está fuera de la norma para bien, a
toparte con soluciones brillantes y excepcionales, normalmente provenientes de
alguna persona muy ingeniosa que ya no forma parte del equipo, alguien que
se fue en búsqueda de desafíos mayores, dejando su legado.</p> <p>Es la forma más directa de asumir desafíos continuos y de crecer hasta cierto
punto. Eso sí, con una responsabilidad que puede ser muy estresante. No es
especialmente cómodo llegar a un equipo como un supuesto experto y saber que
todos esperan que muestres soluciones a problemas que llevan teniendo durante
años. Más sabiendo que muchas veces serás uno más en equipos de
profesionales que no tienen un nivel inferior a ti y que ciertamente no te
necesitan, sino que tienen a directivos incompetentes que confían antes en el
gurú extranjero de turno que en sus propios empleados.</p> <p>Es por esto que mi actividad suele centrarse en directivos sin formación técnica.
Pero no es fácil
hacer comprender la naturaleza de este trabajo a personas que no han picado una
sola línea de código y lleva a cargo de programadores más de una década,
creyendo que conocen muy bien cómo funciona el desarrollo de software y sin
pensar ni por un segundo que el problema de un proyecto pueden ser ellos mismos.</p> <h2>Tratamiento para directivos</h2> <!> <p>Un directivo (o jefe de proyecto) de software sin nociones técnicas no comprende que el error
es una parte natural de este arte. No comprende que es necesario dedicar el tiempo
que haga falta a asegurar una correcta testabilidad y realizar refactoring, y que
aún así seguirá siendo necesario la monitorización y seguirá habiendo errores.</p> <p>Un directivo que no comprende los procesos de desarrollo solo ve que el producto
no está cambiando de cara al usuario, no tiene capacidad para saber si los
empleados están haciendo realmente algo o les están mintiendo en su cara mientras
dicen que están mejorando el código.</p> <p>Aún peor, muchos asumen que si su equipo lleva una semana haciendo refactoring
creen que es porque hicieron cosas mal y que ahora están corrigiendo errores,
cuando en un primer momento tendrían que haberlo hecho “bien”.</p> <p>Muchos ven a equipos de ingeniería como meros obreros que tienen que decidir
algo, planificarlo y hacerlo “bien”, no comprenden la naturaleza del error, la
deuda técnica, la flexibilidad y dinamismo que debe
haber en los procesos de desarrollo.</p> <p>Un directivo así solo mete presiones y no tiene capacidad para determinar el
estado ni el rumbo del proyecto, no le salva ni el delegar porque nunca
podrá comprender el feedback que pueda recibir de la persona en la que delega.</p> <p>Lo mejor que puede pasar con un directivo así es que delegue completamente y con
fé ciega, pero entonces se acaba dando cuenta de que su papel es
completamente irrelevante, y no solo él se da cuenta de ello. Cuando nadie
necesita un capitán, el capitán solo es un estorbo, un imbécil con autoridad
que además suele cobrar más.</p> <p>Pero cuando no delegan es mucho peor, ya no solo son dispensables, entorpecen a
todo el equipo, fomentan malas prácticas por exigir resultados visibles cuanto
antes y generan una fuerte sensación de impotencia, ansiedad y estancamiento
profesional en todos los desarrolladores. Por no decir que no suelen asumir ni una
sola de las responsabilidades que deben asumir como directivos de un proyecto
de software, porque la mayoría requiere algunos conocimientos técnicos base.</p> <p>Por suerte, hasta ahora todos los directivos con los que he llegado a toparme
en mi actividad han podido comprender la importancia y los problemas que
supone su incompetencia técnica, y todos han podido ver los errores y tremendas
estupideces que estaban diciendo y cometiendo tras una correcta formación, pero
desde luego no es algo especialmente fácil.</p> <p>La comunicación con directivos puede ser complicada, se necesita
otro lenguaje, se necesita otro tono y se necesitan enfoques muy prácticos,
directos, precisos y tajantes. Es normal, recordemos que no dejan de ser seres
humanos que en su caso han estado en posiciones de poder, a veces demasiado tiempo.</p> <p>Es muy frecuente que en su trayectoria profesional coman discusiones muy absurdas con
personas que se quejan sin dar soluciones. Es frecuente que sean ellos los que
deban decir “hasta aquí” y zanjar asuntos aún ante el descontento de alguien, y
esto acaba por generar conductas a veces algo poco empáticas.</p> <p>El trabajo de un
consultor cuando debe tratar con directivos se acerca a partes iguales al de
consejero real y al de dom/dominatrix: tener la sutileza para provocar cambios
sin cuestionar su autoridad delante del equipo, y tener la firmeza para darle
algunos latigazos en privado cuando sea necesario, a lo que suelen estar
sorprendentemente dispuestos, especialmente cuando son ellos los que han pagado
por tu servicio para mejorar la situación laboral.</p>`,1);function nn(o){var e=sn(),a=l(z(e),48);k(a,{children:(s,n)=>{i();var r=v(`NOTA: no he notado diferencias de género en este ámbito, más allá de
una mayor cantidad hombres. Asume que cuando digo directivo digo también 
directiva/e.`);t(s,r)},$$slots:{default:!0}}),i(22),t(o,e)}const rn=Object.freeze(Object.defineProperty({__proto__:null,default:nn,metadata:ra},Symbol.toStringTag,{value:"Module"})),ta={title:"Relaciones interpersonales en la consultoría",slug:"relaciones-interpersonales-consultoria",coverImage:"/src/assets/posts-covers/mono-espejo.jpg",coverPosition:"normal",coverAuthor:"Pedro Lastra",excerpt:"Un análisis sobre la consultoría y la formación a directivos de software.",date:"2024-09-05T13:06:23.177Z",updated:"2024-09-05T13:06:23.903Z",hidden:!0,tags:["Personal","Laboral","Consultoría"],keywords:["trabajo","consultor","consultoría"],type:"default"},{title:ll,slug:cl,coverImage:ul,coverPosition:pl,coverAuthor:ml,excerpt:gl,date:bl,updated:hl,hidden:vl,tags:fl,keywords:ql,type:yl}=ta;var tn=b(`<p>En la <a href="/blog/autonomia-ajenidad-1">primera parte</a> de un conjunto de
entradas sobre la relación laboral que originalmente (y erróneamente) titulé
“mi problema con el trabajo”, abarcaba temas como esa trampa de la ilusión de la libertad
como supuesto autónomo y de lo injusto que me parece el concepto de ajenidad
aplicado a los trabajos creativos.</p> <p>En esa entrada comentaba que hablaría sobre la consultoría en la siguiente parte,
que aún tengo en borrador. Pero he preferido dedicarle un espacio propio en esta
entrada independiente.</p> <p>Como siempre, esto es un blog personal y esto es una opinión no menos personal.</p> <h2>Los dos tipos de consultoría</h2> <p>Primero tengo que explicar en qué consiste mi trabajo y qué me ha llevado a
conocer a tanta gente y entornos en los últimos 3-4 años.</p> <p>A ver, no conozco cuántas definiciones de consultoría existen, pero sí es
notable dos tipos de actividades diferenciadas.</p> <h3>La consultoría IT</h3> <p>Es la que define a las empresas “consultoras” IT, entendidas como empresas de
desarrollo de soluciones tecnológicas a medida (habitualmente software y
sistemas de información). Aquellas que se encargan de todos los
procesos enfocados a desarrollar una solución tecnológica adaptada a las
necesidades de una empresa (incluyendo al estado).</p> <p>Suena muy bonito, pero aunque hay consultoras excelentes con personal muy
cualificado, hay muchas otras que
gozan de una imagen justificadamente mala, como muchas grandes consultoras
internacionales que suelen ser entendidas también como cárnicas. Una cárnica
en este sector es denominada así por su tendencia a contratar programadores a
decenas, centenas o incluso millares (“por kilos”), como si de carne se tratara.</p> <p>Suelen hacer muchos convenios con academias y les importa poco el nivel
y el desarrollo que puedan obtener sus profesionales, pues en realidad el que
sean o no productivos a veces ni importa.</p> <p>Entre los objetivos de esta contratación masiva se encuentra el de manifestar 
poder de contratación. En procesos de 
adjudicación de proyectos con oferta pública (licitaciones), cuando surgen del
estado o empresas asociadas a él, tiene mucho valor la capacidad para 
generar empleo, así sea de manera artificial y aunque esto luego implique
despidos masivos tras periodos de pruebas. <small>Por supuesto tiene más valor si
una consultora decide cobrar 4 veces menos que su competencia por alguna razón
que nadie comprende (como el caso de Indra aceptando llevar el recuento electrónico de 
votos durante las elecciones generales de 2015, con un para nada sospechoso
resultado alejado de los sondeos previos. Menos mal que
vivimos en una socialdemocracia donde es impensable la posibilidad de manipular
resultados 🙂).</small></p> <p>Hay otras razones, como hacer un filtrado masivo como quien filtra kilos
de tierra de río para sacar cantidades insignificantes de oro, una estrategia
de búsqueda de talento habitual en grandes tecnológicas, pero eso da para otras
entradas.</p> <p>Esto es una realidad bastante obvia cuando te acercas a puestos de dirección o
si como autónomo has estado pendiente al BOE y licitaciones, pero es como si a
nadie le gustara hablar de ello 🤷‍♂️.</p> <h3>Consultoría para profesionales en IT</h3> <p>No sé cómo llamarla. Algunos la llaman consultoría sin más, y otros
defienden que debería llamarse “formación especializada” y ya.</p> <p>Es a lo que me dedico. No se aleja de la definición de la primera, con la
diferencia de que por lo general el cliente ya dispone de un equipo de IT
consolidado, o incluso puede ser a su vez otra consultora, y tú te integras a
su entorno para dar una formación o un servicio especializado enfocado a cumplir
ciertos objetivos o a formar en determinadas tecnologías o metodologías a su
plantilla.</p> <p>En esta actividad se ofrecen los mismos servicios de consultoría pero es más
habitual que se te valore por tu experiencia y habilidad, especialmente en
términos de formación, comunicación y dinámica de equipo. Como además te
integras a un grupo profesional, acabas ejerciendo de mentor y comunicándote
directamente con todos transmitiendo como mejor puedas tus conocimientos y
experiencias previas ante problemas similares.</p> <p>Es un trabajo excelente porque conoces a mucha gente, te obligas a cargarte
prejuicios, a volverte más tolerante y a buscar el mejor lado de toda persona.
A nivel técnico perfilas tus habilidades de análisis al extremo, dado que cada
nuevo entorno implica auditar y analizar soluciones custom que llevan
desarrollando años otras personas, a fin de identificar los puntos críticos y
qué está produciendo los problemas por los que te requieren.</p> <p>Por otra parte, no pocas veces eres tú quien más aprende. Conocer tantos nuevos
entornos y soluciones desarrolladas por otros hace que empieces a ver patrones
continuos y a identificar aquello que está fuera de la norma para bien, a
toparte con soluciones brillantes y excepcionales, normalmente provenientes de
alguna persona muy ingeniosa que ya no forma parte del equipo, alguien que
se fue en búsqueda de desafíos mayores y que ha dejado su legado.</p> <p>Es la forma más directa de asumir desafíos continuos y de crecer hasta cierto
punto. Eso sí, con una responsabilidad que puede ser muy estresante. No es
especialmente cómodo llegar a un equipo como un supuesto experto y saber que
todos esperan que muestres soluciones a problemas que llevan teniendo durante
años.</p> <p>Algunos en un primer momento piensan que vienes a juzgar su trabajo y tienen
miedo que se les exponga. A esto sumar que muchas veces serás uno más en equipos de
profesionales que no tienen un nivel inferior a ti y que ciertamente no te
necesitan, sino que tienen a directivos incompetentes que confían antes en el
gurú extranjero de turno que en sus propios empleados.</p> <p>Es por esto que mi actividad suele centrarse en directivos sin formación técnica.
Pero no es fácil
hacer comprender la naturaleza de este trabajo a personas que no han picado una
sola línea de código y lleva a cargo de programadores más de una década,
creyendo que conocen muy bien cómo funciona el desarrollo de software y sin
pensar ni por un segundo que el problema de un proyecto pueden ser ellos mismos.</p> <h2>Tratamiento para directivos</h2> <!> <p>Un directivo (o jefe de proyecto) de software sin nociones técnicas no comprende que el error
es una parte natural de este arte. No comprende que es necesario dedicar el tiempo
que haga falta a asegurar una correcta testabilidad y realizar refactoring (reescribir
o rediseñar algunas partes del código para mejorar su mantenibilidad, testabilidad, etc), y que
aún así seguirá siendo necesario la monitorización y seguirá habiendo errores.</p> <p>Un directivo que no comprende los procesos de desarrollo solo ve que el producto
no está cambiando de cara al usuario, no tiene capacidad para saber si los
empleados están haciendo realmente algo o les están mintiendo en su cara mientras
dicen que están mejorando el código.</p> <p>Aún peor, muchos asumen que si su equipo lleva una semana haciendo refactoring
creen que es porque hicieron cosas mal y que ahora están corrigiendo errores,
cuando en un primer momento tendrían que haberlo hecho “bien”.</p> <p>Muchos ven a equipos técnicos como meros obreros que tienen que decidir
algo, planificarlo y hacerlo “bien”, no comprenden la naturaleza del error, la
deuda técnica, la flexibilidad y dinamismo que debe
haber en los procesos de desarrollo.</p> <p>Un directivo así solo mete presiones y no tiene capacidad para determinar el
estado ni el rumbo del proyecto, no le salva ni el delegar porque nunca
podrá comprender el feedback que pueda recibir de la persona en la que delega.</p> <p>Lo mejor que puede pasar con un directivo así es que delegue completamente y con
fé ciega, pero entonces se acaba dando cuenta de que su papel es
completamente irrelevante, y no solo él se da cuenta de ello. Cuando nadie
necesita un capitán, el capitán solo es un estorbo, un imbécil con autoridad
que además suele cobrar más.</p> <p>Pero cuando no delegan es mucho peor, ya no solo son dispensables, entorpecen a
todo el equipo, fomentan malas prácticas por exigir resultados visibles cuanto
antes y generan una fuerte sensación de impotencia, ansiedad y estancamiento
profesional en todos los desarrolladores. Por no decir que no suelen asumir ni una
sola de las responsabilidades que deben asumir como directivos de un proyecto
de software, porque la mayoría requiere algunos conocimientos técnicos base.</p> <p>Por suerte, hasta ahora todos los directivos con los que he llegado a toparme
en mi actividad han podido comprender la importancia y los problemas que
supone su incompetencia técnica, y todos han podido ver los errores y tremendas
estupideces que estaban diciendo y cometiendo tras una correcta formación, pero
desde luego no es algo especialmente fácil.</p> <p>La comunicación con directivos puede ser complicada, se necesita
otro lenguaje, se necesita otro tono y se necesitan enfoques muy prácticos,
directos, precisos y tajantes. Es normal, recordemos que no dejan de ser seres
humanos que en su caso han estado en posiciones de poder, a veces demasiado tiempo.</p> <p>Es muy frecuente que en su trayectoria profesional coman discusiones muy absurdas con
personas que se quejan sin dar soluciones. Es frecuente que sean ellos los que
deban decir “hasta aquí” y zanjar asuntos aún ante el descontento de alguien, y
esto acaba por generar conductas a veces algo poco empáticas.</p> <p>Una postura típica es considerar que los conocimientos técnicos no son parte
de su competencia, y ahí es importante cortarles inmediatamente y no dar espacio:
si quieren dirigir un proyecto de software, deben aprender unas bases técnicas
y acercarse a la realidad de sus empleados a cargo.</p> <p>El trabajo de un
consultor cuando debe tratar con directivos se acerca a partes iguales al de
consejero real y al de dom/dominatrix: tener la sutileza para provocar cambios
sin cuestionar su autoridad delante del equipo, y tener la firmeza para darle
algunos latigazos en privado cuando sea necesario, a lo que suelen estar
sorprendentemente dispuestos, especialmente cuando son ellos los que han pagado
por tu servicio para mejorar la situación laboral.</p> <h2>El miedo a mostrar código y al juicio ajeno</h2> <p>Establezco una regla muy directa en mi trabajo: no expongo a nadie, o no por la
calidad de su trabajo, desde luego. Por lo general ningún directivo me ha pedido
a priori y directamente que busque a culpables o al más incompetente del equipo
para funarlo, pero indirectamente es algo que ven en auditorías. Si expongo
una mala decisión de diseño, alguien buscará a quién tomó dicha decisión.</p> <p>Es por eso que antes de cualquier auditoría o antes de presentar los resultados
hago mucho hincapié en que en este mundo no tiene ningún sentido la cultura
punitiva y que hay cientos de factores por los que un profesional comete
errores, tenga la experiencia que tenga.</p> <h3>La vergüenza</h3> <p>Lo que realmente afecta a muchos profesionales es que otros observen sus
espaguetis, su deuda técnica, la ausencia de principios de diseño y otras
cuestiones de la que ellos mismos son conscientes.</p> <p>Muchas personas se autocastigan porque saben muy bien que están haciendo
locuras, que no están siguiendo buenas prácticas por “pereza” (aunque suponga
trabajar más 🤦‍♂️) y que no se pueden justificar. Es uno de los motivos por los
que muchos quieren cambiar de trabajo, se empiezan a sentir incómodos con su
propio trabajo o se sienten estancados porque no hay nadie que les anime a
mejorar.</p> <p>El problema es que son conscientes de que lo pueden hacer mejor, pero eso
conlleva un esfuerzo investigador e incluso horas en casa, un esfuerzo que
consideran que nadie valorará. Tristemente no se suelen equivocar.</p> <p>Supón que estás en esa situación, un consultor externo llega a auditar
código y decide que quiere sentarse 8 horas junto a ti a ver qué y cómo has
hecho algo de lo que tú mismo te avergüenzas, es natural pensar que viene a
juzgarte y no a ayudar.</p> <p>Hacer comprender a una persona que no vienes a juzgarle y que su situación es
muy común, mientras que lo animas y le das razones y estrategias para escribir
código de mayor calidad, es un reto que solo suele funcionar cuando viene
acompañado de una reestructuración completa de la dinámica de trabajo y el
entorno laboral.</p> <h2>Soluciones que producen un mindblow en directivos</h2> <p>No puedo exponer aquí todos mis truquillos, no porque tema compartirlos,
casi todos son obviedades bien conocidas desde los 80, sino porque la entrada
sería más larga de lo que ya es. Me centraré en aquellas que suelen dejar
ojipláticos a las personas con empleados a cargo.</p> <p>Cada equipo es un mundo, no se puede generalizar, lo que es especialmente
efectivo en un entorno puede ser contraproducente en otro, es necesario una
evaluación individual de los empleados, sus motivaciones y sus necesidades.</p> <p>Muchas de las técnicas requieren además una metodología adicional o comprender
un enfoque, un mentor y supervisor que entienda si algo realmente funciona
y cómo ajustarlo.</p> <h3>El pair programming para la construcción de vínculos</h3> <p>Es un clásico, y la versión más clásica es la más efectiva en un primer momento:
reducir los dispositivos encendidos a la mitad una buena parte de la jornada, porque
solo se trabaja en equipos de 2, donde solo uno está al teclado y el otro
“copilotando” sentado junto a él, alternándose los roles cada cierto tiempo.</p> <p>Esto produce un shock brutal en directivos porque creen que poner a dos personas
a trabajar en el mismo problema es perder la mitad de los recursos humanos de
golpe.</p> <p>Es una técnica que implica ejercicio de comunicación, aprender a manejar
discusiones, aprender ceder cooperando. Ante un desacuerdo, si se elige el
camino de uno, el otro debe apoyar en ese camino aunque crea que no es el adecuado.</p> <p>Considera las siguientes posturas finales ante un desacuerdo:</p> <p>Postura 1: <code>Eso no funcionará, allá tú, haz lo que quieras, ya verás...</code></p> <p>Postura 2: <code>En mi cabeza creo que eso no va a funcionar, pero confío, vamos a probar y ver qué sale...</code></p> <p>Al adoptar la postura 2, más abierta y menos inmovilista, incluso aunque tengas
certeza de que tu
compañero está equivocado, en el peor caso se perderá algo de tiempo. A cambio,
fomentarás un entorno cooperativo y,
cuando la situación se invierta y quieras que confíen en ti, será más fácil.</p> <p>Por otra parte, muchas veces existe la posibilidad de que realmente estés
equivocado y no hayas visto factores que tu compañero sí. En ese caso no
quedarás como un bocazas.</p> <p>Esta técnica, lejos de “partir por la mitad los recursos humanos”, suele
multiplicar la productividad: trabajamos mejor en pareja. No solo se toman
mejores decisiones, suele haber menos “empanes”
y menos distracciones, también se evita realizar tantas malas prácticas.</p> <p>Solo hay que evitar el error común de imponer esta práctica en toda la jornada,
hay que dar también espacio personal en solitario a quien lo necesite.</p> <h3>La rotación de parejas</h3> <p>Todos deberían conocer el trabajo de todos, y por supuesto, todos deberían
conocerse. No tiene por qué ser algo frecuente ni forzado, pero sí debería
haber al menos una temporada de rotación. Los cambios de contexto también pueden
venir muy bien a muchos, permiten que algunos encuentren nuevas áreas de interés,
el desarrollo de habilidades transversales y mejorar la transmisión de
conocimiento y habilidad entre miembros del equipo.</p> <p>En el caso de conflictos laborales, se sabe que las conexiones entre todos los
empleados ayudan a diluir las tensiones entre dos de ellos. Teniendo amigos en
común es más difícil ser enemigos. Evidentemente esto no es la panacea a estos
problemas.</p> <p>Es otra medida no muy bien vista por los directivos porque suele implicar
más movilización y cambios de contexto que a priori parecen interrumpir y
disminuir la productividad, pero cuando se forma una sinergia fuerte, como
cuando dos empleados que apenas se conocen descubren que son especialmente buenos
trabajando en equipo, pueden no solo compensar cualquier bajada de productividad
puntual, pueden dar una motivación y ejemplo al resto que es difícil de describir.</p> <h3>La reducción del tiempo de trabajo</h3> <p>Cuando sugiero reducir a la mitad el tiempo de trabajo, me han llegado a decir
“eso nos permitiría contratar unos cuantos más”, porque no me han entendido.
No digo reducir la jornada laboral, los empleados siguen cobrando
lo mismo, digo reducir el tiempo que trabajan activamente en las necesidades
de la empresa.</p> <p>Me miran como un loco, como diciendo “claro, trabajan 6 horas y les pagamos 8,
eh… gracias por venir, cuando queramos regalar dinero te volveremos a llamar”.
Pero lo cierto es que ya lo hacen.</p> <p>Muchos profesionales solo pueden ser
realmente productivos durante 4 o 6 horas. Extender más horas en este sector solo
consigue que se llegue antes a un burnout. Me he encontrado con no pocos casos
donde los trabajadores realmente solo están produciendo 1 hora o 2 horas de lo
quemados que están.</p> <p>Sabiendo esto, es muy buena oportunidad para mejorar las condiciones laborales
y las habilidades de tus empleados. Las otras horas pueden dedicarla al
desarrollo propio en habilidades que les interesen, pet projects o simplemente
a descansar, como si quieren irse a casa o ponerse a jugar.</p> <p>Se sentirán mejor, mejorarán en su trabajo y eso se notará en la productividad.
Y si no se nota, en el peor caso la productividad será la misma y todos estarán
más contentos. Es incontable la de empresas que he encontrado con gimnasio
y sala de exposiciones para nada, porque no dan tiempo a sus empleados a darle
un uso realista.</p> <p>Una actividad tan simple como exponer sobre un tema cualquiera de interés
personal al resto del equipo, relacionado o no con el trabajo, por turnos
(cada día una persona), puede ayudar a amenizar mucho el trabajo y a mejorar
las relaciones interpersonales, y a conocer proyectos y necesidades personales
que a veces pueden ser muy fáciles de satisfacer para una empresa.</p> <p>El desarrollo en equipo de un pet project no relacionado necesariamente con
la actividad laboral, donde además se
intercambian los roles habituales, puede ser especialmente efectivo para mejorar
otras habilidades cuando en el trabajo no existe posibilidad.</p> <p>Además, ocurre una cosa muy curiosa, y es que aunque exista esta posibilidad,
muchos simplemente siguen trabajando en esas horas libres.</p> <p>En definitiva, muchas de las soluciones pasan directamente por mejorar las
condiciones laborales y fomentar la comunicación. Esto no es
exclusivo de esta profesión, pero aquí se nota especialmente.</p> <p>Insisto en que debe recogerse feedback y deben ser medidas que se tomen
idealmente en consenso con el resto de empleados, sin asumir que van a
funcionar.</p>`,1);function dn(o){var e=tn(),a=l(z(e),46);k(a,{children:(s,n)=>{i();var r=v(`NOTA: no he notado diferencias de género en este ámbito, más allá de
una mayor cantidad hombres. Asume que cuando digo directivo digo también 
directiva/e.`);t(s,r)},$$slots:{default:!0}}),i(102),t(o,e)}const ln=Object.freeze(Object.defineProperty({__proto__:null,default:dn,metadata:ta},Symbol.toStringTag,{value:"Module"})),ia={title:"Acerca de escribir y la IA",slug:"sobre-escribir-e-ia",excerpt:"Mis razones para escribir y por qué no uso IA para ello",date:"2026-01-07T01:26:23.177Z",updated:"2026-01-07T01:26:23.903Z",hidden:!0,tags:["Personal"],keywords:["blog"],type:"default"},{title:jl,slug:wl,excerpt:xl,date:_l,updated:Sl,hidden:zl,tags:El,keywords:$l,type:Tl}=ia;var cn=b(`<p>Si has leído alguna entrada de este blog quizás te hayas
fijado en que no son precisamente el mejor ejemplo de redacción
del mundo.</p> <p>Mucho de lo que escribo peca de falta de estructura, de párrafos
sobrecargados,
saltos de tema, disonancias, erratas, repeticiones innecesarias,
lamentos edgy y muchísimo cringe.</p> <p>Si todo se siente como si lo hubiera escrito a lo rápido o como si hablara con
alguien informalmente, es porque es precisamente lo que hago.</p> <h2>Sobre la inteligencia artificial</h2> <p>Si soy consciente de esos fallos, ¿por qué no los corrijo?</p> <p>Me decía un compañero que ahora parece que media internet está
escrita por la misma persona, con el mismo tono. Un ávido escritor
de textos ágiles, fluidos, dinámicos, que no repite una puñetera palabra
si no le queda más remedio, sin faltas de ortografía y párrafos con
una cohesión impecable…</p> <p>No quiero sonar pollaviejista, también uso IA, pero no para comunicarme.
La integro en mis flujos de trabajo cuando programo y diseño, por acelerar
gran parte de lo que ya sé que quiero hacer, pero nunca la dejo pilotar.</p> <p>Cuando comencé este blog me propuse escribir en ventanas de tiempo
cortas, sin darle demasiadas vueltas, casi como un tratamiento de
choque para un perfeccionismo paralizante. Escribo una entrada en 15
o 20 minutos, y como quede quedó.</p> <p>Si tengo algo de tiempo a revisar y corregir más adelante no me opongo,
pero no le doy máxima prioridad. Le doy más prioridad si recibo feedback
directo, para no hacer sentir a quien me lo haya brindado que
no he considerado su aportación.</p> <p>Eso lleva a la pregunta natural: <em>¿por qué no dejas que una IA te corrija?”</em></p> <p>No me opongo a la IA en general, la tengo muy integrada en mis flujos
de trabajo y es una herramienta que marca una diferencia de productividad.</p> <p>Pero sí me opongo cuando viene a sustituir una actividad artística, creativa
y humana que haces porque tienes ganas de ello. Es como delegar la
parte divertida a una máquina.</p> <p>Para mí escribir en un blog es una forma de pensar en voz alta. No se trata
simplemente de hacerlo bien. No le doy a la meta tanta importancia.
Y si este proceso lo delego en una máquina, apaga y vámonos.
¿Qué será lo próximo?, ¿me compro
una “fuck machine” que no se cansa y dura más de diez minutos? 🤡</p> <p>Por otro lado, no me importa equivocarme y dejar que se reflejen fallos,
son parte de mi forma de comunicarme. Prefiero eso a sonar asquerosamente
sintético.</p>`,1);function un(o){var e=cn();i(26),t(o,e)}const pn=Object.freeze(Object.defineProperty({__proto__:null,default:un,metadata:ia},Symbol.toStringTag,{value:"Module"})),da={title:"Primatología: directivos ",slug:"primatologia-directivos",coverImage:"/src/assets/posts-covers/mono-espejo.jpg",coverPosition:"normal",coverAuthor:"Andre Mouton",excerpt:"Un análisis sobre la consultoría y la formación a directivos y jefes de proyecto en proyectos de desarrollo de software.",date:"2024-09-06T07:06:23.177Z",updated:"2024-09-06T07:06:23.903Z",hidden:!0,tags:["Personal","Laboral","Consultoría"],keywords:["trabajo","consultor","consultoría"],type:"default"},{title:Pl,slug:Cl,coverImage:Ll,coverPosition:Al,coverAuthor:kl,excerpt:Rl,date:Dl,updated:Ml,hidden:Vl,tags:Ol,keywords:Il,type:Ul}=da;var mn=b(`<p>Siempre es una buena señal y honra a una persona el que entienda que hay
un problema con sus competencias, o que
considere que es bueno acercarse a la realidad técnica de los empleados a cargo,
pero también es una mala señal que
exista ese miedo a que se sepa públicamente que está solicitando ayuda o
formación.</p> <p>Más de la mitad de directivos que he formado en dirección de proyectos de
software como consultor ha sido de manera particular lejos de su entorno laboral.
El tener una preocupación por la percepción de sus competencias técnicas y
una pérdida de autoridad es en sí un problema. Da mucho para hablar en otro
momento.</p> <p>Pero los que realmente me preocupan y de los que vengo a hablar hoy son
aquellos que ni siquiera son conscientes de que sus carencias de conocimiento
técnico están destruyendo a su equipo.</p> <!> <h2>💩 Dirigir proyectos de software sin conocimiento técnico</h2> <p>Hablando con otros compañeros de profesión, parece que no soy el único que ha
concluído alguna auditoría interna exponiendo que el problema principal
que estanca al desarrollo de un proyecto reside en una mala dirección y no en
las decisiones tomadas por desarrolladores.</p> <p>Esto no suele gustar, dado que
quien insiste en la contratación de servicios de auditoría y consultoría suele
ser algún directivo/jefe de proyecto, algunos con maliciosa esperanza de que
señale a algún empleado.
Verse como la fuente del problema suele hacerles pensar que se han pegado un
tiro en el pie al contratarme.</p> <p>Muchos jefes de proyecto de software sin nociones técnicas (existen, y muchos) no
comprenden que el error es una parte natural de este arte. No comprenden que es
necesario dedicar el tiempo que haga falta a asegurar una correcta testabilidad
y realizar refactoring (reescribir o rediseñar algunas partes del código para
mejorar su mantenibilidad, testabilidad, etc), y que aún así seguirá siendo
necesario la monitorización y seguirá habiendo errores.</p> <p>Un directivo que no comprende los procesos de desarrollo solo ve que el producto
no está cambiando de cara al cliente, interesado o usuario. No tiene capacidad para
saber si se está haciendo realmente algo o le están mintiendo en su cara mientras
dicen que están mejorando el código.</p> <p>Aún peor, muchos asumen que si su equipo lleva una semana haciendo refactoring
creen que es porque hicieron cosas mal y que ahora están corrigiendo errores,
cuando en un primer momento tendrían que haberlo hecho “bien”.</p> <p>Muchos ven a equipos técnicos como meros obreros que tienen que decidir
algo, planificarlo y hacerlo “bien”, no comprenden la naturaleza del error, la
deuda técnica, la flexibilidad y dinamismo que debe
haber en los procesos de desarrollo.</p> <p>Un directivo así solo mete presiones y no tiene capacidad para determinar el
estado ni el rumbo del proyecto, no le salva ni el delegar porque nunca
podrá comprender el feedback que pueda recibir de la persona en la que delega.</p> <p>Lo mejor que puede pasar con un directivo así es que delegue completamente y con
fé ciega en alguien que sí tenga competencias. Será con suerte porque tampoco
sabrá identificar a esa persona. Entonces se acaba dando cuenta de que su papel es
completamente irrelevante, y no solo él se da cuenta de ello. Cuando nadie
necesita un capitán, el capitán solo es un estorbo, un imbécil con autoridad
que además suele cobrar más.</p> <p>Pero cuando no delegan es mucho peor. No solo son dispensables, también entorpecen a
todo el equipo, fomentan malas prácticas por exigir resultados visibles cuanto
antes y generan una fuerte sensación de impotencia, ansiedad y estancamiento
profesional en todos los desarrolladores que se ven obligados a dar “resultados”,
siendo esto sinónimo de “cambios que el jefe pueda notar”. Por no decir que no suelen asumir ni una
sola de las responsabilidades que deben asumir como directivos en un proyecto
de software, porque muchas requieren algunos conocimientos técnicos base.</p> <h2>Tratando con directivos</h2> <p>Por suerte, hasta ahora todos los directivos con los que he llegado a toparme
en mi actividad han podido comprender los problemas derivados de su
incompetencia técnica, y todos han podido ver los errores y tremendas
estupideces que estaban diciendo y cometiendo tras una correcta formación, pero
desde luego no es una tarea sencilla.</p> <p>La comunicación con directivos puede ser complicada, se necesita
otro lenguaje, se necesita otro tono y se necesitan enfoques muy prácticos,
directos, precisos y tajantes. Es normal, recordemos que no dejan de ser seres
humanos que han estado en posiciones de “poder”, algunos tomándose muy en
serio ese “poder” y a veces demasiado tiempo.</p> <p>Es muy frecuente que en su trayectoria profesional hayan comido discusiones muy absurdas con
personas que se quejan sin dar soluciones. Es frecuente que sean ellos los que
hayan tenido que decir “hasta aquí” y zanjar asuntos aún ante el descontento de alguien
demasiadas veces, y esto y otras tantas cosas acaban por generar conductas a veces
demasiado autoritarias que les hacen cerrar oídos y los vuelven algo más
cabezotas, también algo menos empáticos.</p> <p>Una postura típica es considerar que los conocimientos técnicos no son parte
de su competencias esenciales, y ahí es importante cortarles inmediatamente y no dar espacio:
si quieren dirigir un proyecto de software, deben aprender unas bases técnicas
y acercarse a la realidad de sus empleados a cargo. No es negociable.</p> <p>El trabajo de un
consultor cuando debe tratar con directivos en su mismo entorno de trabajo es
más curioso y se acerca a partes iguales al de
consejero real y al de dom/dominatrix: tener la sutileza para provocar cambios
sin cuestionar su autoridad delante del equipo, y tener la firmeza para darle
algunos latigazos en privado cuando sea necesario, a lo que suelen estar
sorprendentemente dispuestos, especialmente cuando son ellos los que han pagado
por tu servicio para mejorar la situación laboral.</p> <p>Por lo demás, no se aleja de trabajar junto a cualquier otro miembro de la
plantilla, solo cambia el tipo de conocimientos que necesito que aprenda y
la profundidad a la que deben aprenderlo. No
necesito que un directivo sepa programar, pero sí lo justo para que pueda
entender de primera mano cómo funcionan algunos ciclos de desarrollo y la
importancia de saber especificar requisitos. Para eso necesito que como
mínimo no sienta que está leyendo chino al ver código.</p> <p>Por otra parte, es un buen trabajo de empatía, porque muchos saben que sus
empleados realizan un ejercicio intelectual que puede ser estresante, pero no
se imaginan a qué nivel hasta que realmente lo sufren, aunque solo vean la
complejidad de un ejercicio de introducción de una FP.</p> <p>También ayuda a acercarse a la realidad de la explosión tecnológica, saber
cómo de rápido evoluciona todo, a los fenómenos derivados de esto y los
problemas que pueden acarrear en la motivación de sus empleados a cargo
(como la famosa fatiga tecnológica). Todo esto se traduce a una mejor toma de
decisiones cruciales.</p>`,1);function gn(o){var e=mn(),a=l(z(e),6);k(a,{children:(s,n)=>{i();var r=v("Por si para alguien es importante que lo recalque, cuando digo directivo digo también directiva/e.");t(s,r)},$$slots:{default:!0}}),i(38),t(o,e)}const bn=Object.freeze(Object.defineProperty({__proto__:null,default:gn,metadata:da},Symbol.toStringTag,{value:"Module"})),la={title:"Traspaso proyectos (gratis)",slug:"traspaso-proyectos",excerpt:"Tengo proyectos que no puedo continuar, mantener, guardar o lo que sea. Si quieres alguno pídelo.",date:"2025-02-04T01:26:23.177Z",updated:"2025-02-04T01:26:23.903Z",hidden:!0,tags:["Personal"],keywords:["estático","blog"],type:"default"},{title:Hl,slug:Nl,excerpt:Bl,date:Gl,updated:Fl,hidden:Yl,tags:Wl,keywords:Zl,type:Kl}=la;var hn=b(`<p>Proyectos y sitios que no podré continuar, mantener, guardar o lo que sea. Algunos públicos, otros sin repositorio y otros en repos privados en GitHub o GitLab. Muchos son tonterías y otros los conservaba más por razones históricas.</p> <p>Si te interesa algo de esto para lo que sea, avísame:</p> <ul><li>El código fuente de este sitio web (el repo con SvelteKit), incluyendo de este blog y toda la configuración de CI/CD en Github Actions. Si lo vas usar, evidentemente cambia el nombre y contenido.</li> <li>El código fuente y todo el repo de lo que haya en <a href="https://alexvgjm.github.io" rel="nofollow">alexvgjm.github.io</a></li> <li>El sitio <a href="https://d2runewords.com" rel="nofollow">d2runewords.com</a> (si quieres también el dominio eso ya corre de tu cuenta).</li> <li>Un intento de motor de videojuegos 2D con PixiJS como motor de renderizado.</li> <li>Un recién iniciado sistema de partículas custom en WebGL para Three.js</li> <li><a href="https://alexvgjm.github.io/point-it-out-docs" rel="nofollow">Point it out</a>. NOTA: recibió recientemente un refactoring muy duro en local y se aleja más de lo actualmente publicado. Tiene más características y una arquitectura distinta a la publicada. Ya se acerca más a una alpha.</li> <li>Prototipos de aplicaciones orientadas a terapia visual / fototerapia (vanilla js y ts).</li> <li>Distintos prototipos de aplicaciones interactivas en Vue, incluyendo una especie de juego roguelike y un idle.</li> <li>Viejos plugins de IRC de por lo menos 2007 ya obsoletos e innecesarios, que tenían de propósito evadir el escudo dorado chino de manera simple.</li> <li>Viejo código en C y en otro extraño lenguaje híbrido muy similar a Objective-C. Principalmente homebrew para PSP y otro material de pruebas. También incluye
algo de ensamblador para la especie de MIPS R4000 de la PSP.</li></ul> <p>Los publicados en GitHub tienen algún tipo de licencia libre
en cualquier caso, así que tienes libertad para hacer un fork de lo que quieras
de todas formas aunque no te lo traspase oficialmente.</p>`,1);function vn(o){var e=hn();i(6),t(o,e)}const fn=Object.freeze(Object.defineProperty({__proto__:null,default:vn,metadata:la},Symbol.toStringTag,{value:"Module"})),qn={sources:{avif:""+new URL("../assets/any-code.ClKF-0wF.avif",import.meta.url).href+" 640w, "+new URL("../assets/any-code.KLdJ1ygV.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/any-code.C8s4CXVk.webp",import.meta.url).href+" 640w, "+new URL("../assets/any-code.DcSfFKdy.webp",import.meta.url).href+" 1280w",png:""+new URL("../assets/any-code.BA_T7izO.png",import.meta.url).href+" 640w, "+new URL("../assets/any-code.DX1Lcz0d.png",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/any-code.DX1Lcz0d.png",import.meta.url).href,w:1280,h:720}},yn=Object.freeze(Object.defineProperty({__proto__:null,default:qn},Symbol.toStringTag,{value:"Module"})),jn={sources:{avif:""+new URL("../assets/blizzard.BbRU_fN9.avif",import.meta.url).href+" 640w, "+new URL("../assets/blizzard.B--PL0XO.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/blizzard.CybShHHZ.webp",import.meta.url).href+" 640w, "+new URL("../assets/blizzard.C8i5Cr0L.webp",import.meta.url).href+" 1280w",jpeg:""+new URL("../assets/blizzard.CehEdUNF.jpeg",import.meta.url).href+" 640w, "+new URL("../assets/blizzard.DanEHBUr.jpeg",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/blizzard.DanEHBUr.jpeg",import.meta.url).href,w:1280,h:720}},wn=Object.freeze(Object.defineProperty({__proto__:null,default:jn},Symbol.toStringTag,{value:"Module"})),xn={sources:{avif:""+new URL("../assets/jon-tyson.BYe6w2ID.avif",import.meta.url).href+" 640w, "+new URL("../assets/jon-tyson.CDQuug6G.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/jon-tyson.Cp146D7f.webp",import.meta.url).href+" 640w, "+new URL("../assets/jon-tyson.CjWtVi3C.webp",import.meta.url).href+" 1280w",jpeg:""+new URL("../assets/jon-tyson.sgBkeOW9.jpeg",import.meta.url).href+" 640w, "+new URL("../assets/jon-tyson.MygLIirx.jpeg",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/jon-tyson.MygLIirx.jpeg",import.meta.url).href,w:1280,h:720}},_n=Object.freeze(Object.defineProperty({__proto__:null,default:xn},Symbol.toStringTag,{value:"Module"})),Sn={sources:{avif:""+new URL("../assets/machinery.B2JAbiy0.avif",import.meta.url).href+" 640w, "+new URL("../assets/machinery.B0k06fYR.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/machinery.XKRnVKXm.webp",import.meta.url).href+" 640w, "+new URL("../assets/machinery.CVc1jLYE.webp",import.meta.url).href+" 1280w",jpeg:""+new URL("../assets/machinery.CmYyaLYN.jpeg",import.meta.url).href+" 640w, "+new URL("../assets/machinery.lcec4MJm.jpeg",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/machinery.lcec4MJm.jpeg",import.meta.url).href,w:1280,h:720}},zn=Object.freeze(Object.defineProperty({__proto__:null,default:Sn},Symbol.toStringTag,{value:"Module"})),En={sources:{avif:""+new URL("../assets/maquina-escribir.Cin8T6Ns.avif",import.meta.url).href+" 640w, "+new URL("../assets/maquina-escribir.DlsgBpUI.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/maquina-escribir.BnNhWCjk.webp",import.meta.url).href+" 640w, "+new URL("../assets/maquina-escribir.CI-vJ5nO.webp",import.meta.url).href+" 1280w",jpeg:""+new URL("../assets/maquina-escribir.CR4I1sxo.jpeg",import.meta.url).href+" 640w, "+new URL("../assets/maquina-escribir.D_dAKKRX.jpeg",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/maquina-escribir.D_dAKKRX.jpeg",import.meta.url).href,w:1280,h:720}},$n=Object.freeze(Object.defineProperty({__proto__:null,default:En},Symbol.toStringTag,{value:"Module"})),Tn={sources:{avif:""+new URL("../assets/mono-espejo.aXQBIyAH.avif",import.meta.url).href+" 640w, "+new URL("../assets/mono-espejo.BU_sVk6o.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/mono-espejo.Ddhs2ZMX.webp",import.meta.url).href+" 640w, "+new URL("../assets/mono-espejo.DHYr2_Wv.webp",import.meta.url).href+" 1280w",jpeg:""+new URL("../assets/mono-espejo.DRdjxkSr.jpeg",import.meta.url).href+" 640w, "+new URL("../assets/mono-espejo.DFCEYnu1.jpeg",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/mono-espejo.DFCEYnu1.jpeg",import.meta.url).href,w:1280,h:720}},Pn=Object.freeze(Object.defineProperty({__proto__:null,default:Tn},Symbol.toStringTag,{value:"Module"})),Cn={sources:{avif:""+new URL("../assets/paisaje-miedo.BukGgRh-.avif",import.meta.url).href+" 640w, "+new URL("../assets/paisaje-miedo.DsGgOpGx.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/paisaje-miedo.D_7fOhrA.webp",import.meta.url).href+" 640w, "+new URL("../assets/paisaje-miedo.BPgBLAZ-.webp",import.meta.url).href+" 1280w",jpeg:""+new URL("../assets/paisaje-miedo.TpHsYGSs.jpeg",import.meta.url).href+" 640w, "+new URL("../assets/paisaje-miedo.DzkZpwmi.jpeg",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/paisaje-miedo.DzkZpwmi.jpeg",import.meta.url).href,w:1280,h:720}},Ln=Object.freeze(Object.defineProperty({__proto__:null,default:Cn},Symbol.toStringTag,{value:"Module"})),An={sources:{avif:""+new URL("../assets/pio-round-fail-test.DX0Cn6lJ.avif",import.meta.url).href+" 640w, "+new URL("../assets/pio-round-fail-test.CmaCatt2.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/pio-round-fail-test.Dw2-sPvT.webp",import.meta.url).href+" 640w, "+new URL("../assets/pio-round-fail-test.DFm94EAo.webp",import.meta.url).href+" 1280w",png:""+new URL("../assets/pio-round-fail-test.BPuwgNjn.png",import.meta.url).href+" 640w, "+new URL("../assets/pio-round-fail-test.-sGo8TTQ.png",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/pio-round-fail-test.-sGo8TTQ.png",import.meta.url).href,w:1280,h:720}},kn=Object.freeze(Object.defineProperty({__proto__:null,default:An},Symbol.toStringTag,{value:"Module"})),Rn={sources:{avif:""+new URL("../assets/starfish.QmbbtQry.avif",import.meta.url).href+" 640w, "+new URL("../assets/starfish.C1hjTUgH.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/starfish.Dfj_-D5_.webp",import.meta.url).href+" 640w, "+new URL("../assets/starfish.d5pPDI95.webp",import.meta.url).href+" 1280w",jpeg:""+new URL("../assets/starfish.Di2y8SqM.jpeg",import.meta.url).href+" 640w, "+new URL("../assets/starfish.CayEXQ_w.jpeg",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/starfish.CayEXQ_w.jpeg",import.meta.url).href,w:1280,h:720}},Dn=Object.freeze(Object.defineProperty({__proto__:null,default:Rn},Symbol.toStringTag,{value:"Module"})),Mn={sources:{avif:""+new URL("../assets/tree-shaking.Dm5PN7LS.avif",import.meta.url).href+" 640w, "+new URL("../assets/tree-shaking.DRHr0SW_.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/tree-shaking.rN-B0IuQ.webp",import.meta.url).href+" 640w, "+new URL("../assets/tree-shaking.C6f3tNrs.webp",import.meta.url).href+" 1280w",jpeg:""+new URL("../assets/tree-shaking.DwjQOLAz.jpeg",import.meta.url).href+" 640w, "+new URL("../assets/tree-shaking.BVwql0Kq.jpeg",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/tree-shaking.BVwql0Kq.jpeg",import.meta.url).href,w:1280,h:720}},Vn=Object.freeze(Object.defineProperty({__proto__:null,default:Mn},Symbol.toStringTag,{value:"Module"})),On={sources:{avif:""+new URL("../assets/valla.DhkFZpBY.avif",import.meta.url).href+" 640w, "+new URL("../assets/valla.Dpfd17Fi.avif",import.meta.url).href+" 1280w",webp:""+new URL("../assets/valla.BjJKHA0T.webp",import.meta.url).href+" 640w, "+new URL("../assets/valla.CSlq1MCB.webp",import.meta.url).href+" 1280w",jpeg:""+new URL("../assets/valla.CuKW0Rqf.jpeg",import.meta.url).href+" 640w, "+new URL("../assets/valla.CyjHcVT7.jpeg",import.meta.url).href+" 1280w"},img:{src:""+new URL("../assets/valla.CyjHcVT7.jpeg",import.meta.url).href,w:1280,h:720}},In=Object.freeze(Object.defineProperty({__proto__:null,default:On},Symbol.toStringTag,{value:"Module"}));var Y=null;function Un(o){Y={p:Y,c:null,d:null}}function Hn(){var o=Y,e=o.d;e&&G.push(...e),Y=o.p}const Nn=`<!--${ya}-->`,Bn=`<!--${ja}-->`;class Gn{constructor(e=new Set,a="",s="",n=()=>""){g(this,"css",new Set);g(this,"out","");g(this,"uid",()=>"");g(this,"title","");this.css=e,this.out=a,this.title=s,this.uid=n}}class Fn{constructor(e=""){g(this,"css",new Set);g(this,"out","");g(this,"uid",()=>"");g(this,"select_value");g(this,"head",new Gn);this.uid=Yn(e),this.head.uid=this.uid}}function Yn(o){let e=1;return()=>`${o}s${e++}`}let G=[];function Wn(o,e={}){const a=new Fn(e.idPrefix?e.idPrefix+"-":""),s=G;G=[],a.out+=Nn,e.context&&(Un(),Y.c=e.context),o(a,e.props??{},{},{}),e.context&&Hn(),a.out+=Bn;for(const r of G)r();G=s;let n=a.head.out+a.head.title;for(const{hash:r,code:c}of a.css)n+=`<style id="${r}">${c}</style>`;return{head:n,html:a.out,body:a.out}}const Xl=(o=!1)=>{var r;const s={...Object.assign({"/src/posts/arneses-testing-componentes.md":so,"/src/posts/autonomia-ajenidad-1.md":io,"/src/posts/caso-suite-cosby.md":po,"/src/posts/cuantas-muertes-evitables.md":bo,"/src/posts/deja-esperar-otros.md":wo,"/src/posts/devlog-1-changesets.md":Co,"/src/posts/discursos-segregacionistas.md":ko,"/src/posts/el-hacking-a-google.md":Oo,"/src/posts/ensenanza-aprendizaje-profundo.md":No,"/src/posts/especificacion-visual-caso-point-it-out.md":ls,"/src/posts/flipadismos-mecanismos-oop.md":ps,"/src/posts/miedo-de-decir-miedo-de-ser.md":bs,"/src/posts/oop-template-method-pattern.md":fs,"/src/posts/peligro-trivializar-typescript.md":ws,"/src/posts/por-que-un-blog-en-2024.md":Es,"/src/posts/sobre-consecuencias-y-su-recurrencia.md":Ps,"/src/posts/tamano-no-importa-tree-shakeables.md":Ds,"/src/posts/ventajas-dsl-graficos.md":on}),...Object.assign({"/src/posts/borradores/autonomia-ajenidad-2.md":rn,"/src/posts/borradores/relaciones-interpersonales-consultoria.md":ln,"/src/posts/borradores/sobre-escribir-e-ia.md":pn,"/src/posts/ocultados/primatologia-directivos.md":bn,"/src/posts/ocultados/traspaso-proyectos.md":fn})},n=[];for(const c in s){const d=s[c];if(d){let u=d.metadata.coverImage;u&&(u=u.substring(u.lastIndexOf("/")+1)),n.push({...d.metadata,coverImage:u,path:c,html:o&&d.default.render?(r=Wn(d.default))==null?void 0:r.body:void 0})}}return n},Ql=o=>o.filter(e=>!e.hidden).sort((e,a)=>new Date(e.date).getTime()>new Date(a.date).getTime()?-1:new Date(e.date).getTime()<new Date(a.date).getTime()?1:0).map(e=>{const a=Zn(o,e);return{...e,relatedPosts:a}}),Jl=o=>{const e={};return o.forEach(a=>{a.tags.forEach(s=>{const n=Xn(s);e[n]||(e[n]={name:s,posts:[]}),e[n].posts.push(a)})}),e},Zn=(o,e,a=3)=>o.filter(n=>!n.hidden&&n.slug!==e.slug).sort((n,r)=>{var u,p;const c=(u=n.tags)==null?void 0:u.filter(h=>{var m;return(m=e.tags)==null?void 0:m.includes(h)}),d=(p=r.tags)==null?void 0:p.filter(h=>{var m;return(m=e.tags)==null?void 0:m.includes(h)});return(c==null?void 0:c.length)>(d==null?void 0:d.length)?-1:(c==null?void 0:c.length)<(d==null?void 0:d.length)?1:0}).slice(0,a).map(n=>({...n})),Kn={á:"a",à:"a",ä:"a",é:"e",è:"e",ë:"e",í:"i",ì:"i",ï:"i",ó:"o",ò:"o",ö:"o",ú:"u",ù:"u",ü:"u",ñ:"n",ç:"c"," ":"-","/":"-"},Xn=o=>o.toLowerCase().replace(/[áéíóúàèìòùäëïöüñç\/ ]/g,e=>Kn[e]??e),ec=Object.assign({"../../assets/posts-covers/any-code.png":yn,"../../assets/posts-covers/blizzard.jpg":wn,"../../assets/posts-covers/jon-tyson.jpg":_n,"../../assets/posts-covers/machinery.jpg":zn,"../../assets/posts-covers/maquina-escribir.jpg":$n,"../../assets/posts-covers/mono-espejo.jpg":Pn,"../../assets/posts-covers/paisaje-miedo.jpg":Ln,"../../assets/posts-covers/pio-round-fail-test.png":kn,"../../assets/posts-covers/starfish.jpg":Dn,"../../assets/posts-covers/tree-shaking.jpg":Vn,"../../assets/posts-covers/valla.jpg":In});export{ue as A,as as I,so as _,Jl as a,io as b,ec as c,po as d,bo as e,wo as f,Ql as g,Co as h,Xl as i,ko as j,Oo as k,No as l,ls as m,ps as n,bs as o,li as p,fs as q,ws as r,Xn as s,Es as t,Ps as u,Ds as v,on as w};
