import { Facebook, Instagram } from "@mui/icons-material";
import { Container, Grid } from "@mui/material";
import CustomTypo from "components/CustomTypo";
import React from "react";
import FooterMapList from "./FooterMapList";
import { ADMIN_NAME } from "config";
import { ADMIN_EMAIL } from "config";
import { ADMIN_PHONE } from "config";

export default function FooterMap() {
  return (
    <div className="py-16 sm-down:py-8 bg-black text-white">
      <Container>
        <Grid container justifyContent="space-between" spacing={4}>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item flexGrow={1}>
                <div className="sm:mr-10">
                  <FooterMapList
                    title={ADMIN_NAME}
                    data={[
                      { label: "Forensic Accountant", to: "" },
                      { label: ADMIN_EMAIL, to: "" },
                      { label: ADMIN_PHONE, to: "" },
                    ]}
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <CustomTypo variant="h3">
              Contact me today and I will start immediately
            </CustomTypo>
            <Grid container justifyContent="flex-end" spacing={2}>
              <Grid item>
                <CustomTypo variant="h2">
                  <Facebook fontSize="inherit" />
                </CustomTypo>
              </Grid>
              <Grid item>
                <CustomTypo variant="h2">
                  <Instagram fontSize="inherit" />
                </CustomTypo>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
