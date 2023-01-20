const resolvers = {
  Query: {
    searchUsers: () => {},
  },
  Mutation: {
    createUsername: () => {
      console.log('ka loda')
    },
  },
  // Subscription: {},
};
export default resolvers