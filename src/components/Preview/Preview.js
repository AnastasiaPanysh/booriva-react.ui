import style from "./Preview.module.css";

function Preview() {
  return (
    <div className={style["wrapper"]}>
      <div className={style["img-womens"]}></div>
      <div className={style["new-collection"]}></div>
      <div className={style["store"]}></div>
      <div className={style[""]}></div>
    </div>
  );
}

export default Preview;
