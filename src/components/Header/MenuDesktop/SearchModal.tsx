"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./SearchModal.module.css";
import { Ex } from "@/extension/ex";
import { useLocale } from "next-intl";
import Link from "next/link";
import { GetNews } from "@/dtos/News";

interface SearchModalProps {
  onClose: () => void;
  search: string;
}

const SearchModal: React.FC<SearchModalProps> = ({ onClose, search }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const [news, setNews] = useState<GetNews[]>([]);

  useEffect(() => {
    Ex.apiClient()
      .get(`/api/${locale}/post/list/0/8/desc/all`)
      .then((response) => {
        const filteredData = response.data
          .filter(
            (post: { titulo: string; description: string }) =>
              post.titulo.toLowerCase().includes(search.toLowerCase()) ||
              post.description.toLowerCase().includes(search.toLowerCase())
          )
          .map((post: { id: number; titulo: string; description: string }) => ({
            id: post.id,
            titulo: post.titulo,
            description: post.description,
          }));
        setNews(filteredData);
      })
      .catch(() => {});
  }, [locale, search]);

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleCloseClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    onClose();
  };

  return (
    <div className={styles.modal} ref={modalRef}>
      <i className={styles.closeIcon} onClick={handleCloseClick}>
        close
      </i>
      <ul>
        {news.map((post, index) => (
          <li key={post.id || index}>
            <Link href={`/news/${post.id}`}>
              <div className="posts">
                <h6 className="small bold">{post.titulo}</h6>
                <p>{post.description}</p>
              </div>
            </Link>
            <div className="divider"></div>
            <div className="tiny-space"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchModal;
