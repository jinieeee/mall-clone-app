"use client";

import React from "react";
import styles from "./Product.module.scss";

const Product = () => {
  // const { data, isLoading } = useFetchCollections("products");
  return (
    <section className={styles.product}>
      <aside className={styles.filter}></aside>
      <div className={styles.content}></div>
    </section>
  );
};

export default Product;
