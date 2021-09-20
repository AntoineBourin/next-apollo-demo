import global from './global/typeDefs';
import person from './person/typeDefs';
import { DocumentNode } from "graphql";

const typeDefs: Array<DocumentNode> = [
  global,
  person,
];

export default typeDefs;