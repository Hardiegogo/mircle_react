import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Chirag",
    lastName: "Gupta",
    username: "Hardiegogo",
    password: "chirag",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userProfile:"https://res.cloudinary.com/dqqehaaqo/image/upload/v1656880084/mircle/profile_pic_clyjaw.jpg"
  },
  {
    _id: uuid(),
    firstName: "Anshika",
    lastName: "Kaushik",
    username: "Anshika92",
    password: "anshika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userProfile:"https://res.cloudinary.com/dqqehaaqo/image/upload/v1656880406/mircle/pfp-2_o7ksw9.jpg"
  },
  {
    _id: uuid(),
    firstName: "Amish",
    lastName: "Mishra",
    username: "Amish43",
    password: "amish",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userProfile:"https://res.cloudinary.com/dqqehaaqo/image/upload/v1656880486/mircle/pfp-3_yommey.jpg"
  },
  {
    _id: uuid(),
    firstName: "Aman",
    lastName: "Singh",
    username: "aman11s",
    password: "aman",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userProfile:"https://res.cloudinary.com/dqqehaaqo/image/upload/v1656880649/mircle/pfp-4_lyvwty.jpg"
  }
];
