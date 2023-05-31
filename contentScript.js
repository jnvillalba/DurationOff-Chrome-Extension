// Constantes para las clases de los elementos
const TIME_BAR_CLASS = ".ytp-progress-bar-container";
const DURATION_CLASS = ".ytp-time-duration";
const SLASH_CLASS = ".ytp-time-separator";
const SUGGESTED_VIDEOS_CLASS =
  ".ytd-watch-next-secondary-results-renderer .ytd-thumbnail-overlay-time-status-renderer";

// Función auxiliar para alternar la visualización de un elemento
function toggleElementDisplay(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.style.display = element.style.display === "none" ? "" : "none";
  }
}

// Función para ocultar la barra/indicador de tiempo
function hideTimeBar() {
  toggleElementDisplay(TIME_BAR_CLASS);
  hideDuration();
  hideSuggestedVideoDurations();
  hideSlash();
}

// Función para mostrar la barra/indicador de tiempo
function showTimeBar() {
  toggleElementDisplay(TIME_BAR_CLASS);
  showDuration();
  showSuggestedVideoDurations();
  showSlash();
}

// Función para ocultar la duración del video
function hideDuration() {
  toggleElementDisplay(DURATION_CLASS);
}

// Función para mostrar la duración del video
function showDuration() {
  toggleElementDisplay(DURATION_CLASS);
}

// Función para ocultar el separador de tiempo
function hideSlash() {
  toggleElementDisplay(SLASH_CLASS);
}

// Función para ocultar la duración de los videos sugeridos
function hideSuggestedVideoDurations() {
  toggleSuggestedVideoDurations(true);
}

// Función para mostrar la duración de los videos sugeridos
function showSuggestedVideoDurations() {
  toggleSuggestedVideoDurations(false);
}

// Función auxiliar para ocultar o mostrar la duración de los videos sugeridos
function toggleSuggestedVideoDurations(hide) {
  const suggestedVideos = document.querySelectorAll(SUGGESTED_VIDEOS_CLASS);
  suggestedVideos.forEach((video) => {
    video.style.display = hide ? "none" : "";
  });
}

// Manejar el mensaje del script de la interfaz emergente
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "toggleHideTimeBar") {
    const timeBar = document.querySelector(TIME_BAR_CLASS);
    if (timeBar) {
      if (timeBar.style.display === "none") {
        showTimeBar();
      } else {
        hideTimeBar();
      }
    }
  }
});
