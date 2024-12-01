import { Listing, User } from "@prisma/client";
import { DefaultSession } from "next-auth";

export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

declare module "next-auth" {
  // Extend the `Session` interface
  interface Session {
    user: {
      id: string; // Add the `id` property
    } & DefaultSession["user"]; // Include default properties like email, name, etc.
  }
}
