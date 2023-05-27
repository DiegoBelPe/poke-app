let buttonPet = document.getElementById("button-pet");

buttonPet.addEventListener("click", selectPets);

function selectPets() {
  const radioOne = document.getElementById("hipodoge");
  const radioTwo = document.getElementById("capipepo");
  const radioThree = document.getElementById("ratigueya");
  const spanPet = document.getElementById("name-pet");
  if (radioOne.checked) {
    spanPet.innerHTML = 'Hipodoge'
  } else if (radioTwo.checked) {
    spanPet.innerHTML = 'Capipepo'
  } else if (radioThree.checked) {
    spanPet.innerHTML = 'Ratigueya'
  } else {
    alert("Please select pet");
  }

  selectPetEnemy()
}

function selectPetEnemy(){
  let attackPetRandom = randomEnemy(1, 3);
  let nameEnemy = document.getElementById('name-petEnemy')

  if(attackPetRandom == 1){
    nameEnemy.innerHTML = 'Hipodoge'
  }
  if(attackPetRandom == 2){
    nameEnemy.innerHTML = 'Capipepo'
  }
  if(attackPetRandom == 3){
    nameEnemy.innerHTML = 'Ratiguaye'
  }

}


function randomEnemy(min, max) {
  return Math.floor(Math.random() * (max - min +1) + min)
  
}

