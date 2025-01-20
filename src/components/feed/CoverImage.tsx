import coverImage from '@/assets/coverPage.jpeg';

const CoverImage = () => (
  <div className="relative h-64 md:h-96 bg-cover bg-center" style={{ backgroundImage: `url(${coverImage})` }}>
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">SF Bay Area</h1>
        <p className="mt-2 text-lg md:text-xl">
          The SF Bay Area is buzzing with lively bars, trendy clubs, and exciting activities that showcase its vibrant entertainment scene.
        </p>
      </div>
    </div>
  </div>
);

export default CoverImage; 