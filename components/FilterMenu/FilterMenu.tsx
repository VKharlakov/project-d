"use client";

import Filter from "../Filter/Filter";
import styles from "./FilterMenu.module.css";
import { useState } from "react";
import { filters } from "@/lib/data/filterMenuData/data";

function FilterMenu() {
  const [isFilterMenu, setIsFilterMenu] = useState(true);
  return (
    <section
      className={`${styles["filter-menu"]} ${
        isFilterMenu ? `${styles["filter-menu_active"]}` : ""
      }`}
    >
      {isFilterMenu ? (
        <button
          className={`${styles["filter-menu__button"]} ${styles["filter-menu__button_type_close"]}`}
          onClick={() => {
            setIsFilterMenu(false);
          }}
        >
          Close
        </button>
      ) : (
        <button
          className={`${styles["filter-menu__button"]} ${styles["filter-menu__button_type_close"]}`}
          onClick={() => {
            setIsFilterMenu(true);
          }}
        >
          Open
        </button>
      )}
      {isFilterMenu && (
        <>
          <div className={styles["filter-menu__filters-container"]}>
            <h2 className={styles["filter-menu__title"]}>Filters</h2>
            <ul className={styles["filter-menu__filters"]}>
              {filters.map((filter, index) => (
                <li className={styles["filter-menu__filter"]} key={index}>
                  <Filter filterData={filter} />
                </li>
              ))}
            </ul>
          </div>
          <button
            className={`${styles["filter-menu__button"]} ${styles["filter-menu__button_type_submit"]}`}
          >
            Submit
          </button>
          <button
            className={`${styles["filter-menu__button"]} ${styles["filter-menu__button_type_reset"]}`}
          >
            Reset
          </button>
        </>
      )}
    </section>
  );
}

export default FilterMenu;
