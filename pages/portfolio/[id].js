import React from 'react';
import BaseLayout from '../../componenets/layouts/BaseLayout';
import axios from 'axios';
import {withRouter} from 'next/router';

class Portfolio extends React.Component {

    static async getInitialProps(context) {
        let post = {};
        const postId = context.query.id;
    
        try {
          const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${postId}`
          );
          post = response.data;
        } catch (err) {
          console.log(err);
        }
    
        return {post};
      }

    render(){
        const {post} = this.props;
        return(
            <BaseLayout>
                <h2>{this.props.router.query.id}</h2>
                <h1>{post.title}</h1>
                <h2>{post.body}</h2>
            </BaseLayout>
        )
    }
}

export default withRouter(Portfolio);