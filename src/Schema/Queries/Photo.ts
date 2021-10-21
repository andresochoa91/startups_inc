import { GraphQLList } from "graphql";
import { Photo } from "../../Entities/Photo";
import { PhotoType } from "../TypeDefs/Photo";

export const GET_ALL_PHOTOS = {
  type: new GraphQLList(PhotoType),
  resolve() {
    let photos = Photo.find({ relations: ["user"] });
    return photos;
  } 
};