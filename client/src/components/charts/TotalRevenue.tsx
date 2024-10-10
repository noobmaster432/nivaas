import { ArrowCircleUpRounded } from "@mui/icons-material";
import { Box, Stack, Typography } from "@pankod/refine-mui";
import { TotalRevenueOptions, TotalRevenueSeries } from "./chart.config";
import ReactApexChart from "react-apexcharts";

const TotalRevenue = () => {
  return (
    <Box
      id="chart"
      flex={1}
      p={4}
      bgcolor="#fcfcfc"
      borderRadius="15px"
      display="flex"
      flexDirection="column"
      minWidth="30%"
    >
      <Typography fontSize={18} fontWeight={600} color="#11142d">
        Total Revenue
      </Typography>

      <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
        <Typography fontSize={28} fontWeight={700} color="#11142d">
          $236,535
        </Typography>
        <Stack direction="row" alignItems="center" gap={1}>
          <ArrowCircleUpRounded
            sx={{
              fontSize: 25,
              color: "#475be8",
            }}
          />
          <Stack>
            <Typography fontSize={15} color="#475be8">
              0.8%
            </Typography>
            <Typography fontSize={12} color="#808191">
              Than Last Month
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <ReactApexChart
        options={TotalRevenueOptions}
        series={TotalRevenueSeries}
        type="bar"
        height="310px"
      />
    </Box>
  );
};

export default TotalRevenue;
