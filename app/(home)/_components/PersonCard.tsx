import { calculateBillion } from "@/util";
import Image from "next/image";
import styles from "./PersonCard.module.scss";
import Link from "next/link";
export type IPersonCard = {
  id: string;
  name: string;
  squareImage?: string;
  netWorth: number;
  industries: string[];
};

export default function PersonCard({
  id,
  name,
  squareImage,
  netWorth,
  industries,
}: IPersonCard) {
  const imageSrc =
    squareImage !== "https:undefined" ? (squareImage as string) : "";
  return (
    <Link href={`/person/${id}`} className={styles.card}>
      <Image src={imageSrc} alt={name} width={240} height={240} />
      <div className={styles.content}>
        <div className={styles.title}>{name}</div>
        <div className={styles.subTitle}>
          {calculateBillion(netWorth)} Billion / {industries}
        </div>
      </div>
    </Link>
  );
}
