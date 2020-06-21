import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css' //added this line , otherwise display doesnt come as required
import './index.css'
import { withRouter } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import TextTruncate from 'react-text-truncate';
import { FaRegBookmark, FaBookmark, FaBlackTie } from 'react-icons/fa';//for bookmark symbol
import { MdShare } from 'react-icons/md';
import { MdExpandMore, MdExpandLess, MdDelete } from 'react-icons/md'
import { IconContext } from "react-icons"; //for customising the react icons
import Switch from "react-switch";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Modal from 'react-bootstrap/Modal'
import commentBox from 'commentbox.io';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import BounceLoader from "react-spinners/BounceLoader";
import Col from 'react-bootstrap/Col'
import _ from "lodash";
import AsyncSelect from 'react-select/async';
import { animateScroll as scroll } from 'react-scroll'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import Image from 'react-bootstrap/Image'

import {
    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton
} from "react-share";
import {
    BrowserRouter as Router,
    Switch as RouteSwitch,
    Route,
    NavLink,
    Link

} from "react-router-dom";

import {
    EmailIcon,
    FacebookIcon,
    TwitterIcon
} from "react-share";
import ReactTooltip from 'react-tooltip';

function setSectionBg(sectionName) {
    sectionName = sectionName.toUpperCase()
    if (sectionName == "WORLD")
        return (<span className="world">{sectionName}</span>)
    else if (sectionName == "POLITICS")
        return (<span className="politics">{sectionName}</span>)
    else if (sectionName == "BUSINESS")
        return (<span className="business">{sectionName}</span>)
    else if (sectionName == "TECHNOLOGY")
        return (<span className="technology">{sectionName}</span>)
    else if (sectionName == "SPORT")
        return (<span className="sports">{sectionName + "S"}</span>)
    else if (sectionName == "SPORTS")
        return (<span className="sports">{sectionName}</span>)
    else if (sectionName == "HEALTH")
        return (<span className="health">{sectionName}</span>)
    else if (sectionName == "GUARDIAN")
        return (<span className="guardianBg">{sectionName}</span>)
    else if (sectionName == "NYTIMES")
        return (<span className="nytimesBg">{sectionName}</span>)
    else {
        return (<span className="otherSection">{sectionName}</span>)
    }

}

