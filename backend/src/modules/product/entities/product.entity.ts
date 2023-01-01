import {
  Column,
  Entity,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
  Check,
} from "typeorm";

import { User } from "@data/modules/user/entities/user.entity";
import { Purchase } from "@data/modules/purchase/entities/purchase.entity";

export enum Type {
  Food = "FOOD",
  Groceries = "GROCERIES",
  Household = "HOUSEHOLD",
  Electronics = "ELECTRONIC",
  Jewelry = "JEWELRY",
  Pet = "PET",
}

@Entity("products")
@Check('"price" >= 0')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("float")
  price: number;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column({ default: 0 })
  quantity: number;

  @Column("enum", { default: Type.Food, enum: Type })
  type: Type;

  @ManyToOne(() => User, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn()
  user: User;

  @OneToMany(() => Purchase, (purchase) => purchase.user)
  @JoinColumn()
  purchases: Purchase[];

  @Column({ default: true })
  isPublished: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
