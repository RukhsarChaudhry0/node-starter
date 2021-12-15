const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
  {
    title: 'City of Caucassis',
    author: 'James Author',
  },
]

export default {
  Query: {
    books: (): Array<{ title: string; author: string }> => books,
  },
}
