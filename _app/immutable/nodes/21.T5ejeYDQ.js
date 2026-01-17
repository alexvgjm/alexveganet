import"../chunks/CWj6FrbW.js";import{o as q}from"../chunks/k_-SACZf.js";import{p as W,f as g,a as A,s as i,d as u,t as N,b as c,c as j,r as f,n as y,g as _,h as C,o as D,m as J}from"../chunks/BduZyM7k.js";import{r as K}from"../chunks/CJDWlBBp.js";import{s as P}from"../chunks/BSOZMg1Q.js";import{C as S,b as Q,M as U,f as X,s as Y,t as Z,v as ee,e as te}from"../chunks/B3A7t7Jc.js";import{b as ne}from"../chunks/DzBwx_jc.js";import{S as ae,I as se,b as re,c as oe}from"../chunks/RmmjoSf4.js";import{C as T}from"../chunks/DlsCqhfG.js";import{H as ie}from"../chunks/rBwrARmC.js";import{u as ce}from"../chunks/bJGP4r0Y.js";var le=g('<h2 class="example-title">InstancedMesh attributes with TSL</h2>'),de=g(`<p>In this scene, we have an InstancedMesh of spheres changing its emissive color,
            each with a custom attribute that regulates the color change speed.
            Some spheres change color faster than others.</p>`),he=g(`<p>We can understand the TSL <code>attribute()</code> as a per-vertex attribute value fetcher,
        but if an <code>InstancedBufferAttribute</code> is used, it takes the instance index into account.</p> <!>`,1),me=g('<p>Here the code for creating the InstancedMesh and defining a custom attribute.</p> <div><!></div> <div><!></div> <div class="show-hidden-control svelte-ktnk07"><input type="checkbox" id="show-hidden"/> <label for="show-hidden">Show hidden code</label></div>',1),pe=g('<canvas></canvas> <header class="example-header"><!></header> <main><!> <!> <!></main>',1);function _e(R,E){W(E,!0);let v=D(!1),x;q(()=>{B(),ie.highlightAll();const e=Array.from(document.querySelectorAll(".hljs-comment")),s=e.filter(n=>{var a;return(a=n.textContent)==null?void 0:a.includes("THE IMPORTANT PART")}),t=e.filter(n=>{var a;return(a=n.textContent)==null?void 0:a.includes("-------------------------")});console.log({importantComment:s,dashedLinesComment:t}),t.forEach(n=>n.style.setProperty("color","#ff0","important")),s.forEach(n=>n.style.setProperty("color","#ff0","important"))});function B(){const{camera:e,orbitControls:s,renderer:t,scene:n,clock:a}=Q(x);function l(){const r=Math.min(.03,a.getDelta());s.update(r),t.render(n,e)}t.setAnimationLoop(l),n.add(F())}function F(){const e=new ae(.75,16,16),s=5*5*5,t=new Float32Array(s);for(let o=0;o<s;o++)t[o]=.5+Math.random()*1.5;e.setAttribute("emissionChangeSpeed",new se(t,1));const n=L(),a=new re(e,n,s);a.position.set(-4,.5,-4);let l=0;const r=new oe;for(let o=0;o<5;o++)for(let m=0;m<5;m++)for(let h=0;h<5;h++)r.setPosition(o*2,m*2,h*2),a.setMatrixAt(l,r),l++;return a}function L(){const e=new U({color:"black"}),s=X("emissionChangeSpeed","float"),t=Y(Z.mul(s)).add(1).mul(.5);return e.emissiveNode=ee(1,t.mul(.6),0),e}var $=pe(),I=A($);ne(I,e=>x=e,()=>x);var M=i(I,2),G=u(M);S(G,{children:(e,s)=>{var t=le();c(e,t)}}),f(M);var w=i(M,2);let k;var O=u(w);S(O,{title:"What is shown here",children:(e,s)=>{var t=de();c(e,t)}});var z=i(O,2);S(z,{title:"Material creation",children:(e,s)=>{var t=he(),n=i(A(t),2);T(n,{language:"TypeScript",children:(a,l)=>{y();var r=_();r.nodeValue=`function createPulsatingMaterial() {
    const mat = new MeshStandardNodeMaterial({ color: 'black' })

    // ------------- ⭐ THE IMPORTANT PART ⭐ -------------
    const emissionChangeSpeed = attribute('emissionChangeSpeed', 'float')
    // -----------------------------------------------------

    // Oscillates between 0 and 1. Frequency based on emissionChangeSpeed
    //           (sin(x) + 1) / 2 =   a value between 0 and 1
    const normalizedOscillation
        = sin(time.mul(emissionChangeSpeed)).add(1).mul(0.5)

    // Emission color. Orange-ish (red fixed at 1, green between 0 and 0.6)
    mat.emissiveNode = vec3(1, normalizedOscillation.mul(0.6), 0)

    return mat
}`,c(a,r)},$$slots:{default:!0}}),c(e,t)}});var V=i(z,2);S(V,{title:"InstancedMesh creation",children:(e,s)=>{var t=me(),n=i(A(t),2);let a;var l=u(n);T(l,{language:"TypeScript",children:(d,b)=>{y();var p=_();p.nodeValue=`function createSpheres() {
    const geometry = new SphereGeometry(0.75, 16, 16)
    const material = createPulsatingMaterial() // More on this later
    const count = 5 * 5 * 5 // 125

    // ------------- ⭐ THE IMPORTANT PART ⭐ -------------
    const emissionChangeSpeedsArray = new Float32Array(count)
    // random change speed between 0.5 and 2.0 for each instance
    for (let i = 0; i < count; i++) {
        emissionChangeSpeedsArray[i] = 0.5 + Math.random() * 1.5
    }
    geometry.setAttribute(
        'emissionChangeSpeed',
        new InstancedBufferAttribute(emissionChangeSpeedsArray, 1)
    )
    // -----------------------------------------------------
    const spheres = new InstancedMesh(geometry, material, count)
    spheres.position.set(-4, 0.5, -4)

    let index = 0
    const transformMatrix = new Matrix4()
    for (let x = 0; x < 5; x++) { // Classic hadouken for matrix 5x5x5 formation
        for (let y = 0; y < 5; y++) {
            for (let z = 0; z < 5; z++) {
                transformMatrix.setPosition(x * 2, y * 2, z * 2)
                spheres.setMatrixAt(index, transformMatrix)
                index++
            }
        }
    }

    return spheres
}`,c(d,p)},$$slots:{default:!0}}),f(n);var r=i(n,2);let o;var m=u(r);T(m,{language:"TypeScript",children:(d,b)=>{y();var p=_();p.nodeValue=`function createSpheres() {
    const geometry = new SphereGeometry(0.75, 16, 16)
    const material = createPulsatingMaterial() // More on this later
    const count = 5 * 5 * 5 // 125

    // ------------- ⭐ THE IMPORTANT PART ⭐ -------------
    const emissionChangeSpeedsArray = new Float32Array(count)
    // random change speed between 0.5 and 2.0 for each instance
    for (let i = 0; i < count; i++) {
        emissionChangeSpeedsArray[i] = 0.5 + Math.random() * 1.5
    }
    geometry.setAttribute(
        'emissionChangeSpeed',
        new InstancedBufferAttribute(emissionChangeSpeedsArray, 1)
    )
    // -----------------------------------------------------

    const spheres = new InstancedMesh(geometry, material, count)

    // Irrelevant code for positioning and return the spheres.
    // Check "show hidden code" if you want to see it anyway.
}`,c(d,p)},$$slots:{default:!0}}),f(r);var h=i(r,2),H=u(h);K(H),y(2),f(h),N((d,b)=>{a=P(n,1,"",null,a,d),o=P(r,1,"",null,o,b)},[()=>({"hidden-code":!C(v)}),()=>({"hidden-code":C(v)})]),te(H,()=>C(v),d=>J(v,d)),c(e,t)}}),f(w),N(e=>k=P(w,1,"example-info",null,k,e),[()=>({"show-info":ce.showInfo})]),c(R,$),j()}export{_e as component};
