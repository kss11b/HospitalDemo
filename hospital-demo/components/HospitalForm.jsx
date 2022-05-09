import React from "react";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";

export default function HospitalForm({ createHospital, setIsCreating }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      state: "",
      city: "",
      staff: 0,
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      createHospital.mutate(values);
      // console.log(values, "values");
      // alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id="name"
        name="name"
        label="Name"
        variant="standard"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        id="state"
        name="state"
        label="State"
        variant="standard"
        value={formik.values.state}
        onChange={formik.handleChange}
        error={formik.touched.state && Boolean(formik.errors.state)}
        helperText={formik.touched.state && formik.errors.state}
      />
      <TextField
        id="city"
        name="city"
        label="City"
        variant="standard"
        value={formik.values.city}
        onChange={formik.handleChange}
        error={formik.touched.city && Boolean(formik.errors.city)}
        helperText={formik.touched.city && formik.errors.city}
      />
      <TextField
        id="staff"
        name="staff"
        label="Staff"
        variant="standard"
        value={formik.values.staff}
        onChange={formik.handleChange}
        error={formik.touched.staff && Boolean(formik.errors.staff)}
        helperText={formik.touched.staff && formik.errors.staff}
      />
      <Button
        style={{ marginTop: "2%", marginLeft: "2%" }}
        color="primary"
        variant="contained"
        type="submit"
      >
        Submit
      </Button>
      <Button
        style={{ marginTop: "2%" }}
        color="secondary"
        variant="contained"
        onClick={() => setIsCreating(false)}
      >
        Cancel
      </Button>
    </form>
  );
}
