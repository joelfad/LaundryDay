import React from "react";
import { withStyles } from "material-ui/styles";
import cardCountStyles from "./styles";
import Card from "material-ui/Card";
import Typography from "material-ui/Typography";
import Style from "material-ui-icons/Style";


const cardCount = props => {
    const { classes } = props;
    let leftOffset = "6px";
    if (props.num >= 10) {
        leftOffset = "0px";
    }
    return (
        <div>
        {/* // <Card className={classes.card}> */}
            <Style style={{fontSize: "55px", color: "#454545"}}/>
            {/* <span style={{display:"block", marginTop:"-45px", marginLeft:"23px"}}> */}
            <span style={{display:"block", marginTop:"-46px", marginLeft:"calc(21px + " + leftOffset + ")"}}>
                <Typography className={classes.num} variant="headline">{props.num}</Typography>
            </span>
            
        {/* // </Card> */}
        </div>
    );
};

export default withStyles(cardCountStyles, { withTheme: true })(cardCount);
