import styles from "./style.module.css";

let element = document.createElement("div");
element.className = `${styles.header}`;
element.innerHTML = "Hello, webpack!";

document.body.append(element);

