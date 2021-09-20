import merge from 'lodash/merge';
import person from './person/resolvers';
import global from './global/resolvers';

const resolvers = merge(
  global,
  person
);

export default resolvers;