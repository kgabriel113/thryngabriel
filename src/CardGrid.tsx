import React from 'react';
import { Grid, Card, CardBody, CardFooter, Text, Box, Heading } from "grommet";
import {data, IExperience} from './data/cardData'


interface InterestCardProps {
    children: any,
    title: string,
    subTitle: string,
    size: string,
    pad: string
    align: string
  }
  const InterestCard = ({ children, title, subTitle, size, pad, align, ...rest }: InterestCardProps) => (
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


interface CardGridProps{
    clickFunc: (id: IExperience, height: number|undefined) => void;
}

export function CardGrid(props: CardGridProps) {
    const [hoverId, setHoverId] = React.useState(-1);
    const [componentHeight, setComponentHeight] = React.useState(0);
    const gridRef = React.useRef<HTMLDivElement|null>(null);

    React.useEffect(() => {
        var t = gridRef.current;
        var z = 0;
        if(t != null) {
            z = t.clientHeight;
        }
        setComponentHeight(z)
    }, [gridRef])

    function colorByKey(key: number) {
        if(key == hoverId) return "card_over";
        return "card"
    };

    return(
        <div ref={gridRef}>
            <Heading level={3} size={'medium'}>What I'm excited about:</Heading>
            <Grid gap="medium" rows="small" columns={{ count: 'fit', size: 'small' }}>
                {data.map((value) => (
                    <Card background={colorByKey(value.id)} key={value.id} onMouseEnter={() => setHoverId(value.id)} onMouseLeave={() => setHoverId(-1)} onClick={() => props.clickFunc(value, componentHeight)}>
                        <CardBody pad="small">
                        <InterestCard
                            pad="small"
                            title={value.name}
                            subTitle={value.language}
                            size="small"
                            align="start"
                        >
                            {value.icon}
                        </InterestCard>
                        </CardBody>
                        <CardFooter pad={{ horizontal: 'medium', vertical: 'small' }}>
                        <Text size="xsmall">{value.duration}</Text>
                        </CardFooter>
                    </Card>)
                )}
            </Grid>
        </div>
    );
}