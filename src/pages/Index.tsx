import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
          Vently
        </h1>
        <p className="text-gray-600 mt-2">
          Discover amazing events happening around you
        </p>
      </div>
    </Layout>
  );
};

export default Index;