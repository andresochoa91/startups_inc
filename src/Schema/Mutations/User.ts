import { GraphQLID, GraphQLString } from "graphql";
import { User } from "../../Entities/User";
import { UserType } from "../TypeDefs/User";

export const CREATE_USER = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { name, username, password } = args;
    await User.insert({name, username, password});
    return args;
  }
}

export const UPDATE_USER = {
  type: UserType,
  args: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    let user = await User.findOne(args.id);
    const { name, username, password } = args;
    user!.name = name || user!.name;
    user!.username = username || user!.username;
    user!.password = password || user!.password;
    await User.save(user!);
    return user;
  }
}

export const DELETE_USER = {
  type: GraphQLString,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    let user = await User.findOne(args.id);
    await user?.remove();
    return "User successfully deleted";
  }
}