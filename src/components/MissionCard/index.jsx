/* eslint-disable @next/next/no-img-element */
'use client';
import { Card, Box, Typography } from '@mui/material';
import useSpaceStore from '@/context/SpaceStore';
import ClientComponent from './ClientComponent';

export function MissionCard({ data }) {
  const { mission_name, launch_site, launch_date_unix, links, flight_number } = data;
  const {  flickr_images, mission_patch } = links;

  const srcImage = mission_patch || 'https://logos-world.net/wp-content/uploads/2020/09/SpaceX-Symbol.jpg';

  const date = new Date(launch_date_unix * 1000).toLocaleDateString();
  const { setMissionSelected,  missionSelected } = useSpaceStore();
  console.log("🚀 ~ file: index.jsx:13 ~ MissionCard ~ setMissionSelected", setMissionSelected)

  return (
    <ClientComponent>
      <Card 
        onClick={() => setMissionSelected(data)}
        sx={{
        display: 'flex',
        width: '100%',
        margin: '10px',
        position: 'relative',
        padding: '4px',
        cursor:'pointer',
        role:'button',
        backgroundColor: missionSelected?.flight_number === flight_number ? '#82C3EC' : '#fff',
      }}>
        <Box sx={{ flex: 1 }}>
          <img src={srcImage} alt="Card Image" className="image_patch" />
        </Box>
        <Box sx={{ flex: 2 }}>
          <h3>
            { mission_name }
          </h3>
          <p>
          { launch_site.site_name_long }
          </p>
        </Box>
        <Box>
        <Typography variant='p' sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            color: '#778da9'
        }}>
            { date }
        </Typography>
        </Box>

      </Card>
    </ClientComponent>
  )
}

export default MissionCard;