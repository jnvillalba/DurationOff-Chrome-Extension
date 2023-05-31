// Función para ocultar la barra/indicador de tiempo
function hideTimeBar() {
  const timeBar = document.querySelector(".ytp-progress-bar-container");
  if (timeBar) {
    timeBar.style.display = "none";
  }
}

// Función para ocultar la duración del video
function hideDuration() {
  const duration = document.querySelector(".ytp-time-duration");
  if (duration) {
    duration.style.display = "none";
  }
}
function hideSlash() {
  const separator = document.querySelector(".ytp-time-separator");
  if (separator) {
    separator.style.display = "none";
  }
}

// Función para ocultar la duración de los videos sugeridos
function hideSuggestedVideoDurations() {
  const suggestedVideos = document.querySelectorAll(
    ".ytd-watch-next-secondary-results-renderer .ytd-thumbnail-overlay-time-status-renderer"
  );
  suggestedVideos.forEach((video) => {
    video.style.display = "none";
  });
}

// Función para mostrar la duración de los videos sugeridos
function showSuggestedVideoDurations() {
  const suggestedVideos = document.querySelectorAll(
    ".ytd-watch-next-secondary-results-renderer .ytd-thumbnail-overlay-time-status-renderer"
  );
  suggestedVideos.forEach((video) => {
    video.style.display = "";
  });
}

function showSlash() {
  const separator = document.querySelector(".ytp-time-separator");
  if (separator) {
    separator.style.display = "";
  }
}

// Función para mostrar la barra/indicador de tiempo
function showTimeBar() {
  const timeBar = document.querySelector(".ytp-progress-bar-container");
  if (timeBar) {
    timeBar.style.display = "";
  }
}

// Función para mostrar la duración del video
function showDuration() {
  const duration = document.querySelector(".ytp-time-duration");
  if (duration) {
    duration.style.display = "";
  }
}

// Manejar el mensaje del script de la interfaz emergente
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "toggleHideTimeBar") {
    const timeBar = document.querySelector(".ytp-progress-bar-container");
    if (timeBar) {
      if (timeBar.style.display === "none") {
        timeBar.style.display = "";
        showDuration();
        showSuggestedVideoDurations();
        showSlash();
      } else {
        timeBar.style.display = "none";
        hideDuration();
        hideSuggestedVideoDurations();
        hideSlash();
      }
    }
  }
});
