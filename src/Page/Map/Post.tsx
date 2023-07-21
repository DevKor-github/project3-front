import React from 'react';

export interface PostProps {
  position: {
    lat: number;
    lng: number;
  };
  title: string;
  image: string;
  content: string;
  id: string;
  like: number;
  posttime: Date;
  comment: string;
}

const Post: React.FC<PostProps> = ({ position, title, image, content, id, like, posttime, comment }) => {
  return (
    <div>
      <p>위도:{position.lat}</p>
      <p>경도:{position.lng}</p> 
      <h3>{title}</h3>
      <img src={image} alt={title} style={{ width: '100px', height: '100px' }} />
      <p>{content}</p>
      <p>Post by: {id}</p>
      <p>{like} Likes</p>
      <p>Posted on: {posttime.toString()}</p>
      <p>Comment: {comment}</p>
    </div>
  );
};

export default Post;