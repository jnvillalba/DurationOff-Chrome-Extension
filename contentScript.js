// Función para ocultar la barra/indicador de tiempo
function hideTimeBar() {
    const timeBar = document.querySelector('.ytp-progress-bar-container');
    if (timeBar) {
      timeBar.style.display = 'none';
    }
  }
  
  // Función para mostrar la duración del video
  function showDuration() {
    const duration = document.querySelector('.ytp-time-duration');
    if (duration) {
      duration.style.display = '';
    }
  }
  
  // Función para ocultar la duración del video
  function hideDuration() {
    const duration = document.querySelector('.ytp-time-duration');
    if (duration) {
      duration.style.display = 'none';
    }
  }
  
  // Manejar el mensaje del script de la interfaz emergente
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === 'toggleHideTimeBar') {
      const timeBar = document.querySelector('.ytp-progress-bar-container');
      if (timeBar) {
        if (timeBar.style.display === 'none') {
          timeBar.style.display = '';
          showDuration();
        } else {
          timeBar.style.display = 'none';
          hideDuration();
        }
      }
    }
  });
  
  // Verificar si hay una etiqueta de lucha y ocultar la barra/indicador de tiempo y la duración del video si corresponde
  if (hasFightingTag()) {
    hideTimeBar();
    hideDuration();
  }
  