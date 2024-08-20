var secs = 100 * 15;
var particle_speed = 1;
var speedInterval; // Declare the interval variable

function increment_speed() {
  // Start the interval only if it's not already running
  if (!speedInterval) {
    speedInterval = setInterval(function () {
      particle_speed += 0.1;

      console.log("Particle Speed:")
      console.log(particle_speed);

      window.pJSDom[0].pJS.particles.move.speed = parseFloat(particle_speed.toFixed(2));
    }, secs);
  }
}

// Stop the interval when audio is paused or ended
function stop_speed_increment() {
  clearInterval(speedInterval);
  speedInterval = null; // Reset the interval variable
}

// Start the speed increase when audio is played
player.on('play', () => {
  increment_speed();
});

// Stop the speed increase when audio is paused or ends
player.on('pause', () => {
  stop_speed_increment();
});

player.on('ended', () => {
  stop_speed_increment();
});

// Particle.js initialization
document.addEventListener(
  "DOMContentLoaded",
  function () {
    new SweetScroll({});
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 160,
          density: {
            enable: !0,
            value_area: 500
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 1,
          random: !0,
          anim: {
            enable: !0,
            speed: 1,
            opacity_min: 0,
            sync: !1
          }
        },
        size: {
          value: 3,
          random: !0,
          anim: {
            enable: !1,
            speed: 4,
            size_min: .3,
            sync: !1
          }
        },
        line_linked: {
          enable: !1,
          distance: 150,
          color: "#ffffff",
          opacity: .4,
          width: 1
        },
        move: {
          enable: !0,
          speed: particle_speed,
          direction: "left",
          random: !0,
          straight: !1,
          out_mode: "out",
          bounce: !1,
          attract: {
            enable: !1,
            rotateX: 600,
            rotateY: 600
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: !0,
            mode: "repulse"
          },
          onclick: {
            enable: !1,
            mode: "repulse"
          },
          resize: !0
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: { opacity: 1 }
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3
          },
          repulse: {
            distance: 80,
            duration: .2
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: !0
    });
  },
  !1
);
