"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { revalidateAction } from "@/app/@modal/modal/action";

export default function Page() {
  const router = useRouter();

  const handleRevalidateSubmit = async () => {
    const result = await revalidateAction();
    if (result.success) {
      close();
    }
  };

  const close = () => {
    router.back();
  };

  return (
    <div className="w-1/3 fixed right-0 top-0 bottom-0 h-screen shadow-2xl bg-gray-50 p-10">
      <p>Date.now {Date.now()}</p>

      <button
        type="button"
        onClick={() => close()}
        className="bg-gray-100 border p-2 rounded"
      >
        close
      </button>
      <p className="mt-4">Drawer</p>
      <div className="mt-4">
        <Link href="/modal" className="bg-sky-600 text-white p-2 rounded">
          Open modal
        </Link>
        <form action={handleRevalidateSubmit}>
          <button type="submit" className="bg-sky-600 text-white p-2 rounded">
            Revalidate submit
          </button>
        </form>
      </div>
    </div>
  );
}
