import Image from "next/image";
import Link from "next/link";

export const Languages = () => {
  return (
    <button className="circle transparent">
      {/* <i>translate</i>
      <menu className="no-wrap left">
        <Link className="row">
          <Image
            className="circle tiny"
            src="/flags/usa.svg"
            alt="Change to English language"
          />
          <span>English</span>
        </Link>
        <Link className="row">
          <Image
            className="circle tiny"
            src="/flags/france.svg"
            alt="Changer en langue française"
          />
          <span>Français</span>
        </Link>
        <Link className="row">
          <Image
            className="circle tiny"
            src="/flags/spain.svg"
            alt="Cambiar para idioma Español"
          />
          <span>Español</span>
        </Link>
        <Link className="row">
          <Image
            className="circle tiny"
            src="/flags/portugal.svg"
            alt="Mudar para o idioma Português"
          />
          <span>Portuguese</span>
        </Link>
      </menu> */}
    </button>
  );
};
