import React from 'react'

import {
  Avatar,
  Badge,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  LinearProgress,
  Paper,
  Stack,
  Typography
} from '@mui/material'

import { useSelector } from 'react-redux'
import { formatQuestion } from '../utils/formatQuestion'
import { useParams } from 'react-router'

const calcQuestionVotesCount = (question) => {
  return {
    optionOne: question.optionOne.votes.length,
    optionTwo: question.optionTwo.votes.length,
    total: question.optionOne.votes.length + question.optionTwo.votes.length
  }
}

const QuestionResult = () => {
  const { questionId } = useParams()

  const question = useSelector((state) => formatQuestion(state, questionId))
  const user = useSelector((state) => state.users[state.authedUser])

  const votesCount = calcQuestionVotesCount(question)

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
                Results:
              </Typography>
              {/* <Badge
                color="secondary"
                variant="string"
                overlap="rectangular"
                badgeContent="Voted"
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
              >
                  </Badge> */}
              <Paper
                sx={{
                  p: 2,
                  bgcolor:
                    user.answers[questionId] === 'optionOne'
                      ? 'InfoBackground'
                      : 'initial'
                }}
              >
                <Typography variant="subtitle1">
                  would you rather {question.optionOne.text}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={Math.round(
                    (votesCount.optionOne / votesCount.total) * 100
                  )}
                />
                <Typography
                  variant="subtitle1"
                  align="center"
                >{`${votesCount.optionOne} out of ${votesCount.total} votes`}</Typography>
              </Paper>
              <Paper
                sx={{
                  p: 2,
                  bgcolor:
                    user.answers[questionId] === 'optionTwo'
                      ? 'InfoBackground'
                      : 'initial'
                }}
              >
                <Typography variant="subtitle1">
                  would you rather {question.optionTwo.text}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={Math.round(
                    (votesCount.optionTwo / votesCount.total) * 100
                  )}
                />
                <Typography
                  variant="subtitle1"
                  align="center"
                >{`${votesCount.optionTwo} out of ${votesCount.total} votes`}</Typography>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default QuestionResult
