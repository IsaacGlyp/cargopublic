    "use strict";

    const moji = ["@", "A", "∂", "𝒶", "a", "ᵃ", "Ⓐ"];
    const element = document.getElementById("naam2");
    const originalName = element.textContent;

    function replaceAWithMoji(name) {
      return name.replace(/a/gi, () => moji[Math.floor(Math.random() * moji.length)]);
    }

    function updateName() {
      element.textContent = replaceAWithMoji(originalName);
    }

    // Update every 500ms
    setInterval(updateName, 500);
