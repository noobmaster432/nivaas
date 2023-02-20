import { EmailOutlined, LocationCity, Phone, Place } from "@mui/icons-material"
import { useGetIdentity } from "@pankod/refine-core"
import { Box, Stack, Typography } from "@pankod/refine-mui"
import { Link } from "@pankod/refine-react-router-v6"
import { AgentCardProp, InfoBarProps } from "interfaces/agent"

const InfoBar = ({ icon, name }: InfoBarProps) => {
  return (
    <Stack direction="row" alignItems="center" gap={1.5} color="#808191" flex={1} minWidth={{ xs: "100%", sm: 300 }}>
      {icon}
      <Typography fontSize={14} color="#808191">
        {name}
      </Typography>
    </Stack>
  );
}

const AgentCard = ({ id, name, email, avatar, noOfProperties }: AgentCardProp) => {
  const { data: currentUser } = useGetIdentity();

  const generateLink = () => {
    if(currentUser.email === email) return '/my-profile'
    return `/agents/show/${id}`;
  }

  return (
    <Box
      component={Link}
      to={generateLink()}
      width="100%"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: "20px",
        padding: "20px",
        backgroundColor: "#fcfcfc",
        borderRadius: "10px",
        "&:hover": {
          boxShadow: "0 22px 45px 2px rgba(176, 176, 176, 0.1)",
        },
      }}
    >
      <img
        src={avatar}
        alt={name}
        width={90}
        height={90}
        style={{ borderRadius: 8, objectFit: "cover" }}
      />
      <Stack
        direction="column"
        justifyContent="space-between"
        flex={1}
        gap={{ xs: 4, sm: 2 }}
      >
        <Stack gap={2} direction="row" flexWrap="wrap" alignItems="center">
          <Typography fontSize={22} fontWeight={600} color="#11142d">
            {name}
          </Typography>
          <Typography fontSize={14} color="#808191">
            Real-Estate Agent
          </Typography>
        </Stack>
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <InfoBar icon={<EmailOutlined />} name={email} />
          <InfoBar icon={<Place />} name="Delhi, India" />
          <InfoBar icon={<Phone />} name="+0123 456 7890" />
          <InfoBar
            icon={<LocationCity />}
            name={`${noOfProperties} Properties`}
          />
        </Stack>
      </Stack>
    </Box>
  );
}

export default AgentCard