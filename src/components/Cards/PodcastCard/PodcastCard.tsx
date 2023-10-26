import Image from "next/image";
import Link from "next/link";

export const PodcastCard = () => {
  return (
    <Link href={"/podcats"} className={"s6 m3"}>
      <article className="no-padding transparent no-elevate">
        <Image
          className="responsive large"
          width={110}
          height={240}
          src="/Component_4.jpeg"
          alt=""
        />
        <div className="absolute bottom left right padding bottom-shadow white-text">
          <div className="center-align">
            <Image
              className="round"
              width="110"
              height="240"
              src={"/gridicons_play.svg"}
              alt=""
            />
          </div>
          <p className="max">
            Lorem Ipsum é simplesmente um texto fictício da indústria de.
          </p>
        </div>
      </article>
    </Link>
  );
};
