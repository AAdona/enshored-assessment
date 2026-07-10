import { Inter, Space_Grotesk } from "next/font/google";
import { QuoteModalProvider } from "@/context/QuoteModalContext";
import QuoteModal from "@/components/QuoteModal";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Enshored",
  description: "Web Design Test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <QuoteModalProvider>
          {children}
          <QuoteModal />
        </QuoteModalProvider>
      </body>
    </html>
  );
}