const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <div className="rounded-full h-6 w-6 bg-primary-dark animate-ping"></div>
      <div className="rounded-full h-8 w-8 bg-primary-dark animate-ping"></div>
      <div className="rounded-full h-6 w-6 bg-primary-dark animate-ping"></div>
    </div>
  );
};

export default Loading;
