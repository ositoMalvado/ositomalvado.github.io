const emailElement = document.getElementById('link-cont');
emailElement.style.display = 'inline-block';
function copyToClipboard() {
  const emailElement = document.getElementById('link-cont');
  const emailText = emailElement.innerText;

  const textarea = document.createElement('textarea');
  textarea.value = emailText;
  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  // Crear un mensaje de alerta moderno
  const alertElement = document.createElement('div');
  alertElement.textContent = 'Mail copiado!';
  alertElement.classList.add(
      'fixed',
      'top-1/2',
      'left-1/2',
      '-translate-x-1/2',
      '-translate-y-1/2',
      'transform',
      'bg-black',
      'bg-opacity-30',
      'text-white',
      'text-lg',
      'font-semibold',
      'px-6',
      'py-3',
      'rounded-lg',
      'shadow-lg',
      'z-50',
      'transition-all',
      'duration-300'
  );
  document.body.appendChild(alertElement);

  // Ajustar el tiempo de desaparición del mensaje
  setTimeout(() => {
      alertElement.style.opacity = '0';
      setTimeout(() => {
          alertElement.remove();
      }, 300); // Desvanecer el mensaje después de 300 milisegundos
  }, 2000); // Mantener el mensaje durante 2 segundos
}
