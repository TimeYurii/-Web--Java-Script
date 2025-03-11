import { speakHello } from './SpeakHello.js';
import { speakGoodBye } from './SpeakGoodBye.js';

let names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

for (let i = 0; i < names.length; i++) {
  let name = names[i];

  if (name.charAt(0).toLowerCase() === 'j') {
    speakGoodBye(name); 
  } else {
    speakHello(name); 
  }
}
let names1 = ["Ava", "Liam", "Sophia", "Noah", "Emma", "Jackson", "Olivia", "Lucas", "Isabella", "Ethan"];
console.log("Якщо перша літера імені j або J , виводимо 'Goodbye', інакше - 'Hello'.");

for (let i = 0; i < names1.length; i++) {
    let name = names1[i];
    let lastLetter = name.charAt(name.length - 1).toLowerCase(); 
  
    if ('aeiou'.indexOf(lastLetter) !== -1) {
      speakHello(name); 
    } else {
      speakGoodBye(name); 
    }
  }
  
  console.log("Якщо остання літера імені голосна (a, e, i, o, u), виводимо 'Hello', інакше - 'Goodbye'.");
