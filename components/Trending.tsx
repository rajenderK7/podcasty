import { fetchCategories } from "@/sanity/utils/categories";
import Link from "next/link";

export interface CategoryProps {
  title: string;
  desc: string;
}

const TrendingChip = ({ title }: CategoryProps) => {
  return (
    <Link
      href={`/categories/${title}`}
      className="mx-2 p-1.5 min-w-[200px] border-2 border-black text-center rounded-lg bg-[#f3a642] hover:bg-[#77c9ed] hover:text-black hover:border-black hover:border-b-4 hover:border-r-4"
    >
      {title}
    </Link>
  );
};

const Trending = async () => {
  const categories = await fetchCategories();
  return (
    <div className="my-5 border-2 border-black rounded-lg flex justify-start">
      <div className="mx-2 text-xl font-bold w-[100px]">Top Trending</div>
      <div className="border-l-black border-l-2 flex items-center overflow-x-scroll no-scrollbar p-2 rounded-r-lg">
        {categories.map((category) => {
          return <TrendingChip key={category.title} {...category} />;
        })}
      </div>
    </div>
  );
};

export default Trending;
