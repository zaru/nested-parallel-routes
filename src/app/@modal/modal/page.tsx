"use client";
import { useRouter } from "next/navigation";
import { somethingAction } from "@/app/@modal/modal/action";

export default function Page() {
  const router = useRouter();

  const handleSubmit = async () => {
    const result = await somethingAction();
    if (result.success) {
      setTimeout(() => {
        router.back();
      }, 250);
    }
  };
  return (
    <div className="fixed w-96 p-5 top-20 left-0 right-0 m-auto rounded shadow-2xl bg-gray-50 border-2">
      <p>Modal</p>
      <div className="mt-4 flex justify-end gap-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="bg-gray-100 border p-2 rounded"
        >
          close
        </button>
        <form action={handleSubmit}>
          <button type="submit" className="bg-sky-600 text-white p-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
