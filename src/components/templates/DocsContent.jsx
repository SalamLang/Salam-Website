import TitleDescription from "../atoms/TitleDescription";
import React from 'react'

function DocsContent() {
  return (
    <div className="flex flex-col gap-16 items-center p-24 w-full">
      <TitleDescription
        title="زبان برنامه نویسی سلام"
        className={`!items-start w-full`}
        headerClass={`text-gray-600`}
        />
      <TitleDescription
        title="مقدمه"
        className={`!items-start`}
        headerClass={`text-gray-600`}
        descClass={"!text-sm !text-right !font-Estedad-Regular"}
        description="زبان برنامه‌نویسی سلام یکی از اولین زبان‌های برنامه‌نویسی کاملاً فارسی است که به دلیل ساختار ساده و روان خود، به راحتی قابل یادگیری است. این زبان برای افرادی که به دنبال یک زبان برنامه‌نویسی فارسی و قابل فهم هستند، یک انتخاب عالی به شمار می‌آید."
      />
      <TitleDescription
        className={`!items-start`}
        headerClass={`text-gray-600`}
        descClass={"!text-sm !text-right !font-Estedad-Regular"}
        title="هدف"
        description="زبان برنامه‌نویسی سلام یک زبان کامپایلری است که به شما امکان می‌دهد با یادگیری یک زبان واحد، پروژه‌های مختلف را بدون نیاز به استفاده از زبان‌های دیگر پیاده‌سازی کنید. هدف اصلی این زبان، ساده‌سازی فرآیند برنامه‌نویسی و کاهش پیچیدگی‌های موجود در یادگیری و استفاده از زبان‌های دیگر است."
      />
      <TitleDescription
        className={`!items-start`}
        headerClass={`text-gray-600`}
        descClass={"!text-sm !text-right !font-Estedad-Regular"}
        title="چشم انداز"
        description="سلام با سینتکس ساده و فارسی خود، به برنامه‌نویسان امکان می‌دهد تا به راحتی برنامه‌هایی با طرح‌های گرافیکی زیبا، سایت‌های وب و صفحات متنوع ایجاد کنند. این زبان به خصوص برای کودکان و نوجوانان جذاب است، زیرا آن‌ها می‌توانند به راحتی ایده‌ها و خلاقیت‌های خود را به صورت دیجیتال پیاده‌سازی کنند."
      />
      <TitleDescription
        className={`!items-start`}
        headerClass={`text-gray-600`}
        descClass={"!text-sm !text-right !font-Estedad-Regular"}
        title="بیانیه ماموریت"
        description="هدف اصلی زبان برنامه‌نویسی سلام این است که برنامه‌نویسی را برای همه، از جمله کودکان و مبتدیان، ساده و قابل دسترس کند. این زبان به آن‌ها اجازه می‌دهد تا با استفاده از یک ابزار قدرتمند و در عین حال ساده، به خلق ایده‌های خود بپردازند و دنیای دیجیتال را به شکلی خلاقانه کاوش کنند."
      />
      <div className="flex items-start w-full flex-col gap-6">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-Estedad-SemiBold text-gray-600">امکانات و قابلیت‌ها</h3>
        <div className="text-gray-500">
          <ul className="list-disc pr-10">
            <li>
            <p className="text-sm"><span className="font-Estedad-SemiBold text-gray-600">کامپایلری بودن:</span>سرعت و کارایی بالا در اجرای برنامه‌ها.</p>
            </li>
            <li>
            <p className="text-sm"><span className="font-Estedad-SemiBold text-gray-600">سینتکس ساده و فارسی:</span>بهبود تجربه کاربری و کاهش نیاز به یادگیری زبان‌های دیگر.</p>
            </li>
            <li>
            <p className="text-sm"><span className="font-Estedad-SemiBold text-gray-600">ایجاد طرح‌های گرافیکی و سایت‌ها:</span>امکانات وسیع برای ایجاد صفحات و سایت‌های زیبا و متنوع.</p>
            </li>
            <li>
            <p className="text-sm"><span className="font-Estedad-SemiBold text-gray-600">جذابیت برای کودکان و نوجوانان:</span>مناسب برای آموزش و پرورش نسل جدید برنامه‌نویسان.</p>
            </li>
          </ul>
        </div>
      </div>
      <TitleDescription
        className={`!items-start`}
        headerClass={`text-gray-600`}
        descClass={"!text-sm !text-right !font-Estedad-Regular"}
        title="ورژن"
        description="زبان برنامه‌نویسی سلام یکی از اولین زبان‌های برنامه‌نویسی کاملاً فارسی است که به دلیل ساختار ساده و روان خود، به راحتی قابل یادگیری است. این زبان برای افرادی که به دنبال یک زبان برنامه‌نویسی فارسی و قابل فهم هستند، یک انتخاب عالی به شمار می‌آید."
      />
      <TitleDescription
        className={`!items-start`}
        headerClass={`text-gray-600`}
        descClass={"!text-sm !text-right !font-Estedad-Regular"}
        title="پشتیبانی"
        description="زبان برنامه‌نویسی سلام یکی از اولین زبان‌های برنامه‌نویسی کاملاً فارسی است که به دلیل ساختار ساده و روان خود، به راحتی قابل یادگیری است. این زبان برای افرادی که به دنبال یک زبان برنامه‌نویسی فارسی و قابل فهم هستند، یک انتخاب عالی به شمار می‌آید."
      />
      <TitleDescription
        className={`!items-start`}
        headerClass={`text-gray-600`}
        descClass={"!text-sm !text-right !font-Estedad-Regular"}
        title="برنامه نویسی"
        description="زبان برنامه‌نویسی سلام یکی از اولین زبان‌های برنامه‌نویسی کاملاً فارسی است که به دلیل ساختار ساده و روان خود، به راحتی قابل یادگیری است. این زبان برای افرادی که به دنبال یک زبان برنامه‌نویسی فارسی و قابل فهم هستند، یک انتخاب عالی به شمار می‌آید."
      />
    </div>
  )
}

export default DocsContent
