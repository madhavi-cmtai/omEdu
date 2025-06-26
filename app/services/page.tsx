import Services from "./services";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services - OM Educom",
    description: "Explore the wide range of multidisciplinary services offered by OM Educom, from EdTech to Green Energy solutions."
};

export default function ServicesPage() {
    return <Services />;
}
