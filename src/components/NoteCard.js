import React from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
} from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  test: {
    border: ({ category }) => {
      if (category === 'work') {
        return '1px solid red'
      }
    },
  },
})
const NoteCard = ({ title, details, category, id, deleteNote }) => {
  const classes = useStyles({ category })
  return (
    <div>
      <Card elevation={1} className={classes.test}>
        <CardHeader
          action={
            <IconButton onClick={() => deleteNote(id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={title}
          subheader={category}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary'>
            {details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default NoteCard
