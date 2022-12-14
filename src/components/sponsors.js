import styles from '../styles/Home.module.css';
import { Box, ButtonGroup, Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import devfolio from '../assets/Devfolio_Logo-Black.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Sponsors() {
    const [value, setValue]=useState(0);

    const handleChange=(newValue) => {
        setValue(newValue);
    };

    const theme=useTheme();
    const smallScreen=useMediaQuery(`(max-width: 800px)`);

    const sponsors=[
        {
            title: "DevFolio",
            imgUrl: devfolio,
            link: "https://devfolio.co/"
        },
        {
            title: "DevFolio",
            imgUrl: devfolio,
            link: "https://devfolio.co/"
        },
        {
            title: "DevFolio",
            imgUrl: devfolio,
            link: "https://devfolio.co/"
        },
        {
            title: "DevFolio",
            imgUrl: devfolio,
            link: "https://devfolio.co/"
        }
    ];

    const communityPartners=[
        {
            title: "Befikra Community",
            imgUrl: devfolio,
            link: "https://befikracommunity.in"
        },
    ];

    return (
        <Box
            id="sponsors"
            sx={{
                display: 'flex',
                alignItems: "center",
                flexDirection: 'column',
                backgroundColor: theme.palette.text.primary
            }}
        >
            <Typography
                textAlign={"center"}
                variant={smallScreen? "h2":"h1"}
                fontWeight={"bold"}
                sx={{
                    mt: "5rem",
                    mb: "1rem",
                    background: 'linear-gradient(300deg, #21D4FD 0%, #B721FF 73%)',
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}
            >
                Sponsors &amp; Partners
            </Typography>

            <ButtonGroup>
                <Button variant="contained" sx={{ borderRadius: '1rem' }} onPointerDown={() => handleChange(0)} >Our Sponsors</Button>
                <Button variant="contained" sx={{ borderRadius: '1rem' }} onPointerDown={() => handleChange(1)} >Community Partners</Button>
            </ButtonGroup>

            <LogoGroup value={value} index={0} dataList={sponsors} />
            <LogoGroup value={value} index={1} dataList={communityPartners} />

        </Box>
    );
}


function LogoGroup({ dataList, value, index }) {
    return (
        value===index&&(
            <Box className={styles.cardsList}>
                {
                    dataList.map((data, key) => (
                        <Box
                            key={key}
                            sx={{
                                m: '10px',
                                transition: "0.3s",
                                "&:hover": {
                                    transform: "scale(1.2)",
                                },
                            }}
                        >
                            <a href={data.link} target="_blank">
                                <Image src={data.imgUrl} alt={data.title} />
                            </a>
                        </Box>
                    ))
                }
            </Box>
        )
    );
}
