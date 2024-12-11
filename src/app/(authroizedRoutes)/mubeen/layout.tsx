import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <h1>I am Your Header</h1>
      {children}
    </div>
  );
};

export default layout;
