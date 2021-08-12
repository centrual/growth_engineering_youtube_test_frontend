import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import LottiePlay from 'lottie-react';
import ErrorTemplate from '../../templates/errorTemplate/errorTemplate';
import ServerError from '../../../../assets/lottie/server-error.json';

const Error500Page: FC = () => {
  const history = useHistory();

  const onButtonClicked = (): void => {
    history.push({ pathname: '/' });
  };

  return (
    <ErrorTemplate
      imageArea={<LottiePlay animationData={ServerError} />}
      code="500"
      description="Oops! I think I broke a few tubes. I'll clean it up in a few seconds."
      buttonText="Try Again"
      onButtonClicked={onButtonClicked}
    />
  );
};

export default Error500Page;
