window.onload = () => {
  let images = document.querySelectorAll('#created-by img')
  document.getElementById('created-by').addEventListener('mouseover', (e) => {
    images[1].setAttribute('src', '/images/sigong.png')
  })
  document.getElementById('created-by').addEventListener('mouseout', (e) => {
    images[1].setAttribute('src', '/images/tw_icon.png')
  })
}
