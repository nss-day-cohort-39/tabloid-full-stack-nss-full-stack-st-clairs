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
                    <div className="addTagInput">
                        <input
                            type="text"
                            id="name"
                            ref={name}
                            required
                            autoFocus
                            className="form-control"
                            placeholder="New Tag"
                        />
                    </div>
                    <div className="saveTagBtn">
                        <button type="submit"
                            onClick={
                                evt => {
                                    evt.preventDefault()
                                    constructNewTag()
                                    setTagInput(false)
                                }}
                            className="btn btn-primary">
                            Save Tag</button>
                    </div>
                </div>
            )
        }
    }

    return (
        <section>
            <div className="tagHead">
                <h2 className="tagHeader">Tag Management</h2>
                <div className="addTagBtn">
                    <button type="submit"
                        onClick={
                            evt => {
                                evt.preventDefault() // Prevent browser from submitting the form
                                setTagInput(true)
                            }
                        }
                        className="btn btn-primary">
                        Add</button>
                </div>
            </div>
            <br />
            <div className="addFormStyle">{displayTagInput()}</div>
            <div className="tagContainer">
                {tags.map(t =>
                    <Tag key={t.id} tag={t} />)}
            </div>
        </section>
    );
}
