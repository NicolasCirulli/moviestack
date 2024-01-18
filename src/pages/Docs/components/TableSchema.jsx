import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
const TableSchema = ({ schema, thead }) => {
  return (
    <TableContainer sx={{ maxWidth: "80ch" }}>
      <Table>
        <TableHead>
          <TableRow>
            {thead.map((th) => (
              <TableCell key={th} sx={{ fontWeight: "800" }}>
                {th}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {schema.map((property) => (
            <TableRow key={property.key}>
              <TableCell sx={{ fontWeight: "600" }}>{property.key}</TableCell>
              <TableCell>{property.type}</TableCell>
              <TableCell sx={{ maxWidth: "60ch" }}>
                {property.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableSchema;
