import Preloader from "@/components/ui/preloader";
import "./global.css"
import BootstrapForBrowser from "@/components/ui/bootstrapForBrowser";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Providers from "@/components/ui/Providers";

export const metadata = {
  title: "Pedro Tambs",
  description: "Product Designer & Design Engineer",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Providers>
          <BootstrapForBrowser />
          <Preloader />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
