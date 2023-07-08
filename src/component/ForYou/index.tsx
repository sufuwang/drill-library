import React, {useContext} from 'react';
import Home from './home';
import Article from './article';
import Photo from './photo';
import {menuContext} from '../Header';
import {Text} from 'react-native';
import Video from './video';

export default () => {
  const curMenu = useContext(menuContext);
  if (curMenu === 'Home') {
    return <Home />;
  } else if (curMenu === 'Article') {
    return <Article />;
  } else if (curMenu === 'Photo') {
    return <Photo />;
  } else if (curMenu === 'Video') {
    return <Video />;
  }
  return <Text>{curMenu}</Text>;
};
