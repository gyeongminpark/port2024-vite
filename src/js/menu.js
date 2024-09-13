export function menu() {
    const headerToggle = document.getElementById('headerToggle');
    const headerNav = document.querySelector('.header_nav');
    const header = document.getElementById('header');
    const introSection = document.getElementById('intro');

    // 모바일 네비게이션 토글
    if (headerToggle) {
        headerToggle.addEventListener('click', () => {
            headerNav.classList.toggle('show');
            headerToggle.getAttribute('aria-expanded') === 'true'
                ? headerToggle.setAttribute('aria-expanded', 'false')
                : headerToggle.setAttribute('aria-expanded', 'true');
        });
    }

    // Intersection Observer 설정
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0 // 섹션이 조금이라도 보이면 콜백 호출
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                header.style.top = '0';
            } else {
                header.style.top = '-100px';
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(introSection);
}