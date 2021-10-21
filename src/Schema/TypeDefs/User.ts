import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } from "graphql";
import { PhotoType } from "./Photo";

export const UserType: GraphQLObjectType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    photos: { type: GraphQLList(PhotoType) }
  }),
});
