import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import SocialNetworkApiPic from '../assets/socialnetworkapipic.png';
import NoteTakerExample from '../assets/NoteTakerExample.png';
import WeatherDashboard from '../assets/weatherDashboard.png';
import WorkDay from '../assets/workDay.png';
import CodingQuiz from '../assets/codingQuiz.png';
import ObjectRelational from '../assets/objectRelational.png';

export default function TitlebarBelowImageList() {
  return (
    <div style={{ marginTop: '64px', width: '100%', display: 'flex', justifyContent: 'center' }}>
      <ImageList sx={{ width: '90%', maxWidth: '1200px' }}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} style={{ margin: '5px' }}>
            <img
              src={item.img}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={<span style={{ fontSize: '1.6rem' }}>{item.title}</span>}
              subtitle={
                <div>
                  <span>
                    Deployed <a href={item.deployedApplicationLink}>Application</a>
                  </span>
                  <br />
                  <span>
                    GitHub <a href={item.repositoryLink}>Repository</a>
                  </span>
                </div>
              }
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: SocialNetworkApiPic,
    title: 'Social Network API',
    deployedApplicationLink: 'https://drive.google.com/file/d/1eK4NUeDioQTgw6uxemJ4yXWGfFDKDSyB/view',
    repositoryLink: 'https://github.com/BryanGC96/SocialNetwork-API',
  },
  {
    img: NoteTakerExample,
    title: 'Note-Taker',
    deployedApplicationLink: 'https://peaceful-bastion-64478-d37d38b4fcf9.herokuapp.com/',
    repositoryLink: 'https://github.com/BryanGC96/Note-Taker',
  },
  {
    img: WeatherDashboard,
    title: 'Weather Dashboard',
    deployedApplicationLink: 'https://bryangc96.github.io/-06-Server-Side-APIs-Weather-Dashboard/',
    repositoryLink: 'https://github.com/BryanGC96/-06-Server-Side-APIs-Weather-Dashboard',
  },
  {
    img: WorkDay,
    title: 'Work Day Scheduler',
    deployedApplicationLink: 'https://bryangc96.github.io/Work-Day-Scheduler/',
    repositoryLink: 'https://github.com/BryanGC96/Work-Day-Scheduler',
  },
  {
    img: CodingQuiz,
    title: 'Java Quiz Challenge',
    deployedApplicationLink: 'https://bryangc96.github.io/JavaQuiz-Challenge',
    repositoryLink: 'https://github.com/BryanGC96/JavaQuiz-Challenge?tab=readme-ov-file',
  },
  {
    img: ObjectRelational,
    title: 'Object-Relational-Mapping / E-Commerce Back-End',
    deployedApplicationLink: 'https://drive.google.com/file/d/11eCimYyPwh5OiwC109B9FBXH6dL3i3An/view?usp=sharing',
    repositoryLink: 'https://github.com/BryanGC96/Object-Relational-Mapping',
  },
];
