import Image from "next/image";
import { getCats } from "@/app/services/getCats";
import { ICat } from "@/app/interfaces/cat.interface";

const fetchCat = async (id: string) => {
  const res = await fetch(`https://api.thecatapi.com/v1/images/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch cat");
  }
  return res.json();
};
export type ICatPage = {
  params: Promise<{ id: string }>;
};

export default async function CatPage({ params }: ICatPage) {
  const cat = await fetchCat((await params).id);
  return (
    <div className="relative h-64 w-64">
      <Image
        src={cat.url}
        alt={`Cat ${cat.id}`}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority
      />
    </div>
  );
}

export async function generateStaticParams() {
  const cats: ICat[] = await getCats();

  return cats.map((cat) => ({
    id: cat.id.toString(),
  }));
}
