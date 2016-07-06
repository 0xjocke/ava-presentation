// Import React
import React from 'react'

// Import Spectacle Core tags
import {
    Appear,
    BlockQuote,
    Cite,
    CodePane,
    Deck,
    Fill,
    Heading,
    Image,
    Layout,
    Link,
    ListItem,
    List,
    Markdown,
    Quote,
    Slide,
    Spectacle,
    Text
} from 'spectacle'
import CodeSlide from 'spectacle-code-slide'


// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'

// Import theme
import createTheme from 'spectacle/lib/themes/default'


// Require CSS
require('normalize.css')
require('spectacle/lib/themes/default/index.css')


const images = {
    city: require('../assets/city.jpg'),
    kat: require('../assets/kat.png'),
    logo: require('../assets/formidable-logo.svg'),
    markdown: require('../assets/markdown.png'),
    unitTest: require('../assets/unittest-and-integration.gif'),
    unitTest1: require('../assets/unittest-and-integration1.gif'),
    avaIsFast: require('../assets/ava-is-fast.png'),
    powerAssert: require('../assets/power-assert.png'),
    nodeAssert: require('../assets/node-assert.png'),
    tapOutput: require('../assets/tap-output.png'),
    slowDown: require('../assets/slow.gif'),
}

preloader(images)

const theme = createTheme({
    primary: '#122b45',
    secondary: '#f08d49',
})

