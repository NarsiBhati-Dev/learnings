const checkNetworkStatus = () => {
  updateNetworkStatus();
};

const updateNetworkStatus = () => {
  const statusElement = document.getElementById("status");

  if (navigator.onLine) {
    statusElement.innerHTML = `You are online <br> NetworkType :${getNetworkType()}`;
    statusElement.className = "status online";
  } else {
    statusElement.innerHTML = "You are offline ";
    statusElement.className = "status online";
  }
};

const getNetworkType = () => {
  if (navigator.onLine) {
    const connectionType = navigator.connection.effectiveType || "Unknown";
    return connectionType;
  } else {
    return "network Information API not supported";
  }
};

window.onload = updateNetworkStatus;
