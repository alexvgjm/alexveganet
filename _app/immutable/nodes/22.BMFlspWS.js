import"../chunks/CWj6FrbW.js";import{o as X}from"../chunks/k_-SACZf.js";import{p as ee,f as m,a as P,s as n,d as k,t as oe,b as i,c as te,r as x,n as p,m as ae,o as se,h as W,g as I}from"../chunks/BduZyM7k.js";import{r as re}from"../chunks/CJDWlBBp.js";import{s as ne}from"../chunks/BSOZMg1Q.js";import{u as ie,v as le,n as U,m as V,c as N,F as ce,p as A,a as de,C as d,b as me,M as F,d as he,e as pe}from"../chunks/B3A7t7Jc.js";import{b as ue}from"../chunks/DzBwx_jc.js";import{V as z,D as fe,a as ge,M as H,B as O}from"../chunks/RmmjoSf4.js";import{C as q}from"../chunks/DlsCqhfG.js";import{H as we}from"../chunks/rBwrARmC.js";import{u as ve}from"../chunks/bJGP4r0Y.js";var be=m('<h2 class="example-title">Vertex position modification with TSL | Look at | Billboard case</h2>'),ye=m(`<p>In this scene, we have a 🟨 cube (a 3D equirectangular shape with eight vertices) that is always facing <small>(z-facing)</small> the camera — a billboard effect performed on the GPU.
  It still retains its own rotation information in its transform matrix, but this is ignored.
  Since we only see one face of the cube, it appears as a flat square that always faces us —
  but pay attention to its shadow on the floor.</p> <p><input type="checkbox" id="offset-checkbox"/> <label for="offset-checkbox">Or check this to add a slight offset to the lookAt target</label></p> <p>This is just an example that allows you to use any material while preserving geometry and lighting
                if compatible, with a lookAt to any position. For a more specific billboard effect, you might
                want to use a specific material for it in order to achieve better performance.</p>`,1),Pe=m(`<p>You can use any <code>NodeMaterial</code>. Just make sure to set its <code>positionNode</code> property
  using the function below. If you’re using a material that reacts to lighting,
  be sure to also transform the normals by setting the <code>normalNode</code> property.</p> <!>`,1),ke=m(`<dl class="faq-list"><dt>Q: Can I use the TSL exposed <code>cameraPosition</code> instead a custom uniform if the target is the camera?</dt> <dd>A: When shadows are enabled, <code>cameraPosition</code> represents the position of the light's
  shadow camera during the shadow-mapping pass, rather than the main render camera.
  This causes the geometry to face the light instead of the viewer, resulting in incorrect shadows.
  As far as I know, you should avoid using <code>cameraPosition</code> in this case.</dd> <dt>Q: Why perform <code>lookAt</code> on the GPU? We already have <code>lookAt</code> on the CPU, and its transform matrix is used by the GPU anyway.</dt> <dd>A: Who knows? Think about extreme cases — like a CPU state based particle system. Iterating over a million object matrices on the CPU to perform a <code>lookAt</code> 60 times per second doesn't sound so good.</dd> <dt>Q: Can I use this with <code>InstancedMesh</code>?</dt> <dd>A: Yes, but it requires some tweaks. Currently, the look vector uses the <code>modelPosition</code> instead of the per-instance position.
            I'm not sure if TSL exposes the instance base position directly. If not, you can pass it as a custom attribute.</dd></dl>`),xe=m('<canvas></canvas> <header class="example-header"><!></header> <main><!> <!> <!> <!></main>',1);function Ve(D,R){ee(R,!0);let u,f=se(!1);X(()=>{E(),we.highlightAll();const e=Array.from(document.querySelectorAll(".hljs-comment")),t=e.filter(a=>{var s;return(s=a.textContent)==null?void 0:s.includes("THE IMPORTANT PART")}),o=e.filter(a=>{var s;return(s=a.textContent)==null?void 0:s.includes("-------------------------")});console.log({importantComment:t,dashedLinesComment:o}),o.forEach(a=>a.style.setProperty("color","#ff0","important")),t.forEach(a=>a.style.setProperty("color","#ff0","important"))});const g=ie(new z);function E(){const{camera:e,orbitControls:t,renderer:o,scene:a,clock:s,lights:c}=me(u,{centerOrbits:!0,cameraHeight:10});t.autoRotate=!0,t.autoRotateSpeed=1,c.pointLights.forEach(h=>a.remove(h)),c.ambientLight.intensity=.2;const l=B(),r=new fe;r.position.set(10,15,12),r.target=l,r.castShadow=!0,r.shadow.camera.left=-12,r.shadow.camera.right=12,r.shadow.camera.top=12,r.shadow.camera.bottom=-12,r.shadow.bias=-.001,r.shadow.mapSize.set(1024,1024),t.enableZoom=!0,t.target.set(0,0,0);const Z=new ge(r,2,"yellow");a.add(Z),a.add(r);function K(){const h=Math.min(.03,s.getDelta());t.update(h),e.getWorldPosition(g.value),W(f)&&g.value.add(new z(5,5,1)),l.rotation.x+=h*.5,o.render(a,e)}o.setAnimationLoop(K);const y=new H(new O(20,1,20),new F({color:"gray"}));y.position.set(0,-1,0),y.receiveShadow=!0,a.add(y,l)}const G=le(0,1,0).toVar(),w=U(g.sub(V)).toVar(),_=U(N(G,w)).toVar(),Q=N(w,_).toVar(),j=ce(()=>{const e=_.mul(A.x).add(Q.mul(A.y)).add(w.mul(A.z)),t=V.add(e);return de.mul(t)});function B(){const e=new O,t=new F({color:"orange"});t.positionNode=j(),t.normalNode=he;const o=new H(e,t);return o.position.set(0,2,0),o.castShadow=!0,o}var T=xe(),$=P(T);ue($,e=>u=e,()=>u);var v=n($,2),J=k(v);d(J,{children:(e,t)=>{var o=be();i(e,o)}}),x(v);var b=n(v,2);let S;var C=k(b);d(C,{title:"What is shown here",children:(e,t)=>{var o=ye(),a=n(P(o),2),s=k(a);re(s),p(2),x(a),p(2),pe(s,()=>W(f),c=>ae(f,c)),i(e,o)}});var L=n(C,2);d(L,{title:"Material creation",children:(e,t)=>{var o=Pe(),a=n(P(o),2);q(a,{language:"TypeScript",children:(s,c)=>{p();var l=I();l.nodeValue=`export const lookAtTargetUniform = uniform(new Vector3())
const worldUp = vec3(0.0, 1.0, 0.0).toVar()
const look = normalize(lookAtTargetUniform.sub(modelPosition)).toVar()
const right = normalize(cross(worldUp, look)).toVar()
const upOrtho = cross(look, right).toVar()

export const lookAtPositionFn = Fn(() => {
    const offsetWorld = right
        .mul(positionLocal.x)
        .add(upOrtho.mul(positionLocal.y))
        // Comment this line to collapse geometry to the plane
        .add(look.mul(positionLocal.z))

    const newWorldPos = modelPosition.add(offsetWorld)
    return modelWorldMatrixInverse.mul(newWorldPos) // World -> Local
})`,i(s,l)},$$slots:{default:!0}}),i(e,o)}});var M=n(L,2);d(M,{title:"Usage",children:(e,t)=>{q(e,{language:"TypeScript",children:(o,a)=>{p();var s=I();s.nodeValue=`    const material = new MeshStandardNodeMaterial() // or any NodeMaterial

    material.positionNode = lookAtPositionFn()
    material.normalNode = normalLocal
    
    // ...
    // Remember to update lookAtTargetUniform if the target position changes. 
    // In this case the camera position changes every frame,
    // so we do it in the render loop:
    camera.getWorldPosition(lookAtTargetUniform.value)`,i(o,s)},$$slots:{default:!0}})}});var Y=n(M,2);d(Y,{title:"F.A.Q",children:(e,t)=>{var o=ke();i(e,o)}}),x(b),oe(e=>S=ne(b,1,"example-info",null,S,e),[()=>({"show-info":ve.showInfo})]),i(D,T),te()}export{Ve as component};
