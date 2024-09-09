import DownloadItem from "@/components/molecules/DownloadItem";

export const metadata = {
  title: "دانلود زبان سلام - برنامه نویسی سلام",
  description:
    "این صفحه به شما امکان می‌دهد زبان برنامه‌نویسی سلام را دانلود کنید و از منابع و مستندات مرتبط با آن بهره‌مند شوید.",
  author: "تیم برنامه نویسی زبان سلام",
};

function page() {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden gap-5 my-auto pb-20">
      <DownloadItem />
    </div>
  );
}

export default page;
