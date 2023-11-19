// 탑배너 엑스 
function toggleBanner() {
  const banner = document.getElementById('topBanner');
  const bannerLink = document.getElementById('bannerLink');
  const header = document.getElementById('header');
  banner.classList.toggle('collapsed');
  bannerLink.classList.toggle('collapsed');
  header.classList.toggle('collapsed2');
}

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .5,
        opacity:1
    });
});

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
    new ScrollMagic
    .Scene({
        triggerElement: spyEl,
        triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});



new Swiper('.promotion .swiper', {
    slidesPerView:1, //한번에 보여줄 슬라이드 개수
    centeredSlides: true,
    loop: true, // 반복 재생 여부
    autoplay: {
        delay: 4000
    },
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
        prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
        nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
      }
});



new Swiper('.collaboration .swiper', {
    slidesPerView:4,
    spaceBetween: 0,
    loop:true,
    autoplay: {
        delay:4000
    }
});


const toTopEl = document.getElementById('to-top');

window.addEventListener('scroll', _.throttle(function () {
  // 페이지 스크롤 위치가 500px이 넘으면.
  if (window.scrollY > 300) {
    // 상단으로 스크롤 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    })

  // 페이지 스크롤 위치가 500px이 넘지 않으면.
  } else {
    // 상단으로 스크롤 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300));

// 상단으로 스크롤 버튼을 클릭하면,
toTopEl.addEventListener('click', function () {
  console.log('click');
  // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
  gsap.to(window, {
    scrollTo: { y: 0 },
    duration: 0.7, // 애니메이션 지속 시간 (0.7초)
  });
});

// 올해가 몇년도인지 계산 

const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()


//   돋보기 클릭시 검색창 뜨도록 
//   최상단 할인창 엑스버튼 클릭시 사라지도록
//   오른쪽 하단 업투탑버튼 활성화 