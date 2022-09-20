import { useState } from 'react';
import styles from '../styles/AddPizza.module.css';

const AddPizza = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [prices, setPrices] = useState([]);
  const [extraIng, setExtraIng] = useState([]);
  const [extra, setExtra] = useState(null);

  const changePrice = (e, idx) => {
    const currentPrices = prices;
    currentPrices[idx] = e.target.value;
    setPrices(currentPrices);
  };

  const handleExtraInput = (e) => {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };
  const handleExtra = () => {
    setExtraIng((prev) => [...prev, extra]);
  };

  const handleAddPizza = async () => {};

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.close} onClick={() => setClose(false)}>
          X
        </span>
        <h1 className={styles.title}>Add pizza</h1>
        <div className={styles.item}>
          <label className={styles.label}>Choose an Image</label>
          <input
            type="file"
            className={styles.input}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input
            type="text"
            placeholder="Pizza Name"
            className={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Description</label>
          <textarea
            className={styles.input}
            placeholder="Pizza Description"
            rows="1"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Prices</label>
          <div className={styles.prices}>
            <input
              className={`${styles.input} ${styles.inputSmall}`}
              type="number"
              placeholder="small"
              onChange={(e) => changePrice(e, 0)}
            />
            <input
              className={`${styles.input} ${styles.inputSmall}`}
              type="number"
              placeholder="medium"
              onChange={(e) => changePrice(e, 1)}
            />
            <input
              className={`${styles.input} ${styles.inputSmall}`}
              type="number"
              placeholder="large"
              onChange={(e) => changePrice(e, 2)}
            />
          </div>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Extra Ingredients</label>
          <div className={styles.extra}>
            <input
              className={`${styles.input} ${styles.inputSmall}`}
              type="text"
              placeholder="Item"
              name="text"
              onChange={handleExtraInput}
            />
            <input
              className={`${styles.input} ${styles.inputSmall}`}
              type="number"
              placeholder="price"
              onChange={handleExtraInput}
              name="price"
            />
            <button className={styles.extraBtn} onClick={handleExtra}>
              Add
            </button>
          </div>
          <div className={styles.extraItems}>
            {extraIng.map((extra, idx) => (
              <span key={idx} className={styles.extraItem}>
                {extra.text} - ${extra.price}
              </span>
            ))}
          </div>
        </div>
        <button className={styles.btn} onClick={handleAddPizza}>
          Add Pizza
        </button>
      </div>
    </div>
  );
};

export default AddPizza;
