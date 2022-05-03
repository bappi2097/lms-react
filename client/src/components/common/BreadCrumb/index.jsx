import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

const BreadCrumb = (props) => {
  const { pathname } = useLocation();
  const routes = pathname.split("/").filter((x) => x);
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/"
        >
          <HomeIcon
            sx={{ mr: 0.5, color: "#00B22D", mb: 0.5 }}
            fontSize="inherit"
          />
          Home
        </Link>
        {routes.map((path, index, arr) => {
          if (arr.length !== index + 1) {
            return (
              <Link
                underline="hover"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textTransform: "capitalize",
                }}
                color="inherit"
                href={`/${routes.slice(0, index + 1).join("/")}`}
                key={`breadcrumb-${index}`}
              >
                {path}
              </Link>
            );
          }
          return (
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                textTransform: "capitalize",
              }}
              color="text.primary"
              key={`breadcrumb-${index}`}
            >
              {path}
            </Typography>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumb;
