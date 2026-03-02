import "./style.css";

const messageBox = document.querySelector<HTMLDivElement>("#message-box")!;

const urlParams = new URLSearchParams(window.location.search);
const toParam = urlParams.get("to");

if (!toParam || toParam.trim() === "") {
  messageBox.innerHTML =
    '<span class="error-label">Error:</span><br>URL parameter "to" is not specified.';
} else {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  if (isIOS) {
    const vlcUrl = `vlc-x-callback://x-callback-url/download?url=${encodeURIComponent(toParam)}`;
    messageBox.innerHTML =
      "Opening VLC app...<br><small>If the page does not switch, please check for a permission dialog.</small>";
    window.location.href = vlcUrl;
  } else {
    messageBox.innerHTML = "Redirecting...";
    window.location.href = toParam;
  }
}
