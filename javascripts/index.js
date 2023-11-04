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
}

function setDisplayAppreance(self) {
  var body = document.querySelector('body');
  var btn = document.getElementById('btnDisplayMode');
  
  if (self.value === '다크모드로 전환') {
    body.style.backgroundColor = '#262626';
    body.style.color = 'white';
    btn.style.backgroundColor = '#262626';
    btn.style.color = 'yellow';
    self.value = '라이트모드로 전환';
  } else {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    btn.style.backgroundColor = '#efefef';
    btn.style.color = 'black';
    self.value = '다크모드로 전환';
  }
}
