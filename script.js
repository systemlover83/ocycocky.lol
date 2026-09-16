const video = document.getElementById("bg-video");
const unmuteBtn = document.getElementById("unmute-btn");

unmuteBtn.addEventListener("click", () => {
  video.muted = !video.muted;
  unmuteBtn.textContent = video.muted ? "🔇" : "🔊";
});
