function selectPets() {
  const radioOne = document.getElementById("hipodoge");
  const radioTwo = document.getElementById("capipepo");
  const radioThree = document.getElementById("ratigueya");
  if (radioOne.checked) {
    alert("hipodoge");
  } else if (radioTwo.checked) {
    alert("capipepo");
  } else if (radioThree.checked) {
    alert("ratigueya");
  } else {
    alert(":(");
  }
}
let buttonPet = document.getElementById("button-pet");

buttonPet.addEventListener("click", selectPets);
