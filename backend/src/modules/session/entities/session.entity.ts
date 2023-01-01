import { User } from "@data/modules/user/entities/user.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("sessions")
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: null, nullable: true })
  ip: string;

  @Column()
  token: string;

  @Column({ default: true })
  active: boolean;

  @Column()
  expiresAt: Date;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
