"use strict";

const texts = {
  // German translation
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  // Danish translation
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

let locale = "da";

function updateLanguage(lang) {
  const langText = texts[lang].texts;

  langText.forEach((item) => {
    const el = document.querySelector(item.location);

    if (el) {
      el.textContent = item.text;
    }
  });
}

updateLanguage(locale);

document.querySelector(".switcher").addEventListener("change", (e) => {
  locale = e.target.value;

  updateLanguage(locale);
});
