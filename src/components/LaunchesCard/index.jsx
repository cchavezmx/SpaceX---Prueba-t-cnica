/* eslint-disable @next/next/no-img-element */
import { Box, Button, Typography } from "@mui/material";
import useSpaceStore from "@/context/SpaceStore";

export default function LaunchesCard() {
  const {  missionSelected } = useSpaceStore();

  const defaultValues = {
    img: 'https://logos-world.net/wp-content/uploads/2020/09/SpaceX-Symbol.jpg',
    mission_name: 'Selecciona una misión para ver más detalles',    
    state: false
  }

  const isMissionSelected = Object.keys(missionSelected).length > 0 ;

  return (
    <Box sx={{            
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #eaeaea',
    }}>
      <Box sx={{
        flex: 2,
      }}>
        <picture>          
          <source srcSet={missionSelected?.links?.flickr_images[0]} type="image/webp" />
          <img srcSet={defaultValues.img} alt="fallback image space x logo" className="image_lunches" />
        </picture>
      </Box>
      <Box sx={{
        flexGrow: 1,        
      }}>
        <Typography variant='h5' sx={{ padding: '12px', textAlign: 'center' }}>
          { isMissionSelected ? missionSelected.mission_name : defaultValues.title }
        </Typography>
        <Box sx={{
          padding: '12px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Typography variant='p' sx={ isMissionSelected ? null : { fontSize: '30px' } }>            
            {
              isMissionSelected 
                ? missionSelected.details
                : defaultValues.mission_name
            }
          </Typography>

          {
            isMissionSelected && (
              <Button variant="contained" 
              onClick={() => window.open(missionSelected.links.video_link, '_blank')}
              sx={{
                width: '12rem',
                marginTop: '22px',
              }}>
                See More
              </Button>
            )
          }
        </Box>
      </Box>
    </Box>
  )
}