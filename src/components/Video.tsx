import { FC } from 'react';

import { withPopularity } from '../hocs/withPopularity';
import { VideoTypes } from '../types';

export let Video: FC<VideoTypes> = ({ url, views }) => {
  return (
    <div className="item item-video">
      <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <p className="views">Просмотров: {views}</p>
    </div>
  );
};

Video = withPopularity(Video);
