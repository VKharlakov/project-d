"use client";

import Filter from "../Filter/Filter";
import styles from "./FilterMenu.module.css";
import { useState } from "react";
import { filters } from "@/lib/data/filterMenuData/data";
import { motion, useCycle, AnimatePresence } from "framer-motion";

const asideVariants = {
  closed: {
    width: "5vw",
    transition: {
      duration: 1,
    },
  },
  open: {
    width: "40vw",
    transition: {
      duration: 1,
    },
  },
};

const filtersVariants = {
  closed: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
  open: {
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 0.3,
    },
  },
};

function FilterMenu() {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <motion.aside
      initial={false}
      animate={open ? "open" : "closed"}
      variants={asideVariants}
      className={styles["filter-menu"]}
    >
      {open ? (
        <button
          className={`${styles["filter-menu__button"]} ${styles["filter-menu__button_type_close"]}`}
          onClick={() => {
            cycleOpen();
          }}
        >
          Close
        </button>
      ) : (
        <button
          className={`${styles["filter-menu__button"]} ${styles["filter-menu__button_type_close"]}`}
          onClick={() => {
            cycleOpen();
          }}
        >
          Open
        </button>
      )}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles["filter-menu__content"]}
            variants={filtersVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className={styles["filter-menu__filters-container"]}>
              <h2 className={styles["filter-menu__title"]}>Filters</h2>
              <ul className={styles["filter-menu__filters"]}>
                {filters.map((filter, index) => (
                  <motion.li
                    className={styles["filter-menu__filter"]}
                    key={index}
                  >
                    <Filter filterData={filter} />
                  </motion.li>
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.aside>
  );
}

export default FilterMenu;
