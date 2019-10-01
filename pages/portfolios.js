import React from "react";
import axios from 'axios';
import Link from 'next/link';
import BaseLayout from "../componenets/layouts/BaseLayout";

class Portfolios extends React.Component {

  static async getInitialProps() {
    let posts = [];

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      posts = response.data;
    } catch (err) {
      console.log(err);
    }

    return {posts:posts.splice(0,10)};
  }

  renderPostTitle(posts) {
      return posts.map((post)=>{
          return(
            <li key={post.id}>
              <Link as={`/portfolio/${post.id}`} href="/portfolio/[id]">
                <a>{post.title}</a>
              </Link>
              </li>
          )
      })
  }

  render() {
    const {posts} = this.props;

    return(
        <BaseLayout>
            <h1>I am portfolio page</h1>
            <ul>
               {this.renderPostTitle(posts)}
            </ul>
        </BaseLayout>
    ) 
  }
}

export default Portfolios;
