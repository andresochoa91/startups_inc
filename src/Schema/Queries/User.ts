import { GraphQLList } from "graphql";
import { User } from "../../Entities/User";
import { UserType } from "../TypeDefs/User";

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve() {
    let users = User.find({ relations: ["photos"] });
    console.log(users);
    return users;
  } 
};