import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Navigator from './final/CA/stackNavigation_CA.js';

const App  =() =>{
    return(
        <NavigationContainer>
            <Navigator/>
        </NavigationContainer>
    )
}

export default App;
