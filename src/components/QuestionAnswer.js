import React, { useState } from 'react'

import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography
} from '@mui/material'

import { useDispatch, useSelector } from 'react-redux'
import { formatQuestion } from '../utils/formatQuestion'
import { answerQuestion } from '../actions/questions'

const QuestionAnswer = ({ questionId }) => {
  const question = useSelector((state) => formatQuestion(state, questionId))
  const authedUser = useSelector((state) => state.authedUser)

  const dispatch = useDispatch()

  const [choice, setChoice] = useState(null)

  const onChoiceChange = (e) => setChoice(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(
      answerQuestion({
        authedUser: authedUser,
        qid: questionId,
        answer: choice
      })
    )
  }

  return (
    <Card raised sx={{ mx: 'auto', mt: 6, width: 600 }}>
      <CardHeader title={`${question.author.id} asks`}></CardHeader>
      <Divider />
      <CardContent>
        <Grid container direction="row" spacing={3}>
          <Grid item xs={4}>
            <Avatar
              alt="user photo"
              src={question.author.avatarURL}
              sx={{ width: 180, height: 180 }}
            />
          </Grid>
          <Grid item xs={1}>
            <Divider orientation="vertical" />
          </Grid>
          <Grid item xs={7}>
            <Stack direction="column" spacing={1}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Would You Rather
              </Typography>
              <form onSubmit={handleSubmit}>
                <FormControl component="fieldset">
                  <RadioGroup
                    name="questionAnswer"
                    value={choice}
                    onChange={onChoiceChange}
                  >
                    <FormControlLabel
                      value="optionOne"
                      control={<Radio />}
                      label={question.optionOne.text}
                    />
                    <FormControlLabel
                      value="optionTwo"
                      control={<Radio />}
                      label={question.optionTwo.text}
                    />
                  </RadioGroup>
                  <Button
                    sx={{ mt: 2 }}
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={!choice}
                  >
                    Submit
                  </Button>
                </FormControl>
              </form>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default QuestionAnswer
