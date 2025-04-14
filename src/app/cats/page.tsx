import { getCats } from "../services/getCats";

import { ICat } from "../interfaces/cat.interface";
import Image from "next/image";
import Link from "next/link";
export const revalidate = 30;

export default async function Product() {
  const catsList: ICat[] = await getCats();

  return (
    <div className="flex flex-wrap">
      {catsList.map(({ id, url }) => (
        <div key={id} className="relative w-1/2 lg:w-1/4 p-2">
          <div className="relative h-64">
            <Link href={`/cats/${id}`}>
              <Image
                src={url}
                alt={`Cat Image ${url}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={true}
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
