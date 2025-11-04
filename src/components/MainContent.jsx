import flowerGif from './../assets/flowers.gif' 

export default function MainContent() {
    return(
        <>
            <div id="main-div">
                <img src={flowerGif} alt="handpicking flowers" id="flowersGif"></img>
                <p id="coming-text">coming soon.</p>
                <a href="https://www.instagram.com/itsbyihsan/" target="blank" id="ig-link">follow for updates.</a>
            </div>
        </>
    )
}