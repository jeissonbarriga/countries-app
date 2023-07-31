import { Country } from "@/types/entity.types";
import Image from "next/image";
import styles from "./CountryCard.module.css";

interface Props {
  country: Country;
}

export default function CountryCard({ country }: Props) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.flag}>
        <Image
          src={country.flag.src}
          alt={country.flag.alt}
          fill={true}
        />
      </div>
      <div className={styles.info}>
        <h4 className={styles.countryName}>{country.name}</h4>
        <p>Population: <span>{country.population}</span></p>
        <p>Region: <span>{country.region}</span></p>
        <p>Capital: <span>{country.capital}</span></p>
      </div>
    </div>
  );
}
