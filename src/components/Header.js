import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Avatar,
  Button
  // Link
} from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LogoutIcon from '@mui/icons-material/Logout'
import { Box } from '@mui/system'
import { clearAuthedUser } from '../actions/authedUser'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'

const StyledLink = styled(Link)(({ theme }) => ({
  ...theme.components.MuiLink,
  ...theme.typography.h6,
  textDecoration: 'none',
  color: '#fff'
}))

const Header = (props) => {
  const { authedUser } = props
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6">Would You Rather</Typography>
        </Box>
        {authedUser && (
          <Stack direction="row" spacing={2}>
            <StyledLink to="/">HOME</StyledLink>
            <StyledLink to="/leaderboard">LEADERBOARD</StyledLink>
            <StyledLink to="/add">NEW QUESTION</StyledLink>
            <Typography variant="overline" sx={{ lineHeight: 3 }}>
              Hello, {authedUser}
            </Typography>
            <Avatar alt="Remy Sharp" src={users?.[authedUser].avatarURL} />
            <Button
              variant="Text"
              endIcon={<LogoutIcon />}
              onClick={() => dispatch(clearAuthedUser())}
            >
              Logout
            </Button>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
