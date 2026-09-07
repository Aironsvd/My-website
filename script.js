/* =========================================
   A GIFT HIDDEN AMONG THE STARS
   Chapter 1 — The Secret Entrance
   Interactive Logic
   ========================================= */


/* ---------- Get Page Elements ---------- */

const passwordInput = document.getElementById("password");
const unlockButton = document.getElementById("unlockButton");
const errorMessage = document.getElementById("errorMessage");
const starsContainer = document.getElementById("stars");
const flowersContainer = document.getElementById("flowers");
const loginCard = document.querySelector(".login-card");


/* ---------- Password ---------- */

const secretPassword = "Paglu18jan";


/* =========================================
   CREATE STARS
   ========================================= */

function createStars() {

    /* Clear the original CSS star background */

    starsContainer.style.backgroundImage = "none";


    /* Create individual stars */

    for (let i = 0; i < 85; i++) {

        const star = document.createElement("span");

        const size = Math.random() * 3 + 1;

        star.style.position = "absolute";
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        star.style.borderRadius = "50%";

        /* Slight colour variation */

        const colors = [
            "rgba(255,255,255,0.95)",
            "rgba(190,220,255,0.9)",
            "rgba(255,210,235,0.85)"
        ];

        star.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        star.style.boxShadow =
            "0 0 8px rgba(255,255,255,0.45)";

        star.style.opacity =
            Math.random() * 0.7 + 0.25;

        starsContainer.appendChild(star);


        /* Every star twinkles differently */

        const duration =
            Math.random() * 3000 + 2500;

        const delay =
            Math.random() * -4000;

        star.animate(
            [
                {
                    opacity: star.style.opacity,
                    transform: "scale(0.8)"
                },
                {
                    opacity: 1,
                    transform: "scale(1.5)"
                },
                {
                    opacity: star.style.opacity,
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


/* =========================================
   CREATE FLOATING PETALS
   ========================================= */

function createPetals() {

    /* We create a few petals at a time.
       More will be added gradually later. */

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


        /* Gentle floating movement */

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
                        "translate(0, 0) rotate(0deg)",

                    opacity:
                        petal.style.opacity
                },

                {
                    transform:
                        `translate(${xMovement}px,
                        ${yMovement / 2}px)
                        rotate(${rotation / 2}deg)`,

                    opacity: 0.65
                },

                {
                    transform:
                        `translate(${xMovement * 2}px,
                        ${yMovement}px)
                        rotate(${rotation}deg)`,

                    opacity:
                        petal.style.opacity
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


/* =========================================
   WRONG PASSWORD
   ========================================= */

function showError() {

    errorMessage.style.display = "block";


    /* Shake the card gently */

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


    /* Soft red/pink glow */

    passwordInput.style.borderColor =
        "rgba(255, 120, 160, 0.75)";

    passwordInput.style.boxShadow =
        "0 0 20px rgba(255, 100, 150, 0.22)";


    /* Return field to normal after a moment */

    setTimeout(() => {

        passwordInput.style.borderColor = "";
        passwordInput.style.boxShadow = "";

    }, 1400);


    /* Clear the wrong password */

    passwordInput.value = "";

    passwordInput.focus();
}


/* =========================================
   CORRECT PASSWORD
   ========================================= */

function unlockStars() {

    /* Hide any previous error */

    errorMessage.style.display = "none";


    /* Prevent multiple clicks */

    unlockButton.disabled = true;
    passwordInput.disabled = true;


    /* Change button text */

    unlockButton.textContent =
        "✨ The Stars Recognize You... ✨";


    /* Make stars glow brighter */

    const stars =
        starsContainer.querySelectorAll("span");


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


    /* After a short magical pause,
       begin the personal greeting */

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


/* =========================================
   TYPE THE PERSONAL STORY
   ========================================= */

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


async function typeStory() {

    const storyText =
        document.getElementById("storyText");


    /* Message 1 */

    await typeText(
        storyText,
        "Password Accepted...",
        55
    );


    await wait(900);


    /* Message 2 */

    await typeText(
        storyText,
        "Hello, Paglu...",
        75
    );


    await wait(1100);


    /* Message 3 */

    await typeText(
        storyText,
        "I've been waiting for you.",
        55
    );


    await wait(1300);


    /* Message 4 */

    await typeText(
        storyText,
        "Your birthday story is ready...",
        55
    );


    await wait(1700);


    /*
       Temporary ending for Chapter 1.

       Later this is where we will transition
       directly into Chapter 2 — The Gift Awakens.
    */

    storyText.style.fontSize = "1.35rem";

    await typeText(
        storyText,
        "✨ The journey is about to begin... ✨",
        45
    );
}


/* ---------- Small Wait Helper ---------- */

function wait(milliseconds) {

    return new Promise((resolve) => {

        setTimeout(resolve, milliseconds);

    });
}


/* =========================================
   CHECK PASSWORD
   ========================================= */

function checkPassword() {

    const enteredPassword =
        passwordInput.value.trim();


    if (enteredPassword === secretPassword) {

        unlockStars();

    } else {

        showError();

    }
}


/* ---------- Button Click ---------- */

unlockButton.addEventListener(
    "click",
    checkPassword
);


/* ---------- Enter Key ---------- */

passwordInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            checkPassword();

        }

    }
);

/* =========================================
   START THE MAGIC
   ========================================= */

createStars();

createPetals();
    await wait(1800);

    showGiftScene();
