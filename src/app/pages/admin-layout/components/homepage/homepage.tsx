import React from "react";
import { Box } from "@chakra-ui/react";
import dayjs from "dayjs";
import * as Yup from "yup";
import {
  DateInput,
  DateRangeInput,
  Form,
  SubmitButton,
} from "../../../../components";

const singleInputSchema = Yup.object({
  birthday: Yup.date().required("Birthday is required"),
});

const rangeInputSchema = Yup.object({
  startDate: Yup.date().typeError("Start date is required"),
  endDate: Yup.date()
    .min(Yup.ref("startDate"), "End date has to be later than start date")
    .typeError("End date is required"),
});

const Homepage = () => {
  const onSubmit = (data: { startDate: string; endDate: string }) => {
    alert(
      `start date: ${dayjs(data.startDate).format(
        "MM-DD-YYYY"
      )} end date: ${dayjs(data.endDate).format("MM-DD-YYYY")}`
    );
  };

  return (
    <>
      <Box>
        <Form onSubmit={() => {}} validationSchema={singleInputSchema}>
          <DateInput name="birthday" label="Birthday" />
          <SubmitButton mt={7}>Submit</SubmitButton>
        </Form>
      </Box>
      <Box mt={7}>
        <Form onSubmit={onSubmit} validationSchema={rangeInputSchema}>
          <DateRangeInput
            name="dateRange"
            label="Date range"
            maxDate="02-28-2022"
            minDate="02-01-2022"
          />
          <SubmitButton mt={7}>Submit</SubmitButton>
        </Form>
      </Box>
    </>
  );
};

export default Homepage;
