import React from "react";
import '../styles/Projects.sass'

export const Projects = () => {
    return (
        <div className="projects"
            data-aos="fade-left"
            data-aos-delay="100"
            id="Projects"
        >
            <div className="projectsTitle">Projects</div>
            <div className="projectsContent">

                <div className="projectItem"
                    data-aos="flip-down"
                    data-aos-delay="300"
                >
                    <div className="itemCard">
                        <img src="https://i.ibb.co/HVGPJG1/pokedex.png" alt="Pokedex" />
                        <div className="itemTitle">
                            <span>POKEDEX</span>
                        </div>
                        <div className="itemDescription">
                            <span>A complete pokedex created using <b>ReactJS, Typescript</b> and <b>consuming PokéAPI</b>.
                                <br /> This Pokedex contain some features such as <b>filter by ID, Name, Type or Favorites</b>
                                <br /> You can also <b>Search by Name</b> and see the <b>Shiny</b> form of a pokemon.</span>
                        </div>
                        <div className="icons">
                            <div className="gitHubIcon">
                                <a href="https://github.com/renatomcc/pokedex" target="_blank">
                                    <svg viewBox="-1 -1 18 18">
                                        <path d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z" />
                                    </svg>
                                </a>
                            </div>
                            <div className="goToIcon">
                                <a href="https://pokedex-renatomcc.netlify.app" target="_blank">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M13.5 10.5L21 3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16 3L21 3L21 8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21 14V19C21 20.1046 20.1046 21 19 21H12H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projectItem"
                    data-aos="flip-down"
                    data-aos-delay="500"
                >
                    <div className="itemCard">
                        <img src="https://i.ibb.co/JKxgYfH/dom-games.png" alt="DOM-Games" />
                        <div className="itemTitle">
                            <span>DOM-GAMES</span>
                        </div>
                        <div className="itemDescription">
                            <span>A few games created with <b>HTML, CSS</b> and<b> Javascript</b> with <b>DOM manipulation</b>.
                                <br /> The project contain the following games: <br />
                                <b>Tic Tac Toe,
                                    2048,
                                    Flappy Bird,
                                    Rock Paper Scissors,
                                    Hangman,
                                    Wordle,
                                    Memory and
                                    Genius</b>
                            </span>
                        </div>
                        <div className="icons">
                            <div className="gitHubIcon">
                                <a href="https://github.com/renatomcc/dom-games" target="_blank">
                                    <svg viewBox="-1 -1 18 18">
                                        <path d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z" /></svg>
                                </a>
                            </div>
                            <div className="goToIcon">
                                <a href="https://domgames-renatomcc.netlify.app" target="_blank">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M13.5 10.5L21 3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16 3L21 3L21 8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21 14V19C21 20.1046 20.1046 21 19 21H12H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="projectItem"
                    data-aos="flip-down"
                    data-aos-delay="300"
                >
                    <div className="itemCard">
                        <img src="https://i.ibb.co/YtzJYg6/countries.png" alt="Around the Globe" />
                        <div className="itemTitle">
                            <span>AROUND THE GLOBE</span>
                        </div>
                        <div className="itemDescription">
                            <span>A website with all the countries created with <b>ReactJS, Typescript</b> and <b>Countries API</b>.
                                <br /> You can <b> filter the countries by Region</b> and <b>Search by Name</b> and also click to see more informations such as <b>Capital, Region, Population, Languagues and Currencies</b>.</span>
                        </div>
                        <div className="icons">
                            <div className="gitHubIcon">
                                <a href="https://github.com/renatomcc/countries" target="_blank">
                                    <svg viewBox="-1 -1 18 18">
                                        <path d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z" />
                                    </svg>
                                </a>
                            </div>
                            <div className="goToIcon">
                                <a href="https://countries-renatomcc.netlify.app" target="_blank">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M13.5 10.5L21 3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16 3L21 3L21 8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21 14V19C21 20.1046 20.1046 21 19 21H12H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="projectItem"
                        data-aos="flip-down"
                        data-aos-delay="300"
                    >
                        <div className="itemCard">
                            <img src="https://i.ibb.co/wSWsWYh/poekdexv2.png" alt="Pokedexv2" />
                            <div className="itemTitle">
                                <span>POKEDEX 2.0</span>
                            </div>
                            <div className="itemDescription">
                                <span>A new pokedex created using <b>ReactJS, Typescript, Mantine Framework</b> and <b>Styled Components</b>.
                                    <br /> This Pokedex contain a lot more features and infos available on the <b>Modal</b>
                                    <br /> And also a lot more <b>Filter options.</b></span>
                            </div>
                            <div className="icons">
                                <div className="gitHubIcon">
                                    <a href="https://github.com/renatomcc/pokedexv2" target="_blank">
                                        <svg viewBox="-1 -1 18 18">
                                            <path d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="goToIcon">
                                    <a href="https://pokedexv2-renatomcc.netlify.app" target="_blank">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M13.5 10.5L21 3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16 3L21 3L21 8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M21 14V19C21 20.1046 20.1046 21 19 21H12H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div >
    )
}
