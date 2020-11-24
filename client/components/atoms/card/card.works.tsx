import React from 'react';
import { Button } from '../button/button.component';
import { WorksCardProps } from './props';
import space from '../../../styles/space.module.scss';
import font from '../../../styles/font.module.scss';
import color from '../../../styles/color.module.scss';
import layout from '../../../styles/layout.module.scss';
import card from './card.module.scss';

export const WorksCard: React.FC<WorksCardProps> = ({ work = 'design' }) => {
  const types = {
    design: {
      imgUrl:
        'https://a0.muscache.com/pictures/54019d2c-f00e-4d2b-9eb2-7b738e6b9eb8.jpg',
      title: 'Design your experience',
      description:
        'All experiences start with our quality standards—expertise, access, and connection. But also think about how to engage with guests online, and minimize the supplies they might need to participate. When you have an idea, start the submission process.',
    },
    share: {
      imgUrl:
        'https://a0.muscache.com/pictures/2130d5de-c676-41bf-88bf-ab4b8a1c4d74.jpg',
      title: 'Share your idea',
      description:
        "Next, you'll need to describe your activity for both the application and your future experience page. We recommend sharing the value of what you’re offering in detail, starting with a lower price until you have some reviews, and setting the length to 90 minutes or less.",
    },
    submit: {
      imgUrl:
        'https://a0.muscache.com/pictures/cd4bbcfc-b2f4-4eab-9634-13dcd41260b1.jpg',
      title: 'Submit your experience',
      description:
        "You're almost there! When you get to the Location step, check the Yes, this is an online experience box. Once everything else is completed, you're ready to submit. Our team will read it over and let you know if it’s been approved in 2–4 weeks.",
    },
    setup: {
      imgUrl:
        'https://a0.muscache.com/pictures/ec94d108-9dcc-49c3-91f3-921ba1826e54.jpg',
      title: 'Set up and start hosting',
      description:
        "While you wait, you can choose a location that represents you and your activity and start planning for your camera set-up, lighting, and sound. You can also start getting to know the Zoom conference platform. Don't worry, before you start hosting we'll share lots of resources to set you up for success.",
    },
  };
  return (
    <div>
      <div className={[card['display__works']].join(' ')}>
        <div className={[card['w__works']].join(' ')}>
          <img src={types[work].imgUrl} alt='works image' />
        </div>
        <div className={[card['w__works']].join(' ')}>
          <div className={[space['m-b--16']].join(' ')}>
            <h3>{types[work].title}</h3>
          </div>
          <div>
            <p className={[font['size--13']].join(' ')}>
              {types[work].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
