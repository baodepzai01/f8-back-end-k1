const karaokeContainer = document.getElementById("karaoke-container");
const karaokeText = document.getElementById("karaoke-text");
const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sapiente.`;
let currentIndex = 0;

function highlightNextWord() {
  if (currentIndex >= text.length) {
    clearInterval(karaokeInterval);
    return;
  }

  const nextSpaceIndex = text.indexOf(" ", currentIndex);
  const word = text.substring(
    currentIndex,
    nextSpaceIndex === -1 ? undefined : nextSpaceIndex
  );
  currentIndex = nextSpaceIndex === -1 ? text.length : nextSpaceIndex + 1;

  const span = document.createElement("span");
  span.textContent = word + " ";
  karaokeText.appendChild(span);

  setTimeout(() => {
    span.classList.add("highlight");
  }, 100);
}

const karaokeInterval = setInterval(highlightNextWord, 1000);
