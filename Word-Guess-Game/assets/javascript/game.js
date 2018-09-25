$(document).ready(function() {
  // variables

  var movies = {
    // 250 movie list and imdbID
    title: [
      "The Shawshank Redemption",
      "The Godfather",
      "The Godfather: Part II",
      "The Dark Knight",
      "12 Angry Men",
      "Schindler's List",
      "The Lord of the Rings: The Return of the King",
      "Pulp Fiction",
      "Fight Club",
      "The Lord of the Rings: The Fellowship of the Ring",
      "Forrest Gump",
      "Star Wars: Episode V - The Empire Strikes Back",
      "Inception",
      "The Lord of the Rings: The Two Towers",
      "One Flew Over the Cuckoo's Nest",
      "Goodfellas",
      "The Matrix",
      "Star Wars: Episode IV - A New Hope",
      "Se7en",
      "It's a Wonderful Life",
      "The Silence of the Lambs",
      "The Usual Suspects",
      "Léon: The Professional",
      "Saving Private Ryan",
      "City Lights",
      "Interstellar",
      "American History X",
      "Modern Times",
      "Casablanca",
      "The Green Mile",
      "Psycho",
      "Raiders of the Lost Ark",
      "The Pianist",
      "Rear Window",
      "The Departed",
      "Whiplash",
      "Terminator 2: Judgment Day",
      "Back to the Future",
      "Gladiator",
      "The Lion King",
      "The Prestige",
      "Apocalypse Now",
      "Memento",
      "The Great Dictator",
      "Sunset Boulevard",
      "Alien",
      "Dr. Strangelove",
      "Paths of Glory",
      "Django Unchained",
      "The Shining",
      "Witness for the Prosecution",
      "The Dark Knight Rises",
      "WALL·E",
      "American Beauty",
      "Once Upon a Time in America",
      "Aliens",
      "Citizen Kane",
      "North by Northwest",
      "Vertigo",
      "Star Wars: Episode VI - Return of the Jedi",
      "Braveheart",
      "Reservoir Dogs",
      "Double Indemnity",
      "Requiem for a Dream",
      "Lawrence of Arabia",
      "The Kid",
      "A Clockwork Orange",
      "Amadeus",
      "To Kill a Mockingbird",
      "Eternal Sunshine of the Spotless Mind",
      "Singin' in the Rain",
      "Taxi Driver",
      "The Sting",
      "Toy Story 3",
      "2001: A Space Odyssey",
      "Full Metal Jacket",
      "Baby Driver",
      "Toy Story",
      "Inglourious Basterds",
      "Snatch",
      "The Apartment",
      "All About Eve",
      "Monty Python and the Holy Grail",
      "Scarface",
      "L.A. Confidential",
      "Good Will Hunting",
      "The Treasure of the Sierra Madre",
      "Indiana Jones and the Last Crusade",
      "Some Like It Hot",
      "Batman Begins",
      "Up",
      "The Third Man",
      "Unforgiven",
      "Judgment at Nuremberg",
      "Raging Bull",
      "The Great Escape",
      "Heat",
      "Die Hard",
      "The Gold Rush",
      "Chinatown",
      "On the Waterfront",
      "Mr. Smith Goes to Washington",
      "The General",
      "Inside Out",
      "The Bridge on the River Kwai",
      "Room",
      "La La Land",
      "Logan",
      "Blade Runner",
      "Lock, Stock and Two Smoking Barrels",
      "Casino",
      "A Beautiful Mind",
      "The Elephant Man",
      "Warrior",
      "V for Vendetta",
      "The Wolf of Wall Street",
      "Dial M for Murder",
      "Hacksaw Ridge",
      "Gone with the Wind",
      "The Message",
      "Rebecca",
      "Trainspotting",
      "The Deer Hunter",
      "Cool Hand Luke",
      "Gran Torino",
      "The Big Lebowski",
      "The Thing",
      "It Happened One Night",
      "Fargo",
      "The Sixth Sense",
      "Finding Nemo",
      "Mary and Max",
      "No Country for Old Men",
      "How to Train Your Dragon",
      "There Will Be Blood",
      "Into the Wild",
      "Kill Bill: Vol. 1",
      "Gone Girl",
      "Life of Brian",
      "Network",
      "Shutter Island",
      "In the Name of the Father",
      "Rush",
      "Hotel Rwanda",
      "Platoon",
      "Song of the Sea",
      "Ben-Hur",
      "Stand by Me",
      "Hachi: A Dog's Tale",
      "Kind Hearts and Coronets",
      "The Maltese Falcon",
      "Butch Cassidy and the Sundance Kid",
      "The Legend of 1900",
      "Spotlight",
      "Brief Encounter",
      "The Best Years of Our Lives",
      "The Grapes of Wrath",
      "12 Years a Slave",
      "The Grand Budapest Hotel",
      "Mad Max: Fury Road",
      "The Princess Bride",
      "What Ever Happened to Baby Jane?",
      "Million Dollar Baby",
      "Jurassic Park",
      "Touch of Evil",
      "Spider-Man: Homecoming",
      "Before Sunrise",
      "The Truman Show",
      "Harry Potter and the Deathly Hallows: Part 2",
      "Star Wars: The Force Awakens",
      "Paris, Texas",
      "The Last Picture Show",
      "Gandhi",
      "Barry Lyndon",
      "Rocky",
      "Annie Hall",
      "Prisoners",
      "Donnie Darko",
      "Catch Me If You Can",
      "The Man Who Shot Liberty Valance",
      "Laura",
      "Monsters, Inc.",
      "The Bourne Ultimatum",
      "Cat on a Hot Tin Roof",
      "The Wizard of Oz",
      "Sleuth",
      "Roman Holiday",
      "Out of the Past",
      "Anatomy of a Murder",
      "Who's Afraid of Virginia Woolf?",
      "The Terminator",
      "Groundhog Day",
      "The Help",
      "Strangers on a Train",
      "The Night of the Hunter",
      "All Quiet on the Western Front",
      "Beauty and the Beast",
      "Lion",
      "Twelve Monkeys",
      "Guardians of the Galaxy",
      "Dog Day Afternoon",
      "Jaws",
      "Zootopia",
      "Guardians of the Galaxy Vol. 2",
      "Pirates of the Caribbean: The Curse of the Black Pearl",
      "Before Sunset",
      "The Imitation Game",
      "Young Frankenstein",
      "Stalag 17",
      "Dogville",
      "Dead Poets Society",
      "High Noon",
      "Papillon",
      "A Streetcar Named Desire",
      "Arsenic and Old Lace",
      "Sin City",
      "The Hustler",
      "A Night at the Opera",
      "The Killing",
      "The Avengers",
      "Notorious",
      "Harvey",
      "The Martian",
      "The Exorcist",
      "Rio Bravo",
      "The Philadelphia Story",
      "Rope",
      "The Big Sleep",
      "Pink Floyd: The Wall",
      "The King's Speech",
      "A Christmas Story",
      "The Graduate",
      "JFK",
      "Sling Blade",
      "Blood Diamond",
      "Magnolia",
      "Rain Man",
      "The Revenant",
      "The Nightmare Before Christmas",
      "The Manchurian Candidate",
      "Deadpool",
      "The Wild Bunch",
      "Aladdin",
      "Big Fish",
      "Patton",
      "The Lost Weekend",
      "Short Term 12",
      "His Girl Friday",
      "The Straight Story",
      "Slumdog Millionaire"
    ],
    imdbID: [
      "tt0111161",
      "tt0068646",
      "tt0071562",
      "tt0468569",
      "tt0050083",
      "tt0108052",
      "tt0167260",
      "tt0110912",
      "tt0137523",
      "tt0120737",
      "tt0109830",
      "tt0080684",
      "tt1375666",
      "tt0167261",
      "tt0073486",
      "tt0099685",
      "tt0133093",
      "tt0076759",
      "tt0114369",
      "tt0038650",
      "tt0102926",
      "tt0114814",
      "tt0110413",
      "tt0120815",
      "tt0021749",
      "tt0816692",
      "tt0120586",
      "tt0027977",
      "tt0034583",
      "tt0120689",
      "tt0054215",
      "tt0082971",
      "tt0253474",
      "tt0047396",
      "tt0407887",
      "tt2582802",
      "tt0103064",
      "tt0088763",
      "tt0172495",
      "tt0110357",
      "tt0482571",
      "tt0078788",
      "tt0209144",
      "tt0032553",
      "tt0043014",
      "tt0078748",
      "tt0057012",
      "tt0050825",
      "tt1853728",
      "tt0081505",
      "tt0051201",
      "tt1345836",
      "tt0910970",
      "tt0169547",
      "tt0087843",
      "tt0090605",
      "tt0033467",
      "tt0053125",
      "tt0052357",
      "tt0086190",
      "tt0112573",
      "tt0105236",
      "tt0036775",
      "tt0180093",
      "tt0056172",
      "tt0012349",
      "tt0066921",
      "tt0086879",
      "tt0056592",
      "tt0338013",
      "tt0045152",
      "tt0075314",
      "tt0070735",
      "tt0435761",
      "tt0062622",
      "tt0093058",
      "tt3890160",
      "tt0114709",
      "tt0361748",
      "tt0208092",
      "tt0053604",
      "tt0042192",
      "tt0071853",
      "tt0086250",
      "tt0119488",
      "tt0119217",
      "tt0040897",
      "tt0097576",
      "tt0053291",
      "tt0372784",
      "tt1049413",
      "tt0041959",
      "tt0105695",
      "tt0055031",
      "tt0081398",
      "tt0057115",
      "tt0113277",
      "tt0095016",
      "tt0015864",
      "tt0071315",
      "tt0047296",
      "tt0031679",
      "tt0017925",
      "tt2096673",
      "tt0050212",
      "tt3170832",
      "tt3783958",
      "tt3315342",
      "tt0083658",
      "tt0120735",
      "tt0112641",
      "tt0268978",
      "tt0080678",
      "tt1291584",
      "tt0434409",
      "tt0993846",
      "tt0046912",
      "tt2119532",
      "tt0031381",
      "tt0074896",
      "tt0032976",
      "tt0117951",
      "tt0077416",
      "tt0061512",
      "tt1205489",
      "tt0118715",
      "tt0084787",
      "tt0025316",
      "tt0116282",
      "tt0167404",
      "tt0266543",
      "tt0978762",
      "tt0477348",
      "tt0892769",
      "tt0469494",
      "tt0758758",
      "tt0266697",
      "tt2267998",
      "tt0079470",
      "tt0074958",
      "tt1130884",
      "tt0107207",
      "tt1979320",
      "tt0395169",
      "tt0091763",
      "tt1865505",
      "tt0052618",
      "tt0092005",
      "tt1028532",
      "tt0041546",
      "tt0033870",
      "tt0064115",
      "tt0120731",
      "tt1895587",
      "tt0037558",
      "tt0036868",
      "tt0032551",
      "tt2024544",
      "tt2278388",
      "tt1392190",
      "tt0093779",
      "tt0056687",
      "tt0405159",
      "tt0107290",
      "tt0052311",
      "tt2250912",
      "tt0112471",
      "tt0120382",
      "tt1201607",
      "tt2488496",
      "tt0087884",
      "tt0067328",
      "tt0083987",
      "tt0072684",
      "tt0075148",
      "tt0075686",
      "tt1392214",
      "tt0246578",
      "tt0264464",
      "tt0056217",
      "tt0037008",
      "tt0198781",
      "tt0440963",
      "tt0051459",
      "tt0032138",
      "tt0069281",
      "tt0046250",
      "tt0039689",
      "tt0052561",
      "tt0061184",
      "tt0088247",
      "tt0107048",
      "tt1454029",
      "tt0044079",
      "tt0048424",
      "tt0020629",
      "tt0101414",
      "tt3741834",
      "tt0114746",
      "tt2015381",
      "tt0072890",
      "tt0073195",
      "tt2948356",
      "tt3896198",
      "tt0325980",
      "tt0381681",
      "tt2084970",
      "tt0072431",
      "tt0046359",
      "tt0276919",
      "tt0097165",
      "tt0044706",
      "tt0070511",
      "tt0044081",
      "tt0036613",
      "tt0401792",
      "tt0054997",
      "tt0026778",
      "tt0049406",
      "tt0848228",
      "tt0038787",
      "tt0042546",
      "tt3659388",
      "tt0070047",
      "tt0053221",
      "tt0032904",
      "tt0040746",
      "tt0038355",
      "tt0084503",
      "tt1504320",
      "tt0085334",
      "tt0061722",
      "tt0102138",
      "tt0117666",
      "tt0450259",
      "tt0175880",
      "tt0095953",
      "tt1663202",
      "tt0107688",
      "tt0056218",
      "tt1431045",
      "tt0065214",
      "tt0103639",
      "tt0319061",
      "tt0066206",
      "tt0037884",
      "tt2370248",
      "tt0032599",
      "tt0166896",
      "tt1010048"
    ]
  };

  var letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];

  var game;
  var wins = 0;
  var losses = 0;
  var MAX_MISSES = 7;

  function start() {
    if (game) {
      resetButtons();
    }
    // position in the array
    var order = Math.floor(Math.random() * 249);
    // add imdbID to link in index
    var link = "http://www.imdb.com/title/" + movies.imdbID[order] + "/";
    $("#link a").attr("href", link);
    //variables
    var movie = movies.title[order].toUpperCase();

    // make the dashes and remaining values
    var dashes = [];
    var remaining = [];
    for (i = 0; i < movie.length; i++) {
      if (letters.indexOf(movie[i]) > -1) {
        dashes[i] = "-";
        if (remaining.indexOf(movie[i]) === -1) {
          remaining.push(movie[i]);
        }
      } else {
        dashes[i] = movie[i];
      }
    }

    game = {
      movie: movie,
      dashes: dashes,
      remaining: remaining,
      misses: 0,
      link: link
    };

    // set the dashes text
    updateUI();
  }
  // makes the letter buttons
  function makeButtons() {
    for (i = 0; i < letters.length; i++) {
      $("#buttons").append(
        $("<button>")
          .addClass("click-letter")
          .attr("id", letters[i])
          .text(letters[i])
      );
    }
    $(".click-letter").on("click", clickButton);
  }

  function clickButton(event) {
    var clicked = $(event.target);
    var letter = clicked.text();
    pickLetter(letter);
  }

  function keystroke(event) {
    if (game) {
      var pressed = String.fromCharCode(event.keyCode).toUpperCase();
      pickLetter(pressed);
    } else {
      start();
    }
  }

  function pickLetter(letter) {
    var idx = game.remaining.indexOf(letter);

    if (letters.indexOf(letter) <= -1) {
      return;
    }

    $("#" + letter)
      .addClass("bg-dark text-white")
      .attr("disabled", true);

    if (idx > -1) {
      // correct guess
      game.remaining.splice(idx, 1);

      for (i = 0; i < game.movie.length; i++) {
        if (game.movie[i] === letter) {
          game.dashes[i] = letter;
        }
      }
      if (game.remaining.length < 1) {
        youWon();
      }
    } else {
      // incorrect guess
      game.misses++;
      if (game.misses >= MAX_MISSES) youLost();
    }

    updateUI();
  }
  // function called when game won
  function youWon() {
    wins++;
    $(".click-letter").attr("disabled", true);
    $("#link")
      .addClass("a.currentlyActive")
      .text("Congratulations you did it, now check out the movie!")
      .attr("href", game.link);
  }
  //function called when game lost
  function youLost() {
    losses++;
    $(".click-letter").attr("disabled", true);
    $("#link")
      .text(
        "Uh-oh the princess is another castle, you might want to check out the movie!"
      )
      .attr("href", game.link);
  }

  // reset buttons
  function resetButtons() {
    $(".click-letter")
      .removeClass("bg-dark text-white")
      .removeAttr("disabled", true);
  }

  function updateUI() {
    $("#dash-zone").text(game.dashes.join(""));
    $("#remaining").text(game.remaining.length);
    $("#answer").text(game.movie);
    $("#misses").text(game.misses);
    $("#wins").text(wins);
    $("#losses").text(losses);
  }

  setTimeout(function() {
    $(document).on("keyup", keystroke);
  }, 1000);

  $("#start").on("click", start);
  makeButtons();
  // start();
});
