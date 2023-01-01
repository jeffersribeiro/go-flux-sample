import { DataSource, EntityTarget, ObjectLiteral, Repository } from "typeorm";

import { Post } from "@modules/post/entities/post.entity";
import { User } from "@modules/user/entities/user.entity";
import { Order } from "@modules/order/entities/order.entity";
import { Session } from "@modules/session/entities/session.entity";
import { Product } from "@modules/product/entities/product.entity";
import { Purchase } from "@modules/purchase/entities/purchase.entity";

const {
  TYPEORM_CONNECTION,
  TYPEORM_HOST,
  TYPEORM_USERNAME,
  TYPEORM_PASSWORD,
  TYPEORM_DATABASE,
  TYPEORM_PORT,
  TYPEORM_SYNCHRONIZE,
} = process.env;

export const AppDataSource = new DataSource({
  type: TYPEORM_CONNECTION,
  host: TYPEORM_HOST,
  port: TYPEORM_PORT,
  username: TYPEORM_USERNAME,
  password: TYPEORM_PASSWORD,
  database: TYPEORM_DATABASE,
  synchronize: TYPEORM_SYNCHRONIZE,
  logging: false,
  entities: [User, Post, Session, Product, Purchase, Order],
  subscribers: [],
  migrations: [],
});

export const getRepository = (
  entity: EntityTarget<ObjectLiteral>
): Repository<ObjectLiteral> => AppDataSource.getRepository(entity);
