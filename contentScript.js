// Verificar si una etiqueta de lucha está presente en la página
function hasFightingTag() {
  const tagsContainer = document.querySelector(
    ".ytd-video-primary-info-renderer .ytd-metadata-row-container-renderer"
  );
  if (tagsContainer) {
    const tags = Array.from(
      tagsContainer.querySelectorAll(".ytd-metadata-row-renderer a")
    );
    const fightingTags = ["fight", "mma", "kickboxing", "muay thai", "bjj", "karate", "judo", "amateur", "semi-pro", "pro"];
    return tags.some((tag) => {
      const tagText = tag.textContent.toLowerCase();
      return fightingTags.some((fightingTag) => tagText.includes(fightingTag));
    });
  }
  return false;
}

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

// Manejar el mensaje del script de la interfaz emergente
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "toggleHideTimeBar") {
    const timeBar = document.querySelector(".ytp-progress-bar-container");
    if (timeBar) {
      if (timeBar.style.display === "none") {
        timeBar.style.display = "";
        showDuration();
      } else {
        timeBar.style.display = "none";
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
