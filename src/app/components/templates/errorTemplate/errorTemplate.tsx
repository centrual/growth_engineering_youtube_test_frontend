import React, { FC } from 'react';
import { ErrorTemplateProps } from './errorTemplate.types';
import Styles from './errorTemplate.module.css';

const ErrorTemplate: FC<ErrorTemplateProps> = (props) => {
  const {
    buttonText,
    description,
    code,
    imageArea,
    onButtonClicked,
  } = props;

  return (
    <div className={Styles.errorTemplate}>

      <div className={Styles.errorTemplateImageArea}>
        {imageArea}
      </div>

      <div className={Styles.errorTemplateCode}>
        {code}
      </div>

      <div className={Styles.errorTemplateDescription}>
        {description}
      </div>

      <button type="button" className={Styles.errorTemplateButton} onClick={onButtonClicked}>
        {buttonText}
      </button>

    </div>
  );
};

export default ErrorTemplate;
