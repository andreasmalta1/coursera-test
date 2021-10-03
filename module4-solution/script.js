(function (names) {
  for (var i = 0; i < names.length; i++) {
      var firstletter = char = names[i].charAt(0).toLowerCase()
      if (char=="j"){
          byeSpeaker.speak(names[i])
          
        } else {
          helloSpeaker.speak(names[i])
        }
      }
})(["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"]);

