import React, { useState } from "react";
import UserLayout from "../../components/Layout/UserLayout";
import InnerHero from "../../components/InnerHero";
import CustomCategory from "../../components/CustomCategory";
import SecondCustomBanner from "../../components/SecondCustomBanner";
import FirstCustomBanner from "../../components/FirstCustomBanner";
import PublishBook from "../../components/PublishBook";
import Testimonial from "../../components/Testimonial";
import CustomPublication from "../../components/CustomPublication";
import Faq from "../../components/Faq";
import GetTouch from "../../components/GetTouch";

import { b1, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b2, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b3, b30, b31, b32, b33, b34, b4, b5, b6, b7, b8, b9 } from "../../asserts/images/";

const FeaturedAuthor = () => {
  return (
    <>
      <UserLayout>
        <InnerHero
          innerheroclass="featuredauthorBg"
          title="Become A Featured Author "
          subtitle=" Now!"
          column="col-md-12 text-center center-content featured-author-sec"
        //   para="Falcon Book Writing offers expert book writing services suited for books to be held in high esteem. Therefore, when creative professionalism comes together, this house assists its authors in developing compelling stories that intrigue their audience and gain readers around the world."
        />




<section className="new-pubb-secc">
	<div className="container">
		<div className="row">
			<div className="col-md-12 text-center">
				<div className="txtwrp">
				    
					<h2>Featured Authors Portfolio</h2>
				</div>
			</div>
		</div>
		<div className="row">
		    <div className="col-md-4">
				<div className="mainwrppp">
					<img src={b1}/>
					<div className="txtwrp">
						<h4>Book Title: <span>Thoughts</span></h4>
					    <h4>Author: <span className="auth-nam"> Florance Davis</span> </h4>
					</div>
          <a href="https://www.amazon.com/dp/B0D9QMHHQM" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
		    <div className="col-md-4">
				<div className="mainwrppp">
					<img src={b2}/>
					<div className="txtwrp">
						<h4>Book Title: <span>The Quest Of Man</span></h4>
					    <h4>Author: <span className="auth-nam"> Moniram Manbode</span> </h4>
					</div>
					<a href="https://www.amazon.com/dp/B0D98KPTZ1" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			<div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b3}/>
					<div className="txtwrp">
						<h4>Book Title: <span>Too Deep Too Sleep</span></h4>
					    <h4>Author: <span className="auth-nam"> Eric James</span> </h4>
					</div>
					<a href="https://www.amazon.com/dp/B0D8WC7QSC" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			
		  <div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b4}/>
					<div className="txtwrp">
						<h4>Book Title: <span>Vampire Quest</span></h4>
					    <h4>Author: <span className="auth-nam"> William Bedford</span> </h4>
					</div>
					<a href="https://www.amazon.com/Vampire-Quest-Angel-Vs-ebook/dp/B0D6L3N7DP/ref=sr_1_4?crid=X6TENNJU6952&dib=eyJ2IjoiMSJ9.FNd2WnrrN_wxnYiexWSah0UMmtHKuG_qZonNViyW6LJHgDcHK9IOGFybAp0Z7NO6LPVCgQwIODuNnPGvJuymdtCFiqtKE_uQkl2HgdplDLhLz_T1gqBWD3s40v7LI65ftx0BoCaIdj2cwc3XnQ4576E4E3r2DtPxRO2aiT17-mw3KjHmZUcCMmNtqBesgxitu4kTmMrIKwPBaD_NJv_808LQFD7_ZBMrTvUM5W_pJy0.4j8JLmze9FOYsXeKMc2lk-58uTUmhIevw8ZO6qylD6s&dib_tag=se&keywords=vampire+quest&qid=1718062131&s=digital-text&sprefix=vampire+quest%2Cdigital-text%2C449&sr=1-4" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			<div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b5}/>
					<div className="txtwrp">
						<h4>Book Title: <span>Immortality For Sale</span></h4>
					    <h4>Author: <span className="auth-nam"> Joseph M Davis</span> </h4>
					</div>
					<a href="https://www.amazon.com/Immortality-Sale-Exploration-Identity-Consciousness-ebook/dp/B0D6KVLK9Q/ref=sr_1_2?crid=ZRL0PDUOTWSM&dib=eyJ2IjoiMSJ9.XU4c23LRdb1-xZFkhfQNFpfv19ZBFno5ogLv-6mLKEWZtSxGXYbMhdScnrIU8n_hOuoKkW5-6jTCXSCFnNy6jcHlXB6k5wVezi7nJitxWZx_aynMPZolegd1gwUEYcfWW9UMO3TYDr0ehEbe17egGrGwoyPr9pgs8IX4FTxDD6wp2bxtLT6oCjeC7a0Cdjv9b8s50BU9Y3LDqudoFbilvkORi3ydb1OvD1YVt8kSXPU.UBhIvB_ERr_wMtm6AXwxLAHouGapzgzJfKon6NChzKY&dib_tag=se&keywords=book+by+joseph+m+davis&qid=1718035971&s=books&sprefix=book+by+joseph+m+dav%2Cstripbooks%2C273&sr=1-2" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			<div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b6}/>
					<div className="txtwrp">
						<h4>Book Title: <span>Martial Tai Chi</span></h4>
					    <h4>Author: <span className="auth-nam"> Marlon Pilossoph</span> </h4>
					</div>
					<a href="https://www.amazon.com/Martial-Tai-Chi-Cheng-Style-ebook/dp/B0D2BQPC5Q/ref=sr_1_1?crid=XM8H5G4I8PWL&dib=eyJ2IjoiMSJ9.OfSvIGl3Kf4WCMev5YACCyU1eyAXSWKHrfxDO91u2Ls-ovEtR6ucrdH3S4GE9wl-D5_PQjKWUr2u7SJxENLD5hyCHpDn2M7CzU3kASu-azaUqUYYZpBM3b9zokpa5j756A0fGzWrgi38dtuVnXpPYJ4DU-beBJXY25pa1iS-Wq6Npn7Kqon00NaQy9Vvl7a0LayqI_69tSqDeRvSOHOHERzJWIhPt2_9bhmSa60GxhE.AsyXfBl4D27Wx4kClt7tq93nzN8GdLgcMt8w31YCuGk&dib_tag=se&keywords=Martial+Tai+Chi&qid=1720822341&s=books&sprefix=martial+tai+chi%2Cstripbooks-intl-ship%2C219&sr=1-1" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
		    {/* <div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b7}/>
					<div className="txtwrp">
						<h4>Book Title: <span>Bridges Across Time</span></h4>
					    <h4>Author: <span className="auth-nam"> Linda Kaye</span> </h4>
					</div>
					<a href="https://www.amazon.com/Bridges-Across-Time-Resilience-Strength-ebook/dp/B0D1P25LHP/ref=sr_1_1?dib=eyJ2IjoiMSJ9.OpYhIF3hFMWTPtWxbX7D3EWiS-1EXGRRw97gooPJi3UP5-JqEAqSu8vJgq4GsnxpzynYGmcQi071eC6TYYe5vHai4u1fIFSiF2wHYn1aFoDBRkmvG59oYpBYI5CE6YgJEgnn4d2bPfy8XHoSFutZzL4vKmLZKgnYnDnuxD24wHVc02m3lCBjf9N7_u7Utf6HNjesUGnjo8_BfjNgPx99mbX7jp1ZT7kgXOPXFJk3LFY.5cxpWr7QGgPrRS1ZN4sjogG_1P7ThWrYVuaL9vgsrB8&dib_tag=se&keywords=bridges+across+time+by+linda+kaye&qid=1717455183&sr=8-1" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div> */}
		    <div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b8}/>
					<div className="txtwrp">
						<h4>Book Title: <span>Belief Drives Everything</span></h4>
					    <h4>Author: <span className="auth-nam"> Randi Konikoff</span> </h4>
					</div>
					<a href="https://www.amazon.com/Belief-Drives-Everything-Randi-Konikoff/dp/B0D51F18CC/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.LhANbfAGlRWZipAL9MpjvFepixkkcKgoV93ca_YaoNLZk0H0eiGM_HsXjfAgkorv.oYdsgeZrflNCC3qaNJuNhe_FG02Wsn0RzH8wppUEUcw&qid=1716572489&sr=8-1" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			
			<div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b9}/>
					<div className="txtwrp">
						<h4>Book Title: <span>Endless Roads Ahead</span></h4>
					    <h4>Author: <span className="auth-nam"> Courtney Mullen Smith</span> </h4>
					</div>
					<a href="https://www.amazon.com/Endless-Roads-Ahead-Courtney-Mullen-ebook/dp/B0D5VXM31H/ref=sr_1_1?crid=2QM6G1Y8J2TN7&dib=eyJ2IjoiMSJ9.n8uPl5jnvlP2wat5YV0RH9QVRUzVm5ZiGkUSih2t3l2A5XzjUDc7v3slxntyzjlFILjG7zGaiFN8yRWIDTHlDA.YF5Ve4dMiU1UwFWKM0OuGgX9i4J7mu68NftgimmZ7GA&dib_tag=se&keywords=endless+roads+ahead+by+courtney+mullen+smith&qid=1717432334&sprefix=endless+roads+ahead+by+courtney+mullen+smith%2Caps%2C234&sr=8-1" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			
			<div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b10}/>
					<div className="txtwrp">
						<h4>Book Title: <span>Free To Be Me</span></h4>
					    <h4>Author: <span className="auth-nam"> Steve Chua</span> </h4>
					</div>
					<a href="https://www.amazon.com/Free-Be-Me-Unlocking-Created/dp/B0C6P2S84Y/ref=sr_1_1?crid=7Z80MXK6S2OV&keywords=Steve+Chua&qid=1695231928&s=books&sprefix=steve+ch%2Cstripbooks-intl-ship%2C333&sr=1-1" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>

			<div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b11}/>
					<div className="txtwrp">
						<h4>Book Title: <span>Scrubs To Suits</span></h4>
					    <h4>Author: <span className="auth-nam">Gwenette Boddie</span> </h4>
					</div>
					<a href="https://www.amazon.com/Scrubs-Suits-successfully-launching-business-ebook/dp/B0B3SFP2TM/ref=sr_1_1?crid=EYNACCZGG6Z0&keywords=Scrub+to+suits&qid=1695231749&s=books&sprefix=scrub+to+sui%2Cstripbooks-intl-ship%2C331&sr=1-1" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			<div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b12}/>
					<div className="txtwrp">
						<h4>Book Title: <span>Roller Coaster</span></h4>
					    <h4>Author: <span className="auth-nam">Carroll Morgan</span> </h4>
					</div>
					<a href="https://www.amazon.com/Roller-Coaster-Caregiver-Carroll-Morgan-ebook/dp/B0CQWLL812/ref=sr_1_8?crid=IJQXCWEHN3LN&dib=eyJ2IjoiMSJ9.ZjbqMk5ahETvfBSQr3GypWUiGyb0pZxSj5EEaZzhO_fJaaDa6KGWz9l78l0VGV3Hx0F18cBE_WsZbUjCk-CLerzbas3jWyCHROOvlY4bD3E6zu4RQ9yFU3fqQ9QWov7-lQfHlIm_VQqjtkQh21Ol_nO8EHvJBxXJHENvmFB5E63yAZCP5jBSk7yLB2OScpuHSrkq0EOc5mU6Bi4rCfwbazQe_CCcXsmapToHo4K5nEM.mI7wiYEn_vF6sXahqrL9Sorvr1BV6ss5w6IKPbdToPM&dib_tag=se&keywords=Carroll+Morgan&qid=1715628904&sprefix=carol+morgan%2Caps%2C252&sr=8-8" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			<div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b13}/>
					<div className="txtwrp">
						<h4>Book Title: <span>A Nurse’s Antidote</span></h4>
					    <h4>Author: <span className="auth-nam">Connie Cleaver</span> </h4>
					</div>
					<a href="https://www.amazon.com/Nurses-Antidote-will-God-Cure-ebook/dp/B0CVW7QM8S/ref=sr_1_1?crid=2HZFLKM2BA3JD&dib=eyJ2IjoiMSJ9.x18fmN5drqI4Zq8nx7AomZ3W8rME_8zVRDXTNTkomnJRy-gJyFphX3GCLlKzQUmMOh2fN7rXqTs7ibwSp8kShCug23GfVH6w9Qli9STyn-QaN7fkYA2Hejk8ykirEMTbFc2mDVf8u8ufNsY0vnOmZtW_UTmOyuK-xHYHumOjZ9cDEVhQBz-uSIiituEDv33S8oMdl0gkSQSXhU0jzgfDvYuAoiO9UgiPV0f625emTtc.UvwNEdh6ko9rrAeuJqv3Tr-SXj4vd4UAKtvCoLTmpd8&dib_tag=se&keywords=A+Nurse%E2%80%99s+Antidote&qid=1715628960&sprefix=carol+morgan%2Caps%2C270&sr=8-1" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			<div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b14}/>
					<div className="txtwrp">
						<h4>Book Title: <span>A Collection of poems</span></h4>
					    <h4>Author: <span className="auth-nam">Dr Nicholette Spring</span> </h4>
					</div>
					<a href="https://www.amazon.com/Collection-Poems-Vincy-Lifestyle/dp/B0CVTJVNM3/ref=sr_1_2?crid=1F4879XWT6JZJ&dib=eyJ2IjoiMSJ9.vgyRCmPQI5UJ4AveLTdToQH9gFClfTjm_Fj--jdAFEU.mwSSyGVO22yQURXuPXyIflyez134vsRog7ez9WpKapY&dib_tag=se&keywords=Dr+Nicholette+Spring&qid=1715629207&sprefix=dr+nicholette+spring%2Caps%2C270&sr=8-2" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			<div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b15}/>
					<div className="txtwrp">
						<h4>Book Title: <span>Benny’s Gerbil Purple</span></h4>
					    <h4>Author: <span className="auth-nam">Lisa Barefoot </span> </h4>
					</div>
					<a href="https://www.amazon.com/Bennys-Gerbil-Purple-Childrens-picture/dp/B0CY8RCFNV/ref=sr_1_1?crid=1COYH4X6MZUZ8&dib=eyJ2IjoiMSJ9.2rbzEhAlv26eQdLt_B6zZNOfk0ihypMrZLCLjAnbIa6IKwsmJxx53HGmxqBu0vsk2596OnLgx1puOGmxQ0mETpxMl2zTs01ADV6vCjsOO3sTZmxeLVb9m7Wk2fIRGDQAALJY1YHsbjlcSrJDJk_H48qMqc4bW16vvNkFPJvbSzDLXE8hMiuATNcrxQIr8xSxQ6p8gT4dP1WRqQZx0AQJtScmCuulYxPVQmsUjAfZ738.1UZmOnm5_29pcuKUcyXcvrJCYq4nw1QgeeN5GjaB2Gw&dib_tag=se&keywords=Lisa+Barefoot&qid=1715629276&sprefix=dr+nicholette+spring%2Caps%2C290&sr=8-1" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			<div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b16}/>
					<div className="txtwrp">
						<h4>Book Title: <span>Just Passing Through</span></h4>
					    <h4>Author: <span className="auth-nam">Freda Ann Butler </span> </h4>
					</div>
					<a href="https://www.amazon.com/Just-Passing-Through-Generations-Affected/dp/B0CZGFBVMK/ref=sr_1_3?crid=19T1V7DM90L8O&dib=eyJ2IjoiMSJ9.kvC77DzIPWP953ShqwPkuJRLQwwnPMl80zUcb965vtUlYJYLuKL9o2jQ4AbR1gAQOXu-SSeJtGcF9ARbAlVTDRzPyOHdojstURQ1WBHrUlCPCa6z4_5O4Yg-Z5PJ6gmnXryBHjL_W4fWJkctmsEusGF0LQnmnl0Yw5le58jK2jNeOOApmSCrAo8lgSr0x_7BpOLSbotMsg5v2121RNNnhmja6McG2RtY9jdoYukUI9k.K9yD92EMJErCxemp0R38SCny7oKFlblk3cqBzPVz--s&dib_tag=se&keywords=Just+Passing+Through&qid=1715629349&sprefix=freda+ann+butler%2Caps%2C304&sr=8-3" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			{/* <div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b17}/>
					<div className="txtwrp">
						<h4>Book Title: <span>Who is the Side Chick</span></h4>
					    <h4>Author: <span className="auth-nam">Mary P Dilworth </span> </h4>
					</div>
					<a href="javascript:;" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div> */}
			<div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b18}/>
					<div className="txtwrp">
						<h4>Book Title: <span>The Return of a King</span></h4>
					    <h4>Author: <span className="auth-nam">Rosemary Kahuki</span> </h4>
					</div>
					<a href="https://www.amazon.com/Return-King-Jesus-Christ-Son-ebook/dp/B0CW1CHML6/ref=sr_1_3?crid=1M4UWMRHPER5J&dib=eyJ2IjoiMSJ9.qT3lrvqnycmWBJ7OvtRGEWh_6sS_2cbXl5RFJJQt7XjGjHj071QN20LucGBJIEps.tGYk9ARZ26p5_CJvxH_DNir45nhH8XIngLoQvBikDVs&dib_tag=se&keywords=Kahuki&qid=1715629910&s=digital-text&sprefix=kahuki%2Cdigital-text%2C249&sr=1-3" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			<div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b19}/>
					<div className="txtwrp">
						<h4>Book Title: <span>From Then to Now</span></h4>
					    <h4>Author: <span className="auth-nam">Welcome June</span> </h4>
					</div>
					<a href="https://www.amazon.com/Then-Now-Religious-Spiritual-Journal-ebook/dp/B0D3LY7P7Z/ref=sr_1_2?crid=1PMW916HQYPRN&dib=eyJ2IjoiMSJ9.uf9FYHoHdiWpTwfczdf_r09voPELtFEk7zGWLNXAiMakjFGjIMeL38_0kZAY-xFvpt-tz1QRBm_0HWoEIVgcKLx_ATsNk8bMFeGrhkb0THvMDwPXvZA-5zEdzN_1iiA5Gj9GmDmZq97MeOhyjCVFiGUSLLPvdSbadgfjO2iE-WR-W_q0mfE4aBRLbZOBD77_rRpGekseGwst52TowckQ-FFC4A4NDb3PdMq_m2LAssc.s6qWjP0_78a1_4GxtdgDTOwR55S2V2qh4uV1cTbktY8&dib_tag=se&keywords=Welcome+June&qid=1715629969&s=digital-text&sprefix=welcome+june%2Cdigital-text%2C240&sr=1-2" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			<div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b20}/>
					<div className="txtwrp">
						<h4>Book Title: <span>SECRETS OF THE RABBI'S MAFIA</span></h4>
					    <h4>Author: <span className="auth-nam">IRV SEGAL</span> </h4>
					</div>
					<a href="https://www.amazon.com/SECRETS-RABBIS-MAFIA-Mysterious-Suspenseful-ebook/dp/B0BYTJXVRM/ref=sr_1_1?crid=3S5C4N4CV692G&keywords=Irv+Segal&qid=1695231799&s=books&sprefix=irv+seg,stripbooks-intl-ship,318&sr=1-1" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			<div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b21}/>
					<div className="txtwrp">
						<h4>Book Title: <span>SCRUBS TO SUITS 2 RICHES</span></h4>
					    <h4>Author: <span className="auth-nam"> Gwenette Boddie</span> </h4>
					</div>
					<a href="https://www.amazon.com/SCRUBS-SUITS-RICHES-Scared-Money-ebook/dp/B0B8Q6TNXP/ref=sr_1_2?crid=EYNACCZGG6Z0&keywords=Scrub+to+suits&qid=1695231784&s=books&sprefix=scrub+to+sui%2Cstripbooks-intl-ship%2C331&sr=1-2" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			<div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b22}/>
					<div className="txtwrp">
						<h4>Book Title: <span>How to earn $100K driving for Rideshare</span></h4>
					    <h4>Author: <span className="auth-nam">Dr. Roland Stanford</span> </h4>
					</div>
					<a href="https://www.amazon.com/How-earn-100K-driving-Rideshare-ebook/dp/B0BS4DG848/ref=sr_1_2?crid=2RN244XJP54CE&keywords=How+to+earn+%24100k&qid=1695231850&s=books&sprefix=how+to+earn+100%2Cstripbooks-intl-ship%2C337&sr=1-2" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			<div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b23}/>
					<div className="txtwrp">
						<h4>Book Title: <span>MY JOURNEY WITH STAGE IV RENAL CELL CARCINOMA</span></h4>
					    <h4>Author: <span className="auth-nam"> JOEL STERN</span> </h4>
					</div>
					<a href="https://www.amazon.com/JOURNEY-STAGE-RENAL-CELL-CARCINOMA/dp/B0BS9GLR18/ref=sr_1_1?crid=1YSA4HS3AQGE8&keywords=Joel+Stern&qid=1695231904&s=books&sprefix=joel+ste%2Cstripbooks-intl-ship%2C327&sr=1-1" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			
			<div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b24}/>
					<div className="txtwrp">
						<h4>Book Title: <span>I’m Faithful to your man</span></h4>
					    <h4>Author: <span className="auth-nam">Connie Cleaver</span> </h4>
					</div>
					<a href="https://www.amazon.com/Faithful-Your-Man-Connie-Cleaver-ebook/dp/B0CXJRPM3T/ref=sr_1_2?crid=24JMP9OVT973Z&dib=eyJ2IjoiMSJ9.neEGRjWVtURyncwJI0HA0BT--CxP0WK26dCMySH05i4.Q9bH_GoeEbggP5H6w64WyijipSk_YGkR8W-qn0WdAKY&dib_tag=se&keywords=Connie+Cleaver&qid=1715629147&sprefix=i+m+faithful+to+your+man%2Caps%2C295&sr=8-2" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			<div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b25}/>
					<div className="txtwrp">
						<h4>Book Title: <span>Deep pain that opened my eyed</span></h4>
					    <h4>Author: <span className="auth-nam">Mary P Dilworth </span> </h4>
					</div>
					<a href="https://www.amazon.com/Deep-Pain-That-Open-Eyes-ebook/dp/B0CQQ7D3MF/ref=sr_1_1?dib=eyJ2IjoiMSJ9.-yjHOPaZvp053cLhrxJSCm5ypXU-0d0SHF13-E6xwjnGjHj071QN20LucGBJIEps.ePEAw8SXFBmzWDu552_DXluSuTzGRq5B__wloC_5DF8&dib_tag=se&qid=1715629483&refinements=p_27%3AMary+P++Dilworth&s=digital-text&sr=1-1&text=Mary+P++Dilworth" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			<div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b26}/>
					<div className="txtwrp">
						<h4>Book Title: <span>Where do we go from here</span></h4>
					    <h4>Author: <span className="auth-nam">Mary P Dilworth </span> </h4>
					</div>
					<a href="https://www.amazon.com/Where-Do-We-Go-Here-ebook/dp/B0CV4KN62S/ref=sr_1_3?crid=NQYRLDO4A6EO&dib=eyJ2IjoiMSJ9.-yjHOPaZvp053cLhrxJSCm5ypXU-0d0SHF13-E6xwjlw3rSuB0Drk2yao113yh7Q.BhvDzqHRHHGIP0wwgyO6Ieh26ctqTAOb17k2-SFonYQ&dib_tag=se&keywords=Mary+P+Dilworth&qid=1715629661&s=digital-text&sprefix=mary+p+dilworth%2Cdigital-text%2C246&sr=1-3" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			<div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b27}/>
					<div className="txtwrp">
						<h4>Book Title: <span>Blessed Broken and Multiplied Revealed</span></h4>
					    <h4>Author: <span className="auth-nam">John H Pullen </span> </h4>
					</div>
					<a href="https://www.amazon.com/Blessed-Broken-Multiplied-Revealed-Pullen-ebook/dp/B0CTB41DJD/ref=sr_1_1?crid=3Q1IN7U95P37Z&dib=eyJ2IjoiMSJ9.5wmDgtf0i50rLL7rZeJ57DxGiyUHiVjnHdqHB9HVSla0SenG_249RY1VFd2b5llV.Kmt5gVT3a7SbnNg0HL32J6-z8T0k6tQSy3i5KT_AJyo&dib_tag=se&keywords=John+H+Pullen&qid=1715629719&s=digital-text&sprefix=mary+p+dilworth%2Cdigital-text%2C234&sr=1-1" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			<div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b28}/>
					<div className="txtwrp">
						<h4>Book Title: <span>What’s That, What’s That</span></h4>
					    <h4>Author: <span className="auth-nam">Lisa Barefoot  </span> </h4>
					</div>
					<a href="https://www.amazon.com/Whats-That-Exploring-World-Emily-ebook/dp/B0CY77MGYH/ref=sr_1_2?crid=17AF2958RC2TD&dib=eyJ2IjoiMSJ9.87NsWrHUoWmLKbRCibQgsB65eX2b7Ukc8vV2_w7L7qJHev15eAsoAdecLCxNojmIDkjyqcFiV-LRNAzyDLpN3DeBV-O-Ed283kUwopROYicuwBYlUU78q5L_oQqpN1EY_KpYNxJwDL0wl5J7-xBQnQ.0_-jXxLNTaqgE0hG1vdukKxj9c1SeLh1Xcsv2B7fgwI&dib_tag=se&keywords=Lisa+Barefoot&qid=1715629777&s=digital-text&sprefix=john+h+pullen%2Cdigital-text%2C235&sr=1-2" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			<div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b29}/>
					<div className="txtwrp">
						<h4>Book Title: <span>Serving Beyond Self</span></h4>
					    <h4>Author: <span className="auth-nam">Arnetta Bradford</span> </h4>
					</div>
					<a href="https://www.amazon.com/Serving-Beyond-Self-Arnetta-Bradford-ebook/dp/B0DC22QV8Z/ref=tmm_kin_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.dNE2v8Ahbu2JnUjNjg1VL121PsM2UmD5Xi0ibg67HufEd00O09s4uTYBZ5i0R-4jnHPfUTw7EFwwoRyQFDYPibWHaj1Cs8ZYNDeUUPCrnRuY4wbrW_85SW-LMAVELIg0TBFRFlwzUhdxunOIa4-tFCcQbM84TU2LO5uOKa-sux0OYCdfisMXXlY04mfOKIrKod1qSUs6u-KKC7V3h1nc7tKIvE9btNQGJLdFB5jJT4c.YW6-UKagjQZr4WiIjYRtKj3FaMMb2xZJwfTvxgDMlFQ&qid=1722961306&sr=1-1" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			<div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b30}/>
					<div className="txtwrp">
						<h4>Book Title: <span>The Beauty Around Us: Enjoying Nature And People</span></h4>
					    <h4>Author: <span className="auth-nam"> Teresa Gwaltney</span> </h4>
					</div>
					<a href="https://www.amazon.com/dp/B0DCTY63R1/ref=tmm_kin_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.PWu4KZPW4Xqj9HEc53VFhA.NeOlVxSbcO3IccQS8mFKJwj3FBzqI4sB2EootzJGZKg&qid=1723485721&sr=1-1" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			<div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b31}/>
					<div className="txtwrp">
						<h4>Book Title: <span>Cultivating Leadership for Sustainable Change</span></h4>
					    <h4>Author: <span className="auth-nam">Dr. Arnold S Cox Sr Ed D</span> </h4>
					</div>
					<a href="https://www.amazon.com/dp/B0DCTG64YW/ref=sr_1_6?crid=2JLQBPZV9JA5Z&dib=eyJ2IjoiMSJ9.HHNnqvDWgn_sEBIoBdufSDtbkFmiCwe_ShLAfpHmtaIiSKxzUYV_0Et06cheqF8xQvWugZyJMyz0bXc0edjOKqsyA-DtpvdPSk1HOyPIloxQ97DZ_Au0B9QhWwZlLoRABHSt0KVNZCOsxY74u4FP1FMzXEaZzSyAs-OiA1eKTl8bEoZEarH6LhRwIpn0jjs_lolSWyJZgqKbLJHhAMCXS8lTf49NCo3pOcpdSb1kcwA.P57FAys1iwJOZ8Q7lyI1YtBu5qSj_RP9KkLevBxNltU&dib_tag=se&keywords=book+by+arnold+cox&qid=1723576686&s=books&sprefix=book+by+arnold%2Cstripbooks%2C698&sr=1-6" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			<div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b32}/>
					<div className="txtwrp">
						<h4>Book Title: <span>Living Life Among Haters</span></h4>
					    <h4>Author: <span className="auth-nam">Valerie White</span> </h4>
					</div>
					<a href="https://www.amazon.com/Living-Life-Among-Haters-Judgement-ebook/dp/B0DF396WZB/ref=sr_1_1?crid=OBU3DF62Z63J&dib=eyJ2IjoiMSJ9.SP3UWLOEbzmlCS03nFynNkZTdxqWuR9Eia7EdmZct7w7ynQREssZXh8Sxgc_sT0vGy36pz8onDhOI9TP4tMi7IURcccscbMd0whkoBS7Puw5jO1BoSlm6zDFlQYOAvJRf01thpYwWeo028qwe3tRXw.rNhJ1ZXdwk0pxKZpqOxBomNtRjSD_oB6CwTaPyYaKjc&dib_tag=se&keywords=living+life+among+haters&qid=1724686444&sprefix=living+life+among+hater%2Caps%2C314&sr=8-1" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			<div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b33}/>
					<div className="txtwrp">
						<h4>Book Title: <span>The Secrets of Istruvale: Part 1</span></h4>
					    <h4>Author: <span className="auth-nam">A.J. Alvarez</span> </h4>
					</div>
					<a href="https://www.amazon.com/Secrets-Istruvale-Part-1-ebook/dp/B0DGZJMMZQ/ref=sr_1_1?crid=KWVA6H3CDMNB&dib=eyJ2IjoiMSJ9.1Iq0lX6J-3GcY7h4amal_A.tBKHOxVS7fgHScsIk_uK7UAbnpi93Ro1oL6oD8FDxCc&dib_tag=se&keywords=the+secrets+of+istruvale&qid=1726507511&sprefix=the+secerets+of+istruvale%2Caps%2C400&sr=8-1" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			<div className="col-md-4">
				<div className="mainwrppp">
					  <img src={b34}/>
					<div className="txtwrp">
						<h4>Book Title: <span>An Unruly Affair</span></h4>
					    <h4>Author: <span className="auth-nam">Lovena Smith</span> </h4>
					</div>
					<a href="https://www.amazon.com/Unruly-Affair-Lovena-Smith-ebook/dp/B0DHV9PLTY/ref=tmm_kin_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.O1jlHRTiv01-lfERftpIAVnpRaqXCbrmlDJw4Rz2VFQ.-xuMjD4RO8Hdhp4CUYzMpJ3ydF2rPZ_wVQ0C3a8v8wA&qid=1727902441&sr=8-1" target="_blank" className="btnwrpp"> Published Books</a>
					
				</div>
			</div>
			
		</div>
	</div>
</section>





        {/* <CustomCategory classNameName="category_section2" />
        <FirstCustomBanner />
        <PublishBook />
        <Testimonial />
        <SecondCustomBanner />
        <CustomPublication />
        <Faq />
        <GetTouch /> */}
      </UserLayout>
    </>
  );
};

export default FeaturedAuthor;
