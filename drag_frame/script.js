const iframe = document.getElementById("draggable-iframe");
let isDragging = false;
let startX, startY, initialX, initialY;

iframe.addEventListener("mousedown", function (e) {
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
  initialX = parseInt(window.getComputedStyle(iframe).left, 10);
  initialY = parseInt(window.getComputedStyle(iframe).top, 10);
  iframe.style.cursor = 'grabbing';
});

document.addEventListener("mousemove", function (e) {
  if (isDragging) {
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    
    iframe.style.left = initialX + dx + "px";
    iframe.style.top = initialY + dy + "px";
  }
});

document.addEventListener("mouseup", function () {
  isDragging = false;
  iframe.style.cursor = 'grab';
});