import React from "react";
import styles from "./ProductItem.module.scss";
import Link from "next/link";
import { priceFormat } from "@/utils/priceFormat";
import { Rating } from "react-simple-star-rating";
import Image from "next/image";

const ProductItem = ({ id, name, price, imageUrl }) => {
  // API 사용량 초과하지 않도록 주석 처리
  // const { documents } = useFetchDocuments("reviews", ["productId", "==", id]);
  //
  // let productRating = 0;
  // documents.map((doc) => {
  //   productRating = productRating + doc.rate;
  // });
  // const rating = productRating / documents.length;

  const shortenText = (text, n) => {
    if (text.length > n) {
      return text.substring(0, n).concat("...");
    }
    return text;
  };

  return (
    <div className={styles.grid}>
      <Link href={`/product-details/${id}`}>
        <div className={styles.image}>
          <Image src={imageUrl} alt={name} width={265} height={265}></Image>
        </div>
      </Link>
      <div className={styles.content}>
        <div className={styles.details}>
          <p>{shortenText(name, 10)}</p>
          <em>
            <strong style={{ color: "#cb1400" }}>{priceFormat(price)}</strong>원{" "}
          </em>
          <div>
            <Rating
              readOnly
              // initialValue={Number.isNaN(rating) ? 0 : rating}
              initialValue={3}
              size={17}
            />
            <span className={styles.ratingCount}>
              {/*({documents.length})*/}
              (3)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
