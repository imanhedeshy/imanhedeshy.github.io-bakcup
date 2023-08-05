console.log("CDA: Constructor Methods");

// constructor to create Entry object
function Entry(title, content, author) {
  this.title = title;
  this.content = content;
  this.author = author;
  this.likes = 0;

  this.displyEntry = () => {
    console.log(`
        ${this.title}
          By: ${this.author} \n
        "${this.content}" \n
          Liked by ${this.likes}
          ---------------
        `);
  };

  this.addLike = (likeNum) => {
    if (!likeNum || likeNum === 1) this.likes++;
    else this.likes += likeNum;
  };

  // Adding displayHTML() method in Entry constructor
  this.displayHTML = () => {
    let entryDiv = document.createElement("div");
    entryDiv.className = "journal__entry";

    let title = document.createElement("h2");
    title.textContent = this.title;
    title.className = "journal__entry__title";

    let author = document.createElement("h3");
    author.textContent = `By: ${this.author}`;
    author.className = "journal__entry__author";

    let content = document.createElement("p");
    content.textContent = this.content;
    content.className = "journal__entry__content";

    let likes = document.createElement("p");
    likes.textContent = `Liked by ${this.likes}`;
    likes.className = "journal__entry__likes";

    let likeButton = document.createElement("button");
    likeButton.textContent = "Like";
    likeButton.className = "journal__entry__like-button";

    // Add an event listener to the like button
    likeButton.addEventListener("click", () => {
      this.likes++;
      likes.textContent = `Liked by ${this.likes}`; // Update the text content of the likes element
    });

    // appending all elements to the entry div
    entryDiv.appendChild(title);
    entryDiv.appendChild(author);
    entryDiv.appendChild(content);
    entryDiv.appendChild(likes);
    entryDiv.appendChild(likeButton); // Append the like button to the entry div

    return entryDiv;
  };
}

// constructor to create Journal object
function Journal(name, entries) {
  this.name = name;
  this.entries = [];
  this.addEntry = (title, content, author) => {
    this.entries.push(new Entry(title, content, author));
  };
  this.deleteEntry = (index) => {
    this.entries.splice(index, 1);
  };
  this.displayEntries = () => {
    this.entries.forEach((entry) => {
      entry.displyEntry();
    });
  };

  this.displayEntriesHTML = () => {
    let journalDiv = document.createElement("div");
    journalDiv.className = "journal";

    this.entries.forEach((entry) => {
      journalDiv.appendChild(entry.displayHTML());
    });

    document.body.appendChild(journalDiv);
  };
}

// adding Journal and entries
const imansJournal = new Journal("Iman's Journal");
imansJournal.addEntry(
  "My First Journey",
  "Today, I started a new journey. It was an exciting and fruitful day.",
  "Iman"
);
imansJournal.addEntry(
  "Hiking Adventure",
  "Went on a hiking adventure with friends. The view from the top was breathtaking.",
  "Iman"
);
imansJournal.addEntry(
  "The Ocean's Serenity",
  "Spent the day at the beach. The serene ocean always has a calming effect on me.",
  "Iman"
);
imansJournal.addEntry(
  "A Book Worth Reading",
  "Finished reading 'To Kill a Mockingbird'. An absolutely brilliant book!",
  "Iman"
);
imansJournal.addEntry(
  "Weekend Getaway",
  "Planning for a weekend getaway. Looking forward to the trip.",
  "Iman"
);

imansJournal.entries[0].addLike(5); // the first entry got 5 likes
imansJournal.entries[1].addLike(10); // the second entry got 10 likes
imansJournal.entries[2].addLike(7); // the third entry got 7 likes
imansJournal.entries[3].addLike(4); // the fourth entry got 4 likes
imansJournal.entries[4].addLike(6); // the fifth entry got 6 likes

const saharsJournal = new Journal("Sahar's Journal");
saharsJournal.addEntry(
  "A New Beginning",
  "Decided to start writing a journal. Looking forward to this new chapter of self-exploration.",
  "Sahar"
);
saharsJournal.addEntry(
  "Cooking Experiments",
  "Tried my hand at Italian cuisine today. Made Spaghetti Carbonara. It turned out great!",
  "Sahar"
);
saharsJournal.addEntry(
  "Nature's Beauty",
  "Went for a walk in the park. The beauty of nature is truly mesmerizing.",
  "Sahar"
);
saharsJournal.addEntry(
  "Art and Inspiration",
  "Visited an art gallery. The paintings were a true source of inspiration.",
  "Sahar"
);
saharsJournal.addEntry(
  "A Day Well Spent",
  "Spent the day with family. It was full of joy and laughter.",
  "Sahar"
);

saharsJournal.entries[0].addLike(3); // the first entry got 3 likes
saharsJournal.entries[1].addLike(8); // the second entry got 8 likes
saharsJournal.entries[2].addLike(5); // the third entry got 5 likes
saharsJournal.entries[3].addLike(7); // the fourth entry got 7 likes
saharsJournal.entries[4].addLike(10); // the fifth entry got 10 likes

imansJournal.displayEntries();

console.log("\n____________________________________________\n");
console.log("\n____________________________________________\n");

saharsJournal.displayEntries();

imansJournal.displayEntriesHTML();

console.log("\n____________________________________________\n");
console.log("\n____________________________________________\n");

saharsJournal.displayEntriesHTML();
