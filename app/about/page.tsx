import About from "./about";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us - OM Educom",
    description:
        "Explore OM Educom's decade-long expertise in engineering, architecture, and sustainable consultancy solutions.",
};

export default function AboutPage() {
    return <About/>;
}
