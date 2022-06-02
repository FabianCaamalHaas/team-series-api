import { Alert } from '@mui/material'
import { Layout } from '../../components/layout/Layout'

export const Dashboard = () => {
  return (
    <Layout tittle='Dashboard' >
      <div className='sm:px-24 pt-6' >
        <Alert severity='info'>Esta es una app para APIS {'<3'} </Alert>
      </div>
    </Layout>
  )
}
