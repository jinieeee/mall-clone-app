"use client";

import React, { useEffect } from "react";
import styles from "./Product.module.scss";
import useFetchCollections from "@/hooks/useFetchCollections";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_PRICE_RANGE,
  selectProducts,
  STORE_PRODUCTS,
} from "@/redux/slice/productSlice";
import Loader from "@/components/loader/Loader";
import ProductList from "@/components/product/productList/ProductList";
import ProductFilter from "@/components/product/productFilter/ProductFilter";

const Product = () => {
  const { data, isLoading } = useFetchCollections("products");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      STORE_PRODUCTS({
        products: data.map((item) => ({
          ...item,
          createdAt: item.createdAt.toString(),
        })),
      }),
    );

    dispatch(
      GET_PRICE_RANGE({
        products: data.map((item) => ({
          ...item,
          createdAt: item.createdAt.toString(),
        })),
      }),
    );
  });

  const products = useSelector(selectProducts);

  return (
    <section className={styles.product}>
      <aside className={styles.filter}>
        {isLoading ? null : <ProductFilter />}
      </aside>
      <div className={styles.content}>
        {isLoading ? <Loader basic /> : <ProductList />}
      </div>
    </section>
  );
};

export default Product;