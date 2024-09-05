import axios from "axios";

export const fetchCategories = (setCatgories) => {
  axios
    .get("http://localhost:5000/category")
    .then((res) => setCatgories(res.data))
    .catch((err) => console.log(`error fetching categories: ${err}`));
};
