import React, { memo } from 'react';
import { Img } from 'react-image';
import Loader from 'react-loader-spinner';
import { PlaylistItemCoverImageProps } from './playlistItemCoverImage.types';
import Styles from './playlistItemCoverImage.module.css';

const PlaylistItemCoverImage = memo<PlaylistItemCoverImageProps>((props) => {
  const { thumbnails } = props;

  return (
    <Img
      className={Styles.playlistItemCoverImage}
      loaderContainer={(children) => (
        <div className={Styles.playlistItemCoverImageContainer}>
          {children}
        </div>
      )}
      src={thumbnails.medium?.url ?? ''}
      loader={<Loader type="Audio" color="#ad0505" height={48} width={48} />}
      unloader={(
        <img
          alt="Not found"
          src="/images/image_not_found.svg"
          className={Styles.playlistItemCoverImage}
        />
)}
    />
  );
});

export default PlaylistItemCoverImage;
