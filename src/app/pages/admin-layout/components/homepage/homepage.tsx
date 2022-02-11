import React from "react";
import { Box } from "@chakra-ui/react";
import dayjs from "dayjs";
import * as Yup from "yup";
import { DateRangeInput, Form, SubmitButton } from "../../../../components";

const schema = Yup.object({
  startDate: Yup.date().typeError("Start date is required"),
  endDate: Yup.date()
    .typeError("End date is required")
    .test({
      name: "same or earlier than start date",
      message: "End date must be later than start date",
      test: function (value) {
        const startDate = dayjs(this.parent.startDate);
        const endDate = dayjs(value);
        return !endDate.isBefore(startDate) && !endDate.isSame(startDate);
      },
    }),
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
    <Box>
      <Form onSubmit={onSubmit} validationSchema={schema}>
        <DateRangeInput
          name={["startDate", "endDate"]}
          label="Date range"
          maxDate="02-28-2022"
          minDate="02-01-2022"
        />
        <SubmitButton mt={7}>Submit</SubmitButton>
      </Form>
    </Box>
  );
};

export default Homepage;
