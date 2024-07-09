import React from 'react';
import Text from '../atoms/Text';

const CommentInfo = ({ name, description }) => {
    return (
        <div className="w-fit flex flex-col items-start justify-start gap-y-2">
            <Text>{name}</Text>
            <Text>{description}</Text>
        </div>
    );
};

export default CommentInfo;
