const Loader = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex space-x-2">
        <div className="h-4 w-4 animate-bounce rounded-full bg-blue-500"></div>
        <div className="animate-bounce2 h-4 w-4 rounded-full bg-blue-500"></div>
        <div className="h-4 w-4 animate-bounce rounded-full bg-blue-500"></div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-lg font-semibold text-gray-700">Loading...</p>
        <p className="text-sm text-gray-500">Your data is on its way!</p>
      </div>
    </div>
  );
};

export default Loader;
