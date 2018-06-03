import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ContentLayout from '../layout/ContentLayout';
import {
  fetchProjectPostsIfNeeded,
  deleteSelectedProperty
} from '../../actions';
import { Avatar, List, Modal, message, Carousel, Spin } from 'antd';
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
          content: post.address.latitude && post.address.longitude ? `${post.address.latitude}, ${post.address.longitude}` : 'N/A',
          icon: 'global'
        },
        { title: 'Year Built', content: post.yearBuilt || 'N/A', icon: 'calendar' },
        {
          title: 'Website',
          content: post.website || 'N/A',
          icon: 'export'
        },
        {
          title: 'Notes',
          content: post.notes || 'N/A',
          icon: 'edit'
        }
      ];

      const renderPropImg = () => {
        if (post.userImage) {
          return <img src={`https://s3-us-west-1.amazonaws.com/rem-bucket-9818/${post.userImage.url}`} className='img-fluid' alt='property' style={{ width: 480, height: 400, marginTop: '40px' }}/>
        }

        if (!post.image) {
          return <img src='http://via.placeholder.com/350x350' className='img-fluid' alt='property' style={{ width: 480, height: 400, marginTop: '40px' }}/>
        }

        if (Array.isArray(post.image.url)) {
          return (
            <Carousel effect='fade'>
              {post.image.url.map(img => {
                return (
                  <div key={img}>
                    <img src={img} className='img-fluid' alt='property' key={img} style={{ width: 480, height: 400, marginTop: '40px' }}/>
                  </div>
                );
              })}
            </Carousel>
          );
        } else {
          return <img src={post.image.url} className='img-fluid' alt='property' style={{ width: 480, height: 360, marginTop: '40px' }} />
        }
      }
      //------ this renders the view ---------------
      return (
        <div>
          <div>
            <div className="row">
              <div className="col-sm-4">
                {renderPropImg()}
              </div>
              <div className="col-sm-8 text-capitalize">
                <h2 className="my-4">{post.fullAddress}</h2>
                <ul className="my-4 list-inline">
                  <li className="list-unstyled list-inline-item">
                    <h5>{post.rooms ? `- ${post.rooms.bedrooms} bedrooms` : '- Room information not available'}</h5>
                  </li>
                  <li className="list-inline-item">
                    <h5>{post.rooms ? `- ${post.rooms.bathrooms} bathrooms` : ''}</h5>
                  </li>
                  <li className="list-inline-item">
                    <h5>{post.finishedSize ? `- ${post.finishedSize.value} SqFt` : '- SqFt not available'}</h5>
                  </li>
                </ul>
                <List
                  grid={{
                    gutter: 16,
                    xs: 2,
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
    return (
      <div className='d-flex justify-content-center mt-5'>
        <Spin size='large' tip='Fetching property data...'/>
      </div>
    );
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
