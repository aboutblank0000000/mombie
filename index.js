.box{
    position: static;
    width: 343px;
    height: 124px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(188, 204, 214, 0.4);
    border-radius: 8px;
    margin: 8px auto;
}

.profile-frame{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    position: absolute;
    width: 83px;
    height: 83px;
    margin-left: 8px;
    margin-top: 8px;
}

.profile-photo{
    /* display: none; */
    position: static;
    width: 83px;
    height: 83px;
    box-sizing: border-box;
    overflow: hidden;
}

.image{
    /* display: none; */
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    object-fit: cover;
}

.tag-frame{
    position: absolute;
    width: 57px;
    height: 13px;
    left: 4px;
    top: 4px;
    background: #FFFFFF;
    border-radius: 34px;
    border: 1px solid transparent;
    background: linear-gradient(white, white), 
                linear-gradient(#F17D87, #FFC82F); 
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
}

.nametag{
    position: static;
    font-family: 'Mitr', serif;
    font-style: normal;
    font-weight: 300;
    font-size: 6px;
    line-height: 9px;
    color: #F4808A;
    margin: 2px 0;
    white-space: nowrap;
    width: 100%;
    text-align: center;
}

.profile-detail{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: static;
    width: 180px;
    height: 83px;
    margin: 0 99px;
}

.name {
    display: inline-flex;
    position: static;
    height: 19px;
    right: 0%;
    font-family: 'Mitr';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 14px;
    color: #000000;
    max-width: 100px;
    width: 300%;
    white-space: nowrap;
}
.age {
    position: static;
    height: 19px;
    font-family: 'Mitr';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 14px;
    color: #000000;
    width: 135%;
}

.sub-content {
    /* display: none; */
    position: static;
    height: 19px;
    font-family: 'Mitr';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    color: #686868;
    width: 220%;
}

.ans {
    /* display: none; */
    position: static;
    height: 19px;
    font-family: 'Mitr';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    color: #000000;
    width: 220%;
}

.salary {
    position: absolute;
    width: 123px;
    height: 17px;
    margin-left: 8px;
    margin-top: 99px;
    font-family: 'Mitr';
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    font-size: 16px;
    color: #000000;
    white-space: nowrap;
}

.job-type{
    font-size: 12px;
    color: #9C9C9C;
}

.job{
    font-size: 12px;
    color: #9C9C9C;
}

.vaccined-frame{
    position: absolute;
    width: 24px;
    height: 10px;
    margin-left: 6px;
    margin-top: 65px;
    white-space: nowrap;
}

.vc2{
    margin-left: -10.25px;
}

.vc3{
    margin-left: -10.5px;
}

.fav-button{
    position: absolute;
    margin-top: 90px;
    margin-left: 310px;
    display: flex;
    width: 26px;
    height: 26px;
    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.09);
    border-radius: 20px;
    /* display: none; */
}

.heart{
    /* display: none; */
    background: transparent;
    border: none;
    font-size: 16px;
    outline: none;
    margin-left: -0.8px;
    margin-top: 2px;
    cursor: pointer;
}

.button-frame{
    margin: 24px auto ;
    height: 48px;
    width: 343px;
}

.nq-button{
    position: absolute;
    height: 48px;
    width: 164px;
    /* margin-left: 16px; */
    background: linear-gradient(0deg, #FFD9DD 0%, #FFF4F5 100%);
    border-radius: 8px;
    cursor: pointer;
}

.nq-title{
    position: absolute;
    height: 25px;
    top: 11px;
    font-family: 'Mitr';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: #F65C69;
    width: 100%;
    text-align: center;
}

.cm-button{
    position: absolute;
    height: 48px;
    width: 164px;
    margin-left: 179px;
    background: linear-gradient(0deg, #F65C69 0%, #FFAFB8 100%);
    border-radius: 8px;
    cursor: pointer;
}

.cm-title{
    position: absolute;
    height: 25px;
    top: calc(50% - 25px/2 - 0.5px);
    font-family: 'Mitr';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: #FFFFFF;
    width: 100%;
    text-align: center;
}

.box{
    display: none;
}

.box:nth-child(1),
.box:nth-child(2),
.box:nth-child(3){
    display:flex;
}

.box-container{
    width: auto;
    height: 15%;
}
