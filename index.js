function scuberGreetingForFeet(feet) {
  // Write your code here!
  if (feet < 400) {
    return "This one is on me!";
  }
  else if (feet > 2500) {
    return 'No can do.';
  }
  else if (feet > 2000) {
    return 'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  const message = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return message
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  let response;
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    //  break;
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
    }
 
}
//two options for return - the reason to use 'break' exits the switch case
//
