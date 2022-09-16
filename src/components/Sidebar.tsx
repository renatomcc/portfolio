import React1 from "react";
import '../styles/Sidebar.sass'
import "aos/dist/aos.css"

export const Sidebar = () => {
    return (
        <div className="sidebars"
            data-aos="fade-up"
            data-aos-delay="1000"
        >
            <div className="sidebarLeft">
                <ul>
                    <li>
                        <a href="https://github.com/renatomcc/" target="_blank">
                            <svg
                                viewBox="0 0 24 24"
                                id="githubSVG"
                            >
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 
                                    2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/renato-castro-b54b82249/" target="_blank">
                            <svg
                                viewBox="0 0 45.959 45.959"
                                id="linkedinSVG"
                            >
                                <path d="M5.392,0.492C2.268,0.492,0,2.647,0,5.614c0,2.966,2.223,5.119,5.284,5.119c1.588,0,2.956-0.515,3.957-1.489
			                        c0.96-0.935,1.489-2.224,1.488-3.653C10.659,2.589,8.464,0.492,5.392,0.492z M7.847,7.811C7.227,8.414,6.34,8.733,5.284,8.733
			                        C3.351,8.733,2,7.451,2,5.614c0-1.867,1.363-3.122,3.392-3.122c1.983,0,3.293,1.235,3.338,3.123
			                        C8.729,6.477,8.416,7.256,7.847,7.811z"/>
                                <path d="M0.959,45.467h8.988V12.422H0.959V45.467z M2.959,14.422h4.988v29.044H2.959V14.422z" />
                                <path d="M33.648,12.422c-4.168,0-6.72,1.439-8.198,2.792l-0.281-2.792H15v33.044h9.959V28.099c0-0.748,0.303-2.301,0.493-2.711
			                        c1.203-2.591,2.826-2.591,5.284-2.591c2.831,0,5.223,2.655,5.223,5.797v16.874h10v-18.67
			                        C45.959,16.92,39.577,12.422,33.648,12.422z M43.959,43.467h-6V28.593c0-4.227-3.308-7.797-7.223-7.797
			                        c-2.512,0-5.358,0-7.099,3.75c-0.359,0.775-0.679,2.632-0.679,3.553v15.368H17V14.422h6.36l0.408,4.044h1.639l0.293-0.473
			                        c0.667-1.074,2.776-3.572,7.948-3.572c4.966,0,10.311,3.872,10.311,12.374V43.467z"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div >
            <div className="sidebarRight">
                <div className="sidebarEmail">
                    <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=renattocasttro@gmail.com" id="emailSidebar" target="_blank">RenattoCasttro@gmail.com</a>
                </div>
            </div>
        </div>


    )
}