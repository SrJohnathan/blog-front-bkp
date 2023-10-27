import Image from "next/image";

export const SocialMediaIcons = () => {
  return (
    <nav>
      <i className="small">
        <Image src={"/white-facebook.svg"} width={26} height={26} alt="" />
      </i>
      <i className="small">
        <Image src={"/white-instagram.svg"} width={26} height={26} alt="" />
      </i>
      <i className="small">
        <Image src={"/white-linkedin.svg"} width={26} height={26} alt="" />
      </i>
    </nav>
  );
};
