import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

import { User } from "@data/modules/user/entities/user.entity";
import { Purchase } from "@data/modules/purchase/entities/purchase.entity";

export enum Status {
  Pending = "PENDING",
  Reversed = "REVERSED",
  confirmed = "CONFIRMED",
  Cancelled = "CANCELLED",
}

@Entity("orders")
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: Status.Pending, enum: Status })
  status: Status;

  @ManyToOne(() => User, (user) => user.purchases)
  @JoinColumn()
  user: User;

  @OneToMany(() => Purchase, (purchase) => purchase.order)
  @JoinColumn()
  purchases: Purchase[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
