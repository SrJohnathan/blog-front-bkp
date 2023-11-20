import Image from "next/image";
import Link from "next/link";
import { ShareIcon } from "./ShareIcon";

interface SocialMediaIconsProps {
  showShare: boolean;
}

export const SocialMediaIcons = ({ showShare }: SocialMediaIconsProps) => {
  return (
    <nav>
      <Link target="_blank" href={"https://www.facebook.com/tamba.ventura"}>
        <i className="small">
          <Image src={"/color-facebook.svg"} width={26} height={26} alt="" />
        </i>
      </Link>

      <Link target="_blank" href={"https://www.instagram.com/stw.spa/"}>
        <i className="small">
          <Image src={"/color-ig.svg"} width={26} height={26} alt="" />
        </i>
      </Link>

      <Link
        target="_blank"
        href={"https://www.linkedin.com/company/study-travel-work-portuguese/"}
      >
        <i className="small">
          <Image src={"/color-in.svg"} width={26} height={26} alt="" />
        </i>
      </Link>
      <ShareIcon active={showShare} />
    </nav>
  );
};
