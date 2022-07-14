var input = document.getElementById("video-link");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    const videoLink = document.getElementById("video-link").value;
    const downloadLink = videoLink.replace("youtube", "youtubepp");
    window.open(downloadLink, "_blank");
  }
});

let download = () => {
  const videoLink = document.getElementById("video-link").value;
  const downloadLink = videoLink.replace("youtube", "youtubepp");
  window.open(downloadLink, "_blank");
};
