import React from 'react';
import Episodes from './Episodes';
import { render } from '@testing-library/react';
import { exportAllDeclaration } from '@babel/types';


const mockData = [
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
]

test("Check of Episodes shows content when props change", () => {
    const { queryAllByTestId, rerender } = render(
        <Episodes episodes={[]} />    
    );

    expect(queryAllByTestId("episode")).toStrictEqual([]);

    rerender(
        <Episodes episodes={mockData} />
    );

    expect(queryAllByTestId("episode")).toHaveLength(2);

});