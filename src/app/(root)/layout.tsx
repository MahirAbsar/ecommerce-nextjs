export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
        <main className="wrapper flex-1">
            {children}
        </main>
    </div>
  );
}
