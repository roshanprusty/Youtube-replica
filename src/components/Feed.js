import React, { useEffect, useState } from 'react' 
import {Box, Stack, Typography} from '@mui/material'
import Sidebar from './Sidebar'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import Videos from './Videos'

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos, setVideos] = useState([])

    // This block uses the useEffect hook to fetch videos from the YouTube API based on the selected category. It does this by calling the fetchFromAPI function with the appropriate query parameters and then updating the videos state variable with the response data. The useEffect hook is triggered whenever the selectedCategory state variable changes.
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))
        }, [selectedCategory]);

  return (
    // This block returns the JSX for the component. It uses the Stack and Box components from Material-UI to create a two-column layout. The left column contains the Sidebar component, which is passed the selectedCategory and setSelectedCategory state variables as props. The right column contains the Videos component, which is passed the videos state variable as a prop. The Typography component is used to display the selected category and a message indicating that the videos are videos.
    <Stack sx={{flexDirection: {sx: 'column', md: 'row'}}}>
        <Box sx={{height :{sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx : 0, md: 2}}}>
            <Sidebar selectedCategory = {selectedCategory} setSelectedCategory = {setSelectedCategory} />
        <Typography className="copyright" variant='body2' sx={{mt: 1.5, color: '#fff'}}>
            Copyright 2023 Roshan
        </Typography>
        </Box>
        <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
            <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: 'white'}}>
                {selectedCategory} <span style={{color: '#F31503'}}>videos</span>
            </Typography>
            <Videos videos={videos} />
        </Box>
    </Stack>
  )
}

export default Feed

// Material-UI
// Material-UI is a React UI framework that provides pre-built components and styles based on Google's Material Design guidelines. It is easy to use and customize, and it includes a wide range of components for building web and mobile applications. It is built on top of React and uses CSS-in-JS styling, and it includes built-in support for theming. Material-UI is widely used in web development and has a large and active community of developers.

//stack:
//  Stack is a layout component in Material-UI that allows you to stack child components vertically or horizontally. In the code, Stack is used to create a two-column layout. The sx prop is used to set the layout direction to be column on small screens and row on medium and larger screens.
// The left column is defined using a Box component with the sx prop. It has a fixed height of 92vh on medium and larger screens and a border on the right side. The Sidebar component is passed as a child to the Box component, along with the selectedCategory and setSelectedCategory state variables as props.
// The right column is defined using another Box component with the sx prop. It has a padding of 2 and an overflow-y of auto, which allows the Videos component to scroll vertically if it contains too many videos. The Videos component is passed as a child to the Box component, along with the videos state variable as a prop.
// Overall, Stack and Box are useful for creating flexible and responsive layouts in Material-UI.

