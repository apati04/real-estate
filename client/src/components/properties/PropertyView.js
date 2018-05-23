import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ContentLayout from '../layout/ContentLayout';
import {
  fetchProjectPostsIfNeeded,
  deleteSelectedProperty
} from '../../actions';
import { Avatar, List, Modal, message, Carousel } from 'antd';
const { confirm } = Modal;
class PropertyView extends Component {
  componentDidMount() {
    this.props.fetchProjectPostsIfNeeded(this.props.match.params._id);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.postsInProject !== this.props.postsInProject) {
      this.props.fetchProjectPostsIfNeeded(nextProps.match.params._id);
    }
  }
  showDeleteModal = () => {
    const {
      match: {
        params: { _id: projectId, postId }
      },
      deleteSelectedProperty,
      history
    } = this.props;
    confirm({
      title: 'Are you sure?',
      content: 'This operation cannot be undone',
      okText: 'Yes, delete this property',
      onOk: () => {
        const msg = () => {
          message.success('Item has been deleted');
        };
        const values = { projectId, postId };
        deleteSelectedProperty(values, history, msg);
      }
    });
  };
  renderDetails() {
    const { currentProject, deleteSelectedProperty } = this.props;
    const postId = this.props.match.params.postId;
    if (currentProject.items.length > 0) {
      const post = currentProject.items.find(item => item._id === postId);
      // ----------------------------------------
      // data array for property details,
      const data = [
        {
          title: 'Address',
          content: post.fullAddress,
          icon: 'environment-o'
        },
        { title: 'Type', content: 'Single Family', icon: 'home' },
        {
          title: 'Latitude, Longitude',
          content: `${post.address.latitude}, ${post.address.longitude}`,
          icon: 'global'
        },
        { title: 'Year Built', content: post.yearBuilt, icon: 'calendar' },
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
      //------ this renders the view ---------------
      console.log(post);
      return (
        <div>
          <div className="p-2">
            <div className="row">
              <div className="col-sm-5">
                {Array.isArray(post.image.url)
                  ? <Carousel effect='fade'>
                    {post.image.url.map(img => {
                      return (
                        <div key={img}>
                          <img src={img} className='img-fluid' alt='property' key={img} style={{ width: '100%', height: 400, marginTop: '40px' }}/>
                        </div>
                      );
                    })}
                  </Carousel>
                  : <img src={post.image.url} className='img-fluid' alt='property' style={{ width: 600, height: 500, marginTop: '40px' }} />}
              </div>
              <div className="col-sm-7">
                <h2 className="my-4 display-4">{post.fullAddress}</h2>
                <ul className="my-4 list-inline">
                  <li className="list-unstyled list-inline-item">
                    <h5>{`${post.rooms.bedrooms} bedrooms`}</h5>
                  </li>
                  <li className="list-inline-item">
                    <h5>{`- ${post.rooms.bathrooms} bathrooms`}</h5>
                  </li>
                  <li className="list-inline-item">
                    <h5>{`- ${post.finishedSize.value} sq.ft.`}</h5>
                  </li>
                </ul>
                <List
                  grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 2,
                    lg: 2,
                    xl: 2,
                    xxl: 2
                  }}
                  justify="space-around"
                  dataSource={data}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar icon={`${item.icon}`} />}
                        title={item.title}
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
              <button
                onClick={() => {
                  this.showDeleteModal(currentProject, deleteSelectedProperty);
                }}
                className="btn btn-outline-danger"
              >
                <i className="fas fa-trash-alt" /> Delete
              </button>
            </div>
          </div>
        </div>
      );
    }
    // ------if still fetching data render loading...
    return <div>Loading...</div>;
  }

  render() {
    return (
      <ContentLayout>
        <div>{this.renderDetails()}</div>
      </ContentLayout>
    );
  }
}
function mapStateToProps({ postsInProject }, ownProps) {
  const { _id } = ownProps.match.params;
  const fetchedProject = postsInProject[_id] || { isFetching: true, items: [] };
  return { currentProject: fetchedProject };
}
export default withRouter(
  connect(mapStateToProps, {
    fetchProjectPostsIfNeeded,
    deleteSelectedProperty
  })(PropertyView)
);
