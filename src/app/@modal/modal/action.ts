"use server";

import { revalidatePath } from "next/cache";

export async function somethingAction() {
  console.log("something action");
  revalidatePath("/");
  return {
    success: true,
  };
}
