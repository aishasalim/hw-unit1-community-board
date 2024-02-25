import React from "react";
import "./Post.css"

const Post = (props) => {
    const { name, coffeCost, link, photoDirectory} = props;
    return (
            <div className="Card">
                <img src={photoDirectory}></img>
                <h3>{ name }</h3>
                <h4>{ coffeCost }</h4>
                <a href={link}>
                    <button>View Menu</button>
                </a>
            </div>
    )
}
export default Post;