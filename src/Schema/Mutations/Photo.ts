import { GraphQLID, GraphQLString } from "graphql";
import { Photo } from "../../Entities/Photo";
import { User } from "../../Entities/User";
import { PhotoType } from "../TypeDefs/Photo";

export const CREATE_PHOTO = {
  type: PhotoType,
  args: {
    url: { type: GraphQLString },
    userId: { type: GraphQLID }
  },
  async resolve(parent: any, args: any) {
    try {
      const { url, userId } = args;
      if (!userId) throw 'No userId argument'; 
      if (!url) throw 'No url argument'; 
  
      const user = await User.findOne(userId);
      
      if (user) {
        const photo = await Photo.create({ url, user }).save();
        return photo;
      }
      
      throw 'User not found';
    } catch (error) {
      throw error;
    }
  }
}

export const DELETE_PHOTO = {
  type: GraphQLString,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    try {
      const { id } = args;
      if (!id) throw "No id argument";
      const photo = await Photo.findOne(id);

      if (!photo) throw "User not found";
      
      photo?.remove();
      return "Photo successfully deleted";
    } catch (error) {
      throw error;
    }
  }
}