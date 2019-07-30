import React, { Component } from "react";
import * as THREE from "three";
import { TweenLite, Power4, Linear } from "gsap";
import { linear } from "./SmoothScroll";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {
  BloomEffect,
  EffectComposer,
  EffectPass,
  RenderPass,
  KernelSize,
  GlitchEffect,
  NoiseEffect,
  BlendFunction
} from "postprocessing";
class HomeBG extends Component {
  weird = () => {
    const scene1 = [
      () => {
        const geometry = new THREE.BufferGeometry().fromGeometry(
          new THREE.SphereGeometry(50, 3, 3)
        );

        const material = new THREE.MeshBasicMaterial({ color: "black" });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.set(-200, -1.06, -200);
        this.scene.add(sphere);
      }
    ];

    scene1.forEach(func => func());
  };
  geometry = () => {
    const loader = new GLTFLoader();
    var geometry = new THREE.BoxGeometry(10, 8, 3);
    var material = new THREE.MeshToonMaterial({ color: "black" });
    var cube = new THREE.Mesh(geometry, material);
    cube.receiveShadow = true;
    cube.position.set(5, -5, -1.5);
    this.scene.add(cube);
    TweenLite.set(this.camera.rotation, {
      x: 0.2,
      y: -0.5
    });
    TweenLite.set(this.camera.position, {
      y: -6,
      x: -5
    });
    const models = [
      //   require("../assets/models/throw.glb"),
      //   require("../assets/models/flip.glb"),
      require("../assets/models/fall.glb")
    ];
    const rando = 0;
    console.log(rando);
    loader.load(models[rando], model => {
      this.mixer = new THREE.AnimationMixer(model.scene);
      this.clips = model.animations;
      this.clips.forEach(clip => {
        console.log(clip);
        if (!this.animation) {
          this.animation = this.mixer.clipAction(clip);
          this.animation.setLoop(THREE.LoopOnce);
          this.animation.clampWhenFinished = true;
        }
      });
      model.scene.scale.set(1, 1, 1);
      TweenLite.fromTo(
        this.camera.rotation,
        5,
        {
          x: 0.2,
          y: -0.5
        },
        {
          x: 0,
          y: 0
        }
      );
      const positions = [{ x: 1.12, y: -1.02, z: -0.76 }];
      const zoom = {
        value: 1
      };
      if (this.camera) {
        TweenLite.to(zoom, 5, {
          value: 2,
          onUpdate: () => {
            this.camera.zoom = zoom.value;
            this.camera.updateProjectionMatrix();
          }
        });
        TweenLite.fromTo(
          this.camera.position,
          5,
          {
            y: -6,
            x: -5
          },
          {
            y: 0.5,
            x: 0.5,
            z: 3,
            ease: Power4.easeOut,
            onStart: () => {
              setTimeout(() => {
                this.animation.play();
                TweenLite.fromTo(
                  model.scene.position,
                  1,
                  {
                    x: 0,
                    y: 3,
                    z: -2
                  },
                  {
                    ...positions[rando],
                    ease: Power4.easeOut
                  }
                );
              }, 900);
            }
          }
        );
      }
      model.scene.rotation.set(0, 10, 0);
      this.scene.add(model.scene);
    });
  };
  lights = () => {
    const light = new THREE.PointLight("white", 1.3);
    light.position.set(0, 1.5, -3.2);
    light.rotation.set(-1, 0, 0);
    light.castShadow = true;
    console.log(light);
    this.scene.add(light);
  };
  effects = () => {
    this.composer = new EffectComposer(this.renderer);
    const noise = new NoiseEffect({
      blendFunction: BlendFunction.COLOR_DODGE,
      opacity: 0.1
    });
    noise.blendMode.opacity.value = 0.2;
    const effectPass = new EffectPass(
      this.camera,
      new BloomEffect({
        resolutionScale: 0.2,
        kernelSize: KernelSize.HUGE
      }),
      new GlitchEffect({
        delay: new THREE.Vector2(5, 10),
        duration: new THREE.Vector2(0.5, 1.1)
      }),
      noise
    );
    effectPass.renderToScreen = true;
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    if (true) {
      this.composer.addPass(effectPass);
    }
  };
  ReSize = () => {
    const { clientWidth: width, clientHeight: height } = this.mount;
    this.renderer.setSize(width, height);
  };
  componentDidMount() {
    window.addEventListener("resize", this.ReSize);
    this.scene = new THREE.Scene();

    const { clientWidth: width, clientHeight: height } = this.mount;
    this.renderer = new THREE.WebGLRenderer({
      antialias: true
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor("white");
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 50000);
    this.geometry();
    this.lights();
    this.renderer.setSize(width, height);
    this.effects();
    this.weird();
    this.mount.appendChild(this.renderer.domElement);
    // this.scene.overrideMaterial = new THREE.MeshToonMaterial({
    //   color: "grey"
    // });
    if (window.DeviceOrientationEvent && "ontouchstart" in window) {
      window.addEventListener(
        "deviceorientation",
        this._handleDeviceOrientation
      );
    } else {
      window.addEventListener("mousemove", this.cameraMove);
    }
    this.animate();
    if (!window.scene && !window.THREE) {
      window.scene = this.scene;
      window.THREE = THREE;
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.ReSize);

    if (window.DeviceOrientationEvent && "ontouchstart" in window) {
      window.removeEventListener(
        "deviceorientation",
        this._handleDeviceOrientation
      );
    } else {
      window.removeEventListener("mousemove", this.cameraMove);
    }
    cancelAnimationFrame(this.animate);
    this.clock.stop();
    this.renderer.dispose();
    this.scene.dispose();
  }
  clock = new THREE.Clock();
  animate = () => {
    requestAnimationFrame(this.animate);
    if (this.mixer) {
      this.mixer.update(0.015);
    }
    this.composer.render(this.clock.getDelta());
  };
  cameraMove = e => {
    const move = {
      y: -linear(e.screenX, 0, window.innerWidth, -0.2, 0.2),
      x: -linear(e.screenY, 0, window.innerHeight, -0.2, 0.2)
    };
    TweenLite.to(this.camera.rotation, 2, {
      ...move,
      ease: Power4.easeOut
    });
  };
  _handleDeviceOrientation = event => {
    if (event) {
      const x = linear(event.beta, -180, 180, -1, 1);
      const y = linear(event.gamma, -90, 90, -1, 1);
      TweenLite.to(this.camera.rotation, 0.6, {
        x: x,
        y: y,
        ease: Power4.easeOut
      });
    }
  };
  render() {
    return (
      <div ref={ref => (this.mount = ref)} id="mount" className="homeMount" />
    );
  }
}

export default HomeBG;
