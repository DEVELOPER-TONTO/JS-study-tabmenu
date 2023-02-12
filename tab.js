//쌩자바스크립트는 한번에 요소수정불가능
//아래코드는 실행 불가능

// let but = document.querySelectorAll('.tab-button');
// let con = document.querySelectorAll('.tab-content');
// document.querySelectorAll('.tab-button')[0].addEventListener('click',function(){
//     document.querySelectorAll('.tab-button').classList.remove('orange');
//     document.querySelectorAll('.tab-button')[0].classList.add('orange');
//     document.querySelectorAll('.tab-content').classList.remove('show');
//     document.querySelectorAll('.tab-content')[0].classList.add('show');
// });

let 버튼 = $(".tab-button");
let 콘 = $(".tab-content");

for(let i=0; i<버튼.length; i++){
  버튼.eq(i).on("click", function () {
    버튼.removeClass("orange");
    버튼.eq(i).addClass("orange");
    콘.removeClass("show");
    콘.eq(i).addClass("show");
  });
}

