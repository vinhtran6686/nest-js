import { Document } from 'mongoose';

export interface SoftDeleteModel<T extends Document> {
  softDelete: (filter?: any) => Promise<any>;
  restore: (filter?: any) => Promise<any>;
}
