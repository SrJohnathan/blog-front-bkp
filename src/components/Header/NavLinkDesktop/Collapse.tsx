"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";

interface CollapseProps {
  isOpen: boolean;
  children: ReactNode;
  onClick?: () => void;
}

export const Collapse: React.FunctionComponent<CollapseProps> = ({
  isOpen,
  children,
  onClick,
}) => {
  const [childHeight, setChildHeight] = useState<string>("0");
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      const childHeightRaw = contentRef.current.clientHeight;
      const calculatedHeight = `${childHeightRaw / 6}rem`;
      setChildHeight(calculatedHeight);
    }
  }, [isOpen]);

  return (
    <div
      onClick={onClick}
      className="collapse max"
      style={{
        maxHeight: isOpen ? childHeight : "0",
        transition: "0.7s ease-in-out",
      }}
    >
      <div ref={contentRef}>
        <div className="sample-content max">{children}</div>
      </div>
    </div>
  );
};
