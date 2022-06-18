import { Provider } from "@/contracts/provider";
import { PrismaClient } from "@prisma/client";

export default class DatabaseServiceProvider implements Provider {
  async register() {
    console.log(process.env.DATABASE_URL);
    // const prisma = new PrismaClient();
    // await prisma.$connect();
    // console.log("Database connected...");
  }
}
