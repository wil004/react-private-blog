import React from "react";
import posts from '../data/posts.json';
import {useHistory, useParams} from "react-router-dom";


function BlogPost() {
    const history = useHistory();

    function goBlogPage() {
        history.push("/BlogPost/");
    }
    const {id} = useParams();

    const blogId = posts.find((item) => {
        return item.id === id;
    })

    return (
        <section id="blogPost">
            <h2 className="blogBackground">{blogId.title}</h2>
            <h4 className="blogBackground">{blogId.content}</h4>
            <h6>{blogId.date}</h6>
            <button type="button" onClick={goBlogPage}>
                Naar alle blogs
            </button>
        </section>
    );
}

export default BlogPost