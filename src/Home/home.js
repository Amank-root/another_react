import React from 'react'




function Home() {
    return (

        <>
            <div className="nav" id="waste">
                <div className="upper">
                    <h1><a href="/" title="logo">Amank</a></h1>
                    <a id="somee">
                        <img className="show" src="https://img.icons8.com/material-outlined/24/000000/menu--v3.png" onClick="signn()" /></a>
                </div>
                <div className="nav-item">
                    <ul id="downn" className="hide">
                        <li className="hide"><a>Home</a></li>
                        {/* <!-- <li className="hide"><a href="#">Services</a></li> -->
                        <!-- <li className="hide"><a href="#">Contact</a></li> --> */}
                        <li className="hide"><a href="#head">About</a></li>
                        {/* <!-- <li className="show">==</li> --> */}
                    </ul>
                </div>
            </div>
            {/* Header */}
            <section className="hero" id="head">
                <div className="container flow">
                    <div className="hero__content flow">
                        <h1 className="section-title">Welcome to Fantasy_Expert</h1>
                        <p>This your one and only Fantasy_Expert here inviting you to have a look at our <q><b>Edits</b></q>.</p>
                        <p>For now we are only uploading limited picture because we prefer quality rather then quantity.</p>
                        <p>Hope our <q><b>Edits</b></q> satisfy your need.</p>
                        <div className="flex-group">
                            <a href="#featured-articles" className="btn btn--primary">Our Latest Edits.</a>
                            <a href="./blog" className="btn btn--neutral">Our Recent Uploads.</a>
                        </div>
                    </div>
                    <div>

                        <img src="//unsplash.it/510" alt="" className="hero__image" />
                    </div>
                </div>
            </section>

            <section id="featured-articles" className="featured-articles">
                <div className="container flow">
                    <h2 className="section-title text-center ">Our Latest Edits</h2>
                    <p className="text-center">Here the newly uploaded <q><b>Edits</b></q> will show up.</p>
                    <ul role="list" className="articles__list flow">
                        <li>
                            <article className="snippet">
                                <img src="{{post.data.image}}" alt="{{post.data.imageAlt}}" className="snippet__image" />
                                <p className="snippet__meta">by <span><a href="https://www.instagram.com/amankushwaha_28/" style={{ color: 'var(--clr-neutral-900)' }}>Aman Kushwaha</a></span></p>
                                <p className="snippet__body">description</p>
                                <a href="{{post.url}}" className="btn btn--primary">Click To Dowload.</a>
                            </article>
                        </li>


                    </ul>
                </div>
            </section>

            {/* Article */}




        </>
    )
}

// let sign = document.getElementsByClassName('show')[0]
let sigp = document.getElementsByClassName('hide')[0]
// let waste = document.getElementById('waste')

// sigp.style.display = 'none';
// let somee = document.getElementById('dash')
// sigp.style = '@media only screen and (max-width:1100px) {display:none}';

function signn() {

    console.log("clicked");
    if (sigp.style.display === 'none') {
        sigp.style.display = 'flex';
        // waste.style.padding = '4%';
        console.log('hello')
    }
    else {
        sigp.style.display = 'none'
        // waste.style.padding = '4% 4% 0% 4%';
        // sign.style.display
        console.log('hi')
    }
}


export default Home
