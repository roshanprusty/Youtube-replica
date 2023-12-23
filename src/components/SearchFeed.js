// import React, { useEffect, useState } from 'react'
// import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
// import { fetchFromAPI } from '../utils/fetchFromAPI'
// import Videos from './Videos'
import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Sidebar from './Sidebar'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import Videos from './Videos'

const SearchFeed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    // <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
    //   <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
    //     Search Results for: <span style={{ color: '#F31503' }}>{searchTerm}</span> videos
    //   </Typography>
    //   <Videos videos={videos} />
    // </Box>
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className="copyright" variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
          Copyright 2023 Roshan
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
          Search Results for: <span style={{ color: '#F31503' }}>{searchTerm}</span> videos
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default SearchFeed
