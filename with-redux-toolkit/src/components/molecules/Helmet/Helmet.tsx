import { Helmet as ReactHelmet } from 'react-helmet-async';

import { defaultHelmetOptions } from './constants';
import { HelmetProps } from './types';

export const Helmet = ({ subtitle = '', options }: HelmetProps) => {
  const currentOptions = { ...defaultHelmetOptions, options };

  const title = `${subtitle}${subtitle && ' - '}${currentOptions.title}`;

  return (
    <>
      <ReactHelmet>
        <title>{title}</title>
      </ReactHelmet>
    </>
  );
};
