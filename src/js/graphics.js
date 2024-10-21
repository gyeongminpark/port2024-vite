import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

export function graphics() {
    // 메뉴 필터링 기능
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const filter = this.getAttribute('data-filter');

            // 모든 아이템 숨기기
            document.querySelectorAll('.grid-item').forEach(item => {
                item.style.display = 'none';
            });

            // 선택된 필터에 맞는 아이템 보이기
            document.querySelectorAll(filter).forEach(item => {
                item.style.display = 'block';
            });

            // 활성화 클래스 업데이트
            document.querySelectorAll('.menu a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
        });
    });

}