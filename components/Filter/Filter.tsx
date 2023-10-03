import styles from "./Filter.module.css";
import type { Filter } from "@/lib/types/types";
import Option from "../Option/Option";

type FilterProps = {
  filterData: Filter;
};

function Filter({ filterData }: FilterProps) {
  return (
    <div className={styles.filter}>
      <p className={styles.filter__title}>{filterData.title}</p>
      <ul className={styles.filter__options}>
        {filterData.options.map((option, index) => (
          <li className={styles.filter__option} key={index}>
            <Option optionData={option} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
