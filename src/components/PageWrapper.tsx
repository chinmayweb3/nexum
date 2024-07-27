import React, { PropsWithChildren } from "react";

const PageWrapper = ({ children }: PropsWithChildren) => {
  return <main className="pt-[91px] min-h-[100vh]">{children}</main>;
};

export default PageWrapper;
