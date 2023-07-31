import styles from "./FilterPanel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface Props {
  countryNameFilter: string;
  onCountryNameFilterChange: (filter: string) => void;
  onCountryRegionFilterChange: (filter: string) => void;
}

export default function FilterPanel(props: Props) {
  return (
    <div className={styles.filterPanel}>
      <div className={styles.countryNameFilter}>
        <input
          type="text"
          placeholder="Search for a country..."
          className={styles.searchInput}
          value={props.countryNameFilter}
          onChange={(e) =>
            props.onCountryNameFilterChange(e.target.value.toLocaleLowerCase())
          }
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={styles.searchIcon}
        />
      </div>
      <select
        className={styles.countryRegionFilter}
        onChange={(e) => props.onCountryRegionFilterChange(e.target.value)}
      >
        <option value="" disabled selected hidden>Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="americas">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}
