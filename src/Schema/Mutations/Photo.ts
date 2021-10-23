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
    const { url, userId } = args;
    const user = await User.findOne(userId);
    const photo = await Photo.create({ url, user }).save();
    return photo;
  }
}

export const DELETE_PHOTO = {
  type: GraphQLString,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const photo = await Photo.findOne(args.id);
    photo?.remove();
    return "Photo successfully deleted";
  }
}