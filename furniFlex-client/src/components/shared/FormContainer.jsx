const FormContainer = ({ children }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="w-full max-w-lg rounded-lg bg-zinc-50 p-6">
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
