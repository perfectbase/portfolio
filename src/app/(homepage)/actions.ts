"use server";

import { cookies } from "next/headers";

export async function setLanguage(newLocale: string) {
  cookies().set("NEXT_LOCALE", newLocale);
}
