import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { 
  Button, Box, Card, CardContent, CardMedia, 
  CardActionArea, Grid, Typography 
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { useDidMount } from "hooks/useDidMount";
import Layout from "@/components/Layout";
import { changePageName } from "@/redux/actions/app.reducer";
import { whichSideRender } from "@/helpers";
import { counter } from "@/utils";

/* -------------------- CONFIG/CONSTANTS -------------------- */
const counterId = counter();
const META = {
    title: "Home",
    description: "Hey SpiderMonkey, crawl me as homepage",
    favicon: {
        src: "/favicon.ico"
    }
};
const ADS_SPACES = ["Top Frame 970x50", "Billboard 970x50"]
const PRODUCT_MATCHES = [
  {
    name: "VAL BY VALERIE THOMAS",
    image: "/images/profile/user_1_arinda.png",
    description: "Pure Pressed Blush",
    matchBy: "Match Skin Type",
    rating: 4.1,
    color: "Neutral Rose"
  },
  {
    name: "VAL BY VALERIE THOMAS",
    image: "/images/profile/user_1_arinda.png",
    description: "Phito Pigment Liquid Serum Foundation",
    matchBy: "Match Skin Type",
    rating: 4.1,
    color: "Neutral Rose"
  },
  {
    name: "VAL BY VALERIE THOMAS",
    image: "/images/profile/user_1_arinda.png",
    description: "Pure Pressed Blush",
    matchBy: "Match Skin Type",
    rating: 4.1,
    color: "Neutral Rose"
  }
]

/* -------------------- HOMEPAGE START -------------------- */
export default function Home(props) {
    /* Hooks_Start */
    const dispatch = useDispatch();
    const didMount = useDidMount();
    
    useEffect(() => {
        console.log("WHICH SIDE: ", whichSide)
        console.log("DIDMOUNT: ", didMount)
        if (whichSide === "SERVER_SIDE") dispatch(changePageName(props.meta.title))
        // if (didMount) dispatch()
    }, [])
    /* Hooks_End */

    /* Event_Handlers_Start */
    /**
     * contain function handlers with prefix "handle".
     * naming tips: handle<event><keterangan>
     */

    /* Event_Handlers_End */

    /* Helpers_Start */
    /**
     * contain helper implementation
     * or misc
     */
    let whichSide = whichSideRender(counterId);
    console.log(props)
    /* Helpers_End */
    
    /* View */
    return (
      <Layout meta={props.meta} >
        <Grid container id="ads-space" justifyContent={"center"}>
          <Grid item xs={12} lg={9}>
            {ADS_SPACES.map((item,index) => (
              <Box
                key={`ads-${index}`}
                children={item} 
                sx={{ 
                  height: index ? 250 : 50, 
                  border: '1px solid #969696', 
                  backgroundColor: '#d7d7d7',
                  color: '#969696',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontWeight: 700,
                  fontFamily: 'sans-serif'
              }}/>
            ))}
          </Grid>
        </Grid>
        
        <Grid container id="editor-choice" component={"section"} justifyContent="center">
          <Grid item lg={9}>
            <Typography
              variant="h4"
              children="Editor's Choice" 
            />
            <Typography 
              variant="p"
              children="Curated with love"
            />
            <Grid container justifyContent={"center"}>
              {props.fdnWP["editor's choice"].map((choice, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2}>
                  <Card raised key={`choice${index}`}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={choice.product.image}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {choice.product.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {choice.product.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        
        <Grid container id="match-products" component={"section"} justifyContent="center">
          <Grid item xs={12} sx={{ 
            position: "relative",
            border: "1px solid black",
            backgroundColor: "#ffd9df",
            zIndex: -1 
            // backgroundImage: "url(/images/banner/model_makeup.png)",
            // backgroundRepeat: "no-repeat"
          }}>
            <Image src="/images/banner/model_makeup.png" alt="girl-makeup" />
            <Grid container justifyContent={"center"}>
              <Grid item lg={9} sx={{ border: "1px dotted black" }}>
                <Grid container>
                  <Grid item md={4} sx={{ border: "1px dashed black" }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="h4">Looking for products that are just simply perfect for you?</Typography>
                      <Typography variant="p">Here are some products that we believe match your skin, hair, and body! Have we mentioned that they solve your concern too?</Typography>
                      <Button variant="contained">See My Mathes</Button>
                    </Box>
                  </Grid>
                  <Grid item md={8}>
                      <Grid container>
                        {PRODUCT_MATCHES.map((product,index) => (
                          <Grid key={index} item sm={12} md={4}>
                            <Card raised key={`product${index}`}>
                              <CardActionArea>
                                <CardMedia
                                  component="img"
                                  height="140"
                                  image={product.image}
                                  alt="green iguana"
                                />
                                <CardContent>
                                  <Typography gutterBottom variant="h5" component="div">
                                    {product.name}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    {product.description}
                                  </Typography>
                                </CardContent>
                              </CardActionArea>
                            </Card>
                          </Grid>
                        ))}
                      </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
          
        <Grid container id="campaign-internal" justifyContent={"center"}>

        </Grid>
          
        <Grid container id="articles-latest" justifyContent={"center"}>

        </Grid>
          
        <Grid container id="reviews-latest" justifyContent={"center"}>

        </Grid>
          
        <Grid container id="groups-popular" justifyContent={"center"}>

        </Grid>
          
        <Grid container id="videos-latest" justifyContent={"center"}>

        </Grid>
          
        <Grid container id="products-latest-trend" justifyContent={"center"}>

        </Grid>
          
        <Grid container id="brands-top-n" justifyContent={"center"}>

        </Grid>
      </Layout>
    )
};

/* -------------------- NEXT SSG -------------------- */
export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_APP_API_BASE_URL}/wp`);
    const wp = await res.json();
    return {
        props: {
            meta: META,
            fdnWP: wp
        }
    }
}

/* -------------------- STYLE -------------------- */
const Image = styled("img")(({ theme }) => ({
  position: "absolute",
  zIndex: -1,
}))