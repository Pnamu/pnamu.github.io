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