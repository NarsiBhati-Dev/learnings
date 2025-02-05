import React from "react";

const SSRLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>
        <nav className="border-b p-4">Navbar</nav>
        {children}
      </body>
    </html>
  );
};

export default SSRLayout;
