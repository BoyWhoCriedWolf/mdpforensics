import { Grid } from "@mui/material";
import IMG_PROFILE from "assets/photos/2.jpg";
import CustomTypo from "components/CustomTypo";

export default function BusinessHours() {
  return (
    <div className="text-secondary">
      <Grid container>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <img className="" src={IMG_PROFILE} alt="Michael" />
        </Grid>
        <Grid item lg={8} md={8} sm={12} xs={12}>
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
