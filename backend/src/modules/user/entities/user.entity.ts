import { Product } from "@data/modules/product/entities/product.entity";
import { Purchase } from "@data/modules/purchase/entities/purchase.entity";
import { Post } from "@modules/post/entities/post.entity";
import { Session } from "@modules/session/entities/session.entity";
import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";

export enum Type {
  Customer = "CUSTOMER",
  Salesman = "SALESMAN",
}

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column("enum", { default: Type.Customer, enum: Type })
  type: Type;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Post, (post) => post.user)
  @JoinColumn()
  posts: Post[];

  @OneToMany(() => Session, (session) => session.user)
  @JoinColumn()
  sessions: Session[];

  @OneToMany(() => Product, (product) => product.user)
  @JoinColumn()
  products: Product[];

  @OneToMany(() => Purchase, (purchase) => purchase.user)
  @JoinColumn()
  purchases: Purchase[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
