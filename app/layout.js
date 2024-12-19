 import "./globals.css";
import MainHeader from "@/components/mainHeader/mainHeader";
 
export const metadata = {
  title: "Welcome to foodies",
  description: "A treasure for food lovers!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <MainHeader/>
        {children}
      </body>
    </html>
  );
}
