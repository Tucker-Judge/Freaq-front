

function Footer({languageApp}) {
    console.log(languageApp)
    
    //set language state in app
    
    
    
    return (
        <div className = "footer">

            <div className = "footer-text">
            {/* <p>About us</p> */}
            <p>{translation[languageApp][0]}</p>
            {/* <p>Contact us</p> */}
            <p>{translation[languageApp][1]}</p>

            {/* <p>Careers</p> */}
            <p>{translation[languageApp][2]}</p>

                {/* <p>Put ads on our site!</p> */}
            <p>{translation[languageApp][3]}</p>
            
            </div>
            <div >
                {/* <img src=""/> */}
            </div>
            <div className = "footer-flags">
                <img src = "https://www.worldometers.info/img/flags/small/tn_us-flag.gif"/>
                <img src = "https://www.worldometers.info/img/flags/small/tn_gm-flag.gif"/>
                <img src = "https://www.worldometers.info/img/flags/small/tn_fr-flag.gif" />
                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBrlpOpGNWinBQKknJFAQ2WKmbHVLJ22WgjA&usqp=CAU"/>
                <img src = "https://www.worldometers.info/img/flags/small/tn_us-flag.gif"/>
            
            
            </div>
        </div>
    )
    
}
export default Footer
const translation = {
    "en-US": [
      "About us", "Contact us", "Careers", "Put ads on our site!"
    ],
    "de-DE": [
      "Über uns", "Kontakt", "Karriere", "Werben Sie auf unserer Seite!"
    ],
    "fr-FR": [
      "À propos de nous", "Contactez-nous", "Carrières", "Placez des annonces sur notre site !"
    ],
    "zh-CN": [
      "关于我们", "联系我们", "职业生涯", "在我们的网站上发布广告！"
    ],
    "ja-JP": [
      "私たちについて", "お問い合わせ", "キャリア", "サイトに広告を掲載する！"
    ],
    "pl-PL": [
      "O nas", "Skontaktuj się z nami", "Kariera", "Umieść reklamy na naszej stronie!"
    ]
  };
  