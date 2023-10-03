import { Option } from "@/lib/types/types";
import styles from "./Option.module.css";

type OptionProps = {
  optionData: Option;
};

function Option({ optionData }: OptionProps) {
  return (
    <div className={styles.option}>
      <label className={styles.option__label} htmlFor={optionData.hash}>
        {optionData.title}
      </label>
      <input
        className={styles.option__checkbox}
        type="checkbox"
        id={optionData.hash}
      />
      {optionData.icon && (
        <span
          className={styles.option__icon}
          style={{ backgroundImage: optionData.icon }}
        />
      )}
    </div>
  );
}

export default Option;
