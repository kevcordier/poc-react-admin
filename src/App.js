import React, { Component } from 'react';
import buildGraphQLProvider from 'ra-data-graphql-simple';
import { Admin, Resource } from 'react-admin';

import { PlanetList, PlanetEdit, PlanetCreate } from './planets';
import { AstronautList, AstronautEdit, AstronautCreate } from './astronauts';

class App extends Component {
    constructor() {
        super();
        this.state = { dataProvider: null };
    }
    componentDidMount() {
        buildGraphQLProvider({ clientOptions: { uri: 'http://astronaut.poc-radio.com/graphql' }})
            .then(dataProvider => this.setState({ dataProvider }));
    }

    render() {
        const { dataProvider } = this.state;

        if (!dataProvider) {
            return <div>Loading</div>;
        }

        return (
            <Admin dataProvider={dataProvider}>
                <Resource name="Planet" list={PlanetList} edit={PlanetEdit} create={PlanetCreate} />
                <Resource name="Astronaut" list={AstronautList} edit={AstronautEdit} create={AstronautCreate} />
            </Admin>
        );
    }
}

export default App;
