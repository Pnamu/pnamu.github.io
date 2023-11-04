window.onload = () => {
  let images = document.querySelectorAll('#created-by img');
  document.getElementById('created-by').addEventListener('mouseover', (e) => {
    images[0].setAttribute('src', '/images/i.png');
    images[1].setAttribute('src', '/images/sigong.png');
  });
  document.getElementById('created-by').addEventListener('mouseout', (e) => {
    images[0].setAttribute('src', '/images/GitHub-Mark-120px-plus.png');
    images[1].setAttribute('src', '/images/tw_icon.png');
  });

  // 먼저 사용자의 모드 선택을 확인하고 설정합니다.
  const userMode = localStorage.getItem('userMode');
  if (userMode === 'dark') {
    setDarkMode();
  } else {
    setLightMode();
  }
}

function setDarkMode() {
  var body = document.querySelector('body');
  var btn = document.getElementById('btnDisplayMode');

  body.style.backgroundColor = '#262626';
  body.style.color = 'white';
  btn.style.backgroundColor = '#262626';
  btn.style.color = 'yellow';
  document.getElementById('btnDisplayMode').value = '라이트모드로 전환';
  
  // 사용자 모드를 'dark'로 저장
  localStorage.setItem('userMode', 'dark');
}

function setLightMode() {
  var body = document.querySelector('body');
  var btn = document.getElementById('btnDisplayMode');

  body.style.backgroundColor = '#f5f5f6';
  body.style.color = 'black';
  btn.style.backgroundColor = '#efefef';
  btn.style.color = 'black';
  document.getElementById('btnDisplayMode').value = '다크모드로 전환';
  
  // 사용자 모드를 'light'로 저장
  localStorage.setItem('userMode', 'light');
}
