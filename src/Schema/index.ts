import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { CREATE_PHOTO } from "./Mutations/Photo";
import { CREATE_USER, UPDATE_USER } from "./Mutations/User";
import { GET_ALL_PHOTOS } from "./Queries/Photo";
import { GET_ALL_USERS } from "./Queries/User";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
    getAllPhotos: GET_ALL_PHOTOS,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    updateUser: UPDATE_USER,
    createPhoto: CREATE_PHOTO,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
