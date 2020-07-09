import React, { useContext, useEffect, useState, useRef } from "react";
import { Tag } from "./Tag"
import { TagContext } from "../../providers/TagProvider"

export const TagList = () => {

    const { tags, getAllTags, addTag } = useContext(TagContext)
    const [tagInput, setTagInput] = useState(false)
    const name = useRef()

    useEffect(() => {
        getAllTags();
    }, []);

    const constructNewTag = () => {
        addTag({
            name: name.current.value,
        })
    }

    const displayTagInput = () => {
        if (tagInput === true) {
            return (
                <div className="form-group">
                    <input
                        type="text"
                        id="name"
                        ref={name}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="New Tag"
                    />
                    <button type="submit"
                        onClick={
                            evt => {
                                evt.preventDefault()
                                    constructNewTag()
                                        setTagInput(false)}}
                        className="btn btn-primary">
                        Save Tag</button>
                        </div>
                )
        }
    }

    return (
        <section>
            <div className="tagHead">
                <h2>Tags</h2>
                <button type="submit"
                    onClick={
                        evt => {
                            evt.preventDefault() // Prevent browser from submitting the form
                                setTagInput(true)
                        }
                    }
                    className="btn btn-primary">
                    Add a Tag</button>
            </div>
            <div>{displayTagInput()}</div>
            <div className="yagContainer">
                {tags.map(t =>
                    <Tag key={t.id} tag={t} />)}
            </div>
        </section>
    );
}