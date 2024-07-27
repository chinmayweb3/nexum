import React, { PropsWithChildren } from "react";

const PageWrapper = ({ children }: PropsWithChildren) => {
  return (
    <main className="pt-[71px] min-h-[100vh] flex flex-col">{children}</main>
  );
};

export default PageWrapper;
