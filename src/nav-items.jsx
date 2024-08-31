import { HomeIcon, PenIcon, BookOpenIcon, SettingsIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import ComposeBlog from "./pages/ComposeBlog.jsx";
import BlogPosts from "./pages/BlogPosts.jsx";
import CMS from "./pages/CMS.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Compose Blog",
    to: "/compose",
    icon: <PenIcon className="h-4 w-4" />,
    page: <ComposeBlog />,
  },
  {
    title: "Blog Posts",
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
];
