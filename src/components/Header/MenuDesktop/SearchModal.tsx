"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./SearchModal.module.css";
import { Ex } from "@/extension/ex";
import { useLocale } from "next-intl";
import { GetNews } from "@/dtos/News";
import Link from "next/link";

interface NewsItem {
  id: number;
  titulo: string;
  description: string;
}

interface SearchModalProps {
  onClose: () => void;
  search: string;
}

const SearchModal: React.FC<SearchModalProps> = ({ onClose, search }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const [news, setNews] = useState<GetNews[]>([]);

  const limitTextLength = (text: string, maxLength = 100) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

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
          .map((post: { titulo: string; description: string }) => ({
            ...post,
            titulo: post.titulo,
            description: limitTextLength(post.description),
          }));
        setNews(filteredData);
      })
      .catch(() => {});
  }, [locale, setNews, search]);

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

  return (
    <div className={styles.modal} ref={modalRef}>
      <ul>
        {news.map((post, index) => (
          <li key={post.id || index}>
            <div className="small-space"></div>
            <Link href={""}>
              <div className="posts">
                <h6 className="small bold">{post.titulo}</h6>
                <p>{post.description}</p>
              </div>
            </Link>
            <div className="small-divider"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchModal;
