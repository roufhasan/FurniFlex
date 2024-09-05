import furniFlexLogo from "../../assets/icons/furniFlex-logo.png";
import bgImg from "../../assets/auth-bg.png";

const BrandShowcase = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="hidden h-full w-full flex-col items-center justify-center bg-black/50 md:flex"
    >
      <div className="text-center text-white">
        <img
          className="mx-auto size-[90px] object-center"
          src={furniFlexLogo}
          alt="FurniFlex logo"
        />
        <h1 className="mb-0.5 mt-1.5 text-[2.5rem] font-bold leading-none">
          Furni<span className="text-custom-sky-1">Flex</span>
        </h1>
        <p className="mx-auto mt-1 max-w-md font-medium text-custom-gray-4">
          Discover a seamless shopping experience with our curated collection of
          products. From fashion to electronics, we bring quality.
        </p>
      </div>
    </div>
  );
};

export default BrandShowcase;
