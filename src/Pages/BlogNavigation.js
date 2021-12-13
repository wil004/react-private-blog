import React from "react";
import posts from '../data/posts.json';
import {Link} from "react-router-dom";


function BlogNavigation() {

    return (
        <section id="blogPostList">
            <h3>Total posts: {posts.length}</h3>
            <Link to="/"> Home </Link>
            {posts.map((item) => {
                return <div key={item.id}>
                    <Link to={item.id}><h2>{item.title}</h2></Link>
                </div>
            })}
        </section>
    );
}

export default BlogNavigation