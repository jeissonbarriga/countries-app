import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { Country } from "@/types/entity.types";
import { rawCountriesToEntities } from "@/utils/map.utils";
import CountryCard from "@/components/CountryCard/CountryCard";
import Link from "next/link";
import Header from "@/components/Header/Header";
import FilterPanel from "@/components/FilterPanel/FilterPanel";

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [countryNameFilter, setCountryNameFilter] = useState<string>("");
  const [countryRegionFilter, setCountryRegionFilter] = useState<string>("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((json) => setCountries(rawCountriesToEntities(json)));
  }, []);

  const onCountryNameFilterChange = (filter: string): void => {
    setCountryNameFilter(filter);
  };

  const onCountryRegionFilterChange = (filter: string): void => {
    setCountryRegionFilter(filter);
  };

  return (
    <>
      <Head>
        <title>Countries App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} >
        <FilterPanel
          countryNameFilter={countryNameFilter}
          onCountryNameFilterChange={onCountryNameFilterChange}
          onCountryRegionFilterChange={onCountryRegionFilterChange}
        />
        <div className={styles.grid}>
          {countries
            .filter(
              (c) =>
                c.name.toLocaleLowerCase().includes(countryNameFilter) &&
                (c.region.toLocaleLowerCase() === countryRegionFilter ||
                  countryRegionFilter === "")
            )
            .map((c) => (
              <Link key={c.name} href={`/${c.name}`}>
                <CountryCard country={c} />
              </Link>
            ))}
        </div>
      </main>
    </>
  );
}
