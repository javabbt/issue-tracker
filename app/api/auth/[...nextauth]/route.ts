import authOptions from "@/app/auth/authOptions";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";

const prisma = new PrismaClient();

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
