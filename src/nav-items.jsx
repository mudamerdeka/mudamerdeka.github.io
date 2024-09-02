import { HomeIcon, PenIcon, BookOpenIcon, SettingsIcon, GraduationCapIcon, HeartHandshakeIcon, ScaleIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import ComposeBlog from "./pages/ComposeBlog.jsx";
import BlogPosts from "./pages/BlogPosts.jsx";
import CMS from "./pages/CMS.jsx";
import PendidikanPolitik from "./pages/PendidikanPolitik.jsx";
import AksiSosial from "./pages/AksiSosial.jsx";
import AdvokasiKebijakan from "./pages/AdvokasiKebijakan.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Beranda",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Tulis Blog",
    to: "/compose",
    icon: <PenIcon className="h-4 w-4" />,
    page: <ComposeBlog />,
  },
  {
    title: "Postingan Blog",
    to: "/blog",
    icon: <BookOpenIcon className="h-4 w-4" />,
    page: <BlogPosts />,
  },
  {
    title: "CMS",
    to: "/admin",
    icon: <SettingsIcon className="h-4 w-4" />,
    page: <CMS />,
  },
  {
    title: "Pendidikan Politik",
    to: "/fitur/pendidikan-politik",
    icon: <GraduationCapIcon className="h-4 w-4" />,
    page: <PendidikanPolitik />,
  },
  {
    title: "Aksi Sosial",
    to: "/fitur/aksi-sosial",
    icon: <HeartHandshakeIcon className="h-4 w-4" />,
    page: <AksiSosial />,
  },
  {
    title: "Advokasi Kebijakan",
    to: "/fitur/advokasi-kebijakan",
    icon: <ScaleIcon className="h-4 w-4" />,
    page: <AdvokasiKebijakan />,
  },
];