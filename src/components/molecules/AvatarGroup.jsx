import React from 'react';
import Avatar from '../atoms/Avatar';

const AvatarGroup = ({ avatars }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {avatars.map((avatar, index) => (
                <Avatar
                    key={index}
                    src={avatar.src}
                    alt={avatar.alt}
                    width={avatar.width}
                    height={avatar.height}
                />
            ))}
        </div>
    );
};

export default AvatarGroup;
