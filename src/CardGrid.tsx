import React from 'react';
import { Grid, Card, CardBody, CardFooter, Text, Box } from "grommet";
import { Domain, PhoneVertical, ServerCluster, Test, LineChart, System } from "grommet-icons";
import { theme } from './GlobalTheme';

const data = [
    {
        id: "0",
        icon: <Domain size="large" />,
        title: 'Web',
        subTitle: 'React, TypeScript, ASP.NET, Django',
        message: '1.5 years',
    },
    {
        id: "1",
        icon: <PhoneVertical size='large' />,
        title: 'Mobile',
        subTitle: 'Android (Kotlin), React Native',
        message: '2 years'
    },
    {
        id: "2",
        icon: <ServerCluster size='large' />,
        title: 'Database',
        subTitle: 'PostgreSQL, MongoDB, ORM frameworks',
        message: '1.5 years'
    },
    {
        id: "3",
        icon: <Test size='large' />,
        title: 'Data Science',
        subTitle: 'Scikitlearn (Python)',
        message: '6 months'
    },
    {
        id: "4",
        icon: <LineChart size='large' />,
        title: 'Data Visualization',
        subTitle: 'D3.js, React, TypeScript',
        message: '3 months'
    },
    {
        id: "5",
        icon: <System size='large' />,
        title: 'Embedded Systems',
        subTitle: 'Arduino (C++)',
        message: '9 months'
    },
    
  ];

interface IdentifierProps {
    children: any,
    title: string,
    subTitle: string,
    size: string,
    pad: string
    align: string
  }
  const Identifier = ({ children, title, subTitle, size, pad, align, ...rest }: IdentifierProps) => (
    <Box gap="small" align={align} pad={pad} {...rest}>
      {children}
      <Box>
        <Text size={size} weight="bold">
          {title}
        </Text>
        <Text size={size}>{subTitle}</Text>
      </Box>
    </Box>
  );



export function CardGrid() {
    const [hoverId, setHoverId] = React.useState("");

    function colorByKey(key: string) {
        if(key == hoverId) return "card_over";
        return "card"
    };

    return(
        <Grid gap="medium" rows="small" columns={{ count: 'fit', size: 'small' }}>
            {data.map((value) => (
            <Card background={colorByKey(value.id)} key={value.message} onMouseEnter={() => setHoverId(value.id)} onMouseLeave={() => setHoverId("")}>
                <CardBody pad="small">
                <Identifier
                    pad="small"
                    title={value.title}
                    subTitle={value.subTitle}
                    size="small"
                    align="start"
                >
                    {value.icon}
                </Identifier>
                </CardBody>
                <CardFooter pad={{ horizontal: 'medium', vertical: 'small' }}>
                <Text size="xsmall">{value.message}</Text>
                </CardFooter>
            </Card>
            ))}
        </Grid>
    );
}