function checkClipboard() {
  const target = document.querySelector('#target');
  target.innerText = '';
  target.focus();
  document.execCommand('paste');
  const content = target.innerText;
  target.innerText = '<empty>';
  console.log('content', content);
}
setInterval(checkClipboard, 1000);