function Example(props) {
    const [show, setShow] = React.useState(false);
    const hashtagText = ["CSCI_571_NewsApp"]

    function handleShow(event) {
        console.log(event);
        event.stopPropagation();
        event.preventDefault();
        setShow(true);
        console.log("showing article");
    }
    function handleClose(event) {
        console.log(event);
        event.stopPropagation();
        event.preventDefault();
        setShow(false);
        console.log("clicked close button")
    }
    // function handleCloseModal(){
    //     setShow(false);
    // }
    //function also works
    const handleCloseModal = () => setShow(false);
    //const handleShow = () => setShow(true);

    return (
        <>
            <MdShare className="button" onClick={(event) => { handleShow(event) }}> </MdShare>

            {
                //   <Modal size="sm" show={show} onHide={handleClose}>
            }
            {
                console.log("share url")

            }
            {
                console.log(props.shareUrl)
            }

            <Modal size="md" show={show} onHide={handleCloseModal}>
                <Modal.Header closeButton onClick={handleClose}>
                    {

                        // !props.bookmarkPage &&
                        // {
                        //     <Modal.Title className="popupTitle">{props.title}</Modal.Title>
                        // }

                    }
                    {

                        !props.bookmarkPage &&

                        <div className="popupTitle">{props.title}</div>


                    }
                    {
                        props.bookmarkPage &&
                        <div>
                            <div className="popupSource">

                                {props.newsSrc}
                            </div>
                            <div className="popupTitle">

                                {props.title}
                            </div>

                            {
                                //         <Modal.Title>
                                //     //     <Container fluid>
                                //     //     <Row>
                                //     //         <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                //     //             {props.newsSrc}
                                //     //         </Col>
                                //     //     </Row>
                                //     //     <Row>
                                //     //         <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                //     //             {props.title}
                                //     //         </Col>

                                //     //     </Row>
                                //     // </Container>

                                // </Modal.Title>
                            }


                        </div>
                    }

                </Modal.Header>

                <Modal.Body>
                    <Container fluid>
                        <Row>
                            <Col className="popupShareText">Share Via</Col>
                        </Row>
                        <div className="popupRow">
                            <div className="popupColumn">
                                <FacebookShareButton url={props.shareUrl} hashtag="#CSCI_571_NewsApp"
                                    onClick={(event) => { event.stopPropagation(); event.preventDefault(); }}>
                                    <FacebookIcon size={40} round={true} />
                                </FacebookShareButton>
                            </div>
                            <div className="popupColumn">
                                <TwitterShareButton url={props.shareUrl} hashtags={hashtagText}
                                    onClick={(event) => { event.stopPropagation(); event.preventDefault(); }}>
                                    <TwitterIcon size={40} round={true} />

                                </TwitterShareButton>
                            </div>
                            <div className="popupColumn">
                                <EmailShareButton url={props.shareUrl} subject="#CSCI_571_NewsApp"
                                >
                                    <EmailIcon size={40} round={true} />
                                </EmailShareButton>
                            </div>
                        </div>
                        {/* <Row>
                            <Col sm className="coluu"><FacebookShareButton><FacebookIcon size={33} round={true} /></FacebookShareButton></Col>
                            <Col sm className="coluu"><TwitterShareButton><TwitterIcon size={33} round={true} /></TwitterShareButton></Col>
                            <Col sm className="coluu"><EmailShareButton><EmailIcon size={33} round={true}/></EmailShareButton></Col>
                            
                        </Row>  */}
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}


class Navigation extends Component {
    // static propTypes = {
    //     history: PropTypes.object.isRequired
    //   }
    constructor() {

        super();
        this.state = {
            checked: true, visibility: true, viewAllCards: true, showNY: false, displayFavs: false, showGuardian: true,
            showBookmarked: false, dummy: "", results: [], selectedResult: "", showSearch: false,
            switchVisible: false

        };
        this.flag = null
        this.inBookmarkPage = null
        this.inSeachPage = null
        this.selectedOption = ""
        this.handleSwitchChange = this.handleSwitchChange.bind(this);
        this.handleCardClick = this.handleCardClick.bind(this);
        this.handleFavClick = this.handleFavClick.bind(this);
        this.displayFavourites = this.displayFavourites.bind(this);

    }
    handleSwitchChange(checked) {
        localStorage.setItem("checked", JSON.stringify(checked))
        console.log(localStorage)
        this.setState({ checked })
    }

    handleCardClick() {
        // console.log("ooo")
        // console.log(event);
        // event.stopPropagation();
        // event.preventDefault()

        //before
        this.setState({ visibility: false })
    }
    handleFavClick() {
        this.setState({ showBookmarked: false })
        this.setState({ visibility: true })
    }
    displayFavourites(event) {
        console.log("came inside displaying favs")
        // console.log("inside this")
        event.stopPropagation();
        event.preventDefault();

        console.log("two")
        this.setState({ showBookmarked: true })
        this.setState({ visibility: false })
        console.log(this.state.showBookmarked)
    }

    componentDidMount() {
        //  localStorage.setItem("haha", JSON.stringify(false))

        if (localStorage.getItem("checked") == null) {
            localStorage.setItem("checked", JSON.stringify(true))
            console.log(localStorage)
            this.setState({ checked: true })
        }


    }
    handleSearchChange = async (event, { value }) => {
        console.log("inside handle change")
        console.log(event)
        console.log({ value })
        try {
            const response = await fetch(
                `https://api.cognitive.microsoft.com/bing/v7.0/suggestions?mkt=en-US&q=${event}`,
                {
                    headers: {
                        "Ocp-Apim-Subscription-Key": "72f79c91d9f24f4b9f6ca16e19e97290"
                    }
                }
            );
            const data = await response.json();
            console.log("response")
            console.log(response)
            console.log("data")
            console.log(data)
            const resultsRaw = data.suggestionGroups[0].searchSuggestions;
            console.log(resultsRaw)
            const results = resultsRaw.map(result => ({
                value: result.displayText,
                label: result.displayText
            }
            ));
            //this.setState({ results });
            console.log(results)
            this.setState({ results: results })
            console.log(this.state.results)
            return results;
        } catch (error) {
            console.error(`Error fetching search ${value}`);
        }
    };

    handleResultSelect = selectedResult => {
        console.log(selectedResult.value);
        console.log("inside handle result select");
        this.setState({ selectedResult });
        this.setState({ showSearch: true })
        this.setState({ visibility: false })
        this.props.history.push(`/search:${selectedResult.label}`)

    }

    render() {

        if (window.location.href == "http://reactappsam.azurewebsites.net/"
            || window.location.href == "http://reactappsam.azurewebsites.net"
            || window.location.href == "http://reactappsam.azurewebsites.net/world"
            || window.location.href == "http://reactappsam.azurewebsites.net/politics"
            || window.location.href == "http://reactappsam.azurewebsites.net/business"
            || window.location.href == "http://reactappsam.azurewebsites.net/technology"
            || window.location.href == "http://reactappsam.azurewebsites.net/sports") {
            this.flag = true;
        }
        else {
            this.flag = false;
        }
        if (window.location.href == "http://reactappsam.azurewebsites.net/bookmark") {
            this.inBookmarkPage = true
        }
        else {
            this.inBookmarkPage = false
        }
        this.windowLocation = window.location.href
        console.log("locationnn")
        console.log(this.windowLocation)
        console.log(this.flag)
        if (this.windowLocation.includes("http://reactappsam.azurewebsites.net/search")) {
            this.inSearchPage = true
            console.log("IN THE SEARCH PAGE")
        }
        else {
            this.inSearchPage = false

        }

        return (
            <>
                
                    
                        <Navbar bg="dark" className="blueGradient" expand="lg" variant="dark" sticky="top">
                            <div className="keywordSelect">
                                {
                                    this.inSearchPage &&

                                    <AsyncSelect
                                        cacheOptions
                                        value={this.state.selectedResult}
                                        placeholder="Enter keyword .."
                                        loadOptions={_.debounce(this.handleSearchChange, 800, {
                                            leading: true

                                        })}
                                        onChange={this.handleResultSelect}

                                    />
                                }

                                {
                                    !this.inSearchPage &&
                                    <AsyncSelect
                                        cacheOptions
                                        value=""
                                        placeholder="Enter keyword .."
                                        loadOptions={_.debounce(this.handleSearchChange, 800, {
                                            leading: true

                                        })}
                                        onChange={this.handleResultSelect}

                                    />

                                }

                            </div>
                            <Navbar.Toggle>
                                {
                                    //helps in the mobile view
                                }
                            </Navbar.Toggle>

                            <Navbar.Collapse id="basic-navbar-nav">
                                {
                                    this.flag &&
                                    <Nav className="mr-auto">

                                        <Nav.Link as={NavLink} exact to="/" href="/" activeStyle={{ color: 'white' }}
                                            onClick={(event) => {
                                                //event.stopPropagation();
                                                //event.preventDefault();

                                                this.setState({ showBookmarked: false })
                                                this.setState({ visibility: true })

                                            }}>
                                            Home
                                    </Nav.Link>
                                        <Nav.Link as={NavLink} to="/world" href="/world" activeStyle={{ color: 'white' }}
                                            onClick={(event) => {
                                                //event.stopPropagation();
                                                //event.preventDefault();
                                                this.setState({ showBookmarked: false })
                                                this.setState({ visibility: true })

                                            }}>
                                            World
                                    </Nav.Link>
                                        <Nav.Link as={NavLink} to="/politics" href="/politics" activeStyle={{ color: 'white' }}
                                            onClick={(event) => {
                                                //event.stopPropagation();
                                                //event.preventDefault();
                                                this.setState({ showBookmarked: false })
                                                this.setState({ visibility: true })

                                            }}>
                                            Politics
                                    </Nav.Link>
                                        <Nav.Link as={NavLink} to="/business" href="/business" activeStyle={{ color: 'white' }}
                                            onClick={(event) => {
                                                //event.stopPropagation();
                                                //event.preventDefault();
                                                this.setState({ showBookmarked: false })
                                                this.setState({ visibility: true })

                                            }} >
                                            Business
                                    </Nav.Link>
                                        <Nav.Link as={NavLink} to="/technology" href="/technology" activeStyle={{ color: 'white' }}
                                            onClick={(event) => {
                                                //event.stopPropagation();
                                                //event.preventDefault();
                                                this.setState({ showBookmarked: false })
                                                this.setState({ visibility: true })

                                            }}>
                                            Technology
                                    </Nav.Link>
                                        <Nav.Link as={NavLink} to="/sports" href="/sports" activeStyle={{ color: 'white' }}
                                            onClick={(event) => {
                                                //event.stopPropagation();
                                                //event.preventDefault();
                                                this.setState({ showBookmarked: false })
                                                this.setState({ visibility: true })

                                            }}>
                                            Sports
                                    </Nav.Link>
                                    </Nav>
                                }
                                {
                                    !this.flag &&
                                    <Nav className="mr-auto">

                                        <Nav.Link as={NavLink} exact to="/" href="/"
                                            onClick={(event) => {
                                                //event.stopPropagation();
                                                //event.preventDefault();

                                                this.setState({ showBookmarked: false })
                                                this.setState({ visibility: true })

                                            }}>
                                            Home
                                    </Nav.Link>
                                        <Nav.Link as={NavLink} to="/world" href="/world"
                                            onClick={(event) => {
                                                //event.stopPropagation();
                                                //event.preventDefault();
                                                this.setState({ showBookmarked: false })
                                                this.setState({ visibility: true })

                                            }}>
                                            World
                                    </Nav.Link>
                                        <Nav.Link as={NavLink} to="/politics" href="/politics"
                                            onClick={(event) => {
                                                //event.stopPropagation();
                                                //event.preventDefault();
                                                this.setState({ showBookmarked: false })
                                                this.setState({ visibility: true })

                                            }}>
                                            Politics
                                    </Nav.Link>
                                        <Nav.Link as={NavLink} to="/business" href="/business"
                                            onClick={(event) => {
                                                //event.stopPropagation();
                                                //event.preventDefault();
                                                this.setState({ showBookmarked: false })
                                                this.setState({ visibility: true })

                                            }} >
                                            Business
                                    </Nav.Link>
                                        <Nav.Link as={NavLink} to="/technology" href="/technology"
                                            onClick={(event) => {
                                                //event.stopPropagation();
                                                //event.preventDefault();
                                                this.setState({ showBookmarked: false })
                                                this.setState({ visibility: true })

                                            }}>
                                            Technology
                                    </Nav.Link>
                                        <Nav.Link as={NavLink} to="/sports" href="/sports"
                                            onClick={(event) => {
                                                //event.stopPropagation();
                                                //event.preventDefault();
                                                this.setState({ showBookmarked: false })
                                                this.setState({ visibility: true })

                                            }}>
                                            Sports
                                    </Nav.Link>
                                    </Nav>
                                }

                                {
                                    <Nav>
                                        <Nav.Link as={NavLink} to="/bookmark" href="/bookmark"
                                            className="bookmark_in_nav" onClick={(event) => {
                                                //event.stopPropagation();
                                                //event.preventDefault();
                                                this.setState({ showBookmarked: true })
                                                this.setState({ visibility: false })

                                            }}
                                        >
                                            {!this.inBookmarkPage &&
                                                <>
                                                    <IconContext.Provider value={{ color: "white", className: "bookmark_nav_bar" }}>
                                                        <div>
                                                            <FaRegBookmark data-tip data-for='bookmarkicon' size={20} />
                                                        </div>
                                                    </IconContext.Provider>

                                                    <ReactTooltip id='bookmarkicon' type='dark' effect='solid' place='bottom'>
                                                        <span>Bookmark</span>
                                                    </ReactTooltip>
                                                </>
                                            }

                                            {this.inBookmarkPage &&
                                                <>

                                                    <IconContext.Provider value={{ color: "white", className: "clicked_bookmark_nav_bar" }}>
                                                        <div>
                                                            <FaBookmark data-tip data-for='bookmarkicon' size={20} />
                                                        </div>
                                                    </IconContext.Provider>
                                                    <ReactTooltip id='bookmarkicon' type='dark' effect='solid' place='bottom'>
                                                        <span>Bookmark</span>
                                                    </ReactTooltip>
                                                </>
                                            }
                                        </Nav.Link>


                                    </Nav>

                                }

                                {
                                    console.log(window.location.href)
                                }
                                {
                                    this.flag &&
                                    <>
                                        <div className="news-src">NYTimes</div>

                                        <Switch className="switch-button"
                                            // onChange={() => this.setState({ checked })}
                                            //   usePersistedState("check",this.state.checked);}}
                                            onChange={this.handleSwitchChange}
                                            checked={localStorage.getItem("checked") === "true"}
                                            //checked={this.state.checked}
                                            onColor="#3385ff"
                                            offColor="#eaeae1"
                                            uncheckedIcon={false}
                                            checkedIcon={false}
                                        />

                                        <div className="news-src">Guardian</div>
                                    </>
                                }

                            </Navbar.Collapse>
                        </Navbar>
                <div>
                    <RouteSwitch>
                        <Route path="/bookmark">
                            {
                                <Favourites showSearch={this.state.showSearch} />
                            }
                        </Route>

                        <Route path="/world">
                            {
                                <World defaultCheck={this.state.checked} onCardClick={this.handleCardClick}

                                    showSearch={this.state.showSearch} />
                            }

                        </Route>
                        <Route path="/politics">
                            {
                                <Politics defaultCheck={this.state.checked} onCardClick={this.handleCardClick}

                                    showSearch={this.state.showSearch} />
                            }
                        </Route>
                        <Route path="/business">
                            {
                                <Business defaultCheck={this.state.checked} onCardClick={this.handleCardClick}

                                    showSearch={this.state.showSearch} />
                            }
                        </Route>
                        <Route path="/technology">
                            {
                                <Tech defaultCheck={this.state.checked} onCardClick={this.handleCardClick}

                                    showSearch={this.state.showSearch} />
                            }
                        </Route>
                        <Route path="/sports">
                            {
                                <Sports defaultCheck={this.state.checked} onCardClick={this.handleCardClick}

                                    showSearch={this.state.showSearch} />
                            }
                        </Route>
                        <Route path="/search:queryKeyword"
                            component={SearchArticles} />
                        {
                            //always put general route in last
                        }
                        <Route path="/expanded/:articleData/:articleSource/:articleSection/:articleImage"
                            component={ExpandedCard} />

                        <Route path="/">
                            {
                                <General defaultCheck={this.state.checked} onCardClick={this.handleCardClick}

                                    showSearch={this.state.showSearch} />
                            }
                        </Route>

                    </RouteSwitch>
                </div>
            </>

        );
    }
}
function findTruncatedDesc(desc) {
    var desc_words = desc.split(' ')
    var no_of_spaces = desc_words.length - 1

    var cur_characters = 0
    var croppedDesc = ''
    for (var j = 0; j < desc_words.length; j++) {
        var word = desc_words[j]
        if (word.length + cur_characters > 495) {
            croppedDesc = croppedDesc.trim() + "..."
            break
        }
        croppedDesc = croppedDesc + word + ' '
        cur_characters = cur_characters + word.length + 1

    }
    return croppedDesc;
}
class General extends Component {
    constructor() {
        super();
        this.state = {
            nyTimes: null, guardian: null, viewCards: true, articleId: "", articleUrl: "", image: "",
            show: false, sectionName: "", loading: true
        };
        this.setImage = this.setImage.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.imgVariable = ""

    }
    //const [show, setShow] = React.useState(false);
    //const handleClose = () => setShow(false);
    componentDidMount() {
        const fetch = require('node-fetch');

        fetch('http://smaranitreact.us-east-1.elasticbeanstalk.com/nytimes')
            .then(res => {
                return res.json()
            })
            .then(ny_data => {
                console.log("NY")
                var jsonArticles=ny_data["nyArticles"]
                console.log(jsonArticles)
                this.setState({ nyTimes: jsonArticles })
                //this.setState({loading:false})
            });
            // .then(jsonArticles => {
            //     console.log("NY")
            //     console.log(jsonArticles)
            //     this.setState({ nyTimes: jsonArticles })
            // });

        fetch('http://smaranitreact.us-east-1.elasticbeanstalk.com/guardian')
            .then(res => {
                return res.json()
            })
            // .then(jsonArticles => {
            //     console.log("G")
            //     console.log(jsonArticles)
            //     this.setState({ guardian: jsonArticles })
            // });
            .then(guardian_data => {
                console.log("G")
                var jsonArticles=guardian_data["guardianArticles"]
                console.log(jsonArticles)
                this.setState({ guardian: jsonArticles })
                //this.setState({loading:false})
            });
    }
    setImage(urls) {
        //console.log(urls);
        var i;
        for (i = 0; i < urls.length; i++) {
            if (urls[i].width >= 2000) {
                //console.log(urls[i].url)
                return (urls[i].url)
            }
        }
        return "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg"
    }

    handleClick(event, data, news_src, section) {
        //data is articleId for guardian
        //data is entire article for NYtimes

        console.log("came here");
        console.log(event);
        //this.state.bookmarked=this.seeIfBookmarked(id)
        //console.log(this.state.bookmarked)

        event.stopPropagation();
        event.preventDefault();
        //console.log(name)
        //console.log("pppppp")
        this.props.onCardClick();
        this.state.viewCards = false;

        if (news_src == "Guardian") {
            this.setState({ articleId: data })
            this.setState({ sectionName: section })
            //this.state.articleId = data;

        }
        else {
            this.setState({ articleUrl: data.url })
            this.setState({ sectionName: section })
            this.setState({ image: this.setImage(data.multimedia) })
            //this.state.image = this.setImage(data.multimedia)
        }

    }


    render() {
        //console.log("inside render")
        // if(this.props.showSearch){
        //     this.setState({viewCard})
        // }

        return (
            <div className="articleWrapper">
                {
                    !this.state.guardian && !this.state.nyTimes &&
                    <div className="spinner">
                        <BounceLoader

                            size={60}
                            color={"#123abc"}
                            loading={this.state.loading}
                        />
                    Loading
                    </div>
                }
                {
                    console.log(this.props.defaultCheck)
                }
                {// Guardian news

                    this.state && this.state.guardian && (localStorage.getItem("checked") === "true") && this.state.viewCards &&

                    <div className="articleSample">{this.state.guardian.map((article, index) => (

                        < div key={index}>
                            <Link to={{
                                pathname: "/expanded/" + encodeURIComponent(article.id) + "/Guardian/" + encodeURIComponent(article.sectionId) + "/noimg",
                            }}
                                className="cardLink">

                                <Row className="cardRow">
                                    <Col xs={12} sm={12} md={3} lg={3} xl={3}>
                                        {
                                            <ResponsiveEmbed aspectRatio='16by9' className="cardImgBox" >
                                                <Image src={article.imgSrc} className="cardImg"></Image>
                                            </ResponsiveEmbed>
                                        }
                                        {
                                            // <img src={article.imgSrc} className="cardImg" />

                                        }
                                    </Col>
                                    <Col xs={12} sm={12} md={9} lg={9} xl={9}>
                                        <div className="cardWrapper">
                                            <div className="cardTitle">
                                                {article.webTitle}
                                                <IconContext.Provider value={{ className: "share_symbol" }}>

                                                    <Example title={article.webTitle} shareUrl={article.webUrl} />

                                                </IconContext.Provider>
                                            </div>
                                            <div className="cardDesc">
                                                {
                                                    findTruncatedDesc(article.bodyTextSummary)
                                                }

                                                {/* {<TextTruncate
                                                    line={3}
                                                    element="span"
                                                    truncateText="…"
                                                    text={article.bodyTextSummary} 
                                                
                                                //textTruncateChild={<a href="#">Read on</a>}
                                                />*/}
                                            </div>

                                            <div className="wrapper">
                                                <div className="cardDate">
                                                    {article.webPublicationDate.substring(0, 10)}
                                                </div>

                                                <div className="cardSection" align="right">
                                                    {setSectionBg(article.sectionId.toUpperCase())}
                                                </div>
                                            </div>

                                        </div>
                                    </Col>

                                </Row>
                            </Link>
                        </div>
                    ))}

                    </div>
                }


                {//NY Times
                    this.state && this.state.nyTimes && !(localStorage.getItem("checked") === "true") && this.state.viewCards &&
                    //!this.props.defaultCheck 
                    <div className="articleSample">{
                        this.state.nyTimes.map((article, index) => (

                            < div key={index}>
                                {
                                    console.log(article.url)
                                }
                                <Link to={{
                                    pathname: "/expanded/" + encodeURIComponent(article.url) + "/NY/" + encodeURIComponent(article.section)
                                        + "/" + encodeURIComponent(this.setImage(article.multimedia)),
                                }}
                                    className="cardLink">
                                    <Row className="cardRow">
                                        <Col xs={12} sm={12} md={3} lg={3} xl={3}>
                                            <ResponsiveEmbed aspectRatio='16by9' className="cardImgBox" >
                                                <Image src={this.setImage(article.multimedia)} className="cardImg"></Image>
                                            </ResponsiveEmbed>

                                        </Col>

                                        <Col xs={12} sm={12} md={9} lg={9} xl={9}>

                                            <div className="cardWrapper">
                                                <div className="cardTitle">
                                                    {article.title}
                                                    <IconContext.Provider value={{ className: "share_symbol" }}>
                                                        <Example title={article.title} shareUrl={article.url} />
                                                    </IconContext.Provider>
                                                </div>
                                                <div className="cardDesc">
                                                    {
                                                        findTruncatedDesc(article.abstract)
                                                    }

                                                </div>
                                                <div className="wrapper">
                                                    <div className="cardDate">
                                                        {article.published_date.substring(0, 10)
                                                        }
                                                    </div>
                                                    <div className="cardSection" align="right">

                                                        {setSectionBg(article.section.toUpperCase())
                                                        }
                                                    </div>
                                                </div>

                                            </div>
                                        </Col>
                                    </Row>
                                </Link>
                            </div>
                        ))}
                    </div>
                }

            </div>
        );
    }
}
class NYSectionNews extends Component {
    constructor() {
        super();
        this.setImage = this.setImage.bind(this);
    }

    setImage(urls) {
        //console.log(urls);
        var i;
        for (i = 0; i < urls.length; i++) {
            if (urls[i].width >= 2000) {
                //console.log(urls[i].url)
                //console.log("hahaj")
                return (urls[i].url)
            }
        }
        return "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg"
    }

    render() {
        return (<>
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
                <ResponsiveEmbed aspectRatio='16by9' className="cardImgBox" >
                    <Image src={this.setImage(this.props.article.multimedia)} className="cardImg"></Image>
                </ResponsiveEmbed>
            </Col>

            <Col xs={12} sm={12} md={9} lg={9} xl={9}>

                <div className="cardWrapper">
                    <div className="cardTitle">
                        {this.props.article.title}
                        <IconContext.Provider value={{ className: "share_symbol" }}>
                            <Example title={this.props.article.title} shareUrl={this.props.article.url} />
                        </IconContext.Provider>
                    </div>
                    <div className="cardDesc">
                        {
                            findTruncatedDesc(this.props.article.abstract)
                        }

                    </div>
                    <div className="wrapper">
                        <div className="cardDate">
                            {this.props.article.published_date.substring(0, 10)
                            }
                        </div>

                        <div className="cardSection" align="right">

                            {setSectionBg(this.props.article.section.toUpperCase())
                            }
                        </div>
                    </div>

                </div>
            </Col>
        </>)
    }
}
class GuardianSectionNews extends Component {
    constructor() {
        super();
        this.setImage = this.setImage.bind(this);
    }

    setImage(urls) {
        //for setting the image for NY Times
        //console.log(urls);
        var i;
        for (i = 0; i < urls.length; i++) {
            if (urls[i].width >= 2000) {
                //console.log(urls[i].url)
                //console.log("hahaj")
                return (urls[i].url)
            }
        }
        return "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg"
    }

    render() {
        return (<>
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
                <ResponsiveEmbed aspectRatio='16by9' className="cardImgBox" >
                    <Image src={this.props.article.imgSrc} className="cardImg"></Image>
                </ResponsiveEmbed>
                {
                    //<img src={this.props.article.imgSrc} className="cardImg" />
                }

            </Col>
            <Col xs={12} sm={12} md={9} lg={9} xl={9}>
                <div className="cardWrapper">
                    <div className="cardTitle">
                        {this.props.article.webTitle}
                        <IconContext.Provider value={{ className: "share_symbol" }}>
                            <Example title={this.props.article.webTitle} shareUrl={this.props.article.webUrl} />
                        </IconContext.Provider>
                    </div>
                    <div className="cardDesc">
                        {
                            findTruncatedDesc(this.props.article.bodyTextSummary)
                        }
                        {
                            // <TextTruncate
                            //     line={3}
                            //     element="span"
                            //     truncateText="…"
                            //     text={this.props.article.bodyTextSummary}
                            // //textTruncateChild={<a href="#">Read on</a>}

                            // />
                        }
                    </div>

                    <div className="wrapper">
                        <div className="cardDate">
                            {this.props.article.webPublicationDate.substring(0, 10)}
                        </div>

                        <div className="cardSection" align="right">
                            {setSectionBg(this.props.article.sectionId.toUpperCase())}
                        </div>
                    </div>

                </div>
            </Col>
        </>
        )
    }
}

class World extends Component {
    constructor() {
        super();
        this.state = {
            nyTimes: null, guardian: null, articleId: "", articleUrl: "",
            loading: true, viewCards: true, sectionName: "", image: ""
        };
        this.handleClick = this.handleClick.bind(this);
        this.setImage = this.setImage.bind(this);

        this.imgVariable = ""
    }

    componentDidMount() {
        //this.props.favEnter();

        const fetch = require('node-fetch');

        fetch('http://smaranitreact.us-east-1.elasticbeanstalk.com/nytimesSection?sectionName=world')
            .then(res => {
                return res.json()
            })
            .then(ny_data => {
                console.log("NY")
                var jsonArticles=ny_data["nyArticles"]
                console.log(jsonArticles)
                this.setState({ nyTimes: jsonArticles })
                //this.setState({loading:false})
            });
            // .then(jsonArticles => {
            //     console.log("NY")
            //     console.log(jsonArticles)
            //     this.setState({ nyTimes: jsonArticles })
            //     //this.setState({loading:false})
            // });

        fetch('http://smaranitreact.us-east-1.elasticbeanstalk.com/guardianSection?sectionName=world')
            .then(res => {
                return res.json()
            })
            .then(guardian_data => {
                console.log("G")
                var jsonArticles=guardian_data["guardianArticles"]
                console.log(jsonArticles)
                this.setState({ guardian: jsonArticles })
                //this.setState({loading:false})
            });
        //.then(this.setState({ loading: false }));;


    }
    setImage(urls) {
        //console.log(urls);
        var i;
        for (i = 0; i < urls.length; i++) {
            if (urls[i].width >= 2000) {
                return (urls[i].url)
            }
        }
        return "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg"
    }

    handleClick(event, data, news_src, section) {
        event.stopPropagation();
        event.preventDefault();
        this.props.onCardClick();
        this.state.viewCards = false;
        if (news_src == "Guardian") {
            this.setState({ articleId: data })
            this.setState({ sectionName: section })
            //this.state.articleId = data;

        }
        else {
            this.setState({ articleUrl: data.url })
            console.log(this.setImage(data.multimedia))
            this.setState({ image: this.setImage(data.multimedia) })
            this.setState({ sectionName: section })
            // this.state.articleUrl = data;
        }

    }

    render() {
        return (

            <div className="articleWrapper">
                {
                    console.log("LOADDIGGGG")
                }
                {
                    console.log(this.state.loading)
                }
                {
                    !this.state.guardian && !this.state.nyTimes &&
                    <div className="spinner">
                        <BounceLoader
                            size={60}
                            color={"#123abc"}
                            loading={this.state.loading}
                        />
                    Loading
                    </div>
                }
                {// Guardian news

                    this.state && this.state.guardian && (localStorage.getItem("checked") === "true") && this.state.viewCards &&

                    <div className="articleSample">{this.state.guardian.map((article, index) => (

                        < div key={index}>
                            <Link to={{
                                pathname: "/expanded/" + encodeURIComponent(article.id) + "/Guardian/" + encodeURIComponent(article.sectionId) + "/noimg",
                            }}
                                className="cardLink">
                                <Row className="cardRow">
                                    <GuardianSectionNews article={article} />
                                </Row>
                            </Link>
                        </div>
                    ))}
                    </div>
                }

                {//NY Times
                    this.state && this.state.nyTimes && !(localStorage.getItem("checked") === "true") && this.state.viewCards &&
                    <div className="articleSample" >{
                        this.state.nyTimes.map((article, index) => (
                            < div key={index}>
                                <Link to={{
                                    pathname: "/expanded/" + encodeURIComponent(article.url) + "/NY/" + encodeURIComponent(article.section)
                                        + "/" + encodeURIComponent(this.setImage(article.multimedia)),
                                }}
                                    className="cardLink">
                                    <Row className="cardRow">
                                        <NYSectionNews article={article} />
                                    </Row>
                                </Link>
                            </div>
                        ))}
                    </div>
                }

            </div>
        );

    }
}
class Politics extends Component {
    constructor() {
        super();
        this.state = {
            nyTimes: null, guardian: null, articleId: "", articleUrl: "", viewCards: true,
            loading: true, sectionName: "", image: ""
        };
        this.handleClick = this.handleClick.bind(this);
        this.setImage = this.setImage.bind(this);
        this.imgVariable = ""
    }
    componentDidMount() {
        const fetch = require('node-fetch');

        fetch('http://smaranitreact.us-east-1.elasticbeanstalk.com/nytimesSection?sectionName=politics')
            .then(res => {
                return res.json()
            })
            .then(ny_data => {
                console.log("NY")
                var jsonArticles=ny_data["nyArticles"]
                console.log(jsonArticles)
                this.setState({ nyTimes: jsonArticles })
                //this.setState({loading:false})
            });
            // .then(jsonArticles => {
            //     console.log(jsonArticles)
            //     this.setState({ nyTimes: jsonArticles })
            // });

        fetch('http://smaranitreact.us-east-1.elasticbeanstalk.com/guardianSection?sectionName=politics')
            .then(res => {
                return res.json()
            })
            .then(guardian_data => {
                console.log("G")
                var jsonArticles=guardian_data["guardianArticles"]
                console.log(jsonArticles)
                this.setState({ guardian: jsonArticles })
                //this.setState({loading:false})
            });
            // .then(jsonArticles => {

            //     console.log(jsonArticles)
            //     this.setState({ guardian: jsonArticles })
            // });

    }
    setImage(urls) {
        //console.log(urls);
        var i;
        for (i = 0; i < urls.length; i++) {
            if (urls[i].width >= 2000) {
                return (urls[i].url)
            }
        }
        return "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg"
    }

    handleClick(event, data, news_src, section) {
        event.stopPropagation();
        event.preventDefault();

        this.props.onCardClick();

        this.state.viewCards = false;
        if (news_src == "Guardian") {
            this.setState({ articleId: data })
            this.setState({ sectionName: section })
            // this.state.articleId = data;
        }
        else {
            this.setState({ articleUrl: data.url })
            this.setState({ image: this.setImage(data.multimedia) })
            this.setState({ sectionName: section })
            //this.state.articleUrl = data;
        }
        //console.log(event.name)
    }


    render() {
        //console.log("inside render")
        return (
            <div className="articleWrapper">
                {

                    !this.state.guardian && !this.state.nyTimes &&
                    <div className="spinner">
                        <BounceLoader

                            size={60}
                            color={"#123abc"}
                            loading={this.state.loading}
                        />
                        Loading
                        </div>

                }
                {// Guardian news

                    this.state && this.state.guardian && (localStorage.getItem("checked") === "true") && this.state.viewCards &&

                    <div className="articleSample">{this.state.guardian.map((article, index) => (

                        < div key={index}>
                            <Link to={{
                                pathname: "/expanded/" + encodeURIComponent(article.id) + "/Guardian/" + encodeURIComponent(article.sectionId) + "/noimg",
                            }}
                                className="cardLink">
                                <Row className="cardRow">
                                    <GuardianSectionNews article={article} />
                                </Row>
                            </Link>
                        </div>
                    ))}
                    </div>
                }

                {//NY Times
                    this.state && this.state.nyTimes && !(localStorage.getItem("checked") === "true") && this.state.viewCards &&
                    <div className="articleSample">{
                        this.state.nyTimes.map((article, index) => (

                            < div key={index}>
                                <Link to={{
                                    pathname: "/expanded/" + encodeURIComponent(article.url) + "/NY/" + encodeURIComponent(article.section)
                                        + "/" + encodeURIComponent(this.setImage(article.multimedia)),
                                }}
                                    className="cardLink">
                                    <Row className="cardRow">
                                        <NYSectionNews article={article} />
                                    </Row>
                                </Link>
                            </div>
                        ))}
                    </div>
                }

            </div>
        );
    }
}
class Business extends Component {
    constructor() {
        super();
        this.state = {
            nyTimes: null, guardian: null, articleId: "", articleUrl: "", viewCards: true, sectionName: "",
            image: "", loading: true
        };
        this.handleClick = this.handleClick.bind(this);
        this.setImage = this.setImage.bind(this);
        this.imgVariable = ""
    }

    componentDidMount() {
        const fetch = require('node-fetch');

        fetch('http://smaranitreact.us-east-1.elasticbeanstalk.com/nytimesSection?sectionName=business')
            .then(res => {
                return res.json()
            })
            .then(ny_data => {
                console.log("NY")
                var jsonArticles=ny_data["nyArticles"]
                console.log(jsonArticles)
                this.setState({ nyTimes: jsonArticles })
                //this.setState({loading:false})
            });
            // .then(jsonArticles => {
            //     console.log("NY")
            //     console.log(jsonArticles)
            //     this.setState({ nyTimes: jsonArticles })
            // });

        fetch('http://smaranitreact.us-east-1.elasticbeanstalk.com/guardianSection?sectionName=business')
            .then(res => {
                return res.json()
            })
            .then(guardian_data => {
                console.log("G")
                var jsonArticles=guardian_data["guardianArticles"]
                console.log(jsonArticles)
                this.setState({ guardian: jsonArticles })
                //this.setState({loading:false})
            });
            // .then(jsonArticles => {
            //     console.log("G")

            //     console.log(jsonArticles)
            //     this.setState({ guardian: jsonArticles })
            // });

    }
    setImage(urls) {
        //console.log(urls);
        var i;
        for (i = 0; i < urls.length; i++) {
            if (urls[i].width >= 2000) {
                return (urls[i].url)
            }
        }
        return "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg"
    }

    handleClick(event, data, news_src, section) {
        event.stopPropagation();
        event.preventDefault();

        this.props.onCardClick();

        this.state.viewCards = false;
        if (news_src == "Guardian") {
            this.setState({ articleId: data })
            this.setState({ sectionName: section })
            // this.state.articleId = data;
        }
        else {
            this.setState({ articleUrl: data.url })
            this.setState({ image: this.setImage(data.multimedia) })
            this.setState({ sectionName: section })
            //this.state.articleUrl = data;
        }

    }

    render() {
        //console.log("inside render")
        return (
            <div className="articleWrapper">
                {
                    // this.setState
                }
                {

                    !this.state.guardian && !this.state.nyTimes &&
                    <div className="spinner">
                        <BounceLoader

                            size={60}
                            color={"#123abc"}
                            loading={this.state.loading}
                        />
                        Loading
                        </div>

                }
                {// Guardian news

                    this.state && this.state.guardian && (localStorage.getItem("checked") === "true") && this.state.viewCards &&

                    <div className="articleSample">{this.state.guardian.map((article, index) => (

                        < div key={index}>
                            <Link to={{
                                pathname: "/expanded/" + encodeURIComponent(article.id) + "/Guardian/" + encodeURIComponent(article.sectionId) + "/noimg",
                            }}
                                className="cardLink">
                                <Row className="cardRow">
                                    <GuardianSectionNews article={article} />
                                </Row>
                            </Link>
                        </div>

                    ))}
                    </div>
                }

                {//NY Times
                    this.state && this.state.nyTimes && !(localStorage.getItem("checked") === "true") && this.state.viewCards &&
                    <div className="articleSample">{
                        this.state.nyTimes.map((article, index) => (
                            < div key={index}>
                                <Link to={{
                                    pathname: "/expanded/" + encodeURIComponent(article.url) + "/NY/" + encodeURIComponent(article.section)
                                        + "/" + encodeURIComponent(this.setImage(article.multimedia)),
                                }}
                                    className="cardLink">
                                    <Row className="cardRow">
                                        <NYSectionNews article={article} />
                                    </Row>
                                </Link>
                            </div>
                        ))}
                    </div>
                }

            </div>
        );
    }
}
class Sports extends Component {
    constructor() {
        super();
        this.state = {
            nyTimes: null, guardian: null, articleId: "", articleUrl: "", viewCards: true, sectionName: "",
            image: "", loading: true
        };
        this.handleClick = this.handleClick.bind(this);
        this.setImage = this.setImage.bind(this);
        this.imgVariable = ""
    }

    componentDidMount() {
        const fetch = require('node-fetch');

        fetch('http://smaranitreact.us-east-1.elasticbeanstalk.com/nytimesSection?sectionName=sports')
            .then(res => {
                return res.json()
            })
            .then(ny_data => {
                console.log("NY")
                var jsonArticles=ny_data["nyArticles"]
                console.log(jsonArticles)
                this.setState({ nyTimes: jsonArticles })
                //this.setState({loading:false})
            });
            // .then(jsonArticles => {
            //     console.log("Ny")
            //     console.log(jsonArticles)
            //     this.setState({ nyTimes: jsonArticles })
            // });

        fetch('http://smaranitreact.us-east-1.elasticbeanstalk.com/guardianSection?sectionName=sport')
            .then(res => {
                return res.json()
            })
            .then(guardian_data => {
                console.log("G")
                var jsonArticles=guardian_data["guardianArticles"]
                console.log(jsonArticles)
                this.setState({ guardian: jsonArticles })
                //this.setState({loading:false})
            });
            // .then(jsonArticles => {
            //     console.log("G")
            //     console.log(jsonArticles)
            //     this.setState({ guardian: jsonArticles })
            // });

    }
    setImage(urls) {
        //console.log(urls);
        var i;
        for (i = 0; i < urls.length; i++) {
            if (urls[i].width >= 2000) {
                return (urls[i].url)
            }
        }
        return "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg"
    }
    handleClick(event, data, news_src, section) {
        event.stopPropagation();
        event.preventDefault();

        this.props.onCardClick();

        this.state.viewCards = false;
        if (news_src == "Guardian") {
            this.setState({ articleId: data })
            this.setState({ sectionName: section })
            // this.state.articleId = data;
        }
        else {
            this.setState({ articleUrl: data.url })
            this.setState({ image: this.setImage(data.multimedia) })
            this.setState({ sectionName: section })
            //this.state.articleUrl = data;
        }
        //console.log(event.name)
    }

    render() {
        //console.log("inside render")
        return (
            <div className="articleWrapper">
                {

                    !this.state.guardian && !this.state.nyTimes &&
                    <div className="spinner">
                        <BounceLoader

                            size={60}
                            color={"#123abc"}
                            loading={this.state.loading}
                        />
                        Loading
                        </div>

                }
                {// Guardian news

                    this.state && this.state.guardian && (localStorage.getItem("checked") === "true") && this.state.viewCards &&

                    <div className="articleSample">{this.state.guardian.map((article, index) => (

                        < div key={index}>
                            <Link to={{
                                pathname: "/expanded/" + encodeURIComponent(article.id) + "/Guardian/" + encodeURIComponent(article.sectionId) + "/noimg",
                            }}
                                className="cardLink">
                                <Row className="cardRow">
                                    <GuardianSectionNews article={article} />
                                </Row>
                            </Link>
                        </div>
                    ))}
                    </div>
                }

                {//NY Times
                    this.state && this.state.nyTimes && !(localStorage.getItem("checked") === "true") && this.state.viewCards &&
                    <div className="articleSample">{
                        this.state.nyTimes.map((article, index) => (
                            < div key={index}>
                                <Link to={{
                                    pathname: "/expanded/" + encodeURIComponent(article.url) + "/NY/" + encodeURIComponent(article.section)
                                        + "/" + encodeURIComponent(this.setImage(article.multimedia)),
                                }}
                                    className="cardLink">
                                    <Row className="cardRow">
                                        <NYSectionNews article={article} />
                                    </Row>
                                </Link>
                            </div>
                        ))}
                    </div>
                }

            </div>
        );
    }
}
class Tech extends Component {
    constructor() {
        super();
        this.state = {
            nyTimes: null, guardian: null, articleId: "", articleUrl: "", viewCards: true, sectionName: "", image: "",
            loading: true
        };
        this.handleClick = this.handleClick.bind(this);
        this.setImage = this.setImage.bind(this);
        this.imgVariable = ""
    }
    componentDidMount() {
        const fetch = require('node-fetch');

        fetch('http://smaranitreact.us-east-1.elasticbeanstalk.com/nytimesSection?sectionName=technology')
            .then(res => {
                return res.json()
            })
            .then(ny_data => {
                console.log("NY")
                var jsonArticles=ny_data["nyArticles"]
                console.log(jsonArticles)
                this.setState({ nyTimes: jsonArticles })
                //this.setState({loading:false})
            });
            // .then(jsonArticles => {
            //     console.log("Nys")
            //     console.log(jsonArticles)
            //     this.setState({ nyTimes: jsonArticles })
            // });

        fetch('http://smaranitreact.us-east-1.elasticbeanstalk.com/guardianSection?sectionName=technology')
            .then(res => {
                return res.json()
            })
            .then(guardian_data => {
                console.log("G")
                var jsonArticles=guardian_data["guardianArticles"]
                console.log(jsonArticles)
                this.setState({ guardian: jsonArticles })
                //this.setState({loading:false})
            });
            // .then(jsonArticles => {
            //     console.log("G")
            //     console.log(jsonArticles)
            //     this.setState({ guardian: jsonArticles })
            // });

    }
    setImage(urls) {
        //console.log(urls);
        var i;
        for (i = 0; i < urls.length; i++) {
            if (urls[i].width >= 2000) {
                return (urls[i].url)
            }
        }
        return "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg"
    }
    handleClick(event, data, news_src, section) {
        event.stopPropagation();
        event.preventDefault();
        this.props.onCardClick();

        this.state.viewCards = false;
        if (news_src == "Guardian") {
            this.setState({ articleId: data })
            this.setState({ sectionName: section })
            // this.state.articleId = data;
        }
        else {
            this.setState({ articleUrl: data.url })
            this.setState({ image: this.setImage(data.multimedia) })
            this.setState({ sectionName: section })
            //this.state.articleUrl = data;
        }
        //console.log(event.name)
    }

    render() {
        //console.log("inside render")
        return (
            <div className="articleWrapper">
                {
                    !this.state.guardian && !this.state.nyTimes &&
                    <div className="spinner">
                        <BounceLoader

                            size={60}
                            color={"#123abc"}
                            loading={this.state.loading}
                        />
                    Loading
                    </div>
                }
                {// Guardian news

                    this.state && this.state.guardian && (localStorage.getItem("checked") === "true") && this.state.viewCards &&

                    <div className="articleSample">{this.state.guardian.map((article, index) => (

                        < div key={index}>
                            <Link to={{
                                pathname: "/expanded/" + encodeURIComponent(article.id) + "/Guardian/" + encodeURIComponent(article.sectionId) + "/noimg",
                            }}
                                className="cardLink">
                                <Row className="cardRow">
                                    <GuardianSectionNews article={article} />
                                </Row>
                            </Link>
                        </div>
                    ))}
                    </div>
                }

                {//NY Times
                    this.state && this.state.nyTimes && !(localStorage.getItem("checked") === "true") && this.state.viewCards &&
                    <div className="articleSample">{
                        this.state.nyTimes.map((article, index) => (
                            < div key={index}>
                                <Link to={{
                                    pathname: "/expanded/" + encodeURIComponent(article.url) + "/NY/" + encodeURIComponent(article.section)
                                        + "/" + encodeURIComponent(this.setImage(article.multimedia)),
                                }}
                                    className="cardLink">
                                    <Row className="cardRow">
                                        <NYSectionNews article={article} />
                                    </Row>
                                </Link>
                            </div>
                        ))}
                    </div>
                }

            </div>
        );
    }
}
class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.articleId = this.props.articleNumber
        this.articleSrc = this.props.articleSource
        this.articleSec = this.props.articleSection
        this.articleImg = this.props.articleImage
        this.commentid = "http://reactappsam.azurewebsites.net/expanded/" + decodeURIComponent(this.id) + "/" + decodeURIComponent(this.src) + "/" +
            decodeURIComponent(this.sec) + "/" + decodeURIComponent(this.img);

    }
    componentDidMount() {
        let id = this.articleId;
        let src = this.articleSrc;
        let sec = this.articleSec;
        let img = this.articleImg;
        this.removeCommentBox = commentBox('5689389883588608-proj', {
            className: 'commentbox', // the class of divs to look for
            defaultBoxId: 'commentbox', // the default ID to associate to the div
            tlcParam: 'tlc', // used for identifying links to comments on your page
            backgroundColor: null, // default transparent
            textColor: null, // default black
            subtextColor: null, // default grey
            singleSignOn: null, // enables Single Sign-On (for Professional plans only)
            createBoxUrl(boxId, pageLocation) {

                let cur_url = "http://reactappsam.azurewebsites.net/expanded/" + decodeURIComponent(id) + "/" + decodeURIComponent(src) + "/" +
                    decodeURIComponent(sec) + "/" + decodeURIComponent(img);
                console.log(cur_url)

                pageLocation.search = ''; // removes query string!
                //let id=this.props.articleNumber;
                pageLocation.hash = boxId;
                return cur_url;
            },
        });
    }
    componentWillUnmount() {
        this.removeCommentBox();
    }

    render() {
        console.log("article ID inside render!")
        console.log(decodeURI(this.articleId))
        console.log("returned article num")
        console.log(this.props.articleNumber)
        return (
            <>
                <div className="commentbox" id={this.commentid} />
                {
                    //the reason for giving a unique id is so that comments are particular for each article id
                }

            </>
        )
    }
}

