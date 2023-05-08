import React from "react";

import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Nothing found
      </h1>
      <p className={styles.description}>
        Sorry, but now this page haven`t in the this stope
      </p>
    </div>
  );
};

export default NotFoundBlock;
