"use client";
import { useRouter } from "next/navigation";
import { normalAction, revalidateAction } from "@/app/@modal/modal/action";

export default function Page() {
  const router = useRouter();

  const handleNormalSubmit = async () => {
    const result = await normalAction();
    if (result.success) {
      close();
    }
  };

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
    <div className="z-10 fixed w-96 p-5 top-20 left-0 right-0 m-auto rounded shadow-2xl bg-gray-50 border-2">
      <p>Modal</p>
      <div className="mt-4 flex justify-end gap-4">
        <button
          type="button"
          onClick={() => close()}
          className="bg-gray-100 border p-2 rounded"
        >
          close
        </button>
        <form action={handleNormalSubmit}>
          <button type="submit" className="bg-sky-600 text-white p-2 rounded">
            Normal submit
          </button>
        </form>
        <form action={handleRevalidateSubmit}>
          <button type="submit" className="bg-sky-600 text-white p-2 rounded">
            Revalidate submit
          </button>
        </form>
      </div>
    </div>
  );
}
