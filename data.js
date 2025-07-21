var quotes = [
  {
    id: 1,
    quoteText: "The best way to predict the future is to create it.",
    quoteAuthor: "Peter Drucker",
  },
  {
    id: 2,
    quoteText: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    quoteAuthor: "Winston Churchill",
  },
  {
    id: 3,
    quoteText: "In the middle of every difficulty lies opportunity.",
    quoteAuthor: "Albert Einstein",
  },
  {
    id: 4,
    quoteText: "Do what you can with what you have, where you are.",
    quoteAuthor: "Theodore Roosevelt",
  },
  {
    id: 5,
    quoteText: "Happiness depends upon ourselves.",
    quoteAuthor: "Aristotle",
  },
  {
    id: 6,
    quoteText: "Everything you can imagine is real.",
    quoteAuthor: "Pablo Picasso",
  },
  {
    id: 7,
    quoteText: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    quoteAuthor: "Ralph Waldo Emerson",
  },
  {
    id: 8,
    quoteText: "It always seems impossible until it is done.",
    quoteAuthor: "Nelson Mandela",
  },
  {
    id: 9,
    quoteText: "Turn your wounds into wisdom.",
    quoteAuthor: "Oprah Winfrey",
  },
  {
    id: 10,
    quoteText: "The future belongs to those who believe in the beauty of their dreams.",
    quoteAuthor: "Eleanor Roosevelt",
  },
  {
    id: 11,
    quoteText: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    quoteAuthor: "Walt Whitman",
  },
  {
    id: 12,
    quoteText: "Believe you can and you're halfway there.",
    quoteAuthor: "Theodore Roosevelt",
  },
  {
    id: 13,
    quoteText: "Change your thoughts and you change your world.",
    quoteAuthor: "Norman Vincent Peale",
  },
  {
    id: 14,
    quoteText: "Act as if what you do makes a difference. It does.",
    quoteAuthor: "William James",
  },
  {
    id: 15,
    quoteText: "With the new day comes new strength and new thoughts.",
    quoteAuthor: "Eleanor Roosevelt",
  },
  {
    id: 16,
    quoteText: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    quoteAuthor: "Zig Ziglar",
  },
  {
    id: 17,
    quoteText: "Hardships often prepare ordinary people for an extraordinary destiny.",
    quoteAuthor: "C.S. Lewis",
  },
  {
    id: 18,
    quoteText: "Opportunities don't happen. You create them.",
    quoteAuthor: "Chris Grosser",
  },
  {
    id: 19,
    quoteText: "Don't let yesterday take up too much of today.",
    quoteAuthor: "Will Rogers",
  },
  {
    id: 20,
    quoteText: "Failure is simply the opportunity to begin again, this time more intelligently.",
    quoteAuthor: "Henry Ford",
  },
  {
    id: 21,
    quoteText: "Perseverance is not a long race; it is many short races one after the other.",
    quoteAuthor: "Walter Elliot",
  },
  {
    id: 22,
    quoteText: "Don't watch the clock; do what it does. Keep going.",
    quoteAuthor: "Sam Levenson",
  },
  {
    id: 23,
    quoteText: "Quality is not an act, it is a habit.",
    quoteAuthor: "Aristotle",
  },
  {
    id: 24,
    quoteText: "The way to get started is to quit talking and begin doing.",
    quoteAuthor: "Walt Disney",
  },
  {
    id: 25,
    quoteText: "The secret of getting ahead is getting started.",
    quoteAuthor: "Mark Twain",
  },
  {
    id: 26,
    quoteText: "Don't be afraid to give up the good to go for the great.",
    quoteAuthor: "John D. Rockefeller",
  },
  {
    id: 27,
    quoteText: "Do one thing every day that scares you.",
    quoteAuthor: "Eleanor Roosevelt",
  },
  {
    id: 28,
    quoteText: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    quoteAuthor: "Eleanor Roosevelt",
  },
  {
    id: 29,
    quoteText: "A person who never made a mistake never tried anything new.",
    quoteAuthor: "Albert Einstein",
  },
  {
    id: 30,
    quoteText: "Dream big and dare to fail.",
    quoteAuthor: "Norman Vaughan",
  },
  {
    id: 31,
    quoteText: "Do not wait; the time will never be 'just right.'",
    quoteAuthor: "Napoleon Hill",
  },
  {
    id: 32,
    quoteText: "It does not matter how slowly you go as long as you do not stop.",
    quoteAuthor: "Confucius",
  },
  {
    id: 33,
    quoteText: "Everything you've ever wanted is on the other side of fear.",
    quoteAuthor: "George Addair",
  },
  {
    id: 34,
    quoteText: "Your time is limited, so don't waste it living someone else's life.",
    quoteAuthor: "Steve Jobs",
  },
  {
    id: 35,
    quoteText: "The only limit to our realization of tomorrow is our doubts of today.",
    quoteAuthor: "Franklin D. Roosevelt",
  },
  {
    id: 36,
    quoteText: "Don't count the days, make the days count.",
    quoteAuthor: "Muhammad Ali",
  },
  {
    id: 37,
    quoteText: "I never dream of success. I worked for it.",
    quoteAuthor: "Estee Lauder",
  },
  {
    id: 38,
    quoteText: "Push yourself, because no one else is going to do it for you.",
    quoteAuthor: "Unknown",
  },
  {
    id: 39,
    quoteText: "Great things never come from comfort zones.",
    quoteAuthor: "Unknown",
  },
  {
    id: 40,
    quoteText: "Dream it. Wish it. Do it.",
    quoteAuthor: "Unknown",
  },
  {
    id: 41,
    quoteText: "Success doesn't just find you. You have to go out and get it.",
    quoteAuthor: "Unknown",
  },
  {
    id: 42,
    quoteText: "The harder you work for something, the greater you'll feel when you achieve it.",
    quoteAuthor: "Unknown",
  },
  {
    id: 43,
    quoteText: "Dream bigger. Do bigger.",
    quoteAuthor: "Unknown",
  },
  {
    id: 44,
    quoteText: "Don't stop when you're tired. Stop when you're done.",
    quoteAuthor: "Unknown",
  },
  {
    id: 45,
    quoteText: "Wake up with determination. Go to bed with satisfaction.",
    quoteAuthor: "Unknown",
  },
  {
    id: 46,
    quoteText: "Do something today that your future self will thank you for.",
    quoteAuthor: "Unknown",
  },
  {
    id: 47,
    quoteText: "Little things make big days.",
    quoteAuthor: "Unknown",
  },
  {
    id: 48,
    quoteText: "It's going to be hard, but hard does not mean impossible.",
    quoteAuthor: "Unknown",
  },
  {
    id: 49,
    quoteText: "Don't wait for opportunity. Create it.",
    quoteAuthor: "Unknown",
  },
  {
    id: 50,
    quoteText: "Sometimes we're tested not to show our weaknesses, but to discover our strengths.",
    quoteAuthor: "Unknown",
  },
  {
    id: 51,
    quoteText: "The key to success is to focus on goals, not obstacles.",
    quoteAuthor: "Unknown",
  },
  {
    id: 52,
    quoteText: "Dreams don't work unless you do.",
    quoteAuthor: "John C. Maxwell",
  },
  {
    id: 53,
    quoteText: "Don't limit your challenges. Challenge your limits.",
    quoteAuthor: "Unknown",
  },
  {
    id: 54,
    quoteText: "Good things come to those who hustle.",
    quoteAuthor: "Anais Nin",
  },
  {
    id: 55,
    quoteText: "Success is what happens after you have survived all your mistakes.",
    quoteAuthor: "Tino",
  },
  {
    id: 56,
    quoteText: "Motivation is what gets you started. Habit is what keeps you going.",
    quoteAuthor: "Jim Ryun",
  },
  {
    id: 57,
    quoteText: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    quoteAuthor: "Roy T. Bennett",
  },
  {
    id: 58,
    quoteText: "Success is not how high you have climbed, but how you make a positive difference to the world.",
    quoteAuthor: "Roy T. Bennett",
  },
  {
    id: 59,
    quoteText: "Courage is one step ahead of fear.",
    quoteAuthor: "Coleman Young",
  },
  {
    id: 60,
    quoteText: "Everything you want is on the other side of fear.",
    quoteAuthor: "Jack Canfield",
  },
  {
    id: 61,
    quoteText: "If you want to achieve greatness stop asking for permission.",
    quoteAuthor: "Unknown",
  },
  {
    id: 62,
    quoteText: "Things work out best for those who make the best of how things work out.",
    quoteAuthor: "John Wooden",
  },
  {
    id: 63,
    quoteText: "To live a creative life, we must lose our fear of being wrong.",
    quoteAuthor: "Joseph Chilton Pearce",
  },
  {
    id: 64,
    quoteText: "If you are not willing to risk the unusual, you will have to settle for the ordinary.",
    quoteAuthor: "Jim Rohn",
  },
  {
    id: 65,
    quoteText: "Trust because you are willing to accept the risk, not because it's safe or certain.",
    quoteAuthor: "Unknown",
  },
  {
    id: 66,
    quoteText: "All our dreams can come true if we have the courage to pursue them.",
    quoteAuthor: "Walt Disney",
  },
  {
    id: 67,
    quoteText: "Good things come to people who wait, but better things come to those who go out and get them.",
    quoteAuthor: "Unknown",
  },
  {
    id: 68,
    quoteText: "If you do what you always did, you will get what you always got.",
    quoteAuthor: "Unknown",
  },
  {
    id: 69,
    quoteText: "Success is walking from failure to failure with no loss of enthusiasm.",
    quoteAuthor: "Winston Churchill",
  },
  {
    id: 70,
    quoteText: "Just when the caterpillar thought the world was ending, he turned into a butterfly.",
    quoteAuthor: "Proverb",
  },
  {
    id: 71,
    quoteText: "Successful people do what unsuccessful people are not willing to do.",
    quoteAuthor: "Jim Rohn",
  },
  {
    id: 72,
    quoteText: "The ones who are crazy enough to think they can change the world, are the ones who do.",
    quoteAuthor: "Rob Siltanen",
  },
  {
    id: 73,
    quoteText: "Do one thing every day that scares you.",
    quoteAuthor: "Eleanor Roosevelt",
  },
  {
    id: 74,
    quoteText: "Do what you feel in your heart to be right - for you'll be criticized anyway.",
    quoteAuthor: "Eleanor Roosevelt",
  },
  {
    id: 75,
    quoteText: "Happiness is not something ready made. It comes from your own actions.",
    quoteAuthor: "Dalai Lama",
  },
  {
    id: 76,
    quoteText: "Be yourself; everyone else is already taken.",
    quoteAuthor: "Oscar Wilde",
  },
  {
    id: 77,
    quoteText: "We accept the love we think we deserve.",
    quoteAuthor: "Stephen Chbosky",
  },
  {
    id: 78,
    quoteText: "It is never too late to be what you might have been.",
    quoteAuthor: "George Eliot",
  },
  {
    id: 79,
    quoteText: "Everything has beauty, but not everyone can see.",
    quoteAuthor: "Confucius",
  },
  {
    id: 80,
    quoteText: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    quoteAuthor: "Ralph Waldo Emerson",
  },
  {
    id: 81,
    quoteText: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    quoteAuthor: "Aristotle",
  },
  {
    id: 82,
    quoteText: "If you can dream it, you can do it.",
    quoteAuthor: "Walt Disney",
  },
  {
    id: 83,
    quoteText: "Whatever you are, be a good one.",
    quoteAuthor: "Abraham Lincoln",
  },
  {
    id: 84,
    quoteText: "The journey of a thousand miles begins with one step.",
    quoteAuthor: "Lao Tzu",
  },
  {
    id: 85,
    quoteText: "You miss 100% of the shots you don't take.",
    quoteAuthor: "Wayne Gretzky",
  },
  {
    id: 86,
    quoteText: "Life is what happens when you're busy making other plans.",
    quoteAuthor: "John Lennon",
  },
  {
    id: 87,
    quoteText: "The mind is everything. What you think you become.",
    quoteAuthor: "Buddha",
  },
  {
    id: 88,
    quoteText: "The only way to do great work is to love what you do.",
    quoteAuthor: "Steve Jobs",
  },
  {
    id: 89,
    quoteText: "Doubt kills more dreams than failure ever will.",
    quoteAuthor: "Suzy Kassem",
  },
  {
    id: 90,
    quoteText: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    quoteAuthor: "Ralph Waldo Emerson",
  },
  {
    id: 91,
    quoteText: "Don't cry because it's over, smile because it happened.",
    quoteAuthor: "Dr. Seuss",
  },
  {
    id: 92,
    quoteText: "Life is short, and it is up to you to make it sweet.",
    quoteAuthor: "Sarah Louise Delany",
  },
  {
    id: 93,
    quoteText: "Life isn't about waiting for the storm to pass but learning to dance in the rain.",
    quoteAuthor: "Vivian Greene",
  },
  {
    id: 94,
    quoteText: "Happiness is a warm puppy.",
    quoteAuthor: "Charles M. Schulz",
  },
  {
    id: 95,
    quoteText: "You only live once, but if you do it right, once is enough.",
    quoteAuthor: "Mae West",
  },
  {
    id: 96,
    quoteText: "The purpose of our lives is to be happy.",
    quoteAuthor: "Dalai Lama",
  },
  {
    id: 97,
    quoteText: "The biggest adventure you can take is to live the life of your dreams.",
    quoteAuthor: "Oprah Winfrey",
  },
  {
    id: 98,
    quoteText: "In the end, we only regret the chances we didn't take.",
    quoteAuthor: "Lewis Carroll",
  },
  {
    id: 99,
    quoteText: "Love the life you live. Live the life you love.",
    quoteAuthor: "Bob Marley",
  },
  {
    id: 100,
    quoteText: "Don't be afraid to give up the good to go for the great.",
    quoteAuthor: "John D. Rockefeller",
  },
];

export default quotes;
