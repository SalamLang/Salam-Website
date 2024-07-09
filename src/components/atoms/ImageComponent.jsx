import React from 'react';
import Image from 'next/image';

const ImageComponent = ({ src, alt }) => {
    return <Image src={src} alt={alt} />;
};

export default ImageComponent;
