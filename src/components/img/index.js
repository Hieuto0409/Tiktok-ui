import { forwardRef, useState } from 'react';
import { Imgs } from '~/assets/image/index';
import clsx from 'clsx';
import style from './img.module.scss';
import PropTypes from 'prop-types';

function Image({ className, fallBack = Imgs.logoError, src, ...props }, ref) {
    const [ErrorImg, setErrorImg] = useState('');
    const ErrorSrc = () => {
        setErrorImg(fallBack);
    };
    return (
        <>
            <img
                className={clsx(className, style.title, style.UserAvatar)}
                ref={ref}
                src={ErrorImg || src}
                {...props}
                onError={ErrorSrc}
            />
        </>
    );
}
Image.prototype = {
    className: PropTypes.string,
    fallBack: PropTypes.string,
    src: PropTypes.string,
};
export default forwardRef(Image);
