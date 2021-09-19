import {
  Box,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Button,
  FormHelperText,
  Avatar
} from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { setAuthedUser } from '../actions/authedUser'

const LoginPage = (props) => {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const history = useHistory()

  const [selectedUser, setSelectedUser] = useState('')

  const handleUserSelect = (event) => {
    setSelectedUser(event.target.value)
  }

  const handleLogin = () => {
    if (!selectedUser) return

    dispatch(setAuthedUser(selectedUser))
  }

  return (
    <Box sx={{ mx: 'auto', mt: 6, width: 600 }}>
      <Card raised>
        <CardHeader
          sx={{ mx: 'auto' }}
          title="Welcome to the would you rather app!"
          subheader="please sign in to continue"
        ></CardHeader>
        <CardMedia
          height="250"
          component="img"
          image="/would-you-rather-stockphoto.jpg"
          alt="Would you rather img"
          sx={{ objectFit: 'contain' }}
        />
        <CardContent>
          <Stack spacing={2}>
            <Typography
              variant="h5"
              align="center"
              sx={{ mx: 'auto', color: 'secondary.main', fontWeight: 'bold' }}
            >
              Sign In
            </Typography>

            <FormControl fullWidth>
              <InputLabel id="user-login-label">User</InputLabel>
              <Select
                labelId="user-login-label"
                label="User"
                value={selectedUser}
                onChange={handleUserSelect}
              >
                {Object.keys(users).map((user) => (
                  <MenuItem key={user} value={user}>
                    <Stack direction="row">
                      <Avatar
                        alt="user photo"
                        src={users[user].avatarURL}
                        sx={{ mr: 2 }}
                      />
                      <Typography sx={{ lineHeight: 2.5 }}>{user}</Typography>
                    </Stack>
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>Choose a user</FormHelperText>
            </FormControl>
            <Button
              variant="contained"
              onClick={handleLogin}
              disabled={!selectedUser ? true : null}
            >
              Sign in
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  )
}

export default LoginPage
