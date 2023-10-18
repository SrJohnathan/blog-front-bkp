import Image from "next/image";

export const MenuMobile = () => {
  return (
    <>
      <header className={`responsive s primary fixed`}>
        <nav>
          <div className={"absolute left-align"}>
            <button className="circle   transparent">
              <i>menu</i>
            </button>
          </div>

          <a href={"/"} className="center-align max">
            <Image width={80} height={80} src="/stw_1.png" alt={"STW icon"} />
          </a>
        </nav>
      </header>
    </>
  );
};
