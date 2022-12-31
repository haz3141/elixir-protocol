import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <img
        src="../../assets/images/alchemy.png"
        alt="Elixir Protocol Logo"
        width={size}
        height={size}
        className={'mr-1'}
      />

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