class Favourites extends Component {
    constructor() {
        super();
        this.state = {
            all_articles: "", articleData: "", newsSrc: "", imgSrc: "",
            cardClicked: false, sectionName: ""
        }//, contains_articles: true };
        this.arr = [];
        this.articlesPresent = true;
        this.handleFavCardClick = this.handleFavCardClick.bind(this);
        this.setAllArticles = this.setAllArticles.bind(this);
        this.removeFromLocalStorage = this.removeFromLocalStorage.bind(this);
    }

    setAllArticles() {
        console.log("came inside setting articles")
        //this is to make sure the state changes so the page gets re-rendered with remaining articles
        if (localStorage.getItem("bookmarkObject") != null) {

            console.log("came inside retreiving bookmark objects")
            var retrievedObject = localStorage.getItem('bookmarkObject');//its a JSONstr
            //console.log('retrievdObject: ', JSON.parse(retrievedObject));
            var obj = JSON.parse(retrievedObject)
            this.setState({ all_articles: obj["articles"] })
            //this.all_articles = obj["articles"]
            var no_of_articles = obj["articles"].length;
            var no_of_rows_required;
            if (no_of_articles == 0) {
                no_of_rows_required = 0
            }
            else if (no_of_articles > 0 && no_of_articles < 4) {
                no_of_rows_required = 1
            }
            else {
                no_of_rows_required = Math.floor(no_of_articles / 4)
            }
            console.log(no_of_rows_required)

            for (var num = 0; num < no_of_rows_required; num++) {
                this.arr.push(num);
            }
            console.log(this.arr)
            for (var i = 0; i < obj["articles"].length; i++) {
                console.log(obj["articles"][i])
            }
        }
        else {
            //this needs to be done otherwise if there is one article remaining, it doesnt get deleted
            this.setState({ all_articles: "" })

        }

    }
    removeFromLocalStorage(event, article) {
        console.log(article)
        event.stopPropagation();
        event.preventDefault();
        var retrievedObject;
        var obj, newObj, jsonStr, articles;
        newObj = { "articles": [] }
        if (localStorage.getItem('bookmarkObject') != null) {
            retrievedObject = localStorage.getItem('bookmarkObject');//its a JSONstr
            console.log('retrievedObject: ', JSON.parse(retrievedObject));
            obj = JSON.parse(retrievedObject)
            articles = obj["articles"]//whatever is retreived from local storage under the key array. It is an array of objects
            var title, img, date, desc, newsSrc, webUrl, section, articleData;

            for (var i = 0; i < articles.length; i++) {
                title = articles[i].title
                img = articles[i].imgSrc
                date = articles[i].date
                desc = articles[i].desc
                newsSrc = articles[i].newsSrc
                webUrl = articles[i].webUrl
                section = articles[i].section
                articleData = articles[i].articleData

                if (
                    articleData != article.articleData
                ) {
                    newObj['articles'].push({
                        "title": title, "imgSrc": img,
                        "date": date, "desc": desc,
                        "newsSrc": newsSrc,
                        "webUrl": webUrl,
                        "section": section,
                        "articleData": articleData
                    });

                }

            }
            if (newObj['articles'].length == 0) {
                //if there are no articles remaining after removing a particular article , remove the bookmarkobject from localstorage
                localStorage.removeItem("bookmarkObject");
                console.log("Removing the entire thing from local storage")
            }
            else {
                localStorage.removeItem("bookmarkObject");
                console.log("removed")
                console.log(localStorage.getItem("bookmarkObject"))

                jsonStr = JSON.stringify(newObj);
                localStorage.setItem("bookmarkObject", jsonStr)
                console.log("added back and now it looks like")
                console.log(localStorage.getItem("bookmarkObject"))
            }
        }
        this.setAllArticles();
        var toastMessage = "Removing " + article.title
        toast(toastMessage, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            bodyClassName: "toast_msg" //className you need to mention if you want changes in css to the body
        });

    }
    handleFavCardClick(event, article) {
        //event.stopPropagation();
        //event.preventDefault();
        console.log("inside clicking")
        this.setState({ articleData: article.articleData });
        console.log(article.articleData)
        this.setState({ newsSrc: article.newsSrc });
        this.setState({ sectionName: article.section })
        this.setState({ imgSrc: article.imgSrc })
        this.setState({ cardClicked: true })
        localStorage.setItem("all", JSON.stringify(true))
        //localStorage.setItem("expanded", JSON.stringify(true))
        //this.props.onFavClick();

    }

    componentDidMount() {
        //retrieve all bookmarked articles
        console.log("inside mounting of favourites page")
        this.setAllArticles();
        //this.props.favEnter();
    }
    render() {
        if (localStorage.getItem("bookmarkObject") == null) {
            this.articlesPresent = false;
        }
        else {
            this.articlesPresent = true;
        }
        return (<>
            {
                //localStorage.removeItem("displayFavs")
                console.log("in displaying favourites page")
            }
            {
                !this.articlesPresent &&
                <>
                    <div className="displayText">
                        You have no saved articles
                    </div>

                </>
            }

            {
                this.articlesPresent &&
                <div className="favouritesTitle">
                    Favourites
                </div>
            }
            <Container fluid>
                {
                    this.state.all_articles &&
                    <>
                        <Row className="favRow">
                            {this.state.all_articles && this.state.all_articles.map((article, index) => (


                                <Col key={index} xs={12} sm={12} md={3} lg={3} xl={3} className="favCol">
                                    <Link to={{
                                        pathname: "/expanded/" + encodeURIComponent(article.articleData) + "/" + article.newsSrc + "/" + encodeURIComponent(article.section) + "/" +
                                            encodeURIComponent(article.imgSrc),
                                    }}
                                        className="cardLink">
                                        <div className="cardColumn">


                                            <Row>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <div className="favCardTitle">
                                                        {article.title}
                                                        <IconContext.Provider value={{ className: "share_symbol" }}>
                                                            <Example title={article.title} shareUrl={article.webUrl} newsSrc={article.newsSrc} bookmarkPage={true} />
                                                        </IconContext.Provider>
                                                        <IconContext.Provider value={{ className: "delete_symbol" }}>
                                                            <MdDelete size={20}
                                                                onClick={(event) => { this.removeFromLocalStorage(event, article) }}
                                                            />
                                                        </IconContext.Provider>

                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>

                                                    <ResponsiveEmbed aspectRatio='16by9' className="cardImgBox" >
                                                        <Image src={article.imgSrc} className="cardImg"></Image>
                                                    </ResponsiveEmbed>
                                                    {
                                                        /* { <div>
                                                         
                                                         <img src={article.imgSrc} className="favCardImg" />
                                                     </div>} */
                                                    }
                                                </Col>
                                            </Row>
                                            <Row className="favCardLastRow">
                                                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                                    <div className="favCardDate">
                                                        {article.date}
                                                    </div>
                                                </Col>
                                                <Col xs={8} sm={8} md={8} lg={8} xl={8} >
                                                    <Row className="favCardSectionSource">
                                                        <div className="favCardSection">
                                                            {setSectionBg(article.section)}
                                                        </div>
                                                        <div className="favCardSource">
                                                            {setSectionBg(article.newsSrc)}
                                                        </div>
                                                    </Row>
                                                </Col>
                                                
                                            </Row>
                                        </div>
                                    </Link>
                                </Col>
                            ))}

                        </Row>

                    </>

                }

            </Container>
            {
                //if you put toastcontainer within the container it wont show the toast message
            }
            <ToastContainer
                transition={Zoom}
                position="top-center"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange={false}
                draggable={false}
            />

            {
                // this.state.cardClicked &&
                // <ExpandedCard article_data={this.state.articleData} news_src={this.state.newsSrc} section={this.state.sectionName}
                //     imgSrc={this.state.imgSrc} />
            }
        </>)
    }
}
class SearchArticles extends Component {
    constructor() {
        super();
        this.state = { queryWord: "", guardian: null, nyTimes: null, loading: true, prevUrl: null }
        this.setImage = this.setImage.bind(this);
        this.callFetch = this.callFetch.bind(this);
    }
    setImage(urls) {
        //setting image for nytimes
        //console.log(urls);
        var i;
        for (i = 0; i < urls.length; i++) {
            if (urls[i].width >= 2000) {
                // console.log(urls[i].url)
                var requiredImg = "https://static01.nyt.com/" + urls[i].url;
                return requiredImg;
            }
        }
        return "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg"
    }
    callFetch() {
        const { queryKeyword } = this.props.match.params
        console.log("INSIDE MOUNTING OF SEARCH RESULTS")
        console.log(queryKeyword)
        console.log(queryKeyword.substring(1))
        this.setState({ queryWord: queryKeyword.substring(1) })
        this.setState({ prevUrl: window.location.href })
        //console.log(this.props.queryKeyword)
        const fetch = require('node-fetch');
        var url_guardian = 'http://smaranitreact.us-east-1.elasticbeanstalk.com/searchGuardian?queryKeyword=' + queryKeyword.substring(1)

        fetch(url_guardian)
            .then(res => {
                return res.json()
            })
            .then(guardian_data => {
                console.log("G")
                var jsonArticles=guardian_data["guardianSearch"]
                console.log(jsonArticles)
                this.setState({ guardian: jsonArticles })
                //this.setState({loading:false})
            });
            // .then(jsonArticles => {

            //     console.log(jsonArticles)
            //     this.setState({ guardian: jsonArticles })
            // });
        var url_nytimes = 'http://smaranitreact.us-east-1.elasticbeanstalk.com/searchNY?queryKeyword=' + queryKeyword.substring(1)
        fetch(url_nytimes)
            .then(res => {
                return res.json()
            })
            .then(ny_data => {
                console.log("NY")
                var jsonArticles=ny_data["nySearch"]
                console.log(jsonArticles)
                this.setState({ nyTimes: jsonArticles })
                //this.setState({loading:false})
            });
            // .then(jsonArticles => {

            //     console.log(jsonArticles)
            //     this.setState({ nyTimes: jsonArticles })
            // });
        //window.location.reload(true);
    }
    componentDidMount() {

        const { queryKeyword } = this.props.match.params
        console.log("INSIDE MOUNTING OF SEARCH RESULTS")
        console.log(queryKeyword)
        console.log(queryKeyword.substring(1))
        this.setState({ queryWord: queryKeyword.substring(1) })
        this.setState({ prevUrl: window.location.href })
        //console.log(this.props.queryKeyword)
        const fetch = require('node-fetch');
        var url_guardian = 'http://smaranitreact.us-east-1.elasticbeanstalk.com/searchGuardian?queryKeyword=' + queryKeyword.substring(1)

        fetch(url_guardian)
            .then(res => {
                return res.json()
            })
            .then(guardian_data => {
                console.log("G")
                var jsonArticles=guardian_data["guardianSearch"]
                console.log(jsonArticles)
                this.setState({ guardian: jsonArticles })
                //this.setState({loading:false})
            });
            // .then(jsonArticles => {

            //     console.log(jsonArticles)
            //     this.setState({ guardian: jsonArticles })
            // });
        var url_nytimes = 'http://smaranitreact.us-east-1.elasticbeanstalk.com/searchNY?queryKeyword=' + queryKeyword.substring(1)
        fetch(url_nytimes)
            .then(res => {
                return res.json()
            })
            .then(ny_data => {
                console.log("NY")
                var jsonArticles=ny_data["nySearch"]
                console.log(jsonArticles)
                this.setState({ nyTimes: jsonArticles })
                //this.setState({loading:false})
            });
            // .then(jsonArticles => {

            //     console.log(jsonArticles)
            //     this.setState({ nyTimes: jsonArticles })
            // });

    }
    componentDidUpdate(prevProps, prevState) {
        console.log("updated the component")
        console.log(prevProps)
        console.log(prevState)
        if (window.location.href != prevState.prevUrl) {
            const { queryKeyword } = this.props.match.params
            console.log("INSIDE UPDATING OF SEARCH RESULTS")
            console.log(queryKeyword)
            console.log(queryKeyword.substring(1))
            this.setState({ queryWord: queryKeyword.substring(1) })
            this.setState({ prevUrl: window.location.href })
            //console.log(this.props.queryKeyword)
            const fetch = require('node-fetch');
            var url_guardian = 'http://smaranitreact.us-east-1.elasticbeanstalk.com/searchGuardian?queryKeyword=' + queryKeyword.substring(1)

            fetch(url_guardian)
                .then(res => {
                    return res.json()
                })
                .then(guardian_data => {
                    console.log("G")
                    var jsonArticles=guardian_data["guardianSearch"]
                    console.log(jsonArticles)
                    this.setState({ guardian: jsonArticles })
                    //this.setState({loading:false})
                });
                // .then(jsonArticles => {

                //     console.log(jsonArticles)
                //     this.setState({ guardian: jsonArticles })
                // });
            var url_nytimes = 'http://smaranitreact.us-east-1.elasticbeanstalk.com/searchNY?queryKeyword=' + queryKeyword.substring(1)
            fetch(url_nytimes)
                .then(res => {
                    return res.json()
                })
                .then(ny_data => {
                    console.log("NY")
                    var jsonArticles=ny_data["nySearch"]
                    console.log(jsonArticles)
                    this.setState({ nyTimes: jsonArticles })
                   
                });
                // .then(jsonArticles => {

                //     console.log(jsonArticles)
                //     this.setState({ nyTimes: jsonArticles })
                // });


        }

    }

