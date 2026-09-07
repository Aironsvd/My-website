/* =========================================================
   🌌 A GIFT HIDDEN AMONG THE STARS
   Chapter 1 + Chapter 2
   Complete JavaScript
   ========================================================= */


/* =========================================================
   PAGE ELEMENTS
   ========================================================= */

const passwordInput = document.getElementById("password");
const unlockButton = document.getElementById("unlockButton");
const errorMessage = document.getElementById("errorMessage");
const starsContainer = document.getElementById("stars");
const flowersContainer = document.getElementById("flowers");
const loginCard = document.querySelector(".login-card");


/* =========================================================
   SECRET PASSWORD
   ========================================================= */

const secretPassword = "Paglu18jan";


/* =========================================================
   CREATE STARS
   ========================================================= */

function createStars() {

    if (!starsContainer) return;

    starsContainer.style.backgroundImage = "none";

    for (let i = 0; i < 85; i++) {

        const star = document.createElement("span");

        const size = Math.random() * 3 + 1;

        star.style.position = "absolute";
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        star.style.borderRadius = "50%";

        const colors = [
            "rgba(255,255,255,0.95)",
            "rgba(190,220,255,0.9)",
            "rgba(255,210,235,0.85)"
        ];

        star.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        star.style.boxShadow =
            "0 0 8px rgba(255,255,255,0.45)";

        const opacity =
            Math.random() * 0.7 + 0.25;

        star.style.opacity = opacity;

        starsContainer.appendChild(star);

        const duration =
            Math.random() * 3000 + 2500;

        const delay =
            Math.random() * -4000;

        star.animate(
            [
                {
                    opacity: opacity,
                    transform: "scale(0.8)"
                },
                {
                    opacity: 1,
                    transform: "scale(1.5)"
                },
                {
                    opacity: opacity,
                    transform: "scale(0.8)"
                }
            ],
            {
                duration: duration,
                delay: delay,
                iterations: Infinity,
                easing: "ease-in-out"
            }
        );
    }
}


/* =========================================================
   CREATE FLOATING FLOWERS / PETALS
   ========================================================= */

function createPetals() {

    if (!flowersContainer) return;

    const petals = ["🌸", "✿", "❀"];

    for (let i = 0; i < 7; i++) {

        const petal = document.createElement("span");

        petal.textContent =
            petals[Math.floor(Math.random() * petals.length)];

        petal.style.position = "absolute";

        petal.style.left =
            `${Math.random() * 100}%`;

        petal.style.top =
            `${Math.random() * 100}%`;

        petal.style.fontSize =
            `${Math.random() * 13 + 14}px`;

        petal.style.opacity =
            Math.random() * 0.35 + 0.2;

        petal.style.pointerEvents = "none";

        petal.style.filter =
            "drop-shadow(0 0 7px rgba(255,183,213,0.35))";

        flowersContainer.appendChild(petal);

        const xMovement =
            Math.random() * 40 - 20;

        const yMovement =
            -(Math.random() * 70 + 30);

        const rotation =
            Math.random() * 80 - 40;

        const duration =
            Math.random() * 5000 + 7000;

        petal.animate(
            [
                {
                    transform:
                        "translate(0, 0) rotate(0deg)"
                },
                {
                    transform:
                        `translate(${xMovement}px, ${yMovement / 2}px)
                         rotate(${rotation / 2}deg)`
                },
                {
                    transform:
                        `translate(${xMovement * 2}px, ${yMovement}px)
                         rotate(${rotation}deg)`
                }
            ],
            {
                duration: duration,
                iterations: Infinity,
                direction: "alternate",
                easing: "ease-in-out"
            }
        );
    }
}


/* =========================================================
   WRONG PASSWORD
   ========================================================= */

function showError() {

    if (!passwordInput || !loginCard) return;

    if (errorMessage) {
        errorMessage.style.display = "block";
    }

    loginCard.animate(
        [
            {
                transform: "translateX(0)"
            },
            {
                transform: "translateX(-8px)"
            },
            {
                transform: "translateX(8px)"
            },
            {
                transform: "translateX(-5px)"
            },
            {
                transform: "translateX(0)"
            }
        ],
        {
            duration: 420,
            easing: "ease-in-out"
        }
    );

    passwordInput.style.borderColor =
        "rgba(255,120,160,0.75)";

    passwordInput.style.boxShadow =
        "0 0 20px rgba(255,100,150,0.22)";

    setTimeout(() => {

        passwordInput.style.borderColor = "";
        passwordInput.style.boxShadow = "";

    }, 1400);

    passwordInput.value = "";

    passwordInput.focus();
}


