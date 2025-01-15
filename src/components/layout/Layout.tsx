import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-white to-primary-light/20">
      <main className="pb-16">{children}</main>
      <Navigation />
    </div>
  );
};

export default Layout;