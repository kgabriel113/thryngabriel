import React from 'react';
import { Box, Button, Text } from 'grommet';
import { Previous } from "grommet-icons";
import { IExperience } from './data/cardData';


interface CardDetailProps {
    experience: IExperience;
    onBack: () => void;
    height: number | null;
}
export function CardDetail(props: CardDetailProps){ 

    function getHeight(){
        if(props.height) return props.height;
        return undefined;
    }

    return(
        <div style={{height: getHeight()}}>
        <Box gap="medium">
            <Box direction="row" gap="medium">
                <Button plain icon={<Previous />} onClick={props.onBack} />
                <Text>{props.experience.name}</Text>
            </Box>
            
            <Text>{props.experience.description}</Text>
        </Box>
        </div>
    )
}
