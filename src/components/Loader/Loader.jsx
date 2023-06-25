import { RotatingLines, ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderReact}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};

const LoaderThreeDots = () => {
  return (
    <div>
      <ThreeDots
        height="60"
        width="60"
        radius="1"
        color="#777"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
export { Loader, LoaderThreeDots };
