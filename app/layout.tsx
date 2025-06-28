import "./globals.css";
import Header from '@/components/(website)/header';
import Footer from '@/components/(website)/footer';

export const metadata = {
  title: 'OmEdu | Empowering Education',
  description: 'Static website with services, about, contact and detail pages',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header  />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
