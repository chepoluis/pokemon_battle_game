export function showCustomAlert(text, isGreen = false, disappear) {
  const alertElement = document.createElement("div");
  alertElement.classList.add("custom-alert");

  if (isGreen) {
    alertElement.style.backgroundColor = "blue";
  } else {
    alertElement.style.backgroundColor = "#f44336";
  }

  alertElement.textContent = text;

  document.body.appendChild(alertElement);

  if (disappear) {
    setTimeout(() => {
      document.body.removeChild(alertElement);
    }, 1000);
  }
}

export function increaseOrDecreaseDamage(hpAttack, type, weakness, resistance) {
  let modifiedDamage = hpAttack;
  console.log(hpAttack, type, weakness, resistance);

  if (weakness.includes(type)) {
    modifiedDamage *= 1.10; // Incrementa el daño en un 10%
  } else if (resistance.includes(type)) {
    modifiedDamage *= 0.90; // Disminuye el daño en un 10%
  }

  console.log({ modifiedDamage });
  return Math.floor(modifiedDamage);
}

export function generarNumeroRandom(min, max) {
  return Math.floor(Math.random() * max) + min;
}

export function flash() {
    const enemyFlash = document.querySelector(".flash");
    enemyFlash.classList.add("show");
    
    setTimeout(() => {
      enemyFlash.classList.remove("show");
    }, 300);
}
