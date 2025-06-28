import BlogsPage from "./blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Blogs - OM Educom",
    description:
        "Read the latest blogs from OM Educom on education, wellness, innovation, and community building.",
};

export default function BlogPage() {
    return <BlogsPage />;
}
