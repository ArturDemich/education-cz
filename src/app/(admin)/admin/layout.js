import { Inter } from "next/font/google";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin panel Education-CZ",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header variant='admin' />
        {children}       
      </body>
    </html>
  );
}
