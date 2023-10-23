import Image from "next/image";

export const Languages = () => {
  return (
    <button className="circle transparent">
      <i>translate</i>
      <menu className="no-wrap left">
        <a className="row">
          <Image
            className="circle tiny"
            src="/band/usa.svg"
            alt="Change to English language"
          />
          <span>English</span>
        </a>
        <a className="row">
          <Image
            className="circle tiny"
            src="/band/france.svg"
            alt="Changer en langue française"
          />
          <span>Français</span>
        </a>
        <a className="row">
          <Image
            className="circle tiny"
            src="/band/spain.svg"
            alt="Cambiar para idioma Español"
          />
          <span>Español</span>
        </a>
        <a className="row">
          <Image
            className="circle tiny"
            src="/band/portugal.svg"
            alt="Mudar para o idioma Português"
          />
          <span>Portuguese</span>
        </a>
      </menu>
    </button>
  );
};
