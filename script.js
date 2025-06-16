let birthYear = prompt("Enter your year of birth:");

if (birthYear === null) {
  alert("It's a pity that you didn't want to enter your year of birth.");
} else {
  let city = prompt("Which city do you live in?");
  if (city === null) {
    alert("It's a pity that you didn't want to enter your city.");
  } else {
    let sport = prompt("What's your favorite sport?");
    if (sport === null) {
      alert("It's a pity that you didn't want to enter your favorite sport.");
    } else if (
      birthYear.trim() === "" ||
      city.trim() === "" ||
      sport.trim() === ""
    ) {
      alert("You did not enter all the necessary data. Please try again.");
    } else {
      let yearPattern = /^\d{4}$/;
      if (!yearPattern.test(birthYear.trim())) {
        alert("You have entered an incorrect year of birth.");
      } else {
        let year = Number(birthYear.trim());
        let currentYear = new Date().getFullYear();
        let age = currentYear - year;

        if (age < 0 || age > 115) {
          alert("You have entered an unrealistic year of birth.");
        } else {
          let cityLower = city.trim().toLowerCase();
          let cityMessage;

          if (cityLower === "kyiv" || cityLower === "kiev") {
            cityMessage = "You live in the capital of Ukraine.";
          } else if (cityLower === "london") {
            cityMessage = "You live in the capital of the United Kingdom.";
          } else if (cityLower === "washington") {
            cityMessage = "You live in the capital of the USA.";
          } else {
            cityMessage = `You live in the city ${city.trim()}.`;
          }

          let sportLower = sport.trim().toLowerCase();
          let sportMessage;

          if (sportLower === "football") {
            sportMessage = "Cool! Do you want to become like Lionel Messi??";
          } else if (sportLower === "boxing") {
            sportMessage = "Cool! Do you want to become like Vitali Klitschko?";
          } else if (sportLower === "tennis") {
            sportMessage = "Cool! Do you want to become like Serena Williams?";
          } else {
            sportMessage = `Your favorite sport: ${sport.trim()}.`;
          }

          alert(`Your age: ${age}\n${cityMessage}\n${sportMessage}`);
        }
      }
    }
  }
}
