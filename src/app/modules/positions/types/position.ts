import { Entity } from "../../../types/entity";
export type Position = Entity<number> & {
  postion: string;
  description: string;
};
