import { AuthContextI } from "../../auth/AuthContext"
import { ListItem, ListItemText, Paper } from "@mui/material"
import withAuth from "../../auth/withAuth"
import React, { useEffect, useState } from "react"
import classes from "./Message.module.css"
import profileService from "../../services/ProfileService"

function ChatMessageNoAuth({ currentUser, message }: AuthContextI & { message: MessageI }) {
  const [user, setUser] = useState<ProfileI | null | undefined>(undefined)

  useEffect(() => {
    profileService.getProfile(message.sendBy).then((user) => setUser(user))
  }, [])

  const isMyMsg = message.sendBy === currentUser?.uid

  return (
    <ListItem className={isMyMsg ? classes.ownMessageBubbleItem : ""}>
      <Paper className={classes.messageBubble}>
        {/* Show name if it is a group message */}
        {/*<ListItemText secondary>{user?.displayName}</ListItemText>*/}
        <ListItemText primary={message.messageText} secondary={new Date(message.sendAt).toLocaleString()} />
      </Paper>
    </ListItem>
  )
}

export default withAuth(ChatMessageNoAuth)
