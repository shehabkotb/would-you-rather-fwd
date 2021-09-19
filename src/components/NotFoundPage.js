import React from 'react'
import {
  Button,
  Card,
  CardContent,
  Typography,
  CardActions
} from '@mui/material'
import { useHistory } from 'react-router'

const NotFoundPage = () => {
  const history = useHistory()
  return (
    <Card elevation={24} sx={{ mx: 'auto', mt: 6, width: 600 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          The page you are looking for was not found :(
        </Typography>
      </CardContent>

      <CardActions sx={{ p: 2 }}>
        <Button variant="text" onClick={() => history.push('/')}>
          Go home
        </Button>
      </CardActions>
    </Card>
  )
}

export default NotFoundPage
