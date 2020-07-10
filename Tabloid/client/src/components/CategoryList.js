import React, { useContext, useEffect, useState, useRef } from "react";
import Category from "./Category";
import { CategoryContext } from "../providers/CategoryProvider";

export default function CategoryList() {
    const { categories, getAllCategories, addCategory } = useContext(CategoryContext);
    const [categoryInput, setInput] = useState(false)
    const name = useRef()


    useEffect(() => {
        getAllCategories();
    }, []);

    const constructNewCategory = () => {
        addCategory({
            name: name.current.value,
        })
    }

    const displayInput = () => {
        if (categoryInput === true) {
            return (
                <div className="form-group">
                    <input
                        type="text"
                        id="name"
                        ref={name}
                        required
                        className="form-control"
                        placeholder="New Category"
                    />
                    <button type="submit"
                        onClick={
                            evt => {
                                evt.preventDefault()
                                constructNewCategory()
                                setInput(false)
                            }}
                        className="btn btn-primary">
                        Save Category</button>
                </div>
            )
        }
    }

    return (
        <section>
            <div>
                <h2>Category</h2>
                <button type="submit"
                    onClick={
                        evt => {
                            evt.preventDefault()
                            setInput(true)
                        }
                    }
                    className="btn btn-primary">
                    Add</button>
            </div>
            <div>
                {displayInput()}
            </div>
            <div>
                {categories.map(c =>
                    <Category key={c.id} category={c} />
                )}
            </div>
        </section>
    );
}