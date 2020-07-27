import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import TabScreen from '../screens/TabScreen'
import CustomDomain from '../screens/CustomDomain'
import { Container, Header, Title, Button, Left, Right, Body, Icon, Text} from 'native-base';

const screens = {
    Home: {
        screen: TabScreen,
        navigationOptions: {
            header: null,
        }
    },
    Domain: {
        screen: CustomDomain,
        navigationOptions: {
            header: null,
        }
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)