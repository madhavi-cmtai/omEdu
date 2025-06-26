import Contact from "./contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us - OM Educom",
    description: "Get in touch with OM Educom for engineering, consultancy, and technology services across various sectors.",
};

export default function ContactPage() {
    return <Contact />;
}
