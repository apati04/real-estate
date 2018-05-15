import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ContentLayout from '../layout/ContentLayout';
import { selectProjectItem, fetchProjectPostsIfNeeded } from '../../actions';
import { Avatar, Icon, List } from 'antd';

class PropertyView extends Component {
  componentDidMount() {
    this.props.fetchProjectPostsIfNeeded(this.props.match.params._id);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.postsInProject !== this.props.postsInProject) {
      this.props.fetchProjectPostsIfNeeded(nextProps.match.params._id);
    }
  }
  renderImage(post) {
    if (post) {
      return (
        <div>
          <img
            className="img-fluid"
            style={{ width: 800 }}
            src={`https://s3-us-west-1.amazonaws.com/rem-bucket-9818/${
              post.imageUrl
            }`}
          />
        </div>
      );
    }
  }
  renderDetails() {
    const { currentProject, isFetching } = this.props;
    const postId = this.props.match.params.postId;
    if (currentProject.items.length > 0) {
      const post = currentProject.items.find(item => item._id === postId);
      console.log(post);
      const formatAddress = post.address.split(' ');
      const street = formatAddress.slice(0, 3).join(' ');
      const cityStateZip = formatAddress.slice(3).join(' ');
      // latitude, longitude, notes, owner, website, built, address
      const home = '<Icon type="home" />';
      const global = <Icon type="global" />;
      let calendar = () => <Icon type="calendar" />;
      const edit = <Icon type="edit" />;
      const data = [
        {
          title: 'Address',
          content: post.address,
          icon: 'environment-o'
        },
        { title: 'Type', content: 'Single Family', icon: 'home' },
        {
          title: 'Latitude, Longitude',
          content: `${post.latitude}, ${post.longitude}`,
          icon: 'global'
        },
        { title: 'Year Built', content: post.built, icon: 'calendar' },

        {
          title: 'Owner',
          content: post.owner,
          icon: 'user'
        },
        {
          title: 'Website',
          content: post.website,
          icon: 'export'
        },
        {
          title: 'Notes',
          content: post.notes,
          icon: 'edit'
        }
      ];
      return (
        <div>
          <div className="p-2">
            <div className='row'>
              <div className='col-sm-6'>
                {this.renderImage(post)}
              </div>
              <div className='col-sm-6'>
                <h2 className="my-4 display-4">{post.address}</h2>
                <ul className="my-4 list-inline">
                  <li className="list-unstyled list-inline-item">
                    <h5>4 beds </h5>
                  </li>
                  <li className="list-inline-item">
                    <h5> - 3 baths</h5>
                  </li>
                  <li className="list-inline-item">
                    <h5> - 2,343 sqft</h5>
                  </li>
                </ul>
                <List
                  grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 2, xl: 2, xxl: 2 }}
                  justify="space-around"
                  dataSource={data}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar icon={`${item.icon}`} />}
                        title={<h6>{item.title}</h6>}
                        description={<p>{item.content}</p>}
                      />
                    </List.Item>
                  )}
                />
              </div>
            </div>
          </div>

          <div className="d-flex my-4">
            <div className="mr-auto p-2">
              <button
                onClick={() => {
                  this.props.history.goBack();
                }}
                className="btn btn-outline-danger"
              >
                <i className="fas fa-undo" /> BACK
              </button>
            </div>
            <div className=" p-2">
              <button className="btn btn-outline-info">
                <i className="fas fa-edit" /> Edit
              </button>
            </div>
            <div className=" p-2">
              <button className="btn btn-outline-danger">
                <i className="fas fa-trash-alt" /> Delete
              </button>
            </div>
          </div>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
  render() {
    return (
      <ContentLayout>
        <div>{this.renderDetails()}</div>
        <div>{this.renderImage()}</div>
      </ContentLayout>
    );
  }
}
function mapStateToProps({ postsInProject }, ownProps) {
  const { _id, postId } = ownProps.match.params;
  const fetchedProject = postsInProject[_id] || { isFetching: true, items: [] };
  return { currentProject: fetchedProject };
}
export default withRouter(
  connect(mapStateToProps, { fetchProjectPostsIfNeeded })(PropertyView)
);
