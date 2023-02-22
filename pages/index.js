import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { 
  Button, Box, Card, CardContent, CardMedia, 
  CardActionArea, Grid, Rating, Typography, Avatar, CardHeader, Container, Link as MuiLink
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { KeyboardArrowRight } from "@mui/icons-material"

import { useDidMount } from "hooks/useDidMount";
import Layout from "@/components/Layout";
import { changePageName } from "@/redux/actions/app.reducer";
import { whichSideRender } from "@/helpers";
import { counter } from "@/utils";
import api from '@/services/homepage.service';
import Link from "next/link";

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
    id: 321,
    name: "VAL BY VALERIE THOMAS",
    image: "/images/product/pupur.jpg",
    description: "Pure Pressed Blush",
    matchBy: "Match Skin Type",
    rating: 4.1,
    color: "Neutral Rose"
  },
  {
    id: 654,
    name: "VAL BY VALERIE THOMAS",
    image: "/images/product/serum.jpg",
    description: "Phito Pigment Liquid Serum Foundation",
    matchBy: "Match Skin Type",
    rating: 4.1,
    color: "Neutral Rose"
  },
  {
    id: 987,
    name: "VAL BY VALERIE THOMAS",
    image: "/images/product/serum.jpg",
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
        
        <Box id="editor-choice" component={"section"}>
          <Container>
            <Box sx={{ paddingY: 10 }}>
              <Box>
                <Typography variant="h4">Editor's Choice</Typography>
                <Typography variant="p">Curated with love</Typography>
              </Box>
              <Grid container justifyContent={"center"} sx={{ marginTop: 5 }} spacing={3}>
              {props.fdnWP["editor's choice"].map((choice, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2}>
                  <Card raised key={`choice${index}`}>
                    <CardActionArea>
                      <CardHeader
                        avatar={<Avatar alt={choice.editor} src={`/images/profile/user_${index+1}.png`}/>}
                        title={choice.editor}
                        subheader={choice.role}
                      >
                      </CardHeader>
                      <CardMedia
                        component="img"
                        image={choice.product.image}
                        alt={choice.product.name}
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
            </Box>
          </Container>
        </Box>
        
        <Grid container id="match-products" component={"section"} justifyContent="center">
          <Grid item xs={12} sx={{ 
            height: 450,
            // position: "relative",
            // border: "1px solid black",
            backgroundColor: "#ffd9df",
            backgroundImage: "url(/images/banner/model_makeup.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: 320,
            backgroundPositionY: "bottom"
          }}>
            {/* <Image src="/images/banner/background.png" alt="girl-makeup" /> */}
            <Grid container justifyContent={"center"}>
              <Grid item lg={9} sx={{ border: "1px dotted black" }}>
                <Grid container>
                  <Grid item md={4} sx={{ border: "1px dashed black" }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="h4">Looking for products that are just simply perfect for you?</Typography>
                      <Typography variant="p">Here are some products that we believe match your skin, hair, and body! Have we mentioned that they solve your concern too?</Typography>
                      <Box>
                        <Button variant="contained">See My Mathes</Button>
                      </Box>
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
                                  image={product.image}
                                  alt={product.name}
                                />
                                <CardContent>
                                  <Rating name="read-only" value={product.rating} readOnly />
                                  <Typography gutterBottom variant="h5" component="div">
                                    {product.name}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    {product.description}
                                  </Typography>
                                  <Typography variant="body1" color="text.secondary">
                                    {product.color}
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
          <Grid item xs={12} lg={8}>
            <Box sx={{ paddingY: 10 }}>
              <Box
                children={`Horizontal 970x250\n(Internal Campaign Only)`} 
                sx={{ 
                  height: 250, 
                  border: '1px solid #969696', 
                  backgroundColor: '#d7d7d7',
                  color: '#969696',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontWeight: 700,
                  fontFamily: 'sans-serif'
              }}/>
            </Box>
          </Grid>
        </Grid>
          
        <Grid container id="articles-latest" justifyContent={"center"}>
          <Grid item lg={9}>
            <Box sx={{ paddingY: 5 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography variant="h4">Latest Article's</Typography>
                  <Typography variant="p">So you can make better purchase decision</Typography>
                </Box>
                <Box>
                  <MuiLink component={Link} href={"/editorials"}>
                    <span>See more </span><KeyboardArrowRight style={{ verticalAlign: "text-top" }}/>
                  </MuiLink>
                </Box>
              </Box>
              <Grid container justifyContent={"center"} sx={{ marginTop: 3 }} spacing={2}>
              {props.fdnWP["latest articles"].map((article, index) => (
                <Grid key={index} item xs={12} sm={6} md={4}>
                  <Card raised key={`article${index}`}>
                    <CardActionArea>
                      <CardContent>
                      <CardMedia
                        component="img"
                        image={article.image}
                        alt={article.title}
                      />
                        <Typography gutterBottom variant="h5" component="div">
                          {article.title}
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                          <Typography variant="body2" color="text.secondary">
                            {article.author}
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            {article.published_at}
                          </Typography>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
          
        <Box component={"section"} id="reviews-latest">
          <Container fixed sx={{ border: "1px solid black" }}>
            <Box>
              <Typography variant="h4">Latest Reviews</Typography>
              <Typography variant="p">So you can make better purchase decision</Typography>
            </Box>
          </Container>
        </Box>
          
        <Box component="section" id="groups-popular">
          <Container fixed sx={{ border: "1px solid black" }}>
          <Box>
              <Typography variant="h4">Latest Article's</Typography>
              <Typography variant="p">So you can make better purchase decision</Typography>
            </Box>
          </Container>
        </Box>
          
        <Box component="section" id="videos-latest">
          <Container fixed sx={{ border: "1px solid black" }}>
          <Box>
              <Typography variant="h4">Latest Article's</Typography>
              <Typography variant="p">So you can make better purchase decision</Typography>
            </Box>
          </Container>
        </Box>
          
        <Box component={"section"} id="products-latest-trend">
          <Container fixed sx={{ border: "1px solid black" }}>
          <Box>
              <Typography variant="h4">Latest Article's</Typography>
              <Typography variant="p">So you can make better purchase decision</Typography>
            </Box>
          </Container>
        </Box>
          
        <Box component={"section"} id="brands-top-n">
          <Container fixed sx={{ border: "1px solid black" }}>
          <Box>
              <Typography variant="h4">Latest Article's</Typography>
              <Typography variant="p">So you can make better purchase decision</Typography>
            </Box>
          </Container>
        </Box>
      </Layout>
    )
};

/* -------------------- NEXT SSG -------------------- */
export async function getStaticProps() {
    const { data } = await api.getDataCampuran();
    return {
        props: {
            meta: META,
            fdnWP: data
        }
    }
}

/* -------------------- STYLE -------------------- */
const Image = styled("img")(({ theme }) => ({
  // position: "absolute",
  // zIndex: -1,
  // visibility: "hidden"
}))