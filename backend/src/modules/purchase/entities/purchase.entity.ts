import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

import { User } from "@data/modules/user/entities/user.entity";
import { Order } from "@data/modules/order/entities/order.entity";
import { Product } from "@data/modules/product/entities/product.entity";

export enum Status {
  Pending = "PENDING",
  Reversed = "REVERSED",
  confirmed = "CONFIRMED",
  Cancelled = "CANCELLED",
}

@Entity("purchases")
export class Purchase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: Status.Pending, enum: Status })
  status: Status;

  @Column({ default: 1 })
  quantity: number;

  @ManyToOne(() => User, (user) => user.purchases)
  @JoinColumn()
  user: User;

  @ManyToOne(() => Product, (product) => product.purchases)
  @JoinColumn()
  product: Product;

  @ManyToOne(() => Order, (order) => order.purchases)
  @JoinColumn()
  order: Order;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
