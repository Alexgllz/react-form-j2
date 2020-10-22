import React from 'react';
import { Services } from './http-services';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { ToDo } from './pages/ToDo';
import { Posts } from './pages/Posts';
import { Persistent } from './pages/Persistent';
import './data/db';
import { Infos } from './Infos';
import {InfosPosts} from './Infos';

//TODO changer les states: récupére allCountries et allPosts

export class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allCountries: [],
            currentCountry: null,
            allPosts: [],
            currentPosts: null
        };
    }
    onCountryClick = (country) => {
        this.setState({
            currentCountry: country
        });
    };
    render() {
        return <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home
                        onCountryClick={this.onCountryClick}
                        allCountries={this.state.allCountries}
                        currentCountry={this.state.currentCountry} />
                </Route>
                <Route render={props => <ToDo  {...props} />} exact path="/todo" />
                <Route render={props => <Persistent  {...props} />} exact path="/persistent" />
                <Route 
                    render={props => 
                        <Posts  
                            allPosts={this.state.allPosts}
                            currentPosts={this.state.currentPosts} 
                        />} 
                        exact path="/Posts" />
                        {/* <InfosPosts currentPosts={this.state.currentPosts}/> */}
            </Switch>
        </BrowserRouter>
    }
    componentDidMount() {
        Services.getAllCountries().then((results) => {
            this.setState({
                allCountries: results.data
            });
        });
        Services.getAllPosts().then((resultsPosts) =>{
            this.setState({
                allPosts: resultsPosts.data
                
            });
            console.table(resultsPosts.data)
        });
    }
}