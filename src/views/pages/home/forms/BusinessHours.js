import { Button, Grid } from "@mui/material";
import { Directions } from "@mui/icons-material";
import CustomTypo from "components/CustomTypo";
import React from "react";
import IMG_PROFILE from "assets/photos/2.jpg";

export default function BusinessHours() {
  return (
    <div className="text-secondary">
      <Grid container>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <img className="" src={IMG_PROFILE} alt="Michael" />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <CustomTypo variant="h4">
            Let MDP Forensics handle your claim preparation
          </CustomTypo>
          <div className="m-4">
            <table>
              <tbody>
                {[
                  "Proof of Loss",
                  "Statement of Facts",
                  "Calculation of Projected Income Loss",
                  "Scheduling of Extra Expenses",
                  "Documentation Exhibits",
                  "Available to Answer Any Questions From the Insurance Adjuster",
                  "Ongoing Updates As Required During the Period of Restoration or Loss Period",
                ].map((item, itemIndex) => (
                  <tr key={itemIndex}>
                    <td className="pr-4">
                      <CustomTypo color="primary">- {item ?? ""}</CustomTypo>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
