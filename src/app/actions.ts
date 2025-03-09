"use server";

import { cookies } from "next/headers";

export async function createCookie(
  name: string,
  value: string,
  options: {
    maxAge?: number;
    expires?: Date;
    httpOnly?: boolean;
    path?: string;
  } = {}
) {
  const cookieStore = await cookies();
  cookieStore.set({
    name,
    value,
    httpOnly: true,
    path: "/",
    ...options,
  });
}
export async function getCookie(name: string): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(name)?.value;
}
