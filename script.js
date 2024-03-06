const petNames = ["Max", "Bella", "Charlie", "Daisy", "Rocky", "Lucy", "Cooper", "Molly", "Duke",
 "Sadie", "Tucker", "Lily", "Zeus", "Ruby", "Bentley", "Luna", "Milo", "Stella", "Oliver", "Rosie",
  "Teddy", "Chloe", "Jack", "Lola", "Winston", "Abby", "Leo", "Sophie", "Oscar", "Ellie", "Buddy", "Coco",
   "Sam", "Mia", "Finn", "Penny", "Baxter", "Olive", "Harley", "Maya", "Murphy", "Ruby", "Charlie", "Rosie", "Dexter", "Willow",
    "Bailey", "Hazel", "Archie", "Daisy"];

function generatePetName() {
    const resultElement = document.getElementById("result");
    const randomIndex = Math.floor(Math.random() * petNames.length);
    const randomName = petNames[randomIndex];
    resultElement.textContent = "Your pet's name is: " + randomName; 
}
