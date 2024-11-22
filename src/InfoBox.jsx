import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({info}) {
  
  return (
    <div className="InfoBox">
      <div className="cardConatiner">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.img}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>temprature = {info.temp}&deg;C</p>
              <p>Humidity in air = {info.humidity}</p>
              <p>Min-Temprature = {info.tempMin}&deg;C</p>
              <p>Max-Temprature = {info.tempMax}&deg;C</p>
              <p>
                The weather can be describe as <i>"{info.weather}"</i> and feels
                like = {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
