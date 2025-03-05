const words = [
    "SUPERMASSIVEBLACKHOLE",
    "NIHILITY",
    "SPACE",
    "SINGULARITY",
    "MILLERSPLANET",
    "IX",
    "WORMHOLE",
    "SPINNINGBANANA",
    "ACCRETIONDISK",
    "GRAVITY"
]

var container = document.getElementById("container");
var audio = document.getElementById("audio");
audio.volume = 0.2;

var speed = 10000;
var particles = 0.5;
var slider = document.getElementById("particleSlider");
var isMobile = false;
if (/Mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = true;
    particles = -0.2;
    slider.max = 20;
    slider.min = -60;
    slider.value = -20;
}

var button = document.getElementById("startButton");
button.onclick = function () {
    button.remove();
    container.animate(
        [{ backgroundColor: "#ffffff" }, { backgroundColor: "#000000" }],
        { duration: 500, fill: "forwards" }
    );

    var cover = document.getElementById("cover")
    cover.style.visibility = "visible";
    cover.animate(
        [{ backgroundColor: "#ffffff" }, { backgroundColor: "#000000" }],
        { duration: 500, fill: "forwards" }
    );

    var hole = document.getElementById("hole")
    hole.style.visibility = "visible";
    hole.animate(
        [{ backgroundColor: "#ffffff" }, { backgroundColor: "#000000" }],
        { duration: 500, fill: "forwards" }
    );

    document.getElementById("slider").style.visibility = "visible";

    create(false);

    audio.play();
}

