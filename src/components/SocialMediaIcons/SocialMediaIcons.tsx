import Image from "next/image";
import Link from "next/link";

export const SocialMediaIcons = () => {
  return (
    <nav>
      <Link target="_blank" href={"https://www.facebook.com/tamba.ventura"}>
        <i className="small">
          <Image src={"/white-facebook.svg"} width={26} height={26} alt="" />
        </i>
      </Link>

      <Link target="_blank" href={"https://www.instagram.com/stw.spa/"}>
        <i className="small">
          <Image src={"/white-instagram.svg"} width={26} height={26} alt="" />
        </i>
      </Link>

      <Link
        target="_blank"
        href={"https://www.linkedin.com/company/study-travel-work-portuguese/"}
      >
        <i className="small">
          <Image src={"/white-linkedin.svg"} width={26} height={26} alt="" />
        </i>
      </Link>
    </nav>
  );
};
