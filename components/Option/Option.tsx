import { Option } from "@/lib/types/types";
import styles from "./Option.module.css";

type OptionProps = {
  optionData: Option;
};

function Option({ optionData }: OptionProps) {
  return (
    <label className={styles.option} htmlFor={optionData.hash}>
      {optionData.title}
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
    </label>
  );
}

export default Option;