/* =========================================================
   WAIT HELPER
   ========================================================= */

function wait(milliseconds) {

    return new Promise((resolve) => {

        setTimeout(resolve, milliseconds);

    });
}


/* =========================================================
   TYPEWRITER EFFECT
   ========================================================= */

function typeText(element, text, speed = 45) {

    return new Promise((resolve) => {

        element.textContent = "";

        let index = 0;

        const typing = setInterval(() => {

            element.textContent +=
                text.charAt(index);

            index++;

            if (index >= text.length) {

                clearInterval(typing);

                resolve();
            }

        }, speed);

    });
}


/* =========================================================
   UNLOCK THE STARS
   ========================================================= */

function unlockStars() {

    if (!passwordInput || !unlockButton || !loginCard) {
        return;
    }

    if (errorMessage) {
        errorMessage.style.display = "none";
    }

    unlockButton.disabled = true;
    passwordInput.disabled = true;

    unlockButton.textContent =
        "✨ The Stars Recognize You... ✨";

    const stars =
        starsContainer
            ? starsContainer.querySelectorAll("span")
            : [];

    stars.forEach((star, index) => {

        setTimeout(() => {

            star.animate(
                [
                    {
                        transform: "scale(1)"
                    },
                    {
                        transform: "scale(3)"
                    },
                    {
                        transform: "scale(1.4)"
                    }
                ],
                {
                    duration: 1100,
                    easing: "ease-out",
                    fill: "forwards"
                }
            );

        }, index * 12);

    });


    /* Move into the story */

    setTimeout(() => {

        loginCard.innerHTML = `

            <div class="accepted-message">

                <div class="accepted-icon">
                    ✨
                </div>

                <h1 id="storyText">
                    Password Accepted...
                </h1>

            </div>

        `;

        typeStory();

    }, 1300);
}


/* =========================================================
   CHAPTER 1 STORY
   ========================================================= */

async function typeStory() {

    const storyText =
        document.getElementById("storyText");

    if (!storyText) return;


    await typeText(
        storyText,
        "Password Accepted...",
        55
    );

    await wait(900);


    await typeText(
        storyText,
        "Hello, Paglu...",
        75
    );

    await wait(1100);


    await typeText(
        storyText,
        "I've been waiting for you.",
        55
    );

    await wait(1300);


    await typeText(
        storyText,
        "Your birthday story is ready...",
        55
    );

    await wait(1700);


    storyText.style.fontSize = "1.35rem";


    await typeText(
        storyText,
        "✨ The journey is about to begin... ✨",
        45
    );


    /* Give the final message a moment */

    await wait(1800);


    /* NOW ENTER CHAPTER 2 */

    showGiftScene();
}


/* =========================================================
   CHAPTER 2 STYLE
   Everything below is automatically created by JavaScript.
   You do NOT need to change style.css.
   ========================================================= */

