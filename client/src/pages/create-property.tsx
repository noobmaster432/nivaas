import { useGetIdentity } from "@pankod/refine-core";
import { useForm, FieldValues } from "@pankod/refine-react-hook-form";
// import { useNavigate } from "@pankod/refine-react-router-v6";
import { useState } from "react";
import Form from "components/common/Form";

const CreateProperty = () => {
  // const navigate = useNavigate();
  const { data: user } = useGetIdentity();
  const [propertyImage, setPropertyImage] = useState({ name: '', url: '' });
  const { refineCore: { onFinish, formLoading }, register, handleSubmit } = useForm();

  const handleImageChange = (file: File) => {
    const reader = (readFile: File) => new Promise<string>
      ((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result as string);
        fileReader.onerror = (e) => reject(e);
        fileReader.readAsDataURL(readFile);
      });

    reader(file).then((result: string) => {
      setPropertyImage({ name: file?.name, url: result });
    })
  };

  const onFinishHandler = async (data: FieldValues) => {
    if(!propertyImage.name) return alert('Please select an image');
    onFinish({
      ...data,
      photo: propertyImage.url,
      email: user.email
    });
    // navigate('/properties/all');
  };

  return (
    <Form
      type="Create"
      register={register}
      handleSubmit={handleSubmit}
      onFinish={onFinish}
      formLoading={formLoading}
      propertyImage={propertyImage}
      handleImageChange={handleImageChange}
      onFinishHandler={onFinishHandler}
    />
  )
}

export default CreateProperty