import ProjectsPage from "./projects";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Projects - OM Educom",
    description:
        "Explore OM Educom's portfolio of infrastructure, urban planning, and smart development projects across India.",
};

export default function ProjectPage() {
    return <ProjectsPage />;
}
