import { Box, ChakraProvider, Grid, theme} from "@chakra-ui/react";
import {ColorModeSwitcher} from "../../ColorModeSwitcher";

import * as React from "react";


export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Box textAlign="center" fontSize="xl">
                <Grid minH="100vh" p={3}>
                    <ColorModeSwitcher justifySelf="flex-end" />
                </Grid>
            </Box>
        </ChakraProvider>
    )
};