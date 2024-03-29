import styles from '../styles/Home.module.css';
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import HoverInfoCard from './cards';
import rishavAggarwal from '../assets/rishav_agarwal.jpg';
import bratatiDas from '../assets/bratati_das.jpeg';
import akashJaiswal from '../assets/akash_jaiswal.jpeg';

export default function Mentors() {
    const theme=useTheme();
    const smallScreen=useMediaQuery(`(max-width: 800px)`);

    const mentors=[
        {
            title: "Rishav Agarwal",
            description: "Idea Generation",
            imgUrl: rishavAggarwal,
            links: {
                linkedin: "https://www.linkedin.com/in/rishav-agarwal/",
            }
        },
        {
            title: "Bratati Das	",
            description: "UI/UX Design",
            imgUrl: bratatiDas,
            links: {
                linkedin: "https://www.linkedin.com/in/bratatidas/"
            }
        },
        {
            title: "Akash Jaiswal",
            description: "Project Development",
            imgUrl: akashJaiswal,
            links: {
                linkedin: "https://www.linkedin.com/in/akashjaiswal03"
            }
        },
    ];

    return (
        <Box
            sx={{
                pb: '2rem',
                display: 'flex',
                alignItems: "center",
                flexDirection: 'column',
                // backgroundColor: theme.palette.text.primary
            }}
        >
            <Typography
                textAlign={"center"}
                variant={smallScreen? "h2":"h1"}
                fontWeight={"bold"}
                sx={{
                    mt: "5rem",
                    mb: "1rem",
                    color: theme.palette.text.light
                }}
            >
                Mentors
            </Typography>
            <Typography
                textAlign={"center"}
                fontWeight={"bold"}
                fontSize={"x-large"}
                color={theme.palette.text.primary}
                sx={{
                    mt: "1rem",
                    mb: "2rem",
                }}>
                Grab the opportunity to learn from great mentors.
            </Typography>

            {
                mentors.length>0? (
                    <Box className={styles.cardsList}>
                        {
                            mentors.map((mentor, key) => (
                                <HoverInfoCard
                                    key={key}
                                    title={mentor.title}
                                    description={mentor.description}
                                    img={mentor.imgUrl}
                                    // colorTheme="linear-gradient(90deg, #21D4FD 0%, #215dff 100%)"
                                    person={true}
                                    links={mentor.links}
                                />
                            ))
                        }
                    </Box>
                ):(
                    <Typography
                        textAlign={"center"}
                        fontWeight={"bold"}
                        fontSize={"xx-large"}
                        sx={{
                            mt: "1rem",
                            mb: "3rem",
                            color: theme.palette.text.primary,
                            background: theme.palette.background.secondary,
                            padding: "10px 4%",
                            boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
                            borderRadius: "15px",
                            "&:hover": {
                                transform: "translateY(-3px)",
                                boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)"
                            },
                        }}
                    >
                        To be announced soon
                    </Typography>
                )
            }

        </Box>
    );
}