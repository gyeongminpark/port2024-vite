import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

export function graphics() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const images = document.querySelectorAll(".gp_content img");
    let currentIndex = 0;

    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.textContent = img.alt;
            currentIndex = index;
        });
    });

    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    document.getElementById("prev").addEventListener("click", () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateModalImage();
    });

    document.getElementById("next").addEventListener("click", () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateModalImage();
    });

    function updateModalImage() {
        modalImg.src = images[currentIndex].src;
        captionText.textContent = images[currentIndex].alt;
    }

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });


}