function create(glow) {
    // ACCRETION DISC
    for (let i = 0; i < 200 + 300 * particles; i++) {
        var outer = document.createElement("div");
        outer.className = "outer";

        var rotate = document.createElement("div");
        rotate.className = "rotate";

        var offset = Math.random() * -6 + 3.5;
        const orbitAnim = [
            {
                transform: "scale(1) rotateZ(450deg) translateY(" + offset + "vw)"
            },
            {
                transform: "scale(1) rotateZ(90deg) translateY(" + offset + "vw)",
            },
        ]
        var del = Math.random() * -speed;
        const timing = {
            duration: speed,
            delay: del,
            iterations: Infinity,
        };

        rotate.animate(orbitAnim, timing);

        var word = words[Math.floor(Math.random() * words.length)];
        var char = word.charAt(Math.random() * word.length);
        var particle = document.createElement("p");
        particle.textContent = char;
        if (glow) {
            particle.style.filter = "drop-shadow(1px 2px 4px #0fa)"
        }

        var particleSpin;
        var random = Math.random() < 0.5;
        if (random) {
            particleSpin = [
                { transform: "rotateZ(-360deg)" },
                { transform: "rotateZ(360deg)" },
            ]
        } else {
            particleSpin = [
                { transform: "rotateZ(360deg)" },
                { transform: "rotateZ(-360deg)" },
            ]
        }
        var particleTiming = {
            duration: speed,
            delay: del,
            iterations: Infinity,
        }

        outer.style = "animation: zCircle " + speed / 1000 + "s infinite;" + "animation-delay: " + del / 1000 + "s;";

        particle.animate(particleSpin, particleTiming);

        rotate.appendChild(particle);
        outer.appendChild(rotate);

        container.appendChild(outer);
    }

    // WARPED ACCRETION DISK: TOP
    for (let i = 0; i < 100 + 100 * particles; i++) {
        var topvert = document.createElement("div");
        topvert.className = "topvert";

        var toprotate = document.createElement("div");
        toprotate.className = "toprotate";

        var offset = Math.random() * -3 + 1.7;
        const orbitAnim = [
            { transform: "rotateZ(450deg) translateY(-5vw) translateY(" + offset + "vw)" },
            { transform: "rotateZ(445deg) translateY(-1vw) translateY(" + offset + "vw)", offset: 0.2 },
            { transform: "rotateZ(378deg) translateY(0vw) translateY(" + offset + "vw)", offset: 0.4 },
            { transform: "rotateZ(342deg) translateY(0vw) translateY(" + offset + "vw)", offset: 0.6 },
            { transform: "rotateZ(275deg) translateY(-1vw) translateY(" + offset + "vw)", offset: 0.8 },
            { transform: "rotateZ(270deg) translateY(-5vw) translateY(" + offset + "vw)" }
        ]
        var del = Math.random() * -speed;
        const timing = {
            duration: speed,
            delay: del,
            iterations: Infinity,
        };

        toprotate.animate(orbitAnim, timing);

        var word = words[Math.floor(Math.random() * words.length)];
        var char = word.charAt(Math.random() * word.length);
        var particle = document.createElement("p");
        particle.textContent = char;
        if (glow) {
            particle.style.filter = "drop-shadow(1px 2px 4px #0fa)"
        }

        var particleSpin = [
            { transform: "rotateZ(270deg) scaleX(10) scaleY(0.1)" },
            { transform: "rotateZ(275deg) scaleX(5) scaleY(0.5)", offset: 0.2 },
            { transform: "rotateZ(342deg) scaleX(1) scaleY(1)", offset: 0.4 },
            { transform: "rotateZ(378deg) scaleX(1) scaleY(1)", offset: 0.6 },
            { transform: "rotateZ(445deg) scaleX(5) scaleY(0.5)", offset: 0.8 },
            { transform: "rotateZ(450deg) scaleX(10) scaleY(0.1)" }
        ]
        var particleTiming = {
            duration: speed,
            delay: del,
            iterations: Infinity,
        }

        particle.animate(particleSpin, particleTiming);

        toprotate.appendChild(particle);
        topvert.appendChild(toprotate);

        container.appendChild(topvert);
    }

    // WARPED ACCRETION DISK: BOTTOM
    for (let i = 0; i < 50 + 50 * particles; i++) {
        var botvert = document.createElement("div");
        botvert.className = "botvert";

        var botrotate = document.createElement("div");
        botrotate.className = "botrotate";

        var offset = Math.random() * -1.5;
        const orbitAnim = [
            { transform: "rotateZ(90deg) translateY(" + offset + "vw)" },
            { transform: "rotateZ(270deg) translateY(" + offset + "vw)" }
        ]
        var del = Math.random() * -speed;
        const timing = {
            duration: speed,
            delay: del,
            iterations: Infinity,
        };

        botrotate.animate(orbitAnim, timing);

        var word = words[Math.floor(Math.random() * words.length)];
        var char = word.charAt(Math.random() * word.length);
        var particle = document.createElement("p");
        particle.textContent = char;
        if (glow) {
            particle.style.filter = "drop-shadow(1px 2px 4px #0fa)"
        }

        var particleSpin = [
            { transform: "rotateZ(270deg) rotate(180deg) scale(1.5)" },
            { transform: "rotateZ(90deg) rotate(180deg) scale(1.5)" }
        ]
        var particleTiming = {
            duration: speed,
            delay: del,
            iterations: Infinity,
        }

        particle.animate(particleSpin, particleTiming);

        botrotate.appendChild(particle);
        botvert.appendChild(botrotate);

        container.appendChild(botvert);
    }
}

var glowCheckbox = document.getElementById("glowCheckbox");


slider.oninput = function () {
    particles = this.value / 100;
    document.querySelectorAll('.outer').forEach(e => e.remove());
    document.querySelectorAll('.topvert').forEach(e => e.remove());
    document.querySelectorAll('.botvert').forEach(e => e.remove());
    create(glowCheckbox.checked);
    //console.log(particles);
}

glowCheckbox.onclick = function () {
    document.querySelectorAll('.outer').forEach(e => e.remove());
    document.querySelectorAll('.topvert').forEach(e => e.remove());
    document.querySelectorAll('.botvert').forEach(e => e.remove());
    create(this.checked);
}

var musicCheckbox = document.getElementById("musicCheckbox");
musicCheckbox.onclick = function () {
    if (this.checked) {
        audio.play();
    } else {
        audio.pause();
    }
}