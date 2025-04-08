import LogoMeliBig from '@/assets/images/LogoMeliBig.png';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center container mx-auto mt-16 p-9 bg-white rounded-sm">
      <img src={LogoMeliBig} alt="Logo" className="mb-4 h-20" />
      <h1 className="text-3xl text-secondary">Test Práctico | Frontend</h1>
    </div>
  );
};

export default Home;
