import React, { Component } from "react";
import * as THREE from "three";
import { TweenLite, Power4 } from "gsap";
import { linear } from "./SmoothScroll";
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

class Background extends Component {
  geometry = () => {
    Array(100)
      .fill()
      .forEach(element => {
        const position = [
          Math.floor(Math.random() * 1000),
          Math.floor(Math.random() * 1000),
          Math.floor(Math.random() * 1000)
        ];
        const geometry = new THREE.BufferGeometry().fromGeometry(
          new THREE.SphereGeometry(5, 3, 3)
        );

        const material = new THREE.MeshBasicMaterial({ color: "white" });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.set(position[0], position[1], position[2]);
        this.scene.add(sphere);
      });
    function sun() {
      const geometry = new THREE.BufferGeometry().fromGeometry(
        new THREE.SphereGeometry(100, 20, 20)
      );
      const material = new THREE.MeshBasicMaterial({
        color: "white",
        transparent: true,
        opacity: 1
      });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(1000, 1000, 0);
      return sphere;
    }
    this.sun = sun();
    this.scene.add(this.sun);
  };
  lights = () => {
    const light = new THREE.PointLight(0xffffff, 10);
    this.scene.add(light);
  };
  effects = () => {
    this.composer = new EffectComposer(this.renderer);
    const noise = new NoiseEffect({
      blendFunction: BlendFunction.ADD,
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
  componentDidMount() {
    window.addEventListener("resize", this.ReSize);
    this.scene = new THREE.Scene();
    this.geometry();
    this.lights();
    const { clientWidth: width, clientHeight: height } = this.mount;
    this.renderer = new THREE.WebGLRenderer({
      antialias: true
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor("black");
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    TweenLite.to(this.camera.position, 5, {
      x: 500,
      y: 500,
      z: 750,
      ease: Power4.easeOut
    });
    this.renderer.setSize(width, height);
    this.effects();
    this.mount.appendChild(this.renderer.domElement);
    if (window.DeviceOrientationEvent && "ontouchstart" in window) {
      window.addEventListener(
        "deviceorientation",
        this._handleDeviceOrientation
      );
    } else {
      window.addEventListener("mousemove", this.cameraMove);
    }
    this.animate();
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
      this.updateMixer(0.01);
    }
    this.composer.render(this.clock.getDelta());
  };
  cameraMove = e => {
    const move = {
      y: -linear(e.screenX, 0, window.innerWidth, -1, 1),
      x: -linear(e.screenY, 0, window.innerHeight, -1, 1)
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
      <div>
        <div ref={ref => (this.mount = ref)} id="mount" />
      </div>
    );
  }
}

export default Background;
