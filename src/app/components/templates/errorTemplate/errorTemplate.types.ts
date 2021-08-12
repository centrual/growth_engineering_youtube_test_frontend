export interface ErrorTemplateProps {
  imageArea: JSX.Element;
  code: string;
  description: string;
  buttonText: string;
  onButtonClicked?: () => void;
}
