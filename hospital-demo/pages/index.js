import HospitalTable from "../components/HospitalTable";
import HospitalForm from "../components/HospitalForm"
import styles from "../styles/Home.module.css";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Box, 
  Paper, 
  Container 
} from "@mui/material";
import axios from 'axios';
import { useQuery, useMutation } from 'react-query';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState, useEffect } from "react";
export default function Home() {
  const [isCreating, setIsCreating] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const { data:hospitals, status, refetch } = useQuery(
    'hospitals', 
    () => axios.get('/api/hospital').then(res => res.data.map(h => ({...h, id: h.hospitalId})))
  )
  const deleteHospital = useMutation(id => {
    return axios.delete('/api/hospital/', {data: {id}})
    .then(() => {refetch(); setDeleteId(null)})
  })
  
  const createHospital = useMutation(hospital => {
    axios.post('/api/hospital', hospital).then(() => {refetch(); setIsCreating();})
  })

  return (
    <>
      <AppBar enableColorOnDark color="primary" position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div">
            Hospital Management Demo
          </Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <main className={styles.main}>
          <HospitalTable
            deleteHospital={deleteHospital}
            setDeleteId={setDeleteId}
            deleteId={deleteId}
            hospitals={hospitals}
          />
          {
            isCreating ? (
              <Box 
                mt={2} 
                p={2}
                // mb={2}
                // margin={1}
                sx={{width: "100%"}} 
                component={Paper}
              >
                {/* <isCreatingContainer> */}
               <HospitalForm setIsCreating={setIsCreating} createHospital={createHospital} />
               {/* </Container>  */}
              </Box>
            ) : (
              <IconButton
                aria-label="delete"
                size="large"
                onClick={() => setIsCreating(true)}
            >
              <AddCircleIcon fontSize="inherit" />
            </IconButton>)
          }
        </main>
      </Container>
    </>
  );
}
