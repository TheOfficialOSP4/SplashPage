import React from "react";
// import '../styles/teammate.scss';
const Teammate = ({name, github, linkedin, picture}) => {
    const handleClickLinkedIn = (url)=>{
        window.open(url,'_blank')
    };

    const handleClickGithub = (url)=>{
        window.open(url,'_blank')
    };

    
    return (
        <div className="team-information">
            <img className="profile-pic" src={picture} />
            <p className="name">{name}</p>
            <img className="linkedin" onClick={()=>{handleClickLinkedIn(linkedin)}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAYFBMVEUCdLP///8AbrCOstODrNAAbK+Yu9iyyuD5+/0Aaa7Z5/G60eT5/v4tebUAcrIAcLGVttVuospOi74AZazE1+gtfrjP4O2oxN3g7PTv9vo9hbxdlsRTkMEAYaptnciGsdO1AIjxAAADMklEQVRoge3b63aiMBAA4CQ6QEDCRUQIVt//LQu1rcpMtNuTy+7ZTM/pH5DPxJBMAmH8I/K03viKOs2vKFv+9RoAhK+YLd1/2TVUzG9UUF/tjfQsLyE3i92FoGe8m+2D7wq/RnXgrIcgNGPQs2Mw+8g2IpAtNmwbzN6ybZimNje2aEc7uK0qWMLhDWiylYRt2g95sWHORhqDLdSRf0VROio7bUM78FuMk5sen7RFO/KHmJyUnC738EjzzMkQT9ky5evofNkM0ZyfHOCELWrCLhzcaYQNHWEPTPmw5UjYo/ZjZ4SdteHK7cmGnKrzg3WatI+E7SKJJ+xqIuyLH5vt113qXOX2ZdomCr51MZKRfapMVrSLXs00jq3w4s0Fbcpb5Pl2k48XR1mTKV8T7JIv/Jgnpat5qjFPVSD0aTpp4W6G/Cw/V9X850z+W+cG0f6jUEwpVc3t5HVLsWvPczhVat22WpelkC+yetKu0Aro/SnGgxWIpsg/O6Xd0KcNezqVpGxxGfLHGJLvu1yxfn1wul5gr1OUbXXnN3OtUjashxLO05ut0MFmKRywghj25wR3kqZf/hc2Ktxi7xsqw7x+VhmKbsdWxEdukRvavB1b4BncfQx0i7Ni75+Veolu78o+n1/QhpzLhj1Rk4nHyEriJ7dhv6Y5PxK5jw37JzEecMF92dTkwpud40r3Zmd4Au/N5g0eLi3aWd53XY8nc5+XQJVuz863WoGUwFq6gx1Q32bNrgHUxy+qqv2JOmVEnbotu7kvFVA4bmyW7ONjhUpqiW5yYw/i8bqKEf0snudbsVGnJYk1G/T80Yqdoc6aWrOpndg9zksOO3RWsq4cKzYeIBVagp/PcmITT3NFj6+x/oZW7BMem4nFaDc2kRdIPFNAi1WubMCduhN7VyI62tGOdrSjHe1oRzva0Y52tKP979vF3bM5dJBT9i/nwGpK1nG/EIsOJsQDiarB1/jJWg9TsI77j6GDQD3+qp5ew2x7imhH+3+xA+4vCbmvJuR+opD7qLgOtH9Mc+bk3dPXoaBf9gsmxldQHNLLO5FLLpAE2Ce5JCjX/aGt5/2h7ff+UB5oX+w7yIhQ59n7IBwAAAAASUVORK5CYII="></img>
            <img className="github" onClick={()=>{handleClickGithub(github)}} src="https://i.pinimg.com/564x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg"></img>
        </div>
    )
};

export default Teammate;