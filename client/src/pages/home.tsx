import { useList } from "@pankod/refine-core";

import { Box, Stack, Typography } from "@pankod/refine-mui";

import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  // TopAgent,
} from "components";

const Home = () => {
  const { data, isLoading, isError } = useList({
    resource: "properties",
    config: {
      pagination: {
        pageSize: 3,
      },
    },
  });

  const latestProperties = data?.data ?? [];

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (isError) {
    return <Typography>Error</Typography>;
  }

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>

      <Box
        gap={4}
        mt="20px"
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <PieChart
          title="Properties for Sale"
          value={684}
          series={[75, 25]}
          colors={["#275be8", "#c4e8ef"]}
        />
        <PieChart
          title="Properties for Rent"
          value={546}
          series={[60, 40]}
          colors={["#fd8539", "#c4e8ef"]}
        />
        <PieChart
          title="Total Customers"
          value={568}
          series={[75, 25]}
          colors={["#2ed480", "#c4e8ef"]}
        />
        <PieChart
          title="Total City"
          value={90}
          series={[75, 25]}
          colors={["#fe6d8e", "#c4e8ef"]}
        />
      </Box>

      <Stack
        mt="25px"
        width="100%"
        direction={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>

      <Box
        flex={1}
        borderRadius="15px"
        padding="20px"
        bgcolor="#fcfcfc"
        display="flex"
        flexDirection="column"
        minWidth="100%"
        mt="25px"
      >
        <Typography fontSize={20} fontWeight={600} color="#11142D">
          Latest Properties
        </Typography>

        <Box mt={2.5} sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {latestProperties.map((property) => (
            <PropertyCard
              key={property.id}
              id={property._id}
              title={property.title}
              price={property.price}
              photo={property.photo}
              location={property.location}
              width={300}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