function createGiftStyles() {

    if (document.getElementById("giftChapterStyles")) {
        return;
    }

    const style = document.createElement("style");

    style.id = "giftChapterStyles";

    style.textContent = `

        .paglu-gift-scene {

            position: fixed;

            inset: 0;

            z-index: 999;

            display: flex;

            flex-direction: column;

            justify-content: center;

            align-items: center;

            text-align: center;

            overflow: hidden;

            opacity: 0;

            pointer-events: none;

            background:
                radial-gradient(
                    circle at 50% 48%,
                    rgba(255,183,213,0.15),
                    transparent 35%
                );

            transition:
                opacity 1.5s ease;
        }


        .paglu-gift-scene.visible {

            opacity: 1;

            pointer-events: auto;
        }


        .paglu-gift-message {

            position: relative;

            z-index: 5;

            max-width: 90%;

            padding: 0 20px;

            margin-bottom: 30px;

            color: #fff8fc;

            font-family:
                Georgia,
                "Times New Roman",
                serif;

            font-size:
                clamp(1.3rem, 6vw, 2rem);

            line-height: 1.45;

            text-shadow:
                0 0 10px rgba(255,255,255,0.5),
                0 0 25px rgba(255,183,213,0.45);

            animation:
                pagluRomanticMessage
                3s ease-in-out infinite;
        }


        .paglu-gift-area {

            position: relative;

            width: 190px;

            height: 190px;

            display: flex;

            justify-content: center;

            align-items: center;
        }


        .paglu-gift-glow {

            position: absolute;

            width: 165px;

            height: 165px;

            border-radius: 50%;

            background:
                radial-gradient(
                    circle,
                    rgba(255,183,213,0.38),
                    rgba(210,160,255,0.16) 45%,
                    transparent 72%
                );

            filter: blur(16px);

            animation:
                pagluGiftGlow
                3s ease-in-out infinite;
        }


        .paglu-gift-box {

            position: relative;

            width: 112px;

            height: 88px;

            margin-top: 32px;

            border-radius: 8px;

            background:
                linear-gradient(
                    145deg,
                    #ffb7d5,
                    #ed8fba
                );

            box-shadow:
                0 15px 35px rgba(0,0,0,0.35),
                0 0 28px rgba(255,183,213,0.35);

            cursor: pointer;

            animation:
                pagluGiftFloat
                3s ease-in-out infinite;

            transition:
                transform 0.4s ease;
        }


        .paglu-gift-box:active {

            transform:
                scale(0.94);
        }


        .paglu-gift-lid {

            position: absolute;

            left: -7px;

            top: -17px;

            width: 126px;

            height: 26px;

            border-radius: 7px;

            background:
                linear-gradient(
                    145deg,
                    #ffd0e3,
                    #f29bc3
                );

            box-shadow:
                0 5px 15px rgba(0,0,0,0.18);

            transform-origin:
                center bottom;

            transition:
                transform 1s
                cubic-bezier(.2,.8,.2,1);
        }


        .paglu-ribbon-vertical {

            position: absolute;

            left: 50%;

            top: 0;

            width: 18px;

            height: 100%;

            transform:
                translateX(-50%);

            background:
                rgba(255,244,249,0.86);
        }


        .paglu-ribbon-horizontal {

            position: absolute;

            left: -7px;

            top: 29px;

            width: 126px;

            height: 17px;

            background:
                rgba(255,244,249,0.86);
        }


        .paglu-bow {

            position: absolute;

            left: 50%;

            top: -30px;

            width: 25px;

            height: 25px;

            transform:
                translateX(-50%)
                rotate(45deg);

            border-radius: 6px;

            background:
                #fff0f7;

            box-shadow:
                0 0 14px rgba(255,255,255,0.45);

            z-index: 4;
        }


        .paglu-bow::before,
        .paglu-bow::after {

            content: "";

            position: absolute;

            width: 30px;

            height: 20px;

            border-radius: 50%;

            background:
                #fff0f7;
        }


        .paglu-bow::before {

            left: -21px;

            top: 7px;

            transform:
                rotate(-35deg);
        }


        .paglu-bow::after {

            right: -21px;

            top: 7px;

            transform:
                rotate(35deg);
        }


        .paglu-tap-text {

            position: relative;

            z-index: 5;

            margin-top: 30px;

            padding: 13px 24px;

            border-radius: 30px;

            border:
                1px solid
                rgba(255,255,255,0.16);

            background:
                rgba(255,255,255,0.08);

            color:
                rgba(255,255,255,0.92);

            font-family:
                Arial,
                sans-serif;

            font-size: 0.92rem;

            backdrop-filter:
                blur(10px);

            -webkit-backdrop-filter:
                blur(10px);

            animation:
                pagluTapPulse
                2.5s ease-in-out infinite;

            cursor: pointer;
        }


        .paglu-gift-scene.opening
        .paglu-gift-lid {

            transform:
                translateY(-30px)
                rotate(-12deg);
        }


        .paglu-gift-scene.opening
        .paglu-gift-box {

            animation:
                pagluGiftOpen
                1.2s ease forwards;
        }


        .paglu-gift-scene.opening
        .paglu-tap-text {

            opacity: 0;

            transition:
                opacity 0.4s ease;
        }


        .paglu-gift-light {

            position: absolute;

            left: 50%;

            top: 50%;

            width: 10px;

            height: 10px;

            border-radius: 50%;

            background: white;

            box-shadow:
                0 0 25px 10px rgba(255,255,255,0.85),
                0 0 70px 30px rgba(255,183,213,0.6),
                0 0 120px 55px rgba(190,150,255,0.4);

            transform:
                translate(-50%, -50%)
                scale(0);

            opacity: 0;

            pointer-events: none;
        }


        .paglu-gift-scene.opening
        .paglu-gift-light {

            animation:
                pagluGiftLight
                1.7s ease-out forwards;
        }


        @keyframes pagluGiftGlow {

            0%,
            100% {

                transform:
                    scale(0.92);

                opacity:
                    0.65;
            }

            50% {

                transform:
                    scale(1.08);

                opacity:
                    1;
            }
        }


        @keyframes pagluGiftFloat {

            0%,
            100% {

                transform:
                    translateY(0)
                    rotate(0deg);
            }

            50% {

                transform:
                    translateY(-9px)
                    rotate(1deg);
            }
        }


        @keyframes pagluRomanticMessage {

            0%,
            100% {

                opacity:
                    0.88;
            }

            50% {

                opacity:
                    1;
            }
        }


        @keyframes pagluTapPulse {

            0%,
            100% {

                transform:
                    scale(1);

                box-shadow:
                    0 0 0
                    rgba(255,183,213,0);
            }

            50% {

                transform:
                    scale(1.035);

                box-shadow:
                    0 0 22px
                    rgba(255,183,213,0.15);
            }
        }


        @keyframes pagluGiftOpen {

            0% {

                transform:
                    translateY(0)
                    scale(1);
            }

            45% {

                transform:
                    translateY(-8px)
                    scale(1.08);
            }

            100% {

                transform:
                    translateY(0)
                    scale(1.02);
            }
        }


        @keyframes pagluGiftLight {

            0% {

                transform:
                    translate(-50%, -50%)
                    scale(0);

                opacity:
                    0;
            }

            35% {

                transform:
                    translate(-50%, -50%)
                    scale(5);

                opacity:
                    0.9;
            }

            100% {

                transform:
                    translate(-50%, -50%)
                    scale(25);

                opacity:
                    0;
            }
        }


        @media (max-width: 480px) {

            .paglu-gift-message {

                font-size:
                    1.3rem;

                margin-bottom:
                    25px;
            }

            .paglu-gift-area {

                transform:
                    scale(0.94);
            }

            .paglu-tap-text {

                font-size:
                    0.88rem;
            }
        }

    `;

    document.head.appendChild(style);
}


