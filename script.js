gsap.registerPlugin(ScrollTrigger);

// Function to show the correct GIF
function showGif(gifId) {
  document.querySelectorAll(".gif").forEach((gif) => {
    gif.style.display = "none";
  });
  document.getElementById(gifId).style.display = "block";
}

// Mapping class names to GIF IDs
const gifMap = {
  text1: "gif1",
  text2: "gif2",
  text3: "gif3"
};

// Create ScrollTriggers
document.querySelectorAll("#text-column .text").forEach((textBlock) => {
  const classList = Array.from(textBlock.classList);
  const targetClass = classList.find((cls) => gifMap[cls]);
  const gifId = gifMap[targetClass];

  ScrollTrigger.create({
    trigger: textBlock,
    start: "top center",
    end: "bottom center",
    onEnter: () => showGif(gifId),
    onEnterBack: () => showGif(gifId)
  });
});
