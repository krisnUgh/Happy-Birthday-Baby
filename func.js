
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // 1. ALL PERSONALIZED MESSAGES
    // =====================================

    const messages = {

        // BILLIARDS
        billiards: `
            Just like every perfect shot, I hope you always
            believe in yourself.

            You don't have to get every shot right the first
            time. Life is about learning, adjusting, and trying
            again.

            I'll always be cheering for you, baby. ♥
        `,

        // MOTOR RACING
        racing: `
            Life won't always be a straight track. There will
            be unexpected turns, challenges, and moments when
            you need to slow down.

            But I hope you never lose your passion for chasing
            your dreams. I'm proud of you, always.

            Keep going, my love. 🏁
        `,

        // OUR MOMENTS
        little: `
            It's the little things that I treasure the most.

            The random conversations, the laughs, the simple
            moments, and even the ordinary days.

            I hope we never stop finding happiness in the
            little things we share.

            You make even the simplest moments special. ♥
        `,

        safe: `
            Thank you for being someone I can run to.

            I hope you feel the same comfort and love whenever
            you're with me.

            You deserve a love that feels like home, baby.

            And I hope I can always be a little part of that
            happiness and peace.
        `,

        future: `
            There are so many places we haven't been,
            memories we haven't made, and dreams we haven't
            reached yet.

            I look forward to discovering all those things
            with you, one chapter at a time.

            Here's to more adventures, more memories,
            and more birthdays together. ♥
        `,

        // OPEN WHEN YOU NEED IT
        happy: `
            I hope you know that your happiness makes
            me happy, too.

            Never feel guilty for enjoying life, celebrating
            your achievements, and appreciating how far
            you've come.

            You deserve every beautiful moment.

            I love seeing you smile!
        `,

        sad: `
            Baby, it's okay not to be okay all the time.

            You don't always have to be strong, and you
            don't need to figure everything out in one day.

            Take your time.

            I'll listen, understand, and remind you that
            you're never alone.

            You have someone who loves you through
            every version of yourself. ♥
        `,

        tired: `
            Take a break, my love.

            Even the fastest cars need a pit stop.

            You are allowed to rest without feeling like
            you're falling behind.

            I'm proud of how hard you work, but please
            remember to take care of yourself, too.

            You deserve rest just as much as you deserve
            success. 🏁
        `,

        doubt: `
            I wish you could see yourself through my eyes.

            You are capable of so much more than you think.

            Don't let one bad day make you question your
            entire journey.

            I believe in you, even on days when you struggle
            to believe in yourself.

            You've got this, baby. Always. ♥
        `

    };


    // =====================================
    // 2. ENVELOPE POPUP ELEMENTS
    // =====================================

    const modal = document.getElementById("messageModal");
    const envelope = document.getElementById("envelopeContainer");

    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");

    const closeModal = document.getElementById("closeModal");


    // =====================================
    // 3. OPEN ENVELOPE FUNCTION
    // =====================================

    function openEnvelope(title, message) {

        modalTitle.textContent = title;
        modalText.textContent = message;

        // Restart the envelope animation
        envelope.style.animation = "none";
        void envelope.offsetWidth;
        envelope.style.animation = "";

        modal.classList.add("active");
        document.body.classList.add("modal-open");

    }


    // =====================================
    // 4. CLOSE ENVELOPE FUNCTION
    // =====================================

    function closeEnvelope() {

        modal.classList.remove("active");
        document.body.classList.remove("modal-open");

    }


    // =====================================
    // 5. BILLIARDS AND RACING BUTTONS
    // =====================================

    document.querySelectorAll("[data-message]").forEach(button => {

        button.addEventListener("click", function () {

            const type = this.dataset.message;
            const title = this.dataset.title;

            openEnvelope(title, messages[type]);

        });

    });


    // =====================================
    // 6. OUR MOMENTS BUTTONS
    // =====================================

    document.querySelectorAll("[data-memory]").forEach(button => {

        button.addEventListener("click", function () {

            const type = this.dataset.memory;
            const title = this.dataset.title;

            openEnvelope(title, messages[type]);

        });

    });


    // =====================================
    // 7. OPEN WHEN YOU NEED IT BUTTONS
    // =====================================

    document.querySelectorAll("[data-note]").forEach(button => {

        button.addEventListener("click", function () {

            const type = this.dataset.note;
            const title = this.dataset.title;

            openEnvelope(title, messages[type]);

        });

    });


    // =====================================
    // 8. CLOSE BUTTON
    // =====================================

    closeModal.addEventListener("click", closeEnvelope);


    // =====================================
    // 9. CLOSE WHEN CLICKING OUTSIDE
    // =====================================

    modal.addEventListener("click", function (event) {

        if (event.target === modal) {
            closeEnvelope();
        }

    });


    // =====================================
    // 10. ESCAPE KEY TO CLOSE
    // =====================================

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape" && modal.classList.contains("active")) {
            closeEnvelope();
        }

    });


    // =====================================
    // 11. BIRTHDAY SURPRISE
    // =====================================

    const surpriseButton = document.getElementById("surpriseButton");
    const surpriseReveal = document.getElementById("surpriseReveal");

    surpriseButton.addEventListener("click", function () {

        surpriseReveal.classList.toggle("show");

        if (surpriseReveal.classList.contains("show")) {

            surpriseButton.textContent = "SURPRISE UNLOCKED ♥";

            surpriseReveal.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        } else {

            surpriseButton.textContent = "OPEN YOUR SURPRISE ♥";

        }

    });


    // =====================================
    // 12. NAVIGATION ACTIVE STATE
    // =====================================

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {

        link.addEventListener("click", function () {

            navLinks.forEach(item => {
                item.style.color = "#bbb";
            });

            this.style.color = "#ffffff";

        });

    });


    // =====================================
    // 13. CONSOLE MESSAGE
    // =====================================

    console.log(
        "Happy 21st Birthday, Baby! Made with love. ♥"
    );

});
