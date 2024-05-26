import { Upload } from "antd";
import ImgCrop from "antd-img-crop";

const dummyRequest = ({ onSuccess }) => {
  setTimeout(() => {
    onSuccess("ok");
  }, 0);
};

const onImagePreview = async (file) => {
  let src = file.url;
  if (!src) {
    src = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file.originFileObj);
      reader.onload = () => resolve(reader.result);
    });
  }
  const image = new Image();
  image.src = src;
  const imgWindow = window.open(src);
  imgWindow?.document.write(image.outerHTML);
};

export const ImageUploader = (props) => (
  <ImgCrop rotationSlider aspect={3/4}>
    <Upload
      {...props}
      customRequest={dummyRequest}
      onPreview={onImagePreview}
      fileList={props.value}
    />
  </ImgCrop>
);
