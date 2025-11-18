import React from "react";
import { useState, useEffect } from "react";

const DynamicImage = (props) => {

    const [thumbnailImage, setThumbnailImage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadImage = async () => {
            try {
                setLoading(true);
                const imageModule = await import(
                    /* @vite-ignore */
                    `../../assets/images/${props.imageName}`
                );
                setThumbnailImage(imageModule.default);
            } catch (error) {
                console.error('Error loading image:', error);
                // فالبک
                const fallbackModule = await import('../../assets/images/ims.svg');
                setThumbnailImage(fallbackModule.default);
            } finally {
                setLoading(false);
            }
        };

        if (props.imageName) {
            loadImage();
        }
    }, [props.imageName]);

    if (loading) return <div>Loading...</div>;


    return (
        <img alt={props.alt} src={thumbnailImage}/>
    )
}

export default DynamicImage;