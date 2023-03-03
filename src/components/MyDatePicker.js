import React from "react";
import {useField } from "formik";
import DatePicker from "react-datepicker";
// Styles
import "react-datepicker/dist/react-datepicker.css";


export const MyDatePicker = ({ name = "" }) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  const today = new Date()
  let vDate =  new Date()
  vDate.setDate(today.getDate() + 3)

  return (
    <DatePicker
      {...field}
      selected={value}
      onChange={(date) => setValue(date)}
      minDate={vDate}
      className='p-2 border border-gray-300 rounded-md ml-2'
    />
  );
};