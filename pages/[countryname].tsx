import { Country } from "@/types/entity.types";
import { rawCountriesToEntities } from "@/utils/map.utils";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/CountryDetailsPage.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function CountryDetailsPage() {
  const [country, setCountry] = useState<Country>();
  const router = useRouter();
  const countryName = router.query.countryname;

  useEffect(() => {
    if (countryName) {
      fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then((res) => res.json())
        .then((json) => setCountry(rawCountriesToEntities(json)[0]));
    }
  }, [countryName]);

  return (
    <div className={styles.pageBody}>
      <Link href={"/"}>
        <div className={styles.backLink}>
          <FontAwesomeIcon icon={faArrowLeftLong} className={styles.searchIcon} />
          <span>Back</span>
        </div>
      </Link>
      {country && (
        <div className={styles.content}>
          <div className={styles.flag}>
            <Image src={country.flag.src} alt={country.flag.alt} fill={true} />
          </div>
          <div className={styles.info}>
            <h2 className={styles.countryName}>{country.name}</h2>
            <div className={styles.details}>
              <div>
                <p>
                  Native Name: <span>{country.nativeName}</span>
                </p>
                <p>
                  Population: <span>{country.population}</span>
                </p>
                <p>
                  Region: <span>{country.region}</span>
                </p>
                <p>
                  Sub Region: <span>{country.subRegion}</span>
                </p>
                <p>
                  Capital: <span>{country.capital}</span>
                </p>
              </div>
              <div>
                <p>
                  Top Level Domain: <span>{country.topLevelDomain}</span>
                </p>
                <p>
                  Currencies: <span>{country.currencies.join(", ")}</span>
                </p>
                <p>
                  Languages: <span>{country.languages.join(", ")}</span>
                </p>
              </div>
            </div>
            <div className={styles.borderCountries}>
              <p>
                Border Countries:{" "}
                {country.borderCountries.map((bc) => (
                  <span>{bc}</span>
                ))}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