export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={['zoom', 'slide']} transitionDuration={500}>
                    <Slide
                        transition={['zoom']}
                        bgColor="primary"
                        notes={`<ul>
                                <li>Mostly frontend data visualisations</li>
                                <li>Some node</li>
                                <li>AVA</li>
                                <li>Unit test in general</li>
                                </ul>
                                `}
                        >
                        <Heading size={1} caps lineHeight={1} textColor="secondary">
                            AVA
                        </Heading>
                        <Heading size={1} fit caps textColor="secondary">
                            A futuristic test runner 🚀
                        </Heading>
                        <Link href="https://twitter.com/bachstatter">
                            <Text bold caps textColor="tertiary"> @bachstatter</Text>
                        </Link>
                        <Link href="http://small.mu/">
                            <Text bold caps textColor="tertiary"> Small Multiples</Text>
                        </Link>
                    </Slide>
                    <Slide
                        transition={['slide']}
                        bgColor="secondary"
                        notes={`
              Unit test = testing small part.   |
              In JS module or func   |
              No interaction
              `}
                        >
                        <Heading size={1} style={{ textAlign: 'left' }} textColor="primary">
                            {'Unit tests'}
                        </Heading>
                        <Heading size={1} style={{ textAlign: 'left' }} textColor="primary">
                            {'No interaction'}
                        </Heading>
                        <Heading size={1} style={{ textAlign: 'left' }} textColor="primary">
                            {'Module or function'}
                        </Heading>
                    </Slide>
                    <Slide
                        transition={['zoom', 'slide']}
                        bgImage={images.unitTest1.replace('/', '') }
                        notes="Unit tests are powerful but not bulletproof. All test might pass but application does not behave as you expect it too."
                        />
                    <Slide
                        transition={['slide']}
                        bgColor="secondary"
                        notes={`Which is why integration and manual testing is important as well. That said I'm here to talk about AVA which focus on UNIT tests.`}
                        >
                        <Heading size={2} style={{ textAlign: 'left' }} textColor="primary">
                            👌 Integration test
                        </Heading>
                        <Heading size={2} style={{ textAlign: 'left' }} textColor="primary">
                            {'👍 Manual test '}
                        </Heading>
                        <Heading size={2} style={{ textAlign: 'left' }} textColor="primary">
                            {'🏹 Eliminate those bugs'}
                        </Heading>
                    </Slide>
                    <Slide
                        notes={`
            Future self - happy <br>
            Current co-worker  thankful <br>
            Future co-worker - A easier first week
            `}
                        >
                        <Heading fit caps size={1} textColor="secondary">
                            friends you'll make
                        </Heading>
                        <List>
                            <ListItem>
                                {'Future self'}
                            </ListItem>
                            <ListItem>
                                {'Current co-workers'}
                            </ListItem>
                            <ListItem>
                                {'Future co-workers'}
                            </ListItem>
                        </List>
                    </Slide>
                    <Slide
                        transition={['zoom', 'fade']}
                        bgColor="secondary"
                        notes="Calling a function with a value and always know what you gonna get back is a good feeling."
                        >
                        <Heading textColor="primary" caps fit>Better code</Heading>
                        <Layout>
                            <Fill>
                                <Heading size={5} caps textColor="primary" margin={10}>
                                    Small functions
                                </Heading>
                            </Fill>
                            <Fill>
                                <Heading size={5} caps textColor="primary" margin={10}>
                                    Pure functions
                                </Heading>
                            </Fill>
                        </Layout>
                    </Slide>
                    <Slide
                        notes="Trying to sell you something you already agree with. Lets move on to AVA"
                        >
                        <Heading size={1} caps fit textColor="secondary" margin={10}>
                            {'🕹 Framework talking time 🕹'}
                        </Heading>
                    </Slide>
                    <Slide
                        transition={['zoom', 'slide']}
                        >
                        <Heading size={1} caps fit textColor="secondary" margin={10}>
                            {'Popular framework in Nodeland'}
                        </Heading>
                        <List>
                            <ListItem>
                                {'Mocha'}
                            </ListItem>
                            <ListItem>
                                {'Jasmine'}
                            </ListItem>
                            <ListItem>
                                {'AVA 🚀'}
                            </ListItem>
                            <ListItem>
                                {'Tape'}
                            </ListItem>
                        </List>
                    </Slide>
                    <Slide
                        transition={['zoom', 'slide']}
                        notes="Thats what this talk is going to tell you."
                        >
                        <Heading size={1} caps fit textColor="secondary" margin={10}>
                            {'Why AVA?'}
                        </Heading>
                    </Slide>
                    <CodeSlide
                        transition={['zoom', 'slide']}
                        lang="js"
                        notes="Start by comparing AVA to Mocha"
                        code={require('raw!./ava-vs-mocha') }
                        ranges={[
                            { loc: [0, 0], title: 'AVA vs Mocha' },
                            { loc: [0, 1], note: 'Import AVA' },
                            { loc: [2, 5], note: 'Get an object with assertion functions.' },
                            { loc: [6, 7], note: 'Mocha with Chai' },
                            { loc: [8, 9], note: 'Where did you come from describe?' },
                            { loc: [8, 14], note: 'eslint no-undef rule won\'t like this.' }
                        ]}
                        />
                    <Slide bgColor="secondary">
                        <Heading size={1} caps fit textColor="primary" margin={10}>
                            {'🤔 Nice, but not a dealbreaker...'}
                        </Heading>
                    </Slide>
                    <Slide bgColor="primary">
                        <Heading size={2} caps fit textColor="sec" margin={10}>
                            {'AVA is fast'}
                        </Heading>
                        <Heading size={2} caps fit textColor="sec" margin={10}>
                            {'Runs your test concurrently'}
                        </Heading>
                    </Slide>
                    <Slide>
                        <Heading textColor="secondary" size={4} caps margin={10}>
                            {'Mocha ➡ AVA'}
                        </Heading>
                        <Image width="100%" src={images.avaIsFast}/>
                    </Slide>
                    <Slide bgColor="secondary" transition={['zoom', 'fade']} >
                        <Heading size={2} textColor="primary" fit>
                            {'But, JavaScript is single-threaded?'}
                        </Heading>
                    </Slide>
                    <Slide
                        transition={['zoom', 'slide']}
                        >
                        <Heading size={2} textColor="secondary" caps>
                            {'1 file === 1 process'}
                        </Heading>
                        <List>
                            <ListItem>
                                {'Speed.'}
                            </ListItem>
                            <ListItem>
                                {'Isolated environment.'}
                            </ListItem>
                            <ListItem>
                                {'No cleaning neccesary'}
                            </ListItem>
                        </List>
                    </Slide>
                    <Slide bgColor="primary">
                        <Heading size={2} textColor="secondary" caps>
                            {'Babel'}
                        </Heading>
                        <List textColor="secondary">
                            <ListItem>{'Using Node 6?'}</ListItem>
                            <ListItem>{'Still missing some upcoming features?'}</ListItem>
                            <ListItem>{'AVA comes with Babel included '}</ListItem>
                        </List>
                    </Slide>
                    <Slide bgColor="primary">
                        <Heading size={2} textColor="secondary" caps>
                            {'Babel options'}
                        </Heading>
                        <List>
                            <ListItem>{'No config. (ES2015 + Stage-2)'}</ListItem>
                            <ListItem>{'Use your own config.'}</ListItem>
                            <ListItem>{'Tell AVA which Babel presets to use'}</ListItem>
                        </List>
                    </Slide>
                    <CodeSlide
                        transition={['zoom', 'slide']}
                        lang="js"
                        code={require('raw!./ava-async') }
                        ranges={[
                            { loc: [0, 5], title: 'ASYNC AWAIT' },
                            { loc: [1, 2], },
                            { loc: [2, 3], },
                            { loc: [0, 5] },
                        ]}
                        />
                    <CodeSlide
                        transition={['zoom', 'slide']}
                        lang="js"
                        code={require('raw!./ava-callback') }
                        ranges={[
                            { loc: [0, 6], title: 'Node style callback' },
                            { loc: [4, 5], note: 'Have to manually call t.end()' },
                            { loc: [8, 12], note: 't.end is smart' },
                        ]}
                        />
                    <CodeSlide
                        transition={['zoom', 'slide']}
                        lang="js"
                        code={require('raw!./ava-handy') }
                        ranges={[
                            { loc: [0, 4], title: 'Handy stuff' },
                            { loc: [5, 6], title: 'Handy stuff' },
                        ]}
                        />
                    <CodeSlide
                        transition={['zoom', 'slide']}
                        lang="js"
                        code={require('raw!./ava-test-other') }
                        ranges={[
                            { loc: [0, 4], title: '"Normal things"' },
                        ]}
                        />
                    <CodeSlide
                        transition={['zoom', 'slide']}
                        lang="js"
                        code={require('raw!./ava-assertion') }
                        ranges={[
                            { loc: [0, 6], title: 'Assertions' },
                        ]}
                        />
                    <Slide>
                        <Heading size={4} textColor="secondary" caps>
                            {'Power Assert'}
                        </Heading>
                        <Image width="50%" src={images.powerAssert}/>
                        <Heading size={4} textColor="secondary" caps>
                            {'Node Assert'}
                        </Heading>
                        <Image width="50%" src={images.nodeAssert}/>
                    </Slide>
                    <Slide
                        transition={['zoom', 'slide']}
                        bgColor="secondary">
                        <Heading size={1} textColor="primary" fit caps>
                            {'🏁 Start?'}
                        </Heading>
                    </Slide>
                    <Slide transition={['zoom', 'fade']} bgColor="primary">
                        <Heading size={1} textColor="secondary" caps>CLI</Heading>
                        <Layout>
                            <Fill>
                                <Heading size={5} caps textColor="secondary" margin="5px">
                                    {'✅ Good defaults'}
                                </Heading>
                            </Fill>
                            <Fill>
                                <Heading size={5} caps textColor="secondary" margin="5px">
                                    {'✅ Smart config'}
                                </Heading>
                            </Fill>
                        </Layout>
                    </Slide>
                    <Slide
                        transition={['zoom', 'slide']}
                        >
                        <Heading size={1} textColor="secondary" fit caps>
                            {'Good default'}
                        </Heading>
                        <List>
                            <ListItem>
                                {'node_modules, helpers'}
                            </ListItem>
                            <ListItem>
                                {'_ files'}
                            </ListItem>
                            <ListItem>
                                {'Folders are recursed'}
                            </ListItem>
                        </List>
                    </Slide>
                    <CodeSlide
                        transition={['zoom', 'slide']}
                        lang="js"
                        code={require('raw!./ava-package-json') }
                        ranges={[
                            { loc: [0, 10], title: 'Smart Config' },
                            { loc: [10, 15] },
                            { loc: [15, 20] },
                        ]}
                        />
                    <Slide bgImage={images.tapOutput.replace('/', '') } />
                    <Slide
                        transition={['zoom', 'slide']}
                        bgImage={images.slowDown.replace('/', '') }
                        notes="I put this one in so I dont speak to fast"
                        />
                    <Slide
                        transition={['zoom', 'slide']}
                        bgColor="primary"
                        >
                        <Heading size={4} textColor="secondary" caps>
                            {'Watch mode'}
                        </Heading>
                        <Heading size={1} textColor="secondary" fit caps>
                            {'Tracks dependencies'}
                        </Heading>
                        <List style={{ display: 'inline-block', margin: 'auto' }}>
                            <ListItem>
                                {'Respect t.only'}
                            </ListItem>
                            <ListItem>
                                {'R + Enter'}
                            </ListItem>
                        </List>
                    </Slide>
                    <CodeSlide
                        transition={['zoom', 'slide']}
                        lang="js"
                        code={'npm i nyc -D \nnyc ava'}
                        ranges={[
                            { loc: [0, 2], title: 'Code coverage' }
                        ]}
                        />
                    <Slide
                        transition={['zoom', 'slide']}
                        bgColor="primary">
                        <Heading size={1} fit caps>
                            <Link
                                textColor="secondary"
                                href="https://github.com/sindresorhus/ava/tree/master/docs/recipes"
                                >
                                {'AVA Recipies'}
                            </Link>
                        </Heading>
                        <List style={{ display: 'inline-block', margin: 'auto' }}>
                            <ListItem>
                                <Link
                                    textColor="secondary"
                                    style={{ textDecoration: 'underline' }}
                                    href="https://github.com/sindresorhus/ava/blob/master/docs/recipes/browser-testing.md"
                                    >
                                    {'Browser testing'}
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                    textColor="secondary"
                                    style={{ textDecoration: 'underline' }}
                                    href="https://github.com/sindresorhus/ava/blob/master/docs/recipes/react.md"
                                    >
                                    {'React'}
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                    textColor="secondary"
                                    style={{ textDecoration: 'underline' }}
                                    href="https://github.com/sindresorhus/ava/blob/master/docs/recipes/code-coverage.md"
                                    >
                                    {'Code Coverage'}
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                    textColor="secondary"
                                    style={{ textDecoration: 'underline' }}
                                    href="https://github.com/avajs/ava/blob/master/docs/recipes/endpoint-testing.md"
                                    >
                                    {'Endpoint testing'}
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                    textColor="secondary"
                                    style={{ textDecoration: 'underline' }}
                                    href="https://github.com/avajs/ava/blob/master/docs/recipes/typescript.md"
                                    >
                                    {'TypeScript'}
                                </Link>
                            </ListItem>
                        </List>
                    </Slide>
                    <Slide
                        transition={['zoom', 'slide']}
                        notes={`
                            concurrency might be needed for your CI plan.
                            `}
                        >
                        <Heading size={1} textColor="secondary" fit caps>
                            Common pitfalls
                        </Heading>
                        <List>
                            <ListItem>
                                Return promises
                            </ListItem>
                            <ListItem>
                                Call t.end
                            </ListItem>
                            <ListItem>
                                Set concurrency
                            </ListItem>
                        </List>
                    </Slide>
                    <Slide
                        transition={['slide']}
                        notes={`
                                code mods, snippet for a lot of editor
                            `}
                        >
                        <Heading size={1} textColor="secondary" fit caps>
                            Other useful stuff
                        </Heading>
                        <List>
                            <ListItem>
                                AVA, not Ava or ava.Pronounced /ˈeɪvə/ ay-və.
                            </ListItem>
                            <ListItem>
                                Eslint-plugin-ava
                            </ListItem>
                            <ListItem>
                                https://github.com/avajs/awesome-ava
                            </ListItem>
                        </List>
                    </Slide>

                    <Slide
                        transition={['zoom', 'slide']}
                        >
                        <Heading size={1} fit caps textColor="secondary">
                            {'Thanks'}
                        </Heading>
                        <Link textColor="white" bold caps href="https://twitter.com/bachstatter">
                            @bachstatter
                        </Link>
                    </Slide>
                </Deck>
            </Spectacle >
        )
    }
}
