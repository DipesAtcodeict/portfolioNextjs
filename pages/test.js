import React from 'react';
import BaseLayout from '../componenets/layouts/BaseLayout';
import axios from 'axios';
import {withRouter} from 'next/router';

class Test extends React.Component {

    static async getInitialProps({query}) {
        const testId = query.id;
        return {testId};
      }

    render(){
        return(
            <BaseLayout>
                <h1>I am test page</h1>
                <h1>{this.props.testId}</h1>
            </BaseLayout>
        )
    }
}

export default withRouter(Test);