import React, { useState } from "react";
import { styled } from "styled-components";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

interface Props extends Record<string, any> {
  in?: boolean;
  level?: number;
}

const ignoreKeys = ["in", "level"];

const Product = (props: Props) => {
  console.log({ props });
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const handleClick = (key: string) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const getIsOpenIcon = (key: string) => {
    return open[key] ? (
      <i className="fas fa-caret-up" />
    ) : (
      <i className="fas fa-caret-down" />
    );
  };

  const getTypeOfProperty = (key: string) => {
    const type = typeof props[key];
    if (type === "object") {
      return Array.isArray(props[key]) ? "array" : "object";
    }

    return type;
  };

  const parsePropertyTypeAndGenerateElement = (key: string) => {
    if (typeof props[key] === "object") {
      return (
        <Collapse in={open[key]} timeout="auto" unmountOnExit>
          <Product
            {...props[key]}
            in={open[key]}
            level={(props.level || 0) + 4}
          />
        </Collapse>
      );
    }
    return (
      <ListItemButton sx={{ pl: (props.level || 4) + 4 }}>
        <ListItemIcon>[{getTypeOfProperty(key)}]</ListItemIcon>
        <ListItemText primary={props[key] as string} />
      </ListItemButton>
    );
  };

  const keysToMap = Object.keys(props).filter(
    (key) => !ignoreKeys.includes(key)
  );

  return (
    <ProductWrapper>
      <List
        sx={{
          width: "100%",
          maxWidth: "600px",
          bgcolor: "var(--secondary-color)",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          (props.level || 4) / 4 === 1 ? (
            <ListSubheader component="div" id="nested-list-subheader">
              Product: {(props?.titles as { en: string })?.en}
            </ListSubheader>
          ) : null
        }
      >
        {keysToMap.map((key) => (
          <React.Fragment key={key}>
            <ListItemButton
              onClick={() => handleClick(key)}
              sx={{ pl: props.level }}
            >
              <ListItemIcon>[{getTypeOfProperty(key)}]</ListItemIcon>
              <ListItemText primary={key} />
              {getIsOpenIcon(key)}
            </ListItemButton>
            <Collapse in={open[key]} timeout="auto" unmountOnExit>
              {parsePropertyTypeAndGenerateElement(key)}
            </Collapse>
          </React.Fragment>
        ))}
        {!keysToMap.length && (
          <ListItemButton sx={{ pl: props.level }}>No data</ListItemButton>
        )}
      </List>
    </ProductWrapper>
  );
};

export default Product;

Product.defaultProps = {
  level: 4,
};

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
