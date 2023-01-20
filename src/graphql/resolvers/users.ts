const resolvers = {
  Query: {
    searchUsers: () => {},
  },
  Mutation: {
    createUsername: (_: any, args: { username: string }, _context: any) => {
      const { username } = args;
      return { success: true, error: false, data: { username } };
    },
  },
  // Subscription: {},
};
export default resolvers;
