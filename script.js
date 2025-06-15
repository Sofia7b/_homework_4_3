let birthYear = prompt("Enter your year of birth:");
if (birthYear === null) {
  alert("We're sorry you didn't want to enter your birth year.");
} else {
  let city = prompt("Which city do you live in?");
  if (city === null) {
    alert("We're sorry you didn't want to enter your city.");
  } else {
    let sport = prompt("What's your favorite sport?");
    if (sport === null) {
      alert("We're sorry you didn't want to enter your favorite sport.");
    } else {
      // Check for empty inputs
      if (
        birthYear.trim() === "" ||
        city.trim() === "" ||
        sport.trim() === ""
      ) {
        alert(
          "You didn't enter all the required information. Please try again."
        );
      } else {
        // Calculate age
        let age = new Date().getFullYear() - parseInt(birthYear);
        if (isNaN(age) || age < 0 || age > 115) {
          alert("You have entered an incorrect year of birth.");
        } else {
          let englishLetters = /^[a-zA-Z\s\-]+$/;
          if (!englishLetters.test(city.trim())) {
            alert("Please enter the city name using English letters only.");
          } else if (!englishLetters.test(sport.trim())) {
            alert("Please enter the sport name using English letters only.");
          } else {
            // All validations passed, process data
            let cityLower = city.trim().toLowerCase();
            let cityMessage;

            if (cityLower === "kyiv" || cityLower === "kiev") {
              cityMessage = "You live in the capital of Ukraine.";
            } else if (
              cityLower === "washington" ||
              cityLower === "washington dc" ||
              cityLower === "dc"
            ) {
              cityMessage = "You live in the capital of USA.";
            } else if (cityLower === "london") {
              cityMessage = "You live in the capital of UK.";
            } else if (cityLower === "paris") {
              cityMessage = "You live in the capital of France.";
            } else if (cityLower === "tokyo") {
              cityMessage = "You live in the capital of Japan.";
            } else if (cityLower === "berlin") {
              cityMessage = "You live in the capital of Germany.";
            } else if (cityLower === "rome") {
              cityMessage = "You live in the capital of Italy.";
            } else if (cityLower === "madrid") {
              cityMessage = "You live in the capital of Spain.";
            } else if (cityLower === "ottawa") {
              cityMessage = "You live in the capital of Canada.";
            } else if (cityLower === "canberra") {
              cityMessage = "You live in the capital of Australia.";
            } else if (cityLower === "moscow") {
              cityMessage = "You live in the capital of Russia.";
            } else if (cityLower === "beijing") {
              cityMessage = "You live in the capital of China.";
            } else if (cityLower === "buenos aires") {
              cityMessage = "You live in the capital of Argentina.";
            } else if (cityLower === "mexico city" || cityLower === "mexico") {
              cityMessage = "You live in the capital of Mexico.";
            } else if (cityLower === "bangkok") {
              cityMessage = "You live in the capital of Thailand.";
            } else if (cityLower === "dublin") {
              cityMessage = "You live in the capital of Ireland.";
            } else {
              cityMessage = `You live in the city of ${city}`;
            }

            let sportLower = sport.trim().toLowerCase();
            let sportMessage;

            if (sportLower === "football") {
              sportMessage = "Cool! Do you want to become the next Messi?";
            } else if (sportLower === "boxing") {
              sportMessage =
                "Cool! Do you want to become the next Muhammad Ali?";
            } else if (sportLower === "tennis") {
              sportMessage =
                "Cool! Do you want to become the next Serena Williams?";
            } else {
              sportMessage = `Your favorite sport is: ${sport}`;
            }
            alert(`Your age: ${age}\n${cityMessage}\n${sportMessage}`);
          }
        }
      }
    }
  }
}
