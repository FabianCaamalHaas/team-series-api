import { Alert } from '@mui/material'
import { Layout } from '../../components/layout/Layout'

export const Dashboard = () => {
  return (
    <Layout tittle='Dashboard' >
      <div className='mx-48 pt-8' >
        <Alert severity='info'>Esta es una app para APIS {'<3'} </Alert>
      </div>
    </Layout>
  )
}
