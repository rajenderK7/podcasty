import Image from "next/image";
import Link from "next/link";

export interface CardProps {
  title: string;
  author: string;
  desc: string;
  _slug: string;
  bannerURL: string;
  favorites?: number;
}

function Card({ title, author, desc, _slug, bannerURL }: CardProps) {
  return (
    <div className="min-w-[320px] max-w-[320px]  bg-white flex flex-col m-2 border-2 border-gray-400 rounded-lg shadow">
      <Link
        href={`/podcasts/${_slug}`}
        className="w-full relative rounded-lg min-h-[200px] max-h-[200px]"
      >
        <Image fill className="rounded-t-lg" src={bannerURL} alt={title} />
      </Link>
      <div className=" border-t border-black p-3 flex flex-col">
        <div className="min-h-[150px] max-h-[150px] justify-between">
          <Link
            href={`/podcasts/${_slug}`}
            className="mb-0.5 text-xl font-bold tracking-tight text-gray-900 hover"
          >
            {title}
          </Link>
          <h5 className="mb-0.5 text-base font-bold tracking-tight first-letter:text-sm text-gray-900">
            <small>by </small>
            {author}
          </h5>
          <p className="mb-2 text-base font-normal text-gray-700 first-letter:uppercase first-letter:text-sm first-letter:font first-letter:mr-0">
            {desc}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center  ">
          <Link
            href={`/podcasts/${_slug}`}
            type="button"
            className="w-[100px] p-2 text-white bg-black flex items-center justify-evenly rounded-md hover:bg-[#77c9ed] hover:text-black hover:border-black hover:border-b-2 hover:border-r-2"
          >
            <p>Listen</p>
          </Link>
          <p className="font-bold">8.9K Favorites</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
