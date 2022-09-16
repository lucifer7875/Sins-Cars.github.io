function getBotResponse(input) {
  //rock paper scissors
  var today = new Date();
  let day;

  if (input == "today?") {
    switch (new Date().getDay()) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
    }
    return "today is " + day;
  } else if (input == "fine") {
    return "Good";
  } else if (input == "what's your name") {
    return "i am Robo version(2.0) speed 10gigabite.";
  } else if (input == "i am bour today") {
    return "let's try some Intresting😍 <br/> what would you like to drink tea or coffee of coldDrink?";
  } else if (input == "tea") {
    return "okay then go canteen or go kitchen and make tea";
  } else if (input == "coffee") {
    return "okay then go canteen or go kitchen and make tea";
  } else if (input == "coldrink") {
    return "okay then you go on shop or mall and buy then drink";
  } else if (input == "i want smoking") {
    return "no yarr it's dangerous for helth but";
  } else if (input == "but i want smoking") {
    return "loda pi le magaj na kha bye<br/> bhosdina have msg na kerto";
  } else if (input == "ok") {
    return "plese don't message me  <br/> 😡bye ";
  }

  // Simple responses
  if (input == "hi buddy!") {
    return "Hello HardikSinh!";
  } else if (input == "goodbye") {
    return "jane jati hoy to 🤦🏻‍♂️";
  } else {
    return "Try asking something else!";
  }
}
