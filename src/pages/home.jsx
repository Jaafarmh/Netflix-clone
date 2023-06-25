import React from 'react';
import Main from '../components/main';
import requests from '../requests';
import Row from '../components/row';

const Home = () => {
    return (
       <>
        <Main />
        <Row rowId='1' title='Now Playing' fetchUrl={requests.requestNowPlaying} />
        <Row rowId='2' title='Upcoming' fetchUrl={requests.requestUpcoming} />
        <Row rowId='3' title='Popular' fetchUrl={requests.requestPopular} />
        <Row rowId='4' title='Top Rated' fetchUrl={requests.requestTopRated} />
       </>
    );
}

export default Home;
