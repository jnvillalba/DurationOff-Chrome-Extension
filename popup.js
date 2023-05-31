document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleSwitch');

  // Enviar un mensaje al script de contenido para activar o desactivar la ocultación de la barra/indicador de tiempo y la duración del video
  toggleButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleHideTimeBar' });
    });
  });
});

//TODO
//que recuerde la eleccion local y en todas las pestañas