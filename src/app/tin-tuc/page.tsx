"use client";

import Link from "next/link";
import { newsData } from "@/data/newsData"; // chắc chắn import đúng

export default function NewsPage() {
  return (
    <main className="max-w-6xl mx-auto p-6 md:p-10 pt-[80px]">
      <h1 className="text-4xl font-bold text-center mb-12 text-[#91473a]">
        Tin tức Alana City
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map((item) => (
          <Link
            key={item.id}
            href={`/tin-tuc/${item.slug}`}
            className="block rounded-lg shadow-lg bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="overflow-hidden h-48">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            <div className="p-5 flex flex-col h-[260px]">
              <h2 className="text-xl font-semibold mb-2 text-[#3d2e1a] line-clamp-2">
                {item.title}
              </h2>
              <p className="text-gray-600 flex-grow line-clamp-3">{item.description}</p>
              <time className="mt-4 text-sm text-gray-400">{item.date}</time>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
