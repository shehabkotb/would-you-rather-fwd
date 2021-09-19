import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  TextField,
  Typography
} from '@mui/material'

import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { createQuestion } from '../actions/questions'

const NewQuestion = () => {
  const [optionOne, setOptionOne] = useState('')
  const [optionTwo, setOptionTwo] = useState('')

  const onOptionOneChange = (e) => setOptionOne(e.target.value)
  const onOptionTwoChange = (e) => setOptionTwo(e.target.value)

  const authedUser = useSelector((state) => state.authedUser)
  const history = useHistory()

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(
      createQuestion({
        author: authedUser,
        optionOneText: optionOne,
        optionTwoText: optionTwo
      })
    )
    history.push('/')
  }

  return (
    <Card raised sx={{ mx: 'auto', mt: 6, width: 600 }}>
      <CardHeader
        title="Create New Question"
        titleTypographyProps={{ align: 'center', fontWeight: 700 }}
      ></CardHeader>
      <Divider />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Stack direction="column" spacing={2}>
            <Typography variant="subtitle2" gutterBottom sx={{ mt: 1 }}>
              Complete the question
            </Typography>
            <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold' }}>
              Would you rather...
            </Typography>
            <TextField
              label="Option One"
              variant="outlined"
              value={optionOne}
              onChange={onOptionOneChange}
            />

            <Divider orientation="horizontal">Or</Divider>
            <TextField
              label="Option Two"
              variant="outlined"
              value={optionTwo}
              onChange={onOptionTwoChange}
            />
            <Button
              fullWidth
              variant="contained"
              type="submit"
              disabled={!optionOne || !optionTwo}
            >
              submit
            </Button>
          </Stack>
        </form>
      </CardContent>
    </Card>
  )
}

export default NewQuestion
