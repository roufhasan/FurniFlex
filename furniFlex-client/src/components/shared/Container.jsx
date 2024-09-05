const Container = ({ children }) => {
  return (
    <section className="mx-auto w-full max-w-[1440px] xl:px-[7.5rem]">
      {children}
    </section>
  );
};

export default Container;
