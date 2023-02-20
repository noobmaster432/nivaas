import { Box, Button, FormControl, FormHelperText, MenuItem, Select, Stack, TextareaAutosize, TextField, Typography } from "@pankod/refine-mui"
import { FormProps } from "interfaces/common";
import CustomButton from "./CustomButton";

const Form = ({type,register,handleSubmit,onFinish,formLoading,propertyImage,handleImageChange,onFinishHandler}: FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        {type} a Property
      </Typography>

      <Box mt={2.5} mb={1.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
        <form
          onSubmit={handleSubmit(onFinishHandler)}
          style={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Enter Property Name
            </FormHelperText>
            <TextField
              fullWidth
              variant="outlined"
              color="info"
              required
              id="outlined-basic"
              {...register("title", { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Enter Description
            </FormHelperText>
            <TextareaAutosize
              minRows={5}
              required
              placeholder="Write description"
              color="info"
              style={{
                width: "100%",
                background: "transparent",
                fontSize: "16px",
                borderColor: "rgba(0,0,0,0.23)",
                borderRadius: 6,
                padding: 10,
                color: "#919191",
              }}
              {...register("description", { required: true })}
            />
          </FormControl>

          <Stack direction="row" gap={4}>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Select Property Type
              </FormHelperText>
              <Select
                displayEmpty
                variant="outlined"
                color="info"
                required
                inputProps={{ "aria-label": "Without label" }}
                defaultValue="apartment"
                {...register("propertyType", { required: true })}
              >
                <MenuItem value="apartment">Apartment</MenuItem>
                <MenuItem value="villa">Villa</MenuItem>
                <MenuItem value="farmhouse">Farmhouse</MenuItem>
                <MenuItem value="condos">Condos</MenuItem>
                <MenuItem value="townhouse">Townhouse</MenuItem>
                <MenuItem value="duplex">Duplex</MenuItem>
                <MenuItem value="studio">Studio</MenuItem>
                <MenuItem value="chalet">Chalet</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Enter Property Price
              </FormHelperText>
              <TextField
                fullWidth
                variant="outlined"
                color="info"
                type="number"
                required
                id="outlined-basic"
                {...register("price", { required: true })}
              />
            </FormControl>
          </Stack>
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Enter Location
            </FormHelperText>
            <TextField
              fullWidth
              variant="outlined"
              color="info"
              required
              id="outlined-basic"
              {...register("location", { required: true })}
            />
          </FormControl>

          <Stack direction="column" gap={1} justifyContent="center" mb={2}>
            <Stack direction="row" gap={2}>
              <Typography fontSize={16} fontWeight={500} color="#11142d" my="10px">
                Property Photo
              </Typography>

              <Button component="label" sx={{
                width: 'fit-content',
                color: '#2ed480',
                fontSize: 16,
                textTransform: 'capitalize'
              }}>
                Upload *
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={(e) => {
                    // @ts-ignore
                    handleImageChange(e.target.files[0])
                  }}
                />
              </Button>
            </Stack>
            <Typography fontSize={14} color="#808191" sx={{wordBreak: 'break-all'}}>
              {propertyImage ? propertyImage.name : "No file selected"}
            </Typography>
          </Stack>

          <CustomButton
            type="submit"
            title={formLoading ? "Submitting..." : "Submit"}
            backgroundColor="#475be8"
            color="#fcfcfc"
          />
        </form>
      </Box>
    </Box>
  );
}

export default Form