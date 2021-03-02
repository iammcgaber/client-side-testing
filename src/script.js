
    const puns = [
      "My ceiling isn't the best, but it's up there.",
      'I got fired from the calendar factory, just for taking a day off.',
      "Q: What's the best thing about Switzerland? A: Well, the flag is a big plus.",
      'The past, present, and future walk into a bar. It was tense.',
      'I tried to make a belt out of watches. It was a waist of time.',
      "Why can't Harry Potter tell the difference between his potion pot and his best friend? They're both cauld ron.",
      "I'm afraid of negative numbers. I'll stop at nothing to avoid them.",
      "Two antennas got married. The ceremony wasn't much, but the reception was excellent.",
      'RIP boiling water. You will be mist.',
      'I met a criminal with a bounty on his head. That was a weird place to keep paper towels.',
      'I did a theatrical performance about puns. It was a play on words.',
      'Knowing how to pick locks has opened a lot of doors for me.',
      'I should have been sad when my flashlight batteries died, but I was delighted.',
      "Santa Claus's elves are subordinate clauses.",
      "I'm designing a reversible jacket. I'm excited to see how it turns out.",
    ];
    let counter = 0;

    const appendNewPun = () => {
      const p = document.createElement('p');
      p.innerHTML = puns[counter++] || "I'm all out of puns!";
      document.querySelector('#pun-container').prepend(p);
    }

    const button = document.querySelector('button');
    button.addEventListener('click', appendNewPun);
  

    const addNewH1Tag = () => {
        const hOne = document.createElement("h2")
        hOne.innerHTML = "Hi There"
        document.querySelector("#allThePun").prepend(hOne)
    }

    const addNewH3Tag = () => {
        $("h1").prepend("<h3>Yo yo yo</h3>")
    }

    addNewH1Tag()
    addNewH3Tag()