import { useState } from "react";
import C_Typography from "../../../atoms/C_Typography";
import { fontSizes } from "../../../../constants/sizes";
import C_DatePicker from "../../../atoms/C_DatePicker";
import dayjs from "dayjs";

interface Props {}
const ActionDateForm = ({}: Props) => {
  const [formData, setFormData] = useState<{}>();
  const [firstLetterIssueDate, setFirstLetterIssueDate] = useState<any>(
    dayjs()
  );
  const [secondLetterIssueDate, setSecondLetterIssueDate] = useState<any>(
    dayjs()
  );
  const [thirdLetterIssueDate, setThirdLetterIssueDate] = useState<any>(
    dayjs()
  );
  const [incrementIssueDate, setIncrementIssueDate] = useState<any>(dayjs());
  const handleFormDataInput = (e: any) => {
    e.preventDefault();
    let obj: any = {};
    const key: string = e.target.id ? e.target.id : e.target.name;
    obj[key] = e.target.value;
    setFormData({ ...formData, ...obj });
  };
  console.log(formData);
  return (
    <>
      <div>
        {/* Form title */}
        <div style={{ display: "flex", justifyContent: "center", padding: 10 }}>
          <C_Typography text={"Action Date"} fontSize={fontSizes.rg} />
        </div>
        {/* Form body */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              width:"65vw",
              justifyContent:"space-evenly"
              //   backgroundColor:colorscheme.brown500,
            }}
          >
            <C_DatePicker
              id="first_letter_issue"
              label="1st Letter Issue"
              dateFormat="MMM DD, YYYY"
              value={firstLetterIssueDate}
              onChange={(event) => {
                setFormData({
                  ...formData,
                  first_letter_issue: event["$d"].toDateString(),
                });
                setFirstLetterIssueDate(event["$d"]);
              }}
            />
            <C_DatePicker
              id="second_letter_issue"
              label="2nd Letter Issue"
              dateFormat="MMM DD, YYYY"
              value={secondLetterIssueDate}
              onChange={(event) => {
                setFormData({
                  ...formData,
                  second_letter_issue: event["$d"].toDateString(),
                });
                setSecondLetterIssueDate(event["$d"]);
              }}
            />
            <C_DatePicker
              id="third_letter_issue"
              label="3rd Letter Issue"
              dateFormat="MMM DD, YYYY"
              value={thirdLetterIssueDate}
              onChange={(event) => {
                setFormData({
                  ...formData,
                  third_letter_issue: event["$d"].toDateString(),
                });
                setThirdLetterIssueDate(event["$d"]);
              }}
            />
            <C_DatePicker
              id="increment_issue"
              label="Increment Issue"
              dateFormat="MMM DD, YYYY"
              value={incrementIssueDate}
              onChange={(event) => {
                setFormData({
                  ...formData,
                  increment_issue: event["$d"].toDateString(),
                });
                setIncrementIssueDate(event["$d"]);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ActionDateForm;
