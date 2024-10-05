export default function manifest() {
  return {
    name: "سایت زابن برنامه نویسی سلام",
    short_name: "زبان سلام",
    description: "زبان سلام یک زبان راحت اما کاربردی و مناسب برای همه",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/logo-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: "/screenshot-desktop.png",
        sizes: "1280x720",
        type: "image/png",
        form_factor: "wide",
      },
      {
        src: "/screenshot-mobile.png",
        sizes: "720x1280",
        type: "image/png",
        form_factor: "narrow",
      },
    ],
  };
}
