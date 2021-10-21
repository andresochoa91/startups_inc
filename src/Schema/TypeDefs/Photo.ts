import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";
import { UserType } from "./User";

export const PhotoType = new GraphQLObjectType({
  name: "Photo",
  fields: () => ({
    id: { type: GraphQLID },
    url: { type: GraphQLString },
    user: { type: UserType },
  }),
});