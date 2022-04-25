import React, { useState } from "react";
import './App.css';
import { Grommet, Box, Button, Heading, Collapsible, BoxExtendedProps, ResponsiveContext, Layer, Text } from 'grommet';
import { FormClose, Menu} from 'grommet-icons';
import { Social } from "./Social";
import { theme } from "./GlobalTheme";
import { CardGrid } from "./CardGrid";
import { CardDetail } from "./CardDetail";
import { IExperience } from "./data/cardData";


const AppBar = (props: JSX.IntrinsicAttributes & BoxExtendedProps & { children?: React.ReactNode; }) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [cardSelected, setCardSelected] = useState<IExperience|null>(null);
  const [contentHeight, setContentHeight] = useState<number|null>(null);

  function getContentDirection(size: string) {
    if(size == 'small') return 'column'
    return 'row'
  }
  function isMobile() {
    return window.innerWidth < 1536;
  } 

  const toggleDisplay = (card: IExperience|null, height?: number|undefined) => {
    if(height) setContentHeight(height)
    setCardSelected(card);
  }

  return (
      <Grommet theme={theme} full={!isMobile()}>  
      <ResponsiveContext.Consumer>
        {size => (
          
          <Box fill background={{image: 'url(flamingo.jpg)'}} flex="grow">
          
            <AppBar>
              <Heading level='3' margin='none'>thryngabriel.com</Heading>
              <Button icon={<Menu/>} onClick={() => {setShowSidebar(!showSidebar)}} />
            </AppBar>

            <Box direction={getContentDirection(size)} flex>
              <Box flex align='center' justify="center" >
                <Box border={{color: "card_over", size: "large"}} background={"white"} pad="large" >
                <Heading level={2} size={'large'}>
                  {'Kathryn Gabriel'}
                </Heading> 
                <Text alignSelf="center">Hi, I'm Katie. I like developing software.</Text>
                <Heading alignSelf="center" level={4} size={'small'} color={"#d470a2"}>k@thryngabriel.com</Heading>
                </Box>
              </Box>
              <Box flex align='center' justify='center' >
                <Box pad='large' fill justify="center" height={'xlarge'}>
                  <Box background={"white"} round pad="medium" border={{color: "#d470a2", size: "medium"}} overflow={{vertical: 'auto'}} >
                    {cardSelected == null ? (
                      <CardGrid clickFunc={toggleDisplay}/> 
                    ):
                      <CardDetail experience={cardSelected} onBack={() => toggleDisplay(null)} height={contentHeight}/>
                    }
                  </Box>
                </Box>
              </Box>
              {(!showSidebar || size !== 'small') ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box
                    flex
                    width='medium'
                    background='light-2'
                    elevation='small'
                    align='center'
                    justify='center'
                  >
                    please hire me
                  </Box>
                </Collapsible>
              ) : (
                <Layer>
                  <Box
                    background='light-2'
                    tag='header'
                    justify='end'
                    align='center'
                    direction='row'
                  >
                    <Button
                      icon={<FormClose />}
                      onClick={() => setShowSidebar(false)}
                    />
                  </Box>
                  <Box
                    fill
                    background='light-2'
                    align='center'
                    justify='center'
                  >
                    please hire me
                  </Box>
                </Layer>
              )}
            </Box>
            <Social />
          </Box>
          
        )}
      </ResponsiveContext.Consumer>
      </Grommet>
  );
}

export default App;
