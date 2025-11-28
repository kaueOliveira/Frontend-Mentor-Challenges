const container = document.getElementById("container");
const endPoint = "data.json";

const info = (endPoint) => {
    fetch(endPoint)
    .then(res => res.json())
    .then(res => {
        console.log(res)
    })
};

info(endPoint)