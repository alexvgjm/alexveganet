import"../chunks/CWj6FrbW.js";import{p as j,u as S,f as q,s,a as P,g as r,b as o,c as _,n as t}from"../chunks/BduZyM7k.js";import{I as b}from"../chunks/CNfEwzh9.js";import{C as i}from"../chunks/DlsCqhfG.js";import{u as w}from"../chunks/CgVzVCqa.js";var E=q(`<p>Si ya tienes algo de experiencia con esto, puede que sepas que
    "create" es en realidad un alias, ¿sabrías explicar qué es lo que hace realmente?</p>`),L=q(`<h1>⚙️ Instalación y configuración de GSAP</h1> <p>Podemos instalar GSAP mediante CDN (❌ no recomendado) o como una dependencia en
    un proyecto web (🟢 recomendado).</p> <h2>⚠️ Sobre los CDN (Content Developer Network) y los scripts minificados</h2> <p>Depender de un script cargado de una fuente externa tiene múltiples problemas,
    pero incluso si descargamos el script y somos nosotros quienes suministramos
    la biblioteca (desde nuestro servidor, sin dependencia de un CDN), tampoco arregla
    el mayor de los problemas: con el código final insertado no podemos aplicar
    mecanismos de <strong>eliminación de código muerto o de
    dependencias no usadas</strong> (<strong>dead code elimination</strong> y <strong>tree-shaking</strong>)</p> <p>No obstante puede ser útil para pequeñas demostraciones o su uso en editores
    de snippets online como codepen. Si ese fuera nuestro caso, podemos
    insertarlo <strong>al final del body</strong> <em>(en clase se discutirán alternativas como
    el uso de defer y la escucha de eventos de carga)</em></p> <!> <h2>🟢 Instalación como dependencia en un proyecto web</h2> <p>Cuando trabajamos con frontend, es habitual trabajar con herramientas de
    desarrollo que nos brinden superpoderes:</p> <ul class="no-marks"><li>📦 <strong>Gestión de paquetes:</strong> (npm, pnpm, yarn, ...)</li> <li>🖥 <strong>Live server:</strong> ver el sitio en tiempo real y actualización automática cuando modificamos algo.</li> <li>🔥 <strong>HMR (Hot Module Reloading):</strong> relacionado a lo anterior,
        que solo cambie en la página lo que alteramos y no actualice toda al completo.</li> <li>🎯 <strong>Dead Code Elimination:</strong> que en la versión final de nuestro sitio solo
        exista código de lo que se usa.</li> <li>🌳🍂 <strong>Tree-shaking:</strong> relacionado a lo anterior, elimina las dependencias
        que no se usan.</li> <li>⚙️ <strong>Transpilación:</strong> nos permite trabajar con lo ÚLTIMO DE LO ÚLTIMO del
        lenguaje y que se transforme a versiones viejas más compatibles.</li> <li>Y más...</li></ul> <h3>Prerequisito: instalar Node 20 o superior.</h3> <p>Puede descargarse desde la página oficial. Para este curso debía estar ya
    instalado. Si no lo tienes, es el momento.</p> <p>Si estás en <strong>Windows</strong>, es posible que también tengas que habilitar la
    política de ejecución de scripts. Abre <strong>PowerShell</strong> como
    Administrador y ejecuta el siguiente comando:</p> <!> <p>Esto habilita la ejecución de scripts firmados remotamente. Esto es mejor que
    desactivar del todo la política de ejecución scripts como se sugiere tan a menudo, pero
    a veces puede que no te quede más remedio.</p> <h3>Paso 1: crear un proyecto con Vite</h3> <p><a href="https://vite.dev/">Vite</a> es la actual herramienta de desarrollo
    más popular en el ecosistema web. Aporta todo lo mencionado anteriormente.</p> <p>Existe un paquete denominado create-vite, capaz de construir esqueletos para
    proyectos web de una manera muy sencilla. Una manera rápida de instalar y
    ejecutar un paquete de este estilo, si tenemos Node instalado es mediante el comando:</p> <!> <!> <p>Esto nos guiará en un proceso mediante preguntas acerca de qué frameworks
    queremos utilizar en el proyecto. La opción Vanilla significa "sin frameworks"
    y es la que usaremos. Se deja a libre elección si se desea usar JavaScript
    o TypeScript.</p> <p>Una vez creado el esqueleto del proyecto, no funcionará hasta instalar
    sus dependencias con el comando:</p> <!> <p>Esto descargará todos los paquetes necesarios en una carpeta node_modules.
Si borrases esta carpeta, se reconstruirá siempre al hacer de nuevo
"npm install". Por tanto puedes omitir esta carpeta cuando le pases este
proyecto a alguien (es muy pesada).
    Tras ello podemos ejecutar vite, que nos abre un servidor local, con:</p> <!> <p><em>¿Que qué es esto de npx?</em> Es una forma de ejecutar un programa-paquete instalado.
    Hay un programa instalado llamado vite, ¿dónde?, en tu carpeta node_modules.

    Lo normal es en realidad ejecutar con:</p> <!> <p><em>¿Que qué es esto de npm run dev?</em> Abre el fichero package.json, encontrarás en una sección scripts
    uno llamado "dev", eso es el comando que se llama con <code>npm run dev</code>, y es
    como hacer <code>npx vite</code> en este caso.</p> <h3>Paso 2: instalar gsap</h3> <!> <p>Llegados a este punto, si es tu primera vez con un proyecto web moderno
    puede que estés petando 🤯 con la cantidad de nuevos conceptos,
    ficheros y tecnologías implicadas. Te aseguro que esto <a href="https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f">hace unos años era
    mucho peor</a>. Durante el curso nos detendremos a resolver dudas y explicar
    bien cada una.</p> <p>Ahora desde cualquier script, como en el main.js o main.ts que nos crea
vite, puede importarse gsap.</p> <!> <p>Podemos hacer esto gracias a que el main.js (o main.ts) es un
script definido como de tipo módulo, y usa la sintaxis de import y
exports de ECMAScript Modules (ESM).</p> <!>`,1);function D(y,$){j($,!0),S(()=>{w().hljs.highlightAll()});var l=L(),d=s(P(l),10);i(d,{language:"HTML",children:(a,n)=>{t();var e=r();e.nodeValue=`...
<body>
    ...
    <!-- Cargando GSAP desde un CDN. -->
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"><\/script>

    <!-- Ahora hay una variable global llamada gsap -->
    <script src="/script-que-depende-de-gsap.js"><\/script>
</body>
</html>`,o(a,e)},$$slots:{default:!0}});var p=s(d,14);i(p,{showLanguage:!1,language:"JavaScript",showCopyButton:!0,children:(a,n)=>{t();var e=r("Set-ExecutionPolicy RemoteSigned");o(a,e)},$$slots:{default:!0}});var c=s(p,10);i(c,{language:"JavaScript",showLanguage:!1,children:(a,n)=>{t();var e=r("npm create vite@latest");o(a,e)},$$slots:{default:!0}});var u=s(c,2);b(u,{infoType:"info",mark:"question",title:"",children:(a,n)=>{var e=E();o(a,e)},$$slots:{default:!0}});var m=s(u,6);i(m,{language:"JavaScript",showLanguage:!1,noMargin:!0,children:(a,n)=>{t();var e=r("npm install");o(a,e)},$$slots:{default:!0}});var g=s(m,4);i(g,{language:"JavaScript",showLanguage:!1,noMargin:!0,children:(a,n)=>{t();var e=r("npx vite");o(a,e)},$$slots:{default:!0}});var h=s(g,4);i(h,{language:"JavaScript",showLanguage:!1,noMargin:!0,children:(a,n)=>{t();var e=r("npm run dev");o(a,e)},$$slots:{default:!0}});var v=s(h,6);i(v,{language:"JavaScript",showLanguage:!1,noMargin:!0,children:(a,n)=>{t();var e=r("npm install gsap");o(a,e)},$$slots:{default:!0}});var f=s(v,6);i(f,{language:"JavaScript",children:(a,n)=>{t();var e=r();e.nodeValue=`import gsap from 'gsap'

// gsap.to(...)
`,o(a,e)},$$slots:{default:!0}});var x=s(f,4);b(x,{infoType:"warning",title:"",children:(a,n)=>{t();var e=r(`Es tu responsabilidad ENTENDER y aprender a utilizar correctamente estas herramientas si
trabajas o trabajarás de frontend. No puedo sobrecargar este curso de explicaciones
al respecto. Pero se propondrá horas extras de "armonización" para quien lo necesite.`);o(a,e)},$$slots:{default:!0}}),o(y,l),_()}export{D as component};
