import React, { useEffect, useState } from 'react'
import { AppBar, CssBaseline, Dialog, makeStyles, Paper, Toolbar, CardActionArea, Typography } from '@material-ui/core'
import Controls from "../components/controls/Controls";
import CloseIcon from '@material-ui/icons/Close';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import FormProgramare from './FormProgramare';


const useStyles = makeStyles((theme) => ({
    toolbar: {
        ...theme.mixins.toolbar
    },
    paper1: {
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(10),
        marginRight: theme.spacing(10),
        marginBottom: theme.spacing(5)

    },
    textTitlu: {
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(2),
        marginBottom: theme.spacing(2),
        fontStyle: "bold",
        fontSize: "20px",
        color: "#002171"

    },
    text0: {
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(10),
        marginBottom: theme.spacing(2),
        fontStyle: "bold",
        fontSize: "20px",
        color: "#002171"
    },
    text1: {
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(5),
        marginBottom: theme.spacing(2),
        fontStyle: "bold",
        fontSize: "28px"
    },
    text2: {
        marginLeft: theme.spacing(5),
        marginBottom: theme.spacing(2),
        fontSize: '16px',
        color: "#5472d3",
        fontStyle: "italic"
    },
    textDetalii: {
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(10),
        marginBottom: theme.spacing(2),
        fontStyle: "bold",
        fontSize: "24px",
        color: "#002171"

    },
    textAdresa:{
        marginLeft:theme.spacing(2),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
        fontStyle: "bold",
        fontSize: "16px",
        color: "#002171"

    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    LIT: {
        fontStyle: "bold",
        color: "#002171"
    },
    text3: {
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(10),
        marginBottom: theme.spacing(2),
        fontStyle: "bold",
        fontSize: "25px",
        color: "#002171"

    },
    text4: {
        marginLeft: theme.spacing(10),
        marginBottom: theme.spacing(2),
        fontSize: '20px',
        color: "#5472d3",

    },
    newButton: {
        marginLeft: theme.spacing(10),
        marginBottom: theme.spacing(2),
    },
    menuIcon: {
        marginLeft: theme.spacing(5)
    },
    summaryCards: {
        display: "flex",
        flexWrap: "wrap",
        margin: "10px",
        marginRight: "20px"
    },
    cardActionArea: {
        maxWidth: 310,
        marginLeft: theme.spacing(5),
        margin: theme.spacing(4),



    },
    summaryCard: {
        margin: theme.spacing(1),
        flexGrow: 1,
        padding: theme.spacing(3),
        marginBottom: theme.spacing(5)
    },
    textCard: {
        marginLeft: theme.spacing(2),
        marginBottom: theme.spacing(2),
        fontSize: '22px',
        color: "#5472d3",

    }

}))


const initialProgramare = {
    data: "",
    email: "",
    numeSot: "",
    numeSotie: "",
    locatieID: ""
}
export default function MainPage(props) {
    const classes = useStyles();
    const [openDialog, setOpenDialog] = useState(false)
    useEffect(() => {
    })
    const handleDialogOpen = () => {
        setOpenDialog(true)
    }
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
  
    const addProgramareInDB = (programare) => {
        fetch('http://localhost:8080/programari', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(programare),
        })
            .then(response => response.json())
            .then(data => {
                //console.log(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        //email


    }
    function formatDate(data) {
        let date = new Date(data)
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let dt = date.getDate();
        //console.log(date.getHours()+":"+date.getMinutes())
        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }
        let newDate = dt + '-' + month + '-' + year
        return newDate;

    }
    function formatHour(data) {
        let date = new Date(data)
        return date.getHours() + ":" + date.getMinutes()
    }
    function aflamLocatia(id) {
        let nume = '';
        if (id === '1') {
            nume = 'Oficiul Stării Civile Sector 1'

        }
        if (id === '2') {
            nume = 'Oficiul Stării Civile Sector 2'
        }
        if (id === '3') {
            nume = 'Casa Căsătoriilor Sector 3'
        }
        if (id === '4') {
            nume = 'Oficiul Stării Civile Sector 4'
        }
        if (id === '5') {
            nume = 'Oficiul Stării Civile Sector 5'
        }
        if (id === '6') {
            nume = 'Casa Căsătoriilor Sector 6'
        }
        return nume

    }
    const addProgramare = (programare, resetForm) => {

        let date = new Date(programare.data)
        programare.data=date.toISOString().slice(0, 19).replace('T', ' ');
        console.log(programare)
        addProgramareInDB(programare)
        const numeLocatie = aflamLocatia(programare.locatieID)
        const receiverMail = programare.email
        const messageContent = "Buna ziua, domnule " + programare.numeSot + "! " + "Dumneavoastră, alături de doamna " + programare.numeSotie
            + " v-ați programat căsătoria pentru data " + programare.data
            +  "." + " Locația aleasă este: " + numeLocatie + "."
       // const subject = 'Programare căsătorie'
    
        fetch("http://localhost:8080/utils/send", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                receiverMail, messageContent
            })
        }).then(res => res.json())
            .then(data => {
            }).catch(err => {
                console.log(err)
            })
        resetForm()
        handleDialogOpen()

    }
    return (
        <div>
            <CssBaseline />
            <AppBar position="sticky">
                <Toolbar className={classes.toolbar}>
                </Toolbar>
            </AppBar>
            <Typography className={classes.text0}>Dorești să programezi o căsătorie?</Typography>

            <Paper className={classes.paper1}>
                <FormProgramare addProgramare={addProgramare}></FormProgramare>
            </Paper>
            <Dialog open={openDialog}
                onClose={handleCloseDialog}>
                <DialogContent>
                    <DialogContentText className={classes.text0}>
                        Programare adăugată cu succes! Veți primi un email cu datele aferente!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Controls.ActionButton
                        color="secondary"
                        onClick={handleCloseDialog}>
                        <CloseIcon />
                    </Controls.ActionButton>
                </DialogActions>
            </Dialog>

        </div>
    )

}