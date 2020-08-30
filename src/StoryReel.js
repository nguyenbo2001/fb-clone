import React from 'react';

import './StoryReel.css';
import Story from './Story';

function StoryReel() {
  return <div className="storyReel">
    <Story
      image="http://1.gravatar.com/avatar/767fc9c115a1b989744c755db47feb60?size=400"
      profileSrc="http://1.gravatar.com/avatar/767fc9c115a1b989744c755db47feb60?size=400"
      title="User"
    />
    <Story
      image="http://1.gravatar.com/avatar/767fc9c115a1b989744c755db47feb60?size=400"
      profileSrc="http://1.gravatar.com/avatar/767fc9c115a1b989744c755db47feb60?size=400"
      title="User"
    />
    <Story
      image="http://1.gravatar.com/avatar/767fc9c115a1b989744c755db47feb60?size=400"
      profileSrc="http://1.gravatar.com/avatar/767fc9c115a1b989744c755db47feb60?size=400"
      title="User"
    />
    <Story
      image="http://1.gravatar.com/avatar/767fc9c115a1b989744c755db47feb60?size=400"
      profileSrc="http://1.gravatar.com/avatar/767fc9c115a1b989744c755db47feb60?size=400"
      title="User"
    />
  </div>;
}

export default StoryReel;
