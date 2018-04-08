import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from '../../actions';
import { Panel } from 'react-bootstrap';

class BlogList extends Component {
    componentDidMount(){
        this.props.fetchBlogs();
    }

    renderBlogs() {
        return this.props.blogs.map(blog => {
            return(
                <Panel key={blog._id}>
                    <Panel.Heading>{blog.title}</Panel.Heading>
                    <Panel.Body> <img src={blog.image} alt="" /> </Panel.Body>
                    <Panel.Body>{blog.body}</Panel.Body>
                </Panel>
            )
        })
    }

    render() {
        return(
            <div>
                {this.renderBlogs()}
            </div>
        )
    }
}

function mapStateToProps({ blogs }) {
    return { blogs };
}

export default connect(mapStateToProps, { fetchBlogs })(BlogList);