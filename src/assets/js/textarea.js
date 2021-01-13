const textArea = document.querySelectorAll('[data-autoresize]');

textArea.forEach(item => {
  let textAteaH = item.offsetHeight;

  item.addEventListener('input', event => {
    let $this = event.target;

    $this.style.height = textAteaH + 'px';
    $this.style.height = $this.scrollHeight + 'px';

  })
})
