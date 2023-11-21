import React from "react";
import styles from "./SearchModal.module.css";

interface NewsItem {
  title: string;
  paragraph: string;
}

interface SearchModalProps {
  posts: NewsItem[];
}

const SearchModal: React.FC<SearchModalProps> = ({ posts }) => {
  return (
    <div className={styles.modal}>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h3>{post.title}</h3>
            <p>{post.paragraph}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchModal;
