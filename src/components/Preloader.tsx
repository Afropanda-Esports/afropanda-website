

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-[#191825] flex items-center justify-center z-50">
      <div className="text-center">
        {/* You can replace this with your logo or custom animation */}
        <div className="w-16 h-16 border-4 border-t-primary rounded-full animate-spin mb-4"></div>
        <p className="text-white text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default Preloader;