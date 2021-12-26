import IPageSubtitleProps from "./IPageSubHeaderProps";
const PageSubTitle: React.FC<IPageSubtitleProps> = ({ title }) => {
  return (
    <header className="page-subtitle">
      <h2>{title.toUpperCase()}</h2>
    </header>
  );
};
export default PageSubTitle;
