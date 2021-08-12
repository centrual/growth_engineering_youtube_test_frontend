import moment from 'moment';
import React, { FC } from 'react';
import Moment from 'react-moment';
import Styles from './playlistItemPublishDate.module.css';
import { PlaylistItemPublishDateProps } from './playlistItemPublishDate.types';

const PlaylistItemPublishDate: FC<PlaylistItemPublishDateProps> = (props) => {
  const { publishDate } = props;

  if (!moment(publishDate).isValid()) {
    return (
      <span className={Styles.playlistItemPublishDateRoot}>
        Publish date not shared
      </span>
    );
  }

  return (
    <span className={Styles.playlistItemPublishDateRoot}>
      <span>
        Published
        {' '}
      </span>

      <Moment fromNow date={publishDate} />
    </span>
  );
};

export default PlaylistItemPublishDate;
