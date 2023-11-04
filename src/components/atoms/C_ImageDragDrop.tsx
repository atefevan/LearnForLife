import { SxProps, Theme } from "@mui/material";
import { useRef, useState } from "react";
import C_Typography from "./C_Typography";
import useColorScheme from "../../hooks/useColorScheme";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
interface Props {
  style?: SxProps<Theme>;
  isMultiple?: boolean;
  height?: string | number;
  width?: string | number;
  borderColor?: string;
  buttonColor?: string;
  titleColor?: string;
}
const C_ImageDragDrop = ({
  isMultiple = false,
  height,
  width,
  borderColor = "green",
  buttonColor = "green",
  titleColor = "green",
  // isDispose = false,
  style,
}: Props) => {
  const [images, setImages] = useState<any>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef: any = useRef(null);
  const { colorscheme } = useColorScheme();
  const selectFiles = () => {
    fileInputRef.current.click();
  };
  const onFilesSelect = (event: any) => {
    const files = event.target.files;
    if (files.length == 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e: any) => e.name === files[i].name)) {
        setImages((prevImages: any) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  };
  const deleteImage = (index: number) => {
    setImages((prevImages: any) =>
      prevImages.filter((_: any, i: any) => i !== index)
    );
  };
  const onDragOver = (event: any) => {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  };
  const onDragLeave = (event: any) => {
    event.preventDefault();
    setIsDragging(false);
  };
  const onDrop = (event: any) => {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e: any) => e.name === files[i].name)) {
        setImages((prevImages: any) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  };
  const handleUpload = () => {
    console.log("Selected Images :", images);
  };
  return (
    <div
      style={{
        padding: "10px",
        // boxShadow: "0 0 5px #ffdfdf",
        borderRadius: "5px",
        overflow: "hidden",
        width: width,
        height: height,
      }}
    >
      <div
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        style={{
          height: "150px",
          borderRadius: "5px",
          border: `2px dashed ${borderColor}`,
          color: titleColor,
          background: "#f4f3f9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          userSelect: "none",
          WebkitUserSelect: "none",
          marginTop: "10px",
        }}
      >
        {isDragging ? (
          <span
            style={{
              color: titleColor,
              marginLeft: "5px",
              cursor: "pointer",
              transition: "0.4s",
            }}
          >
            <C_Typography text={"Drop Images here"} />
          </span>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <C_Typography
                text={"Drag Images Here"}
                style={{ marginBottom: "15px" }}
                custom_color={colorscheme.black}
              />
              <DragIndicatorIcon />
            </div>

            <C_Typography
              text={"OR"}
              style={{ marginBottom: "15px" }}
              custom_color={colorscheme.black}
            />
            <span
              role="button"
              onClick={selectFiles}
              style={{
                cursor: "pointer",
                transition: "0.4s",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <C_Typography
                  text={"Browse"}
                  custom_color={colorscheme.black}
                />
                <SaveAltIcon />
              </div>
            </span>
          </div>
        )}

        <input
          type="file"
          name="file"
          multiple={isMultiple}
          ref={fileInputRef}
          onChange={onFilesSelect}
          style={{
            display: "none",
          }}
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexWrap: "wrap",
          maxHeight: "200px",
          overflowY: "auto",
          marginTop: "10px",
        }}
      >
        {images.map((image: any, index: number) => (
          <div
            key={index}
            style={{
              width: "75px",
              marginRight: "5px",
              height: "75px",
              position: "relative",
              marginBottom: "8px",
            }}
          >
            <span
              onClick={() => deleteImage(index)}
              style={{
                position: "absolute",
                top: -"2px",
                right: "9px",
                fontSize: "20px",
                cursor: "pointer",
                zIndex: "999",
              }}
            >
              &times;
            </span>
            <img
              src={image.url}
              alt={image.name}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "5px",
              }}
            />
          </div>
        ))}
      </div>
      {/* <button
        onClick={handleUpload}
        style={{
          outline: "0",
          border: "0",
          color: "#fff",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "400",
          padding: "8px 13px",
          width: "100%",
          background: buttonColor,
        }}
      >
        Upload
      </button> */}
    </div>
  );
};

export default C_ImageDragDrop;
