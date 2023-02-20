import { Add } from "@mui/icons-material"
import { Box, Stack, Typography, TextField, Select, MenuItem } from "@pankod/refine-mui"
import { useTable } from "@pankod/refine-core"
import { useNavigate } from "@pankod/refine-react-router-v6"
import { CustomButton, PropertyCard } from "components"
import { useMemo } from "react"

const AllProperties = () => {
  const navigate = useNavigate();

  const { tableQueryResult: { data, isLoading, isError },
  current,
  setCurrent,
  pageCount,
  setPageSize,
  sorter, setSorter,
  filters, setFilters,
  } = useTable();

  const allProperties = data?.data ?? [];

  const currentPrice = sorter.find((item) => item.field === 'price')?.order;

  const toggleSort = (field: String) => {
      setSorter([{ field: 'price', order: currentPrice === 'asc' ? 'desc' : 'asc' }]);
  }

  const currentFilterValues = useMemo(()=> {
    const logicalFilters = filters.flatMap((item)=> (
      'field' in item ? item : []
    ));

    return {
      title: logicalFilters.find((item)=> item.field === 'title')?.value || '',
      propertyType: logicalFilters.find((item)=> item.field === 'propertyType')?.value || '',
    }
  },[filters])

  if (isLoading) {
    return <Typography>Loading...</Typography>
  }

  if (isError) {
    return <Typography>Something went wrong!</Typography>
  }

  return (
    <Box>
      <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        <Stack
          direction="row"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography fontSize={25} fontWeight={700} color="#11142d">
            {!allProperties.length
              ? "There are no properties"
              : "All Properties"}
          </Typography>
          <CustomButton
            title="Add Property"
            color="#fcfcfc"
            backgroundColor="#475be8"
            icon={<Add />}
            handleClick={() => navigate("/properties/create")}
          />
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            mb={2}
            mt={3}
            display="flex"
            width="100%"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Box
              display="flex"
              gap={2}
              flexWrap="wrap"
              mb={{ xs: "20px", sm: 0 }}
            >
              <CustomButton
                title={`Sort price ${currentPrice === "asc" ? "↑" : "↓"}`}
                color="#fcfcfc"
                fullWidth
                backgroundColor="#475be8"
                handleClick={() => toggleSort("price")}
              />
              <TextField
                variant="outlined"
                color="info"
                placeholder="Search by title"
                value={currentFilterValues.title}
                onChange={(e) => {
                  setFilters([
                    {
                      field: "title",
                      operator: "contains",
                      value: e.currentTarget.value
                        ? e.currentTarget.value
                        : undefined,
                    },
                  ]);
                }}
              />
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                value={currentFilterValues.propertyType}
                onChange={(e) => {
                  setFilters(
                    [
                      {
                        field: "propertyType",
                        operator: "eq",
                        value: e.target.value,
                      },
                    ],
                    "replace"
                  );
                }}
                defaultValue=""
                required
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">All</MenuItem>
                {[
                  "Apartment",
                  "Villa",
                  "Farmhouse",
                  "Condos",
                  "Townhouse",
                  "Duplex",
                  "Studio",
                  "Chalet",
                ].map((type) => (
                  <MenuItem key={type} value={type.toLowerCase()}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Box>
        </Stack>
      </Box>

      <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        {allProperties.map((property) => (
          <PropertyCard
            key={property._id}
            id={property._id}
            title={property.title}
            price={property.price}
            photo={property.photo}
            location={property.location}
          />
        ))}
      </Box>
      {allProperties.length > 0 && (
        <Box display="flex" gap={2} mt={3} flexWrap="wrap">
          <CustomButton
            title="Previous"
            color="#fcfcfc"
            backgroundColor="#475be8"
            handleClick={() => setCurrent((prev) => prev - 1)}
            disabled={!(current > 1)}
          />
          <Box
            display={{ xs: "hidden", sm: "flex" }}
            alignItems="center"
            gap="5px"
          >
            Page{" "}
            <strong>
              {current} of {pageCount}
            </strong>
          </Box>
          <CustomButton
            title="Next"
            color="#fcfcfc"
            backgroundColor="#475be8"
            handleClick={() => setCurrent((prev) => prev + 1)}
            disabled={current === pageCount}
          />
          <Select
            variant="outlined"
            color="info"
            displayEmpty
            onChange={(e) =>
              setPageSize(e.target.value ? Number(e.target.value) : 6)
            }
            defaultValue={6}
            required
            inputProps={{ "aria-label": "Without label" }}
          >
            {[4, 6, 9, 12, 15].map((size) => (
              <MenuItem key={size} value={size}>
                Show {size}
              </MenuItem>
            ))}
          </Select>
        </Box>
      )}
    </Box>
  );
}

export default AllProperties