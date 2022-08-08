<script>
import * as Three from "three";
const vertices = [];
var mouseX = 0;
var mouseY = 0;
const acceleration = 0.05;
export default {
  data() {
    return {};
  },
  methods: {
    init: function () {
      const container = document.getElementsByClassName("about")[0];

      this.scene = new Three.Scene();
      this.camera = new Three.PerspectiveCamera(
        75,
        container.clientX / container.clientY,
        1,
        600
      );
      this.camera.position.z = 5;
      this.camera.rotation.x = 2.4;
      this.camera.rotation.y = -0.7;
      this.camera.aspect = container.clientWidth / container.clientHeight;
      this.camera.updateProjectionMatrix();

      this.renderer = new Three.WebGLRenderer({ antialias: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);

      for (var i = 0; i < 12000; i++) {
        const x = Math.random() * 1000 - 200;
        const y = Math.random() * 1000 - 200;
        const z = Math.random() * 1000 - 200;
        vertices.push(x, y, z);
      }
      this.Geo = new Three.BufferGeometry();
      this.Geo.setAttribute(
        "position",
        new Three.Float32BufferAttribute(vertices, 3)
      );
      this.Geo.setAttribute(
        "velocity",
        new Three.Float32BufferAttribute(12000, 1)
      );

      this.material = new Three.PointsMaterial({
        color: 0x888888,
        size: 0.8,
        map: new Three.TextureLoader().load(
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/White_dot.svg/120px-White_dot.svg.png?20080219072659"
        ),
      });
      const points = new Three.Points(this.Geo, this.material);
      this.scene.background = new Three.Color(0x000b16);
      this.scene.add(points);
    },

    animate: function () {
      const vela = this.Geo.getAttribute("velocity").array;
      const pos = this.Geo.getAttribute("position");
      const posa = pos.array;
      for (let index = 0; index < 12000; index++) {
        vela[index] += acceleration;
        posa[index] -= vela[index];
        if (posa[index + 2] < -200) {
          posa[index + 2] = 200;
          vela[index + 2] = 0;
        }
      }
      pos.needsUpdate = true;
      // this.camera.rotation.x -= 0.01;
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.animate);
    },

    onResize: function () {
      const container = document.getElementsByClassName("about")[0];
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
    },
  },
  mounted: function () {
    window.addEventListener("resize", this.onResize, false);
    // document
    //   .getElementsByClassName("header")[0]
    //   .addEventListener("mousemove", (event) => {
    //     this.camera.rotation.x += 0.05;
    //     this.camera.rotation.y += 0.05;
    //     if (event.clientX > mouseX) {
    //       mouseX = event.clientX;
    //     }
    //     if (event.clientY > mouseY) {
    //       mouseY = event.clientY;
    //     }
    //   });
    this.init();
    this.animate();
  },
};
</script>

<template></template>

<style>
canvas {
  background-color: white;
  position: absolute;
  z-index: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
