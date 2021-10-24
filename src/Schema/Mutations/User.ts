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
    try {
      const { name, username, password } = args;
      if (!name || !username || !password) throw "name, username and password are required arguments"
      const user = await User.create({name, username, password}).save();
      return user;
    } catch (error) {
      throw error;
    }
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
    try {
      const { id, name, username, password } = args;
      if (!id) throw "id is a required argument"
      let user = await User.findOne(args.id);
      if (!user) throw "User doesn't exist"
      user!.name = name || user!.name;
      user!.username = username || user!.username;
      user!.password = password || user!.password;
      await User.save(user!);
      return user;
    } catch (error) {
      throw error;
    }
  }
}

export const DELETE_USER = {
  type: GraphQLString,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    try {
      if (!args.id) throw "id is a required argument" 
      let user = await User.findOne(args.id);
      if (!user) throw "User doesn't exist" 
      await user?.remove();
      return "User successfully deleted";
    } catch (error) {
      throw error;
    }
  }
}