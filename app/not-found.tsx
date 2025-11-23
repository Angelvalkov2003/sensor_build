"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function NotFound() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 ${
        lang === "bg" ? "bg-[#13182c]" : "bg-white"
      }`}
    >
      <div className="text-center max-w-2xl mx-auto">
        <h1
          className={`text-9xl font-bold mb-4 ${
            lang === "bg" ? "text-white" : "text-gray-900"
          }`}
        >
          404
        </h1>
        <h2
          className={`text-3xl md:text-4xl font-semibold mb-4 ${
            lang === "bg" ? "text-white" : "text-gray-900"
          }`}
        >
          {lang === "bg"
            ? "Страницата не е намерена"
            : "Page Not Found"}
        </h2>
        <p
          className={`text-lg mb-8 ${
            lang === "bg" ? "text-white/80" : "text-gray-600"
          }`}
        >
          {lang === "bg"
            ? "Съжаляваме, страницата, която търсите, не съществува."
            : "Sorry, the page you are looking for does not exist."}
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-[#388644] text-white text-lg font-semibold rounded-lg hover:bg-[#2d6b35] transition-colors"
        >
          {lang === "bg" ? "Върни се в началото" : "Go to Homepage"}
        </Link>
      </div>
    </div>
  );
}

