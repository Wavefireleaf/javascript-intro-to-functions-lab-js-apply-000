function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
<<<<<<< HEAD
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() == string) {
    return "I can't hear you!";
  }
  if (string.toUpperCase() == string) {
    return "YES INDEED!";
  }
  if (string == "I love you, Grandma.") {
    return "I love you, too.";
  }
}


  
=======
  const spy = 'console.log()'.toUpperCase;
}
>>>>>>> 14437957ee0f7c404fa37ed6e33a8843c722a31c
