import React, { useState } from "react";
import FormItem from "./FormItem";
import { format } from "date-fns";
import { Box, Pressable } from "native-base";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DateFormItem = ({ value, onChangeText, ...props }) => {
  const [open, setOpen] = useState(false);
  const date = new Date(value || new Date());

  return (
    <>
      <Box position={"relative"}>
        <FormItem
          value={value && format(date, "dd/MM/yyyy")}
          inputProps={{
            readOnly: true,
          }}
          {...props}
        />
        <Pressable
          position={"absolute"}
          w={"100%"}
          h={"100%"}
          onPress={() => setOpen(true)}
        />
      </Box>
      <DateTimePickerModal
        isVisible={open}
        mode={"date"}
        date={date}
        onConfirm={(date) => {
          onChangeText(date.toISOString());
          setOpen(false);
        }}
        onCancel={() => setOpen(false)}
      />
    </>
  );
};

DateFormItem.propTypes = {
  ...FormItem.propTypes,
};

export default DateFormItem;