    render() {

        return (<>
            {
                // !this.state.guardian && !this.state.nyTimes &&
                // <div className="spinner">
                //     <BounceLoader

                //         size={60}
                //         color={"#123abc"}
                //         loading={this.state.loading}
                //     />
                //     Loading
                //     </div>
            }
            <div className="searchResultsTitle">
                Results
            </div>
            {this.state.guardian && this.state.nyTimes &&
                <Container fluid>
                    {
                        <>
                            <Row className="favRow">
                                {this.state && this.state.guardian && this.state.guardian.map((article, index) => (

                                    <Col key={index} xs={12} sm={12} md={3} lg={3} xl={3} className="favCol">
                                        <Link to={{
                                            pathname: "/expanded/" + encodeURIComponent(article.articleData) + "/" + article.newsSrc + "/" +
                                                encodeURIComponent(article.section) + "/" + encodeURIComponent(article.imgSrc)
                                        }}
                                            className="cardLink">
                                            <div className="cardColumn">


                                                <Row>
                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <div className="favCardTitle">
                                                            {article.title}
                                                            <IconContext.Provider value={{ className: "share_symbol" }}>
                                                                <Example title={article.title} shareUrl={article.webUrl} newsSrc={article.newsSrc} />
                                                            </IconContext.Provider>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>

                                                        <ResponsiveEmbed aspectRatio='16by9' className="cardImgBox" >
                                                            <Image src={article.imgSrc} className="cardImg"></Image>
                                                        </ResponsiveEmbed>
                                                        {
                                                            //<img src={article.imgSrc} className="favCardImg" />
                                                        }

                                                    </Col>
                                                </Row>
                                                <Row className="searchCardLastRow">
                                                    <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                                        <div className="searchCardDate">
                                                            {article.published_date.substring(0, 10)}
                                                        </div>
                                                    </Col>
                                                    <Col xs={8} sm={8} md={8} lg={8} xl={8} className="searchCardSectionWrapper">
                                                        <div className="searchCardSection">
                                                            {setSectionBg(article.section)}
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Link>
                                    </Col>


                                ))}
                                {this.state && this.state.nyTimes && this.state.nyTimes.map((article, index) => (


                                    <Col key={index + 10} xs={12} sm={12} md={3} lg={3} xl={3} className="favCol">
                                        <Link to={{
                                            pathname: "/expanded/" + encodeURIComponent(article.articleData) + "/" + article.newsSrc + "/" +
                                                encodeURIComponent(article.section) + "/" + encodeURIComponent(this.setImage(article.multimedia))
                                        }}
                                            className="cardLink">
                                            <div className="cardColumn">

                                                <Row>
                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <div className="favCardTitle">
                                                            {article.title}
                                                            <IconContext.Provider value={{ className: "share_symbol" }}>
                                                                <Example title={article.title} shareUrl={article.articleData} newsSrc={article.newsSrc} />
                                                            </IconContext.Provider>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <ResponsiveEmbed aspectRatio='16by9' className="cardImgBox" >
                                                            <Image src={this.setImage(article.multimedia)} className="cardImg"></Image>
                                                        </ResponsiveEmbed>
                                                        {/* {<div>
                                                            <img src={this.setImage(article.multimedia)} className="favCardImg" />
                                                        </div> */}

                                                    </Col>
                                                </Row>
                                                <Row className="searchCardLastRow">
                                                    <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                                        <div className="searchCardDate">
                                                            {article.published_date.substring(0, 10)}
                                                        </div>
                                                    </Col>
                                                    <Col xs={8} sm={8} md={8} lg={8} xl={8} className="searchCardSectionWrapper">
                                                        <div className="searchCardSection">
                                                            {setSectionBg(article.section)}
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Link>
                                    </Col>


                                ))}

                            </Row>

                        </>
                    }

                </Container>
            }
        </>)
    }
}
class ExpandedCard extends Component {
    constructor() {
        super();
        this.state = {
            link: "", title: null, imgSrc: null, date: null, initialDescription: null, newsSrc: null,
            remainingDescription: null, webUrl: null, showExpandedDesc: false, showMoreButton: true, fullDesc: null,
            articleData: null, section: null, loading: true
        }
        this.all_content = {}
        this.handleBookmarkClick = this.handleBookmarkClick.bind(this);
        this.removeBookmarkItem = this.removeBookmarkItem.bind(this);
        this.findInitialDesc = this.findInitialDesc.bind(this);
        this.findRemainingDesc = this.findRemainingDesc.bind(this);
        this.handleExpandMore = this.handleExpandMore.bind(this);
        this.handleExpandLess = this.handleExpandLess.bind(this);
        this.addToLocalStorage = this.addToLocalStorage.bind(this);
        this.removeFromLocalStorage = this.removeFromLocalStorage.bind(this);
        this.setGuardianImage = this.setGuardianImage.bind(this);
        this.hashtagText = ["CSCI_571_NewsApp"]

        // this.link = ""
    }
    findInitialDesc(desc) {
        var sentences = desc.split(".");
        var indx=0;
        var allSentences=[];
        for(var idx=0;idx<sentences.length;idx++){
            if(sentences[idx].length!=0){
                allSentences[indx]=sentences[idx]
                indx=indx+1;
            }

        }

        var count=allSentences.length;
        if(count>4){
            count = 4
            this.setState({ showMoreButton: true })
        }
        else{
            //count is less than or equal to four
            count=allSentences.length;
            this.setState({ showMoreButton: false })
        }
        
        console.log("count is")
        console.log(count)
        var description = ""
        for (var i = 0; i < count; i++) {
            //checking the below if condition because when you split, you might get an empty string 
            if (allSentences[i].length != 0) {
                // suppose the sentence is like
                // "hello." when u split, you get hello and " so thats why check this
                if (allSentences[i] == "\"") {
                    description = description + "." + allSentences[i]

                }
                else {
                    if (i == 0) {
                        description = allSentences[i] + ". "
                    }
                    else {
                        description = description + allSentences[i] + ". "
                    }
                }
            }
        }
        console.log("description")
        console.log(description)
        return description;

    }
    findRemainingDesc(desc) {
        var sentences = desc.split(".");
        var indx=0;
        var allSentences=[];
        for(var idx=0;idx<sentences.length;idx++){
            if(sentences[idx].length!=0){
                allSentences[indx]=sentences[idx]
                indx=indx+1;
            }

        }
        
        var listLength;
        var remainingSentences;
       
        if (allSentences.length > 4) {
            listLength = allSentences.length + 1
            remainingSentences = allSentences.slice(4, listLength)
        }
        else {
            return "";//modify if needed to suit the behaviour
        }
        var description = ""
        for (var i = 0; i < remainingSentences.length; i++) {
            if (remainingSentences[i].length != 0) {
                if (i == 0) {
                    description = remainingSentences[i] + ". "
                }

                else {
                    description = description + remainingSentences[i] + ". "
                }
            }
        }
        return description;

    }
    setGuardianImage(article_content) {
        if (article_content.blocks
            && article_content.blocks.main
            && article_content.blocks.main.elements[0].assets
            && article_content.blocks.main.elements[0].assets.length != 0
            && article_content.blocks.main.elements[0].assets[article_content.blocks.main.elements[0].assets.length - 1].file) {
            return article_content.blocks.main.elements[0].assets[article_content.blocks.main.elements[0].assets.length - 1].file

        }
        else {
            return 'https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png'
        }
        //.blocks.main.elements[0].assets[this.all_content.blocks.main.elements[0].assets.length - 1].file 
    }
    componentDidMount() {

        const { articleData } = this.props.match.params
        const { articleSource } = this.props.match.params
        const { articleSection } = this.props.match.params
        const { articleImage } = this.props.match.params
        //imgSrc holds noimg for Guardian

        //console.log({ article_data })
        var article_data = decodeURIComponent(articleData)
        var news_src = decodeURIComponent(articleSource)
        var sectionName = decodeURIComponent(articleSection)
        var imageSrc = decodeURIComponent(articleImage)
        console.log("HEYYY IM HERE")
        console.log(article_data)
        console.log(news_src)
        console.log(sectionName)
        console.log(imageSrc)

        const fetch = require('node-fetch');

        if (news_src == "Guardian" || news_src == "GUARDIAN") {
            console.log("Inside fetching Guardian article expanded card")
            this.state.link = "http://smaranitreact.us-east-1.elasticbeanstalk.com/GuardianDetailedArticle?articleId=" + article_data

            fetch(this.state.link)
                .then(res => {
                    return res.json()
                })
                .then(jsonArticles => {
                    console.log("fetching")
                    this.all_content = jsonArticles.response.content
                    console.log(jsonArticles)
                    this.setState({ newsSrc: "GUARDIAN" })
                    this.setState({ section: sectionName })
                    //this.setState({section: })
                    this.setState({ title: this.all_content.webTitle })
                    this.setState({ imgSrc: this.setGuardianImage(this.all_content) })
                    this.setState({ date: this.all_content.webPublicationDate.substring(0, 10) })
                    this.setState({ initialDescription: this.findInitialDesc(this.all_content.blocks.body[0].bodyTextSummary) })
                    this.setState({ remainingDescription: this.findRemainingDesc(this.all_content.blocks.body[0].bodyTextSummary) })
                    this.setState({ fullDesc: this.all_content.blocks.body[0].bodyTextSummary })
                    this.setState({ webUrl: this.all_content.webUrl });
                    //articleData is articleId in the case of Guardian news
                    this.setState({ articleData: article_data });

                    //if item is already in local storage, then set bookmark symbol to d
                    if (localStorage.getItem("bookmarkObject") != null) {
                        var retrievedObject = localStorage.getItem('bookmarkObject');//its a JSONstr
                        //console.log('retrievdObject: ', JSON.parse(retrievedObject));
                        var obj = JSON.parse(retrievedObject)
                        var all_articles = obj["articles"]
                        for (var i = 0; i < all_articles.length; i++) {
                            if (all_articles[i].articleData == article_data) {
                                this.setState({ bookmarkClicked: true })
                                return
                            }
                        }
                    }

                });
        }
        else if (news_src == "NY" || news_src == "NYTIMES" || news_src == "NYTimes") {
            //this.setState({show:false})
            console.log("Inside fetching NY article expanded card")
            this.state.link = "http://smaranitreact.us-east-1.elasticbeanstalk.com/NYDetailedArticle?articleUrl=" + article_data

            fetch(this.state.link)
                .then(res => {
                    return res.json()
                })
                .then(jsonArticles => {
                    console.log("fetching")
                    console.log(jsonArticles.response)

                    this.setState({ newsSrc: "NYTIMES" })
                    this.setState({ section: sectionName })
                    this.setState({ title: jsonArticles.response.docs[0].headline.main })
                    console.log(jsonArticles.response.docs[0].headline.main)
                    this.setState({ imgSrc: imageSrc })
                    //console.log(this.props.imgSrc)
                    this.setState({ date: jsonArticles.response.docs[0].pub_date.substring(0, 10) })
                    this.setState({ initialDescription: this.findInitialDesc(jsonArticles.response.docs[0].abstract) })
                    this.setState({ remainingDescription: this.findRemainingDesc(jsonArticles.response.docs[0].abstract) })
                    this.setState({ fullDesc: jsonArticles.response.docs[0].abstract })
                    this.setState({ webUrl: jsonArticles.response.docs[0].web_url })
                    //articleData holds article.url in case of Nytimes
                    this.setState({ articleData: article_data });
                    console.log("abstract")
                    console.log(jsonArticles.response.docs[0].abstract)
                    if (localStorage.getItem("bookmarkObject") != null) {
                        var retrievedObject = localStorage.getItem('bookmarkObject');//its a JSONstr
                        //console.log('retrievdObject: ', JSON.parse(retrievedObject));
                        var obj = JSON.parse(retrievedObject)
                        var all_articles = obj["articles"]
                        for (var i = 0; i < all_articles.length; i++) {
                            if (all_articles[i].articleData == article_data) {
                                this.setState({ bookmarkClicked: true })
                                return
                            }
                        }
                    }
                });
        }
    }
    addToLocalStorage() {
        var retrievedObject;
        var obj, jsonStr, all_articles;
        console.log("adding to local storage")
        if (localStorage.getItem('bookmarkObject') != null) {
            retrievedObject = localStorage.getItem('bookmarkObject');//its a JSONstr
            console.log('retrievedObject: ', JSON.parse(retrievedObject));
            obj = JSON.parse(retrievedObject)
            all_articles = obj["articles"]//whatever is retreived from local storage under the key array. It is an array of objects
            var title, img, date, desc, newsSrc, webUrl, section, articleData;
            var flag = 0;

            for (var i = 0; i < all_articles.length; i++) {
                title = all_articles[i].title
                img = all_articles[i].imgSrc
                date = all_articles[i].date
                desc = all_articles[i].desc
                newsSrc = all_articles[i].newsSrc
                webUrl = all_articles[i].webUrl
                section = all_articles[i].section
                articleData = all_articles[i].articleData


                if (title == this.state.title && img == this.state.imgSrc &&
                    date == this.state.date && desc == this.state.fullDesc && newsSrc == this.state.newsSrc &&
                    webUrl == this.state.webUrl
                    && section == this.state.section
                    && articleData == this.state.articleData) {
                    flag = 1;
                    break;
                }

            }
            if (flag == 0) {
                console.log(all_articles)
                all_articles.push({
                    "title": this.state.title, "imgSrc": this.state.imgSrc,
                    "date": this.state.date, "desc": this.state.fullDesc,
                    "newsSrc": this.state.newsSrc, "webUrl": this.state.webUrl,
                    "section": this.state.section,
                    "articleData": this.state.articleData
                });
                jsonStr = JSON.stringify(obj);
                localStorage.setItem('bookmarkObject', jsonStr)
                console.log('insertedObject: ', JSON.parse(jsonStr));
            }
        }
        else {
            obj = { "articles": [] }
            //obj = JSON.parse(retrievedObject)
            obj['articles'].push({
                "title": this.state.title, "imgSrc": this.state.imgSrc,
                "date": this.state.date, "desc": this.state.fullDesc,
                "newsSrc": this.state.newsSrc, "webUrl": this.state.webUrl,
                "section": this.state.section,
                "articleData": this.state.articleData
            });
            jsonStr = JSON.stringify(obj);
            localStorage.setItem('bookmarkObject', jsonStr)
            console.log('insertedObject: ', JSON.parse(jsonStr));
        }
    }
    removeFromLocalStorage() {
        var retrievedObject;
        var obj, newObj, jsonStr, all_articles;
        newObj = { "articles": [] }
        console.log("local storage before removing is")
        console.log(localStorage)
        if (localStorage.getItem('bookmarkObject') != null) {
            retrievedObject = localStorage.getItem('bookmarkObject');//its a JSONstr
            console.log('retrievedObject before removing: ', JSON.parse(retrievedObject));
            obj = JSON.parse(retrievedObject)
            all_articles = obj["articles"]//whatever is retreived from local storage under the key array. It is an array of objects
            var title, img, date, desc, newsSrc, webUrl, section, articleData;
            console.log(all_articles)

            for (var i = 0; i < all_articles.length; i++) {
                title = all_articles[i].title
                img = all_articles[i].imgSrc
                date = all_articles[i].date
                desc = all_articles[i].desc
                newsSrc = all_articles[i].newsSrc
                webUrl = all_articles[i].webUrl
                section = all_articles[i].section
                articleData = all_articles[i].articleData

                if (
                    articleData != this.state.articleData
                ) {
                    console.log("Pushing other")
                    newObj['articles'].push({
                        "title": title, "imgSrc": img,
                        "date": date, "desc": desc,
                        "newsSrc": newsSrc,
                        "webUrl": webUrl,
                        "section": section,
                        "articleData": articleData
                    });

                }

            }
            console.log("articles supposed to be inserted ")
            console.log(newObj['articles'])
            if (newObj['articles'].length == 0) {
                console.log("no articles are present! DO NOT ENTER ")
                //if there are no articles remaining after removing a particular article , remove the bookmarkobject from localstorage
                localStorage.removeItem("bookmarkObject");
            }
            else {
                localStorage.removeItem("bookmarkObject");
                console.log("removed")
                console.log(localStorage)

                jsonStr = JSON.stringify(newObj);
                localStorage.setItem("bookmarkObject", jsonStr)
                console.log("added back")
                console.log(localStorage)
            }
        }

    }
    handleBookmarkClick() {
        console.log("Inside clicking the bookmark of a detailed article")
        //saving bookmarked articles to local storage
        this.addToLocalStorage()
        //localStorage.clear()

        this.setState({ bookmarkClicked: true });
        //dont use this.state.bookmarkClicked: gives an error
        var toastMessage = "Saving " + this.state.title
        toast(toastMessage, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            bodyClassName: "toast_msg" //className you need to mention if you want changes in css to the body
        });
    }

    removeBookmarkItem() {
        console.log("Inside removing from the bookmark of a detailed article")
        //saving bookmarked articles to local storage
        this.removeFromLocalStorage()
        //localStorage.clear()

        this.setState({ bookmarkClicked: false });
        //dont use this.state.bookmarkClicked: gives an error
        var toastMessage = "Removing " + this.state.title
        console.log(toastMessage)
        toast(toastMessage, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            bodyClassName: "toast_msg" //className you need to mention if you want changes in css to the body
        });
    }
    handleExpandMore(event) {
        event.stopPropagation();
        event.preventDefault();
        console.log("inside click of handle more")
        // document.getElementById('initialDesc').scrollIntoView();

        var articleDescEl = document.getElementById('remainingDesc');
        var rect = articleDescEl.getBoundingClientRect();
        console.log(rect.top);
        console.log(rect.width);
        scroll.scrollTo(rect.top + window.scrollY - 100);

        this.setState({ showExpandedDesc: true })
        this.setState({ showMoreButton: false })
        //window.scrollTo(document.body.scrollHeight,document.body.scrollHeight);
        //window.scrollTo({bottom: document.body.scrollHeight, right: 0, behavior: 'smooth' });
    }
    handleExpandLess(event) {
        event.stopPropagation();
        event.preventDefault();
        console.log("inside click of handle less")
        scroll.scrollToTop(); //scroll to TOP
        //this.state.showMoreButton =false
        this.setState({ showExpandedDesc: false })
        this.setState({ showMoreButton: true })
    }
    render() {
        console.log("came inside renderinggg of expanded")
        return (<div className="expandedCardWrapper">
            {
                !this.state.imgSrc
                && !this.state.articleData &&
                <div className="spinner">
                    <BounceLoader

                        size={60}
                        color={"#123abc"}
                        loading={this.state.loading}
                    />
                    Loading
                    </div>
            }
            {
                this.state && this.state.imgSrc
                && this.state.articleData &&
                <>
                    <Container fluid >
                        <div className="detailedArticle">
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    {
                                        <div className="detailedCardTitle">
                                            {
                                                this.state.title
                                            }
                                        </div>
                                    }
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={5} sm={5} md={5} lg={9} xl={9}>
                                    {
                                        <div className="detailedCardDate">
                                            {
                                                this.state.date
                                            }
                                        </div>
                                    }
                                </Col>
                                <Col xs={5} sm={5} md={5} lg={2} xl={2}>

                                    <div className="detailedCardIcons">
                                        <FacebookShareButton url={this.state.webUrl}
                                            data-tip data-for='facebook'
                                            hashtag="#CSCI_571_NewsApp">
                                            <FacebookIcon size={30} round={true} />
                                        </FacebookShareButton>
                                        <ReactTooltip id='facebook' type='dark' effect='solid'>
                                            <span>Facebook</span>
                                        </ReactTooltip>

                                        <TwitterShareButton url={this.state.webUrl}
                                            data-tip data-for='twitter'
                                            hashtags={this.hashtagText}>
                                            <TwitterIcon size={30} round={true} />
                                        </TwitterShareButton>
                                        <ReactTooltip id='twitter' type='dark' effect='solid'>
                                            <span>Twitter</span>
                                        </ReactTooltip>

                                        <EmailShareButton url={this.state.webUrl}
                                            data-tip data-for='email'
                                            subject="#CSCI_571_NewsApp">
                                            <EmailIcon size={30} round={true} />
                                        </EmailShareButton>
                                        <ReactTooltip id='email' type='dark' effect='solid'>
                                            <span>Email</span>
                                        </ReactTooltip>

                                    </div>
                                </Col>
                                <Col xs={2} sm={2} md={2} lg={1} xl={1}>
                                    {
                                        <div className="detailedCardBookmark">
                                            {
                                                console.log("check")

                                            }
                                            {
                                                !this.state.bookmarkClicked &&
                                                <IconContext.Provider value={{ color: "red" }}>

                                                    <div>
                                                        <FaRegBookmark data-tip data-for='bookmark' size={25}
                                                            className="unclickedBookmarkIcon"
                                                            onClick={this.handleBookmarkClick} />

                                                        <ReactTooltip id='bookmark' type='dark' effect='solid'>
                                                            <span>Bookmark</span>
                                                        </ReactTooltip>
                                                    </div>

                                                </IconContext.Provider>
                                            }

                                            {
                                                console.log(this.state.bookmarkClicked)
                                                // console.log(this.state.bookmarkClicked)
                                            }
                                            {this.state.bookmarkClicked &&
                                                <IconContext.Provider value={{
                                                    color: "red", className: "bookmark_clicked_card"
                                                }}>
                                                    <div>
                                                        <FaBookmark data-tip data-for='bookmark'
                                                            size={25}
                                                            className="clickedBookmarkIcon"
                                                            onClick={this.removeBookmarkItem} />
                                                        <ReactTooltip id='bookmark' type='dark' effect='solid'>
                                                            <span>Bookmark</span>
                                                        </ReactTooltip>

                                                    </div>
                                                </IconContext.Provider>
                                            }
                                            <ToastContainer
                                                transition={Zoom}
                                                position="top-center"
                                                autoClose={2000}
                                                hideProgressBar
                                                newestOnTop={false}
                                                closeOnClick
                                                rtl={false}
                                                pauseOnVisibilityChange={false}
                                                draggable={false}
                                            />
                                        </div>

                                    }
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <img src={this.state.imgSrc} className="detailedCardImg"></img>
                                </Col>
                            </Row>
                            <Row className="detailedCardDesc">
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>

                                    <div id="initialDesc">
                                        {
                                            this.state.initialDescription
                                        }
                                    </div>
                                    <div className="expandMore">
                                        {this.state.showMoreButton &&
                                            <MdExpandMore size={25} onClick={this.handleExpandMore} />
                                        }
                                    </div>

                                    <div id="remainingDesc">
                                        {this.state.showExpandedDesc &&
                                            <div>
                                                {
                                                    this.state.remainingDescription
                                                }
                                            </div>
                                        }
                                    </div>
                                    {this.state.showExpandedDesc &&
                                        <div className="expandLess">
                                            <MdExpandLess size={25} onClick={this.handleExpandLess} />
                                        </div>
                                    }

                                </Col>
                            </Row>
                            {/* {this.state.showExpandedDesc &&
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>

                                        <div id="remainingDesc">
                                            {
                                                this.state.remainingDescription
                                            }
                                        </div>
                                        <div className="expandLess">
                                            <MdExpandLess size={25} onClick={this.handleExpandLess} />
                                        </div>
                                    </Col>
                                </Row> */}


                        </div>
                    </Container>

                    <CommentBox articleNumber={this.state.articleData} newsSrc={this.state.articleSource}
                        section={this.state.articleSection} img={this.state.articleImage} />
                </>
            }

        </div>);
    }
}

export default withRouter(Navigation);
