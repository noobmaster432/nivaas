import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import {logo} from "assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
      }}>
        <img src={logo} alt="Refine" width="28px" />
        {collapsed ? null : <h1 style={{ color: "indigo" }}>Nivaas</h1>}
      </Link>
    </Button>
  );
};
