function setDisplayAppreance(self){
    var body = document.querySelector('body'); 
    var btn = document.getElementById('btnDisplayMode'); 
    if(self.value === '다크모드로 전환'){  //다크모드로 전환 버튼을 누른 경우
      body.style.backgroundColor = 'black';  //배경색 변경
      body.style.color = 'white'; //css가 적용되지 않은 기본 텍스트 색상 변경
      btn.style.backgroundColor = "yellow"; //버튼의 배경색 변경
      btn.style.color = "black"; //버튼의 텍스트 색상 변경
      self.value = '라이트모드로 전환';
    } else { //라이트모드로 전환 버튼을 누른 경우
      body.style.backgroundColor = 'white';
      body.style.color = 'black';
      btn.style.backgroundColor = "black";
      btn.style.color = "white";
      self.value = '다크모드로 전환';
window.onload = () => {
  let images = document.querySelectorAll('#created-by img')
  document.getElementById('created-by').addEventListener('mouseover', (e) => {
    images[0].setAttribute('src', '/images/i.png')
    images[1].setAttribute('src', '/images/sigong.png')
  })
  document.getElementById('created-by').addEventListener('mouseout', (e) => {
    images[0].setAttribute('src', '/images/GitHub-Mark-120px-plus.png')
    images[1].setAttribute('src', '/images/tw_icon.png')
  })
}
