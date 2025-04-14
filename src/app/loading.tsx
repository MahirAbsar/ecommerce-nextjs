import Image from "next/image";
import loader from "../../assets/loader.gif";

const LoadingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Image src={loader} alt="Loading..." width={150} height={150} priority />
    </div>
  );
};

export default LoadingPage;
