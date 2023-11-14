"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Languages = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <button
      className="circle transparent"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <Image
        className="circle"
        src={"/white-globe.svg"}
        alt=""
        width={22}
        height={22}
      ></Image>
      {isMenuOpen && (
        <menu className="no-wrap left">
          <Link href={"/en"} className="row">
            <Image
              className="circle tiny"
              width={26}
              height={26}
              src="/flags/usa.svg"
              alt="Change to English language"
            />
            <span>English</span>
          </Link>
          <Link href={"/fr"} className="row">
            <Image
              className="circle tiny"
              width={26}
              height={26}
              src="/flags/france.svg"
              alt="Changer en langue française"
            />
            <span>Français</span>
          </Link>
          <Link href={"/es"} className="row">
            <Image
              className="circle tiny"
              width={26}
              height={26}
              src="/flags/spain.svg"
              alt="Cambiar para idioma Español"
            />
            <span>Español</span>
          </Link>
          <Link href={"/pt"} className="row">
            <Image
              className="circle tiny"
              width={26}
              height={26}
              src="/flags/portugal.svg"
              alt="Mudar para o idioma Português"
            />
            <span>Português</span>
          </Link>
        </menu>
      )}
    </button>
  );
};

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/router";

// export const Languages = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const router = useRouter();

//   const changeLanguage = (lang: string) => {
//     if (router) {
//       const newAsPath = router.asPath.replace(/^\/[a-z]{2}/, `/${lang}`);
//       router.push(newAsPath, undefined, { locale: lang });
//     }
//   };

//   return (
//     <button
//       className="circle transparent"
//       onClick={() => setIsMenuOpen(!isMenuOpen)}
//     >
//       <Image
//         className="circle"
//         src={"/white-globe.svg"}
//         alt=""
//         width={22}
//         height={22}
//       />
//       {isMenuOpen && (
//         <menu className="no-wrap left">
//           <div onClick={() => changeLanguage("en")} className="row">
//             <Image
//               className="circle tiny"
//               width={26}
//               height={26}
//               src="/flags/usa.svg"
//               alt="Change to English language"
//             />
//             <span>English</span>
//           </div>
//           <div onClick={() => changeLanguage("fr")} className="row">
//             <Image
//               className="circle tiny"
//               width={26}
//               height={26}
//               src="/flags/france.svg"
//               alt="Changer en langue française"
//             />
//             <span>Français</span>
//           </div>
//           <div onClick={() => changeLanguage("es")} className="row">
//             <Image
//               className="circle tiny"
//               width={26}
//               height={26}
//               src="/flags/spain.svg"
//               alt="Cambiar para idioma Español"
//             />
//             <span>Español</span>
//           </div>
//           <div onClick={() => changeLanguage("pt")} className="row">
//             <Image
//               className="circle tiny"
//               width={26}
//               height={26}
//               src="/flags/portugal.svg"
//               alt="Mudar para o idioma Português"
//             />
//             <span>Português</span>
//           </div>
//         </menu>
//       )}
//     </button>
//   );
// };
