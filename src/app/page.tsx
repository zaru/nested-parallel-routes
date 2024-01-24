import Link from "next/link";

export default function Home() {
  return (
    <div className="w-1/3 m-auto mt-10">
      <p>Nested parallel routes demo.</p>
      <p>Date.now {Date.now()}</p>
      <div className="mt-4">
        <Link href="/drawer" className="bg-sky-600 text-white p-2 rounded">
          Open Drawer
        </Link>
      </div>
      <div className="mt-4">
        <Link href="/modal" className="bg-sky-600 text-white p-2 rounded">
          Open Modal
        </Link>
      </div>
    </div>
  );
}
