import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import LottiePlay from 'lottie-react';
import ErrorTemplate from '../../templates/errorTemplate/errorTemplate';
import NotFound from '../../../../assets/lottie/page_not_found.json';

const Error404Page: FC = () => {
  const history = useHistory();

  const onButtonClicked = (): void => {
    history.push({ pathname: '/' });
  };

  return (
    <ErrorTemplate
      imageArea={<LottiePlay animationData={NotFound} />}
      code="404"
      description={'We couldn\'t find the page you were looking for'}
      buttonText="Return to Home"
      onButtonClicked={onButtonClicked}
    />
  );
};

export default Error404Page;
