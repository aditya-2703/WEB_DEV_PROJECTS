import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
// import { Matrix3 } from 'three'

const basics = {
    color_light1 : 0xE5E5E5,
    color_light2 : 0x00ff00
    
}


// Debug
// const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
// .7, .15, 14, 200 
const geometry = new THREE.TorusGeometry( .15, .03, 14, 200);

// Materials
const material = new THREE.MeshStandardMaterial({
    roughness:0,
    metalness:1,
    // color:basics.color_light1,
    emissive:0x00000,
    // flatShading:true,
    // wireframe:true
    // flatShading:true,
})
// material.color="0xff0000"

// Mesh
const sphere = new THREE.Mesh(geometry,material)
scene.add(sphere)

// Lights

const pointLight1 = new THREE.PointLight(basics.color_light1, 0.1,100)
pointLight1.position.x = 2
pointLight1.position.y = 3
pointLight1.position.z = 4
// pointLight1.scale.x = -2.49
// pointLight1.scale.y = -1.19
// pointLight1.scale.z = -0.93
scene.add(pointLight1)

const pointLight2 = new THREE.PointLight(basics.color_light2, 0.1,100)
pointLight2.position.x = 2
pointLight2.position.y = 3
pointLight2.position.z = 4
// pointLight1.scale.x = 1.34
// pointLight1.scale.y = 1
// pointLight1.scale.z = 1

scene.add(pointLight2)



/**
 * Sizes
 */
const sizes = {
    width:  250,
    height: 250
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = 250
    sizes.height = 250

    // Update camera
    camera.aspect = 250 / 250
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(250, 250)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 0.7
// camera.lookAt(sphere.position)
scene.add(camera)

// const camera2 = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 1000)
// camera2.position.x = 0
// camera2.position.y = 0
// camera.lookAt(mesh.position)
// camera2.position.z = 1
// scene.add(camera2)
// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha:true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))



// -----------------------------------------

// gui.add(pointLight1.position,'x').min(-3).max(3).step(0.01).name('1.x')
// gui.add(pointLight1.position,'y').min(-3).max(3).step(0.01).name('1.y')
// gui.add(pointLight1.position,'z').min(-3).max(3).step(0.01).name('1.z')
// gui.add(pointLight1.scale,'x').min(-3).max(3).step(0.01).name('scale x')
// gui.add(pointLight1.scale,'y').min(-3).max(3).step(0.01).name('scale y')
// gui.add(pointLight1.scale,'z').min(-3).max(3).step(0.01).name('scale z')
// gui.addColor(basics,'color_light1').onChange(()=>{
//     pointLight1.color.set(basics.color_light1)
// })
// gui.add(pointLight2.position,'x').min(-3).max(3).step(0.01).name('2.x')
// gui.add(pointLight2.position,'y').min(-3).max(3).step(0.01).name('2.y')
// gui.add(pointLight2.position,'z').min(-3).max(3).step(0.01).name('2.z')
// gui.add(pointLight2.scale,'x').min(-3).max(3).step(0.01).name('scale x')
// gui.add(pointLight2.scale,'y').min(-3).max(3).step(0.01).name('scale y')
// gui.add(pointLight2.scale,'z').min(-3).max(3).step(0.01).name('scale z')
// gui.addColor(basics,'color_light2').onChange(()=>{
//     pointLight2.color.set(basics.color_light2)
// })

    

/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.z= .5 * elapsedTime
    sphere.rotation.x= .3 * elapsedTime
    sphere.rotation.y= .4 * elapsedTime

    // camera.rotation.x= .1 * elapsedTime
    // camera.rotation.x= .1 * elapsedTime

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
