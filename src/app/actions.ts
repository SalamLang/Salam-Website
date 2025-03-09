"use server";

import { cookies } from "next/headers";

export async function createCookie(name: string, value: string) {
  const cookieStore = await cookies();
  cookieStore.set({
    name: name,
    value: value,
    httpOnly: true,
    path: "/",
  });
}

export async function getCookie(name: string) {
  const cookieStore = await cookies();
  return cookieStore.get(name).value;
}
