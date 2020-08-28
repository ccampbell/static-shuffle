const staticShuffle = require('./main.js');

export function testStaticShuffle(t) {
    const start = ['Apple', 'Banana', 'Blueberry', 'Orange', 'Strawberry', 'Watermelon'];
    const suffled = staticShuffle(start, 'some seed');

    t.assert(suffled != start);
    t.assert(suffled.length === start.length);

    // Make sure the order is the same when calculated a second time
    const suffled2 = staticShuffle(start, 'some seed');
    t.assert(suffled == suffled2);

    // Make sure with a new seed it is different
    const suffled3 = staticShuffle(start, 'some other seed');
    t.assert(suffled3 != start);
    t.assert(suffled3 != suffled2);

    // Make sure the arrays contains all the same elements as the starting array
    t.assert(suffled.sort() == start);
    t.assert(suffled3.sort() == start);
}

export function testWithLargeArray(t) {
    const start = [...Array(500).keys()];
    const shuffled = staticShuffle(start, 'some other seed');
    t.assert(start.length === shuffled.length);
    t.assert(start != shuffled);
}
