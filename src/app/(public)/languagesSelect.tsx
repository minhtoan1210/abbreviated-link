"use client";

const languagesItem = [
  {
    title: "EN | English",
  },
  {
    title: "PL | Polski",
  },
  {
    title: "AR | عربى",
  },
  {
    title: "DE | Deutsch",
  },
  {
    title: "ES | Español",
  },
  {
    title: "FR | Français",
  },
  {
    title: "HI | हिन्दी",
  },
  {
    title: "IT | Italiano",
  },
  {
    title: "JA | 日本語",
  },
  {
    title: "KO | 한국어",
  },
  {
    title: "NL | Nederlands",
  },
  {
    title: "PT | Português",
  },
  {
    title: "RU | Русский",
  },
  {
    title: "TR | Türkçe",
  },
  {
    title: "UK | Українська",
  },
  {
    title: "ZH | 中文",
  },
];


export default function LanguagesSelect({ className }: { className?: string }) {
  return languagesItem.map((item, index) => {
    return (
      <span key={index} className={className}>
        {item.title}
      </span>
    );
  });
}
