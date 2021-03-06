import { hostComponents } from 'remax/macro';
import * as ad from './ad';
import * as audio from './audio';
import * as button from './button';
import * as camera from './camera';
import * as canvas from './canvas';
import * as checkboxGroup from './checkbox-group';
import * as checkbox from './checkbox';
import * as contactButton from './contact-button';
import * as coverImage from './cover-image';
import * as coverView from './cover-view';
import * as editor from './editor';
import * as form from './form';
import * as functionalPageNavigator from './functional-page-navigator';
import * as icon from './icon';
import * as image from './image';
import * as input from './input';
import * as label from './label';
import * as livePlayer from './live-player';
import * as livePusher from './live-pusher';
import * as map from './map';
import * as movableArea from './movable-area';
import * as movableView from './movable-view';
import * as navigator from './navigator';
import * as officialAccount from './official-account';
import * as openData from './open-data';
import * as pickerViewColumn from './picker-view-column';
import * as pickerView from './picker-view';
import * as picker from './picker';
import * as progress from './progress';
import * as radioGroup from './radio-group';
import * as radio from './radio';
import * as richText from './rich-text';
import * as scrollView from './scroll-view';
import * as slider from './slider';
import * as swiperItem from './swiper-item';
import * as swiper from './swiper';
import * as switchComponent from './switch';
import * as text from './text';
import * as textarea from './textarea';
import * as video from './video';
import * as view from './view';
import * as webView from './web-view';

export function register() {
  hostComponents.set('ad', ad);
  hostComponents.set('audio', audio);
  hostComponents.set('button', button);
  hostComponents.set('camera', camera);
  hostComponents.set('canvas', canvas);
  hostComponents.set('checkbox-group', checkboxGroup);
  hostComponents.set('checkbox', checkbox);
  hostComponents.set('contact-button', contactButton);
  hostComponents.set('cover-image', coverImage);
  hostComponents.set('cover-view', coverView);
  hostComponents.set('editor', editor);
  hostComponents.set('form', form);
  hostComponents.set('functional-page-navigator', functionalPageNavigator);
  hostComponents.set('icon', icon);
  hostComponents.set('image', image);
  hostComponents.set('input', input);
  hostComponents.set('label', label);
  hostComponents.set('live-player', livePlayer);
  hostComponents.set('live-pusher', livePusher);
  hostComponents.set('map', map);
  hostComponents.set('movable-area', movableArea);
  hostComponents.set('movable-view', movableView);
  hostComponents.set('navigator', navigator);
  hostComponents.set('official-account', officialAccount);
  hostComponents.set('open-data', openData);
  hostComponents.set('picker-view-column', pickerViewColumn);
  hostComponents.set('picker-view', pickerView);
  hostComponents.set('picker', picker);
  hostComponents.set('progress', progress);
  hostComponents.set('radio-group', radioGroup);
  hostComponents.set('radio', radio);
  hostComponents.set('rich-text', richText);
  hostComponents.set('scroll-view', scrollView);
  hostComponents.set('slider', slider);
  hostComponents.set('swiper-item', swiperItem);
  hostComponents.set('swiper', swiper);
  hostComponents.set('switch', switchComponent);
  hostComponents.set('text', text);
  hostComponents.set('textarea', textarea);
  hostComponents.set('video', video);
  hostComponents.set('view', view);
  hostComponents.set('web-view', webView);
}

register();

export default hostComponents;
