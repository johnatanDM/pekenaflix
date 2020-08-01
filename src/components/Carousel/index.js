import React from 'react';
import PropTypes from 'prop-types';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

function Carousel({
  id,
  ignoreFirstVideo,
  titulo,
  cor,
  linkExtra,
  videos,
}) {
  const categoryTitle = titulo;
  const categoryColor = cor;
  const categoryExtraLink = linkExtra;
  return (
    <VideoCardGroupContainer key={id}>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink
            && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
            )}
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

Carousel.propTypes = {
  id: PropTypes.number,
  ignoreFirstVideo: PropTypes.bool,
  titulo: PropTypes.string.isRequired,
  cor: PropTypes.string.isRequired,
  linkExtra: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string,
  }),
  videos: PropTypes.array,
};

export default Carousel;
