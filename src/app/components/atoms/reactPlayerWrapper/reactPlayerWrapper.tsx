import React, { memo, useState } from 'react';
import Loader from 'react-loader-spinner';
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import classNames from 'classnames';
import Styles from './reactPlayerWrapper.module.css';

const ReactPlayerWrapper = memo<ReactPlayerProps>((props) => {
  const { onReady, ...otherProps } = props;

  const [isPlayerReady, setIsPlayerReady] = useState(false);

  const onPlayerReady = (player: ReactPlayer): void => {
    setIsPlayerReady(true);
    onReady?.(player);
  };

  const renderLoader = (): JSX.Element|null => {
    if (isPlayerReady) {
      return null;
    }

    return (
      <div className={classNames(Styles.reactPlayerLoader)}>
        <Loader type="Audio" color="#ad0505" height={64} width={64} />
      </div>
    );
  };

  return (
    <>
      <ReactPlayer
        onReady={onPlayerReady}
        {...otherProps}
      />
      {renderLoader()}
    </>
  );
});

export default ReactPlayerWrapper;
