import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import SideBar from "./SideBar";

type Props = {
  children: React.ReactNode;
};

const PageTemplate = (props: Props) => {
  const { children } = props;
  return (
    <div className="flex flex-col min-h-screen items-center p-[1.5rem] gap-4 lg:grid grid-cols-4 grid-rows-4">
      <section className="h-full lg:col-span-4 lg:row-start-1">
        <Nav />
      </section>
      <main className="lg:col-span-3 lg:row-span-2 max-w-full">{children}</main>
      <aside className="lg:col-start-4 lg:row-span-2">
        <SideBar />
      </aside>
      <section className="lg:col-span-4 lg:row-start-4">
        <Footer />
      </section>
    </div>
  );
};

export default PageTemplate;
