import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { FormGroup } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
import './App.css';


function getStyles(name, countryName, theme) {
  return {
    fontWeight:
      countryName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const countryNames = [
  'India',
  'USA',
  'UK',
  'Canada',
  'Australia',
  'New Zealand',
  'South Africa',
  'Germany',
  'France',
  'Italy',
  'Spain',
  'Netherlands',
  'Belgium',
  'Switzerland',
  'Denmark',
  'Thailand',
  'Malaysia',
  'Singapore',
  'Indonesia',
  'Philippines',
  'Vietnam',
  'Cambodia',
  'Laos',
  'Myanmar',
  'Japan'
];
export default function App() {

  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: "#562B08",
  //     },
  //   },
  // });

  const [country, setCountry] = React.useState('');

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const validationSchema = yup.object({
    name: yup
      .string('Enter your name')
      .required('Email is required'),
    address: yup
      .string('Enter your address')
      .min(8, 'address should be of minimum 8 characters length')
      .required('address is required'),
    country: yup
      .string('Select an option')
      .required('Option is required'),
    hobbies: yup
      .array()
      .min(1, 'Select at least one interest')
      .required('Select at least one interest'),
    interests: yup
      .array()
      .min(1, 'Select at least one interest')
      .required('Select at least one interest'),

  });
  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      country: '',
      hobbies: [],
      interests: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });



  return (

    <div>
      <Box className='form'>
        <form onSubmit={formik.handleSubmit}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'absolute',
            left: '27.5%',
            width: '45%',
            fontSize: 'calc(10px + 2vmin)',
            textAlign: 'center',
            padding: '10px',
            boxSizing: 'border-box',
          }}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <br />
            <TextField
              fullWidth
              id="address"
              name="address"
              label="Address"
              type="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
            <br />
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                error={formik.touched.gender && Boolean(formik.errors.gender)}
                helperText={formik.touched.gender && formik.errors.gender}
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
            <br />
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label"
                  name="country"
                  label="Country"
                >Country</InputLabel>
                <Select
                  labelId="country"
                  id="country"
                  name="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                >
                  {
                    countryNames.map((name) => (
                      <MenuItem key={name} value={name} style={getStyles(name, country, useTheme())}
                      >
                        {name}
                      </MenuItem>
                    ))
                  }
                </Select>
                {formik.touched.country && formik.errors.country && (
                  <FormHelperText>{formik.errors.country}</FormHelperText>
                )}
              </FormControl>
            </Box>
            <br />
            <FormControl
              component="fieldset"
              error={formik.touched.hobbies && Boolean(formik.errors.hobbies)}>
              <FormLabel>Hobbies</FormLabel>
              <FormGroup
              >
                <FormControlLabel
                  control={<Checkbox
                    name="hobbies"
                    value="Reading"
                    checked={formik.values.hobbies.includes('Reading')}
                    onChange={formik.handleChange}
                  />}
                  label="Reading"
                />
                <FormControlLabel
                  control={<Checkbox
                    name="hobbies"
                    value="Writing"
                    checked={formik.values.hobbies.includes('Writing')}
                    onChange={formik.handleChange}
                  />}
                  label="Writing"
                />
                <FormControlLabel
                  control={<Checkbox
                    name="hobbies"
                    value="Traveling"
                    checked={formik.values.hobbies.includes('Traveling')}
                    onChange={formik.handleChange}
                  />}
                  label="Travelling"
                />
                <FormControlLabel
                  control={<Checkbox
                    name="hobbies"
                    value="Dancing"
                    checked={formik.values.hobbies.includes('Dancing')}
                    onChange={formik.handleChange}
                  />}
                  label="Dancing"
                />
              </FormGroup>
              <FormHelperText>
                {formik.touched.hobbies && formik.errors.hobbies}
              </FormHelperText>
            </FormControl>
            <br />
            <FormControl
              component="fieldset"
              error={formik.touched.interests && Boolean(formik.errors.interests)}
            >
              <FormLabel id="demo-checkbox-group-label">Interests</FormLabel>
              <FormGroup>

                <FormControlLabel
                  control={<Checkbox
                    name="interests"
                    value="Music"
                    checked={formik.values.interests.includes('Music')}
                    onChange={formik.handleChange}
                  />}
                  label="Music"
                />
                <FormControlLabel
                  control={<Checkbox
                    name="interests"
                    value="Movies"
                    checked={formik.values.interests.includes('Movies')}
                    onChange={formik.handleChange}
                  />}
                  label="Movies"
                />
                <FormControlLabel
                  control={<Checkbox
                    name="interests"
                    value="Sports"
                    checked={formik.values.interests.includes('Sports')}
                    onChange={formik.handleChange}
                  />}
                  label="Sports"
                />
                <FormControlLabel
                  control={<Checkbox
                    name="interests"
                    value="Gaming"
                    checked={formik.values.interests.includes('Gaming')}
                    onChange={formik.handleChange}
                  />}
                  label="Gaming"
                />
              </FormGroup>
              <FormHelperText>
                {formik.touched.interests && formik.errors.interests}
              </FormHelperText>
            </FormControl>
            <br />
            {/* <FormControl>
              <FormLabel id="demo-checkbox-group-label">Skills</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Coding"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Cooking"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Painting"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Photography"
                />
              </FormGroup>
            </FormControl> */}
            {/* <br /> */}
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Box>
    </div>

  );
};


