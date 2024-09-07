let lenisScroll = () => {
  const lenis = new Lenis();
  lenis.on("scroll", (e) => {
    console.log(e);
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
};
lenisScroll();

function toggleMenu() {
  const menuIcon = document.querySelector(".menu-icon");
  menuIcon.classList.toggle("cross"); // Toggle cross class for animation or effect
  menuIcon.classList.toggle("bgManipulte"); // Toggle background color
}

function toggleSidebar() {
  const menuIcon = document.getElementById("menuBar");
  const sidebar = document.getElementById("sidebar");
  let sidebarVisible = false;

  menuIcon.addEventListener("click", () => {
    sidebarVisible = !sidebarVisible;

    if (sidebarVisible) {
      gsap.to(sidebar, {
        right: "0%",
        duration: 1,
        ease: "power2.out",
      });
    } else {
      gsap.to(sidebar, {
        right: "-100%",
        duration: 1.5,
        ease: "power2.out",
      });
    }
  });
}
toggleSidebar();

function clutter1() {
  let subH1Text = document.querySelectorAll(".clutter-title");
  subH1Text.forEach((elem) => {
    let clutter = "";
    let h1Text = elem.textContent;
    let spltdTxt = h1Text.split("");
    spltdTxt.forEach((e) => {
      clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
  });

  gsap.to(".clutter-title span", {
    color: "#fff",
    stagger: 0.155,
    scrollTrigger: {
      trigger: ".clutter-title",
      start: () => (window.innerWidth < 768 ? "top 90%" : "top 85%"),
      end: () => (window.innerWidth < 768 ? "top 40%" : "top 25%"),
      scroller: "body",
      scrub: 1,
    },
  });
}
// clutter1();

function canvasFrame() {
  const canvas = document.querySelector("#sec3>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
        ./assets/images/frames00007.png
        ./assets/images/frames00010.png
        ./assets/images/frames00013.png
        ./assets/images/frames00016.png
        ./assets/images/frames00019.png
        ./assets/images/frames00022.png
        ./assets/images/frames00025.png
        ./assets/images/frames00028.png
        ./assets/images/frames00031.png
        ./assets/images/frames00034.png
        ./assets/images/frames00037.png
        ./assets/images/frames00040.png
        ./assets/images/frames00043.png
        ./assets/images/frames00046.png
        ./assets/images/frames00049.png
        ./assets/images/frames00052.png
        ./assets/images/frames00055.png
        ./assets/images/frames00058.png
        ./assets/images/frames00061.png
        ./assets/images/frames00064.png
        ./assets/images/frames00067.png
        ./assets/images/frames00070.png
        ./assets/images/frames00073.png
        ./assets/images/frames00076.png
        ./assets/images/frames00079.png
        ./assets/images/frames00082.png
        ./assets/images/frames00085.png
        ./assets/images/frames00088.png
        ./assets/images/frames00091.png
        ./assets/images/frames00094.png
        ./assets/images/frames00097.png
        ./assets/images/frames00100.png
        ./assets/images/frames00103.png
        ./assets/images/frames00106.png
        ./assets/images/frames00109.png
        ./assets/images/frames00112.png
        ./assets/images/frames00115.png
        ./assets/images/frames00118.png
        ./assets/images/frames00121.png
        ./assets/images/frames00124.png
        ./assets/images/frames00127.png
        ./assets/images/frames00130.png
        ./assets/images/frames00133.png
        ./assets/images/frames00136.png
        ./assets/images/frames00139.png
        ./assets/images/frames00142.png
        ./assets/images/frames00145.png
        ./assets/images/frames00148.png
        ./assets/images/frames00151.png
        ./assets/images/frames00154.png
        ./assets/images/frames00157.png
        ./assets/images/frames00160.png
        ./assets/images/frames00163.png
        ./assets/images/frames00166.png
        ./assets/images/frames00169.png
        ./assets/images/frames00172.png
        ./assets/images/frames00175.png
        ./assets/images/frames00178.png
        ./assets/images/frames00181.png
        ./assets/images/frames00184.png
        ./assets/images/frames00187.png
        ./assets/images/frames00190.png
        ./assets/images/frames00193.png
        ./assets/images/frames00196.png
        ./assets/images/frames00199.png
        ./assets/images/frames00202.png
`;
    return data.split("\n")[index];
  }

  const frameCount = 64;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `#sec3`,
      start: `top top`,
      end: `250% top`,
      // scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#sec3",
    pin: true,
    // scroller: `#main`,
    start: `top top`,
    end: `250% top`,
  });
}
canvasFrame();

function canvasBridges() {
  const canvas = document.querySelector("#sec5>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
      ./assets/images/bridges00004.png
      ./assets/images/bridges00007.png
      ./assets/images/bridges00010.png
      ./assets/images/bridges00013.png
      ./assets/images/bridges00016.png
      ./assets/images/bridges00019.png
      ./assets/images/bridges00022.png
      ./assets/images/bridges00025.png
      ./assets/images/bridges00028.png
      ./assets/images/bridges00031.png
      ./assets/images/bridges00034.png
      ./assets/images/bridges00037.png
      ./assets/images/bridges00040.png
      ./assets/images/bridges00043.png
      ./assets/images/bridges00046.png
      ./assets/images/bridges00049.png
      ./assets/images/bridges00052.png
      ./assets/images/bridges00055.png
      ./assets/images/bridges00058.png
      ./assets/images/bridges00061.png
      ./assets/images/bridges00064.png
      ./assets/images/bridges00067.png
      ./assets/images/bridges00070.png
      ./assets/images/bridges00073.png
      ./assets/images/bridges00076.png
      ./assets/images/bridges00079.png
      ./assets/images/bridges00082.png
      ./assets/images/bridges00085.png
      ./assets/images/bridges00088.png
      ./assets/images/bridges00091.png
      ./assets/images/bridges00094.png
      ./assets/images/bridges00097.png
      ./assets/images/bridges00100.png
      ./assets/images/bridges00103.png
      ./assets/images/bridges00106.png
      ./assets/images/bridges00109.png
      ./assets/images/bridges00112.png
      ./assets/images/bridges00115.png
      ./assets/images/bridges00118.png
      ./assets/images/bridges00121.png
      ./assets/images/bridges00124.png
      ./assets/images/bridges00127.png
      ./assets/images/bridges00130.png
      ./assets/images/bridges00133.png
      ./assets/images/bridges00136.png
      ./assets/images/bridges00139.png
      ./assets/images/bridges00142.png
      ./assets/images/bridges00145.png
      ./assets/images/bridges00148.png
      ./assets/images/bridges00151.png
      ./assets/images/bridges00154.png
      ./assets/images/bridges00157.png
      ./assets/images/bridges00160.png
      ./assets/images/bridges00163.png

`;
    return data.split("\n")[index];
  }

  const frameCount = 53;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `#sec5`,
      start: `top top`,
      end: `250% top`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#sec5",
    pin: true,
    start: `top top`,
    end: `250% top`,
  });
}
canvasBridges();

function canvasMagmaIndex() {
  const canvas = document.querySelector("#sec7>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
        https://thisismagma.com/assets/home/lore/seq/1.webp?2
        https://thisismagma.com/assets/home/lore/seq/2.webp?2
        https://thisismagma.com/assets/home/lore/seq/3.webp?2
        https://thisismagma.com/assets/home/lore/seq/4.webp?2
        https://thisismagma.com/assets/home/lore/seq/5.webp?2
        https://thisismagma.com/assets/home/lore/seq/6.webp?2
        https://thisismagma.com/assets/home/lore/seq/7.webp?2
        https://thisismagma.com/assets/home/lore/seq/8.webp?2
        https://thisismagma.com/assets/home/lore/seq/9.webp?2
        https://thisismagma.com/assets/home/lore/seq/10.webp?2
        https://thisismagma.com/assets/home/lore/seq/11.webp?2
        https://thisismagma.com/assets/home/lore/seq/12.webp?2
        https://thisismagma.com/assets/home/lore/seq/13.webp?2
        https://thisismagma.com/assets/home/lore/seq/14.webp?2
        https://thisismagma.com/assets/home/lore/seq/15.webp?2
        https://thisismagma.com/assets/home/lore/seq/16.webp?2
        https://thisismagma.com/assets/home/lore/seq/17.webp?2
        https://thisismagma.com/assets/home/lore/seq/18.webp?2
        https://thisismagma.com/assets/home/lore/seq/19.webp?2
        https://thisismagma.com/assets/home/lore/seq/20.webp?2
        https://thisismagma.com/assets/home/lore/seq/21.webp?2
        https://thisismagma.com/assets/home/lore/seq/22.webp?2
        https://thisismagma.com/assets/home/lore/seq/23.webp?2
        https://thisismagma.com/assets/home/lore/seq/24.webp?2
        https://thisismagma.com/assets/home/lore/seq/25.webp?2
        https://thisismagma.com/assets/home/lore/seq/26.webp?2
        https://thisismagma.com/assets/home/lore/seq/27.webp?2
        https://thisismagma.com/assets/home/lore/seq/28.webp?2
        https://thisismagma.com/assets/home/lore/seq/29.webp?2
        https://thisismagma.com/assets/home/lore/seq/30.webp?2
        https://thisismagma.com/assets/home/lore/seq/31.webp?2
        https://thisismagma.com/assets/home/lore/seq/32.webp?2
        https://thisismagma.com/assets/home/lore/seq/33.webp?2
        https://thisismagma.com/assets/home/lore/seq/34.webp?2
        https://thisismagma.com/assets/home/lore/seq/35.webp?2
        https://thisismagma.com/assets/home/lore/seq/36.webp?2
        https://thisismagma.com/assets/home/lore/seq/37.webp?2
        https://thisismagma.com/assets/home/lore/seq/38.webp?2
        https://thisismagma.com/assets/home/lore/seq/39.webp?2
        https://thisismagma.com/assets/home/lore/seq/40.webp?2
        https://thisismagma.com/assets/home/lore/seq/41.webp?2
        https://thisismagma.com/assets/home/lore/seq/42.webp?2
        https://thisismagma.com/assets/home/lore/seq/43.webp?2
        https://thisismagma.com/assets/home/lore/seq/44.webp?2
        https://thisismagma.com/assets/home/lore/seq/45.webp?2
        https://thisismagma.com/assets/home/lore/seq/46.webp?2
        https://thisismagma.com/assets/home/lore/seq/47.webp?2
        https://thisismagma.com/assets/home/lore/seq/48.webp?2
        https://thisismagma.com/assets/home/lore/seq/49.webp?2
        https://thisismagma.com/assets/home/lore/seq/50.webp?2
        https://thisismagma.com/assets/home/lore/seq/51.webp?2
        https://thisismagma.com/assets/home/lore/seq/52.webp?2
        https://thisismagma.com/assets/home/lore/seq/53.webp?2
        https://thisismagma.com/assets/home/lore/seq/54.webp?2
        https://thisismagma.com/assets/home/lore/seq/55.webp?2
        https://thisismagma.com/assets/home/lore/seq/56.webp?2
        https://thisismagma.com/assets/home/lore/seq/57.webp?2
        https://thisismagma.com/assets/home/lore/seq/58.webp?2
        https://thisismagma.com/assets/home/lore/seq/59.webp?2
        https://thisismagma.com/assets/home/lore/seq/60.webp?2
        https://thisismagma.com/assets/home/lore/seq/61.webp?2
        https://thisismagma.com/assets/home/lore/seq/62.webp?2
        https://thisismagma.com/assets/home/lore/seq/63.webp?2
        https://thisismagma.com/assets/home/lore/seq/64.webp?2
        https://thisismagma.com/assets/home/lore/seq/65.webp?2
        https://thisismagma.com/assets/home/lore/seq/66.webp?2
        https://thisismagma.com/assets/home/lore/seq/67.webp?2
        https://thisismagma.com/assets/home/lore/seq/68.webp?2
        https://thisismagma.com/assets/home/lore/seq/69.webp?2
        https://thisismagma.com/assets/home/lore/seq/70.webp?2
        https://thisismagma.com/assets/home/lore/seq/71.webp?2
        https://thisismagma.com/assets/home/lore/seq/72.webp?2
        https://thisismagma.com/assets/home/lore/seq/73.webp?2
        https://thisismagma.com/assets/home/lore/seq/74.webp?2
        https://thisismagma.com/assets/home/lore/seq/75.webp?2
        https://thisismagma.com/assets/home/lore/seq/76.webp?2
        https://thisismagma.com/assets/home/lore/seq/77.webp?2
        https://thisismagma.com/assets/home/lore/seq/78.webp?2
        https://thisismagma.com/assets/home/lore/seq/79.webp?2
        https://thisismagma.com/assets/home/lore/seq/80.webp?2
        https://thisismagma.com/assets/home/lore/seq/81.webp?2
        https://thisismagma.com/assets/home/lore/seq/82.webp?2
        https://thisismagma.com/assets/home/lore/seq/83.webp?2
        https://thisismagma.com/assets/home/lore/seq/84.webp?2
        https://thisismagma.com/assets/home/lore/seq/85.webp?2
        https://thisismagma.com/assets/home/lore/seq/86.webp?2
        https://thisismagma.com/assets/home/lore/seq/87.webp?2
        https://thisismagma.com/assets/home/lore/seq/88.webp?2
        https://thisismagma.com/assets/home/lore/seq/89.webp?2
        https://thisismagma.com/assets/home/lore/seq/90.webp?2
        https://thisismagma.com/assets/home/lore/seq/91.webp?2
        https://thisismagma.com/assets/home/lore/seq/92.webp?2
        https://thisismagma.com/assets/home/lore/seq/93.webp?2
        https://thisismagma.com/assets/home/lore/seq/94.webp?2
        https://thisismagma.com/assets/home/lore/seq/95.webp?2
        https://thisismagma.com/assets/home/lore/seq/96.webp?2
        https://thisismagma.com/assets/home/lore/seq/97.webp?2
        https://thisismagma.com/assets/home/lore/seq/98.webp?2
        https://thisismagma.com/assets/home/lore/seq/99.webp?2
        https://thisismagma.com/assets/home/lore/seq/100.webp?2
        https://thisismagma.com/assets/home/lore/seq/101.webp?2
        https://thisismagma.com/assets/home/lore/seq/102.webp?2
        https://thisismagma.com/assets/home/lore/seq/103.webp?2
        https://thisismagma.com/assets/home/lore/seq/104.webp?2
        https://thisismagma.com/assets/home/lore/seq/105.webp?2
        https://thisismagma.com/assets/home/lore/seq/106.webp?2
        https://thisismagma.com/assets/home/lore/seq/107.webp?2
        https://thisismagma.com/assets/home/lore/seq/108.webp?2
        https://thisismagma.com/assets/home/lore/seq/109.webp?2
        https://thisismagma.com/assets/home/lore/seq/110.webp?2
        https://thisismagma.com/assets/home/lore/seq/111.webp?2
        https://thisismagma.com/assets/home/lore/seq/112.webp?2
        https://thisismagma.com/assets/home/lore/seq/113.webp?2
        https://thisismagma.com/assets/home/lore/seq/114.webp?2
        https://thisismagma.com/assets/home/lore/seq/115.webp?2
        https://thisismagma.com/assets/home/lore/seq/116.webp?2
        https://thisismagma.com/assets/home/lore/seq/117.webp?2
        https://thisismagma.com/assets/home/lore/seq/118.webp?2
        https://thisismagma.com/assets/home/lore/seq/119.webp?2
        https://thisismagma.com/assets/home/lore/seq/120.webp?2
        https://thisismagma.com/assets/home/lore/seq/121.webp?2
        https://thisismagma.com/assets/home/lore/seq/122.webp?2
        https://thisismagma.com/assets/home/lore/seq/123.webp?2
        https://thisismagma.com/assets/home/lore/seq/124.webp?2
        https://thisismagma.com/assets/home/lore/seq/125.webp?2
        https://thisismagma.com/assets/home/lore/seq/126.webp?2
        https://thisismagma.com/assets/home/lore/seq/127.webp?2
        https://thisismagma.com/assets/home/lore/seq/128.webp?2
        https://thisismagma.com/assets/home/lore/seq/129.webp?2
        https://thisismagma.com/assets/home/lore/seq/130.webp?2
        https://thisismagma.com/assets/home/lore/seq/131.webp?2
        https://thisismagma.com/assets/home/lore/seq/132.webp?2
        https://thisismagma.com/assets/home/lore/seq/133.webp?2
        https://thisismagma.com/assets/home/lore/seq/134.webp?2
        https://thisismagma.com/assets/home/lore/seq/135.webp?2
        https://thisismagma.com/assets/home/lore/seq/136.webp?2
  `;
    return data.split("\n")[index];
  }
  const frameCount = 136;
  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `#sec7`,
      start: `top top`,
      end: `250% top`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#sec7",
    pin: true,
    start: `top top`,
    end: `250% top`,
  });
}
canvasMagmaIndex();

let magmaIndexCircles = () => {
  let CircleMain = document.getElementById("index-circle");
  gsap.to(CircleMain, {
    scrollTrigger: {
      trigger: CircleMain,
      start: "top 10%",
      end: "bottom top",
      scrub: 2,
    },
    scale: 3,
    // backgroundColor: "#133edbd0"
  });

  let CircleInner = document.getElementById("index-circle-inner");
  gsap.to(CircleInner, {
    scrollTrigger: {
      trigger: CircleInner,
      start: "top 10%",
      end: "bottom top",
      scrub: 2,
    },
    scale: 1.2,
    backgroundColor: "#133edbd0",
  });
};

function ImageTrackBt() {
  magmaIndexCircles();
  gsap.to(".image-track", {
    xPercent: -100,
    ease: "none",
    duration: 20,
    repeat: -1,
  });
}
ImageTrackBt();
