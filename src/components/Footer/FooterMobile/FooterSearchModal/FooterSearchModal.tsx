import React, { useEffect, useRef, useState } from "react";
import styles from "./FooterSearchModal.module.css";
import { GetNews } from "@/dtos/News";
import { useLocale } from "next-intl";
import { Ex } from "@/extension/ex";
import Link from "next/link";

interface SearchModalProps {
  onClose: () => void;
}

const FooterSearchModal: React.FC<SearchModalProps> = ({ onClose }) => {
  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose();
  };

  const [search, setSearch] = useState("");
  const [news, setNews] = useState<GetNews[]>([]);
  const locale = useLocale();

  useEffect(() => {
    if (search.trim()) {
      Ex.apiClient()
        .get(`/api/${locale}/post/list/0/8/desc/all`)
        .then((response) => {
          const filteredData = response.data
            .filter(
              (post: { titulo: string; description: string }) =>
                post.titulo.toLowerCase().includes(search.toLowerCase()) ||
                post.description.toLowerCase().includes(search.toLowerCase())
            )
            .map(
              (post: { id: number; titulo: string; description: string }) => ({
                id: post.id,
                titulo: post.titulo,
                description: post.description,
              })
            );
          setNews(filteredData);
        })
        .catch(() => {});
    }
  }, [locale, search]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const NewsLink: React.FC<{ post: GetNews; onClose: () => void }> = ({
    post,
    onClose,
  }) => {
    const handleClick = () => {
      onClose();
    };

    return (
      <Link onClick={handleClick} href={`/news/${post.id}`}>
        <div>
          <h6 className="small bold">{post.titulo}</h6>
          <p>{post.description}</p>
        </div>
      </Link>
    );
  };

  return (
    <div className={styles.modal}>
      <div className="row center-align">
        <i onClick={handleCloseModal}>arrow_back</i>
        <div className="field label suffix small-round small border background">
          <input type="text" onChange={handleSearchChange} />
          <i>search</i>
        </div>
      </div>
      <div className="large-space"></div>
      <ul className={`${styles.list} large-padding`}>
        {news.map((post, index) => (
          <li key={post.id || index}>
            <NewsLink post={post} onClose={onClose} />
            <div className="divider"></div>
            <div className="tiny-space"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSearchModal;
