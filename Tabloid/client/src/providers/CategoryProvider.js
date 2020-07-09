import React, { useState } from "react";

export const CategoryContext = React.createContext();

export const CategoryProvider = (props) => {
    const [categories, setCategories] = useState([]);

    const getCategory = (id) => {
        return fetch(`/api/category/${id}`).then((res) => res.json());
    };

    const getAllCategories = () => {
        return fetch("/api/category")
            .then((res) => res.json())
            .then(setCategories);
    };

    const addCategory = (category) => {
        return fetch("/api/category", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(category),
        }).then(getAllCategories);
    };

    return (
        <CategoryContext.Provider value={{ categories, getAllCategories, addCategory, getCategory }}>
            {props.children}
        </CategoryContext.Provider>
    );
};