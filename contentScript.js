// Constantes para las clases de los elementos
const TIME_BAR_CLASS = ".ytp-progress-bar-container";
const DURATION_CLASS = ".ytp-time-duration";
const SLASH_CLASS = ".ytp-time-separator";
const SUGGESTED_VIDEOS_CLASS = ".ytd-watch-next-secondary-results-renderer .ytd-thumbnail-overlay-time-status-renderer";
const SEARCH_RESULT_TIMESTAMP_CLASS = ".ytd-thumbnail-overlay-time-status-renderer";
const HOME_VIDEO_CLASS = ".style-scope .ytd-thumbnail-overlay-time-status-renderer";

function toggleElementDisplay(selector, hide) {
  const element = document.querySelector(selector);
  if (element) {
    element.style.display = hide ? "none" : "";
  }
}

function toggleElementsVisibility(selector, hide) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    element.style.display = hide ? "none" : "inline-block";
  });
}

function toggleHomeVideoDurations(hide) {
  toggleElementsVisibility(HOME_VIDEO_CLASS, hide);
}

function toggleSearchVideoDurations(hide) {
  toggleElementsVisibility(SEARCH_RESULT_TIMESTAMP_CLASS, hide);
}

function hideTimeBar() {
  toggleElementDisplay(TIME_BAR_CLASS, true);
  hideDuration();
  hideSuggestedVideoDurations();
  hideSlash();
  hideSearchVideoDurations();
  hideHomeVideoDurations();
}

function showTimeBar() {
  toggleElementDisplay(TIME_BAR_CLASS, false);
  showDuration();
  showSuggestedVideoDurations();
  showSlash();
  showSearchVideoDurations();
  showHomeVideoDurations();
}

function hideDuration() {
  toggleElementDisplay(DURATION_CLASS, true);
}

function showDuration() {
  toggleElementDisplay(DURATION_CLASS, false);
}

function hideSlash() {
  toggleElementDisplay(SLASH_CLASS, true);
}

function showSlash() {
  toggleElementDisplay(SLASH_CLASS, false);
}

function showHomeVideoDurations() {
  toggleHomeVideoDurations(false);
}

function hideHomeVideoDurations() {
  toggleHomeVideoDurations(true);
}

function hideSearchVideoDurations() {
  toggleSearchVideoDurations(true);
}

function showSearchVideoDurations() {
  toggleSearchVideoDurations(false);
}

function hideSuggestedVideoDurations() {
  toggleElementsVisibility(SUGGESTED_VIDEOS_CLASS, true);
}

function showSuggestedVideoDurations() {
  toggleElementsVisibility(SUGGESTED_VIDEOS_CLASS, false);
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
