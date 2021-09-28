import React, { useState } from 'react'
import { notes } from '../data/data'
import { Grid, Container } from '@material-ui/core'
import NoteCard from '../components/NoteCard'
export default function Notes() {
  const [noteList, setNoteList] = useState(notes)

  const deleteNote = (id) => {
    const filterList = noteList.filter((item) => item.id !== id)
    setNoteList(filterList)
  }
  return (
    <Container>
      <Grid container spacing={3}>
        {noteList.map((note) => (
          <Grid item xs={12} sm={6} md={3} key={note.id}>
            <NoteCard {...note} deleteNote={deleteNote} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
