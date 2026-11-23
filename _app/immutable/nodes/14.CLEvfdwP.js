import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{o as f}from"../chunks/k_-SACZf.js";import{p as v,f as p,s,a as g,g as u,b as o,c as q,n as r}from"../chunks/BduZyM7k.js";import{i as b}from"../chunks/611aVr9j.js";import{I as y}from"../chunks/CNfEwzh9.js";import{C as d}from"../chunks/DlsCqhfG.js";import{H as $}from"../chunks/rBwrARmC.js";var w=p(`<p>Si ya tienes algo de experiencia con esto, puede que sepas que
    "create" es en realidad un alias, ¿sabrías explicar qué es lo que hace realmente?</p>`),S=p(`<h2>Entorno</h2> <p>Aunque Three.js se puede utilizar como un script directamente, no es la manera adecuada de
    introducirlo en un proyecto web moderno.</p> <p>En su lugar es mejor usarlo como dependencia en un entorno donde contemos con un
    bundler. Si estás introduciéndote en el mundo web, un bundler es una herramienta que
    procesa todo nuestro proyecto para convertirlo en unos pocos ficheros que puedan ser
    desplegados en un servidor web a la vez que les hace unos arreglitos 🙂.</p> <ul>Entre sus tantas ventajas se encuentra: <li>Transpilación y compilación <ul><li>Podemos usar la última versión de JavaScript aún con baja
        compatibilidad y que se transforme a código de una versión más compatible.</li> <li>Nos permite compilar facilmente supersets del lenguaje, como TypeScript.
                Veremos ventajas de esto durante el curso.</li></ul></li> <li>Optimización <ul><li>Tree-shaking: cuando se empaqueta nuestra web/app, se elimina todo módulo no
                importado de las librerías de las que dependemos. Dicho de otra manera, solo
                queda lo que utilizamos.</li> <li>Dead code elimination: concepto similar al anterior, pero analizando más
                en profundidad todo el código de los módulos para eliminar partes a
                las que no accedemos, incluso en un módulo que usamos.</li></ul></li></ul> <p>De editor usaremos <a href="https://code.visualstudio.com/download">Visual Studio Code</a>. Puedes usar el
    que quieras, pero en este curso es el que usaremos por defecto y solo se resolverán
    problemas técnicos referentes al editor si se usa este.</p> <h3>Requisitos</h3> <ul><li>Asegúrate de tener instalado Node.js 20 o superior (actualmente va por la 22)</li></ul> <h3>Paso 1: crear un proyecto con Vite</h3> <p><a href="https://vite.dev/">Vite</a> es la actual herramienta de desarrollo
    más popular en el ecosistema web. Aporta todo lo mencionado anteriormente.</p> <p>Existe un paquete denominado create-vite, capaz de construir esqueletos para
    proyectos web de una manera muy sencilla. Una manera rápida de instalar y
    ejecutar un paquete de este estilo, si tenemos Node instalado es mediante el comando:</p> <!> <!> <p>El tipo de proyecto es Vanilla (sin frameworks) y usaremos TypeScript de lenguaje principal.</p> <h3>Paso 2: instalar three y definiciones de tipos</h3> <!> <p>Se aconseja meter un reinicio del VSCode (comando Reload Window o cerrar y abrir el editor),
    que a veces no pilla bien las nuevas dependencias instaladas.</p>`,1);function A(c,m){v(m,!1),f(()=>{$.highlightAll()}),b();var n=S(),i=s(g(n),20);d(i,{language:"JavaScript",showLanguage:!1,children:(e,l)=>{r();var a=u("npm create vite@latest");o(e,a)},$$slots:{default:!0}});var t=s(i,2);y(t,{infoType:"info",mark:"question",title:"",children:(e,l)=>{var a=w();o(e,a)},$$slots:{default:!0}});var h=s(t,6);d(h,{language:"JavaScript",showLanguage:!1,children:(e,l)=>{r();var a=u(`npm i three

npm i @types/three --save-dev`);o(e,a)},$$slots:{default:!0}}),r(2),o(c,n),q()}export{A as component};
