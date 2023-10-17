import React from 'react';
import {Bar, Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);



export default function Barchart() {


const state = {
labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40,50,60,70,80,60],
    backgroundColor: [
      ' rgb(211, 203, 228)',
      ' rgb(211, 203, 228)',
      ' rgb(211, 203, 228)',
      ' rgb(211, 203, 228)',
      ' rgb(211, 203, 228)',
      ' rgb(211, 203, 228)',
      ' rgb(211, 203, 228)',
      'purple',
      ' rgb(211, 203, 228)',
      ' rgb(211, 203, 228)',
    ],
    borderColor: [
      ' rgb(211, 203, 228)',
      ' rgb(211, 203, 228)',
      ' rgb(211, 203, 228)',
      ' rgb(211, 203, 228)',
     ' rgb(211, 203, 228)',
     ' rgb(211, 203, 228)',
      ' rgb(211, 203, 228)',
      ' rgb(211, 203, 228)',
     ' rgb(211, 203, 228)',
    ],
    borderWidth: 1
  }]
}


    return (
<Bar data={state} />

    );
}