import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core';
import Controls from "../components/controls/Controls";
import { useForm, Form } from '../components/useForm';
import TextField from '@material-ui/core/TextField';

const locatii = [
    { id: '1', title: 'Oficiul Stării Civile Sector 1' },
    { id: '2', title: 'Oficiul Stării Civile Sector 2' },
    { id: '3', title: 'Casa Căsătoriilor Sector 3' },
    { id: '4', title: 'Oficiul Stării Civile Sector 4' },
    { id: '5', title: 'Oficiul Stării Civile Sector 5' },
    { id: '6', title: 'Casa Căsătoriilor Sector 6' },


]
const initialFValues = {
    numeSot: "Popescu Ion",
    numeSotie: "Marinescu Mirela",
    email: "udrescudaiana18@stud.ase.ro",
    data: new Date(),
    locatieID: 1
}

export default function FormProgramare(props) {
    const { addProgramare } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('numeSot' in fieldValues)
            temp.numeSot = fieldValues.numeSot.length > 3 ? "" : "Introduceți numele curespunzător."
        if ('numeSotie' in fieldValues)
            temp.numeSotie = fieldValues.numeSotie.length > 3 ? "" : "Introduceți numele curespunzător."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email-ul nu este valid."
        if ('locatieID' in fieldValues)
            temp.locatieID = fieldValues.locatieID.length != 0 ? "" : "Selectați o locație."
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
           addProgramare(values, resetForm);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                 
                    <Controls.Input
                        label="Nume și prenume soț"
                        name="numeSot"
                        value={values.numeSot}
                        onChange={handleInputChange}
                        error={errors.numeSot}
                    />
                 
                    <Controls.Input
                        label="Nume și prenume soție"
                        name="numeSotie"
                        value={values.numeSotie}
                        onChange={handleInputChange}
                        error={errors.numeSotie}
                    />

                </Grid>
                <Grid item xs={6}>
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Select
                        name="locatieID"
                        label="Locație căsătorie"
                        value={values.locatieID}
                        onChange={handleInputChange}
                        options={locatii}
                        error={errors.locatieID}
                    />
                    <TextField
                        name="data"
                        label="Data și ora programării"
                        type="datetime-local"
                        defaultValue="2021-05-24T10:30"
                        onChange={handleInputChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Adaugă programare" />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
