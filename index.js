import styles from "./style.module.css";

let element = document.createElement("div");
element.className = `${styles.header}`;
element.innerHTML = "Hello, webpack!";

document.body.append(element);

fetch("http://localhost:3000/posts/", {
    method: "GET",
    headers: {
        accept: "application/json",
    },
}).then((response) => {
    return response.json();
}).then((data) => {
    let list = document.createElement("ul");

    for (var item in data) {
        let list_item = document.createElement("li");
        list_item.innerHTML = data[item].title;
        list.append(list_item);
    }
    document.body.append(list);
}
).catch((error) => {
    console.error("Error:", error);
});

