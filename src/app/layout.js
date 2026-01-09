import { PlusJakartaSans, InstrumentSans } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Clean Stack Solutions",
  description: "Empresa dedicada a criação de sites modernos e responsivos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${PlusJakartaSans.variable} ${InstrumentSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
