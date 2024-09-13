import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function publishing() {
    gsap.registerPlugin(ScrollTrigger)
    const horSection = gsap.utils.toArray('.pub_item')
    gsap.to(horSection, {
        xPercent: -100 * (horSection.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#publishing",
            start: 'top 0px',
            end: '+=4000',
            pin: true,
            scrub: 1,
            invalidateOnRefresh:true,
            anticipatePin:1
        }
    })
}