import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function aboutme() {
    gsap.registerPlugin(ScrollTrigger);

    const sections = [
        document.querySelector(".ab_detail"),
        document.querySelector(".ab_cer"),
        document.querySelector(".ab_skill"),
        document.querySelector(".ab_edu"),
        document.querySelector(".ab_car"),
        document.querySelector(".ab_key")
    ];

    let currentSection = 0;

    function showNextSection() {
        if (currentSection < sections.length) {
            const section = sections[currentSection];
            gsap.fromTo(
                section,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    onComplete: () => {
                        currentSection++;
                        if (currentSection < sections.length) {
                            ScrollTrigger.create({
                                trigger: sections[currentSection],
                                start: "top 80%",
                                onEnter: showNextSection,
                                once: true
                            });
                        }
                    }
                }
            );
        }
    }

    ScrollTrigger.create({
        trigger: sections[0],
        start: "top 80%",
        onEnter: showNextSection,
        once: true
    });
}
