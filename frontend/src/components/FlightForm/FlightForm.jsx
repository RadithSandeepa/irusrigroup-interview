import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, InputAdornment } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FlightTakeoff, FlightLand, People } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#150C15', // Custom primary color
    },
    secondary: {
      main: '#8E2157', // Custom secondary color
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#fff', // Custom border color
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#fff', // Hover border color
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#fff', // Focus border color
          },
          '& .MuiSvgIcon-root': {
            color: '#fff', // Calendar icon color
          },
        },
        input: {
          color: '#fff', // Input text color
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#fff', // Label color
          '&.Mui-focused': {
            color: '#fff', // Focused label color
          },
        },
      },
    },
  },
});

const FlightForm = () => {
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [departureDate, setDepartureDate] = useState(null);
  const [arrivalDate, setArrivalDate] = useState(null);
  const [passengers, setPassengers] = useState('');

  const handleDepartureChange = (event) => {
    setDepartureCity(event.target.value);
  };

  const handleArrivalChange = (event) => {
    setArrivalCity(event.target.value);
  };

  const handleDepartureDateChange = (newValue) => {
    setDepartureDate(newValue);
  };

  const handleArrivalDateChange = (newValue) => {
    setArrivalDate(newValue);
  };

  const handlePassengersChange = (event) => {
    setPassengers(event.target.value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
      <div>
        {/* Flexbox Container */}
        <div className="flex flex-wrap justify-between gap-4">
          {/* Departure City Dropdown */}
          <div className="flex-1 min-w-[200px]">
            <FormControl fullWidth>
              <InputLabel id="departure-city-label">Departure City</InputLabel>
              <Select
                labelId="departure-city-label"
                id="departure-city-select"
                value={departureCity}
                label="Departure City"
                onChange={handleDepartureChange}
                startAdornment={
                  <InputAdornment position="start">
                    <FlightTakeoff />
                  </InputAdornment>
                }
              >
                <MenuItem value="New York">New York</MenuItem>
                <MenuItem value="Los Angeles">Los Angeles</MenuItem>
                <MenuItem value="London">London</MenuItem>
                <MenuItem value="Tokyo">Tokyo</MenuItem>
                <MenuItem value="Paris">Paris</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* Arrival City Dropdown */}
          <div className="flex-1 min-w-[200px]">
            <FormControl fullWidth>
              <InputLabel id="arrival-city-label">Arrival City</InputLabel>
              <Select
                labelId="arrival-city-label"
                id="arrival-city-select"
                value={arrivalCity}
                label="Arrival City"
                onChange={handleArrivalChange}
                startAdornment={
                  <InputAdornment position="start">
                    <FlightLand />
                  </InputAdornment>
                }
              >
                <MenuItem value="New York">New York</MenuItem>
                <MenuItem value="Los Angeles">Los Angeles</MenuItem>
                <MenuItem value="London">London</MenuItem>
                <MenuItem value="Tokyo">Tokyo</MenuItem>
                <MenuItem value="Paris">Paris</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* Departure Date Picker */}
          <div className="flex-1 min-w-[200px]">
            <DesktopDatePicker
              label="Departure Date"
              inputFormat="MM/dd/yyyy"
              value={departureDate}
              onChange={handleDepartureDateChange}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </div>

          {/* Arrival Date Picker */}
          <div className="flex-1 min-w-[200px]">
            <DesktopDatePicker
              label="Arrival Date"
              inputFormat="MM/dd/yyyy"
              value={arrivalDate}
              onChange={handleArrivalDateChange}
              renderInput={(params) => <TextField {...params} fullWidth
              />}
            />
          </div>

          {/* Passengers Dropdown */}
          <div className="flex-1 min-w-[200px]">
            <FormControl fullWidth>
              <InputLabel id="passengers-label">Passengers</InputLabel>
              <Select
                labelId="passengers-label"
                id="passengers-select"
                value={passengers}
                label="Passengers"
                onChange={handlePassengersChange}
                startAdornment={
                  <InputAdornment position="start">
                    <People />
                  </InputAdornment>
                }
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5+</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      </ThemeProvider>
    </LocalizationProvider>
  );
};

export default FlightForm;
