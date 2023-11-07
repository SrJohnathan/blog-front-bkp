import Image from "next/image";
import Link from "next/link";
import {GetNews} from "@/dtos/News";
import {FallbackImage} from "@/components/Cards/MedSqCard/FallbackImage";

export const PodcastCard = ({ value }: { value: GetNews }) => {
  return (
    <div className={"s6 m3"}>
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
            <Link href={"/podcasts"}>
              <FallbackImage
                className="round"
                width="80"
                height="80"
                src={ "/api/files/"+value.img?.split("||")[0]    ||   "/gridicons_play.svg"}
                alt=""
              />
            </Link>
          </div>
          <p className="max">
            {value.titulo}
          </p>
        </div>
      </article>
    </div>
  );
};
