import React from 'react';
import CommentCard from '../molecules/CommentCard';

const CommentSlide = ({ comments }) => {
    return (
        <div className="w-full flex justify-between">
            {comments.map((comment, index) => (
                <CommentCard key={index} comment={comment} />
            ))}
        </div>
    );
};

export default CommentSlide;

