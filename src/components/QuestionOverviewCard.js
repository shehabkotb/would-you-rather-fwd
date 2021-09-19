import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Stack,
  Typography
} from '@mui/material'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { formatQuestion } from '../utils/formatQuestion'

const QuestionOverviewCard = ({ questionId }) => {
  const question = useSelector((state) => formatQuestion(state, questionId))
  const history = useHistory()
  return (
    <Card raised>
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
              <Typography variant="body1">{question.optionOne.text}</Typography>
              <Divider sx={{ color: 'secondary.main' }}>Or</Divider>
              <Typography variant="body1">{question.optionTwo.text}</Typography>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => history.push(`/questions/${questionId}`)}
              >
                View Poll
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default QuestionOverviewCard
