import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{f as a,b as s,n}from"../chunks/D6lclsr7.js";var r=a(`<h2>Entorno</h2> <p>Aunque Three.js se puede utilizar como un script directamente, no es la manera adecuada de
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
    problemas técnicos referentes al editor si se usa este.</p> <h3>Requisitos</h3> <ul><li>Asegúrate de tener instalado Node.js 20 o superior (actualmente va por la 22)</li></ul>`,1);function t(e){var o=r();n(12),s(e,o)}export{t as component};
