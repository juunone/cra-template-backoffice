import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'
import {
  Button,
  Grid,
  Paper,
  Chip,
  makeStyles,
  Typography,
} from '@material-ui/core'

import { Layout } from '@/layouts'
import { RootStoreModel } from '@/stores/RootStore'
import useInject from '@/hooks/useInject'

const Catalog: FC = observer(() => {
  const { authStore } = useInject(mapStore)
  const handleChange = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    authStore.fetchProjects()
  }

  const classes = useStyles()

  return (
    <Layout>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Paper className={classes.paperWrapepr}>
            <div>
              {authStore.name}{' '}
              {!authStore.projects?.isActivate ? (
                <Chip label={authStore.state} variant="outlined" size="small" />
              ) : (
                ''
              )}
              {authStore.projects?.message}
            </div>
            <Typography component="h2" variant="h4" className={classes.title}>
              {authStore.projects?.title}
            </Typography>
            <Button variant="text" onClick={handleChange}>
              Press Button
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  )
})

const useStyles = makeStyles((theme) => ({
  paperWrapepr: {
    textAlign: 'center',
    padding: '2em 0',
  },
  title: {
    margin: '0.5em 0',
  },
}))

const mapStore = ({ authStore }: RootStoreModel) => ({
  authStore,
})

export default Catalog
