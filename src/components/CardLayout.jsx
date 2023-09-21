import React from 'react';
import Card from './Card';

function CardLayout() {
    const cards = [
        { id: 1, name: 'Meer Coffee', img: "../imgs/meer.jpeg", location: "52 To Ngoc Van", foodRate: "4/5", serviceRate: "5/5", decorationRate: "2/5", igLink: "https://www.instagram.com/meercoffee_hanoi/"},
        { id: 2, name: 'Loi Nho Kafe', img: "../imgs/loinho.png", location: "45 Vong Thi",foodRate: "2/5", serviceRate: "3/5", decorationRate: "5/5", igLink: "https://www.instagram.com/loinhokafe/" },
        { id: 3, name: 'Lacaf', img: "../imgs/lacaf.png",location: "16A/26 Dang Thai Mai", foodRate: "4/5", serviceRate: "4/5", decorationRate: "4/5", igLink: "https://www.instagram.com/lacafhn/"},
        { id: 4, name: 'How Cafe', img: "../imgs/how.png", location: "22/185A Trich Sai" ,foodRate: "3/5", serviceRate: "4/5", decorationRate: "3/5", igLink: "https://www.instagram.com/how_cafe/"},
        { id: 5, name: 'Brik Hand Brew', img: "../imgs/brik.png", location: "15/6 Dang Thai Mai" ,foodRate: "4/5", serviceRate: "5/5", decorationRate: "4/5", igLink:"https://www.instagram.com/brikhandbrew/"},
        { id: 6, name: 'Gather Vietnam', img: "../imgs/gather.png", location: "32/12 Dang Thai Mai",foodRate: "4/5", serviceRate:"3/5" , decorationRate: "5/5", igLink: "https://www.instagram.com/gathervietnam/" },
        { id: 7, name: 'Hang Kien', img: "../imgs/hangkien.png", location: "34/31 Hoang Cau",foodRate: "4/5", serviceRate: "4/5", decorationRate: "5/5", igLink: "https://www.instagram.com/hangkien.coffee/"},
        { id: 8, name: 'Hatchin Coffee', img: "../imgs/hatchin.png", location: "8B Hai Ba Trung" ,foodRate: "3/5", serviceRate: "3/5", decorationRate: "3/5", igLink: "https://www.instagram.com/hatchincoffee/" },
        { id: 9, name: 'Eggyolk Specialty Coffee', img: "../imgs/eggyolk.png", location: "5A Chan Cam",foodRate: "3/5", serviceRate: "5/5", decorationRate: "3/5", igLink: "https://www.instagram.com/eggyolk.coffee/" },
        { id: 10, name: 'Olive Coffee and Cake', img: "../imgs/olive.png", location: "201 Kham Thien", foodRate: "4/5", serviceRate: "4/5", decorationRate: "4/5", igLink: "https://www.instagram.com/olive.coffee_/" },
    ];

    return (
        <table>
            <tbody>
                <tr>
                    <td><Card name={cards[0].name} img = {cards[0].img} location={cards[0].location} foodRating = {cards[0].foodRate} serviceRating = {cards[0].serviceRate} decorationRating = {cards[0].decorationRate} igLink = {cards[0].igLink} /></td>
                    <td><Card name={cards[1].name} img = {cards[1].img} location={cards[1].location} foodRating = {cards[1].foodRate} serviceRating = {cards[1].serviceRate} decorationRating = {cards[1].decorationRate} igLink = {cards[1].igLink}/></td>
                </tr>
                <tr>
                    <td><Card name={cards[2].name} img = {cards[2].img} location={cards[2].location} foodRating = {cards[2].foodRate} serviceRating = {cards[2].serviceRate} decorationRating = {cards[2].decorationRate} igLink = {cards[2].igLink}/></td>
                    <td><Card name={cards[3].name} img = {cards[3].img}location={cards[3].location} foodRating = {cards[3].foodRate} serviceRating = {cards[3].serviceRate} decorationRating = {cards[3].decorationRate} igLink = {cards[3].igLink}/></td>
                </tr>

                <tr>
                    <td><Card name={cards[4].name} img = {cards[4].img} location={cards[4].location} foodRating = {cards[4].foodRate} serviceRating = {cards[4].serviceRate} decorationRating = {cards[4].decorationRate} igLink = {cards[4].igLink}/></td>
                    <td><Card name={cards[5].name} img = {cards[5].img} location={cards[5].location} foodRating = {cards[5].foodRate} serviceRating = {cards[5].serviceRate} decorationRating = {cards[5].decorationRate} igLink = {cards[5].igLink}/></td>
                </tr>

                <tr>
                    <td><Card name={cards[6].name} img = {cards[6].img} location={cards[6].location} foodRating = {cards[6].foodRate} serviceRating = {cards[6].serviceRate} decorationRating = {cards[6].decorationRate} igLink = {cards[6].igLink}/></td>
                    <td><Card name={cards[7].name} img = {cards[7].img} location={cards[7].location} foodRating = {cards[7].foodRate} serviceRating = {cards[7].serviceRate} decorationRating = {cards[7].decorationRate} igLink = {cards[7].igLink}/></td>
                </tr>

                <tr>
                    <td><Card name={cards[8].name} img = {cards[8].img} location={cards[8].location} foodRating = {cards[8].foodRate} serviceRating = {cards[8].serviceRate} decorationRating = {cards[8].decorationRate} igLink = {cards[8].igLink}/></td>
                    <td><Card name={cards[9].name} img = {cards[9].img} location={cards[9].location} foodRating = {cards[9].foodRate} serviceRating = {cards[9].serviceRate} decorationRating = {cards[9].decorationRate} igLink = {cards[9].igLink}/></td>
                </tr>

            </tbody>
        </table>
    );
}

export default CardLayout;
