import ClientLayout from "../components/ClientLayout";

export const metadata = {
  title: "Meli Palacio - Motion Design & Dance Portfolio",
  description: "I shape movement into meaning through dancing bodies, flowing illustrations, and cinematic motion design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
