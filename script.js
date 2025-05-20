gsap.registerPlugin(ScrollTrigger);

function showGif(gifId) {
  document.querySelectorAll(".gif").forEach((gif) => {
    gif.style.display = "none";
  });
  document.getElementById(gifId).style.display = "block";
}

const gifMap = {
  text1: "gif1",
  text2: "gif2",
  text3: "gif3"
};

document.querySelectorAll("#text-column .text").forEach((textBlock) => {
  const classList = Array.from(textBlock.classList);
  const targetClass = classList.find((cls) => gifMap[cls]);
  const gifId = gifMap[targetClass];

  ScrollTrigger.create({
    trigger: textBlock,
    start: "top center",
    end: "bottom center",
    scroller: "#text-column", // tell GSAP to track scrolling of this element
    onEnter: () => showGif(gifId),
    onEnterBack: () => showGif(gifId)
  });
});
