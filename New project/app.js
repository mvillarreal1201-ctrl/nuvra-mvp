const characters = [
  {
    name: "Aiko Soren",
    role: "Rooftop courier and impossible optimist",
    description: "Aiko outruns city drones by day and keeps the crew stitched together by night.",
    series: "Series: Midnight Circuit",
    trait: "Trait: fearless momentum",
  },
  {
    name: "Ren Kaito",
    role: "Ex-idol strategist with a dangerous poker face",
    description: "Ren treats every setback like a remix and always has one more impossible plan ready.",
    series: "Series: Star Static",
    trait: "Trait: surgical calm",
  },
  {
    name: "Mika Vale",
    role: "Sword prodigy powered by spite and sincerity",
    description: "Mika looks like trouble because she is, but she still shows up first when the team needs her.",
    series: "Series: Blade Bloom",
    trait: "Trait: beautiful recklessness",
  },
];

const characterName = document.getElementById("characterName");
const characterRole = document.getElementById("characterRole");
const characterDescription = document.getElementById("characterDescription");
const characterSeries = document.getElementById("characterSeries");
const characterTrait = document.getElementById("characterTrait");
const chips = Array.from(document.querySelectorAll(".chip"));
const joinForm = document.getElementById("joinForm");
const formMessage = document.getElementById("formMessage");
const revealItems = Array.from(document.querySelectorAll(".section, .hero, .site-footer"));

bindCharacterControls();
bindJoinForm();
bindRevealAnimation();
rotateCharacters();

function bindCharacterControls() {
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const index = Number(chip.dataset.character);
      renderCharacter(index);
    });
  });
}

function renderCharacter(index) {
  const selected = characters[index];

  if (!selected) {
    return;
  }

  characterName.textContent = selected.name;
  characterRole.textContent = selected.role;
  characterDescription.textContent = selected.description;
  characterSeries.textContent = selected.series;
  characterTrait.textContent = selected.trait;

  chips.forEach((chip, chipIndex) => {
    chip.classList.toggle("active", chipIndex === index);
  });
}

function rotateCharacters() {
  let activeIndex = 0;

  window.setInterval(() => {
    activeIndex = (activeIndex + 1) % characters.length;
    renderCharacter(activeIndex);
  }, 5000);
}

function bindJoinForm() {
  joinForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(joinForm);
    const name = String(formData.get("name") || "").trim();
    const genre = String(formData.get("genre") || "").trim();

    formMessage.textContent = `${name}, you're in. We'll save you a front-row spot for ${genre.toLowerCase()} night.`;
    joinForm.reset();
  });
}

function bindRevealAnimation() {
  revealItems.forEach((item) => item.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => observer.observe(item));
}
