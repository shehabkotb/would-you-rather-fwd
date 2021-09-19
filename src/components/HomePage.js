import { Tab, Tabs } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import QuestionOverviewCard from './QuestionOverviewCard'

const TabPanel = (props) => {
  const { children, value, index, ...other } = props

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

const HomePage = () => {
  const [value, setValue] = useState(0)

  const handleChange = (_, newValue) => {
    setValue(newValue)
  }

  const questions = useSelector((state) => state.questions)
  const authedUser = useSelector((state) => state.authedUser)
  const users = useSelector((state) => state.users)

  return (
    <Box
      sx={{ mx: 'auto', mt: 6, width: 600, border: 1, borderColor: 'divider' }}
    >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
        >
          <Tab label="Unanswered Questions" />
          <Tab label="answered Questions" />
        </Tabs>
      </Box>
      <TabPanel components="div" value={value} index={0}>
        {Object.keys(questions).map((id) => {
          return <QuestionOverviewCard questionId={id} key={id} />
        })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {Object.keys(users[authedUser].answers).map((id) => {
          return <QuestionOverviewCard questionId={id} key={id} />
        })}
      </TabPanel>
    </Box>
  )
}

export default HomePage
