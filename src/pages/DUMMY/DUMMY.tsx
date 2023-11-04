import C_Button from "../../components/atoms/C_Button";
import C_TextField from "../../components/atoms/C_TextField";

const DummyPage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "20vw",
        }}
      >
        <C_TextField
          label={"new"}
          variant={"outlined"}
          fieldOnChange={(event) => {
            console.log("TYPING :: ", event.target.value);
          }}
          style={{ marginBottom: "10px" }}
        />
        <C_Button
          width={"20vw"}
          label={"Boom"}
          variant={"outlined"}
          size={"medium"}
          onClick={() => alert("Your getting rich !!")}
        />
      </div>
    </>
  );
};

export default DummyPage;
