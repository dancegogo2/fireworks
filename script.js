document.addEventListener('DOMContentLoaded', () => {

    // カウントダウンタイマー
    const countdown = () => {
        const countDate = new Date('August 4, 2025 19:30:00').getTime();
        const now = new Date().getTime();
        const gap = countDate - now;

        if (document.getElementById('timer')) {
            if (gap < 0) {
                clearInterval(countdownInterval);
                document.getElementById('timer').innerHTML = "花火大会は終了しました";
                return;
            }
            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;
    
            const textDay = Math.floor(gap / day);
            const textHour = Math.floor((gap % day) / hour);
            const textMinute = Math.floor((gap % hour) / minute);
            const textSecond = Math.floor((gap % minute) / second);
    
            document.getElementById('days').innerText = String(textDay).padStart(2, '0');
            document.getElementById('hours').innerText = String(textHour).padStart(2, '0');
            document.getElementById('minutes').innerText = String(textMinute).padStart(2, '0');
            document.getElementById('seconds').innerText = String(textSecond).padStart(2, '0');
        }
    };
    const countdownInterval = setInterval(countdown, 1000);

    // スクロールアニメーション
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const anim = entry.target.dataset.animate || 'fade-up';
                entry.target.classList.add('in-view', anim);
                observer.unobserve(entry.target); // 一度表示されたら監視を解除
            }
        });
    }, {
        threshold: 0.1 // 10%表示されたらトリガー
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // ギャラリー横スクロールナビゲーション
    const galleryContainer=document.querySelector('.gallery-container');
    const prevBtn=document.querySelector('.gallery-btn.prev');
    const nextBtn=document.querySelector('.gallery-btn.next');
    if(galleryContainer&&prevBtn&&nextBtn){
        const scrollOne=()=>galleryContainer.clientWidth+15;
        prevBtn.addEventListener('click',()=>{
            galleryContainer.scrollBy({left:-scrollOne(),behavior:'smooth'});
        });
        nextBtn.addEventListener('click',()=>{
            galleryContainer.scrollBy({left:scrollOne(),behavior:'smooth'});
        });
    }

    // フローティングボタンを閉じる処理
    const floatingBtn = document.querySelector('.floating-reserve-btn');
    const closeBtn = document.querySelector('.floating-reserve-btn .close-btn');

    if (floatingBtn && closeBtn) {
        closeBtn.addEventListener('click', () => {
            floatingBtn.style.display = 'none';
        });
    }
});
