export type SeedQuizDTO = {
  name: string;
  slug?: string;
  questions: { question: string; answer: string }[];
};

export const seedQuizzes: SeedQuizDTO[] = [
  {
    name: 'Science Quiz 1',
    slug: 'science-quiz-1',
    questions: [
      {
        question: 'What is the chemical symbol for water?',
        answer: 'H2O',
      },
      {
        question: 'Which planet is known as the "Red Planet"?',
        answer: 'Mars',
      },
      {
        question: 'What is the powerhouse of the cell?',
        answer: 'Mitochondria',
      },
      {
        question: 'Who developed the theory of relativity?',
        answer: 'Albert Einstein',
      },
      {
        question: 'What is the largest organ in the human body?',
        answer: 'Skin',
      },
    ],
  },
  {
    name: 'History Quiz 1',
    slug: 'history-quiz-1',
    questions: [
      {
        question: 'In which year did World War I begin?',
        answer: '1914',
      },
      {
        question: 'Who was the first President of the United States?',
        answer: 'George Washington',
      },
      {
        question: 'Which ancient civilization built the pyramids?',
        answer: 'Egyptians',
      },
      {
        question: 'Who is known as the "Father of India"?',
        answer: 'Mahatma Gandhi',
      },
      {
        question: 'When was the Declaration of Independence signed?',
        answer: '1776',
      },
    ],
  },
  {
    name: 'Geography Quiz 1',
    slug: 'geography-quiz-1',
    questions: [
      {
        question: 'What is the largest continent on Earth?',
        answer: 'Asia',
      },
      {
        question: 'Which river is the longest in the world?',
        answer: 'Nile',
      },
      {
        question: 'What is the capital city of Brazil?',
        answer: 'Brasília',
      },
      {
        question: 'Which ocean is the largest?',
        answer: 'Pacific Ocean',
      },
      {
        question: 'What is the smallest country in the world?',
        answer: 'Vatican City',
      },
    ],
  },
  {
    name: 'Movie Buff Quiz',
    slug: 'movie-buff-quiz',
    questions: [
      {
        question: 'Which movie won the Academy Award for Best Picture in 2020?',
        answer: 'Parasite',
      },
      {
        question: 'Who directed the movie "Inception"?',
        answer: 'Christopher Nolan',
      },
      {
        question:
          'Which actor portrayed Tony Stark in the Marvel Cinematic Universe?',
        answer: 'Robert Downey Jr.',
      },
      {
        question: 'What is the highest-grossing animated movie of all time?',
        answer: 'The Lion King',
      },
      {
        question: 'In "The Matrix," what color pill does Neo take?',
        answer: 'Red',
      },
    ],
  },
  {
    name: 'Music Fan Quiz',
    slug: 'music-fan-quiz',
    questions: [
      {
        question: 'Who is known as the "Queen of Pop"?',
        answer: 'Madonna',
      },
      {
        question: 'Which band performed the hit song "Bohemian Rhapsody"?',
        answer: 'Queen',
      },
      {
        question: 'What is the best-selling album of all time?',
        answer: 'Thriller by Michael Jackson',
      },
      {
        question: 'Who is the lead vocalist of the band U2?',
        answer: 'Bono',
      },
      {
        question: 'Which artist has won the most Grammy Awards?',
        answer: 'Georg Solti',
      },
    ],
  },
  {
    name: 'Tech Guru Quiz',
    slug: 'tech-guru-quiz',
    questions: [
      {
        question: 'Who co-founded Apple Inc. alongside Steve Jobs?',
        answer: 'Steve Wozniak',
      },
      {
        question: 'What does "HTTP" stand for in website addresses?',
        answer: 'Hypertext Transfer Protocol',
      },
      {
        question:
          'What programming language is often used for artificial intelligence?',
        answer: 'Python',
      },
      {
        question: "What is the world's largest tech company by revenue?",
        answer: 'Apple Inc.',
      },
      {
        question: 'Which social media platform was founded by Mark Zuckerberg?',
        answer: 'Facebook',
      },
    ],
  },
  {
    name: 'Foodie Quiz',
    slug: 'foodie-quiz',
    questions: [
      {
        question:
          'What is the main ingredient in traditional Japanese miso soup?',
        answer: 'Miso paste',
      },
      {
        question: 'Which Italian city is famous for its prosciutto ham?',
        answer: 'Parma',
      },
      {
        question: 'What is the national dish of Spain?',
        answer: 'Paella',
      },
      {
        question:
          'Which fruit is known as the "king of fruits" and is famous for its strong smell?',
        answer: 'Durian',
      },
      {
        question: 'What is the primary ingredient in guacamole?',
        answer: 'Avocado',
      },
    ],
  },
  {
    name: 'Literary Classics Quiz',
    slug: 'literary-classics-quiz',
    questions: [
      {
        question: 'Who wrote the novel "Pride and Prejudice"?',
        answer: 'Jane Austen',
      },
      {
        question:
          'In George Orwell\'s "Animal Farm," which animal represents the working class?',
        answer: 'The proletariat',
      },
      {
        question:
          'Which Shakespeare play features the characters Romeo and Juliet?',
        answer: 'Romeo and Juliet',
      },
      {
        question: 'Who is the author of "To Kill a Mockingbird"?',
        answer: 'Harper Lee',
      },
      {
        question:
          'In J.R.R. Tolkien\'s "The Lord of the Rings," what is the One Ring\'s inscription?',
        answer:
          'One ring to rule them all, one ring to find them, one ring to bring them all, and in the darkness bind them.',
      },
    ],
  },
  {
    name: 'Space Exploration Quiz',
    slug: 'space-exploration-quiz',
    questions: [
      {
        question:
          'Which planet is known as the "Morning Star" and "Evening Star"?',
        answer: 'Venus',
      },
      {
        question: "What is the name of NASA's most famous space telescope?",
        answer: 'Hubble Space Telescope',
      },
      {
        question: 'Who was the first human to travel into space?',
        answer: 'Yuri Gagarin',
      },
      {
        question: 'What is the largest moon in the solar system?',
        answer: 'Ganymede',
      },
      {
        question: 'Which spacecraft was the first to land humans on the moon?',
        answer: 'Apollo 11',
      },
    ],
  },
  {
    name: 'Sports Fan Quiz',
    slug: 'sports-fan-quiz',
    questions: [
      {
        question:
          'Which country won the most gold medals in the 2020 Summer Olympics?',
        answer: 'United States',
      },
      {
        question: 'Who is the all-time leading scorer in NBA history?',
        answer: 'Kareem Abdul-Jabbar',
      },
      {
        question: 'In which sport would you perform a "slam dunk"?',
        answer: 'Basketball',
      },
      {
        question: 'Who holds the record for the fastest 100-meter sprint?',
        answer: 'Usain Bolt',
      },
      {
        question: 'What is the national sport of Japan?',
        answer: 'Sumo wrestling',
      },
    ],
  },
  {
    name: 'Art and Artists Quiz',
    slug: 'art-and-artists-quiz',
    questions: [
      {
        question: 'Who painted "Starry Night"?',
        answer: 'Vincent van Gogh',
      },
      {
        question:
          'Which artist is known for his unique style of melting clocks?',
        answer: 'Salvador Dali',
      },
      {
        question: 'Who sculpted the statue of David?',
        answer: 'Michelangelo',
      },
      {
        question:
          'Which art movement includes works like Marcel Duchamp\'s "Fountain"?',
        answer: 'Dadaism',
      },
      {
        question: 'Who is the creator of the famous painting "Mona Lisa"?',
        answer: 'Leonardo da Vinci',
      },
    ],
  },
  {
    name: 'World Capitals Quiz',
    slug: 'world-capitals-quiz',
    questions: [
      {
        question: 'What is the capital city of Australia?',
        answer: 'Canberra',
      },
      {
        question: 'Which European city is known as the "City of Light"?',
        answer: 'Paris',
      },
      {
        question: 'What is the capital of Canada?',
        answer: 'Ottawa',
      },
      {
        question: 'In which country can you find the city of Marrakech?',
        answer: 'Morocco',
      },
      {
        question: 'What is the capital of South Korea?',
        answer: 'Seoul',
      },
    ],
  },
  {
    name: 'Famous Inventors Quiz',
    slug: 'famous-inventors-quiz',
    questions: [
      {
        question: 'Who invented the telephone?',
        answer: 'Alexander Graham Bell',
      },
      {
        question:
          'Which inventor is credited with the creation of the light bulb?',
        answer: 'Thomas Edison',
      },
      {
        question: 'Who is known for inventing the first practical airplane?',
        answer: 'Wright brothers (Orville and Wilbur)',
      },
      {
        question: 'Who developed the first polio vaccine?',
        answer: 'Jonas Salk',
      },
      {
        question: 'What did Marie Curie discover?',
        answer: 'Radium and Polonium',
      },
    ],
  },
  {
    name: 'Mythology Quiz',
    slug: 'mythology-quiz',
    questions: [
      {
        question: 'Who is the king of the gods in Greek mythology?',
        answer: 'Zeus',
      },
      {
        question:
          'What creature in Egyptian mythology has the body of a lion and the head of a human?',
        answer: 'Sphinx',
      },
      {
        question: 'Who is the god of war in Norse mythology?',
        answer: 'Thor',
      },
      {
        question:
          'In Hindu mythology, who is the god of beginnings and the remover of obstacles?',
        answer: 'Ganesha',
      },
      {
        question: 'Who is the goddess of wisdom in Roman mythology?',
        answer: 'Minerva',
      },
    ],
  },
  {
    name: 'Environmental Awareness Quiz',
    slug: 'environmental-awareness-quiz',
    questions: [
      {
        question:
          'What is the primary greenhouse gas responsible for global warming?',
        answer: 'Carbon dioxide (CO2)',
      },
      {
        question: 'Which animal is a symbol of endangered species?',
        answer: 'Giant Panda',
      },
      {
        question:
          "What is the process of a gradual increase in Earth's temperature called?",
        answer: 'Global warming',
      },
      {
        question: 'Which natural disaster is measured using the Richter scale?',
        answer: 'Earthquake',
      },
      {
        question:
          'What is the term for the loss of a species from a particular habitat or from the entire planet?',
        answer: 'Extinction',
      },
    ],
  },
  {
    name: 'Language and Linguistics Quiz',
    slug: 'language-linguistics-quiz',
    questions: [
      {
        question: 'What is the most widely spoken language in the world?',
        answer: 'Mandarin Chinese',
      },
      {
        question:
          'What is the study of the origin and history of words called?',
        answer: 'Etymology',
      },
      {
        question: 'Which language is known as the "Language of Love"?',
        answer: 'French',
      },
      {
        question: 'What is the smallest unit of meaning in a word?',
        answer: 'Morpheme',
      },
      {
        question: 'In linguistics, what does the acronym "TESOL" stand for?',
        answer: 'Teaching English to Speakers of Other Languages',
      },
    ],
  },
  {
    name: 'Space and Astronomy Quiz',
    slug: 'space-astronomy-quiz',
    questions: [
      {
        question: 'What is the largest planet in our solar system?',
        answer: 'Jupiter',
      },
      {
        question: 'What is the name of the nearest galaxy to the Milky Way?',
        answer: 'Andromeda Galaxy',
      },
      {
        question: 'What is the phenomenon where light is bent due to gravity?',
        answer: 'Gravitational Lensing',
      },
      {
        question: 'What type of celestial body is a comet?',
        answer: 'Dirty Snowball (or Snowy Dirtball)',
      },
      {
        question: 'What is the study of stars and galaxies called?',
        answer: 'Astronomy',
      },
    ],
  },
  {
    name: 'Psychology Quiz',
    slug: 'psychology-quiz',
    questions: [
      {
        question: 'Who is considered the father of psychoanalysis?',
        answer: 'Sigmund Freud',
      },
      {
        question: 'What is the fear of spiders called?',
        answer: 'Arachnophobia',
      },
      {
        question:
          'Which part of the brain is associated with emotions and memory?',
        answer: 'Amygdala',
      },
      {
        question:
          'What is the term for a person who studies behavior and mental processes?',
        answer: 'Psychologist',
      },
      {
        question: 'What is the nature vs. nurture debate in psychology?',
        answer:
          'Debate about the relative importance of genetic inheritance (nature) and environmental factors (nurture) in determining human traits and behaviors.',
      },
    ],
  },
  {
    name: 'Travel and Tourism Quiz',
    slug: 'travel-tourism-quiz',
    questions: [
      {
        question: 'What is the capital city of Thailand?',
        answer: 'Bangkok',
      },
      {
        question: 'Which country is known as the Land of the Rising Sun?',
        answer: 'Japan',
      },
      {
        question: 'What is the tallest mountain in Africa?',
        answer: 'Mount Kilimanjaro',
      },
      {
        question: 'Which city is famous for its canals and gondolas?',
        answer: 'Venice, Italy',
      },
      {
        question: 'What is the currency of Brazil?',
        answer: 'Brazilian Real',
      },
    ],
  },
  {
    name: 'Music History Quiz',
    slug: 'music-history-quiz',
    questions: [
      {
        question: 'Who is often called the "King of Pop"?',
        answer: 'Michael Jackson',
      },
      {
        question:
          'Which musical era was characterized by composers like Mozart and Beethoven?',
        answer: 'Classical Era',
      },
      {
        question: "What is the name of The Beatles' first studio album?",
        answer: 'Please Please Me',
      },
      {
        question: 'Who is known for the hit single "Like a Rolling Stone"?',
        answer: 'Bob Dylan',
      },
      {
        question:
          'Which instrument did famous composer Johann Sebastian Bach primarily play?',
        answer: 'Organ',
      },
    ],
  },
  {
    name: 'Technology Innovations Quiz',
    slug: 'tech-innovations-quiz',
    questions: [
      {
        question: 'What was the first commercially successful video game?',
        answer: 'Pong',
      },
      {
        question: 'Which company developed the first computer mouse?',
        answer: 'Xerox',
      },
      {
        question: 'What does "URL" stand for in web addresses?',
        answer: 'Uniform Resource Locator',
      },
      {
        question: 'Who co-founded Apple Inc. with Steve Jobs?',
        answer: 'Steve Wozniak',
      },
      {
        question:
          'What is the primary programming language used for building Android apps?',
        answer: 'Java',
      },
    ],
  },
  {
    name: 'Human Body Quiz',
    slug: 'human-body-quiz',
    questions: [
      {
        question: "What is the body's largest organ?",
        answer: 'Skin',
      },
      {
        question: 'What is the smallest bone in the human body?',
        answer: 'Stapes (in the ear)',
      },
      {
        question: 'How many chambers are there in the human heart?',
        answer: 'Four',
      },
      {
        question: 'Which gas do humans exhale when they breathe?',
        answer: 'Carbon dioxide (CO2)',
      },
      {
        question: "What is the body's main energy currency?",
        answer: 'Adenosine Triphosphate (ATP)',
      },
    ],
  },
  {
    name: 'Inventions and Discoveries Quiz',
    slug: 'inventions-discoveries-quiz',
    questions: [
      {
        question: 'Who invented the telephone?',
        answer: 'Alexander Graham Bell',
      },
      {
        question: 'What did Marie Curie discover?',
        answer: 'Radium and Polonium',
      },
      {
        question: 'Who is credited with the discovery of penicillin?',
        answer: 'Alexander Fleming',
      },
      {
        question: "What is the world's first known computer programmer?",
        answer: 'Ada Lovelace',
      },
      {
        question: 'Who invented the first practical electric light bulb?',
        answer: 'Thomas Edison',
      },
    ],
  },
];
