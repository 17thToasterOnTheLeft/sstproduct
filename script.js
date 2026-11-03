
document.addEventListener("DOMContentLoaded", () => {

    // MOBILE NAVIGATION

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navLinks.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    // SCROLL REVEAL ANIMATIONS

    const revealElements = document.querySelectorAll(
        ".section-tag, " +
        ".intro-grid, " +
        ".feature-card, " +
        ".step-card, " +
        ".integration-panel, " +
        ".business-item, " +
        ".pricing-card, " +
        ".cta-section > *"
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
    });

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {
        observer.observe(element);
    });


    // ACTIVE NAVIGATION LINK

    const sections = document.querySelectorAll(
        "main section[id]"
    );

    const navigationLinks = document.querySelectorAll(
        ".nav-links a"
    );

    const navObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                navigationLinks.forEach(link => {

                    const active =
                        link.getAttribute("href") ===
                        "#" + entry.target.id;

                    if (active) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }

                });

            });

        },
        {
            rootMargin: "-30% 0px -60% 0px"
        }
    );

    sections.forEach(section => {
        navObserver.observe(section);
    });


    // FOOTER YEAR

    const footerText = document.querySelector(".footer > p");

    if (footerText) {

        footerText.textContent =
            `© ${new Date().getFullYear()} Velora AI. All rights reserved.`;

    }


    // REDUCE MOTION SUPPORT

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    if (reducedMotion.matches) {

        document.querySelectorAll(".reveal").forEach(element => {

            element.classList.add("visible");

        });

    }

});
