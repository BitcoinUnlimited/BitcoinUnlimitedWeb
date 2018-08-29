'use strict';

import React from 'react';

// function Tag(props) {
//     return (
//         <div key={props.key.toString()}>{props.term}</div>
//     );
// }

class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasData: false,
            tag: ''
        }
        this.tagChange = this.tagChange.bind(this);
        this.tagSubmit = this.tagSubmit.bind(this);
    }

    tagSubmit(e) {
        e.preventDefault();
        alert(this.state.tag);
    }

    tagChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    // const buildTagList = () => {
    //     let tags = this.state.tags;
    //     let results = tags.map((tag, i) => {
    //         return <Tag key={i} term={tag} />;
    //     });
    //     return results;
    // }

    componentDidMount() {
        // console.log('did mount');
        // // axios data call
        // setTimeout(() => {
        //     this.setState({ hasData: true, tags: ['one','two','three'] });
        // }, 4000);
    }

    render() {
        if (!this.state.hasData) {
            return (
                <div>
                    <form onSubmit={ this.tagSubmit }>
                        <input type="text" name="tag" value={ this.state.tag } onSubmit={this.tagChange}/>
                    </form>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default Tags;
