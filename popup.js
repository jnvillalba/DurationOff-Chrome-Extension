document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleSwitch');

  // Obtener el estado guardado del switch
  chrome.storage.local.get('switchState', function (result) {
    if (result.switchState === 'enabled') {
      toggleButton.checked = true;
    } else {
      toggleButton.checked = false;
    }
  });

  // Enviar un mensaje al script de contenido para activar o desactivar la ocultación de la barra/indicador de tiempo y la duración del video
  toggleButton.addEventListener('click', function () {
    const switchState = toggleButton.checked ? 'enabled' : 'disabled';

    // Guardar el estado del switch
    chrome.storage.local.set({ switchState });

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleHideTimeBar' });
    });
  });
});
