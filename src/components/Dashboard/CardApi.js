import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  root: {
    width: 445,
    marginRight: "20px",
    marginTop: "20px",
    boxShadow: "0 0 10px gray",
  },
  media: {
    height: 140,
  },
  cardContent: {
    height: "70px",
  },
}));

function CardApi({ api }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={api.img} title="Api" />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {api.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {api.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Узнать больше
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardApi;
