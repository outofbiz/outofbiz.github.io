var background = document.getElementById('background')r
window.addEventListener('click', function(e) {
  var image = document.createElement('img');
  var style = 'margin-top:' + e.screenY + 'px;margin-left:' + e.screenX + 'px';
  image.setAttribute('src', '/digging.gif');
  image.setAttribute('style', style);
  background.prepend(image);
});
