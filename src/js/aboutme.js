import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function aboutme() {
    // ScrollTrigger 플러그인 등록
    gsap.registerPlugin(ScrollTrigger);

    const sections = [
        document.querySelector(".ab_detail"),
        document.querySelector(".ab_cer"),
        document.querySelector(".ab_skill"),
        document.querySelector(".ab_edu"),
        document.querySelector(".ab_car"),
        document.querySelector(".ab_key")
    ];

    // 현재 보여질 섹션 인덱스
    let currentSection = 0;

    // 스크롤할 때마다 하나의 섹션만 표시
    function showNextSection() {
        if (currentSection < sections.length) {
            const section = sections[currentSection];
            gsap.fromTo(
                section,
                { opacity: 0, y: 50 }, // 초기 상태
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    onComplete: () => {
                        currentSection++;
                        if (currentSection < sections.length) {
                            // 다음 섹션을 스크롤 트리거로 설정
                            ScrollTrigger.create({
                                trigger: sections[currentSection],
                                start: "top 80%",
                                onEnter: showNextSection,
                                once: true // 한 번만 실행되도록 설정
                            });
                        }
                    }
                }
            );
        }
    }

    // 첫 번째 섹션에 대한 초기 ScrollTrigger 설정
    ScrollTrigger.create({
        trigger: sections[0],
        start: "top 80%",
        onEnter: showNextSection,
        once: true
    });
}
