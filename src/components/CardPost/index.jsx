import Image from "next/image";
import React from "react";
import { Avatar } from "../Avatar";
import styles from "./card-post.module.css";
import Link from "next/link";

export const CardPost = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`} className={styles.link}>
      <article className={styles.article}>
        <header className={styles.cover}>
          <figure>
            <Image
              src={post.cover}
              width={438}
              height={133}
              alt={`Capa do post de título: ${post.title}`}
            />
          </figure>
        </header>

        <section className={styles.content}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </section>

        <footer className={styles.footer}>
          <Avatar imageSrc={post.author.avatar} name={post.author.username} />
        </footer>
      </article>
    </Link>
  );
};