/* =========================================================
   CHAPTER 2 — SHOW GIFT
   ========================================================= */

function showGiftScene() {

    createGiftStyles();


    const giftScene =
        document.createElement("div");

    giftScene.className =
        "paglu-gift-scene";


    giftScene.innerHTML = `

<div class="paglu-gift-message">

A little something for you... 💗

</div>


<div class="paglu-gift-area">

<div class="paglu-gift-glow"></div>

<div class="paglu-gift-box">

<div class="paglu-gift-lid"></div>

<div class="paglu-ribbon-vertical"></div>

<div class="paglu-ribbon-horizontal"></div>

<div class="paglu-bow"></div>

</div>

</div>


<div class="paglu-tap-text">

🎁 Tap the gift to open it

</div>


<div class="paglu-gift-light"></div>

`;


document.body.appendChild(giftScene);


/* Let the browser render first */

requestAnimationFrame(() => {

giftScene.classList.add("visible");

});


const giftBox =
giftScene.querySelector(
".paglu-gift-box"
);


const tapText =
giftScene.querySelector(
".paglu-tap-text"
);


giftBox.addEventListener(
"click",
() => {

openGift(giftScene);

}
);


tapText.addEventListener(
"click",
() => {

openGift(giftScene);

}
);
}


/* =========================================================
OPEN THE GIFT
========================================================= */

function openGift(giftScene) {

if (
giftScene.classList.contains("opening")
) {
return;
}


giftScene.classList.add("opening");


setTimeout(() => {

const message =
giftScene.querySelector(
".paglu-gift-message"
);


message.textContent =
"✨ Something beautiful is waiting... ✨";


message.style.opacity = "1";

message.style.transform =
"translateY(0)";


}, 1500);
}


/* =========================================================
CHECK PASSWORD
========================================================= */

function checkPassword() {

if (!passwordInput) return;


const enteredPassword =
passwordInput.value.trim();


if (
enteredPassword ===
secretPassword
) {

unlockStars();

} else {

showError();

}
}


/* =========================================================
BUTTON
========================================================= */

if (unlockButton) {

unlockButton.addEventListener(
"click",
checkPassword
);
}


/* =========================================================
ENTER KEY
========================================================= */

if (passwordInput) {

passwordInput.addEventListener(
"keydown",
function(event) {

if (event.key === "Enter") {

checkPassword();

}

}
);
}


/* =========================================================
START EVERYTHING
========================================================= */

createStars();

createPetals();
