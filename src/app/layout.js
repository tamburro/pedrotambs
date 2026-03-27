import Preloader from "@/components/ui/preloader";
import "./global.css"
import BootstrapForBrowser from "@/components/ui/bootstrapForBrowser";
import Header from "@/components/sections/header";
import CallToAction from "@/components/sections/callToAction";
import Footer from "@/components/sections/footer";
import Providers from "@/components/ui/Providers";

export const metadata = {
  title: "Pedro Tamburro",
  description: "UX/UI Designer & Visual Designer",
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
          <CallToAction />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
