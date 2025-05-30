import { FinancialAsset } from "../page";
import styles from "./FinancialAssetsCard.module.scss";
export default function FinancialAssetCard({
  ticker,
  sharePrice,
  exerciseOptionPrice,
}: FinancialAsset) {
  return (
    <article className={styles.card}>
      <div>Ticker: {ticker}</div>
      <div>Shares: {sharePrice}</div>
      {exerciseOptionPrice && <div>Excercise Price: {exerciseOptionPrice}</div>}
    </article>
  );
}
