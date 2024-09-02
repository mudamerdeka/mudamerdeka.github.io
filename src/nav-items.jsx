import { HomeIcon, PenIcon, BookOpenIcon, SettingsIcon, GraduationCapIcon, HeartHandshakeIcon, ScaleIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import BlogPosts from "./pages/BlogPosts.jsx";

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
    title: "Postingan Blog",
    to: "/blog",
    icon: <BookOpenIcon className="h-4 w-4" />,
    page: <BlogPosts />,
  },
];