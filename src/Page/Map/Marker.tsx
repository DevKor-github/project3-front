import React, { useState } from 'react';
import { Marker as GoogleMarker, InfoWindow } from '@react-google-maps/api';
import Post, { PostProps } from './Post';  
import { posts } from './PostManage'; // import the posts data

interface MarkerProps {
    position: {
      lat: number;
      lng: number;
    };
    icon: {
      url: string;
    };
    reviews: number;
}

const Marker: React.FC<MarkerProps> = ({ position, icon, reviews}) => {
    const [infoOpen, setInfoOpen] = useState(false);

    const onToggleOpen = () => {
        setInfoOpen(!infoOpen);
    };

    // PostManage.tsx와 연동
    const post = posts.find(
      (post) => post.position.lat === position.lat && post.position.lng === position.lng
    );

    return (
        <GoogleMarker 
            position={position}
            icon={{ 
                url: icon.url,
                scaledSize: new google.maps.Size(60,60),
            }}
            label={reviews.toString()}
            onClick={onToggleOpen}
        >
            {infoOpen && post && (
                <InfoWindow onCloseClick={onToggleOpen}>
                  <Post 
                     position={post.position}
                     title={post.title}
                     image={post.image}
                     content={post.content}
                     id={post.id}
                     like={post.like}
                     posttime={post.posttime}
                     comment={post.comment}
                  />
                </InfoWindow>
            )}
        </GoogleMarker>
    );
};

export default Marker;