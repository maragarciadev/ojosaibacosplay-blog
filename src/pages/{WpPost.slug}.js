import React from "react";
import {graphql} from "gatsby";
import moment from "moment";
import Layout from "../components/layout";

function PostPage({ data }) {
    const post = data.wpPost;
    const date = moment(post.date);

    return (
        <Layout>
            <div className={"post-hero"}>
                <div className={"hero-image"}>
                    <img src={post.featuredImage.node.mediaItemUrl} alt={post.featuredImage.node.altText} className={"featured-image"}/>
                    <div className="overlay"/>
                </div>
                <div>
                    <h2 className="title">{post.title}</h2>
                    <em>von {post.author.node.firstName} {post.author.node.lastName}</em>
                </div>
            </div>

            <div className={"container"}>
                <article key={post.title} className="post">

                    <div dangerouslySetInnerHTML={{__html: post.content}}/>
                    <div className="footer">
                        <em>Erstellt am {date.format("DD.MM.YYYY")} um {date.format("HH:mm")} Uhr.</em>
                    </div>
                </article>
            </div>
        </Layout>
    );
}

export default PostPage;

export const query = graphql`
    query($id: String) {
        wpPost(id: {eq: $id}) {
            title
            author {
                node {
                    firstName
                    lastName
                }
            }
            date
            content
            featuredImage {
                node {
                    mediaItemUrl
                    altText
                }
            }
        }
    }

`;
