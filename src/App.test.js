import React from 'react';
import App from './App'
import { render, wait, fireEvent } from '@testing-library/react';
import {fetchShow as mockFetchShow } from './api/fetchShow';

jest.mock("./api/fetchShow");

const mockData = {
    data:{
        name: "Stranger Things",
        image: {medium: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg", original: "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"},
        summary: "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
        _embedded: { episodes:[
            {id: 553946,
            url: "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
            name: "Chapter One: The Vanishing of Will Byers",
            season: 1,
            number: 1,
            airdate: "2016-07-15",
            airtime: "",
            airstamp: "2016-07-15T12:00:00+00:00",
            runtime: 60,
            image: {medium: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg", original: "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"},
            summary: "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>"},
            
            {id: 909345,
            url: "http://www.tvmaze.com/episodes/909345/stranger-things-2x05-chapter-five-dig-dug",
            name: "Chapter Five: Dig Dug",
            season: 2,
            number: 5,
            airdate: "2017-10-27",
            airtime: "",
            airstamp: "2017-10-27T12:00:00+00:00",
            runtime: 60,
            image: {medium: "http://static.tvmaze.com/uploads/images/medium_landscape/132/332050.jpg", original: "http://static.tvmaze.com/uploads/images/original_untouched/132/332050.jpg"},
            summary: "<p>Jim is trapped in the Upside Down, and Joyce enlists Bob to help find him. Meanwhile, Nancy and Jonathan go to Murray, and El learns about the circumstances surrounding her birth.</p>"}
        ]}
    }
};

test("App fetches data and displays title on page", async () => {
    mockFetchShow.mockResolvedValueOnce(mockData);
    const { getByText } = render(<App />);

    getByText(/Fetching data.../i);
    await wait();
    getByText(/stranger things/i);

});

test("Season select renders and onclick shows season select options", async () => {
    mockFetchShow.mockResolvedValueOnce(mockData);
    const { getByText, findAllByRole } = render(<App />);
    
    getByText(/Fetching data.../i);
    await wait();
    
    fireEvent.click(getByText(/select a season/i));
    
    findAllByRole(/option/i);
    

});



    