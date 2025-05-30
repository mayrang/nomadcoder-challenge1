import { apiUrl, calculateBillion } from "@/util";
import Image from "next/image";
import FinancialAssetCard from "./_components/FinancialAssetsCard";
import styles from "./PersonDetail.module.scss";
async function getDetailPerson(id: string) {
  const response = await fetch(`${apiUrl}/person/${id}`);
  const data = await response.json();
  return data as DetailPerson;
}

export type FinancialAsset = {
  exchange: string;
  ticker: string;
  companyName: string;
  exerciseOptionPrice?: number;
  numberOfShares: number;
  sharePrice: number;
  currencyCode: string;
  exchangeRate: number;
  interactive: boolean;
  currentPrice: number;
};

type DetailPerson = {
  id: string;
  state: string;
  city: string;
  name: string;
  country: string;
  position: number;
  industries: string[];

  financialAssets: FinancialAsset[];
  thumbnail: string;
  squareImage: string;
  bio: string[];
  about: string;
  netWorth: number;
};

export default async function DetailPersonPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await getDetailPerson(id);
  const imageSrc =
    data?.squareImage !== "https:undefined"
      ? (data?.squareImage as string)
      : "";
  console.log(data);
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <Image src={imageSrc} alt={data.name} width={240} height={280} />
        <div className={styles.name}>{data.name}</div>
        <div className={styles.desc}>
          <div>Networth: {calculateBillion(data.netWorth)} Billion</div>
          <div>Country: {data.country}</div>
          <div>Industry: {data.industries[0]}</div>
        </div>
        <p className={styles.bio}>{data.bio.join(". ")}</p>
      </section>
      <section className={styles.section}>
        <h3 className={styles.title}>Finalcial Assets</h3>
        <ul className={styles.cardList}>
          {data.financialAssets.map((financialAsset, index) => (
            <FinancialAssetCard {...financialAsset} key={index} />
          ))}
        </ul>
      </section>
    </div>
  );
}
