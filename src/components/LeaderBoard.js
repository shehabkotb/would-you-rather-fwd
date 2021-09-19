import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography
} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'

const formatUsers = (users) => {
  return Object.keys(users)
    .map((id) => {
      const createdCount = users[id].questions.length
      const answeredCount = Object.keys(users[id].answers).length
      return {
        ...users[id],
        createdCount,
        answeredCount,
        totalCount: createdCount + answeredCount
      }
    })
    .sort((a, b) => b.totalCount - a.totalCount)
}

const LeaderBoard = () => {
  const users = useSelector((state) => formatUsers(state.users))

  return (
    <Box sx={{ mx: 'auto', mt: 6, width: 600 }}>
      <Stack direction="column" spacing={3}>
        {users.map((user) => {
          return <UserCard user={user} key={user.id} />
        })}
      </Stack>
    </Box>
  )
}

const UserCard = ({ user }) => {
  return (
    <Paper variant="elevation" elevation={24} sx={{ p: 2 }}>
      <Grid container>
        <Grid item xs={3}>
          <Avatar src={user.avatarURL} sx={{ height: 170, width: 170 }} />
        </Grid>
        <Grid item xs={1} sx={{ mr: 2 }}>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={4}>
          <Stack direction="column" spacing={2}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              {user.id}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              Answered questions: {user.answeredCount}
            </Typography>
            <Divider />
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              Created questions: {user.createdCount}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={1}>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={2} sx={{ ml: 2.5 }}>
          <Card variant="outlined">
            <CardHeader
              title="Score"
              titleTypographyProps={{ varient: 'body1', fontWeight: 'bold' }}
              sx={{
                backgroundColor: 'secondary.light',
                color: 'secondary.contrastText'
              }}
            ></CardHeader>
            <Divider orientation="horizontal" />
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Chip
                  label={user.totalCount}
                  size="medium"
                  sx={{
                    backgroundColor: 'success.light',
                    color: 'success.contrastText',
                    typography: 'h6'
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default LeaderBoard
