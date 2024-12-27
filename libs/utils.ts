import { Types } from 'mongoose';

export function isValidObjectId(id: string): boolean {
  console.log(id);
  return Types.ObjectId.isValid(id) && new Types.ObjectId(id).toString() === id;
}
